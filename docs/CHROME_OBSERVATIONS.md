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

**Status:** In progress.
**Started:** 2026-05-11.
**Last updated:** 2026-05-12.

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

### Viewport 2: AI section

*[Pending — next observation session.]*

The viewport(s) immediately below the hero. Contains "Our most powerful AI search built right into Chrome," a YouTube video embed of "Dive Deeper with AI Mode in Chrome," and the "Dig deeper with AI Mode" copy block. Followed by "Browsing boosted with built-in AI" and "Gemini in Chrome: Your AI browsing assistant" with associated demo imagery and a "Sign up now" CTA.

### Viewport 3: Yours section

*[Pending.]*

"Make it `y o u r s` and take it with you." Customize your Chrome (themes), Browse across devices, Save time with autofill, Extend your experience (extensions).

### Viewport 4: Safe section

*[Pending.]*

"Stay `s a f e` while you browse." Password Manager, Enhanced Safe Browsing, Safety Check, Privacy Guide. Four sub-features following the same template.

### Viewport 5: Fast section

*[Pending.]*

"The `f a s t` way to do things online." Prioritize performance, Stay on top of tabs, Optimized for your device.

### Viewport 6: By Google section

*[Pending.]*

"The browser `b u i l t` by Google." Google Search built in, Google Pay, Google Lens.

### Viewport 7: Updates section

*[Pending.]*

"Discover the latest `u p d a t e s` from Chrome." Automatic updates, New from Chrome.

### Viewport 8: FAQ

*[Pending.]*

Six frequently asked questions in an expandable accordion.

### Viewport 9: Final CTA and footer

*[Pending.]*

"Take your browser with you" with the Download Chrome button (second occurrence of the primary CTA on the page), followed by the Chrome Family / Enterprise / Education / Dev and Partners / Support footer columns, social follow icons, and the Google-standard bottom strip (Privacy and Terms, About Google, Google Products, Help, language selector).

### Page 1 — Preliminary implications (appendix)

These are not observations. They are noted here so they are not lost while observation continues, but they belong to the rubric and design work that follows. Marked as appendix to keep the observation sections pure.

The five-act structure in 27 seconds is something a Lux hero video could borrow directly. Five Tours (Pronunciation, Conversations, Coach, Voice, Progress); one hero video; five micro-acts; each one a brand-icon-to-result narrative. Structural mirror to what Chrome does. Would unify the Landing page in a way it does not currently.

The "logo opens its eye to show you a person" move could transfer. The Lux brand mark could open to reveal someone speaking, then reveal the phoneme score, then dissolve to the next scene.

The discipline of "one thing moves at a time" is the opposite of where the Tours currently sit. Landing has several breathing animations, hover effects, and motion cues distributed across the page. Chrome concentrates 100% of motion into one 27-second loop and lets the rest be still. Worth surfacing on the rubric.

The page-load choreography (headline gray-to-black → button → legal → logo arrives last) is something Landing could adopt without restructuring. Almost free, signals craft.

The typography ratio (headline 5–6× larger than body) is bolder than Lux currently goes. Worth measuring on the rubric.

The "decorative letter treatment + matching sticky nav anchor" system is reusable. If Lux Landing has six sections, six one-word anchors could drive both a sticky nav and the in-section typographic emphasis.

The catalog of absences should be its own column in the rubric — for every Tours page, what is NOT there that does not need to be.

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

*[Pending — to be synthesized after all six pages are observed.]*

This section will name the techniques that appear consistently across multiple Chrome pages, distinguishing them from techniques that are page-specific. Cross-page patterns are the strongest candidates for rubric criteria, since their repetition across an established design system is evidence that Google considers them load-bearing.

---

## Sources and method

Observations on Page 1 Viewport 1 were drawn from:
- Six screen recordings of `google.com/chrome/` captured 2026-05-11, including a 0.25× slowed close-up of the hero video for transition analysis.
- A full-page screenshot of the same page.
- A direct paste of the page's full text content.
- A written observation pass by Mark following a structured guide of analytic categories.

All visual claims in this document are grounded in those materials. No claims are made from memory or training data about Chrome's design.
