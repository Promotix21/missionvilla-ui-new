# Mission Villa Senior Living — Local Development Handoff Guide (Claude Opus)

**Community:** Mission Villa Senior Living  
**Address:** 995 East Market Street, Daly City, CA 94014  
**Phone:** (650) 756-1995 (`tel:16507561995`)  
**Email:** `mktg.missionvilla@missionvillaseniorliving.com` (`mailto:mktg.missionvilla@missionvillaseniorliving.com`)  
**License:** California RCFE License `#415601046`  
**Core Programs:** Legacies™ Memory Care & Short-Term Respite Care  

---

## 1. Implemented Routes

All 12 core blueprint routes (plus `/resources` as the Family Reference Library & Blog Status route) are implemented in the Next.js 15 App Router (`/app`):

| Route | File Path | Role in Website Architecture | Current Status |
| :--- | :--- | :--- | :--- |
| `/` | `/app/page.tsx` | V3 Homepage with French conservatory shutter intro (`ConservatoryShutters.tsx`), hero stage, care options overview, Legacies™ approach, suite formats preview, and visit inquiry section | **Design foundation accepted** |
| `/memory-care` | `/app/memory-care/page.tsx` | Full-time Legacies™ Memory Care monograph, 3-scene storyboard, 6 support pillars, suite formats, tour checklist, and Memory Care FAQs | **Draft-for-review** |
| `/respite-care` | `/app/respite-care/page.tsx` | Short-term Respite Care stays, 4 family caregiver scenarios, 6 hospitality tiles, 3 stay chapters, 5-step example stay timeline, and Respite FAQs | **Draft-for-review** |
| `/life-at-mission-villa` | `/app/life-at-mission-villa/page.tsx` | Daily culture monograph, 4 photo-led lifestyle chapters, curated day-in-the-life rhythm, horizontal 5-plate editorial filmstrip, and services bridge | **Draft-for-review** |
| `/services-and-amenities` | `/app/services-and-amenities/page.tsx` | Deep-plum architectural hero, filterable 18-item Services vs. Amenities explorer across 5 blueprint categories, "Ask Us About" eligibility checklist, and FAQs | **Draft-for-review** |
| `/suites-and-floor-plans` | `/app/suites-and-floor-plans/page.tsx` | Named Private, Shared (Companion Unit), and Jack & Jill suite format viewer, honest floor-plan placeholders, interactive comparison table, and 6-plate suite gallery with lightbox | **Draft-for-review** |
| `/gallery` | `/app/gallery/page.tsx` | 4-frame hero contact sheet, 10-plate masonry photo gallery across 5 categories, keyboard-accessible modal lightbox, and 5-stop interactive Virtual Tour placeholder stage | **Draft-for-review** |
| `/about` | `/app/about/page.tsx` | Founding care philosophy, Daly City & San Bruno Mountain geographic explorer, 6 core values, care team stewardship roles, and conditional pet policy notice | **Draft-for-review** |
| `/financial-planning` | `/app/financial-planning/page.tsx` | Ruled archival Paper-Ledger preview hero, 4 cost drivers, checkable monthly inclusions, editable blank Paper-Ledger Worksheet (zero pre-filled numbers), and 4 planning pathways | **Draft-for-review** |
| `/for-families` | `/app/for-families/page.tsx` | Non-clinical Family Decision Guide (Memory Care vs. Respite Care), 8-question interactive Tour Question Notebook, 3 family transition chapters, and 12 grouped FAQs (`Care`, `Suites`, `Cost`, `Visits`) | **Draft-for-review** |
| `/contact` | `/app/contact/page.tsx` | Direct community phone & hospitality desk hero, guided 6-step prototype inquiry form (`Demo only — no inquiry sent`), Peninsula directions & Google Maps switcher, 4-step post-submission workflow preview, and referral pathways | **Draft-for-review** |
| `/living-options` | `/app/living-options/page.tsx` | Dual-aperture Living Options comparison & routing hub, 6-dimension side-by-side ledger (Memory Care vs. Respite Care), non-clinical scenario matcher, and suite highlights | **Draft-for-review** |
| `/resources` | `/app/resources/page.tsx` | Family Reference Library desk, custom Visit Resource Packet builder, official brochure PDF placeholder, 4-stage original blog inventory status ledger, and resource FAQs | **Draft-for-review** |

---

## 2. Design System Summary

- **Aesthetic Direction:** Pacifica Conservatory & Editorial Monograph (warm residential hospitality paired with botanical and archival craftsmanship).
- **Color Palette (`/app/globals.css`):**
  - Warm Alabaster Cream (`#F7F4ED`) & Pressed Linen (`#FCFBF8`) primary backgrounds
  - Deep Plum (`#3B2348`) & Deepest Aubergine (`#22122B`) architectural anchors and primary headings
  - Terracotta Clay (`#C98268` / `#A65D43`) warm accents and secondary interactive highlights
  - Eucalyptus Sage (`#8FAF78` / `#5F7F49`) botanical badges and verification markers
  - Warm Champagne (`#D8C7A5`) hairlines, rules, and card borders
  - Warm Charcoal (`#29272B`) body copy
- **Typography (`/app/layout.tsx` & `/app/globals.css`):**
  - Display & Editorial Headings: `Cormorant Garamond` (`--font-serif`)
  - Body & UI Controls: `Plus Jakarta Sans` (`--font-sans`)
  - Calligraphic Accents: `Satisfy` (`--font-script`)
  - Accessibility Scaling: Root `--font-scale` CSS custom property controlled via `HeaderAndUtilityBar.tsx` (`A` = `1`, `A+` = `1.08`, `A++` = `1.15`).
- **Signature Visual Motifs:**
  - `.arch-portal` / `.botanical-arch`: Rounded botanical arch image masks (`border-radius: 260px 260px 24px 24px`).
  - `.cutout-tl-cream`, `.cutout-br-cream`, `.cutout-br-plum`: Inverted-radius corner badges over photography.
  - `.herbarium-mount`: Double-ruled archival specimen cards with subtle inner champagne border (`::before`).

---

## 3. Shared Components & Data Files

- **`/lib/mission-villa-data.ts`:** Single source of truth for all verified business facts (`MISSION_VILLA_FACTS`), page content collections, and pure filtering/validation helper functions (`validateVisitInquiry`, `validateContactPageInquiry`, `parseBlankLedgerAmount`, `calculatePaperLedgerSummary`, `filterServicesAndAmenities`, `filterGalleryPlates`, `filterForFamiliesFaqs`, `filterLivingOptionsComparisonRows`, `filterResourceLibraryItems`, etc.).
- **`/lib/mission-villa-data.test.ts`:** 15-subtest Node test suite (`npx --yes tsx --test lib/mission-villa-data.test.ts`) verifying all pure functions, data integrity, and anti-fabrication guardrails.
- **`/components/HeaderAndUtilityBar.tsx`:** Shared top utility bar (address, RCFE license, `Replay Intro` button on `/`, `A / A+ / A++` text comfort controls, direct phone link) and sticky navigation header with desktop dropdowns (`Living Options`, `Community Life`, `Resources & Planning`), active route states, and mobile drawer.
- **`/components/VisitAndFooterSection.tsx`:** Shared bottom conversion section (`#schedule-visit`) with prototype inquiry form (`Demo only — no inquiry sent`) and full architectural footer with verified NAP (Name, Address, Phone), license `#415601046`, and route directory. Supports `hideVisitSection={true}` on `/contact` where the primary guided inquiry studio is already in the main body.
- **`/components/ConservatoryShutters.tsx`:** Homepage-exclusive GSAP 3D louvered French conservatory shutter intro with custom SVG botanical inlays, `sessionStorage` tracking, `prefers-reduced-motion` compliance, and `Replay Intro` trigger.

---

## 4. Interactive Modules by Page

- **`/` (Homepage):** 3D louvered conservatory shutter intro + `Replay Intro`; interactive Care Options switcher; interactive Legacies™ & Daily Life tabs; Suite format selector; `#schedule-visit` prototype form.
- **`/memory-care`:** 3-scene Legacies™ storyboard switcher; 3-format Suite viewer; interactive 5-item Tour Checklist; category-filtered FAQ accordion.
- **`/respite-care`:** 4-scenario Family Caregiver selector with Prev/Next controls; 5-step Example Stay Timeline with horizontal mobile snap track and Prev/Next step buttons; category-filtered FAQ accordion.
- **`/life-at-mission-villa`:** 4-chapter Daily Culture switcher; 4-period "A Day at Mission Villa" schedule viewer; horizontal 5-plate Editorial Gallery filmstrip with Prev/Next plate controls and active spotlight reader.
- **`/services-and-amenities`:** 5-category + `Services vs. Amenities` segmented explorer with live keyword search and "Save to Inquiry" bookmarking that pre-fills `#schedule-visit`.
- **`/suites-and-floor-plans`:** 3-format Suite & Floor-Plan viewer (`Private`, `Companion Unit`, `Jack & Jill`) with sub-tab details; category-filtered comparison ledger; 6-plate Suite Gallery with modal lightbox.
- **`/gallery`:** 5-category + search masonry photo gallery (10 plates); keyboard-accessible modal lightbox (`ArrowLeft`, `ArrowRight`, `Escape`); 5-stop interactive Virtual Tour stage with `Request Guided Virtual Walkthrough` prefill.
- **`/about`:** 4-chapter Philosophy explorer; Daly City & San Bruno Mountain neighborhood landmark switcher; interactive Care Team role explorer; conditional pet policy notice.
- **`/financial-planning`:** 4 Cost Drivers inspector; checkable "What May Be Included" checklist across 4 categories; editable 7-line Blank Paper-Ledger Worksheet (`worksheet` vs `checklist-only` modes) with live user-entered subtotal and inquiry attachment; 4 planning pathways.
- **`/for-families`:** 4-pathway non-clinical Family Decision Guide + 5-dimension comparison ledger; 8-question interactive Tour Question Notebook with custom family note input; 3-chapter Family Involvement showcase; 12-item grouped FAQ explorer (`Care`, `Suites`, `Cost`, `Visits`) with search and expand/collapse all.
- **`/contact`:** Quick-preset intent buttons; 6-step Guided Prototype Inquiry Form with local validation (`validateContactPageInquiry`); Peninsula Directions corridor switcher + Editorial Card / Live Google Map iframe toggle; 4-step "What Happens Next" preview; Family/Friend vs. Professional Referral switcher.
- **`/living-options`:** Program spotlight filter (`Compare Both`, `Memory Care`, `Respite Care`); 6-dimension side-by-side comparison ledger with `Highlight Key Distinctions Only` toggle; non-clinical family situation matcher; suite format highlights.
- **`/resources`:** 6-folio searchable Family Resource Desk; interactive 5-item Visit Resource Packet Builder; 4-stage Blog Inventory & Verification status viewer.

---

## 5. Content Items Requiring Client Confirmation (`CLIENT CONFIRMATION REQUIRED`)

Before production launch, confirm the following policies and legacy-site mentions with Mission Villa Senior Living leadership:

1. **Suite & Amenity Per-Unit Applicability (`/services-and-amenities`, `/suites-and-floor-plans`):**
   - Confirm which specific suites include kitchenettes, patio/courtyard access, and cable/Wi-Fi inclusions versus optional add-ons.
2. **Scheduled Transportation Scope (`/services-and-amenities`, `/about`):**
   - Confirm radius, scheduling notice, and whether medical appointment transportation is included or arranged separately.
3. **Conditional Pet Policy (`/about`, `/services-and-amenities`):**
   - Legacy site mentions *"Small Pets Allowed"* alongside *"Pets Are Not Allowed"*. Currently presented transparently as `CLIENT CONFIRMATION REQUIRED` (confirm whether visiting family pets or small companion animals are permitted under specific conditions).
4. **Referral Credit & Financial Assistance Mentions (`/financial-planning`, `/contact`):**
   - Legacy pages mention a *"friend referral credit towards rent"* and *"State Financial Assistance"*. Currently labeled `CLIENT CONFIRMATION REQUIRED` so no unverified dollar amounts or government program promises are made.
5. **Visiting Hours & Front-Desk Reception Windows (`/contact`, `/for-families`):**
   - Confirm exact daily front-desk reception hours and recommended tour windows at 995 East Market Street.
6. **Extant Blog Article Inventory (`/resources`):**
   - Audit any historical blog posts from `missionvillaseniorliving.com` that the client wishes to migrate before activating a live `/blog` feed.

---

## 6. Assets to Replace Before Production

All temporary visual and document placeholders are explicitly badged in the UI and centralized in `/lib/mission-villa-data.ts`:

1. **Photography (`ILLUSTRATIVE — REPLACE BEFORE LAUNCH`):**
   - Replace Unsplash illustrative residential/conservatory URLs in `/lib/mission-villa-data.ts` and hero sections with authentic photography of Mission Villa Senior Living at 995 East Market Street (exterior arrival, parlor, dining room, enclosed courtyard, Legacies™ activity spaces, and actual suites).
2. **Architectural Floor Plans (`Awaiting official floor plan`):**
   - Replace the floor-plan placeholder cards on `/suites-and-floor-plans` and `/living-options` with client-supplied architectural diagrams and verified dimensions for the Private Suite, Shared Companion Unit, and Jack & Jill formats.
3. **360° Virtual Tour Media (`Awaiting official virtual tour`):**
   - Connect the 5-stop Virtual Tour stage on `/gallery` (`#virtual-tour`) to the official Matterport/360° embed URL or narrated video walkthrough once captured.
4. **Downloadable Community Brochure PDF (`Awaiting official brochure`):**
   - Connect the brochure slot on `/resources` (`#brochure-and-packet`) to the official client-approved PDF brochure and floor-plan inserts.

---

## 7. Features Intentionally Left in Demo Mode

- **Guided Inquiry & Visit Scheduling Forms (`Demo only — no inquiry sent`):**
  - Both the shared `#schedule-visit` form in `/components/VisitAndFooterSection.tsx` and the dedicated 6-step form on `/contact` (`/app/contact/page.tsx`) perform client-side validation and render an immediate in-page preview summary without transmitting personal data over the network.
  - Both forms explicitly instruct families not to enter sensitive medical diagnoses or protected health information (PHI).

---

## 8. Recommended Next Engineering Steps in Claude Opus

1. **Backend Form Handling & CRM Integration:**
   - Wire `VisitAndFooterSection.tsx` and `/app/contact/page.tsx` to a secure server action or `/api/inquiries` endpoint (e.g., Postmark/Resend email notification to `info@missionvillasl.com` + senior-living CRM webhook) with rate limiting, CSRF protection, and finalized legal/privacy consent copy.
2. **Real Photography Replacement & Next/Image Optimization:**
   - Drop approved community photography into `/public/images/mission-villa/`, update image paths in `/lib/mission-villa-data.ts`, remove `ILLUSTRATIVE — REPLACE BEFORE LAUNCH` badges as each real photo is verified, and convert `<img>` tags to optimized Next.js `<Image>` components.
3. **Real Floor-Plan & Brochure Asset Integration:**
   - Add official SVG/PDF floor plans and the community brochure PDF to `/public/documents/`, and wire them into `/suites-and-floor-plans` and `/resources`.
4. **Per-Route SEO Metadata & Structured Data (`JSON-LD`):**
   - Add route-specific `metadata` exports (`title`, `description`, `openGraph`, canonical URLs) via server layout/page wrappers and `SeniorCare` / `LocalBusiness` Schema.org JSON-LD grounded in `MISSION_VILLA_FACTS`.
5. **Accessibility & Cross-Device QA:**
   - Run automated axe-core / Lighthouse accessibility audits across all 13 routes, verify keyboard focus trapping and screen-reader announcements in the Gallery lightbox and mobile menu, and test with real senior users at `A+` and `A++` font scales.
6. **Production Build & Deployment Preparation:**
   - Configure environment variables, analytics/call-tracking if requested by the client, and verify clean production builds (`npm run build && npm run start`).
