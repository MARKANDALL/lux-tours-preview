// /welcome/voice — The Voice Tour
// Phase 5 of the Lux onboarding multi-page architecture.
// Maps to Sections B (self-playback), C (TTS + voice cloning), and the Master Modal Card
// Per MULTI_PAGE_ARCHITECTURE.md Section 7.

import { useState, useEffect, useRef } from 'react';
import {
  Mic, Sparkles, Volume2, VolumeX, TrendingUp, ChevronRight, ChevronLeft,
  Play, Pause, RotateCw, Activity, MessageCircle,
  ArrowRight, Loader2, Check, X, BookOpen,
  Headphones, Eye, Globe, Zap, Brain,
  Heart, Target, Users, Clock, Sliders,
  AudioLines, FastForward, Rewind, Repeat, Maximize2,
  User, UserCircle2, Wand2, Music
} from 'lucide-react';

// ===== TOURS DATA =====
const TOURS = [
  { id: 'pronunciation', label: 'Pronunciation', path: '/welcome/pronunciation' },
  { id: 'coach',         label: 'Coach',         path: '/welcome/coach' },
  { id: 'voice',         label: 'Voice',         path: '/welcome/voice' },
  { id: 'conversations', label: 'Conversations', path: '/welcome/conversations' },
  { id: 'progress',      label: 'Progress',      path: '/welcome/progress' },
];

const CYCLING_VERBS = ['plays back', 'slows down', 'loops', 'clones', 'perfects'];

// Demo phrase — what we'd hear in the audio samples
const DEMO_PHRASE = "I'd like to make a reservation for two at seven thirty.";

// AI voice characters for TTS
const TTS_VOICES = [
  { id: 'sara',    name: 'Sara',    accent: 'US · Female',     vibe: 'Warm, friendly' },
  { id: 'davis',   name: 'Davis',   accent: 'US · Male',       vibe: 'Steady, professional' },
  { id: 'aria',    name: 'Aria',    accent: 'US · Female',     vibe: 'Bright, energetic' },
  { id: 'brian',   name: 'Brian',   accent: 'UK · Male',       vibe: 'Clear, classic' },
  { id: 'libby',   name: 'Libby',   accent: 'UK · Female',     vibe: 'Articulate, calm' },
  { id: 'guy',     name: 'Guy',     accent: 'US · Male',       vibe: 'Casual, approachable' },
];

const TTS_TONES = [
  { id: 'neutral',     label: 'Neutral' },
  { id: 'cheerful',    label: 'Cheerful' },
  { id: 'formal',      label: 'Formal' },
  { id: 'friendly',    label: 'Friendly' },
  { id: 'whispering',  label: 'Whispering' },
  { id: 'angry',       label: 'Angry' },
  { id: 'sad',         label: 'Sad' },
  { id: 'excited',     label: 'Excited' },
  { id: 'flirty',      label: 'Flirty' },
];

// Master modal demo — words from the demo phrase, with karaoke timing
const MASTER_MODAL_WORDS = [
  { word: "I'd",         start: 0,    width: 0.7 },
  { word: 'like',        start: 0.7,  width: 0.6 },
  { word: 'to',          start: 1.3,  width: 0.4 },
  { word: 'make',        start: 1.7,  width: 0.7 },
  { word: 'a',           start: 2.4,  width: 0.3 },
  { word: 'reservation', start: 2.7,  width: 1.4 },
  { word: 'for',         start: 4.1,  width: 0.5 },
  { word: 'two',         start: 4.6,  width: 0.6 },
  { word: 'at',          start: 5.2,  width: 0.4 },
  { word: 'seven',       start: 5.6,  width: 0.7 },
  { word: 'thirty.',     start: 6.3,  width: 1.0 },
];

// ===== MAIN COMPONENT =====
export default function VoiceTour() {
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

  // Self-playback demo state
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [playbackPitch, setPlaybackPitch] = useState(0);
  const [selfPlaying, setSelfPlaying] = useState(false);
  const [whichWaveform, setWhichWaveform] = useState('user'); // 'user' | 'tts' | 'both'

  // TTS demo state
  const [ttsVoice, setTtsVoice] = useState(0);
  const [ttsTone, setTtsTone] = useState(0);
  const [ttsSpeed, setTtsSpeed] = useState(1.0);
  const [ttsPlaying, setTtsPlaying] = useState(false);
  const [ttsText, setTtsText] = useState(DEMO_PHRASE);

  // Voice cloning state
  const [cloneSide, setCloneSide] = useState('original'); // 'original' | 'clone'
  const [clonePlaying, setClonePlaying] = useState(false);

  // Master modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlaying, setModalPlaying] = useState(false);
  const [modalActiveWord, setModalActiveWord] = useState(-1);
  const [modalSource, setModalSource] = useState('user'); // 'user' | 'tts' | 'clone'
  const [modalSpeed, setModalSpeed] = useState(1.0);
  const [modalLoop, setModalLoop] = useState(false);
  const modalTimerRef = useRef(null);

  // Karaoke animation when modal is playing
  useEffect(() => {
    if (!modalPlaying) {
      if (modalTimerRef.current) clearInterval(modalTimerRef.current);
      return;
    }
    let elapsed = 0;
    const TICK = 100;
    modalTimerRef.current = setInterval(() => {
      elapsed += TICK / 1000 * modalSpeed;
      const totalDur = MASTER_MODAL_WORDS[MASTER_MODAL_WORDS.length - 1].start +
                       MASTER_MODAL_WORDS[MASTER_MODAL_WORDS.length - 1].width;
      if (elapsed >= totalDur) {
        if (modalLoop) {
          elapsed = 0;
        } else {
          setModalPlaying(false);
          setModalActiveWord(-1);
          return;
        }
      }
      const idx = MASTER_MODAL_WORDS.findIndex(w =>
        elapsed >= w.start && elapsed < w.start + w.width);
      setModalActiveWord(idx);
    }, TICK);
    return () => clearInterval(modalTimerRef.current);
  }, [modalPlaying, modalSpeed, modalLoop]);

  // Auto-stop fake "playing" demos after a few seconds (visual only)
  useEffect(() => {
    if (selfPlaying) {
      const t = setTimeout(() => setSelfPlaying(false), 4000);
      return () => clearTimeout(t);
    }
  }, [selfPlaying]);
  useEffect(() => {
    if (ttsPlaying) {
      const t = setTimeout(() => setTtsPlaying(false), 4000);
      return () => clearTimeout(t);
    }
  }, [ttsPlaying]);
  useEffect(() => {
    if (clonePlaying) {
      const t = setTimeout(() => setClonePlaying(false), 4000);
      return () => clearTimeout(t);
    }
  }, [clonePlaying]);

  return (
    <div className="lux-voice">
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
            <a href="#playback" className="nav-link">Self-playback</a>
            <a href="#tts" className="nav-link">Text-to-speech</a>
            <a href="#cloning" className="nav-link">Voice cloning</a>
            <a href="#master" className="nav-link">Master view</a>
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
                   className={`subnav-item ${tour.id === 'voice' ? 'active' : ''}`}>
                  {tour.label}
                </a>
                {i < TOURS.length - 1 && <span className="subnav-sep">·</span>}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* V2 — HERO */}
      <header className="hero-tour">
        <div className="container">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Hear your voice. Then hear how it could sound.
          </div>
          <h1 className="hero-headline-tour">
            <span className="chunk">Lux</span>
            <br />
            <span className={`hh-cycle-wrap`}>
              <span className={`hh-cycle ${cycleFlipping ? 'flipping' : ''}`}>
                {CYCLING_VERBS[cycleIndex]}
              </span>
            </span>
            <br />
            <span className="chunk">your voice.</span>
          </h1>
          <p className="hero-sub-tour">
            Three tools that let you study your own voice and hear yourself speaking English correctly — in your own voice.
          </p>

          <div className="hero-controls in">
            <button className="hc-btn" onClick={() => setCyclePaused(!cyclePaused)}>
              {cyclePaused ? <Play size={12} strokeWidth={2.5} /> : <Pause size={12} strokeWidth={2.5} />}
            </button>
            <span className="hc-label">{cyclePaused ? 'PAUSED' : 'AUTO-CYCLING'}</span>
          </div>
        </div>
      </header>

      {/* V3 — SELF-PLAYBACK DEMO */}
      <section id="playback" className="playback-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Tool one</div>
            <h2 className="section-title">Hear yourself, exactly as you sounded.</h2>
            <p className="section-sub">
              Slow it down. Speed it up. Compare your waveform to the native target side by side. The point isn't speed; it's <strong>study</strong>.
            </p>
          </div>

          <div className="playback-frame">
            {/* Left: dual waveform */}
            <div className="pb-waveform-col">
              <div className="pb-wave-tabs">
                <button
                  className={`pb-wave-tab ${whichWaveform === 'user' ? 'active' : ''}`}
                  onClick={() => setWhichWaveform('user')}
                >
                  <UserCircle2 size={14} strokeWidth={2.2} /> Your recording
                </button>
                <button
                  className={`pb-wave-tab ${whichWaveform === 'tts' ? 'active' : ''}`}
                  onClick={() => setWhichWaveform('tts')}
                >
                  <Music size={14} strokeWidth={2.2} /> Native target
                </button>
                <button
                  className={`pb-wave-tab ${whichWaveform === 'both' ? 'active' : ''}`}
                  onClick={() => setWhichWaveform('both')}
                >
                  <AudioLines size={14} strokeWidth={2.2} /> Both
                </button>
              </div>

              <div className="pb-wave-display">
                {(whichWaveform === 'user' || whichWaveform === 'both') && (
                  <div className="pb-wave-row user-wave">
                    <div className="pb-wave-lbl">You</div>
                    <div className={`pb-wave ${selfPlaying ? 'playing' : ''}`}>
                      {Array(48).fill(0).map((_, i) => (
                        <span key={i} className="pb-bar"
                          style={{ height: `${20 + Math.abs(Math.sin(i * 0.4) * 60) + (i * 13 % 18)}%` }} />
                      ))}
                    </div>
                    <div className="pb-wave-time">3.8s</div>
                  </div>
                )}
                {(whichWaveform === 'tts' || whichWaveform === 'both') && (
                  <div className="pb-wave-row tts-wave">
                    <div className="pb-wave-lbl">Native</div>
                    <div className={`pb-wave smooth ${selfPlaying ? 'playing' : ''}`}>
                      {Array(48).fill(0).map((_, i) => (
                        <span key={i} className="pb-bar"
                          style={{ height: `${30 + Math.abs(Math.sin(i * 0.45) * 50)}%` }} />
                      ))}
                    </div>
                    <div className="pb-wave-time">3.6s</div>
                  </div>
                )}
              </div>

              <div className="pb-phrase">
                <span className="pb-phrase-lbl">PHRASE</span>
                <span className="pb-phrase-text">"{DEMO_PHRASE}"</span>
              </div>
            </div>

            {/* Right: controls */}
            <div className="pb-controls-col">
              <div className="pb-controls-head">
                <div className="pb-controls-title">
                  <Sliders size={16} strokeWidth={2.2} />
                  Self-playback controls
                </div>
                <div className="pb-controls-meta">always on the left of every Lux page</div>
              </div>

              <button
                className={`pb-play-btn ${selfPlaying ? 'playing' : ''}`}
                onClick={() => setSelfPlaying(!selfPlaying)}
              >
                {selfPlaying
                  ? <><Pause size={20} strokeWidth={2.2} /> Pause</>
                  : <><Play size={20} strokeWidth={2.2} /> Play your recording</>}
              </button>

              <div className="pb-control-row">
                <div className="pb-control-block">
                  <div className="pb-cb-label">Speed: {playbackSpeed.toFixed(1)}×</div>
                  <div className="pb-cb-presets">
                    {[0.5, 0.75, 1.0, 1.25, 1.5, 2.0].map(s => (
                      <button
                        key={s}
                        className={`pb-preset ${playbackSpeed === s ? 'active' : ''}`}
                        onClick={() => setPlaybackSpeed(s)}
                      >
                        {s}×
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pb-control-block">
                  <div className="pb-cb-label">Pitch: {playbackPitch >= 0 ? '+' : ''}{playbackPitch}</div>
                  <input
                    type="range"
                    min="-6"
                    max="6"
                    step="1"
                    value={playbackPitch}
                    onChange={(e) => setPlaybackPitch(parseInt(e.target.value))}
                    className="pb-slider"
                  />
                </div>
              </div>

              <div className="pb-jump-row">
                <button className="pb-jump-btn"><Rewind size={13} strokeWidth={2.5} /> 2s back</button>
                <button className="pb-jump-btn"><Repeat size={13} strokeWidth={2.5} /> Loop</button>
                <button className="pb-jump-btn"><FastForward size={13} strokeWidth={2.5} /> 2s ahead</button>
              </div>

              <button className="pb-expand-btn" onClick={() => setModalOpen(true)}>
                <Maximize2 size={14} strokeWidth={2.5} />
                Open in master view — karaoke + everything
              </button>
            </div>
          </div>

          <p className="placeholder-disclaimer center mt-2">
            *Demo audio placeholder · in Lux, this plays your real recording from any practice session.
          </p>
        </div>
      </section>

      {/* V4 — TEXT-TO-SPEECH DEMO */}
      <section id="tts" className="tts-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Tool two</div>
            <h2 className="section-title">Type any text. Hear how it should sound.</h2>
            <p className="section-sub">
              Six AI voices. Nine emotional tones. Speed and pitch dialed precisely. Useful for hearing the rhythm of a sentence before you ever record yourself.
            </p>
          </div>

          <div className="tts-frame">
            {/* Top: text input */}
            <div className="tts-input-row">
              <span className="tts-input-lbl">Type what you want to hear:</span>
              <input
                type="text"
                className="tts-input"
                value={ttsText}
                onChange={(e) => setTtsText(e.target.value)}
                placeholder="Type any English text..."
                maxLength={140}
              />
            </div>

            {/* Voice picker */}
            <div className="tts-section-block">
              <div className="tts-block-head">
                <span className="tts-block-lbl">VOICE CHARACTER</span>
                <span className="tts-block-meta">{TTS_VOICES.length} voices · multiple accents</span>
              </div>
              <div className="tts-voices">
                {TTS_VOICES.map((v, i) => (
                  <button
                    key={v.id}
                    className={`tts-voice-btn ${ttsVoice === i ? 'active' : ''}`}
                    onClick={() => setTtsVoice(i)}
                  >
                    <div className="tvb-name">{v.name}</div>
                    <div className="tvb-accent">{v.accent}</div>
                    <div className="tvb-vibe">{v.vibe}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tone picker */}
            <div className="tts-section-block">
              <div className="tts-block-head">
                <span className="tts-block-lbl">EMOTIONAL TONE</span>
                <span className="tts-block-meta">Apply a vibe to the voice</span>
              </div>
              <div className="tts-tones">
                {TTS_TONES.map((t, i) => (
                  <button
                    key={t.id}
                    className={`tts-tone-btn ${ttsTone === i ? 'active' : ''}`}
                    onClick={() => setTtsTone(i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Speed + Play */}
            <div className="tts-bottom-row">
              <div className="tts-speed-block">
                <span className="tts-speed-lbl">Speed: {ttsSpeed.toFixed(1)}×</span>
                <div className="tts-speed-presets">
                  {[0.5, 0.75, 1.0, 1.25, 1.5].map(s => (
                    <button
                      key={s}
                      className={`tts-speed-preset ${ttsSpeed === s ? 'active' : ''}`}
                      onClick={() => setTtsSpeed(s)}
                    >
                      {s}×
                    </button>
                  ))}
                </div>
              </div>
              <button
                className={`tts-play-btn ${ttsPlaying ? 'playing' : ''}`}
                onClick={() => setTtsPlaying(!ttsPlaying)}
              >
                {ttsPlaying
                  ? <><Pause size={18} strokeWidth={2.2} /> Stop</>
                  : <><Play size={18} strokeWidth={2.2} /> Hear it</>}
              </button>
            </div>

            {/* Live "audio" indicator when playing */}
            {ttsPlaying && (
              <div className="tts-playing-indicator">
                <Volume2 size={16} strokeWidth={2.2} />
                <span className="tts-playing-text">
                  Playing: <strong>{TTS_VOICES[ttsVoice].name}</strong> ({TTS_VOICES[ttsVoice].accent})
                  · tone: <strong>{TTS_TONES[ttsTone].label}</strong>
                  · {ttsSpeed.toFixed(1)}×
                </span>
                <div className="tts-playing-wave">
                  {Array(20).fill(0).map((_, i) => (
                    <span key={i} className="tpw-bar" style={{ animationDelay: `${(i * 0.07)}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <p className="placeholder-disclaimer center mt-2">
            *TTS demo placeholder · in Lux, real audio plays from Microsoft Azure neural voices.
          </p>
        </div>
      </section>

      {/* V5 — VOICE CLONING SHOWCASE (the magic moment) */}
      <section id="cloning" className="cloning-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Tool three · the magic moment</div>
            <h2 className="section-title">Hear yourself saying it correctly — in your own voice.</h2>
            <p className="section-sub">
              Lux clones your voice once. From then on, you hear difficult phrases pronounced perfectly — but with <strong>your</strong> voice. Not a stranger's. Yours.
            </p>
          </div>

          <div className="cloning-frame">
            {/* Toggle: original vs clone */}
            <div className="cloning-toggle-row">
              <button
                className={`cloning-toggle-btn ${cloneSide === 'original' ? 'active' : ''}`}
                onClick={() => setCloneSide('original')}
              >
                <UserCircle2 size={20} strokeWidth={2.2} />
                <div className="ctb-text">
                  <div className="ctb-name">Mark · original</div>
                  <div className="ctb-meta">As recorded</div>
                </div>
              </button>
              <div className="cloning-vs">vs.</div>
              <button
                className={`cloning-toggle-btn ${cloneSide === 'clone' ? 'active' : ''}`}
                onClick={() => setCloneSide('clone')}
              >
                <Wand2 size={20} strokeWidth={2.2} />
                <div className="ctb-text">
                  <div className="ctb-name">Mark · cloned</div>
                  <div className="ctb-meta">Same voice, perfect pronunciation</div>
                </div>
              </button>
            </div>

            <div className="cloning-display">
              <div className="cloning-display-head">
                <div className={`cloning-portrait ${cloneSide}`}>
                  {cloneSide === 'original'
                    ? <UserCircle2 size={48} strokeWidth={1.5} />
                    : <Wand2 size={48} strokeWidth={1.5} />}
                </div>
                <div className="cloning-display-meta">
                  <div className="cloning-display-name">
                    {cloneSide === 'original' ? 'Original recording' : 'Cloned voice — corrected'}
                  </div>
                  <div className="cloning-display-desc">
                    {cloneSide === 'original'
                      ? 'Mark recorded this himself. Some phonemes drifted. Score: 78%.'
                      : 'Same voice. Same tone. Same accent. But every phoneme is now native-perfect. Score: 100%.'}
                  </div>
                </div>
              </div>

              <div className="cloning-phrase-display">
                <div className="cpd-phrase">"{DEMO_PHRASE}"</div>
                <div className={`cpd-wave ${clonePlaying ? 'playing' : ''} ${cloneSide}`}>
                  {Array(56).fill(0).map((_, i) => {
                    const baseHeight = cloneSide === 'original'
                      ? 25 + Math.abs(Math.sin(i * 0.4) * 50) + (i * 17 % 22)
                      : 30 + Math.abs(Math.sin(i * 0.45) * 50);
                    return (
                      <span key={i} className="cpd-bar" style={{ height: `${baseHeight}%` }} />
                    );
                  })}
                </div>
              </div>

              <div className="cloning-controls">
                <button
                  className={`cloning-play-btn ${clonePlaying ? 'playing' : ''}`}
                  onClick={() => setClonePlaying(!clonePlaying)}
                >
                  {clonePlaying
                    ? <><Pause size={18} strokeWidth={2.2} /> Stop</>
                    : <><Play size={18} strokeWidth={2.2} /> Play {cloneSide === 'original' ? 'original' : 'clone'}</>}
                </button>
                <span className="cloning-audio-stub">
                  AUDIO PLACEHOLDER · Mark records both samples and they slot in here
                </span>
              </div>
            </div>

            {/* Side-by-side benefit list */}
            <div className="cloning-benefits">
              <div className="cb-card">
                <div className="cb-icon"><Heart size={18} strokeWidth={2.2} /></div>
                <h4>It feels like you</h4>
                <p>Hearing pronunciation in a stranger's voice is instructive. Hearing it in <strong>your own</strong> voice is transformative.</p>
              </div>
              <div className="cb-card">
                <div className="cb-icon"><Target size={18} strokeWidth={2.2} /></div>
                <h4>The target is reachable</h4>
                <p>"That sound came out of <strong>my mouth</strong>." If your clone can do it, you can too. The gap is technique, not genetics.</p>
              </div>
              <div className="cb-card">
                <div className="cb-icon"><Sparkles size={18} strokeWidth={2.2} /></div>
                <h4>One-time setup</h4>
                <p>Read a few sentences once. Lux trains your clone in minutes. After that, every phrase you type can play back in your voice.</p>
              </div>
            </div>

            <div className="cloning-disclaimer">
              <Sparkles size={14} strokeWidth={2.2} />
              <span>Voice cloning requires a setup process inside Lux — sign in to create yours. Lux uses ElevenLabs voice cloning under the hood, with your consent and full control.</span>
            </div>
          </div>
        </div>
      </section>

      {/* V6 — MASTER MODAL CARD SHOWCASE */}
      <section id="master" className="master-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">All three tools, one workspace</div>
            <h2 className="section-title">The master view — karaoke for your voice.</h2>
            <p className="section-sub">
              Click any word. Loop a section. Compare your voice, the native voice, and your cloned voice in one workspace. <strong>Easy to miss in Lux unless someone shows you</strong> — that's why it's here.
            </p>
          </div>

          <div className="master-launcher">
            <div className="ml-preview">
              <div className="ml-preview-words">
                {MASTER_MODAL_WORDS.slice(0, 6).map((w, i) => (
                  <span key={i} className="ml-preview-word">{w.word}</span>
                ))}
                <span className="ml-preview-word ml-preview-fade">...</span>
              </div>
              <div className="ml-preview-tag">PREVIEW · click below to open</div>
            </div>

            <button className="ml-open-btn" onClick={() => setModalOpen(true)}>
              <Maximize2 size={20} strokeWidth={2.2} />
              Open the master view
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* V7 — USE CASES */}
      <section className="usecases-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">When to reach for these</div>
            <h2 className="section-title">Five ways people actually use Voice.</h2>
          </div>

          <div className="usecases-grid">
            {[
              { icon: Brain,    title: 'Hear yourself before a presentation',  body: 'Type your opening line. Hear it in your clone. Practice matching that delivery.' },
              { icon: Music,    title: 'Practice the rhythm of a speech',       body: 'Speech has cadence. Slow down a paragraph until you hear the natural pauses, then try matching them.' },
              { icon: Activity, title: 'Compare your accent to native speakers',body: 'Side-by-side waveforms show where you over-emphasize, drag, or rush. Visible patterns are easier to fix.' },
              { icon: Repeat,   title: 'Slow down a difficult phrase',          body: 'Stop trying to hear it at full speed. Drop to 0.5×, study the mouth shape, then ramp back up.' },
              { icon: Wand2,    title: 'Loop a sentence until it\'s perfect',   body: 'The master view loops any section. Five passes through one tricky line beats fifty random attempts.' },
            ].map((u, i) => {
              const Icon = u.icon;
              return (
                <div key={i} className="uc-grid-card">
                  <div className="ugc-icon"><Icon size={20} strokeWidth={2.2} /></div>
                  <h3 className="ugc-title">{u.title}</h3>
                  <p className="ugc-body">{u.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* V8 — CROSS-TOUR OUTBOUND */}
      <section className="next-tours-section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Where to next</div>
            <h2 className="section-title">Two Tours Voice supports.</h2>
          </div>
          <div className="next-tours-grid">
            <a href="/welcome/pronunciation" className="next-tour-card">
              <div className="ntc-icon"><Activity size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">PRONUNCIATION TOUR</div>
              <h3>How Lux scores what you record.</h3>
              <p>Voice tools work on top of the scoring engine. The Pronunciation Tour shows how Lux measures your voice in the first place.</p>
              <span className="ntc-link">See how Lux scores you <ChevronRight size={14} strokeWidth={2.5} /></span>
            </a>
            <a href="/welcome/conversations" className="next-tour-card">
              <div className="ntc-icon"><MessageCircle size={20} strokeWidth={2.2} /></div>
              <div className="ntc-tag">CONVERSATIONS TOUR</div>
              <h3>Use voice in real conversations.</h3>
              <p>Both drawers (self-playback + TTS + cloning) appear in every AI conversation. Replay anything, study the rhythm, and reply in your cloned voice.</p>
              <span className="ntc-link">Use voice in real conversations <ChevronRight size={14} strokeWidth={2.5} /></span>
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

      {/* MASTER MODAL — opens from V3 expand button or V6 launcher */}
      {modalOpen && (
        <MasterModal
          source={modalSource}
          onSourceChange={setModalSource}
          playing={modalPlaying}
          onPlayToggle={() => setModalPlaying(!modalPlaying)}
          activeWord={modalActiveWord}
          onWordClick={(idx) => {
            setModalActiveWord(idx);
            setModalPlaying(true);
          }}
          speed={modalSpeed}
          onSpeedChange={setModalSpeed}
          loop={modalLoop}
          onLoopToggle={() => setModalLoop(!modalLoop)}
          onClose={() => {
            setModalOpen(false);
            setModalPlaying(false);
            setModalActiveWord(-1);
          }}
        />
      )}
    </div>
  );
}

// ===== MASTER MODAL COMPONENT =====
function MasterModal({ source, onSourceChange, playing, onPlayToggle, activeWord, onWordClick, speed, onSpeedChange, loop, onLoopToggle, onClose }) {
  return (
    <div className="mm-overlay" onClick={onClose}>
      <div className="mm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="mm-close" onClick={onClose}><X size={16} strokeWidth={2.5} /></button>

        <div className="mm-head">
          <div className="mm-tag">MASTER VIEW</div>
          <h3 className="mm-title">All three tools, one workspace.</h3>
          <p className="mm-sub">Click any word to jump there. Loop a section. Switch between your voice, native, and your clone.</p>
        </div>

        {/* Source toggle */}
        <div className="mm-source-row">
          <span className="mm-source-lbl">SOURCE</span>
          <div className="mm-source-toggle">
            <button
              className={`mm-source-btn ${source === 'user' ? 'active' : ''}`}
              onClick={() => onSourceChange('user')}
            >
              <UserCircle2 size={14} strokeWidth={2.2} /> Your recording
            </button>
            <button
              className={`mm-source-btn ${source === 'tts' ? 'active' : ''}`}
              onClick={() => onSourceChange('tts')}
            >
              <Music size={14} strokeWidth={2.2} /> Native (TTS)
            </button>
            <button
              className={`mm-source-btn ${source === 'clone' ? 'active' : ''}`}
              onClick={() => onSourceChange('clone')}
            >
              <Wand2 size={14} strokeWidth={2.2} /> Your clone
            </button>
          </div>
        </div>

        {/* Karaoke word display */}
        <div className="mm-karaoke">
          {MASTER_MODAL_WORDS.map((w, i) => (
            <button
              key={i}
              className={`mm-word ${activeWord === i ? 'active' : ''}`}
              style={{ flexBasis: `${w.width * 60}px` }}
              onClick={() => onWordClick(i)}
            >
              {w.word}
            </button>
          ))}
        </div>

        {/* Waveform visualization */}
        <div className={`mm-wave ${playing ? 'playing' : ''} src-${source}`}>
          {Array(64).fill(0).map((_, i) => {
            const heights = {
              user:  20 + Math.abs(Math.sin(i * 0.4) * 60) + (i * 13 % 18),
              tts:   30 + Math.abs(Math.sin(i * 0.45) * 50),
              clone: 28 + Math.abs(Math.sin(i * 0.42) * 55),
            };
            return (
              <span key={i} className="mm-bar" style={{ height: `${heights[source]}%` }} />
            );
          })}
        </div>

        {/* Controls */}
        <div className="mm-controls">
          <button className={`mm-play-btn ${playing ? 'playing' : ''}`} onClick={onPlayToggle}>
            {playing
              ? <><Pause size={20} strokeWidth={2.2} /></>
              : <><Play size={20} strokeWidth={2.2} /></>}
          </button>

          <div className="mm-control-block">
            <span className="mm-cb-lbl">Speed</span>
            <div className="mm-cb-presets">
              {[0.5, 0.75, 1.0, 1.25, 1.5].map(s => (
                <button
                  key={s}
                  className={`mm-preset ${speed === s ? 'active' : ''}`}
                  onClick={() => onSpeedChange(s)}
                >
                  {s}×
                </button>
              ))}
            </div>
          </div>

          <button className={`mm-loop-btn ${loop ? 'active' : ''}`} onClick={onLoopToggle}>
            <Repeat size={14} strokeWidth={2.5} /> {loop ? 'Loop on' : 'Loop off'}
          </button>
        </div>

        <p className="mm-disclaimer">
          *Karaoke animation is real — click any word and watch playback follow. Audio is placeholder until Mark backfills real samples.
        </p>
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
  --voice-purple: #7C3AED;
  --voice-purple-bg: #F5F3FF;
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
body, .lux-voice {
  font-family: 'Montserrat', system-ui, sans-serif;
  background: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.lux-voice { min-height: 100vh; }
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
`;

const TOUR_STYLES = `
/* === NAV (matches all Tours) === */
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

/* === V3 SELF-PLAYBACK === */
.playback-section { padding: var(--sect-pad-y) 0; background: var(--bg); }
.playback-frame { display: grid; grid-template-columns: 1.25fr 1fr; gap: 1.5rem; background: #fff; border: 1px solid var(--line); border-radius: 20px; padding: 2rem; box-shadow: 0 16px 48px rgba(15,23,42,0.06); }
@media (max-width: 1000px) { .playback-frame { grid-template-columns: 1fr; } }

.pb-waveform-col { display: flex; flex-direction: column; gap: 1.25rem; }
.pb-wave-tabs { display: flex; gap: 0.4rem; padding: 0.4rem; background: var(--slate-50); border-radius: 12px; }
.pb-wave-tab { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.55rem 0.85rem; background: transparent; border: none; border-radius: 8px; font-family: 'Montserrat'; font-weight: 600; font-size: 0.85rem; color: var(--ink-soft); cursor: pointer; transition: all 220ms; }
.pb-wave-tab:hover { color: var(--brand); }
.pb-wave-tab.active { background: var(--ink); color: #fff; box-shadow: 0 4px 10px rgba(15,23,42,0.15); }

.pb-wave-display { display: flex; flex-direction: column; gap: 0.85rem; min-height: 180px; padding: 1.25rem; background: var(--slate-50); border-radius: 12px; }
.pb-wave-row { display: grid; grid-template-columns: 60px 1fr 50px; align-items: center; gap: 0.85rem; }
.pb-wave-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.08em; color: var(--ink-soft); text-transform: uppercase; }
.user-wave .pb-wave-lbl { color: var(--brand); }
.tts-wave .pb-wave-lbl { color: var(--voice-purple); }
.pb-wave { display: flex; align-items: flex-end; gap: 2px; height: 64px; padding: 0 4px; }
.pb-bar { display: inline-block; flex: 1; min-height: 4px; background: var(--ink-faint); border-radius: 1.5px; opacity: 0.45; transition: opacity 280ms; }
.user-wave .pb-bar { background: var(--brand); }
.tts-wave .pb-bar { background: var(--voice-purple); }
.pb-wave.playing .pb-bar { opacity: 1; animation: barPulse 1.6s ease-in-out infinite; }
.pb-wave.playing .pb-bar:nth-child(2n) { animation-delay: 0.15s; }
.pb-wave.playing .pb-bar:nth-child(3n) { animation-delay: 0.3s; }
.pb-wave.smooth .pb-bar { animation-duration: 2s; }
@keyframes barPulse { 0%, 100% { transform: scaleY(0.85); } 50% { transform: scaleY(1.05); } }
.pb-wave-time { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--ink-faint); text-align: right; }

.pb-phrase { display: flex; align-items: baseline; gap: 0.85rem; padding: 1rem 1.25rem; background: var(--ink); color: #fff; border-radius: 10px; flex-wrap: wrap; }
.pb-phrase-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; color: var(--gold); }
.pb-phrase-text { font-size: 0.95rem; color: rgba(255,255,255,0.92); font-style: italic; flex: 1; }

.pb-controls-col { display: flex; flex-direction: column; gap: 1.25rem; }
.pb-controls-head { display: flex; flex-direction: column; gap: 0.3rem; padding-bottom: 1rem; border-bottom: 1px dashed var(--line); }
.pb-controls-title { display: inline-flex; align-items: center; gap: 0.55rem; font-weight: 800; font-size: 1.1rem; color: var(--ink); }
.pb-controls-meta { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: var(--ink-faint); font-weight: 600; letter-spacing: 0.02em; }

.pb-play-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem 1.5rem; background: var(--brand); color: #fff; border: none; border-radius: 12px; font-family: 'Montserrat'; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 220ms var(--ease-drawer); box-shadow: 0 6px 18px rgba(0,120,215,0.25); }
.pb-play-btn:hover { background: var(--brand-hover); transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,120,215,0.35); }
.pb-play-btn.playing { background: var(--gold); color: var(--ink); box-shadow: 0 6px 18px rgba(234,179,8,0.35); animation: playBreath 1.6s ease-in-out infinite; }
@keyframes playBreath { 0%, 100% { box-shadow: 0 6px 18px rgba(234,179,8,0.35); } 50% { box-shadow: 0 8px 28px rgba(234,179,8,0.55); } }

.pb-control-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 600px) { .pb-control-row { grid-template-columns: 1fr; } }
.pb-control-block { display: flex; flex-direction: column; gap: 0.5rem; padding: 0.85rem 1rem; background: var(--slate-50); border-radius: 10px; }
.pb-cb-label { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; color: var(--ink); letter-spacing: 0.04em; }
.pb-cb-presets { display: flex; gap: 0.3rem; flex-wrap: wrap; }
.pb-preset { padding: 0.3rem 0.55rem; background: #fff; border: 1px solid var(--line); border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; transition: all 200ms; letter-spacing: 0.02em; }
.pb-preset:hover { border-color: var(--brand); color: var(--brand); }
.pb-preset.active { background: var(--ink); color: var(--gold); border-color: var(--ink); }
.pb-slider { width: 100%; -webkit-appearance: none; height: 6px; background: var(--slate-200); border-radius: 3px; cursor: pointer; outline: none; }
.pb-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; background: var(--brand); border-radius: 50%; border: 2px solid #fff; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }

.pb-jump-row { display: flex; gap: 0.4rem; }
.pb-jump-btn { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 0.35rem; padding: 0.55rem 0.85rem; background: #fff; border: 1px solid var(--line); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; letter-spacing: 0.02em; transition: all 200ms; }
.pb-jump-btn:hover { background: var(--ink); color: #fff; border-color: var(--ink); }

.pb-expand-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.45rem; padding: 0.85rem 1.25rem; background: var(--voice-purple-bg); color: var(--voice-purple); border: 1.5px dashed var(--voice-purple); border-radius: 10px; font-family: 'Montserrat'; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 220ms var(--ease-drawer); }
.pb-expand-btn:hover { background: var(--voice-purple); color: #fff; border-style: solid; }

/* === V4 TTS === */
.tts-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--slate-50) 0%, var(--bg) 100%); border-top: 1px solid var(--line); }
.tts-frame { background: #fff; border: 1px solid var(--line); border-radius: 20px; padding: 2rem; display: flex; flex-direction: column; gap: 1.75rem; box-shadow: 0 16px 48px rgba(15,23,42,0.06); }

.tts-input-row { display: flex; flex-direction: column; gap: 0.5rem; }
.tts-input-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.1em; color: var(--ink); text-transform: uppercase; }
.tts-input { padding: 0.95rem 1.25rem; background: var(--slate-50); border: 2px solid var(--line); border-radius: 10px; font-family: 'Montserrat'; font-size: 1.05rem; color: var(--ink); transition: border-color 200ms; outline: none; font-weight: 500; }
.tts-input:focus { border-color: var(--brand); background: #fff; }

.tts-section-block { display: flex; flex-direction: column; gap: 0.85rem; }
.tts-block-head { display: flex; justify-content: space-between; align-items: baseline; }
.tts-block-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.12em; color: var(--ink); text-transform: uppercase; }
.tts-block-meta { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--ink-faint); font-weight: 600; letter-spacing: 0.02em; }

.tts-voices { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; }
@media (max-width: 880px) { .tts-voices { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .tts-voices { grid-template-columns: 1fr; } }
.tts-voice-btn { padding: 0.85rem 1rem; background: var(--slate-50); border: 1.5px solid var(--line); border-radius: 10px; cursor: pointer; transition: all 220ms var(--ease-drawer); text-align: left; }
.tts-voice-btn:hover { border-color: var(--brand); transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,120,215,0.1); }
.tts-voice-btn.active { background: var(--ink); border-color: var(--ink); }
.tvb-name { font-weight: 800; font-size: 1rem; color: var(--ink); }
.tts-voice-btn.active .tvb-name { color: #fff; }
.tvb-accent { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 700; color: var(--brand); margin-top: 0.15rem; letter-spacing: 0.02em; }
.tts-voice-btn.active .tvb-accent { color: var(--gold); }
.tvb-vibe { font-size: 0.78rem; color: var(--ink-medium); margin-top: 0.2rem; font-weight: 500; }
.tts-voice-btn.active .tvb-vibe { color: rgba(255,255,255,0.75); }

.tts-tones { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tts-tone-btn { padding: 0.45rem 0.95rem; background: var(--slate-50); border: 1.5px solid var(--line); border-radius: 999px; font-size: 0.85rem; font-weight: 600; color: var(--ink-soft); cursor: pointer; transition: all 200ms; }
.tts-tone-btn:hover { border-color: var(--brand); color: var(--brand); }
.tts-tone-btn.active { background: var(--brand); color: #fff; border-color: var(--brand); }

.tts-bottom-row { display: flex; align-items: flex-end; gap: 1.5rem; padding-top: 1rem; border-top: 1px dashed var(--line); flex-wrap: wrap; }
.tts-speed-block { flex: 1; display: flex; flex-direction: column; gap: 0.5rem; min-width: 220px; }
.tts-speed-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; color: var(--ink); letter-spacing: 0.04em; }
.tts-speed-presets { display: flex; gap: 0.35rem; }
.tts-speed-preset { padding: 0.4rem 0.7rem; background: var(--slate-50); border: 1px solid var(--line); border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; transition: all 200ms; }
.tts-speed-preset:hover { border-color: var(--brand); color: var(--brand); }
.tts-speed-preset.active { background: var(--ink); color: var(--gold); border-color: var(--ink); }

.tts-play-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: var(--voice-purple); color: #fff; border: none; border-radius: 12px; font-family: 'Montserrat'; font-weight: 700; font-size: 1.05rem; cursor: pointer; transition: all 220ms var(--ease-drawer); box-shadow: 0 6px 18px rgba(124,58,237,0.3); }
.tts-play-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(124,58,237,0.4); }
.tts-play-btn.playing { background: var(--gold); color: var(--ink); }

.tts-playing-indicator { display: flex; align-items: center; gap: 0.85rem; padding: 1rem 1.25rem; background: var(--voice-purple-bg); border: 1px solid var(--voice-purple); border-radius: 10px; flex-wrap: wrap; }
.tts-playing-indicator svg { color: var(--voice-purple); flex-shrink: 0; }
.tts-playing-text { flex: 1; font-size: 0.92rem; color: var(--ink-soft); font-weight: 500; min-width: 200px; }
.tts-playing-text strong { color: var(--voice-purple); font-weight: 800; }
.tts-playing-wave { display: flex; gap: 2px; align-items: center; height: 24px; }
.tpw-bar { display: inline-block; width: 3px; background: var(--voice-purple); border-radius: 1.5px; animation: tpwWave 1s ease-in-out infinite; height: 60%; }
@keyframes tpwWave { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }

/* === V5 CLONING === */
.cloning-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--bg) 0%, var(--voice-purple-bg) 100%); border-top: 1px solid var(--line); }
.cloning-frame { background: #fff; border: 2px solid var(--voice-purple); border-radius: 24px; padding: 2.5rem 2rem; box-shadow: 0 24px 60px rgba(124,58,237,0.12); display: flex; flex-direction: column; gap: 2rem; }

.cloning-toggle-row { display: flex; align-items: center; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.cloning-toggle-btn { display: inline-flex; align-items: center; gap: 0.85rem; padding: 1.25rem 1.75rem; background: var(--slate-50); border: 2px solid var(--line); border-radius: 14px; cursor: pointer; transition: all 280ms var(--ease-drawer); text-align: left; }
.cloning-toggle-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.cloning-toggle-btn.active { background: linear-gradient(135deg, var(--voice-purple-bg) 0%, #fff 100%); border-color: var(--voice-purple); box-shadow: 0 12px 32px rgba(124,58,237,0.15); }
.cloning-toggle-btn svg { color: var(--ink-soft); flex-shrink: 0; }
.cloning-toggle-btn.active svg { color: var(--voice-purple); }
.ctb-text { display: flex; flex-direction: column; gap: 0.15rem; }
.ctb-name { font-weight: 800; font-size: 1.05rem; color: var(--ink); letter-spacing: -0.01em; }
.cloning-toggle-btn.active .ctb-name { color: var(--voice-purple); }
.ctb-meta { font-size: 0.82rem; color: var(--ink-medium); font-weight: 500; }
.cloning-vs { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; font-weight: 800; color: var(--voice-purple); letter-spacing: 0.04em; }

.cloning-display { background: var(--slate-50); border: 1px solid var(--line); border-radius: 16px; padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; }
.cloning-display-head { display: flex; align-items: center; gap: 1.25rem; }
.cloning-portrait { width: 72px; height: 72px; border-radius: 18px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.cloning-portrait.original { background: var(--ink); color: #fff; }
.cloning-portrait.clone { background: var(--voice-purple); color: #fff; box-shadow: 0 8px 20px rgba(124,58,237,0.3); }
.cloning-display-meta { flex: 1; }
.cloning-display-name { font-weight: 800; font-size: 1.35rem; letter-spacing: -0.02em; }
.cloning-display-desc { font-size: 0.92rem; color: var(--ink-medium); font-weight: 500; margin-top: 0.3rem; line-height: 1.5; }

.cloning-phrase-display { display: flex; flex-direction: column; gap: 1rem; padding: 1.5rem; background: #fff; border-radius: 12px; }
.cpd-phrase { font-size: 1.15rem; font-style: italic; color: var(--ink); font-weight: 500; padding-bottom: 0.85rem; border-bottom: 1px dashed var(--line); }
.cpd-wave { display: flex; gap: 2px; align-items: flex-end; height: 80px; padding: 0 4px; }
.cpd-bar { display: inline-block; flex: 1; min-height: 4px; border-radius: 1.5px; opacity: 0.45; transition: all 280ms; }
.cpd-wave.original .cpd-bar { background: var(--ink); }
.cpd-wave.clone .cpd-bar { background: var(--voice-purple); }
.cpd-wave.playing .cpd-bar { opacity: 1; animation: barPulse 1.6s ease-in-out infinite; }
.cpd-wave.playing .cpd-bar:nth-child(2n) { animation-delay: 0.1s; }
.cpd-wave.playing .cpd-bar:nth-child(3n) { animation-delay: 0.2s; }

.cloning-controls { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.cloning-play-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.5rem; background: var(--voice-purple); color: #fff; border: none; border-radius: 999px; font-family: 'Montserrat'; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 220ms var(--ease-drawer); box-shadow: 0 6px 18px rgba(124,58,237,0.3); }
.cloning-play-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(124,58,237,0.4); }
.cloning-play-btn.playing { background: var(--gold); color: var(--ink); }
.cloning-audio-stub { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: var(--ink-faint); font-style: italic; letter-spacing: 0.02em; }

.cloning-benefits { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
@media (max-width: 880px) { .cloning-benefits { grid-template-columns: 1fr; } }
.cb-card { background: var(--voice-purple-bg); border: 1px solid var(--voice-purple); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.65rem; }
.cb-icon { width: 36px; height: 36px; border-radius: 8px; background: var(--voice-purple); color: #fff; display: flex; align-items: center; justify-content: center; }
.cb-card h4 { font-weight: 800; font-size: 1.05rem; letter-spacing: -0.01em; color: var(--ink); }
.cb-card p { font-size: 0.92rem; line-height: 1.55; color: var(--ink-soft); font-weight: 500; }
.cb-card p strong { color: var(--voice-purple); font-weight: 800; }

.cloning-disclaimer { display: flex; align-items: flex-start; gap: 0.6rem; padding: 1rem 1.25rem; background: var(--score-good-bg); border-left: 4px solid var(--brand); border-radius: 4px 12px 12px 4px; font-size: 0.92rem; color: var(--ink-soft); font-weight: 500; line-height: 1.55; }
.cloning-disclaimer svg { color: var(--brand); flex-shrink: 0; margin-top: 2px; }

/* === V6 MASTER LAUNCHER === */
.master-section { padding: var(--sect-pad-y) 0; background: var(--bg); border-top: 1px solid var(--line); }
.master-launcher { background: var(--ink); border-radius: 20px; padding: 3rem 2rem; display: flex; flex-direction: column; align-items: center; gap: 2rem; box-shadow: 0 24px 60px rgba(15,23,42,0.18); }
.ml-preview { width: 100%; max-width: 720px; padding: 1.75rem 2rem; background: rgba(255,255,255,0.05); border: 1px dashed rgba(255,255,255,0.2); border-radius: 14px; display: flex; flex-direction: column; gap: 0.85rem; }
.ml-preview-words { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.ml-preview-word { padding: 0.55rem 0.85rem; background: rgba(255,255,255,0.1); color: #fff; border-radius: 6px; font-weight: 700; font-size: 1rem; letter-spacing: -0.01em; }
.ml-preview-word.ml-preview-fade { opacity: 0.4; }
.ml-preview-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.16em; color: var(--gold); text-align: center; }

.ml-open-btn { display: inline-flex; align-items: center; gap: 0.65rem; padding: 1.1rem 2rem; background: var(--brand); color: #fff; border: none; border-radius: 999px; font-family: 'Montserrat'; font-weight: 800; font-size: 1.05rem; cursor: pointer; transition: all 280ms var(--ease-drawer); box-shadow: 0 8px 24px rgba(0,120,215,0.4); }
.ml-open-btn:hover { background: var(--brand-hover); transform: translateY(-2px); box-shadow: 0 14px 36px rgba(0,120,215,0.5); gap: 0.85rem; }

/* === MASTER MODAL === */
.mm-overlay { position: fixed; inset: 0; background: rgba(8,8,14,0.75); backdrop-filter: blur(8px); z-index: 300; display: flex; align-items: center; justify-content: center; padding: 1.5rem; animation: mmFadeIn 250ms ease; }
@keyframes mmFadeIn { from { opacity: 0; } to { opacity: 1; } }
.mm-modal { background: #fff; border-radius: 24px; padding: 2.5rem 2rem; max-width: 880px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 32px 80px rgba(0,0,0,0.45); animation: mmScaleIn 350ms var(--ease-pop); display: flex; flex-direction: column; gap: 1.5rem; }
@keyframes mmScaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
.mm-close { position: absolute; top: 1.25rem; right: 1.25rem; width: 32px; height: 32px; border-radius: 50%; background: var(--slate-100); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ink-soft); transition: all 200ms; z-index: 1; }
.mm-close:hover { background: var(--ink); color: #fff; }

.mm-head { display: flex; flex-direction: column; gap: 0.55rem; padding-right: 3rem; }
.mm-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.16em; color: var(--brand); text-transform: uppercase; }
.mm-title { font-weight: 800; font-size: 1.85rem; letter-spacing: -0.025em; line-height: 1.1; }
.mm-sub { font-size: 0.95rem; color: var(--ink-medium); font-weight: 500; line-height: 1.5; }

.mm-source-row { display: flex; align-items: center; gap: 1rem; padding: 0.85rem 1rem; background: var(--slate-50); border-radius: 12px; flex-wrap: wrap; }
.mm-source-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.12em; color: var(--ink-soft); }
.mm-source-toggle { display: flex; gap: 0.3rem; padding: 0.3rem; background: #fff; border: 1px solid var(--line); border-radius: 999px; }
.mm-source-btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 0.95rem; background: transparent; border: none; border-radius: 999px; font-family: 'Montserrat'; font-weight: 700; font-size: 0.82rem; color: var(--ink-soft); cursor: pointer; transition: all 220ms; }
.mm-source-btn:hover { color: var(--brand); }
.mm-source-btn.active { background: var(--ink); color: var(--gold); }

.mm-karaoke { display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 1.5rem; background: var(--slate-50); border-radius: 14px; min-height: 120px; align-content: center; }
.mm-word { padding: 0.65rem 0.95rem; background: #fff; border: 1.5px solid var(--line); border-radius: 8px; font-family: 'Montserrat'; font-weight: 700; font-size: 1.05rem; color: var(--ink); cursor: pointer; transition: all 250ms var(--ease-pop); flex-grow: 0; flex-shrink: 0; min-width: 0; }
.mm-word:hover { border-color: var(--brand); color: var(--brand); transform: translateY(-2px); }
.mm-word.active { background: var(--brand); color: #fff; border-color: var(--brand); transform: translateY(-3px) scale(1.06); box-shadow: 0 8px 20px rgba(0,120,215,0.35); }

.mm-wave { display: flex; gap: 2px; align-items: flex-end; height: 80px; padding: 0.85rem; background: var(--ink); border-radius: 12px; }
.mm-wave .mm-bar { display: inline-block; flex: 1; min-height: 4px; background: var(--brand); border-radius: 1.5px; opacity: 0.5; }
.mm-wave.src-tts .mm-bar { background: var(--voice-purple); }
.mm-wave.src-clone .mm-bar { background: var(--gold); }
.mm-wave.playing .mm-bar { opacity: 1; animation: barPulse 1.6s ease-in-out infinite; }
.mm-wave.playing .mm-bar:nth-child(2n) { animation-delay: 0.1s; }
.mm-wave.playing .mm-bar:nth-child(3n) { animation-delay: 0.2s; }

.mm-controls { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; padding: 1rem 1.25rem; background: var(--slate-50); border-radius: 12px; }
.mm-play-btn { width: 52px; height: 52px; border-radius: 50%; background: var(--brand); color: #fff; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 220ms var(--ease-drawer); box-shadow: 0 6px 18px rgba(0,120,215,0.3); flex-shrink: 0; }
.mm-play-btn:hover { background: var(--brand-hover); transform: scale(1.05); }
.mm-play-btn.playing { background: var(--gold); color: var(--ink); }
.mm-control-block { flex: 1; display: flex; flex-direction: column; gap: 0.4rem; min-width: 200px; }
.mm-cb-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.08em; color: var(--ink-soft); text-transform: uppercase; }
.mm-cb-presets { display: flex; gap: 0.3rem; }
.mm-preset { padding: 0.35rem 0.6rem; background: #fff; border: 1px solid var(--line); border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; transition: all 200ms; }
.mm-preset:hover { border-color: var(--brand); color: var(--brand); }
.mm-preset.active { background: var(--ink); color: var(--gold); border-color: var(--ink); }
.mm-loop-btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 0.85rem; background: #fff; border: 1.5px solid var(--line); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--ink-soft); cursor: pointer; transition: all 200ms; letter-spacing: 0.02em; }
.mm-loop-btn:hover { border-color: var(--brand); color: var(--brand); }
.mm-loop-btn.active { background: var(--brand); color: #fff; border-color: var(--brand); }

.mm-disclaimer { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-style: italic; color: var(--ink-faint); font-weight: 500; text-align: center; }

/* === V7 USE CASES === */
.usecases-section { padding: var(--sect-pad-y) 0; background: linear-gradient(180deg, var(--bg) 0%, var(--slate-50) 100%); border-top: 1px solid var(--line); }
.usecases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
@media (max-width: 1100px) { .usecases-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .usecases-grid { grid-template-columns: 1fr; } }
.uc-grid-card { background: #fff; border: 1.5px solid var(--line); border-radius: 14px; padding: 1.75rem 1.5rem; display: flex; flex-direction: column; gap: 0.85rem; transition: all 280ms var(--ease-drawer); }
.uc-grid-card:hover { transform: translateY(-4px); border-color: var(--brand); box-shadow: 0 12px 32px rgba(0,120,215,0.1); }
.ugc-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--score-good-bg); color: var(--brand); display: flex; align-items: center; justify-content: center; }
.uc-grid-card:hover .ugc-icon { background: var(--brand); color: #fff; }
.ugc-title { font-weight: 800; font-size: 1.1rem; letter-spacing: -0.02em; line-height: 1.2; }
.ugc-body { font-size: 0.92rem; line-height: 1.55; color: var(--ink-soft); font-weight: 500; }

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
