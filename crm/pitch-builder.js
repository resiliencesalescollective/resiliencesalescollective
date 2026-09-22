// ═══════════════════════════════════════════════════════════
// RSC Pitch Deck Builder — pitch-builder.js
// ═══════════════════════════════════════════════════════════

// ─── Default example data (from design spec) ────────────────
const DEFAULTS = {
  scriptOverrides: {}, // keyed by slide label — lets the presenter edit notes directly
  brandDark: '#14100E',
  brandLight: '#F3EDE3',
  brandAccent: '#A08256',
  headingFont: 'archivo',
  accentFont: 'instrumentserif',
  programName: 'She Sells Academy',
  category: 'the #1 remote sales training community + software for women',
  movement: 'It’s a global female sales movement — and a lifestyle upgrade.',
  proofPoints: 'Over 2,000 women\n25+ countries\nAges 18–60\nWorldwide meetups',
  founderName: 'Shelby Sapp',
  founderStory: 'Shelby went from 3 minimum-wage jobs in college to one of the nation’s leading saleswomen and sales trainers in just 4 years.\nShe led the first all-female sales team to $10 million in sales — in both door-to-door and high-ticket.\nShe saw high-ticket sales as the biggest opportunity for women, went all in, and built the largest all-female high-ticket sales training community in the world.',
  founderPhotoUrl: '',
  roadmapTitle: 'Your 90-Day She Sells Roadmap',
  p1Weeks: 'Weeks 1–3', p1Title: 'Mastering the beginning of the call',
  p1Skills: 'Introductions\nQuestion-based selling\nPreempting objections',
  p1Checks: 'Complete tier 1 training modules\nAttend 3x tier 1 group coaching calls',
  p2Weeks: 'Weeks 3–6', p2Title: 'Mastering the middle of the call',
  p2Skills: 'Transition\nPresenting the offer\nCommitting\nClosing',
  p2Checks: 'Complete tier 2 training modules\nAttend 3x tier 2 group coaching calls',
  p3Weeks: 'Weeks 6–9', p3Title: 'Mastering the end of the call',
  p3Skills: 'Smokescreens\nObjections\nOnboarding\nPipeline & follow-up',
  p3Checks: 'Complete tier 3 training modules\nAttend 3x tier 3 group coaching calls',
  closerTrainingTitle: 'Every Closer Is She Sells Certified',
  closerTrainingIntro: 'Before a single closer ever gets on a call with your leads, they’ve been trained, tested, and certified through Shelby Sapp’s She Sells program — the same training that’s produced some of the top-performing remote closers in the industry.',
  closerTrainingPoints: 'Complete the full She Sells sales training curriculum\nPass a live role-play evaluation with a She Sells coach\nOngoing call reviews and coaching to stay sharp',
  closerTrainingPhotoUrl: '',
  platformName: '‘She Sells Remote’ Training Platform',
  feature1: 'Video training modules',
  feature2: 'Full coaching staff',
  feature3: 'All-women community with in-person masterminds',
  feature4: 'AI + live role plays',
  feature5: 'Evaluation & testing',
  feature6: 'Certification & graduate software',
  showcaseTitle: 'Our software has been trained by Shelby and is powered by YOODLI (used by the biggest companies in the world like Google, Indeed, USB, more)',
  showcaseDesc: 'Here’s what our Yoodli system looks like — it grades you on the criteria for your tier, saves and transcribes your entire conversation, and shows you where you did great and where you can improve. You have unlimited access to this!',
  showcaseImageUrl: '',
  boldClaim: 'She Sells produces the best remote sales reps. Period.',
  promiseTitle: 'You are my mission. My promise is…',
  promise: 'To train you to become the best saleswoman in the world, provide you with job opportunities that will change your life, and build an amazing community of women who support each other every step of the way.\nI know exactly what these high-ticket offers and coaches are looking for — and I’m going to train you to be EXACTLY that, and teach you EXACTLY what to say to them.',
  bonusName: 'She Sells Graduate Software',
  bonusDesc: 'Shelby has gathered the best course and coaching programs in the world across every niche, and built a proprietary software for you to reach them — with the exact scripts and strategies you need to land the exact job you want.',
  bonusExpandedDesc: 'Shelby’s network is obviously huge in the space, and with everyone knowing her as the expert, people always ask her for certified closers. So her team built proprietary software that gives all of her students access to the highest-paying offers in the industry all in one place.',
  bonusPhotoUrl: '',
  bonusPhotoUrl2: '',
  pkg1Name: 'She Sells Remote',
  pkg1Features: 'Entire training platform\nVideo training modules\nWeekly coaching calls\nActive community support & accountability',
  pkg1Price: '$2,997', pkg1Today: '$2,497',
  pkg2Name: 'She Sells Remote+',
  pkg2Features: 'Everything in She Sells Remote\nLive role play\nEvaluation & testing\nCertification & graduation\nShe Sells Graduate Software',
  pkg2Price: '$5,997', pkg2Today: '$5,497',
  closerLine: 'One day, or day one?',
  showTodayPricing: true
};

// ─── Font options ────────────────────────────────────────────
const HEADING_FONTS = {
  archivo: { label: 'Archivo (default)', family: "Archivo, sans-serif" },
  poppins: { label: 'Poppins', family: "Poppins, sans-serif" },
  montserrat: { label: 'Montserrat', family: "Montserrat, sans-serif" },
  spacegrotesk: { label: 'Space Grotesk', family: "'Space Grotesk', sans-serif" },
  inter: { label: 'Inter', family: "Inter, sans-serif" },
  worksans: { label: 'Work Sans', family: "'Work Sans', sans-serif" },
  dmsans: { label: 'DM Sans', family: "'DM Sans', sans-serif" },
  outfit: { label: 'Outfit', family: "Outfit, sans-serif" },
  manrope: { label: 'Manrope', family: "Manrope, sans-serif" },
  raleway: { label: 'Raleway', family: "Raleway, sans-serif" },
  oswald: { label: 'Oswald', family: "Oswald, sans-serif" },
  bebasneue: { label: 'Bebas Neue', family: "'Bebas Neue', sans-serif" }
};

const ACCENT_FONTS = {
  instrumentserif: { label: 'Instrument Serif (default)', family: "'Instrument Serif', serif" },
  playfair: { label: 'Playfair Display', family: "'Playfair Display', serif" },
  cormorant: { label: 'Cormorant', family: "Cormorant, serif" },
  newsreader: { label: 'Newsreader', family: "Newsreader, serif" },
  lora: { label: 'Lora', family: "Lora, serif" },
  librebaskerville: { label: 'Libre Baskerville', family: "'Libre Baskerville', serif" },
  ebgaramond: { label: 'EB Garamond', family: "'EB Garamond', serif" },
  crimsontext: { label: 'Crimson Text', family: "'Crimson Text', serif" },
  cormorantgaramond: { label: 'Cormorant Garamond', family: "'Cormorant Garamond', serif" },
  merriweather: { label: 'Merriweather', family: "Merriweather, serif" }
};

// ─── Form schema ─────────────────────────────────────────────
const FORM_SECTIONS = [
  { num: '00', title: 'Branding', fields: [
    { key: 'brandDark', label: 'Dark background color', type: 'color' },
    { key: 'brandLight', label: 'Light background color', type: 'color' },
    { key: 'brandAccent', label: 'Accent color', type: 'color' },
    { key: 'headingFont', label: 'Main font', type: 'select', options: HEADING_FONTS },
    { key: 'accentFont', label: 'Accent font', type: 'select', options: ACCENT_FONTS }
  ]},
  { num: '01', title: 'The program', open: true, fields: [
    { key: 'programName', label: 'Program name', type: 'input' },
    { key: 'category', label: 'What it is (category)', type: 'textarea', rows: 2, hint: 'Finishes the sentence: “…is more than just …”' },
    { key: 'movement', label: 'The movement line', type: 'textarea', rows: 2 }
  ]},
  { num: '02', title: 'The proof', fields: [
    { key: 'proofPoints', label: 'Proof points — one per line', type: 'textarea', rows: 4 }
  ]},
  { num: '03', title: 'The founder', fields: [
    { key: 'founderName', label: 'Founder name', type: 'input' },
    { key: 'founderStory', label: 'Founder story — 3 beats, one per line', type: 'textarea', rows: 6 },
    { key: 'founderPhotoUrl', label: 'Founder photo', type: 'image', imageId: 'founder' }
  ]},
  { num: '04', title: 'The roadmap', fields: [
    { key: 'roadmapTitle', label: 'Roadmap title', type: 'input' },
    { key: 'p1Weeks', label: 'Phase 1 · weeks', type: 'input' },
    { key: 'p1Title', label: 'Phase 1 · title', type: 'input' },
    { key: 'p1Skills', label: 'Phase 1 · skills (one per line)', type: 'textarea', rows: 3 },
    { key: 'p1Checks', label: 'Phase 1 · checkpoints (one per line)', type: 'textarea', rows: 2 },
    { key: 'p2Weeks', label: 'Phase 2 · weeks', type: 'input' },
    { key: 'p2Title', label: 'Phase 2 · title', type: 'input' },
    { key: 'p2Skills', label: 'Phase 2 · skills (one per line)', type: 'textarea', rows: 3 },
    { key: 'p2Checks', label: 'Phase 2 · checkpoints (one per line)', type: 'textarea', rows: 2 },
    { key: 'p3Weeks', label: 'Phase 3 · weeks', type: 'input' },
    { key: 'p3Title', label: 'Phase 3 · title', type: 'input' },
    { key: 'p3Skills', label: 'Phase 3 · skills (one per line)', type: 'textarea', rows: 3 },
    { key: 'p3Checks', label: 'Phase 3 · checkpoints (one per line)', type: 'textarea', rows: 2 }
  ]},
  { num: '05', title: 'Closer training', fields: [
    { key: 'closerTrainingTitle', label: 'Headline', type: 'input' },
    { key: 'closerTrainingIntro', label: 'Intro line', type: 'textarea', rows: 3 },
    { key: 'closerTrainingPoints', label: 'Certification highlights — one per line', type: 'textarea', rows: 4, hint: 'Each line becomes its own highlight card (works best with 3).' },
    { key: 'closerTrainingPhotoUrl', label: 'Photo', type: 'image', imageId: 'closerTraining' }
  ]},
  { num: '06', title: 'The value stack', fields: [
    { key: 'platformName', label: 'Platform / offer name (revealed first)', type: 'input' },
    { key: 'feature1', label: 'Feature 1', type: 'input' },
    { key: 'feature2', label: 'Feature 2', type: 'input' },
    { key: 'feature3', label: 'Feature 3', type: 'input' },
    { key: 'feature4', label: 'Feature 4', type: 'input' },
    { key: 'feature5', label: 'Feature 5 (revealed after the software showcase)', type: 'input' },
    { key: 'feature6', label: 'Feature 6 — final reveal', type: 'input' }
  ]},
  { num: '07', title: 'Software showcase', fields: [
    { key: 'showcaseTitle', label: 'Showcase intro line', type: 'textarea', rows: 2 },
    { key: 'showcaseDesc', label: 'Showcase description', type: 'textarea', rows: 4 },
    { key: 'showcaseImageUrl', label: 'Software screenshot', type: 'image', imageId: 'showcase' }
  ]},
  { num: '08', title: 'Claim & promise', fields: [
    { key: 'boldClaim', label: 'The bold claim', type: 'textarea', rows: 2 },
    { key: 'promiseTitle', label: 'Promise headline', type: 'input' },
    { key: 'promise', label: 'The promise — one paragraph per line', type: 'textarea', rows: 5 }
  ]},
  { num: '09', title: 'The bonus', fields: [
    { key: 'bonusName', label: 'Bonus asset name', type: 'input' },
    { key: 'bonusDesc', label: 'What it does for her (intro slide, no image)', type: 'textarea', rows: 4 },
    { key: 'bonusExpandedDesc', label: 'The full story (screenshot slide)', type: 'textarea', rows: 4 },
    { key: 'bonusPhotoUrl', label: 'Bonus screenshot — top', type: 'image', imageId: 'bonus' },
    { key: 'bonusPhotoUrl2', label: 'Bonus screenshot — bottom', type: 'image', imageId: 'bonus2' }
  ]},
  { num: '10', title: 'Packages & close', fields: [
    { key: 'pkg1Name', label: 'Package 1 · name', type: 'input' },
    { key: 'pkg1Features', label: 'Package 1 · features (one per line)', type: 'textarea', rows: 4 },
    { key: 'pkg1Price', label: 'Package 1 · price', type: 'input' },
    { key: 'pkg1Today', label: 'Package 1 · today-only price', type: 'input' },
    { key: 'pkg2Name', label: 'Package 2 · name', type: 'input' },
    { key: 'pkg2Features', label: 'Package 2 · features (one per line)', type: 'textarea', rows: 5 },
    { key: 'pkg2Price', label: 'Package 2 · price', type: 'input' },
    { key: 'pkg2Today', label: 'Package 2 · today-only price', type: 'input' },
    { key: 'closerLine', label: 'Closing line', type: 'input' }
  ]}
];

// ─── App state ───────────────────────────────────────────────
const state = {
  view: 'build',
  slideIndex: 0,
  data: { ...DEFAULTS },
  recordId: null,
  userId: null
};

// ─── Utils ──────────────────────────────────────────────────
const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const lines = s => String(s || '').split('\n').map(t => t.trim()).filter(Boolean);

// ─── Slide style constants ───────────────────────────────────
// ─── Color mixing (derives every secondary tint from the 2 brand base colors) ──
function hexToRgb(hex) {
  const h = (hex || '').replace('#', '');
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function mix(hexA, hexB, t) {
  const a = hexToRgb(hexA), b = hexToRgb(hexB);
  return '#' + a.map((v, i) => {
    const c = Math.round(v + (b[i] - v) * t);
    return Math.max(0, Math.min(255, c)).toString(16).padStart(2, '0');
  }).join('');
}

// ─── Style palette (rebuilt per-render from the deck's brand colors/fonts) ──
let S = null;
function buildStyles(d) {
  const dark = d.brandDark || '#14100E';
  const light = d.brandLight || '#F3EDE3';
  const accent = d.brandAccent || '#A08256';
  const heading = (HEADING_FONTS[d.headingFont] || HEADING_FONTS.archivo).family;
  const accentFont = (ACCENT_FONTS[d.accentFont] || ACCENT_FONTS.instrumentserif).family;

  return {
    dark: `width:1920px;height:1080px;box-sizing:border-box;background:${dark};color:${light};font-family:${heading};`,
    ivory: `width:1920px;height:1080px;box-sizing:border-box;background:${light};color:${dark};font-family:${heading};`,
    eyebrow: `font-size:24px;font-weight:700;letter-spacing:0.28em;text-transform:uppercase;color:${accent};`,
    serif: `font-family:${accentFont};font-style:italic;`,
    accent,
    darkC: dark,
    lightC: light,
    mutedOnDark: mix(light, dark, 0.14),
    mutedOnLight: mix(light, dark, 0.615),
    bodyOnLight: mix(light, dark, 0.84),
    hint: mix(light, dark, 0.366),
    checkOld: mix(light, dark, 0.297),
    placeholderBg: mix(light, dark, 0.06),
    cardBorder: mix(light, dark, 0.125),
    divider: mix(light, dark, 0.089),
    headingFont: heading
  };
}

// ─── Slide builders ──────────────────────────────────────────
function slideHook(d) {
  return `<div style="${S.dark}padding:110px 130px;display:flex;flex-direction:column;justify-content:center;gap:44px;">
    <div style="${S.eyebrow}">Let’s get one thing straight</div>
    <div style="font-size:92px;font-weight:900;text-transform:uppercase;line-height:0.98;letter-spacing:-0.01em;">${esc(d.programName)} is more than just</div>
    <div style="${S.serif}font-size:66px;line-height:1.12;color:${S.mutedOnDark};max-width:1500px;">${esc(d.category)}…</div>
  </div>`;
}

function slideMovement(d) {
  return `<div style="${S.dark}padding:110px 130px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:40px;">
    <div style="width:72px;height:5px;background:${S.accent};"></div>
    <div style="${S.serif}font-size:108px;line-height:1.08;max-width:1560px;">${esc(d.movement)}</div>
  </div>`;
}

function slideProof(d) {
  const stats = lines(d.proofPoints);
  return `<div style="${S.ivory}padding:110px 130px;display:flex;flex-direction:column;justify-content:center;gap:60px;">
    <div style="${S.eyebrow}">This is already happening</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:44px 80px;">
      ${stats.map(s => `<div style="border-top:3px solid ${S.darkC};padding-top:26px;font-size:64px;font-weight:900;text-transform:uppercase;line-height:1.02;letter-spacing:-0.01em;">${esc(s)}</div>`).join('')}
    </div>
  </div>`;
}

function slideFounder(d) {
  const storyLines = lines(d.founderStory);
  const photo = d.founderPhotoUrl
    ? `<img src="${esc(d.founderPhotoUrl)}" style="width:100%;height:100%;object-fit:cover;" alt="">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${S.placeholderBg};font-size:28px;font-family:${S.headingFont};color:${S.hint};border-radius:18px;">Founder photo</div>`;
  return `<div style="${S.ivory}padding:90px 110px;display:flex;gap:80px;align-items:center;overflow:hidden;">
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:30px;">
      <div style="${S.eyebrow}">Meet the founder</div>
      <div style="font-size:76px;font-weight:900;text-transform:uppercase;line-height:0.98;">Who is <span style="${S.serif}font-weight:400;text-transform:none;">${esc(d.founderName)}</span>?</div>
      <div style="display:flex;flex-direction:column;gap:20px;">
        ${storyLines.map(l => `<div style="font-size:26px;line-height:1.4;color:${S.bodyOnLight};border-left:4px solid ${S.accent};padding-left:24px;">${esc(l)}</div>`).join('')}
      </div>
    </div>
    <div style="flex:0 0 620px;width:620px;height:780px;border-radius:18px;overflow:hidden;">${photo}</div>
  </div>`;
}

function slideTransition(d) {
  return `<div style="${S.dark}padding:110px 130px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:26px;">
    <div style="${S.serif}font-size:64px;color:${S.mutedOnDark};">So how does</div>
    <div style="font-size:120px;font-weight:900;text-transform:uppercase;line-height:0.98;max-width:1600px;">${esc(d.programName)}</div>
    <div style="${S.serif}font-size:64px;color:${S.accent};">actually work?</div>
  </div>`;
}

function slideRoadmap(d) {
  const phases = [1, 2, 3].map(i => ({
    weeks: esc(d[`p${i}Weeks`]),
    title: esc(d[`p${i}Title`]),
    skills: lines(d[`p${i}Skills`]).map((t, j) => ({ t: esc(t), n: j + 1 })),
    checks: lines(d[`p${i}Checks`]).map(esc)
  }));
  return `<div style="${S.ivory}padding:90px 110px;display:flex;flex-direction:column;gap:50px;">
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div style="${S.eyebrow}">The exact path</div>
      <div style="font-size:72px;font-weight:900;text-transform:uppercase;line-height:1;">${esc(d.roadmapTitle)}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px;flex:1;">
      ${phases.map(p => `
        <div style="background:#FFFFFF;border:1px solid ${S.cardBorder};border-radius:16px;padding:40px 38px;display:flex;flex-direction:column;gap:20px;">
          <div style="font-size:22px;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:${S.accent};">${p.weeks}</div>
          <div style="font-size:36px;font-weight:800;line-height:1.12;">${p.title}</div>
          <div style="display:flex;flex-direction:column;gap:12px;margin-top:6px;">
            ${p.skills.map(sk => `<div style="display:flex;gap:12px;font-size:26px;line-height:1.3;color:${S.bodyOnLight};"><span style="font-weight:800;color:${S.darkC};">${sk.n}.</span><span>${sk.t}</span></div>`).join('')}
          </div>
          <div style="margin-top:auto;border-top:1px solid ${S.divider};padding-top:18px;display:flex;flex-direction:column;gap:10px;">
            ${p.checks.map(c => `<div style="display:flex;gap:10px;font-size:22px;line-height:1.35;color:${S.mutedOnLight};"><span style="color:${S.accent};font-weight:900;">✓</span><span>${c}</span></div>`).join('')}
          </div>
        </div>`).join('')}
    </div>
  </div>`;
}

function slideCloserTraining(d) {
  const points = lines(d.closerTrainingPoints).map(esc);
  const cardBg = mix(S.darkC, S.lightC, 0.07);
  const cardBorder = mix(S.darkC, S.lightC, 0.16);
  const photo = d.closerTrainingPhotoUrl
    ? `<img src="${esc(d.closerTrainingPhotoUrl)}" style="width:100%;height:100%;object-fit:cover;" alt="">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${cardBg};font-size:28px;font-family:${S.headingFont};color:${S.hint};border-radius:18px;">Photo</div>`;
  return `<div style="${S.dark}padding:90px 110px;display:flex;gap:80px;align-items:center;overflow:hidden;">
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:26px;">
      <div style="${S.eyebrow}">Every closer, certified</div>
      <div style="font-size:58px;font-weight:900;text-transform:uppercase;line-height:1.04;">${esc(d.closerTrainingTitle)}</div>
      <div style="${S.serif}font-size:26px;line-height:1.45;color:${S.mutedOnDark};">${esc(d.closerTrainingIntro)}</div>
      ${points.length ? `<div style="display:flex;flex-direction:column;gap:16px;margin-top:6px;">
        ${points.map((p, i) => `
          <div style="background:${cardBg};border:1px solid ${cardBorder};border-radius:12px;padding:20px 24px;display:flex;gap:16px;align-items:baseline;">
            <div style="font-size:17px;font-weight:900;color:${S.accent};flex:none;">0${i + 1}</div>
            <div style="font-size:20px;font-weight:700;line-height:1.3;">${p}</div>
          </div>`).join('')}
      </div>` : ''}
    </div>
    <div style="flex:0 0 620px;width:620px;height:780px;border-radius:18px;overflow:hidden;">${photo}</div>
  </div>`;
}

function slideFeature(fs) {
  return `<div style="${S.ivory}padding:100px 130px;display:flex;gap:100px;align-items:center;">
    <div style="flex:1;display:flex;flex-direction:column;gap:30px;">
      <div style="${S.eyebrow}">Everything you get</div>
      <div style="font-size:80px;font-weight:900;text-transform:uppercase;line-height:0.98;">${fs.title}</div>
    </div>
    <div style="flex:1.1;display:flex;flex-direction:column;gap:26px;">
      ${fs.items.map(it => it.isNew
        ? `<div style="display:flex;align-items:baseline;gap:20px;"><span style="color:${S.accent};font-weight:900;font-size:34px;">→</span><span style="font-size:42px;font-weight:800;line-height:1.2;color:${S.accent};">${it.t}</span></div>`
        : `<div style="display:flex;align-items:baseline;gap:20px;"><span style="color:${S.checkOld};font-weight:900;font-size:34px;">✓</span><span style="font-size:38px;font-weight:600;line-height:1.2;color:${S.mutedOnLight};">${it.t}</span></div>`
      ).join('')}
    </div>
  </div>`;
}

function slideSoftwareShowcase(d) {
  const shot = d.showcaseImageUrl
    ? `<img src="${esc(d.showcaseImageUrl)}" style="width:100%;height:100%;object-fit:contain;border-radius:14px;" alt="">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${S.placeholderBg};font-size:28px;font-family:${S.headingFont};color:${S.hint};border-radius:14px;">Software screenshot</div>`;
  return `<div style="${S.ivory}padding:100px 130px;display:flex;flex-direction:column;gap:40px;">
    <div style="${S.serif}font-size:34px;line-height:1.4;color:${S.bodyOnLight};max-width:1200px;">${esc(d.showcaseTitle)}</div>
    <div style="display:flex;gap:80px;flex:1;align-items:center;">
      <div style="flex:1;height:640px;">${shot}</div>
      <div style="flex:0.8;font-size:28px;line-height:1.5;color:${S.bodyOnLight};">${esc(d.showcaseDesc)}</div>
    </div>
  </div>`;
}

function slideClaim(d) {
  return `<div style="${S.dark}padding:110px 130px;display:flex;flex-direction:column;justify-content:center;gap:44px;">
    <div style="width:72px;height:5px;background:${S.accent};"></div>
    <div style="font-size:116px;font-weight:900;text-transform:uppercase;line-height:0.98;letter-spacing:-0.01em;max-width:1620px;">${esc(d.boldClaim)}</div>
  </div>`;
}

function slidePromise(d) {
  return `<div style="${S.ivory}padding:110px 150px;display:flex;flex-direction:column;justify-content:center;gap:48px;">
    <div style="${S.serif}font-size:76px;line-height:1.1;color:${S.accent};">${esc(d.promiseTitle)}</div>
    <div style="display:flex;flex-direction:column;gap:28px;max-width:1480px;">
      ${lines(d.promise).map(l => `<div style="font-size:36px;line-height:1.5;color:${S.bodyOnLight};">${esc(l)}</div>`).join('')}
    </div>
  </div>`;
}

function slideBonusIntro(d) {
  return `<div style="${S.ivory}padding:110px 150px;display:flex;flex-direction:column;justify-content:center;gap:34px;">
    <div style="${S.eyebrow}">Your unfair advantage</div>
    <div style="font-size:84px;font-weight:900;text-transform:uppercase;line-height:0.98;max-width:1500px;">${esc(d.bonusName)}</div>
    <div style="${S.serif}font-size:40px;line-height:1.5;color:${S.bodyOnLight};max-width:1500px;">${esc(d.bonusDesc)}</div>
  </div>`;
}

function slideBonusShowcase(d) {
  const photoBox = (url, label) => url
    ? `<div style="width:100%;height:100%;background:${S.placeholderBg};border-radius:16px;overflow:hidden;"><img src="${esc(url)}" style="width:100%;height:100%;object-fit:contain;" alt=""></div>`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${S.placeholderBg};font-size:20px;font-family:${S.headingFont};color:${S.hint};border-radius:16px;">${label}</div>`;
  return `<div style="${S.ivory}padding:100px 130px;display:flex;gap:90px;align-items:center;">
    <div style="flex:1;display:flex;flex-direction:column;gap:34px;">
      <div style="${S.eyebrow}">${esc(d.bonusName)}</div>
      <div style="font-size:31px;line-height:1.5;color:${S.bodyOnLight};">${esc(d.bonusExpandedDesc)}</div>
    </div>
    <div style="flex:1;height:760px;display:flex;flex-direction:column;gap:24px;">
      <div style="flex:1;min-height:0;">${photoBox(d.bonusPhotoUrl, 'Bonus screenshot — top')}</div>
      <div style="flex:1;min-height:0;">${photoBox(d.bonusPhotoUrl2, 'Bonus screenshot — bottom')}</div>
    </div>
  </div>`;
}

function slidePackages(d) {
  return `<div style="${S.ivory}padding:90px 130px;display:flex;flex-direction:column;gap:46px;">
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div style="${S.eyebrow}">Choose your path</div>
      <div style="font-size:72px;font-weight:900;text-transform:uppercase;line-height:1;">The packages</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:44px;flex:1;">
      <div style="background:#FFFFFF;border:1px solid ${S.cardBorder};border-radius:18px;padding:50px 48px;display:flex;flex-direction:column;gap:24px;">
        <div style="font-size:38px;font-weight:800;">${esc(d.pkg1Name)}</div>
        <div style="display:flex;flex-direction:column;gap:13px;">
          ${lines(d.pkg1Features).map(f => `<div style="display:flex;gap:12px;font-size:25px;line-height:1.35;color:${S.bodyOnLight};"><span style="color:${S.accent};font-weight:900;">✓</span><span>${esc(f)}</span></div>`).join('')}
        </div>
        <div style="margin-top:auto;font-size:66px;font-weight:900;">${esc(d.pkg1Price)}</div>
      </div>
      <div style="background:${S.darkC};color:${S.lightC};border-radius:18px;padding:50px 48px;display:flex;flex-direction:column;gap:24px;position:relative;">
        <div style="position:absolute;top:26px;right:26px;background:${S.accent};color:${S.lightC};font-size:17px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;border-radius:999px;padding:9px 20px;">Most popular</div>
        <div style="font-size:38px;font-weight:800;">${esc(d.pkg2Name)}</div>
        <div style="display:flex;flex-direction:column;gap:13px;">
          ${lines(d.pkg2Features).map(f => `<div style="display:flex;gap:12px;font-size:25px;line-height:1.35;color:${S.mutedOnDark};"><span style="color:${S.accent};font-weight:900;">✓</span><span>${esc(f)}</span></div>`).join('')}
        </div>
        <div style="margin-top:auto;font-size:66px;font-weight:900;">${esc(d.pkg2Price)}</div>
      </div>
    </div>
  </div>`;
}

function slideDayOne(d) {
  return `<div style="${S.dark}padding:110px 130px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:40px;">
    <div style="${S.serif}font-size:148px;line-height:1.08;max-width:1560px;">${esc(d.closerLine)}</div>
    <div style="width:72px;height:5px;background:${S.accent};"></div>
  </div>`;
}

function slideCloseToday(d) {
  return `<div style="${S.ivory}padding:90px 130px;display:flex;flex-direction:column;gap:46px;">
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div style="${S.eyebrow}">For decision-makers only</div>
      <div style="font-size:72px;font-weight:900;text-transform:uppercase;line-height:1;">Say yes today</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:44px;flex:1;">
      <div style="background:#FFFFFF;border:1px solid ${S.cardBorder};border-radius:18px;padding:50px 48px;display:flex;flex-direction:column;gap:20px;">
        <div style="font-size:38px;font-weight:800;">${esc(d.pkg1Name)}</div>
        <div style="display:flex;flex-direction:column;gap:11px;">
          ${lines(d.pkg1Features).map(f => `<div style="display:flex;gap:12px;font-size:22px;line-height:1.3;color:${S.bodyOnLight};"><span style="color:${S.accent};font-weight:900;">✓</span><span>${esc(f)}</span></div>`).join('')}
        </div>
        <div style="font-size:30px;color:${S.mutedOnLight};margin-top:auto;"><span style="text-decoration:line-through;">${esc(d.pkg1Price)}</span></div>
        <div style="display:flex;align-items:baseline;gap:18px;">
          <span style="font-size:84px;font-weight:900;color:${S.accent};">${esc(d.pkg1Today)}</span>
          <span style="font-size:24px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:${S.darkC};">Today only</span>
        </div>
      </div>
      <div style="background:${S.darkC};color:${S.lightC};border-radius:18px;padding:50px 48px;display:flex;flex-direction:column;gap:20px;">
        <div style="font-size:38px;font-weight:800;">${esc(d.pkg2Name)}</div>
        <div style="display:flex;flex-direction:column;gap:11px;">
          ${lines(d.pkg2Features).map(f => `<div style="display:flex;gap:12px;font-size:22px;line-height:1.3;color:${S.mutedOnDark};"><span style="color:${S.accent};font-weight:900;">✓</span><span>${esc(f)}</span></div>`).join('')}
        </div>
        <div style="font-size:30px;color:${S.hint};margin-top:auto;"><span style="text-decoration:line-through;">${esc(d.pkg2Price)}</span></div>
        <div style="display:flex;align-items:baseline;gap:18px;">
          <span style="font-size:84px;font-weight:900;color:${S.accent};">${esc(d.pkg2Today)}</span>
          <span style="font-size:24px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;">Today only</span>
        </div>
      </div>
    </div>
  </div>`;
}

// ─── Compute slides array ────────────────────────────────────
function computeSlides() {
  const d = state.data;
  S = buildStyles(d);

  const items = [d.platformName, d.feature1, d.feature2, d.feature3, d.feature4, d.feature5, d.feature6]
    .map(t => esc(t)).filter(Boolean);

  const mkItems = upto => items.slice(0, upto).map((t, j) => ({
    t, isNew: j === upto - 1, isOld: j !== upto - 1
  }));

  let featureSlides = items.map((_, i) => ({
    label: `Value ${i + 1}`, title: esc(d.platformName), items: mkItems(i + 1)
  }));
  if (!featureSlides.length) {
    featureSlides = [{ label: 'Value stack', title: esc(d.platformName), items: [] }];
  }

  // Insert the software showcase slide right after the 5th reveal (matches the reference deck)
  const beforeShowcase = featureSlides.slice(0, 5);
  const afterShowcase = featureSlides.slice(5);

  return [
    { label: '01 Hook', html: slideHook(d) },
    { label: '02 Movement', html: slideMovement(d) },
    { label: '03 Proof', html: slideProof(d) },
    { label: '04 Founder', html: slideFounder(d) },
    { label: '05 How It Works', html: slideTransition(d) },
    { label: '06 Roadmap', html: slideRoadmap(d) },
    { label: '07 Closer Training', html: slideCloserTraining(d) },
    ...beforeShowcase.map(fs => ({ label: fs.label, html: slideFeature(fs) })),
    { label: 'Software Showcase', html: slideSoftwareShowcase(d) },
    ...afterShowcase.map(fs => ({ label: fs.label, html: slideFeature(fs) })),
    { label: 'The Claim', html: slideClaim(d) },
    { label: 'The Promise', html: slidePromise(d) },
    { label: 'The Bonus', html: slideBonusIntro(d) },
    { label: 'The Bonus (showcase)', html: slideBonusShowcase(d) },
    { label: 'Packages', html: slidePackages(d) },
    { label: 'Day One', html: slideDayOne(d) },
    ...(d.showTodayPricing !== false ? [{ label: 'Close Today', html: slideCloseToday(d) }] : [])
  ];
}

// ─── The script (single source of truth for both the Script tab
//     and the Presenter Notes window — same wording, same blocks) ──
function computeScript(d) {
  const items = [d.platformName, d.feature1, d.feature2, d.feature3, d.feature4, d.feature5, d.feature6]
    .filter(t => String(t || '').trim());

  // Value-reveal scripts, in position order: [platformName, feature1..feature6].
  // These are RSC's real talk track for each reveal — used when a slide's
  // position matches; falls back to generic phrasing for any extra items.
  const valueScripts = [
    {
      body: `“And how we’re going to take your sales calls from good to the crème de la crème. This is an investment, right?”\n\n“Yes, and we know that, so this strategy is packed with value that reflects that. It’s not just the system that’s the best part, but...”`,
      cue: 'Let her answer “this is an investment, right?” before continuing.'
    },
    {
      body: `“The customized pitch deck and script that we briefly touched on previously, that follows our strict, proven sales call structure. It’s the same structure Shelby uses that consistently brings her in $5 million per month. How’s that for proven? And you’ll have these forever, by the way — a copy of both will be sent over for approval after build out, and those are yours to keep. They become an asset. I always say you can either pay for experience with time or money, so it’s nice because now you get 5 years of top 1% sales experience at your fingertips.”\n\n“Also, we schedule weekly support calls on Monday afternoons or Friday mornings. If we were to get you onboarded, which time would work best for you so I can note it in your account?”`,
      cue: 'Lock in her preferred support-call day on this slide.'
    },
    {
      body: `“Next, a hand-picked closer will be assigned to your account, as I stated before. Fully trained and certified, and vetted thoroughly by myself, so you can ensure the person closing your calls will stop at nothing to get the job done. I only hire closers who will fight for the sale as if it were their own business being presented, as long as the customer is a good fit, of course. Our closers carry the utmost respect for you, your customers, and themselves. The only thing we ask is that you respect our closers and their time by showing up to your weekly support calls, as well as your monthly 1-on-1s, ready to discuss progress and your needs!”`,
      cue: ''
    },
    {
      body: `“And speaking of monthly 1-on-1s, this is where we gather the data from our CRM app — see what’s working well, if anything needs to be elevated, customers’ main pain points for not closing, and much more. Not only so we can tweak the pitch, but so you have that information to work with in case you want to make changes to your offer, refine your target customer, etc. We’re not only here to make money — we’re here to support you and help you scale with the information we collect.”`,
      cue: ''
    },
    {
      body: `“As we’re scaling, we’re receiving an influx of applications, and that can push build-out times. So we want to make sure we can accommodate our clients who want to fast-track the process with a priority build out.”`,
      cue: 'Then say: “Let me show you exactly what this looks like.”'
    },
    {
      body: `“If you’re a perfectionist like myself and you like to be on top of developing information, we also offer daily sales support. You’ll get access to daily communication with your closers and our sales manager as well. I’m definitely not someone who likes to be hands-off when it comes to my baby, so I wanted to make sure I built a system that I would actually want to use. I know some people are like ‘Lord please just do it, take it off my hands!’ But I’m just a little too crazy LOL.”`,
      cue: ''
    },
    {
      body: `“Last but not least with the sales strategy is access to RSC resources. You’ll get the pitch deck and script as discussed, as well as all the information gathered from our custom CRM app — that I personally built out myself too, but we’ll get into that in just a second.”\n\n“I know this seems like a lot — on the backend there’s obviously a lot included in this — but which part so far makes you the most excited about moving forward? Is it the custom pitch deck and script, is it the sales support, the strategy as a whole? Which one is lighting you up the most?”\n\n“Before we move forward, do you have any questions for me specifically about any of this before I jump into the next thing?”\n\n“Okay, perfect! I know this seems like a lot on the backend, and yes, it is! Our team has spent literally hundreds of thousands of dollars, and works around the clock to make this system the most direct path to success for you. It IS worth it, though, because...”`,
      cue: 'Let her answer both questions fully before advancing — this is a key buy-in checkpoint.'
    }
  ];

  const featureItems = items.length ? items : ['what’s included'];
  const featureBlocks = featureItems.map((t, i) => {
    const scripted = valueScripts[i];
    return {
      slides: [i === 0 && items.length ? 'Value 1' : `Value ${i + 1}`],
      heading: `Slide · Value reveal ${i + 1}`,
      body: scripted ? scripted.body : `Reveal “${esc(t)}.” Name it, explain what it does for THEM, and tie it back to their discovery answers. Never dump the whole list at once.`,
      cue: scripted ? scripted.cue : ''
    };
  });
  if (!items.length) featureBlocks[0].slides = ['Value stack'];
  const beforeBlocks = featureBlocks.slice(0, 5);
  const afterBlocks = featureBlocks.slice(5);

  const script = [
    {
      slides: ['01 Hook'],
      heading: 'Slide 1 · The hook',
      body: `“Before I show you, I just always like to preface that, yes, ${esc(d.programName)} is the number one high-ticket sales agency for female founders, but that’s not why I’m excited to show you about it, or even why I’m on this call with you right now.”`,
      cue: ''
    },
    {
      slides: ['02 Movement'],
      heading: 'Slide 2 · The movement',
      body: `“It’s because this isn’t just some sales agency; it’s a premium partnership and scaling vehicle that actually gives women founders the opportunity to focus on elevating their business and scaling to new levels, while having a rock solid, borderline psychotic sales team behind them with the same end goal: to create a better life for women who are ready to reach their full potential. I’ll show you here...”`,
      cue: ''
    },
    {
      slides: ['03 Proof'],
      heading: 'Slide 3 · The proof',
      body: `“This is what’s already happening in ${esc(d.programName)}. We’ve closed over 800k in deals thus far over five states, which soon will be nationwide. We’re currently in the process of scaling as well, which is just an insane dream come true!\n\nBeing able to scale businesses is one of the very reasons I created ${esc(d.programName)}. As women, we were literally created to create and grow — to elevate. Some of us do that by creating a family, helping them grow. And some of us take the path of creating a different type of baby: a business.\n\nWe’ve personally helped women founders nationwide from the age of 18, just starting their journey, all the way to the trend setters, 50–60, who just needed a little help freshening up their strategy. So...”`,
      cue: ''
    },
    {
      slides: ['04 Founder'],
      heading: 'Slide 4 · The founder',
      body: `“Obviously all of this is what makes ${esc(d.programName)} great, but it all started with myself, which you may already know a little bit about — just wanted to give you a quick background recap if not. I always like to know who I’m getting in bed with, ya know what I mean? LOL, so...”\n\n“One thing about me is I’m gonna make sure it’s PERFECT. And I’m probably gonna crash out if it’s not, until it gets reeled in LOL. But...”`,
      cue: 'Read the slide as you talk through it.'
    },
    {
      slides: ['05 How It Works'],
      heading: 'Slide 5 · How it works',
      body: `“But I’m sure you’re wondering: how does ${esc(d.programName)} work? How do we build the strategy, everything like that, right?”\n\n“Really quick — obviously you’ve seen some of my videos, what do you already know about ${esc(d.programName)}? I can kind of fill in the gaps from there.”\n\n“Exactly, you’re right! Once you’re on board, we’ll get all the information we need from you to build out a fully customized sales strategy and pitch, including a pitch deck and script, assessed, revised, and approved by myself. After approval from both myself and you, a handpicked closer will be assigned to your account, trained, tested, before their booking link goes live for your sales calls.”\n\n“The biggest thing with this is that it isn’t just the best sales opportunity, but it also represents freedom, because you’ll be gaining back so much time to invest in other areas of your business.”\n\n“This was huge for me because six months ago I was jumping on every single sales call myself. Now I’ll jump on one here or there, especially if it’s one I specifically value. But my girls cover most of them now, and that gives me so much more time to focus on the details of the strategy, build new features in our app, meet with investors — the things that actually elevate the business.”\n\n“The biggest thing I’d recommend thinking about when deciding who helps you scale is making sure you’re working with a company that has every bell and whistle checked and has thoroughly built out every strategy and tool to be successful. I’m sure you want to contract a company that already has all the kinks worked out, right? LOL”\n\n“Right! That’s why I’m so proud of what we’ve built here. And to give you a better idea of the timeline...”`,
      cue: 'Let her answer both discovery questions before moving on.'
    },
    {
      slides: ['06 Roadmap'],
      heading: 'Slide 6 · The roadmap',
      body: `“This is your 90-day roadmap. It’s more of a 70-day roadmap, depending on what works best for you, but we’re not just going to build you a pitch deck and throw your closer to the wolves. No — that’s what most sales agencies do, and that’s why they’ll never be us LOL.”\n\n“I have put every blood, sweat, and tear into this process, and excuse my French, but it’s a goddamn homerun! Weeks 1 through 3 are about perfecting the foundation of the sales strategy. Once approved and launched, your closer begins taking your sales calls, and from there we start mastering the process in weeks 4–6. We’ll utilize the data from our custom-built CRM app, assess if we need to enhance any part of the process, and begin weekly support calls. Once everything is dialed in, we begin monthly check-ins presenting the data, showing progress, and scaling your sales team as needed.”\n\n“But how do you feel about the process? Does it make you a little nervous? Does it make you excited? Tell me what’s going through your head.”\n\n“Yeah, that was me too setting up our own process. It’s always exciting/uncomfortable when you’re making big foundational changes like this. I’m sitting here telling you I know how to solve your problems, but the truth is I’m not the one closing your deals — and that’s the important part. When I decided it was time to hire closers to run our sales calls, I asked myself: how can I guarantee they’re properly trained, and hungry enough for success to carry the badge of resilience when it comes to closing deals? Well... only if I knew they were so devoted to perfecting their skill of high-ticket sales that they’d personally drop $10K to be trained by the greatest sales psycho of all time.”`,
      cue: 'Let her answer, then reflect it back before transitioning to closer training.'
    },
    {
      slides: ['07 Closer Training'],
      heading: 'Slide 7 · Closer training',
      body: `“Shelby Sapp herself — which I’m sure you’ve come across when doing your research on contracting remote closers, right? Yeah, she’s absolutely unreal. I’ve always been someone committed to continuing education, and after seeing so many of her reels that made me understand sales on a deeper level, I decided to actually go through the course myself. I KNEW it was going to be good, but I had no idea the level of genius I had just gained access to.”\n\n“That’s why when I started planning the scale of ${esc(d.programName)}, it was a no-brainer to hire closers who had learned the framework and psychology to become certified by the Harvard Law School of the sales academies. Not to mention we have access to all of the upgraded material, the community, and continuing education through seminars and meetups — so continuing education and evolution is a core value in the company. So you can guarantee our closers are nothing short of the best of the best! I’ve noted a few key points of knowledge that set us apart.”`,
      cue: 'Read the certification highlights on the slide, then: “Obviously this is our bread and butter...”'
    },
    ...beforeBlocks,
    {
      slides: ['Software Showcase'],
      heading: 'Slide · Software showcase',
      body: `“I personally have been building out a pitch deck builder application and training our AI system to take the information gathered from onboarding and create a fully customized deck that strictly follows our sales call structure. As you can see, your information is inputted on the left in each section. The AI then utilizes your brand kit to create a presentable set of slides, pitching your offer to perfection. This takes days off of the process, letting us focus on the pitch script, and allowing your closer to be trained quicker and more efficiently. This isn’t some ChatGPT BS — this software is used by some of the biggest names in the game, like Google, Salesforce, and more.”`,
      cue: 'Let this software be its own proof point — don’t rush it.'
    },
    ...afterBlocks,
    {
      slides: ['The Claim'],
      heading: 'Slide · The claim',
      body: `“${esc(d.programName)} produces the crème de la crème of sales strategies, PERIOD! It is LITERALLY not even close. But let me ask you — all this being said, do you see yourself reaching the point after the build out, your closers are trained, and we’re closing deal after deal, that you have more free time as a business owner, and actually get to scale your business instead of working tirelessly to close customers?”`,
      cue: 'Let her answer. Then: “I see that for you! And it’s 100% in your future if you want it to be, right?”'
    },
    {
      slides: ['The Promise'],
      heading: 'Slide · The promise',
      body: `“As an empath who loves words of affirmation, I wanted to add a little letter into this presentation for you. It says...”\n\n[Read the letter on the slide]\n\n“You can trust that my integrity is unshakeable when it comes to only allowing the best people on my team. This goes for clients as well. I can never promise success to someone who isn’t 10 toes down for their business. Just from our time on this call, I feel that you’re aligned with our values and match our energy, and I truly believe we could build a rock-solid partnership. But before I show you the packages — do you personally feel aligned with our core values and our drive, or is there anything you’re iffy on?”`,
      cue: 'This is the emotional peak of the call. Slow down and mean it.'
    },
    {
      slides: ['The Bonus'],
      heading: 'Slide · The bonus',
      body: `“Awesome, I love it! And I agree, I think you’re going to be super excited to see the process, and you’re going to love the girls as well!”\n\n“I know that was a little more heartfelt, but are you ready to see the most revolutionary part of the whole offer?”\n\n“This is the CRM Software! My network is huge in the high-ticket closing space, so I inquired with some of the top closers in my circle about what would enhance their process when it comes to customer relationship management. I took all of their feedback, as well as my personal preferences from the top-name CRM platforms, and built out a proprietary software that not only collects the data, but tells you what to do with it to pivot and enhance where needed. I’ll show you what it looks like.”`,
      cue: 'Let her answer before revealing the CRM.'
    },
    {
      slides: ['The Bonus (showcase)'],
      heading: 'Slide · The bonus, in action',
      body: `Walk the CRM software screen. Let it speak for itself — this is the “wow” moment of the call.`,
      cue: ''
    },
    {
      slides: ['Packages'],
      heading: 'Slide · Packages',
      body: `“So on the left is the base ${esc(d.pkg1Name)} package. Includes... Signing up would be ${esc(d.pkg1Price)}.”\n\n“And if you’re wanting to go a step further with our ${esc(d.pkg2Name)} package — also getting a priority build out, 40 hours worth of closing per week, as well as daily support — then it’s ${esc(d.pkg2Price)}.”\n\n“But before we really dive into that...”`,
      cue: 'Slight pause after each price. Let it land.'
    },
    {
      slides: ['Day One'],
      heading: 'Slide · The close',
      body: `“We’ve been doing this for a while now. We genuinely have the best sales strategy and build-out process, the #1 closing team, and full support from our closers and coaches — so there’s very high demand to join, which is why we often have waitlists for the agency. You applied at a good time!”\n\n“But I like to reward the women who are go-getters and have a deep sense of intrinsic motivation — nothing will stop them from being successful. I bring this up because you remind me of that type of woman. In order to sign these women as clients first, since there’s only so much work we can take on right now, I like to reward the women who make decisions and commit to them — so I offer discounts on the call! This is what the discounts look like...”`,
      cue: ''
    },
    {
      slides: ['Close Today'],
      heading: 'Slide · Close today pricing',
      body: `“Just because beginning the onboarding is easier for both of us to get started on the call, I’m willing to take $500 off each package! I know you mentioned the priority build out is important to you, so I believe the ${esc(d.pkg2Name)} will be best — and on this call, you’d be getting all of the priority features for the price of the starter package.”\n\n“So we can get you started on onboarding today, begin building your profile, and schedule your weekly support calls so we’re immediately able to jump in and get the process rolling — giving you your free time back sooner so you can focus on what’s important. Literally right now, for just ${esc(d.pkg1Today)}.”`,
      cue: 'Then stop talking. First one to speak loses.'
    }
  ];

  // Apply any manual edits made directly in Presenter Notes, keyed by slide label.
  const overrides = d.scriptOverrides || {};
  return script.map(block => {
    const o = overrides[block.slides[0]];
    if (!o) return block;
    return { ...block, body: o.body != null ? o.body : block.body, cue: o.cue != null ? o.cue : block.cue };
  });
}

// ─── Presenter notes window ─────────────────────────────────────
// We've seen different Safari privacy configurations silently break
// different single sync mechanisms (window.opener property access,
// BroadcastChannel lag on a backgrounded tab). So every message goes out
// on every channel we have, each wrapped so one failing can't block the
// others — as long as one gets through, the two windows stay in sync.
let presenterWin = null;
let presenterChannel = null;
let presenterListenerAttached = false;
let lastNavId = null;

function presenterNavigate(dir) {
  const total = computeSlides().length;
  if (dir === 'next') state.slideIndex = Math.min(state.slideIndex + 1, total - 1);
  else if (dir === 'prev') state.slideIndex = Math.max(state.slideIndex - 1, 0);
  render();
}

// Nav messages arrive redundantly over up to 3 channels (BroadcastChannel,
// postMessage, and a direct call) so that one working channel is enough —
// but that means the same click can arrive 2-3 times. Every message carries
// an id; only the first delivery of a given id actually advances the slide.
function handleNavMessage(data) {
  if (!data || data.type !== 'nav') return;
  if (data.id && data.id === lastNavId) return;
  if (data.id) lastNavId = data.id;
  presenterNavigate(data.dir);
}

let lastOverrideId = null;
function handleSaveOverrideMessage(data) {
  if (!data || data.type !== 'saveOverride') return;
  if (data.id && data.id === lastOverrideId) return;
  if (data.id) lastOverrideId = data.id;
  if (!state.data.scriptOverrides) state.data.scriptOverrides = {};
  state.data.scriptOverrides[data.slideLabel] = { body: data.body, cue: data.cue };
  scheduleSave();
  render();
}

function getPresenterChannel() {
  if (presenterChannel || !state.recordId || typeof BroadcastChannel === 'undefined') return presenterChannel;
  try {
    presenterChannel = new BroadcastChannel('pitch-presenter-' + state.recordId);
    presenterChannel.addEventListener('message', e => {
      if (!e.data) return;
      if (e.data.type === 'ready') broadcastPresenterNotes();
      if (e.data.type === 'nav') handleNavMessage(e.data);
      if (e.data.type === 'saveOverride') handleSaveOverrideMessage(e.data);
    });
  } catch (err) { /* BroadcastChannel unavailable — other channels still work */ }
  return presenterChannel;
}

function ensurePresenterListener() {
  getPresenterChannel();
  if (presenterListenerAttached) return;
  presenterListenerAttached = true;
  window.addEventListener('message', e => {
    if (e.origin !== window.location.origin || !e.data) return;
    if (e.data.type === 'ready') broadcastPresenterNotes();
    if (e.data.type === 'nav') handleNavMessage(e.data);
    if (e.data.type === 'saveOverride') handleSaveOverrideMessage(e.data);
  });
}

function findScriptBlock(script, slideLabel) {
  return script.find(block => block.slides.includes(slideLabel));
}

function broadcastPresenterNotes() {
  const channel = getPresenterChannel();
  const slides = computeSlides();
  const script = computeScript(state.data);
  const i = state.slideIndex;
  const current = slides[i] ? findScriptBlock(script, slides[i].label) : null;
  const next = slides[i + 1] ? findScriptBlock(script, slides[i + 1].label) : null;
  const msg = {
    type: 'update',
    index: i,
    total: slides.length,
    slideLabel: slides[i] ? slides[i].label : '',
    note: current ? current.body : '',
    cue: current ? current.cue : '',
    nextLabel: slides[i + 1] ? slides[i + 1].label : '',
    nextNote: next ? next.body : ''
  };

  if (channel) { try { channel.postMessage(msg); } catch (err) {} }
  if (presenterWin && !presenterWin.closed) {
    try { presenterWin.postMessage(msg, window.location.origin); } catch (err) {}
    try { if (typeof presenterWin.receiveUpdate === 'function') presenterWin.receiveUpdate(msg); } catch (err) {}
  }
}

// ─── Render ──────────────────────────────────────────────────
function render() {
  const slides = computeSlides();
  if (state.slideIndex >= slides.length) state.slideIndex = slides.length - 1;
  if (state.slideIndex < 0) state.slideIndex = 0;

  document.getElementById('programTitle').textContent = state.data.programName || 'Untitled';

  if (state.view === 'build' || state.view === 'present') {
    const stage = document.getElementById('slideStage');
    if (stage) stage.innerHTML = slides[state.slideIndex] ? slides[state.slideIndex].html : '';
  }

  if (state.view === 'build') renderRail(slides);
  if (state.view === 'script') renderScript();

  broadcastPresenterNotes();
}

function renderRail(slides) {
  const rail = document.getElementById('rail');
  if (!rail) return;
  rail.innerHTML = slides.map((s, i) => `
    <div class="pb-thumb ${i === state.slideIndex ? 'active' : ''}" data-index="${i}" title="${s.label}">
      <div class="pb-thumb-content">
        <div class="pb-thumb-inner">${s.html}</div>
      </div>
      <div class="pb-thumb-label">${s.label}</div>
    </div>`).join('');

  rail.querySelectorAll('.pb-thumb').forEach(el => {
    el.addEventListener('click', () => {
      state.slideIndex = parseInt(el.dataset.index, 10);
      render();
    });
  });
}

function renderScript() {
  const el = document.getElementById('scriptContent');
  if (!el) return;
  const d = state.data;
  const script = computeScript(d);

  el.innerHTML = `
    <div style="font-size:13px;font-weight:700;letter-spacing:0.26em;text-transform:uppercase;color:#A08256;margin-bottom:14px;">The talk track</div>
    <h1 style="font-size:52px;font-weight:900;text-transform:uppercase;line-height:1;margin:0 0 10px;font-family:Archivo,sans-serif;">${esc(d.programName)}</h1>
    <p style="font-family:'Instrument Serif',serif;font-style:italic;font-size:24px;color:#6E655C;margin:0 0 56px;">Pitch script — question-based selling, one decision per slide. This same text powers Presenter Notes.</p>
    <div style="display:flex;flex-direction:column;gap:44px;">
      ${script.map(block => `
        <div style="border-top:2px solid #14100E;padding-top:22px;">
          <div style="font-size:12px;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:#A08256;margin-bottom:12px;">${esc(block.heading)}</div>
          <p style="font-size:18px;line-height:1.7;margin:0 0 12px;">${block.body}</p>
          ${block.cue ? `<p style="font-size:15px;line-height:1.6;color:#6E655C;margin:0;font-style:italic;">${block.cue}</p>` : ''}
        </div>`).join('')}
    </div>`;
}

// ─── Deck scaling ────────────────────────────────────────────
function scaleStage() {
  const wrap = document.getElementById('stageWrap');
  const stage = document.getElementById('slideStage');
  if (!wrap || !stage) return;
  const pw = wrap.clientWidth;
  const ph = wrap.clientHeight;
  if (!pw || !ph) return;
  const scale = Math.min(pw / 1920, ph / 1080);
  const scaledW = 1920 * scale;
  const scaledH = 1080 * scale;
  stage.style.transform = `scale(${scale})`;
  stage.style.left = `${(pw - scaledW) / 2}px`;
  stage.style.top = `${(ph - scaledH) / 2}px`;
}

// ─── View switching ──────────────────────────────────────────
function setView(view) {
  state.view = view;

  const formPane = document.getElementById('formPane');
  const deckPane = document.getElementById('deckPane');
  const scriptPane = document.getElementById('scriptPane');
  const rail = document.getElementById('rail');

  formPane.style.display = view === 'build' ? '' : 'none';
  deckPane.style.display = (view === 'build' || view === 'present') ? '' : 'none';
  scriptPane.style.display = view === 'script' ? 'flex' : 'none';
  if (rail) rail.style.display = view === 'build' ? '' : 'none';

  document.getElementById('tabBuild').classList.toggle('active', view === 'build');
  document.getElementById('tabPresent').classList.toggle('active', view === 'present');
  document.getElementById('tabScript').classList.toggle('active', view === 'script');

  render();
  requestAnimationFrame(scaleStage);
}

// ─── Keyboard nav (Present view) ────────────────────────────
let counterTimer = null;

function showCounter() {
  const el = document.getElementById('slideCounter');
  if (!el) return;
  const slides = computeSlides();
  el.textContent = `${state.slideIndex + 1} / ${slides.length}`;
  el.style.opacity = '1';
  clearTimeout(counterTimer);
  counterTimer = setTimeout(() => { el.style.opacity = '0'; }, 2500);
}

function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (state.view !== 'present') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const slides = computeSlides();
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      state.slideIndex = Math.min(state.slideIndex + 1, slides.length - 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      state.slideIndex = Math.max(state.slideIndex - 1, 0);
    } else if (e.key === 'r' || e.key === 'R') {
      state.slideIndex = 0;
    } else {
      return;
    }
    render();
    showCounter();
  });
}

// ─── Undo / redo history ─────────────────────────────────────
let historyStack = [];
let historyIndex = -1;
let historyTimer = null;
let isRestoringHistory = false;
const HISTORY_LIMIT = 50;

function initHistory() {
  historyStack = [{ ...state.data }];
  historyIndex = 0;
  updateHistoryButtons();
}

function snapshotHistory() {
  if (isRestoringHistory) return;
  historyStack = historyStack.slice(0, historyIndex + 1);
  historyStack.push({ ...state.data });
  if (historyStack.length > HISTORY_LIMIT) historyStack.shift();
  historyIndex = historyStack.length - 1;
  updateHistoryButtons();
}

function scheduleHistorySnapshot() {
  if (isRestoringHistory) return;
  clearTimeout(historyTimer);
  historyTimer = setTimeout(snapshotHistory, 600);
}

function restoreHistory(idx) {
  isRestoringHistory = true;
  clearTimeout(historyTimer);
  historyIndex = idx;
  state.data = { ...historyStack[idx] };
  document.getElementById('formContent').innerHTML = buildFormHTML();
  attachFormListeners();
  render();
  scheduleSave();
  updateHistoryButtons();
  isRestoringHistory = false;
}

function undoEdit() { if (historyIndex > 0) restoreHistory(historyIndex - 1); }
function redoEdit() { if (historyIndex < historyStack.length - 1) restoreHistory(historyIndex + 1); }

function updateHistoryButtons() {
  const u = document.getElementById('undoBtn');
  const r = document.getElementById('redoBtn');
  if (u) u.disabled = historyIndex <= 0;
  if (r) r.disabled = historyIndex >= historyStack.length - 1;
}

// ─── Auto-save ───────────────────────────────────────────────
let saveTimer = null;

function setSaveStatus(text, color) {
  const el = document.getElementById('saveStatus');
  if (el) { el.textContent = text; el.style.color = color || '#A79C90'; }
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveRecord, 700);
}

async function saveRecord() {
  if (!state.recordId) return;
  setSaveStatus('Saving…', '#A79C90');
  const d = state.data;
  const { error } = await db.from('pitch_decks').update({
    client_name: d.programName || 'Untitled Pitch',
    script_overrides: JSON.stringify(d.scriptOverrides || {}),
    brand_dark: d.brandDark, brand_light: d.brandLight, brand_accent: d.brandAccent,
    heading_font: d.headingFont, accent_font: d.accentFont,
    program_name: d.programName, category: d.category, movement: d.movement,
    proof_points: d.proofPoints,
    founder_name: d.founderName, founder_story: d.founderStory, founder_photo_url: d.founderPhotoUrl || '',
    roadmap_title: d.roadmapTitle,
    p1_weeks: d.p1Weeks, p1_title: d.p1Title, p1_skills: d.p1Skills, p1_checks: d.p1Checks,
    p2_weeks: d.p2Weeks, p2_title: d.p2Title, p2_skills: d.p2Skills, p2_checks: d.p2Checks,
    p3_weeks: d.p3Weeks, p3_title: d.p3Title, p3_skills: d.p3Skills, p3_checks: d.p3Checks,
    closer_training_title: d.closerTrainingTitle, closer_training_intro: d.closerTrainingIntro, closer_training_points: d.closerTrainingPoints,
    closer_training_photo_url: d.closerTrainingPhotoUrl || '',
    platform_name: d.platformName,
    feature1: d.feature1, feature2: d.feature2, feature3: d.feature3,
    feature4: d.feature4, feature5: d.feature5, feature6: d.feature6,
    showcase_title: d.showcaseTitle, showcase_desc: d.showcaseDesc, showcase_image_url: d.showcaseImageUrl || '',
    bold_claim: d.boldClaim, promise_title: d.promiseTitle, promise: d.promise,
    bonus_name: d.bonusName, bonus_desc: d.bonusDesc, bonus_expanded_desc: d.bonusExpandedDesc, bonus_photo_url: d.bonusPhotoUrl || '',
    bonus_photo_url_2: d.bonusPhotoUrl2 || '',
    pkg1_name: d.pkg1Name, pkg1_features: d.pkg1Features, pkg1_price: d.pkg1Price, pkg1_today: d.pkg1Today,
    pkg2_name: d.pkg2Name, pkg2_features: d.pkg2Features, pkg2_price: d.pkg2Price, pkg2_today: d.pkg2Today,
    closer_line: d.closerLine
  }).eq('id', state.recordId);

  if (error) {
    setSaveStatus('Save failed', '#c0392b');
  } else {
    setSaveStatus('Saved', '#A08256');
    setTimeout(() => setSaveStatus(''), 2000);
  }
}

// ─── Image upload ────────────────────────────────────────────
async function uploadImage(imageId, file) {
  const ext = file.name.split('.').pop();
  const path = `${state.userId}/${state.recordId}/${imageId}-${Date.now()}.${ext}`;
  setSaveStatus('Uploading…', '#A79C90');

  const { error: uploadErr } = await db.storage
    .from('pitch-deck-images')
    .upload(path, file, { upsert: true });

  if (uploadErr) { setSaveStatus('Upload failed', '#c0392b'); return; }

  const { data: { publicUrl } } = db.storage.from('pitch-deck-images').getPublicUrl(path);

  const urlKey = imageId === 'founder' ? 'founderPhotoUrl'
    : imageId === 'showcase' ? 'showcaseImageUrl'
    : imageId === 'closerTraining' ? 'closerTrainingPhotoUrl'
    : imageId === 'bonus2' ? 'bonusPhotoUrl2'
    : 'bonusPhotoUrl';
  state.data[urlKey] = publicUrl;

  const preview = document.getElementById(`${imageId}-preview`);
  if (preview) preview.innerHTML = `<img src="${publicUrl}" style="width:100%;height:100%;object-fit:contain;border-radius:7px;" alt="">`;

  const btn = document.getElementById(`${imageId}-upload-btn`);
  if (btn) btn.textContent = 'Change photo';

  await saveRecord();
  render();
  snapshotHistory();
}

// ─── Form rendering ──────────────────────────────────────────
function buildFormHTML() {
  return FORM_SECTIONS.map(sec => {
    const fields = sec.fields.map(f => {
      const val = String(state.data[f.key] == null ? '' : state.data[f.key]);
      const safeVal = val.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

      if (f.type === 'image') {
        const url = state.data[f.key] || '';
        return `<label class="pb-field">
          <span class="pb-field-label">${f.label}</span>
          <div id="${f.imageId}-preview" class="pb-upload-preview">
            ${url ? `<img src="${url}" style="width:100%;height:100%;object-fit:contain;border-radius:7px;" alt="">` : '<span class="pb-upload-placeholder">No photo yet</span>'}
          </div>
          <input type="file" accept="image/*" id="${f.imageId}-file-input" style="display:none;">
          <button type="button" class="pb-upload-btn" id="${f.imageId}-upload-btn">${url ? 'Change photo' : 'Upload photo'}</button>
        </label>`;
      }

      if (f.type === 'textarea') {
        return `<label class="pb-field">
          <span class="pb-field-label">${f.label}</span>
          <textarea class="pb-field-textarea" data-key="${f.key}" rows="${f.rows || 3}">${safeVal}</textarea>
          ${f.hint ? `<span class="pb-field-hint">${f.hint}</span>` : ''}
        </label>`;
      }

      if (f.type === 'color') {
        return `<label class="pb-field">
          <span class="pb-field-label">${f.label}</span>
          <div class="pb-color-row">
            <input type="color" class="pb-field-color" data-key="${f.key}" data-pair="hex" value="${safeVal}">
            <input type="text" class="pb-field-input pb-field-hex" data-key="${f.key}" data-pair="swatch" value="${safeVal}" maxlength="7" spellcheck="false">
          </div>
        </label>`;
      }

      if (f.type === 'select') {
        const opts = Object.entries(f.options).map(([key, o]) =>
          `<option value="${key}" ${key === val ? 'selected' : ''}>${esc(o.label)}</option>`).join('');
        return `<label class="pb-field">
          <span class="pb-field-label">${f.label}</span>
          <select class="pb-field-input" data-key="${f.key}">${opts}</select>
        </label>`;
      }

      return `<label class="pb-field">
        <span class="pb-field-label">${f.label}</span>
        <input type="text" class="pb-field-input" data-key="${f.key}" value="${safeVal}">
        ${f.hint ? `<span class="pb-field-hint">${f.hint}</span>` : ''}
      </label>`;
    }).join('');

    return `<details class="pb-section" ${sec.open ? 'open' : ''}>
      <summary class="pb-section-summary">
        <span class="pb-section-num">${sec.num}</span>
        <span class="pb-section-title">${sec.title}</span>
      </summary>
      <div class="pb-section-body">${fields}</div>
    </details>`;
  }).join('');
}

function attachFormListeners() {
  document.querySelectorAll('.pb-field-input, .pb-field-textarea').forEach(el => {
    el.addEventListener('input', e => {
      const key = e.target.dataset.key;
      if (!key) return;

      if (el.classList.contains('pb-field-hex')) {
        if (!/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) return; // wait for a complete hex before acting
        const swatch = document.querySelector(`.pb-field-color[data-key="${key}"]`);
        if (swatch) swatch.value = e.target.value;
      }

      state.data[key] = e.target.value;
      render();
      scheduleSave();
      scheduleHistorySnapshot();
    });
  });

  document.querySelectorAll('.pb-field-color').forEach(el => {
    el.addEventListener('input', e => {
      const key = e.target.dataset.key;
      if (!key) return;
      state.data[key] = e.target.value;
      const hexInput = document.querySelector(`.pb-field-hex[data-key="${key}"]`);
      if (hexInput) hexInput.value = e.target.value;
      render();
      scheduleSave();
      scheduleHistorySnapshot();
    });
  });

  ['founder', 'showcase', 'closerTraining', 'bonus', 'bonus2'].forEach(imageId => {
    const btn = document.getElementById(`${imageId}-upload-btn`);
    const fileInput = document.getElementById(`${imageId}-file-input`);
    if (btn && fileInput) {
      btn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', e => {
        if (e.target.files[0]) uploadImage(imageId, e.target.files[0]);
      });
    }
  });
}

// ─── Init ────────────────────────────────────────────────────
async function init() {
  const auth = await requireAuth();
  if (!auth) return;

  if (auth.profile.role !== 'admin') {
    window.location.href = 'dashboard.html';
    return;
  }

  state.userId = auth.user.id;

  const params = new URLSearchParams(window.location.search);
  state.recordId = params.get('id');

  if (!state.recordId) {
    window.location.href = 'pitch-decks.html';
    return;
  }

  const { data: record, error } = await db
    .from('pitch_decks').select('*').eq('id', state.recordId).single();

  if (error || !record) {
    window.location.href = 'pitch-decks.html';
    return;
  }

  // Map DB snake_case → camelCase
  let scriptOverrides = {};
  try { scriptOverrides = record.script_overrides ? JSON.parse(record.script_overrides) : {}; } catch (err) { scriptOverrides = {}; }
  state.data = {
    scriptOverrides,
    brandDark: record.brand_dark || '#14100E',
    brandLight: record.brand_light || '#F3EDE3',
    brandAccent: record.brand_accent || '#A08256',
    headingFont: record.heading_font || 'archivo',
    accentFont: record.accent_font || 'instrumentserif',
    programName: record.program_name || '',
    category: record.category || '',
    movement: record.movement || '',
    proofPoints: record.proof_points || '',
    founderName: record.founder_name || '',
    founderStory: record.founder_story || '',
    founderPhotoUrl: record.founder_photo_url || '',
    roadmapTitle: record.roadmap_title || '',
    p1Weeks: record.p1_weeks || '', p1Title: record.p1_title || '',
    p1Skills: record.p1_skills || '', p1Checks: record.p1_checks || '',
    p2Weeks: record.p2_weeks || '', p2Title: record.p2_title || '',
    p2Skills: record.p2_skills || '', p2Checks: record.p2_checks || '',
    p3Weeks: record.p3_weeks || '', p3Title: record.p3_title || '',
    p3Skills: record.p3_skills || '', p3Checks: record.p3_checks || '',
    closerTrainingTitle: record.closer_training_title || '',
    closerTrainingIntro: record.closer_training_intro || '',
    closerTrainingPoints: record.closer_training_points || '',
    closerTrainingPhotoUrl: record.closer_training_photo_url || '',
    platformName: record.platform_name || '',
    feature1: record.feature1 || '', feature2: record.feature2 || '', feature3: record.feature3 || '',
    feature4: record.feature4 || '', feature5: record.feature5 || '', feature6: record.feature6 || '',
    showcaseTitle: record.showcase_title || '', showcaseDesc: record.showcase_desc || '', showcaseImageUrl: record.showcase_image_url || '',
    boldClaim: record.bold_claim || '',
    promiseTitle: record.promise_title || '',
    promise: record.promise || '',
    bonusName: record.bonus_name || '',
    bonusDesc: record.bonus_desc || '',
    bonusExpandedDesc: record.bonus_expanded_desc || '',
    bonusPhotoUrl: record.bonus_photo_url || '',
    bonusPhotoUrl2: record.bonus_photo_url_2 || '',
    pkg1Name: record.pkg1_name || '', pkg1Features: record.pkg1_features || '',
    pkg1Price: record.pkg1_price || '', pkg1Today: record.pkg1_today || '',
    pkg2Name: record.pkg2_name || '', pkg2Features: record.pkg2_features || '',
    pkg2Price: record.pkg2_price || '', pkg2Today: record.pkg2_today || '',
    closerLine: record.closer_line || '',
    showTodayPricing: record.show_today_pricing !== false
  };

  // Render form (once)
  document.getElementById('formContent').innerHTML = buildFormHTML();
  attachFormListeners();
  initHistory();

  // Tab buttons
  document.getElementById('tabBuild').addEventListener('click', () => setView('build'));
  document.getElementById('tabPresent').addEventListener('click', () => setView('present'));
  document.getElementById('tabScript').addEventListener('click', () => setView('script'));

  // Undo / redo
  document.getElementById('undoBtn').addEventListener('click', undoEdit);
  document.getElementById('redoBtn').addEventListener('click', redoEdit);

  // Presenter notes — opens a private notes window for the closer's own screen
  document.getElementById('presenterNotesBtn').addEventListener('click', () => {
    ensurePresenterListener();
    presenterWin = window.open(
      `presenter-notes.html?id=${state.recordId}`,
      'presenterNotes_' + state.recordId,
      'width=480,height=800,menubar=no,toolbar=no,location=no,status=no,resizable=yes'
    );
    if (presenterWin) presenterWin.focus();
    setTimeout(broadcastPresenterNotes, 400);
  });

  // Reset to example
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (!confirm('Load example data? This will replace all current form content.')) return;
    state.data = { ...DEFAULTS };
    document.getElementById('formContent').innerHTML = buildFormHTML();
    attachFormListeners();
    render();
    scheduleSave();
    snapshotHistory();
  });

  // Resize observer for deck scaling
  const stageWrap = document.getElementById('stageWrap');
  if (stageWrap) new ResizeObserver(scaleStage).observe(stageWrap);

  initKeyboard();
  setView('build');

  document.getElementById('pageLoading').style.display = 'none';
  document.getElementById('pageContent').style.display = '';
}

window.addEventListener('DOMContentLoaded', init);
