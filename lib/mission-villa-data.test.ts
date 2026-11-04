import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MISSION_VILLA_FACTS,
  CARE_PROGRAMS,
  CARE_GUIDANCE_SCENARIOS,
  APPROACH_PILLARS,
  DAILY_LIFE_MOMENTS,
  LIVING_SPACE_OPTIONS,
  MEMORY_CARE_STORYBOARD,
  MEMORY_CARE_SUPPORT_COMMITMENTS,
  MEMORY_CARE_SUITE_FORMATS,
  MEMORY_CARE_FAQS,
  RESPITE_SCENARIOS,
  RESPITE_SERVICE_TILES,
  RESPITE_STAY_CHAPTERS,
  RESPITE_TIMELINE_STEPS,
  RESPITE_FAQS,
  LIFESTYLE_STORY_CHAPTERS,
  CURATED_DAY_ILLUSTRATION,
  EDITORIAL_GALLERY_BAND_PLATES,
  LIFESTYLE_SERVICES_PREVIEW,
  SERVICES_AMENITIES_CATEGORIES,
  SERVICES_AND_AMENITIES_ITEMS,
  ASK_US_ABOUT_DISCLOSURES,
  filterServicesAndAmenities,
  SUITE_ACCOMMODATION_GALLERY_PLATES,
  OFFICIAL_FLOOR_PLAN_FORMATS,
  SUITE_WHAT_TO_EXPECT_SPECS,
  SUITE_PERSONALIZATION_TOUCHPOINTS,
  RELATED_COMMUNITY_SPACES_FROM_SUITES,
  filterSuiteGalleryPlates,
  GALLERY_CATEGORY_META,
  GALLERY_PHOTO_PLATES,
  VIRTUAL_TOUR_STOPS,
  filterGalleryPhotoPlates,
  ABOUT_PHILOSOPHY_CHAPTERS,
  DALY_CITY_GEOGRAPHY_LANDMARKS,
  ABOUT_CORE_VALUES,
  ABOUT_TEAM_ROLES_OVERVIEW,
  ABOUT_PET_POLICY_NOTE,
  filterGeographyLandmarks,
  FINANCIAL_COST_FACTORS,
  FINANCIAL_INCLUSION_GROUPS,
  FINANCIAL_INCLUSION_ITEMS,
  PAPER_LEDGER_COMPARISON_ROWS,
  FINANCIAL_PLANNING_PATHWAYS,
  FINANCIAL_PLANNING_FAQS,
  filterFinancialInclusions,
  parseBlankLedgerAmount,
  summarizePaperLedger,
  FAMILY_DECISION_PATHWAYS,
  CARE_VS_RESPITE_COMPARISON,
  VISIT_QUESTION_THEMES,
  VISIT_CHECKLIST_QUESTIONS,
  FAMILY_INVOLVEMENT_CHAPTERS,
  FAMILY_FAQ_CATEGORIES,
  FOR_FAMILIES_FAQS,
  filterVisitChecklistQuestions,
  buildVisitQuestionsInquiryNote,
  filterFamilyFaqs,
  validateVisitInquiry,
  CONTACT_ARRIVAL_CORRIDORS,
  POST_SUBMISSION_WORKFLOW_STEPS,
  CONTACT_REFERRAL_PATHWAYS,
  CONTACT_PAGE_FAQS,
  validateContactPageInquiry,
  filterContactArrivalCorridors,
  filterContactFaqs,
  LIVING_OPTIONS_COMPARISON_CATEGORIES,
  LIVING_OPTIONS_COMPARISON_ROWS,
  LIVING_OPTIONS_OVERVIEW_CARDS,
  LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS,
  LIVING_OPTIONS_ROUTE_DESTINATIONS,
  LIVING_OPTIONS_FAQS,
  filterLivingOptionsComparisonRows,
  filterLivingOptionsAccommodations,
  filterLivingOptionsFaqs,
} from './mission-villa-data';

test('MISSION_VILLA_FACTS preserves verified business identity and contact details', () => {
  assert.equal(MISSION_VILLA_FACTS.name, 'Mission Villa Senior Living');
  assert.equal(MISSION_VILLA_FACTS.address.full, '995 East Market Street, Daly City, CA 94014');
  assert.equal(MISSION_VILLA_FACTS.phone.raw, '650-756-1995');
  assert.equal(MISSION_VILLA_FACTS.phone.formatted, '(650) 756-1995');
  assert.equal(MISSION_VILLA_FACTS.phone.href, 'tel:16507561995');
  assert.equal(
    MISSION_VILLA_FACTS.email.address,
    'mktg.missionvilla@missionvillaseniorliving.com'
  );
  assert.equal(MISSION_VILLA_FACTS.licenseNumber, '415601046');
});

test('Content collections contain no fabricated statistics or unverified claims', () => {
  assert.equal(CARE_PROGRAMS.length, 2);
  assert.equal(CARE_GUIDANCE_SCENARIOS.length, 3);
  assert.equal(APPROACH_PILLARS.length, 3);
  assert.equal(DAILY_LIFE_MOMENTS.length, 4);
  assert.equal(LIVING_SPACE_OPTIONS.length, 3);

  const serialized = JSON.stringify({
    CARE_PROGRAMS,
    CARE_GUIDANCE_SCENARIOS,
    APPROACH_PILLARS,
    DAILY_LIFE_MOMENTS,
    LIVING_SPACE_OPTIONS,
    MEMORY_CARE_STORYBOARD,
    MEMORY_CARE_SUPPORT_COMMITMENTS,
    MEMORY_CARE_SUITE_FORMATS,
    MEMORY_CARE_FAQS,
    RESPITE_SCENARIOS,
    RESPITE_SERVICE_TILES,
    RESPITE_STAY_CHAPTERS,
    RESPITE_TIMELINE_STEPS,
    RESPITE_FAQS,
    LIFESTYLE_STORY_CHAPTERS,
    CURATED_DAY_ILLUSTRATION,
    EDITORIAL_GALLERY_BAND_PLATES,
    LIFESTYLE_SERVICES_PREVIEW,
    SERVICES_AMENITIES_CATEGORIES,
    SERVICES_AND_AMENITIES_ITEMS,
    ASK_US_ABOUT_DISCLOSURES,
    SUITE_ACCOMMODATION_GALLERY_PLATES,
    OFFICIAL_FLOOR_PLAN_FORMATS,
    SUITE_WHAT_TO_EXPECT_SPECS,
    SUITE_PERSONALIZATION_TOUCHPOINTS,
    RELATED_COMMUNITY_SPACES_FROM_SUITES,
    GALLERY_CATEGORY_META,
    GALLERY_PHOTO_PLATES,
    VIRTUAL_TOUR_STOPS,
    ABOUT_PHILOSOPHY_CHAPTERS,
    DALY_CITY_GEOGRAPHY_LANDMARKS,
    ABOUT_CORE_VALUES,
    ABOUT_TEAM_ROLES_OVERVIEW,
    ABOUT_PET_POLICY_NOTE,
    FINANCIAL_COST_FACTORS,
    FINANCIAL_INCLUSION_ITEMS,
    PAPER_LEDGER_COMPARISON_ROWS,
    FINANCIAL_PLANNING_PATHWAYS,
    FINANCIAL_PLANNING_FAQS,
    CONTACT_ARRIVAL_CORRIDORS,
    POST_SUBMISSION_WORKFLOW_STEPS,
    CONTACT_REFERRAL_PATHWAYS,
    CONTACT_PAGE_FAQS,
  });

  // Ensure no invented star ratings, fake review counts, fake pricing, or fabricated sq. ft.
  assert.equal(serialized.includes('4.9/5'), false);
  assert.equal(serialized.includes('$5,'), false);
  assert.equal(serialized.includes('$6,'), false);
  assert.equal(serialized.includes('staff-to-resident ratio of 1:'), false);
  assert.equal(serialized.includes('460 sq'), false);
  assert.equal(serialized.includes('680 sq'), false);
  assert.equal(serialized.includes('940 sq'), false);
  assert.equal(serialized.toLowerCase().includes('no hidden fees'), false);
});

test('Memory Care page data includes 3 storyboard scenes, 3 suite formats, and 7 FAQs', () => {
  assert.equal(MEMORY_CARE_STORYBOARD.length, 3);
  assert.equal(MEMORY_CARE_SUPPORT_COMMITMENTS.length, 3);
  assert.equal(MEMORY_CARE_SUITE_FORMATS.length, 3);
  assert.ok(MEMORY_CARE_FAQS.length >= 6);

  // Every placeholder image must be explicitly marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH
  for (const scene of MEMORY_CARE_STORYBOARD) {
    assert.equal(scene.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }
  for (const suite of MEMORY_CARE_SUITE_FORMATS) {
    assert.equal(suite.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }
});

test('Respite Care page data includes scenarios, 6 service tiles, stay chapters, 5-step example timeline, and FAQs', () => {
  assert.equal(RESPITE_SCENARIOS.length, 4);
  assert.equal(RESPITE_SERVICE_TILES.length, 6);
  assert.equal(RESPITE_STAY_CHAPTERS.length, 3);
  assert.equal(RESPITE_TIMELINE_STEPS.length, 5);
  assert.ok(RESPITE_FAQS.length >= 6);

  // Every stay chapter image must be marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH
  for (const chapter of RESPITE_STAY_CHAPTERS) {
    assert.equal(chapter.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }

  // Every timeline step must explicitly label itself as an example workflow
  for (const step of RESPITE_TIMELINE_STEPS) {
    assert.ok(
      step.workflowDisclaimer.toLowerCase().includes('example workflow'),
      `Step ${step.id} must include example workflow disclaimer`
    );
  }
});

test('Life at Mission Villa page data includes 4 photo-led chapters, curated day illustration, editorial gallery band, and services preview', () => {
  assert.deepEqual(
    LIFESTYLE_STORY_CHAPTERS.map((c) => c.id),
    ['dining', 'activities', 'spaces', 'family-connection']
  );
  assert.equal(CURATED_DAY_ILLUSTRATION.length, 5);
  assert.equal(EDITORIAL_GALLERY_BAND_PLATES.length, 5);
  assert.equal(LIFESTYLE_SERVICES_PREVIEW.length, 4);

  // Verify placeholder image statuses
  for (const chapter of LIFESTYLE_STORY_CHAPTERS) {
    assert.equal(chapter.primaryImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }
  for (const moment of CURATED_DAY_ILLUSTRATION) {
    assert.equal(moment.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
    assert.ok(
      moment.illustrationDisclaimer.toLowerCase().includes('curated day-in-the-life illustration'),
      `Moment ${moment.id} must state it is an illustration, not a fixed timetable`
    );
  }
  for (const plate of EDITORIAL_GALLERY_BAND_PLATES) {
    assert.equal(plate.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }
});

test('Services & Amenities page data covers all 5 blueprint categories, 18 original-site items, and pure filtering', () => {
  assert.deepEqual(
    SERVICES_AMENITIES_CATEGORIES.map((c) => c.id),
    ['Support', 'Dining', 'Lifestyle', 'Community Spaces', 'Convenience']
  );
  assert.equal(SERVICES_AND_AMENITIES_ITEMS.length, 18);
  assert.equal(ASK_US_ABOUT_DISCLOSURES.length, 4);

  for (const cat of SERVICES_AMENITIES_CATEGORIES) {
    assert.equal(cat.editorialPairingImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }

  // Filter by category
  const diningItems = filterServicesAndAmenities(SERVICES_AND_AMENITIES_ITEMS, 'Dining', '');
  assert.equal(diningItems.length, 3);

  // Filter by search query across all categories
  const wifiSearch = filterServicesAndAmenities(SERVICES_AND_AMENITIES_ITEMS, 'All', 'Wi-Fi');
  assert.equal(wifiSearch.length, 1);
  assert.equal(wifiSearch[0].id, 'amenity-wifi-common-spaces');

  // Filter by classification
  const servicesOnly = filterServicesAndAmenities(
    SERVICES_AND_AMENITIES_ITEMS,
    'All',
    '',
    'Community Service'
  );
  const amenitiesOnly = filterServicesAndAmenities(
    SERVICES_AND_AMENITIES_ITEMS,
    'All',
    '',
    'Community Amenity'
  );
  assert.equal(servicesOnly.length, 9);
  assert.equal(amenitiesOnly.length, 9);
});

test('Suites & Floor Plans page data covers named formats, honest floor-plan placeholders, and gallery filtering', () => {
  assert.equal(SUITE_ACCOMMODATION_GALLERY_PLATES.length, 4);
  assert.deepEqual(
    OFFICIAL_FLOOR_PLAN_FORMATS.map((f) => f.id),
    ['companion-unit', 'jack-and-jill', 'private-suite']
  );
  assert.equal(SUITE_WHAT_TO_EXPECT_SPECS.length, 6);
  assert.equal(SUITE_PERSONALIZATION_TOUCHPOINTS.length, 3);
  assert.equal(RELATED_COMMUNITY_SPACES_FROM_SUITES.length, 3);

  // Every floor plan format must explicitly carry 'Awaiting official floor plan' status and null diagram path
  for (const format of OFFICIAL_FLOOR_PLAN_FORMATS) {
    assert.equal(format.diagramAssetStatus, 'Awaiting official floor plan');
    assert.equal(format.officialDiagramPath, null);
    assert.equal(
      format.placeholderPreviewImage.status,
      'ILLUSTRATIVE — REPLACE BEFORE LAUNCH'
    );
  }

  for (const plate of SUITE_ACCOMMODATION_GALLERY_PLATES) {
    assert.equal(plate.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }

  // Pure category filter verification
  const allPlates = filterSuiteGalleryPlates(
    SUITE_ACCOMMODATION_GALLERY_PLATES,
    'All Accommodations'
  );
  assert.equal(allPlates.length, 4);

  const privatePlates = filterSuiteGalleryPlates(
    SUITE_ACCOMMODATION_GALLERY_PLATES,
    'Private Suites'
  );
  assert.equal(privatePlates.length, 2);

  const companionPlates = filterSuiteGalleryPlates(
    SUITE_ACCOMMODATION_GALLERY_PLATES,
    'Shared & Companion'
  );
  assert.equal(companionPlates.length, 1);
  assert.equal(companionPlates[0].id, 'suite-plate-companion-living');
});

test('Gallery & Virtual Tour page data covers 5 blueprint categories, 10 masonry plates, virtual tour stops, and pure filtering', () => {
  assert.deepEqual(
    GALLERY_CATEGORY_META.map((c) => c.id),
    ['All', 'Rooms', 'Dining', 'Common Areas', 'Outdoor Spaces', 'Activities']
  );
  assert.equal(GALLERY_PHOTO_PLATES.length, 10);
  assert.equal(VIRTUAL_TOUR_STOPS.length, 4);

  // Every gallery plate and virtual tour stop must explicitly carry 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH'
  for (const plate of GALLERY_PHOTO_PLATES) {
    assert.equal(plate.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
    assert.ok(plate.editorialCaption.length > 20);
  }
  for (const stop of VIRTUAL_TOUR_STOPS) {
    assert.equal(stop.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }

  // Filter by each category
  assert.equal(filterGalleryPhotoPlates(GALLERY_PHOTO_PLATES, 'All').length, 10);
  assert.equal(filterGalleryPhotoPlates(GALLERY_PHOTO_PLATES, 'Rooms').length, 2);
  assert.equal(filterGalleryPhotoPlates(GALLERY_PHOTO_PLATES, 'Dining').length, 2);
  assert.equal(filterGalleryPhotoPlates(GALLERY_PHOTO_PLATES, 'Common Areas').length, 2);
  assert.equal(filterGalleryPhotoPlates(GALLERY_PHOTO_PLATES, 'Outdoor Spaces').length, 2);
  assert.equal(filterGalleryPhotoPlates(GALLERY_PHOTO_PLATES, 'Activities').length, 2);

  // Search query filtering
  const courtyardMatches = filterGalleryPhotoPlates(GALLERY_PHOTO_PLATES, 'All', 'courtyard');
  assert.equal(courtyardMatches.length, 1);
  assert.equal(courtyardMatches[0].id, 'gallery-plate-04-garden-courtyard');
});

test('About Us page data covers 4 philosophy chapters, Daly City / San Bruno Mountain geography, core values, team roles, and conditional pet policy', () => {
  assert.equal(ABOUT_PHILOSOPHY_CHAPTERS.length, 4);
  assert.equal(DALY_CITY_GEOGRAPHY_LANDMARKS.length, 4);
  assert.equal(ABOUT_CORE_VALUES.length, 4);
  assert.equal(ABOUT_TEAM_ROLES_OVERVIEW.length, 4);
  assert.equal(ABOUT_PET_POLICY_NOTE.verificationStatus, 'CLIENT CONFIRMATION REQUIRED');

  for (const chapter of ABOUT_PHILOSOPHY_CHAPTERS) {
    assert.equal(chapter.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }
  for (const landmark of DALY_CITY_GEOGRAPHY_LANDMARKS) {
    assert.equal(landmark.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }

  // Verify San Bruno Mountain is explicitly featured in the local geography narrative
  const sanBrunoMatch = DALY_CITY_GEOGRAPHY_LANDMARKS.find(
    (item) => item.id === 'san-bruno-mountain-foothills'
  );
  assert.ok(sanBrunoMatch);
  assert.ok(sanBrunoMatch.title.includes('San Bruno Mountain'));

  // Verify pure filter helper
  assert.equal(
    filterGeographyLandmarks(DALY_CITY_GEOGRAPHY_LANDMARKS, 'All Landmarks').length,
    4
  );
  assert.equal(
    filterGeographyLandmarks(DALY_CITY_GEOGRAPHY_LANDMARKS, 'Natural Surroundings').length,
    1
  );
  assert.equal(
    filterGeographyLandmarks(DALY_CITY_GEOGRAPHY_LANDMARKS, 'Family Access').length,
    1
  );
});

test('Financial Planning page data enforces blank ledger fields, zero pre-filled numbers, and reconfirmation flags', () => {
  assert.equal(FINANCIAL_COST_FACTORS.length, 4);
  assert.equal(FINANCIAL_INCLUSION_GROUPS.length, 6);
  assert.equal(FINANCIAL_INCLUSION_ITEMS.length, 10);
  assert.equal(PAPER_LEDGER_COMPARISON_ROWS.length, 8);
  assert.equal(FINANCIAL_PLANNING_PATHWAYS.length, 4);
  assert.equal(FINANCIAL_PLANNING_FAQS.length, 6);

  // Every paper-ledger row MUST have an empty string defaultMonthlyInput
  for (const row of PAPER_LEDGER_COMPARISON_ROWS) {
    assert.equal(row.defaultMonthlyInput, '');
  }

  // Verify legacy referral credit & state assistance pathway is marked CLIENT CONFIRMATION REQUIRED
  const legacyPathway = FINANCIAL_PLANNING_PATHWAYS.find(
    (p) => p.id === 'legacy-site-referral-and-state-programs'
  );
  assert.ok(legacyPathway);
  assert.equal(legacyPathway.verificationStatus, 'CLIENT CONFIRMATION REQUIRED');

  // Verify inclusion filtering
  assert.equal(
    filterFinancialInclusions(FINANCIAL_INCLUSION_ITEMS, 'All Categories').length,
    10
  );
  assert.equal(
    filterFinancialInclusions(FINANCIAL_INCLUSION_ITEMS, 'Chef-Prepared Dining').length,
    1
  );

  // Verify blank ledger amount parsing and summary calculation
  assert.equal(parseBlankLedgerAmount(''), null);
  assert.equal(parseBlankLedgerAmount('   '), null);
  assert.equal(parseBlankLedgerAmount('abc'), null);
  assert.equal(parseBlankLedgerAmount('-100'), null);
  assert.equal(parseBlankLedgerAmount('$1,850.50'), 1850.5);

  const emptySummary = summarizePaperLedger(PAPER_LEDGER_COMPARISON_ROWS, [], {});
  assert.equal(emptySummary.checkedCount, 0);
  assert.equal(emptySummary.enteredAmountCount, 0);
  assert.equal(emptySummary.familyEnteredHomeTotal, null);

  const populatedSummary = summarizePaperLedger(
    PAPER_LEDGER_COMPARISON_ROWS,
    ['ledger-housing-property', 'ledger-groceries-dining'],
    {
      'ledger-housing-property': '2400',
      'ledger-groceries-dining': '650',
    }
  );
  assert.equal(populatedSummary.checkedCount, 2);
  assert.equal(populatedSummary.enteredAmountCount, 2);
  assert.equal(populatedSummary.familyEnteredHomeTotal, 3050);
  assert.ok(populatedSummary.inquiryNoteSummary.includes('$3,050/mo'));
});

test('validateVisitInquiry rejects incomplete inputs and sanitizes valid submissions', () => {
  const invalidResult = validateVisitInquiry({
    fullName: 'A',
    phone: '123',
    email: 'invalid-email',
    careInterest: 'Memory Care',
    suitePreference: 'Private Suite',
    inquiryType: 'Schedule a Visit',
  });
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.email);

  const validResult = validateVisitInquiry({
    fullName: '  Elena Martinez  ',
    phone: '(650) 555-0199',
    email: 'elena@example.com ',
    careInterest: 'Respite Care',
    suitePreference: 'Private Suite',
    inquiryType: 'Schedule a Visit',
    notes: ' Looking to tour next week ',
  });
  assert.equal(validResult.valid, true);
  assert.equal(validResult.sanitized?.fullName, 'Elena Martinez');
  assert.equal(validResult.sanitized?.email, 'elena@example.com');
  assert.equal(validResult.sanitized?.careInterest, 'Respite Care');
  assert.equal(validResult.sanitized?.notes, 'Looking to tour next week');
});

test('Page 09 For Families / FAQs data and pure helper functions obey guardrails', () => {
  assert.equal(FAMILY_DECISION_PATHWAYS.length, 4);
  assert.equal(CARE_VS_RESPITE_COMPARISON.length, 5);
  assert.equal(VISIT_QUESTION_THEMES.length, 5);
  assert.equal(VISIT_CHECKLIST_QUESTIONS.length, 8);
  assert.equal(FAMILY_INVOLVEMENT_CHAPTERS.length, 4);
  assert.deepEqual(FAMILY_FAQ_CATEGORIES, ['All Topics', 'Care', 'Suites', 'Cost', 'Visits']);
  assert.equal(FOR_FAMILIES_FAQS.length, 12);

  // Verify all 4 FAQ groups have items
  for (const cat of ['Care', 'Suites', 'Cost', 'Visits'] as const) {
    const items = filterFamilyFaqs(FOR_FAMILIES_FAQS, cat, '');
    assert.equal(items.length, 3, `Expected 3 FAQs in ${cat} category`);
  }

  // Verify FAQ search filtering works
  const legaciesFaqs = filterFamilyFaqs(FOR_FAMILIES_FAQS, 'All Topics', 'Legacies');
  assert.ok(legaciesFaqs.length >= 2);
  const costLegacies = filterFamilyFaqs(FOR_FAMILIES_FAQS, 'Cost', 'Legacies');
  assert.equal(costLegacies.length, 1);

  // Verify visit checklist filtering & inquiry note builder
  const suiteQuestions = filterVisitChecklistQuestions(
    VISIT_CHECKLIST_QUESTIONS,
    'Suites & Personalization'
  );
  assert.equal(suiteQuestions.length, 2);

  const noteWithQuestions = buildVisitQuestionsInquiryNote(
    VISIT_CHECKLIST_QUESTIONS,
    ['vq-legacies-story', 'vq-suite-formats'],
    'When Daily Routines & Memory Changes Call for Steady Community Support'
  );
  assert.ok(noteWithQuestions.includes('Bringing 2 family visit question(s)'));
  assert.ok(noteWithQuestions.includes('(Q01)'));
  assert.ok(noteWithQuestions.includes('(Q03)'));

  // Verify all chapter images are explicitly marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH
  for (const ch of FAMILY_INVOLVEMENT_CHAPTERS) {
    assert.equal(ch.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }
});

test('Page 10 Contact / Schedule a Visit data and pure validation/filtering helpers obey guardrails', () => {
  assert.equal(CONTACT_ARRIVAL_CORRIDORS.length, 4);
  assert.equal(POST_SUBMISSION_WORKFLOW_STEPS.length, 4);
  assert.equal(CONTACT_REFERRAL_PATHWAYS.length, 2);
  assert.equal(CONTACT_PAGE_FAQS.length, 6);

  // Verify referral pathways carry CLIENT CONFIRMATION REQUIRED
  for (const pathway of CONTACT_REFERRAL_PATHWAYS) {
    assert.equal(pathway.verificationStatus, 'CLIENT CONFIRMATION REQUIRED');
  }

  // Verify corridor filtering
  assert.equal(
    filterContactArrivalCorridors(CONTACT_ARRIVAL_CORRIDORS, 'All Routes').length,
    4
  );
  assert.equal(
    filterContactArrivalCorridors(CONTACT_ARRIVAL_CORRIDORS, 'Highway & Peninsula').length,
    1
  );
  assert.equal(
    filterContactArrivalCorridors(CONTACT_ARRIVAL_CORRIDORS, 'Parking & Accessibility').length,
    1
  );

  // Verify FAQ filtering
  assert.equal(filterContactFaqs(CONTACT_PAGE_FAQS, 'All Questions', '').length, 6);
  assert.equal(
    filterContactFaqs(CONTACT_PAGE_FAQS, 'Directions & Accessibility', '').length,
    2
  );
  assert.equal(
    filterContactFaqs(CONTACT_PAGE_FAQS, 'All Questions', 'medical diagnoses').length,
    1
  );

  // Verify validateContactPageInquiry rejects missing fields and unaccepted consent
  const invalidInquiry = validateContactPageInquiry({
    fullName: '',
    preferredContactMethod: 'Either Phone or Email',
    phone: '123',
    email: 'not-an-email',
    careInterest: 'Memory Care (Legacies™ Program)',
    suitePreference: 'Private Suite',
    inquiryIntent: 'Schedule a Personal Visit',
    preferredWindow: 'Morning (9:00 AM – 12:00 PM)',
    consentAccepted: false,
  });
  assert.equal(invalidInquiry.valid, false);
  assert.ok(invalidInquiry.errors.fullName);
  assert.ok(invalidInquiry.errors.phone);
  assert.ok(invalidInquiry.errors.email);
  assert.ok(invalidInquiry.errors.consentAccepted);

  // Verify Phone-only preference allows blank email when phone is valid
  const validPhoneOnly = validateContactPageInquiry({
    fullName: '  David Chen ',
    preferredContactMethod: 'Phone Call',
    phone: '650-555-0144',
    email: '',
    careInterest: 'Short-Term Respite Care',
    suitePreference: 'Companion Unit (Shared)',
    inquiryIntent: 'Schedule a Personal Visit',
    preferredWindow: 'Afternoon (12:00 PM – 4:00 PM)',
    preferredVisitTiming: ' Thursday afternoon ',
    message: ' Looking to tour with my sister. ',
    consentAccepted: true,
  });
  assert.equal(validPhoneOnly.valid, true);
  assert.equal(validPhoneOnly.sanitized?.fullName, 'David Chen');
  assert.equal(validPhoneOnly.sanitized?.email, 'Not provided (Phone preferred)');
  assert.equal(validPhoneOnly.sanitized?.preferredVisitTiming, 'Thursday afternoon');
  assert.equal(validPhoneOnly.sanitized?.message, 'Looking to tour with my sister.');
});

test('Page 11 Living Options Overview data and pure helpers strictly compare Memory Care vs. Respite Care', () => {
  // Strictly two care offerings
  assert.equal(LIVING_OPTIONS_OVERVIEW_CARDS.length, 2);
  assert.deepEqual(
    LIVING_OPTIONS_OVERVIEW_CARDS.map((c) => c.id),
    ['memory-care', 'respite-care']
  );

  // Verify placeholder images are marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH
  for (const card of LIVING_OPTIONS_OVERVIEW_CARDS) {
    assert.equal(card.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }

  // Verify comparison categories and rows
  assert.equal(LIVING_OPTIONS_COMPARISON_CATEGORIES.length, 6);
  assert.equal(LIVING_OPTIONS_COMPARISON_ROWS.length, 6);
  assert.equal(
    filterLivingOptionsComparisonRows(LIVING_OPTIONS_COMPARISON_ROWS, 'All Dimensions', false)
      .length,
    6
  );
  assert.equal(
    filterLivingOptionsComparisonRows(LIVING_OPTIONS_COMPARISON_ROWS, 'All Dimensions', true)
      .length,
    4
  );
  assert.equal(
    filterLivingOptionsComparisonRows(LIVING_OPTIONS_COMPARISON_ROWS, 'Duration & Purpose', false)
      .length,
    2
  );

  // Verify 3 accommodation highlights (Private Suite, Companion Unit, Jack & Jill)
  assert.equal(LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS.length, 3);
  for (const acc of LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS) {
    assert.equal(acc.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
    assert.ok(acc.floorPlanNotice.includes('Awaiting official floor plan'));
  }
  assert.equal(
    filterLivingOptionsAccommodations(LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS, 'All Programs')
      .length,
    3
  );
  assert.equal(
    filterLivingOptionsAccommodations(LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS, 'Memory Care')
      .length,
    3
  );
  assert.equal(
    filterLivingOptionsAccommodations(LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS, 'Respite Care')
      .length,
    2
  );

  // Verify route destinations and FAQs
  assert.equal(LIVING_OPTIONS_ROUTE_DESTINATIONS.length, 6);
  assert.equal(LIVING_OPTIONS_FAQS.length, 6);
  assert.equal(filterLivingOptionsFaqs(LIVING_OPTIONS_FAQS, 'All Topics', '').length, 6);
  assert.equal(filterLivingOptionsFaqs(LIVING_OPTIONS_FAQS, 'Care Offerings', '').length, 2);
  assert.equal(
    filterLivingOptionsFaqs(LIVING_OPTIONS_FAQS, 'All Topics', 'Jack & Jill').length,
    2
  );
  assert.equal(
    filterLivingOptionsFaqs(LIVING_OPTIONS_FAQS, 'Suites & Bathrooms', 'Jack & Jill').length,
    1
  );
});





