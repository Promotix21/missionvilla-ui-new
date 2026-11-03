import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MISSION_VILLA_FACTS,
  CARE_PROGRAMS,
  CARE_GUIDANCE_SCENARIOS,
  APPROACH_PILLARS,
  LIVING_SPACE_OPTIONS,
  LEGACIES_TOUCHPOINTS,
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
  validateVisitInquiry,
} from './mission-villa-data';

test('verified business facts match official Mission Villa Senior Living facts', () => {
  assert.equal(MISSION_VILLA_FACTS.name, 'Mission Villa Senior Living');
  assert.equal(
    MISSION_VILLA_FACTS.address.full,
    '995 East Market Street, Daly City, CA 94014'
  );
  assert.equal(MISSION_VILLA_FACTS.phone.raw, '650-756-1995');
  assert.equal(
    MISSION_VILLA_FACTS.email.address,
    'mktg.missionvilla@missionvillaseniorliving.com'
  );
  assert.equal(MISSION_VILLA_FACTS.licenseNumber, '415601046');
});

test('care offerings strictly center Memory Care and Respite Care without fabricated tiers', () => {
  assert.equal(CARE_PROGRAMS.length, 2);
  const programIds = CARE_PROGRAMS.map((p) => p.id);
  assert.deepEqual(programIds, ['memory-care', 'respite-care']);

  // Verify no fabricated rates, staffing ratios, or fake clinical percentages exist in public copy
  const serialized = JSON.stringify({
    MISSION_VILLA_FACTS,
    CARE_PROGRAMS,
    CARE_GUIDANCE_SCENARIOS,
    APPROACH_PILLARS,
    LIVING_SPACE_OPTIONS,
    LEGACIES_TOUCHPOINTS,
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
  });
  assert.equal(serialized.includes('$4,250'), false);
  assert.equal(serialized.includes('$5,450'), false);
  assert.equal(serialized.includes('$6,800'), false);
  assert.equal(serialized.includes('1:5'), false);
  assert.equal(serialized.includes('1080 Olive Grove'), false);
  assert.equal(serialized.includes('555-VILLA'), false);
  assert.equal(serialized.includes('98.4%'), false);
  assert.equal(serialized.includes('42%'), false);
});

test('Memory Care page data includes Legacies touchpoints, 3-scene storyboard, and named suite formats', () => {
  assert.equal(LEGACIES_TOUCHPOINTS.length, 4);
  assert.equal(MEMORY_CARE_STORYBOARD.length, 3);
  assert.equal(MEMORY_CARE_SUPPORT_COMMITMENTS.length, 3);
  assert.deepEqual(
    MEMORY_CARE_SUITE_FORMATS.map((s) => s.id),
    ['companion-unit', 'jack-and-jill', 'private-suite']
  );
  assert.ok(MEMORY_CARE_FAQS.length >= 6);

  // Every placeholder image in Memory Care data must be marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH
  for (const tp of LEGACIES_TOUCHPOINTS) {
    assert.equal(tp.placeholderImage.status, 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH');
  }
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
