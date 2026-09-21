// ═══════════════════════════════════════════════════════════
// RSC Pitch Deck Builder — pitch-builder.js
// ═══════════════════════════════════════════════════════════

// ─── Default example data (from design spec) ────────────────
const DEFAULTS = {
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
    { key: 'closerTrainingPoints', label: 'Certification highlights — one per line', type: 'textarea', rows: 4, hint: 'Each line becomes its own highlight card (works best with 3).' }
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
    { key: 'bonusPhotoUrl', label: 'Bonus screenshot', type: 'image', imageId: 'bonus' }
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
  return `<div style="${S.dark}padding:100px 130px;display:flex;flex-direction:column;justify-content:center;gap:50px;">
    <div style="display:flex;flex-direction:column;gap:18px;max-width:1500px;">
      <div style="${S.eyebrow}">Every closer, certified</div>
      <div style="font-size:70px;font-weight:900;text-transform:uppercase;line-height:1.02;">${esc(d.closerTrainingTitle)}</div>
      <div style="${S.serif}font-size:30px;line-height:1.45;color:${S.mutedOnDark};">${esc(d.closerTrainingIntro)}</div>
    </div>
    ${points.length ? `<div style="display:grid;grid-template-columns:repeat(${Math.min(points.length, 3)},1fr);gap:30px;">
      ${points.map((p, i) => `
        <div style="background:${cardBg};border:1px solid ${cardBorder};border-radius:14px;padding:34px 30px;display:flex;flex-direction:column;gap:14px;">
          <div style="font-size:20px;font-weight:900;color:${S.accent};">0${i + 1}</div>
          <div style="font-size:24px;font-weight:700;line-height:1.3;">${p}</div>
        </div>`).join('')}
    </div>` : ''}
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
  const photo = d.bonusPhotoUrl
    ? `<img src="${esc(d.bonusPhotoUrl)}" style="width:100%;height:100%;object-fit:cover;border-radius:18px;" alt="">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${S.placeholderBg};font-size:28px;font-family:${S.headingFont};color:${S.hint};border-radius:18px;">Bonus screenshot</div>`;
  return `<div style="${S.ivory}padding:100px 130px;display:flex;gap:90px;align-items:center;">
    <div style="flex:1;display:flex;flex-direction:column;gap:34px;">
      <div style="${S.eyebrow}">${esc(d.bonusName)}</div>
      <div style="font-size:31px;line-height:1.5;color:${S.bodyOnLight};">${esc(d.bonusExpandedDesc)}</div>
    </div>
    <div style="flex:1;height:760px;">${photo}</div>
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
  const featureItems = items.length ? items : ['what’s included'];
  const featureBlocks = featureItems.map((t, i) => ({
    slides: [i === 0 && items.length ? 'Value 1' : `Value ${i + 1}`],
    heading: `Slide · Value reveal ${i + 1}`,
    body: i === 0
      ? `“Now — here’s everything you get inside.” Start with ${esc(t)}.`
      : `Reveal “${esc(t)}.” Name it, explain what it does for THEM, and tie it back to their discovery answers. Never dump the whole list at once.`,
    cue: i === featureItems.length - 1
      ? 'After this reveal, ask: “Which of these is the biggest game-changer for you?”'
      : ''
  }));
  if (!items.length) featureBlocks[0].slides = ['Value stack'];
  const beforeBlocks = featureBlocks.slice(0, 5);
  const afterBlocks = featureBlocks.slice(5);
  if (beforeBlocks.length) {
    beforeBlocks[beforeBlocks.length - 1].cue = 'Then say: “Let me show you exactly what this looks like.”';
  }

  return [
    {
      slides: ['01 Hook'],
      heading: 'Slide 1 · The hook',
      body: `“Welcome in — I’m SO glad you’re here. Before we look at anything, I need you to understand what this actually is. ${esc(d.programName)} is not just ${esc(d.category)}.”`,
      cue: 'Transition straight into the movement line on the next slide.'
    },
    {
      slides: ['02 Movement'],
      heading: 'Slide 2 · The movement',
      body: `“It’s bigger than that. ${esc(d.movement)}”`,
      cue: 'Pause after this line — let it land. Then: “By the end of this call, you’ll know whether this is YOUR movement — fair enough?”'
    },
    {
      slides: ['03 Proof'],
      heading: 'Slide 3 · The proof',
      body: '“This isn’t a theory. It’s already happening.” Walk each number slowly — one at a time. The numbers do the selling; you just deliver them.',
      cue: 'Discovery question: “Out of curiosity — what made YOU decide now was the time to look at this?”'
    },
    {
      slides: ['04 Founder'],
      heading: 'Slide 4 · The founder',
      body: `“So who’s behind this? Let me tell you about ${esc(d.founderName)}.” Tell the story in your own words — hit the three beats on the slide, in order: where they started, what they built, why they built this.`,
      cue: 'Close the story by tying it back to why this was built for someone exactly like your prospect.'
    },
    {
      slides: ['05 How It Works'],
      heading: 'Slide 5 · How it works',
      body: `“So how does ${esc(d.programName)} actually work? Let me walk you through it step by step — this is the exact path.”`,
      cue: 'Transition straight into the roadmap.'
    },
    {
      slides: ['06 Roadmap'],
      heading: 'Slide 6 · The roadmap',
      body: 'Walk each phase in order, pause after each one, and connect it to what they told you in discovery.',
      cue: 'Commitment question: “Which phase are you most excited to master?”'
    },
    {
      slides: ['07 Closer Training'],
      heading: 'Slide 7 · Closer training',
      body: `Every closer that works your leads goes through Shelby Sapp’s She Sells program before they ever touch a call — trained, tested, and certified. This is why you can trust the person representing your brand.`,
      cue: 'This is a trust-builder — let it sit for a moment before moving on.'
    },
    ...beforeBlocks,
    {
      slides: ['Software Showcase'],
      heading: 'Slide · Software showcase',
      body: `“${esc(d.showcaseTitle)}” Walk the screen. “${esc(d.showcaseDesc)}”`,
      cue: 'Say it once, pause. Don’t oversell — the screen does the work.'
    },
    ...afterBlocks,
    {
      slides: ['The Claim'],
      heading: 'Slide · The claim',
      body: `“${esc(d.boldClaim)}”`,
      cue: 'Say it like a fact, because it is. Then silence.'
    },
    {
      slides: ['The Promise'],
      heading: 'Slide · The promise',
      body: `“${esc(d.promiseTitle)}” ${esc(d.promise)}`,
      cue: 'Drop the pitch voice entirely. Read this like you mean it — this is the emotional peak of the call.'
    },
    {
      slides: ['The Bonus'],
      heading: 'Slide · The bonus',
      body: `“And here’s the part nobody else can give you.” Frame ${esc(d.bonusName)} as the unfair advantage — the reason there is no comparison shopping. ${esc(d.bonusDesc)}`,
      cue: ''
    },
    {
      slides: ['The Bonus (showcase)'],
      heading: 'Slide · The bonus, in action',
      body: `Now show the screen: “${esc(d.bonusExpandedDesc)}”`,
      cue: ''
    },
    {
      slides: ['Packages'],
      heading: 'Slide · Packages',
      body: `“So here’s how you can start.” Present ${esc(d.pkg1Name)} at ${esc(d.pkg1Price)}, then ${esc(d.pkg2Name)} at ${esc(d.pkg2Price)}. Recommend the one that’s genuinely right for them — then stop talking.`,
      cue: 'First one to speak loses.'
    },
    {
      slides: ['Day One'],
      heading: 'Slide · The close',
      body: `“${esc(d.closerLine)}” Pause. “So which is it for you?”`,
      cue: ''
    },
    {
      slides: ['Close Today'],
      heading: 'Slide · Close today pricing',
      body: `If they’re ready to decide today, reveal the today-only pricing: ${esc(d.pkg1Today)} and ${esc(d.pkg2Today)}.`,
      cue: 'Handle smokescreens, roll every objection back to their own reasons, and do not end the call without a decision — yes or no, never maybe.'
    }
  ];
}

// ─── Presenter notes window (broadcast) ────────────────────────
let presenterChannel = null;

function getPresenterChannel() {
  if (presenterChannel || !state.recordId || typeof BroadcastChannel === 'undefined') return presenterChannel;
  presenterChannel = new BroadcastChannel('pitch-presenter-' + state.recordId);
  presenterChannel.addEventListener('message', e => {
    if (!e.data) return;
    if (e.data.type === 'ready') broadcastPresenterNotes();
    if (e.data.type === 'nav') {
      const total = computeSlides().length;
      if (e.data.dir === 'next') state.slideIndex = Math.min(state.slideIndex + 1, total - 1);
      else if (e.data.dir === 'prev') state.slideIndex = Math.max(state.slideIndex - 1, 0);
      render();
    }
  });
  return presenterChannel;
}

function findScriptBlock(script, slideLabel) {
  return script.find(block => block.slides.includes(slideLabel));
}

function broadcastPresenterNotes() {
  const channel = getPresenterChannel();
  if (!channel) return;
  const slides = computeSlides();
  const script = computeScript(state.data);
  const i = state.slideIndex;
  const current = slides[i] ? findScriptBlock(script, slides[i].label) : null;
  const next = slides[i + 1] ? findScriptBlock(script, slides[i + 1].label) : null;
  channel.postMessage({
    type: 'update',
    index: i,
    total: slides.length,
    slideLabel: slides[i] ? slides[i].label : '',
    note: current ? current.body : '',
    cue: current ? current.cue : '',
    nextLabel: slides[i + 1] ? slides[i + 1].label : '',
    nextNote: next ? next.body : ''
  });
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
    platform_name: d.platformName,
    feature1: d.feature1, feature2: d.feature2, feature3: d.feature3,
    feature4: d.feature4, feature5: d.feature5, feature6: d.feature6,
    showcase_title: d.showcaseTitle, showcase_desc: d.showcaseDesc, showcase_image_url: d.showcaseImageUrl || '',
    bold_claim: d.boldClaim, promise_title: d.promiseTitle, promise: d.promise,
    bonus_name: d.bonusName, bonus_desc: d.bonusDesc, bonus_expanded_desc: d.bonusExpandedDesc, bonus_photo_url: d.bonusPhotoUrl || '',
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

  const urlKey = imageId === 'founder' ? 'founderPhotoUrl' : imageId === 'showcase' ? 'showcaseImageUrl' : 'bonusPhotoUrl';
  state.data[urlKey] = publicUrl;

  const preview = document.getElementById(`${imageId}-preview`);
  if (preview) preview.innerHTML = `<img src="${publicUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:7px;" alt="">`;

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
            ${url ? `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:7px;" alt="">` : '<span class="pb-upload-placeholder">No photo yet</span>'}
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

  ['founder', 'showcase', 'bonus'].forEach(imageId => {
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
  state.data = {
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
    getPresenterChannel();
    const win = window.open(
      `presenter-notes.html?id=${state.recordId}`,
      'presenterNotes_' + state.recordId,
      'width=480,height=800,menubar=no,toolbar=no,location=no,status=no,resizable=yes'
    );
    if (win) win.focus();
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
