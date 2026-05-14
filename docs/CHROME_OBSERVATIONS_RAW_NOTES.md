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

**Status:** Page 1 in progress (Viewport 1 hero, AI section screenfuls 2A through 2C, Yours section screenfuls 3A through 3D).
**Started:** 2026-05-12.
**Last updated:** 2026-05-13.

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
