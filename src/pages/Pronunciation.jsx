// /welcome/pronunciation — The Pronunciation Tour
// Phase 2 of the Lux onboarding multi-page architecture.
// Maps to Sections A (input) + D (word/phoneme chart) + my words mention from LUX_FEATURE_INVENTORY.md
// Per MULTI_PAGE_ARCHITECTURE.md Section 5.

import { useState, useEffect, useRef } from 'react';
import {
  Mic, Sparkles, Volume2, TrendingUp, ChevronRight,
  Play, Pause, RotateCw, Activity, MessageCircle,
  ArrowRight, Loader2, Check, AudioLines, BookOpen,
  Headphones, Eye, Type, Globe, Search, X, FileText,
  Zap, Brain, Cpu
} from 'lucide-react';

// ===== TOURS DATA (must match landing) =====
const TOURS = [
  { id: 'pronunciation', label: 'Pronunciation', path: '/welcome/pronunciation' },
  { id: 'coach',         label: 'Coach',         path: '/welcome/coach' },
  { id: 'voice',         label: 'Voice',         path: '/welcome/voice' },
  { id: 'conversations', label: 'Conversations', path: '/welcome/conversations' },
  { id: 'progress',      label: 'Progress',      path: '/welcome/progress' },
];

// Cycling adjectives in this Tour's hero — different from landing
const PRON_CYCLING_ADJECTIVES = ['heard', 'measured', 'scored', 'explained', 'improved'];

// L1 selector — sample of 12 supported languages
const L1_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'ru', label: 'Русский' },
  { code: 'pt', label: 'Português' },
  { code: 'mr', label: 'मराठी' },
  { code: 'de', label: 'Deutsch' },
];

// Rotating placeholders for the "type your own" input
const ROTATING_PLACEHOLDERS = [
  'Practice for a job interview...',
  'Practice your voicemail setup...',
  'Practice a speech you have to give...',
  'Practice a difficult phone call...',
  'Practice introducing yourself...',
];

// Pre-baked passage data — for the demo word/phoneme chart
// Real Lux scoring shape: words have phonemes with individual scores
const DEMO_PASSAGE = {
  text: 'The birch canoe slid on the smooth planks.',
  source: 'Harvard List 1',
  words: [
    {
      word: 'The',
      score: 96,
      tier: 'good',
      pause: 0.2,
      tempo: 0.35,
      syllables: [{ text: 'the', stress: false }],
      phonemes: [
        { ipa: '/ð/', azure: 'dh', score: 92 },
        { ipa: '/ə/', azure: 'ax', score: 100 },
      ],
    },
    {
      word: 'birch',
      score: 78,
      tier: 'warn',
      pause: 0.1,
      tempo: 0.5,
      syllables: [{ text: 'birch', stress: true }],
      phonemes: [
        { ipa: '/b/',  azure: 'b',  score: 96 },
        { ipa: '/ɜːr/', azure: 'er', score: 64 },
        { ipa: '/tʃ/', azure: 'ch', score: 75 },
      ],
    },
    {
      word: 'canoe',
      score: 91,
      tier: 'good',
      pause: 0.15,
      tempo: 0.6,
      syllables: [
        { text: 'ca', stress: false },
        { text: 'noe', stress: true },
      ],
      phonemes: [
        { ipa: '/k/',  azure: 'k',  score: 100 },
        { ipa: '/ə/',  azure: 'ax', score: 88 },
        { ipa: '/n/',  azure: 'n',  score: 95 },
        { ipa: '/uː/', azure: 'uw', score: 82 },
      ],
    },
    {
      word: 'slid',
      score: 88,
      tier: 'good',
      pause: 0.1,
      tempo: 0.4,
      syllables: [{ text: 'slid', stress: true }],
      phonemes: [
        { ipa: '/s/',  azure: 's',  score: 95 },
        { ipa: '/l/',  azure: 'l',  score: 88 },
        { ipa: '/ɪ/',  azure: 'ih', score: 90 },
        { ipa: '/d/',  azure: 'd',  score: 80 },
      ],
    },
    {
      word: 'on',
      score: 100,
      tier: 'good',
      pause: 0.1,
      tempo: 0.25,
      syllables: [{ text: 'on', stress: false }],
      phonemes: [
        { ipa: '/ɒ/', azure: 'aa', score: 100 },
        { ipa: '/n/', azure: 'n',  score: 100 },
      ],
    },
    {
      word: 'the',
      score: 94,
      tier: 'good',
      pause: 0.1,
      tempo: 0.25,
      syllables: [{ text: 'the', stress: false }],
      phonemes: [
        { ipa: '/ð/', azure: 'dh', score: 88 },
        { ipa: '/ə/', azure: 'ax', score: 100 },
      ],
    },
    {
      word: 'smooth',
      score: 72,
      tier: 'warn',
      pause: 0.15,
      tempo: 0.55,
      syllables: [{ text: 'smooth', stress: true }],
      phonemes: [
        { ipa: '/s/',  azure: 's',  score: 90 },
        { ipa: '/m/',  azure: 'm',  score: 88 },
        { ipa: '/uː/', azure: 'uw', score: 70 },
        { ipa: '/ð/',  azure: 'dh', score: 58 },
      ],
    },
    {
      word: 'planks',
      score: 84,
      tier: 'good',
      pause: 0.2,
      tempo: 0.6,
      syllables: [{ text: 'planks', stress: true }],
      phonemes: [
        { ipa: '/p/',  azure: 'p',  score: 95 },
        { ipa: '/l/',  azure: 'l',  score: 80 },
        { ipa: '/æ/',  azure: 'ae', score: 78 },
        { ipa: '/ŋ/',  azure: 'ng', score: 82 },
        { ipa: '/k/',  azure: 'k',  score: 88 },
        { ipa: '/s/',  azure: 's',  score: 90 },
      ],
    },
  ],
};

// Phoneme tooltip detail — front view, side view, plain English description, common mix-ups
// Mapped by Azure phoneme code. Real Lux has 40+; this is a curated subset for the demo.
const PHONEME_DETAILS = {
  'er': {
    ipa: '/ɜːr/',
    name: 'R-controlled vowel',
    plain: 'Curl the tongue back without touching the roof of your mouth. Lips slightly rounded. Imagine the start of a growl.',
    mixup: 'Often drifts toward /ʌ/ (like "uh") when the tongue isn\'t curled enough.',
    sampleWords: ['bird', 'her', 'word', 'first'],
  },
  'th': {
    ipa: '/θ/',
    name: 'Voiceless th',
    plain: 'Place the tip of your tongue lightly between your teeth and blow air through. No vibration.',
    mixup: 'Often replaced with /t/ ("tank" instead of "thank") or /s/ ("sank" instead of "thank").',
    sampleWords: ['think', 'thank', 'three', 'path'],
  },
  'dh': {
    ipa: '/ð/',
    name: 'Voiced th',
    plain: 'Tongue tip lightly between teeth, but vibrate the vocal cords this time. Feel the buzz in your throat.',
    mixup: 'Often replaced with /d/ ("dis" instead of "this") or /z/ ("zat" instead of "that").',
    sampleWords: ['this', 'that', 'mother', 'breathe'],
  },
  'uw': {
    ipa: '/uː/',
    name: 'Long oo',
    plain: 'Round your lips into a tight circle. Tongue back and high. Hold the sound steady.',
    mixup: 'Often shortens to /ʊ/ when lips aren\'t rounded enough.',
    sampleWords: ['smooth', 'food', 'true', 'shoe'],
  },
  'ch': {
    ipa: '/tʃ/',
    name: 'Voiceless ch',
    plain: 'Tongue blocks airflow at the roof of the mouth, then releases sharply with a rush of air.',
    mixup: 'Often softens to /ʃ/ ("shop" instead of "chop").',
    sampleWords: ['birch', 'chair', 'much', 'church'],
  },
  'ng': {
    ipa: '/ŋ/',
    name: 'Velar nasal',
    plain: 'Back of tongue presses against soft palate. Air flows through the nose. Lips can stay relaxed.',
    mixup: 'Often pronounced as /n/ + /g/ (over-articulated) instead of one nasal sound.',
    sampleWords: ['planks', 'sing', 'long', 'thing'],
  },
};

const tierForScore = (score) => score >= 80 ? 'good' : score >= 60 ? 'warn' : 'bad';

// ===== MAIN COMPONENT =====
export default function PronunciationTour() {
  // Hero cycling adjective
  const [cycleIndex, setCycleIndex] = useState(0);
  const [cycleFlipping, setCycleFlipping] = useState(false);
  const [cyclePaused, setCyclePaused] = useState(false);

  useEffect(() => {
    if (cyclePaused) return;
    const t = setInterval(() => {
      setCycleFlipping(true);
      setTimeout(() => {
        setCycleIndex(i => (i + 1) % PRON_CYCLING_ADJECTIVES.length);
        setCycleFlipping(false);
      }, 250);
    }, 2400);
    return () => clearInterval(t);
  }, [cyclePaused]);

  // Input section state
  const [activeInput, setActiveInput] = useState('harvard'); // 'harvard' | 'custom' | 'type'
  const [l1, setL1] = useState('en');
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPlaceholderIdx(i => (i + 1) % ROTATING_PLACEHOLDERS.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // Word/phoneme chart state
  const [activePhoneme, setActivePhoneme] = useState(null); // { wordIdx, phonemeIdx, azure, ipa, score }

  // Mouth animation toggle for phoneme tooltip
  const [mouthView, setMouthView] = useState('side'); // 'side' | 'front' | 'both'

  // Behind-the-math reveal
  const [mathRevealed, setMathRevealed] = useState(0);
  const mathRef = useRef(null);

  useEffect(() => {
    if (!mathRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && mathRevealed === 0) {
        // Reveal three pillars sequentially
        let i = 0;
        const t = setInterval(() => {
          i++;
          setMathRevealed(i);
          if (i >= 3) clearInterval(t);
        }, 600);
      }
    }, { threshold: 0.3 });
    obs.observe(mathRef.current);
    return () => obs.disconnect();
  }, [mathRevealed]);

  return (
    <div className="lux-pron">
      <style>{`${DESIGN_TOKENS}${TOUR_STYLES}`}</style>

      {/* NAV (matches landing) */}
      <nav className="lux-nav">
        <div className="nav-inner">
          <a href="/welcome" className="nav-brand" style={{ textDecoration: 'none', color: 'inherit' }}><span className="nav-mark"><span className="nav-mark-inner" /></span><span className="nav-name">Lux</span></a>
          <div className="nav-links">
            <a href="/welcome" className="nav-link">Welcome</a>
            <a href="#chart" className="nav-link">Chart</a>
            <a href="#math" className="nav-link">How it works</a>
          </div>
          <div className="nav-actions">
            <button className="nav-signin">Sign in</button>
            <button className="nav-cta">Get Lux <ArrowRight size={14} strokeWidth={2.5} /></button>
          </div>
        </div>

        {/* Tours subnav with Pronunciation active */}
        <div className="lux-subnav">
          <div className="subnav-inner">
            <span className="subnav-label">Tours</span>
            <span className="subnav-divider">·</span>
            {TOURS.map((tour, i) => (
              <span key={tour.id} className="subnav-item-wrap">
                <a href={tour.path}
                   className={`subnav-item ${tour.id === 'pronunciation' ? 'active' : ''}`}>
                  {tour.label}
                </a>
                {i < TOURS.length - 1 && <span className="subnav-sep">·</span>}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-tour">
        <div className="container">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            How Lux scores you, sound by sound
          </div>
          <h1 className="hero-headline-tour">
            <span className="chunk">Every sound you make is</span>
            <br />
            <span className={`hh-cycle-wrap`}>
              <span className={`hh-cycle ${cycleFlipping ? 'flipping' : ''}`}>
                {PRON_CYCLING_ADJECTIVES[cycleIndex]}
              </span>
            </span>
            <span className="chunk">.</span>
          </h1>
          <p className="hero-sub-tour">
            You read a passage. Lux scores every word, every phoneme, every detail of how you said it. Then it shows you exactly what to work on.
          </p>

          <div className="hero-controls in">
            <button className="hc-btn" onClick={() => setCyclePaused(!cyclePaused)}>
              {cyclePaused ? <Play size={12} strokeWidth={2.5} /> : <Pause size={12} strokeWidth={2.5} />}
            </button>
            <span className="hc-label">{cyclePaused ? 'PAUSED' : 'AUTO-CYCLING'}</span>
          </div>
        </div>
      </header>

      {/* P3 — INPUT SECTION DEMO */}
      <section id="input" className="input-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Step One</div>
            <h2 className="section-title">Pick what to practice.</h2>
            <p className="section-sub">
              Three ways to start. Curated passages with phonetic precision, the Harvard list for variety, or whatever you actually need to say tomorrow.
            </p>
          </div>

          <div className="input-frame">
            {/* Tab row */}
            <div className="input-tabs">
              <button
                className={`input-tab ${activeInput === 'harvard' ? 'active' : ''}`}
                onClick={() => setActiveInput('harvard')}
              >
                <BookOpen size={16} strokeWidth={2.2} />
                Harvard List <span className="tab-meta">72 passages</span>
              </button>
              <button
                className={`input-tab ${activeInput === 'custom' ? 'active' : ''}`}
                onClick={() => setActiveInput('custom')}
              >
                <FileText size={16} strokeWidth={2.2} />
                Phonetic drills <span className="tab-meta">Designed by linguists</span>
              </button>
              <button
                className={`input-tab ${activeInput === 'type' ? 'active' : ''}`}
                onClick={() => setActiveInput('type')}
              >
                <Type size={16} strokeWidth={2.2} />
                Type your own <span className="tab-meta">Anything you want</span>
              </button>
            </div>

            {/* Tab content */}
            <div className="input-tab-content">
              {activeInput === 'harvard' && (
                <div className="harvard-display">
                  <div className="harvard-num">List 1</div>
                  <p className="harvard-text">"The birch canoe slid on the smooth planks. Glue the sheet to the dark blue background. It's easy to tell the depth of a well..."</p>
                  <div className="harvard-meta">
                    <span className="meta-chip"><Headphones size={12} strokeWidth={2.2} /> 10 lines</span>
                    <span className="meta-chip"><AudioLines size={12} strokeWidth={2.2} /> Phonetically balanced</span>
                    <span className="meta-chip">71 more lists</span>
                  </div>
                </div>
              )}

              {activeInput === 'custom' && (
                <div className="harvard-display">
                  <div className="harvard-num">Arthur the Rat — Part 2</div>
                  <p className="harvard-text">"Once there was a young rat named Arthur who could never make up his mind. Whenever his friends asked him if he would like to go out with them..."</p>
                  <div className="harvard-meta">
                    <span className="meta-chip"><Sparkles size={12} strokeWidth={2.2} /> Phonetician-designed</span>
                    <span className="meta-chip"><AudioLines size={12} strokeWidth={2.2} /> Targets every English vowel</span>
                    <span className="meta-chip">12 more drills</span>
                  </div>
                </div>
              )}

              {activeInput === 'type' && (
                <div className="type-input-display">
                  <div className="type-input-frame">
                    <span className="type-input-cursor">|</span>
                    <span className="type-input-placeholder">{ROTATING_PLACEHOLDERS[placeholderIdx]}</span>
                  </div>
                  <p className="type-hint">
                    <Sparkles size={14} strokeWidth={2.2} />
                    Even native speakers use this. Practice anything before you say it for real.
                  </p>
                </div>
              )}
            </div>

            {/* L1 selector — always visible */}
            <div className="input-l1-row">
              <span className="input-l1-label">
                <Globe size={14} strokeWidth={2.2} />
                Your first language
              </span>
              <select
                className="input-l1-select"
                value={l1}
                onChange={(e) => setL1(e.target.value)}
              >
                {L1_LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
              <span className="input-l1-hint">
                {l1 === 'en'
                  ? 'Coach speaks English by default. Change this to get coached in your native language.'
                  : `Coach will respond in ${L1_LANGUAGES.find(l => l.code === l1)?.label} when you choose Deep Dive.`}
              </span>
            </div>
          </div>

          <p className="placeholder-disclaimer center mt-2">
            *Live preview · the full Lux library has 72 Harvard passages, 13 phonetic drills, and unlimited custom input.
          </p>
        </div>
      </section>

      {/* P4 — WORD + PHONEME CHART (the hero of this Tour) */}
      <section id="chart" className="chart-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Step Two</div>
            <h2 className="section-title">Lux scores every sound. Click any phoneme to see why.</h2>
            <p className="section-sub">
              {DEMO_PASSAGE.text} — one line from {DEMO_PASSAGE.source}.
              The full chart shows you what worked, what didn't, and how to fix it.
            </p>
          </div>

          <div className="chart-frame">
            {/* Column headers with tutorial hooks */}
            <div className="chart-headers">
              <div className="chart-col-head word-head">
                <span className="ch-title">WORD</span>
                <a href="#" className="ch-tutorial" onClick={(e) => e.preventDefault()}>
                  <Play size={11} strokeWidth={2.5} /> Watch tutorial
                </a>
              </div>
              <div className="chart-col-head syl-head">
                <span className="ch-title">SYLLABLES</span>
                <span className="ch-meta">Stress + meaning</span>
              </div>
              <div className="chart-col-head ph-head">
                <span className="ch-title">PHONEMES</span>
                <a href="#" className="ch-tutorial" onClick={(e) => e.preventDefault()}>
                  <Play size={11} strokeWidth={2.5} /> Watch tutorial
                </a>
              </div>
              <div className="chart-col-head score-head">
                <span className="ch-title">SCORE</span>
              </div>
            </div>

            {/* Word rows */}
            <div className="chart-body">
              {DEMO_PASSAGE.words.map((word, wIdx) => (
                <div key={wIdx} className="chart-row">
                  {/* Word column with prosody bars */}
                  <div className="word-cell">
                    <div className={`word-bubble ${word.tier}`}>
                      {word.word}
                    </div>
                    <div className="prosody-bars">
                      <span className="prosody-line pause" style={{ height: `${word.pause * 100}%` }} title="Pause" />
                      <span className="prosody-line tempo" style={{ height: `${word.tempo * 100}%` }} title="Tempo" />
                    </div>
                  </div>

                  {/* Syllable column */}
                  <div className="syl-cell">
                    {word.syllables.map((syl, i) => (
                      <span key={i} className={`syllable ${syl.stress ? 'stressed' : ''}`}>
                        {syl.stress && <span className="stress-dot">′</span>}
                        {syl.text}
                      </span>
                    ))}
                  </div>

                  {/* Phoneme column — clickable chips */}
                  <div className="ph-cell">
                    {word.phonemes.map((p, pIdx) => {
                      const isActive = activePhoneme?.wordIdx === wIdx && activePhoneme?.phonemeIdx === pIdx;
                      return (
                        <button
                          key={pIdx}
                          className={`ph-chip-btn ${tierForScore(p.score)} ${isActive ? 'active' : ''}`}
                          onClick={() => setActivePhoneme(isActive
                            ? null
                            : { wordIdx: wIdx, phonemeIdx: pIdx, azure: p.azure, ipa: p.ipa, score: p.score, word: word.word })}
                        >
                          <span className="ph-ipa">{p.ipa}</span>
                          <span className="ph-num">{p.score}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Score column */}
                  <div className="score-cell">
                    <div className={`word-score-ring ${word.tier}`}>
                      {word.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phoneme tooltip drawer — appears below the chart when one is active */}
            {activePhoneme && PHONEME_DETAILS[activePhoneme.azure] && (
              <PhonemeTooltip
                phoneme={activePhoneme}
                detail={PHONEME_DETAILS[activePhoneme.azure]}
                mouthView={mouthView}
                onMouthChange={setMouthView}
                onClose={() => setActivePhoneme(null)}
              />
            )}
            {activePhoneme && !PHONEME_DETAILS[activePhoneme.azure] && (
              <div className="ph-tooltip-stub">
                <span className="ph-stub-ipa">{activePhoneme.ipa}</span>
                <span className="ph-stub-msg">Full phoneme breakdown for this sound is available in Lux. {Object.keys(PHONEME_DETAILS).length} phonemes are demonstrated in this Tour.</span>
                <button className="ph-stub-close" onClick={() => setActivePhoneme(null)}>
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>
            )}
          </div>

          <p className="placeholder-disclaimer center mt-2">
            *Demo data · your real scores will reflect your unique voice and pronunciation.
          </p>
        </div>
      </section>

      {/* P5 — BEHIND THE MATH */}
      <section id="math" className="math-section" ref={mathRef}>
        <div className="container">
          <div className="section-head">
            <div className="kicker">Behind the math</div>
            <h2 className="section-title">How Lux actually scores you.</h2>
            <p className="section-sub">
              No black box. Three things happen in about three seconds.
            </p>
          </div>

          <div className="math-grid">
            <div className={`math-step ${mathRevealed >= 1 ? 'in' : ''}`}>
              <div className="math-icon"><Mic size={24} strokeWidth={2.2} /></div>
              <div className="math-num">01</div>
              <h3>Lux records you cleanly.</h3>
              <p>Your audio uploads to <strong>Microsoft Azure Speech Services</strong>, the same engine used by enterprise transcription tools.</p>
            </div>
            <div className={`math-step ${mathRevealed >= 2 ? 'in' : ''}`}>
              <div className="math-icon"><Cpu size={24} strokeWidth={2.2} /></div>
              <div className="math-num">02</div>
              <h3>Azure scores every phoneme.</h3>
              <p>Each individual sound — like /θ/, /ɜːr/, /ʃ/ — gets compared to native English target shapes and rated 0-100.</p>
            </div>
            <div className={`math-step ${mathRevealed >= 3 ? 'in' : ''}`}>
              <div className="math-icon"><Brain size={24} strokeWidth={2.2} /></div>
              <div className="math-num">03</div>
              <h3>Lux weighs prosody too.</h3>
              <p>Pauses, tempo, and stress patterns count. Native sounds in unnatural rhythm still feel non-native — Lux catches that.</p>
            </div>
          </div>

          <div className="math-disclaimer">
            <Sparkles size={14} strokeWidth={2.2} />
            <span>This is the core of Lux. Every other feature — Coach, Conversations, Progress — runs on top of these scores.</span>
          </div>
        </div>
      </section>

      {/* P6 — MY WORDS MENTION */}
      <section className="my-words-section">
        <div className="container">
          <div className="my-words-frame">
            <div className="mw-icon-col">
              <div className="mw-icon-stack">
                <div className="mw-icon-bg" />
                <div className="mw-icon-fg">
                  <FileText size={28} strokeWidth={2.2} />
                </div>
              </div>
            </div>
            <div className="mw-text-col">
              <div className="kicker mw-kicker">A small, useful corner</div>
              <h2 className="mw-title">My Words — the notepad that follows you.</h2>
              <p className="mw-body">
                Find a word you struggle with? Pin it from anywhere. Search it later. Practice it instantly. Look it up in real video context with YouGlish. Click the small triangle in the bottom-left of any Lux page to open My Words.
              </p>
              <div className="mw-actions">
                <span className="mw-action-chip"><Search size={12} strokeWidth={2.2} /> Search saved words</span>
                <span className="mw-action-chip"><Mic size={12} strokeWidth={2.2} /> Send to practice</span>
                <span className="mw-action-chip"><BookOpen size={12} strokeWidth={2.2} /> Word Reference</span>
                <span className="mw-action-chip"><Eye size={12} strokeWidth={2.2} /> YouGlish video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* P7 — CROSS-TOUR OUTBOUND */}
      <section className="next-tours-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Where to next</div>
            <h2 className="section-title">Two more Tours connected to this one.</h2>
          </div>
          <div className="next-tours-grid">
            <a href="/welcome/coach" className="next-tour-card">
              <div className="ntc-icon"><Sparkles size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">COACH TOUR</div>
              <h3>How Lux explains what to fix.</h3>
              <p>Three coach personalities. Six-angle feedback. Responses in your first language. The same scores you just saw, taught back to you.</p>
              <span className="ntc-link">See how Lux coaches you <ChevronRight size={14} strokeWidth={2.5} /></span>
            </a>
            <a href="/welcome/progress" className="next-tour-card">
              <div className="ntc-icon"><TrendingUp size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">PROGRESS TOUR</div>
              <h3>How those scores accumulate.</h3>
              <p>Every session preserved forever. Trouble sounds ranked by intelligent math. Personalized practice generated from your weakest spots.</p>
              <span className="ntc-link">See how progress accumulates <ChevronRight size={14} strokeWidth={2.5} /></span>
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

// ===== PHONEME TOOLTIP COMPONENT =====
function PhonemeTooltip({ phoneme, detail, mouthView, onMouthChange, onClose }) {
  return (
    <div className="ph-tooltip">
      <button className="ph-tt-close" onClick={onClose} aria-label="Close phoneme detail">
        <X size={14} strokeWidth={2.5} />
      </button>

      <div className="ph-tt-grid">
        {/* Left: mouth views */}
        <div className="ph-tt-mouth-col">
          <div className="ph-tt-mouth-tabs">
            <button className={`ph-mouth-tab ${mouthView === 'side' ? 'active' : ''}`}
                    onClick={() => onMouthChange('side')}>
              Side view
            </button>
            <button className={`ph-mouth-tab ${mouthView === 'front' ? 'active' : ''}`}
                    onClick={() => onMouthChange('front')}>
              Front view
            </button>
            <button className={`ph-mouth-tab ${mouthView === 'both' ? 'active' : ''}`}
                    onClick={() => onMouthChange('both')}>
              Both
            </button>
          </div>

          <div className={`ph-mouth-display view-${mouthView}`}>
            {(mouthView === 'side' || mouthView === 'both') && (
              <div className="mouth-view side">
                <div className="mouth-label">SIDE · 2D MRI cutaway</div>
                <div className="mouth-placeholder">
                  <svg viewBox="0 0 200 160" className="mouth-svg">
                    {/* Stylized side-view mouth/tongue placeholder */}
                    <path d="M 30 80 Q 60 40 110 50 Q 150 55 170 75 Q 165 95 140 100 L 110 100 Q 80 110 50 105 Z"
                          fill="#FCE7E3" stroke="#C26B5A" strokeWidth="2" />
                    <path d="M 50 105 Q 80 80 130 85 Q 110 100 80 105 Z"
                          fill="#E8918A" stroke="#A04438" strokeWidth="1.5" />
                    <text x="100" y="140" textAnchor="middle" className="mouth-svg-label">{detail.ipa}</text>
                  </svg>
                </div>
              </div>
            )}
            {(mouthView === 'front' || mouthView === 'both') && (
              <div className="mouth-view front">
                <div className="mouth-label">FRONT · Real mouth (Mark)</div>
                <div className="mouth-placeholder">
                  <div className="mouth-front-stub">
                    <div className="mouth-stub-icon"><Eye size={28} strokeWidth={2.2} /></div>
                    <div className="mouth-stub-text">
                      Real video<br/>of mouth<br/>shape
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="ph-mouth-controls">
            <button className="mouth-ctrl"><Play size={11} strokeWidth={2.5} /> Play</button>
            <button className="mouth-ctrl"><RotateCw size={11} strokeWidth={2.5} /> Loop</button>
            <button className="mouth-ctrl">0.5×</button>
            <button className="mouth-ctrl">1×</button>
            <button className="mouth-ctrl"><Volume2 size={11} strokeWidth={2.5} /></button>
          </div>
        </div>

        {/* Right: explanation */}
        <div className="ph-tt-info-col">
          <div className="ph-tt-head">
            <div className="ph-tt-head-main">
              <div className="ph-tt-ipa">{detail.ipa}</div>
              <div className="ph-tt-name">{detail.name}</div>
            </div>
            <div className={`ph-tt-score ${tierForScore(phoneme.score)}`}>
              <span className="ph-tt-score-num">{phoneme.score}</span>
              <span className="ph-tt-score-lbl">your score on "{phoneme.word}"</span>
            </div>
          </div>

          <div className="ph-tt-section">
            <div className="ph-tt-section-lbl">PLAIN ENGLISH</div>
            <p className="ph-tt-text">{detail.plain}</p>
          </div>

          <div className="ph-tt-section">
            <div className="ph-tt-section-lbl">COMMON MIX-UPS</div>
            <p className="ph-tt-text">{detail.mixup}</p>
          </div>

          <div className="ph-tt-section">
            <div className="ph-tt-section-lbl">PRACTICE WORDS</div>
            <div className="ph-tt-words">
              {detail.sampleWords.map(w => (
                <span key={w} className="ph-tt-word-chip">{w}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== STYLES =====
// Design tokens (must match landing v8.0c — single source of truth ideal, duplicated for now)
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
  --max-w: 1300px;
  --hero-size: 7.5rem;
  --hero-weight: 900;
  --hero-tracking: -0.04em;
  --hero-lh: 0.96;
  --sect-pad-y: 7rem;
  --card-radius: 14px;
  --card-pad-y: 2.5rem;
  --card-gap: 1.5rem;
  --ease-drawer: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-panel: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Montserrat', system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.lux-pron {
  font-family: 'Montserrat', system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
}
.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
}
`;

// Tour-specific styles
const TOUR_STYLES = `
/* === NAV === */
.lux-nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.nav-brand { display: flex; align-items: center; gap: 0.65rem; }
.nav-mark {
  width: 32px; height: 32px;
  background: var(--ink);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.nav-mark.small { width: 20px; height: 20px; border-radius: 5px; }
.nav-mark-inner {
  width: 12px; height: 12px;
  background: var(--brand);
  border-radius: 3px;
}
.nav-name { font-weight: 800; font-size: 1.1rem; letter-spacing: -0.02em; }
.nav-links { display: flex; gap: 1.85rem; }
.nav-link {
  color: var(--ink-soft);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  transition: color 200ms;
}
.nav-link:hover { color: var(--brand); }
.nav-actions { display: flex; gap: 0.85rem; align-items: center; }
.nav-signin {
  background: transparent;
  border: none;
  color: var(--ink);
  font-weight: 700;
  font-size: 0.92rem;
  cursor: pointer;
}
.nav-cta {
  background: var(--ink);
  color: #fff;
  border: none;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 200ms var(--ease-drawer);
}
.nav-cta:hover { background: var(--brand); transform: translateY(-1px); }
@media (max-width: 800px) { .nav-links { display: none; } }

/* TOURS SUBNAV */
.lux-subnav {
  background: var(--slate-50);
  border-bottom: 1px solid var(--line);
  font-family: 'JetBrains Mono', monospace;
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
.subnav-divider { color: var(--ink-faint); margin: 0 0.15rem; }
.subnav-item-wrap { display: inline-flex; align-items: center; gap: 0.35rem; }
.subnav-item {
  color: var(--ink-soft);
  text-decoration: none;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 5px;
  transition: all 200ms var(--ease-drawer);
  letter-spacing: 0.01em;
}
.subnav-item:hover { color: var(--brand); background: #fff; }
.subnav-item.active { color: var(--brand); background: #fff; font-weight: 800; box-shadow: 0 1px 4px rgba(15,23,42,0.06); }
.subnav-sep { color: var(--ink-faint); font-size: 0.7rem; }

/* === HERO === */
.hero-tour {
  padding: 5rem 0 3.5rem;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.eyebrow-dot {
  width: 7px; height: 7px;
  background: var(--brand);
  border-radius: 50%;
  display: inline-block;
}
.hero-headline-tour {
  font-family: 'Montserrat';
  font-weight: 900;
  font-size: clamp(3rem, 6vw, 6rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  color: var(--ink);
  max-width: 1100px;
}
.hero-headline-tour .chunk { display: inline; }
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
  box-shadow: 0 8px 24px rgba(0, 120, 215, 0.28);
}
.hh-cycle {
  display: inline-block;
  transition: transform 250ms var(--ease-pop), opacity 250ms ease;
}
.hh-cycle.flipping {
  transform: translateY(-6px);
  opacity: 0;
}
.hero-sub-tour {
  margin-top: 2rem;
  font-size: 1.25rem;
  line-height: 1.55;
  color: var(--ink-soft);
  max-width: 720px;
  font-weight: 500;
}
.hero-controls {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 2rem;
  opacity: 0.55;
  transition: opacity 300ms var(--ease-drawer);
}
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
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--ink-faint);
  text-transform: uppercase;
}

/* === SECTION HEADS === */
.section-head { text-align: center; margin-bottom: 3.5rem; }
.kicker {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--brand);
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 0.3rem 0.7rem;
  background: var(--score-good-bg);
  border-radius: 6px;
}
.section-title {
  font-weight: 800;
  font-size: clamp(2rem, 4vw, 3.25rem);
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.section-sub {
  font-size: 1.1rem;
  line-height: 1.55;
  color: var(--ink-soft);
  max-width: 720px;
  margin: 0 auto;
  font-weight: 500;
}

/* === INPUT SECTION === */
.input-section {
  padding: var(--sect-pad-y) 0;
  background: var(--bg);
}
.input-frame {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 12px 36px rgba(15, 23, 42, 0.06);
}
.input-tabs {
  display: flex;
  border-bottom: 1px solid var(--line);
  background: var(--slate-50);
}
.input-tab {
  flex: 1;
  background: transparent;
  border: none;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  cursor: pointer;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--ink-soft);
  border-bottom: 3px solid transparent;
  transition: all 220ms var(--ease-drawer);
}
.input-tab:hover { color: var(--brand); background: #fff; }
.input-tab.active {
  color: var(--brand);
  background: #fff;
  border-bottom-color: var(--brand);
}
.tab-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--ink-faint);
  margin-left: 0.4rem;
  letter-spacing: 0.04em;
}
@media (max-width: 720px) {
  .input-tabs { flex-direction: column; }
  .tab-meta { display: none; }
}

.input-tab-content { padding: 2.5rem 2.5rem 2rem; }
.harvard-display { max-width: 720px; }
.harvard-num {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--brand);
  margin-bottom: 1rem;
  padding: 0.3rem 0.6rem;
  background: var(--score-good-bg);
  border-radius: 5px;
}
.harvard-text {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--ink);
  font-weight: 600;
  font-style: italic;
  margin-bottom: 1.5rem;
}
.harvard-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.65rem;
  background: var(--slate-100);
  color: var(--ink-soft);
  border-radius: 5px;
  letter-spacing: 0.02em;
}

.type-input-display {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.type-input-frame {
  padding: 1.25rem 1.5rem;
  background: var(--slate-50);
  border: 2px solid var(--line);
  border-radius: 10px;
  font-size: 1.15rem;
  color: var(--ink-faint);
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.type-input-cursor {
  color: var(--brand);
  font-weight: 700;
  font-style: normal;
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.type-input-placeholder {
  flex: 1;
  transition: opacity 300ms ease;
}
.type-hint {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.92rem;
  color: var(--ink-medium);
  font-weight: 500;
}
.type-hint svg { color: var(--brand); flex-shrink: 0; }

/* L1 row */
.input-l1-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2.5rem;
  background: var(--slate-50);
  border-top: 1px solid var(--line);
  flex-wrap: wrap;
}
.input-l1-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  text-transform: uppercase;
}
.input-l1-select {
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.45rem 0.85rem;
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 8px;
  color: var(--ink);
  cursor: pointer;
  transition: border-color 200ms;
}
.input-l1-select:hover { border-color: var(--brand); }
.input-l1-hint {
  font-size: 0.85rem;
  color: var(--ink-medium);
  font-weight: 500;
  flex: 1;
  min-width: 240px;
}

/* === CHART SECTION === */
.chart-section {
  padding: var(--sect-pad-y) 0;
  background: linear-gradient(180deg, var(--bg) 0%, var(--slate-50) 50%, var(--bg) 100%);
}
.chart-frame {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 24px 60px rgba(15, 23, 42, 0.08);
}
.chart-headers {
  display: grid;
  grid-template-columns: 1.4fr 1fr 2.5fr 0.7fr;
  background: var(--slate-50);
  border-bottom: 1px solid var(--line);
  padding: 0.85rem 1.5rem;
  gap: 1rem;
}
.chart-col-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
}
.ch-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: var(--ink-soft);
}
.ch-tutorial {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  font-weight: 700;
  color: var(--brand);
  text-decoration: none;
  letter-spacing: 0.04em;
  padding: 0.18rem 0.5rem;
  background: var(--score-good-bg);
  border-radius: 4px;
  transition: all 200ms;
}
.ch-tutorial:hover { background: var(--brand); color: #fff; }
.ch-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  font-weight: 600;
  color: var(--ink-faint);
  letter-spacing: 0.04em;
}

.chart-body { display: flex; flex-direction: column; }
.chart-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 2.5fr 0.7fr;
  gap: 1rem;
  padding: 0.95rem 1.5rem;
  border-bottom: 1px solid var(--line);
  align-items: center;
  transition: background 200ms;
}
.chart-row:hover { background: var(--slate-50); }
.chart-row:last-child { border-bottom: none; }

/* Word cell */
.word-cell {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}
.word-bubble {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}
.word-bubble.good { background: var(--score-good-bg); color: var(--score-good); }
.word-bubble.warn { background: var(--score-warn-bg); color: var(--score-warn); }
.word-bubble.bad  { background: var(--score-bad-bg);  color: var(--score-bad); }
.prosody-bars {
  display: flex;
  gap: 3px;
  align-items: flex-end;
  height: 28px;
}
.prosody-line {
  width: 4px;
  border-radius: 2px;
  min-height: 4px;
}
.prosody-line.pause { background: var(--ink-faint); }
.prosody-line.tempo { background: var(--brand); }

/* Syllable cell */
.syl-cell {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  align-items: center;
}
.syllable {
  display: inline-flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink-soft);
  padding: 0.25rem 0.5rem;
  background: var(--slate-50);
  border-radius: 4px;
  letter-spacing: 0.02em;
}
.syllable.stressed {
  color: var(--ink);
  font-weight: 800;
  background: #FFF7E5;
  border: 1px solid #FCD34D;
}
.stress-dot {
  color: var(--gold);
  margin-right: 0.15rem;
  font-weight: 800;
}

/* Phoneme cell */
.ph-cell {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.ph-chip-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.3rem 0.5rem;
  border: 1.5px solid;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 200ms var(--ease-drawer);
  position: relative;
}
.ph-chip-btn.good { border-color: var(--score-good); }
.ph-chip-btn.good .ph-num { color: var(--score-good); }
.ph-chip-btn.warn { border-color: var(--score-warn); background: var(--score-warn-bg); }
.ph-chip-btn.warn .ph-num { color: var(--score-warn); }
.ph-chip-btn.bad  { border-color: var(--score-bad); background: var(--score-bad-bg); }
.ph-chip-btn.bad .ph-num { color: var(--score-bad); }
.ph-chip-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(15,23,42,0.1); }
.ph-chip-btn.active {
  background: var(--ink);
  color: #fff;
  border-color: var(--ink);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(15,23,42,0.2);
}
.ph-chip-btn.active .ph-ipa,
.ph-chip-btn.active .ph-num { color: #fff; }
.ph-ipa { color: var(--ink); }
.ph-num { font-size: 0.7rem; }

/* Score cell */
.score-cell { display: flex; justify-content: flex-end; }
.word-score-ring {
  width: 44px; height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.92rem;
  border: 2.5px solid;
  background: #fff;
}
.word-score-ring.good { border-color: var(--score-good); color: var(--score-good); }
.word-score-ring.warn { border-color: var(--score-warn); color: var(--score-warn); }
.word-score-ring.bad  { border-color: var(--score-bad);  color: var(--score-bad); }

@media (max-width: 880px) {
  .chart-headers, .chart-row {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
  .chart-col-head.syl-head, .chart-col-head.score-head { display: none; }
  .syl-cell, .score-cell { display: none; }
}

/* PHONEME TOOLTIP DRAWER */
.ph-tooltip {
  border-top: 2px solid var(--ink);
  background: var(--slate-50);
  padding: 2rem;
  position: relative;
  animation: tooltipIn 400ms var(--ease-drawer);
}
@keyframes tooltipIn {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}
.ph-tt-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink-soft);
  transition: all 200ms;
}
.ph-tt-close:hover { background: var(--ink); color: #fff; }

.ph-tt-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
}
@media (max-width: 880px) {
  .ph-tt-grid { grid-template-columns: 1fr; gap: 1.5rem; }
}

/* Mouth column */
.ph-tt-mouth-col { display: flex; flex-direction: column; gap: 1rem; }
.ph-tt-mouth-tabs {
  display: flex;
  gap: 0.4rem;
  background: #fff;
  padding: 0.4rem;
  border-radius: 10px;
  border: 1px solid var(--line);
}
.ph-mouth-tab {
  flex: 1;
  background: transparent;
  border: none;
  padding: 0.5rem 0.85rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--ink-soft);
  border-radius: 7px;
  cursor: pointer;
  transition: all 200ms;
}
.ph-mouth-tab.active {
  background: var(--ink);
  color: var(--brand);
}
.ph-mouth-display {
  display: grid;
  gap: 0.85rem;
}
.ph-mouth-display.view-side, .ph-mouth-display.view-front { grid-template-columns: 1fr; }
.ph-mouth-display.view-both { grid-template-columns: 1fr 1fr; }
@media (max-width: 540px) { .ph-mouth-display.view-both { grid-template-columns: 1fr; } }

.mouth-view {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.85rem;
  position: relative;
}
.mouth-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--ink-faint);
  margin-bottom: 0.5rem;
}
.mouth-placeholder {
  aspect-ratio: 4/3;
  background: var(--slate-50);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.mouth-svg { width: 80%; height: 80%; }
.mouth-svg-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  fill: var(--ink-soft);
}
.mouth-front-stub {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--ink-faint);
}
.mouth-stub-icon {
  width: 56px; height: 56px;
  background: var(--slate-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mouth-stub-text {
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.4;
}
.ph-mouth-controls {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.mouth-ctrl {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--ink-soft);
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: all 200ms;
}
.mouth-ctrl:hover { background: var(--ink); color: #fff; }

/* Info column */
.ph-tt-info-col { display: flex; flex-direction: column; gap: 1.25rem; }
.ph-tt-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--line);
  gap: 1rem;
}
.ph-tt-head-main { flex: 1; }
.ph-tt-ipa {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--ink);
}
.ph-tt-name {
  font-size: 0.88rem;
  color: var(--ink-medium);
  font-weight: 600;
  margin-top: 0.2rem;
}
.ph-tt-score {
  text-align: center;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  background: #fff;
  border: 2px solid;
  min-width: 110px;
}
.ph-tt-score.good { border-color: var(--score-good); }
.ph-tt-score.good .ph-tt-score-num { color: var(--score-good); }
.ph-tt-score.warn { border-color: var(--score-warn); }
.ph-tt-score.warn .ph-tt-score-num { color: var(--score-warn); }
.ph-tt-score.bad  { border-color: var(--score-bad); }
.ph-tt-score.bad .ph-tt-score-num { color: var(--score-bad); }
.ph-tt-score-num {
  display: block;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1;
}
.ph-tt-score-lbl {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  font-weight: 600;
  color: var(--ink-faint);
  margin-top: 0.2rem;
  letter-spacing: 0.04em;
}

.ph-tt-section { display: flex; flex-direction: column; gap: 0.45rem; }
.ph-tt-section-lbl {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--brand);
}
.ph-tt-text {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--ink-soft);
  font-weight: 500;
}
.ph-tt-words {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.ph-tt-word-chip {
  padding: 0.3rem 0.7rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 5px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink);
}

/* Stub for unmapped phonemes */
.ph-tooltip-stub {
  border-top: 2px solid var(--line);
  background: var(--slate-50);
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}
.ph-stub-ipa {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--brand);
}
.ph-stub-msg {
  flex: 1;
  font-size: 0.9rem;
  color: var(--ink-medium);
  font-weight: 500;
}
.ph-stub-close {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink-soft);
}

/* === BEHIND THE MATH === */
.math-section {
  padding: var(--sect-pad-y) 0;
  background: var(--bg);
  border-top: 1px solid var(--line);
}
.math-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 920px) { .math-grid { grid-template-columns: 1fr; } }

.math-step {
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 600ms var(--ease-drawer), transform 600ms var(--ease-drawer), border-color 220ms;
}
.math-step.in { opacity: 1; transform: translateY(0); }
.math-step:hover { border-color: var(--brand); box-shadow: 0 12px 32px rgba(0,120,215,0.1); }
.math-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--score-good-bg);
  color: var(--brand);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.math-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: var(--ink-faint);
  margin-bottom: 0.85rem;
}
.math-step h3 {
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.85rem;
  line-height: 1.2;
}
.math-step p {
  font-size: 1rem;
  line-height: 1.55;
  color: var(--ink-soft);
  font-weight: 500;
}
.math-step strong { color: var(--ink); font-weight: 800; }

.math-disclaimer {
  margin-top: 3rem;
  padding: 1.25rem 1.5rem;
  background: var(--score-good-bg);
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.math-disclaimer svg { color: var(--brand); flex-shrink: 0; }
.math-disclaimer span {
  font-size: 0.95rem;
  color: var(--ink-soft);
  font-weight: 500;
}

/* === MY WORDS === */
.my-words-section {
  padding: var(--sect-pad-y) 0;
  background: var(--slate-50);
  border-top: 1px solid var(--line);
}
.my-words-frame {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2.5rem;
  align-items: center;
}
@media (max-width: 720px) {
  .my-words-frame { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; }
}
.mw-icon-stack {
  position: relative;
  width: 88px;
  height: 88px;
}
.mw-icon-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--brand) 0%, #1A8AE0 100%);
  border-radius: 18px;
  transform: rotate(8deg);
  box-shadow: 0 12px 32px rgba(0,120,215,0.25);
}
.mw-icon-fg {
  position: absolute;
  inset: 0;
  background: #fff;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand);
  border: 1.5px solid var(--line);
}
.mw-kicker { color: var(--ink-soft); background: var(--slate-100); }
.mw-title {
  font-weight: 800;
  font-size: 1.85rem;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0.85rem 0 1rem;
}
.mw-body {
  font-size: 1rem;
  line-height: 1.55;
  color: var(--ink-soft);
  font-weight: 500;
  margin-bottom: 1.25rem;
}
.mw-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.mw-action-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  background: var(--slate-50);
  border: 1px solid var(--line);
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--ink-soft);
  letter-spacing: 0.02em;
}
.mw-action-chip svg { color: var(--brand); }

/* === NEXT TOURS === */
.next-tours-section {
  padding: var(--sect-pad-y) 0;
  background: var(--bg);
}
.next-tours-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
@media (max-width: 880px) { .next-tours-grid { grid-template-columns: 1fr; } }

.next-tour-card {
  background: #fff;
  border: 1.5px solid var(--line);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 350ms var(--ease-drawer);
}
.next-tour-card:hover {
  transform: translateY(-6px);
  border-color: var(--brand);
  box-shadow: 0 20px 50px rgba(0,120,215,0.12);
}
.ntc-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--score-good-bg);
  color: var(--brand);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms;
}
.next-tour-card:hover .ntc-icon { background: var(--brand); color: #fff; transform: scale(1.06); }
.ntc-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: var(--brand);
}
.next-tour-card h3 {
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: -0.025em;
  line-height: 1.15;
}
.next-tour-card p {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--ink-soft);
  font-weight: 500;
  flex: 1;
}
.ntc-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--ink);
  margin-top: 0.5rem;
  transition: all 220ms var(--ease-drawer);
}
.next-tour-card:hover .ntc-link { color: var(--brand); gap: 0.55rem; }

/* === PLACEHOLDER DISCLAIMER === */
.placeholder-disclaimer {
  font-family: 'JetBrains Mono', monospace;
  font-style: italic;
  font-size: 0.78rem;
  color: var(--score-warn);
  font-weight: 500;
  letter-spacing: 0.01em;
}
.placeholder-disclaimer.center { text-align: center; }
.placeholder-disclaimer.mt-2 { margin-top: 1.5rem; }

/* === FOOTER === */
.footer {
  margin-top: 4rem;
  padding: 3rem 0;
  border-top: 1px solid var(--line);
  background: var(--bg);
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 700;
  font-size: 0.9rem;
}
.footer-meta {
  font-size: 0.85rem;
  color: var(--ink-faint);
  font-weight: 500;
}
`;
