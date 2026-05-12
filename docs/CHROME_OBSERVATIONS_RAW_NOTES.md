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

This file is intentionally less polished than its sibling. It is structured by the looking process, not by the rubric categories.

**Status:** Page 1 only (matching the polished doc's current state).
**Started:** 2026-05-12 (retrospectively, from 2026-05-11 looking session).

---

## Source materials used

Six screen recordings and one full-page screenshot uploaded by Mark on 2026-05-11, plus two text transcripts of Mark's spoken observations and a paste of the page's full text content.

The six video files and their captures:

- `20260511-2220-48` (28.1s, 808×802, 30fps). Close-up recording of the hero video area at normal speed. Full cycle captured.
- `20260511-2226-28` (9.8s, 1912×1078, 30fps). Fullscreen recording capturing the initial page load — shows the staggered arrival of headline, button, logo, and hero video together.
- `20260511-2227-01` (6.5s, 750×730, 30fps). Close-up of only the left text column during initial load. Diagnostic for the text-arrival sequence.
- `20260511-2227-38` (29.6s, 1918×1078, 30fps). Fullscreen recording at normal speed. Full cycle of the hero video in the context of the whole page.
- `20260511-2229-57` (10.0s, 742×660, 30fps). Close-up recording of the first half of the hero video (the AI search / Gemini act).
- `20260511-2230-47` (29.4s, 736×720, 30fps). Close-up recording of the hero video slowed to roughly 0.25× speed. Full cycle. The primary instrument for transition analysis.

The screenshot: `1778538694117_image.png`. Full-page screenshot of the page on initial state, showing nav, announcement bar, hero left and right columns, QR code, and the very top of the next section ("Our most powerful AI search") peeking at the bottom.

## Looking process

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

## Specific details that didn't make the polished doc

Things noticed during the looking process that were too granular for the rubric-feeding observation document. Preserved here in case they matter later.

**The phone in the Lens scene shows real iOS-style status bar elements.** "3:46" is visible as the time. The status bar has cellular signal bars, wifi icon, battery icon — all of it visible in the device frame. Even when the phone is at relatively small size in the frame, these details are rendered. Suggests Google rendered the device frame as a real high-fidelity asset, not a generic phone outline.

**The chemistry tablet "By Dr." line.** The author name on the chemistry textbook is partially legible. Begins with "Eliza" but is cut off. Whether this matters for rubric — probably not. Whether it confirms the level of detail Google invested — yes.

**The hand at the top of the chemistry tablet.** When the chemistry card first arrives at perspective tilt, a partial hand is visible at the top edge — implying someone is holding it. Subtle realism cue.

**The dog scenes contain two distinct settings.** First the two-women-petting-dog setting (with trees in background, looking like a park or backyard). Then the single-woman-walking-dog setting (leafy path going away). These are not the same scene — the dog appears similar but the environment is different. Two micro-scenes, not one.

**The "elisa.g.beckett" username.** A specific full name chosen for the saved-password demo. Implies a real-feeling user account being demonstrated, not a generic "user@example.com." Increases authenticity.

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

## Cross-reference with Mark's transcribed observations

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

## Patterns noticed at the time but not pulled into the polished doc

A few patterns that I noticed while looking but that did not seem strong enough to feed the rubric. Preserved here for possible promotion later:

**The "anonymous everyman" casting choice.** None of the people in the hero video are named, identified, or singled out. They are generic young adults using Chrome. This is a casting decision — Google could have used recognizable people, branded influencers, or named demo characters. They didn't. The video says "this is for anyone" through its casting.

**The "demonstration over claim" pattern at the video level.** No text card in the video says "Chrome helps you study!" or "Try AI search!" or "Stay safe!" The video shows people *doing* these things, with no slogans, no banners, no captions making the claim. The argument is the demonstration.

**The "real interface, not stylized" pattern.** Every interface shown in the video — the Gemini chat, the Google Lens result, the Use Saved Password tooltip — appears to be a faithful rendering of what those interfaces actually look like in Chrome today. Not an idealized version with simplified affordances; the actual product. The marketing material is also a product screenshot, in motion.

**The "pacing accelerates within an act, slows between acts" pattern.** Within each of the five acts, motion is continuous and active (typing, transitioning, sliding). Between acts there is the white-breath frame. The macro-rhythm is fast / pause / fast / pause / fast. This may be why the video feels watchable rather than overwhelming despite its density — there is regular rest inside it.

**The "show the user's eye level" framing on people.** The man with the chemistry book is shot at his eye level. The girl with the laptop is shot at her eye level (not over-the-shoulder, not from above). The plant-store man is the exception (overhead). The default is "person at their own level," which positions the viewer alongside them rather than observing them from outside.

**The slight pre-fade saturation of colors when transitioning.** When acts end and white-circle wipes begin, the previous scene's colors are briefly slightly desaturated as they fade. This is a tiny detail, possibly an artifact of the fade compositing, but consistent enough across transitions that it might be deliberate. Not load-bearing.

---

## End of Page 1 raw notes

Pages 2 through 6 will be appended as observation continues. The raw notes structure for each page should mirror this one: source materials, looking process, contact-sheet observations, targeted transitions, screenshot analysis, specific details, cross-reference with Mark's transcripts, patterns noticed but not promoted.

When the Chrome observation pass is fully complete, this file and the polished `CHROME_OBSERVATIONS.md` should be reviewed side by side. Anything in this file that should have been in the polished doc gets promoted; the rest can be archived or deleted.
