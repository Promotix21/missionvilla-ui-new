import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MISSION_VILLA_FACTS,
  CARE_PROGRAMS,
  CARE_GUIDANCE_SCENARIOS,
  APPROACH_PILLARS,
  LIVING_SPACE_OPTIONS,
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
  });
  assert.equal(serialized.includes('$4,250'), false);
  assert.equal(serialized.includes('$5,450'), false);
  assert.equal(serialized.includes('$6,800'), false);
  assert.equal(serialized.includes('1:5'), false);
  assert.equal(serialized.includes('1080 Olive Grove'), false);
  assert.equal(serialized.includes('555-VILLA'), false);
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
    careInterest: 'Memory Care',
    suitePreference: 'Private Suite',
    inquiryType: 'Schedule a Visit',
    notes: ' Looking to tour next week ',
  });
  assert.equal(validResult.valid, true);
  assert.equal(validResult.sanitized?.fullName, 'Elena Martinez');
  assert.equal(validResult.sanitized?.email, 'elena@example.com');
  assert.equal(validResult.sanitized?.notes, 'Looking to tour next week');
});
