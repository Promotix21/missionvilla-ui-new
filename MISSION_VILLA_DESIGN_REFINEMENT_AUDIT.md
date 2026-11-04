# Mission Villa Senior Living — Sitewide Design & UX Refinement Audit

**Scope:** Complete 12-route website (`/` through `/living-options`, plus `/resources`) evaluated as a single cohesive senior-living digital publication prior to local handoff.  
**Design Baseline Preserved:** Approved V3 Pacifica Conservatory & Editorial Monograph aesthetic (`#F7F4ED` Alabaster Cream, `#3B2348` Deep Plum, `#C98268` Terracotta Clay, `#8FAF78` Eucalyptus Sage, `#D8C7A5` Warm Champagne), V3 homepage French conservatory shutter intro, botanical arches, inverted-radius cutouts, herbarium mounts, and source-grounded factual guardrails.

---

## 1. Cross-Site Cohesion & Shared Architecture Findings

| Area / Component | Issue Identified | Impact on Family Experience | Priority | Recommended Correction |
| :--- | :--- | :--- | :--- | :--- |
| **Font-Scale Accessibility Control** (`HeaderAndUtilityBar.tsx` + Pages 05–12) | Pages `/` through `/services-and-amenities` apply text scaling via the root CSS custom property `--font-scale` on `document.documentElement`, whereas Pages `/suites-and-floor-plans`, `/gallery`, `/about`, `/financial-planning`, `/for-families`, `/contact`, `/living-options`, and `/resources` apply inline `style={{ zoom: fontScale }}` on the page wrapper without updating `--font-scale`. Navigating between routes after clicking `A+` or `A++` either resets or compounds scaling and causes inconsistent mobile viewport zoom behavior. | **High:** Breaks senior/family readability consistency across routes and can cause horizontal clipping on mobile when CSS `zoom` interacts with `100vw` sections. | **P1 — High (Mobile & Accessibility)** | Centralize `--font-scale` synchronization inside `HeaderAndUtilityBar.tsx` (reading/writing `document.documentElement.style.setProperty('--font-scale', ...)` on mount and change) and remove inline `style={{ zoom: fontScale }}` from all interior page wrappers. |
| **Undefined `.botanical-arch` CSS Class** (`/app/contact/page.tsx`, `/app/globals.css`) | `/contact` uses `className="... botanical-arch ..."` on its right-hand hero image plate, whereas `app/globals.css` only defines `.arch-portal`. The hero photograph on `/contact` therefore renders as a plain rectangle instead of the intended botanical arch. | **High:** Weakens first-screen visual craft on the primary conversion page (`/contact`). | **P1 — High (Visual Cohesion)** | Define `.botanical-arch` alongside `.arch-portal` in `/app/globals.css` so both class names render the signature rounded arch (`border-radius: 260px 260px 24px 24px`). |
| **Developer Session Labels in Mobile Drawer & Page Kickers** (`HeaderAndUtilityBar.tsx`, Pages 05–12) | The mobile navigation drawer displays internal build labels (`Page 01` through `Page 12`) next to every link, and several interior page hero kickers display `Page 05`, `Page 06`, `Page 07`, `Page 08`, `Page 09`, `Page 10`, `Page 11`, `Page 12` instead of warm editorial monograph labels. | **Medium-High:** Makes the site feel like a sequence of separate AI Studio build tasks rather than one art-directed senior-living website. | **P2 — Medium-High (Cohesion & Navigation)** | Replace `Page 01`–`Page 12` badges in `HeaderAndUtilityBar.tsx` mobile drawer with helpful family descriptors (e.g., `Legacies™ Program`, `Short-Term Stays`, `Daily Rhythm`, `3 Suite Formats`, `Worksheet`), and harmonize hero kickers across Pages 05–12 to use editorial monograph/guide titles. |

---

## 2. Page-by-Page Audit Findings

### 2.1 `/` — V3 Homepage
- **Issue:** None in visual structure or shutter intro. Only shares the `HeaderAndUtilityBar` mobile drawer developer labels (`Page 01`–`Page 12`).
- **Impact:** Low.
- **Priority:** Preserve V3 untouched; mobile menu cleanup in `HeaderAndUtilityBar` benefits `/` automatically.
- **Recommended Correction:** Keep `app/page.tsx` and `ConservatoryShutters.tsx` intact.

### 2.2 `/memory-care` — Legacies™ Memory Care
- **Issue:** In Section 6 (`#memory-care-faq`), the interactive Tour Checklist and the FAQ accordion sit side-by-side with dense instructional copy, and on mobile the transition from the 5-card checklist to the 7-item FAQ accordion can feel long without a quick jump between the two columns.
- **Impact:** Medium — families on mobile have to scroll past all 5 tour questions before seeing the FAQ search and questions.
- **Priority:** P3 — Medium (Mobile Pacing & Interaction Simplicity).
- **Recommended Correction:** Add a compact mobile quick-jump pill bar at the top of `#memory-care-faq` (`Jump to Tour Checklist` / `Jump to Memory Care FAQs`) so mobile visitors can move directly between the checklist and FAQ accordion.

### 2.3 `/respite-care` — Short-Term Respite Care
- **Issue:** In Section 3 (`#how-respite-works`), the 5-step stay timeline selector works well, but on mobile the 5 step buttons stack vertically above the detail card without a compact step progress indicator or "Previous / Next Step" controls inside the detail card, requiring users to scroll back up to switch steps on small screens.
- **Impact:** Medium — reduces ease of scanning the 5-step respite stay journey on mobile.
- **Priority:** P2 — Medium-High (Mobile Usability & Pacing).
- **Recommended Correction:** Add "Previous Step" and "Next Step" navigation buttons at the bottom of the active step detail card in `#how-respite-works` so families on mobile can step through `Step 01` → `Step 05` without scrolling back up.

### 2.4 `/life-at-mission-villa` — Daily Rhythm, Dining & Activities
- **Issue:** In Section 5 (`#editorial-gallery-band`), the 5-plate filmstrip uses `flex-col lg:flex-row`, which stacks all 5 photo cards vertically on mobile devices instead of behaving as a true horizontal filmstrip carousel, and lacks explicit Previous/Next browse buttons and a mobile swipe indicator.
- **Impact:** High — creates excessive vertical scrolling on mobile and misses the horizontal gallery browsing affordance required by the design review.
- **Priority:** P1 — High (Mobile Horizontal Gallery Behavior).
- **Recommended Correction:** Convert the `#editorial-gallery-band` filmstrip to a horizontal snap-scrolling track across mobile and tablet (`flex-row overflow-x-auto snap-x snap-mandatory`) with `w-[78vw] sm:w-[320px] lg:w-[380px]` cards, a clear swipe/scroll hint on mobile, and Previous/Next plate buttons.

### 2.5 `/services-and-amenities` — 24-Hour Support & Community Comforts
- **Issue:** The deep-plum 3-column architectural hero is distinctive and breaks up the split-hero pattern well. However, in Section 2 (`#services-explorer`), the filter bar + search + bookmark counter + instructional banner can be slightly streamlined so the category tabs and "Saved to Inquiry" counter scan immediately.
- **Impact:** Low-Medium.
- **Priority:** P3 — Low-Medium (Interaction Simplicity).
- **Recommended Correction:** Streamline the explorer instruction helper line and ensure category pills scroll/wrap cleanly on mobile widths.

### 2.6 `/suites-and-floor-plans` — Private Suites, Companion Units & Jack & Jill Formats
- **Issue:** Uses inline `style={{ zoom: fontScale }}` instead of root `--font-scale`, and displays `Page 05 · Residential Monograph` in the breadcrumb strip and `Page 05 · Residential Architecture & Personal Space` in the hero kicker.
- **Impact:** Medium — font scaling bug on mobile and internal page numbering visible in UI.
- **Priority:** P1 (Font Scale) / P2 (Editorial Kicker).
- **Recommended Correction:** Remove `style={{ zoom: fontScale }}` and replace `Page 05` labels with `Residential Monograph · Suite Formats`.

### 2.7 `/gallery` — Photo Gallery & Virtual Tour Stage
- **Issue:** Uses inline `style={{ zoom: fontScale }}` and displays `Page 06 · Visual Proof & Honesty` in the breadcrumb bar and `Page 06 · Curated Visual Monograph` in the hero kicker. Additionally, adding a subtle horizontal scroll affordance on the category filter bar for narrow screens improves mobile usability.
- **Impact:** Medium.
- **Priority:** P1 (Font Scale) / P2 (Editorial Kicker).
- **Recommended Correction:** Remove `style={{ zoom: fontScale }}`, replace `Page 06` labels with `Visual Monograph · Photo Gallery & Virtual Tour`, and keep the 4-frame hero contact sheet, lightbox, and virtual tour stage intact.

### 2.8 `/about` — Our Care Philosophy, Care Team & Daly City Setting
- **Issue:** Uses inline `style={{ zoom: fontScale }}` and displays `Page 07 · Community Identity, Care Stewardship & Peninsula Setting` in the hero kicker.
- **Impact:** Medium.
- **Priority:** P1 (Font Scale) / P2 (Editorial Kicker).
- **Recommended Correction:** Remove `style={{ zoom: fontScale }}` and refine the hero kicker to `Community Monograph · Care Stewardship & Peninsula Setting`.

### 2.9 `/financial-planning` — Cost Drivers, Consolidated Value & Blank Paper-Ledger
- **Issue:**
  1. Uses inline `style={{ zoom: fontScale }}` and `Page 08` kicker label.
  2. First-screen visual repetition: The right-hand `.herbarium-mount` hero card on `/financial-planning` and `/for-families` share the exact same layout (header + `h-44 sm:h-52` photo + 4-item Roman numeral `I.–IV.` jump list).
- **Impact:** Medium-High — makes `/financial-planning` and `/for-families` look like clones on first screen.
- **Priority:** P1 (Font Scale) / P2 (First-Screen Variety).
- **Recommended Correction:** Remove `style={{ zoom: fontScale }}`, replace `Page 08` kicker, and restyle the right-hand hero folio on `/financial-planning` into an **Archival Paper-Ledger Preview Folio** (featuring a botanical arch top image aperture + a live 3-line preview of the blank Paper-Ledger Worksheet with a direct "Jump to Interactive Paper Ledger ↓" action) so it visually previews the financial worksheet and differs clearly from `/for-families`.

### 2.10 `/for-families` — Family Decision Guide, Tour Question Notebook & Grouped FAQs
- **Issue:**
  1. Uses inline `style={{ zoom: fontScale }}` and `Page 09` kicker label.
  2. The page has three rich interactive sections (Step 1: Care Decision Guide, Step 2: 8-Question Tour Notebook, Step 3: Grouped Family FAQs), and adding a cohesive 3-Step Family Journey Progress Bar between the hero and Section 2 will clarify how the Decision Guide, Tour Notebook, and Grouped FAQs work together as one guided workflow.
- **Impact:** Medium.
- **Priority:** P1 (Font Scale) / P2 (Interaction Clarity & Flow).
- **Recommended Correction:** Remove `style={{ zoom: fontScale }}`, replace `Page 09` kicker with `Family Guidance Monograph`, and highlight the 3-step progression (`Step 1: Compare Care Paths` → `Step 2: Build Your Tour Notebook` → `Step 3: Browse Grouped FAQs`) with live count indicators (e.g., how many tour questions are currently saved).

### 2.11 `/contact` — Direct Phone, Guided Inquiry Form & Peninsula Directions
- **Issue:**
  1. Uses inline `style={{ zoom: fontScale }}` and `Page 10` kicker label.
  2. Uses `.botanical-arch` on the hero image plate, which was missing from `globals.css`.
  3. First-screen phone number, guided inquiry form anchor, and visit address are strong; adding a direct "Jump to Guided Inquiry Form ↓" button alongside the phone call CTA in the hero makes the conversion hierarchy even clearer on mobile.
- **Impact:** High (missing `.botanical-arch` CSS + fontScale zoom).
- **Priority:** P1 — High.
- **Recommended Correction:** Fix `.botanical-arch` in `globals.css`, remove `style={{ zoom: fontScale }}`, replace `Page 10` kicker with `Direct Community Desk & Arrival Guide`, and ensure the phone number, inquiry form, and visit address remain the immediate top priorities.

### 2.12 `/living-options` — Living Options Overview & Comparison Hub
- **Issue:**
  1. Uses inline `style={{ zoom: fontScale }}` and `Page 11 · Living Options Monograph` kicker.
  2. Section 2 contains both full deep-dive program cards (`Part A`), a 6-dimension comparison ledger (`Part B`), and a family situation matcher (`Part C`). Because `/memory-care` and `/respite-care` already provide the deep-dive program monographs, `Part A` can be made more concise and comparison-oriented so `/living-options` acts primarily as an overview and routing hub rather than duplicating the individual care pages.
- **Impact:** Medium — tightens vertical pacing and reinforces `/living-options` as a routing hub.
- **Priority:** P1 (Font Scale) / P2 (Pacing & Routing Hub Clarity).
- **Recommended Correction:** Remove `style={{ zoom: fontScale }}`, replace `Page 11` kicker with `Living Options Overview & Routing Hub`, and add a prominent Quick Program Routing Bar at the top of Section 2 so families can either jump straight to `/memory-care`, `/respite-care`, or `/suites-and-floor-plans`, or compare them in the 6-dimension ledger below.

### 2.13 `/resources` — Family Reference Library, Brochure Packet & Blog Status
- **Issue:** Uses inline `style={{ zoom: fontScale }}` and `Page 12 · Family Reference Library` kicker.
- **Impact:** Medium.
- **Priority:** P1 (Font Scale) / P2 (Editorial Kicker).
- **Recommended Correction:** Remove `style={{ zoom: fontScale }}` and replace `Page 12` kicker with `Family Reference Library · Guides, Brochure & Archive Status`.
