# Mission Villa — Design Status
Design baseline: V3 homepage retained as visual foundation; logo/images may need final updates.
Repository: https://github.com/Promotix21/missionvilla-ui-new
Current app/branch/commit: Google AI Studio App Router workspace (Next.js 15 / React 19)
Last update: 2026-11-04

| Route | Page | Status | Notes |
|---|---|---|---|
| / | V3 Home | design foundation accepted | Preserved intact with French conservatory shutters & replay intro |
| /memory-care | Memory Care | draft-for-review | Page 01 complete; Legacies™, 3-scene storyboard, suite formats, FAQs |
| /respite-care | Respite Care | draft-for-review | Page 02 complete; 4 scenarios, 6 editorial service tiles, 3 stay chapters, 5-step example timeline, FAQs |
| /life-at-mission-villa | Life at Mission Villa | draft-for-review | Page 03 complete; lifestyle hero, 4 oversized alternating story chapters, curated day illustration, horizontal editorial gallery band, services & care bridge |
| /services-and-amenities | Services & Amenities | draft-for-review | Page 04 complete; deep-plum architectural triptych hero + live command bar, 5-category switcher + synchronized editorial photo pairing, hairline spec ledger (18 offerings), panoramic photographic feature, interactive "Ask Us About..." disclosure builder, Memory Care & Respite Care bridge |
| /suites-and-floor-plans | Suites & Floor Plans | draft-for-review | Page 05 complete; warm alabaster residential monograph hero, filterable accommodation photo story with real image lightbox, honest Floor-Plan Format Viewer (`Companion Unit`, `Jack & Jill`, `Private Suite`) displaying `Awaiting official floor plan` with zero fake CAD lines or invented sq. ft., interactive "What to Expect in a Suite" ledger, 3-touchpoint suite personalization guide, and related community spaces bridge |
| /gallery | Gallery | draft-for-review | Page 06 complete; curatorial exhibition folio & 3-plate aperture hero, category-based full-width editorial masonry (`Rooms`, `Dining`, `Common Areas`, `Outdoor Spaces`, `Activities`) with alternating aspect ratios + Contact Sheet Index toggle, photo-caption system, keyboard-accessible fullscreen lightbox (`ESC`, `←`, `→`), dedicated Virtual Tour Stage (4-stop guided spatial walkthrough + honest Official 360° Embed Mount awaiting verified client URL), and direct visit CTA |
| /about | About Us | draft-for-review | Page 07 complete; mission-led portrait & botanical arch hero, interactive 4-chapter Care Philosophy monograph, filterable Daly City & San Bruno Mountain Local Geography narrative, 4 Core Values & Daily Activities ledger, honest 24-Hour Care Team Stewardship (zero fake bios/portraits; awaiting official team assets), conditional Pet-Friendly Policy disclosure (`CLIENT CONFIRMATION REQUIRED`), and team conversation CTA |
| /financial-planning | Financial Planning | draft-for-review | Page 08 complete; compassionate archival hero, interactive 4-Factor cost explainer, filterable 10-item "What May Be Included" checklist, tactile Paper-Ledger Expense Comparison Worksheet with editable blank fields (`""` default — zero pre-filled fake numbers or counterfeit savings calculators) + Text-Only Checklist toggle, 4 Ways to Plan & Questions to Ask (including Long-Term Care Insurance & `CLIENT CONFIRMATION REQUIRED` disclosures for legacy referral credit and state assistance mentions), and 6 Financial Planning FAQs |
| /for-families | Family FAQs | draft-for-review | Page 09 complete; empathetic Family Companion Folio hero, interactive 4-Pathway Family-Decision Guide (Memory Care vs. Respite Care) + 5-dimension side-by-side comparison ledger (strictly non-clinical: no diagnosis tool, risk scoring, or implied medical advice), interactive 8-item "Questions to Bring to a Visit" tour notebook with 1-click inquiry form attachment, 4-chapter Family Involvement & Suite Personalization storyboard, 12-item Grouped FAQ Accordion (`Care`, `Suites`, `Cost`, `Visits`) with live search and category filtering, and contextual bridge to `/financial-planning` and `#schedule-visit` |
| /contact | Contact | draft-for-review | Page 10 complete; Direct Hospitality & Botanical Arch hero with verified phone (`650-756-1995`), email (`mktg.missionvilla@missionvillaseniorliving.com`), address (`995 East Market Street, Daly City, CA 94014`), and CA License `#415601046`; Split Editorial Contact Studio & Guided Inquiry / Request-Visit Prototype Form (`#schedule-visit`) with local client-side validation, consent checkbox, zero medical/health history fields, and explicit `Demo only — no inquiry sent` preview state; Grounded Map & Peninsula Directions explorer (`I-280`, `San Francisco`, `BART/SamTrans`, `On-Site Parking & Accessibility`) with editorial orientation & live map embed toggle; 4-step "What Happens After Submitting (Once Live Backend Is Connected)" explorer; Optional Referral Interest switcher (`CLIENT CONFIRMATION REQUIRED`); and searchable Contact & Accessibility FAQs |
| /living-options | Living Options Overview | draft-for-review | Page 11 complete; Dual-Aperture Care Monograph hero comparing Memory Care (Legacies™ Program) and Short-Term Respite Care (explicitly confirming no standalone Independent or Assisted Living tiers); Interactive Care Distinction Studio with program spotlight filters, 6-Dimension Side-by-Side Comparison Ledger, and non-clinical Family Situation Reflection matcher; Interactive 3-Format Accommodation Highlights (`Private Suite`, `Companion Unit`, `Jack & Jill`) with private bathroom details and honest `Awaiting official floor plan` status; 6-destination Detailed Services & Planning Route Directory; searchable/filterable Living Options FAQs; and wired `#schedule-visit` inquiry form |
| /resources | Resources Overview | draft-for-review | Page 12 complete; Archival Reading Room & 4-Folio Catalogue hero (`/financial-planning`, `/for-families`, Community Brochure placeholder, and Blog Inventory Status); Interactive Family Resource Desk with category switcher, live search, and synchronized Folio Spotlight Reader (`ILLUSTRATIVE — REPLACE BEFORE LAUNCH`); Community Brochure Placeholder Vault (`Awaiting Official Brochure PDF & Floor-Plan Inserts`) + interactive 5-item "Assemble Your Family Resource Packet" builder with 1-click inquiry form attachment; transparent 4-Stage Blog Inventory & Migration Ledger confirming zero fabricated blog articles, authors, or publication dates + 4-card Verified Topic Router; searchable Resources & Brochure FAQs; and shared header dropdown, mobile drawer, and footer links |
| /blog | Blog | not started | inventory pending (tracked transparently on `/resources#blog-inventory-status` — awaiting client export & audit of extant articles from `https://missionvillaseniorliving.com/`) |

Latest completed design task: Completed final sitewide design and UX refinement pass prior to local handoff (`MISSION_VILLA_DESIGN_REFINEMENT_AUDIT.md` and `MISSION_VILLA_LOCAL_HANDOFF.md`), unifying root `--font-scale` text-comfort scaling across all routes via `HeaderAndUtilityBar.tsx`, adding `.botanical-arch` in `app/globals.css`, replacing developer session tags (`Page 01`–`Page 12`) in the mobile drawer and page kickers with warm editorial monograph titles, differentiating the `/financial-planning` hero right-hand folio into a Ruled Archival Paper-Ledger Preview Folio, converting the `/life-at-mission-villa` 5-plate gallery band into a horizontal snap carousel with Prev/Next controls across mobile and desktop, and improving mobile step/section navigation on `/respite-care` and `/memory-care`. All internal pages remain `draft-for-review` (`/` remains `design foundation accepted`).
Files changed in latest session:
- `/MISSION_VILLA_DESIGN_REFINEMENT_AUDIT.md`
- `/MISSION_VILLA_LOCAL_HANDOFF.md`
- `/MISSION_VILLA_PAGE_STATUS.md`
- `/app/globals.css`
- `/components/HeaderAndUtilityBar.tsx`
- `/components/VisitAndFooterSection.tsx`
- `/components/ConservatoryShutters.tsx`
- `/hooks/use-mobile.ts`
- `/app/memory-care/page.tsx`
- `/app/respite-care/page.tsx`
- `/app/life-at-mission-villa/page.tsx`
- `/app/suites-and-floor-plans/page.tsx`
- `/app/gallery/page.tsx`
- `/app/about/page.tsx`
- `/app/financial-planning/page.tsx`
- `/app/for-families/page.tsx`
- `/app/contact/page.tsx`
- `/app/living-options/page.tsx`
- `/app/resources/page.tsx`

Known issues/assets needed:
- Official downloadable Mission Villa Community Brochure PDF and printable floor-plan insert files needed for `/resources#brochure-and-packet` (currently displaying `Awaiting Official Mission Villa Brochure PDF & Floor-Plan Inserts` placeholder).
- Official export/inventory of extant blog articles from `https://missionvillaseniorliving.com/` needed before activating a standalone `/blog` index or article pages (currently documented transparently at `/resources#blog-inventory-status` with zero fabricated posts, authors, or dates).
- Official Mission Villa residential suite, lounge, and care photography needed to replace the illustrative placeholder plates (`ILLUSTRATIVE — REPLACE BEFORE LAUNCH`) on `/resources`, `/living-options`, and prior interior pages.
- Official architectural floor-plan diagrams needed for **Companion Unit**, **Jack & Jill**, and **Private Suite** formats on `/living-options`, `/suites-and-floor-plans`, and `/memory-care` (currently displaying `Awaiting official floor plan` placeholder).
- Official Mission Villa leadership and care team biographies and portraits needed if a named staff portrait grid is desired on `/about` (currently displaying an honest 4-department Care Team Stewardship overview marked `Awaiting Official Team Bios & Portraits`).
- Official 360° / Virtual Tour iframe embed URL from `https://missionvillaseniorliving.com/gallery/` needed to wire into the dedicated 16:9 embed mount on `/gallery#virtual-tour`.
- Official high-resolution Mission Villa vector logo asset confirmation.

Client confirmations needed (`CLIENT CONFIRMATION REQUIRED`):
- Confirm final approved downloadable Community Brochure PDF and print collateral packet items referenced on `/resources`.
- Inventory and approve which extant blog articles from `https://missionvillaseniorliving.com/` should be migrated to `/blog`, and confirm author attribution and publication dates after clinical/business-fact review.
- Confirm current short-term **Respite Care** stay duration ranges, minimum stay terms, and furnished suite availability referenced on `/resources`, `/living-options`, `/respite-care`, and `/for-families`.
- Confirm per-unit feature applicability and furniture personalization guidelines across **Private Suite**, **Companion Unit**, and **Jack & Jill** formats.
- Confirm whether secondary telephone number `(650) 534-2859` from the legacy Contact Us page remains active for specific or partner inquiries, or if `650-756-1995` should be the sole published phone number at launch.
- Confirm final legal/privacy consent wording for the `/contact#schedule-visit` inquiry form prior to connecting production CRM/email services.
- Confirm specific visitor parking stall locations, drop-off zone instructions, and arrival door/intercom procedures at `995 East Market Street, Daly City, CA 94014`.
- Confirm whether the **resident referral credit** and **professional referral intake protocol** mentioned on the legacy Contact Us and Financial Planning pages are currently active, and what specific eligibility terms apply before launch.
- Confirm current one-time community/move-in fee structure and which specific services (such as **on-site salon/spa**, **in-suite Wi-Fi/cable**, or **scheduled transportation**) are included in base monthly rates versus billed separately.
- Confirm current **pet-friendly policy and restrictions** referenced on the original About Us page.
- Confirm whether official leadership/team member bios and photographs will be supplied for `/about`.
- Confirm the active official 360° / virtual-tour iframe embed URL from `https://missionvillaseniorliving.com/gallery/` and whether real-time video walkthroughs (FaceTime / Zoom) are offered upon family request.
- Confirm final approved gallery photo inventory across all 5 categories (`Rooms`, `Dining`, `Common Areas`, `Outdoor Spaces`, `Activities`).
- Confirm specific **dietary accommodations** and advance reservation policies for **private dining**.

Next recommended page: Global editorial/brand review pass across `/` and Pages 01–12, or `/blog` scaffolding ONLY after actual original-site blog article inventory is supplied and approved by the user.
