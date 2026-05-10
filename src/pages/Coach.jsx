// /welcome/coach — The Coach Tour
// Phase 4 of the Lux onboarding multi-page architecture.
// Maps to Section E from LUX_FEATURE_INVENTORY.md
// Per MULTI_PAGE_ARCHITECTURE.md Section 6.

import { useState, useEffect } from 'react';
import {
  Mic, Sparkles, Volume2, TrendingUp, ChevronRight, ChevronLeft,
  Play, Pause, Activity, MessageCircle,
  ArrowRight, Loader2, Check, X, BookOpen,
  Headphones, Eye, Globe, Zap, Brain,
  Heart, Target, Users, Clock, Sliders,
  GraduationCap, Compass, Lightbulb, ShieldQuestion,
  AlertTriangle, GitCompare
} from 'lucide-react';

// ===== TOURS DATA =====
const TOURS = [
  { id: 'pronunciation', label: 'Pronunciation', path: '/welcome/pronunciation' },
  { id: 'coach',         label: 'Coach',         path: '/welcome/coach' },
  { id: 'voice',         label: 'Voice',         path: '/welcome/voice' },
  { id: 'conversations', label: 'Conversations', path: '/welcome/conversations' },
  { id: 'progress',      label: 'Progress',      path: '/welcome/progress' },
];

const CYCLING_ADJECTIVES = ['gentle', 'firm', 'technical', 'clear', 'personal'];

// ===== THE COACHING DATA =====
// Same scoring scenario, three radically different coach voices.
// Real Lux structure: user said "throughout" and scored 71% on /θ/.
// All three coaches receive the SAME input. Their voices diverge.

const COACH_SCENARIO = {
  word: 'throughout',
  phoneme: '/θ/',
  azureCode: 'th',
  score: 71,
  context: `You read the passage "I'll be working throughout the weekend."`,
};

const COACH_PERSONALITIES = [
  {
    id: 'tutor',
    name: 'Tutor',
    icon: Heart,
    tagline: 'Friendly. Plain English. Encouraging.',
    description: 'For when you want gentle guidance. The default for most learners.',
    color: 'tutor',
    quickTip: "Nice attempt on \"throughout\"! Your /θ/ came in at 71% — you're close. Try touching the tip of your tongue lightly to the back of your top teeth, then blow a small puff of air. No vibration in your throat. Give it another go!",
    deepDive: {
      'Quick Coach': "Your /θ/ in 'throughout' was 71%. The shape was right — you knew where to put your tongue — but the airflow trailed off too quickly. Try holding the sound for an extra beat: 'thhhhroughout.' Don't rush past it.",
      'Phoneme Profile': "/θ/ is what we call a voiceless dental fricative. Voiceless = no vocal cord vibration. Dental = tongue near or between the teeth. Fricative = a constant, friction-like sound. It's one of the rarest sounds in world languages — only about 8% of languages have it — which is why it takes practice for most learners.",
      'Common Pitfalls': "The two most common substitutions: replacing /θ/ with /t/ ('trew' instead of 'through') or with /s/ ('srew' instead of 'through'). Yours was neither — you produced a true /θ/, just slightly weak. That's actually a good problem to have. Strength is easier to fix than wrong placement.",
      'Comparisons': "Compare /θ/ (think) with /ð/ (this). Same tongue position. Only difference: /ð/ vibrates the vocal cords; /θ/ doesn't. Touch your throat while you say each — you'll feel the buzz on /ð/ and silence on /θ/.",
      'Did You Know': "The /θ/ sound is so distinctive that it's used in linguistics to identify accent groups. Native English speakers from London, Boston, and Sydney all produce slightly different /θ/s, but they all produce true /θ/s. Many proficient L2 English speakers can pass for native — except when they say 'three.'",
      'Reassurance': "You're doing great. /θ/ is hard. Some learners take years to be consistent with it. The fact that your score was 71% on a real word in real context — not just an isolated drill — means your everyday speech is closer to native than you think.",
    },
  },
  {
    id: 'sergeant',
    name: 'Sergeant',
    icon: Target,
    tagline: 'Strict. No-nonsense. Direct.',
    description: 'For when you want results, not validation. You\'ll improve faster.',
    color: 'sergeant',
    quickTip: "71% on /θ/. Not good enough. Your tongue isn't where it needs to be. Tip touching the back of your top teeth. Blow air. No voice. Do it ten times before you move on. Don't be lazy on the airflow — finish the sound.",
    deepDive: {
      'Quick Coach': "71% is not a passing grade. You know the placement — that's clear. The issue is commitment. You softened the sound mid-production, probably because you were thinking about the next word. Stop doing that. Hold the /θ/ until it's finished, then move on.",
      'Phoneme Profile': "Voiceless dental fricative. Memorize that. Three components: voiceless (no vibration), dental (tongue at teeth), fricative (sustained airflow). All three have to happen. You hit two out of three.",
      'Common Pitfalls': "Most learners cheat /θ/ by substituting /t/ or /s/. You didn't. You attempted the real sound. Now stop being half-hearted about it. Commit to the position, hold the airflow, and finish before you move on.",
      'Comparisons': "Compare /θ/ with /t/. /t/ blocks airflow then releases it. /θ/ never blocks — it sustains. If you can hum a /θ/ for two seconds, you've got it. If you can't, you don't.",
      'Did You Know': "Russian, Japanese, French, Spanish, German — none of these languages have /θ/. If you grew up speaking one of them, your mouth has 20+ years of habit telling it /θ/ doesn't exist. You're rewiring that. It takes work. Do the work.",
      'Reassurance': "I don't do reassurance. You did 71%. Now do 85%. Move.",
    },
  },
  {
    id: 'expert',
    name: 'Expert',
    icon: Brain,
    tagline: 'Technical. Linguistic. Precise.',
    description: 'For learners with phonetics background or deep curiosity.',
    color: 'expert',
    quickTip: "Articulation analysis on /θ/ in 'throughout': accuracy 71%, suggesting partial achievement of the dental fricative target. Acoustic profile indicates adequate tongue placement at upper alveolar/dental boundary, but reduced airflow duration (~80ms vs. native target ~120ms). Recommendation: extend airflow phase by 40-50ms.",
    deepDive: {
      'Quick Coach': "Your /θ/ exhibited the correct articulatory configuration (interdental, voiceless) but with insufficient frication duration. Native English /θ/ averages 110-130ms in stressed syllables; your production was approximately 80ms. The brief duration likely caused the spectrogram to register weaker high-frequency turbulence (4-8kHz), which the scoring algorithm interpreted as reduced clarity.",
      'Phoneme Profile': "/θ/ — IPA character U+03B8. Voiceless interdental fricative. Manner: fricative (continuous turbulent airflow). Place: interdental (tongue between or against upper incisors). Voice: voiceless (glottal abduction). Common phonological alternations: in rapid speech, /θ/ may surface as [t̪] (dental stop) or [f] (labiodental fricative) — both are documented even in native speech.",
      'Common Pitfalls': "L2 speakers commonly substitute /θ/ via either (a) Th-stopping → /t/, characteristic of many Germanic and Slavic L1 backgrounds, (b) Th-fronting → /f/, common in Cockney English and some West African Englishes, or (c) Th-alveolarization → /s/, common in French, Japanese, Korean L1 speakers. Your production avoided all three substitutions, indicating strong articulatory awareness.",
      'Comparisons': "/θ/ contrasts minimally with /ð/ on the voicing dimension only — both share interdental place and fricative manner. The voicing distinction loads the discrimination burden onto laryngeal coordination. /θ/ also contrasts with /s/ (alveolar) and /f/ (labiodental) on place, creating a three-way fricative distinction at high frequencies (3-8kHz spectral peak ranges).",
      'Did You Know': "The interdental fricatives /θ/ and /ð/ are typologically rare, occurring in fewer than 10% of the world's languages (per the WALS database). Their presence in English is partly attributable to historical preservation from Old English, where they were already attested as separate phonemes (orthographic þ and ð). Many sound-change patterns predict their eventual loss; in some English dialects (Cockney, AAVE, certain Caribbean varieties) the change is well underway.",
      'Reassurance': "Statistical context: cross-sectional studies of L2 English speakers indicate /θ/ production accuracy of 65-75% is typical at intermediate levels (CEFR B1-B2) and improves to 85-92% by advanced (C1-C2). Your 71% places you within expected developmental trajectory. Continued exposure and structured practice are positively correlated with improvement (effect size r = 0.62 in longitudinal studies).",
    },
  },
];

const DEEP_DIVE_CATEGORIES = [
  'Quick Coach',
  'Phoneme Profile',
  'Common Pitfalls',
  'Comparisons',
  'Did You Know',
  'Reassurance',
];

const CATEGORY_ICONS = {
  'Quick Coach':     Zap,
  'Phoneme Profile': Compass,
  'Common Pitfalls': AlertTriangle,
  'Comparisons':     GitCompare,
  'Did You Know':    Lightbulb,
  'Reassurance':     ShieldQuestion,
};

// L1 fallback samples
const L1_TRANSLATIONS = {
  en: {
    label: 'English',
    flag: '🇺🇸',
    text: "Nice attempt on \"throughout\"! Your /θ/ came in at 71% — you're close. Try touching the tip of your tongue lightly to the back of your top teeth, then blow a small puff of air. No vibration in your throat. Give it another go!",
  },
  es: {
    label: 'Español',
    flag: '🇪🇸',
    text: "¡Buen intento con \"throughout\"! Tu /θ/ obtuvo un 71% — estás cerca. Intenta tocar la punta de tu lengua suavemente contra la parte trasera de tus dientes superiores, luego sopla un pequeño chorro de aire. Sin vibración en la garganta. ¡Inténtalo otra vez!",
  },
  fr: {
    label: 'Français',
    flag: '🇫🇷',
    text: "Bel essai sur \"throughout\" ! Ton /θ/ est arrivé à 71% — tu y es presque. Essaie de toucher légèrement le bout de ta langue à l'arrière de tes dents du haut, puis souffle un petit jet d'air. Pas de vibration dans la gorge. Réessaie !",
  },
  hi: {
    label: 'हिन्दी',
    flag: '🇮🇳',
    text: "\"throughout\" पर अच्छी कोशिश! आपका /θ/ 71% पर आया — आप बहुत करीब हैं। अपनी जीभ की नोक को हल्के से अपने ऊपरी दांतों के पीछे छुएं, फिर थोड़ी हवा छोड़ें। गले में कंपन नहीं। फिर से कोशिश करें!",
  },
  ja: {
    label: '日本語',
    flag: '🇯🇵',
    text: "「throughout」、いい試みですね！あなたの /θ/ は71%でした。あと少しです。舌の先を上の前歯の裏側に軽く触れさせて、小さな息を吹き出してみてください。喉は震わせません。もう一度やってみましょう！",
  },
};

// ===== MAIN COMPONENT =====
export default function CoachTour() {
  // Hero cycling
  const [cycleIndex, setCycleIndex] = useState(0);
  const [cycleFlipping, setCycleFlipping] = useState(false);
  const [cyclePaused, setCyclePaused] = useState(false);
  useEffect(() => {
    if (cyclePaused) return;
    const t = setInterval(() => {
      setCycleFlipping(true);
      setTimeout(() => {
        setCycleIndex(i => (i + 1) % CYCLING_ADJECTIVES.length);
        setCycleFlipping(false);
      }, 250);
    }, 2400);
    return () => clearInterval(t);
  }, [cyclePaused]);

  // Personality toggle (the signature moment)
  const [activeCoach, setActiveCoach] = useState(0); // 0=Tutor, 1=Sergeant, 2=Expert

  // Quick Tip vs Deep Dive
  const [coachDepth, setCoachDepth] = useState('quick'); // 'quick' | 'deep'
  const [deepCategoryIdx, setDeepCategoryIdx] = useState(0);

  // L1 fallback
  const [l1, setL1] = useState('en');

  const coach = COACH_PERSONALITIES[activeCoach];
  const CoachIcon = coach.icon;

  return (
    <div className="lux-coach">
      <style>{`${DESIGN_TOKENS}${TOUR_STYLES}`}</style>

      {/* NAV */}
      <nav className="lux-nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="nav-mark"><span className="nav-mark-inner" /></span>
            <span className="nav-name">Lux</span>
          </div>
          <div className="nav-links">
            <a href="/welcome" className="nav-link">Welcome</a>
            <a href="#personalities" className="nav-link">Three personalities</a>
            <a href="#depth" className="nav-link">Quick tip vs deep dive</a>
            <a href="#languages" className="nav-link">12 languages</a>
          </div>
          <div className="nav-actions">
            <button className="nav-signin">Sign in</button>
            <button className="nav-cta">Get Lux <ArrowRight size={14} strokeWidth={2.5} /></button>
          </div>
        </div>
        <div className="lux-subnav">
          <div className="subnav-inner">
            <span className="subnav-label">Tours</span>
            <span className="subnav-divider">·</span>
            {TOURS.map((tour, i) => (
              <span key={tour.id} className="subnav-item-wrap">
                <a href={tour.path}
                   className={`subnav-item ${tour.id === 'coach' ? 'active' : ''}`}>
                  {tour.label}
                </a>
                {i < TOURS.length - 1 && <span className="subnav-sep">·</span>}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* C2 — HERO */}
      <header className="hero-tour">
        <div className="container">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            AI feedback that meets you where you are
          </div>
          <h1 className="hero-headline-tour">
            <span className="chunk">Three coaches.</span>
            <br />
            <span className={`hh-cycle-wrap`}>
              <span className={`hh-cycle ${cycleFlipping ? 'flipping' : ''}`}>
                {CYCLING_ADJECTIVES[cycleIndex]}
              </span>
            </span>
            <span className="chunk"> approaches.</span>
            <br />
            <span className="chunk">One goal.</span>
          </h1>
          <p className="hero-sub-tour">
            Lux Coach reviews every attempt and tells you exactly what to fix and how — in your voice, your style, and your language.
          </p>

          <div className="hero-controls in">
            <button className="hc-btn" onClick={() => setCyclePaused(!cyclePaused)}>
              {cyclePaused ? <Play size={12} strokeWidth={2.5} /> : <Pause size={12} strokeWidth={2.5} />}
            </button>
            <span className="hc-label">{cyclePaused ? 'PAUSED' : 'AUTO-CYCLING'}</span>
          </div>
        </div>
      </header>

      {/* C3 — THREE PERSONALITIES SHOWCASE (the page's signature moment) */}
      <section id="personalities" className="personalities-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The signature moment</div>
            <h2 className="section-title">Same input. Three radically different coaches.</h2>
            <p className="section-sub">
              You said the word <strong>"{COACH_SCENARIO.word}"</strong> and scored <strong>{COACH_SCENARIO.score}% on {COACH_SCENARIO.phoneme}</strong>. Watch how each coach delivers the same feedback.
            </p>
          </div>

          {/* Coach scenario context bar */}
          <div className="scenario-bar">
            <div className="sb-left">
              <div className="sb-label">YOUR LATEST ATTEMPT</div>
              <div className="sb-context">{COACH_SCENARIO.context}</div>
            </div>
            <div className="sb-right">
              <div className="sb-score-row">
                <span className="sb-word">"{COACH_SCENARIO.word}"</span>
                <span className="sb-phoneme">{COACH_SCENARIO.phoneme}</span>
                <span className="sb-score warn">{COACH_SCENARIO.score}%</span>
              </div>
            </div>
          </div>

          {/* Personality tabs */}
          <div className="coach-tabs">
            {COACH_PERSONALITIES.map((p, i) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  className={`coach-tab ${p.color} ${activeCoach === i ? 'active' : ''}`}
                  onClick={() => setActiveCoach(i)}
                >
                  <div className="ct-icon"><Icon size={20} strokeWidth={2.2} /></div>
                  <div className="ct-name">{p.name}</div>
                  <div className="ct-tagline">{p.tagline}</div>
                </button>
              );
            })}
          </div>

          {/* Active coach response */}
          <div className={`coach-response ${coach.color}`}>
            <div className="cr-head">
              <div className={`cr-portrait ${coach.color}`}>
                <CoachIcon size={28} strokeWidth={2.2} />
              </div>
              <div className="cr-meta">
                <div className="cr-name">{coach.name}</div>
                <div className="cr-desc">{coach.description}</div>
              </div>
              <div className={`cr-badge ${coach.color}`}>QUICK TIP</div>
            </div>

            <div className="cr-body">
              <div className="cr-quote-icon">"</div>
              <p className="cr-text">{coach.quickTip}</p>
            </div>

            <div className="cr-footer">
              <div className="cr-meta-chips">
                <span className="cr-meta-chip">~3 second response</span>
                <span className="cr-meta-chip">English by default</span>
                <span className="cr-meta-chip">Click again for Deep Dive ↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C4 — QUICK TIP vs DEEP DIVE */}
      <section id="depth" className="depth-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Two depths</div>
            <h2 className="section-title">Quick check, or full diagnosis?</h2>
            <p className="section-sub">
              Quick Tip gives you one sharp piece of feedback in three seconds. Deep Dive analyzes your attempt from six different angles — and pages through them one at a time.
            </p>
          </div>

          {/* Depth toggle */}
          <div className="depth-toggle-row">
            <div className="depth-toggle">
              <button
                className={`dt-btn ${coachDepth === 'quick' ? 'active' : ''}`}
                onClick={() => setCoachDepth('quick')}
              >
                <Zap size={16} strokeWidth={2.5} />
                Quick Tip
              </button>
              <button
                className={`dt-btn ${coachDepth === 'deep' ? 'active' : ''}`}
                onClick={() => setCoachDepth('deep')}
              >
                <Compass size={16} strokeWidth={2.5} />
                Deep Dive
              </button>
            </div>
            <div className="depth-coach-tag">
              <span className={`dct-dot ${coach.color}`} />
              Showing: {coach.name}
            </div>
          </div>

          {coachDepth === 'quick' && (
            <div className={`depth-display quick-display ${coach.color}`}>
              <div className="dd-quick-card">
                <div className="dd-q-icon"><Zap size={32} strokeWidth={2} /></div>
                <p className="dd-q-text">{coach.quickTip}</p>
                <div className="dd-q-meta">
                  <span className="dd-q-time">⏱ ~3 seconds</span>
                  <span className="dd-q-divider">·</span>
                  <span className="dd-q-tone">{coach.tagline}</span>
                </div>
              </div>
              <div className="dd-q-aside">
                <div className="dd-q-aside-lbl">USE QUICK TIP WHEN</div>
                <ul className="dd-q-aside-list">
                  <li>You're mid-practice and want to keep moving</li>
                  <li>You just need to know <em>what</em> went wrong</li>
                  <li>You'll loop back to study the sound later</li>
                </ul>
              </div>
            </div>
          )}

          {coachDepth === 'deep' && (
            <div className={`depth-display deep-display ${coach.color}`}>
              {/* Category nav */}
              <div className="dd-cat-nav">
                {DEEP_DIVE_CATEGORIES.map((cat, i) => {
                  const Icon = CATEGORY_ICONS[cat];
                  return (
                    <button
                      key={cat}
                      className={`dd-cat-btn ${i === deepCategoryIdx ? 'active' : ''}`}
                      onClick={() => setDeepCategoryIdx(i)}
                    >
                      <Icon size={14} strokeWidth={2.2} />
                      <span className="ddc-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="ddc-name">{cat}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active category content */}
              <div className="dd-cat-content">
                <div className="dd-cat-head">
                  <div className={`dd-cat-num-large ${coach.color}`}>{String(deepCategoryIdx + 1).padStart(2, '0')}</div>
                  <div className="dd-cat-title-block">
                    <div className="dd-cat-tag">{DEEP_DIVE_CATEGORIES[deepCategoryIdx].toUpperCase()}</div>
                    <h3 className="dd-cat-title">{DEEP_DIVE_CATEGORIES[deepCategoryIdx]}</h3>
                  </div>
                </div>
                <div className="dd-cat-body">
                  <p>{coach.deepDive[DEEP_DIVE_CATEGORIES[deepCategoryIdx]]}</p>
                </div>
                <div className="dd-cat-pager">
                  <button
                    className="ddp-btn"
                    onClick={() => setDeepCategoryIdx(Math.max(0, deepCategoryIdx - 1))}
                    disabled={deepCategoryIdx === 0}
                  >
                    <ChevronLeft size={14} strokeWidth={2.5} /> Previous
                  </button>
                  <div className="ddp-progress">
                    {DEEP_DIVE_CATEGORIES.map((_, i) => (
                      <span key={i} className={`ddp-dot ${i === deepCategoryIdx ? 'active' : ''} ${i < deepCategoryIdx ? 'past' : ''}`} />
                    ))}
                  </div>
                  <button
                    className="ddp-btn"
                    onClick={() => setDeepCategoryIdx(Math.min(DEEP_DIVE_CATEGORIES.length - 1, deepCategoryIdx + 1))}
                    disabled={deepCategoryIdx === DEEP_DIVE_CATEGORIES.length - 1}
                  >
                    Next <ChevronRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          )}

          <p className="placeholder-disclaimer center mt-2">
            *All six Deep Dive categories are real. The text shown is from Lux's actual coach prompts adapted for this demo.
          </p>
        </div>
      </section>

      {/* C5 — L1 FALLBACK */}
      <section id="languages" className="l1-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The secret weapon</div>
            <h2 className="section-title">Coach speaks your language.</h2>
            <p className="section-sub">
              Choose your first language in Lux. Deep Dive responses come back in your native tongue — but referencing English phonemes and pronunciation precisely. The most powerful feature for non-native speakers.
            </p>
          </div>

          <div className="l1-frame">
            <div className="l1-toggle-row">
              <span className="l1-toggle-lbl">
                <Globe size={14} strokeWidth={2.2} />
                Your first language
              </span>
              <div className="l1-toggle">
                {Object.entries(L1_TRANSLATIONS).map(([code, info]) => (
                  <button
                    key={code}
                    className={`l1-btn ${l1 === code ? 'active' : ''}`}
                    onClick={() => setL1(code)}
                  >
                    <span className="l1-btn-flag">{info.flag}</span>
                    <span className="l1-btn-label">{info.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="l1-response">
              <div className="l1-response-head">
                <div className={`l1-response-portrait tutor`}>
                  <Heart size={20} strokeWidth={2.2} />
                </div>
                <div className="l1-response-meta">
                  <div className="l1-response-name">Tutor in {L1_TRANSLATIONS[l1].label}</div>
                  <div className="l1-response-desc">Same scoring data. Same coaching insight. Your language.</div>
                </div>
                <div className="l1-response-flag">{L1_TRANSLATIONS[l1].flag}</div>
              </div>
              <div className="l1-response-body">
                <p>{L1_TRANSLATIONS[l1].text}</p>
              </div>
            </div>

            <div className="l1-disclaimer">
              <Sparkles size={14} strokeWidth={2.2} />
              <span>Coach speaks <strong>12 languages</strong>: English, Spanish, French, Hindi, Arabic, Chinese, Japanese, Korean, Russian, Portuguese, Marathi, German. Set your first language in Lux to get coached in your native tongue.</span>
            </div>
          </div>
        </div>
      </section>

      {/* C6 — WHEN TO USE COACH */}
      <section className="usage-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Two modes, two moments</div>
            <h2 className="section-title">When to use which.</h2>
          </div>

          <div className="usage-grid">
            <div className="usage-card quick">
              <div className="uc-icon-wrap">
                <Zap size={32} strokeWidth={2} />
              </div>
              <div className="uc-tag">QUICK TIP</div>
              <h3 className="uc-title">When you need a quick check.</h3>
              <p className="uc-body">
                You're in the middle of practice. You just want to know what went wrong and keep going. Three seconds, one sharp note, back to recording.
              </p>
              <ul className="uc-list">
                <li><Check size={14} strokeWidth={2.5} />Mid-session, mid-flow</li>
                <li><Check size={14} strokeWidth={2.5} />Single phoneme or word focus</li>
                <li><Check size={14} strokeWidth={2.5} />English-only, no L1 needed</li>
                <li><Check size={14} strokeWidth={2.5} />~3 second response time</li>
              </ul>
            </div>

            <div className="usage-card deep">
              <div className="uc-icon-wrap">
                <Compass size={32} strokeWidth={2} />
              </div>
              <div className="uc-tag">DEEP DIVE</div>
              <h3 className="uc-title">When you want to understand.</h3>
              <p className="uc-body">
                You hit the same trouble sound for the third time this week. You want to know why. Six categories, each more focused than a single quick tip ever could be.
              </p>
              <ul className="uc-list">
                <li><Check size={14} strokeWidth={2.5} />End of session, reflection time</li>
                <li><Check size={14} strokeWidth={2.5} />Recurring trouble sound or pattern</li>
                <li><Check size={14} strokeWidth={2.5} />L1 fallback for full understanding</li>
                <li><Check size={14} strokeWidth={2.5} />Six analytical angles per phoneme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* C7 — CROSS-TOUR OUTBOUND */}
      <section className="next-tours-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Where to next</div>
            <h2 className="section-title">Two Tours that feed Coach.</h2>
          </div>
          <div className="next-tours-grid">
            <a href="/welcome/pronunciation" className="next-tour-card">
              <div className="ntc-icon"><Activity size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">PRONUNCIATION TOUR</div>
              <h3>How Lux scores you in the first place.</h3>
              <p>Coach can't teach you what wasn't measured. The Pronunciation Tour walks through how every sound gets scored — the input that feeds every Coach response.</p>
              <span className="ntc-link">See how Lux scores you <ChevronRight size={14} strokeWidth={2.5} /></span>
            </a>
            <a href="/welcome/conversations" className="next-tour-card">
              <div className="ntc-icon"><MessageCircle size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">CONVERSATIONS TOUR</div>
              <h3>See Coach inside a real conversation.</h3>
              <p>Coach reviews every conversation turn, not just isolated drills. See the same three personalities working through a back-and-forth dialogue with realistic scoring.</p>
              <span className="ntc-link">See it inside a real conversation <ChevronRight size={14} strokeWidth={2.5} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner container">
          <div className="footer-brand">
            <span className="nav-mark small"><span className="nav-mark-inner" /></span>
            <span>Lux · English pronunciation</span>
          </div>
          <div className="footer-meta">A practice product by Mark Huguley</div>
        </div>
      </footer>
    </div>
  );
}

// ===== STYLES =====
const DESIGN_TOKENS = `
:root {
  --bg: #FFFFFF;
  --ink: #08080E;
  --ink-soft: #1A1D2E;
  --ink-medium: #4A4860;
  --ink-faint: #7C7A8E;
  --line: #E5E7EB;
  --slate-50: #F8FAFC;
  --slate-100: #F1F5F9;
  --slate-200: #E2E8F0;
  --brand: #0078D7;
  --brand-hover: #1A8AE0;
  --score-good: #2563EB;
  --score-good-bg: #EFF6FF;
  --score-warn: #D97706;
  --score-warn-bg: #FFFBEB;
  --score-bad: #DC2626;
  --score-bad-bg: #FEF2F2;
  --gold: #EAB308;

  /* Coach personality colors */
  --tutor: #0078D7;
  --tutor-bg: #EFF6FF;
  --tutor-border: #BFDBFE;
  --sergeant: #B91C1C;
  --sergeant-bg: #FEF2F2;
  --sergeant-border: #FECACA;
  --expert: #6D28D9;
  --expert-bg: #F5F3FF;
  --expert-border: #DDD6FE;

  --max-w: 1300px;
  --hero-size: 7.5rem;
  --hero-weight: 900;
  --hero-tracking: -0.04em;
  --sect-pad-y: 7rem;
  --card-radius: 14px;
  --ease-drawer: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-panel: cubic-bezier(0.65, 0, 0.35, 1);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body, .lux-coach {
  font-family: 'Montserrat', system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.lux-coach { min-height: 100vh; }
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
`;

const TOUR_STYLES = `
/* === NAV (matches other Tours) === */
.lux-nav { position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.92); backdrop-filter: blur(14px); border-bottom: 1px solid var(--line); }
.nav-inner { max-width: var(--max-w); margin: 0 auto; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
.nav-brand { display: flex; align-items: center; gap: 0.65rem; }
.nav-mark { width: 32px; height: 32px; background: var(--ink); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
.nav-mark.small { width: 20px; height: 20px; border-radius: 5px; }
.nav-mark-inner { width: 12px; height: 12px; background: var(--brand); border-radius: 3px; }
.nav-name { font-weight: 800; font-size: 1.1rem; letter-spacing: -0.02em; }
.nav-links { display: flex; gap: 1.85rem; }
.nav-link { color: var(--ink-soft); text-decoration: none; font-weight: 600; font-size: 0.92rem; transition: color 200ms; }
.nav-link:hover { color: var(--brand); }
.nav-actions { display: flex; gap: 0.85rem; align-items: center; }
.nav-signin { background: transparent; border: none; color: var(--ink); font-weight: 700; font-size: 0.92rem; cursor: pointer; }
.nav-cta { background: var(--ink); color: #fff; border: none; padding: 0.6rem 1.1rem; border-radius: 999px; font-weight: 700; font-size: 0.9rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem; transition: all 200ms var(--ease-drawer); }
.nav-cta:hover { background: var(--brand); transform: translateY(-1px); }
@media (max-width: 800px) { .nav-links { display: none; } }

.lux-subnav { background: var(--slate-50); border-bottom: 1px solid var(--line); font-family: 'JetBrains Mono', monospace; }
.subnav-inner { max-width: var(--max-w); margin: 0 auto; padding: 0.55rem 2rem; display: flex; align-items: center; gap: 0.55rem; flex-wrap: wrap; font-size: 0.75rem; }
.subnav-label { font-weight: 800; color: var(--ink-soft); letter-spacing: 0.14em; text-transform: uppercase; }
.subnav-divider { color: var(--ink-faint); margin: 0 0.15rem; }
.subnav-item-wrap { display: inline-flex; align-items: center; gap: 0.35rem; }
.subnav-item { color: var(--ink-soft); text-decoration: none; font-weight: 600; padding: 0.15rem 0.45rem; border-radius: 5px; transition: all 200ms var(--ease-drawer); letter-spacing: 0.01em; }
.subnav-item:hover { color: var(--brand); background: #fff; }
.subnav-item.active { color: var(--brand); background: #fff; font-weight: 800; box-shadow: 0 1px 4px rgba(15,23,42,0.06); }
.subnav-sep { color: var(--ink-faint); font-size: 0.7rem; }

/* === HERO === */
.hero-tour { padding: 5rem 0 3.5rem; background: var(--bg); border-bottom: 1px solid var(--line); }
.hero-eyebrow { display: inline-flex; align-items: center; gap: 0.55rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; color: var(--ink-soft); text-transform: uppercase; margin-bottom: 1.5rem; }
.eyebrow-dot { width: 7px; height: 7px; background: var(--brand); border-radius: 50%; }
.hero-headline-tour { font-family: 'Montserrat'; font-weight: 900; font-size: clamp(3rem, 6vw, 6rem); line-height: 0.98; letter-spacing: -0.04em; color: var(--ink); max-width: 1100px; }
.hero-headline-tour .chunk { display: inline; }
.hh-cycle-wrap { display: inline-flex; vertical-align: baseline; align-items: baseline; margin: 0 0.1em; padding: 0.02em 0.22em; background: linear-gradient(135deg, var(--brand) 0%, #2563EB 100%); color: #fff; border-radius: 0.14em; position: relative; overflow: hidden; box-shadow: 0 8px 24px rgba(0,120,215,0.28); }
.hh-cycle { display: inline-block; transition: transform 250ms var(--ease-pop), opacity 250ms ease; }
.hh-cycle.flipping { transform: translateY(-6px); opacity: 0; }
.hero-sub-tour { margin-top: 2rem; font-size: 1.25rem; line-height: 1.55; color: var(--ink-soft); max-width: 720px; font-weight: 500; }
.hero-controls { display: inline-flex; align-items: center; gap: 0.45rem; margin-top: 2rem; opacity: 0.55; transition: opacity 300ms; }
.hero-controls:hover { opacity: 1; }
.hc-btn { width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; background: transparent; color: var(--ink-faint); border: none; border-radius: 999px; cursor: pointer; transition: all 200ms; }
.hc-btn:hover { color: var(--brand); transform: scale(1.15); }
.hc-label { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; color: var(--ink-faint); text-transform: uppercase; }

/* === SECTION HEADS === */
.section-head { text-align: center; margin-bottom: 3.5rem; }
.kicker { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em; color: var(--brand); text-transform: uppercase; margin-bottom: 1rem; padding: 0.3rem 0.7rem; background: var(--score-good-bg); border-radius: 6px; }
.section-title { font-weight: 800; font-size: clamp(2rem, 4vw, 3.25rem); letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 1.25rem; max-width: 900px; margin-left: auto; margin-right: auto; }
.section-title strong { color: var(--brand); font-weight: 800; }
.section-sub { font-size: 1.1rem; line-height: 1.55; color: var(--ink-soft); max-width: 760px; margin: 0 auto; font-weight: 500; }
.section-sub strong { color: var(--ink); font-weight: 800; }

/* === C3 PERSONALITIES === */
.personalities-section { padding: var(--sect-pad-y) 0; background: var(--bg); }

.scenario-bar { display: flex; justify-content: space-between; align-items: center; gap: 2rem; padding: 1.25rem 1.75rem; background: var(--ink); color: #fff; border-radius: 14px; margin-bottom: 2.5rem; flex-wrap: wrap; }
.sb-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.14em; color: var(--gold); margin-bottom: 0.4rem; }
.sb-context { font-size: 0.95rem; color: rgba(255,255,255,0.85); font-weight: 500; }
.sb-score-row { display: flex; align-items: center; gap: 0.75rem; }
.sb-word { font-family: 'JetBrains Mono', monospace; font-weight: 800; font-size: 1.1rem; color: #fff; padding: 0.4rem 0.85rem; background: rgba(255,255,255,0.1); border-radius: 8px; }
.sb-phoneme { font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; color: var(--gold); font-weight: 700; }
.sb-score { padding: 0.45rem 0.85rem; background: var(--score-warn); color: #fff; border-radius: 8px; font-weight: 800; font-size: 1rem; font-family: 'JetBrains Mono', monospace; }

/* Coach tabs */
.coach-tabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }
@media (max-width: 880px) { .coach-tabs { grid-template-columns: 1fr; } }
.coach-tab { background: #fff; border: 2px solid var(--line); border-radius: 14px; padding: 1.5rem 1.25rem; cursor: pointer; transition: all 280ms var(--ease-drawer); display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start; text-align: left; }
.coach-tab:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.coach-tab.tutor.active { border-color: var(--tutor); background: var(--tutor-bg); box-shadow: 0 12px 32px rgba(0,120,215,0.15); }
.coach-tab.sergeant.active { border-color: var(--sergeant); background: var(--sergeant-bg); box-shadow: 0 12px 32px rgba(185,28,28,0.15); }
.coach-tab.expert.active { border-color: var(--expert); background: var(--expert-bg); box-shadow: 0 12px 32px rgba(109,40,217,0.15); }
.ct-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.coach-tab.tutor .ct-icon { background: var(--tutor-bg); color: var(--tutor); }
.coach-tab.sergeant .ct-icon { background: var(--sergeant-bg); color: var(--sergeant); }
.coach-tab.expert .ct-icon { background: var(--expert-bg); color: var(--expert); }
.coach-tab.tutor.active .ct-icon { background: var(--tutor); color: #fff; }
.coach-tab.sergeant.active .ct-icon { background: var(--sergeant); color: #fff; }
.coach-tab.expert.active .ct-icon { background: var(--expert); color: #fff; }
.ct-name { font-weight: 800; font-size: 1.4rem; letter-spacing: -0.02em; }
.coach-tab.tutor.active .ct-name { color: var(--tutor); }
.coach-tab.sergeant.active .ct-name { color: var(--sergeant); }
.coach-tab.expert.active .ct-name { color: var(--expert); }
.ct-tagline { font-size: 0.85rem; color: var(--ink-medium); font-weight: 600; line-height: 1.4; }

/* Coach response card */
.coach-response { border: 2.5px solid; border-radius: 18px; overflow: hidden; transition: all 380ms var(--ease-drawer); }
.coach-response.tutor { border-color: var(--tutor); background: linear-gradient(180deg, var(--tutor-bg) 0%, #fff 60%); }
.coach-response.sergeant { border-color: var(--sergeant); background: linear-gradient(180deg, var(--sergeant-bg) 0%, #fff 60%); }
.coach-response.expert { border-color: var(--expert); background: linear-gradient(180deg, var(--expert-bg) 0%, #fff 60%); }

.cr-head { display: flex; align-items: center; gap: 1.25rem; padding: 1.5rem 2rem; border-bottom: 1px solid rgba(0,0,0,0.06); }
.cr-portrait { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.cr-portrait.tutor { background: var(--tutor); color: #fff; box-shadow: 0 8px 20px rgba(0,120,215,0.25); }
.cr-portrait.sergeant { background: var(--sergeant); color: #fff; box-shadow: 0 8px 20px rgba(185,28,28,0.25); }
.cr-portrait.expert { background: var(--expert); color: #fff; box-shadow: 0 8px 20px rgba(109,40,217,0.25); }
.cr-meta { flex: 1; }
.cr-name { font-weight: 800; font-size: 1.5rem; letter-spacing: -0.02em; }
.cr-desc { font-size: 0.9rem; color: var(--ink-medium); font-weight: 500; margin-top: 0.2rem; }
.cr-badge { padding: 0.4rem 0.85rem; border-radius: 999px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; color: #fff; }
.cr-badge.tutor { background: var(--tutor); }
.cr-badge.sergeant { background: var(--sergeant); }
.cr-badge.expert { background: var(--expert); }

.cr-body { padding: 2rem; position: relative; }
.cr-quote-icon { position: absolute; top: 0.5rem; left: 1.5rem; font-family: 'Georgia', serif; font-size: 5rem; line-height: 1; color: rgba(0,0,0,0.06); font-weight: 800; }
.cr-text { font-size: 1.1rem; line-height: 1.65; color: var(--ink); font-weight: 500; position: relative; z-index: 1; }
.coach-response.expert .cr-text { font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 0.95rem; }
.coach-response.sergeant .cr-text { font-weight: 600; }

.cr-footer { padding: 1rem 2rem 1.5rem; border-top: 1px dashed rgba(0,0,0,0.08); }
.cr-meta-chips { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.cr-meta-chip { padding: 0.35rem 0.7rem; background: rgba(255,255,255,0.7); border: 1px solid rgba(0,0,0,0.08); border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--ink-soft); letter-spacing: 0.02em; }

/* === C4 DEPTH === */
.depth-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--slate-50) 0%, var(--bg) 100%); border-top: 1px solid var(--line); }

.depth-toggle-row { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
.depth-toggle { display: inline-flex; padding: 0.4rem; background: #fff; border: 1.5px solid var(--line); border-radius: 12px; gap: 0.3rem; box-shadow: 0 4px 16px rgba(15,23,42,0.06); }
.dt-btn { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.65rem 1.25rem; background: transparent; border: none; border-radius: 8px; font-family: 'Montserrat'; font-weight: 700; font-size: 0.95rem; color: var(--ink-soft); cursor: pointer; transition: all 220ms var(--ease-drawer); }
.dt-btn:hover { color: var(--brand); }
.dt-btn.active { background: var(--ink); color: var(--brand); box-shadow: 0 4px 12px rgba(15,23,42,0.15); }
.depth-coach-tag { display: inline-flex; align-items: center; gap: 0.45rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--ink-soft); letter-spacing: 0.04em; }
.dct-dot { width: 10px; height: 10px; border-radius: 50%; }
.dct-dot.tutor { background: var(--tutor); }
.dct-dot.sergeant { background: var(--sergeant); }
.dct-dot.expert { background: var(--expert); }

/* QUICK display */
.depth-display.quick-display { display: grid; grid-template-columns: 1.5fr 1fr; gap: 1.5rem; }
@media (max-width: 880px) { .depth-display.quick-display { grid-template-columns: 1fr; } }
.dd-quick-card { background: #fff; border: 2px solid; border-radius: 18px; padding: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem; }
.depth-display.quick-display.tutor .dd-quick-card { border-color: var(--tutor); background: linear-gradient(135deg, var(--tutor-bg) 0%, #fff 60%); }
.depth-display.quick-display.sergeant .dd-quick-card { border-color: var(--sergeant); background: linear-gradient(135deg, var(--sergeant-bg) 0%, #fff 60%); }
.depth-display.quick-display.expert .dd-quick-card { border-color: var(--expert); background: linear-gradient(135deg, var(--expert-bg) 0%, #fff 60%); }
.dd-q-icon { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #fff; }
.depth-display.quick-display.tutor .dd-q-icon { background: var(--tutor); }
.depth-display.quick-display.sergeant .dd-q-icon { background: var(--sergeant); }
.depth-display.quick-display.expert .dd-q-icon { background: var(--expert); }
.dd-q-text { font-size: 1.15rem; line-height: 1.65; color: var(--ink); font-weight: 500; }
.depth-display.quick-display.expert .dd-q-text { font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; }
.dd-q-meta { display: flex; align-items: center; gap: 0.55rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--ink-medium); letter-spacing: 0.02em; padding-top: 1rem; border-top: 1px dashed rgba(0,0,0,0.1); }
.dd-q-divider { color: var(--ink-faint); }

.dd-q-aside { background: var(--ink); color: #fff; border-radius: 18px; padding: 2rem; display: flex; flex-direction: column; gap: 1rem; }
.dd-q-aside-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.14em; color: var(--gold); }
.dd-q-aside-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.85rem; }
.dd-q-aside-list li { font-size: 0.95rem; color: rgba(255,255,255,0.85); padding-left: 1.25rem; position: relative; line-height: 1.5; }
.dd-q-aside-list li::before { content: '→'; position: absolute; left: 0; color: var(--gold); font-weight: 800; }
.dd-q-aside-list em { color: var(--gold); font-style: italic; font-weight: 700; }

/* DEEP display */
.depth-display.deep-display { display: grid; grid-template-columns: 280px 1fr; gap: 1.5rem; background: #fff; border: 2px solid; border-radius: 18px; overflow: hidden; }
@media (max-width: 880px) { .depth-display.deep-display { grid-template-columns: 1fr; } }
.depth-display.deep-display.tutor { border-color: var(--tutor); }
.depth-display.deep-display.sergeant { border-color: var(--sergeant); }
.depth-display.deep-display.expert { border-color: var(--expert); }

.dd-cat-nav { background: var(--slate-50); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem; border-right: 1px solid var(--line); }
@media (max-width: 880px) { .dd-cat-nav { flex-direction: row; overflow-x: auto; border-right: none; border-bottom: 1px solid var(--line); } }
.dd-cat-btn { display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.85rem 1rem; background: transparent; border: none; border-radius: 8px; cursor: pointer; transition: all 220ms; font-family: 'Montserrat'; font-weight: 600; font-size: 0.88rem; color: var(--ink-soft); text-align: left; }
.dd-cat-btn:hover { background: #fff; color: var(--brand); }
.dd-cat-btn.active { background: var(--ink); color: var(--brand); }
.depth-display.deep-display.tutor .dd-cat-btn.active { background: var(--tutor); color: #fff; }
.depth-display.deep-display.sergeant .dd-cat-btn.active { background: var(--sergeant); color: #fff; }
.depth-display.deep-display.expert .dd-cat-btn.active { background: var(--expert); color: #fff; }
.ddc-num { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; color: var(--ink-faint); letter-spacing: 0.04em; }
.dd-cat-btn.active .ddc-num { color: var(--gold); }
.ddc-name { flex: 1; }

.dd-cat-content { padding: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem; }
.dd-cat-head { display: flex; align-items: flex-start; gap: 1.25rem; }
.dd-cat-num-large { font-family: 'JetBrains Mono', monospace; font-size: 3rem; font-weight: 800; line-height: 1; letter-spacing: -0.02em; }
.dd-cat-num-large.tutor { color: var(--tutor); }
.dd-cat-num-large.sergeant { color: var(--sergeant); }
.dd-cat-num-large.expert { color: var(--expert); }
.dd-cat-title-block { flex: 1; padding-top: 0.4rem; }
.dd-cat-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.16em; color: var(--brand); margin-bottom: 0.35rem; }
.dd-cat-title { font-weight: 800; font-size: 1.85rem; letter-spacing: -0.025em; line-height: 1.1; }
.dd-cat-body { padding: 1.5rem; background: var(--slate-50); border-radius: 12px; border-left: 4px solid; }
.depth-display.deep-display.tutor .dd-cat-body { border-color: var(--tutor); }
.depth-display.deep-display.sergeant .dd-cat-body { border-color: var(--sergeant); }
.depth-display.deep-display.expert .dd-cat-body { border-color: var(--expert); }
.dd-cat-body p { font-size: 1rem; line-height: 1.7; color: var(--ink); font-weight: 500; }
.depth-display.deep-display.expert .dd-cat-body p { font-family: 'JetBrains Mono', monospace; font-size: 0.92rem; }

.dd-cat-pager { display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px dashed var(--line); gap: 1rem; flex-wrap: wrap; }
.ddp-btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 0.9rem; background: #fff; border: 1px solid var(--line); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; transition: all 200ms; letter-spacing: 0.02em; }
.ddp-btn:hover:not(:disabled) { background: var(--ink); color: #fff; border-color: var(--ink); }
.ddp-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.ddp-progress { display: flex; gap: 0.4rem; align-items: center; }
.ddp-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--line); transition: all 280ms var(--ease-drawer); }
.ddp-dot.past { background: var(--brand); opacity: 0.5; }
.ddp-dot.active { background: var(--brand); width: 24px; border-radius: 4px; }

/* === C5 L1 FALLBACK === */
.l1-section { padding: var(--sect-pad-y) 0; background: var(--bg); border-top: 1px solid var(--line); }
.l1-frame { background: #fff; border: 2px solid var(--line); border-radius: 20px; padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 2rem; box-shadow: 0 16px 48px rgba(15,23,42,0.06); }

.l1-toggle-row { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }
.l1-toggle-lbl { display: inline-flex; align-items: center; gap: 0.45rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.1em; color: var(--ink); text-transform: uppercase; }
.l1-toggle { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.l1-btn { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.6rem 1rem; background: var(--slate-50); border: 1.5px solid var(--line); border-radius: 999px; font-weight: 700; font-size: 0.92rem; color: var(--ink-soft); cursor: pointer; transition: all 220ms var(--ease-drawer); }
.l1-btn:hover { border-color: var(--brand); color: var(--brand); transform: translateY(-1px); }
.l1-btn.active { background: var(--ink); color: #fff; border-color: var(--ink); box-shadow: 0 6px 18px rgba(15,23,42,0.18); }
.l1-btn-flag { font-size: 1.15rem; }

.l1-response { background: linear-gradient(135deg, var(--tutor-bg) 0%, #fff 60%); border: 2.5px solid var(--tutor); border-radius: 18px; overflow: hidden; }
.l1-response-head { display: flex; align-items: center; gap: 1.25rem; padding: 1.5rem 2rem; border-bottom: 1px solid var(--tutor-border); }
.l1-response-portrait { width: 56px; height: 56px; border-radius: 14px; background: var(--tutor); color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 18px rgba(0,120,215,0.25); flex-shrink: 0; }
.l1-response-meta { flex: 1; }
.l1-response-name { font-weight: 800; font-size: 1.35rem; letter-spacing: -0.02em; }
.l1-response-desc { font-size: 0.88rem; color: var(--ink-medium); font-weight: 500; margin-top: 0.2rem; }
.l1-response-flag { font-size: 2.5rem; }
.l1-response-body { padding: 2rem; }
.l1-response-body p { font-size: 1.1rem; line-height: 1.7; color: var(--ink); font-weight: 500; }

.l1-disclaimer { display: flex; align-items: flex-start; gap: 0.6rem; padding: 1rem 1.25rem; background: var(--score-good-bg); border-left: 4px solid var(--brand); border-radius: 4px 12px 12px 4px; font-size: 0.92rem; color: var(--ink-soft); font-weight: 500; line-height: 1.55; }
.l1-disclaimer svg { color: var(--brand); flex-shrink: 0; margin-top: 2px; }
.l1-disclaimer strong { color: var(--ink); font-weight: 800; }

/* === C6 USAGE === */
.usage-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--bg) 0%, var(--slate-50) 100%); border-top: 1px solid var(--line); }
.usage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
@media (max-width: 880px) { .usage-grid { grid-template-columns: 1fr; } }
.usage-card { background: #fff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; transition: all 320ms var(--ease-drawer); }
.usage-card:hover { transform: translateY(-4px); border-color: var(--brand); box-shadow: 0 16px 40px rgba(0,120,215,0.1); }
.usage-card.quick:hover { border-color: var(--gold); box-shadow: 0 16px 40px rgba(234,179,8,0.12); }
.usage-card.deep:hover { border-color: var(--brand); box-shadow: 0 16px 40px rgba(0,120,215,0.12); }
.uc-icon-wrap { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #fff; }
.usage-card.quick .uc-icon-wrap { background: var(--gold); }
.usage-card.deep .uc-icon-wrap { background: var(--brand); }
.uc-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.16em; }
.usage-card.quick .uc-tag { color: var(--gold); }
.usage-card.deep .uc-tag { color: var(--brand); }
.uc-title { font-weight: 800; font-size: 1.6rem; letter-spacing: -0.025em; line-height: 1.15; }
.uc-body { font-size: 1rem; line-height: 1.55; color: var(--ink-soft); font-weight: 500; }
.uc-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; padding-top: 0.85rem; border-top: 1px dashed var(--line); }
.uc-list li { display: flex; align-items: center; gap: 0.55rem; font-size: 0.92rem; color: var(--ink-soft); font-weight: 500; }
.uc-list li svg { flex-shrink: 0; }
.usage-card.quick .uc-list li svg { color: var(--gold); }
.usage-card.deep .uc-list li svg { color: var(--brand); }

/* === NEXT TOURS === */
.next-tours-section { padding: var(--sect-pad-y) 0; background: var(--bg); border-top: 1px solid var(--line); }
.next-tours-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
@media (max-width: 880px) { .next-tours-grid { grid-template-columns: 1fr; } }
.next-tour-card { background: #fff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2.5rem 2rem; text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: 1rem; transition: all 350ms var(--ease-drawer); }
.next-tour-card:hover { transform: translateY(-6px); border-color: var(--brand); box-shadow: 0 20px 50px rgba(0,120,215,0.12); }
.ntc-icon { width: 48px; height: 48px; border-radius: 12px; background: var(--score-good-bg); color: var(--brand); display: flex; align-items: center; justify-content: center; transition: all 300ms; }
.next-tour-card:hover .ntc-icon { background: var(--brand); color: #fff; transform: scale(1.06); }
.ntc-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.16em; color: var(--brand); }
.next-tour-card h3 { font-weight: 800; font-size: 1.4rem; letter-spacing: -0.025em; line-height: 1.15; }
.next-tour-card p { font-size: 0.95rem; line-height: 1.55; color: var(--ink-soft); font-weight: 500; flex: 1; }
.ntc-link { display: inline-flex; align-items: center; gap: 0.35rem; font-family: 'Montserrat'; font-weight: 700; font-size: 0.92rem; color: var(--ink); margin-top: 0.5rem; transition: all 220ms; }
.next-tour-card:hover .ntc-link { color: var(--brand); gap: 0.55rem; }

.placeholder-disclaimer { font-family: 'JetBrains Mono', monospace; font-style: italic; font-size: 0.78rem; color: var(--score-warn); font-weight: 500; letter-spacing: 0.01em; }
.placeholder-disclaimer.center { text-align: center; }
.placeholder-disclaimer.mt-2 { margin-top: 1.5rem; }

.footer { margin-top: 4rem; padding: 3rem 0; border-top: 1px solid var(--line); background: var(--bg); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.footer-brand { display: flex; align-items: center; gap: 0.55rem; font-weight: 700; font-size: 0.9rem; }
.footer-meta { font-size: 0.85rem; color: var(--ink-faint); font-weight: 500; }
`;
