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
| /resources | Resources | not started | optional |
| /blog | Blog | not started | inventory pending |

Latest completed design task: Built Page 11 Living Options Overview (`/living-options`) featuring a Dual-Aperture Care Monograph hero comparing Mission Villa’s two dedicated offerings—Memory Care (Legacies™ Program) and Short-Term Respite Care—an Interactive Care Distinction Studio with a 6-Dimension Side-by-Side Comparison Ledger and non-clinical Family Situation Reflection guide, an interactive 3-Format Accommodation Highlights showcase (`Private Suite`, `Companion Unit`, `Jack & Jill` with private bathrooms and honest `Awaiting official floor plan` notices), a 6-destination Detailed Services & Campus Route Directory (`/memory-care`, `/respite-care`, `/suites-and-floor-plans`, `/services-and-amenities`, `/financial-planning`, `/for-families`), searchable Living Options FAQs, and shared header dropdown, mobile drawer, and footer links to `/living-options`.
Files changed in latest session:
- `/app/living-options/page.tsx`
- `/lib/mission-villa-data.ts`
- `/lib/mission-villa-data.test.ts`
- `/components/HeaderAndUtilityBar.tsx`
- `/components/VisitAndFooterSection.tsx`
- `/MISSION_VILLA_PAGE_STATUS.md`

Known issues/assets needed:
- Official Mission Villa residential suite, lounge, and care photography needed to replace the illustrative placeholder plates (`ILLUSTRATIVE — REPLACE BEFORE LAUNCH`) on `/living-options` and prior interior pages.
- Official architectural floor-plan diagrams needed for **Companion Unit**, **Jack & Jill**, and **Private Suite** formats on `/living-options`, `/suites-and-floor-plans`, and `/memory-care` (currently displaying `Awaiting official floor plan` placeholder).
- Official Mission Villa leadership and care team biographies and portraits needed if a named staff portrait grid is desired on `/about` (currently displaying an honest 4-department Care Team Stewardship overview marked `Awaiting Official Team Bios & Portraits`).
- Official 360° / Virtual Tour iframe embed URL from `https://missionvillaseniorliving.com/gallery/` needed to wire into the dedicated 16:9 embed mount on `/gallery#virtual-tour`.
- Official high-resolution Mission Villa vector logo asset confirmation.

Client confirmations needed (`CLIENT CONFIRMATION REQUIRED`):
- Confirm current short-term **Respite Care** stay duration ranges, minimum stay terms, and furnished suite availability referenced on `/living-options`, `/respite-care`, and `/for-families`.
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

Next recommended page: Page 12 — Resources Overview (`/resources`) & Blog Inventory Check (`/blog`), if approved by user, or global editorial/brand review pass across Pages 01–11.
