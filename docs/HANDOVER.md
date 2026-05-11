# Tours Polish — Handover

Most recent: 2026-05-11 (end of day)

## Tomorrow's first move

Re-center on the central mission. Two threads, in this order:

**Thread B (do this first):** Chrome / Google Workspace pages as the design bible. The original plan was: prior-art sweep → observation pass across all six Chrome pages → synthesize a measurable rubric → score Landing against it → polish iteratively toward 9/10. We have not done this yet. Start with the observation pass — read all six Chrome pages carefully and produce `docs/CHROME_OBSERVATIONS.md`. That document becomes the foundation for the rubric.

**Thread A (after the rubric exists):** Backfill the remaining placeholders in the onboarding frame with real Lux content. The six-page onboarding structure is already built and well-designed — it just needs the placeholder slots filled with authentic material.

Both threads serve the same goal: make the onboarding match what Google Chrome does, with real Lux content where placeholders currently sit.

## Where we are

Phase 7 (desktop polish) of Tours work. Mobile already polished and locked. The marketing-as-onboarding framing is locked. React stack is locked. Six-page Tours structure (Landing + 5 Tour pages) is built, deployed, and shipping real updates.

Live site: https://lux-tours-preview.vercel.app
Repo: MARKANDALL/lux-tours-preview
Local: C:\dev\LUX_GEMINI\ONBOARDING\tours-preview

## Shipped this session (2026-05-11)

- `v1.1-snake-oil-sweep-pass-1` — three speed-of-mastery claims removed (phoneme chip "in three days", hero tail "better, fast.", Sergeant "improve faster.")
- `v1.2-behind-lux-real-content` — three placeholder Behind Lux cards replaced with real content (Fighter / Dumbledore / Joy voices)
- `v1.2.1-behind-lux-tightened` — Card 1 from 116 → 74 words, Card 3 from 96 → 75 words to match Card 2 (76 words)
- `v1.2.2-tours-handover` — initial handover document
- Two apostrophe cleanup commits (artifact from PowerShell here-string escaping)
- `docs/VOICE_AND_BELIEFS.md` — consolidated brand voice + conviction reference document
- `docs/META_NOTES.md` in main lux-frontend repo — four strategic product questions surfaced during session

## Three Behind Lux cards (current live copy)

**Card 1 — THE MAKER**
Title: "Built by a teacher AND a student — who's still climbing"
74 words. The Fighter voice. Italics on *still*, *so*, *want*. Embedded the C1/EOI/forty-one-still-working-on-his-accent stake.

**Card 2 — THE SCIENCE**
Title: "The science behind every score."
76 words. The Dumbledore voice. Italics on *say*. Names Azure Speech Services, prosody layer, "math built to be honest, not flattering" as the trust anchor.

**Card 3 — THE VOICE CLONE**
Title: "Hear yourself, getting it right."
75 words. The Joy voice. Closes on the deliberate fragment "One of language learning's small miracles."

## Placeholder inventory — what still needs backfill

### Pure copy work (can be done in a session like today's):
- Use Cases marquee (13 cards on Landing) — voice audit against VOICE_AND_BELIEFS.md
- Manifesto language on Landing (current copy is functional but generic)
- 5-card Tours menu on Landing (Pronunciation/Coach/Voice/Conversations/Progress) — tag/title/body/CTA on each
- Section eyebrows and titles across all 6 pages
- Tour intro copy on each of the 5 Tour pages
- Cross-Tour outbound card copy

### Off-keyboard work (Mark needs to produce media):
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

### Demo data that stays demo:
- Progress Tour hardcoded data (Mark's 47 sessions, etc.) — fine per build-state honesty pattern

## Reference documents

Read both at the start of any new session:

- `docs/VOICE_AND_BELIEFS.md` (this repo) — core convictions, three voices, five mantras, brand voice principles, research backing. Open this before writing any copy.
- `C:\dev\LUX_GEMINI\docs\META_NOTES.md` (main repo) — four strategic product questions: speaking-tool reframe (META-1), horizon/credentialing (META-2), Mark Coach (META-3), Mark Bot RAG (META-4).

## Brand voice principles (the short version)

1. **The lie is the timeline, not the ambition.** Mastery as aspiration is fine; promising mastery on a timeline is the snake-oil voice. Filter every copy decision through this.
2. **Three voices, deployed deliberately:** Fighter (heart, climb, honor) — Dumbledore (quiet authority, technical clarity) — Joy (wonder, curiosity, small miracles). Different sections, different moods.
3. **B1 CEFR ceiling on body copy.** Audience is non-native English speakers.
4. **Build-state honesty is sacred.** ✅ / 🟡 / 🔵 status pills. Display what exists. Never fake.
5. **The marketing job is onboarding. The onboarding job is honest demonstration.** Chrome's pattern: educate by selling, sell by educating.

Full version with examples in `docs/VOICE_AND_BELIEFS.md`.

## Chrome reference pages (for the upcoming rubric work)

The six pages we will use as the design bible:

- https://www.google.com/chrome/
- https://www.google.com/chrome/ai-innovations/
- https://www.google.com/chrome/safety/
- https://www.google.com/chrome/browser-tools/
- https://www.google.com/chrome/mobile/
- https://chromewebstore.google.com/category/extensions

Day 1 of this thread, only the first two were fetched. Seven patterns were pulled out from those two. The remaining four pages still need to be observed.

## Workflow notes

- Mark works from `C:\dev\LUX_GEMINI\ONBOARDING\tours-preview` on Windows / PowerShell.
- Two terminals in VS Code: one running `npm run dev` (localhost:5173), one for git and edits.
- Paste-blocks use `[System.IO.File]::ReadAllText` / `WriteAllText` with UTF-8 no BOM, never Set-Content.
- Always run `node --check` on JSX before committing.
- `cd ..\..` from `src\pages` back to project root for git commands.
- Conventional commit messages with scope.
- Annotated tags for shippable milestones.
- Push commit AND tag separately.

**PowerShell here-string apostrophe escaping caveat:** When writing markdown content via `@'...'@` here-strings, every apostrophe in the content must be `''` (doubled). PowerShell parses correctly into the variable but if you skip this, the file will contain literal double-apostrophes. (Found this out the hard way today. Two cleanup commits fixed it after the fact.)

## Important things not to suggest

- Don't suggest converting Tours to vanilla JS. Architecture is locked.
- Don't suggest mobile work unless Mark explicitly asks. Mobile polish is deferred indefinitely.
- Don't change brand DNA (colors, fonts, design tokens) without explicit approval.
- Don't add citations to marketing copy. The Tours don't cite studies.
- Don't dribble VOICE_AND_BELIEFS.md content into public copy verbatim — it informs, it doesn't quote.