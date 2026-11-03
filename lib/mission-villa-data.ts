// ============================================================================
// MISSION VILLA SENIOR LIVING — VERIFIED PUBLIC CONTENT & PURE LOGIC MODULE
// ============================================================================
// Official content anchor: https://missionvillaseniorliving.com/
// Kept separate from presentation for easy developer/CMS integration and testing.
// All illustrative stock imagery is marked as replaceable placeholder media.

export interface BusinessFacts {
  name: string;
  shortName: string;
  tagline: string;
  taglineLeft: string;
  taglineRight: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: {
    raw: string;
    formatted: string;
    href: string;
  };
  email: {
    address: string;
    href: string;
  };
  licenseNumber: string;
  heroSupportingCopy: string;
  primaryCtas: {
    scheduleVisit: string;
    exploreCare: string;
    getPricing: string;
    callTeam: string;
  };
}

export const MISSION_VILLA_FACTS: BusinessFacts = {
  name: 'Mission Villa Senior Living',
  shortName: 'Mission Villa',
  tagline: 'The honor they deserve, the care you’ll love.',
  taglineLeft: '“The honor they deserve,”',
  taglineRight: '“the care you’ll love.”',
  address: {
    street: '995 East Market Street',
    city: 'Daly City',
    state: 'CA',
    zip: '94014',
    full: '995 East Market Street, Daly City, CA 94014',
  },
  phone: {
    raw: '650-756-1995',
    formatted: '(650) 756-1995',
    href: 'tel:16507561995',
  },
  email: {
    address: 'mktg.missionvilla@missionvillaseniorliving.com',
    href: 'mailto:mktg.missionvilla@missionvillaseniorliving.com',
  },
  licenseNumber: '415601046',
  heroSupportingCopy:
    'At Mission Villa Senior Living in Daly City, compassionate Memory Care and short-term Respite Care come together in a welcoming, homelike community. Every day is guided by dignity, meaningful connections, and personalized support.',
  primaryCtas: {
    scheduleVisit: 'Schedule a Visit',
    exploreCare: 'Explore Our Care Options',
    getPricing: 'Get Pricing & Information',
    callTeam: 'Call Our Team',
  },
};

export interface CareProgram {
  id: 'memory-care' | 'respite-care';
  badge: string;
  title: string;
  programSignature: string;
  subtitle: string;
  summary: string;
  whoItSupports: string;
  highlights: string[];
  dailyFocus: string[];
  ctaLabel: string;
  // Illustrative placeholder image — replace with official Mission Villa facility photography
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
  };
}

export const CARE_PROGRAMS: CareProgram[] = [
  {
    id: 'memory-care',
    badge: '01 · Primary Care Program',
    title: 'Memory Care',
    programSignature: 'Featuring the Legacies™ Memory Care Program',
    subtitle: 'Dedicated support for seniors living with Alzheimer’s disease and other forms of dementia',
    summary:
      'Our Memory Care community in Daly City is thoughtfully structured to honor each resident’s personal history, preferences, and sense of self. Through our signature Legacies™ Memory Care program, we focus on what brings comfort, familiarity, and daily meaning.',
    whoItSupports:
      'Designed for older adults living with Alzheimer’s disease or other forms of dementia who benefit from a comforting, homelike setting and attentive, personalized daily support.',
    highlights: [
      'Signature Legacies™ Memory Care program centered on personal life stories and routines',
      'Compassionate support that preserves resident dignity, privacy, and independence where possible',
      'Private and shared suites, each equipped with a private bathroom',
      'Chef-prepared daily dining and engaging group and one-on-one activities',
      'Ongoing communication and supportive partnership for family members',
    ],
    dailyFocus: [
      'Calm, predictable daily rhythms that foster familiarity and ease',
      'Meaningful social connection in welcoming communal spaces',
      'Tailored daily assistance aligned with individual preferences',
    ],
    ctaLabel: 'Explore Memory Care & Request Info',
    placeholderImage: {
      // REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm, comfortable homelike sitting room designed for calm daily living',
      caption: 'Compassionate daily connection through our Legacies™ Memory Care approach',
    },
  },
  {
    id: 'respite-care',
    badge: '02 · Short-Term Stays',
    title: 'Respite Care',
    programSignature: 'Flexible Short-Term Stays & Family Caregiver Relief',
    subtitle: 'Welcoming short-term support in the same compassionate, homelike Daly City community',
    summary:
      'Caring for a loved one takes devotion—and sometimes family caregivers need time to rest, travel, or attend to life’s obligations knowing their loved one is safe and genuinely cared for. Respite Care guests enjoy the full warmth of Mission Villa.',
    whoItSupports:
      'Ideal for families seeking a supportive short-term stay for a loved one while a primary family caregiver rests or travels, or for families wanting a gentle introduction to community life at Mission Villa.',
    highlights: [
      'Comfortable suite accommodations with private bathroom access',
      'Full participation in daily engaging activities and social gatherings',
      'Nutritious, chef-prepared meals shared in welcoming dining spaces',
      'Personalized attention and compassionate support from our care team',
      'Peace of mind for family caregivers needing temporary relief or travel support',
    ],
    dailyFocus: [
      'Warm welcome and thoughtful orientation to daily routines',
      'Access to communal lounges, dining, and daily programming',
      'Direct communication with family members throughout the stay',
    ],
    ctaLabel: 'Inquire About Respite Care Availability',
    placeholderImage: {
      // REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Gentle, attentive conversation with a senior in a bright, comfortable room',
      caption: 'Dependable short-term stays that support both residents and family caregivers',
    },
  },
];

export interface CareGuidanceScenario {
  id: 'dementia-support' | 'caregiver-relief' | 'exploring-options';
  label: string;
  kicker: string;
  familyQuestion: string;
  relevantProgram: 'Memory Care (Legacies™ Program)' | 'Respite Care' | 'Memory Care & Respite Care';
  recommendedProgramId: 'memory-care' | 'respite-care';
  reassuranceTitle: string;
  reassuranceBody: string;
  whatToExpect: string[];
  questionsForYourVisit: string[];
}

export const CARE_GUIDANCE_SCENARIOS: CareGuidanceScenario[] = [
  {
    id: 'dementia-support',
    label: 'Navigating Daily Memory Changes',
    kicker: 'Family Reflection · Memory Care',
    familyQuestion:
      '“My parent or spouse is living with Alzheimer’s or dementia, and we want a welcoming, homelike place where their dignity and personal story are truly respected.”',
    relevantProgram: 'Memory Care (Legacies™ Program)',
    recommendedProgramId: 'memory-care',
    reassuranceTitle: 'How Mission Villa’s Legacies™ Memory Care Supports Your Family',
    reassuranceBody:
      'Transitioning a loved one living with memory loss is an emotional step. At Mission Villa in Daly City, our Legacies™ Memory Care program takes time to learn who your loved one is—their background, familiar routines, and personal comforts—so care feels personal, calm, and respectful.',
    whatToExpect: [
      'A homelike environment designed for comfort, dignity, and personal privacy',
      'Private or shared suite options, each featuring a private bathroom',
      'Engaging daily activities and chef-prepared meals in welcoming communal spaces',
      'A supportive team that partners closely with families before and after move-in',
    ],
    questionsForYourVisit: [
      'How does the Legacies™ Memory Care program learn about my loved one’s routines?',
      'May we view both private and shared suite options during our visit?',
      'How does your team communicate day-to-day updates with family members?',
    ],
  },
  {
    id: 'caregiver-relief',
    label: 'Temporary Caregiver Rest or Travel',
    kicker: 'Family Reflection · Respite Care',
    familyQuestion:
      '“I care for my loved one at home, and I need a trustworthy, compassionate community for a short-term stay while I recharge, travel, or handle family commitments.”',
    relevantProgram: 'Respite Care',
    recommendedProgramId: 'respite-care',
    reassuranceTitle: 'Thoughtful Short-Term Respite Care in Daly City',
    reassuranceBody:
      'Taking time to rest or manage personal responsibilities helps you remain a strong, loving advocate for your family member. Our Respite Care guests are welcomed into the heart of Mission Villa—enjoying comfortable suites, chef-prepared dining, and daily social activities.',
    whatToExpect: [
      'Warm orientation so your loved one feels comfortable and included right away',
      'Access to chef-prepared meals, communal lounges, and engaging daily activities',
      'Personalized daily support tailored to your loved one’s routines',
      'A gentle way to experience Mission Villa firsthand before considering a longer-term stay',
    ],
    questionsForYourVisit: [
      'What stay lengths and scheduling options are available for Respite Care?',
      'What personal items help make a short-term suite feel most like home?',
      'How do you help a Respite Care guest settle into daily meals and activities?',
    ],
  },
  {
    id: 'exploring-options',
    label: 'Comparing Suites & Planning Ahead',
    kicker: 'Family Reflection · Planning Your Visit',
    familyQuestion:
      '“We are beginning to explore senior care in Daly City and want straightforward information about suites, daily life, and pricing without high-pressure sales.”',
    relevantProgram: 'Memory Care & Respite Care',
    recommendedProgramId: 'memory-care',
    reassuranceTitle: 'An Unhurried Conversation & Personal Walkthrough',
    reassuranceBody:
      'Every family’s timeline is different. Whether you have an immediate need or are thoughtfully preparing for the months ahead, our team at 995 East Market Street is here to answer your questions clearly, share pricing information, and show you our suites and common areas in person.',
    whatToExpect: [
      'Clear, pressure-free answers about Memory Care and Respite Care options',
      'A guided look at private and shared suites, dining areas, and communal spaces',
      'Straightforward pricing and program information tailored to your family’s situation',
      'Easy access in Daly City with direct phone and email contact whenever questions arise',
    ],
    questionsForYourVisit: [
      'What is included in your Memory Care and Respite Care offerings?',
      'How do families decide between a private suite and a shared companion suite?',
      'What are the steps to schedule a family visit at 995 East Market Street?',
    ],
  },
];

export interface ApproachPillar {
  id: 'dignity' | 'connection' | 'purpose';
  index: string;
  motto: string;
  title: string;
  subtitle: string;
  description: string;
  keyPrinciples: string[];
  // Illustrative placeholder image — replace with official Mission Villa facility photography
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
  };
}

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    id: 'dignity',
    index: '01',
    motto: 'Homelike Comfort',
    title: 'Dignity, Privacy & Independence',
    subtitle: 'Respecting the individual behind every care plan',
    description:
      'Living with Alzheimer’s disease or dementia should never mean losing one’s sense of self. We encourage independence wherever possible while providing attentive support in a warm, residential atmosphere that honors personal privacy and familiar rhythms.',
    keyPrinciples: [
      'Respectful, unhurried assistance tailored to personal preferences',
      'Private and shared suites with private bathrooms for everyday comfort',
      'A calm, welcoming environment in the heart of Daly City',
    ],
    placeholderImage: {
      // REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Peaceful sunlit garden greenery and tranquil outdoor atmosphere',
      caption: 'Calm, welcoming surroundings that support everyday comfort and dignity',
    },
  },
  {
    id: 'connection',
    index: '02',
    motto: 'People & Family',
    title: 'Genuine Human Connection',
    subtitle: 'Relationships that reassure both residents and families',
    description:
      'At Mission Villa, care is rooted in relationship. Our team takes the time to know each resident’s stories, favorite foods, and family bonds—creating a close-knit community where residents feel known and families feel supported.',
    keyPrinciples: [
      'Welcoming communal spaces designed for conversation and companionship',
      'Open, approachable communication with family members and loved ones',
      'Supportive guidance for families navigating memory care decisions',
    ],
    placeholderImage: {
      // REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm conversation and shared smiles in a comfortable lounge setting',
      caption: 'Meaningful relationships between residents, families, and care team members',
    },
  },
  {
    id: 'purpose',
    index: '03',
    motto: 'Legacies™ Program',
    title: 'Purposeful Daily Engagement',
    subtitle: 'Everyday moments of joy, nourishment, and belonging',
    description:
      'Through our Legacies™ Memory Care program, engaging daily activities, and chef-prepared dining, every day offers gentle opportunities for connection, sensory enjoyment, and shared accomplishment.',
    keyPrinciples: [
      'Legacies™ Memory Care programming honoring personal histories',
      'Chef-prepared meals shared together in inviting dining spaces',
      'Daily social, creative, and recreational activities adapted for every resident',
    ],
    placeholderImage: {
      // REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Freshly prepared, nourishing meal served at a welcoming table',
      caption: 'Chef-prepared dining and daily engagement that bring warmth to every day',
    },
  },
];

export interface DailyLifeMoment {
  id: string;
  rhythmLabel: string;
  category: string;
  title: string;
  description: string;
  detailNote: string;
  // Illustrative placeholder image — replace with official Mission Villa facility photography
  placeholderImage: {
    src: string;
    alt: string;
  };
}

export const DAILY_LIFE_MOMENTS: DailyLifeMoment[] = [
  {
    id: 'morning-welcome',
    rhythmLabel: 'Morning Rhythm',
    category: 'Dignity & Routine',
    title: 'Unhurried Mornings & Personal Support',
    description:
      'Each day begins at a comfortable, reassuring pace. Our team provides personalized assistance while honoring each resident’s privacy, independence, and lifelong morning habits.',
    detailNote: 'Private & shared suites with private bathrooms',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      alt: 'Illustrative placeholder: Warm morning daylight filling a welcoming communal sitting area',
    },
  },
  {
    id: 'legacies-engagement',
    rhythmLabel: 'Midday Connection',
    category: 'Legacies™ Memory Care',
    title: 'Engaging Activities & Shared Stories',
    description:
      'Residents gather in welcoming communal spaces for thoughtfully guided activities—from music and reminiscence to gentle movement and creative projects that spark recognition and joy.',
    detailNote: 'Tailored to individual interests & abilities',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80',
      alt: 'Illustrative placeholder: Bright botanical blooms representing sensory and creative engagement',
    },
  },
  {
    id: 'chef-dining',
    rhythmLabel: 'Shared Table',
    category: 'Chef-Prepared Dining',
    title: 'Nourishing, Chef-Prepared Meals Together',
    description:
      'Mealtimes are a cornerstone of community life at Mission Villa. Residents enjoy freshly prepared, comforting meals in a warm dining setting that encourages conversation and appetite.',
    detailNote: 'Nutritious dining in a welcoming communal setting',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      alt: 'Illustrative placeholder: Freshly prepared meal served at an inviting dining table',
    },
  },
  {
    id: 'afternoon-family',
    rhythmLabel: 'Afternoon & Evening',
    category: 'Community & Family',
    title: 'Relaxed Companionship & Family Visits',
    description:
      'Afternoons and evenings invite quiet relaxation in common lounges, friendly conversation with neighbors, and meaningful visits with family members in our homelike Daly City community.',
    detailNote: '995 East Market Street, Daly City, CA 94014',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
      alt: 'Illustrative placeholder: Warm afternoon lounge setting for family visits and companionship',
    },
  },
];

export interface LivingSpaceOption {
  id: 'private-suite' | 'shared-suite' | 'communal-spaces';
  label: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  note: string;
  placeholderImage: {
    src: string;
    alt: string;
  };
}

export const LIVING_SPACE_OPTIONS: LivingSpaceOption[] = [
  {
    id: 'private-suite',
    label: 'Private Suite Option',
    title: 'Private Suites with Private Bathrooms',
    subtitle: 'Personal sanctuary with familiar touches from home',
    description:
      'Our private suites offer residents a tranquil, personal living space that families can personalize with treasured photographs, favorite keepsakes, and familiar comforts—complete with an attached private bathroom.',
    features: [
      'Dedicated private living and sleeping area',
      'Private en-suite bathroom designed for comfort and ease of use',
      'Welcoming space for family visits and personal keepsakes',
      'Attentive housekeeping and personalized daily care support',
    ],
    note: 'Contact our team at (650) 756-1995 for current private suite availability and pricing.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm, comfortable private bedroom suite with natural light',
    },
  },
  {
    id: 'shared-suite',
    label: 'Shared Suite Option',
    title: 'Shared Companion Suites with Private Bathrooms',
    subtitle: 'Comforting companionship balanced with personal dignity',
    description:
      'For residents who thrive on camaraderie and shared reassurance, our companion suites provide a warm, homelike arrangement with a private bathroom and thoughtful personal space for each resident.',
    features: [
      'Thoughtfully arranged shared living environment fostering companionship',
      'Private bathroom shared only within the suite',
      'Space for personal mementos and familiar bedding',
      'Full access to all Legacies™ Memory Care or Respite Care support',
    ],
    note: 'Ask our Daly City team about companion matching and shared suite pricing during your tour.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Inviting, well-lit residential living space with warm furnishings',
    },
  },
  {
    id: 'communal-spaces',
    label: 'Community & Dining',
    title: 'Welcoming Communal Lounges & Dining Spaces',
    subtitle: 'Designed for social interaction, activities, and shared meals',
    description:
      'Beyond their suites, residents gather in inviting common areas for chef-prepared meals, daily group activities, and relaxed visits with family and friends in a comfortable, homelike setting.',
    features: [
      'Inviting dining room where chef-prepared meals are enjoyed together',
      'Comfortable communal lounges for social interaction and family visits',
      'Dedicated spaces for Legacies™ Memory Care activities and recreation',
      'Conveniently located at 995 East Market Street in Daly City',
    ],
    note: 'Schedule a visit to walk through our common areas and meet our care team in person.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Sunlit communal lounge designed for gathering and conversation',
    },
  },
];

export interface VisitInquiryInput {
  fullName: string;
  phone: string;
  email: string;
  careInterest: 'Memory Care' | 'Respite Care' | 'Both / Exploring Options';
  suitePreference: 'Private Suite' | 'Shared Suite' | 'Open / Undecided';
  inquiryType: 'Schedule a Visit' | 'Get Pricing & Information' | 'Request a Phone Call';
  notes?: string;
}

export interface VisitInquiryValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof VisitInquiryInput, string>>;
  sanitized?: VisitInquiryInput;
}

export function validateVisitInquiry(input: VisitInquiryInput): VisitInquiryValidationResult {
  const errors: Partial<Record<keyof VisitInquiryInput, string>> = {};

  const fullName = (input.fullName || '').trim();
  const phone = (input.phone || '').trim();
  const email = (input.email || '').trim();
  const notes = (input.notes || '').trim();

  if (fullName.length < 2) {
    errors.fullName = 'Please enter your name so our team knows how to address you.';
  }

  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  const validCareInterests: VisitInquiryInput['careInterest'][] = [
    'Memory Care',
    'Respite Care',
    'Both / Exploring Options',
  ];
  if (!validCareInterests.includes(input.careInterest)) {
    errors.careInterest = 'Please select a care option.';
  }

  const isObjectEmpty = Object.keys(errors).length === 0;

  if (!isObjectEmpty) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    sanitized: {
      fullName,
      phone,
      email,
      careInterest: input.careInterest,
      suitePreference: input.suitePreference,
      inquiryType: input.inquiryType,
      notes,
    },
  };
}

// ============================================================================
// PAGE 01: MEMORY CARE (/memory-care) — SOURCE-GROUNDED DATA & CONTENT
// ============================================================================
// Grounded in https://missionvillaseniorliving.com/living-options/memory-care/
// All images are marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH.

export interface LegaciesTouchpoint {
  id: 'life-story' | 'daily-rhythm' | 'meaningful-engagement' | 'family-connection';
  index: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  inPractice: string[];
  familyTakeaway: string;
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface StoryboardScene {
  id: string;
  sceneNumber: string;
  rhythmWindow: string;
  title: string;
  subtitle: string;
  narrative: string;
  highlights: string[];
  cutoutStyle: 'cutout-tl-cream' | 'cutout-br-cream' | 'cutout-bl-cream';
  colSpan: 'lg:col-span-7' | 'lg:col-span-5' | 'lg:col-span-12';
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface SupportCommitment {
  id: string;
  category: string;
  title: string;
  description: string;
  examples: string[];
}

export interface MemoryCareSuiteFormat {
  id: 'companion-unit' | 'jack-and-jill' | 'private-suite';
  badge: string;
  name: string;
  sourceReference: string;
  summary: string;
  whoItSuits: string;
  keyFeatures: string[];
  floorPlanStatus: string;
  placeholderImage: {
    src: string;
    alt: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface MemoryCareFaqItem {
  id: string;
  category: 'Program & Philosophy' | 'Daily Support' | 'Suites & Environment' | 'Visits & Planning';
  question: string;
  answer: string;
}

export const LEGACIES_TOUCHPOINTS: LegaciesTouchpoint[] = [
  {
    id: 'life-story',
    index: '01',
    kicker: 'Personal History & Identity',
    title: 'Knowing the Person Behind the Memory',
    subtitle: 'Care shaped by your loved one’s life story, vocation, and cherished traditions',
    description:
      'In our Legacies™ Memory Care program, support begins with listening. We partner with families to understand each resident’s background, lifelong habits, favorite music, and personal accomplishments so our team can connect with who they have always been.',
    inPractice: [
      'Learning personal histories, family relationships, and comforting topics of conversation',
      'Honoring lifelong preferences in how a resident likes to be addressed and supported',
      'Using familiar touchpoints to bring reassurance during moments of uncertainty',
    ],
    familyTakeaway:
      'Your loved one is known as an individual with a rich life story—never defined solely by Alzheimer’s or dementia.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm, sunlit residential living space honoring a senior resident’s personal story',
      caption: 'Listening closely to personal histories, cherished memories, and family traditions',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'daily-rhythm',
    index: '02',
    kicker: 'Familiar Daily Rhythms',
    title: 'Calm, Predictable Days Without Rigidity',
    subtitle: 'Gentle structure that reduces overwhelm while respecting personal pace',
    description:
      'For older adults living with memory loss, a calm and recognizable daily flow creates a natural sense of ease. Rather than enforcing a rigid institutional timetable, we guide each day with gentle cues, unhurried mornings, and familiar transitions.',
    inPractice: [
      'Unhurried morning routines aligned with personal waking and grooming habits',
      'Consistent, welcoming cues for chef-prepared meals and social gatherings',
      'Quiet afternoon and evening spaces that support restful transitions',
    ],
    familyTakeaway:
      'Predictable rhythms help residents feel grounded and secure while preserving personal choice.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Sunlit residential sitting room offering a calm, familiar daily setting',
      caption: 'Homelike spaces in Daly City designed for calm transitions and everyday ease',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'meaningful-engagement',
    index: '03',
    kicker: 'Purposeful Engagement',
    title: 'Everyday Moments of Joy & Belonging',
    subtitle: 'Activities adapted to individual interests, sensory comfort, and current abilities',
    description:
      'Through Legacies™ Memory Care and our daily activity programming, residents are invited into small-group and one-on-one experiences that spark recognition, creativity, and camaraderie—without pressure or frustration.',
    inPractice: [
      'Music, reminiscence, art, and gentle movement tailored to resident abilities',
      'Shared mealtimes with freshly prepared, comforting dishes in our dining room',
      'Opportunities for quiet enjoyment in communal lounges or outdoor patio areas',
    ],
    familyTakeaway:
      'Every day holds gentle invitations to participate, connect with neighbors, and experience accomplishment.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=80',
      alt: 'Illustrative placeholder: Botanical blossoms representing sensory engagement and creative activities',
      caption: 'Sensory-rich activities, music, and shared moments tailored to each resident',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'family-connection',
    index: '04',
    kicker: 'Family Partnership',
    title: 'Supporting the Whole Family Journey',
    subtitle: 'Open communication and a warm welcome whenever you visit in Daly City',
    description:
      'Choosing Memory Care is an act of love, not a step away from family life. At Mission Villa, we help lift the daily caregiving strain so spouses, adult children, and relatives can return to simply enjoying meaningful time together.',
    inPractice: [
      'Approachable, transparent communication with our Daly City care team',
      'Inviting common areas and dining spaces where families can visit comfortably',
      'Collaborative care planning before move-in and as needs evolve over time',
    ],
    familyTakeaway:
      'You remain at the heart of your loved one’s life, supported by an attentive team at 995 East Market Street.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Family member and care partner sharing a warm smile with a senior resident',
      caption: 'A reassuring partnership that welcomes family connection every day',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const MEMORY_CARE_STORYBOARD: StoryboardScene[] = [
  {
    id: 'scene-morning',
    sceneNumber: 'Scene I',
    rhythmWindow: 'Morning Dignity & Personal Pace',
    title: 'A Reassuring Start to the Day',
    subtitle: 'Respectful personal care in private and companion suites',
    narrative:
      'Mornings in Memory Care begin at a human pace. Whether a resident prefers a quiet cup of coffee before dressing or enjoys early conversation, our staff offers gentle, dignified assistance with bathing, grooming, and wardrobe selection while honoring personal privacy.',
    highlights: [
      'Individualized assistance with morning dressing, grooming, and personal hygiene',
      'Private en-suite bathroom access in both private and shared suites',
      'Warm greeting and unhurried guidance toward breakfast',
    ],
    cutoutStyle: 'cutout-tl-cream',
    colSpan: 'lg:col-span-7',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Soft morning daylight entering a comfortable bedroom suite',
      caption: 'Unhurried morning routines that protect privacy and self-respect',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'scene-midday',
    sceneNumber: 'Scene II',
    rhythmWindow: 'Shared Table & Nourishment',
    title: 'Chef-Prepared Dining & Familiar Flavors',
    subtitle: 'Gathering around the table for nourishment and conversation',
    narrative:
      'Meals at Mission Villa are more than nutrition—they are familiar anchors of the day. Residents gather in our welcoming dining room for freshly prepared meals served with attentive table support and companionship.',
    highlights: [
      'Three chef-prepared daily meals plus snacks in an inviting dining space',
      'Attentive dining support and accommodation for dietary needs (confirm specifics with team)',
      'A sociable, homelike atmosphere that encourages appetite and connection',
    ],
    cutoutStyle: 'cutout-br-cream',
    colSpan: 'lg:col-span-5',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Nourishing, freshly prepared meal served at a warm dining table',
      caption: 'Freshly prepared meals shared in a welcoming community dining setting',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'scene-afternoon',
    sceneNumber: 'Scene III',
    rhythmWindow: 'Afternoon Engagement & Quiet Comfort',
    title: 'Life-Enriching Activities, Family Visits & Restful Evenings',
    subtitle: 'Balancing purposeful activity with peaceful sanctuary',
    narrative:
      'Throughout the afternoon and early evening, our Legacies™ programming brings residents together for music, creative arts, reminiscence, gentle exercise, or fresh air on the patio—followed by calm evening routines that help residents feel settled and at home.',
    highlights: [
      'Group and individual activities guided by our life-enrichment team',
      'Comfortable lounges, library nook, and outdoor courtyard/patio spaces for family visits',
      'Calm, reassuring evening support tailored to each resident’s comfort',
    ],
    cutoutStyle: 'cutout-bl-cream',
    colSpan: 'lg:col-span-12',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
      alt: 'Illustrative placeholder: Warm afternoon light in a comfortable residential lounge and garden conservatory',
      caption: 'Welcoming common spaces where residents and visiting families feel at ease',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const MEMORY_CARE_SUPPORT_COMMITMENTS: SupportCommitment[] = [
  {
    id: 'daily-living-support',
    category: 'Personal Care & Dignity',
    title: 'Attentive Help With Everyday Tasks',
    description:
      'Our compassionate staff assists residents with daily living needs in a way that preserves self-esteem, personal choice, and independence wherever possible.',
    examples: [
      'Respectful assistance with bathing, dressing, and personal grooming',
      'Escort and transfer support to meals, activities, and common areas',
      'Housekeeping, personal laundry, and linen service included in daily life',
    ],
  },
  {
    id: 'on-site-reassurance',
    category: '24-Hour Presence & Safety',
    title: 'Around-the-Clock Staff Support in a Nurturing Setting',
    description:
      'Families gain peace of mind knowing dedicated care staff are on-site 24 hours a day to respond to resident needs, provide reassurance, and maintain a safe, supportive environment.',
    examples: [
      '24-hour on-site staff availability and attentive daily check-ins',
      'Emergency alert system and thoughtfully arranged community spaces',
      'Routine assessments to adjust personalized support as a resident’s needs change',
    ],
  },
  {
    id: 'holistic-wellbeing',
    category: 'Wellness & Connection',
    title: 'Whole-Person Comfort for Resident & Family',
    description:
      'Memory Care at Mission Villa combines practical daily assistance with emotional warmth, social belonging, and family involvement.',
    examples: [
      'Legacies™ Memory Care life-story approach integrated into daily interactions',
      'Scheduled transportation and concierge coordination (ask team for current details)',
      'Open communication with family members regarding day-to-day wellbeing',
    ],
  },
];

export const MEMORY_CARE_SUITE_FORMATS: MemoryCareSuiteFormat[] = [
  {
    id: 'companion-unit',
    badge: 'Named Floor-Plan Format · Memory Care',
    name: 'Companion Unit (Shared Suite)',
    sourceReference: 'Referenced on Mission Villa Memory Care & Living Options pages',
    summary:
      'Designed for residents who find comfort and reassurance in shared company, the Companion Unit pairs thoughtful personal sleeping areas with a shared private bathroom inside the suite.',
    whoItSuits:
      'Older adults who enjoy friendly camaraderie and benefit from a warm, sociable living arrangement.',
    keyFeatures: [
      'Shared residential suite layout with dedicated space for personal furnishings and keepsakes',
      'Private en-suite bathroom shared only within the suite',
      'Housekeeping, laundry service, utilities, and emergency alert features',
      'Full participation in Legacies™ Memory Care dining and daily programming',
    ],
    floorPlanStatus: 'Awaiting official architectural floor plan asset — view in person during your Daly City tour.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm, inviting companion living space with natural light',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'jack-and-jill',
    badge: 'Named Floor-Plan Format · Memory Care',
    name: 'Jack & Jill Suite Format',
    sourceReference: 'Referenced on Mission Villa Memory Care & Living Options pages',
    summary:
      'The Jack & Jill configuration offers individual sleeping quarters connected by a shared private bathroom—balancing personal sanctuary with convenient, homelike accessibility.',
    whoItSuits:
      'Residents who appreciate their own distinct sleeping alcove while sharing an adjoining private bath.',
    keyFeatures: [
      'Distinct personal living/sleeping spaces connected by an adjoining private bathroom',
      'Room for treasured family photos, familiar bedding, and personal touches',
      'Individual comfort controls, housekeeping, and attentive daily support',
      'Easy access to Mission Villa’s dining room, lounges, and courtyard',
    ],
    floorPlanStatus: 'Awaiting official architectural floor plan asset — ask our team to show you available layouts.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Bright, homelike suite interior with comfortable residential seating',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'private-suite',
    badge: 'Individual Sanctuary · Memory Care',
    name: 'Private Suite with Private Bathroom',
    sourceReference: 'Supported across Mission Villa Memory Care & Respite Care accommodations',
    summary:
      'Our Private Suites provide a peaceful individual residence with a dedicated private bathroom, ready to be personalized with familiar furniture, photographs, and mementos from home.',
    whoItSuits:
      'Residents who prefer quiet individual privacy alongside full access to community dining and activities.',
    keyFeatures: [
      'Private living and sleeping suite with attached private bathroom',
      'Personalizable space for familiar keepsakes and favorite armchairs',
      'Full housekeeping, linen service, and 24-hour staff support',
      'Steps away from communal lounges, chef-prepared meals, and daily activities',
    ],
    floorPlanStatus: 'Awaiting official architectural floor plan asset — call (650) 756-1995 for current availability.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Peaceful private bedroom suite with warm natural lighting',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const MEMORY_CARE_FAQS: MemoryCareFaqItem[] = [
  {
    id: 'mc-faq-who',
    category: 'Program & Philosophy',
    question: 'Who is Mission Villa’s Memory Care program designed to support?',
    answer:
      'Our Memory Care program in Daly City is dedicated to supporting older adults living with Alzheimer’s disease or other forms of dementia who benefit from a safe, nurturing, homelike environment and personalized daily assistance.',
  },
  {
    id: 'mc-faq-legacies',
    category: 'Program & Philosophy',
    question: 'What makes the Legacies™ Memory Care approach meaningful for residents?',
    answer:
      'Legacies™ Memory Care centers on honoring who each resident is—their personal history, life accomplishments, family relationships, and comforting routines. By learning your loved one’s story, our staff can provide individualized care and activities that foster dignity, familiarity, and connection.',
  },
  {
    id: 'mc-faq-support',
    category: 'Daily Support',
    question: 'What kind of everyday assistance and supervision do residents receive?',
    answer:
      'Staff members are on-site 24 hours a day to provide compassionate help with everyday tasks such as bathing, dressing, grooming, escorting to meals and activities, housekeeping, and laundry. Routine assessments help us tailor support as a resident’s needs change. During your visit, our team will gladly walk through how we support your loved one’s specific care needs.',
  },
  {
    id: 'mc-faq-suites',
    category: 'Suites & Environment',
    question: 'What suite options are available in Memory Care?',
    answer:
      'Mission Villa offers both private and shared suites—including Companion Unit and Jack & Jill floor-plan formats—with private bathrooms. Families are encouraged to personalize suites with familiar photographs, keepsakes, and comforting touches from home.',
  },
  {
    id: 'mc-faq-pricing',
    category: 'Visits & Planning',
    question: 'How is Memory Care pricing determined at Mission Villa?',
    answer:
      'Because every resident’s daily support needs and suite preferences are unique, Memory Care pricing is discussed personally following a conversation and assessment with our team. Contact us at (650) 756-1995 to discuss current suite availability and what is included.',
  },
  {
    id: 'mc-faq-family',
    category: 'Visits & Planning',
    question: 'How can family members stay involved after move-in?',
    answer:
      'Families are always an essential part of life at Mission Villa. We encourage regular visits in our lounges, dining room, and patio areas, maintain open communication with relatives, and welcome your insights into what brings your loved one comfort.',
  },
];

// ============================================================================
// PAGE 02: RESPITE CARE (/respite-care) — SOURCE-GROUNDED DATA & CONTENT
// ============================================================================
// Grounded in https://missionvillaseniorliving.com/living-options/respite-care/
// All images are marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH.

export interface RespiteScenario {
  id: 'caregiver-recharge' | 'travel-commitments' | 'post-rehab-transition' | 'trial-community-stay';
  index: string;
  tag: string;
  title: string;
  familySituation: string;
  howMissionVillaHelps: string;
  keyTakeaways: string[];
  questionsToAsk: string[];
}

export interface RespiteServiceTile {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  includedDetails: string[];
  availabilityNote: string;
}

export interface RespiteStayChapter {
  id: string;
  chapterLabel: string;
  title: string;
  subtitle: string;
  narrative: string;
  guestExperience: string[];
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface RespiteTimelineStep {
  id: 'step-inquiry' | 'step-assessment' | 'step-welcome' | 'step-daily-life' | 'step-next-chapter';
  stepNumber: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  description: string;
  whatFamiliesPrepare: string[];
  howOurTeamSupports: string[];
  workflowDisclaimer: string;
}

export interface RespiteFaqItem {
  id: string;
  category: 'Duration & Availability' | 'Care & Medication' | 'Accommodations & Inclusions' | 'Costs & Planning';
  question: string;
  answer: string;
}

export const RESPITE_SCENARIOS: RespiteScenario[] = [
  {
    id: 'caregiver-recharge',
    index: '01',
    tag: 'Caregiver Renewal & Rest',
    title: 'When a Devoted Family Caregiver Needs Time to Rest',
    familySituation:
      '“I care for my spouse or parent every day at home. I love them deeply, but I need a few days or weeks to rest, tend to my own health, and regain my energy knowing they are in capable, caring hands.”',
    howMissionVillaHelps:
      'Caring for a loved one takes sustained emotional and physical devotion. A short-term Respite Care stay at Mission Villa in Daly City gives family caregivers unhurried time to recharge while their loved one enjoys attentive daily support, chef-prepared meals, and warm social companionship.',
    keyTakeaways: [
      '24-hour on-site staff presence and compassionate help with daily routines',
      'Engaging daily activities and welcoming dining so your loved one feels included',
      'Open communication with our Daly City team while you rest',
    ],
    questionsToAsk: [
      'How do you learn my loved one’s daily habits before a short-term respite stay?',
      'How can I check in with your team while I am taking time to recharge?',
    ],
  },
  {
    id: 'travel-commitments',
    index: '02',
    tag: 'Family Travel & Life Events',
    title: 'When Work, Travel, or Family Milestones Call You Away',
    familySituation:
      '“Our family has an upcoming out-of-town wedding, business trip, or family obligation, and bringing our loved one along would be exhausting or overwhelming for them.”',
    howMissionVillaHelps:
      'Instead of piecing together rotating in-home coverage while you are away, Respite Care provides a consistent, homelike environment at 995 East Market Street. Your loved one stays in a comfortable furnished accommodation with full access to community dining, lounges, and daily programming.',
    keyTakeaways: [
      'Short-term stays ranging from a few days to several weeks (subject to current availability)',
      'Comfortable furnished suite accommodations with a private bathroom',
      'Peace of mind knowing meals, activities, and daily care are thoughtfully handled',
    ],
    questionsToAsk: [
      'How far in advance should we inquire when planning around upcoming family travel?',
      'What personal items or familiar keepsakes should we pack for their stay?',
    ],
  },
  {
    id: 'post-rehab-transition',
    index: '03',
    tag: 'Bridge Support After Illness',
    title: 'When Extra Support Helps After Illness or Rehabilitation',
    familySituation:
      '“My loved one is recovering after a hospital stay or rehabilitation period and isn’t quite ready to return home without round-the-clock assistance, regular meals, and attentive daily support.”',
    howMissionVillaHelps:
      'Returning directly home after an illness or rehabilitation stay can feel daunting for both seniors and relatives. A temporary stay at Mission Villa offers a calm, supportive setting where daily living assistance, nutritious meals, and routine assessments help your loved one regain everyday comfort.',
    keyTakeaways: [
      'Individualized pre-stay assessment to confirm how our team can best support recovery routines',
      'Respectful help with bathing, dressing, grooming, and escorting to meals',
      'Housekeeping, laundry, and freshly prepared meals so your loved one can focus on rest',
    ],
    questionsToAsk: [
      'What information from our physician or discharge planner is helpful for your assessment?',
      'How does your team adjust daily assistance as a short-term guest regains comfort?',
    ],
  },
  {
    id: 'trial-community-stay',
    index: '04',
    tag: 'Experiencing Community Life',
    title: 'When Your Family Wants to Experience Mission Villa Firsthand',
    familySituation:
      '“We are considering longer-term Memory Care in Daly City, and we want our loved one to experience the suites, dining, and care team through a gentle short-term stay first.”',
    howMissionVillaHelps:
      'A Respite Care stay can serve as a reassuring introduction to life at Mission Villa. Guests experience our homelike neighborhood, meet neighbors and staff, and participate in daily activities—helping families make longer-term care decisions with confidence.',
    keyTakeaways: [
      'Full participation in community dining, social gatherings, and Legacies™-inspired activities',
      'Opportunity for your loved one to become familiar with our staff and spaces at a gentle pace',
      'Seamless conversation with our team if your family later explores a longer-term move',
    ],
    questionsToAsk: [
      'If a short-term stay goes well, how does transitioning to longer-term care work?',
      'May we tour both Respite Care accommodations and long-term Memory Care suites?',
    ],
  },
];

export const RESPITE_SERVICE_TILES: RespiteServiceTile[] = [
  {
    id: 'furnished-accommodations',
    index: '01',
    category: 'Suite Comfort',
    title: 'Comfortable Furnished Accommodations & Private Bath',
    description:
      'Short-term guests are welcomed into a clean, comfortable, homelike suite arrangement equipped with an attached private bathroom—ready for a restful stay without the burden of moving heavy furniture.',
    includedDetails: [
      'Furnished sleeping and sitting area prepared for short-term comfort',
      'Private bathroom access designed for dignity and ease of use',
      'Space to bring favorite photographs, a cozy throw blanket, and familiar keepsakes',
    ],
    availabilityNote: 'Confirm current furnished suite format and availability with our Daly City team.',
  },
  {
    id: 'tailored-daily-care',
    index: '02',
    category: 'Personal Support',
    title: 'Tailored Daily Assistance & 24-Hour Staff Presence',
    description:
      'Every respite stay begins with an understanding of your loved one’s routines. Our compassionate staff is on-site 24 hours a day to offer respectful assistance with everyday activities.',
    includedDetails: [
      'Individualized assistance with bathing, dressing, and personal grooming',
      'Escort and transfer support to the dining room, lounges, and patio',
      'Emergency alert access and attentive day-and-night staff presence',
    ],
    availabilityNote: 'Specific support inclusions are shaped by a pre-stay assessment.',
  },
  {
    id: 'chef-prepared-dining',
    index: '03',
    category: 'Dining & Hospitality',
    title: 'Nutritious Chef-Prepared Meals & Shared Table Warmth',
    description:
      'Respite guests enjoy the same freshly prepared breakfasts, lunches, dinners, and snacks as full-time residents—served with warm hospitality in our community dining room.',
    includedDetails: [
      'Three chef-prepared daily meals plus nourishing snacks and beverages',
      'Welcoming table service that encourages conversation and appetite',
      'Attention to individual food preferences and dietary accommodations (confirm specifics)',
    ],
    availabilityNote: 'Share favorite foods and dietary notes with our team prior to arrival.',
  },
  {
    id: 'activities-and-belonging',
    index: '04',
    category: 'Daily Enrichment',
    title: 'Engaging Activities & Community Amenities',
    description:
      'A short-term stay is never solitary unless a guest prefers quiet rest. Respite guests are warmly invited into daily social, creative, and recreational programming across our community.',
    includedDetails: [
      'Music, art, games, gentle fitness, reminiscence, and social gatherings',
      'Access to comfortable communal lounges, library nook, and outdoor courtyard/patio',
      'Guidance from our activity team to help short-term guests feel included right away',
    ],
    availabilityNote: 'Activities are always optional and adapted to each guest’s energy and interests.',
  },
  {
    id: 'housekeeping-and-laundry',
    index: '05',
    category: 'Everyday Ease',
    title: 'Housekeeping, Linen Care & Laundry Support',
    description:
      'Practical daily upkeep is handled by our staff so guests can relax comfortably and families don’t return to extra chores at the end of a respite stay.',
    includedDetails: [
      'Routine suite housekeeping and tidy daily maintenance',
      'Fresh bed linens, towels, and personal laundry support',
      'Utilities and comfortable indoor climate control included',
    ],
    availabilityNote: 'Ask our team for a complete checklist of what to pack for a short-term stay.',
  },
  {
    id: 'family-communication',
    index: '06',
    category: 'Caregiver Peace of Mind',
    title: 'Personal Orientation & Family Communication',
    description:
      'We know it takes trust to place a loved one in someone else’s care, even for a short stay. Our team stays reachable and communicative so you can genuinely rest.',
    includedDetails: [
      'Warm arrival welcome to help your loved one settle in smoothly',
      'Direct telephone and email connection with our Daly City team',
      'Thoughtful wrap-up conversation as your loved one prepares to return home',
    ],
    availabilityNote: 'Call (650) 756-1995 anytime to discuss your family’s timeline.',
  },
];

export const RESPITE_STAY_CHAPTERS: RespiteStayChapter[] = [
  {
    id: 'chapter-arrival',
    chapterLabel: '01 · A Warm Arrival',
    title: 'Settling Into a Calm, Ready-Made Sanctuary',
    subtitle: 'Unhurried orientation that helps short-term guests feel at home from the first hour',
    narrative:
      'The first afternoon of a respite stay sets the tone for everything that follows. Rather than rushing through paperwork at the door, our team focuses on greeting your loved one warmly, introducing them to their furnished suite, and placing a few familiar items from home where they can see them immediately.',
    guestExperience: [
      'Personal greeting by staff who already know your loved one’s preferred name and routines',
      'Time to unpack favorite clothing, family photos, and comforting personal touches',
      'A gentle walkthrough of nearby lounges, the dining room, and the courtyard patio',
    ],
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Sunlit, welcoming furnished bedroom suite prepared for a restful short-term stay',
      caption: 'Furnished accommodations ready to welcome short-term Respite Care guests in Daly City',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'chapter-rhythm',
    chapterLabel: '02 · Days Filled With Warmth',
    title: 'Shared Meals, Gentle Companionship & Familiar Rhythms',
    subtitle: 'Participating in the full life of Mission Villa at a comfortable, personal pace',
    narrative:
      'During a respite stay, guests are never treated like temporary visitors on the sidelines. They are welcomed to a regular seat in our dining room, invited to join music, art, and social hours, and supported with respectful daily care that honors their lifelong habits.',
    guestExperience: [
      'Unhurried morning assistance with dressing and grooming at a pace that feels natural',
      'Freshly prepared meals shared with neighbors and attentive table hospitality',
      'Choice between lively small-group activities or quiet reading and garden air',
    ],
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Nourishing chef-prepared meal served in a warm, sociable dining setting',
      caption: 'Chef-prepared dining and daily social engagement included throughout every respite stay',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'chapter-renewal',
    chapterLabel: '03 · Renewal for the Whole Family',
    title: 'True Breathing Room for Family Caregivers',
    subtitle: 'Returning to each other refreshed, rested, and supported',
    narrative:
      'While your loved one is cared for at Mission Villa, you have the space to sleep through the night, travel for a family milestone, or recover your own strength. When the stay concludes, families reunite with renewed energy—and a trusted community they can lean on again in the future.',
    guestExperience: [
      'Consistent day-and-night staff presence so family caregivers can step away without worry',
      'Open family visits welcome if relatives live nearby in Daly City or the Peninsula',
      'Smooth coordination for returning home—or exploring longer-term options if desired',
    ],
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Peaceful sunlit garden courtyard offering calm and renewal',
      caption: 'Peace of mind for family caregivers across Daly City and San Mateo County',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const RESPITE_TIMELINE_STEPS: RespiteTimelineStep[] = [
  {
    id: 'step-inquiry',
    stepNumber: 'Step 01',
    phaseLabel: 'Initial Conversation',
    title: 'Reach Out & Share Your Family’s Timeline',
    subtitle: 'A pressure-free conversation about dates, suite availability, and care needs',
    description:
      'Begin by calling our Daly City team at (650) 756-1995 or submitting a visit request. We’ll listen to what prompted your search—whether upcoming travel, caregiver rest, or recovery after an illness—and discuss target dates and current Respite Care suite availability.',
    whatFamiliesPrepare: [
      'Desired window of dates (a few days to several weeks, subject to availability)',
      'A brief overview of your loved one’s daily routines and support needs',
      'Preferred time to visit Mission Villa at 995 East Market Street in person',
    ],
    howOurTeamSupports: [
      'Clear answers on current short-term suite openings in Daly City',
      'Transparent overview of how Respite Care works and what is included',
      'Scheduling a personal tour for you and your family',
    ],
    workflowDisclaimer:
      'Example workflow for illustration — exact scheduling steps, availability, and stay terms are confirmed directly with Mission Villa.',
  },
  {
    id: 'step-assessment',
    stepNumber: 'Step 02',
    phaseLabel: 'Personalized Assessment',
    title: 'Care Review & Pre-Stay Planning',
    subtitle: 'Ensuring our team can thoughtfully support your loved one’s daily comfort',
    description:
      'Before a short-term stay is finalized, our team conducts a personalized assessment and reviews relevant health and routine information. This ensures we understand mobility needs, dining preferences, medication support requirements, and personal habits.',
    whatFamiliesPrepare: [
      'Current physician orders or required health documentation (confirm checklist with team)',
      'List of daily routines, mobility aids, and dietary preferences',
      'Personal history notes—favorite music, hobbies, and comforting conversation topics',
    ],
    howOurTeamSupports: [
      'Individualized review of daily care needs and suite suitability',
      'Personalized Respite Care rate and service confirmation based on the assessment',
      'Practical packing checklist and pre-arrival guidance for your family',
    ],
    workflowDisclaimer:
      'Example workflow for illustration — admission requirements, documentation, and pricing depend on individual assessment.',
  },
  {
    id: 'step-welcome',
    stepNumber: 'Step 03',
    phaseLabel: 'Warm Arrival',
    title: 'Moving Into a Furnished Suite',
    subtitle: 'A calm, welcoming check-in designed to put your loved one at ease',
    description:
      'On arrival day, our staff welcomes your loved one at an unhurried pace. Together, we help them settle into their furnished suite with familiar touches from home and introduce them to team members and neighbors.',
    whatFamiliesPrepare: [
      'Comfortable everyday clothing, footwear, and personal toiletries',
      'A few cherished photographs, a favorite blanket, or familiar books',
      'Emergency contact details and preferred family check-in method while away',
    ],
    howOurTeamSupports: [
      'Suite preparation prior to arrival so the room feels fresh and welcoming',
      'Warm introductions to care staff, dining hosts, and activity leaders',
      'Gentle reassurance during the transition as family caregivers head out',
    ],
    workflowDisclaimer:
      'Example workflow for illustration — arrival timing and coordination are arranged individually with our team.',
  },
  {
    id: 'step-daily-life',
    stepNumber: 'Step 04',
    phaseLabel: 'The Respite Stay',
    title: 'Daily Dining, Activities & Attentive Support',
    subtitle: 'Your loved one enjoys community life while you rest with peace of mind',
    description:
      'Throughout the stay, your loved one receives 24-hour staff support, three chef-prepared meals daily, housekeeping, and invitations to join daily activities—while you enjoy genuine rest or focus on your travel commitments.',
    whatFamiliesPrepare: [
      'Take the time you need to rest, travel, or attend to personal responsibilities',
      'Check in with our Daly City team by phone whenever you’d like an update',
      'Visit in person anytime if you are staying locally in the Bay Area',
    ],
    howOurTeamSupports: [
      'Respectful assistance with bathing, dressing, grooming, and daily routines',
      'Engaging social, musical, and creative programming tailored to abilities',
      'Open, reassuring communication with designated family contacts',
    ],
    workflowDisclaimer:
      'Example workflow for illustration — daily activities and services reflect current community programming.',
  },
  {
    id: 'step-next-chapter',
    stepNumber: 'Step 05',
    phaseLabel: 'Transition or Next Step',
    title: 'Returning Home Refreshed—or Planning Ahead',
    subtitle: 'Smooth departure coordination or an unhurried conversation about future stays',
    description:
      'As a respite stay wraps up, our team helps coordinate a smooth return home. Many families schedule repeat respite stays throughout the year, while others find that their loved one thrived in the community and choose to explore longer-term Memory Care.',
    whatFamiliesPrepare: [
      'Coordinate pick-up timing and any updated home routine notes with our staff',
      'Share feedback on what your loved one enjoyed most during their stay',
      'Let us know if you would like to plan future respite dates or discuss long-term options',
    ],
    howOurTeamSupports: [
      'Organized packing assistance and departure coordination',
      'Sharing observations about activities and routines your loved one enjoyed',
      'Guidance on future Respite Care bookings or transitioning to Memory Care if desired',
    ],
    workflowDisclaimer:
      'Example workflow for illustration — future availability and long-term transitions are subject to suite openings and care review.',
  },
];

export const RESPITE_FAQS: RespiteFaqItem[] = [
  {
    id: 'rc-faq-duration',
    category: 'Duration & Availability',
    question: 'How long can a short-term Respite Care stay last at Mission Villa?',
    answer:
      'Respite Care at Mission Villa is designed for flexible short-term stays—often ranging from a few days to several weeks depending on your family’s needs and current suite availability. Because short-term availability changes, please call our Daly City team at (650) 756-1995 to check current openings and minimum stay guidelines for your desired dates.',
  },
  {
    id: 'rc-faq-included',
    category: 'Accommodations & Inclusions',
    question: 'What is included in a Respite Care stay?',
    answer:
      'A Respite Care stay includes comfortable furnished accommodations with a private bathroom, 24-hour on-site staff support, personalized assistance with everyday tasks (such as bathing, dressing, and grooming), three chef-prepared meals and snacks daily, engaging community activities, housekeeping, and laundry service. Ask our team to confirm specific inclusions for your loved one’s stay.',
  },
  {
    id: 'rc-faq-medication',
    category: 'Care & Medication',
    question: 'How are daily care needs and medications handled during a short-term stay?',
    answer:
      'Before a respite stay begins, our team completes a personalized assessment and reviews your loved one’s daily routines, support requirements, and physician documentation. This allows us to coordinate appropriate daily assistance and medication support in compliance with California RCFE regulations. Please speak directly with our team regarding specific medication or health protocols.',
  },
  {
    id: 'rc-faq-memory-loss',
    category: 'Care & Medication',
    question: 'Can a senior living with Alzheimer’s or dementia stay for Respite Care?',
    answer:
      'Yes. Because Mission Villa specializes in compassionate Memory Care through our Legacies™ program, our staff and homelike Daly City environment are well suited to welcoming short-term guests living with memory loss—provided our pre-stay assessment confirms we can safely meet their individual needs.',
  },
  {
    id: 'rc-faq-costs',
    category: 'Costs & Planning',
    question: 'How is Respite Care pricing calculated?',
    answer:
      'Respite Care pricing is tailored to the length of stay, suite format, and the level of personalized daily support determined during your loved one’s assessment. We do not publish one-size-fits-all rates online; contact our team at (650) 756-1995 for a straightforward conversation about pricing for your dates.',
  },
  {
    id: 'rc-faq-transition',
    category: 'Costs & Planning',
    question: 'Can a Respite Care stay help us decide if longer-term Memory Care is right?',
    answer:
      'Many families use a short-term Respite Care stay as a gentle way to introduce their loved one to Mission Villa’s dining, activities, and care team before making a longer-term commitment. If your family later decides to explore a permanent move, our team can guide you through available suite options.',
  },
];

// ============================================================================
// PAGE 03: LIFE AT MISSION VILLA (/life-at-mission-villa) — SOURCE-GROUNDED DATA
// ============================================================================
// Grounded in https://missionvillaseniorliving.com/, /about-us/, /gallery/, /services-and-amenities/
// All images are marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH.

export interface LifestyleChapter {
  id: 'dining' | 'activities' | 'spaces' | 'family-connection';
  chapterNumber: string;
  kicker: string;
  title: string;
  subtitle: string;
  leadParagraph: string;
  secondaryParagraph: string;
  pullQuote: string;
  signatureExperiences: {
    label: string;
    detail: string;
  }[];
  communityHighlights: string[];
  cutoutPosition: 'cutout-tl-cream' | 'cutout-br-cream' | 'cutout-bl-cream';
  primaryImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
  insetNote: {
    heading: string;
    body: string;
  };
}

export interface DayInTheLifeMoment {
  id: 'morning-table' | 'creative-vitality' | 'midday-gathering' | 'afternoon-outings' | 'evening-sanctuary';
  windowIndex: string;
  timeOfDayLabel: string;
  rhythmTheme: string;
  title: string;
  subtitle: string;
  narrative: string;
  residentChoices: string[];
  sensoryTouchpoints: string[];
  illustrationDisclaimer: string;
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface EditorialGalleryPlate {
  id: string;
  plateNumber: string;
  category: 'Dining & Table' | 'Activities & Outings' | 'Garden & Spaces' | 'Family & Belonging';
  title: string;
  locationContext: string;
  caption: string;
  aspectClass: 'aspect-[16/10]' | 'aspect-[4/5]' | 'aspect-[4/3]';
  widthClass: string;
  placeholderImage: {
    src: string;
    alt: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface LifestyleServicePreviewCategory {
  id: 'dining-hospitality' | 'enrichment-outings' | 'indoor-outdoor-spaces' | 'everyday-support';
  title: string;
  subtitle: string;
  items: string[];
  verificationNote: string;
}

export const LIFESTYLE_STORY_CHAPTERS: LifestyleChapter[] = [
  {
    id: 'dining',
    chapterNumber: 'Chapter I',
    kicker: 'Culinary Warmth & Shared Table',
    title: 'Chef-Prepared Meals Where Conversation Comes Naturally',
    subtitle: 'Full-table hospitality, familiar comforting recipes, and unhurried shared dining',
    leadParagraph:
      'At Mission Villa, the dining room is the social heart of the house. Three times a day, residents gather around welcoming tables for freshly prepared, chef-crafted meals served with attentive table hospitality—turning breakfast, lunch, and dinner into moments of connection rather than routine obligation.',
    secondaryParagraph:
      'Whether a resident looks forward to warm morning pastries and coffee, a comforting midday soup, or a celebratory meal with visiting relatives in a private dining setting, our culinary and care teams pay close attention to personal favorites, nutritional balance, and dietary accommodations.',
    pullQuote:
      'A familiar favorite dish and a welcoming seat at the table can turn an ordinary afternoon into a moment of true belonging.',
    signatureExperiences: [
      {
        label: 'Chef-Prepared Daily Dining',
        detail: 'Three freshly prepared daily meals plus nourishing snacks and beverages.',
      },
      {
        label: 'Restaurant-Style Table Service',
        detail: 'Warm, unhurried table assistance that encourages appetite, dignity, and conversation.',
      },
      {
        label: 'Private Family Dining Options',
        detail: 'Welcoming space to celebrate birthdays, anniversaries, and family visits together.',
      },
    ],
    communityHighlights: [
      'Freshly prepared menus crafted for comfort, flavor, and seasonal variety',
      'Dietary options and texture or preference accommodations (confirm specifics with our team)',
      'Welcoming communal table seating that helps new residents and respite guests make friends naturally',
      'Gentle escort and dining support tailored to each resident’s abilities',
    ],
    cutoutPosition: 'cutout-tl-cream',
    primaryImage: {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Freshly prepared chef meal served at an inviting, sunlit community dining table',
      caption: 'Chef-prepared meals shared in a warm, conversational dining setting in Daly City',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    insetNote: {
      heading: 'Personal Favorites Remembered',
      body: 'From how someone takes their morning tea to lifelong comfort foods, our team learns the small culinary details that make Mission Villa feel like home.',
    },
  },
  {
    id: 'activities',
    chapterNumber: 'Chapter II',
    kicker: 'Life Enrichment & Purpose',
    title: 'Games, Art, Gentle Fitness, Live Entertainment & Scenic Drives',
    subtitle: 'Engaging daily programming guided by our activity director and shaped by resident interests',
    leadParagraph:
      'Life at Mission Villa is active, expressive, and never one-size-fits-all. Guided by our dedicated activity director and supported by caring staff and volunteer programs, each day offers gentle invitations to create, move, laugh, and reminisce at a comfortable pace.',
    secondaryParagraph:
      'Inside the community, neighbors gather for tabletop games, watercolour and craft sessions, chair fitness, and live musical entertainment. Beyond our doors, scheduled scenic drives around Daly City, San Bruno Mountain, and the Peninsula coast allow residents to enjoy changing views and local familiarity with staff accompaniment.',
    pullQuote:
      'Engagement isn’t about filling a calendar—it’s about sparking recognition, laughter, and shared accomplishment.',
    signatureExperiences: [
      {
        label: 'Games, Art & Creative Expression',
        detail: 'Hands-on art projects, trivia, puzzles, and classic social games adapted for every ability.',
      },
      {
        label: 'Fitness & Live Entertainment',
        detail: 'Gentle morning movement, sing-alongs, and visiting performers that lift spirits.',
      },
      {
        label: 'Scheduled Scenic Drives',
        detail: 'Relaxed group outings to enjoy coastal Peninsula vistas and neighborhood landmarks.',
      },
    ],
    communityHighlights: [
      'Dedicated activity director curating small-group and one-on-one engagement',
      'Legacies™ Memory Care life-story touchpoints woven into music and reminiscence hours',
      'Volunteer programs that bring intergenerational warmth and community spirit',
      'Freedom to join lively group gatherings or choose quiet individual pastimes',
    ],
    cutoutPosition: 'cutout-br-cream',
    primaryImage: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Bright botanical arrangements and creative art table prepared for resident engagement',
      caption: 'Creative arts, games, live music, fitness, and scenic Peninsula drives',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    insetNote: {
      heading: 'Always an Invitation, Never Pressure',
      body: 'Every activity is adapted to how a resident feels that day—honoring both spirited camaraderie and quiet observation.',
    },
  },
  {
    id: 'spaces',
    chapterNumber: 'Chapter III',
    kicker: 'Indoor & Outdoor Sanctuary',
    title: 'Sunlit Lounges, Library Corners & Garden Courtyard Air',
    subtitle: 'Homelike common areas and outdoor patio settings at 995 East Market Street',
    leadParagraph:
      'A sense of belonging grows naturally when a community is scaled like a welcoming residence rather than a clinical institution. Throughout Mission Villa, residents move easily between bright social lounges, a quiet library reading nook, an on-site salon/spa area, and comfortable dining spaces.',
    secondaryParagraph:
      'Step outside, and our garden, courtyard, and patio settings offer a peaceful retreat in the heart of Daly City. Surrounded by greenery and sheltered seating, residents and visiting relatives can enjoy fresh air, morning sunshine, or unhurried afternoon conversation.',
    pullQuote:
      'Thoughtfully arranged indoor lounges and tranquil courtyard gardens give every resident room to gather or unwind.',
    signatureExperiences: [
      {
        label: 'Garden, Courtyard & Patio',
        detail: 'Protected outdoor seating areas for fresh air, sunshine, and botanical calm.',
      },
      {
        label: 'Social Lounges & Library',
        detail: 'Inviting living rooms with Wi-Fi in common spaces, reading selections, and cozy seating.',
      },
      {
        label: 'Salon, Spa & Everyday Comforts',
        detail: 'On-site grooming and pampering spaces that support personal pride and relaxation.',
      },
    ],
    communityHighlights: [
      'Garden, courtyard, and patio spaces designed for safe, relaxed outdoor enjoyment',
      'Comfortable communal living rooms and quiet library area for reading or conversation',
      'On-site salon/spa services and concierge coordination (confirm current schedule with team)',
      'Private and shared suites with private bathrooms just steps away from common areas',
    ],
    cutoutPosition: 'cutout-tl-cream',
    primaryImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Peaceful sunlit garden courtyard and patio seating surrounded by greenery',
      caption: 'Outdoor courtyard, garden, and patio settings alongside homelike indoor lounges',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    insetNote: {
      heading: 'Daly City Neighborhood Roots',
      body: 'Located at 995 East Market Street near San Bruno Mountain, Mission Villa offers convenient parking and easy access for Peninsula and San Francisco families.',
    },
  },
  {
    id: 'family-connection',
    chapterNumber: 'Chapter IV',
    kicker: 'Family & Belonging',
    title: 'Meaningful Family Visits & Shared Milestones',
    subtitle: 'Restoring the joy of simply being a spouse, son, daughter, or grandchild again',
    leadParagraph:
      'When a loved one moves into Memory Care or joins us for a short-term Respite Care stay, family life doesn’t pause—it deepens. Because our 24-hour staff handles the physical and logistical demands of daily caregiving, family visits return to what matters most: unhurried conversation, shared laughter, and genuine presence.',
    secondaryParagraph:
      'Relatives are warmly welcomed to drop by for a cup of tea on the patio, join live entertainment afternoons, share a meal in our private dining area, or talk with our care team about the small moments that brightened their loved one’s week.',
    pullQuote:
      'When daily caregiving strain is lifted, family visits become treasured time together again.',
    signatureExperiences: [
      {
        label: 'Open, Welcoming Family Visits',
        detail: 'Comfortable indoor lounges and outdoor patio seating where relatives feel right at home.',
      },
      {
        label: 'Personalized Life-Story Care',
        detail: 'Ongoing partnership with families to weave familiar traditions into daily life.',
      },
      {
        label: 'Shared Celebrations & Gatherings',
        detail: 'Seasonal community festivities, music afternoons, and private family dining moments.',
      },
    ],
    communityHighlights: [
      'Warm hospitality for visiting spouses, adult children, grandchildren, and friends',
      'Convenient guest parking at our 995 East Market Street community in Daly City',
      'Direct, approachable communication with our care and life-enrichment staff',
      'Seamless inclusion for both full-time Memory Care residents and short-term Respite Care guests',
    ],
    cutoutPosition: 'cutout-bl-cream',
    primaryImage: {
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Warm, affectionate conversation between a senior resident, family member, and care partner',
      caption: 'Meaningful family visits and enduring relationships at the heart of community life',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    insetNote: {
      heading: 'A Community That Knows Your Family',
      body: 'Our team takes pride in knowing not just our residents, but the family members who love and advocate for them.',
    },
  },
];

export const CURATED_DAY_ILLUSTRATION: DayInTheLifeMoment[] = [
  {
    id: 'morning-table',
    windowIndex: '01',
    timeOfDayLabel: 'Morning Rhythm',
    rhythmTheme: 'Unhurried Awakening & Breakfast Hospitality',
    title: 'Starting the Day at a Personal, Reassuring Pace',
    subtitle: 'Dignified morning support followed by fresh coffee and a warm breakfast table',
    narrative:
      'There is no harsh morning bell at Mission Villa. Each resident wakes according to their natural rhythm, supported with respectful assistance for bathing, grooming, and dressing in their private or companion suite before strolling into the dining room for a freshly prepared breakfast.',
    residentChoices: [
      'Enjoying morning coffee or herbal tea at a favorite dining room table',
      'Quiet reading or newspaper conversation in the sunlit front lounge',
      'Unhurried personal grooming and wardrobe choice with familiar care staff',
    ],
    sensoryTouchpoints: [
      'Aroma of fresh coffee and warm chef-prepared breakfast dishes',
      'Natural morning light filtering into suites and communal sitting rooms',
    ],
    illustrationDisclaimer:
      'Curated day-in-the-life illustration — daily rhythms adapt to individual resident preferences and current community programming rather than a fixed timetable.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Soft morning sunlight entering a peaceful, homelike suite',
      caption: 'Unhurried mornings tailored to lifelong waking and breakfast habits',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'creative-vitality',
    windowIndex: '02',
    timeOfDayLabel: 'Late Morning',
    rhythmTheme: 'Movement, Art & Cognitive Spark',
    title: 'Gentle Fitness, Creative Arts & Tabletop Games',
    subtitle: 'Small-group invitations that awaken energy, coordination, and camaraderie',
    narrative:
      'As the morning unfolds, our activity director brings neighbors together for gentle chair fitness and stretching, followed by hands-on art workshops, word games, or Legacies™ reminiscence circles that celebrate personal life stories.',
    residentChoices: [
      'Guided chair exercise and gentle movement to uplifting music',
      'Painting, floral arranging, or tactile craft projects in the activity lounge',
      'Friendly tabletop games, puzzles, or one-on-one conversation with staff',
    ],
    sensoryTouchpoints: [
      'Upbeat familiar melodies and friendly encouragement from neighbors',
      'Tactile art materials, botanical blooms, and shared laughter',
    ],
    illustrationDisclaimer:
      'Curated day-in-the-life illustration — activities vary daily and are always optional, not a rigid schedule.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Colourful floral and creative materials prepared for morning group activities',
      caption: 'Morning fitness, creative art, and friendly games guided by our activity team',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'midday-gathering',
    windowIndex: '03',
    timeOfDayLabel: 'Midday Gathering',
    rhythmTheme: 'The Chef’s Table & Neighbourly Connection',
    title: 'A Nourishing Midday Meal Shared With Friends',
    subtitle: 'Full-table service, comforting seasonal dishes, and relaxed conversation',
    narrative:
      'Midday brings everyone back to the dining room for a freshly prepared lunch. Staff members offer attentive escort and table service, ensuring every resident—including short-term Respite Care guests—feels welcomed into the conversation.',
    residentChoices: [
      'Savoring chef-prepared midday courses with table companions',
      'Sharing a celebratory family lunch in our private dining space',
      'Relaxing after lunch in the library nook or common living room',
    ],
    sensoryTouchpoints: [
      'Warm, freshly plated dishes prepared in our community kitchen',
      'Familiar faces at the table and unhurried midday conversation',
    ],
    illustrationDisclaimer:
      'Curated day-in-the-life illustration — menu offerings and dining times reflect current community hospitality.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Nourishing midday meal served at a welcoming community table',
      caption: 'Midday chef-prepared dining that nourishes both body and friendship',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'afternoon-outings',
    windowIndex: '04',
    timeOfDayLabel: 'Afternoon Discovery',
    rhythmTheme: 'Scenic Drives, Live Entertainment & Courtyard Air',
    title: 'Peninsula Scenic Drives, Live Music & Garden Strolls',
    subtitle: 'Stepping outdoors or gathering for music and afternoon refreshments',
    narrative:
      'Afternoons at Mission Villa balance discovery with calm. Depending on the day’s calendar, residents may head out on a scheduled scenic drive around Daly City and the coast, enjoy live musical entertainment in the lounge, or relax with family in the garden courtyard.',
    residentChoices: [
      'Joining a scheduled scenic drive to enjoy San Mateo County views',
      'Listening to live music or afternoon entertainment with refreshments',
      'Sitting on the sunlit patio or strolling the garden courtyard with visiting relatives',
    ],
    sensoryTouchpoints: [
      'Fresh Daly City afternoon breeze in the sheltered courtyard patio',
      'Live acoustic melodies, classic songs, and afternoon snacks',
    ],
    illustrationDisclaimer:
      'Curated day-in-the-life illustration — scenic drives and live entertainment are scheduled periodically; ask our team for a current monthly calendar.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Sunlit garden courtyard and outdoor seating area for afternoon relaxation',
      caption: 'Afternoon scenic drives, live music, and fresh air on the courtyard patio',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'evening-sanctuary',
    windowIndex: '05',
    timeOfDayLabel: 'Evening Calm',
    rhythmTheme: 'Comforting Dinner, Family Visits & Restful Wind-Down',
    title: 'A Peaceful Evening & Reassuring Nighttime Support',
    subtitle: 'Warm dinner hospitality followed by calm transitions into a restful night',
    narrative:
      'As evening settles over Daly City, residents gather for a comforting dinner before transitioning into quiet lounge conversation, classic films, or early-evening family visits. When it is time to rest, our 24-hour staff provides gentle evening care and reassuring overnight presence.',
    residentChoices: [
      'Enjoying a warm evening meal and unhurried dessert with neighbors',
      'Visiting with family members after work in our cozy sitting areas',
      'Retiring to a personalized private or companion suite with 24-hour staff peace of mind',
    ],
    sensoryTouchpoints: [
      'Soft evening lighting and calm, familiar acoustic atmosphere',
      'Comfort of familiar family photos and personal bedding in each suite',
    ],
    illustrationDisclaimer:
      'Curated day-in-the-life illustration — evening routines are personalized to each resident’s comfort and sleep habits.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm, softly lit residential lounge in the early evening',
      caption: 'Calm evening routines, family visits, and 24-hour on-site reassurance',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const EDITORIAL_GALLERY_BAND_PLATES: EditorialGalleryPlate[] = [
  {
    id: 'plate-dining-table',
    plateNumber: 'Plate 01',
    category: 'Dining & Table',
    title: 'The Shared Dining Table',
    locationContext: 'Community Dining Room · Daily Meals',
    caption:
      'Chef-prepared meals served with restaurant-style table hospitality encourage conversation, appetite, and daily camaraderie.',
    aspectClass: 'aspect-[16/10]',
    widthClass: 'lg:col-span-7',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Warm community dining table with freshly prepared meal',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'plate-courtyard-garden',
    plateNumber: 'Plate 02',
    category: 'Garden & Spaces',
    title: 'Sunlit Courtyard & Patio Sanctuary',
    locationContext: 'Outdoor Garden & Patio · 995 East Market St',
    caption:
      'Protected outdoor garden and patio settings where residents and visiting families enjoy fresh air and peaceful greenery.',
    aspectClass: 'aspect-[4/5]',
    widthClass: 'lg:col-span-5',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Tranquil garden greenery and sunlit courtyard path',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'plate-creative-arts',
    plateNumber: 'Plate 03',
    category: 'Activities & Outings',
    title: 'Creative Arts, Games & Reminiscence',
    locationContext: 'Life Enrichment & Legacies™ Programming',
    caption:
      'Daily opportunities for art, tabletop games, gentle fitness, live entertainment, and scheduled scenic drives.',
    aspectClass: 'aspect-[4/3]',
    widthClass: 'lg:col-span-4',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative placeholder: Botanical blossoms and creative table setting for resident activities',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'plate-family-visits',
    plateNumber: 'Plate 04',
    category: 'Family & Belonging',
    title: 'Unhurried Family Visits & Connection',
    locationContext: 'Communal Lounges & Private Dining',
    caption:
      'Warm residential spaces designed so spouses, adult children, and grandchildren feel welcome every time they visit.',
    aspectClass: 'aspect-[4/3]',
    widthClass: 'lg:col-span-4',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative placeholder: Caring conversation and shared smiles with a senior resident',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'plate-homelike-lounge',
    plateNumber: 'Plate 05',
    category: 'Garden & Spaces',
    title: 'Homelike Lounges & Quiet Reading Corners',
    locationContext: 'Common Living Areas & Library Nook',
    caption:
      'Inviting indoor sitting rooms, library selections, and comfortable suites just steps away from daily community life.',
    aspectClass: 'aspect-[4/3]',
    widthClass: 'lg:col-span-4',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative placeholder: Sunlit residential lounge with warm armchairs and natural light',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const LIFESTYLE_SERVICES_PREVIEW: LifestyleServicePreviewCategory[] = [
  {
    id: 'dining-hospitality',
    title: 'Dining & Table Hospitality',
    subtitle: 'Nourishing daily meals in a sociable, homelike setting',
    items: [
      'Chef-prepared breakfast, lunch, and dinner with full-table service',
      'Private dining room options for family visits and special occasions',
      'Nutritious snacks, beverages, and dietary accommodations',
    ],
    verificationNote: 'Confirm specific dietary accommodations and private dining booking with our Daly City team.',
  },
  {
    id: 'enrichment-outings',
    title: 'Activities, Entertainment & Outings',
    subtitle: 'Curated daily engagement led by our activity director',
    items: [
      'Games, creative art workshops, gentle fitness, and live entertainment',
      'Scheduled scenic drives and supervised local outings',
      'Legacies™ Memory Care life-story programming and volunteer programs',
    ],
    verificationNote: 'Ask our team for a sample monthly activity and scenic drive calendar during your tour.',
  },
  {
    id: 'indoor-outdoor-spaces',
    title: 'Community Spaces & Amenities',
    subtitle: 'Indoor comfort paired with outdoor garden and patio air',
    items: [
      'Garden, courtyard, and patio spaces with sheltered seating',
      'Welcoming social lounges, library reading nook, and Wi-Fi in common spaces',
      'On-site salon/spa services and convenient visitor parking',
    ],
    verificationNote: 'Some amenities (such as salon/spa services) may carry separate scheduling or fee terms.',
  },
  {
    id: 'everyday-support',
    title: '24-Hour Support & Everyday Ease',
    subtitle: 'Practical care that frees residents and families to enjoy each day',
    items: [
      '24-hour on-site staff, routine assessments, and escort/transfer support',
      'Housekeeping, personal laundry, linen service, and concierge assistance',
      'Scheduled transportation and emergency alert devices',
    ],
    verificationNote: 'Individual care inclusions are tailored through a personal assessment prior to move-in.',
  },
];

// ============================================================================
// PAGE 04: SERVICES & AMENITIES (/services-and-amenities) — SOURCE-GROUNDED DATA
// ============================================================================
// Grounded in https://missionvillaseniorliving.com/services-and-amenities/
// Original-site service examples: 24-hour staff, laundry, concierge, scheduled
// transportation, activity director, salon/spa, volunteer programs, routine
// assessments, escort/transfer support.
// Original-site amenity examples: restaurant/full-table service, private dining,
// patio, courtyard, parking, emergency alert device, library, Wi-Fi in common
// spaces, dietary options.
// Note: These are original-site descriptions, not fresh availability guarantees.
// All images are marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH.

export type ServiceAmenityCategoryId =
  | 'Support'
  | 'Dining'
  | 'Lifestyle'
  | 'Community Spaces'
  | 'Convenience';

export type OfferingClassification = 'Community Service' | 'Community Amenity';

export interface ServiceAmenityCategoryMeta {
  id: ServiceAmenityCategoryId;
  index: string;
  label: string;
  shortTitle: string;
  editorialHeading: string;
  editorialSubtitle: string;
  editorialNarrative: string;
  familyReassuranceNote: string;
  availabilityNote: string;
  editorialPairingImage: {
    src: string;
    alt: string;
    caption: string;
    locationLabel: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
  secondaryVignette: {
    title: string;
    detail: string;
  };
}

export interface ServiceAmenityItem {
  id: string;
  code: string;
  category: ServiceAmenityCategoryId;
  classification: OfferingClassification;
  title: string;
  subtitle: string;
  description: string;
  howItSupportsResidents: string[];
  askUsPrompt: string;
  confirmationFlag: string;
  keywords: string[];
}

export interface AskUsDisclosureTopic {
  id: string;
  index: string;
  topic: string;
  headline: string;
  explanation: string;
  questionsToBring: string[];
  inquiryPresetNote: string;
}

export const SERVICES_AMENITIES_CATEGORIES: ServiceAmenityCategoryMeta[] = [
  {
    id: 'Support',
    index: '01',
    label: 'Support',
    shortTitle: '24-Hour Support & Care',
    editorialHeading: 'Dependable On-Site Support That Protects Personal Dignity',
    editorialSubtitle: '24-hour staff presence, routine assessments, escort assistance, and emergency alert confidence',
    editorialNarrative:
      'Practical care at Mission Villa is woven quietly into daily life so residents feel supported without feeling managed. Our on-site team is present 24 hours a day to assist with daily routines, help residents move comfortably between their suites and common areas, and adjust care plans through routine assessments as needs evolve.',
    familyReassuranceNote:
      'Whether your loved one joins us for full-time Legacies™ Memory Care or a short-term Respite Care stay, daily assistance is shaped around personal history, comfort, and respect.',
    availabilityNote:
      'Original-site service descriptions — specific personal care levels, transfer assistance scope, and routine assessment intervals are confirmed during your family’s pre-move-in assessment.',
    editorialPairingImage: {
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm, attentive conversation between a senior resident and a care team member in a sunlit lounge',
      caption: '24-hour staff presence, routine assessments, and respectful escort support',
      locationLabel: 'On-Site Support · 995 East Market Street',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    secondaryVignette: {
      title: 'Individualized Care Review',
      detail: 'Routine assessments help our Daly City team align daily support with changing mobility or memory care needs.',
    },
  },
  {
    id: 'Dining',
    index: '02',
    label: 'Dining',
    shortTitle: 'Dining & Table Hospitality',
    editorialHeading: 'Restaurant-Style Full-Table Service & Shared Nourishment',
    editorialSubtitle: 'Freshly prepared meals, tailored dietary options, and private dining for visiting families',
    editorialNarrative:
      'Dining at Mission Villa is an unhurried social anchor of the day. Residents gather in our welcoming dining room for chef-prepared meals served directly at the table, where familiar flavors, attentive hospitality, and conversation with neighbors turn every meal into a moment of belonging.',
    familyReassuranceNote:
      'Visiting spouses, adult children, and grandchildren can also arrange private dining moments to celebrate birthdays, anniversaries, or quiet family lunches together.',
    availabilityNote:
      'Original-site amenity descriptions — confirm specific dietary accommodations, texture-modified or therapeutic meal options, and private dining reservation guidelines with our team.',
    editorialPairingImage: {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Freshly prepared meal served at a warm, inviting community dining table',
      caption: 'Full-table restaurant-style service, dietary options, and private family dining',
      locationLabel: 'Community Dining Room & Private Dining',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    secondaryVignette: {
      title: 'Hospitality at Every Meal',
      detail: 'Escort support to the dining table and attentive mealtime cueing help every resident dine with ease.',
    },
  },
  {
    id: 'Lifestyle',
    index: '03',
    label: 'Lifestyle',
    shortTitle: 'Lifestyle & Enrichment',
    editorialHeading: 'Engaging Daily Programming, Salon Care & Community Spirit',
    editorialSubtitle: 'Dedicated activity director, on-site salon/spa comfort, and volunteer connection',
    editorialNarrative:
      'A meaningful day balances purposeful activity with personal pride and relaxation. Guided by our dedicated activity director, daily life includes creative art, tabletop games, gentle fitness, live entertainment, and volunteer programs—alongside an on-site salon/spa setting where residents can enjoy familiar grooming and self-care.',
    familyReassuranceNote:
      'All programming is adapted to how a resident feels each day, weaving Legacies™ Memory Care life-story touchpoints into group and one-on-one moments.',
    availabilityNote:
      'Original-site service descriptions — ask our Daly City team for a current monthly activity calendar, volunteer schedule, and salon/spa appointment availability or fee details.',
    editorialPairingImage: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Botanical arrangements and creative workshop table prepared for resident engagement',
      caption: 'Activity director programming, volunteer warmth, and on-site salon/spa care',
      locationLabel: 'Life Enrichment & Salon Spaces',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    secondaryVignette: {
      title: 'Personal Pride & Pampering',
      detail: 'A fresh haircut, manicure, or quiet grooming session on-site helps residents feel confident and cared for.',
    },
  },
  {
    id: 'Community Spaces',
    index: '04',
    label: 'Community Spaces',
    shortTitle: 'Community Spaces & Outdoors',
    editorialHeading: 'Homelike Indoor Lounges, Library Corners & Courtyard Air',
    editorialSubtitle: 'Enclosed courtyard, sunlit patio, quiet library nook, and Wi-Fi in common spaces',
    editorialNarrative:
      'Beyond private and companion suites, Mission Villa is arranged like a welcoming residential house. Residents and visiting relatives can step out into our garden courtyard and patio for fresh Daly City air, browse books in the library nook, or connect with family over Wi-Fi in comfortable communal lounges.',
    familyReassuranceNote:
      'Having diverse indoor and outdoor gathering spots means families always have a calm, natural place to visit outside a resident’s bedroom suite.',
    availabilityNote:
      'Original-site amenity descriptions — we invite families to walk through our courtyard, patio, library area, and lounges in person during a tour at 995 East Market Street.',
    editorialPairingImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Peaceful sunlit garden courtyard and sheltered outdoor patio seating',
      caption: 'Outdoor courtyard and patio sanctuaries paired with welcoming indoor lounges and library',
      locationLabel: 'Courtyard, Patio & Common Areas',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    secondaryVignette: {
      title: 'Connected Common Areas',
      detail: 'Wi-Fi in common spaces supports family video calls, digital photo sharing, and favourite music.',
    },
  },
  {
    id: 'Convenience',
    index: '05',
    label: 'Convenience',
    shortTitle: 'Everyday Convenience',
    editorialHeading: 'Practical Services That Lift the Load Off Families',
    editorialSubtitle: 'Personal laundry, concierge coordination, scheduled transportation, and visitor parking',
    editorialNarrative:
      'Moving into senior living should free both residents and relatives from exhausting household logistics. From personal laundry and linen care to concierge assistance, scheduled transportation, and convenient on-site parking for visitors, our everyday conveniences make life smoother for everyone.',
    familyReassuranceNote:
      'When laundry, housekeeping, and coordination are handled reliably on-site, family visits can focus entirely on companionship and connection.',
    availabilityNote:
      'Original-site service & amenity descriptions — confirm scheduled transportation routes, concierge scope, and laundry inclusions for Memory Care or Respite Care stays with our team.',
    editorialPairingImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Welcoming residential reception and sunlit lounge at Mission Villa',
      caption: 'Personal laundry, concierge support, scheduled transportation, and convenient parking',
      locationLabel: 'Everyday Hospitality · Daly City, CA',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
    secondaryVignette: {
      title: 'Easy Peninsula Access',
      detail: 'On-site parking at 995 East Market Street makes dropping by for a visit simple for San Francisco and Peninsula relatives.',
    },
  },
];

export const SERVICES_AND_AMENITIES_ITEMS: ServiceAmenityItem[] = [
  // --- CATEGORY 01: SUPPORT (4 Items) ---
  {
    id: 'service-24-hour-staff',
    code: 'SUP · 01',
    category: 'Support',
    classification: 'Community Service',
    title: '24-Hour Staff Availability',
    subtitle: 'Around-the-clock on-site care team presence for daily assistance and nighttime peace of mind',
    description:
      'Dedicated staff members are on-site 24 hours a day to respond to resident needs, assist with activities of daily living, and maintain a calm, nurturing environment day and night.',
    howItSupportsResidents: [
      'Uninterrupted daytime and overnight staff presence in the community',
      'Respectful assistance with bathing, dressing, grooming, and personal routines',
      'Reassuring check-ins that help families rest easier at home',
    ],
    askUsPrompt: 'How is 24-hour staff support coordinated across daytime routines and overnight hours?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm specific care-tier inclusions during pre-move-in assessment.',
    keywords: ['24-hour staff', 'overnight', 'caregivers', 'supervision', 'support', 'safety', 'assistance'],
  },
  {
    id: 'service-routine-assessments',
    code: 'SUP · 02',
    category: 'Support',
    classification: 'Community Service',
    title: 'Routine Assessments & Care Plan Review',
    subtitle: 'Ongoing observation and personalized care adjustments as resident needs change',
    description:
      'Because memory loss and physical needs evolve over time, our team conducts routine assessments in collaboration with families to ensure each resident’s daily support plan remains comfortable and appropriate.',
    howItSupportsResidents: [
      'Initial pre-stay or pre-move-in evaluation to tailor daily support from day one',
      'Periodic routine reviews of daily living, nutrition, and engagement preferences',
      'Proactive communication with family members when care needs shift',
    ],
    askUsPrompt: 'How often are routine assessments conducted, and how are families included in care plan updates?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm assessment frequency and family care-conference cadence.',
    keywords: ['routine assessments', 'care plan', 'evaluation', 'wellness', 'dementia', 'memory care'],
  },
  {
    id: 'service-escort-transfer',
    code: 'SUP · 03',
    category: 'Support',
    classification: 'Community Service',
    title: 'Escort & Transfer Support',
    subtitle: 'Gentle guidance and mobility assistance between suites, dining, and activities',
    description:
      'Our staff offers patient escort and transfer assistance to help residents navigate comfortably from their private or companion suites to the dining room, activity lounges, and outdoor courtyard.',
    howItSupportsResidents: [
      'Unhurried personal escort to chef-prepared meals and daily group gatherings',
      'Respectful transfer assistance aligned with each resident’s mobility assessment',
      'Encourages participation in community life without fear of disorientation',
    ],
    askUsPrompt: 'What level of mobility transfer support can Mission Villa accommodate under its RCFE license?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm mobility and two-person or mechanical transfer eligibility criteria.',
    keywords: ['escort', 'transfer support', 'mobility', 'walking', 'wheelchair', 'navigation', 'assistance'],
  },
  {
    id: 'amenity-emergency-alert',
    code: 'SUP · 04',
    category: 'Support',
    classification: 'Community Amenity',
    title: 'Emergency Alert Device & Call System',
    subtitle: 'Accessible call and alert features supporting prompt staff response',
    description:
      'Suites and community spaces incorporate emergency alert device capabilities so residents can signal for assistance and staff can respond promptly whenever help is needed.',
    howItSupportsResidents: [
      'Emergency alert capability in private, Companion Unit, and Jack & Jill suites',
      'Supports resident safety and reassurance during quiet hours in suites',
      'Integrated with 24-hour on-site staff presence',
    ],
    askUsPrompt: 'How do emergency alert devices work in suites and common spaces for Memory Care residents?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm specific wearable vs. in-suite alert hardware per suite format.',
    keywords: ['emergency alert device', 'call button', 'safety', 'pendant', 'security', 'suite'],
  },

  // --- CATEGORY 02: DINING (3 Items) ---
  {
    id: 'amenity-full-table-service',
    code: 'DIN · 01',
    category: 'Dining',
    classification: 'Community Amenity',
    title: 'Restaurant-Style Full-Table Service',
    subtitle: 'Chef-prepared breakfast, lunch, and dinner served directly to residents at the table',
    description:
      'Mealtimes are hosted in our welcoming dining room with full-table service. Rather than navigating cafeterias or trays, residents are seated comfortably with neighbors and served freshly prepared dishes.',
    howItSupportsResidents: [
      'Three daily chef-prepared meals served tableside with warm hospitality',
      'Eliminates buffet confusion while encouraging social conversation and appetite',
      'Included for both full-time Memory Care residents and short-term Respite Care guests',
    ],
    askUsPrompt: 'May we see a sample weekly menu and observe how full-table service works during our visit?',
    confirmationFlag: 'Original-site amenity description — ask team for current seasonal menu examples.',
    keywords: ['restaurant', 'full-table service', 'dining', 'meals', 'chef', 'breakfast', 'lunch', 'dinner'],
  },
  {
    id: 'amenity-private-dining',
    code: 'DIN · 02',
    category: 'Dining',
    classification: 'Community Amenity',
    title: 'Private Dining for Family Gatherings',
    subtitle: 'Dedicated dining setting for shared family meals, birthdays, and milestones',
    description:
      'Families are always welcome at our table. Our private dining amenity offers relatives an intimate space to share a meal, celebrate a birthday or anniversary, or enjoy unhurried family time.',
    howItSupportsResidents: [
      'Inviting space for spouses, children, and grandchildren to dine together',
      'Keeps cherished family holiday and birthday traditions alive at Mission Villa',
      'Coordinated with our dining and concierge team in advance',
    ],
    askUsPrompt: 'How do families reserve the private dining space for a visit or celebration?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm advance notice and guest meal policies for private dining.',
    keywords: ['private dining', 'family meals', 'celebration', 'birthday', 'guests', 'hospitality'],
  },
  {
    id: 'amenity-dietary-options',
    code: 'DIN · 03',
    category: 'Dining',
    classification: 'Community Amenity',
    title: 'Tailored Dietary Options & Snacks',
    subtitle: 'Thoughtful culinary adjustments for nutritional needs and personal food preferences',
    description:
      'Our kitchen prepares nourishing meals with dietary options that respect individual health guidance, lifelong food preferences, and comforting familiar flavors, complemented by snacks and beverages.',
    howItSupportsResidents: [
      'Accommodations for common senior dietary needs and physician-guided nutrition',
      'Incorporates favorite comfort foods learned through our Legacies™ life-story profile',
      'Nutritious snacks and hydration offered throughout the day',
    ],
    askUsPrompt: 'Which specific dietary accommodations (such as low-sodium, diabetic-friendly, or texture-modified meals) are available?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm specific therapeutic or texture-modified dietary capabilities.',
    keywords: ['dietary options', 'nutrition', 'food', 'snacks', 'hydration', 'special diet', 'menu'],
  },

  // --- CATEGORY 03: LIFESTYLE (3 Items) ---
  {
    id: 'service-activity-director',
    code: 'LIF · 01',
    category: 'Lifestyle',
    classification: 'Community Service',
    title: 'Dedicated Activity Director & Daily Programming',
    subtitle: 'Curated group and individual engagement tailored to resident interests and abilities',
    description:
      'Our activity director designs a welcoming rhythm of daily opportunities—including tabletop games, creative art, gentle fitness, music, live entertainment, reminiscence, and scheduled scenic drives.',
    howItSupportsResidents: [
      'Small-group and one-on-one activities adapted for cognitive and physical comfort',
      'Integrates Legacies™ Memory Care life-story themes into daily enrichment',
      'Always an invitation to connect, never forced participation',
    ],
    askUsPrompt: 'Can you share this month’s activity calendar and how the activity director adapts programs for different stages of dementia?',
    confirmationFlag: 'Original-site service description — confirm current monthly activity and scenic drive schedule.',
    keywords: ['activity director', 'activities', 'games', 'art', 'fitness', 'music', 'entertainment', 'scenic drives'],
  },
  {
    id: 'service-salon-spa',
    code: 'LIF · 02',
    category: 'Lifestyle',
    classification: 'Community Service',
    title: 'On-Site Salon & Spa Services',
    subtitle: 'Convenient haircare, grooming, and pampering right inside the community',
    description:
      'Looking and feeling one’s best is an important part of personal dignity. Our on-site salon/spa space allows residents to enjoy hair styling, grooming, and relaxing self-care without leaving the building.',
    howItSupportsResidents: [
      'Familiar, comforting salon experience in a calm on-site setting',
      'Supports personal pride, self-esteem, and gentle sensory relaxation',
      'Eliminates the stress of outside salon travel for residents with memory loss',
    ],
    askUsPrompt: 'What days are salon/spa services offered, and how are appointments scheduled or billed?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm salon/spa operating schedule and whether services carry separate fees.',
    keywords: ['salon', 'spa', 'haircut', 'grooming', 'beauty', 'barber', 'pampering'],
  },
  {
    id: 'service-volunteer-programs',
    code: 'LIF · 03',
    category: 'Lifestyle',
    classification: 'Community Service',
    title: 'Community Volunteer Programs',
    subtitle: 'Friendly neighborhood connection, music, and companionship visits',
    description:
      'Mission Villa welcomes community volunteer programs that bring fresh energy, music, conversation, and intergenerational warmth into our Daly City residence.',
    howItSupportsResidents: [
      'Fosters a genuine sense of neighborhood belonging in Daly City',
      'Enriches music afternoons, seasonal celebrations, and social hours',
      'Guided by our activity team to ensure a calm, positive experience for residents',
    ],
    askUsPrompt: 'What volunteer programs or visiting community groups currently participate at Mission Villa?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm active volunteer partnerships and visiting schedules.',
    keywords: ['volunteer programs', 'community', 'visitors', 'music', 'companionship', 'social'],
  },

  // --- CATEGORY 04: COMMUNITY SPACES (4 Items) ---
  {
    id: 'amenity-courtyard',
    code: 'SPC · 01',
    category: 'Community Spaces',
    classification: 'Community Amenity',
    title: 'Enclosed Garden Courtyard',
    subtitle: 'Tranquil outdoor greenery and walking paths for fresh air and sunshine',
    description:
      'Our garden courtyard offers residents and visiting families a peaceful outdoor sanctuary surrounded by greenery—ideal for morning sunshine, gentle strolls, or quiet botanical appreciation.',
    howItSupportsResidents: [
      'Protected outdoor environment designed for comfortable, relaxed enjoyment',
      'Encourages natural daylight exposure and gentle outdoor movement',
      'A favourite setting for unhurried afternoon visits with family members',
    ],
    askUsPrompt: 'May we walk through the garden courtyard during our tour to see how residents access outdoor spaces?',
    confirmationFlag: 'Original-site amenity description — view courtyard in person during your Daly City visit.',
    keywords: ['courtyard', 'garden', 'outdoor', 'greenery', 'fresh air', 'sunshine', 'nature'],
  },
  {
    id: 'amenity-patio',
    code: 'SPC · 02',
    category: 'Community Spaces',
    classification: 'Community Amenity',
    title: 'Sunlit Outdoor Patio & Seating Areas',
    subtitle: 'Comfortable open-air seating for conversation, refreshments, and family visits',
    description:
      'Adjacent to our indoor common areas, the outdoor patio provides sheltered seating where residents can enjoy a cup of tea, listen to birdsong, or chat with neighbors and relatives.',
    howItSupportsResidents: [
      'Accessible seating areas for outdoor social gatherings and refreshments',
      'Seamless indoor-outdoor connection from communal lounges',
      'Welcoming spot for family visits on pleasant Peninsula afternoons',
    ],
    askUsPrompt: 'How are the patio and courtyard used for seasonal activities or family visits?',
    confirmationFlag: 'Original-site amenity description — view patio seating areas during your community tour.',
    keywords: ['patio', 'seating', 'outdoor', 'terrace', 'fresh air', 'relaxation'],
  },
  {
    id: 'amenity-library',
    code: 'SPC · 03',
    category: 'Community Spaces',
    classification: 'Community Amenity',
    title: 'Community Library & Quiet Reading Nook',
    subtitle: 'A restful indoor corner for books, newspapers, puzzles, and quiet reflection',
    description:
      'For residents who cherish quiet contemplation, reading, or one-on-one conversation away from larger group activities, our library space offers a calm, homelike retreat.',
    howItSupportsResidents: [
      'Curated reading materials, large-print selections, and tabletop puzzles',
      'Peaceful acoustic setting for afternoon reading or quiet family visits',
      'Balances lively communal lounges with a serene indoor sanctuary',
    ],
    askUsPrompt: 'Where is the library area located in relation to resident suites and social lounges?',
    confirmationFlag: 'Original-site amenity description — inspect library and common lounges during your visit.',
    keywords: ['library', 'reading', 'books', 'quiet', 'lounge', 'puzzles', 'sanctuary'],
  },
  {
    id: 'amenity-wifi-common-spaces',
    code: 'SPC · 04',
    category: 'Community Spaces',
    classification: 'Community Amenity',
    title: 'Wi-Fi in Common Spaces',
    subtitle: 'Wireless connectivity supporting family video calls, music, and visiting relatives',
    description:
      'Complimentary Wi-Fi in common spaces makes it easy for residents and visiting family members to share digital photo albums, stream favorite classic songs, or connect on video calls with distant grandchildren.',
    howItSupportsResidents: [
      'Supports video calls and digital connection with out-of-town relatives',
      'Allows visiting family members to share photos, videos, and music in lounges',
      'Helps our team cue familiar music or reminiscence media during activities',
    ],
    askUsPrompt: 'Is Wi-Fi available throughout the common lounges and dining areas for family video calls?',
    confirmationFlag: 'Original-site amenity description — confirm coverage details if in-suite Wi-Fi is also desired.',
    keywords: ['wi-fi', 'wifi', 'internet', 'common spaces', 'video calls', 'technology', 'connection'],
  },

  // --- CATEGORY 05: CONVENIENCE (4 Items) ---
  {
    id: 'service-laundry',
    code: 'CNV · 01',
    category: 'Convenience',
    classification: 'Community Service',
    title: 'Personal Laundry & Linen Service',
    subtitle: 'Regular laundering of personal wardrobe, bed linens, and towels',
    description:
      'Our staff handles personal laundry and fresh bed and bath linens, ensuring every resident’s wardrobe and suite remain clean, comfortable, and thoughtfully cared for without burdening family members.',
    howItSupportsResidents: [
      'Routine laundering of personal clothing and suite bed/bath linens',
      'Paired with attentive housekeeping to keep suites fresh and homelike',
      'Frees visiting family members from spending tour or visit time doing chores',
    ],
    askUsPrompt: 'How often are personal laundry and linen services performed, and how should families label clothing?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm laundry frequency and garment-labeling guidelines before move-in.',
    keywords: ['laundry', 'linens', 'housekeeping', 'clothing', 'wardrobe', 'cleaning', 'convenience'],
  },
  {
    id: 'service-concierge',
    code: 'CNV · 02',
    category: 'Convenience',
    classification: 'Community Service',
    title: 'Concierge Assistance & Family Coordination',
    subtitle: 'Helpful front-desk coordination for families, appointments, and community requests',
    description:
      'Our concierge service acts as a welcoming point of contact for residents and families—assisting with visit coordination, family communication, local arrangements, and everyday logistical questions.',
    howItSupportsResidents: [
      'Warm greeting and guidance for visiting relatives and guests at 995 East Market Street',
      'Assistance coordinating salon appointments, private dining, or transportation requests',
      'Clear communication bridge between family members and our Daly City team',
    ],
    askUsPrompt: 'What everyday requests and family coordination can the concierge team assist with?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm front-desk/concierge hours and scope of coordination services.',
    keywords: ['concierge', 'front desk', 'reception', 'coordination', 'family', 'appointments', 'help'],
  },
  {
    id: 'service-scheduled-transportation',
    code: 'CNV · 03',
    category: 'Convenience',
    classification: 'Community Service',
    title: 'Scheduled Transportation',
    subtitle: 'Coordinated transportation for community outings, scenic drives, and scheduled needs',
    description:
      'Mission Villa provides scheduled transportation services, supporting both supervised scenic drives around the Peninsula and coordinated transportation needs according to community guidelines.',
    howItSupportsResidents: [
      'Supports scheduled group scenic drives and local Peninsula outings',
      'Coordinated with staff escort support for safe boarding and travel',
      'Helps residents stay connected to the surrounding Daly City and San Mateo County area',
    ],
    askUsPrompt: 'What does scheduled transportation cover (group outings vs. local medical appointments), and how is it arranged?',
    confirmationFlag: 'CLIENT CONFIRMATION REQUIRED: Confirm geographic radius, scheduling notice, and any applicable fees for transportation.',
    keywords: ['scheduled transportation', 'shuttle', 'van', 'appointments', 'scenic drives', 'outings', 'travel'],
  },
  {
    id: 'amenity-parking',
    code: 'CNV · 04',
    category: 'Convenience',
    classification: 'Community Amenity',
    title: 'Convenient On-Site Parking',
    subtitle: 'Easy arrival and visitor parking at 995 East Market Street in Daly City',
    description:
      'Frequent family visits are much easier when arriving is stress-free. Mission Villa offers convenient parking at our Daly City property so spouses, adult children, and friends can visit comfortably.',
    howItSupportsResidents: [
      'Accessible visitor parking at 995 East Market Street, Daly City, CA 94014',
      'Makes dropping by for a meal, afternoon visit, or care meeting simple',
      'Conveniently situated for families traveling from Daly City, San Francisco, and San Mateo County',
    ],
    askUsPrompt: 'Where should family visitors park when arriving for a scheduled tour at 995 East Market Street?',
    confirmationFlag: 'Original-site amenity description — visitor parking available on-site.',
    keywords: ['parking', 'visitor parking', 'arrival', 'daly city', 'car', 'location', 'access'],
  },
];

export const ASK_US_ABOUT_DISCLOSURES: AskUsDisclosureTopic[] = [
  {
    id: 'disclosure-care-eligibility',
    index: '01',
    topic: 'Care Assessment & Service Eligibility',
    headline: 'How Personalized Support Is Tailored Through Routine Assessments',
    explanation:
      'Every older adult living with Alzheimer’s disease, dementia, or temporary recovery needs has a distinct personal rhythm. While 24-hour staff, escort/transfer support, and routine assessments are core pillars of Mission Villa, the specific level of hands-on personal care and transfer assistance is determined through an individualized assessment before move-in or a Respite stay.',
    questionsToBring: [
      'What does the pre-move-in assessment cover for my loved one’s daily routines and mobility?',
      'How do routine assessments adjust care if my loved one’s Memory Care needs change over time?',
    ],
    inquiryPresetNote:
      'Interested in discussing pre-move-in care assessment, 24-hour staff support, and transfer eligibility.',
  },
  {
    id: 'disclosure-inclusions-fees',
    index: '02',
    topic: 'Included Services vs. Optional Add-Ons',
    headline: 'Clarifying What Is Included in Monthly or Short-Term Rates',
    explanation:
      'Many community offerings—such as chef-prepared meals with full-table service, housekeeping, personal laundry, activities, and common-area amenities—are part of daily community life. Certain specialized services (such as on-site salon/spa appointments, specific scheduled transportation requests, or higher levels of individualized care) may have separate scheduling or fee terms.',
    questionsToBring: [
      'Which services and amenities are included in the base rate, and which carry an additional fee?',
      'How are salon/spa appointments and scheduled transportation arranged and billed?',
    ],
    inquiryPresetNote:
      'Would like a clear breakdown of included services/amenities vs. optional fees (salon/spa, transportation).',
  },
  {
    id: 'disclosure-dining-dietary',
    index: '03',
    topic: 'Dietary Options & Private Family Dining',
    headline: 'Confirming Culinary Preferences & Family Table Reservations',
    explanation:
      'Our dining room features restaurant-style full-table service, dietary options, and a private dining space for family occasions. Because nutritional requirements vary from person to person, we encourage families to discuss specific physician-ordered diets, allergies, or texture modifications directly with our team.',
    questionsToBring: [
      'Can your culinary team accommodate my loved one’s specific dietary needs and favorite foods?',
      'How do we reserve the private dining area when our family visits for a birthday or holiday?',
    ],
    inquiryPresetNote:
      'Questions about dietary options, sample menus, and reserving private dining for family visits.',
  },
  {
    id: 'disclosure-program-comparison',
    index: '04',
    topic: 'Memory Care vs. Short-Term Respite Access',
    headline: 'How Services Apply to Full-Time Residents & Short-Term Guests',
    explanation:
      'Both full-time Memory Care residents (in our Legacies™ program) and short-term Respite Care guests enjoy access to our dining room, activity director programming, courtyard, patio, and 24-hour staff support. Availability of specific suite formats (Private Suite, Companion Unit, Jack & Jill) and minimum stay lengths for Respite Care depend on current community openings.',
    questionsToBring: [
      'Do short-term Respite Care guests receive the same dining, laundry, and activity access as full-time residents?',
      'Which suite formats are currently available for Memory Care or Respite Care at 995 East Market Street?',
    ],
    inquiryPresetNote:
      'Comparing service inclusions and suite availability across Memory Care and short-term Respite Care.',
  },
];

export function filterServicesAndAmenities(
  items: ServiceAmenityItem[],
  category: 'All' | ServiceAmenityCategoryId,
  searchQuery: string,
  classificationFilter: 'All' | OfferingClassification = 'All'
): ServiceAmenityItem[] {
  const normalizedQuery = (searchQuery || '').trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    const matchesClassification =
      classificationFilter === 'All' || item.classification === classificationFilter;

    if (!matchesCategory || !matchesClassification) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      item.title,
      item.subtitle,
      item.description,
      item.category,
      item.classification,
      item.code,
      ...item.howItSupportsResidents,
      ...item.keywords,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}
