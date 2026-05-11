# Lux Tours — The Constitution

**Authoritative session-handover document.** Last updated: 2026-05-11 (end of day, after a full day of voice-and-content work).

This is the single most important file in the Tours repo for any new Claude instance picking up this work. Read it in full before responding to anything. It captures the project from 30,000 feet down to the molecular level: what we are building, why, where things live, what has shipped, what hasn't, what comes next, and how to work with Mark effectively.

If something here conflicts with a later message, ask Mark — don't guess.

---

## PART 1 — THE 30,000-FOOT VIEW

### What Lux is

Lux is an AI-powered English pronunciation practice tool built by Mark Huguley over approximately 18 months starting from no prior coding background. It scores user pronunciation at the phoneme level using Microsoft Azure Speech Services, layers in prosody (rhythm, stress, pace), provides AI coaching feedback in the user's first language, supports 25 real-life conversation scenarios with AI characters, clones the user's voice so they can hear themselves saying things correctly, and tracks progress across modes over time.

The main Lux app is a vanilla JS / Vite / Vanilla CSS frontend (~67K lines, ~400+ files) deployed on Vercel, with a Node/Express backend (`luxury-language-api`), Supabase/Postgres database, Azure Speech for assessment + TTS, OpenAI for AI coaching and conversation, OpenAI Realtime API for WebRTC, and ElevenLabs for voice cloning.

### What the Tours are

The Tours are a separate, React-based marketing-and-onboarding site that lives at https://lux-tours-preview.vercel.app. They show off and explain the main Lux app's features to potential users before they sign up. There are 6 pages: a Landing page (the spine) and 5 deep-dive Tour pages — Pronunciation, Coach, Voice, Conversations, Progress.

The Tours are their own product, their own repo (`MARKANDALL/lux-tours-preview`), their own Vercel deployment. **This architectural separation is locked. Do not suggest converting Tours to vanilla JS to ''match the main app.'' That conversation has been had and resolved repeatedly.**

### The relationship between Lux and the Tours

The Tours are how someone discovers and understands Lux. The marketing job *is* onboarding, and the onboarding job *is* honest demonstration. Chrome's product pages work this way — by the time you finish reading the AI Innovations page, you've been onboarded to what Gemini in Chrome does. Lux's Tours should work the same: sell *by* showing exactly how each feature works.

### The central mission of Phase 7 (current phase)

Make the Tours match Google Chrome / Google Workspace level of polish. Chrome is the design bible — specifically these six pages:

- https://www.google.com/chrome/
- https://www.google.com/chrome/ai-innovations/
- https://www.google.com/chrome/safety/
- https://www.google.com/chrome/browser-tools/
- https://www.google.com/chrome/mobile/
- https://chromewebstore.google.com/category/extensions

The mission has two threads. **They must be done in this order:**

**Thread A — Backfill.** Fill in real Lux content where placeholders currently sit in the existing six-page onboarding frame. The frame is built and good. The slots need real material.

**Thread B — Polish.** Measure the Tours against Chrome systematically using a rubric, then iterate toward 9/10 quality. The rubric does not yet exist.

Per Mark's explicit re-centering at end-of-day 2026-05-11: backfill first, then polish.

### What success looks like

A six-page Tours site that:
- Has no placeholders left (all real Lux content)
- Reads at a Chrome-level of polish (rubric-measured)
- Carries Mark's authentic voice and convictions without sacrificing clarity
- Stays at B1 CEFR ceiling on body copy (the audience is non-native English speakers)
- Sells by honestly demonstrating, never by faking

---

## PART 2 — FULL PROJECT STATE

### Repo geography

Two separate repos, two separate Vercel deployments, two separate git histories. The main repo is `MARKANDALL/lux-frontend` at `C:\dev\LUX_GEMINI`. The Tours repo is `MARKANDALL/lux-tours-preview` at `C:\dev\LUX_GEMINI\ONBOARDING\tours-preview`. They live in nested folders on disk but they are independent projects.

Inside the Tours repo, the source pages live at `src\pages\`: Landing.jsx (~3,124 lines, the spine), Pronunciation.jsx, Conversations.jsx, Coach.jsx, Voice.jsx, Progress.jsx. The `docs\` folder holds HANDOVER.md (this file) and VOICE_AND_BELIEFS.md. The main repo also has a `docs\` folder containing META_NOTES.md.

### Stack (Tours only)

- Vite 8.0.11 + React
- react-router-dom for client-side routing
- lucide-react for icons across all 6 pages
- No CSS framework. All styles inlined per-component in template-literal `<style>` blocks
- Google Fonts loaded at runtime in `src/main.jsx`: Montserrat (400-900) + JetBrains Mono (400-800)
- No state management library. All state is local `useState` per page
- No CSS preprocessor

### Deployment

Tours auto-deploys to https://lux-tours-preview.vercel.app on every push to `main` of the Tours repo. Build time ~60-90 seconds. `vercel.json` in the Tours repo contains the SPA rewrite rule that makes client-side routes work. **Do not modify or delete that file.**

### Routing (in src/App.jsx)

Six routes: `/` redirects to `/welcome`; `/welcome` is Landing; `/welcome/pronunciation`, `/welcome/conversations`, `/welcome/coach`, `/welcome/voice`, `/welcome/progress` are the five Tour pages; `*` redirects back to `/welcome`.

### Brand DNA (immutable — do not change without explicit approval)

Colors (verbatim from `DEFAULT_DESIGN` in Landing.jsx):
- `--bg: #FFFFFF`
- `--brand: #0078D7` (Lux blue — sacred)
- `--brand-hover: #1A8AE0`
- `--ink: #08080E`, `--ink-soft: #1A1D2E`, `--ink-medium: #4A4860`, `--ink-faint: #7C7A8E`
- `--line: #E5E7EB`
- `--score-good: #2563EB` (≥80), `--score-warn: #D97706` (60-79), `--score-bad: #DC2626` (<60)
- `--gold: #EAB308` (recording state, stress markers)
- Tour-specific accents: `--voice-purple: #7C3AED`, `--tutor: #0078D7`, `--sergeant: #B91C1C`, `--expert: #6D28D9`

Typography:
- Primary: Montserrat, system-ui, sans-serif (weights 400, 500, 600, 700, 800, 900)
- Mono accents: JetBrains Mono
- Hero: font-weight 900, letter-spacing -0.04em, line-height 0.96, size 7.5rem
- Section titles: font-weight 800, letter-spacing -0.025em, size 3.75rem (60px)

Scoring tier system (matches the real Lux app):
- Good: ≥80 (blue), Warn: 60–79 (amber), Bad: <60 (red)

CEFR thresholds (sacred):
- C2: ≥95 / C1: ≥90 / B2: ≥85 / B1: ≥75 / A2: ≥60 / A1: <60

---

## PART 3 — EVERYTHING SHIPPED

### Phases 1–6 (before this thread started)

Built across many prior sessions. Six Tour pages authored as standalone JSX files, scaffolded into Vite + React, deployed to Vercel as a separate project. Mobile polish completed on the Landing page only (other Tours remain unpolished for mobile — **deferred indefinitely per Mark's executive decision**). Brand-mark made clickable to /welcome across all 6 pages. Three mobile CSS blocks injected into Landing.jsx.

Full Phases 1–6 history is captured in the previous handover that opened this thread. Search the git log for tag `v8.5-tours-complete` and earlier for that timeline.

### Phase 7 — this thread (2026-05-11)

All tags and commits in chronological order:

1. `v1.1-snake-oil-sweep-pass-1` — Removed three speed-of-mastery claims from Landing and Coach: the phoneme chip title ''Master /θ/ in three days'' → ''Master /θ/, step by step''; the hero headline tail ''better, fast.'' → ''better, sound by sound.''; the Sergeant description ''You will improve faster.'' → ''You will improve.'' Established the principle: *the lie is the timeline, not the ambition.*

2. `v1.2-behind-lux-real-content` — Replaced the three placeholder Behind Lux cards on Landing with real content. Each card carries a distinct voice (Fighter / Dumbledore / Joy). Removed the yellow PLACEHOLDER banners and dashed-warning-border styling. Note: this commit accidentally included `repomix-output.xml` — a ~10,000-line dump committed by accident. See ''queued cleanup'' below.

3. `v1.2.1-behind-lux-tightened` — Cut Card 1 from 116 → 74 words and Card 3 from 96 → 75 words to match Card 2's 76 words. Mobile wall-of-text problem resolved.

4. `v1.2.2-tours-handover` — Initial creation of `docs/HANDOVER.md`. Created `docs/` folder in the Tours repo.

5. Apostrophe cleanup commits (two: one in Tours repo for HANDOVER.md, one in main repo for META_NOTES.md) — fixed a PowerShell here-string escaping artifact where every apostrophe rendered as double-single-quotes in the output file. See ''Workflow gotchas'' below.

6. `docs/VOICE_AND_BELIEFS.md` added (Tours repo) — consolidated brand voice principles, three voices, five classroom mantras, supporting research (Rubin 1975, Stern 1975, Naiman et al. 1978, Krashen Affective Filter Hypothesis 1982), Mark's personal stake. ~10,000 chars. The well from which all future copy decisions draw.

7. `docs/META_NOTES.md` added (main repo, `C:\dev\LUX_GEMINI\docs\META_NOTES.md`) — four strategic product questions that surfaced during the session: META-1 (Pronunciation → Speaking tool reframe), META-2 (Add a horizon / credentialing), META-3 (The Mark Coach as a fourth Coach personality), META-4 (Mark Bot — RAG-backed personal guide).

### The three Behind Lux cards (current live copy on Landing)

These are the most concrete content artifact from this session. Each is the canonical example of one of the three brand voices.

**Card 1 — THE MAKER (Fighter voice)**
Title: ''Built by a teacher AND a student — who's still climbing''

Lux was built by an award-winning ESL teacher with 13+ years in the classroom. But more than that — by someone who learned Spanish as an adult, sat for the C1 exam at La Escuela Oficial de Idiomas, and at forty-one is *still* working on his own accent (built the app partly for himself). He knows what the climb feels like from the inside. The embarrassment. The mornings you wake up knowing the outside world is one conversation away. He also knows it's *so* worth every step. Lux is for the people who *want* to keep climbing — and who deserve a guide that honors that journey.

74 words. Italics on *still*, *so*, *want*.

**Card 2 — THE SCIENCE (Dumbledore voice)**
Title: ''The science behind every score.''

Lux uses Microsoft's Azure Speech Services to listen to every sound you make and score each one on its own — a real number for every phoneme in every word. On top of that, Lux adds its own scoring layer for rhythm, stress, and pace, because how you *say* a word matters as much as which sounds you hit. The math is built to be honest, not flattering. Every score has a reason. You can always see why.

76 words. Italics on *say*. The trust anchor of the section: *''The math is built to be honest, not flattering.''*

**Card 3 — THE VOICE CLONE (Joy voice)**
Title: ''Hear yourself, getting it right.''

Lux can clone your voice. Then it speaks back to you — your voice, but with every sound landing exactly where it should. Most pronunciation tools play you a native speaker and ask you to copy. The problem is, that voice isn't yours. It's a target you can't quite see yourself reaching. But hearing your own voice say a word correctly — that's different. Suddenly the target has your face on it. Suddenly it's reachable. One of language learning's small miracles.

75 words. Closes on a deliberate fragment.

---

## PART 4 — BRAND VOICE + PHILOSOPHY

The full version with examples and research backing lives in `docs/VOICE_AND_BELIEFS.md`. **Read that file before writing any new copy.** What follows is the short reference.

### The core conviction

Language learning is one of the most difficult and consequential things an adult can take on. It cannot be rushed. There are no shortcuts. Apps promising mastery in days or weeks are selling something that does not exist. What does exist: a long road of repetition, embarrassment, small wins, daily effort.

The honest acknowledgment of this difficulty is not discouraging. It is bonding. A learner who has been told for years it should be faster hears the truth and feels seen.

This is the spine of every Lux voice decision. **Honor the climb. Reject the snake oil. Walk it with the learner.**

### The five brand voice principles

1. **The lie is the timeline, not the ambition.** Mastery as aspiration is fine. The snake-oil voice is ''you can master this *fast*.'' Strip every speed promise. Keep the ambition.
2. **Three voices, deployed deliberately.** Fighter / Dumbledore / Joy. Pick one per section. Don't blend.
3. **B1 CEFR ceiling on body copy.** Non-native English speakers. Define jargon casually on first appearance.
4. **Build-state honesty is sacred.** Production / In Active Development / Coming Soon status pills. Never fake.
5. **The marketing job is onboarding. The onboarding job is honest demonstration.** Chrome's pattern.

### The three voices

- **Fighter** — heart, climb, honor, no shortcuts. Acknowledges struggle directly, then pivots to ''it's worth it.'' Used in Card 1.
- **Dumbledore** — quiet authority, technical clarity. Names hard things in plain language. Demonstrates understanding through restraint. Used in Card 2.
- **Joy** — wonder, curiosity, small miracles. Specific sensory imagery, never abstract joy. Never sentimental. Used in Card 3.

### The five classroom mantras (from the wall of Mark's classroom)

1. Don't be perfect, just try.
2. Be patient — with everyone, including yourself.
3. Get the message across. Two heads, never running at once. (Analyzing head for practice; flow head for speaking. Never both at once.)
4. Circumlocution is a positive skill.
5. Laugh it off.

Full prose for each in `VOICE_AND_BELIEFS.md`.

### The personal stake

Mark is a teacher who *also* learned Spanish as an adult, lived in Spain for six years, sat for the C1 exam at La Escuela Oficial de Idiomas, and at forty-one is still working on his own accent. He built Lux partly for himself. Lux is not from someone who studied the problem from the outside — it is from someone who has paid the price and is still paying it.

---

## PART 5 — THE PATH FORWARD

### Tomorrow's first move

Per Mark's explicit instruction at end-of-day 2026-05-11: **start with the Chrome observation pass.** Not more copy work. The strategic foundation needs to be built before tactical polish continues.

Specifically:

1. Read all six Chrome reference pages carefully (only the first two were read on Day 1 of the previous thread)
2. Produce `docs/CHROME_OBSERVATIONS.md` — a structured ''what they're doing, technique by technique'' document. No judgment, no scoring. Pure description.
3. After observation, run a quick prior-art sweep for existing web design rubrics (Nielsen Norman, Material Design, Baymard, etc.)
4. Synthesize observation + prior art + the v1 rubric draft into a v2 rubric → `docs/RUBRIC.md`
5. Score the current Landing page against the v2 rubric → `docs/LANDING_RUBRIC_REPORT_v1.md`
6. *Then and only then* return to placeholder backfill work, now rubric-guided

### Placeholder inventory

Pure copy work — can be tackled in standard polish sessions:
- Use Cases marquee (13 cards on Landing) — voice audit needed against `VOICE_AND_BELIEFS.md`. Current copy is decent but pre-dates the voice work.
- Manifesto language on Landing — currently functional but generic. Animation structure is good; words could carry more voice.
- 5-card Tours menu on Landing — tag/title/body/CTA on each of the five outbound cards.
- Section eyebrows and titles across all 6 pages.
- Tour intro copy on each of the 5 Tour pages.
- Cross-Tour outbound card copy.

Off-keyboard work — Mark needs to produce media:
- Hero video on Landing (~30 sec ambient loop)
- Mic loading-state video
- Real phoneme audio for tooltips
- Mouth videos for /θ/, /ð/, etc.
- Tutorial videos for Word/Phoneme columns
- Mark's voice samples (original + cloned) for Voice Tour
- 6 TTS character samples for Voice Tour
- Master Modal karaoke audio
- 8-second scenario videos for Conversations picker (25 scenarios)
- AI-generated scene image for Conversations live interface

Demo data that stays demo per build-state honesty pattern:
- Progress Tour hardcoded data (47 sessions, etc.) — marked as demo, fine as-is.

### Queued cleanup tasks

- Add `repomix-output.xml` to `.gitignore` in the Tours repo. It was accidentally committed in v1.2-behind-lux-real-content. The existing committed copy can stay — removing it adds churn. But future repomix runs should not be tracked.
- Fix the main repo's redirected git remote URL (cosmetic): `git remote set-url origin https://github.com/MARKANDALL/lux-frontend.git` — currently configured against an older HTTP URL that auto-redirects.

### Strategic product questions (the META notes)

Four big product questions surfaced during this session. They apply to the *main Lux app*, not the Tours. They live in `C:\dev\LUX_GEMINI\docs\META_NOTES.md`. They are not bugs and not tasks — they are questions that need dedicated thinking-through, not solving in passing.

- **META-1: Pronunciation → Speaking tool reframe.** Is Lux narrower than it should be? Phoneme accuracy vs. *speaking better* (word choice, register, flow, confidence). Affects positioning, naming, tagline.
- **META-2: Add a horizon.** Lux has no finish line. Some learners need a credential, a level, an end-state. Strategic product question.
- **META-3: The Mark Coach.** Should there be a fourth Coach personality coded with Mark's beliefs? Smaller scope, scoped change.
- **META-4: Mark Bot (RAG-backed personal guide).** Site-wide AI guide fed by a Google Doc of Mark's manifesto material. Long-term vision; META-3 is its MVP.

VOICE_AND_BELIEFS.md is the natural seed material for META-4 when that becomes real.

---

## PART 6 — WORKFLOW AND PREFERENCES

### Mark's working environment

- Windows 11 Home (build 26200), Dell Inspiron 3020, i7-13700, 64GB DDR4-3200, Intel UHD 770, 512GB NVMe
- VS Code with two terminals: one running `npm run dev` on localhost:5173, one for git and edits
- PowerShell 7+
- Mark works from `C:\dev\LUX_GEMINI\ONBOARDING\tours-preview` for Tours work
- Mark works from `C:\dev\LUX_GEMINI` for main lux-frontend work

### Code style preferences

- Prefer full-file rewrites over surgical find-and-replace for large changes. For tiny precise edits, targeted `.Replace()` calls via PowerShell are correct.
- Delete trial code that doesn't work rather than leaving bloat
- Never truncate, abbreviate, or make ''creative'' changes unless explicitly requested
- Disclose any non-verbatim edits
- For files >1000 lines, use grep/view rather than reading the whole file

### Git workflow conventions

- Conventional commit messages with scope: `feat(landing):`, `fix(voice):`, `docs:`, `chore:`, `refactor:`
- Annotated tags for every shippable milestone
- Push commit AND tag separately
- Auto-generate commit messages without asking Mark to supply details
- Semicolon-chained PowerShell one-liners for git

### PowerShell-specific patterns

- Always use `[System.IO.File]::ReadAllText` for reading and `[System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))` for writing. This guarantees UTF-8 no BOM.
- Never `Set-Content` for content writes — encoding behavior is ambiguous.
- Use `Select-String` not `grep`.
- Windows path conventions: backslashes.
- For multi-line content paste-blocks, use here-strings.

### Workflow gotchas discovered in this session

1. **PowerShell single-quoted here-string apostrophe escaping.** When using `@'...'@`, every literal apostrophe in the content must be doubled. Two cleanup commits were needed today to fix this. For markdown content with many apostrophes, `@"..."@` (double-quoted) is safer — but then dollar signs and backticks need escaping. This Constitution uses double-quoted here-string with escaped backticks.

2. **repomix-output.xml committed accidentally.** Add it to `.gitignore` (queued).

3. **Main repo's git remote is on the redirected HTTP URL.** Cosmetic only.

4. **CRLF/LF warnings.** Harmless. Git auto-normalizes.

5. **`repomix` direct command may fail.** Use `npx repomix` instead.

### Always run `node --check` on JSX before committing

This is a hard rule. The v8.3 Coach Tour bug shipped a syntax error that broke the page. If syntax fails, do not commit.

### Lux-specific operational notes

- Lux onboarding reset (for the main app): `localStorage.clear(); sessionStorage.clear(); location.reload();`
- `lux-backup` is a Mark-defined one-word PowerShell command that zips the main repo at two refs to a desktop backup folder.
- Backend startup for the main app: `cd C:\dev\luxury-language-api; $env:GEMINI_API_KEY = ''...''; lux-backend`

### Communication preferences

- Avoid over-formatting in casual replies (minimal bold, headers, lists)
- For reports / documents: prose-first, no bullets / numbered lists / excessive bold unless content is genuinely list-like
- Never use bullet points when declining a task
- Warm but direct
- Push back constructively when needed
- Be honest about uncertainty
- Don't restate documents back at Mark — he wrote them, he doesn't need them paraphrased
- Don't do meta-commentary on what you're about to do; just do it
- When Mark gives a long impassioned input, absorb it carefully and respond to it specifically. Acknowledge what he gave you without paraphrasing it back at length.

### Things Mark dislikes

- ''Fast'' / ''quickly'' / ''in days'' / ''in weeks'' / ''mastery in [time]'' — the snake-oil voice. Strip everywhere.
- ESL-related content unless he specifically asks
- Vague CTAs like ''Learn more'' or ''Click here''
- Sentimentality / exclamation points in copy
- Repetition of decisions already made (React vs vanilla JS, mobile work, etc.) — these have been settled; don't re-litigate

---

## PART 7 — REFERENCE DOCUMENTS

When a new session starts, read these in this order:

1. `docs/HANDOVER.md` (this file) — top-level orientation
2. `docs/VOICE_AND_BELIEFS.md` (Tours repo) — open before writing any copy
3. `C:\dev\LUX_GEMINI\docs\META_NOTES.md` (main repo) — strategic product questions

Open them. Read them. Then ask Mark what he wants to start with.

---

## PART 8 — IMPORTANT THINGS NOT TO SUGGEST

- Don't suggest converting Tours to vanilla JS. Architecture is locked.
- Don't suggest mobile work unless Mark explicitly asks. Mobile polish is deferred indefinitely after Landing.
- Don't change brand DNA (colors, fonts, design tokens) without explicit approval.
- Don't add citations to public marketing copy. The Tours don't cite studies. Research informs the voice silently; it never appears verbatim on the public site.
- Don't dribble VOICE_AND_BELIEFS.md content into public copy. It's a *source*, not a script.
- Don't reformat existing pages structurally without asking — they've been calibrated.
- Don't assume the previous Claude was right on every detail — be willing to suggest improvements, but disclose when you're changing direction.
- Don't ship JSX without running `node --check` first.

---

## PART 9 — RECOVERY PLAN

**Reverting via Vercel.** Dashboard → lux-tours-preview → Deployments → find last working → Promote to Production. Live URL reverts instantly without git changes.

**Reverting via git.** `git log --oneline -20` to find the last good commit, then `git revert <commit-hash>` to create a new commit undoing it, then `git push origin main`.

**Original .jsx backups.** Untouched source files from before the Vite scaffold are at `C:\dev\LUX_GEMINI\ONBOARDING\lux-*.jsx`. Nuclear option only.

---

## PART 10 — FIRST RESPONSE WHEN MARK SAYS ''GO''

Do not paraphrase this document back at him. Do not restate the mission. Do not re-explain decisions. Do not ask basic setup questions — every answer is here.

Acknowledge briefly that you have the context. Ask what he wants to start with — and prompt him toward the Chrome observation pass per his end-of-day instruction, while leaving room for him to redirect.

Something like:

''Got the full context. Chrome observation pass is queued as the first move per yesterday's decision — read all six reference pages, produce `docs/CHROME_OBSERVATIONS.md`, then build the rubric from there. Want to start with that, or is there something more urgent you want to tackle first?''

Then wait.

---

**End of Constitution. Updated 2026-05-11. Mark and the previous Claude built this together in a long, rich session. The next Claude inherits a clean foundation, a clear mission, and a real philosophy to work within. Treat it accordingly.**