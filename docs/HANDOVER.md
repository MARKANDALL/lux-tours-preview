# Tours Polish — Handover

Most recent: 2026-05-11

## Where we are

Phase 7 (desktop polish) of Tours work. Mobile already polished and locked. The marketing-as-onboarding framing is locked. React stack is locked.

Live site: https://lux-tours-preview.vercel.app
Repo: MARKANDALL/lux-tours-preview
Local: C:\dev\LUX_GEMINI\ONBOARDING\tours-preview

## Shipped this session (2026-05-11)

- `v1.1-snake-oil-sweep-pass-1` — removed three speed-of-mastery claims: phoneme chip "in three days", hero tail "better, fast.", Sergeant "improve faster."
- `v1.2-behind-lux-real-content` — replaced three placeholder Behind Lux cards with real content (Fighter / Dumbledore / Joy voices).
- `v1.2.1-behind-lux-tightened` — cut Card 1 from 116 → 74 words, Card 3 from 96 → 75 words to match Card 2 (76 words). Mobile wall-of-text problem resolved.

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

## Brand voice principles (established this session)

1. **The lie is the timeline, not the ambition.** Mastery as aspiration is fine; promising mastery on a timeline is the snake-oil voice. Filter every copy decision through this.
2. **Three voices on the Tours site:** Fighter (heart, climb, honor), Dumbledore (quiet authority, technical clarity), Joy (wonder, curiosity, small miracles). Different sections, different moods, deliberately deployed.
3. **B1 CEFR ceiling on body copy.** Audience is non-native English speakers.
4. **Authentic over polished.** Build-state honesty (✅/🟡/🔵) is sacred. Display what exists, mark gaps honestly, never fake.

## Queued but not done

- The Manifesto rewrite — the word-by-word reveal section near the top of Landing. Currently fine but doesn't carry the brand voice established in this session.
- The five-mantras section — a new artifact, possibly footer, possibly its own page. Mark's classroom mantras as a real on-site element.
- Snake-oil sweep pass 2 across the 5 Tour files (Pronunciation/Coach/Voice/Conversations/Progress). Initial grep showed mostly clean — needs careful re-read before declaring done.
- `.gitignore` for `repomix-output.xml` — accidentally committed in v1.2.
- Desktop polish proper: prior-art sweep, observation pass against Chrome / Workspace pages, build the measurable rubric, then iterate. The big arc.
- Real hero video (currently placeholder).
- Real 8-second scenario videos for Conversations Tour picker.
- Real audio for Voice Tour (Mark records).
- Real mouth videos for Pronunciation phoneme tooltips.

## Strategic product questions

See `C:\dev\LUX_GEMINI\docs\META_NOTES.md` for the four META notes (speaking-tool reframe, horizon/credentialing, Mark Coach, Mark Bot RAG). Those are main-app questions, not Tours questions.

## Workflow notes for next Claude

- Mark works from `C:\dev\LUX_GEMINI\ONBOARDING\tours-preview` on Windows / PowerShell.
- Two terminals in VS Code: one running `npm run dev` (localhost:5173), one for git and edits.
- Paste-blocks should use `[System.IO.File]::ReadAllText` / `WriteAllText` with UTF-8 no BOM, never Set-Content.
- Always run `node --check` on JSX before committing.
- `cd ..\..` from `src\pages` back to project root for git commands.
- Conventional commit messages with scope (`fix(landing):`, `feat(voice):`, etc.).
- Annotated tags for every shippable milestone (`git tag -a v1.2.1-behind-lux-tightened -m "..."`).
- Push commit AND tag separately: `git push origin main; git push origin v1.2.1-behind-lux-tightened`.

## Important things not to suggest

- Don't suggest converting Tours to vanilla JS. Architecture is locked.
- Don't suggest mobile work unless Mark explicitly asks. Mobile polish is deferred indefinitely.
- Don't change brand DNA (colors, fonts, design tokens) without explicit approval.
- Don't add citations to marketing copy. The Tours don't cite studies.