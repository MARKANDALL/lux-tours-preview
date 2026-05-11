import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Mic, Sparkles, Volume2, TrendingUp, ChevronRight,
  Play, Pause, RotateCw, Zap, Activity, MessageCircle,
  ArrowRight, Loader2, Download, Upload, Code2, Check,
  Briefcase, Coffee, Stethoscope, Plane, Video, BookOpen,
  Phone, GraduationCap, Heart, Users, ShoppingCart,
  MessageSquare, AudioLines, FlaskConical, UserCircle2, Layers
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════
// LUX PHONEMES (American English subset Lux measures)
// ═══════════════════════════════════════════════════════════════════
const LUX_PHONEMES = [
  '/θ/', '/ð/', '/ʃ/', '/ʒ/', '/tʃ/', '/dʒ/',
  '/æ/', '/ɑ/', '/ɔ/', '/ʌ/', '/ə/',
  '/ɪ/', '/i/', '/ʊ/', '/u/',
  '/eɪ/', '/aɪ/', '/aʊ/', '/oʊ/', '/ɔɪ/',
  '/ɝ/', '/ɚ/',
  '/p/', '/b/', '/t/', '/d/', '/k/', '/g/',
  '/f/', '/v/', '/s/', '/z/', '/h/',
  '/m/', '/n/', '/ŋ/', '/l/', '/ɹ/', '/w/', '/j/'
];

const SCENARIOS = [
  { id: 'coffee',     title: 'Ordering Coffee',  emoji: '☕', tier: 'short' },
  { id: 'doctor',     title: "Doctor's Visit",   emoji: '🩺', tier: 'long' },
  { id: 'airport',    title: 'At the Airport',   emoji: '✈️', tier: 'medium' },
  { id: 'restaurant', title: 'At the Restaurant',emoji: '🍽️', tier: 'medium' },
  { id: 'interview',  title: 'Job Interview',    emoji: '💼', tier: 'long' },
  { id: 'hiking',     title: 'Hiking with Friend', emoji: '🥾', tier: 'extended' },
  { id: 'calling',    title: 'Family Member is Sick', emoji: '📞', tier: 'extended' },
  { id: 'student',    title: 'Office Hours',     emoji: '🎓', tier: 'medium' },
  { id: 'shopping',   title: 'Shopping',         emoji: '🛍️', tier: 'short' },
  { id: 'videocall',  title: 'Video Call',       emoji: '💻', tier: 'medium' },
];

// Use Case Carousel — outcome-framed cards (replaces type-framed scenarios strip)
const USE_CASES = [
  { id: 'interview', icon: Briefcase,      title: 'Lose your accent for a job interview' },
  { id: 'coffee',    icon: Coffee,         title: 'Sound natural ordering coffee' },
  { id: 'doctor',    icon: Stethoscope,    title: "Stop being misheard at the doctor's" },
  { id: 'visa',      icon: Plane,          title: 'Practice for your visa interview' },
  { id: 'video',     icon: Video,          title: 'Hold your own in a video meeting' },
  { id: 'bedtime',   icon: BookOpen,       title: 'Read your kid a bedtime story' },
  { id: 'phone',     icon: Phone,          title: 'Sound confident on the phone' },
  { id: 'ielts',     icon: GraduationCap,  title: 'Pass the IELTS speaking test' },
  { id: 'date',      icon: Heart,          title: 'Have your first date in English' },
  { id: 'school',    icon: Users,          title: 'Make small talk at the school pickup' },
  { id: 'menu',      icon: ShoppingCart,   title: 'Order food without pointing at the menu' },
  { id: 'boss',      icon: MessageSquare,  title: 'Talk through frustration with your boss' },
  { id: 'phoneme',   icon: AudioLines,     title: 'Master /θ/, step by step' },
];

// Behind Lux — 3-up trust/credibility section. Real content shipped 2026-05-10.
const BEHIND_LUX = [
  {
    id: 'teacher',
    icon: UserCircle2,
    eyebrow: 'THE MAKER',
    title: 'Built by a teacher AND a student — who\'s still climbing',
    body: (
      <>
        Lux was built by an award-winning ESL teacher with 13+ years in the classroom. But more than that — by someone who learned Spanish as an adult, sat for the C1 exam at La Escuela Oficial de Idiomas, and at forty-one is <em>still</em> working on his own accent (built the app partly for himself). He knows what the climb feels like from the inside. The embarrassment. The patience it actually takes. The mornings you wake up knowing the outside world is one conversation away. He also knows it's <em>so</em> worth every step. Lux is for the people who <em>want</em> to keep climbing — and who deserve a guide that's honest about what it takes and honors that journey.
      </>
    ),
    cta: 'Read more',
  },
  {
    id: 'science',
    icon: FlaskConical,
    eyebrow: 'THE SCIENCE',
    title: 'The science behind every score.',
    body: (
      <>
        Lux uses Microsoft's Azure Speech Services to listen to every sound you make and score each one on its own — a real number for every phoneme in every word. On top of that, Lux adds its own scoring layer for rhythm, stress, and pace, because how you <em>say</em> a word matters as much as which sounds you hit. The math is built to be honest, not flattering. Every score has a reason. You can always see why.
      </>
    ),
    cta: 'See the methodology',
  },
  {
    id: 'voice',
    icon: Layers,
    eyebrow: 'THE VOICE CLONE',
    title: 'Hear yourself, getting it right.',
    body: (
      <>
        Lux can clone your voice. Then it speaks back to you — your voice, but with every sound landing exactly where it should. Most pronunciation tools play you a native speaker and ask you to copy it. The problem is, that native speaker isn't you. Their voice is a target you can't quite see yourself reaching. But hearing your own voice say a word correctly — that's different. Suddenly the target has your face on it. Suddenly it's reachable. Language learning has a thousand small miracles inside it. This is one of the bigger ones.
      </>
    ),
    cta: 'Hear how it works',
  },
];

// Cycling adjectives in the hero headline (Chrome Safety pattern)
// Each maps to a real Lux capability:
//   heard    → Azure Speech Services + recording pipeline
//   scored   → core scoring system (phoneme/word/overall)
//   taught   → AI Coach feature + phoneme details + mouth diagrams
//   mastered → progress tracking + trouble sounds resolving over time
const CYCLING_ADJECTIVES = ['heard', 'scored', 'taught', 'mastered'];

// Tour pages — the five deep-dive pages (placeholder routes for v8.0,
// real pages built in Phases 2-6)
const TOURS = [
  { id: 'pronunciation', label: 'Pronunciation', path: '/welcome/pronunciation', tag: 'How Lux scores you',     verb: 'practice' },
  { id: 'coach',         label: 'Coach',         path: '/welcome/coach',         tag: 'How Lux teaches you',    verb: 'learn from' },
  { id: 'voice',         label: 'Voice',         path: '/welcome/voice',         tag: 'Hear yourself, perfectly', verb: 'study' },
  { id: 'conversations', label: 'Conversations', path: '/welcome/conversations', tag: 'Practice talking, not flashcards', verb: 'have' },
  { id: 'progress',      label: 'Progress',      path: '/welcome/progress',      tag: 'Lux remembers everything', verb: 'track' },
];

// CEFR demo state for the toggle-compare in Pillar 1.
// Same passage at three rigor levels — same pronunciation, different scoring.
const CEFR_DEMO_LEVELS = {
  A2: {
    score: 92,
    activeWord: 'canoe',
    troublePhonemes: ['/k/'],
    explainer: 'At A2, the bar is comprehensibility. Words just need to be understandable.',
  },
  B2: {
    score: 85,
    activeWord: 'canoe',
    troublePhonemes: ['/θ/', '/k/'],
    explainer: 'At B2, scoring is balanced — the same pronunciation gets stricter feedback on detail.',
  },
  C1: {
    score: 78,
    activeWord: 'birch',
    troublePhonemes: ['/θ/', '/ɜːr/', '/k/'],
    explainer: 'At C1, the bar is near-native precision. Subtle phoneme deviations show up.',
  },
};

// CEFR thresholds (verbatim from core/scoring/index.js)
const CEFR_BANDS = [
  { band: 'C2', min: 95 },
  { band: 'C1', min: 90 },
  { band: 'B2', min: 85 },
  { band: 'B1', min: 75 },
  { band: 'A2', min: 60 },
  { band: 'A1', min: 0 },
];
function cefrBand(score) {
  if (score == null || !Number.isFinite(+score)) return '';
  for (const b of CEFR_BANDS) if (+score >= b.min) return b.band;
  return 'A1';
}

// ═══════════════════════════════════════════════════════════════════
// DEFAULT DESIGN STATE
// ═══════════════════════════════════════════════════════════════════
const DEFAULT_DESIGN = {
  // Typography (Montserrat) — v21 tuned
  heroSize: 7.5,
  heroWeight: 900,
  heroLineHeight: 0.95,
  heroTracking: -0.04,
  sectionTitleSize: 3.75,
  sectionTitleWeight: 800,
  sectionTitleTracking: -0.03,
  bodySize: 1.1,
  bodyLineHeight: 1.55,

  // Spacing — v21 tuned
  sectionPadY: 11,
  containerMaxWidth: 1300,
  cardGap: 3.25,
  cardPadY: 5,
  cardRadius: 14,

  // Color (Lux extracted + v21 warmth tuning)
  bgBase: '#FFFFFF',
  bgSlate50: '#F9F8FC',
  bgSlate100: '#F3F1F9',
  bgSlate200: '#E2E8F0',
  bgConvoTint: '#EEF0FF',
  ink: '#08080E',
  inkSoft: '#1A1D2E',
  inkMuted: '#4A4860',
  inkFaint: '#7C7A8E',
  line: '#E8E6F0',
  brandBlue: '#0078D7',
  brandBlueHover: '#005A9E',
  scoreGood: '#2563EB',
  scoreGoodBg: '#DBEAFE',
  scoreWarn: '#D97706',
  scoreWarnBg: '#FEF3C7',
  scoreBad: '#DC2626',
  scoreBadBg: '#FEE2E2',
  recordGold: '#EAB308',

  // Motion (v21 tuned easing curves)
  easeDrawer: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easePop: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  easePanel: 'cubic-bezier(0.16, 1.0, 0.30, 1)',
  easeBounce: 'cubic-bezier(0.22, 1.8, 0.36, 0.88)',

  pillarCycleMs: 5200,
  ipaCycleMs: 1100,
  coinFlipMs: 580,
};

const DEFAULT_CONTENT = {
  navBrand: 'Lux',
  navItems: ['Practice', 'Conversations', 'Voice', 'Progress'],
  navCta: 'Sign in',
  heroEyebrow: 'AI-scored. Phoneme by phoneme. Every rep.',
  heroHeadlinePre: 'Every sound you make gets',
  heroHeadlinePost: 'better, sound by sound.',
  heroSubtitle: 'Phoneme-level scoring on every attempt — so you improve exactly where it matters, every single session.',
  // Manifesto: word-by-word reveal with icon wake-ups (Chrome Safety pattern)
  manifestoOpen: 'Your',
  manifestoP1Phrase: 'first attempt',
  manifestoP1Connect: 'is the start. We hear',
  manifestoP2Phrase: 'every phoneme',
  manifestoP2Connect: ', score',
  manifestoP3Phrase: 'every word',
  manifestoP3Connect: ', and track',
  manifestoP4Phrase: 'every win',
  manifestoP4Connect: 'over time.',
  heroPanelLabel: 'Last attempt · The Harvard List · 55',
  heroPanelHint: 'Hover the coin to see your CEFR level',
  micStep: 'Try it now',
  micPrompt: 'Say this word out loud',
  micWord: 'world',
  micPhonetic: '/wɜːrld/',
  pillarsTitle: 'The five moves behind every win',
  pillarsSubtitle: 'Every feature connects to one goal — getting your pronunciation heard, understood, taught, and remembered.',
  ctaTitle: 'Five tours. Pick where to start.',
  ctaSubtitle: 'Each tour walks you through one part of Lux in detail. Start anywhere — they all connect back.',
  useCasesEyebrow: 'Real outcomes, real speakers',
  useCasesTitle: 'What people use Lux to actually do',
  useCasesSubtitle: 'Real goals, not feature lists. Pick one that sounds like your week.',
  behindLuxEyebrow: 'Our philosophy',
  behindLuxTitle: 'Why we built it this way',
  disclaimerHero: '*Example for illustration · placeholder copy',
  disclaimerMic: '*Example scoring shown — actual scores vary · placeholder copy',
  disclaimerPillars: '*Demo content. Real scoring happens in the app · placeholder copy',
};

// ═══════════════════════════════════════════════════════════════════
// IMPROVEMENT LOOP — Claude API with 21-focus-area rubric
// ═══════════════════════════════════════════════════════════════════
const CRITIQUE_SYSTEM_PROMPT = `You are a senior product designer reviewing a Lux English-pronunciation app onboarding page against Chrome's "What's New" / "AI Innovations" page family at google.com/chrome.

═══ LUX BRAND DNA (IMMUTABLE — never propose changes) ═══
- bgBase MUST stay #FFFFFF
- brandBlue MUST stay #0078D7
- scoreGood MUST stay #2563EB
- scoreWarn MUST stay #D97706 / scoreBad MUST stay #DC2626 / recordGold MUST stay #EAB308
- Font is Montserrat with system-ui fallback — do not change
- Score tier system is 3-tier (Good ≥80 blue, Warn ≥60 amber, Bad <60 red)

═══ CHROME REFERENCE QUALITIES ═══
- Massive typography (60-100px headlines, weight 600-800)
- Generous whitespace, tall section padding
- Auto-cycling timed accordions
- Inline animated demos beside short, punchy copy
- Polished motion: staggered reveals, spring eases, scroll-triggered
- Three-column equal-weight CTA grids

═══ SCORING ═══
Score CURRENT design 1-10 against Chrome quality. Pick ONE focus area. Propose 1-4 specific value changes.

═══ FOCUS AREAS (rotate aggressively — never repeat any of the LAST FIVE) ═══
typography_size_hierarchy · typography_weight_contrast · typography_letter_spacing
color_brand_presence · color_data_palette · color_neutral_warmth
spacing_section_padding · spacing_card_padding · spacing_container_width
motion_entry_timing · motion_hover_states · motion_scroll_triggers · motion_stagger_delays · motion_easing_variety
layout_alternation · layout_card_radii · layout_visual_density
component_pillar_timing · component_carousel_speed
content_headline_punch · content_subtitle_clarity · content_eyebrow_treatment
polish_shadow_intensity · polish_decorative_atmosphere

═══ KEYS YOU CAN CHANGE (with ranges) ═══
heroSize: 4.5-8 (rem)
heroWeight: 600-900
heroLineHeight: 0.92-1.2
heroTracking: -0.05 to -0.005 (em)
sectionTitleSize: 2.25-4.5 (rem)
sectionTitleWeight: 600-900
sectionTitleTracking: -0.04 to 0 (em)
bodySize: 0.95-1.25 (rem)
bodyLineHeight: 1.4-1.7
sectionPadY: 6-12 (rem)
cardGap: 1.5-3.5 (rem)
cardPadY: 2.5-5 (rem)
cardRadius: 8-22 (px)
containerMaxWidth: 1180-1360 (px)
ink: hex (slate-700 to slate-950)
inkSoft: hex (slate-500 to slate-800)
inkFaint: hex (slate-300 to slate-500)
line: hex (slate-100 to slate-300)
pillarCycleMs: 4000-7000
ipaCycleMs: 900-2000
coinFlipMs: 480-1000
heroEyebrow: string max 60 chars
heroSubtitle: string max 140 chars (must explain value prop)
pillarsTitle: string max 70 chars
pillarsSubtitle: string max 140 chars
ctaTitle: string max 60 chars
ctaSubtitle: string max 140 chars

Respond ONLY with raw JSON, no fences, no prose:
{"score":<1-10>,"focus":"<focus_area>","critique":"<one specific sentence, max 140 chars>","changes":{"<key>":<value>,...}}`;

// Extract the first balanced JSON object from a string, even if there's
// extra text before or after. Defensive against LLM responses that include
// commentary alongside the JSON.
function extractFirstJsonObject(text) {
  const start = text.indexOf('{');
  if (start === -1) throw new Error('No JSON object found in response');
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\' && inString) { escape = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return text.substring(start, i + 1);
    }
  }
  throw new Error('Unbalanced JSON braces in response');
}

async function critiqueDesign(currentState, history) {
  const recent = history.slice(-5).map(h => h.focus);
  const userPrompt = `Iteration ${history.length + 1}.

CRITICAL — these focus areas were used in the last 5 iterations and MUST NOT be picked again this turn:
${recent.length ? recent.map((f, i) => `  ${i + 1}. ${f}`).join('\n') : '  (none yet — any area is fair game)'}

You MUST pick a focus area NOT in the list above. Look at the full focus list — there are 21 options and most of them have not been touched yet. Pick something that has been neglected.

Current state:
${JSON.stringify(currentState, null, 2)}

Score 1-10 vs Chrome. Return ONLY a single JSON object — no prose before or after, no markdown fences.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 800,
      system: CRITIQUE_SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }]
    })
  });
  if (!response.ok) throw new Error(`API ${response.status}`);
  const data = await response.json();
  const text = data.content
    .filter(c => c.type === 'text')
    .map(c => c.text).join('').trim();
  const jsonStr = extractFirstJsonObject(text);
  return JSON.parse(jsonStr);
}

// ═══════════════════════════════════════════════════════════════════
// LUX CEFR COIN — direct production port (now properly featured size)
// ═══════════════════════════════════════════════════════════════════
function LuxCefrCoin({ score = 87, ringColor = '#2563EB', size = 'medium' }) {
  const pct = Number.isFinite(+score) ? `${Math.round(+score)}%` : '—';
  const band = cefrBand(score);
  return (
    <div
      className={`lux-scoreRing lux-scoreRing--coin lux-coin-${size}`}
      style={{ '--lux-score-ring': ringColor }}
      data-cefr={band || undefined}
    >
      <span className="lux-scoreRingFlip" aria-hidden="true">
        <span className="lux-scoreRingFace lux-scoreRingFace--front">{pct}</span>
        <span className="lux-scoreRingFace lux-scoreRingFace--back">{band || pct}</span>
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function LuxOnboarding() {
  const [design, setDesign] = useState(DEFAULT_DESIGN);
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [iterations, setIterations] = useState([]);
  const [isImproving, setIsImproving] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [iterError, setIterError] = useState(null);
  const [showStateJson, setShowStateJson] = useState(false);
  const [justCopied, setJustCopied] = useState(false);
  const fileInputRef = useRef(null);
  const autoModeRef = useRef(false);

  // Hero reveal
  const [heroStep, setHeroStep] = useState(0);
  useEffect(() => {
    const timers = [];
    for (let i = 1; i <= 6; i++) {
      timers.push(setTimeout(() => setHeroStep(s => Math.max(s, i)), 400 + i * 280));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  // Hero panel coin score animation
  const [heroCoinScore, setHeroCoinScore] = useState(0);
  useEffect(() => {
    if (heroStep < 4) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1400);
      const eased = 1 - Math.pow(1 - t, 3);
      setHeroCoinScore(Math.round(87 * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [heroStep]);

  // Cycling adjective in headline (Chrome Safety pattern)
  const [cycleIndex, setCycleIndex] = useState(0);
  const [cycleFlipping, setCycleFlipping] = useState(false);
  const [cyclePaused, setCyclePaused] = useState(false);
  useEffect(() => {
    if (heroStep < 3) return;
    if (cyclePaused) return;
    const t = setInterval(() => {
      setCycleFlipping(true);
      setTimeout(() => {
        setCycleIndex(i => (i + 1) % CYCLING_ADJECTIVES.length);
        setCycleFlipping(false);
      }, 360);
    }, 2400);
    return () => clearInterval(t);
  }, [heroStep, cyclePaused]);

  // Manifesto sentence: word-by-word reveal with icon wake-ups
  const [manifestoStage, setManifestoStage] = useState(0);
  const manifestoRef = useRef(null);
  const [manifestoVisible, setManifestoVisible] = useState(false);
  useEffect(() => {
    let fired = false;
    const trigger = () => { if (!fired) { fired = true; setManifestoVisible(true); } };

    // Check if already visible at mount time (handles short pages / already-scrolled states)
    const rect = manifestoRef.current?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
      const t = setTimeout(trigger, 300);
      return () => clearTimeout(t);
    }

    // Otherwise observe — generous threshold + rootMargin for reliable firing
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) trigger(); });
    }, { threshold: 0, rootMargin: '0px 0px -80px 0px' });
    if (manifestoRef.current) obs.observe(manifestoRef.current);

    // Fallback: trigger after 5s no matter what — never let manifesto stay broken
    const fallback = setTimeout(trigger, 5000);

    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);
  useEffect(() => {
    if (!manifestoVisible) return;
    const timers = [];
    for (let i = 1; i <= 5; i++) {
      timers.push(setTimeout(() => setManifestoStage(s => Math.max(s, i)), 200 + i * 700));
    }
    return () => timers.forEach(clearTimeout);
  }, [manifestoVisible]);

  const replayHeroAnimation = () => {
    setHeroStep(0);
    setCycleIndex(0);
    setCycleFlipping(false);
    setManifestoStage(0);
    setHeroCoinScore(0);
    const timers = [];
    for (let i = 1; i <= 6; i++) {
      timers.push(setTimeout(() => setHeroStep(s => Math.max(s, i)), 200 + i * 280));
    }
  };

  // CEFR toggle inside Pillar 1 visual
  const [cefrLevel, setCefrLevel] = useState('B2');

  // Convo card 180° flip on click
  const [convoFlipped, setConvoFlipped] = useState(false);

  // Pillars accordion
  const [activePillar, setActivePillar] = useState(0);
  const pillarsRef = useRef(null);
  const [pillarsVisible, setPillarsVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setPillarsVisible(true); });
    }, { threshold: 0.3 });
    if (pillarsRef.current) obs.observe(pillarsRef.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!pillarsVisible) return;
    const t = setInterval(() => setActivePillar(p => (p + 1) % 5), design.pillarCycleMs);
    return () => clearInterval(t);
  }, [pillarsVisible, design.pillarCycleMs]);

  // ===== MIC MOMENT — Real backend integration =====
  // States: idle → recording → uploading → analyzing → result → (cycle back to idle)
  // Real fetch to /api/assess; on error, falls back to baked mock data after a 2s delay.
  // This way the UX flow works in Claude artifact preview AND on the deployed site.

  const [micState, setMicState] = useState('idle');
  const [micResultNum, setMicResultNum] = useState(0);
  const [micResult, setMicResult] = useState(null); // parsed assess response
  const [micError, setMicError] = useState(null);
  const [micUsedFallback, setMicUsedFallback] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioStreamRef = useRef(null);

  // The demo target — kept simple for the landing's first-impression mic moment
  const MIC_TARGET_TEXT = 'world';
  const MIC_TARGET_PHONETIC = '/wɜːrld/';

  // Backend endpoint — real in dev/prod, gracefully falls back to mock in artifact preview
  const ASSESS_ENDPOINT = (typeof window !== 'undefined' && window.location.hostname === 'localhost')
    ? 'http://localhost:3001/api/assess'
    : '/api/assess';

  // Baked mock response (Azure Speech format) for fallback when backend unreachable.
  // Uses real-shape data for the word "world" so the result UI renders identically
  // whether we hit the real backend or fall back.
  const MIC_MOCK_RESPONSE = {
    NBest: [{
      AccuracyScore: 92,
      FluencyScore: 96,
      ProsodyScore: 84,
      CompletenessScore: 100,
      PronScore: 87,
      Words: [{
        Word: 'world',
        AccuracyScore: 87,
        ErrorType: 'None',
        Phonemes: [
          { Phoneme: 'w',  AccuracyScore: 94 },
          { Phoneme: 'er', AccuracyScore: 71 },
          { Phoneme: 'l',  AccuracyScore: 89 },
          { Phoneme: 'd',  AccuracyScore: 96 },
        ],
      }],
    }],
  };

  // Map Azure phoneme codes to IPA for display
  const PHONEME_TO_IPA = {
    'w': '/w/', 'er': '/ɜːr/', 'l': '/l/', 'd': '/d/',
    'th': '/θ/', 'dh': '/ð/', 's': '/s/', 'sh': '/ʃ/',
    'z': '/z/', 'r': '/r/', 'h': '/h/', 'ih': '/ɪ/',
    'ax': '/ə/', 'ao': '/ɔː/', 'ow': '/oʊ/', 'ey': '/eɪ/',
    'iy': '/iː/', 'aa': '/ɑː/', 'ae': '/æ/', 'eh': '/ɛ/',
    'uh': '/ʊ/', 'uw': '/uː/', 'n': '/n/', 'm': '/m/',
    'ng': '/ŋ/', 'k': '/k/', 'g': '/ɡ/', 't': '/t/',
    'p': '/p/', 'b': '/b/', 'f': '/f/', 'v': '/v/',
    'ch': '/tʃ/', 'jh': '/dʒ/', 'y': '/j/',
  };

  const tierForScore = (score) => score >= 80 ? 'good' : score >= 60 ? 'warn' : 'bad';

  const startMicRecording = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStreamRef.current = stream;
      audioChunksRef.current = [];

      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;

      mr.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mr.onstop = async () => {
        // Stop all tracks to release the mic
        if (audioStreamRef.current) {
          audioStreamRef.current.getTracks().forEach(t => t.stop());
          audioStreamRef.current = null;
        }
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await uploadAndAnalyze(audioBlob);
      };

      mr.start();
      setMicState('recording');
    } catch (err) {
      console.error('Mic access error:', err);
      setMicError('Could not access microphone. ' + (err.message || ''));
      setMicState('idle');
    }
  };

  const stopMicRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setMicState('uploading');
    }
  };

  const uploadAndAnalyze = async (audioBlob) => {
    // Show the "analyzing" state with the loading-state video while the backend works
    setMicState('analyzing');

    let result = null;
    let usedFallback = false;

    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      formData.append('text', MIC_TARGET_TEXT);
      formData.append('firstLang', 'universal');

      const response = await fetch(ASSESS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Backend returned ' + response.status);
      result = await response.json();
    } catch (err) {
      console.warn('Backend unreachable, using mock fallback:', err.message);
      // Wait 2 seconds to simulate the real backend latency, so the UX feels honest
      await new Promise(r => setTimeout(r, 2000));
      result = MIC_MOCK_RESPONSE;
      usedFallback = true;
    }

    setMicUsedFallback(usedFallback);
    setMicResult(result);
    setMicState('result');

    // Animate the score number up to its final value
    const finalScore = Math.round(result.NBest?.[0]?.PronScore || 0);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1400);
      const eased = 1 - Math.pow(1 - t, 3);
      setMicResultNum(Math.round(finalScore * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const resetMic = () => {
    setMicState('idle');
    setMicResultNum(0);
    setMicResult(null);
    setMicError(null);
    setMicUsedFallback(false);
  };

  const handleMicClick = () => {
    if (micState === 'idle') {
      startMicRecording();
    } else if (micState === 'recording') {
      stopMicRecording();
    } else if (micState === 'result') {
      resetMic();
    }
    // analyzing/uploading: no action (button disabled visually)
  };

  // Derived: extract phoneme chips from the response (real or mock — same shape)
  const micPhonemeChips = (() => {
    const word = micResult?.NBest?.[0]?.Words?.[0];
    if (!word) return null;
    return word.Phonemes.map(p => ({
      ipa: PHONEME_TO_IPA[p.Phoneme] || `/${p.Phoneme}/`,
      score: Math.round(p.AccuracyScore),
      tier: tierForScore(p.AccuracyScore),
    }));
  })();

  // Derived: identify the lowest-scoring phoneme for the "focus on" hint
  const micFocusPhoneme = micPhonemeChips?.reduce((min, p) =>
    !min || p.score < min.score ? p : min, null);


  // Improvement loop
  const runOneIteration = useCallback(async () => {
    setIsImproving(true);
    setIterError(null);
    try {
      const merged = { ...design, ...content };
      const result = await critiqueDesign(merged, iterations);
      const designKeys = Object.keys(DEFAULT_DESIGN);
      const contentKeys = Object.keys(DEFAULT_CONTENT);
      setDesign(prev => {
        const next = { ...prev };
        Object.entries(result.changes || {}).forEach(([k, v]) => {
          if (designKeys.includes(k)) next[k] = v;
        });
        return next;
      });
      setContent(prev => {
        const next = { ...prev };
        Object.entries(result.changes || {}).forEach(([k, v]) => {
          if (contentKeys.includes(k)) next[k] = v;
        });
        return next;
      });
      setIterations(prev => [...prev, { ...result, ts: Date.now() }]);
      return result;
    } catch (e) {
      setIterError(e.message || 'Iteration failed');
      autoModeRef.current = false;
      setAutoMode(false);
      throw e;
    } finally {
      setIsImproving(false);
    }
  }, [design, content, iterations]);

  useEffect(() => {
    if (!autoMode) { autoModeRef.current = false; return; }
    autoModeRef.current = true;
    let mounted = true;
    const loop = async () => {
      while (mounted && autoModeRef.current) {
        try {
          const r = await runOneIteration();
          if (r && r.score >= 9) {
            autoModeRef.current = false;
            setAutoMode(false);
            break;
          }
          await new Promise(res => setTimeout(res, 2400));
        } catch { break; }
      }
    };
    loop();
    return () => { mounted = false; };
  }, [autoMode, runOneIteration]);

  // State persistence — save/load/copy
  const buildSavedState = () => ({
    version: 'lux-onboarding-v8.0c',
    savedAt: new Date().toISOString(),
    iterationCount: iterations.length,
    lastScore: iterations.length ? iterations[iterations.length - 1].score : null,
    design,
    content,
    iterations,
  });

  const saveStateToFile = () => {
    const blob = new Blob(
      [JSON.stringify(buildSavedState(), null, 2)],
      { type: 'application/json' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const scoreLabel = iterations.length ? `_${iterations[iterations.length - 1].score}of10` : '';
    a.download = `lux-design-state_v${iterations.length}${scoreLabel}_${ts}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyStateToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(buildSavedState(), null, 2));
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 1800);
    } catch (e) {
      setIterError('Copy failed — use Save to file instead');
    }
  };

  const loadStateFromFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed.design) setDesign({ ...DEFAULT_DESIGN, ...parsed.design });
        if (parsed.content) setContent({ ...DEFAULT_CONTENT, ...parsed.content });
        if (Array.isArray(parsed.iterations)) setIterations(parsed.iterations);
        setIterError(null);
      } catch (err) {
        setIterError('Could not parse JSON — file may be corrupt');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const resetToDefault = () => {
    setDesign(DEFAULT_DESIGN);
    setContent(DEFAULT_CONTENT);
    setIterations([]);
    setIterError(null);
  };

  const lastScore = iterations.length ? iterations[iterations.length - 1].score : null;

  const rootStyle = {
    '--hero-size': `${design.heroSize}rem`,
    '--hero-weight': design.heroWeight,
    '--hero-lh': design.heroLineHeight,
    '--hero-tracking': `${design.heroTracking}em`,
    '--sect-size': `${design.sectionTitleSize}rem`,
    '--sect-weight': design.sectionTitleWeight,
    '--sect-tracking': `${design.sectionTitleTracking}em`,
    '--body-size': `${design.bodySize}rem`,
    '--body-lh': design.bodyLineHeight,
    '--sect-pad-y': `${design.sectionPadY}rem`,
    '--max-w': `${design.containerMaxWidth}px`,
    '--card-gap': `${design.cardGap}rem`,
    '--card-pad-y': `${design.cardPadY}rem`,
    '--card-radius': `${design.cardRadius}px`,
    '--bg': design.bgBase,
    '--slate-50': design.bgSlate50,
    '--slate-100': design.bgSlate100,
    '--slate-200': design.bgSlate200,
    '--convo-tint': design.bgConvoTint,
    '--ink': design.ink,
    '--ink-soft': design.inkSoft,
    '--ink-muted': design.inkMuted,
    '--ink-faint': design.inkFaint,
    '--line': design.line,
    '--brand': design.brandBlue,
    '--brand-hover': design.brandBlueHover,
    '--score-good': design.scoreGood,
    '--score-good-bg': design.scoreGoodBg,
    '--score-warn': design.scoreWarn,
    '--score-warn-bg': design.scoreWarnBg,
    '--score-bad': design.scoreBad,
    '--score-bad-bg': design.scoreBadBg,
    '--gold': design.recordGold,
    '--ease-drawer': design.easeDrawer,
    '--ease-pop': design.easePop,
    '--ease-panel': design.easePanel,
    '--ease-bounce': design.easeBounce,
    '--coin-flip-ms': `${design.coinFlipMs}ms`,
    '--pillar-cycle': `${design.pillarCycleMs}ms`,
  };

  return (
    <div className="lux-root" style={rootStyle}>
      <style>{CSS_TEMPLATE}</style>

      {/* NAV */}
      <nav className="lux-nav">
        <div className="nav-inner">
          <a href="/welcome" className="nav-brand" style={{ textDecoration: 'none', color: 'inherit' }}><span className="nav-mark"><span className="nav-mark-inner" /></span><span className="nav-name">{content.navBrand}</span></a>
          <div className="nav-links">
            {content.navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="nav-signin">{content.navCta}</button>
            <button className="nav-cta">
              Get Lux <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Tours subnav — present on every page, drives the multi-page system */}
        <div className="lux-subnav">
          <div className="subnav-inner">
            <span className="subnav-label">Tours</span>
            <span className="subnav-divider">·</span>
            {TOURS.map((tour, i) => (
              <span key={tour.id} className="subnav-item-wrap">
                <a
                  href={tour.path}
                  className="subnav-item"
                  title={tour.tag}
                >
                  {tour.label}
                </a>
                {i < TOURS.length - 1 && <span className="subnav-sep">·</span>}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO V7 — kinetic typography (Chrome Safety pattern) */}
      <header className="hero-v7">
        <div className="hero-v7-inner container">
          <div className="hero-text">
            <div className={`hero-eyebrow ${heroStep >= 0 ? 'in' : ''}`}>
              <span className="dot" />
              {content.heroEyebrow}
            </div>

            <h1 className="hero-headline-v7">
              <span className={`chunk ${heroStep >= 1 ? 'in' : ''}`}>{content.heroHeadlinePre}</span>
              <span className={`hh-cycle-wrap ${heroStep >= 3 ? 'in' : ''}`}>
                <span className={`hh-cycle ${cycleFlipping ? 'flipping' : ''}`}>
                  {CYCLING_ADJECTIVES[cycleIndex]}
                </span>
              </span>
              <br />
              <span className={`chunk ${heroStep >= 5 ? 'in' : ''}`}>{content.heroHeadlinePost}</span>
            </h1>

            <div className={`hero-controls ${heroStep >= 5 ? 'in' : ''}`}>
              <button
                className="hc-btn"
                onClick={() => setCyclePaused(p => !p)}
                aria-label={cyclePaused ? 'Play animation' : 'Pause animation'}
                title={cyclePaused ? 'Play animation' : 'Pause animation'}
              >
                {cyclePaused
                  ? <Play size={13} strokeWidth={2.5} />
                  : <Pause size={13} strokeWidth={2.5} />
                }
              </button>
              <button
                className="hc-btn"
                onClick={replayHeroAnimation}
                aria-label="Replay animation"
                title="Replay animation"
              >
                <RotateCw size={13} strokeWidth={2.5} />
              </button>
              <span className="hc-label">{cyclePaused ? 'Paused' : 'Auto-cycling'}</span>
            </div>

            <p className={`hero-sub ${heroStep >= 6 ? 'in' : ''}`}>{content.heroSubtitle}</p>

            <div className={`hero-actions ${heroStep >= 6 ? 'in' : ''}`}>
              <a href="#mic" className="btn btn-primary">
                Try it yourself <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a href="#pillars" className="btn btn-ghost">See what Lux can do</a>
            </div>
          </div>

          {/* Score moment panel — featured CEFR coin */}
          <div className={`hero-panel ${heroStep >= 3 ? 'in' : ''}`}>
            <div className="hero-panel-bar">
              <span className="hero-panel-dot" />
              <span className="hero-panel-label">{content.heroPanelLabel}</span>
            </div>

            <div className="hero-panel-coin-wrap">
              <LuxCefrCoin score={heroCoinScore} ringColor="var(--score-good)" size="featured" />
            </div>

            <div className="hero-panel-meta">
              <div className="hpm-row">
                <span className="hpm-label">Top trouble sounds</span>
                <div className="hpm-chips">
                  {[
                    { ipa: '/θ/',   tier: 'warn' },
                    { ipa: '/ɜːr/', tier: 'warn' },
                    { ipa: '/ʃ/',   tier: 'good' },
                  ].map((p, i) => (
                    <span key={p.ipa} className="hpm-chip" data-tier={p.tier}
                          style={{ animationDelay: `${1100 + i * 130}ms` }}>
                      {p.ipa}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hpm-row">
                <span className="hpm-label">This week</span>
                <span className="hpm-trend">
                  <TrendingUp size={14} strokeWidth={2.5} />
                  <strong>+14</strong>
                  <span className="hpm-trend-lbl">accuracy</span>
                </span>
              </div>
            </div>

            <div className="hero-panel-hint">
              <span className="hphi-arrow">↑</span> {content.heroPanelHint}
            </div>

            <div className="placeholder-disclaimer">{content.disclaimerHero}</div>
          </div>
        </div>
      </header>

      {/* HERO VIDEO — autoplay ambient video, Chrome AI Innovations pattern.
          Placeholder gray frame for now. Mark backfills with content later
          (could be a Lux usage screen-capture, an artistic shot, or recorded narration). */}
      <section className="hero-video-section">
        <div className="container">
          <div className="hv-frame">
            <div className="hv-placeholder">
              <div className="hv-play-icon">
                <Play size={32} strokeWidth={2.2} />
              </div>
              <div className="hv-label">AUTOPLAY HERO VIDEO</div>
              <div className="hv-sub">Ambient loop · ~30 seconds · placeholder for now</div>
            </div>
            <div className="hv-controls">
              <button className="hv-ctrl-btn" aria-label="Pause"><Pause size={14} strokeWidth={2.5} /></button>
              <button className="hv-ctrl-btn" aria-label="Replay"><RotateCw size={14} strokeWidth={2.5} /></button>
              <span className="hv-ctrl-label">AUTOPLAY</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO — word-by-word reveal with icon wake-ups */}
      <section className="manifesto-section" ref={manifestoRef}>
        <div className="container">
          <p className="manifesto-line">
            <span className={`m-word ${manifestoStage >= 1 ? 'in' : ''}`}>{content.manifestoOpen}</span>
            <span className={`m-phrase ${manifestoStage >= 1 ? 'in' : ''}`}>{content.manifestoP1Phrase}</span>
            <span className={`m-icon ${manifestoStage >= 1 ? 'active' : ''}`}>
              <Mic size={22} strokeWidth={2.2} />
            </span>
            <span className={`m-connect ${manifestoStage >= 2 ? 'in' : ''}`}>{content.manifestoP1Connect}</span>
            <span className={`m-phrase ${manifestoStage >= 2 ? 'in' : ''}`}>{content.manifestoP2Phrase}</span>
            <span className={`m-icon m-icon-chip ${manifestoStage >= 2 ? 'active' : ''}`}>
              <span className="mic-ipa-chip">/θ/</span>
            </span>
            <span className={`m-connect ${manifestoStage >= 3 ? 'in' : ''}`}>{content.manifestoP2Connect}</span>
            <span className={`m-phrase ${manifestoStage >= 3 ? 'in' : ''}`}>{content.manifestoP3Phrase}</span>
            <span className={`m-icon m-icon-score ${manifestoStage >= 3 ? 'active' : ''}`}>
              <span className="mic-score-chip">92</span>
            </span>
            <span className={`m-connect ${manifestoStage >= 4 ? 'in' : ''}`}>{content.manifestoP3Connect}</span>
            <span className={`m-phrase ${manifestoStage >= 4 ? 'in' : ''}`}>{content.manifestoP4Phrase}</span>
            <span className={`m-icon ${manifestoStage >= 4 ? 'active' : ''}`}>
              <TrendingUp size={22} strokeWidth={2.2} />
            </span>
            <span className={`m-connect ${manifestoStage >= 5 ? 'in' : ''}`}>{content.manifestoP4Connect}</span>
          </p>
        </div>
      </section>

      {/* MIC */}
      <section id="mic" className="mic-section">
        <div className="mic-frame">
          <div className="mic-bar">
            <div className="mic-dots"><span /><span /><span /></div>
            <div className="mic-url"><span className="lock">⌬</span> lux.app/welcome</div>
          </div>
          <div className="mic-body">
            <div className="mic-step-row">
              <span className="mic-step-num">01</span>
              <span className="mic-step-lbl">{content.micStep}</span>
            </div>
            <p className="mic-prompt">{content.micPrompt}</p>
            <h2 className="mic-word">{content.micWord}</h2>
            <p className="mic-phonetic">{content.micPhonetic}</p>

            <button
              className={`mic-button ${micState === 'idle' ? 'idle' : ''} ${micState === 'recording' ? 'recording' : ''} ${micState === 'uploading' || micState === 'analyzing' ? 'busy' : ''}`}
              onClick={handleMicClick}
              disabled={micState === 'uploading' || micState === 'analyzing'}
              aria-label={
                micState === 'idle' ? 'Start recording' :
                micState === 'recording' ? 'Stop recording' :
                micState === 'result' ? 'Try another' : 'Recording in progress'
              }
            >
              {(micState === 'uploading' || micState === 'analyzing') ? (
                <Loader2 size={36} strokeWidth={2.2} className="spin" />
              ) : (
                <Mic size={36} strokeWidth={2.2} />
              )}
            </button>

            {micState === 'recording' && (
              <div className="rec-wave">
                {Array(10).fill(0).map((_, i) => (
                  <span key={i} className="b" style={{ animationDelay: `${(i % 6) * 0.08}s` }} />
                ))}
              </div>
            )}

            <p className="mic-hint">
              {micState === 'idle'      && <>Tap the mic and say <strong>"{content.micWord}"</strong></>}
              {micState === 'recording' && <>Listening… say <strong>"{content.micWord}"</strong> and tap to stop</>}
              {micState === 'uploading' && <>Sending your audio to Lux…</>}
              {micState === 'analyzing' && <>Lux is analyzing your pronunciation…</>}
              {micState === 'result'    && <>Here's what we heard.</>}
              {micError && <span className="mic-err"><br/>{micError}</span>}
            </p>

            {/* Loading-state video — fills the wait during real backend latency.
                Placeholder for now; Mark backfills with explanatory video content later. */}
            {(micState === 'uploading' || micState === 'analyzing') && (
              <div className="mic-loading-video">
                <div className="mlv-frame">
                  <div className="mlv-overlay">
                    <Loader2 size={28} strokeWidth={2.2} className="spin" />
                  </div>
                  <div className="mlv-content">
                    <div className="mlv-label">VIDEO · How Lux scores you</div>
                    <div className="mlv-text">
                      Your audio is on its way to Azure Speech Services for phoneme-level analysis. Lux is matching your pronunciation against native English targets and computing your score.
                    </div>
                  </div>
                </div>
                <p className="mlv-disclaimer">Placeholder — explanatory video pops up here during real backend latency (typically 2-4 seconds).</p>
              </div>
            )}

            {micState === 'result' && micResult && (
              <div className="mic-result">
                <div className="result-grid">
                  <div className="result-coin-wrap">
                    <LuxCefrCoin score={micResultNum} ringColor="var(--score-good)" size="result" />
                    <div className="result-coin-hint">↑ Hover for CEFR</div>
                  </div>
                  <div className="result-detail">
                    <h3>
                      {micFocusPhoneme && micFocusPhoneme.score < 80
                        ? <>Nice work — and we found <span className="accent">one sound</span> to practice.</>
                        : <>Excellent — your phonemes are on point.</>}
                    </h3>
                    <div className="phonemes">
                      {micPhonemeChips && micPhonemeChips.map((p, i) => (
                        <div key={p.ipa + i} className="ph-chip in" data-tier={p.tier}
                             style={{ animationDelay: `${600 + i * 140}ms` }}>
                          <span className="ipa">{p.ipa}</span>
                          <span className="num">{p.score}</span>
                        </div>
                      ))}
                    </div>
                    {micFocusPhoneme && micFocusPhoneme.score < 80 && (
                      <p className="next-up">
                        Focus on <span className="focus">{micFocusPhoneme.ipa}</span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="result-actions">
                  <button className="btn btn-primary" onClick={resetMic}>
                    Try another word <ArrowRight size={14} strokeWidth={2.5} />
                  </button>
                  <button className="btn btn-ghost" onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}>
                    Keep exploring
                  </button>
                </div>
                <div className="placeholder-disclaimer center">
                  {micUsedFallback
                    ? '*Demo result · backend unreachable in this preview · live scoring active on lux.app'
                    : 'Live scored by Lux · phoneme-level Azure Speech analysis'}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="pillars" ref={pillarsRef}>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Four Pillars</div>
            <h2 className="section-title">{content.pillarsTitle}</h2>
            <p className="section-sub">{content.pillarsSubtitle}</p>
          </div>

          <div className="pillars-grid">
            <div className="pillars-list">
              {[
                { icon: Activity,      title: 'Hear every sound',           body: 'Read a passage. Get scored on every single phoneme.', tour: 'pronunciation' },
                { icon: Sparkles,      title: 'Get coached on every attempt', body: 'Three coaches. Feedback in your language. Six angles per response.', tour: 'coach' },
                { icon: MessageCircle, title: 'Talk to real characters',    body: '25 real-life scenarios. Pronunciation scored every turn.', tour: 'conversations' },
                { icon: Volume2,       title: 'Hear yourself say it right', body: 'Clone your voice. Hear any text spoken in your voice.', tour: 'voice' },
                { icon: TrendingUp,    title: 'Track what matters',         body: 'See your trouble sounds. Watch them improve over time.', tour: 'progress' },
              ].map((p, i) => {
                const Icon = p.icon;
                const active = i === activePillar;
                return (
                  <button key={p.title} className={`pillar ${active ? 'active' : ''}`} onClick={() => setActivePillar(i)}>
                    <div className="pillar-progress">
                      <span className={`pillar-progress-bar ${active && pillarsVisible ? 'running' : ''}`} key={`${i}-${activePillar}`} />
                    </div>
                    <div className="pillar-icon"><Icon size={22} strokeWidth={2.2} /></div>
                    <div className="pillar-text">
                      <h3>{p.title}</h3>
                      <p>{p.body}</p>
                      {active && (
                        <a href={`/welcome/${p.tour}`} className="pillar-tour-link" onClick={(e) => e.stopPropagation()}>
                          Take the {p.title.split(' ')[0]} Tour <ArrowRight size={12} strokeWidth={2.5} />
                        </a>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="pillars-visual"><PillarVisual active={activePillar} cefrLevel={cefrLevel} onCefrChange={setCefrLevel} /></div>
          </div>
          <div className="placeholder-disclaimer center mt-2">{content.disclaimerPillars}</div>
        </div>
      </section>

      {/* CONVERSATIONS */}
      <section className="convo-section">
        <div className="container convo-grid">
          <div className="convo-text">
            <div className="kicker">02 · Conversations</div>
            <h2 className="section-title">Practice <span className="accent">real conversations</span> — not flashcards.</h2>
            <p className="section-sub">
              Twenty-five scenarios. Fifty AI characters with real personalities. Every turn you take, your pronunciation gets scored — without breaking the flow of natural dialogue.
            </p>
            <a href="#" className="btn btn-primary inline">
              Browse scenarios <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
          <div className="convo-visual"><ConvoMock flipped={convoFlipped} onFlip={() => setConvoFlipped(f => !f)} /></div>
        </div>
      </section>

      {/* BEHIND LUX 3-UP — placeholder content marked clearly */}
      <section className="behind-lux">
        <div className="container">
          <div className="section-head center">
            <div className="kicker">{content.behindLuxEyebrow}</div>
            <h2 className="section-title">{content.behindLuxTitle}</h2>
          </div>
          <div className="bl-grid">
            {BEHIND_LUX.map(card => {
              const Icon = card.icon;
              return (
                <div className="bl-card" key={card.id}>
                  <div className="bl-icon"><Icon size={24} strokeWidth={2.2} /></div>
                  <span className="bl-eyebrow">{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <button className="bl-link">
                    {card.cta} <ChevronRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASE CAROUSEL — replaces former scenarios strip */}
      <section className="use-cases">
        <div className="container">
          <div className="section-head center">
            <div className="kicker">{content.useCasesEyebrow}</div>
            <h2 className="section-title">{content.useCasesTitle}</h2>
            <p className="section-sub">{content.useCasesSubtitle}</p>
          </div>
        </div>
        <div className="uc-strip">
          <div className="uc-track">
            {[...USE_CASES, ...USE_CASES].map((u, i) => {
              const Icon = u.icon;
              return (
                <button className="uc-card" key={`${u.id}-${i}`}>
                  <div className="uc-icon"><Icon size={22} strokeWidth={2.2} /></div>
                  <h4>{u.title}</h4>
                  <span className="uc-link">Explore how <ArrowRight size={12} strokeWidth={2.5} /></span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="section-head center">
            <div className="kicker">Start practicing</div>
            <h2 className="section-title">{content.ctaTitle}</h2>
            <p className="section-sub">{content.ctaSubtitle}</p>
          </div>
          <div className="cta-grid cta-grid-five">
            {[
              { icon: Activity,      tag: 'Pronunciation',  title: 'Practice Pronunciation', body: 'Read passages or type your own. Get phoneme-level scoring on every word, every sound.', cta: 'Take the Pronunciation Tour', tour: 'pronunciation' },
              { icon: Sparkles,      tag: 'Coach',          title: 'Get Coached',            body: 'Three coach personalities. Six-angle feedback. Responses in your first language.',         cta: 'Take the Coach Tour',         tour: 'coach' },
              { icon: Volume2,       tag: 'Voice',          title: 'Train Your Voice',       body: 'Hear yourself back. Slow it down. Hear it spoken correctly — in your own cloned voice.', cta: 'Take the Voice Tour',         tour: 'voice' },
              { icon: MessageCircle, tag: 'Conversations',  title: 'Hold Real Conversations',body: '25 scenarios. 50 characters. Score every turn without breaking the flow of dialogue.', cta: 'Take the Conversations Tour', tour: 'conversations' },
              { icon: TrendingUp,    tag: 'Progress',       title: 'Track Your Progress',    body: 'Cross-mode aggregation. Personalized recommendations. Every session preserved forever.', cta: 'Take the Progress Tour',      tour: 'progress' },
            ].map(c => {
              const Icon = c.icon;
              return (
                <a className="cta-card" key={c.title} href={`/welcome/${c.tour}`}>
                  <div className="cta-icon"><Icon size={20} strokeWidth={2.2} /></div>
                  <span className="cta-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <span className="cta-link">{c.cta} <ChevronRight size={14} strokeWidth={2.5} /></span>
                </a>
              );
            })}
          </div>
        </div>
        <footer className="footer">
          <div className="footer-inner container">
            <div className="footer-brand">
              <span className="nav-mark small"><span className="nav-mark-inner" /></span>
              <span>Lux · English pronunciation</span>
            </div>
            <div className="footer-meta">A practice product by Mark Huguley</div>
          </div>
        </footer>
      </section>

      {/* IMPROVE PANEL */}
      <div className={`improve-panel ${panelOpen ? 'open' : ''}`}>
        <button className="improve-toggle" onClick={() => setPanelOpen(!panelOpen)}>
          {panelOpen ? <span style={{ fontSize: 16, fontWeight: 700 }}>×</span> : <Sparkles size={16} strokeWidth={2.5} />}
          {!panelOpen && <span>Improve</span>}
          {!panelOpen && lastScore !== null && (
            <span className={`score-pill ${lastScore >= 9 ? 'high' : lastScore >= 7 ? 'mid' : 'low'}`}>
              {lastScore}/10
            </span>
          )}
        </button>
        {panelOpen && (
          <div className="improve-body">
            <div className="improve-head">
              <div>
                <div className="improve-title">Self-Critique Loop</div>
                <div className="improve-sub">21 focus areas · Tours architecture · v8.0c (real backend mic + Web Audio + loading video + mock fallback)</div>
              </div>
            </div>
            <div className="improve-actions">
              <button className="ip-btn primary" disabled={isImproving || autoMode} onClick={() => runOneIteration()}>
                {isImproving && !autoMode ? <Loader2 size={14} className="spin" strokeWidth={2.5} /> : <Zap size={14} strokeWidth={2.5} />}
                Improve once
              </button>
              <button className={`ip-btn ${autoMode ? 'pause' : ''}`} disabled={isImproving && !autoMode} onClick={() => setAutoMode(!autoMode)}>
                {autoMode ? <><Pause size={14} strokeWidth={2.5} /> Pause</> : <><Play size={14} strokeWidth={2.5} /> Auto</>}
              </button>
              <button className="ip-btn ghost" onClick={resetToDefault} disabled={isImproving}>
                <RotateCw size={14} strokeWidth={2.5} /> Reset
              </button>
            </div>

            <div className="improve-actions persist-row">
              <button className="ip-btn save" onClick={saveStateToFile} title="Download current state as JSON">
                <Download size={14} strokeWidth={2.5} /> Save
              </button>
              <button className="ip-btn" onClick={() => fileInputRef.current?.click()} title="Load saved JSON state">
                <Upload size={14} strokeWidth={2.5} /> Load
              </button>
              <button className="ip-btn" onClick={copyStateToClipboard} title="Copy state JSON to clipboard">
                {justCopied ? <><Check size={14} strokeWidth={2.5} /> Copied!</> : <><Code2 size={14} strokeWidth={2.5} /> Copy</>}
              </button>
              <button
                className={`ip-btn ${showStateJson ? 'primary' : 'ghost'}`}
                onClick={() => setShowStateJson(!showStateJson)}
                title="Toggle inline JSON view"
              >
                {showStateJson ? 'Hide' : 'View'}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json,.json"
                style={{ display: 'none' }}
                onChange={loadStateFromFile}
              />
            </div>

            {showStateJson && (
              <div className="state-json-block">
                <div className="state-json-head">
                  <span>State preview · {iterations.length} iteration{iterations.length === 1 ? '' : 's'}</span>
                  <button className="sjb-copy" onClick={copyStateToClipboard}>
                    {justCopied ? 'Copied!' : 'Copy all'}
                  </button>
                </div>
                <pre className="state-json-pre">
                  {JSON.stringify(buildSavedState(), null, 2)}
                </pre>
              </div>
            )}
            {iterError && <div className="iter-error">⚠ {iterError}</div>}
            <div className="iter-list">
              {iterations.length === 0 && (
                <div className="iter-empty">
                  No iterations yet. Click <strong>Improve once</strong> or <strong>Auto</strong>.
                </div>
              )}
              {iterations.slice().reverse().map((it, idxRev) => {
                const idx = iterations.length - idxRev;
                return (
                  <div className="iter-row" key={it.ts}>
                    <div className="iter-row-head">
                      <span className="iter-num">v{idx}</span>
                      <span className={`iter-score ${it.score >= 9 ? 'high' : it.score >= 7 ? 'mid' : 'low'}`}>{it.score}/10</span>
                      <span className="iter-focus">{it.focus}</span>
                    </div>
                    <div className="iter-critique">{it.critique}</div>
                    <div className="iter-changes">
                      {Object.entries(it.changes || {}).map(([k, v]) => (
                        <span key={k} className="change-pill">
                          <span className="ck">{k}</span>
                          <span className="cv">{typeof v === 'string' && v.length > 22 ? v.slice(0, 22) + '…' : String(v)}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PILLAR VISUAL
// ═══════════════════════════════════════════════════════════════════
function PillarVisual({ active, cefrLevel, onCefrChange }) {
  const cefrData = CEFR_DEMO_LEVELS[cefrLevel] || CEFR_DEMO_LEVELS.B2;
  return (
    <div className="pv-stage">
      <div className={`pv-card ${active === 0 ? 'on' : ''}`}>
        <div className="pv-mini-frame">
          {/* CEFR toggle tabs (Chrome Safety toggle-compare pattern) */}
          <div className="pv-cefr-tabs" role="tablist">
            {['A2', 'B2', 'C1'].map(lvl => (
              <button
                key={lvl}
                role="tab"
                aria-selected={cefrLevel === lvl}
                className={`pv-cefr-tab ${cefrLevel === lvl ? 'active' : ''}`}
                onClick={() => onCefrChange?.(lvl)}
              >
                {lvl}
              </button>
            ))}
            <span className="pv-cefr-label">Same passage · stricter scoring at higher levels</span>
          </div>

          <div className="pv-passage">
            {['The', 'birch', 'canoe', 'slid', 'on', 'smooth', 'planks'].map((w, i, arr) => {
              const cls =
                w === cefrData.activeWord ? 'word active' :
                i < arr.indexOf(cefrData.activeWord) ? 'word done' : 'word';
              return (
                <span key={w}>
                  <span className={cls}>{w}</span>{i < arr.length - 1 ? ' ' : '.'}
                </span>
              );
            })}
          </div>

          <div className="pv-score-row">
            <LuxCefrCoin
              score={cefrData.score}
              ringColor="var(--score-good)"
              size="medium"
              key={cefrLevel /* re-key on level change so coin re-mounts */ }
            />
            <div className="pv-mini-chips">
              {cefrData.troublePhonemes.map((p, i) => (
                <span key={`${cefrLevel}-${p}`} className="pv-chip"
                      style={{ animationDelay: `${i * 120}ms` }}>{p}</span>
              ))}
            </div>
          </div>

          <div className="pv-cefr-explainer">{cefrData.explainer}</div>
        </div>
      </div>

      {/* PILLAR 2 — COACH (NEW) */}
      <div className={`pv-card ${active === 1 ? 'on' : ''}`}>
        <div className="pv-mini-frame coach-frame">
          <div className="pv-coach-tabs">
            <span className="pv-coach-tab active">Tutor</span>
            <span className="pv-coach-tab">Sergeant</span>
            <span className="pv-coach-tab">Expert</span>
          </div>
          <div className="pv-coach-quote">
            <span className="pv-coach-icon"><Sparkles size={16} strokeWidth={2.2} /></span>
            <p>
              Nice work on <em>throughout</em>! Your /θ/ sound is <strong>71%</strong> — close, but the tongue's a bit too far back. Try touching it lightly to the back of your top teeth.
            </p>
          </div>
          <div className="pv-coach-meta">
            <span className="pv-coach-chip">Quick Tip</span>
            <span className="pv-coach-chip">→ Deep Dive</span>
            <span className="pv-coach-chip">·  L1: English</span>
          </div>
        </div>
      </div>

      {/* PILLAR 3 — CONVERSATIONS (was active===1) */}
      <div className={`pv-card ${active === 2 ? 'on' : ''}`}>
        <div className="pv-mini-frame">
          <div className="pv-bubble user">I'd like to make a reservation for Friday.</div>
          <div className="pv-bubble ai">
            <span className="pv-portrait">M</span>
            <span>Of course! How many people, and what time?</span>
          </div>
          <div className="pv-bubble user with-score">
            Two people at <span className="hl">7 PM</span>.
            <span className="pv-turn-score">88</span>
          </div>
        </div>
      </div>

      {/* PILLAR 4 — VOICE (was active===2) */}
      <div className={`pv-card ${active === 3 ? 'on' : ''}`}>
        <div className="pv-mini-frame voice-frame">
          <div className="pv-voice-row">
            <span className="pv-voice-lbl">You</span>
            <div className="pv-voice-wave">
              {Array(28).fill(0).map((_, i) => (
                <span key={i} className="pv-vw-bar"
                  style={{ height: `${20 + Math.abs(Math.sin(i * 0.5) * 30) + (i * 7 % 12)}%` }} />
              ))}
            </div>
          </div>
          <div className="pv-voice-row">
            <span className="pv-voice-lbl">Your clone</span>
            <div className="pv-voice-wave smooth">
              {Array(28).fill(0).map((_, i) => (
                <span key={i} className="pv-vw-bar"
                  style={{ height: `${30 + Math.abs(Math.sin(i * 0.5) * 35)}%` }} />
              ))}
            </div>
          </div>
          <div className="pv-voice-text">"thoroughly thoughtful thoughts"</div>
        </div>
      </div>

      {/* PILLAR 5 — PROGRESS (was active===3) */}
      <div className={`pv-card ${active === 4 ? 'on' : ''}`}>
        <div className="pv-mini-frame">
          <div className="pv-trend-head">
            <span className="pv-trend-num">+14</span>
            <span className="pv-trend-lbl">accuracy this week</span>
          </div>
          <svg viewBox="0 0 280 100" className="pv-trend-chart">
            <path d="M 10 80 L 50 75 L 90 65 L 130 55 L 170 50 L 210 38 L 270 25"
              fill="none" stroke="var(--score-good)" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="400" strokeDashoffset={active === 4 ? '0' : '400'}
              style={{ transition: 'stroke-dashoffset 1.5s var(--ease-drawer)' }} />
            <path d="M 10 80 L 50 75 L 90 65 L 130 55 L 170 50 L 210 38 L 270 25 L 270 100 L 10 100 Z"
              fill="var(--score-good)" opacity="0.08" />
          </svg>
          <div className="pv-trouble">
            <span className="pv-tr-lbl">Trouble sounds</span>
            <div className="pv-tr-row">
              <span className="pv-chip resolved">/ɜːr/</span>
              <span className="pv-chip resolved">/θ/</span>
              <span className="pv-chip">/v/</span>
              <span className="pv-chip">/ʃ/</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConvoMock({ flipped, onFlip }) {
  return (
    <div className="convo-mock">
      <div
        className={`cm-flip-wrap ${flipped ? 'flipped' : ''}`}
        onClick={onFlip}
        role="button"
        tabIndex={0}
        aria-label="Flip card to see character details"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onFlip();
          }
        }}
      >
        {/* FRONT FACE — rotates from 0deg to 180deg on flip */}
        <div className="cm-frame cm-face cm-face-front">
          <div className="cm-head">
            <div className="cm-portrait">M</div>
            <div>
              <div className="cm-name">Miguel · Restaurant Host</div>
              <div className="cm-scenario">At the Restaurant · A2-B1</div>
            </div>
            <span className="cm-status"><span className="dot" /> Speaking</span>
          </div>
          <div className="cm-body">
            <div className="cm-bubble user delay-0">Hi, do you have a table for two?</div>
            <div className="cm-score-card delay-1"><span>Pronunciation</span><strong>92</strong></div>
            <div className="cm-bubble ai delay-2">We do! Right by the window. Follow me.</div>
            <div className="cm-bubble user delay-3">Thank you, that <span className="hl">sounds wonderful</span>.</div>
            <div className="cm-score-card delay-4"><span>Pronunciation</span><strong>87</strong></div>
          </div>
          <div className="cm-flip-hint">↻ Hover to peek · click to meet Miguel</div>
        </div>

        {/* BACK FACE — rotates from -180deg to 0deg on flip (independent) */}
        <div className="cm-frame cm-face cm-face-back">
          <div className="cm-back-head">
            <div className="cm-portrait cm-portrait-large">M</div>
            <div>
              <div className="cm-back-name">Miguel</div>
              <div className="cm-back-role">Restaurant Host · Sevilla → NYC</div>
            </div>
          </div>
          <div className="cm-back-body">
            <p className="cm-back-bio">
              Born in Sevilla, moved to New York at 23. Speaks Spanish-accented English with patience to spare. Remembers what it felt like not to be understood, and runs the front of house like every guest is a friend who just walked in.
            </p>
            <div className="cm-back-meta">
              <div className="cm-back-meta-row">
                <span className="cm-back-meta-lbl">CEFR target</span>
                <span className="cm-back-meta-val">A2 — B1</span>
              </div>
              <div className="cm-back-meta-row">
                <span className="cm-back-meta-lbl">Tone preset</span>
                <span className="cm-back-meta-val">friendly · neutral</span>
              </div>
              <div className="cm-back-meta-row">
                <span className="cm-back-meta-lbl">Length</span>
                <span className="cm-back-meta-val">short</span>
              </div>
              <div className="cm-back-meta-row">
                <span className="cm-back-meta-lbl">Score expected</span>
                <span className="cm-back-meta-val">85+ comprehensible</span>
              </div>
            </div>
            <a
              href="/welcome/conversations"
              className="cm-back-cta"
              onClick={(e) => e.stopPropagation()}
            >
              Practice this scenario <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CSS
// ═══════════════════════════════════════════════════════════════════
const CSS_TEMPLATE = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

.lux-root {
  font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  min-height: 100vh; position: relative; overflow-x: hidden;
  background-image:
    radial-gradient(ellipse 70% 50% at 15% 5%, rgba(0, 120, 215, 0.045), transparent 70%),
    radial-gradient(ellipse 70% 50% at 95% 25%, rgba(37, 99, 235, 0.03), transparent 70%);
}
.lux-root *, .lux-root *::before, .lux-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }

/* NAV */
.lux-nav { position: sticky; top: 0; z-index: 100; background: rgba(255, 255, 255, 0.85); backdrop-filter: saturate(180%) blur(12px); border-bottom: 1px solid rgba(226, 232, 240, 0.7); }
.nav-inner { max-width: var(--max-w); margin: 0 auto; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
.nav-brand { display: flex; align-items: center; gap: 0.55rem; }
.nav-mark { width: 24px; height: 24px; border-radius: 7px; background: var(--ink); display: inline-flex; align-items: center; justify-content: center; }
.nav-mark.small { width: 18px; height: 18px; border-radius: 5px; }
.nav-mark-inner { width: 9px; height: 9px; background: var(--brand); border-radius: 2px; }
.nav-mark.small .nav-mark-inner { width: 7px; height: 7px; }
.nav-name { font-weight: 800; font-size: 1.1rem; letter-spacing: -0.01em; }
.nav-links { display: flex; gap: 2rem; }
.nav-link { color: var(--ink-soft); text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 160ms var(--ease-drawer); }
.nav-link:hover { color: var(--ink); }
.nav-actions { display: flex; align-items: center; gap: 0.75rem; }
.nav-signin { background: transparent; border: none; color: var(--ink-soft); font-size: 0.95rem; font-weight: 600; font-family: inherit; cursor: pointer; padding: 0.5rem 0.75rem; }
.nav-signin:hover { color: var(--ink); }
.nav-cta { background: var(--brand); color: #fff; border: none; font-size: 0.92rem; font-weight: 700; font-family: inherit; padding: 0.6rem 1.05rem; border-radius: 999px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem; transition: background 200ms var(--ease-drawer), transform 200ms var(--ease-pop); box-shadow: 0 2px 8px rgba(0, 120, 215, 0.18); }
.nav-cta:hover { background: var(--brand-hover); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0, 120, 215, 0.28); }
@media (max-width: 800px) { .nav-links { display: none; } }

/* TOURS SUBNAV — present on every page, drives the multi-page system */
.lux-subnav {
  background: var(--slate-50);
  border-bottom: 1px solid var(--line);
  font-family: 'JetBrains Mono';
}
.subnav-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0.55rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
  font-size: 0.75rem;
}
.subnav-label {
  font-weight: 800;
  color: var(--ink-soft);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.subnav-divider {
  color: var(--ink-faint);
  margin: 0 0.15rem;
}
.subnav-item-wrap {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.subnav-item {
  color: var(--ink-soft);
  text-decoration: none;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 5px;
  transition: all 200ms var(--ease-drawer);
  letter-spacing: 0.01em;
}
.subnav-item:hover {
  color: var(--brand);
  background: #fff;
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.06);
}
.subnav-item.active {
  color: var(--brand);
  background: #fff;
  font-weight: 800;
}
.subnav-sep {
  color: var(--ink-faint);
  font-size: 0.7rem;
}
@media (max-width: 720px) {
  .subnav-inner { font-size: 0.68rem; padding: 0.4rem 1rem; gap: 0.3rem; }
}

/* HERO V7 — kinetic typography (Chrome Safety pattern) */
.hero-v7 { padding: 5.5rem 0 4rem; }
.hero-v7-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: 3rem;
  align-items: center;
}
@media (max-width: 1180px) {
  .hero-v7-inner { grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr); gap: 2.5rem; }
}
@media (max-width: 980px) {
  .hero-v7-inner { grid-template-columns: 1fr; gap: 3rem; }
  .hero-v7 { padding: 4rem 0 3rem; }
}

.hero-headline-v7 {
  font-family: 'Montserrat'; font-weight: var(--hero-weight);
  font-size: clamp(3.5rem, 6.5vw, var(--hero-size));
  line-height: var(--hero-lh);
  letter-spacing: var(--hero-tracking);
  color: var(--ink);
  display: inline;
}
.hero-headline-v7 .chunk { display: inline; }
.hero-headline-v7 .chunk:not(:last-child)::after { content: ' '; }

.hh-cycle-wrap {
  display: inline-flex;
  vertical-align: baseline;
  align-items: baseline;
  margin: 0 0.1em;
  padding: 0.02em 0.22em;
  background: linear-gradient(135deg, var(--brand) 0%, #2563EB 100%);
  color: #fff;
  border-radius: 0.14em;
  position: relative;
  overflow: hidden;
  min-width: 0;
  justify-content: center;
  opacity: 0; transform: scale(0.85);
  transition: opacity 600ms var(--ease-drawer), transform 600ms var(--ease-pop);
  box-shadow: 0 8px 24px rgba(0, 120, 215, 0.28);
}
.hh-cycle-wrap.in { opacity: 1; transform: scale(1); }
.hh-cycle {
  display: inline-block;
  transition: transform 360ms var(--ease-drawer), opacity 360ms var(--ease-drawer);
  transform-origin: center;
  font-weight: 900;
  letter-spacing: -0.02em;
}
.hh-cycle.flipping { transform: rotateX(90deg); opacity: 0; }

/* Hero playback controls — subtle, floating, no border */
.hero-controls {
  display: inline-flex; align-items: center; gap: 0.45rem;
  margin-top: 1.5rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  opacity: 0; transform: translateY(6px);
  transition: opacity 500ms var(--ease-drawer), transform 500ms var(--ease-drawer);
}
.hero-controls.in { opacity: 0.55; transform: translateY(0); }
.hero-controls:hover { opacity: 1; }
.hc-btn {
  width: 24px; height: 24px;
  display: inline-flex; align-items: center; justify-content: center;
  background: transparent; color: var(--ink-faint);
  border: none; border-radius: 999px;
  cursor: pointer;
  transition: all 200ms var(--ease-drawer);
}
.hc-btn:hover { color: var(--brand); transform: scale(1.15); }
.hc-label {
  font-family: 'JetBrains Mono';
  font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--ink-faint);
  padding-right: 0.35rem;
  text-transform: uppercase;
}

/* HERO VIDEO — Chrome AI Innovations style ambient autoplay */
.hero-video-section {
  padding: 0 0 5rem;
  background: var(--bg);
}
.hv-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 540px;
  background: linear-gradient(135deg, var(--slate-50) 0%, var(--slate-100) 100%);
  border-radius: 18px;
  border: 1px solid var(--line);
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.08);
}
.hv-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  color: var(--ink-faint);
  font-family: 'JetBrains Mono';
}
.hv-play-icon {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: var(--brand);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.12);
}
.hv-label {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--ink-soft);
}
.hv-sub {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--ink-faint);
  letter-spacing: 0.04em;
}
.hv-controls {
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.85rem;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
}
.hv-ctrl-btn {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 999px;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 200ms var(--ease-drawer);
}
.hv-ctrl-btn:hover {
  background: var(--ink);
  color: #fff;
}
.hv-ctrl-label {
  font-family: 'JetBrains Mono';
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--ink-faint);
  padding-left: 0.25rem;
}

/* MANIFESTO — word-by-word reveal with icon wake-ups */
.manifesto-section {
  padding: 3rem 0 5rem;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}
.manifesto-line {
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
  line-height: 1.55;
  letter-spacing: -0.015em;
  color: var(--ink-soft);
  text-align: center;
  max-width: 920px;
  margin: 0 auto;
}
.m-word, .m-phrase, .m-connect {
  display: inline-block;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 600ms var(--ease-drawer), transform 600ms var(--ease-drawer);
  margin-right: 0.32em;
}
.m-word.in, .m-phrase.in, .m-connect.in {
  opacity: 1; transform: translateY(0);
}
.m-phrase {
  color: var(--ink);
  font-weight: 800;
  font-style: italic;
}
.m-icon {
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  margin: 0 0.32em 0 -0.05em;
  color: var(--ink-faint);
  background: var(--slate-50);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.25rem 0.4rem;
  transition: all 800ms var(--ease-drawer);
  transform: scale(0.85);
  opacity: 0.55;
}
.m-icon.active {
  color: var(--brand);
  background: var(--score-good-bg);
  border-color: var(--brand);
  transform: scale(1);
  opacity: 1;
  box-shadow: 0 4px 14px rgba(0, 120, 215, 0.18);
}
.m-icon-chip .mic-ipa-chip,
.m-icon-score .mic-score-chip {
  font-family: 'JetBrains Mono';
  font-weight: 800;
  font-size: 0.95rem;
  padding: 0.05rem 0.15rem;
  letter-spacing: 0.01em;
}
.m-icon-score .mic-score-chip { color: inherit; }
.m-icon.active .mic-ipa-chip,
.m-icon.active .mic-score-chip { color: var(--brand); }

/* CEFR toggle in Pillar 1 visual */
.pv-cefr-tabs {
  display: flex; align-items: center; gap: 0.4rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--line);
  flex-wrap: wrap;
}
.pv-cefr-tab {
  font-family: 'JetBrains Mono';
  font-size: 0.85rem; font-weight: 800;
  padding: 0.35rem 0.8rem;
  background: #fff;
  color: var(--ink-soft);
  border: 1px solid var(--line);
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: all 220ms var(--ease-drawer);
}
.pv-cefr-tab:hover { border-color: var(--ink); color: var(--ink); }
.pv-cefr-tab.active {
  background: var(--ink);
  color: var(--brand);
  border-color: var(--ink);
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.16);
}
.pv-cefr-label {
  font-size: 0.72rem;
  color: var(--ink-faint);
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-left: 0.5rem;
}
.pv-cefr-explainer {
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--line);
  font-size: 0.85rem;
  font-style: italic;
  font-weight: 500;
  color: var(--ink-soft);
  line-height: 1.5;
}

/* HERO V5 — left/right split */
.hero-v5 { padding: 5.5rem 0 6rem; }
.hero-v5-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 4rem;
  align-items: center;
}
@media (max-width: 980px) {
  .hero-v5-inner { grid-template-columns: 1fr; gap: 3rem; }
  .hero-v5 { padding: 4rem 0 4rem; }
}

.hero-text { display: flex; flex-direction: column; align-items: flex-start; }
@media (max-width: 980px) { .hero-text { align-items: center; text-align: center; } }

.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-size: 0.85rem; font-weight: 700; letter-spacing: 0.005em;
  color: var(--ink-soft); margin-bottom: 2rem;
  padding: 0.45rem 1rem; background: #fff;
  border: 1px solid var(--line); border-radius: 999px;
  opacity: 0; transform: translateY(8px);
  transition: opacity 700ms var(--ease-drawer), transform 700ms var(--ease-drawer);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
}
.hero-eyebrow.in { opacity: 1; transform: translateY(0); }
.hero-eyebrow .dot { width: 7px; height: 7px; background: var(--brand); border-radius: 50%; position: relative; }
.hero-eyebrow .dot::before { content: ''; position: absolute; inset: -3px; border-radius: 50%; background: var(--brand); opacity: 0.3; animation: ping 2.4s var(--ease-drawer) infinite; }

.hero-headline {
  font-family: 'Montserrat'; font-weight: var(--hero-weight);
  font-size: var(--hero-size); line-height: var(--hero-lh);
  letter-spacing: var(--hero-tracking);
  color: var(--ink);
}
.hero-headline .accent { color: var(--brand); }
.underline-word { position: relative; display: inline-block; }
.underline-word.in::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0.05em;
  height: 0.12em; background: var(--brand); border-radius: 0.06em; opacity: 0.18;
  animation: underlineDraw 600ms var(--ease-drawer) 200ms backwards;
}
@keyframes underlineDraw { from { transform: scaleX(0); transform-origin: left; } to { transform: scaleX(1); } }

.chunk { display: inline-block; opacity: 0; transform: translateY(20px); transition: opacity 650ms var(--ease-drawer), transform 650ms var(--ease-drawer); }
.chunk.in { opacity: 1; transform: translateY(0); }

.iv {
  display: inline-flex; vertical-align: middle; align-items: center;
  margin: 0 0.18em; opacity: 0; transform: scale(0.5);
  transition: opacity 550ms var(--ease-drawer), transform 550ms var(--ease-pop);
}
.iv.in { opacity: 1; transform: scale(1); }

.iv-chip {
  display: inline-flex; align-items: center; justify-content: center;
  font-family: 'JetBrains Mono'; font-size: 0.42em; font-weight: 600;
  padding: 0.5em 1em; background: var(--ink); color: #fff;
  border-radius: 999px; letter-spacing: 0.01em;
  position: relative; top: -0.15em;
  min-width: 5em; height: 2em; perspective: 600px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.32);
}
.iv-chip-track { display: inline-block; transform-origin: center; transition: transform 320ms var(--ease-drawer), opacity 320ms var(--ease-drawer); }
.iv-chip-track.flipping { transform: rotateX(90deg); opacity: 0; }

.hero-sub {
  margin-top: 1.75rem; font-size: clamp(1rem, 1.4vw, 1.2rem);
  font-weight: 500; line-height: 1.55; color: var(--ink-soft);
  max-width: 520px;
  opacity: 0; transform: translateY(8px);
  transition: opacity 700ms var(--ease-drawer), transform 700ms var(--ease-drawer);
}
.hero-sub.in { opacity: 1; transform: translateY(0); }

.hero-actions {
  margin-top: 2rem; display: flex; gap: 0.75rem;
  opacity: 0; transform: translateY(8px);
  transition: opacity 600ms var(--ease-drawer), transform 600ms var(--ease-drawer);
  flex-wrap: wrap;
}
.hero-actions.in { opacity: 1; transform: translateY(0); }

/* HERO PANEL — featured score moment */
.hero-panel {
  background: #fff;
  border-radius: 24px;
  border: 1px solid var(--line);
  padding: 1.75rem 1.75rem 1.5rem;
  position: relative;
  box-shadow:
    0 1px 3px rgba(15, 23, 42, 0.04),
    0 12px 32px rgba(15, 23, 42, 0.06),
    0 32px 80px rgba(15, 23, 42, 0.08);
  opacity: 0; transform: translateY(28px) scale(0.97);
  transition: opacity 850ms var(--ease-drawer), transform 850ms var(--ease-drawer);
}
.hero-panel.in { opacity: 1; transform: translateY(0) scale(1); }

.hero-panel::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(0, 120, 215, 0.04), transparent 50%, rgba(37, 99, 235, 0.04));
  pointer-events: none;
}

.hero-panel-bar {
  display: flex; align-items: center; gap: 0.55rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--line);
  margin-bottom: 1.5rem;
}
.hero-panel-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--score-good); position: relative; }
.hero-panel-dot::before { content: ''; position: absolute; inset: -3px; border-radius: 50%; background: var(--score-good); opacity: 0.3; animation: ping 2.4s var(--ease-drawer) infinite; }
.hero-panel-label { font-size: 0.78rem; font-weight: 700; color: var(--ink-soft); letter-spacing: 0.04em; }

.hero-panel-coin-wrap {
  display: flex; justify-content: center;
  padding: 0.5rem 0 1.5rem;
}

.hero-panel-meta { display: flex; flex-direction: column; gap: 1rem; }
.hpm-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.hpm-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); }
.hpm-chips { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.hpm-chip {
  font-family: 'JetBrains Mono'; font-size: 0.82rem; font-weight: 700;
  padding: 0.25rem 0.55rem; border-radius: 6px;
  opacity: 0; transform: translateY(6px) scale(0.92);
  animation: phChipIn 500ms var(--ease-pop) forwards;
}
.hpm-chip[data-tier="good"] { background: var(--score-good-bg); color: var(--score-good); }
.hpm-chip[data-tier="warn"] { background: var(--score-warn-bg); color: var(--score-warn); }
.hpm-chip[data-tier="bad"]  { background: var(--score-bad-bg);  color: var(--score-bad); }
.hpm-trend { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--score-good); font-weight: 700; font-size: 0.92rem; }
.hpm-trend strong { font-weight: 900; font-size: 1.05rem; }
.hpm-trend-lbl { font-weight: 500; color: var(--ink-soft); }

.hero-panel-hint {
  margin-top: 1.5rem; padding-top: 1.25rem;
  border-top: 1px dashed var(--line);
  font-size: 0.78rem; font-weight: 500; color: var(--ink-faint); text-align: center;
  animation: floatHint 2.6s var(--ease-drawer) infinite 1s;
}
.hphi-arrow { display: inline-block; color: var(--brand); font-weight: 800; margin-right: 0.3rem; }
@keyframes floatHint { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

.btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Montserrat'; font-size: 0.97rem; font-weight: 700; padding: 0.85rem 1.4rem; border-radius: 999px; border: 1px solid transparent; cursor: pointer; text-decoration: none; transition: all 220ms var(--ease-drawer); }
.btn-primary { background: var(--brand); color: #fff; box-shadow: 0 2px 8px rgba(0, 120, 215, 0.2); }
.btn-primary:hover { background: var(--brand-hover); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0, 120, 215, 0.32); }
.btn-ghost { background: transparent; color: var(--ink); border-color: var(--line); }
.btn-ghost:hover { background: #fff; border-color: var(--ink); }
.btn.inline { margin-top: 1.75rem; }

/* MIC */
.mic-section { padding: 1.5rem 1.5rem 6rem; display: flex; justify-content: center; }
.mic-frame { width: 100%; max-width: 760px; background: #fff; border-radius: var(--card-radius); box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06), 0 32px 80px rgba(15, 23, 42, 0.08); overflow: hidden; border: 1px solid var(--line); animation: floatUp 850ms var(--ease-drawer) 600ms backwards; }
@keyframes floatUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
.mic-bar { display: flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1rem; background: var(--slate-50); border-bottom: 1px solid var(--line); }
.mic-dots { display: flex; gap: 6px; }
.mic-dots span { width: 11px; height: 11px; border-radius: 50%; background: var(--slate-200); }
.mic-url { flex: 1; text-align: center; font-family: 'JetBrains Mono'; font-size: 0.78rem; color: var(--ink-soft); background: var(--bg); padding: 0.4rem 0.9rem; border-radius: 8px; border: 1px solid var(--line); margin: 0 4rem 0 1rem; }
.mic-url .lock { opacity: 0.5; margin-right: 0.3rem; color: var(--brand); }
.mic-body { padding: 3.5rem 3rem 3rem; text-align: center; }
.mic-step-row { display: inline-flex; align-items: center; gap: 0.6rem; margin-bottom: 1.25rem; }
.mic-step-num { font-family: 'JetBrains Mono'; font-size: 0.78rem; font-weight: 700; background: var(--brand); color: #fff; padding: 0.2rem 0.5rem; border-radius: 4px; letter-spacing: 0.05em; }
.mic-step-lbl { font-size: 0.78rem; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: var(--brand); }
.mic-prompt { font-weight: 500; font-size: 1.15rem; color: var(--ink-soft); margin-bottom: 0.4rem; }
.mic-word { font-family: 'Montserrat'; font-weight: 900; font-size: clamp(4.5rem, 12vw, 7.5rem); line-height: 0.95; letter-spacing: -0.05em; color: var(--ink); margin: 0.4rem 0 0.8rem; }
.mic-phonetic { font-family: 'JetBrains Mono'; font-size: 1.2rem; font-weight: 500; color: var(--brand); margin-bottom: 2.5rem; }
.mic-button { width: 92px; height: 92px; border-radius: 50%; background: var(--ink); border: none; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; position: relative; color: #fff; transition: transform 300ms var(--ease-pop), background 300ms ease; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18); }
.mic-button:hover { transform: scale(1.05); background: var(--brand); }
.mic-button:active { transform: scale(0.97); }
.mic-button::before, .mic-button::after { content: ''; position: absolute; inset: 0; border-radius: 50%; border: 2px solid var(--ink); opacity: 0; }
.mic-button.idle::before { animation: micPulse 2.4s var(--ease-drawer) infinite; }
.mic-button.idle::after  { animation: micPulse 2.4s var(--ease-drawer) 1.2s infinite; }
.mic-button.recording { background: var(--gold); }
.mic-button.recording::before, .mic-button.recording::after { border-color: var(--gold); }
.mic-button.recording::before { animation: recPulse 1.2s var(--ease-drawer) infinite; opacity: 1; }
.rec-wave { display: flex; align-items: center; justify-content: center; gap: 4px; height: 50px; margin: 1.6rem 0 0.4rem; }
.rec-wave .b { width: 4px; background: var(--gold); border-radius: 3px; height: 8px; animation: recWave 0.9s var(--ease-drawer) infinite; }
.mic-hint { margin-top: 1.4rem; font-size: 0.95rem; color: var(--ink-soft); min-height: 1.4em; font-weight: 500; }
.mic-hint strong { color: var(--ink); font-weight: 800; }
.mic-err { color: var(--score-bad); font-size: 0.85rem; font-family: 'JetBrains Mono'; }

/* Mic busy state — when uploading or analyzing */
.mic-button.busy {
  background: var(--ink-soft);
  cursor: wait;
}
.mic-button.busy:hover { transform: none; background: var(--ink-soft); }
.mic-button:disabled { opacity: 0.85; }

/* Loading-state video — inline placeholder during real backend latency.
   Mark backfills with explanatory video content later. */
.mic-loading-video {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  animation: fadeUp 400ms var(--ease-drawer);
}
.mlv-frame {
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--slate-50) 0%, var(--slate-100) 100%);
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
}
.mlv-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
}
.mlv-content {
  padding: 1.5rem 2rem;
  text-align: center;
  max-width: 90%;
}
.mlv-label {
  font-family: 'JetBrains Mono';
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: var(--brand);
  margin-bottom: 0.85rem;
}
.mlv-text {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--ink-soft);
  font-weight: 500;
}
.mlv-disclaimer {
  font-family: 'JetBrains Mono';
  font-size: 0.7rem;
  font-style: italic;
  color: var(--ink-faint);
  letter-spacing: 0.02em;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.mic-result { margin-top: 2.5rem; padding-top: 2.5rem; border-top: 1px solid var(--line); animation: floatUp 700ms var(--ease-drawer); }
.result-grid { display: grid; grid-template-columns: auto 1fr; gap: 2.5rem; align-items: center; text-align: left; padding: 0 0.5rem; }
@media (max-width: 700px) { .result-grid { grid-template-columns: 1fr; text-align: center; } }
.result-coin-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; }
.result-coin-hint { font-size: 0.7rem; font-weight: 600; color: var(--ink-faint); letter-spacing: 0.08em; text-transform: uppercase; }
.result-detail h3 { font-weight: 700; font-size: 1.3rem; letter-spacing: -0.015em; margin-bottom: 1.1rem; line-height: 1.3; }
.result-detail h3 .accent { color: var(--brand); }
.phonemes { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-bottom: 1.2rem; }
@media (max-width: 700px) { .phonemes { justify-content: center; } }
.ph-chip { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.45rem 0.75rem; background: #fff; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.88rem; opacity: 0; transform: translateY(8px) scale(0.9); animation: phChipIn 500ms var(--ease-pop) forwards; }
.ph-chip .ipa { font-family: 'JetBrains Mono'; font-weight: 700; color: var(--ink); }
.ph-chip .num { font-weight: 800; font-size: 0.95rem; }
.ph-chip[data-tier="good"] { background: var(--score-good-bg); border-color: var(--score-good); }
.ph-chip[data-tier="good"] .num { color: var(--score-good); }
.ph-chip[data-tier="warn"] { background: var(--score-warn-bg); border-color: var(--score-warn); }
.ph-chip[data-tier="warn"] .num { color: var(--score-warn); }
.ph-chip[data-tier="bad"] { background: var(--score-bad-bg); border-color: var(--score-bad); }
.ph-chip[data-tier="bad"] .num { color: var(--score-bad); }
.next-up { font-size: 0.95rem; color: var(--ink-soft); display: flex; align-items: center; gap: 0.5rem; padding-top: 0.75rem; border-top: 1px dashed var(--line); }
@media (max-width: 700px) { .next-up { justify-content: center; } }
.next-up .focus { font-family: 'JetBrains Mono'; background: var(--brand); color: #fff; padding: 0.2rem 0.5rem; border-radius: 5px; font-weight: 700; font-size: 0.85rem; }
.result-actions { margin-top: 2rem; display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }

/* SECTION HEADS */
.section-head { margin-bottom: 4.5rem; max-width: 800px; }
.section-head.center { margin-left: auto; margin-right: auto; text-align: center; }
.kicker { display: inline-block; font-family: 'JetBrains Mono'; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--brand); margin-bottom: 1.25rem; padding: 0.35rem 0.7rem; background: rgba(0, 120, 215, 0.08); border-radius: 6px; }
.section-title { font-family: 'Montserrat'; font-weight: var(--sect-weight); font-size: var(--sect-size); line-height: 1.05; letter-spacing: var(--sect-tracking); margin-bottom: 1.25rem; }
.section-title .accent { color: var(--brand); }
.section-sub { font-size: 1.1rem; line-height: 1.55; color: var(--ink-soft); max-width: 580px; font-weight: 500; }
.section-head.center .section-sub { margin-left: auto; margin-right: auto; }

/* PILLARS */
.pillars { padding: var(--sect-pad-y) 0; background: var(--slate-50); }
.pillars-grid { display: grid; grid-template-columns: minmax(0, 460px) minmax(0, 1fr); gap: 4.5rem; align-items: center; }
@media (max-width: 920px) { .pillars-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
.pillars-list { display: flex; flex-direction: column; gap: 0.4rem; }
.pillar { display: grid; grid-template-columns: auto 1fr; align-items: start; gap: 1.1rem; padding: 1.4rem 1.4rem 1.4rem 1.6rem; background: transparent; border: none; border-radius: 14px; text-align: left; cursor: pointer; font-family: inherit; position: relative; transition: background 400ms var(--ease-drawer); }
.pillar.active { background: #fff; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04); }
.pillar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--line); border-radius: 2px; overflow: hidden; }
.pillar.active .pillar-progress { background: rgba(15, 23, 42, 0.06); }
.pillar-progress-bar { display: block; width: 100%; height: 0; background: var(--brand); border-radius: 2px; }
.pillar.active .pillar-progress-bar.running { animation: pillarFill var(--pillar-cycle, 5200ms) linear forwards; }
.pillar-icon { width: 40px; height: 40px; border-radius: 11px; background: var(--slate-100); display: inline-flex; align-items: center; justify-content: center; color: var(--ink-soft); flex-shrink: 0; transition: all 300ms var(--ease-drawer); }
.pillar.active .pillar-icon { background: var(--ink); color: var(--brand); }
.pillar-text h3 { font-weight: 700; font-size: 1.15rem; margin-bottom: 0.3rem; color: var(--ink-faint); letter-spacing: -0.01em; transition: color 300ms var(--ease-drawer); }
.pillar.active .pillar-text h3 { color: var(--ink); }
.pillar-text p { font-size: 0.95rem; line-height: 1.5; color: var(--ink-faint); transition: color 300ms var(--ease-drawer); font-weight: 500; }
.pillar.active .pillar-text p { color: var(--ink-soft); }
.pillars-visual { background: #fff; border-radius: var(--card-radius); border: 1px solid var(--line); padding: 3rem; position: relative; min-height: 480px; overflow: hidden; box-shadow: 0 10px 40px rgba(15, 23, 42, 0.05); }
.pv-stage { position: relative; width: 100%; height: 100%; min-height: 420px; }
.pv-card { position: absolute; inset: 0; opacity: 0; transform: translateY(20px) scale(0.96); pointer-events: none; transition: opacity 600ms var(--ease-drawer), transform 600ms var(--ease-drawer); display: flex; align-items: center; justify-content: center; }
.pv-card.on { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
.pv-mini-frame { width: 100%; background: var(--slate-50); border-radius: 16px; border: 1px solid var(--line); padding: 2rem 1.75rem; }
.pv-passage { font-weight: 500; font-size: 1.45rem; line-height: 1.5; letter-spacing: -0.015em; margin-bottom: 1.75rem; }
.pv-passage .word { display: inline-block; padding: 0.05em 0.12em; border-radius: 5px; transition: all 400ms var(--ease-drawer); position: relative; }
.pv-passage .word.done { color: var(--ink); }
.pv-passage .word.done::after { content: ''; position: absolute; left: 0; right: 0; bottom: -3px; height: 2px; background: var(--score-good); border-radius: 2px; animation: drawIn 800ms var(--ease-drawer) backwards; }
.pv-passage .word.active { background: var(--score-warn-bg); color: var(--score-warn); animation: pulse 1.4s var(--ease-drawer) infinite; }
.pv-score-row { display: flex; align-items: center; gap: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--line); }
.pv-mini-chips { display: flex; gap: 0.45rem; flex-wrap: wrap; }
.pv-chip { font-family: 'JetBrains Mono'; font-size: 0.85rem; font-weight: 700; padding: 0.3rem 0.55rem; background: var(--score-warn-bg); color: var(--score-warn); border-radius: 6px; animation: phChipIn 0.5s var(--ease-pop) backwards; }
.pv-chip.resolved { background: var(--score-good-bg); color: var(--score-good); text-decoration: line-through; opacity: 0.85; }
.pv-bubble { padding: 0.85rem 1.1rem; border-radius: 14px; font-size: 1rem; line-height: 1.45; max-width: 85%; animation: bubbleIn 0.5s var(--ease-pop) backwards; margin-bottom: 0.85rem; font-weight: 500; }
.pv-bubble.user { background: var(--ink); color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; margin-left: auto; }
.pv-bubble.ai { background: #fff; color: var(--ink); border: 1px solid var(--line); border-bottom-left-radius: 4px; align-self: flex-start; display: inline-flex; align-items: flex-start; gap: 0.6rem; }
.pv-portrait { width: 28px; height: 28px; border-radius: 50%; background: var(--brand); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.85rem; flex-shrink: 0; }
.pv-bubble.with-score { position: relative; padding-right: 4rem; }
.pv-turn-score { position: absolute; right: 0.7rem; top: 50%; transform: translateY(-50%); background: var(--score-good); color: #fff; font-weight: 800; font-size: 0.85rem; padding: 0.2rem 0.45rem; border-radius: 6px; }
.pv-bubble .hl { color: var(--brand); font-weight: 700; }
.voice-frame { padding: 2.25rem 1.75rem; }
.pv-voice-row { display: grid; grid-template-columns: 90px 1fr; align-items: center; gap: 1.25rem; margin-bottom: 1.5rem; }
.pv-voice-lbl { font-size: 0.78rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); }
.pv-voice-wave { display: flex; align-items: center; gap: 3px; height: 50px; }
.pv-vw-bar { flex: 1; background: var(--ink); border-radius: 2px; min-height: 4px; transform-origin: bottom; animation: vwGrow 600ms var(--ease-drawer) backwards; }
.pv-voice-wave.smooth .pv-vw-bar { background: var(--score-good); }
.pv-voice-text { font-style: italic; font-size: 1.1rem; font-weight: 500; color: var(--ink-soft); text-align: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--line); }
.pv-trend-head { display: flex; align-items: baseline; gap: 0.7rem; margin-bottom: 1.25rem; }
.pv-trend-num { font-size: 2.4rem; font-weight: 900; color: var(--score-good); letter-spacing: -0.04em; line-height: 1; }
.pv-trend-lbl { font-size: 0.95rem; color: var(--ink-soft); font-weight: 600; }
.pv-trend-chart { width: 100%; height: 110px; margin-bottom: 1.5rem; }
.pv-trouble { padding-top: 1.25rem; border-top: 1px solid var(--line); }
.pv-tr-lbl { font-size: 0.78rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 0.7rem; display: block; }
.pv-tr-row { display: flex; gap: 0.45rem; flex-wrap: wrap; }

/* CONVO */
.convo-section { padding: var(--sect-pad-y) 0; background: #fff; }
.convo-grid { display: grid; grid-template-columns: minmax(0, 420px) minmax(0, 1fr); gap: 4.5rem; align-items: center; }
@media (max-width: 920px) { .convo-grid { grid-template-columns: 1fr; } }
.convo-mock { perspective: 1200px; }
.cm-frame { background: #fff; border-radius: 18px; border: 1px solid var(--line); box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08), 0 4px 16px rgba(15, 23, 42, 0.04); overflow: hidden; transform: rotateY(-3deg) rotateX(2deg); transition: transform 600ms var(--ease-drawer); }
.cm-frame:hover { transform: rotateY(0) rotateX(0); }
.cm-head { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 0.85rem; padding: 1rem 1.25rem; border-bottom: 1px solid var(--line); background: var(--slate-50); }
.cm-portrait { width: 40px; height: 40px; border-radius: 50%; background: var(--brand); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1rem; }
.cm-name { font-weight: 800; font-size: 0.95rem; letter-spacing: -0.01em; }
.cm-scenario { font-size: 0.78rem; color: var(--ink-soft); margin-top: 0.1rem; font-weight: 500; }
.cm-status { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 700; color: var(--score-good); padding: 0.25rem 0.6rem; background: var(--score-good-bg); border-radius: 999px; }
.cm-status .dot { width: 6px; height: 6px; background: var(--score-good); border-radius: 50%; animation: pulseDot 1.4s var(--ease-drawer) infinite; }
.cm-body { padding: 1.5rem 1.25rem; display: flex; flex-direction: column; gap: 0.7rem; }
.cm-bubble { padding: 0.8rem 1.05rem; border-radius: 14px; font-size: 0.97rem; line-height: 1.45; max-width: 80%; font-weight: 500; animation: bubbleIn 0.6s var(--ease-pop) backwards; }
.cm-bubble.user { background: var(--ink); color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }
.cm-bubble.ai { background: var(--slate-50); color: var(--ink); border: 1px solid var(--line); align-self: flex-start; border-bottom-left-radius: 4px; }
.cm-bubble .hl { color: var(--brand); font-weight: 700; }
.cm-score-card { align-self: flex-end; display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.45rem 0.85rem; background: var(--score-good-bg); color: var(--score-good); border-radius: 999px; font-size: 0.85rem; font-weight: 700; animation: bubbleIn 0.5s var(--ease-pop) backwards; }
.cm-score-card strong { font-weight: 900; font-size: 1rem; }
.delay-0 { animation-delay: 0.2s; } .delay-1 { animation-delay: 0.7s; } .delay-2 { animation-delay: 1.3s; } .delay-3 { animation-delay: 2.0s; } .delay-4 { animation-delay: 2.5s; }

/* SCENARIOS */
.scenarios { padding: 4rem 0 6rem; background: var(--slate-50); overflow: hidden; }
.scenarios-title { font-weight: 800; font-size: 1.85rem; letter-spacing: -0.02em; text-align: center; margin-bottom: 3rem; max-width: 740px; margin-left: auto; margin-right: auto; }
.scenarios-strip { width: 100%; overflow: hidden; position: relative; mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
.scenarios-track { display: flex; gap: 1.5rem; width: max-content; animation: scrollX 38s linear infinite; }
.scenario-card { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; padding: 1.1rem 1.4rem; background: #fff; border: 1px solid var(--line); border-radius: 14px; min-width: 280px; cursor: pointer; transition: all 300ms var(--ease-drawer); }
.scenario-card:hover { border-color: var(--brand); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0, 120, 215, 0.12); }
.scenario-emoji { width: 44px; height: 44px; border-radius: 12px; background: var(--slate-50); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; }
.scenario-card h4 { font-weight: 700; font-size: 0.97rem; letter-spacing: -0.01em; }
.scenario-tier { font-family: 'JetBrains Mono'; font-size: 0.7rem; font-weight: 600; color: var(--ink-faint); letter-spacing: 0.05em; text-transform: uppercase; margin-top: 0.15rem; display: block; }
.scenario-arrow { color: var(--ink-faint); transition: transform 300ms var(--ease-drawer), color 300ms ease; }
.scenario-card:hover .scenario-arrow { color: var(--brand); transform: translateX(4px); }

/* CTA */
.cta-section { padding: var(--sect-pad-y) 0 0; background: #fff; }
.cta-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--card-gap); }
@media (max-width: 920px) { .cta-grid { grid-template-columns: 1fr; } }
.cta-card { background: #fff; border: 1px solid var(--line); border-radius: var(--card-radius); padding: var(--card-pad-y) 2rem; display: flex; flex-direction: column; align-items: flex-start; position: relative; overflow: hidden; transition: all 400ms var(--ease-drawer); }
.cta-card::before { content: ''; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; background: linear-gradient(135deg, transparent, var(--brand), transparent); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0; transition: opacity 500ms var(--ease-drawer); }
.cta-card:hover { transform: translateY(-4px); box-shadow: 0 28px 80px rgba(15, 23, 42, 0.1); }
.cta-card:hover::before { opacity: 1; }
.cta-icon { width: 44px; height: 44px; border-radius: 11px; background: var(--slate-50); color: var(--ink); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; transition: all 300ms var(--ease-drawer); }
.cta-card:hover .cta-icon { background: var(--ink); color: var(--brand); }
.cta-tag { font-family: 'JetBrains Mono'; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 0.7rem; }
.cta-card h3 { font-weight: 800; font-size: 1.65rem; letter-spacing: -0.025em; margin-bottom: 0.85rem; }
.cta-card p { font-size: 1rem; line-height: 1.55; color: var(--ink-soft); margin-bottom: 1.75rem; flex: 1; font-weight: 500; }
.cta-link { background: transparent; border: none; color: var(--ink); font-family: 'Montserrat'; font-weight: 700; font-size: 0.97rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem; padding: 0; transition: color 200ms ease, gap 200ms var(--ease-drawer); }
.cta-link:hover { color: var(--brand); gap: 0.5rem; }
.footer { margin-top: 6rem; padding: 3rem 0; border-top: 1px solid var(--line); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.footer-brand { display: flex; align-items: center; gap: 0.55rem; font-weight: 700; font-size: 0.9rem; }
.footer-meta { font-size: 0.85rem; color: var(--ink-faint); font-weight: 500; }

/* BEHIND LUX 3-UP */
.behind-lux { padding: var(--sect-pad-y) 0; background: #fff; border-top: 1px solid var(--line); }
.bl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--card-gap); }
@media (max-width: 920px) { .bl-grid { grid-template-columns: 1fr; } }
.bl-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--card-radius);
  padding: var(--card-pad-y) 2rem;
  display: flex; flex-direction: column; align-items: flex-start;
  position: relative;
  transition: all 400ms var(--ease-drawer);
}
.bl-card:hover { transform: translateY(-4px); box-shadow: 0 28px 80px rgba(15, 23, 42, 0.1); border-color: var(--brand); }
.bl-icon {
  width: 44px; height: 44px; border-radius: 11px;
  background: var(--slate-50); color: var(--ink);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 300ms var(--ease-drawer);
}
.bl-card:hover .bl-icon { background: var(--ink); color: var(--brand); }
.bl-eyebrow {
  font-family: 'JetBrains Mono'; font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--score-warn); margin-bottom: 0.7rem;
  background: var(--score-warn-bg); padding: 0.2rem 0.45rem; border-radius: 4px;
}
.bl-card h3 {
  font-weight: 800; font-size: 1.4rem; letter-spacing: -0.02em;
  margin-bottom: 0.85rem; line-height: 1.2;
}
.bl-card p {
  font-size: 0.95rem; line-height: 1.55; color: var(--ink-soft);
  margin-bottom: 1.5rem; flex: 1; font-weight: 500;
}
.bl-link {
  background: transparent; border: none; color: var(--ink);
  font-family: 'Montserrat'; font-weight: 700; font-size: 0.92rem;
  cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem; padding: 0;
  transition: color 200ms ease, gap 200ms var(--ease-drawer);
}
.bl-link:hover { color: var(--brand); gap: 0.5rem; }

/* PLACEHOLDER STYLING — visible markers for later backfill */
.placeholder-card {
  background: repeating-linear-gradient(45deg, #fff, #fff 10px, #FEF9C3 10px, #FEF9C3 11px), #fff !important;
  border: 2px dashed var(--score-warn) !important;
}
.placeholder-card:hover {
  border-color: var(--score-warn) !important;
  box-shadow: 0 24px 60px rgba(217, 119, 6, 0.18) !important;
}
.bl-placeholder-banner {
  position: absolute; top: 0.85rem; right: 0.85rem;
  font-family: 'JetBrains Mono'; font-size: 0.65rem; font-weight: 800;
  letter-spacing: 0.16em;
  background: var(--score-warn); color: #fff;
  padding: 0.18rem 0.45rem; border-radius: 4px;
}
.placeholder-kicker {
  background: var(--score-warn-bg) !important;
  color: var(--score-warn) !important;
}

/* USE CASE CAROUSEL */
.use-cases { padding: var(--sect-pad-y) 0 6rem; background: var(--slate-50); overflow: hidden; }
.uc-strip {
  width: 100%; overflow: hidden; position: relative;
  margin-top: 2rem;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.uc-track {
  display: flex; gap: 1.5rem; width: max-content;
  animation: scrollX 60s linear infinite;
}
.uc-card {
  display: flex; flex-direction: column; align-items: flex-start;
  gap: 0.85rem;
  padding: 1.5rem 1.4rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  width: 280px;
  cursor: pointer;
  font-family: 'Montserrat';
  text-align: left;
  transition: all 300ms var(--ease-drawer);
}
.uc-card:hover {
  border-color: var(--brand);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 120, 215, 0.12);
}
.uc-icon {
  width: 48px; height: 48px; border-radius: 12px;
  background: var(--slate-50); color: var(--ink);
  display: flex; align-items: center; justify-content: center;
  transition: all 300ms var(--ease-drawer);
}
.uc-card:hover .uc-icon { background: var(--brand); color: #fff; }
.uc-card h4 {
  font-weight: 700; font-size: 1.05rem;
  letter-spacing: -0.01em; line-height: 1.3;
  color: var(--ink);
  flex: 1;
}
.uc-link {
  font-family: 'JetBrains Mono'; font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.05em; color: var(--ink-soft);
  display: inline-flex; align-items: center; gap: 0.3rem;
  transition: color 200ms ease, gap 200ms var(--ease-drawer);
}
.uc-card:hover .uc-link { color: var(--brand); gap: 0.5rem; }
.uc-strip:hover .uc-track { animation-play-state: paused; }

/* DISCLAIMER FOOTNOTES */
.placeholder-disclaimer {
  margin-top: 1rem;
  font-family: 'JetBrains Mono';
  font-size: 0.7rem;
  font-style: italic;
  color: var(--score-warn);
  font-weight: 500;
  padding: 0.4rem 0.6rem;
  background: var(--score-warn-bg);
  border-radius: 4px;
  display: inline-block;
}
.placeholder-disclaimer.center {
  display: block;
  text-align: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.placeholder-disclaimer.mt-2 { margin-top: 1.5rem; }

/* PILLAR TOUR LINK (per-pillar outbound CTA) */
.pillar-tour-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.85rem;
  font-family: 'JetBrains Mono';
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--brand);
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 0.35rem 0.65rem;
  background: var(--score-good-bg);
  border-radius: 6px;
  transition: all 200ms var(--ease-drawer);
}
.pillar-tour-link:hover {
  background: var(--brand);
  color: #fff;
  gap: 0.5rem;
}

/* PILLAR VISUAL — Coach card (active===1, new) */
.coach-frame {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.pv-coach-tabs {
  display: flex;
  gap: 0.4rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--line);
}
.pv-coach-tab {
  font-family: 'JetBrains Mono';
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.3rem 0.65rem;
  background: #fff;
  color: var(--ink-soft);
  border: 1px solid var(--line);
  border-radius: 6px;
  letter-spacing: 0.02em;
}
.pv-coach-tab.active {
  background: var(--ink);
  color: var(--brand);
  border-color: var(--ink);
}
.pv-coach-quote {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 1.1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid var(--line);
}
.pv-coach-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: var(--score-good-bg);
  color: var(--brand);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pv-coach-quote p {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--ink);
  font-weight: 500;
}
.pv-coach-quote em {
  font-style: italic;
  color: var(--brand);
  font-weight: 700;
}
.pv-coach-quote strong {
  font-weight: 800;
  color: var(--score-warn);
}
.pv-coach-meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.pv-coach-chip {
  font-family: 'JetBrains Mono';
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.25rem 0.55rem;
  background: var(--slate-100);
  color: var(--ink-soft);
  border-radius: 5px;
  letter-spacing: 0.02em;
}

/* CONVO CARD FLIP — INDEPENDENT ROTATION PATTERN
   Each face rotates from its own angle directly. No wrapper rotation,
   no compound math, no sub-pixel rounding errors. This is the
   David DeSandro-recommended pattern. */
.cm-flip-wrap {
  position: relative;
  width: 100%;
  height: 480px;
  perspective: 1500px;
  cursor: pointer;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}
.cm-face {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  transition: transform 720ms var(--ease-panel), z-index 0ms 360ms;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
}
/* Front face: 0deg → 180deg on flip */
.cm-face-front {
  transform: rotateY(0deg);
  z-index: 2;
}
/* Back face: -180deg → 0deg on flip (independent, not compound) */
.cm-face-back {
  transform: rotateY(-180deg);
  z-index: 1;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08), 0 4px 16px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
}
/* Hover when not flipped: gentle peek */
.cm-flip-wrap:not(.flipped):hover .cm-face-front {
  transform: rotateY(-10deg);
}
.cm-flip-wrap:not(.flipped):hover .cm-face-back {
  transform: rotateY(-190deg);
}
/* Flipped state: front rotates away, back rotates into view */
.cm-flip-wrap.flipped .cm-face-front {
  transform: rotateY(180deg);
  z-index: 1;
}
.cm-flip-wrap.flipped .cm-face-back {
  transform: rotateY(0deg);
  z-index: 2;
}
/* Pointer events on the rotated-away face */
.cm-flip-wrap:not(.flipped) .cm-face-back { pointer-events: none; }
.cm-flip-wrap.flipped .cm-face-front { pointer-events: none; }

.cm-flip-hint {
  position: absolute;
  bottom: 0.85rem;
  right: 1rem;
  font-family: 'JetBrains Mono';
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--ink-faint);
  letter-spacing: 0.06em;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  z-index: 3;
}

/* CM BACK FACE STRUCTURE */
.cm-back-head {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.5rem 1.25rem;
  border-bottom: 1px solid var(--line);
  background: linear-gradient(135deg, var(--slate-50) 0%, #fff 100%);
}
.cm-portrait-large {
  width: 56px;
  height: 56px;
  font-size: 1.4rem;
}
.cm-back-name {
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
}
.cm-back-role {
  font-family: 'JetBrains Mono';
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--ink-soft);
  letter-spacing: 0.02em;
  margin-top: 0.2rem;
}
.cm-back-body {
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
}
.cm-back-bio {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ink-soft);
  font-style: italic;
  font-weight: 500;
}
.cm-back-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--slate-50);
  border-radius: 10px;
}
.cm-back-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}
.cm-back-meta-lbl {
  color: var(--ink-faint);
  font-family: 'JetBrains Mono';
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 700;
}
.cm-back-meta-val {
  color: var(--ink);
  font-weight: 700;
}
.cm-back-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.2rem;
  background: var(--brand);
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 0.92rem;
  align-self: flex-start;
  margin-top: auto;
  transition: all 220ms var(--ease-drawer);
  box-shadow: 0 2px 8px rgba(0, 120, 215, 0.2);
}
.cm-back-cta:hover {
  background: var(--brand-hover);
  gap: 0.65rem;
}

/* 5-CARD CTA GRID (was 3) — visually amplified */
.cta-section:has(.cta-grid-five) {
  background: linear-gradient(180deg, var(--bg) 0%, var(--slate-50) 30%, var(--slate-50) 70%, var(--bg) 100%);
  padding: var(--sect-pad-y) 0;
}
.cta-grid-five {
  grid-template-columns: repeat(5, 1fr) !important;
  gap: 1.25rem;
}
@media (max-width: 1280px) {
  .cta-grid-five { grid-template-columns: repeat(3, 1fr) !important; gap: 1.5rem; }
}
@media (max-width: 920px) {
  .cta-grid-five { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 640px) {
  .cta-grid-five { grid-template-columns: 1fr !important; }
}
.cta-grid-five .cta-card {
  text-decoration: none;
  color: inherit;
  background: #fff;
  border: 1.5px solid var(--line);
  padding: 2.25rem 1.5rem 1.75rem;
  position: relative;
  transition: all 350ms var(--ease-drawer);
}
.cta-grid-five .cta-card:hover {
  transform: translateY(-8px);
  border-color: var(--brand);
  box-shadow: 0 28px 70px rgba(0, 120, 215, 0.14), 0 8px 24px rgba(15, 23, 42, 0.08);
}
.cta-grid-five .cta-card .cta-icon {
  width: 52px;
  height: 52px;
  margin-bottom: 1.25rem;
  background: var(--score-good-bg);
  color: var(--brand);
  transition: all 300ms var(--ease-drawer);
}
.cta-grid-five .cta-card:hover .cta-icon {
  background: var(--brand);
  color: #fff;
  transform: scale(1.06);
}
.cta-grid-five .cta-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  letter-spacing: -0.02em;
}
.cta-grid-five .cta-card p {
  font-size: 0.93rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}
.cta-grid-five .cta-card .cta-tag {
  margin-bottom: 0.5rem;
  color: var(--brand);
}
.cta-grid-five .cta-link {
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 700;
  color: var(--ink);
  font-family: 'Montserrat';
  background: transparent;
  border: none;
  padding: 0;
  transition: all 220ms var(--ease-drawer);
}
.cta-grid-five .cta-card:hover .cta-link {
  color: var(--brand);
  gap: 0.45rem;
}

/* IMPROVE PANEL */
.improve-panel { position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 200; }
.improve-toggle { display: inline-flex; align-items: center; gap: 0.55rem; background: var(--ink); color: #fff; border: none; padding: 0.85rem 1.15rem; border-radius: 999px; font-weight: 700; font-size: 0.92rem; font-family: 'Montserrat'; cursor: pointer; box-shadow: 0 8px 32px rgba(15, 23, 42, 0.2); transition: all 250ms var(--ease-drawer); }
.improve-toggle:hover { background: var(--brand); transform: translateY(-2px); }
.improve-panel.open .improve-toggle { position: absolute; top: -16px; right: 0; padding: 0.5rem 0.6rem; z-index: 1; }
.score-pill { display: inline-block; font-family: 'JetBrains Mono'; font-size: 0.78rem; font-weight: 700; padding: 0.18rem 0.45rem; border-radius: 5px; margin-left: 0.2rem; }
.score-pill.high { background: var(--score-good); color: #fff; }
.score-pill.mid { background: var(--score-warn); color: #fff; }
.score-pill.low { background: var(--score-bad); color: #fff; }
.improve-body { width: 380px; max-height: 600px; background: #fff; border: 1px solid var(--line); border-radius: 18px; box-shadow: 0 24px 80px rgba(15, 23, 42, 0.18), 0 4px 16px rgba(15, 23, 42, 0.06); display: flex; flex-direction: column; overflow: hidden; animation: panelIn 350ms var(--ease-pop); }
@keyframes panelIn { from { opacity: 0; transform: translateY(20px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
.improve-head { padding: 1.25rem 1.25rem 1rem; border-bottom: 1px solid var(--line); }
.improve-title { font-weight: 800; font-size: 1rem; letter-spacing: -0.015em; }
.improve-sub { font-size: 0.78rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.4; font-weight: 500; }
.improve-actions { padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--line); display: flex; gap: 0.4rem; flex-wrap: wrap; }
.ip-btn { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.55rem 0.85rem; background: var(--slate-50); color: var(--ink); border: 1px solid var(--line); border-radius: 8px; font-family: inherit; font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: all 200ms var(--ease-drawer); }
.ip-btn:hover:not(:disabled) { background: #fff; border-color: var(--ink); }
.ip-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.ip-btn.primary { background: var(--ink); color: #fff; border-color: var(--ink); }
.ip-btn.primary:hover:not(:disabled) { background: var(--brand); border-color: var(--brand); }
.ip-btn.pause { background: var(--gold); color: #fff; border-color: var(--gold); }
.ip-btn.ghost { background: transparent; }
.ip-btn.save { background: var(--score-good); color: #fff; border-color: var(--score-good); }
.ip-btn.save:hover:not(:disabled) { background: var(--brand); border-color: var(--brand); }

.persist-row { padding-top: 0 !important; padding-bottom: 0.85rem !important; border-bottom: 1px solid var(--line) !important; }

.state-json-block {
  border-bottom: 1px solid var(--line);
  background: var(--slate-50);
  max-height: 240px;
  display: flex;
  flex-direction: column;
}
.state-json-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--ink-soft);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--line);
  background: #fff;
}
.sjb-copy {
  background: var(--ink);
  color: #fff;
  border: none;
  font-family: 'Montserrat';
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.55rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 200ms var(--ease-drawer);
}
.sjb-copy:hover { background: var(--brand); }
.state-json-pre {
  flex: 1;
  overflow: auto;
  margin: 0;
  padding: 0.75rem 1rem;
  font-family: 'JetBrains Mono';
  font-size: 0.7rem;
  line-height: 1.45;
  color: var(--ink-soft);
  white-space: pre;
}
.state-json-pre::-webkit-scrollbar { width: 6px; height: 6px; }
.state-json-pre::-webkit-scrollbar-thumb { background: var(--line); border-radius: 3px; }
.iter-error { padding: 0.85rem 1.25rem; background: var(--score-bad-bg); color: var(--score-bad); font-size: 0.85rem; font-weight: 600; border-bottom: 1px solid var(--line); }
.iter-list { flex: 1; overflow-y: auto; padding: 0.5rem 0.5rem 0.85rem; }
.iter-list::-webkit-scrollbar { width: 6px; }
.iter-list::-webkit-scrollbar-thumb { background: var(--line); border-radius: 3px; }
.iter-empty { padding: 2rem 1.25rem; text-align: center; color: var(--ink-faint); font-size: 0.88rem; line-height: 1.5; font-weight: 500; }
.iter-empty strong { color: var(--ink); font-weight: 800; }
.iter-row { padding: 0.85rem; margin: 0.25rem 0.4rem; border-radius: 10px; background: var(--slate-50); animation: rowIn 0.4s var(--ease-pop); }
@keyframes rowIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.iter-row-head { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; }
.iter-num { font-family: 'JetBrains Mono'; font-size: 0.75rem; font-weight: 700; color: var(--ink-faint); }
.iter-score { font-family: 'JetBrains Mono'; font-size: 0.78rem; font-weight: 800; padding: 0.1rem 0.4rem; border-radius: 4px; }
.iter-score.high { background: var(--score-good-bg); color: var(--score-good); }
.iter-score.mid { background: var(--score-warn-bg); color: var(--score-warn); }
.iter-score.low { background: var(--score-bad-bg); color: var(--score-bad); }
.iter-focus { font-family: 'JetBrains Mono'; font-size: 0.7rem; font-weight: 700; color: var(--ink-soft); letter-spacing: 0.04em; text-transform: lowercase; padding: 0.1rem 0.4rem; background: #fff; border-radius: 4px; border: 1px solid var(--line); }
.iter-critique { font-size: 0.83rem; color: var(--ink); line-height: 1.5; margin-bottom: 0.55rem; font-weight: 500; }
.iter-changes { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.change-pill { display: inline-flex; align-items: center; gap: 0.25rem; font-family: 'JetBrains Mono'; font-size: 0.7rem; padding: 0.18rem 0.4rem; background: #fff; border: 1px solid var(--line); border-radius: 4px; }
.change-pill .ck { color: var(--ink-soft); font-weight: 600; }
.change-pill .cv { color: var(--brand); font-weight: 700; }

/* ═══════════════════════════════════════════════════════════════
   LUX CEFR COIN — direct port + sized variants for v5
   ═══════════════════════════════════════════════════════════════ */
.lux-scoreRing.lux-scoreRing--coin {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  overflow: visible;
  perspective: 1200px;
  transform-style: preserve-3d;
  isolation: isolate;
  --lux-coin-depth: 12px;
  --lux-coin-face-back: var(--lux-cefr-coin-bg, rgba(37,99,235,0.20));
  --lux-coin-edge-fill: var(--lux-cefr-coin-bg, rgba(37,99,235,0.20));
  --lux-coin-rim: var(--lux-score-ring, #2563eb);
}
.lux-coin-medium   { width: 82px;  height: 82px;  }
.lux-coin-result   { width: 130px; height: 130px; }
.lux-coin-featured { width: 160px; height: 160px; }

.lux-scoreRingFlip {
  position: relative; display: block; width: 100%; height: 100%;
  border-radius: 50%; transform-style: preserve-3d;
  transition: transform var(--coin-flip-ms) var(--ease-panel);
  will-change: transform;
}
.lux-scoreRing--coin:hover .lux-scoreRingFlip { transform: rotateY(180deg); }

.lux-scoreRingFlip::before {
  content: ""; position: absolute;
  top: 0; bottom: 0; left: 50%;
  width: var(--lux-coin-depth);
  transform: translateX(-50%) rotateY(90deg);
  transform-style: preserve-3d; transform-origin: center center;
  pointer-events: none;
  backface-visibility: hidden;
  border-left: 3px solid var(--lux-coin-rim);
  border-right: 3px solid var(--lux-coin-rim);
  background: linear-gradient(90deg,
    rgba(255,255,255,0.08) 0%,
    var(--lux-coin-edge-fill) 18%,
    var(--lux-coin-edge-fill) 82%,
    rgba(255,255,255,0.08) 100%
  );
  border-radius: 999px; box-sizing: border-box;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18), 0 0 1px rgba(15,23,42,0.12);
}

.lux-scoreRingFace {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%; box-sizing: border-box; pointer-events: none;
  text-align: center; line-height: 1; overflow: hidden;
  backface-visibility: hidden;
  border: 3px solid var(--lux-coin-rim);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 0 rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.06);
}
.lux-scoreRingFace--front {
  transform: translateZ(calc(var(--lux-coin-depth) / 2));
  background: radial-gradient(circle at 35% 30%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 58%, rgba(241,245,249,0.98) 100%);
  color: var(--ink);
  font-weight: 900;
  letter-spacing: -0.02em;
}
.lux-coin-medium   .lux-scoreRingFace--front { font-size: 1.45rem; }
.lux-coin-result   .lux-scoreRingFace--front { font-size: 2.2rem;  }
.lux-coin-featured .lux-scoreRingFace--front { font-size: 2.8rem;  }

.lux-scoreRingFace--back {
  transform: rotateY(180deg) translateZ(calc(var(--lux-coin-depth) / 2));
  background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.16) 0%, var(--lux-coin-face-back) 55%, color-mix(in srgb, var(--lux-coin-face-back) 88%, black 12%) 100%);
  color: var(--lux-cefr-coin-text, #1d4ed8);
  font-weight: 900; letter-spacing: 0.02em;
}
.lux-coin-medium   .lux-scoreRingFace--back { font-size: 1.4rem; }
.lux-coin-result   .lux-scoreRingFace--back { font-size: 2.1rem; }
.lux-coin-featured .lux-scoreRingFace--back { font-size: 2.6rem; }

.lux-scoreRing--coin[data-cefr="A1"] { --lux-cefr-coin-bg: rgba(248, 113, 113, 0.20); --lux-cefr-coin-text: #b91c1c; }
.lux-scoreRing--coin[data-cefr="A2"] { --lux-cefr-coin-bg: rgba(220, 38, 38, 0.20);  --lux-cefr-coin-text: #991b1b; }
.lux-scoreRing--coin[data-cefr="B1"] { --lux-cefr-coin-bg: rgba(251, 191, 36, 0.24);  --lux-cefr-coin-text: #78350f; }
.lux-scoreRing--coin[data-cefr="B2"] { --lux-cefr-coin-bg: rgba(217, 119, 6, 0.22);   --lux-cefr-coin-text: #92400e; }
.lux-scoreRing--coin[data-cefr="C1"] { --lux-cefr-coin-bg: rgba(96, 165, 250, 0.22);  --lux-cefr-coin-text: #1d4ed8; }
.lux-scoreRing--coin[data-cefr="C2"] { --lux-cefr-coin-bg: rgba(37, 99, 235, 0.22);   --lux-cefr-coin-text: #1d4ed8; }


/* === MOBILE OVERRIDES (max 600px) — v8.0c-mobile-fix === */
@media (max-width: 600px) {
  html, body, #root, .lux-onboarding { overflow-x: hidden; max-width: 100vw; }
  .container { padding: 0 1.1rem; }
  .hero-headline-v7 { font-size: clamp(2.6rem, 11vw, 4.5rem); word-wrap: break-word; overflow-wrap: anywhere; }
  .section-title { font-size: clamp(1.85rem, 8vw, 2.75rem) !important; word-wrap: break-word; overflow-wrap: anywhere; hyphens: auto; line-height: 1.1; }
  .section-sub, .hero-sub, p { max-width: 100%; overflow-wrap: break-word; word-wrap: break-word; }
  .convo-mock, .convo-visual, .convo-section { max-width: 100%; overflow: hidden; }
  .lux-subnav .subnav-inner { justify-content: center; gap: 0.4rem; padding: 0.55rem 1rem; }
  .cta-grid-five {
    grid-template-columns: none !important;
    display: flex !important;
    flex-direction: row !important;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 1.1rem;
    gap: 0.85rem;
    padding: 0 1.1rem 1rem !important;
    margin: 0 -1.1rem !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .cta-grid-five::-webkit-scrollbar { display: none; }
  .cta-grid-five .cta-card { flex: 0 0 78%; scroll-snap-align: start; }
}

/* === PILLARS MOBILE — visual on top, horizontal scroll pillars (v8.0c-mobile-fix-2) === */
@media (max-width: 600px) {
  .pillars-grid { display: flex; flex-direction: column; gap: 1.25rem; }
  .pillars-visual { order: 1; min-height: 300px; padding: 1.5rem; }
  .pillars-list {
    order: 2;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 0.6rem;
    padding: 0.4rem 1.1rem 0.85rem;
    margin: 0 -1.1rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .pillars-list::-webkit-scrollbar { display: none; }
  .pillar {
    flex: 0 0 78%;
    scroll-snap-align: start;
    background: var(--slate-50);
    border-radius: 12px;
    padding: 1rem 1rem 1rem 1.2rem;
  }
  .pillar.active { background: #fff; box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08); }
  .pillar-text h3 { font-size: 1rem; }
  .pillar-text p { font-size: 0.85rem; line-height: 1.4; }
}

/* === PILLARS MOBILE FIX (v8.0c-mobile-fix-3) — stretch children to full width === */
@media (max-width: 600px) {
  .pillars-grid { align-items: stretch !important; }
  .pillars-visual, .pillars-list { width: 100% !important; box-sizing: border-box; }
}
@media (prefers-reduced-motion: reduce) {
  .lux-scoreRingFlip { transition: none !important; }
  .lux-scoreRing--coin:hover .lux-scoreRingFlip { transform: none !important; }
}

/* ANIMATIONS */
.spin { animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes ping { 0%,100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(2.2); opacity: 0; } }
@keyframes micPulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }
@keyframes recPulse { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.5); opacity: 0; } }
@keyframes recWave { 0%,100% { height: 8px; } 50% { height: 44px; } }
@keyframes phChipIn { from { opacity: 0; transform: translateY(8px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }
@keyframes pulseDot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.2); } }
@keyframes drawIn { from { transform: scaleX(0); transform-origin: left; } to { transform: scaleX(1); } }
@keyframes bubbleIn { from { opacity: 0; transform: translateY(8px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes vwGrow { from { transform: scaleY(0.3); opacity: 0; } to { transform: scaleY(1); opacity: 1; } }
@keyframes scrollX { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes pillarFill { from { height: 0; } to { height: 100%; } }


/* === MOBILE OVERRIDES (max 600px) — v8.0c-mobile-fix === */
@media (max-width: 600px) {
  html, body, #root, .lux-onboarding { overflow-x: hidden; max-width: 100vw; }
  .container { padding: 0 1.1rem; }
  .hero-headline-v7 { font-size: clamp(2.6rem, 11vw, 4.5rem); word-wrap: break-word; overflow-wrap: anywhere; }
  .section-title { font-size: clamp(1.85rem, 8vw, 2.75rem) !important; word-wrap: break-word; overflow-wrap: anywhere; hyphens: auto; line-height: 1.1; }
  .section-sub, .hero-sub, p { max-width: 100%; overflow-wrap: break-word; word-wrap: break-word; }
  .convo-mock, .convo-visual, .convo-section { max-width: 100%; overflow: hidden; }
  .lux-subnav .subnav-inner { justify-content: center; gap: 0.4rem; padding: 0.55rem 1rem; }
  .cta-grid-five {
    grid-template-columns: none !important;
    display: flex !important;
    flex-direction: row !important;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 1.1rem;
    gap: 0.85rem;
    padding: 0 1.1rem 1rem !important;
    margin: 0 -1.1rem !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .cta-grid-five::-webkit-scrollbar { display: none; }
  .cta-grid-five .cta-card { flex: 0 0 78%; scroll-snap-align: start; }
}

/* === PILLARS MOBILE — visual on top, horizontal scroll pillars (v8.0c-mobile-fix-2) === */
@media (max-width: 600px) {
  .pillars-grid { display: flex; flex-direction: column; gap: 1.25rem; }
  .pillars-visual { order: 1; min-height: 300px; padding: 1.5rem; }
  .pillars-list {
    order: 2;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 0.6rem;
    padding: 0.4rem 1.1rem 0.85rem;
    margin: 0 -1.1rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .pillars-list::-webkit-scrollbar { display: none; }
  .pillar {
    flex: 0 0 78%;
    scroll-snap-align: start;
    background: var(--slate-50);
    border-radius: 12px;
    padding: 1rem 1rem 1rem 1.2rem;
  }
  .pillar.active { background: #fff; box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08); }
  .pillar-text h3 { font-size: 1rem; }
  .pillar-text p { font-size: 0.85rem; line-height: 1.4; }
}

/* === PILLARS MOBILE FIX (v8.0c-mobile-fix-3) — stretch children to full width === */
@media (max-width: 600px) {
  .pillars-grid { align-items: stretch !important; }
  .pillars-visual, .pillars-list { width: 100% !important; box-sizing: border-box; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
`;
