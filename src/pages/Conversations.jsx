// /welcome/conversations — The Conversations Tour
// Phase 3 of the Lux onboarding multi-page architecture.
// Maps to Sections K (hub), L (picker page), M (live conversation), N (cross-mode handoffs)
// Per MULTI_PAGE_ARCHITECTURE.md Section 8.

import { useState, useEffect, useRef } from 'react';
import {
  Mic, Sparkles, Volume2, TrendingUp, ChevronRight, ChevronLeft,
  Play, Pause, RotateCw, Activity, MessageCircle,
  ArrowRight, Loader2, Check, X, AudioLines, BookOpen,
  Headphones, Eye, Type, Globe, Search, FileText,
  Zap, Brain, Cpu, Settings, Users, Clock, Sliders,
  Heart, Coffee, Briefcase, Plane, Phone, Video,
  ShoppingCart, GraduationCap, MessageSquare, UserCircle2
} from 'lucide-react';

// ===== TOURS DATA (must match landing) =====
const TOURS = [
  { id: 'pronunciation', label: 'Pronunciation', path: '/welcome/pronunciation' },
  { id: 'coach',         label: 'Coach',         path: '/welcome/coach' },
  { id: 'voice',         label: 'Voice',         path: '/welcome/voice' },
  { id: 'conversations', label: 'Conversations', path: '/welcome/conversations' },
  { id: 'progress',      label: 'Progress',      path: '/welcome/progress' },
];

const CYCLING_NOUNS = ['conversations', 'scenarios', 'dialogues', 'moments', 'practice'];

// ===== SCENARIO LIBRARY =====
// 4 scenarios for the picker demo, each with 3 layers of progressive disclosure
// (matches Mark's actual app structure: title → 1-sentence → 4 bullets → 4-paragraph "Behind the Scenes")
const PICKER_SCENARIOS = [
  {
    id: 'misunderstanding',
    title: 'Clear Up a Misunderstanding',
    icon: Phone,
    cefr: 'A2',
    role: 'passenger',
    tone: 'neutral · friendly',
    length: 'short',
    settingsBadge: 'A2 · passenger · neutral · short',
    summary: 'A bus ride, a question for the driver, and an answer that wasn\'t understood the first time.',
    bullets: [
      { lbl: 'Background', text: 'The entrance of a city bus, handrails, seats visible behind, a step up from the sidewalk.' },
      { lbl: 'Setup',      text: 'A passenger approaches the driver with a question about the route.' },
      { lbl: 'Difficulties', text: 'Road noise, stop names they don\'t know, following directions the first time.' },
      { lbl: 'Objectives', text: 'Asking for repetition, confirming a destination, following spoken directions.' },
    ],
    behindScenes: 'The bus pulled up to the stop and the door opened. The passenger stepped on, tapped her card, and immediately looked uncertain. She glanced at the route number on the display above the driver, then at a map on her phone that she can\'t quite match to reality. She needs to get to a part of town she\'s only been to once, and she\'s relying on a stop name she read online but has never heard spoken aloud. The bus is half full. A few passengers behind her are waiting to board. The driver hasn\'t pulled away yet, which gives the passenger a moment to ask, but that window is closing. The bus engine rumbles. The doors are still open, and street noise bleeds in. The driver is focused forward, hands on the wheel, ready to go. This exchange will last 30 seconds to a minute, possibly with a follow-up later when the stop approaches. The difficulty isn\'t the answer — it\'s hearing it. Bus acoustics are terrible. Engine drone, road vibration, and a driver who talks toward the windshield, not toward the passenger.',
  },
  {
    id: 'video-call',
    title: 'Video Call with a Colleague',
    icon: Video,
    cefr: 'B2',
    role: 'remote colleague',
    tone: 'formal · friendly',
    length: 'medium',
    settingsBadge: 'B2 · colleague · formal · medium',
    summary: 'A weekly check-in with a colleague who has a lot to share — and a tendency to keep going.',
    bullets: [
      { lbl: 'Background', text: 'Two laptops, two home offices, one shared calendar invite that says "Weekly Sync — 30 minutes."' },
      { lbl: 'Setup',      text: 'A junior colleague is presenting three projects, and you\'re running the call.' },
      { lbl: 'Difficulties', text: 'Keeping the call on track, asking productive questions, knowing when to redirect politely.' },
      { lbl: 'Objectives', text: 'Following technical updates, confirming next steps, keeping the meeting in time.' },
    ],
    behindScenes: 'The presenter is in her late 20s, prepared and enthusiastic, with a screen full of tabs ready to share. Her enthusiasm sometimes runs ahead of her — she\'ll talk for four minutes on one update before realizing she hasn\'t checked if anyone\'s still following. She\'s learning that a good presentation isn\'t about covering everything, it\'s about knowing when to pause. The colleague (you) is in her 40s, experienced and structured, and runs the call with a light hand. She\'s been in enough video calls to know they need a steady hand and provides it without making anyone feel managed. She starts every meeting the same way — a quick check-in, then straight to business — and ends them the same way: "Let me confirm next steps." Her notes are better than the recording, and she\'s never once forgotten to hit unmute. The setting is residential. Window light from one side, a soft blur background. The audio is clean but the video stutters occasionally, which means timing the response to the speaker\'s pause is harder than usual.',
  },
  {
    id: 'cafe-order',
    title: 'Order at a Busy Café',
    icon: Coffee,
    cefr: 'A2',
    role: 'customer',
    tone: 'friendly · enthusiastic',
    length: 'terse',
    settingsBadge: 'A2 · customer · friendly · terse',
    summary: 'A morning rush, a long line behind you, and a barista who needs your order in five seconds.',
    bullets: [
      { lbl: 'Background', text: 'Morning rush hour. Espresso machines hissing, pastries in the case, the line stretches to the door.' },
      { lbl: 'Setup',      text: 'You step up to the counter. The barista looks up: "What can I get you?"' },
      { lbl: 'Difficulties', text: 'Speed pressure, menu items you may not recognize, decision-making under social pressure.' },
      { lbl: 'Objectives', text: 'Ordering clearly, confirming size and modifiers, paying and stepping aside.' },
    ],
    behindScenes: 'The café is the kind that takes its coffee seriously without being precious about it. Espresso steam, the smell of bread, conversation hum around you. The barista is mid-30s, fast hands, a well-practiced smile that drops the moment she\'s focused on a drink. She doesn\'t mean to rush you, but she has six drinks in queue and two more on the way. The customer behind you is on his phone but listening. The customer two behind is checking her watch. None of this is hostile — it\'s just morning. The menu is on a chalkboard above the counter. Some items are in Italian, some are made up. The cashier is patient with first-timers but moves fast with regulars. Your goal is not to be charming; it\'s to be quick and clear. "Latte, large, oat" beats "Hi, I was wondering if you could maybe make me a... uh..." every time. Native speakers don\'t hesitate; they just say it. This scenario teaches the rhythm of clarity under time pressure.',
  },
  {
    id: 'doctor-visit',
    title: 'Describe a Symptom to a Doctor',
    icon: Heart,
    cefr: 'B1',
    role: 'patient',
    tone: 'sympathetic · sincere',
    length: 'medium',
    settingsBadge: 'B1 · patient · sympathetic · medium',
    summary: 'A small clinic, ten minutes on the clock, and a symptom that\'s harder to describe than you expected.',
    bullets: [
      { lbl: 'Background', text: 'A general practitioner\'s exam room. Paper crinkling on the table, a stethoscope on the desk.' },
      { lbl: 'Setup',      text: 'You\'ve been having a recurring symptom for two weeks. The doctor asks: "When did it start?"' },
      { lbl: 'Difficulties', text: 'Medical vocabulary, describing intensity and frequency, asking follow-up questions.' },
      { lbl: 'Objectives', text: 'Describing pain or discomfort accurately, answering yes/no questions clearly, asking what to do.' },
    ],
    behindScenes: 'The doctor is in her 50s, calm, has been doing this for 25 years and still listens like it\'s the first time she\'s heard your problem. She has 10 minutes scheduled with you, and she\'ll use most of it to listen if you\'re using yours to talk. The exam room is small but not cramped. A diploma on the wall, a sink, the paper sheet on the exam table. Daylight from a frosted window. The smell of clean. Your symptom isn\'t serious — probably — but it\'s recurring enough that you finally booked the appointment. The challenge is vocabulary. You know the words you use with your family, but those aren\'t the words a doctor expects. "It hurts here" needs to become "I have a sharp pain in my upper right abdomen, on and off, for about two weeks." That\'s a specific kind of language work, and Lux trains it directly. The doctor will ask you to rate the pain 1-10 and ask if anything makes it worse or better. She\'s patient. She has all the time you need within the 10 minutes.',
  },
];

const TONES = [
  'neutral', 'formal', 'friendly', 'enthusiastic', 'encouraging', 'playful',
  'flirty', 'sarcastic', 'nervous', 'sympathetic', 'confused', 'tired',
  'distracted', 'cold', 'blunt', 'impatient', 'angry', 'upset',
];

const LENGTHS = [
  { id: 'terse',    label: 'terse',    width: 0.45 },
  { id: 'short',    label: 'short',    width: 0.6 },
  { id: 'medium',   label: 'medium',   width: 0.75 },
  { id: 'long',     label: 'long',     width: 0.9 },
  { id: 'longer',   label: 'longer',   width: 1.05 },
  { id: 'extended', label: 'extended', width: 1.25 },
];

// Pre-baked conversation for the live-conversation demo
// Real Lux structure: alternating user/AI turns + narration injections + AI scene images
const DEMO_CONVERSATION = [
  { type: 'narration', text: 'Miguel stands at the host stand, eyes scanning the room. The dinner crowd is settling in. Two menus tucked under his arm.' },
  { type: 'ai', speaker: 'Miguel', text: 'Hi there! Welcome in. How many tonight?' },
  { type: 'user', text: 'Hi, do you have a table for two?', score: 92, focus: '/r/' },
  { type: 'ai', speaker: 'Miguel', text: 'Of course. Right by the window — would that work? It\'s a little quieter over there.' },
  { type: 'user', text: 'That sounds wonderful, thank you.', score: 87, focus: '/ð/' },
  { type: 'narration', text: 'Miguel nods and grabs two menus, gesturing toward the back of the restaurant.' },
  { type: 'ai', speaker: 'Miguel', text: 'Right this way. Can I bring you anything to drink to start?' },
];

const SUGGESTED_REPLIES = [
  { text: 'Just water for now, please.',   tone: 'neutral · short' },
  { text: 'Could I see the wine list?',    tone: 'curious · medium' },
  { text: 'A coffee, when you have time.', tone: 'friendly · short' },
];

const tierForScore = (score) => score >= 80 ? 'good' : score >= 60 ? 'warn' : 'bad';

// ===== MAIN COMPONENT =====
export default function ConversationsTour() {
  // Hero cycling
  const [cycleIndex, setCycleIndex] = useState(0);
  const [cycleFlipping, setCycleFlipping] = useState(false);
  const [cyclePaused, setCyclePaused] = useState(false);
  useEffect(() => {
    if (cyclePaused) return;
    const t = setInterval(() => {
      setCycleFlipping(true);
      setTimeout(() => {
        setCycleIndex(i => (i + 1) % CYCLING_NOUNS.length);
        setCycleFlipping(false);
      }, 250);
    }, 2400);
    return () => clearInterval(t);
  }, [cyclePaused]);

  // Picker page demo state
  const [pickerIdx, setPickerIdx] = useState(0);
  const [pickerExpand, setPickerExpand] = useState(0); // 0 = collapsed, 1 = summary, 2 = bullets
  const [behindScenesOpen, setBehindScenesOpen] = useState(false);
  const [drawer, setDrawer] = useState(null); // null | 'settings' | 'characters'

  // Settings state per scenario (preset, can be overridden)
  const [cefrLevel, setCefrLevel] = useState(PICKER_SCENARIOS[0].cefr);
  const [toneStacks, setToneStacks] = useState({}); // { tone: count } where count is 1-3
  const [length, setLength] = useState(PICKER_SCENARIOS[0].length);

  // When picker scenario changes, reset settings to that scenario's preset
  useEffect(() => {
    const sc = PICKER_SCENARIOS[pickerIdx];
    setCefrLevel(sc.cefr);
    setLength(sc.length);
    setPickerExpand(0);
    // Initialize tone stacks from preset (split "neutral · friendly" → {neutral: 2, friendly: 1})
    const presetTones = sc.tone.split(' · ');
    const initial = {};
    presetTones.forEach((t, i) => {
      // First tone gets 2 stacks, second gets 1 (matches Mark's calibration pattern)
      initial[t] = i === 0 ? 2 : 1;
    });
    setToneStacks(initial);
  }, [pickerIdx]);

  const cycleTone = (tone) => {
    setToneStacks(prev => {
      const cur = prev[tone] || 0;
      const next = cur >= 3 ? 0 : cur + 1;
      const newStacks = { ...prev };
      // Enforce max 3 different tones
      const activeTones = Object.entries(newStacks).filter(([_, n]) => n > 0).map(([t]) => t);
      if (next > 0 && !activeTones.includes(tone) && activeTones.length >= 3) {
        return prev; // Already 3 tones, can't add a 4th
      }
      if (next === 0) delete newStacks[tone];
      else newStacks[tone] = next;
      return newStacks;
    });
  };

  // Live conversation demo state
  const [convoStep, setConvoStep] = useState(2); // start partway through so users see content
  const [recState, setRecState] = useState('idle'); // 'idle' | 'recording' | 'sending'

  // Cycle through scenarios
  const nextScenario = () => {
    setPickerIdx(i => (i + 1) % PICKER_SCENARIOS.length);
  };
  const prevScenario = () => {
    setPickerIdx(i => (i - 1 + PICKER_SCENARIOS.length) % PICKER_SCENARIOS.length);
  };

  return (
    <div className="lux-cv">
      <style>{`${DESIGN_TOKENS}${TOUR_STYLES}`}</style>

      {/* NAV */}
      <nav className="lux-nav">
        <div className="nav-inner">
          <a href="/welcome" className="nav-brand" style={{ textDecoration: 'none', color: 'inherit' }}><span className="nav-mark"><span className="nav-mark-inner" /></span><span className="nav-name">Lux</span></a>
          <div className="nav-links">
            <a href="/welcome" className="nav-link">Welcome</a>
            <a href="#modes" className="nav-link">Three modes</a>
            <a href="#picker" className="nav-link">The picker</a>
            <a href="#inside" className="nav-link">Inside a conversation</a>
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
                   className={`subnav-item ${tour.id === 'conversations' ? 'active' : ''}`}>
                  {tour.label}
                </a>
                {i < TOURS.length - 1 && <span className="subnav-sep">·</span>}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* CV2 — HERO */}
      <header className="hero-tour">
        <div className="container">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Practice talking, not just reading
          </div>
          <h1 className="hero-headline-tour">
            <span className="chunk">Real</span>
            <br />
            <span className={`hh-cycle-wrap`}>
              <span className={`hh-cycle ${cycleFlipping ? 'flipping' : ''}`}>
                {CYCLING_NOUNS[cycleIndex]}
              </span>
            </span>
            <br />
            <span className="chunk">with characters who feel alive.</span>
          </h1>
          <p className="hero-sub-tour">
            25 scenarios. 50 characters. AI that adapts to your level. Scoring that doesn't break the flow of dialogue.
          </p>

          <div className="hero-controls in">
            <button className="hc-btn" onClick={() => setCyclePaused(!cyclePaused)}>
              {cyclePaused ? <Play size={12} strokeWidth={2.5} /> : <Pause size={12} strokeWidth={2.5} />}
            </button>
            <span className="hc-label">{cyclePaused ? 'PAUSED' : 'AUTO-CYCLING'}</span>
          </div>
        </div>
      </header>

      {/* CV3 — THREE MODES */}
      <section id="modes" className="modes-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Three modes</div>
            <h2 className="section-title">Pick how you want to talk.</h2>
            <p className="section-sub">
              Each mode trains a different skill. One is fully ready, one is in active development, and one is the future of Lux.
            </p>
          </div>

          <div className="modes-grid">
            {/* GUIDED — Production */}
            <div className="mode-card mode-production">
              <div className="mode-status">
                <span className="mode-status-dot good" />
                <span className="mode-status-lbl">PRODUCTION</span>
              </div>
              <div className="mode-icon">
                <BookOpen size={28} strokeWidth={2.2} />
              </div>
              <h3 className="mode-title">Guided</h3>
              <div className="mode-tag">Decks</div>
              <p className="mode-body">
                Curated scenarios you walk through turn by turn. Each scenario has a CEFR level, a character with a backstory, and a natural ending point. Score every reply, see your full report at the end. <strong>This is what most of this Tour shows you.</strong>
              </p>
              <div className="mode-meta">
                <span className="mode-meta-chip"><Activity size={12} strokeWidth={2.2} /> 25 scenarios</span>
                <span className="mode-meta-chip"><Users size={12} strokeWidth={2.2} /> 50 characters</span>
                <span className="mode-meta-chip"><Sparkles size={12} strokeWidth={2.2} /> 17 tones · 6 CEFR levels</span>
              </div>
            </div>

            {/* STREAMING — Partial */}
            <div className="mode-card mode-partial">
              <div className="mode-status">
                <span className="mode-status-dot warn" />
                <span className="mode-status-lbl">IN ACTIVE DEVELOPMENT</span>
              </div>
              <div className="mode-icon partial">
                <AudioLines size={28} strokeWidth={2.2} />
              </div>
              <h3 className="mode-title">Streaming</h3>
              <div className="mode-tag">Real-time</div>
              <p className="mode-body">
                Real-time voice conversation, no turn-taking, no waiting — just talk like you would with a person. The structural pieces work. The depth and richness are still being built.
              </p>
              <div className="mode-meta">
                <span className="mode-meta-chip">Working but bare-bone</span>
                <span className="mode-meta-chip">Polish in progress</span>
              </div>
              <p className="mode-honesty">
                <Sparkles size={12} strokeWidth={2.2} />
                <span>Honesty: this works today, but it's not yet at the level Guided is. Worth trying once it ships.</span>
              </p>
            </div>

            {/* LIVE — Coming Soon */}
            <div className="mode-card mode-coming-soon">
              <div className="mode-status">
                <span className="mode-status-dot soon" />
                <span className="mode-status-lbl">COMING SOON</span>
              </div>
              <div className="mode-icon soon">
                <Sparkles size={28} strokeWidth={2.2} />
              </div>
              <h3 className="mode-title">Live Journey</h3>
              <div className="mode-tag">Game</div>
              <p className="mode-body">
                A persistent character world that grows with you. Every conversation builds context that compounds across weeks and months. An agent scrapes your data nightly to tailor a fresh world. Designed; not yet built.
              </p>
              <div className="mode-meta">
                <span className="mode-meta-chip soon">Concept stage</span>
                <span className="mode-meta-chip soon">Architecture designed</span>
              </div>
              <p className="mode-soon-pitch">
                "Lux remembers your characters. They remember you. The world keeps unfolding."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV4 — PICKER PAGE SHOWCASE (Mark's pride) */}
      <section id="picker" className="picker-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">The picker page</div>
            <h2 className="section-title">Click. See more. Click again. See more still.</h2>
            <p className="section-sub">
              Every scenario has three layers of detail, and each layer is more rigorous than the last. Click the card to see what we mean.
            </p>
          </div>

          <div className="picker-frame">
            {/* Settings descriptor bubble */}
            <div className="picker-settings-bubble">
              <span className="psb-cefr">{cefrLevel}</span>
              <span className="psb-divider">·</span>
              <span className="psb-role">{PICKER_SCENARIOS[pickerIdx].role}</span>
              <span className="psb-divider">·</span>
              <span className="psb-tone">
                {Object.entries(toneStacks).map(([t, n]) => `${t}${n > 1 ? '×' + n : ''}`).join(' · ') || 'neutral'}
              </span>
              <span className="psb-divider">·</span>
              <span className="psb-length">{length}</span>
            </div>

            {/* Main card with looping video placeholder */}
            <div className="picker-stage">
              {/* Drawer toggles */}
              <button
                className={`picker-drawer-toggle left ${drawer === 'characters' ? 'active' : ''}`}
                onClick={() => setDrawer(drawer === 'characters' ? null : 'characters')}
                title="Characters"
              >
                <Users size={14} strokeWidth={2.5} />
                <span className="pdt-label">Characters</span>
              </button>

              <div className="picker-cards">
                {/* Card behind (next scenario, blurred) */}
                <div className="picker-card-behind">
                  <div className="pcb-video-placeholder">
                    {(() => {
                      const NextIcon = PICKER_SCENARIOS[(pickerIdx + 1) % PICKER_SCENARIOS.length].icon;
                      return <NextIcon size={56} strokeWidth={1.5} />;
                    })()}
                  </div>
                </div>

                {/* Main card */}
                <div className={`picker-card-main expand-${pickerExpand}`}
                     onClick={() => setPickerExpand(e => Math.min(e + 1, 2))}>
                  <div className="pcm-video">
                    <div className="pcm-video-placeholder">
                      {(() => {
                        const Icon = PICKER_SCENARIOS[pickerIdx].icon;
                        return <Icon size={72} strokeWidth={1.4} />;
                      })()}
                      <div className="pcm-video-label">VIDEO · 8-second loop</div>
                    </div>
                    <div className="pcm-title-overlay">
                      <h3 className="pcm-title">{PICKER_SCENARIOS[pickerIdx].title}</h3>
                    </div>
                  </div>

                  {/* Progressive disclosure layers */}
                  {pickerExpand >= 1 && (
                    <div className="pcm-summary">
                      <p>{PICKER_SCENARIOS[pickerIdx].summary}</p>
                      {pickerExpand === 1 && (
                        <span className="pcm-more-hint">Click again for full details ↓</span>
                      )}
                    </div>
                  )}
                  {pickerExpand >= 2 && (
                    <div className="pcm-bullets">
                      {PICKER_SCENARIOS[pickerIdx].bullets.map((b, i) => (
                        <div key={i} className="pcm-bullet">
                          <div className="pcm-bullet-lbl">{b.lbl}</div>
                          <div className="pcm-bullet-text">{b.text}</div>
                        </div>
                      ))}
                      <button
                        className="pcm-behind-link"
                        onClick={(e) => { e.stopPropagation(); setBehindScenesOpen(true); }}
                      >
                        <Eye size={13} strokeWidth={2.5} />
                        Behind the Scenes — full literary description
                      </button>
                    </div>
                  )}

                  {/* Always-visible Start button */}
                  <button className="pcm-start-btn" onClick={(e) => e.stopPropagation()}>
                    Start conversation <ArrowRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              <button
                className={`picker-drawer-toggle right ${drawer === 'settings' ? 'active' : ''}`}
                onClick={() => setDrawer(drawer === 'settings' ? null : 'settings')}
                title="Scene Settings"
              >
                <Sliders size={14} strokeWidth={2.5} />
                <span className="pdt-label">Scene Settings</span>
              </button>
            </div>

            {/* Navigation: thumbnail strip + back/next */}
            <div className="picker-nav-row">
              <button className="picker-arrow" onClick={prevScenario} aria-label="Previous scenario">
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>

              <div className="picker-thumb-strip">
                {PICKER_SCENARIOS.map((sc, i) => {
                  const Icon = sc.icon;
                  return (
                    <button
                      key={sc.id}
                      className={`picker-thumb ${i === pickerIdx ? 'active' : ''}`}
                      onClick={() => setPickerIdx(i)}
                      title={sc.title}
                    >
                      <Icon size={18} strokeWidth={2.2} />
                      <span className="pt-label">{sc.title.split(' ').slice(0, 2).join(' ')}…</span>
                    </button>
                  );
                })}
              </div>

              <button className="picker-arrow" onClick={nextScenario} aria-label="Next scenario">
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Click hint when collapsed */}
            {pickerExpand === 0 && (
              <div className="picker-click-hint">
                <Sparkles size={14} strokeWidth={2.2} />
                Click the card to reveal more — three layers of detail, each more in-depth than the last.
              </div>
            )}

            {/* Reset */}
            {pickerExpand > 0 && (
              <button className="picker-reset" onClick={() => setPickerExpand(0)}>
                Reset card
              </button>
            )}
          </div>

          <p className="placeholder-disclaimer center mt-2">
            *Demo of the picker — full Lux library has 25 scenarios with 8-second looping scenario videos.
          </p>
        </div>

        {/* SETTINGS DRAWER */}
        {drawer === 'settings' && (
          <SceneSettingsDrawer
            cefr={cefrLevel}
            onCefrChange={setCefrLevel}
            toneStacks={toneStacks}
            onToneClick={cycleTone}
            length={length}
            onLengthChange={setLength}
            onClose={() => setDrawer(null)}
            preset={PICKER_SCENARIOS[pickerIdx]}
          />
        )}

        {/* CHARACTERS DRAWER */}
        {drawer === 'characters' && (
          <CharactersDrawer
            scenario={PICKER_SCENARIOS[pickerIdx]}
            onClose={() => setDrawer(null)}
          />
        )}

        {/* BEHIND THE SCENES MODAL */}
        {behindScenesOpen && (
          <BehindScenesModal
            scenario={PICKER_SCENARIOS[pickerIdx]}
            onClose={() => setBehindScenesOpen(false)}
          />
        )}
      </section>

      {/* CV5 — INSIDE A CONVERSATION */}
      <section id="inside" className="inside-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Inside a conversation</div>
            <h2 className="section-title">What it looks like once you're talking.</h2>
            <p className="section-sub">
              Two characters, AI-generated scene imagery, narration that sets the stage, three suggested replies plus typing alternative. Scoring happens silently — you see the full report at the end.
            </p>
          </div>

          <div className="inside-frame">
            {/* Header bar */}
            <div className="inside-head">
              <div className="inside-head-title">
                <MessageCircle size={16} strokeWidth={2.2} />
                AI Conversation
              </div>
              <div className="inside-head-actions">
                <button className="ihb-btn"><BookOpen size={13} strokeWidth={2.5} /> Scenarios</button>
                <button className="ihb-btn"><Sliders size={13} strokeWidth={2.5} /> Settings</button>
                <button className="ihb-btn end"><X size={13} strokeWidth={2.5} /> End session</button>
              </div>
            </div>

            {/* Two character portraits + conversation in middle */}
            <div className="inside-body">
              {/* Left portrait — the user */}
              <div className="portrait-col">
                <div className={`portrait-frame ${recState === 'idle' ? 'active' : ''}`}>
                  <div className="portrait-img">
                    <UserCircle2 size={48} strokeWidth={1.5} />
                  </div>
                  <div className="portrait-label">You</div>
                </div>
              </div>

              {/* Center conversation */}
              <div className="convo-col">
                {/* AI-generated scene image */}
                <div className="scene-image">
                  <div className="scene-image-placeholder">
                    <div className="sip-mark">AI · Scene image</div>
                    <div className="sip-text">
                      A small Italian restaurant. Warm lighting. Wood tables, a host stand near the entrance. Miguel in a black apron stands behind it.
                    </div>
                    <div className="sip-disclaimer">Generated fresh each turn from scenario + character context.</div>
                  </div>
                </div>

                {/* Conversation turns */}
                <div className="convo-turns">
                  {DEMO_CONVERSATION.slice(0, convoStep + 1).map((turn, i) => {
                    if (turn.type === 'narration') {
                      return (
                        <div key={i} className="convo-narration">
                          <em>{turn.text}</em>
                        </div>
                      );
                    }
                    if (turn.type === 'ai') {
                      return (
                        <div key={i} className="convo-bubble ai">
                          <div className="cb-name">{turn.speaker}</div>
                          <div className="cb-text">{turn.text}</div>
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="convo-bubble user">
                        <div className="cb-text">{turn.text}</div>
                        <div className="cb-score">
                          <span className={`cb-score-num ${tierForScore(turn.score)}`}>{turn.score}</span>
                          <span className="cb-score-divider">·</span>
                          <span className="cb-score-focus">focus: {turn.focus}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Step controls (demo only — not in real Lux) */}
                <div className="convo-step-controls">
                  <button
                    className="step-btn"
                    onClick={() => setConvoStep(Math.max(0, convoStep - 1))}
                    disabled={convoStep === 0}
                  >
                    <ChevronLeft size={14} strokeWidth={2.5} /> Step back
                  </button>
                  <span className="step-label">Step {convoStep + 1} of {DEMO_CONVERSATION.length}</span>
                  <button
                    className="step-btn"
                    onClick={() => setConvoStep(Math.min(DEMO_CONVERSATION.length - 1, convoStep + 1))}
                    disabled={convoStep === DEMO_CONVERSATION.length - 1}
                  >
                    Step forward <ChevronRight size={14} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Suggested replies + record button */}
                <div className="convo-replies">
                  <div className="cr-label">Suggested replies — or tap mic and say your own</div>
                  <div className="cr-row">
                    {SUGGESTED_REPLIES.map((r, i) => (
                      <button key={i} className="cr-chip">
                        <div className="cr-chip-text">{r.text}</div>
                        <div className="cr-chip-tone">{r.tone}</div>
                      </button>
                    ))}
                  </div>
                  <div className="cr-mic-row">
                    <button
                      className={`cr-mic-btn ${recState}`}
                      onClick={() => {
                        if (recState === 'idle') {
                          setRecState('recording');
                          setTimeout(() => setRecState('sending'), 1800);
                          setTimeout(() => setRecState('idle'), 3200);
                        }
                      }}
                    >
                      {recState === 'sending'
                        ? <Loader2 size={20} strokeWidth={2.2} className="spin" />
                        : <Mic size={20} strokeWidth={2.2} />}
                    </button>
                    <div className="cr-mic-state">
                      {recState === 'idle'      && 'Tap mic to record your reply'}
                      {recState === 'recording' && (
                        <div className="cr-rec-wave">
                          <span className="recwave" />
                          <span className="recwave" />
                          <span className="recwave" />
                          <span className="recwave" />
                          Recording…
                        </div>
                      )}
                      {recState === 'sending' && 'Sending… analyzing your turn silently…'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right portrait — Miguel */}
              <div className="portrait-col">
                <div className={`portrait-frame ${recState !== 'idle' ? 'active' : ''}`}>
                  <div className="portrait-img miguel">M</div>
                  <div className="portrait-label">Miguel</div>
                </div>
              </div>
            </div>

            {/* Wrap-it-up callout */}
            <div className="wrap-up-callout">
              <Clock size={14} strokeWidth={2.2} />
              <div className="wuc-text">
                <strong>Wrap-it-up zone:</strong> as you near the natural ending of each scenario, Lux suggests closing language ("Well, good to see you" / "I better get going"). If you don't close on your own, the AI gracefully ends the conversation so you can review your scorecard.
              </div>
            </div>
          </div>

          <p className="placeholder-disclaimer center mt-2">
            *Demo conversation — your real conversations score against your unique voice and choices.
          </p>
        </div>
      </section>

      {/* CV6 — END SCORECARD */}
      <section className="scorecard-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">When the conversation ends</div>
            <h2 className="section-title">Your full scorecard, every turn measured.</h2>
            <p className="section-sub">
              Per-turn scores compile into one final report. The same scoring engine you saw on the Pronunciation Tour, applied across the whole exchange.
            </p>
          </div>

          <div className="scorecard-frame">
            <div className="sc-head">
              <div className="sc-head-left">
                <div className="sc-scenario-tag">"Welcome at the Restaurant" · Miguel</div>
                <h3 className="sc-title">Conversation complete.</h3>
                <p className="sc-sub">7 turns · 4 minutes 18 seconds · 2 closing turns suggested by Lux</p>
              </div>
              <div className="sc-overall">
                <div className="sc-coin good">89</div>
                <div className="sc-coin-lbl">overall</div>
              </div>
            </div>

            <div className="sc-pyramid">
              <div className="sc-pyramid-row">
                <div className="sc-tile good"><div className="sc-tile-num">92</div><div className="sc-tile-lbl">Accuracy</div></div>
                <div className="sc-tile good"><div className="sc-tile-num">88</div><div className="sc-tile-lbl">Fluency</div></div>
                <div className="sc-tile good"><div className="sc-tile-num">100</div><div className="sc-tile-lbl">Completeness</div></div>
                <div className="sc-tile good"><div className="sc-tile-num">90</div><div className="sc-tile-lbl">Pronunciation</div></div>
                <div className="sc-tile soon">
                  <div className="sc-tile-num">—</div>
                  <div className="sc-tile-lbl">Prosody</div>
                  <div className="sc-tile-soon-badge">SOON</div>
                </div>
              </div>
            </div>

            <div className="sc-grid">
              <div className="sc-col">
                <div className="sc-col-head">TROUBLE SOUNDS</div>
                <div className="sc-trouble-row">
                  <span className="sc-trouble-chip warn">/ð/</span>
                  <span className="sc-trouble-chip warn">/r/</span>
                  <span className="sc-trouble-chip">/v/</span>
                </div>
                <p className="sc-col-sub">Phonemes you can practice next on the Pronunciation page.</p>
              </div>
              <div className="sc-col">
                <div className="sc-col-head">TROUBLE WORDS</div>
                <div className="sc-trouble-row">
                  <span className="sc-trouble-chip warn">"sounds"</span>
                  <span className="sc-trouble-chip warn">"reservation"</span>
                </div>
                <p className="sc-col-sub">Specific words that came back below average — pinned to My Words automatically.</p>
              </div>
              <div className="sc-col">
                <div className="sc-col-head">COACH'S TAKE</div>
                <p className="sc-coach-quote">
                  <Sparkles size={12} strokeWidth={2.2} />
                  "Excellent natural rhythm — you sounded comfortable. /ð/ in <em>'sounds'</em> drifted toward /d/ — a quick drill on that single sound will carry you across hundreds of common words."
                </p>
                <a href="/welcome/coach" className="sc-coach-link">See full Coach analysis →</a>
              </div>
            </div>

            <div className="sc-actions">
              <button className="btn btn-primary">
                Try another scenario <ArrowRight size={14} strokeWidth={2.5} />
              </button>
              <button className="btn btn-ghost">
                Review the trouble sounds
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CV8 — CROSS-TOUR OUTBOUND */}
      <section className="next-tours-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Where to next</div>
            <h2 className="section-title">Three Tours connected to this one.</h2>
          </div>
          <div className="next-tours-grid three">
            <a href="/welcome/pronunciation" className="next-tour-card">
              <div className="ntc-icon"><Activity size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">PRONUNCIATION TOUR</div>
              <h3>How Lux scores conversations.</h3>
              <p>The same phoneme-level scoring engine you saw applied to passages, working silently through every turn of every dialogue.</p>
              <span className="ntc-link">See how Lux scores you <ChevronRight size={14} strokeWidth={2.5} /></span>
            </a>
            <a href="/welcome/coach" className="next-tour-card">
              <div className="ntc-icon"><Sparkles size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">COACH TOUR</div>
              <h3>How Coach reviews your conversations.</h3>
              <p>Three personalities, six analytical angles, responses in your first language. Coach analyzes the whole conversation, not just one turn.</p>
              <span className="ntc-link">See how Coach reviews you <ChevronRight size={14} strokeWidth={2.5} /></span>
            </a>
            <a href="/welcome/progress" className="next-tour-card">
              <div className="ntc-icon"><TrendingUp size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">PROGRESS TOUR</div>
              <h3>How conversation data accumulates.</h3>
              <p>Every conversation feeds the same intelligent recommendation engine. Trouble sounds from a doctor visit show up alongside trouble sounds from a Harvard list.</p>
              <span className="ntc-link">Track conversation progress <ChevronRight size={14} strokeWidth={2.5} /></span>
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

// ===== SCENE SETTINGS DRAWER =====
function SceneSettingsDrawer({ cefr, onCefrChange, toneStacks, onToneClick, length, onLengthChange, onClose, preset }) {
  return (
    <div className="picker-drawer right">
      <div className="pd-head">
        <div className="pd-title">
          <Sliders size={16} strokeWidth={2.2} />
          Scene Settings
        </div>
        <button className="pd-close" onClick={onClose}><X size={14} strokeWidth={2.5} /></button>
      </div>

      <div className="pd-section">
        <div className="pd-section-head">
          <span className="pd-section-lbl">CEFR Level</span>
          <span className="pd-preset-hint">Preset: {preset.cefr}</span>
        </div>
        <div className="pd-cefr-row">
          {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(l => (
            <button
              key={l}
              className={`pd-cefr-btn ${l === cefr ? 'active' : ''}`}
              onClick={() => onCefrChange(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="pd-section">
        <div className="pd-section-head">
          <span className="pd-section-lbl">Tone</span>
          <span className="pd-preset-hint">Max 3 · click to stack</span>
        </div>
        <div className="pd-tones">
          {TONES.map(tone => {
            const stack = toneStacks[tone] || 0;
            return (
              <button
                key={tone}
                className={`pd-tone-btn stack-${stack}`}
                onClick={() => onToneClick(tone)}
              >
                {tone}
                {stack > 0 && <span className="pd-tone-badge">{stack}</span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pd-section">
        <div className="pd-section-head">
          <span className="pd-section-lbl">Length</span>
          <span className="pd-preset-hint">Width = length</span>
        </div>
        <div className="pd-length-row">
          {LENGTHS.map(l => (
            <button
              key={l.id}
              className={`pd-length-btn ${l.id === length ? 'active' : ''}`}
              onClick={() => onLengthChange(l.id)}
              style={{ flex: l.width }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pd-disclaimer">
        <Sparkles size={12} strokeWidth={2.2} />
        <span>Each scenario has a calibrated preset based on what's natural for the situation. Override anything you want.</span>
      </div>
    </div>
  );
}

// ===== CHARACTERS DRAWER =====
function CharactersDrawer({ scenario, onClose }) {
  const [expanded, setExpanded] = useState(null); // role index

  const characters = [
    {
      role: scenario.role,
      title: scenario.role.charAt(0).toUpperCase() + scenario.role.slice(1),
      brief: getBriefForRole(scenario.id, scenario.role),
      personality: getPersonalityForRole(scenario.id, scenario.role),
      backstory: getBackstoryForRole(scenario.id, scenario.role),
      isUser: true,
    },
    {
      role: getOtherRole(scenario.id),
      title: getOtherRoleTitle(scenario.id),
      brief: getBriefForOtherRole(scenario.id),
      personality: getPersonalityForOtherRole(scenario.id),
      backstory: getBackstoryForOtherRole(scenario.id),
      isUser: false,
    },
  ];

  return (
    <div className="picker-drawer left">
      <div className="pd-head">
        <div className="pd-title">
          <Users size={16} strokeWidth={2.2} />
          Characters
        </div>
        <button className="pd-close" onClick={onClose}><X size={14} strokeWidth={2.5} /></button>
      </div>

      {characters.map((c, i) => (
        <div key={i} className={`pd-character ${c.isUser ? 'is-user' : ''}`}>
          <div className="pd-char-head">
            <div className="pd-char-portrait">{c.title.charAt(0)}</div>
            <div className="pd-char-meta">
              <div className="pd-char-role">
                {c.title}
                {c.isUser && <span className="pd-char-you-tag">YOU</span>}
              </div>
              <div className="pd-char-brief">{c.brief}</div>
            </div>
          </div>

          <button
            className="pd-char-expand-btn"
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            {expanded === i ? '▼ Hide details' : '▶ More about ' + c.title.toLowerCase()}
          </button>

          {expanded === i && (
            <div className="pd-char-details">
              <p className="pd-char-personality">{c.personality}</p>
              <hr className="pd-char-hr" />
              <p className="pd-char-backstory">{c.backstory}</p>
            </div>
          )}
        </div>
      ))}

      <div className="pd-disclaimer">
        <Sparkles size={12} strokeWidth={2.2} />
        <span>Characters have additional layers of detail beneath what's shown — used by Lux's AI image generator to keep scene visuals accurate.</span>
      </div>
    </div>
  );
}

// ===== BEHIND THE SCENES MODAL =====
function BehindScenesModal({ scenario, onClose }) {
  return (
    <div className="bs-overlay" onClick={onClose}>
      <div className="bs-modal" onClick={(e) => e.stopPropagation()}>
        <button className="bs-close" onClick={onClose}><X size={16} strokeWidth={2.5} /></button>
        <div className="bs-tag">BEHIND THE SCENES</div>
        <h3 className="bs-title">{scenario.title}</h3>
        <p className="bs-body">{scenario.behindScenes}</p>
        <div className="bs-disclaimer">
          <Sparkles size={12} strokeWidth={2.2} />
          <span>Each scenario has a 4-paragraph literary description. As the layers expand, language complexity escalates — not just length.</span>
        </div>
      </div>
    </div>
  );
}

// ===== Helper functions for character data =====
function getBriefForRole(scenId, role) {
  const map = {
    'misunderstanding-passenger': 'A traveler trying to get somewhere new on a city bus.',
    'video-call-remote colleague': 'A senior team member running the weekly check-in.',
    'cafe-order-customer': 'A morning regular with a quick decision to make.',
    'doctor-visit-patient': 'Someone with a recurring symptom and 10 minutes to describe it.',
  };
  return map[`${scenId}-${role}`] || 'Your character in this scenario.';
}

function getPersonalityForRole(scenId, role) {
  const map = {
    'misunderstanding-passenger': 'New to this part of town. Polite. Used to asking for help in their native language but less confident in English. Wants to be quick.',
    'video-call-remote colleague': 'Experienced and structured, runs the call with a light hand and keeps things on track.',
    'cafe-order-customer': 'A regular who knows what they want but is still learning to order it cleanly under pressure.',
    'doctor-visit-patient': 'Worried but not panicked. Wants to be heard. Trying to find the right words for an unfamiliar context.',
  };
  return map[`${scenId}-${role}`] || 'A character in this scenario.';
}

function getBackstoryForRole(scenId, role) {
  const map = {
    'misunderstanding-passenger': 'Just moved to the city six weeks ago. Has been to this part of town once before but got lost both times. Reads English better than they speak it. Practiced the question on the way to the stop, but the moment they stepped on the bus, the words slipped.',
    'video-call-remote colleague': 'She\'s been in enough video calls to know they need a steady hand, and she provides it without making anyone feel managed. She starts every meeting with a quick check-in, then straight to business, and ends them the same way: "Let me confirm next steps." Her notes are better than the recording.',
    'cafe-order-customer': 'Stops here three mornings a week before work. Ordered the same thing for two months before getting brave enough to try something new. Today is one of those days — they want to ask about the special.',
    'doctor-visit-patient': 'Has been having the same intermittent symptom for two weeks. Booked the appointment after googling enough to scare themselves but not enough to know what it actually is. Wrote down keywords on their phone in case they freeze.',
  };
  return map[`${scenId}-${role}`] || '';
}

function getOtherRole(scenId) {
  const map = {
    'misunderstanding': 'driver',
    'video-call': 'presenter',
    'cafe-order': 'barista',
    'doctor-visit': 'doctor',
  };
  return map[scenId] || 'partner';
}

function getOtherRoleTitle(scenId) {
  const map = {
    'misunderstanding': 'Bus Driver',
    'video-call': 'Presenter',
    'cafe-order': 'Barista',
    'doctor-visit': 'Doctor',
  };
  return map[scenId] || 'Conversation partner';
}

function getBriefForOtherRole(scenId) {
  const map = {
    'misunderstanding': 'A driver focused on the route, talking toward the windshield.',
    'video-call': 'A junior colleague in her 20s with a lot to report.',
    'cafe-order': 'A barista in her 30s with six drinks in queue.',
    'doctor-visit': 'A general practitioner in her 50s who has been doing this 25 years.',
  };
  return map[scenId] || '';
}

function getPersonalityForOtherRole(scenId) {
  const map = {
    'misunderstanding': 'Patient but moving fast. Speaks in short sentences. Doesn\'t always look at the passenger when answering.',
    'video-call': 'Prepared and enthusiastic. Has a lot to share, and sometimes talks past the natural stopping point.',
    'cafe-order': 'Fast hands, well-practiced smile that drops the moment she\'s focused on a drink. Patient with first-timers, fast with regulars.',
    'doctor-visit': 'Calm. Listens like it\'s the first time she\'s heard your problem. Has 10 minutes scheduled with you, will use most of it to listen if you use yours to talk.',
  };
  return map[scenId] || '';
}

function getBackstoryForOtherRole(scenId) {
  const map = {
    'misunderstanding': 'Twenty-three years on this route. Knows every stop by feel. Three more stops till his break. He\'ll answer twice if you ask twice. He\'ll point with his left hand without taking his right off the wheel.',
    'video-call': 'She\'s been heads-down on three projects all week and has a screen full of tabs ready to share. Her enthusiasm sometimes runs ahead of her. She\'ll talk for four minutes on one update before realizing she hasn\'t checked if anyone\'s still following. She\'s learning that a good presentation isn\'t about covering everything, it\'s about knowing when to pause.',
    'cafe-order': 'Came here as a barista five years ago because she liked coffee. Now she manages the morning shift. Knows the regulars by drink, not by name, and that\'s how everyone prefers it.',
    'doctor-visit': 'Practices in a small clinic in a residential neighborhood. Could have gone into something specialized but liked the pace and the variety. Believes most diagnoses come from listening, not testing.',
  };
  return map[scenId] || '';
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
body, .lux-cv {
  font-family: 'Montserrat', system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.lux-cv { min-height: 100vh; }
.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
}
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
.section-sub { font-size: 1.1rem; line-height: 1.55; color: var(--ink-soft); max-width: 760px; margin: 0 auto; font-weight: 500; }

/* === MODES === */
.modes-section { padding: var(--sect-pad-y) 0; background: var(--bg); }
.modes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
@media (max-width: 1100px) { .modes-grid { grid-template-columns: 1fr; } }
.mode-card { background: #fff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2.25rem 2rem; display: flex; flex-direction: column; gap: 1rem; transition: all 280ms var(--ease-drawer); position: relative; }
.mode-card:hover { transform: translateY(-4px); border-color: var(--brand); box-shadow: 0 20px 50px rgba(0,120,215,0.1); }
.mode-status { display: flex; align-items: center; gap: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.14em; }
.mode-status-dot { width: 8px; height: 8px; border-radius: 50%; }
.mode-status-dot.good { background: var(--score-good); }
.mode-status-dot.warn { background: var(--gold); animation: pulseDot 2s ease-in-out infinite; }
.mode-status-dot.soon { background: var(--brand); }
@keyframes pulseDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.mode-status-lbl { color: var(--ink-soft); }
.mode-production .mode-status-lbl { color: var(--score-good); }
.mode-partial .mode-status-lbl { color: var(--gold); }
.mode-coming-soon .mode-status-lbl { color: var(--brand); }
.mode-icon { width: 56px; height: 56px; border-radius: 14px; background: var(--score-good-bg); color: var(--brand); display: flex; align-items: center; justify-content: center; }
.mode-icon.partial { background: var(--score-warn-bg); color: var(--gold); }
.mode-icon.soon { background: linear-gradient(135deg, var(--brand) 0%, #1A8AE0 100%); color: #fff; box-shadow: 0 6px 18px rgba(0,120,215,0.25); }
.mode-title { font-weight: 800; font-size: 1.85rem; letter-spacing: -0.025em; line-height: 1.1; }
.mode-tag { display: inline-block; padding: 0.25rem 0.6rem; background: var(--slate-100); color: var(--ink-soft); font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em; border-radius: 5px; align-self: flex-start; }
.mode-body { font-size: 1rem; line-height: 1.6; color: var(--ink-soft); font-weight: 500; }
.mode-body strong { color: var(--ink); font-weight: 800; }
.mode-meta { display: flex; flex-wrap: wrap; gap: 0.45rem; }
.mode-meta-chip { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.3rem 0.6rem; background: var(--slate-50); color: var(--ink-soft); font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 700; border-radius: 5px; letter-spacing: 0.02em; }
.mode-meta-chip.soon { background: var(--score-good-bg); color: var(--brand); }
.mode-honesty { display: flex; align-items: flex-start; gap: 0.5rem; padding: 0.85rem 1rem; background: var(--score-warn-bg); border: 1px solid #FCD34D; border-radius: 8px; font-size: 0.85rem; color: var(--ink-medium); font-style: italic; line-height: 1.45; }
.mode-honesty svg { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
.mode-soon-pitch { font-style: italic; font-size: 0.95rem; color: var(--ink-medium); padding: 0.85rem 1rem; background: var(--score-good-bg); border-left: 3px solid var(--brand); border-radius: 4px; line-height: 1.5; }

/* === PICKER === */
.picker-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--slate-50) 0%, var(--bg) 100%); }
.picker-frame { background: #fff; border: 1px solid var(--line); border-radius: 24px; padding: 2.5rem 2rem; box-shadow: 0 24px 60px rgba(15,23,42,0.08); position: relative; }
.picker-settings-bubble { display: inline-flex; align-items: center; gap: 0.35rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; padding: 0.45rem 1rem; background: var(--ink); color: #fff; border-radius: 999px; margin: 0 auto 2rem; position: relative; left: 50%; transform: translateX(-50%); letter-spacing: 0.02em; }
.psb-cefr { color: var(--brand); font-weight: 800; }
.psb-divider { color: var(--ink-faint); }
.psb-tone { color: #fff; }
.psb-length { color: var(--gold); }

.picker-stage { display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: center; min-height: 420px; }
@media (max-width: 880px) { .picker-stage { grid-template-columns: 1fr; gap: 0.85rem; } }

.picker-drawer-toggle { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.4rem; width: 56px; padding: 1.5rem 0.5rem; background: var(--slate-50); border: 1px solid var(--line); border-radius: 14px; cursor: pointer; transition: all 220ms var(--ease-drawer); color: var(--ink-soft); }
.picker-drawer-toggle:hover { background: var(--brand); color: #fff; border-color: var(--brand); }
.picker-drawer-toggle.active { background: var(--ink); color: #fff; border-color: var(--ink); }
.pdt-label { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 700; writing-mode: vertical-rl; transform: rotate(180deg); letter-spacing: 0.08em; text-transform: uppercase; }
@media (max-width: 880px) {
  .picker-drawer-toggle { width: 100%; flex-direction: row; padding: 0.85rem; }
  .pdt-label { writing-mode: horizontal-tb; transform: none; }
}

.picker-cards { position: relative; perspective: 2000px; min-height: 420px; }
.picker-card-behind { position: absolute; top: 12px; left: 30px; right: 30px; height: 380px; background: var(--slate-100); border: 1px solid var(--line); border-radius: 18px; opacity: 0.45; transform: scale(0.94) translateY(8px); filter: blur(2px); display: flex; align-items: center; justify-content: center; pointer-events: none; }
.pcb-video-placeholder { color: var(--ink-faint); }

.picker-card-main { position: relative; background: #fff; border: 1.5px solid var(--line); border-radius: 18px; overflow: hidden; cursor: pointer; transition: all 380ms var(--ease-drawer); box-shadow: 0 12px 36px rgba(15,23,42,0.08); display: flex; flex-direction: column; }
.picker-card-main:hover { border-color: var(--brand); transform: translateY(-2px); box-shadow: 0 20px 50px rgba(0,120,215,0.12); }
.picker-card-main.expand-1 { box-shadow: 0 16px 44px rgba(15,23,42,0.1); }
.picker-card-main.expand-2 { box-shadow: 0 24px 60px rgba(15,23,42,0.12); border-color: var(--brand); }

.pcm-video { position: relative; aspect-ratio: 16/9; background: linear-gradient(135deg, var(--ink) 0%, #1A1D2E 100%); display: flex; align-items: center; justify-content: center; overflow: hidden; }
.pcm-video-placeholder { display: flex; flex-direction: column; align-items: center; gap: 1rem; color: rgba(255,255,255,0.45); }
.pcm-video-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.55); }
.pcm-title-overlay { position: absolute; left: 1.5rem; bottom: 1.5rem; padding: 0.65rem 1.1rem; background: rgba(255,255,255,0.94); backdrop-filter: blur(8px); border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
.pcm-title { font-weight: 800; font-size: 1.35rem; letter-spacing: -0.02em; color: var(--ink); }

.pcm-summary { padding: 1.5rem 1.75rem; background: var(--slate-50); border-top: 1px solid var(--line); animation: slideDown 350ms var(--ease-drawer); }
@keyframes slideDown { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 300px; } }
.pcm-summary p { font-size: 1.1rem; line-height: 1.55; color: var(--ink); font-weight: 500; font-style: italic; }
.pcm-more-hint { display: block; margin-top: 0.85rem; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--brand); letter-spacing: 0.04em; }

.pcm-bullets { padding: 1.5rem 1.75rem; background: #fff; display: flex; flex-direction: column; gap: 1rem; animation: slideDown 400ms var(--ease-drawer); border-top: 1px dashed var(--line); }
.pcm-bullet { display: grid; grid-template-columns: 110px 1fr; gap: 1rem; align-items: start; }
@media (max-width: 600px) { .pcm-bullet { grid-template-columns: 1fr; gap: 0.3rem; } }
.pcm-bullet-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.12em; color: var(--brand); text-transform: uppercase; padding-top: 2px; }
.pcm-bullet-text { font-size: 0.95rem; line-height: 1.5; color: var(--ink-soft); font-weight: 500; }
.pcm-behind-link { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.7rem 1rem; background: var(--score-good-bg); border: 1px dashed var(--brand); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--brand); cursor: pointer; align-self: flex-start; transition: all 200ms; letter-spacing: 0.02em; }
.pcm-behind-link:hover { background: var(--brand); color: #fff; border-style: solid; }

.pcm-start-btn { margin: 1.5rem 1.75rem 1.5rem; padding: 0.85rem 1.25rem; background: var(--brand); color: #fff; border: none; border-radius: 999px; font-family: 'Montserrat'; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 0.45rem; transition: all 220ms var(--ease-drawer); align-self: stretch; box-shadow: 0 6px 18px rgba(0,120,215,0.25); }
.pcm-start-btn:hover { background: var(--brand-hover); transform: translateY(-1px); gap: 0.6rem; box-shadow: 0 10px 28px rgba(0,120,215,0.35); }

/* Picker nav */
.picker-nav-row { display: flex; align-items: center; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--line); }
.picker-arrow { width: 40px; height: 40px; border-radius: 50%; background: #fff; border: 1.5px solid var(--line); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ink-soft); transition: all 200ms; }
.picker-arrow:hover { background: var(--ink); color: #fff; border-color: var(--ink); }
.picker-thumb-strip { flex: 1; display: flex; gap: 0.5rem; overflow-x: auto; padding: 0.25rem; }
.picker-thumb { display: flex; align-items: center; gap: 0.45rem; padding: 0.55rem 0.85rem; background: var(--slate-50); border: 1.5px solid var(--line); border-radius: 10px; cursor: pointer; transition: all 200ms; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--ink-soft); flex-shrink: 0; letter-spacing: 0.02em; }
.picker-thumb:hover { border-color: var(--brand); color: var(--brand); }
.picker-thumb.active { background: var(--ink); color: var(--brand); border-color: var(--ink); }
.pt-label { white-space: nowrap; }

.picker-click-hint { display: flex; align-items: center; justify-content: center; gap: 0.55rem; margin-top: 1.5rem; padding: 0.85rem 1.25rem; background: var(--score-good-bg); border-radius: 10px; font-size: 0.92rem; color: var(--brand); font-weight: 600; }
.picker-reset { display: inline-flex; align-items: center; margin-top: 1.5rem; padding: 0.55rem 1rem; background: transparent; border: 1px solid var(--line); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; letter-spacing: 0.02em; transition: all 200ms; }
.picker-reset:hover { background: var(--ink); color: #fff; border-color: var(--ink); }

/* === PICKER DRAWERS === */
.picker-drawer { position: fixed; top: 0; bottom: 0; width: 380px; max-width: 92vw; background: #fff; border-left: 1px solid var(--line); box-shadow: -24px 0 60px rgba(15,23,42,0.18); z-index: 200; padding: 1.75rem 1.5rem; overflow-y: auto; animation: drawerSlide 380ms var(--ease-panel); display: flex; flex-direction: column; gap: 1.5rem; }
.picker-drawer.right { right: 0; }
.picker-drawer.left { left: 0; border-left: none; border-right: 1px solid var(--line); box-shadow: 24px 0 60px rgba(15,23,42,0.18); animation: drawerSlideLeft 380ms var(--ease-panel); }
@keyframes drawerSlide { from { transform: translateX(100%); } to { transform: translateX(0); } }
@keyframes drawerSlideLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }

.pd-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid var(--line); }
.pd-title { display: inline-flex; align-items: center; gap: 0.55rem; font-weight: 800; font-size: 1.1rem; }
.pd-close { width: 28px; height: 28px; border-radius: 50%; background: var(--slate-100); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ink-soft); transition: all 200ms; }
.pd-close:hover { background: var(--ink); color: #fff; }

.pd-section { display: flex; flex-direction: column; gap: 0.85rem; }
.pd-section-head { display: flex; justify-content: space-between; align-items: baseline; }
.pd-section-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.12em; color: var(--ink); text-transform: uppercase; }
.pd-preset-hint { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--ink-faint); font-weight: 600; letter-spacing: 0.02em; }

.pd-cefr-row { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.pd-cefr-btn { padding: 0.55rem 0.9rem; background: var(--slate-50); border: 1.5px solid var(--line); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-weight: 800; font-size: 0.85rem; cursor: pointer; color: var(--ink-soft); transition: all 200ms; }
.pd-cefr-btn:hover { border-color: var(--brand); color: var(--brand); }
.pd-cefr-btn.active { background: var(--ink); color: var(--brand); border-color: var(--ink); }

.pd-tones { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.pd-tone-btn { position: relative; padding: 0.4rem 0.75rem; background: var(--slate-50); border: 1.5px solid var(--line); border-radius: 999px; font-size: 0.85rem; font-weight: 600; color: var(--ink-soft); cursor: pointer; transition: all 220ms var(--ease-drawer); }
.pd-tone-btn:hover { border-color: var(--brand); color: var(--brand); }
.pd-tone-btn.stack-1 { background: #DBEAFE; color: var(--brand); border-color: var(--brand); padding: 0.45rem 0.85rem; font-size: 0.88rem; }
.pd-tone-btn.stack-2 { background: var(--brand); color: #fff; border-color: var(--brand); padding: 0.5rem 0.95rem; font-size: 0.92rem; font-weight: 700; }
.pd-tone-btn.stack-3 { background: var(--ink); color: #fff; border-color: var(--ink); padding: 0.55rem 1.05rem; font-size: 0.96rem; font-weight: 800; }
.pd-tone-badge { position: absolute; top: -7px; right: -7px; width: 20px; height: 20px; border-radius: 50%; background: var(--gold); color: var(--ink); font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }

.pd-length-row { display: flex; gap: 0.3rem; align-items: stretch; }
.pd-length-btn { padding: 0.45rem 0.6rem; background: var(--slate-50); border: 1.5px solid var(--line); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; transition: all 200ms; white-space: nowrap; }
.pd-length-btn:hover { border-color: var(--brand); color: var(--brand); }
.pd-length-btn.active { background: var(--ink); color: var(--gold); border-color: var(--ink); }

.pd-disclaimer { display: flex; align-items: flex-start; gap: 0.5rem; padding: 0.85rem 1rem; background: var(--score-good-bg); border-radius: 8px; font-size: 0.82rem; color: var(--ink-soft); font-style: italic; line-height: 1.45; margin-top: auto; }
.pd-disclaimer svg { color: var(--brand); flex-shrink: 0; margin-top: 2px; }

/* Characters drawer */
.pd-character { background: var(--slate-50); border: 1px solid var(--line); border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.85rem; }
.pd-character.is-user { background: var(--score-good-bg); border-color: var(--brand); }
.pd-char-head { display: flex; align-items: center; gap: 0.85rem; }
.pd-char-portrait { width: 44px; height: 44px; border-radius: 50%; background: var(--ink); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.15rem; flex-shrink: 0; }
.is-user .pd-char-portrait { background: var(--brand); }
.pd-char-meta { flex: 1; }
.pd-char-role { font-weight: 800; font-size: 1.05rem; letter-spacing: -0.01em; color: var(--ink); display: flex; align-items: center; gap: 0.5rem; }
.pd-char-you-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; padding: 0.15rem 0.4rem; background: var(--brand); color: #fff; border-radius: 4px; letter-spacing: 0.08em; }
.pd-char-brief { font-size: 0.85rem; color: var(--ink-medium); margin-top: 0.2rem; line-height: 1.4; }
.pd-char-expand-btn { background: transparent; border: none; padding: 0; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--brand); cursor: pointer; text-align: left; letter-spacing: 0.02em; }
.pd-char-details { padding-top: 0.85rem; border-top: 1px dashed var(--line); display: flex; flex-direction: column; gap: 0.85rem; }
.pd-char-personality { font-size: 0.92rem; line-height: 1.5; color: var(--ink-soft); font-weight: 600; }
.pd-char-hr { border: none; border-top: 1px dashed var(--line); margin: 0; }
.pd-char-backstory { font-size: 0.88rem; line-height: 1.55; color: var(--ink-medium); font-style: italic; font-weight: 500; }

/* BEHIND THE SCENES MODAL */
.bs-overlay { position: fixed; inset: 0; background: rgba(8,8,14,0.65); backdrop-filter: blur(6px); z-index: 300; display: flex; align-items: center; justify-content: center; padding: 2rem; animation: fadeIn 250ms ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.bs-modal { background: #fff; border-radius: 20px; padding: 3rem 2.5rem; max-width: 720px; width: 100%; max-height: 85vh; overflow-y: auto; position: relative; box-shadow: 0 32px 80px rgba(0,0,0,0.4); animation: scaleIn 350ms var(--ease-pop); }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
.bs-close { position: absolute; top: 1.25rem; right: 1.25rem; width: 32px; height: 32px; border-radius: 50%; background: var(--slate-100); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ink-soft); transition: all 200ms; }
.bs-close:hover { background: var(--ink); color: #fff; }
.bs-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.18em; color: var(--brand); margin-bottom: 0.85rem; }
.bs-title { font-weight: 800; font-size: 2rem; letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 1.5rem; }
.bs-body { font-size: 1.05rem; line-height: 1.7; color: var(--ink-soft); font-weight: 500; margin-bottom: 1.75rem; }
.bs-disclaimer { display: flex; align-items: flex-start; gap: 0.55rem; padding: 1rem 1.25rem; background: var(--score-good-bg); border-radius: 10px; font-size: 0.88rem; color: var(--ink-soft); font-style: italic; line-height: 1.5; }
.bs-disclaimer svg { color: var(--brand); flex-shrink: 0; margin-top: 2px; }

/* === INSIDE A CONVERSATION === */
.inside-section { padding: var(--sect-pad-y) 0; background: var(--bg); border-top: 1px solid var(--line); }
.inside-frame { background: #fff; border: 1px solid var(--line); border-radius: 20px; overflow: hidden; box-shadow: 0 24px 60px rgba(15,23,42,0.08); }
.inside-head { padding: 1rem 1.5rem; background: var(--slate-50); border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; }
.inside-head-title { display: inline-flex; align-items: center; gap: 0.55rem; font-weight: 800; color: var(--ink); }
.inside-head-actions { display: flex; gap: 0.45rem; }
.ihb-btn { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.4rem 0.75rem; background: #fff; border: 1px solid var(--line); border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; letter-spacing: 0.02em; transition: all 200ms; }
.ihb-btn:hover { background: var(--ink); color: #fff; border-color: var(--ink); }
.ihb-btn.end { color: var(--score-bad); border-color: #FECACA; }
.ihb-btn.end:hover { background: var(--score-bad); color: #fff; border-color: var(--score-bad); }

.inside-body { display: grid; grid-template-columns: 100px 1fr 100px; gap: 1.5rem; padding: 2rem 1.5rem; align-items: flex-start; }
@media (max-width: 880px) { .inside-body { grid-template-columns: 1fr; gap: 1rem; padding: 1.5rem 1rem; } .portrait-col { display: flex; gap: 1rem; justify-content: center; } }

.portrait-col { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.portrait-frame { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 0.85rem; background: var(--slate-50); border: 2px solid transparent; border-radius: 16px; transition: all 280ms var(--ease-drawer); position: relative; }
.portrait-frame.active { border-color: var(--brand); background: var(--score-good-bg); animation: portraitPulse 2.4s ease-in-out infinite; }
@keyframes portraitPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(0,120,215,0.4); } 50% { box-shadow: 0 0 0 12px rgba(0,120,215,0); } }
.portrait-img { width: 64px; height: 64px; border-radius: 50%; background: var(--ink); color: #fff; display: flex; align-items: center; justify-content: center; }
.portrait-img.miguel { background: linear-gradient(135deg, #8B5A2B 0%, #C8965A 100%); font-weight: 800; font-size: 1.5rem; }
.portrait-label { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--ink-soft); letter-spacing: 0.04em; }

.convo-col { display: flex; flex-direction: column; gap: 1.25rem; min-width: 0; }
.scene-image { background: linear-gradient(135deg, #FAF6E8 0%, #E8DDC8 100%); border: 1px solid var(--line); border-radius: 14px; padding: 1.5rem; aspect-ratio: 16/8; display: flex; align-items: center; justify-content: center; position: relative; }
.scene-image-placeholder { display: flex; flex-direction: column; gap: 0.6rem; max-width: 90%; }
.sip-mark { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.14em; color: #8B5A2B; text-transform: uppercase; }
.sip-text { font-size: 0.92rem; line-height: 1.5; color: var(--ink); font-weight: 500; font-style: italic; }
.sip-disclaimer { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: var(--ink-faint); font-weight: 500; letter-spacing: 0.02em; }

.convo-turns { display: flex; flex-direction: column; gap: 0.85rem; padding: 0.5rem 0; }
.convo-narration { padding: 0 1rem; font-size: 0.88rem; color: var(--ink-faint); font-style: italic; line-height: 1.5; text-align: center; }
.convo-bubble { padding: 0.85rem 1.1rem; border-radius: 14px; max-width: 78%; }
.convo-bubble.ai { background: var(--slate-100); align-self: flex-start; border-bottom-left-radius: 4px; }
.convo-bubble.user { background: var(--brand); color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }
.cb-name { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.06em; color: #8B5A2B; margin-bottom: 0.2rem; }
.cb-text { font-size: 0.95rem; line-height: 1.5; }
.cb-score { display: flex; align-items: center; gap: 0.35rem; margin-top: 0.45rem; padding-top: 0.45rem; border-top: 1px solid rgba(255,255,255,0.25); font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 700; color: rgba(255,255,255,0.85); letter-spacing: 0.02em; }
.cb-score-num { padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 800; }
.cb-score-num.good { background: rgba(255,255,255,0.25); color: #fff; }
.cb-score-num.warn { background: var(--gold); color: var(--ink); }
.cb-score-divider { opacity: 0.5; }

.convo-step-controls { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.85rem 1.1rem; background: var(--slate-50); border-radius: 10px; }
.step-btn { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.45rem 0.75rem; background: #fff; border: 1px solid var(--line); border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; transition: all 200ms; letter-spacing: 0.02em; }
.step-btn:hover:not(:disabled) { background: var(--ink); color: #fff; border-color: var(--ink); }
.step-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.step-label { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--ink-faint); letter-spacing: 0.04em; }

.convo-replies { padding: 1.25rem; background: var(--slate-50); border-radius: 14px; display: flex; flex-direction: column; gap: 1rem; }
.cr-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em; color: var(--ink-soft); text-transform: uppercase; }
.cr-row { display: flex; gap: 0.55rem; flex-wrap: wrap; }
.cr-chip { flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 0.3rem; padding: 0.85rem 1rem; background: #fff; border: 1.5px solid var(--line); border-radius: 10px; cursor: pointer; transition: all 220ms var(--ease-drawer); text-align: left; }
.cr-chip:hover { border-color: var(--brand); transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,120,215,0.12); }
.cr-chip-text { font-size: 0.88rem; color: var(--ink); font-weight: 600; line-height: 1.35; }
.cr-chip-tone { font-family: 'JetBrains Mono', monospace; font-size: 0.66rem; font-weight: 700; color: var(--ink-faint); letter-spacing: 0.04em; text-transform: uppercase; }
.cr-mic-row { display: flex; align-items: center; gap: 1rem; }
.cr-mic-btn { width: 56px; height: 56px; border-radius: 50%; background: var(--ink); color: #fff; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 280ms var(--ease-drawer); flex-shrink: 0; box-shadow: 0 6px 18px rgba(15,23,42,0.18); }
.cr-mic-btn:hover { background: var(--brand); transform: scale(1.05); }
.cr-mic-btn.recording { background: var(--gold); animation: micRec 1.4s ease-in-out infinite; }
@keyframes micRec { 0%, 100% { box-shadow: 0 6px 18px rgba(234,179,8,0.4); } 50% { box-shadow: 0 6px 28px rgba(234,179,8,0.7); } }
.cr-mic-btn.sending { background: var(--brand); }
.cr-mic-state { font-size: 0.92rem; color: var(--ink-soft); font-weight: 500; }
.cr-rec-wave { display: inline-flex; align-items: center; gap: 0.3rem; }
.recwave { width: 3px; height: 18px; background: var(--gold); border-radius: 2px; animation: wave 1s ease-in-out infinite; }
.recwave:nth-child(2) { animation-delay: 0.15s; }
.recwave:nth-child(3) { animation-delay: 0.3s; }
.recwave:nth-child(4) { animation-delay: 0.45s; }
@keyframes wave { 0%, 100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
.spin { animation: rotate 1s linear infinite; }
@keyframes rotate { to { transform: rotate(360deg); } }

.wrap-up-callout { margin: 1rem 1.5rem 1.5rem; padding: 1rem 1.25rem; background: linear-gradient(90deg, var(--score-warn-bg) 0%, #FFF7E5 100%); border: 1px solid #FCD34D; border-radius: 12px; display: flex; align-items: flex-start; gap: 0.75rem; }
.wrap-up-callout svg { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
.wuc-text { font-size: 0.9rem; line-height: 1.5; color: var(--ink-soft); font-weight: 500; }
.wuc-text strong { color: var(--ink); font-weight: 800; }

/* === SCORECARD === */
.scorecard-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--bg) 0%, var(--slate-50) 50%, var(--bg) 100%); }
.scorecard-frame { background: #fff; border: 1.5px solid var(--brand); border-radius: 20px; overflow: hidden; box-shadow: 0 24px 60px rgba(0,120,215,0.12); padding: 2.5rem 2rem; }
.sc-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 2rem; padding-bottom: 1.75rem; border-bottom: 1px solid var(--line); }
.sc-head-left { flex: 1; }
.sc-scenario-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.04em; color: var(--brand); margin-bottom: 0.85rem; padding: 0.3rem 0.65rem; background: var(--score-good-bg); border-radius: 5px; display: inline-block; }
.sc-title { font-weight: 800; font-size: 2rem; letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 0.5rem; }
.sc-sub { font-size: 0.95rem; color: var(--ink-medium); font-weight: 500; }
.sc-overall { text-align: center; }
.sc-coin { width: 88px; height: 88px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.85rem; border: 3.5px solid; }
.sc-coin.good { color: var(--score-good); border-color: var(--score-good); }
.sc-coin-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em; color: var(--ink-faint); text-transform: uppercase; margin-top: 0.55rem; }

.sc-pyramid { padding: 1.75rem 0; border-bottom: 1px solid var(--line); }
.sc-pyramid-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; }
@media (max-width: 880px) { .sc-pyramid-row { grid-template-columns: repeat(2, 1fr); } }
.sc-tile { padding: 1rem; text-align: center; background: #fff; border: 1.5px solid; border-radius: 12px; position: relative; }
.sc-tile.good { border-color: var(--score-good); background: var(--score-good-bg); }
.sc-tile.soon { border-color: var(--brand); border-style: dashed; background: var(--score-good-bg); opacity: 0.85; }
.sc-tile-num { font-weight: 800; font-size: 1.65rem; line-height: 1.1; }
.sc-tile.good .sc-tile-num { color: var(--score-good); }
.sc-tile.soon .sc-tile-num { color: var(--brand); }
.sc-tile-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.08em; color: var(--ink-soft); text-transform: uppercase; margin-top: 0.35rem; }
.sc-tile-soon-badge { position: absolute; top: -8px; right: -6px; padding: 0.15rem 0.4rem; background: var(--brand); color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 800; border-radius: 4px; letter-spacing: 0.08em; }

.sc-grid { display: grid; grid-template-columns: 1fr 1fr 1.4fr; gap: 1.5rem; padding: 1.75rem 0; border-bottom: 1px solid var(--line); }
@media (max-width: 880px) { .sc-grid { grid-template-columns: 1fr; } }
.sc-col-head { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.14em; color: var(--brand); text-transform: uppercase; margin-bottom: 0.85rem; }
.sc-trouble-row { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.85rem; }
.sc-trouble-chip { padding: 0.35rem 0.65rem; background: var(--slate-50); border: 1px solid var(--line); border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--ink-soft); }
.sc-trouble-chip.warn { background: var(--score-warn-bg); color: var(--score-warn); border-color: #FCD34D; }
.sc-col-sub { font-size: 0.83rem; color: var(--ink-medium); font-weight: 500; line-height: 1.45; }
.sc-coach-quote { display: flex; align-items: flex-start; gap: 0.45rem; font-size: 0.92rem; line-height: 1.55; color: var(--ink-soft); font-weight: 500; padding: 0.85rem 1rem; background: var(--slate-50); border-left: 3px solid var(--brand); border-radius: 4px; font-style: italic; margin-bottom: 0.85rem; }
.sc-coach-quote svg { color: var(--brand); flex-shrink: 0; margin-top: 2px; }
.sc-coach-quote em { font-weight: 700; font-style: italic; color: var(--ink); }
.sc-coach-link { display: inline-flex; align-items: center; gap: 0.35rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--brand); text-decoration: none; letter-spacing: 0.02em; }
.sc-coach-link:hover { text-decoration: underline; }

.sc-actions { display: flex; gap: 0.75rem; padding-top: 1.5rem; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.85rem 1.25rem; border-radius: 999px; font-family: 'Montserrat'; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 220ms var(--ease-drawer); border: 1.5px solid; }
.btn-primary { background: var(--brand); color: #fff; border-color: var(--brand); }
.btn-primary:hover { background: var(--brand-hover); transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0,120,215,0.3); gap: 0.6rem; }
.btn-ghost { background: transparent; color: var(--ink); border-color: var(--line); }
.btn-ghost:hover { background: var(--ink); color: #fff; border-color: var(--ink); }

/* === NEXT TOURS === */
.next-tours-section { padding: var(--sect-pad-y) 0; background: var(--bg); border-top: 1px solid var(--line); }
.next-tours-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.next-tours-grid.three { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 1100px) { .next-tours-grid.three { grid-template-columns: 1fr; } }
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
