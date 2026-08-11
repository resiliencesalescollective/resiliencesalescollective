const SUPABASE_URL = 'https://efoiwtvtfnbwspesrekp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Qlh9UyJBOb-KVwBPf6Aocg_onp_WBEL';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function requireAuth() {
  const { data: { user } } = await db.auth.getUser();
  if (!user) { window.location.href = 'login.html'; return null; }
  const { data: profile } = await db.from('profiles').select('*').eq('id', user.id).single();
  if (!profile) { await db.auth.signOut(); window.location.href = 'login.html'; return null; }
  return { user, profile };
}

async function signOut() {
  await db.auth.signOut();
  window.location.href = 'login.html';
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + (dateStr.length === 10 ? 'T12:00:00' : ''));
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD',
    minimumFractionDigits: 0, maximumFractionDigits: 0
  }).format(amount || 0);
}

function stageCls(stage) {
  const map = {
    'New Lead': 'new-lead', 'Contacted': 'contacted',
    'Proposal Pitched': 'proposal', 'Closed Won': 'won', 'Closed Lost': 'lost'
  };
  return map[stage] || 'new-lead';
}
