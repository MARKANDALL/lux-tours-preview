<!--
File: ONBOARDING/tours-preview/docs/CHROME_OBSERVATIONS_RAW_NOTES.md
Purpose: Unedited research-notebook companion to CHROME_OBSERVATIONS.md.
Captures the frame-by-frame looking process, granular details, and asides
that were compressed or omitted from the polished observation document.
Kept alongside the polished version as a belt-and-suspenders safety net —
at the end of the Chrome observation pass, comparing the two files will
surface anything that was lost in compression.
-->

# Chrome Observations — Raw Notes

A companion file to `CHROME_OBSERVATIONS.md`. This is the research notebook — the unedited frame-by-frame looking process, granular details, micro-observations, and asides that were compressed or omitted when the polished observation document was written. The polished doc is the reference for the rubric work that follows; this doc is the verification trail and the safety net.

If a detail appears here but not in the polished doc, that is on purpose — it was either too granular to feed the rubric or sat below the threshold of "load-bearing observation." When the Chrome pass is complete, the two files should be read side by side; anything in this file that turns out to matter can be promoted upward.

This file is intentionally less polished than its sibling. It is structured by the looking process, not by the rubric categories. The polished doc treats each Chrome section as one viewport (Viewport 2 = AI section, Viewport 3 = Yours section, etc.) Within those sections, this raw-notes companion uses a finer granularity — one entry per *screenful* the user encounters while scrolling. So a polished-doc Viewport may map to several screenful entries here. That intentional mismatch is fine; each file's structure serves its own job.

**Status:** Page 1 complete (hero V1, AI section screenfuls 2A–2C, Yours section screenfuls 3A–3D, Safe section screenfuls 4A–4C, Fast section screenfuls 5A–5C, By Google section screenfuls 6A–6B, Updates 7, FAQ 8, Final CTA + footer 9, plus cross-section findings).
**Started:** 2026-05-12.
**Last updated:** 2026-05-14.

---

## Source materials used

### Page 1 Viewport 1 (hero) source materials

Six screen recordings and one full-page screenshot uploaded by Mark on 2026-05-11, plus two text transcripts of Mark's spoken observations and a paste of the page's full text content.

The six video files and their captures:

- `20260511-2220-48` (28.1s, 808×802, 30fps). Close-up recording of the hero video area at normal speed. Full cycle captured.
- `20260511-2226-28` (9.8s, 1912×1078, 30fps). Fullscreen recording capturing the initial page load — shows the staggered arrival of headline, button, logo, and hero video together.
- `20260511-2227-01` (6.5s, 750×730, 30fps). Close-up of only the left text column during initial load. Diagnostic for the text-arrival sequence.
- `20260511-2227-38` (29.6s, 1918×1078, 30fps). Fullscreen recording at normal speed. Full cycle of the hero video in the context of the whole page.
- `20260511-2229-57` (10.0s, 742×660, 30fps). Close-up recording of the first half of the hero video (the AI search / Gemini act).
- `20260511-2230-47` (29.4s, 736×720, 30fps). Close-up recording of the hero video slowed to roughly 0.25× speed. Full cycle. The primary instrument for transition analysis.

The screenshot: `1778538694117_image.png`. Full-page screenshot of the page on initial state.

### Page 1 AI section and Yours section source materials

Direct observation during 2026-05-12 and 2026-05-13 sessions. Materials referenced:

- Conversation-based walkthroughs by Mark of each AI-section screenful (the section-title-plus-YouTube-video screenful, the dual-mockup screenful, the Gemini in Chrome subsection screenful).
- Conversation-based walkthroughs by Mark of each Yours-section screenful (the scroll-linked landscape-to-theme transformation, the three-up carousel, the Extend Your Experience subsection).
- Four screen recordings of the Yours carousel captured 2026-05-13 by Mark:
  - `20260513-2339-30` (23.1s, 1914×1078, 30fps). Fullscreen recording showing the carousel cycling in the context of the whole page.
  - `20260513-2340-22` (16.9s, 672×684, 30fps). Close-up of the cycling left demo panel through multiple categories.
  - `20260513-2343-58` (20.9s, 658×732, 30fps). Close-up of the three rotating category titles on the right column.
  - `20260513-2344-46` (8.6s, 470×538, 30fps). Hover-state recording of the section-level "Sign in to get started" pill.
- Mark's text-content paste of the full Page 1 content (used in earlier sessions for voice analysis).
- The compiled handover summary at `HANDOVER_CHROME_OBSERVATIONS_MAY_13_2026.md`.

The Yours carousel videos were processed at 2 fps and viewed as contact sheets. Targeted close-up frames were extracted for the section-level CTA pill hover state.

---

## Looking process — Page 1 Viewport 1 (hero)

Frames were extracted from each video using ffmpeg. Initial pass at 2fps from each of the six videos produced 188 frames total, viewed as contact sheets. A second pass at 4fps was run on the slowed close-up (video 6) producing 118 higher-density frames, from which targeted contact sheets of five specific transitions were assembled and viewed at higher resolution.

The notes below follow the order the looking happened in.

---

## Contact sheet observations — initial overview pass

### Video 4 — Fullscreen, normal speed, full cycle (29.6s, ~59 frames at 2fps)

The most diagnostically valuable single view. Shows the entire page during one full hero video cycle. Observations from scanning the 6×10 grid top-to-bottom:

- Frames 1–2 show the page in a mid-cycle state (the previous loop's tail end — sign-in form visible in the hero panel).
- Frames 3–4 are mostly white. Page is reloading.
- Frame 4: the headline "The browser that gets more done" becomes faintly visible. No logo yet. No hero video yet.
- Frame 5: headline is fully solid black. Download button has appeared below. Hero video has not yet started.
- Frame 6: Chrome logo has appeared above the headline. Hero video is starting (Chrome circle visible, beginning its zoom).
- Frame 7 onward: hero video begins its full cycle. The rest of the page remains absolutely static — headline, button, legal text, QR code, nav, announcement bar do not move.
- Across the entire grid (frames 7 through 56), the left column and the top/bottom of the page are visually identical. The only thing changing is what is happening inside the hero video panel on the right.

What this confirms: motion is fully concentrated in the hero video. Nothing else on the page above the fold moves once the page has loaded. The page is, in effect, a still photograph with one animated panel.

Also visible from this grid: the next section's title ("Our most powerful AI search") is visible at the bottom edge of every frame after frame 6. The hero is engineered to suggest there is more below.

### Video 6 — Slowed close-up, full cycle (29.4s, ~59 frames at 2fps)

This is the analytical instrument. At 0.25× speed, each act of the five-act video gets enough frames at 2fps sampling to actually trace the transitions. Frame-by-frame summary of what was visible across the 6×10 grid:

**Frames 1–2:** Pure white. Anticipation breath.

**Frames 3–7:** Chrome logo birth. Tiny logo dot in center grows steadily. By frame 5, the inner blue circle of the Chrome logo is wide enough that the young man's face is faintly visible inside it. By frame 6, the outer red-yellow-green ring is beginning to thin/fade. By frame 7, the outer ring is mostly dissolved and the inner content (the man) fills most of the frame.

**Frame 8:** The transformation has completed. The Chrome ring is gone. What was the logo's inner lens is now showing the man in a green hoodie / white t-shirt, looking down at his laptop.

**Frames 9–10:** Card has formed. Chemistry tablet visible: "Chemical Bonds: Ionic and Covalent" title visible, "By Dr." (truncated author name) visible underneath. The card arrives at a slight perspective tilt — viewed as if from the side — before settling to frontal. Hand visible at the top edge of the tablet (someone is holding it).

**Frames 11–12:** White wipe arriving from the top-right corner. The chemistry card is being covered. As it covers, the top-right corner of a Chrome browser window becomes visible against off-white — minimize button, maximize button, close X, favorites star, profile bubble, three-dot menu. The Gemini star button is in the middle of this group.

**Frame 13:** The Gemini star button is highlighted with a circular spotlight effect — a soft white circle around the black star icon, making it the focal point.

**Frame 14:** The Gemini star transitions from black to the rainbow Gemini gradient (magenta/yellow/cyan combination).

**Frame 15:** Transition begins. White circle starts to dissolve around what will become the keyboard close-up.

**Frame 16:** Close-up of fingers on a keyboard, in an irregular shape (mid-transition).

**Frame 17:** Fingers shot now in a clean circular frame. A small Gemini icon (the rainbow star) is visible in the top-left of the circle, overlapping its edge.

**Frame 18:** Below the fingers circle, a small Gemini chat card has appeared — just the input field visible at this point, with "Gemini" header bar and some interface elements.

**Frame 19–20:** Text appearing in the chat input field. By frame 20, the input shows "Help me understand the difference between" (partial).

**Frame 21:** Transition. The circle now shows a young woman on a bed with her laptop, wearing a pink/peach top, headphones visible. Gemini chat card below her has expanded slightly.

**Frame 22:** The Gemini chat card has now grown. The question is fully typed: "Help me understand the difference between these chemical bonds." The girl's portrait is starting to shrink. A response is beginning below the question: "Absolutely!"

**Frames 23–24:** Girl's portrait has shrunk further, moved to the bottom-left. The Gemini response is now substantial: "Absolutely! The difference between ionic and covalent bonds comes down to how atoms share or transfer their outermost electrons to become more stable. Ionic Bonds: Give and..." The phrase "how atoms share or transfer their outermost electrons to become more stable" has cyan highlighting on it — visible as a colored band behind that text.

**Frame 25:** Same composition. Girl's portrait still in bottom-left, full Gemini answer still displayed. The cyan highlight is sustained.

**Frame 26:** Transition to Google Lens act. The Google Lens icon (rainbow camera) is appearing as a small circle over the Gemini chat. The Gemini content is still partially visible underneath.

**Frame 27:** Google Lens icon has grown larger. It is now centered, the white circle has covered most of the previous content.

**Frame 28–29:** White breath. The Lens icon floats on near-white background.

**Frame 30:** New scene establishing — overhead view of a man in a plant nursery. He's wearing a white shirt, walking among rows of potted plants (cacti and small succulents visible). The floor is terracotta-tile patterned. He's holding his phone.

**Frame 31:** Same scene, slight time progression. The card showing him has settled into a portrait-orientation rounded rectangle.

**Frame 32–33:** Transition. The plant store card is shrinking and moving toward the bottom-left. A new card is fading in / coming up from below showing a phone interface — Google Lens viewing a cactus, with a "Google" search input card stacked to its left.

**Frame 34:** Phone view fully visible. Google Lens app showing the cactus from above. "Google Lens" header at top. "3:46" system time visible. A search-results card has begun to appear at the right side showing "Euphorbia / Ingens / Plant."

**Frame 35:** The "Google" search input card on the left side slides out. The Euphorbia result card on the right is now fully visible.

**Frame 36:** Phone view continues. The G shield (Safe Browsing icon) is beginning to appear over the phone — a white circle growing in center.

**Frame 37:** G shield more visible. The phone behind it is fading.

**Frame 38:** Full G shield on its own — a solid blue/navy shield shape with a white "G" cutout. The phone has been replaced entirely.

**Frame 39:** New scene. Outdoor setting. Two women petting a long-haired dog (looks like a golden retriever or large mixed breed). Trees in background. One woman is younger with a bandana, the other is older. They're crouched/kneeling.

**Frame 40:** Same dog scene, slightly different camera angle — the camera is rotating around them.

**Frame 41:** Scene change. A single woman walking on a leafy path with her dog on a leash, seen from behind. Path goes away into greenery.

**Frame 42:** Transition. A phone-shaped card is sliding up from below over the path scene. The path is still visible above and to the sides.

**Frame 43:** Sign-in form visible on the phone card. "Dog sitting" labeled at the top (small thumbnail + label). "Sign in" title. Email field (empty). Password field (empty). Below: "Remember me" checkbox + "Forgot password" link. Blue "Sign in" button at bottom.

**Frame 44:** A "Use Saved Password?" tooltip card has appeared, floating over the sign-in form. Contains "elisa.g.beckett" as the username and a row of dots for the password.

**Frame 45:** Tooltip has moved/settled into final position, partially overlapping the email field area.

**Frame 46–47:** Sustained on this state. The form-fill payoff is being shown.

**Frame 48:** Transition. Sign-in form is fading to white.

**Frame 49:** Complete fade to white. One full frame of nothing — the second white breath, marking the end of the cycle.

**Frame 50–53:** Loop restart. Chrome logo pinprick begins to reappear. Birth sequence repeats.

**Frame 54–55:** Chrome logo growing again, man visible inside again.

**Frame 56–59:** Loop continues — chemistry card again, browser UI again, on through the cycle.

A key observation that came from this granular pass: the "Pause video" button is present at the bottom-right of *every single frame* of the hero video. It does not appear and disappear; it is permanently mounted in that position. Always available, never highlighted.

### Video 1 — 28-second close-up at normal speed (~56 frames at 2fps)

Same cycle as Video 6 but at full speed and a slightly different framing/angle. Confirms the cycle structure. At full speed, the same 27-second loop is captured. No new information beyond what Video 6 already showed in slow motion, but useful as confirmation that the slowed version was not introducing artifacts.

One detail visible here that was less clear in the slowed version: at the moment the chemistry card arrives with its perspective tilt, the tilt is genuinely 3D — you can see the side edge of the tablet briefly. This is not a flat parallax fake; the card has been rendered with actual depth.

### Video 2 — 10-second fullscreen, captures initial page load (~20 frames at 2fps)

The diagnostic for the load sequence in context. Observations from the grid:

- Frames 1–2: page in a pre-existing rendered state (sign-in form visible in hero).
- Frames 3–6: page reload sequence:
  - Frame 3: white.
  - Frame 4: white with the very faint beginning of the headline visible.
  - Frame 5: headline fading darker. Button beginning to appear below.
  - Frame 6: headline solid black, button blue, secondary text visible. Logo not yet present above headline.
- Frame 7: Chrome logo has now appeared above the headline.
- Frame 8: legal text ("Help make Chrome better...") below the button has faded in. Hero video has begun on the right.
- Frames 9–19: hero video continues its cycle. Rest of page remains static.

The staggered arrival is visible at this resolution but harder to see in the precise order than in Video 3 (the close-up of just the left column).

### Video 3 — 6.5-second close-up of left text column during load (~13 frames at 2fps)

The precise diagnostic for the text arrival sequence. This is where the gray-to-black headline detail came from. Frame-by-frame:

- Frame 1: pre-existing state visible (text and logo already loaded from previous cycle).
- Frames 2–3: pure white — reload in progress.
- Frame 4: "The browser that gets more done" appears in **light gray** (roughly 50% opacity). No logo yet. No button yet.
- Frame 5: headline has darkened. Blue "Download Chrome" button has appeared below. "I want to update Chrome" link has appeared. Legalese has appeared. Still no logo above headline.
- Frame 6: all text on the left column is now fully solid (black headline, blue button, gray legal text). Still no logo.
- Frame 7: headline appears to shift up slightly. Subtle.
- Frame 8: slight further vertical adjustment of headline position.
- Frame 9: Chrome logo has appeared above the headline as a small circle — but it is currently monochrome / grayscale, not yet colored.
- Frame 10: Chrome logo colors are beginning to fill in — green and red just starting to appear.
- Frame 11: Chrome logo is more colorful — red, green visible.
- Frame 12: Chrome logo is fully rendered — all four colors (red, yellow, green, blue) in place.
- Frame 13: settled. No further changes.

The single most surprising detail from this video: the Chrome logo arrives **after** the headline and button, **after** the headline has slightly shifted up to make room, and the logo itself **animates its colors in** rather than appearing pre-colored. This is a multi-stage entrance for the brand mark.

### Video 5 — 10-second close-up of first half (Gemini act) (~20 frames at 2fps)

A higher-resolution recording of the AI search portion of the loop. Confirms details of the Gemini chat panel:

- The chat panel has a "Gemini" dropdown header in the top-left.
- A small profile icon in the top-right of the panel header.
- Below the header, the question bubble (user side) is right-aligned with gray background.
- Below that, the Gemini response begins with a small Gemini star icon (rainbow) on the left, then text.
- Within the response, technical phrases are highlighted with cyan band — observed phrase: "how atoms share or transfer their outermost electrons to become more stable."
- Below the response: a bulleted sub-section beginning "Ionic Bonds: Give and Take" and then "Think of it like a..." (truncated, the next moment in the response).
- At the bottom of the chat panel: an "Ask Gemini" input field and a "Sharing" button with a small dot indicator.

These details inform the polished doc's claim that the Gemini chat is shown in its actual interface state, not a stylized mockup.

---

## Targeted transition deep-dives (from 4fps extraction of Video 6)

A second pass at higher frame density was run on the slowed close-up to look more carefully at five specific transitions. Each transition was assembled into its own 3×3 contact sheet of nine frames.

### Transition 1 — Chrome logo birth (frames 1–21 at 4fps, every other shown)

- **Frame 1:** Pure white. Nothing visible.
- **Frame 5:** A tiny dot appears at center. Looking closely, it is recognizable as a complete Chrome logo at very small size. The man's face is *already faintly visible* inside the inner circle even at this size. The "soul" is in the logo from the start; it is not added later.
- **Frame 9:** Logo has grown to a modest size. Full rainbow ring still complete. Man inside is more visible.
- **Frame 11:** Logo is approximately a quarter of the canvas height. The outer ring is *still complete and saturated*. The man fills the inner blue circle.
- **Frame 13:** Logo is approximately half the canvas height. The outer ring is **beginning to dissolve at the bottom edge** — the yellow-green region at the bottom is becoming translucent.
- **Frame 15:** The outer ring is now visibly partial — bottom and right portions are fading away. The man fills more of the frame.
- **Frame 17:** Outer ring is mostly gone. What remains is a thin partial arc on the upper-left side.
- **Frame 19:** Card has formed. Outer ring is completely gone. The man fills the frame. Card has a slight rounded-corner shape.
- **Frame 21:** Settled. The chemistry tablet card is beginning to take over.

The dissolve mechanic is now clear: the outer ring does not contract toward the inner circle. It *fades from opaque to transparent* while the inner circle grows. The two motions happen simultaneously. This is what makes the transition feel like "opening" rather than "shrinking."

### Transition 2 — Chemistry card to browser UI (frames 22–38)

- **Frame 22:** Chemistry tablet card fully visible at slight perspective tilt.
- **Frame 24:** Card has settled to frontal view. "Chemical Bonds: Ionic and Covalent" clearly readable.
- **Frame 26:** White wipe is beginning to come around from the top-right corner. The chemistry card is being covered from one corner.
- **Frame 28:** Wipe has progressed. Most of the chemistry card is now covered by white, but a partial corner is still visible (the lower-left). The browser UI top bar (minimize, maximize, close, profile, three dots) is becoming visible against the off-white background.
- **Frame 30:** Wipe complete. Only the browser UI top bar is visible, floating in a near-white field. The favorites star, extensions puzzle piece, and Gemini star button are clearly visible.
- **Frame 32:** The Gemini star button is highlighted by a circular spotlight — a soft white circle (with slight shadow) is now around it. The star icon itself is still black.
- **Frame 34:** The black Gemini star has shifted to the **rainbow Gemini gradient** (magenta/yellow/cyan). This is not a gradual color fade — it appears to be a discrete change between two consecutive frames in the slowed version.
- **Frame 36:** Transition begins. The spotlight circle is beginning to expand. Behind it, the next scene (fingers on keyboard) is starting to be visible through edges.
- **Frame 38:** Fingers shot now mostly visible. Spotlight circle has become the frame containing the keyboard close-up.

Observation: the spotlight mechanic works in two phases — first as a *highlight* indicating "look at this," then as a *portal* opening into the next scene. Same circular shape doing two different communicative jobs in quick succession.

### Transition 3 — Gemini star to fingers to girl (frames 40–56)

- **Frame 40:** Fingers on keyboard in circular frame. Gemini star icon (rainbow) overlapping top-left of circle.
- **Frame 42:** Small Gemini chat card visible at bottom of frame, just the input area showing.
- **Frame 44:** Text typing has begun in the input field: "Help me understand the difference between"
- **Frame 46:** Text continues: "Help me understand the difference between these"
- **Frame 48:** Transition. Circle now shows the girl on her bed, not the fingers. The Gemini chat card is more visible below her, with the question more complete.
- **Frame 50:** Girl portrait visible at full size. Below her, the question is complete ("...these chemical bonds") and the response is beginning ("Absolutely!")
- **Frame 52:** Girl portrait beginning to shrink. The chat panel growing upward to take more space.
- **Frame 54:** Girl portrait is now small, in the lower-left. The full Gemini response is visible, with the cyan highlight on the technical phrase.
- **Frame 56:** Same composition, sustained for several frames.

Observation about the typewriter effect: the question text is typed out *while* the visual frame is changing (from fingers to girl). The typing isn't paused for the visual change. This creates a strong continuity — the same "thought" is being expressed across multiple visual contexts.

### Transition 4 — Lens act sequence (frames 60–84)

- **Frame 60:** Google Lens icon (rainbow camera) appearing as small circle over Gemini chat.
- **Frame 63:** Lens icon larger, now central.
- **Frame 66:** Lens icon dominates frame. Gemini content faded almost away.
- **Frame 69:** New scene. Overhead view of plant nursery, man walking with phone. Card has formed (rounded rectangle, portrait orientation).
- **Frame 72:** Phone interface card has appeared. "Google" search input card stacked to its left. The phone shows Google Lens with the cactus.
- **Frame 75:** Search input card has slid out (left). Phone interface remains. The result card "Euphorbia Ingens / Plant" has appeared on the right of the phone.
- **Frame 78:** Result card fully readable.
- **Frame 81:** G shield (Safe Browsing icon) is appearing centered, beginning to overlay the phone.
- **Frame 84:** G shield more prominent. Transitioning toward the safety act.

The slide-card swap mechanic is visible here in detail: the input card slides *out* to the left at the same time the result card slides *in* from the right. They are not sequential; they overlap. The effect mimics actual mobile UX where a query collapses as a result emerges.

### Transition 5 — Safety act to loop reset (frames 88–112)

- **Frame 88:** Sign-in form visible. "Dog sitting" header. Empty email/password fields.
- **Frame 91:** "Use Saved Password?" tooltip is appearing above the form.
- **Frame 94:** Tooltip is fully rendered. Username "elisa.g.beckett" visible. Password dots visible.
- **Frame 97:** Tooltip is moving / settling to overlap the email field area more directly (suggesting auto-fill).
- **Frame 100:** Whole frame fades to white. The path/foliage background is gone.
- **Frame 103:** Pure white — one full frame of nothing. The white breath ending the cycle.
- **Frame 106:** Chrome logo pinprick begins to reappear at center. Loop is restarting.
- **Frame 109:** Logo growing. Man visible inside.
- **Frame 112:** Logo at modest size. Chemistry card sequence about to begin again.

The white breath frame is significant. It is not a fade-through; it is a held frame. The cycle has a clear punctuation between iterations.

---

## Full-page screenshot — detailed observations

Composition top-to-bottom from the screenshot file:

**Browser chrome (system, not page content).** A Chrome browser with a custom purple/aubergine theme. Standard browser controls top-left (back, forward, refresh). Address bar shows `google.com/chrome/`. Top-right: "Ask Gemini" button (small pill, with the rainbow Gemini star icon), window controls (minimize, maximize, close). Mark's browser, not part of the page proper.

**Page nav bar.** Full-width white background. Left side: Chrome logo (full color, small) followed by the word "chrome" in lowercase, light gray, in what looks like Google Sans. Center: five nav items in dark text — "AI Innovations" | "Safety" | "By Google" | "Mobile" | "Extensions ↗" (the arrow indicates Extensions leaves the site to the Chrome Web Store). No right-aligned utility nav.

**Announcement bar.** Light blue-lavender background (approximately #F0F0FA). Left: a small cyan/blue Gemini star icon + text "Explore the latest updates to Gemini in Chrome and AI Mode." Right: a "Go to AI Innovations" text link in Chrome blue. No dismiss button visible.

**Hero — left column.** Generous top padding (~80px from announcement bar to logo). Order top-to-bottom: Chrome logo (small but full-color, ~50px), massive headline "The browser that gets more done" wrapping onto two lines, large blue pill button "Download Chrome" with a small download arrow icon, very small light-gray text "For Windows 11/10 64-bit" below button, Chrome-blue text link "I want to update Chrome" below that, a checked checkbox + "Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. Learn more" (the "Learn more" is a Chrome-blue link), final paragraph "By downloading Chrome, you agree to the Google Terms of Service and Chrome and ChromeOS Additional Terms of Service" (the linked phrases are Chrome blue).

**Hero — right column.** The hero video panel, currently showing the Gemini chat with the chemistry question (frozen at the moment the screenshot was taken). The frame around the video is shown with a subtle gradient background on the very edge (faint blue-purple wash visible at the top right of the panel, suggesting the panel has a soft drop-shadow or glow). Inside the video: the top-right of a browser window (with the spotlight-highlighted Gemini button), and below it the Gemini chat panel with the question "Help me understand the difference between these chemical bonds" and the response beginning. The rainbow Google Lens icon is visible in transition between the Gemini and Lens acts — the screenshot caught a transition moment, not a stable state.

**QR code corner.** Top-right of the hero area, overhanging beyond what would be the right column boundary. White card with a QR code, the text "Get Chrome for your phone" below it, and a small chevron (>) indicating expandability.

**Bottom edge.** The next section's headline "Our most powerful AI search" is visible at the very bottom, centered, same typography as the hero headline. Cut off — the rest of "built right into Chrome" is below the fold.

**Pause button.** Small pill labeled "Pause video" visible at the bottom-right of the right column, just below the hero video panel.

---

## Specific details that didn't make the polished doc (Viewport 1)

Things noticed during the looking process that were too granular for the rubric-feeding observation document. Preserved here in case they matter later.

**The phone in the Lens scene shows real iOS-style status bar elements.** "3:46" is visible as the time. The status bar has cellular signal bars, wifi icon, battery icon — all of it visible in the device frame. Even when the phone is at relatively small size in the frame, these details are rendered. Suggests Google rendered the device frame as a real high-fidelity asset, not a generic phone outline.

**The chemistry tablet "By Dr." line.** The author name on the chemistry textbook is partially legible. Begins with "Eliza" but is cut off. Whether this matters for rubric — probably not. Whether it confirms the level of detail Google invested — yes.

**The hand at the top of the chemistry tablet.** When the chemistry card first arrives at perspective tilt, a partial hand is visible at the top edge — implying someone is holding it. Subtle realism cue.

**The dog scenes contain two distinct settings.** First the two-women-petting-dog setting (with trees in background, looking like a park or backyard). Then the single-woman-walking-dog setting (leafy path going away). These are not the same scene — the dog appears similar but the environment is different. Two micro-scenes, not one.

**The "elisa.g.beckett" username.** A specific full name chosen for the saved-password demo. Implies a real-feeling user account being demonstrated, not a generic "user@example.com." Increases authenticity. (See also: "Elisa Elisa" personalization in the dual mockup of Viewport 2 — same fictional user persona carried across sections.)

**The "Dog sitting" thumbnail above the sign-in form.** The site being signed into has a small thumbnail image (a small icon or favicon visible at the top of the form, alongside the "Dog sitting" label). Whether this is a real Google product or a stylized mock site, the choice to label the use case ("Dog sitting" not "Generic Service") increases relatability — the viewer can imagine themselves needing this exact service.

**The Gemini chat card has subtle shadows but no border.** Looking at the chat card carefully, it has a slight drop shadow distinguishing it from the white background. No visible border line. This is consistent with the broader page treatment — shadows define depth, not borders.

**The Chrome browser UI elements in the close-up are slightly larger than real proportional size.** When the top-right of a browser window is shown, the icons and buttons are slightly enlarged relative to how they would appear at real browser scale. This is a presentation choice — readable at video resolution at the cost of strict realism.

**The chat card "Sharing" indicator.** The Gemini chat panel has a "Sharing" button at the bottom with a small green dot. This suggests it is showing a sharable conversation state. Not load-bearing for rubric purposes but is a real interface element shown faithfully.

**The favorites star icon shifts behavior across the video.** In the early browser-UI close-up, the favorites star is outlined (not filled). This is a real browser state element being rendered faithfully.

**No hover states are demonstrated anywhere in the video.** Every button and icon in the video is shown in its static state. There is no moment where a cursor hovers something and a visual response fires. The video communicates feature behavior, not interaction nuance.

**The plant store overhead angle is unusual.** It does not match drone footage (would be higher) or security cam footage (would be more distorted). It looks like a deliberate cinematographic choice — possibly a stable mount from a low ceiling, or a high handheld with stabilization. The man is shot from approximately 8–10 feet above his head, slightly behind, walking forward. The angle creates a "watching someone discover something" feel rather than an "observing them" feel.

**The dog-petting scene has a camera-rotation move.** Across the visible frames, the camera circles slightly around the women and dog. This is the only camera-move in motion (as opposed to scene-cut) anywhere in the entire video. Everywhere else, the camera is locked.

**No spoken dialogue or text labels identify the people in the video.** The man with the chemistry book has no name shown. The girl with the laptop has no name shown. The plant-store man has no name shown. The dog women are unnamed. The video is anonymous — these are *anyone*, not specific demo characters.

---

## Cross-reference with Mark's transcribed observations (Viewport 1)

Mark's spoken observations from the first transcript ground-truthed several things I observed in the frames. Matching pairs:

- Mark noted "things come flying in from different directions" on page load. The frame analysis confirms: headline appears in gray then darkens (one direction — opacity), button and legal text fade in (different direction — opacity from below), logo arrives last and animates its colors in (direction — colors filling). Multi-directional in that several distinct mechanics arrive simultaneously, not in that things literally fly from different sides.
- Mark noted the video is "constantly transitioning, off to the right a little bit." The frame analysis confirms: hero video occupies the right column, runs continuously.
- Mark noted "you can't see the outline of the box." The frame analysis confirms: no visible border on the hero video panel, only subtle shadow/gradient.
- Mark noted "it only runs for about 27 seconds before it loops back." The video duration is 28-30 seconds depending on the recording. Mark's estimate is accurate.
- Mark noted "there's like a circle coming forward and doing bigger." Confirmed: the Chrome logo, the Gemini star, the Google Lens icon, the G shield all use the pinprick-grows-into-frame mechanic.
- Mark noted the man on his bed "looking down at his laptop... almost at eye level." Frame analysis confirms the framing.
- Mark noted "a big white circle, so remember it's white on white." Confirmed: the white-circle wipe mechanic.
- Mark noted "the Gemini icon... goes from being just the shape that it floated by with everything else, to it alone expands and becomes a much larger star." Frame analysis confirms the spotlight-then-portal mechanic on the Gemini button.
- Mark noted hover effects are minimal — "the only thing I can really see happen on hover is the darkening of the button." Frame analysis (which does not capture hover, but does capture every other visual state) is consistent with this — no breathing, pulsing, or motion exists on static page elements.

Mark's transcript also captured several patterns that the frame analysis alone could not have identified:

- The page-level sticky island nav with its seven words. The frames do not show this because the videos and screenshot capture only the first viewport. Mark observed this by scrolling and reported it back.
- The fact that every major section repeats the same template (eyebrow label + headline + small description + "Learn more about X" link). Frame analysis would not have shown this without scrolling captures.
- The decorative letter treatment ("`y o u r s`", "`A I`", "`s a f e`", "`f a s t`", "`b u i l t`", "`u p d a t e s`"). Only visible in the page's full text content, which Mark pasted in.
- The fact that the page does not get tiring — that the journey feels worth following. This is an experiential observation only the human user can make.

The combination of frame analysis (mine) and experiential observation (Mark's) is producing observations neither could produce alone.

---

## Patterns noticed at the time but not pulled into the polished doc (Viewport 1)

A few patterns that I noticed while looking but that did not seem strong enough to feed the rubric. Preserved here for possible promotion later:

**The "anonymous everyman" casting choice.** None of the people in the hero video are named, identified, or singled out. They are generic young adults using Chrome. This is a casting decision — Google could have used recognizable people, branded influencers, or named demo characters. They didn't. The video says "this is for anyone" through its casting. (Update — Viewport 2 dual mockup contradicts this in one spot: "Hello, Elisa Elisa" personalizes one demo, naming the user. But that name carries over from the hero's "elisa.g.beckett" username, so it is a persistent fictional user across sections rather than a real named person. The "anonymous everyman" pattern holds at the level of recognizable identity; an internal fictional persona named Elisa is used as a continuity device.)

**The "demonstration over claim" pattern at the video level.** No text card in the video says "Chrome helps you study!" or "Try AI search!" or "Stay safe!" The video shows people *doing* these things, with no slogans, no banners, no captions making the claim. The argument is the demonstration.

**The "real interface, not stylized" pattern.** Every interface shown in the video — the Gemini chat, the Google Lens result, the Use Saved Password tooltip — appears to be a faithful rendering of what those interfaces actually look like in Chrome today. Not an idealized version with simplified affordances; the actual product. The marketing material is also a product screenshot, in motion.

**The "pacing accelerates within an act, slows between acts" pattern.** Within each of the five acts, motion is continuous and active (typing, transitioning, sliding). Between acts there is the white-breath frame. The macro-rhythm is fast / pause / fast / pause / fast. This may be why the video feels watchable rather than overwhelming despite its density — there is regular rest inside it.

**The "show the user's eye level" framing on people.** The man with the chemistry book is shot at his eye level. The girl with the laptop is shot at her eye level (not over-the-shoulder, not from above). The plant-store man is the exception (overhead). The default is "person at their own level," which positions the viewer alongside them rather than observing them from outside.

**The slight pre-fade saturation of colors when transitioning.** When acts end and white-circle wipes begin, the previous scene's colors are briefly slightly desaturated as they fade. This is a tiny detail, possibly an artifact of the fade compositing, but consistent enough across transitions that it might be deliberate. Not load-bearing.

---

## Screenful 2A — AI section entry: section title and YouTube video

The first scrolled screenful entering the AI section. Section title centered at hero-headline scale ("Our most powerful AI search built right into Chrome"). YouTube video embedded directly below it. QR code now collapsed (or expanded depending on user choice) and tracking with scroll position. Sticky island nav newly visible at top.

### What happened mechanically

The hero's two-column layout (text-left, video-right) scrolled up and out. The new section title arrived centered, not left-aligned. The user reads the change in symmetry as the section boundary. No divider line, no background color change, no decorative element marks the seam.

The previously-visible page nav (with Chrome wordmark and "AI Innovations | Safety | By Google | Mobile | Extensions") slid upward and disappeared off the top edge. The light-blue announcement bar slid up with it. Simultaneously, the sticky island pill slid down from above the viewport and settled in its floating position with the seven word anchors (AI · Yours · Safe · Fast · By Google · Updates · Download). The two motions overlap; for a brief moment during the transition, neither the old top nav nor the new island nav is fully visible.

The "AI" anchor in the new island pill displays in an active state — a light gray rounded pill background behind the word. This is the orientation cue. As the user moves between sections, the active highlight migrates to the new section's anchor.

### Source materials referenced

No new video recordings of this screenful. Description compiled from Mark's spoken walkthrough during 2026-05-12 / 2026-05-13 sessions, the page text content, and the YouTube video itself, which was discussed in detail across multiple turns.

### The YouTube video — what direct observation produced

The video is 62 seconds. Embedded via YouTube's native player (the video tab shows the standard YouTube player chrome when hovered, with title and channel name clickable to YouTube proper, and standard YouTube controls available). Custom poster image baked with the title "Dive deeper with / AI Mode in Chrome" against a cloud-and-Chrome composition; the poster's visual language matches the video's first frames so the click-to-play moment is continuity, not jump.

Eleven scenes traced through conversation, in detail captured in the polished doc. Naming them by act:

1. Title card (0–2s) — poster as still.
2. Clouds parting, Chrome emerging (2–9s) — camera through clouds, gold-to-blue temperature shift.
3. Chrome meets Gemini glass (9–15s) — Gemini magnifying glass overlays Chrome logo for one beat, separates, both turn to viewer.
4. Card pull-back and shrink (15–18s) — corner-shrink to bottom-left.
5. Search bar close-up with rainbow border (18–21s) — thin Chrome rainbow tracing card.
6. AI Mode button reveal (21–25s) — pinprick growth, Gemini star "boop," letter-by-letter reveal of "AI Mode," rainbow outline migrates to the new pill.
7. Pull back to Google homepage (25–28s) — full Google.com visible, search bar with AI Mode button in place.
8. Cursor click on AI Mode (28–30s) — semi-transparent cursor arcs in from below-left, click expands search bar to double height.
9. Coffee machine query typed (30–42s) — character-by-character typing of long context-rich prompt, rainbow gradient highlights sweeping the constraint phrases (small studio apartment, mostly drink lattes, easy to use), Calendar/Drive/Docs/Sheets/Show-More icons appearing semi-transparently as context-availability hint, cursor arcing to send button.
10. AI Mode results page (42–52s) — two-column layout with generated text bullets on left, product cards on right, Ninja PB051 with $129.99 / 4.3 stars / 1.9K reviews, half-height ask-follow-ups input at bottom.
11. Follow-up "How easy is this to clean?" (52–58s) — page shifts to focused view with cleaning-section bullets on left, single product image on right, rainbow highlight on "designed for low maintenance" phrase.
12. Mobile transition (58–62s) — fade to pink, phone-shaped frame slides down from top like a drawer, Discover feed visible with "Improved Gemini audio models" headline, mobile Google homepage with shortcuts, brief continuation through other queries (Bulgarian Split Squats, tomato gardening) before returning to cloud-and-Chrome title to close.

### Things noticed in conversation that didn't make the polished doc

**The Ninja product is real.** The PB051 model number, the price ($129.99), and the star rating (4.3 / 1.9K) are not stylized placeholders. They correspond to an actually-purchasable Ninja product. The video could have used "Coffee Machine Brand X / $XX.XX / 4.X stars" generic placeholders and accomplished the same demonstration; instead the page commits to a real product.

**The contextual icons below the search bar (Calendar, Drive, Docs, Sheets, Show More) are shown semi-transparently and never used.** The demo doesn't pull from Calendar to find out when the user moved into their studio apartment; it doesn't pull from Drive to look at a coffee-spending spreadsheet. The icons are pure hint — "this is what AI Mode could see if you let it." Functionally aspirational, visually present, not demonstrated. A real choice.

**The cursor's arc trajectory.** The cursor never moves in a straight line from one button to another. It always traces a curved path, similar to how a hand moves when reaching across a desk. Frame-by-frame the path is approximately a parabolic curve. This mimics actual human motion modeling. Linear cursor movement reads as a script following a vector; arced movement reads as a person making a decision and following through.

**The rainbow gradient highlight reuses the Chrome outline gradient.** Same red-yellow-green-blue progression, same saturation. Four applications observed: tracing the white card border, tracing the AI Mode pill button, highlighting the constraint phrases in the typed query, highlighting the answer-relevant phrase in the follow-up response. Same visual identity carries the same meaning across four different surface contexts. "The rainbow outline equals AI" is a piece of teachable visual grammar.

**The "boop" animation on the Gemini star when AI Mode appears.** The star enlarges briefly (maybe 10–15% scale increase) and settles back to its resting size. This is a fraction of a second long. It functions the way a slight bounce does in motion design — a tiny piece of personality that signals "I am here and active." The star never boops again in the video; it boops only the moment AI Mode is birthed.

**The narrator's voice is described in conversation as "young woman, fun but smart."** Not a deep authoritative announcer, not a cartoon character. A specific casting choice — Google appears to want AI Mode's narrator to feel like a slightly older sister explaining something cool, rather than a corporate spokesperson.

**Closed captions are visible by default.** The video runs muted by default; the CC track is on. The viewer can read along with the narration without needing audio. This dual-channel design means the video works in libraries, on muted laptops, with screen readers, and in any environment where playing sound is inappropriate.

**The video loops without YouTube's typical end-card interruptions.** No "you might also like" thumbnails, no related video suggestions, no replay button. The loop just goes back to scene 1.

---

## Screenful 2B — AI section middle: Dig deeper subsection, then Browsing boosted banner

After the YouTube video, the page continues into the AI section's subsection-delivery format, then transitions to the section's second half (Browsing boosted with built-in AI).

### The Dig deeper subsection (immediately below the video)

Structure observed:

- Eyebrow label: "GOOGLE SEARCH" — small, all-caps, muted gray, sitting above the subsection headline.
- Subsection headline: "Dig deeper with AI Mode" — left-aligned, roughly 60–70% the scale of the section title.
- Body paragraph in the right column at body-text scale.

Two-column left-right layout: eyebrow-plus-headline on the left, body paragraph on the right. This is a third compositional pattern on the page (after the hero's asymmetric two-column and the section title's centered single-column).

### The "Browsing boosted with built-in AI" banner

The lower half of the AI section opens with a second-tier banner — same structural role as a section banner but inside an existing section, marking the transition from search-side AI (AI Mode) to browser-side AI (Gemini in Chrome).

Headline: "Browsing boosted with built-in `A I`."

The keeper observation here: **the AI anchor word is no longer a typographic decoration; it has graduated into a UI pill.**

Pill details:

- Background: blue-purple gradient.
- Contents: an animated icon that cycles through three states.
- Adjacent: a small pause control.

The cycling icons:

1. Pencil with sparkles — representing writing/composing.
2. Stacked cards / copy icon — representing summarizing.
3. Landscape / image icon — representing image understanding.

Each icon holds for approximately 1.7 seconds before the next fades in. The icons do not slide; they morph in place. (This is M3 Expressive "shape morphing" — see `GOOGLE_DESIGN_REFERENCE.md`.)

Total cycle duration approximately 5.5 seconds.

### Source materials referenced

No new video recordings of this screenful. Description compiled from Mark's spoken walkthrough across 2026-05-12 / 2026-05-13 sessions and the page text content.

### Why this matters for the rubric

The pill is a real evolution of the decorative-letter system observed in Viewport 1. In Viewport 1 the section themes were emphasized typographically (spaced letters in a slightly different style). In Viewport 2's second-tier banner the same theme word has become an animated UI button. The progression is:

1. Sticky nav anchor (one-word label in the floating pill).
2. Headline typographic emphasis (decorative letter spacing).
3. Headline UI pill emphasis (animated, colored, icon-bearing).

The page is teaching its grammar across viewports. By the time the user reaches Viewport 3's Yours banner, the pill mechanic is familiar (same structural role, different content). By the time they catch a glimpse of the Safe section, the pattern is established enough that just seeing the green pill is enough to know the section's theme. The page is building its own visual language and applying it consistently.

### The associated subsection content (below the banner)

After the Browsing boosted banner, the screenful continues with the dual-mockup composition, which is detailed in Screenful 2C.

---

## Screenful 2C — AI section close: dual mockup, Gemini in Chrome subsection, CTA bar

The last screenful of the AI section. Three components stacked vertically: a dual-mockup visual showing Gemini in Chrome on desktop and phone, a subsection delivery (eyebrow-less, headline-plus-body), and a CTA bar before the section transition.

### The dual mockup

Side-by-side composition of a desktop browser and a phone, both showing the same content (a vanilla cake recipe with Gemini chat). Both fully static — no animation. The only motion anywhere in this screenful is the icon rotation inside the Browsing boosted banner pill (which is at the top of the previous screenful but still visible above-the-fold during this screenful's scroll position).

Desktop mockup specifics:

- Browser tab labeled "Bakery creations."
- "Hello, Elisa Elisa" appears as a personalization line — same fictional Elisa persona used in the hero video's saved-password tooltip.
- Recipe content (a vanilla cake recipe) visible in the main browser area.
- Gemini chat panel docked to the right of the browser window.
- Gemini input placeholder text reads "Type @ to ask about a tab" — this is real Gemini syntax for tab-referencing.
- The "Pro" badge on the input field signals this is the Pro tier experience.
- A "Sharing 'Bakery creations'" indicator at the bottom transparently surfaces that Gemini sees the current tab. Real product UI, not a stylized abstraction.

Phone mockup specifics:

- Same content scaled to a phone form factor.
- Desaturated and slightly darker than the desktop. Hierarchy through saturation: desktop primary, phone secondary.
- Three Gemini suggestion chips visible at the bottom: "Summarize page," "Create FAQ about this topic," "What can Gemini do in Chrome?"
- The chips pop forward visually from the desaturated phone, holding interest.

### Source materials referenced

No new video recordings of this screenful. Description compiled from Mark's spoken walkthrough and the page text content.

### Granular details

**Saturation as hierarchy.** Desaturation is being used as a visual prioritization mechanism. The phone is not less important than the desktop in the cross-device story — they show the same content — but in the visual composition the desktop is the lead. Saturation does the work that a different size or position would do otherwise.

**The fictional Elisa persona crosses sections.** Hero video: "elisa.g.beckett" saved password. AI section dual mockup: "Hello, Elisa Elisa." The same fictional user is being used across multiple sections as a continuity device. This is a quiet but real touch — the marketing material has a recurring fictional protagonist.

**Real Gemini affordances.** Every Gemini-specific UI element shown in the mockup is a real product affordance: the @-tab-reference syntax, the Pro badge, the Sharing indicator, the suggestion chips. The marketing material renders the product as it actually exists, not an idealized version.

### The Gemini in Chrome subsection (below the dual mockup)

Structure observed:

- No eyebrow.
- Subsection headline: "Gemini in Chrome: Your AI browsing assistant." Subsection scale, smaller than the section banner.
- Body paragraph in right column.
- Asterisked disclaimer below body.
- Chrome-blue link: "Explore Gemini in Chrome."

Body text: "Gemini in Chrome helps you easily understand content on the web and get things done using the context of your open tabs and browsing history. Plus, with auto browse, Gemini in Chrome can do your tedious tasks for you* – from shopping and reservations, to research and more."

Disclaimer text: "*Auto browse available only to Google AI Ultra and Pro subscribers in the U.S."

Voice patterns observed in this body:

- "Helps you easily understand" — verb-led, user-action-framed.
- "Get things done" — verb-led, user-action-framed.
- "Do your tedious tasks for you" — addresses a real friction (tedious tasks) and proposes relief.
- The em-dash construction with examples ("from shopping and reservations, to research and more") gives concreteness without listing exhaustively.

### The mid-section CTA bar

A wide light-blue pill bar spanning most of the page width. Same pale-blue treatment as the top-of-page announcement bar. The page is reusing component-level styles.

Left side text: "Gemini in Chrome can do tasks for you with auto browse. Available to Google AI Pro and Ultra subscribers in the U.S."

Right side: "Sign up now ↗" link.

The pill has rounded corners, no shadow. The same component the announcement bar is using.

### Section transition out

Substantial pure-white space follows the CTA bar before the Yours section's banner. Visually larger than the gap between subsections within the AI section. White space encodes the structural level — bigger white space = bigger boundary.

### Patterns noticed but not promoted

**The "third-party brand visible on Chrome's marketing page" choice.** Real YouTube branding visible during the embed (YouTube watermark, native YouTube player). Real Ninja product shown in the AI Mode demo. This is unusual — most marketing pages avoid showing other companies' branding to keep focus. Chrome's page does the opposite: it lets the real ecosystem show through. The implicit message is "Chrome is where you actually browse, including these places." Not load-bearing for the rubric but worth noting.

**The page reuses one design idiom across very different contexts.** The pale-blue rounded pill bar appears (a) at the top of the page as the announcement bar, (b) mid-section as a feature CTA, and is also (c) visually consistent with the smaller "Sign up now ↗" and "Get Chrome for your phone" pill styling. The page treats "pill on pale blue" as a single component with multiple instances.

---

## Screenful 3A — Yours section opening: banner and scroll-linked transformation

The first scrolled screenful of the Yours section. Contains the section banner ("Make it `y o u r s` and take it with you") and then enters the scroll-linked landscape-to-theme transformation that is the section's signature motion piece.

### The build-up white space

Before the Yours banner appears, a substantially-larger-than-normal gap of pure white sits between the bottom of the AI section's CTA bar and the top of the Yours headline. Visually larger than any other section-to-section transition observed on Page 1.

This is deliberate. Mark identified the function during observation: it builds scroll momentum before the section's signature move. The user starts scrolling through emptiness, gathers speed and expectation, and then the scroll-linked transformation arrives with the user already in motion. It is the cinematic equivalent of cutting to black before a big reveal.

This use of white space is different in role from the white space at the AI-to-Yours section boundary (which is delimiting). Here the white space is *pre-loading* an experience — setting expectations.

### The Yours banner pill

Headline: "Make it `y o u r s` and take it with you."

The "yours" anchor word sits inside a colored pill. Same mechanic as the AI pill from Viewport 2's lower half, with section-specific styling:

- Background: red/coral.
- Icon: a paintbrush.
- Animation: none — the icon is static (unlike the AI pill, which cycles through three icons).

This is the second instance of the section-banner-pill system. The pattern is now confirmed as systematic (not just a one-off in the AI section). It is the page's mechanism for naming the section's theme as a UI element rather than a typographic decoration.

### The scroll-linked landscape-to-theme transformation

Five stages, all pinned to scroll position. The user controls the timing entirely.

**Stage 1.** Below the banner, a horizontal landscape photograph appears. Delicate Arch in Utah — blue sky, red rock formation. At this initial moment the image looks like a regular content image, no animation.

**Stage 2.** As the user continues to scroll, the landscape image grows. It does not pan; it scales up. Progressively fills more of the viewport. The banner headline scrolls off the top normally.

**Stage 3.** At approximately the midpoint of the scroll range, a Chrome browser frame fades in *over* the now-full-viewport landscape. Tabs at the top, address bar, Google search box appearing in the middle. The landscape becomes the browser's background theme. The image was not just a photograph; it is being revealed as your Chrome theme.

**Stage 4.** The landscape Chrome dissolves into a different themed Chrome — dark navy/purple cosmic background with a tiny astronaut floating among stars. Same browser frame, different mood. The theme switch is demonstrated through transformation rather than described.

**Stage 5.** Once the transformation completes, the section unpins. Normal scroll resumes. The carousel below begins.

### Source materials referenced

No new video recordings of this screenful in this session. Description compiled from Mark's spoken walkthrough during 2026-05-12 / 2026-05-13 and his confirmation that the mechanic is scroll-linked (reversible — scrolling up reverses the transformation).

### The scroll mechanic, named precisely

The Yours section uses what is conventionally called "scroll-linked" (or "scroll-driven") animation. The section is pinned in place — likely `position: sticky` with a tall scroll range, or an IntersectionObserver-based effect, or possibly the newer scroll-driven animations CSS proposal. The animation inside the pinned section progresses according to how far through the scroll range the user has moved.

Properties of this mechanic:

- User keeps full scroll control. They can scrub forward and backward, pause anywhere, reverse by scrolling up.
- Section unpins once the user exits the scroll range. They are not trapped.
- No "click to skip" needed — scroll *is* the navigation.

This is distinct from scroll-jacking, where the page hijacks scroll input to advance through fixed states. Scroll-linked is responsive to the user; scroll-jacked overrides the user.

### Patterns noticed but not promoted

**The page introduces motion categories in escalating complexity.** Viewport 1: locked motion (hero video). Viewport 2: locked motion (YouTube video) plus static composition (dual mockup) plus embedded micro-animation (banner pill icon cycle). Viewport 3: scroll-linked motion as a new category. The user is learning the page's motion vocabulary in steps; by the time scroll-linked motion fires, three other types have been introduced and the page has earned the right to try something more demanding.

**The astronaut detail.** Frame inspection during the carousel later confirms the dark theme contains a tiny astronaut figure floating in space among stars. This is a Google-specific brand touch — the astronaut appears in other Google product themes too. Not just a generic dark theme; a specifically-Googley dark theme.

---

## Screenful 3B — Yours section middle: the three-up carousel

The center of the Yours section. Auto-cycling three-category carousel with a section-level CTA pill below. This is the screenful where the carousel was directly observed this session via four screen recordings.

### What the videos showed

Four recordings:

- `20260513-2339-30` (23.1s, 1914×1078). Fullscreen recording of the carousel in context. Frames extracted at 2 fps (46 frames). Shows multiple full rotations through the three categories. Confirms the carousel position on the page (below the scroll-linked transformation), the section CTA pill below it, the surrounding page chrome (purple browser theme, sticky island nav, QR code corner). One artifact: the recording briefly captures Mark's Windows alt-tab task switcher between approximately frames 26 and 30 (which shows other open windows: DICTATEHOTKEY, CHROME_OBSERVATIONS_RAW_NOTES.md, his Outlook, his Calendar, etc.) This is an artifact of Mark window-switching during recording, not Chrome page content.

- `20260513-2340-22` (16.9s, 672×684). Close-up of the cycling left panel. Frames extracted at 2 fps (34 frames). Captures full cycles through all three panel types: Customize (theme picker with cycling background), Browse (yellow background with composed phone mockup), Autofill (mint-green background with address form filling animation).

- `20260513-2343-58` (20.9s, 658×732). Close-up of the right column. Frames extracted at 2 fps (42 frames). Captures the three rotating category titles with their expanded/collapsed states and the blue progress line.

- `20260513-2344-46` (8.6s, 470×538). Hover-state recording specifically of the "Sign in to get started" section CTA pill. Frames extracted at 2 fps (17 frames). Shows cursor entering/leaving the pill, the slight darken on hover, the small arrow-flick.

### Carousel layout (confirmed by frames)

Asymmetric two-column. Left column: a large rounded-square tile that swaps content as the active category changes. Right column: three category titles stacked vertically (Customize your Chrome, Browse across devices, Save time with autofill), with a section-level "Sign in to get started ↗" pill button below all three.

### The blue progress line (corrected from previous summary)

The line is a thin vertical bar that sits to the left of the active category's title. It is *not* static during the active period. It **grows smoothly and continuously from top to bottom** over the dwell time. When the line completes its bottom-to-top traversal, the rotation snaps to the next category instantly. The previous category collapses (description fades out, line disappears), the new category expands (description fades in, line appears empty at top), and the line immediately begins filling for the new category.

This was a correction from the previous handover's description, which had been less specific about the line's growth motion. Direct video observation confirms continuous smooth growth, instant snap, no overlap between categories.

### The three panels' content (corrected from previous summary)

**Customize panel — not just "Chrome new-tab cycling through themes."** What is actually shown is the Chrome theme-picker UI itself: a 3×3 grid of theme thumbnails inside a card. As the demo animates, blue selection rings cycle through different thumbnails (each tile briefly highlighted as if being clicked by an internal animated cursor). Simultaneously, the background *behind the picker* changes to show the theme that has just been selected. Backgrounds seen in rotation: the rock arch landscape (same Delicate Arch from the scroll-linked transformation above), a dark cosmic background with the astronaut, a yellow background, a white/cream background. The picker stays put; the wallpaper cycles.

This is a more elegant idea than "demo cycles colors." It is "demo enacts the theme-selection workflow." The user is being shown what theme selection looks like, mechanized.

**Browse panel — not just "static phone with map."** The previous handover summary undersold this. The actual content: a yellow background with a rounded-rectangle phone outline. Inside the phone, the top row shows browser tabs (visible as small tab indicators — approximately four tabs). Below them, a composed view including multiple types of browsing content at once:

- A Google Maps panel showing New York City with red pins.
- A Google search results pane titled "Museums list in New York City" with bulleted items (Metropolitan, MoMA, Frick Collection, 9/11 Memorial).
- A YouTube card with a thumbnail showing a NYC skyline at sunset.

The composition does real work without motion. It shows the *kind* of cross-device browsing the Browse Across Devices feature actually facilitates — research with multiple tabs open across sources, ported to the phone — rather than abstracting "sync" into a generic graphic.

The panel itself is fully static during the entire dwell. Confirmed by Mark: "The browse phone is static. It does nothing."

**Autofill panel — typing-then-fill animation.** Solid mint-green background. An address form appears with empty fields. An animated cursor (part of the panel's animation, not the user's mouse) moves into the frame. The cursor selects suggestion items from a dropdown: "Elisa Work / 1600 Amphitheatre Parkway / Elisa Home / 19510 Jamboree Road / Manage Addresses..." The form then auto-populates: "Elisa Beckett / Mountain View, CA 94043 / (650) 253-0000." The typing-then-fill pattern is the same one used in the YouTube AI Mode video's coffee-machine query — motion vocabulary reused across sections.

Confirmed by Mark: the cursor is part of the animation. The Customize panel similarly has internal cursor-driven selection animations. Browse is fully static.

### The section-level CTA pill — corrected from previous summary

The "Sign in to get started ↗" pill is *not* tied to the autofill panel as the previous handover suggested. The hover-state recording (Video 4) and the right-column close-up (Video 3) confirm: the pill sits persistently at the bottom of the right column under all three category titles, visible regardless of which category is currently active.

Pill specifics:

- Light blue background, rounded pill shape.
- Text: "Sign in to get started ↗"
- Hover behavior: cursor enters → pill background darkens slightly, the small arrow icon flicks to point up-and-to-the-right.
- Click behavior: presumed to be a sign-in CTA; not tested in recordings.

The pill is functionally separate from the carousel's rotation. Its role is section-level — applying to the entire Yours experience (theme + sync + autofill) rather than any one sub-feature.

Confirmed by Mark: "It's stagnant. It does nothing. It just sits there. The only thing that happens is if you hover on it, it will darken it and the little arrow will do its animation."

### Interaction behavior (confirmed by Mark)

- Auto-rotation: continuous, cycles indefinitely until interaction.
- Click on a collapsed category title: stops auto-rotation, jumps to that category, holds. User takes the wheel.
- Hover on a category title: does *not* pause rotation. Carousel keeps moving.
- Click on the left demo panel: does nothing. The panel is a display, not a CTA.
- Hover on a category-specific CTA link (e.g., "Explore themes ↗"): the small arrow flicks up-and-to-the-right, link darkens slightly. Same minimalist hover pattern as the section CTA pill.

### Per-category CTAs observed

- Customize your Chrome → "Explore themes ↗" (Chrome-blue link, hover-animated arrow).
- Browse across devices → no per-category CTA.
- Save time with autofill → no per-category CTA. (The previous handover attributed "Sign in to get started" to autofill; this is incorrect — that pill is section-level.)

The asymmetry — one category has a per-category CTA, two don't — is a discipline point. The page didn't force a fake CTA into all three for symmetry. Customize has an actionable destination (the themes gallery). Browse and Autofill are both passive features that activate when you sign in, so they don't need separate destinations — the section-level "Sign in to get started" handles both.

### The panel background color system

- Customize: cycling through the theme backgrounds (the demo is the colors).
- Browse: solid gold/yellow.
- Autofill: solid mint/pale green.

All warm colors — distinct from the AI section's cooler blues and purples. Color hierarchy operates at three levels: section banner pill (red-coral) → carousel panel backgrounds (warm family) → demo content within panels (theme palettes and form colors).

### Granular details that didn't make the polished doc

**The theme-picker grid arrangement.** The 3×3 grid inside the Customize panel shows nine theme thumbnails: a black/space theme (top-left), a red theme, a green plant/leaf theme, a light/cream theme, a yellow theme, a blue gradient theme, the brown/landscape Delicate Arch theme, a coast/beach theme, an orange/sunset theme. Not all of these are necessarily real shipping themes — some may be representative thumbnails — but the grid layout itself is real Chrome theme-picker UI structure.

**The astronaut continues to appear.** First seen in the scroll-linked transformation (Stage 4). Reappears in the Customize panel during the dark-theme cycling moment. Persistent Google brand element across the entire Yours section.

**The Browse phone shows what appears to be an Android Chrome interface, not iOS.** No iOS-style status bar (no notch indicators, no iOS time format). Subtle but consistent.

**The Autofill cursor moves smoothly and pauses on selection items.** When it hovers a suggestion, it holds briefly before clicking. This pause is the cursor's "consideration" — the kind of micro-delay a real user would naturally have. Not just an automated cursor; a *deliberate-feeling* automated cursor.

**The carousel cycle timing feels approximately 5–7 seconds per category.** Not timed precisely in this observation pass. Worth measuring in the rubric phase if it matters.

### Patterns noticed but not promoted

**Pause-on-click instead of pause-on-hover is unusual but well-considered.** Most carousels use pause-on-hover as a default — the polite UX assumption is "if the user's mouse is on something, they want to read it." But pause-on-hover causes carousels to get accidentally "stuck" when users casually mouse across the area. Pause-on-click requires deliberate intent. The cost is that users who naturally read at their own pace cannot temporarily slow the carousel by hovering; the benefit is that the carousel actually rotates as designed for most users.

**The "demo is the feature" pattern.** Customize panel demonstrates the feature by showing the feature being used. Autofill panel does the same. Browse does it differently — by showing a finished cross-device state. The page is operating multiple "demo strategies" within one carousel.

**No accessibility pause control on the carousel.** Unlike the hero video (which has a "Pause video" button) and the YouTube embed (which has the full YouTube controls), the carousel has no visible pause button. The implicit pause is "click any category to override." This is functionally a pause but is not labeled as one. A user with vestibular sensitivity who wanted the rotation to stop entirely would have to click and click again to switch categories. Worth noting; may not matter for the rubric.

---

## Screenful 3C — Yours section close: Extend Your Experience subsection

The closing screenful of the Yours section. A standalone subsection with its own composition, presenting the Chrome Web Store / extensions.

### The structural finding

Extend Your Experience is a standalone subsection below the carousel, *not* a fourth tab in the carousel rotation. The carousel is firmly three-up (Customize / Browse / Autofill). Extensions is broken out as its own block with a different visual treatment.

This is a real composition decision. The page put three closely-related "your Chrome data" features in the auto-cycling carousel (themes, sync, autofill — all about personalizing the existing Chrome experience). Then it broke Extensions out separately, because Extensions has more behavioral consequence — you actively add new things to your browser, modifying Chrome rather than personalizing what you already have. The structural separation matches the user-commitment level.

### Layout

Asymmetric two-column. Left column:

- Headline: "Extend your experience" — subsection scale, smaller than section banners.
- Body paragraph: "From shopping and entertainment to productivity, find extensions to improve your experience in the Chrome Web Store."
- Link: "Explore extensions ↗" — Chrome-blue, hover-animated.

Right column: a Chrome browser window showing the Google homepage with the dark space/cosmic theme — the *same theme* observed in the Customize panel's cycling background and in Stage 4 of the scroll-linked transformation. Visual continuity within the section.

### The visual continuity reading

The same Chrome window — same theme, same compositional treatment — recurs three times across the Yours section:

1. As Stage 4 of the scroll-linked transformation (cosmic theme replaces landscape theme).
2. As one of the cycling backgrounds in the Customize panel (cosmic theme appears among the rotation).
3. As the right-column display of the Extend Your Experience subsection.

The recurrence is not coincidence. The story being told across the entire Yours section is one user's progressively-customized Chrome. Themes were applied (scroll-linked transformation). Themes are being selected (Customize panel). Extensions are being added (Extend subsection). Same fictional user, same Chrome window, three stages of personalization.

### Scroll-linked icon arrival — second use of the new motion category

As the user scrolls into the Extend subsection, five colored circular icons swoop in one at a time, locked to scroll position. Each represents an extension category:

- Shopping
- Entertainment
- Tools
- Art & Design
- Accessibility

(Names taken from the surrounding text content; exact icon-to-name mapping not visually inspected during this pass.)

The icons settle into positions around the browser window in the negative space adjacent to it. Not inside the window — the window is preserved as a clean composition — but floating around it like satellites.

### Source materials referenced

No new video recordings of this screenful in this session. Description compiled from Mark's spoken walkthrough during 2026-05-13.

### The pattern observation

Scroll-linked motion is used *twice* in the Yours section, at very different scales:

- The opening landscape-to-theme transformation: full-viewport pinning, multi-stage cinematic, the section's signature move.
- The Extend Your Experience icon arrival: peripheral, small-scale, scroll-paced reveal of secondary content.

This rules out the hypothesis that scroll-linked motion is a one-time gimmick. The page uses it as a recurring pattern available at multiple scales. The rubric should treat it as a reusable mechanic, not a special-event-only effect.

### Outstanding observations to fill later

- Exact icon-to-category mapping (which icon is Shopping, which is Accessibility, etc.).
- Whether the icons do anything after arrival — hover effects? click-to-filter? or purely decorative?

These can be filled in when Mark next observes the section. Both are lightweight gaps, not blockers.

---

## Screenful 3D — Yours section transition out

Below the Extend Your Experience subsection, substantial pure-white space precedes the next section's banner ("Stay `s a f e` while you browse" with a green pill). Same major-section-boundary treatment observed at the AI-to-Yours transition. This is the standard section-to-section spacing pattern, not the larger pre-loading white space observed before the scroll-linked transformation at the section opening.

The green Safe-section banner pill confirms the per-section color system at three data points (AI = blue-purple, Yours = red-coral, Safe = green). The system can now be expected — Fast, By Google, and Updates will each have their own color and section-specific icon.

**Correction added 2026-05-14:** the casual "Safe = green" reading above is imprecise. Direct observation in the next session showed that the Safe banner pill background is *light blue*; the green is the Chrome-shield icon inside the pill. The per-section color system reads correctly at the pill-and-icon-together level, but the pill background of Safe is light blue, not green. See Screenful 4A for the verified observation.

---

## Screenful 4A — Safe section entry: banner with light-blue pill and 2×2 card grid

The first scrolled screenful of the Safe section. Banner ("Stay `safe` while you browse") and the top two cards of the 2×2 grid (Password Manager top-left, Safety Check top-right) come into view.

### What the videos showed

One overview recording of the Safe section in context (`20260514-0053-05`, 21 seconds, 1912×1078, 30 fps). Frame extraction at 2 fps produced 42 frames. The overview captured the transition from the bottom of the Extend Your Experience subsection through the Safe banner appearance and into the visible top half of the four-card grid.

### A finding from the overview that adds to the Yours section

In the earliest frames of this recording, the Extend Your Experience subsection is still visible at the top of the viewport. Watching the icons as the user scrolls past them: the five colored circular icons (Shopping, Entertainment, Tools, Art & Design, Accessibility) **grow larger and fade out simultaneously** as they leave the viewport. This is an *exit* animation, not a static or linear scroll-off. The polished doc's Viewport 3 description should be updated when convenient to note that the scroll-linked icon arrival in Extend Your Experience has both entrance and exit choreography (icons swoop in one at a time on scroll-down arrival; icons grow-and-dissolve on continued scroll-down past them).

### The Safe banner (verified observation)

Frame analysis shows the Safe banner with these specifics:

- Layout: "Stay" (regular text) + "[shield-icon] safe" (inside pill) + line break + "while you browse" (regular text on next line). Same three-text-components-with-pill pattern as Yours (and later Safe, Fast, By Google, Updates).
- Pill background color: **light blue / pale blue** — visually similar to the announcement bar's pale blue, but slightly different shade. Definitely not green.
- Icon inside the pill: a green/teal **Chrome shield** with a "G" mark inside it. The same Safe Browsing G-shield used in the hero video's Act 4 — a real cross-section iconography reuse.
- Text inside the pill: "safe" in Chrome blue.

### The 2×2 grid layout (top two cards visible)

Below the title, the grid begins. Top-left card and top-right card are both visible in frames around 020:

- **Password Manager** (top-left): solid deep-blue background. Eyebrow "PASSWORD MANAGER" in small all-caps light-color text. Headline "Use strong passwords on every site." in white, large, bold. Below the headline: a UI demo showing "elisa.g.beckett" username field, a masked password field with eye-toggle icon, and the "Use Saved Password?" tooltip with the rainbow Google key icon. A "+" plus button in a blue circle visible in the bottom-right of the card.

- **Safety Check** (top-right): light lavender/pale-blue background. Eyebrow "SAFETY CHECK" in small gray all-caps. Headline "Check your safety level in real time with just one click." in dark text, large, bold. No demo on the front face — text only. A "+" plus button in a blue circle in the bottom-right.

The bottom of the frames in the overview recording shows the start of the bottom two cards beginning to come into view. The full grid is not all visible in any single frame of the overview recording because the section is tall.

### Cross-section continuity noted

The "elisa.g.beckett" username on the Password Manager front face is the same persona used in the hero video's Act 4 (saved password demo) and in the AI section's dual mockup ("Hello, Elisa Elisa"). Third confirmed appearance of the Elisa persona on Page 1 — narrative continuity device.

---

## Screenful 4B — Safe section cards: flip mechanic and the four card variations

This screenful covers the four flippable cards in detail, each observed from its own close-up recording.

### What the videos showed

Four individual recordings:

- `20260514-0055-42` (33s, 706×722, 30fps) — Password Manager card close-up. Captures hover, flip to back, body content, and link click-through.
- `20260514-0058-25` (42s, 710×610, 30fps) — Safety Check card close-up. Longest of the four; captures hover and multiple flips.
- `20260514-0100-41` (27s, 744×658, 30fps) — Enhanced Safe Browsing card close-up. Captures the white-card-specific hover effect.
- `20260514-0102-22` (32s, 730×746, 30fps) — Privacy Guide card close-up. Captures the G-shield bulge and flip.

Frame extraction at 2 fps from each (65, 84, 54, 64 frames respectively).

### The flip mechanic, traced frame by frame

The flip happens over roughly half a second to a second. Looking at the Password Manager frames during a flip:

- Pre-flip: front face fully rendered. "PASSWORD MANAGER" eyebrow, "Use strong passwords on every site." headline, UI demo, "+" button.
- Flip frame 1: all elements of the front face are visibly higher than their resting position and partially transparent. Eyebrow, headline, demo — all shifted upward simultaneously, all fading. Stagger is visible: eyebrow leads, headline next, demo last.
- Flip frame 2: most of the front face has now translated above the card's top edge and is mostly transparent. Below it, the back face's first element (the small product UI demo) is appearing from below the card's bottom edge, partially transparent, rising.
- Flip frame 3: back face is mostly in position. Back demo at top, body text fading in below it, link below that. Front face is fully gone.
- Post-flip: back face fully rendered. "×" close-arrow button replaces the "+" button in the bottom-right blue circle.

The return flip (back → front) is exactly the reverse direction: everything moves down. Back content sinks and dissolves below the bottom; front content descends from above into position.

Mark confirmed this directionality directly during observation: "On every single one, it does that. And it's just in reverse when you click it again to go from the back side to the front."

### Front-face content per card (granular details from frames)

**Password Manager front:** Body of the front is dominated by a UI demonstration card. Top row: a clean "elisa.g.beckett" text in a rounded-rectangle field. Middle row: a password field showing dots, with a small eye-toggle icon and lock icon. Below the password field overlapping the bottom-right of the demo: a "Use Saved Password?" tooltip card. The tooltip has an "×" close button, a rainbow Google key icon, and a row of dots representing the saved password. This is the actual Chrome saved-password tooltip UI, identical to what the hero video's Act 4 showed.

**Safety Check front:** Just the eyebrow and headline. The card is otherwise empty — no demo, no visual. The minimalism makes the card read as "headline alone is enough" — which is a real voice choice.

**Enhanced Safe Browsing front:** Eyebrow + headline + thin Chrome-blue line along the top edge of the card. The blue line is roughly 2-3 pixels tall, spanning the full width. This is the *only* card on Page 1 with a top-edge accent line. The white background is also unique on Page 1.

**Privacy Guide front:** Eyebrow + headline + a large G-shield occupying the lower half of the card. The G-shield is the same Google shield used in the hero video's Act 4 transition (where the shield zoomed in before the safety scene), the same shield in the Safe banner pill (in green), and the same shield in iconography across Google's safety products. Cross-section iconography reuse, fourth instance.

### Back-face content per card (granular details from frames)

**Password Manager back:** A small reproduction of the actual Chrome "Save password?" browser prompt — a small white floating tooltip with a Google rainbow key icon, the words "Save password?", small text "To Google Password Manager" + an email address, and "Save" / "Never" buttons. Below the demo: body text in two or three sentences explaining Chrome Password Manager. A "Learn more about Password Manager ↗" link.

**Safety Check back:** A small white panel with a header bar reading "Safety Check" + a green checkmark or status indicator. Below the header, a vertical list of items — Passwords, Updates, Browsing — each with a status indicator. Body text below ("Chrome Safety Check confirms the overall security and privacy of your browsing experience, including your saved passwords, extensions, and settings. If something needs attention, Chrome will help you fix it."). "Learn more about Safety in Chrome ↗" link.

**Enhanced Safe Browsing back:** A RED malware-warning page rendered at small scale — bright red background, white warning text "The site ahead contains malware," small body text below the warning. This is the actual Chrome malware-warning chrome that users see in the real product. Below the demo: body text "Chrome's Safe Browsing warns you about malware or phishing attacks. Turn on Enhanced Safe Browsing for even more safety protections." "Learn more about Safe Browsing ↗" link.

**Privacy Guide back:** A white card-within-the-card showing the "Take the Privacy Guide" opt-in UI with a small icon, the heading "Take the Privacy Guide" with subtitle, and two buttons: "Get started" (blue, primary) and "No, thanks" (gray, secondary). Body text explaining the Privacy Guide tour. "Learn more about intuitive safety controls ↗" link.

### The hover details (per card)

Confirmed by Mark and visible in frames during cursor passes:

- **Password Manager**: "+" button bulges + the "Use Saved Password?" tooltip element bulges. Two hover targets on the same card.
- **Safety Check**: only "+" button bulges. The card otherwise has no interactive elements on the front face.
- **Enhanced Safe Browsing**: "+" button bulges + the card's outer border strengthens slightly. The white background is what makes the border change visible.
- **Privacy Guide**: "+" button bulges + the G-shield bulges. Two hover targets.

### Specific details that didn't make the polished doc

**The flip's per-element stagger is approximately 50-100ms between elements.** Hard to time precisely from 2 fps frames, but the visible stagger across eyebrow → headline → body/demo → link is consistent across all four cards. Each element starts moving before the previous one completes, creating a layered cascade rather than discrete steps.

**The "+" → "×" icon swap appears to happen instantly at the midpoint of the flip.** No visible morph or rotation on the icon itself — it's a discrete swap at the moment when the front face is fully gone and the back face is becoming present.

**The cards never overlap during a flip.** The front rising up and the back rising up from below are coordinated such that they don't visibly stack on top of each other in any single frame. The midpoint of the flip is mostly empty card.

**The Learn-more link is the only clickable destination on the back face.** Clicking anywhere else on the back face flips back to the front. Mark confirmed: "if you click anywhere in that card that is not the actual link that says learn more about Password Manager, if you click anywhere else, it'll flip it back to the first card."

### Patterns noticed but not promoted

**The back face is consistently denser with information than the front.** Front carries the marketing pitch (headline + supporting visual). Back carries the substance (real UI + body explanation + link to learn more). The flip mechanic is essentially "front is the sales surface, back is the documentation surface." This is a useful pattern even outside marketing pages — any card-based UI where you want to surface a benefit claim first and reveal the substance on interaction.

**The flippable card is the page's most explicitly interactive component.** The hero video is a passive watch. The Yours carousel is auto-rotating with click-to-override. The dual mockup is static. But the Safe flippable cards demand user action to reveal their full content. This is the page's first truly interactive element in the sense that the user must do something to get the full information. The design choice trusts the user to engage.

---

## Screenful 5A — Fast section entry: banner with viewport-triggered pill animation

The first scrolled screenful of the Fast section. Banner ("The `fast` way to do things online") and the central full-size browser-demo zone.

### What the videos showed

Two recordings cover this screenful:

- `20260514-0145-53` (39s, 1918×1078, 30fps) — full section entry from end of Safe through the central animation. 79 frames at 2fps.
- `20260514-0148-08` (5s, 272×172, 30fps) — close-up of the pill entrance animation only. 31 frames at 6fps for higher density on the brief animation.

### The pill animation, traced frame by frame

From the close-up recording at 6 fps:

- Frames 1-4: pill visible with only a partial speedometer icon — the arc of the bottom curve is forming. "fast" text already visible in green.
- Frames 5-6: a gap/transition where the pill appears semi-transparent. This is the moment when the letters bounce-overshoot and snap back.
- Frames 7-8: pill nearly invisible — likely the trough of the bounce.
- Frame 9: "buil[t]"-like fragment appears — wait, no, this is a different artifact. The slow extract may be catching frames between two states.
- Actually, the close-up captures the loop boundary: the animation ran once, then the pill held its final state for several frames, then the recording captured a moment near the end where the pill was disappearing or in some intermediate state.
- Frames 11-15: the icon is forming — a single curved element (the bottom arc of the speedometer) is appearing, then progressively more of the dial materializes.
- Frames 16-25: settled pill with crossed speedometer + "fast" letters in final position.

The animation runs once. Reloading the page replays it. Scrolling away and back does not.

### What's distinct about this animation vs others observed

The Fast pill is the page's *first viewport-triggered locked entrance animation*. Before this, the page had only used:

- *Perpetual locked motion*: hero video, YouTube embed, AI banner pill cycling.
- *Scroll-linked motion*: Yours opening transformation, Extend icon arrival/dissolve.
- *Static elements*: Yours pill, Safe pill, dual mockup.

The Fast pill is the first to use a "fire once on viewport entry, then stop" pattern. This becomes a recurring category — By Google and Updates will use the same mechanic with different choreographies.

### The central browser demonstration

After the banner, a large Chrome browser occupies the center of the viewport. On viewport entry, a locked-timeline animation plays inside the browser:

- The custom-themed Chrome new-tab page appears. Theme is a colorful botanical artwork: stylized blue, green, red, orange, and pink leaves and flowers on a pink-coral background. Large white "Google" wordmark in the center. Search bar below the wordmark with mic and Lens icons on the right.
- Multiple tab thumbnails open across the top of the browser in rapid succession — many tabs at once, all colorful.
- A Google Slides presentation appears as the foreground content: address bar shows "docs.google.com/presentation/" and the slide visible is a green slide with "Our big idea" as the title.
- An actual Chrome "Energy Saver is on" notification popup overlays the right side of the browser. The popup contains the body text "Background activity and some visual effects, like smooth scrolling, may be limited" and two buttons: "Turn Off Now" (secondary, outline) and "OK" (primary, filled dark).
- Memory Saver indicators surface.

All of this happens automatically once the user scrolls into the section. No further input required.

### Source materials referenced

Frame analysis of `20260514-0145-53` overview and `20260514-0148-08` pill close-up. Mark's narrated description during observation: "When you enter there, there's a cool combination of video starts of the animations, basically, of this, what they're trying to show, like how the browser's got all these tabs."

### Granular details

**The custom Chrome theme used here is reused.** The same botanical theme appears in the Updates section as the wallpaper background of the Automatic-updates card demo. Sixth instance of cross-section visual continuity.

**The Energy Saver notification is the actual Chrome shipping UI.** Compare to the page's other real-product-UI instances: the saved-password tooltip from the hero, the Gemini chat panel, the AI Mode interface, the theme picker from Yours, the Safe backs, the By Google demos. The page consistently uses real product UI; this is one of the most rigorously-applied disciplines of the entire page.

---

## Screenful 5B — Fast section middle: the box-within-box scroll-linked transform

The second screenful — the page's most cinematic single visual effect.

### What the videos showed

The same `20260514-0159-41` recording (47s, 1910×934, 30fps, 94 frames at 2fps) captures the full sequence from the central browser at full size through the box-within-box shrink through to the horizontal carousel.

### Tracing the transform frame by frame

The transition begins when the user starts scrolling past the title. Frame analysis:

- Pre-transform: large Chrome browser at full viewport width, showing the botanical-theme new-tab page with the search bar visible.
- Early transform: the browser content remains visible, but a new outer card boundary is becoming visible *around* the browser. The top of the new card carries text content that wasn't there before — eyebrow + headline ("Prioritize performance") + body text + link.
- Mid-transform: the new outer card is now clearly defined with its rounded edges visible. Inside it, the original browser content is *shrinking* — but the outer card's boundary is also shrinking, just at a slower rate. Two visible boundaries: the outer card edge and the browser edge.
- The two boundaries converge at different rates. The browser shrinks faster than the card.
- Mid-late transform: the original browser is now small enough to fit inside the outer card with room to spare. The card has become its final size.
- Post-transform: a yellow card has appeared to the right of the now-formed Prioritize performance card. Looking at the right edge of the viewport, only about 25% of this yellow card is visible — the rest extends off-screen.

### Why the effect works

The visual trick is that *two boundaries are shrinking at different rates simultaneously*. If only the browser shrank (and the outer card just appeared at its final size), the effect would be unremarkable. If only the outer card formed (and the browser stayed at full size), it would just look like a header materializing. By making both boundaries dynamic and giving them different rates, the page creates the impression of *one thing transforming into another* rather than one thing replacing another. The user reads it as continuity, not substitution.

Technically: a layered scroll-driven transform with different scale rates per element. Mark observed this directly: "the original shape one is shrinking faster, and then what's staying behind is an outline of the original. Everything else is white. That's a very cool visual trick."

### Source materials referenced

Direct frame analysis of `20260514-0159-41`. Mark's narrated walkthrough.

### Granular details

**The transform reverses cleanly on scroll-up.** Mark confirmed the scroll-linked nature — like Yours' landscape transformation, this transform tracks scroll position bidirectionally. Scroll up and the browser grows back to full size, the outer card dissolves.

**There is no pinning visible in frames.** Unlike the Yours scroll-linked transformation (which holds the user at a pinned scroll range while the animation progresses), the Fast transform appears to happen within the natural scroll flow. The user is scrolling normally; the animation is locked to scroll-position rather than to a pinned-section state. This is a more lightweight implementation of scroll-linked motion than Yours uses.

---

## Screenful 5C — Fast section close: horizontal manual carousel

The third screenful — three sub-feature cards in a horizontal sequence with manual navigation.

### What the videos showed

A close-up recording of the carousel area (`20260514-0201-08`, 37s, 1838×936, 30fps, 74 frames at 2fps). Captures the three cards in their settled state and Mark's interactions with the carousel navigation.

### Carousel structure (confirmed by frames)

One card is centered in the viewport at any time. The next card peeks roughly 25% of its width from the right edge. No visible arrow buttons. No pagination dots. The peek is the only navigation affordance.

Mark confirmed during observation: "The horizontal carousel auto cycle, it's not an auto cycle. You have to click on it each time. You have to click on it to make it go right or left."

So the carousel is **manual-only**:

- No auto-rotation (unlike the Yours carousel, which auto-rotated with a continuous blue progress line).
- Click on the peek (right-edge partial card) to advance forward to that card.
- Click backward on a previously-visible card edge to go back.
- Hover does not trigger any action.

### Card contents

**Prioritize performance** (leftmost, white background): the card that formed in Screenful 5B. The compressed central browser is now inside this card as the visual demo. Body text on the right column reads "Chrome is built for performance. Optimize your experience with features like Energy Saver and Memory Saver." A link "Learn more about Memory and Energy Saver ↗" sits below the body. The Energy Saver popup overlays the right side of the embedded browser demo.

**Stay on top of tabs** (middle, yellow background): headline "Stay on top of tabs" on the left side. Body text on the right (text trails: "Chrome has tools ready to close. G..." and "organized and wo..."). Demo shows the actual Chrome tab-grouping feature: colored tab labels reading "Personal" (red chip), "Trip to Arches" (orange chip), "Work" (teal chip), "New Tab," with the standard Chrome address bar below.

**Optimize for your device** (rightmost, green background): headline "Optimize for your device." Demo shows a cross-device composition with a Chrome browser window and a phone with QR code (the QR code is visually consistent with the persistent corner-of-page QR code).

### Cross-section continuity noted

The "Trip to Arches" tab label is a small narrative callback to the Delicate Arch landscape from the Yours section's scroll-linked transformation (where Delicate Arch was the original landscape that transformed into a Chrome theme). The fictional user has now: saved passwords for "Dog sitting" (hero), greeted as Elisa Elisa (AI dual mockup), browsed bakery recipes (AI mockup), customized themes (Yours), saved an address as Elisa Beckett (Yours autofill), set up Password Manager (Safe), and is now planning a trip to Arches (Fast tab group). Same fictional persona, increasingly developed scenario.

### The carousel as a different pattern from the Yours carousel

Both sections use the word "carousel" but the mechanics are very different:

| Property | Yours carousel | Fast carousel |
|---|---|---|
| Orientation | Vertical category list right + single demo panel left | Horizontal card sequence |
| Auto-rotation | Yes, with continuous blue progress line | No (manual only) |
| Pause-on-click | Yes (interrupts auto-rotation) | N/A |
| Pause-on-hover | No | N/A |
| Navigation affordance | Click category title to jump | Click peek-ahead card |
| Pagination indicator | Blue progress line acts as one | None (peek is the only indicator) |
| Cards visible simultaneously | One demo + three category titles | One centered + one peeking |

The page is operating two distinct carousel patterns within itself. Same word, different mechanics, different content needs.

### Source materials referenced

Direct frame analysis of `20260514-0201-08`. Mark's narrated confirmation of the manual-only behavior.

### Patterns noticed but not promoted

**The absence of explicit navigation arrows or pagination dots is a real design choice.** Most horizontal carousels include left/right arrows or dot indicators. This one has neither. The peek-ahead alone communicates "there is more, click that to see it." The decision saves visual real estate but increases the burden on the affordance to be clear. Whether it's clear enough for a first-time user is a real question — Mark caught it intuitively, but a more cautious user might miss it.

**The third Fast card uses the QR code as its visual.** The persistent corner-of-page QR code component reappears here as part of the in-card demonstration. The QR is now a true reusable component on the page — corner element, in-card element on Fast Optimize-for-your-device, in-card element on the final CTA. Component reuse across three positions.

---

## Screenful 6A — By Google section entry: pill animation and Google Search demo

The first scrolled screenful of the By Google section. Banner ("The browser `built` by Google") and the yellow Google Search subsection card.

### What the videos showed

Four recordings (one duplicate ignored via md5 verification):

- `20260514-0317-26` (47s, 1910×944, 30fps) — section entry from end of Fast through the Google Search demo. 94 frames at 2fps.
- `20260514-0320-04` (39s, 1908×950, 30fps) — Google Search demo focused recording. 77 frames at 2fps.
- `20260514-0323-59` (4s, 278×168, 30fps) — close-up of the "built" pill entrance animation. 29 frames at 8 fps.
- `20260514-0327-37` (32s, 1912×940, 30fps) — Pay and Lens cards (Screenful 6B).

### The "built" pill animation, traced frame by frame

From the close-up at 8 fps:

- Frames 1-4: pill in its settled state from a previous play, with the crossed hammer+wrench icon and "built" text visible. (The animation already completed before the recording started here.)
- Frames 5-6: the pill begins fading out (the recording captured the loop boundary where the animation cycles or the user reloaded).
- Frames 7-8: pill visible with "built" text but no icon — empty icon slot.
- Frames 9-10: a single tool (the wrench, rendered diagonal) appears in the icon slot. Frame 10 shows just the wrench by itself, no hammer.
- Frame 11: the hammer appears, overlaying the wrench. The two cross in the X arrangement.
- Frames 12+: settled state with crossed hammer+wrench and "built" text.

The letters "built" appear to cascade in one-by-one across the early frames, but the close-up's framerate isn't quite fast enough to capture the exact stagger. Mark described it as a "centipede one letter at a time kind of flow."

### What's distinct about this animation vs Fast's

Both are viewport-triggered locked entrance animations. Both fire once and stop. But the choreographies are different:

- *Fast*: letters bounce-overshoot their final position then snap back; speedometer draws itself in arc-style with bounce settle.
- *By Google*: letters cascade in one-by-one in sequence; a single tool rotates into the icon slot then a second tool cross-fades to join it.

The page bothered to differentiate. The motion vocabulary varies per section's entrance.

### The Google Search subsection (yellow card)

After the banner, the section's first sub-feature card. Wide yellow card spanning most of the viewport width. Contents:

- Eyebrow "GOOGLE SEARCH" (small all-caps, dark text).
- Subsection headline on the left column: "The search bar you love, built right in." (dark text, large bold).
- Body text on the right column: "Access a world of knowledge at your fingertips. Check the weather, solve math equations, and get instant search results, all contained inside your browser's address bar."
- An animated Chrome browser embedded in the card. The browser shows a new-tab page with the address bar visible.

The animation in the browser (cycles continuously):

1. User types "good morning in french" into the address bar. As typing completes, an autocomplete dropdown appears below the address bar. The dropdown contains: the full typed query at top (with a small Google search icon), then a Google Translate result showing "good morning in french / Bonjour (French)" with a Translate icon, then two more suggestions: "good morning in french pronunciation" and "good morning in french translation." The actual translation is shown *inline in the dropdown* — the user never leaves the address bar.

2. After a pause, the typed query clears. The user begins typing the next query — frame analysis shows "3" being typed, suggesting "300 USD to Euro" or similar currency conversion. (Frame coverage at 2 fps doesn't capture the full second-query state in detail.)

3. After that, "Weather in Paris" — likely shows a weather widget inline.

Below the embedded browser, in the bottom-right of the yellow card: a "Pause animation" pill button (matching the pause component used on the hero video and YouTube embed).

### Source materials referenced

Frame analysis of `20260514-0317-26` and `20260514-0320-04` overviews, and `20260514-0323-59` pill close-up.

### Granular details

**The Google Translate result in the address bar dropdown is the actual Chrome behavior.** Chrome's omnibox really does show Translate results inline. The marketing material is the product.

**The cycling demo has no visible indicator of which query is currently running.** No "1 of 3" pagination, no dots. The cycle is continuous and the user catches it whenever they look. This is consistent with the page's broader pattern of "demos run; users look as they wish."

**The Pause animation button is the page's third pause component instance.** Previous instances: the hero video pause, the YouTube embed pause (which is YouTube's native control). Pattern: any continuously-running motion gets a visible pause control.

---

## Screenful 6B — By Google section close: Pay and Lens flippable cards

The second screenful — two flippable cards side by side, reusing the Safe component.

### What the videos showed

`20260514-0327-37` (32s, 1912×940, 30fps, 63 frames at 2fps) captures the two-card screenful with Mark interacting with the cards.

### Card contents (frame-verified)

**Google Pay** (left, saturated yellow background): the recording captured this card on its *back* face during the observation window. Visible on back: a small product UI demo showing a Google Wallet card list with three saved payment methods rendered as colored chip + dots:

- Blue chip + "•••• 1234"
- Red chip + "•••• 4567"  
- Light-blue chip + "•••• 7890"

Below the card list: "Manage payment methods..." text and the "G Pay" wordmark.

Body text on the back: "Google Pay makes it easy to pay online. When you securely store your payment info in your Google Account, you can stop typing your credit card and check out faster."

Link: "Learn more about Google Pay ↗" in Chrome blue.

Bottom-right of the back: blue circle with "×" close-arrow.

**Google Lens** (right, pale cream background): captured in its *front* state during the observation window. Eyebrow "GOOGLE LENS" + headline "See anything, search anything." (dark text, large bold). Below the headline: a photograph of pink Red Ginger flowers with Google Lens viewfinder corner brackets overlaid on the flower (the white L-shaped brackets in each corner of the focus area). A small floating result card to the left of the flower identifies "Red Ginger / Plant" with two small thumbnails of similar plants below.

Bottom-right of the front: blue circle with "+" plus button.

### Cross-section continuity noted

The Lens demo shows plant identification (Red Ginger). The hero video's Act 3 also showed Lens identifying a plant (Euphorbia Ingens cactus). Same feature, different plant, consistent theme. The page consistently demonstrates Lens through plant identification — fourth or fifth confirmed example depending on how you count narrative continuity threads.

### The two-card scale of the flippable component

Safe used four flippable cards in a 2×2 grid. By Google uses two flippable cards in a single row. Same component (same "+/×" buttons, same up-then-down vertical content swap, same per-element staggered timing, same real-product-UI on back), different scale. This is component-system thinking: define once, scale to fit.

### Source materials referenced

Direct frame analysis of `20260514-0327-37`. Mark's narrated walkthrough confirming the flip behavior matches the Safe-section pattern exactly.

### Patterns noticed but not promoted

**The "GOOGLE LENS" eyebrow is all-caps in the same small-text style as the Safe section's eyebrows.** The card component's typography is consistent across sections: same eyebrow style, same headline weight, same body text size.

**The Lens demo's viewfinder brackets are a real product affordance.** When you point Lens at something in the real Chrome app, those L-shaped brackets really do appear around the recognized subject. The marketing material renders the real interaction state.

---

## Screenful 7 — Updates section: simple non-flippable cards

The single screenful of the Updates section.

### What the videos showed

Two recordings:

- `20260514-0334-45` (13s, 1912×880, 30fps) — section overview. 27 frames at 2fps.
- `20260514-0336-04` (3s, 424×164, 30fps) — pill animation close-up. 25 frames at 8 fps.

### The Updates pill animation

From the close-up at 8 fps:

- Frame 1-2: pill empty.
- Frame 3: "Discover t..." (title above pill, partial visibility).
- Frame 4: pill begins to show "updates" partially formed.
- Frames 5-7: letters of "updates" appear with subtle stagger. By frame 7 the word is fully formed.
- Frame 8: icon area still empty. Letters fully visible.
- Frame 9: a small partial arc appears in the icon slot (the bottom of a circle).
- Frame 10: more of the arc is visible — becoming recognizable as a circular shape.
- Frame 11: the full circular arrow (refresh icon) is rendered, blue against the pale-blue pill background.
- Frames 12+: settled.

So the choreography is: pill appears with empty icon slot → letters arrive with subtle stagger → refresh-circle icon draws itself in arc-style → settled.

### Distinct from the other two viewport-triggered animations

| Property | Fast pill | By Google pill | Updates pill |
|---|---|---|---|
| Pill color | Green/mint | Pale cream | Light blue |
| Icon | Speedometer (drawn) | Crossed tools (cross-fade) | Refresh circle (drawn) |
| Letter behavior | Bounce-overshoot + snap back | Cascade one-by-one | Subtle stagger |
| Icon animation type | Arc draw-in with bounce | Single tool rotates + second cross-fades over | Arc draw-in (subtler) |

Three viewport-triggered animations, three distinct choreographies. Updates' is the simplest of the three — fitting for the section's overall lower-energy treatment.

### The two cards

Below the banner, two cards side by side. Both are **static** — not flippable.

**Automatic updates** (left, pale blue-gray background): Eyebrow "UPDATES" + headline "Automatic updates" + body text "There's a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser." + "Learn about automatic updates" link (Chrome-blue plain text, no animated arrow visible). Below the link, a visual demonstration filling the lower portion of the card: a Chrome browser toolbar fragment showing the favorites star, a small blue dot indicator (the "New Chrome available" indicator), and the actual "New Chrome available" notification pill with a kebab menu. The background of the fragment shows the colorful botanical Chrome theme from the Fast section. Cross-section visual continuity.

**New from Chrome** (right, pale cream background): Eyebrow "LATEST" + headline "New from Chrome" + body text "Chrome regularly updates with tools and features that make it faster and easier to use." + "Learn what's new on Chrome" link. Demo: a large full-color Chrome logo positioned in the bottom-right area of the card.

### The Chrome logo roll animation

On section entry, the Chrome logo on the right card rolls left-to-right across the card to its final position in the bottom-right. This is the only motion in the section beyond the pill entrance.

Mark identified this directly: "There's one where on the card on the right, the Google Chrome rolls across from left to right."

Frame analysis is not dense enough at 2 fps to capture the roll choreography in detail, but the post-roll settled position is visible in later frames.

### Source materials referenced

Frame analysis of `20260514-0334-45` overview and `20260514-0336-04` pill close-up.

### The section's intentional simplicity

After five sections of dense and varied motion, Updates steps down to two static cards with plain links. No flip mechanic, no auto-rotation, no scroll-linked transform, no carousel. The Chrome-logo roll is the only delight, and it's brief.

The section's discipline is rhetorical: by Page 1's end, the user has been given a great deal. The page chooses to release the user with calm rather than push another spectacle. This is the close before the FAQ wrap-up.

---

## Screenful 8 — FAQ: accordion of six questions

The FAQ section, sitting between Updates and the final CTA.

### What the video showed

A short fullscreen recording captured by Mark (`20260514-0345-25`, 13s, 1912×880, 27 frames at 2fps) showing the FAQ in scrolling context. The video does not include any expanded states — all six questions are visible in their collapsed default state throughout.

### Layout (confirmed by frames)

Centered "Frequently asked questions" title at section-banner scale. Below it, six rows separated by thin horizontal dividers. Each row: a question in Chrome blue on the left, a "+" plus button on the right.

### The six questions, in order

1. How do I make Chrome my default web browser?
2. How can I customize Chrome?
3. What are Chrome's safety settings?
4. What is Chrome's password manager?
5. How do I add a browser extension to Chrome?
6. How do I update Chrome?

### The pattern noticed

The questions track the page's section order — default setup, Yours, Safe, Safe's Password Manager sub-feature, Yours' Extend Your Experience subsection, Updates. The FAQ is the page's own argument restated as user questions, in the order the page presented it. Not generic Q&A; argument-restatement.

### Source materials referenced

Frame analysis of `20260514-0345-25`. Mark's brief narrated confirmation that the FAQ is straightforward.

---

## Screenful 9 — Final CTA and footer

The closing of Page 1.

### What the materials showed

One screenshot (`1778730371861_image.png`) captured by Mark showing the full final-CTA card, the social-follow row, the five-column footer, and the Google bottom strip.

### The final CTA card

A wide Chrome-blue rectangular card spans most of the section width. Contents visible in the screenshot:

- Headline "Take your browser with you" in large white text (cut off at the top in the screenshot — appears centered).
- Body text "Download Chrome on your mobile device or tablet and sign into your..." (trails into the next visible portion).
- The **second occurrence of the Download Chrome button**. Pill-shaped, white background, Chrome-blue download arrow icon and "Download Chrome" text. Structurally identical to the hero CTA button.
- The persistent "Get Chrome for your phone" QR code component integrated into the final CTA card. Same QR pattern with Chrome-logo inset that has appeared in the page's corner throughout the user's scroll. Same caption "Get Chrome for your phone."

### The sticky island nav persists

In the screenshot, the sticky island nav with the seven anchors (AI · Yours · Safe · Fast · By Google · Updates · Download) is still visible at the top. It does not fade out at the bottom of the page. Even at the end, the user has one-click access to any section or to the conversion target.

### The "Follow us" row

Below the final CTA, a thin horizontal row with the label "Follow us" on the far left and five social-network icons in a horizontal line. Icons only, no labels. Order: YouTube, X, Facebook, LinkedIn, TikTok. All icons appear to be black/dark gray (monochrome treatment) rather than each social network's brand color.

### The five-column footer

A horizontal-rule divider precedes the footer block. Five columns:

**Chrome Family:**
- Other Platforms (with ↗ external arrow)
- Chromebooks (↗)
- Chromecast (↗)
- Chrome Web Store (↗)

**Enterprise:**
- Download Chrome Browser (↗)
- Chrome Browser for Enterprise (↗)
- Chrome Devices (↗)
- ChromeOS (↗)
- Google Cloud (↗)
- Google Workspace (↗)

**Education:**
- Google for Education (↗)
- Devices for schools (↗)

**Dev and Partners:**
- Chromium (↗)
- ChromeOS (↗)
- Chrome Web Store (↗)
- Chrome Experiments (↗)
- Chrome Beta
- Chrome Dev
- Chrome Canary

**Support:**
- Chrome Help (↗)
- What's New
- Update Chrome
- Chrome Tips
- Google Chrome Blog (↗)

Roughly 30 links total. External-link arrow icons (↗) appear on links that leave the chrome.com domain — different visual signal for navigation that takes the user away.

### The Google bottom strip

A second horizontal-rule divider precedes the bottom strip:

- Google logo on the left.
- Privacy and Terms link.
- About Google link.
- Google Products link.
- Help link (with question-mark icon).
- Language switcher on the right: "English – United States" with a dropdown chevron.

### Source materials referenced

Direct screenshot analysis only. No video for this screenful.

### Patterns noticed but not promoted

**The footer is dense in deliberate contrast to the page above it.** The page above used aggressive whitespace and minimal navigation throughout — the top nav had only five items, no language switcher. The footer flips this — roughly 30 links, language switcher, Google standard chrome. The page makes room for everything Google organizationally needs to surface, but only at the very end, after the marketing flow has resolved. Two design discipline standards coexist on one page.

**The repeat-the-hero-CTA pattern.** The Download Chrome button appears twice on Page 1: once in the hero, once in the final CTA. The two instances are visually identical, structurally identical, and use the same OS-detection text ("For Windows 11/10 64-bit") underneath. The user opened the page with the offer; they close the page with the same offer; what's in between is everything that justifies it.

**The persistent QR code component reaches its third position.** Corner element throughout the user's scroll (always visible), in-card element on Fast Optimize-for-your-device (one of the three Fast cards), in-card element on the final CTA. Three positions, one component.

---

## Cross-section findings (Page 1 internal synthesis)

A consolidated catalog of patterns that emerged across multiple viewports of Page 1. Each one is a candidate for the rubric work that follows.

### The section-banner-pill system, confirmed at six data points

Every themed section on Page 1 has a centered title containing a colored pill with a section-specific icon. The six confirmed pills:

| Section | Background | Icon | Motion |
|---|---|---|---|
| AI | Blue-purple gradient | Cycling: pencil, copy, image (and others) | Perpetual cycling (5-6 second loop) |
| Yours | Pink/coral | Paintbrush | Static |
| Safe | Light blue | Green Chrome shield | Static |
| Fast | Green/mint | Speedometer | One-time entrance (letters bounce + speedometer draws in) |
| By Google | Pale cream | Crossed hammer + wrench | One-time entrance (letters cascade + tools cross-fade) |
| Updates | Light blue | Blue refresh circle | One-time entrance (subtle letters + circle draws in) |

The system is *uniform pill shape and structure, varying color and icon and motion*. Each section gets its own visual identity at the banner level, but the underlying component is shared.

### The five pill motion personalities

The page distributes motion across the pills unevenly:

- One pill has perpetual motion (AI — gets the most attention because it's the headline feature)
- Two pills are static (Yours and Safe — the calmer sections)
- Three pills have one-time viewport-triggered animations (Fast, By Google, Updates — each with distinct choreography)

Not every section needs to move. The contrast is part of what makes the rich motion feel earned.

### The flippable card component, reused

Introduced in Safe (four cards in a 2×2 grid), reused in By Google (two cards in a single row). Same blue "+" button bottom-right becomes "×" close-arrow on back. Same vertical content-swap with consistent directional motion (forward flip = everything moves up; return flip = everything moves down). Same per-element staggered timing. Same "real product UI on back, marketing pitch on front."

### Two distinct carousel patterns

Both Yours and Fast contain carousels, but they operate on entirely different mechanics:

- Yours: vertical category list right + cycling demo panel left; auto-rotates with continuous blue progress line; click pauses.
- Fast: horizontal cards left-to-right; manual-only navigation via peek-ahead affordance; no auto-rotation, no pagination dots.

The page uses both rather than forcing one to fit both contexts.

### Four motion categories operating across the page

By Page 1's end, the page has operated:

1. *Perpetual locked motion*: hero video, YouTube embed, AI banner pill cycling.
2. *Scroll-linked motion*: Yours opening landscape transformation, Yours Extend icon arrival and exit.
3. *Static elements*: Yours pill, Safe pill, dual mockup, By Google Lens card front, Updates cards.
4. *Viewport-triggered locked motion*: Fast pill, By Google pill, Updates pill, plus the larger Fast section's central UI sequence.

Plus user-driven motion (the flippable cards' flip-on-click, the carousel click navigation).

### The "real product UI, faithfully rendered" pattern

Confirmed across every section of Page 1:

- Hero: Use Saved Password tooltip with the rainbow Google key icon, the Gemini chat panel with the cyan-highlighted technical phrases, the Google Lens result card "Euphorbia Ingens / Plant," the G-shield Safe Browsing icon.
- AI section: AI Mode interface in the YouTube video (rainbow gradient border, Gemini star, AI Mode button), real product chrome from start to end of the video; Gemini in Chrome interface on the dual mockup with real affordances ("Type @ to ask about a tab," Sharing indicator, Pro badge).
- Yours section: Chrome theme picker UI in the Customize panel; tab indicators on the Browse phone composition; address autofill animation matching the real Chrome behavior.
- Safe section: Save password? prompt, Safety Check panel, the actual red malware warning page, Privacy Guide opt-in card — all real Chrome shipping interfaces on the card backs.
- Fast section: Energy Saver notification, Memory Saver feature, tab grouping with real chip colors, docs.google.com/presentation URL.
- By Google section: Google Translate result in the address bar dropdown (real omnibox behavior), Google Wallet card list, Google Lens viewfinder corner brackets.
- Updates section: "New Chrome available" notification pill (real Chrome update UI).

This is the page's most rigorously-applied discipline.

### The cross-section narrative continuity, at six identified threads

The page maintains a small but persistent fictional universe across sections:

1. **The Elisa Beckett persona**: hero video's "elisa.g.beckett" saved password (Act 4), AI section's "Hello, Elisa Elisa" personalization, Safe section's Password Manager card.

2. **The Delicate Arch landscape**: Yours section's scroll-linked transformation Stage 1 (full landscape photograph), Yours Customize panel (one of the cycling theme backgrounds), Fast section's "Trip to Arches" tab group label.

3. **The cosmic dark Chrome theme**: Yours scroll-linked transformation Stage 4, Yours Customize panel cycling background, Yours Extend Your Experience subsection right column.

4. **The Lens-identifies-plant scenario**: hero video Act 3 (Euphorbia Ingens cactus), By Google section Lens card front (Red Ginger flower).

5. **The botanical Chrome theme**: Fast section central browser wallpaper, Updates section Automatic-updates demo background.

6. **The persistent QR code component**: hero corner element, scroll-tracking corner element throughout Page 1, in-card element on Fast Optimize-for-your-device, in-card element on the final CTA.

Same fictional user doing real things across sections. The page is one universe, not five marketing modules stitched together.

### The voice patterns consistent across the page

- Verbs lead.
- Headlines are user actions or experiences, never product properties.
- "Learn more about X" links always name X (destination-named, never generic).
- Body text is short — two to three sentences per sub-feature.
- No exclamation points anywhere.
- No words like "powerful," "amazing," "incredible," "revolutionary."

### The catalog of absences

Things consistently *not* on Page 1 that most marketing sites would include: cookie banner, newsletter popup, chat-with-us bubble, exit-intent modal, countdown timer, testimonials carousel, press logo wall, star-rating widget, competitor comparison, autoplay sound, floating CTA, scroll progress indicator, hamburger menu, language switcher in top nav (only at bottom), "Sign in" in top nav, breathing animations on dormant elements.

The absence of decoration around the work is the work being decorated.

### The aggressive component reuse

The page operates a small design system at the component level. Components observed reused:

- Pale-blue rounded pill: announcement bar, AI section CTA bar, Sign in to get started CTA, Explore extensions CTA, the announcement bar / footer area in similar styling.
- QR code component: three positions on the page.
- Download Chrome button: two positions on the page (hero, final CTA), structurally identical.
- Flippable card component: Safe (4 cards), By Google (2 cards).
- "Pause animation" pill: hero, YouTube embed, AI banner pill, By Google Google Search card.
- Section-banner pill: six sections, six color-and-icon variants of one shape.

### The white-space-as-section-delimiter system

Major section boundaries get substantially larger gaps than subsection boundaries within sections. The Yours section opening uses an even larger gap as a deliberate scroll-momentum-building pre-load before the section's signature scroll-linked transformation. White space encodes structural change and pre-loads dramatic moments.

---

## End of Page 1 raw notes (current scope)

Pages 2 through 6 will be appended as observation continues. The raw notes structure for each subsequent page should mirror this one: source materials, looking process where applicable, contact-sheet observations where applicable, targeted observations, screenful-by-screenful entries, granular details, cross-references, and patterns noticed but not promoted.

When the Chrome observation pass is fully complete, this file and the polished `CHROME_OBSERVATIONS.md` should be read side by side. Anything in this file that should have been in the polished doc gets promoted; the rest can be archived or deleted.

---

## ⚠️ Delete me

This file is temporary scaffolding, not a permanent reference. It exists as a belt-and-suspenders safety net during the Chrome observation pass — a place to keep granular details, frame-by-frame logs, and asides that the polished `CHROME_OBSERVATIONS.md` doesn't carry.

Once the Chrome observation pass is fully complete across all six reference pages, the workflow is:

1. Read this file end to end.
2. Read `CHROME_OBSERVATIONS.md` end to end.
3. Promote anything from this file that should be in the polished doc — granular details that turned out to matter, patterns that should have been surfaced, observations that the rubric work will need.
4. Confirm the polished doc is now complete and self-sufficient.
5. **Delete this file.**

Do not keep this file in the repo long-term. Its purpose is the migration of detail into the polished doc; once that migration is verified, it is dead weight. The git history preserves it if it is ever needed for forensic reasons.

Last step before deletion: a final commit with a message like `docs: complete Chrome observation pass; remove raw notes scaffolding` so the deletion itself is intentional and findable in the log.
