# MISSION VILLA SENIOR LIVING
## Multi-Page Website Blueprint + Fresh-Session Execution Protocol
**For:** Gemini 4 Argon in Google AI Studio (or equivalent coding workspace)  
**Project:** Mission Villa Senior Living, Daly City, California  
**Source UI repository:** https://github.com/Promotix21/missionvilla-ui-new  
**Original public website:** https://missionvillaseniorliving.com/  
**Document role:** Persistent design/content source of truth for page-by-page work. **Not** a request to build the entire site in one pass.  
**Design baseline:** V3 homepage is the accepted *visual foundation*; not yet final-pixel approved. Internal page designs are not yet approved.  
**Implementation stage:** Frontend/design prototype only. PHP, Synergy Hub, production integrations and launch automation are **out of scope** until later handoff.

---

# 1. YOUR MISSION AND NON-NEGOTIABLE BEHAVIOR

You are the design and frontend implementation partner for a premium, compassionate **multi-page** senior-living website. The current AI Studio application has a long homepage with section-anchor navigation. Evolve it into a coherent multi-page site **one page per work session**, preserving the V3 homepage's design language and existing components.

1. **DO NOT restart or replace the homepage.** V3 is the visual reference. Its introductory split French conservatory shutters, botanical arch, sophisticated typography, earthy plum/sage/sand/terracotta palette, inverted-radius cutouts, herbarium card details, GSAP motion and full-width editorial layouts establish the brand language.
2. **ACTUAL FULL WIDTH:** full viewport width, fluid side gutters; no 1100px/1200px centered wrapper around an entire page, no boxed website canvas, no broad white margins at desktop/ultrawide sizes. Cards may have their own reasonable widths. Use broad 12-column editorial grids, asymmetric image/text sections, immersive image panels and background bands.
3. **Do not clone the same layout onto every page.** Carry over a *design system*, not identical hero/card/FAQ templates. Each internal page should have its own visual narrative, photography rhythm, composition and selective microinteractions.
4. **No repeated cinematic shutters on each internal page.** Preserve their behavior on the homepage. Internal pages should navigate quickly and use elegant lightweight entrance transitions and scroll reveals; honor `prefers-reduced-motion`.
5. **One page per session.** In a new chat, read this blueprint, inspect the current project/repository for what really exists, build **only the requested page** plus minimal navigation/shared-component changes essential to make it functional. Do not proactively implement other pages.
6. **No false facts.** Never invent staffing ratios, licensed medical services, nurses on duty, outcomes, disease-treatment claims, prices, room sizes, apartment names, availability, inspection results, reviews, awards, contact details, event schedules, or actual-property imagery. Items from the original website may still require re-confirmation before launch; mark such facts as `CLIENT CONFIRMATION REQUIRED` in an internal content checklist rather than fabricating new ones.
7. **No deceptive forms.** At design stage, contact/schedule-visit forms may demonstrate validation and a clearly labeled preview state (`Demo only — no inquiry sent`). Do not say a visit is booked or an email is delivered unless actual service exists. Do not send real personal data to mock endpoints.
8. **No PHP, database, authentication, Synergy Hub, email marketing, ads, chatbot, lead ingestion, credentials or deployment work in this phase.** Only visual frontend site architecture and page design.
9. **Maintain accessibility and mobile quality:** keyboard navigation, focus styles, color contrast, meaningful alt text, fluid typography, 320–390px mobile behavior, readable text (avoid tiny 10–11px body copy), sensible touch targets and no forced animation.
10. **Avoid giant speculative writeups.** Make the requested page and report what changed, what remains unverified, and its preview route. Do not spend time on broad test suites or production smoke tests unless specifically requested.

---

# 2. SOURCE HIERARCHY — WHAT TO BELIEVE

In descending order of priority:

1. **Explicit user approval** in the current session; V3 homepage is the accepted *design direction*, not a finalized editorial/content approval.
2. **This blueprint** for navigation, site scope, tone and constraints.
3. **Current repository files** for existing components, styles, working routes and interaction behavior. Read before editing. Repo: `Promotix21/missionvilla-ui-new`.
4. **Original public Mission Villa website** as the primary source for business offerings and extant content. Page URLs in §4 and §5. Do not mistake every old claim for freshly client-approved fact.
5. **Uploaded reference HTML files** (`Mission Villa.html`, second Gemini HTML) only for interaction and visual inspiration, **not business facts**. The original HTML contained many fictional amenities, statistics, prices and care tiers.

If original-site material conflicts with another original page, do not silently choose one. Use the conservative, broadly supported wording and flag the issue for client verification.

## Verified-on-site identity (still confirm before production launch)

- Name: **Mission Villa Senior Living**.
- Address: **995 East Market Street, Daly City, CA 94014**.
- Main public phone: **650-756-1995**; use this number consistently in design prototypes. The existing Contact page additionally shows `(650) 534-2859`; do not use it as primary without confirmation.
- Marketing email shown on original site: **mktg.missionvilla@missionvillaseniorliving.com**.
- California RCFE license displayed: **#415601046**.
- Publicly highlighted programs: **Memory Care** and **Respite Care**. **Do not present Independent Living or Assisted Living as independently offered programs** simply because some legacy copy mentions them.
- The existing site's content discusses the **Legacies Memory Care** program, **private/shared suites with private baths**, family involvement, dining, daily activities and community amenities.
- Some details (fees, benefits, pet rules, availability, exact service inclusions, gallery content and marketing claims) can change; mark for client check as needed.

---

# 3. APPROVED DESIGN DIRECTION: V3 VISUAL DNA

## Keep
- Full-bleed, premium editorial art direction: rich plum `#3B2348`/deep plum `#22122B`, sage `#8FAF78`, sand `#D8C7A5`, terracotta `#C98268`, warm cream `#F7F4ED`.
- Refined serif, clean sans and restrained handwritten/script accent (reference fonts: Lora, Poppins, Allura); generous but **controlled** whitespace, legible text.
- Broad asymmetric layouts, layered imagery, botanical arches, sophisticated inverted-radius corners, quiet shadows, selective inset details and respectful motion.
- Human-centered tone, warmth and trust, not medical coldness or artificial luxury clichés.
- Real navigation links between pages, breadcrumb where beneficial, coherent sticky navigation, prominent **Schedule a Visit** CTA, consistent mobile menu.

## Improve when working on relevant shared components
- V3 has placeholder imagery; use actual client photos when available; otherwise visibly mark images as **illustrative placeholders** in the development/design notes and do not caption them as photos of the real facility.
- The Mission Villa logo may need correction once an official high-quality asset is supplied. Do not invent a new official logo without approval.
- Avoid placing so much content above primary images that visitors see only a truncated hero. On desktop, design a **complete first-screen composition**, usually within `100svh - header`, where practical; avoid clipped text and overflow at shorter heights. On mobile, allow natural vertical scrolling rather than compressing everything into unreadable sizes.
- Do not turn every page into another giant one-pager. Make the current homepage a concise discovery hub; let the internal pages explain details.

## Motion standards
- Homepage alone has the signature two-panel shutters that slide outward and reveal the hero, including an explicit Replay Intro. Preserve existing working implementation.
- Internal pages: light staggered text/image entrance, occasional tasteful hover states, scroll-triggered transitions where they improve comprehension. Respect reduced motion and fast page navigation; no repeated long loading sequences.

---

# 4. TARGET INFORMATION ARCHITECTURE — PROPOSED FOR USER REVIEW

This is a **working sitemap**, grounded in the original site. It is not a client-approved final navigation. We can refine labels and route names after page design review.

**Primary header:**
- **Home** → `/`
- **Living Options** (dropdown) → `/living-options` (overview/landing, optional but recommended)
  - Memory Care → `/memory-care`
  - Respite Care → `/respite-care`
  - Suites & Floor Plans → `/suites-and-floor-plans`
- **Life at Mission Villa** (dropdown) → `/life-at-mission-villa`
  - Services & Amenities → `/services-and-amenities`
  - Gallery & Virtual Tour → `/gallery`
- **About Us** → `/about`
- **Resources** (dropdown) → `/resources` (optional overview)
  - Financial Planning → `/financial-planning`
  - Family FAQs & Guidance → `/for-families`
  - Blog → `/blog`
- **Contact** → `/contact`
- Persistent prominent CTA: **Schedule a Visit** → `/contact#schedule-visit` or dedicated `/schedule-a-visit` if later warranted.

**Utility/footer only:** Resident Login external link (retain official existing destination only); brochure link (confirm link/asset); Privacy Policy, Accessibility Statement; address, phone, email, license.

**Routing rule:** A navigation item must lead to its intended **page**, not a section of the homepage. Dropdown labels may link to an overview page or act as accessible toggles, but must not be dead controls. Never display links to nonexistent routes as if they were complete; create graceful temporary placeholders or hide unbuilt links until their page exists while tracking intended sitemap.

## Implementation priority, one page at a time

1. Memory Care
2. Respite Care
3. Life at Mission Villa (overview)
4. Services & Amenities
5. Suites & Floor Plans
6. Gallery & Virtual Tour
7. About Us
8. Financial Planning
9. For Families / FAQs
10. Contact / Schedule a Visit
11. Living Options overview
12. Resources overview and Blog scaffolding **only if approved or justified by existing content**

This ordering prioritizes the two core services, then lifestyle, trust, family decisions and conversion. If a navigation overview route is needed earlier, implement the minimal route without diverting into a second full design.

---

# 5. PAGE-BY-PAGE CONTENT + DESIGN BLUEPRINT

**General writing rules across pages:** No long generic paragraphs, no invented testimonials, no guaranteed outcomes. Use appropriate Daly City / San Mateo County location context naturally, never keyword-stuff. Every page needs a real H1, relevant H2/H3 hierarchy, human copy, meaningful CTAs, internal links and at least one compelling visual signature. The suggested sections below are a **content architecture**, not rigid layout blocks. Design with editorial creativity.

## PAGE 01 — MEMORY CARE (`/memory-care`) — DESIGN FIRST

**Purpose:** Explain how Mission Villa supports people living with Alzheimer's or other forms of dementia and build trust with families considering care. Primary conversion: schedule a visit; secondary: ask about the program.

**Source:** https://missionvillaseniorliving.com/living-options/memory-care/ and home page.

**Site-supported topics to carry forward:** dedicated Memory Care, safe and nurturing environment; individualized, person-centered support; staff support; daily routines, personal dignity and family connection; help with everyday tasks; community amenities and activities; existing Legacies Memory Care branding; floor-plan references (Companion Unit / Jack & Jill).

**Recommended narrative sections:**
1. Interior-page hero: warm, human, reassuring headline, one emotionally engaging image/arch composition, concise explanation and **Schedule a Visit** CTA. Do **not** copy homepage hero verbatim.
2. What Memory Care means here: who it supports and how person-centered support is shaped by resident history, preference and ability.
3. **Legacies Memory Care** editorial feature: name and approach as referenced on original site; avoid unverified proprietary mechanisms or medical efficacy claims.
4. A day with purpose: dignified assistance, connection, daily programming, engaging activities; do not prescribe a fictitious minute-by-minute resident schedule.
5. Care, comfort and security: plain-language description of on-site support without an invented staffing ratio or RN guarantee.
6. The environment: authentic suites and shared spaces; link to Suites and Gallery. Do not use invented floor plans or measurements.
7. Family questions / decision guide: simple accordion, real concerns, and transparent prompt to ask team for specifics.
8. Closing CTA: visit, talk to team, pricing/assessment questions.

**Visual signature:** substantial editorial split with vertical portrait/arched image, layered paper-texture annotation, tasteful full-width narrative ribbon, asymmetrical three-scene storyboard with inverted-radius image corners. Not a repetitive grid of six small cards.

**Do not invent:** 1:5 care ratio, 24/7 registered nurses, clinical effectiveness percentages, sundowning reduction, staffing certifications, secured-area specifications, therapy guarantees or rates.

## PAGE 02 — RESPITE CARE (`/respite-care`)

**Purpose:** Help families understand temporary care, caregiver relief and next steps.

**Source:** https://missionvillaseniorliving.com/living-options/respite-care/.

**Site-supported topics:** short-term stays of a few days to several weeks (verify availability/duration); tailored assistance, meals, activities and amenities; family caregiver rest; possible support after illness/rehabilitation; furnished accommodations and support as listed; request details.

**Sections:** distinct welcoming hero; "When a little extra support makes a difference" scenarios; what's included in a stay (confirm availability); what a short-term stay can look like; family caregiver reassurance; steps from inquiry to assessment to stay (label example workflow, not guaranteed service terms); FAQs including duration, medication and costs (avoid precise unapproved answers); visit/inquiry CTA.

**Visual signature:** fluid horizontal timeline of the guest/family experience, calming full-bleed image transitions and refined editorial service tiles.

**Avoid:** fixed durations, set admission criteria, overnight clinical coverage claims or guaranteed prices without approval.

## PAGE 03 — LIFE AT MISSION VILLA (`/life-at-mission-villa`)

**Purpose:** Show daily culture and belonging rather than medical sales copy.

**Sources:** https://missionvillaseniorliving.com/, https://missionvillaseniorliving.com/about-us/, https://missionvillaseniorliving.com/gallery/, https://missionvillaseniorliving.com/services-and-amenities/.

**Topics:** chef-prepared meals; social space; activities such as games, art, fitness, live entertainment and scenic drives as shown on original; meaningful family visits; garden/courtyard/patio settings; connection and personalized experiences.

**Sections:** immersive editorial lifestyle hero; three or four photo-led story chapters (Dining / Activities / Spaces / Family Connection); curated day-in-the-life *illustration* (not a claim of fixed timetable); strong Gallery and Services links; inviting tour CTA.

**Visual signature:** oversized alternating image compositions and a horizontal editorial gallery band. Use genuine photography wherever possible.

## PAGE 04 — SERVICES & AMENITIES (`/services-and-amenities`)

**Purpose:** Make practical offerings easy to find without overwhelming families.

**Source:** https://missionvillaseniorliving.com/services-and-amenities/.

**Original-site service examples:** 24-hour staff; laundry; concierge; scheduled transportation; activity director; salon/spa; volunteer programs; routine assessments; escort/transfer support. Amenity examples: restaurant/full-table service, private dining, patio, courtyard, parking, emergency alert device, library, Wi-Fi in common spaces, dietary options. These are **original-site descriptions**, not fresh availability guarantees.

**Sections:** human-centered hero; searchable or categorized services and amenities (Lifestyle, Support, Dining, Community Spaces, Convenience); rich photographic feature(s); practical "Ask us about..." disclosure on eligibility and service availability; related Memory Care and Respite Care links; CTA.

**Visual signature:** well-organized non-generic category switcher + editorial photo pairing, not fifty giant repeated cards.

## PAGE 05 — SUITES & FLOOR PLANS (`/suites-and-floor-plans`)

**Purpose:** Help families picture accommodations, with truthful floor-plan information.

**Sources:** https://missionvillaseniorliving.com/living-options/ and https://missionvillaseniorliving.com/living-options/memory-care/.

**Site-supported:** private/shared suites and private bathrooms; **Companion Unit** and **Jack & Jill** shown as named floor-plan formats; apartment-feature list on existing site (e.g. thermostat, utilities, housekeeping, laundry, emergency alert). Verify per-unit applicability before publish.

**Sections:** welcoming hero; authentic accommodation photo story; floor-plan gallery for **real sourced plans only** (show `Awaiting official floor plan` placeholder if assets aren't available); what to expect in a suite; personalization of space; related community spaces and visit CTA.

**Visual signature:** large responsive gallery with real image lightbox, refined floor-plan viewer, but **never generate fake architectural drawings** or invent sq. ft., room types or vacancies.

## PAGE 06 — GALLERY & VIRTUAL TOUR (`/gallery`)

**Purpose:** Proof through authentic visuals.

**Source:** https://missionvillaseniorliving.com/gallery/.

**Sections:** clean title/intro; category-based gallery (Rooms, Dining, Common Areas, Outdoor Spaces, Activities) **only when assets support these categories**; image lightbox with keyboard support; dedicated virtual-tour embed **using the official tour source if accessible**; direct visit CTA.

**Visual signature:** sophisticated full-width editorial masonry / alternating aspect ratios, photo-caption system. Do not substitute stock photos without clearly noting placeholders internally.

## PAGE 07 — ABOUT US (`/about`)

**Purpose:** Communicate philosophy, location and trust.

**Source:** https://missionvillaseniorliving.com/about-us/.

**Site topics:** compassionate, personalized Memory Care, dignity and respect, family support; Daly City near San Bruno Mountain; community activities; pet-friendly policy with restrictions (confirm current policy); access to surrounding Peninsula amenities.

**Sections:** mission-led hero; care philosophy editorial narrative; people/team section **only if real bios/photos obtained**; neighborhood/location story; core values and activities; pet policy as a short conditional note; team conversation CTA.

**Visual signature:** warm, human portrait-led layouts and sophisticated local geography narrative. No fake founders, staff portraits or awards.

## PAGE 08 — FINANCIAL PLANNING (`/financial-planning`)

**Purpose:** Explain how families can reason about costs without publishing fictitious prices.

**Source:** https://missionvillaseniorliving.com/living-options/financial-planning/.

**Site topics:** assessment-informed personalized pricing, typical cost inclusions (housing, meals, care services, housekeeping, activities); comparison categories for home-based care; long-term care insurance; referral credit and state assistance participation mentioned on old site **must be reconfirmed before launch**.

**Sections:** compassionate hero; factors that affect Memory Care costs; clearly grouped "what may be included"; expense-category comparison **with editable blank fields / no pre-filled fake numbers**, or text-only checklist; ways to plan and questions to ask; FAQ; CTA to request a personalized discussion.

**Visual signature:** elegant interactive paper-ledger checklist; no counterfeit savings calculator, exact pricing, plan lock-ins or claims of no hidden fees.

## PAGE 09 — FOR FAMILIES / FAQs (`/for-families`)

**Purpose:** Help relatives navigate options, visits, transitions and first conversations.

**Sources:** https://missionvillaseniorliving.com/living-options/, https://missionvillaseniorliving.com/living-options/memory-care/, https://missionvillaseniorliving.com/living-options/respite-care/ and current homepage FAQs.

**Sections:** empathetic hero; how to consider Memory Care vs temporary Respite Care; questions to bring to a visit; family involvement and personalization; accessible FAQs grouped by Care, Suites, Cost and Visits; contextual links to Financial Planning and Contact.

**Visual signature:** elegant family-decision guide and accordion; no diagnosis tool, risk scoring or implied medical advice.

## PAGE 10 — CONTACT / SCHEDULE A VISIT (`/contact`)

**Purpose:** Low-friction contact and highest-intent conversion.

**Source:** https://missionvillaseniorliving.com/contact-us/.

**Sections:** clear contact hero; visible main phone/email/address; grounded map or link to map; guided inquiry/request-visit prototype form; what happens after submitting **once backend is connected** (until then clearly demo); optional referral interest area based on original Contact page; FAQ/accessibility directions.

**Design-stage form:** name, contact method/details, care interest, preferred contact window and optional message; consent language appropriate to later legal/privacy review. **Do not request medical diagnoses or detailed health histories in a frontend demo.** Use local client-side validation, do not expose entered personal data on public screens or fake-success claim.

**Visual signature:** easy-to-use split editorial contact composition; large inviting location photo/map; prominent call button.

## PAGE 11 — LIVING OPTIONS OVERVIEW (`/living-options`)

**Purpose:** Compare the two actual advertised care offerings and route users to service details.

**Source:** https://missionvillaseniorliving.com/living-options/.

**Sections:** accessible overview hero, Memory Care vs Respite Care distinction, accommodation highlights, FAQ, links to detailed services and Suites/Contact. Do not introduce additional independent care programs.

## PAGE 12 — RESOURCES / BLOG (`/resources`, `/blog`)

**Purpose:** Organize helpful materials and preserve original blog content where useful.

**Source:** original Blog navigation at https://missionvillaseniorliving.com/; inspect individual articles before migrating.

**Rules:** Do not generate fabricated published posts, authors or publication dates. Create this only after approval and an inventory of actual articles. Optional resource overview can link to Financial Planning, FAQs, brochure and Blog.

---

# 6. SHARED SITE SHELL / NAVIGATION IMPLEMENTATION

- Preserve existing app framework and project structure. Current V3 repo appears Next.js/React (`app/page.tsx`, `components/`, `app/globals.css`), but **inspect current files**, do not assume unchanged.
- Reuse the current header utility bar, navigation, buttons, footer, typography and styles. Refactor shared elements carefully into a common site shell only when necessary; **do not regress home animation**.
- Real internal-page route navigation instead of homepage anchor-only links. Handle desktop dropdowns by hover *and* keyboard/click; mobile expandable menus and clear navigation close behavior.
- Active page indication; breadcrumbs as useful; internal CTAs to real routes; `/contact#schedule-visit` should land at correct form section; internal navigation should reset scroll sensibly.
- While pages are incomplete, avoid broken links or misleading `#` placeholder routes. Track future pages in the page manifest.
- Content should be data-driven where sensible, but don't over-engineer a CMS or backend during design.
- Use locally available official imagery/assets when present; if none, keep labeled placeholders and include an asset-needed list.

---

# 7. CROSS-PAGE CONTENT / IMAGE / CLAIM GUARDRAILS

**Do not reuse inventions from either early HTML reference:** private olive groves, conservatories presented as real photographed facility spaces, fake suite names, 460/680/940 sq. ft. figures, 1:5 staffing ratio, 94% retention, 98.4% satisfaction, 42% agitation reduction, 24/7 registered nursing promises, fictitious financial comparisons, chef-lunch guarantees, invented appointment confirmation, invented phone/address/license, guaranteed pricing, fake resident reviews or fake awards.

When official photos are missing: use visually compatible stock/placeholder imagery for layout previews **only**, with internal metadata indicating `ILLUSTRATIVE — REPLACE BEFORE LAUNCH`. Never caption a stock image as Mission Villa itself.

Original website testimonials, awards, referral offer and insurance/assistance statements should be inventoried and **client-verified before final publication**, not automatically promoted to new stronger claims.

**Brand facts must remain consistent** on every generated page. Contact-page alternate phone is unresolved; use the main number unless client clarifies.

---

# 8. INCREMENTAL WORKFLOW FOR FRESH GEMINI SESSIONS

## Session input package (provide every new chat)

1. **This exact `.md` blueprint** (attach/upload or paste).
2. **Latest project source**, preferably open the **same AI Studio app/project** with the current code state; if working in a new coding environment, provide current GitHub repo checkout or ZIP. **The Markdown file alone cannot recreate code or previous edits.**
3. **A tiny current-state handoff** (`MISSION_VILLA_PAGE_STATUS.md`), generated/updated after each page. If not available, ask Gemini to inspect repo routes and infer what exists; do not invent status.
4. **The target page's session starter** (template below), changing only the requested page.
5. The original website URL for that page if external browsing is available. If not, use the source-derived topics in §5 and note what wasn't freshly checked.

## Session execution steps

A. Read blueprint §1–3, §4, shared shell §6, and **only the requested page's §5 brief**. Read status manifest. Inspect current routes/components/style before making changes.

B. State a brief one-paragraph understanding if necessary, then **implement only that page**. Keep V3 visual system, full-width canvas, a unique visual layout, accurate copy, responsive details and route connections. Update shared navigation minimally.

C. Ensure the page can be previewed. Do a **focused** sanity check for obvious compile, link/route, accessibility or overflow mistakes. Do not initiate production deployment or extensive test cycles.

D. Update the status manifest (`MISSION_VILLA_PAGE_STATUS.md`) within the project with: date, page/route, status `draft-for-review` or `approved`, files changed, what reused from V3, assets missing, factual questions, next recommended page. **Never call something approved without user sign-off.**

E. Respond with: route/link to preview, 5–8 concise bullets on the page, any user decisions needed, and the exact copy-paste starter for the **next** fresh session. Do not automatically implement next page.

## Fresh session starter — COPY, CHANGE PAGE NAME, PASTE

> You are continuing the Mission Villa Senior Living multipage frontend design project in a NEW session. Read the attached `MISSION_VILLA_GEMINI_4_ARGON_WEBSITE_BLUEPRINT.md` as the persistent design/content specification. Read `MISSION_VILLA_PAGE_STATUS.md` if it exists and inspect the actual current AI Studio project/code before editing. V3 homepage is our approved **design foundation**, not permission to redesign it. This session's **only deliverable** is **[PAGE NAME]** at **[ROUTE]**, using its exact page brief in §5. Preserve true full-width editorial styling, shared navigation, responsive quality, business-fact accuracy, and the homepage shutter animation. Create a distinct premium interior-page experience, not the same generic sections reused. Change only what is necessary for the page and functional navigation. No PHP, Synergy Hub, backend, deployment, or unsolicited adjacent-page builds. Mark placeholder photos and unverified claims clearly in handoff notes. When finished, update `MISSION_VILLA_PAGE_STATUS.md` and report the preview route and concise outstanding items. Stop for my review.

### First session starter — Memory Care (READY TO USE)

> Read the attached `MISSION_VILLA_GEMINI_4_ARGON_WEBSITE_BLUEPRINT.md`, the existing `Promotix21/missionvilla-ui-new` project, and `MISSION_VILLA_PAGE_STATUS.md` if present. **Build only the Memory Care page at `/memory-care`** following §5 Page 01. V3 homepage is the approved visual foundation: preserve the homepage and its shutters, use fluid edge-to-edge editorial layouts, elegant arched image treatments, inverted-radius cutouts, restrained animations and true Mission Villa service information. The Memory Care page must have its OWN visual story and not simply duplicate the homepage's hero/cards. Implement functional shared header navigation and internal links to this page without breaking existing routes. The original source is `https://missionvillaseniorliving.com/living-options/memory-care/`. Do not invent clinical promises, ratios or photography. Preview it, update `MISSION_VILLA_PAGE_STATUS.md` with files changed/asset needs/unverified facts, and stop for my review. No other page, no backend, no deployment.

---

# 9. PAGE-STATUS MANIFEST TEMPLATE

Create/update **`MISSION_VILLA_PAGE_STATUS.md` in the project**, using this compact format; keep it short for future sessions:

```md
# Mission Villa — Design Status
Design baseline: V3 homepage retained as visual foundation; logo/images may need final updates.
Repository: https://github.com/Promotix21/missionvilla-ui-new
Current app/branch/commit: [inspect and fill]
Last update: [date]

| Route | Page | Status | Notes |
|---|---|---|---|
| / | V3 Home | design foundation accepted | Not final visual QA |
| /memory-care | Memory Care | not started | |
| /respite-care | Respite Care | not started | |
| /life-at-mission-villa | Life at Mission Villa | not started | |
| /services-and-amenities | Services & Amenities | not started | |
| /suites-and-floor-plans | Suites & Floor Plans | not started | |
| /gallery | Gallery | not started | |
| /about | About Us | not started | |
| /financial-planning | Financial Planning | not started | |
| /for-families | Family FAQs | not started | |
| /contact | Contact | not started | |
| /living-options | Living Options Overview | not started | |
| /resources | Resources | not started | optional |
| /blog | Blog | not started | inventory pending |

Latest completed design task: [one or two lines]
Files changed in latest session: [paths]
Known issues/assets needed: [bullets]
Client confirmations needed: [bullets]
Next recommended page: [name/route]
```

**Critical:** `draft-for-review` means designed but **not** approved. The user approves pages individually. Do not claim backend/lead ingestion/AI automation is implemented from the presence of UI design alone.

---

# 10. REVIEW / APPROVAL GATES

After **each** page, user reviews: (1) first-screen composition at desktop and phone, (2) visual continuity with V3 but uniqueness, (3) source-grounded language, (4) usefulness of content and CTAs, (5) functioning menus/links, (6) images labeled vs verified, (7) reasonable motion, (8) no broken homepage behavior.

Only when explicitly approved, set that route `approved` in the status manifest and proceed to the next page in a **new session**. If changes are requested, revise only that same page first.

At the end of the multi-page visual stage, do one global editorial/brand pass, fix logo and images, review responsive layouts, check final sitemap and copy, then hand completed front-end designs to the developer for **separate** PHP/Synergy Hub planning. Do not silently start that phase.

---

# 11. ORIGINAL PUBLIC SOURCE INDEX (REVIEWED NOV 4, 2026)

- Homepage/navigation: https://missionvillaseniorliving.com/
- About Us: https://missionvillaseniorliving.com/about-us/
- Living Options: https://missionvillaseniorliving.com/living-options/
- Memory Care: https://missionvillaseniorliving.com/living-options/memory-care/
- Respite Care: https://missionvillaseniorliving.com/living-options/respite-care/
- Financial Planning: https://missionvillaseniorliving.com/living-options/financial-planning/
- Services & Amenities: https://missionvillaseniorliving.com/services-and-amenities/
- Gallery: https://missionvillaseniorliving.com/gallery/
- Contact Us: https://missionvillaseniorliving.com/contact-us/
- Blog: reachable via original site's primary navigation (inventory actual articles before use).
- Official resident portal: follow the existing `Resident Login` destination from original footer, do not replace with fabricated internal auth.

**This is a design/content brief, not a guarantee that every item on the live site is accurate. Preserve uncertainty for items requiring client confirmation.**

---

# FINAL EXECUTION INSTRUCTION

**Begin with ONLY PAGE 01: `/memory-care` if the user has supplied the first-session starter or explicitly requested it.** Otherwise use this document as persistent project reference and wait for an explicit page request. One page, one focused session, one updated short handoff. Protect V3 and stop for user review.
