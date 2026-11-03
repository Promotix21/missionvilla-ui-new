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
| /suites-and-floor-plans | Suites & Floor Plans | not started | |
| /gallery | Gallery | not started | |
| /about | About Us | not started | |
| /financial-planning | Financial Planning | not started | |
| /for-families | Family FAQs | not started | |
| /contact | Contact | not started | |
| /living-options | Living Options Overview | not started | |
| /resources | Resources | not started | optional |
| /blog | Blog | not started | inventory pending |

Latest completed design task: Built Page 04 Services & Amenities (`/services-and-amenities`) with a distinct deep-plum architectural triptych hero and integrated live search/category command dock, a non-generic 5-category switcher (`Support`, `Dining`, `Lifestyle`, `Community Spaces`, `Convenience`) paired with a synchronized left-column editorial photo stage and a hairline-divided archival ledger of 18 original-site services and amenities, a panoramic photographic feature diptych, an interactive "Ask Us About..." disclosure and tour question builder, and related Memory Care & Respite Care pathways.
Files changed in latest session:
- `/app/services-and-amenities/page.tsx`
- `/lib/mission-villa-data.ts`
- `/lib/mission-villa-data.test.ts`
- `/components/HeaderAndUtilityBar.tsx`
- `/components/VisitAndFooterSection.tsx`
- `/app/life-at-mission-villa/page.tsx`
- `/MISSION_VILLA_PAGE_STATUS.md`

Known issues/assets needed:
- Official Mission Villa facility photography needed to replace illustrative stock placeholders (`ILLUSTRATIVE — REPLACE BEFORE LAUNCH`) on `/`, `/memory-care`, `/respite-care`, `/life-at-mission-villa`, and `/services-and-amenities` (specifically full-table dining service, private dining room, salon/spa space, library nook, enclosed garden courtyard, and outdoor patio).
- Official architectural floor-plan diagrams needed for **Companion Unit**, **Jack & Jill**, and **Private Suite** formats ahead of Page 05 (`/suites-and-floor-plans`).
- Official high-resolution Mission Villa vector logo asset confirmation.

Client confirmations needed (`CLIENT CONFIRMATION REQUIRED`):
- Confirm which original-site services and amenities are included in base Memory Care / Respite Care rates versus offered at an additional fee (specifically **on-site salon/spa** services and **scheduled transportation**).
- Confirm specific **mobility / transfer assistance** eligibility criteria under CA RCFE License `#415601046` and cadence of **routine assessments**.
- Confirm specific **dietary accommodations** (e.g., therapeutic or texture-modified diets) and advance reservation policies for **private dining**.
- Confirm **personal laundry** frequency, garment-labeling guidelines, **concierge** hours, and whether **Wi-Fi** extends into private/shared suites in addition to common spaces.
- Confirm active **volunteer programs** and current monthly schedules for **scenic drives** and **live entertainment**.
- Confirm whether alternate phone `(650) 534-2859` from legacy Contact page should appear anywhere, or strictly `650-756-1995`.

Next recommended page: Page 05 — Suites & Floor Plans (`/suites-and-floor-plans`)
