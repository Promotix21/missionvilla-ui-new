# Mission Villa — Design Status
Design baseline: V3 homepage retained as visual foundation; logo/images may need final updates.
Repository: https://github.com/Promotix21/missionvilla-ui-new
Current app/branch/commit: Google AI Studio App Router workspace (Next.js 15 / React 19)
Last update: 2026-11-03

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
| /financial-planning | Financial Planning | not started | |
| /for-families | Family FAQs | not started | |
| /contact | Contact | not started | |
| /living-options | Living Options Overview | not started | |
| /resources | Resources | not started | optional |
| /blog | Blog | not started | inventory pending |

Latest completed design task: Built Page 07 About Us (`/about`) featuring a mission-led first-screen hero with an arched portrait study and Daly City / San Bruno Mountain context, an interactive 4-chapter Care Philosophy editorial narrative, a filterable Local Geography & Peninsula Access showcase (`Natural Surroundings`, `Family Access`, `Peninsula Amenities`, `Scenic Outings`), a 4-pillar Core Values & Community Activities ledger, an honest Care Team Stewardship section (`Awaiting Official Team Bios & Portraits`), a conditional Pet-Friendly Policy disclosure (`CLIENT CONFIRMATION REQUIRED`), and shared navigation updates across header, mobile drawer, and footer.
Files changed in latest session:
- `/app/about/page.tsx`
- `/lib/mission-villa-data.ts`
- `/lib/mission-villa-data.test.ts`
- `/components/HeaderAndUtilityBar.tsx`
- `/components/VisitAndFooterSection.tsx`
- `/MISSION_VILLA_PAGE_STATUS.md`

Known issues/assets needed:
- Official Mission Villa leadership and care team biographies and portraits needed if a named staff portrait grid is desired on `/about` (currently displaying an honest 4-department Care Team Stewardship overview marked `Awaiting Official Team Bios & Portraits` with zero fabricated names or stock avatars).
- Official Mission Villa exterior and neighborhood photography near 995 East Market Street / San Bruno Mountain needed to replace illustrative stock placeholder plates (`ILLUSTRATIVE — REPLACE BEFORE LAUNCH`) on `/about` and prior pages.
- Official 360° / Virtual Tour iframe embed URL from `https://missionvillaseniorliving.com/gallery/` needed to wire into the dedicated 16:9 embed mount on `/gallery#virtual-tour`.
- Official architectural floor-plan diagrams needed for **Companion Unit**, **Jack & Jill**, and **Private Suite** formats on `/suites-and-floor-plans` and `/memory-care` (currently displaying `Awaiting official floor plan` placeholder).
- Official high-resolution Mission Villa vector logo asset confirmation.

Client confirmations needed (`CLIENT CONFIRMATION REQUIRED`):
- Confirm current **pet-friendly policy and restrictions** referenced on the original About Us page: whether residents may bring a small pet (and what care/size/breed rules apply) versus visiting family pets on a leash during courtyard or lounge visits.
- Confirm whether official leadership/team member bios and photographs will be supplied for `/about`.
- Confirm the active official 360° / virtual-tour iframe embed URL from `https://missionvillaseniorliving.com/gallery/` and whether real-time video walkthroughs (FaceTime / Zoom) are offered upon family request.
- Confirm final approved gallery photo inventory across all 5 categories (`Rooms`, `Dining`, `Common Areas`, `Outdoor Spaces`, `Activities`) so categories match the exact client-supplied photo set before launch.
- Confirm per-unit availability of original-site apartment features across **Companion Unit**, **Jack & Jill**, and **Private Suite** formats: individual **thermostat** control, included **utilities**, **emergency alert** hardware, and whether **Wi-Fi** extends inside resident suites in addition to common spaces.
- Confirm which original-site services and amenities are included in base Memory Care / Respite Care rates versus offered at an additional fee (specifically **on-site salon/spa** services and **scheduled transportation**).
- Confirm specific **dietary accommodations** and advance reservation policies for **private dining**.
- Confirm whether alternate phone `(650) 534-2859` from legacy Contact page should appear anywhere, or strictly `650-756-1995`.

Next recommended page: Page 08 — Financial Planning (`/financial-planning`)
