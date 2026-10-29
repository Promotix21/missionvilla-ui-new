# MISSION VILLA SENIOR LIVING — GOOGLE AI STUDIO MASTER HOMEPAGE DESIGN PROMPT

## YOUR JOB — BUILD THE NEW HOMEPAGE, NOT A PLAN

Create a complete, polished, fully responsive, **full-width, edge-to-edge** homepage design for **Mission Villa Senior Living**. I am attaching **two existing HTML designs** that demonstrate the exact visual ambition, layout vocabulary, and motion language I like:

- **REFERENCE A: `Mission Villa.html`** — especially the dramatic opening: dark plum left/right French conservatory shutters, short introductory copy, then panels slide outward to reveal a beautifully composed homepage hero. Also appreciate its editorial typography, warm colors, botanical arch motifs, and elegant narrative treatment.
- **REFERENCE B: `gemini-code-1792080144170.html`** — especially its immersive, wide-screen asymmetrical bento layouts, unusual negative-space corner cutouts, interesting alternating cards, image/text compositions, scroll choreography, and refined interactive component designs.

**Neither reference is an approved final site.** Build a **new third iteration** informed by these references. Do not mechanically concatenate both pages or copy all their text/features. **However, do not waste effort reinventing their established visual mechanics:** read and reuse/adapt working HTML/CSS/GSAP techniques, colors, animation patterns and component geometry from the attached source files. Concentrate creative work on making the final composition better, more authentic and coherent.

**Deliver the actual working homepage in the AI Studio preview, not a write-up, wireframe, proposal, component inventory, or generic landing-page template.** This is currently **visual design + approved public-facing copy only**, not implementation: **NO PHP, database, CRM, Synergy Hub, lead integration or deployment work.** Those will be handled later by a developer, after designs and content are approved.

## NON-NEGOTIABLE #1: TRUE FULL-WIDTH EDITORIAL LAYOUT — NEVER BOX THE PAGE

AI Studio often defaults to a centered, boxed website. **DO NOT DO THAT.** Both attached references are deliberately designed as large, wide-screen, fluid canvases. Match that ambition:

- Page and major bands span **100vw / 100% viewport width** with full-bleed backgrounds and imagery. No overall `max-width: 1200px`, `container mx-auto`, `max-w-7xl`, `max-w-screen-xl` or similar site-wide boxed constraint. No giant blank margins on 1440p, 1920p or ultrawide screens.
- Use **fluid horizontal gutters**, e.g. `padding-inline: clamp(20px, 4.5vw, 112px)`, for readable text within full-width sections. Content can have local reading-width limits, but **the architectural page canvas must remain full width**.
- Use responsive **12-column editorial/asymmetric grids** with major 7/5, 8/4 or 5/7 splits, wide media stages, flush full-bleed bands, elegant uneven visual rhythms and intentional whitespace.
- **Do not fill the page with uniform three-card rows, standard SaaS cards, repeated pills, or boxed white panels.** Vary the visual composition intelligently. Bring selected inverted-radius corner details, organic/botanical shapes, split media blocks and layered images from Reference B.
- On mobile, stack deliberately, keep the visual identity intact, and avoid horizontal overflow. Do not impose heavy animations on small devices.
- Desktop hero should feel spectacular and use the available viewport rather than sit within a narrow rectangle. Maintain comfortable type sizes, line breaks, contrast and tap targets across devices.

## NON-NEGOTIABLE #2: SIGNATURE FIRST-LOAD SHUTTER OPENING

**This is the clearest approved *concept* from the references, although its final art direction can improve.** Implement it as a real functioning sequence (see Reference A's `#conservatory-shutters`, `#shutter-left`, `#shutter-right`, `openingTL`):

1. At the start, the screen is filled with **two dark plum panels meeting at the vertical center**, with restrained Mission Villa branding, beautiful editorial type and a complementary left/right line of the tagline.
2. After a concise, premium cinematic pause, left panel moves **left** and right panel moves **right** like French conservatory doors/shutters, revealing the actual full-width homepage hero underneath.
3. Reveal hero headline, photograph, decorative details and CTAs with refined, coordinated motion. Keep it elegant, smooth and legible — no spinning logo or cheap progress bar.
4. Make the entrance **brief and non-blocking** (rough target ~2–3 seconds, not a prolonged artificial loading experience). No network-loading requirement for the animation to finish. Avoid blank flashes.
5. Provide a **skip intro** control, correct initial visibility when scripts fail, `prefers-reduced-motion` support, a mobile-appropriate transition, and ideally replay only on the first visit in a session rather than every navigation/reload.
6. This cinematic sequence is for the **homepage**, not a mandatory intro on every later internal page.

## VISUAL LANGUAGE / BRAND DIRECTION

Use the visual language already explored in BOTH reference HTML files, with creative improvements:

- Primary deep plum **#3B2348**; sage **#8FAF78**; warm sand **#D8C7A5**; restrained terracotta **#C98268**; warm cream **#F7F4ED**; dark charcoal **#29272B**. Maintain cohesive brand balance; avoid random neon or generic healthcare blue.
- Refined, readable editorial serif headings (reference: **Lora**), clear approachable sans-serif body (reference: **Poppins**) and **limited** handwritten/script accent (reference: **Allura**). Handwriting should be decorative, not used for critical information.
- A premium, warm, calm, welcoming community feel: daylight, genuine human care, dignity, connections, nature, everyday life. **Not a hospital website, not an ultra-luxury resort, not a tech startup.**
- Use the **real finalized Mission Villa logo if provided separately**. The SVG leaf emblems in the references are placeholders unless they match the final approved logo; never invent a new final logo or silently claim a placeholder is approved.
- Use tasteful scroll-linked editorial transitions / GSAP motion inspired by the references, but keep navigation usable and make ordinary scrolling accessible. Avoid excessive scrolljacking, giant pinning, animations that trap content, or effects that degrade performance.
- Treat supplied stock images in references as **visual placeholders only**, not proof of the actual facilities. If actual facility imagery is provided, use that preferentially. If not, mark chosen illustrative imagery in source comments as replaceable; do not imply invented building features in captions or image alt text.

## BUSINESS FACTS — ACCURATE PUBLIC CONTENT ANCHOR

**Official content reference: https://missionvillaseniorliving.com/**. The original site and client-approved supplied material take priority over AI-generated assertions in Reference A or B. These are the facts to anchor this design:

- Business name: **Mission Villa Senior Living**.
- Location: **995 East Market Street, Daly City, CA 94014**.
- Main published phone: **650-756-1995**.
- Main published email: **mktg.missionvilla@missionvillaseniorliving.com**.
- Published California license: **415601046** (use only where appropriate, and keep it accurate).
- Primary actual living/care offerings on the original site: **Memory Care and Respite Care**. Do not introduce standalone Independent Living or Assisted Living programs without approved evidence.
- Focus: compassionate, personalized support for seniors living with Alzheimer's disease or other forms of dementia; resident dignity, privacy, independence where possible, family support, homelike comfort.
- Original site describes private and shared suites with private bathrooms, communal spaces, social interaction, engaging activities, chef-prepared dining and its **Legacies Memory Care** program. Preserve these areas without exaggeration.
- Primary conversion actions: **Schedule a Visit**, **Get Pricing & Information**, **Call Our Team**, and **Explore Memory Care / Respite Care**.

Use these verified facts for the prototype. Where the original website or attached approved documentation does not substantiate a detail, **omit it** rather than fabricating it. Keep editable content data separate from presentation wherever practical.

### CRITICAL: PURGE GENERATED FACTS FROM BOTH HTML REFERENCES

Both files contain imaginative content that **must not be treated as real Mission Villa operations**. Remove or replace ALL unsupported examples, including:

- Invented prices `$4,250 / $5,450 / $6,800`, all-inclusive rate locks, price guarantees, suite availability and fake live status counters.
- Claimed `1:5` care staffing, `94%` employee retention, `98%` family satisfaction, `<90-second` response, guaranteed 24/7 on-site registered nurses, 42% clinical improvement and other unsupported metrics or health claims.
- Fake architecture: `2.4 acres of olive groves`, palm conservatory, private villas, botanical courtyards, hydrotherapy, fictitious floor plans, invented room measurements and staged amenities.
- Invented business address `1080 Olive Grove Promenade`, placeholder phone `(800) 555-VILLA`, fabricated license numbers, and fabricated organization/affiliation details not established by approved brand material.
- Unapproved chef's lunch tour, chauffeur service, special care diagnostics, nurse assessments, eligibility guarantees, instant tour confirmations, emailed pricing packets or delivered brochures. Use straightforward **Request a Tour / Schedule a Visit** copy instead, unless real operations confirm otherwise.
- Do not use fake client testimonials, fake external rankings, fake certifications or unverified legal/clinical claims.

**Important:** A care-guidance selector can be a friendly exploratory UI, but it must not pretend to medically diagnose, clinically score or recommend a care level. Since Mission Villa's real offerings are Memory Care and Respite Care, don't reproduce the three-tier invented 'care cockpit'. A prototype form must not report 'tour confirmed' or 'email sent' without an actual connected service; present a clearly labelled visual demo state instead.

## CONTENT / STORYTELLING DIRECTION — HOMEPAGE ONLY

We want strong emotional writing balanced by direct, practical information. Target adult children/families evaluating senior care, and prospective residents/family decision-makers. User must understand **what Mission Villa does, where it is, and how to contact the team** without digging through animations.

**Preferred primary headline (subject to refinement):**

> The honor they deserve, the care you’ll love.

**Suggested supporting hero copy:**

> At Mission Villa Senior Living in Daly City, compassionate Memory Care and short-term Respite Care come together in a welcoming, homelike community. Every day is guided by dignity, meaningful connections, and personalized support.

**Primary hero CTA:** `Schedule a Visit`  
**Secondary CTA:** `Explore Our Care Options`  
**Visible phone option:** `(650) 756-1995`.

Do not blindly keep the sample copy if you can improve rhythm and warmth **without changing the facts**. Avoid overly grandiose concepts such as "clinical sanctuary," "luxury botanical medicine," "financial value engine" and too much self-congratulatory language. A human family should immediately feel understood, not marketed at.

### COMPOSITION GUIDE — EDIT AND RECOMPOSE IF YOU HAVE A BETTER DESIGN

Build a **complete, believable homepage** with a strong narrative arc. Suggested content flow, not a forced template:

1. **Cinematic shutter entrance + extraordinary full-width hero.** Well-composed, warm and premium. Strong headline, grounded subcopy, two CTAs; visual design inspired by Reference A's arch/media and Reference B's asymmetrical framing. The true visible hero must still be beautiful after the shutters are gone.
2. **Quick trust/identity introduction.** Mission Villa is in **Daly City**; provides **Memory Care / Respite Care**; welcoming, homelike, personalized support. Consider a refined inline signature or editorial trust strip, without fake numbers.
3. **The two real care options.** Visually distinctive immersive side-by-side or asymmetric panels for Memory Care and Respite Care. Clear differences and links, not invented third-tier services. Use modern card geometry inspired by Reference B, without default boxed grids.
4. **Our approach to care / what matters.** Adapt the emotional "Nature · People · Purpose" idea only as a brand storytelling device if helpful, and don't claim specific unverified features. Dignity, familiarity, thoughtful engagement, family relationships and personal routines should be central. Mix immersive image compositions and flowing editorial typography.
5. **Life at Mission Villa.** Engaging daily activities, chef-prepared dining, comfortable suites and community relationships. Could use an **editorial timeline, horizontal photo story or alternating split layout**, inspired by the reference prototypes. Do not describe made-up schedules, menus or amenities as facts.
6. **Comfortable living / suites preview.** Showcase original site's private/shared suites and common areas. Use a striking photograph plus concise highlights; no fabricated architectural CAD drawings or precise dimensions. Link to the future living-options/gallery page.
7. **Reassurance for families.** A meaningful, human passage about personalized support and communication. If including testimonials, use **attributed real testimonials from the official site only**, with exact wording and no fabricated names or headshots; alternatively use a trust-focused story block without a quotation.
8. **Practical next step / conversion stage.** An appealing Schedule a Visit/contact section, prominent phone, genuine contact details, clear visual demo form (not pretend-submit). Make it easy to get pricing information or request a conversation.
9. **Premium, useful footer.** Brand, location, actual phone/email, care services, useful navigation, privacy/accessibility placeholders where needed, published license. No fabricated additional contact channels or affiliates.

These sections are guidance for **one master homepage**. Feel free to change exact sequence, visual approach and heading names. Every section must feel designed, not auto-generated and stacked.

## INTERACTIONS AND QUALITY BAR

- Build the full desktop and mobile responsive experience with actual interactions and working in-page navigation.
- The intro must run and exit reliably; no blocked content, blank screen or overlay trapping user clicks.
- Navigation should be elegant, readable, sticky only if tasteful, with a functioning mobile menu. Keep persistent tour/contact access.
- Use refined but purposeful hover/tap feedback, reveal motion and well-controlled transitions. Favor performant `transform` and `opacity` animation.
- Handle accessibility: semantic heading structure, readable text sizes, contrast, visible focus states, meaningful buttons and links, keyboard support, accessible form labels, alt text, `prefers-reduced-motion` and responsive behavior.
- No fake submission success. A design-only form may show a clear `Demo — backend not connected` message on submit.
- Avoid stock-photo repetitions that make sections feel identical. Use real Mission Villa photos if supplied; otherwise keep imagery provisional.
- Avoid excessive decorative counters, meaningless indicators, complex clinical widgets, and invented 'live' data.
- If importing HTML into AI Studio requires adaptation to its preview framework, do so while preserving the design behavior and full-width composition. This is a design prototype; use whatever front-end structure AI Studio needs, but keep the output suitable for later conversion by a separate PHP developer.

## BEFORE YOU FINISH — SELF-CHECK THE ACTUAL RENDERED PAGE

Check this carefully; **do not** respond only with an assurance:

- Is the website **truly edge-to-edge at desktop/ultrawide widths**, not a centered boxed template?
- Does the **left/right shutter introduction** actually work and reveal a beautiful final hero?
- Are both HTML files visibly reflected in the design language, with Reference A's cinematic mood and Reference B's more innovative layout techniques?
- Is the homepage a fresh, better **third iteration**, rather than a literal stitch or generic AI template?
- Does the site clearly and correctly center **Memory Care and Respite Care**, in **Daly City**, rather than invented service tiers?
- Did you remove unsupported statistics, luxury features, rates, fake testimonials, fictitious contact details and fake clinical promises?
- Is the copy compassionate, concrete, concise and appropriately informative?
- Does the page remain convincing on phone, tablet, wide desktop and ultrawide screens?
- Does the page have a coherent navigation, complete footer and useful calls to action?

**Start implementing the complete homepage design now. Do not begin internal pages or backend work yet. Do not stop after a plan. Show the working page in the preview.**
