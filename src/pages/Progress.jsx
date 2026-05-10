// /welcome/progress — The Progress Tour
// Phase 6 (FINAL) of the Lux onboarding multi-page architecture.
// Maps to Sections F (My Progress per-mode) + M13 (history) + O (All Data cross-mode)
// Per MULTI_PAGE_ARCHITECTURE.md Section 9.

import { useState, useEffect, useRef } from 'react';
import {
  Mic, Sparkles, Volume2, TrendingUp, ChevronRight, ChevronLeft,
  Play, Pause, Activity, MessageCircle, Layers,
  ArrowRight, Loader2, Check, X, BookOpen,
  Headphones, Eye, Globe, Zap, Brain,
  Target, Clock, BarChart3, Database, ArrowDown,
  Calendar, Star, History, Repeat, Lightbulb,
  TrendingDown, Award, FileText
} from 'lucide-react';

// ===== TOURS DATA =====
const TOURS = [
  { id: 'pronunciation', label: 'Pronunciation', path: '/welcome/pronunciation' },
  { id: 'coach',         label: 'Coach',         path: '/welcome/coach' },
  { id: 'voice',         label: 'Voice',         path: '/welcome/voice' },
  { id: 'conversations', label: 'Conversations', path: '/welcome/conversations' },
  { id: 'progress',      label: 'Progress',      path: '/welcome/progress' },
];

const CYCLING_VERBS = ['builds', 'accumulates', 'teaches', 'sharpens', 'matters'];

// Top stats
const TOP_STATS = [
  { lbl: 'TOTAL SESSIONS',     value: '47', sub: 'across all modes', icon: Layers },
  { lbl: 'AVERAGE SCORE',      value: '87', sub: '+4 this month',    icon: TrendingUp, trend: 'up' },
  { lbl: 'PHONEMES TRACKED',   value: '40', sub: 'all of English',   icon: Activity },
  { lbl: 'LAST ACTIVITY',      value: 'Today', sub: '2 hours ago',   icon: Calendar },
];

// 30-day trend
const TREND_DATA = [
  72, 74, 71, 75, 78, 76, 79, 81, 78, 80,
  82, 81, 83, 80, 82, 85, 84, 83, 86, 87,
  85, 88, 87, 89, 88, 90, 89, 91, 88, 92,
];

const SCORE_CATEGORIES = [
  { label: 'Accuracy',      value: 89, tier: 'good',  comingSoon: false },
  { label: 'Fluency',       value: 84, tier: 'good',  comingSoon: false },
  { label: 'Completeness',  value: 96, tier: 'good',  comingSoon: false },
  { label: 'Pronunciation', value: 87, tier: 'good',  comingSoon: false },
  { label: 'Prosody',       value: null, tier: 'soon', comingSoon: true },
];

// Trouble sounds — RANKED BY WEIGHTED MATH (the differentiator)
const TROUBLE_SOUNDS = [
  { ipa: '/θ/',  freqYou: 0.84, freqEng: 0.72, deficit: 24, weight: 14.6, samples: 38 },
  { ipa: '/ð/',  freqYou: 0.91, freqEng: 0.85, deficit: 18, weight: 13.9, samples: 41 },
  { ipa: '/r/',  freqYou: 0.95, freqEng: 0.95, deficit: 11, weight: 9.9,  samples: 53 },
  { ipa: '/v/',  freqYou: 0.62, freqEng: 0.48, deficit: 22, weight: 6.5,  samples: 22 },
  { ipa: '/ɜːr/', freqYou: 0.41, freqEng: 0.31, deficit: 28, weight: 3.6, samples: 18 },
  { ipa: '/ʒ/',  freqYou: 0.18, freqEng: 0.05, deficit: 34, weight: 0.3,  samples: 4  },
];

// Trouble words
const TROUBLE_WORDS = [
  { word: 'throughout',  count: 7, avgScore: 71 },
  { word: 'reservation', count: 5, avgScore: 74 },
  { word: 'sounds',      count: 9, avgScore: 76 },
  { word: 'with',        count: 12, avgScore: 78 },
  { word: 'measure',     count: 3, avgScore: 68 },
  { word: 'thirty',      count: 6, avgScore: 73 },
];

// History session cards
const HISTORY_SESSIONS = [
  {
    id: 'h1',
    date: 'Today',
    time: '2:14 PM',
    type: 'conversation',
    typeLabel: 'AI Conversation',
    title: '"Welcome at the Restaurant" · Miguel',
    score: 89,
    tier: 'good',
    duration: '4m 18s',
    detail: {
      breakdown: { accuracy: 92, fluency: 88, completeness: 100, pronunciation: 90 },
      coach: '"Excellent natural rhythm — you sounded comfortable. /ð/ in \\\'sounds\\\' drifted toward /d/ — a quick drill on that single sound will carry you across hundreds of common words."',
      coachPersonality: 'Tutor',
      practiced: '7-turn dialogue, including "I\\\'d like to make a reservation for two at seven thirty."',
      trouble: ['/ð/', '/r/', '"sounds"', '"reservation"'],
    },
  },
  {
    id: 'h2',
    date: 'Yesterday',
    time: '8:45 AM',
    type: 'practice',
    typeLabel: 'Practice Skills',
    title: 'Harvard List 1 — full pass',
    score: 84,
    tier: 'good',
    duration: '6m 02s',
    detail: {
      breakdown: { accuracy: 87, fluency: 80, completeness: 100, pronunciation: 84 },
      coach: '"Solid work across the list. /θ/ continues to show up as the recurring soft spot — let\\\'s spend a session focused there next time."',
      coachPersonality: 'Tutor',
      practiced: '"The birch canoe slid on smooth planks..." (10 lines from List 1)',
      trouble: ['/θ/', '/ɜːr/', '"throughout"'],
    },
  },
  {
    id: 'h3',
    date: '3 days ago',
    time: '7:20 PM',
    type: 'conversation',
    typeLabel: 'AI Conversation',
    title: '"Doctor Visit" · Dr. Reyes',
    score: 78,
    tier: 'warn',
    duration: '8m 34s',
    detail: {
      breakdown: { accuracy: 81, fluency: 76, completeness: 92, pronunciation: 79 },
      coach: '"71% on /θ/. Not good enough. You softened the sound mid-production. Hold the /θ/ until it\\\'s finished, then move on."',
      coachPersonality: 'Sergeant',
      practiced: '12-turn dialogue describing recurring symptoms.',
      trouble: ['/θ/', '/v/', '"throughout"', '"measure"'],
    },
  },
  {
    id: 'h4',
    date: '5 days ago',
    time: '12:08 PM',
    type: 'practice',
    typeLabel: 'Practice Skills',
    title: 'Phonetic drill — /θ/ focus',
    score: 81,
    tier: 'good',
    duration: '4m 47s',
    detail: {
      breakdown: { accuracy: 84, fluency: 78, completeness: 100, pronunciation: 82 },
      coach: '"Statistical context: /θ/ production accuracy of 65-75% is typical at intermediate levels. Your 81% places you above the developmental trajectory."',
      coachPersonality: 'Expert',
      practiced: 'Phonetician-designed drill targeting /θ/ in word-initial, medial, and final positions.',
      trouble: ['/θ/', '/ð/'],
    },
  },
];

// Quick Practice generated content — the reinforcement loop demo
const QUICK_PRACTICE_DEMO = {
  scenario: 'A casual catch-up with a colleague',
  cefr: 'B1',
  troublePhonemes: ['/θ/', '/ð/'],
  troubleWords: ['throughout', 'sounds', 'with'],
  // Words highlighted in the dialogue: blue = phoneme target, yellow = trouble word
  conversation: [
    { speaker: 'Sam', text: 'Hey! Good to see you. How was your weekend?', highlights: [] },
    { speaker: 'You', text: 'It was great, thanks. I worked on a project [throughout] the whole time.', highlights: [{ word: 'throughout', type: 'word' }, { word: 'the', type: 'phoneme' }] },
    { speaker: 'Sam', text: 'Oh wow. Was it [worth] it?', highlights: [{ word: 'worth', type: 'phoneme' }] },
    { speaker: 'You', text: 'Yeah, I [think] so. The [thing] is, I needed to finish before today.', highlights: [{ word: 'think', type: 'phoneme' }, { word: 'thing', type: 'phoneme' }] },
    { speaker: 'Sam', text: 'I get it. [Sounds] intense [though].', highlights: [{ word: 'Sounds', type: 'word' }, { word: 'though', type: 'phoneme' }] },
  ],
};

const tierForScore = (s) => s == null ? 'soon' : s >= 80 ? 'good' : s >= 60 ? 'warn' : 'bad';

// ===== MAIN COMPONENT =====
export default function ProgressTour() {
  // Hero cycling
  const [cycleIndex, setCycleIndex] = useState(0);
  const [cycleFlipping, setCycleFlipping] = useState(false);
  const [cyclePaused, setCyclePaused] = useState(false);
  useEffect(() => {
    if (cyclePaused) return;
    const t = setInterval(() => {
      setCycleFlipping(true);
      setTimeout(() => {
        setCycleIndex(i => (i + 1) % CYCLING_VERBS.length);
        setCycleFlipping(false);
      }, 250);
    }, 2400);
    return () => clearInterval(t);
  }, [cyclePaused]);

  // Aggregation explainer reveal on scroll
  const [aggRevealed, setAggRevealed] = useState(0);
  const aggRef = useRef(null);
  useEffect(() => {
    if (!aggRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && aggRevealed === 0) {
        let i = 0;
        const t = setInterval(() => {
          i++;
          setAggRevealed(i);
          if (i >= 3) clearInterval(t);
        }, 700);
      }
    }, { threshold: 0.3 });
    obs.observe(aggRef.current);
    return () => obs.disconnect();
  }, [aggRevealed]);

  // History modal state
  const [activeSession, setActiveSession] = useState(null);

  return (
    <div className="lux-progress">
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
            <a href="#aggregation" className="nav-link">How it accumulates</a>
            <a href="#all-data" className="nav-link">All data page</a>
            <a href="#history" className="nav-link">History</a>
            <a href="#quick-practice" className="nav-link">Quick practice</a>
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
                   className={`subnav-item ${tour.id === 'progress' ? 'active' : ''}`}>
                  {tour.label}
                </a>
                {i < TOURS.length - 1 && <span className="subnav-sep">·</span>}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* PR2 — HERO */}
      <header className="hero-tour">
        <div className="container">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Lux remembers everything
          </div>
          <h1 className="hero-headline-tour">
            <span className="chunk">Every session</span>
            <br />
            <span className={`hh-cycle-wrap`}>
              <span className={`hh-cycle ${cycleFlipping ? 'flipping' : ''}`}>
                {CYCLING_VERBS[cycleIndex]}
              </span>
            </span>
            <br />
            <span className="chunk">together.</span>
          </h1>
          <p className="hero-sub-tour">
            Lux looks at all your practice — drills, conversations, every phoneme — and figures out what to work on next. <strong>Personalized, intelligent, automatic.</strong>
          </p>

          <div className="hero-controls in">
            <button className="hc-btn" onClick={() => setCyclePaused(!cyclePaused)}>
              {cyclePaused ? <Play size={12} strokeWidth={2.5} /> : <Pause size={12} strokeWidth={2.5} />}
            </button>
            <span className="hc-label">{cyclePaused ? 'PAUSED' : 'AUTO-CYCLING'}</span>
          </div>
        </div>
      </header>

      {/* PR3 — CROSS-MODE AGGREGATION */}
      <section id="aggregation" className="aggregation-section" ref={aggRef}>
        <div className="container">
          <div className="section-head">
            <div className="kicker">The differentiator</div>
            <h2 className="section-title">Two practice modes. One memory.</h2>
            <p className="section-sub">
              Most language tools forget the moment you close the tab. Lux preserves every recording, every phoneme score, every coach response — across passages and conversations both — and uses it to plan what's next.
            </p>
          </div>

          <div className="agg-flow">
            <div className={`agg-step ${aggRevealed >= 1 ? 'in' : ''}`}>
              <div className="agg-icon"><Mic size={28} strokeWidth={2.2} /></div>
              <div className="agg-num">01</div>
              <h3>You practice.</h3>
              <p>Drill a Harvard passage. Hold a conversation with a barista. Type your own sentence and read it. Lux scores it all the same way.</p>
              <div className="agg-sources">
                <span className="agg-source">Practice Skills</span>
                <span className="agg-source">+</span>
                <span className="agg-source">AI Conversations</span>
              </div>
            </div>

            <div className={`agg-arrow ${aggRevealed >= 2 ? 'in' : ''}`}>
              <ArrowDown size={28} strokeWidth={2.2} />
            </div>

            <div className={`agg-step ${aggRevealed >= 2 ? 'in' : ''}`}>
              <div className="agg-icon"><Database size={28} strokeWidth={2.2} /></div>
              <div className="agg-num">02</div>
              <h3>Lux remembers.</h3>
              <p>Every phoneme, every word, every score. Tagged by date, mode, scenario, and trouble pattern. Stored permanently against your account.</p>
              <div className="agg-stats-mini">
                <span className="agg-stat-mini"><Activity size={11} strokeWidth={2.2} /> 40 phonemes tracked</span>
                <span className="agg-stat-mini"><BookOpen size={11} strokeWidth={2.2} /> Every word logged</span>
                <span className="agg-stat-mini"><Clock size={11} strokeWidth={2.2} /> Sessions preserved forever</span>
              </div>
            </div>

            <div className={`agg-arrow ${aggRevealed >= 3 ? 'in' : ''}`}>
              <ArrowDown size={28} strokeWidth={2.2} />
            </div>

            <div className={`agg-step ${aggRevealed >= 3 ? 'in' : ''}`}>
              <div className="agg-icon final"><Target size={28} strokeWidth={2.2} /></div>
              <div className="agg-num">03</div>
              <h3>Lux recommends.</h3>
              <p>Your weakest sounds, ranked smarter than "lowest scores first." Personalized practice generated from your real trouble patterns. <strong>Click once, start fixing.</strong></p>
              <div className="agg-cta">
                <span>See it →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR4 — ALL DATA PAGE SHOWCASE (the core demo) */}
      <section id="all-data" className="alldata-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The all data page</div>
            <h2 className="section-title">One page. Everything Lux knows about your voice.</h2>
            <p className="section-sub">
              This is what Lux's All Data page looks like — the same view you see when you sign in, with sample data populated to walk you through.
            </p>
          </div>

          <div className="alldata-frame">
            {/* Header bar */}
            <div className="ad-header">
              <div className="ad-header-title">
                <Layers size={18} strokeWidth={2.2} />
                All Data — Combined Total
              </div>
              <div className="ad-header-meta">Practice Skills + AI Conversations</div>
            </div>

            {/* Top stats tiles */}
            <div className="ad-stats-row">
              {TOP_STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="ad-stat-tile">
                    <div className="ads-icon"><Icon size={16} strokeWidth={2.2} /></div>
                    <div className="ads-value">{s.value}</div>
                    <div className="ads-lbl">{s.lbl}</div>
                    <div className={`ads-sub ${s.trend === 'up' ? 'up' : ''}`}>
                      {s.trend === 'up' && <TrendingUp size={11} strokeWidth={2.5} />}
                      {s.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trend chart */}
            <div className="ad-trend-section">
              <div className="ad-section-head">
                <div className="ad-section-title">30-day score trend</div>
                <div className="ad-section-meta">
                  <span className="ad-trend-up">+15 pts</span> over the last month
                </div>
              </div>
              <div className="ad-trend-chart">
                <svg viewBox="0 0 600 140" className="ad-trend-svg" preserveAspectRatio="none">
                  {/* Gridlines */}
                  {[20, 50, 80, 110].map(y => (
                    <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2,3" />
                  ))}
                  {/* Trend line */}
                  <polyline
                    fill="none"
                    stroke="#0078D7"
                    strokeWidth="2.5"
                    points={TREND_DATA.map((v, i) => `${(i / 29) * 600},${140 - ((v - 65) / 30) * 100 - 20}`).join(' ')}
                  />
                  {/* Trend area */}
                  <polygon
                    fill="rgba(0,120,215,0.1)"
                    points={`0,140 ${TREND_DATA.map((v, i) => `${(i / 29) * 600},${140 - ((v - 65) / 30) * 100 - 20}`).join(' ')} 600,140`}
                  />
                  {/* End point */}
                  <circle cx={600} cy={140 - ((TREND_DATA[29] - 65) / 30) * 100 - 20} r="4" fill="#0078D7" />
                </svg>
                <div className="ad-trend-labels">
                  <span>30 days ago</span>
                  <span>15 days</span>
                  <span>Today</span>
                </div>
              </div>
            </div>

            {/* Score Trends by Category — pyramid */}
            <div className="ad-pyramid-section">
              <div className="ad-section-head">
                <div className="ad-section-title">Score trends by category</div>
                <div className="ad-section-meta">Across all sessions</div>
              </div>
              <div className="ad-pyramid">
                {SCORE_CATEGORIES.map((cat, i) => (
                  <div key={i} className={`ad-pyramid-tile ${cat.tier}`}>
                    {cat.comingSoon ? (
                      <>
                        <div className="adpt-num">—</div>
                        <div className="adpt-lbl">{cat.label}</div>
                        <div className="adpt-soon">SOON</div>
                      </>
                    ) : (
                      <>
                        <div className="adpt-num">{cat.value}</div>
                        <div className="adpt-lbl">{cat.label}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Snapshot */}
            <div className="ad-snapshot-section">
              <div className="ad-section-head">
                <div className="ad-section-title">Current snapshot</div>
                <div className="ad-section-meta">As of today</div>
              </div>
              <div className="ad-snapshot-grid">
                <div className="ad-snap-tile">
                  <div className="ads-snap-lbl">PEAK PHONEME</div>
                  <div className="ads-snap-value good">/k/ <span>96%</span></div>
                  <div className="ads-snap-sub">Across 234 samples</div>
                </div>
                <div className="ad-snap-tile">
                  <div className="ads-snap-lbl">WEAKEST PHONEME</div>
                  <div className="ads-snap-value warn">/θ/ <span>71%</span></div>
                  <div className="ads-snap-sub">Across 38 samples</div>
                </div>
                <div className="ad-snap-tile">
                  <div className="ads-snap-lbl">BEST DAY</div>
                  <div className="ads-snap-value good">Tuesday</div>
                  <div className="ads-snap-sub">avg 91 across 4 sessions</div>
                </div>
                <div className="ad-snap-tile">
                  <div className="ads-snap-lbl">SESSIONS THIS WEEK</div>
                  <div className="ads-snap-value">7</div>
                  <div className="ads-snap-sub">+3 vs last week</div>
                </div>
              </div>
            </div>

            {/* Next Practice — recommendation engine */}
            <div className="ad-next-section">
              <div className="ad-section-head">
                <div className="ad-section-title">
                  <Lightbulb size={16} strokeWidth={2.2} />
                  Next practice — Lux recommends
                </div>
                <div className="ad-section-meta">Based on cross-mode trouble patterns</div>
              </div>
              <div className="ad-next-frame">
                <div className="adnf-intro">
                  <p>Your weakest sound across all sessions is <strong>/θ/</strong> at <strong>71%</strong> across <strong>38 samples</strong>. Lux suggests three ways to attack it:</p>
                </div>
                <div className="adnf-recs">
                  <div className="adnf-rec">
                    <div className="adnf-rec-icon"><BookOpen size={18} strokeWidth={2.2} /></div>
                    <div className="adnf-rec-body">
                      <div className="adnf-rec-tag">BEST HARVARD PASSAGE</div>
                      <h4>List 12 — "Three thin thieves..."</h4>
                      <p>Contains <strong>11 instances of /θ/</strong> in different positions.</p>
                    </div>
                    <button className="adnf-rec-btn">Start <ArrowRight size={13} strokeWidth={2.5} /></button>
                  </div>
                  <div className="adnf-rec">
                    <div className="adnf-rec-icon"><FileText size={18} strokeWidth={2.2} /></div>
                    <div className="adnf-rec-body">
                      <div className="adnf-rec-tag">BEST CUSTOM PASSAGE</div>
                      <h4>"Through thick and thin"</h4>
                      <p>Phonetician-designed for /θ/ in <strong>word-initial focus</strong>.</p>
                    </div>
                    <button className="adnf-rec-btn">Start <ArrowRight size={13} strokeWidth={2.5} /></button>
                  </div>
                  <div className="adnf-rec featured">
                    <div className="adnf-rec-icon"><MessageCircle size={18} strokeWidth={2.2} /></div>
                    <div className="adnf-rec-body">
                      <div className="adnf-rec-tag">QUICK PRACTICE — natural dialogue</div>
                      <h4>Generated conversation with /θ/ targets</h4>
                      <p>Lux generates a B1-level dialogue where /θ/ words appear naturally. Your trouble words from history get included automatically.</p>
                    </div>
                    <button className="adnf-rec-btn primary">Start <ArrowRight size={13} strokeWidth={2.5} /></button>
                  </div>
                </div>
                <a href="/welcome/conversations" className="adnf-choose-link">Or choose your own scenario →</a>
              </div>
            </div>

            {/* Trouble Sounds */}
            <div className="ad-trouble-section">
              <div className="ad-section-head">
                <div className="ad-section-title">Trouble sounds</div>
                <div className="ad-section-meta">Ranked by Lux's weighted math</div>
              </div>
              <div className="ad-math-callout">
                <Sparkles size={14} strokeWidth={2.2} />
                <span><strong>Smarter than "lowest scores first."</strong> Lux ranks sounds by a weighted blend of how often <em>you</em> use them, how often they appear in <em>English</em>, and your score deficit. A 34-point miss on a sound you barely use ranks lower than an 18-point miss on one you say all day.</span>
              </div>
              <div className="ad-trouble-table">
                <div className="adtt-head">
                  <span className="adtt-col-rank">RANK</span>
                  <span className="adtt-col-ipa">SOUND</span>
                  <span className="adtt-col-freq">YOUR USE</span>
                  <span className="adtt-col-eng">IN ENGLISH</span>
                  <span className="adtt-col-deficit">DEFICIT</span>
                  <span className="adtt-col-weight">WEIGHTED</span>
                  <span className="adtt-col-samples">SAMPLES</span>
                </div>
                {TROUBLE_SOUNDS.map((s, i) => (
                  <div key={s.ipa} className="adtt-row">
                    <span className="adtt-col-rank rank-num">#{i + 1}</span>
                    <span className="adtt-col-ipa"><span className={`adtt-ipa-chip ${tierForScore(100 - s.deficit)}`}>{s.ipa}</span></span>
                    <span className="adtt-col-freq">
                      <span className="adtt-bar-wrap"><span className="adtt-bar" style={{ width: `${s.freqYou * 100}%` }} /></span>
                      <span className="adtt-bar-num">{Math.round(s.freqYou * 100)}%</span>
                    </span>
                    <span className="adtt-col-eng">
                      <span className="adtt-bar-wrap"><span className="adtt-bar muted" style={{ width: `${s.freqEng * 100}%` }} /></span>
                      <span className="adtt-bar-num">{Math.round(s.freqEng * 100)}%</span>
                    </span>
                    <span className="adtt-col-deficit warn">−{s.deficit}</span>
                    <span className="adtt-col-weight"><strong>{s.weight}</strong></span>
                    <span className="adtt-col-samples">{s.samples}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trouble Words */}
            <div className="ad-trouble-words-section">
              <div className="ad-section-head">
                <div className="ad-section-title">Trouble words</div>
                <div className="ad-section-meta">Auto-pinned to My Words</div>
              </div>
              <div className="ad-words-grid">
                {TROUBLE_WORDS.map(w => (
                  <div key={w.word} className="ad-word-tile">
                    <div className="adwt-word">"{w.word}"</div>
                    <div className="adwt-meta">
                      <span className={`adwt-score ${tierForScore(w.avgScore)}`}>{w.avgScore}</span>
                      <span className="adwt-count">{w.count} attempts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="placeholder-disclaimer center mt-2">
            *Demo data · your real All Data page reflects your unique practice and history.
          </p>
        </div>
      </section>

      {/* PR5 — HISTORY REPLAY */}
      <section id="history" className="history-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">"Lux remembers everything"</div>
            <h2 className="section-title">Click any past session. The exact moment plays back.</h2>
            <p className="section-sub">
              Every session preserves the original recording, the score breakdown, the AI Coach's exact feedback, and the text or scenario you practiced. Click any card to see the full historical detail.
            </p>
          </div>

          <div className="history-grid">
            {HISTORY_SESSIONS.map(s => (
              <button key={s.id} className="history-card" onClick={() => setActiveSession(s)}>
                <div className="hc-head">
                  <div className={`hc-type ${s.type}`}>
                    {s.type === 'conversation'
                      ? <MessageCircle size={13} strokeWidth={2.5} />
                      : <Activity size={13} strokeWidth={2.5} />}
                    {s.typeLabel}
                  </div>
                  <div className="hc-date">{s.date} · {s.time}</div>
                </div>
                <h4 className="hc-title">{s.title}</h4>
                <div className="hc-meta">
                  <div className={`hc-score ${s.tier}`}>{s.score}</div>
                  <div className="hc-duration">
                    <Clock size={11} strokeWidth={2.5} />
                    {s.duration}
                  </div>
                </div>
                <div className="hc-cta">
                  Click to replay <ChevronRight size={12} strokeWidth={2.5} />
                </div>
              </button>
            ))}
          </div>

          <div className="history-callout">
            <History size={16} strokeWidth={2.2} />
            <div className="hc-text">
              <strong>The "Lux remembers" moment made tangible.</strong> The Coach's exact words from a session three weeks ago are still there. The sentence you struggled with on Tuesday is still there. Nothing gets lost.
            </div>
          </div>
        </div>

        {activeSession && (
          <HistoryReplayModal session={activeSession} onClose={() => setActiveSession(null)} />
        )}
      </section>

      {/* PR6 — QUICK PRACTICE LOOP */}
      <section id="quick-practice" className="qp-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The reinforcement loop</div>
            <h2 className="section-title">Quick Practice — your weakest sounds, in conversation.</h2>
            <p className="section-sub">
              Lux doesn't just tell you what's weak. It generates a natural-sounding conversation that targets your trouble phonemes — and your trouble words from history get woven in automatically.
            </p>
          </div>

          <div className="qp-frame">
            <div className="qp-config">
              <div className="qp-config-block">
                <div className="qp-cb-lbl">SCENARIO</div>
                <div className="qp-cb-value">{QUICK_PRACTICE_DEMO.scenario}</div>
              </div>
              <div className="qp-config-block">
                <div className="qp-cb-lbl">CEFR LEVEL</div>
                <div className="qp-cb-value">{QUICK_PRACTICE_DEMO.cefr}</div>
              </div>
              <div className="qp-config-block">
                <div className="qp-cb-lbl">TARGETS</div>
                <div className="qp-cb-targets">
                  <span className="qp-target phoneme">{QUICK_PRACTICE_DEMO.troublePhonemes[0]}</span>
                  <span className="qp-target phoneme">{QUICK_PRACTICE_DEMO.troublePhonemes[1]}</span>
                  <span className="qp-target word">{QUICK_PRACTICE_DEMO.troubleWords[0]}</span>
                  <span className="qp-target word">{QUICK_PRACTICE_DEMO.troubleWords[1]}</span>
                </div>
              </div>
            </div>

            <div className="qp-legend">
              <span className="qp-legend-item">
                <span className="qp-legend-dot phoneme" />
                <span><strong>Blue</strong> — words containing your trouble phonemes (/θ/, /ð/)</span>
              </span>
              <span className="qp-legend-item">
                <span className="qp-legend-dot word" />
                <span><strong>Yellow</strong> — words from your trouble word history</span>
              </span>
            </div>

            <div className="qp-conversation">
              {QUICK_PRACTICE_DEMO.conversation.map((turn, i) => (
                <div key={i} className={`qp-turn ${turn.speaker === 'You' ? 'user' : 'ai'}`}>
                  <div className="qp-speaker">{turn.speaker}</div>
                  <div className="qp-text">
                    {turn.text.split(/(\[[^\]]+\])/).map((chunk, j) => {
                      const m = chunk.match(/^\[(.+)\]$/);
                      if (m) {
                        const word = m[1];
                        const hl = turn.highlights.find(h => h.word === word);
                        if (hl) {
                          return <span key={j} className={`qp-highlight ${hl.type}`}>{word}</span>;
                        }
                      }
                      return <span key={j}>{chunk}</span>;
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="qp-result">
              <Sparkles size={14} strokeWidth={2.2} />
              <span>You hit your trouble sounds <strong>without explicitly drilling them</strong>. The conversation feels natural. Your weak spots get reinforced automatically. Click "Quick Practice" on your All Data page to start.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PR7 — ALL DATA COACH COMING SOON */}
      <section className="adcoach-section">
        <div className="container">
          <div className="adcoach-frame">
            <div className="adc-icon-col">
              <div className="adc-icon-stack">
                <div className="adc-icon-bg" />
                <div className="adc-icon-fg">
                  <Brain size={28} strokeWidth={2.2} />
                </div>
              </div>
            </div>
            <div className="adc-text-col">
              <div className="adc-status">
                <span className="adc-status-dot" />
                <span className="adc-status-lbl">COMING SOON</span>
              </div>
              <h2 className="adc-title">All Data Coach — ask Lux about your progress.</h2>
              <p className="adc-body">
                In active development: a conversational interface to your own progress data. <em>"Why did /θ/ get worse this week?" "Which scenario will help me most?" "Show me sessions where I sounded confident."</em> Lux already has the data — we're building the interface to talk to it.
              </p>
              <div className="adc-meta">
                <span className="adc-meta-chip">ChatGPT-style interface</span>
                <span className="adc-meta-chip">Operates on your real data</span>
                <span className="adc-meta-chip">Architecture designed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR8 — CROSS-TOUR OUTBOUND */}
      <section className="next-tours-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Where to next</div>
            <h2 className="section-title">Two ways to start practicing.</h2>
            <p className="section-sub">
              Progress only accumulates if you put in the reps. Pick a path:
            </p>
          </div>
          <div className="next-tours-grid">
            <a href="/welcome/pronunciation" className="next-tour-card">
              <div className="ntc-icon"><Activity size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">PRONUNCIATION TOUR</div>
              <h3>Start practicing.</h3>
              <p>Drill phonemes one passage at a time. The most direct path to fixing weak sounds — and the data feeds straight into your All Data page.</p>
              <span className="ntc-link">Start practicing <ChevronRight size={14} strokeWidth={2.5} /></span>
            </a>
            <a href="/welcome/conversations" className="next-tour-card">
              <div className="ntc-icon"><MessageCircle size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">CONVERSATIONS TOUR</div>
              <h3>Start a conversation.</h3>
              <p>Practice in dialogue. More natural, more variable, more like real life — and conversation data shows up alongside drill data on the same page.</p>
              <span className="ntc-link">Start a conversation <ChevronRight size={14} strokeWidth={2.5} /></span>
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

// ===== HISTORY REPLAY MODAL =====
function HistoryReplayModal({ session, onClose }) {
  return (
    <div className="hr-overlay" onClick={onClose}>
      <div className="hr-modal" onClick={(e) => e.stopPropagation()}>
        <button className="hr-close" onClick={onClose}><X size={16} strokeWidth={2.5} /></button>

        <div className="hr-head">
          <div className={`hr-type ${session.type}`}>
            {session.type === 'conversation'
              ? <MessageCircle size={14} strokeWidth={2.5} />
              : <Activity size={14} strokeWidth={2.5} />}
            {session.typeLabel}
          </div>
          <div className="hr-date">{session.date} · {session.time} · {session.duration}</div>
          <h3 className="hr-title">{session.title}</h3>
        </div>

        <div className="hr-overall">
          <div className={`hr-overall-coin ${session.tier}`}>{session.score}</div>
          <div className="hr-overall-meta">
            <div className="hr-overall-lbl">OVERALL SCORE</div>
            <div className="hr-overall-context">From this session</div>
          </div>
        </div>

        <div className="hr-section">
          <div className="hr-section-head">SCORE BREAKDOWN</div>
          <div className="hr-breakdown">
            {Object.entries(session.detail.breakdown).map(([k, v]) => (
              <div key={k} className="hr-bd-tile">
                <div className={`hr-bd-num ${tierForScore(v)}`}>{v}</div>
                <div className="hr-bd-lbl">{k.charAt(0).toUpperCase() + k.slice(1)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hr-section">
          <div className="hr-section-head">WHAT YOU PRACTICED</div>
          <p className="hr-practiced">{session.detail.practiced.replace(/\\'/g, "'")}</p>
        </div>

        <div className="hr-section">
          <div className="hr-section-head">
            COACH'S FEEDBACK <span className="hr-coach-tag">{session.detail.coachPersonality}</span>
          </div>
          <p className="hr-coach-quote">{session.detail.coach.replace(/\\'/g, "'")}</p>
        </div>

        <div className="hr-section">
          <div className="hr-section-head">TROUBLE THIS SESSION</div>
          <div className="hr-trouble-row">
            {session.detail.trouble.map(t => (
              <span key={t} className="hr-trouble-chip warn">{t}</span>
            ))}
          </div>
        </div>

        <div className="hr-actions">
          <button className="hr-btn primary">
            Quick Next Conversation <ArrowRight size={14} strokeWidth={2.5} />
          </button>
          <button className="hr-btn ghost">
            Choose Area
          </button>
        </div>
      </div>
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
body, .lux-progress {
  font-family: 'Montserrat', system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.lux-progress { min-height: 100vh; }
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
`;

const TOUR_STYLES = `
/* === NAV === */
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
.nav-cta { background: var(--ink); color: #fff; border: none; padding: 0.6rem 1.1rem; border-radius: 999px; font-weight: 700; font-size: 0.9rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem; transition: all 200ms; }
.nav-cta:hover { background: var(--brand); transform: translateY(-1px); }
@media (max-width: 800px) { .nav-links { display: none; } }

.lux-subnav { background: var(--slate-50); border-bottom: 1px solid var(--line); font-family: 'JetBrains Mono', monospace; }
.subnav-inner { max-width: var(--max-w); margin: 0 auto; padding: 0.55rem 2rem; display: flex; align-items: center; gap: 0.55rem; flex-wrap: wrap; font-size: 0.75rem; }
.subnav-label { font-weight: 800; color: var(--ink-soft); letter-spacing: 0.14em; text-transform: uppercase; }
.subnav-divider { color: var(--ink-faint); margin: 0 0.15rem; }
.subnav-item-wrap { display: inline-flex; align-items: center; gap: 0.35rem; }
.subnav-item { color: var(--ink-soft); text-decoration: none; font-weight: 600; padding: 0.15rem 0.45rem; border-radius: 5px; transition: all 200ms; letter-spacing: 0.01em; }
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
.hero-sub-tour strong { color: var(--ink); font-weight: 800; }
.hero-controls { display: inline-flex; align-items: center; gap: 0.45rem; margin-top: 2rem; opacity: 0.55; transition: opacity 300ms; }
.hero-controls:hover { opacity: 1; }
.hc-btn { width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; background: transparent; color: var(--ink-faint); border: none; border-radius: 999px; cursor: pointer; transition: all 200ms; }
.hc-btn:hover { color: var(--brand); transform: scale(1.15); }
.hc-label { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; color: var(--ink-faint); text-transform: uppercase; }

/* === SECTION HEADS === */
.section-head { text-align: center; margin-bottom: 3.5rem; }
.kicker { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em; color: var(--brand); text-transform: uppercase; margin-bottom: 1rem; padding: 0.3rem 0.7rem; background: var(--score-good-bg); border-radius: 6px; }
.section-title { font-weight: 800; font-size: clamp(2rem, 4vw, 3.25rem); letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 1.25rem; max-width: 900px; margin-left: auto; margin-right: auto; }
.section-title strong { color: var(--brand); }
.section-sub { font-size: 1.1rem; line-height: 1.55; color: var(--ink-soft); max-width: 780px; margin: 0 auto; font-weight: 500; }
.section-sub strong { color: var(--ink); font-weight: 800; }

/* === PR3 AGGREGATION === */
.aggregation-section { padding: var(--sect-pad-y) 0; background: var(--bg); }
.agg-flow { display: flex; flex-direction: column; align-items: center; gap: 0.85rem; }
.agg-step { background: #fff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem 2.25rem; max-width: 560px; width: 100%; display: flex; flex-direction: column; gap: 0.85rem; opacity: 0; transform: translateY(24px); transition: opacity 600ms var(--ease-drawer), transform 600ms var(--ease-drawer), border-color 220ms; position: relative; }
.agg-step.in { opacity: 1; transform: translateY(0); }
.agg-step:hover { border-color: var(--brand); box-shadow: 0 12px 36px rgba(0,120,215,0.1); }
.agg-icon { width: 56px; height: 56px; border-radius: 14px; background: var(--score-good-bg); color: var(--brand); display: flex; align-items: center; justify-content: center; }
.agg-icon.final { background: var(--brand); color: #fff; box-shadow: 0 8px 24px rgba(0,120,215,0.3); }
.agg-num { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.18em; color: var(--ink-faint); }
.agg-step h3 { font-weight: 800; font-size: 1.65rem; letter-spacing: -0.025em; line-height: 1.15; }
.agg-step p { font-size: 1rem; line-height: 1.55; color: var(--ink-soft); font-weight: 500; }
.agg-step strong { color: var(--ink); font-weight: 800; }
.agg-sources { display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; padding-top: 0.85rem; border-top: 1px dashed var(--line); }
.agg-source { padding: 0.4rem 0.85rem; background: var(--score-good-bg); color: var(--brand); border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.02em; }
.agg-source:nth-child(2) { background: transparent; color: var(--ink-faint); padding: 0.4rem 0; font-weight: 800; }
.agg-stats-mini { display: flex; flex-wrap: wrap; gap: 0.5rem; padding-top: 0.85rem; border-top: 1px dashed var(--line); }
.agg-stat-mini { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.3rem 0.65rem; background: var(--slate-50); color: var(--ink-soft); font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; border-radius: 5px; letter-spacing: 0.02em; }
.agg-stat-mini svg { color: var(--brand); }
.agg-cta { padding-top: 0.85rem; border-top: 1px dashed var(--line); font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; font-weight: 800; color: var(--brand); letter-spacing: 0.04em; }
.agg-arrow { color: var(--ink-faint); opacity: 0; transform: translateY(-12px); transition: opacity 500ms var(--ease-drawer), transform 500ms var(--ease-drawer); }
.agg-arrow.in { opacity: 1; transform: translateY(0); }

/* === PR4 ALL DATA === */
.alldata-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--slate-50) 0%, var(--bg) 100%); border-top: 1px solid var(--line); }
.alldata-frame { background: #fff; border: 1px solid var(--line); border-radius: 20px; overflow: hidden; box-shadow: 0 24px 60px rgba(15,23,42,0.06); }

.ad-header { background: var(--ink); color: #fff; padding: 1.25rem 1.75rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
.ad-header-title { display: inline-flex; align-items: center; gap: 0.6rem; font-weight: 800; font-size: 1.1rem; }
.ad-header-meta { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--gold); letter-spacing: 0.04em; }

.ad-stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-bottom: 1px solid var(--line); }
@media (max-width: 880px) { .ad-stats-row { grid-template-columns: repeat(2, 1fr); } }
.ad-stat-tile { padding: 1.5rem 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; border-right: 1px solid var(--line); }
.ad-stat-tile:last-child { border-right: none; }
@media (max-width: 880px) { .ad-stat-tile:nth-child(2n) { border-right: none; } }
.ads-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--score-good-bg); color: var(--brand); display: flex; align-items: center; justify-content: center; }
.ads-value { font-weight: 800; font-size: 2rem; line-height: 1; letter-spacing: -0.02em; color: var(--ink); }
.ads-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em; color: var(--ink-soft); text-transform: uppercase; }
.ads-sub { font-size: 0.78rem; color: var(--ink-medium); font-weight: 500; display: inline-flex; align-items: center; gap: 0.3rem; }
.ads-sub.up { color: var(--score-good); font-weight: 700; }

/* All Data sections */
.ad-trend-section, .ad-pyramid-section, .ad-snapshot-section, .ad-next-section, .ad-trouble-section, .ad-trouble-words-section { padding: 1.75rem 1.75rem; border-bottom: 1px solid var(--line); }
.ad-section-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem; }
.ad-section-title { display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 800; font-size: 1.15rem; letter-spacing: -0.01em; }
.ad-section-meta { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--ink-faint); font-weight: 600; letter-spacing: 0.02em; }

/* Trend chart */
.ad-trend-chart { display: flex; flex-direction: column; gap: 0.5rem; }
.ad-trend-svg { width: 100%; height: 140px; display: block; }
.ad-trend-labels { display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--ink-faint); font-weight: 600; letter-spacing: 0.02em; }
.ad-trend-up { padding: 0.2rem 0.5rem; background: var(--score-good-bg); color: var(--score-good); border-radius: 4px; font-weight: 800; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; letter-spacing: 0.02em; }

/* Pyramid */
.ad-pyramid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; }
@media (max-width: 880px) { .ad-pyramid { grid-template-columns: repeat(2, 1fr); } }
.ad-pyramid-tile { padding: 1.25rem 1rem; text-align: center; background: #fff; border: 1.5px solid; border-radius: 12px; position: relative; }
.ad-pyramid-tile.good { border-color: var(--score-good); background: var(--score-good-bg); }
.ad-pyramid-tile.soon { border-color: var(--brand); border-style: dashed; background: var(--score-good-bg); opacity: 0.85; }
.adpt-num { font-weight: 800; font-size: 1.85rem; line-height: 1.1; }
.ad-pyramid-tile.good .adpt-num { color: var(--score-good); }
.ad-pyramid-tile.soon .adpt-num { color: var(--brand); }
.adpt-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; color: var(--ink-soft); text-transform: uppercase; margin-top: 0.4rem; }
.adpt-soon { position: absolute; top: -8px; right: -6px; padding: 0.15rem 0.45rem; background: var(--brand); color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 800; border-radius: 4px; letter-spacing: 0.08em; }

/* Snapshot */
.ad-snapshot-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.85rem; }
@media (max-width: 880px) { .ad-snapshot-grid { grid-template-columns: repeat(2, 1fr); } }
.ad-snap-tile { padding: 1.25rem 1rem; background: var(--slate-50); border: 1px solid var(--line); border-radius: 12px; display: flex; flex-direction: column; gap: 0.4rem; }
.ads-snap-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em; color: var(--ink-soft); text-transform: uppercase; }
.ads-snap-value { font-weight: 800; font-size: 1.4rem; letter-spacing: -0.02em; line-height: 1.2; }
.ads-snap-value.good { color: var(--score-good); }
.ads-snap-value.warn { color: var(--score-warn); }
.ads-snap-value span { font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; opacity: 0.7; margin-left: 0.35rem; }
.ads-snap-sub { font-size: 0.78rem; color: var(--ink-medium); font-weight: 500; }

/* Next practice */
.ad-next-frame { background: linear-gradient(135deg, var(--score-good-bg) 0%, #fff 60%); border: 1px solid var(--brand); border-radius: 16px; padding: 1.5rem; }
.adnf-intro { padding-bottom: 1.25rem; border-bottom: 1px dashed var(--line); margin-bottom: 1.25rem; }
.adnf-intro p { font-size: 1rem; line-height: 1.6; color: var(--ink); font-weight: 500; }
.adnf-intro strong { color: var(--brand); font-weight: 800; }
.adnf-recs { display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1rem; }
.adnf-rec { display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: center; padding: 1rem 1.25rem; background: #fff; border: 1.5px solid var(--line); border-radius: 12px; transition: all 220ms var(--ease-drawer); }
@media (max-width: 720px) { .adnf-rec { grid-template-columns: 1fr; } .adnf-rec-icon { display: none; } }
.adnf-rec:hover { border-color: var(--brand); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,120,215,0.1); }
.adnf-rec.featured { border-color: var(--brand); background: var(--score-good-bg); }
.adnf-rec-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--score-good-bg); color: var(--brand); display: flex; align-items: center; justify-content: center; }
.adnf-rec.featured .adnf-rec-icon { background: var(--brand); color: #fff; }
.adnf-rec-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.12em; color: var(--brand); text-transform: uppercase; }
.adnf-rec-body h4 { font-weight: 800; font-size: 1.05rem; letter-spacing: -0.01em; line-height: 1.2; margin-top: 0.25rem; }
.adnf-rec-body p { font-size: 0.88rem; line-height: 1.5; color: var(--ink-medium); font-weight: 500; margin-top: 0.3rem; }
.adnf-rec-body strong { color: var(--ink); font-weight: 800; }
.adnf-rec-btn { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.55rem 0.95rem; background: #fff; border: 1.5px solid var(--brand); border-radius: 8px; font-family: 'Montserrat'; font-weight: 700; font-size: 0.85rem; color: var(--brand); cursor: pointer; transition: all 200ms; }
.adnf-rec-btn:hover { background: var(--brand); color: #fff; }
.adnf-rec-btn.primary { background: var(--brand); color: #fff; }
.adnf-rec-btn.primary:hover { background: var(--brand-hover); transform: translateY(-1px); }
.adnf-choose-link { display: inline-flex; align-items: center; gap: 0.35rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; font-weight: 700; color: var(--brand); text-decoration: none; letter-spacing: 0.02em; }
.adnf-choose-link:hover { text-decoration: underline; }

/* Trouble Sounds Math callout */
.ad-math-callout { display: flex; align-items: flex-start; gap: 0.6rem; padding: 1.1rem 1.25rem; background: linear-gradient(90deg, var(--score-warn-bg) 0%, #FFF7E5 100%); border: 1px solid #FCD34D; border-radius: 12px; margin-bottom: 1.25rem; }
.ad-math-callout svg { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
.ad-math-callout span { font-size: 0.9rem; line-height: 1.55; color: var(--ink-soft); font-weight: 500; }
.ad-math-callout strong { color: var(--ink); font-weight: 800; }
.ad-math-callout em { color: var(--brand); font-style: italic; font-weight: 700; }

/* Trouble sounds table */
.ad-trouble-table { background: var(--slate-50); border-radius: 12px; overflow: hidden; }
.adtt-head, .adtt-row { display: grid; grid-template-columns: 60px 90px 1.4fr 1.4fr 0.8fr 1fr 0.8fr; gap: 0.85rem; padding: 0.85rem 1.25rem; align-items: center; }
@media (max-width: 1000px) { .adtt-head, .adtt-row { grid-template-columns: 50px 70px 1fr 1fr 60px 80px 60px; gap: 0.5rem; padding: 0.75rem 0.85rem; font-size: 0.85rem; } }
.adtt-head { background: var(--ink); color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
.adtt-row { border-bottom: 1px solid var(--line); transition: background 200ms; }
.adtt-row:hover { background: #fff; }
.adtt-row:last-child { border-bottom: none; }
.rank-num { font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; font-weight: 800; color: var(--brand); }
.adtt-ipa-chip { display: inline-block; padding: 0.3rem 0.55rem; border: 1.5px solid; border-radius: 6px; background: #fff; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; font-weight: 800; }
.adtt-ipa-chip.warn { border-color: var(--score-warn); color: var(--score-warn); background: var(--score-warn-bg); }
.adtt-ipa-chip.bad { border-color: var(--score-bad); color: var(--score-bad); background: var(--score-bad-bg); }
.adtt-ipa-chip.good { border-color: var(--score-good); color: var(--score-good); background: var(--score-good-bg); }
.adtt-bar-wrap { display: inline-block; width: 80%; height: 6px; background: var(--slate-200); border-radius: 3px; overflow: hidden; margin-right: 0.5rem; vertical-align: middle; }
.adtt-bar { display: block; height: 100%; background: var(--brand); border-radius: 3px; }
.adtt-bar.muted { background: var(--ink-faint); }
.adtt-bar-num { font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; font-weight: 700; color: var(--ink-medium); }
.adtt-col-deficit.warn { color: var(--score-warn); font-family: 'JetBrains Mono', monospace; font-weight: 800; }
.adtt-col-weight strong { font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 800; color: var(--brand); }
.adtt-col-samples { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; font-weight: 700; color: var(--ink-medium); }

/* Trouble words */
.ad-words-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem; }
@media (max-width: 880px) { .ad-words-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .ad-words-grid { grid-template-columns: 1fr; } }
.ad-word-tile { padding: 1.1rem 1.25rem; background: var(--slate-50); border: 1px solid var(--line); border-radius: 12px; transition: all 220ms; }
.ad-word-tile:hover { border-color: var(--brand); transform: translateY(-2px); }
.adwt-word { font-weight: 800; font-size: 1.15rem; letter-spacing: -0.01em; color: var(--ink); margin-bottom: 0.55rem; font-style: italic; }
.adwt-meta { display: flex; align-items: center; gap: 0.55rem; }
.adwt-score { padding: 0.25rem 0.55rem; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; font-weight: 800; }
.adwt-score.good { background: var(--score-good-bg); color: var(--score-good); }
.adwt-score.warn { background: var(--score-warn-bg); color: var(--score-warn); }
.adwt-score.bad { background: var(--score-bad-bg); color: var(--score-bad); }
.adwt-count { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--ink-faint); font-weight: 600; letter-spacing: 0.02em; }

/* === PR5 HISTORY === */
.history-section { padding: var(--sect-pad-y) 0; background: var(--bg); border-top: 1px solid var(--line); }
.history-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
@media (max-width: 880px) { .history-grid { grid-template-columns: 1fr; } }
.history-card { background: #fff; border: 1.5px solid var(--line); border-radius: 14px; padding: 1.5rem 1.5rem; cursor: pointer; transition: all 280ms var(--ease-drawer); display: flex; flex-direction: column; gap: 0.85rem; text-align: left; font-family: inherit; }
.history-card:hover { transform: translateY(-3px); border-color: var(--brand); box-shadow: 0 12px 32px rgba(0,120,215,0.1); }
.hc-head { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem; }
.hc-type { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.3rem 0.65rem; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em; }
.hc-type.conversation { background: var(--score-good-bg); color: var(--brand); }
.hc-type.practice { background: var(--score-warn-bg); color: var(--score-warn); }
.hc-date { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--ink-faint); font-weight: 600; letter-spacing: 0.02em; }
.hc-title { font-weight: 800; font-size: 1.05rem; letter-spacing: -0.01em; line-height: 1.25; }
.hc-meta { display: flex; align-items: center; gap: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--line); }
.hc-score { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.95rem; border: 2.5px solid; background: #fff; }
.hc-score.good { color: var(--score-good); border-color: var(--score-good); }
.hc-score.warn { color: var(--score-warn); border-color: var(--score-warn); }
.hc-duration { display: inline-flex; align-items: center; gap: 0.35rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--ink-medium); font-weight: 700; letter-spacing: 0.02em; }
.hc-cta { display: inline-flex; align-items: center; gap: 0.3rem; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--brand); letter-spacing: 0.02em; padding-top: 0.5rem; }

.history-callout { display: flex; align-items: flex-start; gap: 0.65rem; padding: 1.25rem 1.5rem; background: var(--ink); color: #fff; border-radius: 14px; }
.history-callout svg { color: var(--gold); flex-shrink: 0; margin-top: 3px; }
.hc-text { font-size: 0.95rem; line-height: 1.55; color: rgba(255,255,255,0.9); font-weight: 500; }
.hc-text strong { color: var(--gold); font-weight: 800; }

/* HISTORY REPLAY MODAL */
.hr-overlay { position: fixed; inset: 0; background: rgba(8,8,14,0.7); backdrop-filter: blur(8px); z-index: 300; display: flex; align-items: center; justify-content: center; padding: 1.5rem; animation: hrFadeIn 250ms ease; }
@keyframes hrFadeIn { from { opacity: 0; } to { opacity: 1; } }
.hr-modal { background: #fff; border-radius: 22px; padding: 2.5rem 2rem; max-width: 720px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 32px 80px rgba(0,0,0,0.45); animation: hrScaleIn 350ms var(--ease-pop); display: flex; flex-direction: column; gap: 1.5rem; }
@keyframes hrScaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
.hr-close { position: absolute; top: 1.25rem; right: 1.25rem; width: 32px; height: 32px; border-radius: 50%; background: var(--slate-100); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ink-soft); transition: all 200ms; }
.hr-close:hover { background: var(--ink); color: #fff; }
.hr-head { display: flex; flex-direction: column; gap: 0.55rem; padding-right: 3rem; }
.hr-type { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.35rem 0.7rem; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.06em; align-self: flex-start; }
.hr-type.conversation { background: var(--score-good-bg); color: var(--brand); }
.hr-type.practice { background: var(--score-warn-bg); color: var(--score-warn); }
.hr-date { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--ink-faint); font-weight: 600; letter-spacing: 0.02em; }
.hr-title { font-weight: 800; font-size: 1.5rem; letter-spacing: -0.025em; line-height: 1.15; }
.hr-overall { display: flex; align-items: center; gap: 1.25rem; padding: 1.25rem 1.5rem; background: var(--slate-50); border-radius: 12px; }
.hr-overall-coin { width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.6rem; border: 3.5px solid; background: #fff; flex-shrink: 0; }
.hr-overall-coin.good { color: var(--score-good); border-color: var(--score-good); }
.hr-overall-coin.warn { color: var(--score-warn); border-color: var(--score-warn); }
.hr-overall-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.12em; color: var(--ink-soft); text-transform: uppercase; }
.hr-overall-context { font-size: 0.88rem; color: var(--ink-medium); font-weight: 500; margin-top: 0.2rem; }
.hr-section { display: flex; flex-direction: column; gap: 0.6rem; }
.hr-section-head { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; color: var(--brand); text-transform: uppercase; display: flex; align-items: center; gap: 0.6rem; }
.hr-coach-tag { padding: 0.15rem 0.45rem; background: var(--brand); color: #fff; border-radius: 4px; font-size: 0.62rem; letter-spacing: 0.04em; }
.hr-breakdown { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.65rem; }
.hr-bd-tile { padding: 0.85rem; text-align: center; background: var(--slate-50); border-radius: 8px; }
.hr-bd-num { font-weight: 800; font-size: 1.35rem; line-height: 1.1; }
.hr-bd-num.good { color: var(--score-good); }
.hr-bd-num.warn { color: var(--score-warn); }
.hr-bd-num.bad { color: var(--score-bad); }
.hr-bd-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 800; letter-spacing: 0.06em; color: var(--ink-soft); text-transform: uppercase; margin-top: 0.25rem; }
.hr-practiced { font-size: 0.95rem; line-height: 1.55; color: var(--ink-soft); font-weight: 500; padding: 0.85rem 1rem; background: var(--slate-50); border-radius: 8px; font-style: italic; }
.hr-coach-quote { font-size: 0.95rem; line-height: 1.65; color: var(--ink); font-weight: 500; padding: 1rem 1.25rem; background: var(--score-good-bg); border-left: 3px solid var(--brand); border-radius: 4px 8px 8px 4px; font-style: italic; }
.hr-trouble-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.hr-trouble-chip { padding: 0.35rem 0.65rem; background: var(--score-warn-bg); color: var(--score-warn); border: 1px solid #FCD34D; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; }
.hr-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; padding-top: 0.5rem; border-top: 1px dashed var(--line); }
.hr-btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.7rem 1.1rem; border-radius: 999px; font-family: 'Montserrat'; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 200ms; border: 1.5px solid; }
.hr-btn.primary { background: var(--brand); color: #fff; border-color: var(--brand); }
.hr-btn.primary:hover { background: var(--brand-hover); transform: translateY(-1px); }
.hr-btn.ghost { background: transparent; color: var(--ink); border-color: var(--line); }
.hr-btn.ghost:hover { background: var(--ink); color: #fff; border-color: var(--ink); }

/* === PR6 QUICK PRACTICE === */
.qp-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--slate-50) 0%, var(--bg) 100%); border-top: 1px solid var(--line); }
.qp-frame { background: #fff; border: 1px solid var(--line); border-radius: 20px; padding: 2rem; box-shadow: 0 16px 48px rgba(15,23,42,0.06); display: flex; flex-direction: column; gap: 1.5rem; }
.qp-config { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1rem 1.25rem; background: var(--ink); color: #fff; border-radius: 12px; }
@media (max-width: 880px) { .qp-config { grid-template-columns: 1fr; } }
.qp-cb-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.12em; color: var(--gold); text-transform: uppercase; }
.qp-cb-value { font-weight: 700; font-size: 0.95rem; color: #fff; margin-top: 0.3rem; }
.qp-cb-targets { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.3rem; }
.qp-target { padding: 0.25rem 0.55rem; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; }
.qp-target.phoneme { background: rgba(0,120,215,0.4); color: #fff; }
.qp-target.word { background: rgba(234,179,8,0.4); color: #fff; }

.qp-legend { display: flex; flex-wrap: wrap; gap: 1.5rem; padding: 0.85rem 1.25rem; background: var(--slate-50); border-radius: 10px; }
.qp-legend-item { display: inline-flex; align-items: center; gap: 0.55rem; font-size: 0.88rem; color: var(--ink-soft); font-weight: 500; }
.qp-legend-item strong { font-weight: 800; }
.qp-legend-dot { width: 14px; height: 14px; border-radius: 4px; }
.qp-legend-dot.phoneme { background: var(--brand); }
.qp-legend-dot.word { background: var(--gold); }

.qp-conversation { display: flex; flex-direction: column; gap: 0.85rem; padding: 1.5rem; background: var(--slate-50); border-radius: 14px; }
.qp-turn { display: flex; flex-direction: column; gap: 0.3rem; max-width: 78%; }
.qp-turn.user { align-self: flex-end; align-items: flex-end; }
.qp-turn.ai { align-self: flex-start; }
.qp-speaker { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.06em; color: var(--ink-faint); text-transform: uppercase; }
.qp-text { padding: 0.85rem 1.1rem; border-radius: 14px; font-size: 0.95rem; line-height: 1.5; font-weight: 500; }
.qp-turn.ai .qp-text { background: #fff; color: var(--ink); border-bottom-left-radius: 4px; border: 1px solid var(--line); }
.qp-turn.user .qp-text { background: var(--brand); color: #fff; border-bottom-right-radius: 4px; }
.qp-highlight { padding: 0.1rem 0.35rem; border-radius: 4px; font-weight: 800; }
.qp-highlight.phoneme { background: rgba(0,120,215,0.85); color: #fff; }
.qp-turn.user .qp-highlight.phoneme { background: rgba(255,255,255,0.3); color: #fff; }
.qp-highlight.word { background: var(--gold); color: var(--ink); }
.qp-turn.user .qp-highlight.word { background: var(--gold); color: var(--ink); }

.qp-result { display: flex; align-items: flex-start; gap: 0.6rem; padding: 1rem 1.25rem; background: var(--score-good-bg); border-left: 4px solid var(--brand); border-radius: 4px 12px 12px 4px; font-size: 0.92rem; color: var(--ink-soft); font-weight: 500; line-height: 1.55; }
.qp-result svg { color: var(--brand); flex-shrink: 0; margin-top: 2px; }
.qp-result strong { color: var(--ink); font-weight: 800; }

/* === PR7 ALL DATA COACH === */
.adcoach-section { padding: var(--sect-pad-y) 0; background: var(--bg); border-top: 1px solid var(--line); }
.adcoach-frame { display: grid; grid-template-columns: auto 1fr; gap: 3rem; background: #fff; border: 1.5px solid var(--brand); border-style: dashed; border-radius: 20px; padding: 2.5rem; align-items: center; box-shadow: 0 16px 48px rgba(0,120,215,0.06); }
@media (max-width: 720px) { .adcoach-frame { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.75rem; } }
.adc-icon-stack { position: relative; width: 88px; height: 88px; }
.adc-icon-bg { position: absolute; inset: 0; background: linear-gradient(135deg, var(--brand) 0%, #1A8AE0 100%); border-radius: 18px; transform: rotate(8deg); box-shadow: 0 12px 32px rgba(0,120,215,0.3); }
.adc-icon-fg { position: absolute; inset: 0; background: #fff; border-radius: 18px; display: flex; align-items: center; justify-content: center; color: var(--brand); border: 1.5px solid var(--line); }
.adc-status { display: flex; align-items: center; gap: 0.55rem; margin-bottom: 0.85rem; }
.adc-status-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--brand); animation: pulseDot 2s ease-in-out infinite; }
@keyframes pulseDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.adc-status-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.14em; color: var(--brand); }
.adc-title { font-weight: 800; font-size: 1.85rem; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 1rem; }
.adc-body { font-size: 1rem; line-height: 1.6; color: var(--ink-soft); font-weight: 500; margin-bottom: 1.25rem; }
.adc-body em { color: var(--brand); font-style: italic; font-weight: 700; }
.adc-meta { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.adc-meta-chip { padding: 0.35rem 0.7rem; background: var(--score-good-bg); color: var(--brand); font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; border-radius: 5px; letter-spacing: 0.02em; }

/* === NEXT TOURS === */
.next-tours-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--bg) 0%, var(--slate-50) 100%); border-top: 1px solid var(--line); }
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
