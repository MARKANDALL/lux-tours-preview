<!--
File: ONBOARDING/tours-preview/docs/CHROME_OBSERVATIONS.md
Purpose: Pure-description observation pass on Google Chrome's six reference
pages. Page-by-page, viewport-by-viewport. No scoring, no judgments — that
comes later in the rubric. This is the raw material the rubric will be built
from.
-->

# Chrome Observations

A structured observation pass on the six Google Chrome reference pages identified in `HANDOVER.md`. The purpose of this document is descriptive only — to name what Chrome is doing, technique by technique, across pages and viewports, in enough detail that a rubric can later be built from it.

This is not a scoring document. Nothing here ranks Chrome as good or bad, applicable or inapplicable to Lux. Implications and applicability decisions belong in the rubric work that follows and in the design discussions after. The goal here is to see clearly.

**Status:** Page 1 complete. Pages 2 through 6 pending.
**Started:** 2026-05-11.
**Last updated:** 2026-05-14.

## The six reference pages

1. `https://www.google.com/chrome/`
2. `https://www.google.com/chrome/ai-innovations/`
3. `https://www.google.com/chrome/safety/`
4. `https://www.google.com/chrome/browser-tools/`
5. `https://www.google.com/chrome/mobile/`
6. `https://chromewebstore.google.com/category/extensions`

## How this document is organized

Each page gets a top-level section. Within each page, observations are organized by viewport — the chunks of the page that come into view as the user scrolls. Within each viewport, observations are grouped by analytic category (page-load choreography, transition vocabulary, layout, typography, color discipline, motion, voice, micro-UX, what's-not-there, pacing, and so on). Not every category appears in every viewport; only those where there is something specific to name.

Once all six pages are covered, a final section captures cross-page patterns that only become visible by comparison.

---

## Page 1 — google.com/chrome/ (Home)

The main marketing page for Chrome. Long-scroll layout with a hero, six themed content sections, an FAQ, a final CTA, and a sprawling footer. Sticky island nav drops in after the hero.

### Viewport 1: Hero (above the fold)

The first screen the user sees on load. Contains the page nav, an announcement banner, an asymmetric two-column hero (text left, animated video right), a small QR code in the top-right corner, and the very top of the next section peeking at the bottom.

#### Page-load choreography

The text loads in a specific sequence, and that sequence is itself communicative. Order of arrival:

1. A full beat of pure white — anticipation, no content visible.
2. The headline "The browser that gets more done" appears at roughly fifty percent opacity, in gray.
3. The headline darkens to full black.
4. The blue "Download Chrome" button, the "I want to update Chrome" link, and the legal text fade in together below the headline.
5. The headline shifts up slightly to make room for the element about to land above it.
6. The Chrome logo appears above the headline as a small monochrome shape.
7. The Chrome logo's colors fill in — red, yellow, green, and blue resolving to their final state.

The Chrome logo arrives last. The message lands before the brand mark. The promise lands before the seal. By the time the colorful logo appears, the user has already read what is being claimed, and the logo functions as a signature on a claim that has already been made.

On the right side of the viewport, the hero video begins its own loop simultaneously with the headline arrival. The bottom legal disclaimers fade in. The QR code "Get Chrome for your phone" slides in from the right margin.

The whole arrival sequence resolves in roughly 1.5 to 2 seconds. Once it lands, nothing on the page moves except the hero video. The rest of the viewport becomes a still photograph with one animated panel inside it.

#### Hero video atomic breakdown

The hero video is a 27-second loop structured as a five-act narrative film. It is not a sizzle reel of disconnected feature shots. Each act runs roughly 5 to 6 seconds and follows the same internal skeleton: brand icon → person using it → micro-card → result, then a clean transition to the next act. Naming the five acts:

**Act 1 — Identity Establishment (≈0–3s).** The Chrome logo is born as a pinprick in the dead center of the canvas and zooms toward the viewer. Inside the inner blue circle of the logo, a young man at a laptop is already faintly visible — the brand has a soul, it is looking out through the glass. As the logo grows, the outer red-yellow-green ring does not shrink; it dissolves, fading from solid to translucent until the man fills the frame and the colored ring is gone. The card has formed. The brand has opened its eye and shown the viewer a person.

**Act 2 — AI Search (≈3–10s).** The man is studying chemistry on his laptop. The view pivots to a tablet screen showing "Chemical Bonds: Ionic and Covalent." A white wipe carries the viewer to a zoomed close-up of the top-right of a Chrome browser window — favorites star, extensions icon, profile bubble, three-dot menu. The Gemini button in that toolbar lights up: first a black diamond icon under a spotlight highlight, then the icon shifts to the rainbow Gemini gradient. The viewer dives into the Gemini button — fingers typing in close-up, then a girl on her bed with a laptop, in a circular portrait frame. A small Gemini chat card materializes below her; the question types itself out letter by letter ("Help me understand the difference between these chemical bonds"); the response begins to write itself with cyan highlights on the key technical phrases. The girl's portrait shrinks down to the bottom-left while the chat panel grows up to take center stage. Story arc: tool → action → actor → result.

**Act 3 — Google Lens (≈10–17s).** The rainbow camera icon emerges from a white circle that grows over the previous Gemini answer. A beat of white breath. The viewer is now in a plant nursery, seen from above, watching a man walk among the shelves with his phone in hand. The card transitions to his phone screen — Google Lens has scanned a cactus. A search input card slides out to the left; a result card slides in from the right, identifying "Euphorbia Ingens / Plant." The phone is shown in a clean device frame with the system time visible (3:46), grounding the moment in reality. Story arc: tool → environment → action → result.

**Act 4 — Safety and Passwords (≈17–25s).** The blue G-shield (Safe Browsing) appears centered, then opens onto an outdoor scene of two women petting a long-haired dog. A young woman walks her dog on a leafy path. A phone-shaped card slides up showing a sign-in form labeled "Dog sitting" with email and password fields. Chrome's actual "Use Saved Password?" tooltip animates in, populated with the username "elisa.g.beckett" and a row of dots for the password. Story arc: shield (the promise) → relatable context (someone who uses dog-sitting services) → friction (the sign-in form) → relief (Chrome handles it).

**Act 5 — Reset (≈25–28s).** Everything fades to pure white. A full beat of nothing — the white breath. The Chrome logo begins to reappear as a pinprick in the center, and the loop restarts.

Density is the defining property of this video. Five complete feature pitches in under thirty seconds. The density is not chaos because the acts share a skeleton — the viewer's eye can follow the rapid sequence because each act unfolds in the same shape: brand icon, then person, then small card, then small card, then result, then dissolve. Pattern recognition is doing the work of comprehension.

#### Transition vocabulary

The hero video uses a small, disciplined set of transition mechanics, repeated throughout. Naming them as a catalog:

- **The dissolve-out ring.** Used twice — once when the Chrome logo opens, once when the Gemini star opens. The brand icon's outer decoration evaporates while the inner content grows to fill the space. Not a shrink; a fade. "Opening a door through the icon."

- **The pinprick birth.** Every act begins with an icon at point-zero in the center, then expands. The pinprick gives a clean focal anchor — the eye knows exactly where to look.

- **The white-circle wipe.** A pure white expanding circle covers the previous scene completely, then dissolves to reveal the next scene. Between scenes, a full frame of pure white is held — not implied, actually rendered. The "white breath."

- **The corner-shrink.** When an actor (the girl, the man with the phone) finishes their role, they do not disappear. They shrink to a bottom-left or bottom-right corner while the next element takes the main stage. Continuity is preserved; the person who triggered the action is still visible as the result plays out.

- **The slide-card swap.** Within a scene, supplementary cards slide in from the right (results) or out to the left (inputs). The Lens scene does this with the Google search card and the plant identification card. The pattern mimics actual Android swipe-card UX — familiar grammar.

- **The 3D tilt arrival.** The chemistry tablet card arrives at a slight perspective angle, viewed as if from the side, before settling to frontal. This breaks the flat-on-flat monotony for one beat per act and reads as a physical thing entering the viewer's world.

- **The typewriter effect.** All text in the video — the Gemini question, the Gemini answer — is typed out character by character, never appearing fully formed. This does two jobs: it shows that the feature generates in real time, and it gives the eye something to follow within an otherwise static element.

What the video does not use: no spinning cubes, no parallax sliders, no fancy 3D camera moves, no glitch effects, no scroll-jacking, no parallax depth. The motion vocabulary is small and consistently applied.

#### Layout and composition

The hero is split asymmetrically into two columns. The left column occupies roughly forty percent of the viewport width and holds the Chrome logo, the headline, the primary CTA button, and supporting text and legal disclaimers. The right column occupies roughly fifty percent and holds the hero video. Between them is a substantial gap; they do not crowd each other. Both columns are vertically left-aligned to the same baseline grid.

The space above the headline is generous — roughly 80 to 100 pixels of pure white between the announcement bar and the Chrome logo. The hero video card has no frame, no border, and no shadow. It floats on white as if cut out and pasted onto the page.

The next section's headline ("Our most powerful AI search") peeks at the very bottom of the visible viewport. The hero is engineered to suggest more below the fold; the first screen's job is partly to invite the scroll.

The QR code labeled "Get Chrome for your phone" sits in a small white card overhanging the right edge of the hero area, with a chevron suggesting expansion. It occupies a corner that does not compete with the main content.

#### Typography

A single typeface family (Google Sans). The hero headline is roughly 80–90 pixels tall, font-weight 800 or 900, with tight (negative) letter-spacing and compressed line-height (around 0.95). "The browser that gets more done" wraps onto two lines deliberately — the line break between "that" and "gets" creates the visual rhythm. Body text is approximately 14 to 16 pixels. The headline-to-body ratio is roughly 5 or 6 to 1. This is a dramatic hierarchy.

The next section's headline ("Our most powerful AI search," visible at the bottom of the viewport) uses the same typographic treatment — different content, same weight, same scale. Every major section title on the page will repeat this treatment. This consistency is what makes the page read as one document rather than a stack of components.

#### Color discipline

Counting only the page chrome and not the content inside the hero video: white background, near-black text in the #08–#1A range, Chrome blue (approximately #1A73E8) for links and the primary button, a very pale blue-gray (approximately #F0F0FA) for the announcement bar background, and one cyan accent for the Gemini star icon in the announcement bar. Five colors total for the entire page surface.

Inside the hero video, color is unrestrained — Chrome's full rainbow, Gemini's rainbow, photographic colors of the people and environments shown. But it is contained within the video panel. The frame around the video is monochrome.

#### Sticky island nav

A floating pill-shaped nav drops in from the top of the viewport once the user scrolls past the first viewport. It is not present on initial load. As the user scrolls back up to the top, the nav fades up and out of view.

The labels are deliberately one-word each: **AI · Yours · Safe · Fast · By Google · Updates · Download**. Seven words name the entire page.

The nav functions as three things at once:

- A table of contents for the six content sections plus the final download CTA.
- A theme-word anchor for each section — each label matches the typographically emphasized word in that section's headline.
- An argument for the page itself. The order — AI first, customization second, safety third, speed fourth, provenance fifth, freshness sixth — is the pitch's structure.

#### Voice

Reading the full text of the page end to end, three patterns hold throughout.

**Verbs lead.** Section headlines are imperatives or benefit statements framed from the user's point of view: "Dig deeper." "Customize your Chrome." "Browse across devices." "Save time with autofill." "Use strong passwords." "Check your safety level in real time with just one click." "Keep your privacy under your control with easy-to-use settings." "Prioritize performance." "Stay on top of tabs." "Pay for things as quick as you click." Section after section, the headline is something the user does, or something happening for the user. Never "We built X." Never "Chrome features X."

**Product properties are never described directly.** What is described is what the user can do with the product. "Check your safety level in real time with just one click" rather than "Chrome's Safety Check is a comprehensive tool that audits..." The thing being sold is the user's action, not the product's anatomy.

**Decorative letter treatment.** Several headlines use a typographic trick in which one word is set with spaced-out letters in a different style: "Make it `y o u r s` and take it with you," "Browsing boosted with built-in `A I`," "Stay `s a f e` while you browse," "The `f a s t` way to do things online," "The browser `b u i l t` by Google," "Discover the latest `u p d a t e s` from Chrome." The emphasized word is always the section theme — the same word that appears in the sticky nav. Three-level reinforcement of one idea per section: nav anchor, headline emphasis, body delivery.

This treatment is the first form of the section-theme grammar. It evolves in later viewports — see Viewport 2, where the same anchor word graduates into an animated UI pill embedded in the section banner.

The body copy is short. Three or four sentences per sub-feature, sometimes fewer. The page is large because there are many sections, not because any individual section is verbose.

"Learn more about X" links always name the destination specifically — "Learn more about Password Manager," "Learn more about Safe Browsing," "Learn more about Google Pay." Never a generic "Learn more."

#### Micro-UX details

The "Pause video" button at the bottom-right of the hero video is a tiny pill with a low-contrast light blue background. It is present for accessibility — users with motion sensitivity can stop the loop — but it does not call attention to itself.

"For Windows 11/10 64-bit" appears under the Download button. The user's operating system and architecture have already been detected and surfaced. The user does not have to choose which version to download.

The QR code in the top-right corner solves a real cross-device problem (the user is on a laptop but also wants Chrome on their phone) without resorting to a popup or banner intrusion. It earns a corner.

The announcement bar at the top ("Explore the latest updates to Gemini in Chrome and AI Mode" → "Go to AI Innovations") is the closest the page comes to marketing intrusion, and it is still doing real work — pointing to new content. It uses a different background tint to distinguish itself from the page proper without shouting.

The top nav has only five items (AI Innovations, Safety, By Google, Mobile, Extensions). No "Pricing" (Chrome is free). No "Sign in." No language switcher. No search icon. No hamburger. No "Contact." Cleanest possible top nav.

#### What is NOT there

Cataloging the absences:

- No cookie banner visible in the viewport.
- No newsletter signup popup.
- No "Chat with us" bubble in a corner.
- No exit-intent modal.
- No countdown timer.
- No social proof testimonials carousel.
- No "As featured in" press logo wall.
- No customer star rating widget.
- No autoplay sound.
- No competitor comparison table.
- No pricing block (the product is free).
- No "Watch the demo" overlay video that takes over the screen.
- No floating CTA that follows the user.
- No scroll progress indicator.
- No hamburger menu hiding additional nav items.

The page is unburdened. Confidence in the work is expressed through the absence of decoration around it.

#### Pacing observed within this viewport

The hero alone does not require the user to do anything but watch and scroll. Reading time for the headline is roughly two seconds. The eye then moves to the hero video, which runs continuously. The CTA is one click away. The next section's title is visible at the bottom edge, inviting the scroll. No reading fatigue is possible in a viewport with this much white space and this little text.

---

### Viewport 2: AI section

The full AI section, occupying roughly two scrolled screens. Top half is built around a centered section title and an embedded 62-second YouTube video promoting AI Mode in Chrome. Bottom half is built around a second-tier banner ("Browsing boosted with built-in AI"), a static dual-mockup composition (desktop and phone showing Gemini in Chrome), and a Gemini in Chrome subsection with an associated CTA bar. The section spans the full AI experience: search-side (AI Mode) on the top half, browser-side (Gemini in Chrome) on the bottom half.

#### Section entry mechanics

The handoff from hero to AI section is mediated by three coordinated movements that happen as the user begins to scroll.

The layout shifts from asymmetric to centered. The hero's two-column composition (text-left, video-right) scrolls up and out. The AI section's title "Our most powerful AI search built right into Chrome" enters centered. Same typeface, same weight, same scale as the hero headline — typographic consistency anchors the page identity while alignment shift signals "new place." No divider line, no background color change, no decorative element marks the section boundary. The eye reads the symmetry change as the transition.

The page nav and announcement bar slide upward and disappear off the top edge. Simultaneously, the sticky island nav slides downward from above the viewport and settles into its floating position. The two elements translate physically through the same vertical space; for a brief moment during the swap, neither is fully present. That moment of neither is what makes the swap feel like a real spatial transition rather than a UI state toggle. When the user scrolls back up, the motion reverses cleanly.

The sticky island nav carries a highlighted active state. The "AI" anchor in the seven-word pill gets a light gray rounded pill behind it, marking the user's current location. The highlight migrates from anchor to anchor as the user scrolls between sections.

#### The QR code micro-interaction

A 5.5-second interaction worth banking in detail. In the expanded state inherited from the hero, the QR code is a small white card containing the QR pattern itself, the Chrome logo inset in the QR's center (clever — turns a utility code into a branded mark), the caption "Get Chrome for your phone," and a small `>` chevron in the top-right corner.

Clicking the chevron triggers a four-stage collapse. The QR code, the inset Chrome logo, and the caption all fade to transparency simultaneously. The card itself shrinks horizontally into a small pill perhaps fifty pixels wide. As it shrinks, a small blue phone icon fades into the pill's interior. The chevron rotates from `>` to `<`, indicating the new direction the action would now go. A second click reverses the entire sequence.

The chevron rotation is the single most efficient part. A one-character change communicates "this is a toggle, not a close button" without any text. From Viewport 2 onward, the QR code remains visible in whatever state the user has left it and follows the user as they scroll — it is a sticky element fixed to the viewport, not in-flow content.

#### The YouTube video atomic breakdown

The video is a 62-second clip embedded directly on the page using YouTube's native player. Custom poster image shows clouds, the Chrome icon, the Gemini magnifying glass, and the title "Dive deeper with / AI Mode in Chrome." The poster's visual language is identical to the video's opening frames, so the click-to-play moment is continuity, not transition. The video reuses several motion mechanics from the hero (pinprick birth, corner-shrink, white breath) but extends the vocabulary with a fully-rendered 11-scene narrative arc. Tracing the scenes:

**Scene 1 — Title card (0–2s).** "Dive deeper with / AI Mode in Chrome" against the cloud-and-Chrome composition. Title baked into the poster frame.

**Scene 2 — Clouds parting, Chrome emerging (2–9s).** The camera flies through golden-lit clouds toward a small gap. The Chrome logo is visible in that gap, enlarging as the camera moves toward it. The sky color shifts from warm gold to cool blue as the journey progresses — a deliberate temperature transition.

**Scene 3 — Chrome meets Gemini magnifying glass (9–15s).** The Gemini magnifying glass icon (a magnifier with the Gemini star inside the lens) flies in and overlays itself directly on top of the Chrome logo for roughly a second. The visual implication is direct: Gemini is inside Chrome, not next to it. The two icons then separate, hover side by side facing each other, and turn together to face the viewer. Both icons rendered in 3D with polished glass-like reflections.

**Scene 4 — Card pull-back and shrink (15–18s).** The blue card containing the two icons shrinks slightly, translates toward the bottom-left, and dissolves out. Same corner-shrink mechanic the hero video uses.

**Scene 5 — Search bar close-up with rainbow Chrome outline (18–21s).** A new card emerges, almost entirely white except for a thin rainbow border (red-yellow-green-blue Chrome colors) tracing its perimeter. Inside the card, a Google search bar appears with the microphone and Lens icons on the right.

**Scene 6 — The AI Mode button reveals itself (21–25s).** A small circle appears next to the existing mic and Lens icons. From a pinprick, it grows into a full-sized search bar element. The Gemini star icon appears and does a tiny "boop" animation — enlarges briefly, then settles. The word "AI Mode" reveals itself letter by letter from left to right, sliding out from the magnifying glass icon. The rainbow Chrome outline that was tracing the card now traces the new "AI Mode" pill button specifically. **The rainbow outline = AI** is a piece of visual grammar the page is teaching here.

**Scene 7 — Pull back to Google homepage (25–28s).** The camera zooms out from the search bar to reveal the full Google.com homepage. "Google" wordmark big and centered, the search bar below with the AI Mode button inside, the two classic Google buttons "Google Search" and "I'm Feeling Lucky" below.

**Scene 8 — User clicks AI Mode (28–30s).** A semi-transparent blue circle (the cursor) fades in from below-left, curves up to hover over the AI Mode button, and clicks. The click animation: circle shrinks, then expands. Dark circle appears around cursor at click, transitioning to white, then fading. The search bar expands to double height. **The cursor arcs, not moves linearly** — physics-based human-attention motion modeling. Same trick film animators use.

**Scene 9 — The coffee machine query (30–42s).** The user types, character by character at realistic typing speed: "I'm looking for a new Ninja coffee machine but I live in a small studio apartment so counter space is tight. I mostly drink lattes and want something that's easy to use. Which models would be best for me?" While typing, a rainbow gradient highlight sweeps across portions of the typed text — specifically the contextual constraints (the size of the apartment, the preference for lattes, the easy-to-use requirement). The highlight is the same rainbow that traced the AI Mode button. Visual message: this part of your input is what AI Mode is reasoning over. Below the search bar, four small icons appear semi-transparently — Calendar, Drive, Docs, Sheets, "Show More" — representing additional context AI Mode could pull from. Shown but not used in the demo; context-availability hinting. After typing finishes, the cursor arcs to the send button (blue circle with white arrow) and clicks.

**Scene 10 — AI Mode results page (42–52s).** Whoosh into a new page. White background. The user's query in a small gray bubble at the top. "Searching" with three small source icons (Google, YouTube, another). The response fades in. Left column: a paragraph of generated text with the Ninja product name in bold ("Ninja Pods and Grounds Specialty Single Serve Coffee Maker, PB051"). A section title "Best Ninja models for small spaces," then a bulleted list. Right column: product cards with images, the Ninja PB051 with price ($129.99) and star rating (4.3 stars, 1.9K reviews), multiple product cards stacked. Below everything: the AI Mode input field, now half-height, with "Ask follow-ups / Go ahead. Ask follow-ups" as ghost placeholder text.

**Scene 11 — Follow-up question (52–58s).** The user types "How easy is this to clean?" Cursor arcs to send. The page shifts to a focused view: left side has the AI response with a section header "Daily cleaning" and bullets, the relevant phrase "The Ninja Pods and Grounds Specialty Single Serve is designed for low maintenance" highlighted in the rainbow gradient. Right side: a hero image of the specific Ninja product.

**Scene 12 — Mobile transition (58–62s).** The whole results view fades, replaced by pink background. A phone-shaped frame slides down from the top like a drawer pull. Now in Chrome on a phone. The Discover feed visible: "Improved Gemini audio models for powerful voice" headline with a Gemini Audio tag. Mobile Google homepage with shortcut icons (Google, Translate, YouTube, Photos), AI Mode + Incognito buttons. The video continues briefly through more queries (a Bulgarian Split Squats exercise lookup, a tomato gardening question) before returning to the cloud-and-Chrome title to close the loop.

**Visual grammar the video teaches.** The rainbow Chrome outline equals AI. Four applications of the same gradient (tracing the title card, tracing the AI Mode button, highlighting the typed constraints, highlighting the answer-relevant phrase in the follow-up) all carry the same meaning. The cursor arcs rather than moving linearly. Pinprick births and corner-shrinks are reused from the hero — the same vocabulary, in a different production. The interfaces shown are real product UI, not stylized — every screen looks like the actual AI Mode shipping product.

**Audio (off by default, requires unmute click).** When activated: a young woman narrator, fun but smart. Upbeat percussion bed of tapped drums, claps, light bass, and some organ — instrumental only, no lyrics. Keyboard click sound effects synced to typing moments. Mouse click sound effects synced to cursor clicks. Music never overwhelms the voice. The narrator says exactly what subtitles say — audio and CC in lockstep. She addresses the audience explanatorily, not observationally. Closes with "Dive deeper with AI Mode in Chrome" as the final spoken line, pairing with the title card. The presence of diegetic sound effects (keyboard, mouse) is the giveaway that audio and video were cut together, not just played simultaneously.

**Subtitles visible by default.** Closed captions appear at the bottom of the video frame during playback, formatted with `>>` prefix for the narrator. The entire video is built to be fully comprehensible without sound — a respect-the-user choice that doubles as a robustness choice. Works on muted laptops, in libraries, with autoplay-restricted browsers, with screen readers.

**Autoplay-on-scroll, not autoplay-on-load.** If the user reloads at this section, the video shows the poster and requires a click. If the user reaches this section by scrolling, the video starts playing automatically. The scroll itself functions as the play trigger.

**YouTube native controls when hovered.** Top bar shows the video title and channel name (clickable to YouTube). Audio toggle with vertical scrub-on-hover. CC toggle. Settings gear. Bottom-left: share arrow, watch-later clock. Bottom-right: YouTube watermark (semi-transparent, becomes solid on hover). Scrubber bar. Fullscreen button. Center: standard YouTube play controls. Chrome made a deliberate choice — use the platform's native player, don't custom-style it, let users feel the familiar YouTube grammar. The cost is showing YouTube branding on Chrome's own marketing page. The benefit is zero friction.

**Looping behavior.** The video loops seamlessly back to the title card. No replay button, no suggested-video thumbnails, no YouTube "you might also like" interruption.

#### The "Dig deeper with AI Mode" subsection (lower half of upper Viewport-2)

Directly below the YouTube video, in the same scroll block, sits the section's first sub-feature delivery. Structure: section title centered at hero-headline scale, then the YouTube video, then an eyebrow "GOOGLE SEARCH" (small, all-caps, muted gray), then the subsection headline "Dig deeper with AI Mode" (left-aligned, roughly 60–70% the scale of the section title), then a body paragraph in the right column at body-text scale.

This subsection uses a two-column left-right layout: eyebrow-plus-headline on the left, body paragraph on the right. That makes three layout patterns coexisting in just the first two viewports — asymmetric two-column (hero), centered single-column (section title plus video), two-column left-right (subsection delivery). Different patterns for different communication jobs.

#### The "Browsing boosted with built-in AI" banner (entering the second half of Viewport 2)

The lower half of the AI section opens with a second-tier banner: "Browsing boosted with built-in `A I`." The treatment of the "AI" anchor word is the keeper observation for this viewport.

The "AI" word in the headline is no longer a typographically-spaced decoration (as in Viewport 1's `y o u r s`, `s a f e`, etc.). It has *graduated* into an actual UI pill. The pill has a blue-purple gradient background. Inside the pill, an animated icon cycles through three states across roughly 5.5 seconds:

- A pencil with sparkles (writing/composing — what Gemini does when asked to draft).
- Stacked cards / copy icon (summarizing — collapsing many things into one).
- An image or landscape icon (image understanding — what Gemini does when shown a picture).

Each icon holds for approximately 1.7 seconds before the next fades in. The icons do not slide in or rotate — they morph in place. (This is M3 Expressive "shape morphing" vocabulary; see `GOOGLE_DESIGN_REFERENCE.md`.) A small pause control sits next to the pill, matching the pause pattern from the hero video and the YouTube embed.

This pill is the first instance of what becomes a section-banner system. Earlier section themes were emphasized typographically; now they are emphasized as living UI elements. Three previously-noted levels of theme reinforcement (nav anchor + headline emphasis + body delivery) get a fourth: the animated banner pill itself, which both names the theme and communicates something about it (I am dynamic; I do multiple things). The pattern is confirmed at the Viewport 3 banner with the Yours pill, and previewed for Safe with the green pill peek.

#### The dual mockup composition

Below the banner sits a genuinely new compositional pattern for the page so far: a static side-by-side composition of a desktop browser mockup and a phone mockup, both showing the *same content* across two form factors. Both fully static — no animation in either mockup. The only motion in the whole viewport at this point is the icon rotation inside the banner pill above.

Several details worth naming:

- The phone mockup is desaturated and slightly darker than the desktop. Hierarchy through saturation. Desktop primary (full color), phone secondary (muted). The Gemini suggestion chips on the phone ("Summarize page," "Create FAQ about this topic," "What can Gemini do in Chrome?") pop forward from the desaturated phone background.

- The desktop mockup shows real product affordances. "Hello, Elisa Elisa" personalizes the demo (carrying over the user-name authenticity from the hero video's "elisa.g.beckett"). The browser tab labeled "Bakery creations" matches the page content shown — a vanilla cake recipe. The Gemini input shows "Type @ to ask about a tab" (real Gemini syntax for tab-referencing). The "Sharing 'Bakery creations'" indicator at the bottom is the real transparency UI ("Gemini sees your current tab"). The "Pro" badge on the input signals this is the Pro experience.

- The desktop browser frame itself shows realistic browser chrome: tab, address bar, profile bubble, Gemini panel docked to the right.

The pattern: real product UI rendered faithfully, in real positions, in real proportions. Not idealized. The composition tells the cross-device story without animation — the same content, both form factors, that is the entire visual argument.

#### The Gemini in Chrome subsection

Below the dual mockup, the subsection delivery: no eyebrow, headline "Gemini in Chrome: Your AI browsing assistant" (subsection scale, smaller than the section banner), body paragraph in the right column ("Gemini in Chrome helps you easily understand content on the web and get things done using the context of your open tabs and browsing history. Plus, with auto browse, Gemini in Chrome can do your tedious tasks for you* – from shopping and reservations, to research and more."), an asterisked disclaimer ("*Auto browse available only to Google AI Ultra and Pro subscribers in the U.S."), and a Chrome-blue link ("Explore Gemini in Chrome").

The link names its destination, matching the page-wide pattern.

#### The mid-section CTA bar

Below the Gemini in Chrome subsection sits a wide light-blue pill bar spanning most of the page width. Left side text: "Gemini in Chrome can do tasks for you with auto browse. Available to Google AI Pro and Ultra subscribers in the U.S." Right side: "Sign up now ↗" link. The pill has rounded corners but no shadow, and uses the same pale blue as the top-of-page announcement bar.

The promotional bar design language is consistent across the page. The top-of-page announcement bar and this mid-section CTA bar both use the same pale-blue pill treatment. The page is operating a small design system at the component level — same visual pattern means same role in the page's grammar (here, "this is an opportunity to learn more or sign up, not a primary feature").

#### Section transition out

Below the CTA bar sits a substantial gap of pure white — roughly 200 or more pixels — before the next section's banner begins. The gap is significantly larger than the breathing room used between subsections within the AI section. White space is how Chrome marks a major section boundary; not divider lines, not background changes, not decorative elements. The amount of white space encodes the level of structural change.

#### Pacing observed within this viewport

The AI section is two scrolls of content separated by white space, with two motion attractors of very different scales: the YouTube video (62 seconds, attention-locked) at the top, and the small banner pill animation (5.5 seconds, peripheral) at the bottom. Between them sits the dual mockup, which is fully static and asks the user to look rather than watch. The pacing is: watch the long thing, then read and look at the still thing, then notice the small motion at the bottom inviting the eye toward the next section. Energy goes high-then-low across the section. The user is given a reason to slow down halfway through.

---

### Viewport 3: Yours section

The full Yours section, occupying roughly three scrolled screens. Opens with a banner ("Make it `y o u r s` and take it with you") and the page's first scroll-linked animation — a landscape image growing and transforming into a Chrome theme, then re-transforming into a different Chrome theme. Continues into a three-up auto-cycling carousel of sub-features (Customize your Chrome, Browse across devices, Save time with autofill) with a section-level CTA pill below. Closes with a standalone Extend Your Experience subsection demonstrating Chrome Web Store extensions through a second use of scroll-linked motion.

#### Section entry and the build-up white space

The handoff from AI section to Yours section uses the same lack of overt decoration observed at the AI section entry, but with an unusually large gap. Substantial pure-white space — visually larger than any other section-to-section transition observed on the page — sits between the bottom of the AI section's CTA bar and the top of the Yours banner.

This is deliberate page-level pacing. The empty space lets the user accumulate scroll momentum before the section's signature move (the scroll-linked transformation) fires. It functions as the cinematic equivalent of cutting to black before a big reveal. The page is using white space not just to mark structural boundaries (as observed at the AI section transition) but as a pre-loading mechanic — a way to set expectations that something is about to happen.

#### The Yours banner pill

The section banner reads "Make it `y o u r s` and take it with you." The "yours" anchor word sits inside a colored pill — same mechanic as the AI pill from Viewport 2, but with section-specific styling.

The Yours pill has a red/coral background and contains a paintbrush icon. The icon does not cycle in the way the AI pill's icons did; a single static paintbrush sits inside the colored pill. The system is confirming itself as systematic across sections: each major section gets a banner pill with section-specific colors and a section-specific icon. The colors observed so far form a pattern:

- AI section: blue-purple pill, cycling multi-tool icon (pencil, copy, image).
- Yours section: red-coral pill, paintbrush icon (static).
- Safe section: green pill (icon not yet identified — observed only in passing while scrolling through).

Predictions for the remaining sections (Fast, By Google, Updates) are deferred until their banners are observed.

#### The scroll-linked landscape-to-theme transformation (NEW MOTION CATEGORY)

The first instance on the page of motion that is fully user-controlled. Everything in previous viewports was either locked motion (running independently of user input — hero video, YouTube embed) or static. The Yours section introduces a new motion category: scroll-linked, where the user's scroll becomes the playback control.

The transformation runs in five stages, all pinned to scroll position:

**Stage 1 — Landscape image arrives normally.** The banner headline with the red paintbrush pill is in place. Below it, a horizontal landscape photograph: Delicate Arch in Utah, blue sky, red rock formation. At this point the image looks like a regular content image, no animation.

**Stage 2 — The image grows.** As the user continues to scroll, the landscape progressively fills more of the viewport. True scale-up, not Ken Burns pan. The banner headline scrolls off the top normally; the image expands to take the whole frame.

**Stage 3 — The image transforms into a Chrome browser theme.** Around the midpoint of the scroll range, a Chrome browser frame fades in *over* the landscape — tabs at the top, address bar, the Google search box appearing in the center. The landscape now sits as the browser's background theme. The transformation says: this image was never just a photograph, it is your Chrome theme.

**Stage 4 — Theme switch.** The landscape Chrome dissolves into a *new* themed Chrome — a dark navy/purple cosmic background with a tiny astronaut floating among stars. Same browser frame, completely different mood. The theme switch is demonstrated through transformation rather than described in words. Show, don't tell, mechanized via scroll.

**Stage 5 — Section continues.** Once the transformation completes, the section is no longer pinned. Normal scroll resumes. The Customize subsection content begins.

The scroll mechanic itself is worth naming precisely. The section is pinned in place (probably `position: sticky` or an equivalent technique) while the user scrolls through a tall scroll range. The animation inside the pinned section progresses according to how far through that range the user has scrolled. The user keeps full scroll control — they can scrub forward and backward, pause anywhere, reverse the animation by scrolling back up. Once they exit the pinned range, the page resumes normal scroll. This is scroll-linked, not scroll-jacked. The user is never trapped or forced; the page is responsive to their input, not the other way around.

Same family of techniques Apple and Stripe use on product pages. Well-established but expensive to build well — the scroll math, the asset preloading, the across-browser consistency, and the graceful degradation are all real engineering.

#### Sticky nav active state migration

As the user enters the Yours section, the "AI" anchor in the sticky island loses its highlight and "Yours" gains it. The light-gray pill background that was on AI in Viewport 2 migrates to Yours here. The user is told exactly where they are on the page at all times, without an additional UI element — the existing nav does both navigation and orientation.

#### The three-up auto-cycling carousel

Below the scroll-linked transformation, the section's main feature delivery: a three-up rotating presentation with an asymmetric two-column layout. Left column: a large rounded-square tile with content that swaps. Right column: three category labels stacked vertically — Customize your Chrome, Browse across devices, Save time with autofill.

**Active state mechanics.** The active category gets three things the inactive ones don't:

- A vertical blue bar to the left of the title — the "blue progress line."
- An expanded body — a description paragraph below the title.
- Where applicable, a category-specific CTA link below the description.

Inactive categories collapse to bare title-only, no description, no line, no CTA. The contrast between expanded and collapsed does the heavy lifting of "you are here."

**The blue line is a continuous progress indicator.** The line is not static during the active period — it grows smoothly and continuously from top to bottom over the dwell time. When it reaches the bottom, the rotation snaps to the next category instantly: the previous category's expanded state collapses, the new category expands, and its blue line immediately begins filling from the top. The user always knows roughly how long until the next swap. Auto-rotating carousels without progress indicators feel unpredictable; this design respects the user by showing the rhythm.

**The three panels each have distinct motion personalities matched to their content.** The handover described these in less detail than what direct video observation reveals; what follows is the corrected and expanded account.

**Customize your Chrome — theme picker with cycling background.** The left panel does not just "cycle through theme colors" as a previous description suggested. What it actually shows is the Chrome theme-picker interface in use: a 3×3 grid of theme thumbnails inside a small card. As the demo runs, blue selection rings cycle through different thumbnails — each tile briefly highlighted as if being clicked. Simultaneously, the *background behind the picker* changes to show the theme that has just been selected. Backgrounds observed in rotation include the rock arch landscape (the same Delicate Arch from the scroll-linked transformation above — visual continuity within the section), a dark cosmic background with a tiny astronaut (also seen above in Stage 4), a yellow background, and others. The picker stays put; the wallpaper cycles. The demo *is* the feature being demonstrated, mechanized — what you would see if you yourself opened the theme picker and tried things.

The description copy reads "Personalize your web browser with themes, dark mode and other options built just for you." A category-specific CTA "Explore themes ↗" appears below the description.

**Browse across devices — static phone with multi-tab composition.** The left panel is fully static — no animation at all during the entire dwell. A yellow background. A rounded-rectangle phone outline. Inside the phone, browser tabs at the top of the screen (visible as small tab indicators), and below them a composed view that includes multiple types of browsing content at once: a Google Maps panel showing New York City with red pins, a Google search results pane titled "Museums list in New York City" with bulleted items (Metropolitan, MoMA, Frick Collection, 9/11 Memorial), and a YouTube card with a NYC skyline thumbnail. Four tabs visible in the top row.

The composition does real work without animation. It shows the *kind* of cross-device browsing the feature enables — research-in-progress, in multiple tabs, ported to phone — rather than abstracting the idea into a generic "sync" graphic. No motion is needed because the visual itself is the argument.

The description copy reads "Sign in to Chrome on any device to access your bookmarks, saved passwords, and more." No category-specific CTA appears below the description — Browse is the only one of the three without one. Probably because it is a passive feature (sign in once and it works) versus the other two which require active choice (pick a theme, save your details). Worth noting as a discipline point: the page did not force a fake CTA into all three for symmetry.

**Save time with autofill — animated form completion.** The left panel is the most animated of the three. A solid mint-green background. An address form appears with empty fields. A cursor moves into the frame — this cursor is part of the animation, not user-driven. The cursor selects suggestion items from a dropdown: "Elisa Work / 1600 Amphitheatre Parkway / Elisa Home / 19510 Jamboree Road / Manage Addresses..." Then the form auto-populates itself: "Elisa Beckett / Mountain View, CA 94043 / (650) 253-0000." The typing-then-fill pattern is the same one used in the YouTube AI Mode video earlier; the page is reusing motion vocabulary across sections.

The description copy reads "Use Chrome to save addresses, passwords, and more to quickly autofill your details."

**The section-level CTA pill.** Below all three category titles sits a persistent "Sign in to get started ↗" pill — light blue background, rounded pill shape, present regardless of which of the three categories is currently active. This is *not* the autofill panel's CTA (a previous summary had mis-attributed it as such). It is a section-level CTA that sits at the bottom of the right column, applying to the entire Yours experience rather than any one of its three subdivisions. The pill is functionally stagnant during the rotation — no fade, no change. The only animation on the pill is its hover state: when the cursor enters the pill, the background darkens slightly and the small arrow icon flicks up-and-to-the-right. Same minimalist hover discipline observed elsewhere on the page.

**The panel color system.** Each carousel panel has its own background color, operating the section's color hierarchy on a third level. The Yours section uses warm colors throughout — different in mood from the AI section's cooler blues and purples. The carousel reads as a small palette inside the Yours pill's red-coral parent color:

- Customize: cycling through theme colors (the demo is the colors).
- Browse: solid gold/yellow.
- Autofill: solid mint/pale green.

Three levels of color hierarchy nest cleanly: section banner pill (red-coral) → carousel panel backgrounds (warm family) → demo content (theme colors and form colors).

**Interaction behavior.** The carousel rotates continuously through the three categories without user input. Clicking on a collapsed category title stops auto-rotation and jumps to that one — the user takes the wheel. Hovering on a category does *not* pause rotation; the carousel keeps moving. Chrome made a deliberate choice here. Pause-on-hover is the polite default but can cause "stuck" carousels when users accidentally hover and forget. Pause-on-click is more decisive and harder to trigger unintentionally.

Clicking on the left panel (the demo tile itself) does nothing — the panel is a display, not a CTA. The CTAs live in the right-side text. Separation of concerns: the panel shows, the right column navigates and acts.

#### The Extend Your Experience subsection

A standalone subsection below the carousel — *not* a fourth tab in the carousel rotation. This is a real composition decision. The page put three closely-related "your Chrome data" features in the auto-cycling carousel (theme personalization, cross-device sync, autofill), then broke Extensions out as a separate moment with its own visual treatment. The structural separation matches the user-commitment level: extensions are something you actively add to your browser, with more behavioral consequence than picking a theme color or signing in once.

**Layout.** Asymmetric two-column. Left column: "Extend your experience" headline (subsection scale, smaller than section banners), one-sentence body paragraph ("From shopping and entertainment to productivity, find extensions to improve your experience in the Chrome Web Store."), an "Explore extensions" link with a small upward-right arrow. Right column: a Chrome browser window showing the Google homepage with the dark space/cosmic theme — the *same theme* that appeared in the Customize panel's cycling background and in the scroll-linked transformation's Stage 4 above.

The visual continuity is intentional. This is not a generic Chrome window; it is the same user's Chrome experience continuing into a new feature. The story being told across the entire Yours section is one user progressively customizing, syncing, autofilling, and now adding extensions to one continuous Chrome instance. The same Chrome window is being shown at different stages of personalization.

**Scroll-linked icon arrival (second use of the new motion category).** As the user scrolls into the Extend subsection, five colored circular icons swoop in one at a time, locked to scroll position. Each represents an extension category (Shopping, Entertainment, Tools, Art & Design, Accessibility per the surrounding copy). The icons settle into positions around the browser window — not inside it, but in the negative space adjacent to it.

Notable that the page uses scroll-linked motion *twice* in the same section, at very different scales. The opening landscape-to-theme transformation is a full-viewport-pinning, multi-stage cinematic moment. The Extend icon arrival is a small, peripheral, scroll-paced reveal. Different scales, same underlying mechanic. The pattern has more uses than a single signature application.

**Link hover behavior.** The "Explore extensions" link follows the same minimalist hover pattern observed elsewhere: cursor enters, the arrow icon flicks to point up-and-to-the-right, the link text darkens slightly. No additional animation.

#### Section transition out

The Yours section closes into substantial pure-white space before the next section's banner ("Stay `s a f e` while you browse" with a green pill) begins. Same major-section-boundary spacing observed at the AI-to-Yours transition.

#### Pacing observed within this viewport

The Yours section has the most varied motion vocabulary of any section observed so far. Within roughly three scrolled screens, the user encounters: a static banner with a colored pill, a fully scroll-linked multi-stage transformation that the user controls, a three-up auto-cycling carousel with continuous progress feedback (one panel of which is itself animated, one of which is fully static, one of which is conditionally animated by cursor), a section-level CTA with hover-only feedback, and a second scroll-linked sub-animation for the closing subsection.

The section's energy is high-then-medium-then-low. The opening transformation is the dramatic peak. The carousel that follows is steady-state engagement. The Extend subsection is a smaller-scale closer that does not try to outdo what came before. The page knows when to stop pushing motion.

---

### Viewport 4: Safe section

The full Safe section, occupying roughly two scrolled screens. Opens with the centered banner ("Stay `s a f e` while you browse") containing the section's first pill of the light-blue family. Body of the section is a 2×2 grid of four flippable cards, each presenting one Chrome safety sub-feature: Password Manager (top-left), Safety Check (top-right), Enhanced Safe Browsing (bottom-left), Privacy Guide (bottom-right). This viewport introduces the page's first reusable card-flip component, which is later reused in the By Google section.

#### Section entry and banner

The Yours-to-Safe handoff uses the same major-section-boundary white space established earlier on the page. Substantial pure-white gap precedes the centered banner.

The Safe banner reads "Stay `safe` while you browse." Layout matches the Yours title: three text components ("Stay" before pill, the pill containing only the section theme, "while you browse" trailing on the next line below the pill). Multi-line break is deliberate — the pill anchors the visual center.

Banner pill: light blue/pale-blue background, green Chrome-shield icon (the same Safe Browsing G-shield used in the hero video's Act 4 — a fourth instance of cross-section iconography reuse), Chrome-blue "safe" text. The pill is fully static — no entrance animation, no cycling icons.

The pill is the third instance of the section-banner-pill system and confirms a finding that emerged across the AI, Yours, and Safe banners: **each section has its own colored pill background and section-specific icon.** The system is not "uniform pill, varying icon" — it is "uniform pill *shape*, varying color and icon together." Six confirmed data points by the end of Page 1 (see cross-page synthesis at the foot of this page).

#### The 2×2 card grid

Four cards arranged in a two-by-two grid, each card occupying roughly half the width of the section. Each card has a deliberately distinct visual treatment, and the four treatments alternate diagonally:

- **Password Manager** (top-left): solid deep blue background, white text, visual-heavy front face including a UI demonstration.
- **Safety Check** (top-right): light lavender/pale-blue background, dark text, headline-only front face.
- **Enhanced Safe Browsing** (bottom-left): **white background** with a thin Chrome-blue top-edge accent line, dark text, headline-only front face. The only white card on the page so far.
- **Privacy Guide** (bottom-right): solid deep blue background, white text, visual-heavy front face featuring a large G-shield logo.

The visual-heavy cards (PM and PG) sit on one diagonal; the text-only cards (SC and ESB) sit on the other. This is deliberate rhythm — the grid never asks the user's eye to read two text-heavy cards or two visual-heavy cards side by side. Sweep down-right diagonally and the visual weight alternates.

#### The card flip mechanic

Every card in the grid is flippable. Each one has a front face and a back face; clicking the front (or its bottom-right blue "+" button) flips to the back, and clicking the back (anywhere except the back's body link) flips back to the front. The mechanic is implemented as a **vertical content swap with consistent directional motion**, not as a 3D card-flip rotation.

Forward flip (front → back): every element on the card moves up. Front-face content rises and dissolves out the top. Back-face content rises up from below and fades in as it arrives at its resting position. Directionality is uniform across all elements of the card, but timing is slightly staggered per element (headline arrives one beat before body, body one beat before link, etc.) so the swap reads as motion-with-personality rather than a single rigid block sliding.

Return flip (back → front): every element on the card moves down. Back content sinks and dissolves. Front content descends from above and fades in. Same stagger applied in reverse.

The "+" button on the front becomes an "×" close-arrow on the back, in the same blue-circle component in the same bottom-right position. The icon change communicates "this is now the way out" without text.

#### Hover behavior on the cards

The whole card responds to hover, but the specific affordances that bulge are different per card:

- **Password Manager**: the "+" button in the bottom-right bulges slightly. The embedded "Use Saved Password?" tooltip element on the front face also bulges — a second hover target on the same card, signaling that the demo itself is interactive in concept.
- **Safety Check**: only the "+" button bulges. The card is otherwise non-interactive.
- **Enhanced Safe Browsing**: the "+" button bulges, and additionally the card's outline strengthens slightly. The white background is the reason — a stronger border can register visibly only on the white card. The other three colored cards rely on the colored background itself to communicate boundary.
- **Privacy Guide**: the "+" button bulges, and the large G-shield visual on the front face also bulges.

Hover discipline is consistent across the page: subtle scale-up bulge on focus targets, small arrow flick on linked text, no breathing animations on dormant elements.

#### Front-face content per card

- **Password Manager**: eyebrow "PASSWORD MANAGER" + headline "Use strong passwords on every site." + UI demonstration showing an "elisa.g.beckett" username field, a masked password field with eye-toggle icon, and the actual Chrome "Use Saved Password?" tooltip with the rainbow Google key icon and dots. The "elisa.g.beckett" persona is the same one from the hero video's Act 4 saved-password demo, and the same Elisa Elisa from the AI section's dual mockup ("Hello, Elisa Elisa"). Third appearance of the persona on Page 1.

- **Safety Check**: eyebrow "SAFETY CHECK" + headline "Check your safety level in real time with just one click." No demo on front face; just text.

- **Enhanced Safe Browsing**: eyebrow "ENHANCED SAFE BROWSING" + headline "Browse with the confidence that you're staying safer online." No demo on front face. Thin blue line along the top edge.

- **Privacy Guide**: eyebrow "PRIVACY GUIDE" + headline "Keep your privacy under your control with easy-to-use settings." + a large G-shield logo (the Google shield mark in lighter blue against the dark blue card background) occupying the lower half of the card.

#### Back-face content per card

Every back face follows a common pattern: a small real-product-UI demonstration at top, descriptive body text below the demonstration, a "Learn more about X" link in Chrome blue, and the "×" close button in the bottom-right. The product UI shown on the back is always real Chrome shipping interface, not stylized — the page's fourth major instance of the "real UI, faithfully rendered" pattern.

- **Password Manager back**: the actual Chrome "Save password?" browser prompt with the saved-credentials list, body text explaining Chrome Password Manager, "Learn more about Password Manager ↗" link.

- **Safety Check back**: the actual Chrome Safety Check panel UI (header bar with the Safety Check title and items list including Passwords, Updates, Browsing, etc.), body text explaining "Chrome Safety Check confirms the overall security and privacy of your browsing experience, including your saved passwords, extensions, and settings. If something needs attention, Chrome will help you fix it.", "Learn more about Safety in Chrome ↗" link.

- **Enhanced Safe Browsing back**: the actual Chrome red malware warning page ("The site ahead contains malware" warning with the standard Chrome warning chrome), body text "Chrome's Safe Browsing warns you about malware or phishing attacks. Turn on Enhanced Safe Browsing for even more safety protections.", "Learn more about Safe Browsing ↗" link.

- **Privacy Guide back**: the actual Chrome "Take the Privacy Guide" opt-in card with "Get started" and "No, thanks" buttons, body text explaining the Privacy Guide tour, "Learn more about intuitive safety controls ↗" link.

The "Learn more about X" link on each back face leads to a separate destination page (Mark confirmed this by clicking through Password Manager during observation — destination was a "Simpler, safer passwords / Google Password Manager securely saves your passwords and helps you sign in faster" landing page). Each link is destination-named, matching the page-wide pattern (no generic "Learn more").

#### Voice patterns specific to this section

The Safe section's voice is *quieter* than the AI and Yours sections. Body text on each back face is roughly two or three sentences. No exclamation points. No words like "powerful," "amazing," "incredible." The voice is reassuring rather than enthusiastic, which matches the section's content — safety is communicated through stability, not through energy.

The verbs lead pattern from earlier viewports holds: "Use strong passwords," "Check your safety level," "Browse with the confidence," "Keep your privacy under your control." Every headline is something the user does or experiences, never a property of the product.

#### Pacing observed within this viewport

Safe is the *calmest* section on the page so far in terms of motion. After the dense motion of AI (perpetual cycling pill, locked YouTube video, dual mockup, banner pill cycling) and Yours (scroll-linked transformation, auto-cycling carousel, scroll-linked icon arrival), Safe steps down to: a static banner pill, four cards with no autoplay animation, and motion only on user interaction (the flip). The page is using motion sparingly here, deliberately — safety is a topic where stability and calm are part of the argument.

---

### Viewport 5: Fast section

The full Fast section, occupying roughly two scrolled screens. Opens with the centered banner ("The `f a s t` way to do things online") containing a green pill with a one-time entrance animation — the first instance on the page of *viewport-triggered locked animation*, a motion category distinct from anything in Viewports 1 through 4. The section then stacks three different motion mechanics in a single pinned scroll range: a viewport-triggered locked sequence of UI events, a scroll-linked shrinking transform that creates a "box-within-box" optical effect, and a horizontal manual-only carousel of three sub-feature cards. This is the most complex motion choreography on Page 1.

#### Section entry and banner

Standard major-section-boundary white-space precedes the centered banner.

The Fast banner reads "The `fast` way to do things online." Same multi-line title pattern as Yours and Safe — three text components with the pill containing only the section theme.

Banner pill: medium-light green/mint background, darker green/teal "fast" text, green speedometer icon. Unlike the AI pill (perpetual cycling) and the Yours and Safe pills (static), the Fast pill has a **one-time entrance animation** that fires when the user scrolls the title into view and does not loop. Reload is required to play it again.

The entrance animation:

1. Pill appears.
2. Letters of "fast" cascade in, overshoot their final positions slightly, then bounce back to rest.
3. Simultaneously, the speedometer icon draws itself in arc-style — the bottom curve of the dial appears first, then progressively the full dial materializes, with a subtle bounce as it settles.
4. Pill is now in its final state for the rest of the user's time on the page.

A small pause control sits next to the pill, matching the pause component used on the hero video, the YouTube embed, and the Browsing-boosted AI banner pill.

This is the page's first *viewport-triggered locked* animation. It is distinct from:

- *Perpetual locked* motion (hero video, YouTube embed, AI banner pill cycling) — runs continuously without user input.
- *Scroll-linked* motion (Yours landscape transformation, Extend icon arrival/dissolve) — user's scroll is the playback control, fully scrubbable.
- *Static* (Yours pill, Safe pill, dual mockup) — no motion at all.
- *Viewport-triggered locked* (Fast pill) — fires once on entry, then static; needs page reload to replay.

The page now operates four motion categories on a single page.

#### The central demonstration on viewport entry

Below the banner, a large Chrome browser window occupies most of the viewport width. Inside the browser, a viewport-triggered locked animation sequence runs once when the user scrolls into the section — independent of further scrolling input, on a fixed timeline.

The sequence (frame analysis): a custom-themed Chrome new-tab page appears (the Chrome wallpaper is a colorful botanical artwork — stylized blue, green, red, orange, and pink plants on a pink-coral background, with a large white "Google" wordmark and the search bar in the center). Many tab thumbnails open across the top of the browser in rapid succession, suggesting "many tabs at once." A Google Slides presentation ("docs.google.com/presentation/") then appears as the foreground content, showing a green slide titled "Our big idea." The actual Chrome "Energy Saver is on" notification popup ("Background activity and some visual effects, like smooth scrolling, may be limited" with "Turn Off Now" / "OK" buttons) overlays the right side of the browser. Memory Saver indicators surface. The whole sequence is roughly the length of the section's other motion elements and runs once per page-load.

#### The "box-within-box" scroll-linked transform

As the user continues scrolling, a scroll-linked transform begins. This is the most distinctive single visual effect on Page 1.

A new outer card crystallizes *around* the existing browser content. The outer card carries the first sub-feature's identity — eyebrow + headline ("Prioritize performance") + body text ("Chrome is built for performance. Optimize your experience with features like Energy Saver and Memory Saver.") + a "Learn more about Memory and Energy Saver ↗" link. While this outer card is forming, the inner browser content begins shrinking — but at a *faster rate* than the outer card's boundary contracts. The result is two nested boundaries visibly converging at different rates: the outer card forming around the content, the original browser compressing inward.

By the end of the scroll range, the original full-size browser has compressed into the demo *inside* the new Prioritize performance card. The transformation is the inverse of the Yours section's landscape-to-theme transformation (where one image grew and became a theme); here, a large central demo shrinks and becomes one card in a carousel.

The mechanic is technically a layered scroll-driven transform with different rates assigned per element. Visually, it reads as the page's most cinematic single moment — a moment that could be a Lux Tours signature if the equivalent technique were applied to a feature reveal.

#### The horizontal manual carousel

Once the shrink completes, the user is presented with the section's three sub-feature cards in a horizontal arrangement. One card is centered/active, and the next card peeks roughly 25% of its width from the right edge of the viewport. There are no visible arrow buttons and no pagination dots — the peek itself is the entire navigation affordance.

The carousel is **manual-only**. Unlike the Yours three-up carousel (which auto-rotated with a continuous blue progress line and gave the user pause-by-click), this carousel does not auto-advance. The user must click to move forward or back. Mark confirmed this behavior directly.

Side-by-side comparison of the two carousels on Page 1:

- *Yours carousel*: vertical category list on right + single cycling demo panel on left; auto-rotates with progress indicator; pause-by-click; hover does not pause.
- *Fast carousel*: horizontal cards left-to-right; one centered with next card peeking; manual click navigation only; no auto-rotation.

Different mechanics for different content. The page is willing to operate two distinct carousel patterns within itself rather than forcing one to fit both contexts.

#### Content of the three Fast cards

- **Prioritize performance** (white card, leftmost): "Chrome is built for performance. Optimize your experience with features like Energy Saver and Memory Saver." Demo is the now-compressed central browser from the section entry: docs.google.com/presentation URL, "Our big idea" green slide, "Energy Saver is on" notification popup with "Turn Off Now" / "OK" buttons. Link: "Learn more about Memory and Energy Saver ↗"

- **Stay on top of tabs** (yellow card, middle): headline "Stay on top of tabs." Demo shows the actual Chrome tab-grouping feature with colored tab chips labeled "Personal" (red), "Trip to Arches" (orange), "Work" (teal), "New Tab," followed by a browser address bar. The "Trip to Arches" label is a small narrative callback to the Delicate Arch landscape from the Yours section's scroll-linked transformation — fifth example of cross-section narrative continuity.

- **Optimize for your device** (green card, rightmost): cross-device demo with a browser window and a phone showing a QR code (consistent visual language with the persistent corner QR code).

#### Real product UI throughout

Every interface element shown in this section is the real Chrome shipping interface, not stylized: the Energy Saver notification, the Memory Saver feature, the tab-grouping feature with colored chips, the docs.google.com/presentation URL bar, the QR code aesthetic. Fourth major instance of the "real UI, faithfully rendered" pattern on Page 1.

#### Pacing observed within this viewport

Fast is the *peak motion density* on Page 1. Three motion categories operating simultaneously in a single pinned scroll range. The section then resolves into the horizontal carousel, which is intentionally calm (no auto-rotation, no animation on the cards themselves) to give the user a place to rest after the dense entry animation. The dramatic peak is the box-within-box shrink; everything after that decelerates.

---

### Viewport 6: By Google section

The full By Google section, occupying roughly two scrolled screens. Opens with the centered banner ("The browser `b u i l t` by Google") containing a pale-cream pill with a second one-time entrance animation (the page's second instance of viewport-triggered locked motion). The body of the section is split: the top viewport delivers Google Search via a "color-card-with-enclosed-demo" pattern (echoing several earlier subsections), and the bottom viewport delivers Google Pay and Google Lens via two flippable cards reusing the component first introduced in the Safe section.

#### Section entry and banner

Standard major-section-boundary white-space precedes the centered banner.

The By Google banner reads "The browser `built` by Google." Same multi-line title format as Yours, Safe, and Fast.

Banner pill: pale yellow/cream background, rust-orange crossed hammer-and-wrench icon, rust-orange "built" text.

The pill animation is the page's *second* viewport-triggered locked entrance and uses a different choreography from Fast's:

1. Pill appears empty.
2. Letters of "built" cascade in one-by-one (the "centipede flow" — each letter arriving in sequence with a small stagger).
3. A single tool (wrench-shape, rendered diagonal) rotates into the icon slot.
4. The hammer joins and crosses over the wrench, the two tools cross-fading into their final crossed-X arrangement.
5. Settled.

The page is using different one-time-entrance choreographies for different sections. Fast had letters-bounce-overshoot plus a speedometer drawing itself in arc-style. By Google has letters-cascade plus a tool-cross-fade. The fact that the page bothered to differentiate these animations rather than reusing one is itself evidence of intentional craft.

#### Top viewport: Google Search subsection

A wide yellow card spans most of the section width. The card contains:

- Eyebrow "GOOGLE SEARCH" (small all-caps).
- Subsection headline on the left column: "The search bar you love, built right in."
- Body text on the right column: "Access a world of knowledge at your fingertips. Check the weather, solve math equations, and get instant search results, all contained inside your browser's address bar."
- An animated Chrome browser embedded in the card showing the address bar typing through three queries on a loop:
  1. "good morning in french" → autocomplete dropdown shows the actual Google Translate result inline ("Bonjour (French)") with the Translate icon, plus follow-up suggestions for pronunciation and translation.
  2. A currency conversion query ("300 USD to Euro" or similar) → conversion result inline.
  3. A weather query ("Weather in Paris") → weather widget inline.
- A "Pause animation" pill button in the bottom-right of the yellow card, matching the pause component used elsewhere on the page.

The demonstration's argument: Chrome's omnibox is an answer machine. Translation, currency conversion, weather, math — they resolve inline in the address bar without a separate page load. The animation never narrates this; it demonstrates it. Real Chrome behavior, faithfully rendered.

This is the page's *color-card-with-enclosed-demo* pattern, which has appeared earlier in subtler forms (the AI section's dual mockup is a similar but static variant). Here the pattern is fully expressed: a colored card frames the subsection content and contains a real, looping animation of the feature in use.

#### Bottom viewport: Google Pay and Google Lens cards

Two cards side by side, both flippable. The component is reused from the Safe section's 2×2 grid, scaled to two cards instead of four. Same blue "+" button bottom-right that becomes an "×" close-arrow on the back face. Same up-then-down vertical content swap with staggered timing. Same pattern of "real UI demo on front, descriptive body text and Learn-more link on back."

**Google Pay** (left, saturated yellow background): the front face shows a Google Wallet card list with three saved payment methods rendered as "•••• 1234," "•••• 4567," "•••• 7890" plus a "Manage payment methods..." link and the "G Pay" wordmark. The back face shows body text — "Google Pay makes it easy to pay online. When you securely store your payment info in your Google Account, you can stop typing your credit card and check out faster." — and a "Learn more about Google Pay ↗" link.

**Google Lens** (right, pale cream background): the front face shows a high-resolution photograph of a pink Red Ginger flower with Google Lens viewfinder corner brackets overlaid on the subject and a small floating result card identifying "Red Ginger / Plant" with similar plant thumbnails. The back face shows body text and a Lens learn-more link.

The Lens demo continues a cross-section thread: in the hero video's Act 3, Lens identifies a Euphorbia Ingens cactus; here in By Google, Lens identifies a Red Ginger flower. Same feature, different plant, consistent theme — Lens demonstrations on Page 1 are always about plant identification. Sixth example of cross-section narrative continuity.

The two-card scale demonstrates that the flippable-card component is *truly reusable*. Safe used four cards in a 2×2; By Google uses two in a single row; the underlying component is the same. The page operates a small design system at the component level.

#### Voice patterns specific to this section

Body text on the cards is short — two to three sentences. Same calm voice established in Safe. "Built by Google" is the section's argument; the text doesn't push the user with claims about why that matters. The demonstrations carry the argument.

#### Pacing observed within this viewport

By Google sits between the high-density Fast section and the simple Updates section. Energy steps down from Fast's box-within-box drama but stays above Updates' static-card simplicity. The animated Google Search demo provides one motion attractor at the top of the section; the two flippable cards below are interaction-on-demand rather than autoplay. The user reads this section at their own pace.

---

### Viewport 7: Updates section

The Updates section, occupying roughly one scrolled screen. Opens with the centered banner ("Discover the latest `u p d a t e s` from Chrome") containing a light-blue pill with the page's third viewport-triggered entrance animation. Body is two non-flippable cards side by side. This is structurally the simplest of the six themed sections — by design.

#### Section entry and banner

Standard section-boundary white-space precedes the centered banner.

The Updates banner reads "Discover the latest `updates` from Chrome." Same multi-line title pattern as the four preceding sections.

Banner pill: light blue/lavender background, blue circular-arrow (refresh) icon, Chrome-blue "updates" text.

The pill animation is the page's *third* viewport-triggered locked entrance, with yet another distinct choreography:

1. Pill appears with "updates" text faint.
2. "updates" letters resolve to their final position with subtle stagger.
3. The refresh-circle icon draws itself in arc-style — partial arc first, then the full circular arrow materializes.
4. Settled.

The page is now confirmed to have three distinct viewport-triggered entrance animations across Fast, By Google, and Updates. The Fast animation drew a speedometer with letters that bounced past their final position. By Google cascaded letters and cross-faded two tools. Updates draws a refresh arrow with subtler letter motion. Three pills, three different choreographies, no reuse.

#### The two cards

Below the banner, two cards side by side. Both are static — neither flips, neither auto-animates. The component is a simpler variant of the flippable cards from Safe and By Google: same structural layout (eyebrow + headline + body text + link + optional visual), but without the blue "+" button in the bottom-right and without the flip mechanic.

**Automatic updates** (left, pale blue-gray background): eyebrow "UPDATES" + headline "Automatic updates" + body text ("There's a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.") + "Learn about automatic updates" link (Chrome-blue plain text). Below the link, a visual demonstration showing a Chrome browser toolbar fragment with the favorites star, a small blue update indicator dot, and the actual Chrome "New Chrome available" update notification pill with kebab menu — real Chrome shipping UI. The background of the demo fragment shows a colorful botanical Chrome theme — the *same* botanical theme that served as the central browser's wallpaper in the Fast section. Sixth instance of cross-section visual continuity.

**New from Chrome** (right, pale cream background): eyebrow "LATEST" + headline "New from Chrome" + body text ("Chrome regularly updates with tools and features that make it faster and easier to use.") + "Learn what's new on Chrome" link. Demo shows a large full-color Chrome logo positioned in the bottom-right of the card. On section entry, the Chrome logo *rolls left-to-right* across the card, once, to its final position. This is the only motion in the section beyond the banner pill entrance.

#### Why this section is intentionally simple

After five sections of dense and varied motion (perpetual cycling, scroll-linked transformations, flippable cards, viewport-triggered animations, box-within-box scroll transforms, auto-rotating carousels), Updates steps down. Two cards. No flip. Plain text links. One small entrance animation per side.

The simplicity reads as discipline: by Page 1's end, the user has been given a great deal of visual information. The page is willing to release the user with calm rather than push another spectacle. This is the rhetorical close before the FAQ wrap-up.

#### Voice patterns specific to this section

Sparse. The body text is exactly the length needed and not one sentence longer. The argument is "Chrome stays current, both automatically and visibly" — and the section delivers it in two cards plus two links.

---

### Viewport 8: FAQ

A simple accordion-format section with six expandable questions, sitting between the Updates section and the final CTA. Roughly one half-viewport in height when collapsed.

#### Layout

A centered "Frequently asked questions" title at section-banner scale. Below it, six rows separated by thin horizontal dividers. Each row contains a Chrome-blue question on the left and a "+" plus button on the right. Click the row to expand its answer; click again to collapse.

#### The six questions

1. How do I make Chrome my default web browser?
2. How can I customize Chrome?
3. What are Chrome's safety settings?
4. What is Chrome's password manager?
5. How do I add a browser extension to Chrome?
6. How do I update Chrome?

#### The pattern: FAQ as argument-restatement

The questions track the page's section order. Question 1 covers initial install — the general entry. Question 2 reframes the Yours section as a user question. Question 3 reframes the Safe section. Question 4 reframes the Password Manager sub-feature inside Safe. Question 5 reframes the Extend Your Experience subsection inside Yours. Question 6 reframes the Updates section.

The FAQ is not generic Q&A. It is the page's own argument restated in the user's voice — the "how do I" inverse of what each section just demonstrated. The user who read the page asks the same questions in the order the page is structured to answer them. The FAQ confirms the page's claim that it has covered what matters.

#### Voice patterns

Each question is short and natural-language — the way a real user types into a search bar, not the way a marketing department writes copy. "How do I make Chrome my default web browser?" rather than "Setting Chrome as your default browser." The user's voice all the way through.

---

### Viewport 9: Final CTA and footer

The closing of Page 1, occupying roughly one full scrolled viewport. A blue final-CTA card, then social-follow icons, then a five-column footer, then a Google bottom strip.

#### The final CTA

A wide Chrome-blue rectangular card spans most of the section width. Inside:

- Headline "Take your browser with you" in white at section-headline scale.
- Body text "Download Chrome on your mobile device or tablet and sign into your..." (trails into the second line of the card).
- The **second occurrence of the primary Download Chrome button** on the page. The first occurrence was in the hero (Viewport 1). The button is structurally identical: pill-shaped, white background with the Chrome-blue download arrow and "Download Chrome" text. Repetition is the entire point — the page opened with the offer and closes with the same offer, framed by everything in between.
- The persistent QR code (the same "Get Chrome for your phone" QR that has tracked with the user as a corner element since Viewport 1) appears integrated into the final CTA card itself. The corner element and the in-card element are visually identical components — same QR pattern, same Chrome-logo inset, same "Get Chrome for your phone" caption. The page reuses the component rather than creating a separate one.

#### The sticky island nav persists to the end

In the final CTA frame, the sticky island nav with the seven anchors (AI · Yours · Safe · Fast · By Google · Updates · Download) is still visible. It does not fade out at the bottom of the page. Throughout Page 1, the island anchor is the only consistently-present navigation; even at the very end the user has one-click access to any section or to the Download CTA. The Download anchor in the island pill and the in-card Download Chrome button do the same job — multiple paths to the same conversion target.

#### "Follow us" row

Below the final CTA, a small row with the label "Follow us" on the left and five social-network icons in a horizontal line: YouTube, X, Facebook, LinkedIn, TikTok. Icons only, no labels. Minimalist treatment consistent with the rest of the page.

#### The five-column footer

A horizontal-rule divider precedes the footer block. Five columns, each with a bolded category header at the top:

- **Chrome Family**: Other Platforms, Chromebooks, Chromecast, Chrome Web Store.
- **Enterprise**: Download Chrome Browser, Chrome Browser for Enterprise, Chrome Devices, ChromeOS, Google Cloud, Google Workspace.
- **Education**: Google for Education, Devices for schools.
- **Dev and Partners**: Chromium, ChromeOS, Chrome Web Store, Chrome Experiments, Chrome Beta, Chrome Dev, Chrome Canary.
- **Support**: Chrome Help, What's New, Update Chrome, Chrome Tips, Google Chrome Blog.

Roughly 30 links total. External-link arrow icons (↗) on links that leave the chrome.com domain. The footer is structurally dense in deliberate contrast to the page above it (which used aggressive whitespace and minimal navigation throughout). The page makes room for everything Google organizationally needs to surface, but only at the very end, after the marketing flow has resolved.

#### The Google bottom strip

A second horizontal-rule divider precedes the bottom strip. Standard Google footer:

- Google logo on the left.
- Privacy and Terms link.
- About Google link.
- Google Products link.
- Help link (with question-mark icon).
- Language switcher on the right ("English – United States" with a dropdown chevron).

#### Pacing observed within this viewport

The final viewport is a deliberate de-escalation. Bright CTA-blue card → social icons → dense functional footer → Google standard strip. The page is wrapping itself in increasingly utilitarian layers as it closes. The user is being released from the experience rather than pushed for a final conversion.

---

### Page 1 — Preliminary implications (appendix)

These are not observations. They are noted here so they are not lost while observation continues, but they belong to the rubric and design work that follows. Marked as appendix to keep the observation sections pure.

The five-act structure in 27 seconds is something a Lux hero video could borrow directly. Five Tours (Pronunciation, Conversations, Coach, Voice, Progress); one hero video; five micro-acts; each one a brand-icon-to-result narrative. Structural mirror to what Chrome does. Would unify the Landing page in a way it does not currently.

The "logo opens its eye to show you a person" move could transfer. The Lux brand mark could open to reveal someone speaking, then reveal the phoneme score, then dissolve to the next scene.

The discipline of "one thing moves at a time" is the opposite of where the Tours currently sit. Landing has several breathing animations, hover effects, and motion cues distributed across the page. Chrome concentrates 100% of motion into one 27-second loop and lets the rest be still. Worth surfacing on the rubric.

The page-load choreography (headline gray-to-black → button → legal → logo arrives last) is something Landing could adopt without restructuring. Almost free, signals craft.

The typography ratio (headline 5–6× larger than body) is bolder than Lux currently goes. Worth measuring on the rubric.

The "decorative letter treatment + matching sticky nav anchor" system is reusable. If Lux Landing has six sections, six one-word anchors could drive both a sticky nav and the in-section typographic emphasis. The pattern's evolution into animated banner pills (observed in Viewport 2 onward) is a further upgrade — Tours sections could have colored pills with section-specific animated icons.

The auto-cycling carousel with a continuous blue progress line is directly applicable to the Landing page's five-Tours overview. Each Tour as a category, a working preview in the demo panel, a smoothly-growing progress indicator tied to a known dwell time, click-to-override. The "demo is the feature" idea from Customize is especially exciting for the Pronunciation Tour preview — the panel could show real phoneme scoring happening in miniature rather than describing what scoring is.

The scroll-linked motion technique could anchor any Tour feature that benefits from user-controlled pacing — the pronunciation scoring breakdown unfolding stage by stage as the user scrolls; the voice cloning concept building up over a pinned scroll range; the prosody scoring layer assembling itself piece by piece. The Yours section demonstrates the technique works at both large and small scales (the opening transformation versus the Extend icon arrival), so it is reusable across Tour types.

The section-level CTA pill pattern (Sign in to get started, persistent below a multi-feature subsection) is a clean way to handle the "this whole section ultimately wants you to sign in / start / try" goal without forcing a sign-in CTA into every individual sub-feature. A Landing page CTA could sit below the five-Tours carousel as a single persistent pill.

The white space as section delimiter is something Landing could adopt easily. No new graphic assets needed; the page just needs to allow itself larger gaps between major sections than between subsections within them.

The catalog of absences should be its own column in the rubric — for every Tours page, what is NOT there that does not need to be.

The flippable-card component observed in the Safe section and reused in By Google is directly applicable to Lux. Each Tour could have a small grid of feature cards on its detail page, each card with a marketing front (eyebrow + headline + supporting visual) and a "show me how" back (real Lux UI screenshot + body text + Learn-more link). The vertical content-swap mechanic with staggered timing is achievable in pure CSS/JS and would let Tour pages cover more sub-features without forcing the user to scroll through them all unfolded. The cards' content-swap directionality (forward flip = everything moves up; return flip = everything moves down) is worth keeping intact — it is more legible than a 3D card-flip.

The four-pill section-banner color system at six confirmed data points (AI blue-purple gradient, Yours pink/coral, Safe light blue + green icon, Fast green + speedometer, By Google pale cream + rust tools, Updates light blue + refresh circle) demonstrates that one component reused with section-specific colors and icons is more visually disciplined than custom-designing each section's identity from scratch. Lux Tours should establish one banner-pill component and apply per-Tour color and icon variants, not per-Tour design treatments.

The five distinct pill motion personalities (perpetual cycling on AI, static on Yours and Safe, three distinct one-time entrance animations on Fast, By Google, and Updates) demonstrate that motion can be *distributed unevenly* across a page. Not every section needs to move. Lux Tours could have one or two sections with rich motion (the hero loop, perhaps Pronunciation), while other sections stay calm. The contrast is part of what makes the rich motion feel earned.

The viewport-triggered locked animation category (Fast pill, By Google pill, Updates pill — and the larger Fast section's UI sequence) is a useful motion type to add to Lux Tours' vocabulary. Fires once per page load, then static. Better than perpetual motion in many contexts because it gives the user a discrete "thing to notice" without continuing to demand attention forever.

The box-within-box scroll-linked transform from the Fast section is the single most cinematic effect on Page 1 and is a candidate for a signature Lux Tours moment. The mechanic — a large central demo shrinks while a new outer card crystallizes around it at a different rate — could be adapted to a feature like the pronunciation scoring breakdown, where the full-size phoneme analysis shrinks into a card position while the surrounding explanation forms around it.

The horizontal manual carousel in Fast (no auto-rotation, peek-ahead as the only navigation affordance) is a different and sometimes better solution than the auto-rotating Yours carousel. Auto-rotation works when the content is small and the dwell time matters less; manual works when each item deserves the user's full attention. Lux Tours could use both patterns in different contexts.

The "real product UI, not stylized" pattern is enforced across every section of Page 1 (hero video tooltips, AI Mode interface, dual mockup, Yours theme picker, Safe back-of-card panels, By Google Pay/Lens demos, Updates notification). This is the strongest single discipline of the page and the one most directly applicable to Lux. Tours should show the real Lux app interface, in its real positions and proportions, not idealized abstractions of features.

The cross-section narrative continuity at six identified threads (Elisa persona across hero/AI/Safe; the Delicate Arch landscape across Yours/Fast; the cosmic Chrome theme across Yours scroll-linked stage/Yours Customize panel/Yours Extend subsection; Lens-identifies-plant from hero to By Google; the botanical Chrome theme across Fast and Updates; the persistent QR code component from hero through final CTA) demonstrates a small but persistent universe-building discipline. Lux Tours could thread one or two similar continuity elements across its pages — a recurring user persona, a recurring scenario, a recurring visual theme — to make the Tours feel like one coherent product rather than five isolated landing pages.

The FAQ-as-argument-restatement pattern (where the six questions track the six section themes in order) is a clean way to close the Tours' landing page. Six Lux Tours equal six FAQs, each restating one Tour's value as a "how do I" user question.

The repeat-the-hero-CTA-at-the-bottom pattern (the second Download Chrome button identical to the first, framing the page) is a clear template for the Tours' Landing page bottom CTA.

The persistent sticky island nav that does not fade out at the bottom of the page is a small but powerful detail. Even at the end of a long page, the user has one-click access back to any section or to the conversion target. Worth replicating on Lux Tours.

---

## Page 2 — google.com/chrome/ai-innovations/

*[Pending.]*

Structurally the closest reference to what the Tours need to do. Prioritize this page next after Page 1 is fully observed.

---

## Page 3 — google.com/chrome/safety/

*[Pending.]*

---

## Page 4 — google.com/chrome/browser-tools/

*[Pending.]*

---

## Page 5 — google.com/chrome/mobile/

*[Pending.]*

---

## Page 6 — chromewebstore.google.com/category/extensions

*[Pending.]*

---

## Cross-page patterns

*[Cross-page synthesis pending — to be written after Pages 2 through 6 are observed.]*

This section will name the techniques that appear consistently across multiple Chrome pages, distinguishing them from techniques that are page-specific. Cross-page patterns are the strongest candidates for rubric criteria, since their repetition across an established design system is evidence that Google considers them load-bearing.

In the meantime, a within-Page-1 synthesis of patterns that recur across viewports on the home page alone is captured below. These are systems the page operates internally and that may or may not extend to Pages 2 through 6.

### Within-Page-1 patterns (provisional, pending cross-page verification)

**The section-banner-pill system.** Every themed section on Page 1 carries a centered title in which the section's theme word sits inside a colored pill. Each pill has a distinct color and a section-specific icon. Confirmed at six data points:

- AI (Browsing boosted with built-in AI banner): blue-purple gradient pill, cycling icon (pencil/copy/image and others)
- Yours: pink/coral pill, paintbrush icon (static)
- Safe: light blue pill, green Chrome-shield icon (static)
- Fast: green pill, speedometer icon (one-time entrance animation)
- By Google: pale cream pill, rust crossed hammer+wrench icon (one-time entrance animation)
- Updates: light blue pill, blue refresh-arrow icon (one-time entrance animation)

The pill is always positioned within a multi-line title where the theme word anchors the visual center. The system is one component reused with per-section color and icon variants — not six bespoke designs.

**The five pill motion personalities.** Different sections distribute motion differently across their pills:

- Perpetual cycling (AI banner pill — multiple icons fading through over a 5-6 second loop forever)
- Static (Yours pill, Safe pill)
- Three distinct one-time entrance animations (Fast: letters bounce-overshoot + speedometer draws in arc-style; By Google: letters cascade one-by-one + tool cross-fade; Updates: subtler letter motion + refresh-circle draws in)

The three one-time entrances use *different* choreographies for each section — no reuse. This is craft signaling.

**The flippable card component.** Introduced in Safe (four cards in 2×2 grid), reused in By Google (two cards in one row). Same blue "+" button bottom-right becomes "×" close-arrow on the back. Same vertical content swap with consistent directional motion (forward flip = everything up; return flip = everything down) and per-element staggered timing. Front face shows marketing pitch + supporting visual. Back face shows real product UI + descriptive body + "Learn more about X" link.

**The scroll-linked motion category.** Appears twice on the page, at very different scales — large (Yours opening landscape-to-theme transformation, full-viewport pinned) and small (Yours Extend Your Experience icon arrival, peripheral). The mechanic also extends to exit choreography (the Extend icons grow-and-dissolve when the user continues scrolling past them).

**The viewport-triggered locked motion category.** A motion type distinct from both perpetual locked motion and scroll-linked motion. Fires once on viewport entry, then static. Present in the Fast pill, By Google pill, Updates pill, and the larger Fast section's central UI sequence.

**The "real product UI, not stylized" pattern.** Every interface shown across every section is the real Chrome shipping interface, faithfully rendered. The hero video's Use Saved Password tooltip, the AI Mode interface, the Gemini chat panel, the Google Lens result cards, the Yours theme picker, the Safe backs (Save password? prompt, Safety Check panel, malware warning page, Privacy Guide opt-in card), the By Google Wallet and Lens demos, the Updates "New Chrome available" notification. The page's marketing material doubles as the product's screenshots in motion.

**The verb-led, user-action-framed voice.** Every section headline is something the user does or experiences. Never "Chrome features X." Always "Make it yours," "Stay safe," "Customize your Chrome," "Use strong passwords," "Check your safety level," "Prioritize performance," "Stay on top of tabs," "Pay for things as quick as you click."

**The destination-named "Learn more" link.** Every Learn-more link names its destination ("Learn more about Password Manager," "Learn more about Google Pay," "Learn more about Memory and Energy Saver"). Never a generic "Learn more."

**The white-space-as-section-delimiter system.** Major section boundaries get substantially larger gaps than subsection boundaries within sections. The amount of white space encodes the level of structural change.

**The cross-section narrative continuity.** Six identified threads stitch the page into one universe: the Elisa Beckett persona (hero saved-password tooltip, AI dual mockup "Hello Elisa Elisa," Safe Password Manager card); the Delicate Arch landscape (Yours scroll-linked transformation Stage 1, Yours Customize panel theme rotation, Fast carousel "Trip to Arches" tab group label); the cosmic dark Chrome theme (Yours Stage 4, Yours Customize panel, Yours Extend subsection right column); the Lens-identifies-plant scenario (hero Act 3 Euphorbia, By Google Lens Red Ginger); the botanical Chrome theme (Fast central browser, Updates Automatic-updates demo); the persistent QR code component (hero corner, throughout-page corner, final CTA in-card).

**The catalog of absences.** Things the page consistently does *not* have: no cookie banner, no newsletter popup, no chat-with-us bubble, no exit-intent modal, no countdown timer, no testimonials carousel, no press logo wall, no star-rating widget, no competitor comparison, no autoplay sound, no floating CTA, no scroll progress indicator, no hamburger menu, no language switcher in the top nav (only at the bottom), no "Sign in" in the top nav, no breathing animations on dormant elements. Confidence expressed through absence of decoration.

**The aggressive component reuse at the system level.** The same pale-blue pill background appears on the announcement bar, the AI section CTA bar, the Sign in to get started CTA, the Explore extensions CTA, the Safe pill, the Updates pill (close variants). The same QR code component reappears at three positions. The same Download Chrome button appears in the hero and in the final CTA. The page operates a small design system with high reuse rather than designing each instance from scratch.

---

## Sources and method

Observations on Page 1 Viewport 1 were drawn from:
- Six screen recordings of `google.com/chrome/` captured 2026-05-11, including a 0.25× slowed close-up of the hero video for transition analysis.
- A full-page screenshot of the same page.
- A direct paste of the page's full text content.
- A written observation pass by Mark following a structured guide of analytic categories.

Observations on Page 1 Viewport 2 (the AI section) were drawn from:
- Direct observation by Mark and a previous Claude in conversation during 2026-05-12 and 2026-05-13.
- Frame-extracted analysis of an embedded YouTube video on the AI section.
- Page text content (the announcement bar, section headlines, subsection headlines, body paragraphs, CTA bar text, and link text).
- The compiled handover summary at `HANDOVER_CHROME_OBSERVATIONS_MAY_13_2026.md`.

Observations on Page 1 Viewport 3 (the Yours section) were drawn from:
- Direct observation by Mark and a previous Claude in conversation during 2026-05-12 and 2026-05-13.
- Four screen recordings captured 2026-05-13: a fullscreen recording of the carousel in context (23 seconds), a close-up of the cycling left panel (17 seconds), a close-up of the three rotating category titles on the right (21 seconds), and a hover-state recording of the section-level CTA (9 seconds).
- Frame extraction at 2 fps from each recording and contact-sheet review.
- Mark's narrated walkthrough of the section structure, panel mechanics, and animation behaviors.
- The compiled handover summary at `HANDOVER_CHROME_OBSERVATIONS_MAY_13_2026.md`, corrected at four points by direct video observation (the Customize panel content, the Browse panel composition, the placement of the Sign in to get started pill as section-level rather than autofill-specific, and the smooth growth of the blue progress line).

Observations on Page 1 Viewport 4 (the Safe section) were drawn from:
- Five screen recordings captured 2026-05-14: an overview recording of the section in context (21 seconds), and individual close-up recordings of each of the four flippable cards (Password Manager 33s, Safety Check 42s, Enhanced Safe Browsing 27s, Privacy Guide 32s).
- Frame extraction at 2 fps and contact-sheet review of all five recordings.
- Mark's narrated walkthrough confirming the flip mechanic's directionality (forward flip = everything moves up; return flip = everything moves down) with per-element staggered timing.
- Cross-reference observation that the Extend Your Experience icons from Viewport 3 have an *exit* animation (grow-and-dissolve) on scroll-out — visible at the top of the Safe overview recording and not previously captured.
- The page's text content.

Observations on Page 1 Viewport 5 (the Fast section) were drawn from:
- Four screen recordings captured 2026-05-14: a fullscreen section-entry recording (39 seconds), a close-up of the pill entrance animation (5 seconds), a main scroll-linked-animation recording (47 seconds), and a horizontal carousel recording (37 seconds).
- Frame extraction (2 fps for overviews, 6 fps for the pill animation) and contact-sheet review.
- Mark's narrated walkthrough including direct confirmation that the horizontal carousel is manual-only (does not auto-rotate) and that the section's central animation combines viewport-triggered locked motion with scroll-linked shrinking.

Observations on Page 1 Viewport 6 (the By Google section) were drawn from:
- Four screen recordings captured 2026-05-14 (with one duplicate ignored via md5 verification): a section-entry recording (47 seconds), a Google Search demo recording (39 seconds), a pill animation close-up (4 seconds at 8 fps), and a Lens-and-Pay cards recording (32 seconds).
- Frame extraction and contact-sheet review.
- Mark's narrated walkthrough including the pill animation's letter-cascade-plus-tool-cross-fade choreography and the confirmation that the section's lower-half cards reuse the Safe-section flippable component.

Observations on Page 1 Viewport 7 (the Updates section) were drawn from:
- Two screen recordings captured 2026-05-14: a section overview (13 seconds) and a pill animation close-up (3 seconds at 8 fps).
- Frame extraction and contact-sheet review.
- Mark's narrated confirmation that the cards in this section are non-flippable and that the only motion beyond the pill entrance is the Chrome logo rolling across the right card on section entry.

Observations on Page 1 Viewport 8 (the FAQ) and Viewport 9 (the final CTA and footer) were drawn from:
- One screen recording capturing the FAQ section in context (13 seconds, 2 fps frame extraction).
- One full screenshot of the final CTA and the complete footer.
- Mark's narrated walkthrough confirming the simplicity of these closing viewports.

All visual claims in this document are grounded in those materials. No claims are made from memory or training data about Chrome's design.
