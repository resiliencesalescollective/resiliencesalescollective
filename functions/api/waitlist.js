// Cloudflare Pages Function — POST /api/waitlist
//
// Called by the waitlist form on index.html AFTER the sign-up has already
// been saved to Supabase (that save is untouched and happens client-side,
// same as before). This function's only job is to sync the sign-up into
// Kit (ConvertKit) server-side, so the Kit API key never has to live in
// browser JavaScript.
//
// Contract: this endpoint always responds 200 unless the request itself is
// malformed. A Kit outage or a bad tag/sequence ID must never turn into an
// error the visitor sees — the sign-up already succeeded by the time this
// runs.

const KIT_BASE = 'https://api.kit.com/v4';
const WAITLIST_TAG_ID = '24591090';
const WAITLIST_WELCOME_SEQUENCE_ID = '2928020';

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return json({ ok: false, error: 'Invalid JSON body' }, 400);
  }

  const email = String((body && body.email) || '').trim();
  const first_name = String((body && body.first_name) || '').trim();
  const last_name = String((body && body.last_name) || '').trim();
  const instagram = String((body && body.instagram) || '').trim();

  if (!email) {
    return json({ ok: false, error: 'Missing email' }, 400);
  }

  const apiKey = env.KIT_API_KEY;
  if (!apiKey) {
    // Misconfigured deploy (secret not set) — report it, but still 200 so
    // nothing downstream treats this as a failed sign-up.
    return json({ ok: false, error: 'KIT_API_KEY is not configured' }, 200);
  }

  // Each step is independent — one failing (bad tag ID, Kit downtime, etc.)
  // must not stop the others from being attempted.
  const steps = {};

  try {
    const res = await kitPost(apiKey, `${KIT_BASE}/subscribers`, {
      email_address: email,
      first_name,
      fields: {
        last_name,
        instagram_handle: instagram
      }
    });
    steps.subscriber = await describeResult(res);
  } catch (err) {
    steps.subscriber = `error: ${err.message}`;
  }

  try {
    const res = await kitPost(apiKey, `${KIT_BASE}/tags/${WAITLIST_TAG_ID}/subscribers`, {
      email_address: email
    });
    steps.tag = await describeResult(res);
  } catch (err) {
    steps.tag = `error: ${err.message}`;
  }

  try {
    const res = await kitPost(apiKey, `${KIT_BASE}/sequences/${WAITLIST_WELCOME_SEQUENCE_ID}/subscribers`, {
      email_address: email
    });
    steps.sequence = await describeResult(res);
  } catch (err) {
    steps.sequence = `error: ${err.message}`;
  }

  return json({ ok: true, kit: steps }, 200);
}

function kitPost(apiKey, url, payload) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'X-Kit-Api-Key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
}

async function describeResult(res) {
  if (res.ok) return 'ok';
  let detail = '';
  try { detail = await res.text(); } catch (err) { /* ignore */ }
  return `failed (${res.status})${detail ? ': ' + detail.slice(0, 200) : ''}`;
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
