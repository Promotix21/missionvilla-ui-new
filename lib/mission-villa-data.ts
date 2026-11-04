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

// ============================================================================
// PAGE 05: SUITES & FLOOR PLANS (/suites-and-floor-plans) DATA & PURE HELPERS
// Strictly follows Blueprint §5 Page 05:
// - Verified facts: Private and shared suites with private bathrooms;
//   Named floor-plan formats: Companion Unit and Jack & Jill (plus Private Suite);
//   Original-site apartment features: thermostat, utilities, housekeeping,
//   laundry, emergency alert (flagged for per-unit confirmation).
// - Strict Rule: Never generate fake architectural drawings or invent sq. ft.,
//   room types, or vacancies. Show `Awaiting official floor plan` where assets
//   are not yet provided.
// ============================================================================

export type SuiteGalleryFilterCategory =
  | 'All Accommodations'
  | 'Private Suites'
  | 'Shared & Companion'
  | 'Private Bathrooms & Comfort';

export interface SuiteAccommodationGalleryPlate {
  id: string;
  plateNumber: string;
  category: Exclude<SuiteGalleryFilterCategory, 'All Accommodations'>;
  suiteFormatTag: string;
  title: string;
  subtitle: string;
  storyCaption: string;
  spatialHighlights: string[];
  colSpan: string;
  aspectClass: string;
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface OfficialFloorPlanFormatSpec {
  id: 'companion-unit' | 'jack-and-jill' | 'private-suite';
  code: string;
  name: string;
  sourceClassification: 'Original-Site Named Floor Plan' | 'Original-Site Verified Suite Option';
  occupancyLabel: string;
  bathroomConfiguration: string;
  diagramAssetStatus: 'Awaiting official floor plan';
  officialDiagramPath: null;
  editorialOverview: string;
  whoThisFormatServes: string;
  spatialArrangementNotes: string[];
  includedSuiteSupport: string[];
  tourInspectionQuestions: string[];
  inquirySuitePreset: VisitInquiryInput['suitePreference'];
  inquiryNotePreset: string;
  placeholderPreviewImage: {
    src: string;
    alt: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface SuiteExpectationSpecItem {
  id: string;
  code: string;
  featureName: string;
  category: 'Bathroom & Privacy' | 'In-Suite Comfort' | 'Daily Housekeeping & Care' | 'Safety & Reassurance';
  verificationBadge: 'Verified Original-Site Feature' | 'Confirm Per-Unit Detail on Tour';
  summary: string;
  howItWorksForResidents: string;
  clientConfirmationNote: string;
}

export interface SuitePersonalizationTouchpoint {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  familyExamples: string[];
  legaciesConnection: string;
}

export interface RelatedCommunitySpaceCard {
  id: string;
  code: string;
  spaceName: string;
  atmosphereTag: string;
  description: string;
  connectionToSuiteLife: string;
  destinationHref: string;
  destinationLabel: string;
  placeholderImage: {
    src: string;
    alt: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export const SUITE_ACCOMMODATION_GALLERY_PLATES: SuiteAccommodationGalleryPlate[] = [
  {
    id: 'suite-plate-private-sanctuary',
    plateNumber: 'Plate I',
    category: 'Private Suites',
    suiteFormatTag: 'Private Suite with Private Bathroom',
    title: 'Quiet Personal Sanctuary Filled with Natural Daylight',
    subtitle: 'Restful Private Suite Living',
    storyCaption:
      'Private suites at Mission Villa offer older adults a calm, sunlit personal retreat where familiar furnishings, favorite blankets, and framed family photographs create an immediate sense of ownership and peace.',
    spatialHighlights: [
      'Dedicated sleeping and sitting area for unhurried personal downtime',
      'Attached private bathroom for comfort and dignity day and night',
      'Clear, uncluttered pathways thoughtfully arranged for ease of movement',
    ],
    colSpan: 'lg:col-span-7',
    aspectClass: 'min-h-[360px] sm:min-h-[440px]',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
      alt: 'Warm sunlit private senior suite bedroom with comfortable armchair and soft neutral bedding',
      caption: 'Illustrative private suite bedroom — replace with authentic Mission Villa suite photography before launch',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'suite-plate-companion-living',
    plateNumber: 'Plate II',
    category: 'Shared & Companion',
    suiteFormatTag: 'Companion Unit & Jack & Jill Formats',
    title: 'Shared Fellowship with Thoughtful Personal Space',
    subtitle: 'Companion Unit & Jack & Jill Options',
    storyCaption:
      'For residents who find comfort in daily companionship—or families seeking a shared accommodation—our Companion Unit and Jack & Jill formats balance social warmth with defined personal sleeping areas and a private bathroom.',
    spatialHighlights: [
      'Named original-site floor plan formats: Companion Unit and Jack & Jill',
      'Ideal for older adults who feel more at ease with a nearby suite companion',
      'Individual space for personal keepsakes, photographs, and bedside comforts',
    ],
    colSpan: 'lg:col-span-5',
    aspectClass: 'min-h-[360px] sm:min-h-[440px]',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
      alt: 'Welcoming shared companion suite sitting area with warm natural light',
      caption: 'Illustrative companion suite view — replace with authentic Mission Villa Companion Unit photography before launch',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'suite-plate-reading-corner',
    plateNumber: 'Plate III',
    category: 'Private Suites',
    suiteFormatTag: 'Personal Sitting & Reading Corner',
    title: 'A Comfortable Chair for Family Visits & Quiet Afternoons',
    subtitle: 'Homelike Scale & Familiar Objects',
    storyCaption:
      'Whether sharing afternoon tea with a visiting daughter or listening to favorite music before dinner, suites are arranged to welcome unhurried one-on-one conversation.',
    spatialHighlights: [
      'Room for a favorite reading chair, side table, or memory shadowbox',
      'Housekeeping and personal laundry handled by our team so visits stay focused on family',
      'Supported by 24-hour on-site staff and emergency alert reassurance',
    ],
    colSpan: 'lg:col-span-5',
    aspectClass: 'min-h-[340px] sm:min-h-[400px]',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
      alt: 'Warm armchair and side table by a sunny window in a homelike suite',
      caption: 'Illustrative suite sitting corner — replace with authentic Mission Villa interior photography before launch',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'suite-plate-private-bath-comfort',
    plateNumber: 'Plate IV',
    category: 'Private Bathrooms & Comfort',
    suiteFormatTag: 'Private Bathroom & Daily Ease',
    title: 'Private Bathrooms & Thoughtful Everyday Details',
    subtitle: 'Dignity in Daily Routines',
    storyCaption:
      'Every private and shared suite at Mission Villa includes a private bathroom, supporting dignified morning and evening routines with attentive personal care assistance whenever needed.',
    spatialHighlights: [
      'Private bathroom access in both private and shared suite formats',
      'Individual thermostat comfort control and included utilities (confirm per unit on tour)',
      'Routine housekeeping and linen care included in daily life',
    ],
    colSpan: 'lg:col-span-7',
    aspectClass: 'min-h-[340px] sm:min-h-[400px]',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Clean, calmly lit suite interior and dressing area designed for senior comfort',
      caption: 'Illustrative suite interior — replace with authentic Mission Villa suite bathroom and dressing area photography before launch',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const OFFICIAL_FLOOR_PLAN_FORMATS: OfficialFloorPlanFormatSpec[] = [
  {
    id: 'companion-unit',
    code: 'FORMAT 01 · NAMED FLOOR PLAN',
    name: 'Companion Unit',
    sourceClassification: 'Original-Site Named Floor Plan',
    occupancyLabel: 'Shared Companion Accommodation',
    bathroomConfiguration: 'Includes Private Bathroom',
    diagramAssetStatus: 'Awaiting official floor plan',
    officialDiagramPath: null,
    editorialOverview:
      'Named on the original Mission Villa floor-plans page, the Companion Unit is designed for older adults who thrive on daily camaraderie and reassuring proximity while enjoying their own personal bed and keepsake area.',
    whoThisFormatServes:
      'Seniors in Memory Care or short-term Respite Care who feel comforted by companionship and families exploring a warm, socially connected shared suite option.',
    spatialArrangementNotes: [
      'Defined sleeping and personal furniture zones for each resident within a welcoming shared suite',
      'Direct access to an attached private bathroom shared only within the suite',
      'Easy step-out access to Mission Villa’s dining room, activity lounges, and enclosed courtyard',
    ],
    includedSuiteSupport: [
      '24-hour on-site staff presence and individualized care support',
      'Regular housekeeping, linen refreshes, and personal laundry service',
      'Utilities, thermostat comfort control, and emergency alert features (confirm per unit on tour)',
    ],
    tourInspectionQuestions: [
      'How does your team thoughtfully match suite companions based on daily routines and personality?',
      'May we walk through an actual Companion Unit during our visit to 995 East Market Street?',
    ],
    inquirySuitePreset: 'Shared Suite',
    inquiryNotePreset:
      'Interested in viewing the Companion Unit format in person and confirming current availability and pricing.',
    placeholderPreviewImage: {
      src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative preview of a welcoming shared companion suite at Mission Villa',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'jack-and-jill',
    code: 'FORMAT 02 · NAMED FLOOR PLAN',
    name: 'Jack & Jill Suite',
    sourceClassification: 'Original-Site Named Floor Plan',
    occupancyLabel: 'Dual-Space Shared Bath Format',
    bathroomConfiguration: 'Connecting Private Bathroom',
    diagramAssetStatus: 'Awaiting official floor plan',
    officialDiagramPath: null,
    editorialOverview:
      'Also featured by name on the original Mission Villa floor-plans page, the Jack & Jill format pairs distinct personal sleeping areas with a conveniently positioned connecting private bathroom—offering a thoughtful balance of individual retreat and shared convenience.',
    whoThisFormatServes:
      'Older adults who appreciate greater visual privacy around their sleeping space while sharing a connecting private bathroom with a suite neighbor or spouse.',
    spatialArrangementNotes: [
      'Individual sleeping alcoves or adjoining rooms connected by a shared private bathroom',
      'Allows each resident to personalize their own wall space, bedding, and bedside table',
      'Designed for calm orientation and supportive caregiver assistance day and night',
    ],
    includedSuiteSupport: [
      '24-hour on-site staff support and routine care assessments',
      'Full housekeeping, bed-making, and personal laundry care',
      'Utilities, thermostat comfort control, and emergency alert features (confirm per unit on tour)',
    ],
    tourInspectionQuestions: [
      'How is the connecting bathroom arranged between the two sleeping areas in the Jack & Jill format?',
      'Are Jack & Jill suites available for both full-time Memory Care and short-term Respite stays?',
    ],
    inquirySuitePreset: 'Shared Suite',
    inquiryNotePreset:
      'Interested in seeing the Jack & Jill suite format and learning about current availability and rates.',
    placeholderPreviewImage: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative preview of a Jack & Jill suite arrangement with personal sleeping space',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'private-suite',
    code: 'FORMAT 03 · VERIFIED SUITE OPTION',
    name: 'Private Suite with Private Bathroom',
    sourceClassification: 'Original-Site Verified Suite Option',
    occupancyLabel: 'Single-Occupancy Private Suite',
    bathroomConfiguration: 'En-Suite Private Bathroom',
    diagramAssetStatus: 'Awaiting official floor plan',
    officialDiagramPath: null,
    editorialOverview:
      'For older adults who prefer an individual living space—or whose daily routine calls for a quiet personal sanctuary—Mission Villa offers private suites complete with an en-suite private bathroom.',
    whoThisFormatServes:
      'Residents in our Legacies™ Memory Care program or short-term Respite Care guests who benefit most from a tranquil, single-occupancy environment.',
    spatialArrangementNotes: [
      'Dedicated private sleeping and sitting area tailored to a single resident',
      'En-suite private bathroom for complete personal privacy and unhurried care assistance',
      'Ample room for familiar personal touches, framed family photos, and favorite keepsakes',
    ],
    includedSuiteSupport: [
      '24-hour on-site staff presence and personalized Legacies™ Memory Care or Respite support',
      'Routine housekeeping, fresh linens, and personal laundry service',
      'Utilities, thermostat comfort control, and emergency alert features (confirm per unit on tour)',
    ],
    tourInspectionQuestions: [
      'Which private suites are currently open or upcoming at 995 East Market Street?',
      'What furniture is provided by Mission Villa vs. brought from home for a private suite?',
    ],
    inquirySuitePreset: 'Private Suite',
    inquiryNotePreset:
      'Interested in touring a Private Suite with Private Bathroom and reviewing current pricing.',
    placeholderPreviewImage: {
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative preview of a private single-occupancy suite at Mission Villa',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const SUITE_WHAT_TO_EXPECT_SPECS: SuiteExpectationSpecItem[] = [
  {
    id: 'spec-private-bathrooms',
    code: 'SUITE-01',
    featureName: 'Private Bathrooms in Private & Shared Suites',
    category: 'Bathroom & Privacy',
    verificationBadge: 'Verified Original-Site Feature',
    summary:
      'Both private suites and shared companion formats at Mission Villa include a private bathroom inside the accommodation rather than corridor-style communal facilities.',
    howItWorksForResidents:
      'Supports personal dignity, familiar morning and bedtime routines, and calm one-on-one caregiver assistance whenever needed.',
    clientConfirmationNote:
      'Verified across original Mission Villa homepage and care descriptions. Confirm exact shower/bath configuration per unit during your tour.',
  },
  {
    id: 'spec-thermostat-comfort',
    code: 'SUITE-02',
    featureName: 'Individual Thermostat & Climate Comfort',
    category: 'In-Suite Comfort',
    verificationBadge: 'Confirm Per-Unit Detail on Tour',
    summary:
      'Original Mission Villa apartment descriptions note thermostat climate control so suites stay warm and comfortable across Daly City’s coastal seasons.',
    howItWorksForResidents:
      'Older adults often have personal warmth preferences; adjustable room comfort helps residents sleep soundly and relax comfortably during the day.',
    clientConfirmationNote:
      'Listed on original site apartment features — confirm individual thermostat control per specific suite format (Companion, Jack & Jill, Private) on tour.',
  },
  {
    id: 'spec-utilities-included',
    code: 'SUITE-03',
    featureName: 'Everyday Utilities Included',
    category: 'In-Suite Comfort',
    verificationBadge: 'Confirm Per-Unit Detail on Tour',
    summary:
      'Original Mission Villa apartment features reference included everyday utilities so families do not have to manage separate household utility bills.',
    howItWorksForResidents:
      'Simplifies monthly planning for families while ensuring consistent lighting, water, and heating comfort.',
    clientConfirmationNote:
      'Listed on original site apartment features — confirm exact utility inclusions (and Wi-Fi reach inside suites vs. common spaces) with the community team.',
  },
  {
    id: 'spec-housekeeping-laundry',
    code: 'SUITE-04',
    featureName: 'Routine Housekeeping & Personal Laundry',
    category: 'Daily Housekeeping & Care',
    verificationBadge: 'Verified Original-Site Feature',
    summary:
      'Dedicated housekeeping and personal laundry services keep each resident’s suite tidy, fresh, and welcoming week after week.',
    howItWorksForResidents:
      'Frees residents and visiting family members from household chores so time together is spent enjoying conversation, meals, or a walk in the courtyard.',
    clientConfirmationNote:
      'Verified in original-site services and apartment features. Confirm weekly housekeeping schedule and garment-labeling guidelines prior to move-in.',
  },
  {
    id: 'spec-emergency-alert-staff',
    code: 'SUITE-05',
    featureName: 'Emergency Alert Features & 24-Hour Staff Presence',
    category: 'Safety & Reassurance',
    verificationBadge: 'Confirm Per-Unit Detail on Tour',
    summary:
      'Original Mission Villa apartment descriptions highlight emergency alert capability alongside 24-hour on-site staff presence and routine assessments.',
    howItWorksForResidents:
      'Provides quiet day-and-night reassurance for both residents and family members that attentive help is always close at hand.',
    clientConfirmationNote:
      'Original-site apartment feature — confirm specific call-system hardware and nighttime check-in protocols per suite during your visit.',
  },
  {
    id: 'spec-furnishings-keepsakes',
    code: 'SUITE-06',
    featureName: 'Ready for Familiar Furnishings & Personal Keepsakes',
    category: 'In-Suite Comfort',
    verificationBadge: 'Verified Original-Site Feature',
    summary:
      'Suites are designed to feel like a true personal home—welcoming framed photographs, cherished quilts, and familiar comfort items.',
    howItWorksForResidents:
      'Especially in Memory Care, recognizable personal belongings anchor orientation, spark life-story conversations, and ease the transition into community life.',
    clientConfirmationNote:
      'Ask our team during your tour which baseline furniture pieces are provided for Memory Care vs. furnished short-term Respite Care stays.',
  },
];

export const SUITE_PERSONALIZATION_TOUCHPOINTS: SuitePersonalizationTouchpoint[] = [
  {
    id: 'touchpoint-familiar-objects',
    number: '01',
    label: 'Visual Recognition & Comfort',
    title: 'Surrounding Your Loved One with Familiar Treasures',
    description:
      'Moving into a new space feels far gentler when the first things your loved one sees each morning are their own favorite quilt, a familiar bedside lamp, and framed family portraits.',
    familyExamples: [
      'A favorite throw blanket, quilt, or decorative pillows from home',
      'Framed family photographs labeled with warm reminders of names and occasions',
      'A cherished armchair or small side table (scaled to keep walkways clear)',
    ],
    legaciesConnection:
      'In our Legacies™ Memory Care program, familiar visual landmarks help residents recognize their room with confidence and pride.',
  },
  {
    id: 'touchpoint-life-story-cues',
    number: '02',
    label: 'Identity & Conversation',
    title: 'Honoring Career, Hobbies & Cultural Heritage',
    description:
      'A suite is also how our care team and fellow residents get to know the remarkable person who lives there—their lifelong profession, musical tastes, faith, or creative passions.',
    familyExamples: [
      'Keepsakes reflecting a career in teaching, nursing, craftsmanship, or service',
      'Books, gentle audio players with favorite songs, or art prints they have always loved',
      'Seasonal cards and drawings from grandchildren displayed at eye level',
    ],
    legaciesConnection:
      'Our team uses these personal touchpoints during daily care and social visits to spark meaningful, dignified conversation.',
  },
  {
    id: 'touchpoint-calm-orientation',
    number: '03',
    label: 'Safe, Uncluttered Navigation',
    title: 'Arranging the Suite for Calm Day-and-Night Ease',
    description:
      'Before move-in, our Daly City team partners with your family to arrange personal items thoughtfully—ensuring clear sightlines to the private bathroom and effortless mobility.',
    familyExamples: [
      'Clear, well-lit pathways between the bed, sitting area, and private bathroom',
      'Everyday clothing organized simply so morning dressing feels calm and unhurried',
      'Coordinated setup whether arriving for full-time Memory Care or a short-term Respite stay',
    ],
    legaciesConnection:
      'Thoughtful room setup reduces visual overwhelm and supports both independence and safe caregiver assistance.',
  },
];

export const RELATED_COMMUNITY_SPACES_FROM_SUITES: RelatedCommunitySpaceCard[] = [
  {
    id: 'related-space-dining',
    code: 'STEPS FROM YOUR SUITE · 01',
    spaceName: 'Restaurant-Style Dining Room & Private Family Dining',
    atmosphereTag: 'Nourishment & Gathering',
    description:
      'Just down the hall from resident suites, our welcoming dining room serves chef-prepared meals with full-table service, dietary options, and a private dining room for family celebrations.',
    connectionToSuiteLife:
      'Encourages residents to step out of their suite three times a day for warm hospitality, conversation, and shared meals.',
    destinationHref: '/life-at-mission-villa',
    destinationLabel: 'Explore Dining & Daily Culture',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      alt: 'Warmly set senior living dining room tables with natural daylight',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'related-space-lounges-library',
    code: 'STEPS FROM YOUR SUITE · 02',
    spaceName: 'Fireside Living Room, Library & Salon/Spa',
    atmosphereTag: 'Indoor Comfort & Leisure',
    description:
      'Inviting indoor common areas—including social lounges, a quiet library nook, and an on-site salon/spa—act as natural extensions of each resident’s private or companion suite.',
    connectionToSuiteLife:
      'Offers cozy places to read, enjoy live entertainment, or visit with family without ever leaving the comfort of the building.',
    destinationHref: '/services-and-amenities',
    destinationLabel: 'View All Community Amenities',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      alt: 'Sunlit community living room and library lounge with comfortable seating',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'related-space-courtyard-patio',
    code: 'STEPS FROM YOUR SUITE · 03',
    spaceName: 'Enclosed Courtyard, Outdoor Patio & Garden Paths',
    atmosphereTag: 'Fresh Air & Sunshine',
    description:
      'Our enclosed courtyard and outdoor patio offer calm, secure places to enjoy Daly City’s coastal air, tend to garden planters, or sit peacefully in the afternoon sun.',
    connectionToSuiteLife:
      'Gives residents and visiting relatives a serene outdoor sanctuary just moments from their suite.',
    destinationHref: '/memory-care',
    destinationLabel: 'Explore Our Memory Care Environment',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
      alt: 'Peaceful enclosed garden courtyard with benches and greenery',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export function filterSuiteGalleryPlates(
  plates: SuiteAccommodationGalleryPlate[],
  category: SuiteGalleryFilterCategory
): SuiteAccommodationGalleryPlate[] {
  if (!category || category === 'All Accommodations') {
    return plates;
  }
  return plates.filter((plate) => plate.category === category);
}

// ============================================================================
// PAGE 06: GALLERY & VIRTUAL TOUR (/gallery) DATA & PURE HELPERS
// Strictly follows Blueprint §5 Page 06:
// - Purpose: Proof through authentic visuals.
// - Source: https://missionvillaseniorliving.com/gallery/
// - Categories: Rooms, Dining, Common Areas, Outdoor Spaces, Activities
// - Visual signature: sophisticated full-width editorial masonry / alternating
//   aspect ratios, photo-caption system, keyboard-accessible lightbox, and
//   dedicated virtual-tour stage.
// - Guardrail: All current preview photography is explicitly labeled
//   `ILLUSTRATIVE — REPLACE BEFORE LAUNCH` and never captioned as verified
//   photographs of the actual building until official client photos are supplied.
// ============================================================================

export type GalleryCategory =
  | 'Rooms'
  | 'Dining'
  | 'Common Areas'
  | 'Outdoor Spaces'
  | 'Activities';

export type GalleryFilterCategory = 'All' | GalleryCategory;

export type GalleryAspectRatioVariant =
  | 'portrait-arch'
  | 'landscape-wide'
  | 'square-study'
  | 'cinematic-panoramic';

export interface GalleryPhotoPlate {
  id: string;
  plateCode: string;
  category: GalleryCategory;
  title: string;
  subtitle: string;
  editorialCaption: string;
  spatialContext: string;
  whatFamiliesNotice: string[];
  relatedRoute: {
    label: string;
    href: string;
  };
  masonrySpan: string;
  aspectVariant: GalleryAspectRatioVariant;
  aspectCssClass: string;
  cutoutBadge?: string;
  inquiryPresetNote: string;
  placeholderImage: {
    src: string;
    alt: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
    assetReplacementNote: string;
  };
}

export interface VirtualTourStop {
  id: string;
  stopIndex: string;
  category: GalleryCategory;
  title: string;
  locationLabel: string;
  summary: string;
  spatialHighlights: string[];
  whatToLookForInPerson: string;
  relatedRouteHref: string;
  relatedRouteLabel: string;
  placeholderImage: {
    src: string;
    alt: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export const GALLERY_CATEGORY_META: {
  id: GalleryFilterCategory;
  label: string;
  shortDescription: string;
}[] = [
  {
    id: 'All',
    label: 'All Visual Plates',
    shortDescription:
      'Complete curatorial overview across suites, dining, indoor lounges, gardens, and daily life.',
  },
  {
    id: 'Rooms',
    label: 'Rooms',
    shortDescription:
      'Private suites, Companion Units, Jack & Jill layouts, and attached private bathrooms.',
  },
  {
    id: 'Dining',
    label: 'Dining',
    shortDescription:
      'Restaurant-style full-table service, chef-prepared meals, and private family dining.',
  },
  {
    id: 'Common Areas',
    label: 'Common Areas',
    shortDescription:
      'Homelike living rooms, library nook, on-site salon/spa, and welcoming gathering spaces.',
  },
  {
    id: 'Outdoor Spaces',
    label: 'Outdoor Spaces',
    shortDescription:
      'Enclosed garden courtyard, sunlit patio seating, and calm walking paths in Daly City.',
  },
  {
    id: 'Activities',
    label: 'Activities',
    shortDescription:
      'Legacies™ Memory Care engagement, art, music, fitness, games, and family connection.',
  },
];

export const GALLERY_PHOTO_PLATES: GalleryPhotoPlate[] = [
  {
    id: 'gallery-plate-01-private-suite',
    plateCode: 'PLATE 01',
    category: 'Rooms',
    title: 'Sunlit Private Suite Sanctuary',
    subtitle: 'Private Suite with En-Suite Bathroom',
    editorialCaption:
      'Private suites at Mission Villa are arranged to feel personal, calm, and immediately recognizable—offering space for favorite bedding, framed family portraits, and an attached private bathroom.',
    spatialContext: 'Resident Accommodations · Memory Care & Respite Care',
    whatFamiliesNotice: [
      'Natural daylight and uncluttered walkways between bed, armchair, and bath',
      'Private bathroom inside the suite for everyday dignity and privacy',
      'Room for familiar keepsakes that support orientation in Memory Care',
    ],
    relatedRoute: {
      label: 'Explore Suites & Floor Plans',
      href: '/suites-and-floor-plans',
    },
    masonrySpan: 'lg:col-span-7',
    aspectVariant: 'landscape-wide',
    aspectCssClass: 'aspect-[16/10]',
    cutoutBadge: 'Rooms · Private Suite',
    inquiryPresetNote:
      'Interested in touring a Private Suite with Private Bathroom after viewing the Gallery.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm sunlit private suite bedroom with armchair and neutral linens',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa private suite interior photograph.',
    },
  },
  {
    id: 'gallery-plate-02-dining-room',
    plateCode: 'PLATE 02',
    category: 'Dining',
    title: 'Restaurant-Style Community Dining Room',
    subtitle: 'Full-Table Service & Chef-Prepared Meals',
    editorialCaption:
      'Three times a day, residents gather in our welcoming dining room for freshly prepared meals served tableside—turning nutrition into a warm ritual of conversation and fellowship.',
    spatialContext: 'Main Dining Room · Full-Table Service',
    whatFamiliesNotice: [
      'Comfortable table seating designed for easy conversation and accessibility',
      'Attentive tableside hospitality and individualized dietary accommodations',
      'Unhurried mealtime pacing tailored to Memory Care and Respite guests',
    ],
    relatedRoute: {
      label: 'Explore Dining & Daily Culture',
      href: '/life-at-mission-villa',
    },
    masonrySpan: 'lg:col-span-5',
    aspectVariant: 'portrait-arch',
    aspectCssClass: 'aspect-[4/5]',
    cutoutBadge: 'Dining · Shared Table',
    inquiryPresetNote:
      'Would like to see the main dining room and ask about sample menus during our visit.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative placeholder: Inviting restaurant-style dining room with warm natural light',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa dining room photograph.',
    },
  },
  {
    id: 'gallery-plate-03-common-lounge',
    plateCode: 'PLATE 03',
    category: 'Common Areas',
    title: 'Homelike Fireside & Conversation Lounge',
    subtitle: 'Welcoming Indoor Gathering Space',
    editorialCaption:
      'Just steps from resident suites, our indoor lounges provide a relaxed residential living room where neighbors share morning coffee, listen to music, or welcome visiting relatives.',
    spatialContext: 'Community Common Areas · 995 East Market Street',
    whatFamiliesNotice: [
      'Warm residential scale rather than long, clinical institutional corridors',
      'Comfortable seating groups suited for quiet reading or family visits',
      'Wi-Fi available in common spaces for guests and family connection',
    ],
    relatedRoute: {
      label: 'View Services & Amenities',
      href: '/services-and-amenities',
    },
    masonrySpan: 'lg:col-span-5',
    aspectVariant: 'square-study',
    aspectCssClass: 'aspect-square',
    cutoutBadge: 'Common Areas · Lounge',
    inquiryPresetNote:
      'Interested in seeing the communal lounges and family visiting areas on our tour.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative placeholder: Sunlit homelike residential sitting lounge with comfortable seating',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa main lounge photograph.',
    },
  },
  {
    id: 'gallery-plate-04-garden-courtyard',
    plateCode: 'PLATE 04',
    category: 'Outdoor Spaces',
    title: 'Enclosed Garden Courtyard & Sunlit Patio',
    subtitle: 'Fresh Coastal Air & Tranquil Greenery',
    editorialCaption:
      'Our enclosed courtyard and patio invite residents outdoors to enjoy Daly City’s mild Peninsula sunshine, raised garden planters, and shaded bench seating in a calm, supportive setting.',
    spatialContext: 'Outdoor Courtyard & Patio · Ground Level',
    whatFamiliesNotice: [
      'Enclosed outdoor setting that supports safe, relaxed fresh-air enjoyment',
      'Level seating areas ideal for afternoon family visits and gentle strolls',
      'Natural greenery and daylight that bring calm to the daily rhythm',
    ],
    relatedRoute: {
      label: 'Explore Memory Care Environment',
      href: '/memory-care',
    },
    masonrySpan: 'lg:col-span-7',
    aspectVariant: 'landscape-wide',
    aspectCssClass: 'aspect-[16/10]',
    cutoutBadge: 'Outdoor Spaces · Courtyard',
    inquiryPresetNote:
      'Would love to walk through the enclosed courtyard and outdoor patio during our visit.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Peaceful garden courtyard with greenery and sunlit seating',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa courtyard and patio photograph.',
    },
  },
  {
    id: 'gallery-plate-05-companion-suite',
    plateCode: 'PLATE 05',
    category: 'Rooms',
    title: 'Companion Unit & Jack & Jill Suite Arrangements',
    subtitle: 'Shared Fellowship Balanced with Personal Space',
    editorialCaption:
      'Our original-site Companion Unit and Jack & Jill formats offer older adults the reassurance of nearby company alongside defined personal sleeping areas and a shared private bathroom.',
    spatialContext: 'Shared Suite Formats · Private Bathroom Included',
    whatFamiliesNotice: [
      'Thoughtful room division that honors each resident’s personal belongings',
      'Private bathroom shared only within the suite—never a hallway bath',
      'Full housekeeping, linen service, and 24-hour staff support included',
    ],
    relatedRoute: {
      label: 'Compare Floor-Plan Formats',
      href: '/suites-and-floor-plans',
    },
    masonrySpan: 'lg:col-span-6',
    aspectVariant: 'landscape-wide',
    aspectCssClass: 'aspect-[16/10]',
    cutoutBadge: 'Rooms · Companion & Jack & Jill',
    inquiryPresetNote:
      'Interested in comparing Companion Unit and Jack & Jill suite layouts during a tour.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative placeholder: Bright companion living space with twin seating and warm light',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa Companion Unit / Jack & Jill suite photograph.',
    },
  },
  {
    id: 'gallery-plate-06-legacies-activities',
    plateCode: 'PLATE 06',
    category: 'Activities',
    title: 'Creative Arts, Music & Legacies™ Engagement',
    subtitle: 'Purposeful Daily Programming',
    editorialCaption:
      'Guided by our activity director and Legacies™ Memory Care philosophy, daily sessions bring residents together for music, art, reminiscence, games, and gentle fitness adapted to every ability.',
    spatialContext: 'Activity Studio & Life Enrichment Spaces',
    whatFamiliesNotice: [
      'Small-group and one-on-one engagement that honors personal life stories',
      'Failure-free creative, musical, and sensory programs that spark joy',
      'Scheduled scenic drives and live entertainment (confirm current calendar on tour)',
    ],
    relatedRoute: {
      label: 'Discover Life at Mission Villa',
      href: '/life-at-mission-villa',
    },
    masonrySpan: 'lg:col-span-6',
    aspectVariant: 'landscape-wide',
    aspectCssClass: 'aspect-[16/10]',
    cutoutBadge: 'Activities · Legacies™',
    inquiryPresetNote:
      'Interested in learning more about daily activities and the Legacies™ Memory Care program.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85',
      alt: 'Illustrative placeholder: Botanical florals and creative table setup for sensory activities',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa activity programming photograph.',
    },
  },
  {
    id: 'gallery-plate-07-private-family-dining',
    plateCode: 'PLATE 07',
    category: 'Dining',
    title: 'Nourishing Culinary Presentation & Private Family Table',
    subtitle: 'Shared Celebrations & Comforting Favorites',
    editorialCaption:
      'Alongside daily restaurant-style service, Mission Villa offers a private dining space where families can gather to celebrate birthdays, anniversaries, and cherished holiday traditions.',
    spatialContext: 'Private Dining Room & Culinary Hospitality',
    whatFamiliesNotice: [
      'Freshly prepared, comforting dishes tailored to senior nutrition and taste',
      'Private dining room option for visiting relatives and special occasions',
      'Warm hospitality that makes family members feel at home during meals',
    ],
    relatedRoute: {
      label: 'See Dining Amenities',
      href: '/services-and-amenities',
    },
    masonrySpan: 'lg:col-span-4',
    aspectVariant: 'portrait-arch',
    aspectCssClass: 'aspect-[4/5]',
    cutoutBadge: 'Dining · Family Table',
    inquiryPresetNote:
      'Would like to ask about private family dining reservations and dietary options.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
      alt: 'Illustrative placeholder: Freshly prepared meal served on a warmly set dining table',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa culinary / private dining photograph.',
    },
  },
  {
    id: 'gallery-plate-08-library-and-salon',
    plateCode: 'PLATE 08',
    category: 'Common Areas',
    title: 'Quiet Library Nook & Reading Alcove',
    subtitle: 'Restful Indoor Sanctuary',
    editorialCaption:
      'For residents who enjoy a peaceful afternoon with a book, classic magazines, or quiet one-on-one conversation, our library nook and smaller sitting alcoves offer calm indoor retreats.',
    spatialContext: 'Library & Quiet Lounge Areas',
    whatFamiliesNotice: [
      'Calm acoustic environment away from busier social gatherings',
      'Complemented by on-site salon/spa and concierge conveniences',
      'Thoughtful lighting and comfortable armchair seating',
    ],
    relatedRoute: {
      label: 'Browse All 18 Offerings',
      href: '/services-and-amenities',
    },
    masonrySpan: 'lg:col-span-4',
    aspectVariant: 'square-study',
    aspectCssClass: 'aspect-square',
    cutoutBadge: 'Common Areas · Library',
    inquiryPresetNote:
      'Interested in seeing the library nook, salon/spa, and quiet sitting areas during our visit.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
      alt: 'Illustrative placeholder: Quiet reading chair and sunlit side table in a residential alcove',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa library and salon/spa photography.',
    },
  },
  {
    id: 'gallery-plate-09-outdoor-patio-social',
    plateCode: 'PLATE 09',
    category: 'Outdoor Spaces',
    title: 'Afternoon Sunshine on the Community Patio',
    subtitle: 'Seated Outdoor Relaxation & Family Visits',
    editorialCaption:
      'Whether enjoying morning tea in the fresh air or visiting with grandchildren on a sunny weekend, our patio spaces connect indoor comfort with the natural beauty of the Peninsula.',
    spatialContext: 'Community Patio & Garden Seating',
    whatFamiliesNotice: [
      'Easy step-out access from indoor common areas',
      'Comfortable outdoor seating for multi-generational family visits',
      'Calm, welcoming atmosphere in our Daly City neighborhood',
    ],
    relatedRoute: {
      label: 'Explore Short-Term Respite Stays',
      href: '/respite-care',
    },
    masonrySpan: 'lg:col-span-4',
    aspectVariant: 'portrait-arch',
    aspectCssClass: 'aspect-[4/5]',
    cutoutBadge: 'Outdoor Spaces · Patio',
    inquiryPresetNote:
      'Interested in seeing the outdoor patio and garden seating areas on a tour.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
      alt: 'Illustrative placeholder: Welcoming patio and indoor-outdoor residential transition',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa outdoor patio photograph.',
    },
  },
  {
    id: 'gallery-plate-10-family-connection-activity',
    plateCode: 'PLATE 10',
    category: 'Activities',
    title: 'Meaningful Companionship & Family Moments',
    subtitle: 'Shared Stories, Games & Warm Connection',
    editorialCaption:
      'Every activity and gathering space at Mission Villa is designed around human connection—helping residents feel known, valued, and closely connected to both peers and family members.',
    spatialContext: 'Social Engagement & Family Partnership',
    whatFamiliesNotice: [
      'Unhurried one-on-one attention from compassionate 24-hour staff',
      'Welcoming environment for spouses, adult children, and grandchildren',
      'Seamless continuity between full-time Memory Care and Respite stays',
    ],
    relatedRoute: {
      label: 'Learn About Memory Care',
      href: '/memory-care',
    },
    masonrySpan: 'lg:col-span-12',
    aspectVariant: 'cinematic-panoramic',
    aspectCssClass: 'aspect-[16/9] lg:aspect-[21/9]',
    cutoutBadge: 'Activities · Belonging & Family',
    inquiryPresetNote:
      'Would like to schedule a family visit to experience daily activities and meet the care team.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1800&q=85',
      alt: 'Illustrative placeholder: Warm, attentive conversation with a senior in a bright residential room',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
      assetReplacementNote:
        'Replace with official Mission Villa resident & family activity photograph.',
    },
  },
];

export const VIRTUAL_TOUR_STOPS: VirtualTourStop[] = [
  {
    id: 'vt-stop-welcome-commons',
    stopIndex: 'Stop 01',
    category: 'Common Areas',
    title: 'Welcome Reception & Fireside Living Lounge',
    locationLabel: '995 East Market Street · Main Entry & Common Areas',
    summary:
      'Begin your walkthrough in Mission Villa’s welcoming reception and residential living areas, where natural light, comfortable seating, and 24-hour staff presence set a calm, homelike tone.',
    spatialHighlights: [
      'Approachable concierge and reception welcome for visiting families',
      'Homelike living room and library nook for conversation and relaxation',
      'Clear, easy-to-navigate sightlines suited for Memory Care comfort',
    ],
    whatToLookForInPerson:
      'Notice the warm, unhurried interaction between staff and residents and how comfortable the common lounges feel for family visits.',
    relatedRouteHref: '/services-and-amenities',
    relatedRouteLabel: 'Explore Community Spaces & Services',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Sunlit community living room and welcome lounge',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'vt-stop-dining-room',
    stopIndex: 'Stop 02',
    category: 'Dining',
    title: 'Restaurant-Style Dining Room & Private Family Table',
    locationLabel: 'Community Dining Wing · Full-Table Service',
    summary:
      'Step into our bright dining room where chef-prepared meals are served with full-table hospitality three times daily, alongside a private dining area for family celebrations.',
    spatialHighlights: [
      'Full-table service that honors resident dignity and appetite',
      'Dietary accommodations and comforting, freshly prepared menus',
      'Private dining space available for family gatherings (confirm reservation details)',
    ],
    whatToLookForInPerson:
      'Ask to see a current weekly menu and observe how team members offer gentle, respectful assistance at the table.',
    relatedRouteHref: '/life-at-mission-villa',
    relatedRouteLabel: 'Read About Dining & Daily Culture',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Warmly set restaurant-style senior dining room',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'vt-stop-suites',
    stopIndex: 'Stop 03',
    category: 'Rooms',
    title: 'Private Suites, Companion Units & Jack & Jill Formats',
    locationLabel: 'Residential Suite Neighborhood · Private Bathrooms',
    summary:
      'Explore our private and shared suite accommodations—including Companion Unit and Jack & Jill formats—each equipped with a private bathroom and ready for personal keepsakes.',
    spatialHighlights: [
      'Private bathrooms in both private and shared companion suites',
      'Individual thermostat comfort, utilities, housekeeping, and laundry',
      'Emergency alert features and 24-hour staff support close at hand',
    ],
    whatToLookForInPerson:
      'Compare a Private Suite alongside our Companion Unit and Jack & Jill layouts to see which arrangement best fits your loved one.',
    relatedRouteHref: '/suites-and-floor-plans',
    relatedRouteLabel: 'Open Suites & Floor-Plan Viewer',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Peaceful private bedroom suite with natural daylight',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'vt-stop-courtyard-activities',
    stopIndex: 'Stop 04',
    category: 'Outdoor Spaces',
    title: 'Enclosed Courtyard, Patio & Activity Spaces',
    locationLabel: 'Outdoor Sanctuary & Life Enrichment',
    summary:
      'Conclude your preview in our enclosed garden courtyard and activity spaces, where Legacies™ Memory Care programming, music, art, and fresh-air relaxation happen daily.',
    spatialHighlights: [
      'Enclosed courtyard and patio with level walking paths and shaded benches',
      'Dedicated spaces for daily games, art, fitness, and live entertainment',
      'A calm setting in Daly City convenient for San Francisco and Peninsula families',
    ],
    whatToLookForInPerson:
      'Step out onto the patio and ask our Activity Director for a copy of this month’s life-enrichment calendar.',
    relatedRouteHref: '/memory-care',
    relatedRouteLabel: 'Explore Legacies™ Memory Care',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85',
      alt: 'Illustrative placeholder: Sunlit enclosed garden courtyard and outdoor seating',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export function filterGalleryPhotoPlates(
  plates: GalleryPhotoPlate[],
  category: GalleryFilterCategory,
  searchQuery: string = ''
): GalleryPhotoPlate[] {
  const normalizedQuery = (searchQuery || '').trim().toLowerCase();

  return plates.filter((plate) => {
    const matchesCategory = category === 'All' || plate.category === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      plate.plateCode,
      plate.category,
      plate.title,
      plate.subtitle,
      plate.editorialCaption,
      plate.spatialContext,
      ...plate.whatFamiliesNotice,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

// ============================================================================
// PAGE 07: ABOUT US (/about) — SOURCE-GROUNDED DATA & CONTENT
// ============================================================================
// Grounded in https://missionvillaseniorliving.com/about-us/
// Topics: Compassionate, personalized Memory Care, dignity & respect, family support;
// Daly City near San Bruno Mountain; community activities; pet-friendly policy with
// restrictions (confirm current policy); access to surrounding Peninsula amenities.
// Guardrails: No fake founders, no invented staff portraits/bios, no fake awards,
// no clinical staffing ratios or medical guarantees.

export interface AboutPhilosophyChapter {
  id: 'person-first-dignity' | 'legacies-stewardship' | 'family-peace-of-mind' | 'homelike-belonging';
  chapterNumber: string;
  kicker: string;
  title: string;
  subtitle: string;
  editorialLead: string;
  narrativeBody: string;
  inEverydayLife: string[];
  familyPromise: string;
  relatedRoute: {
    label: string;
    href: string;
  };
  inquiryPresetNote: string;
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export type GeographyCategory =
  | 'All Landmarks'
  | 'Natural Surroundings'
  | 'Family Access'
  | 'Peninsula Amenities'
  | 'Scenic Outings';

export interface DalyCityGeographyLandmark {
  id: string;
  indexCode: string;
  category: Exclude<GeographyCategory, 'All Landmarks'>;
  title: string;
  subtitle: string;
  proximityContext: string;
  description: string;
  whyItMattersForFamilies: string[];
  inquiryPresetNote: string;
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export interface AboutCoreValueItem {
  id: string;
  index: string;
  valueTitle: string;
  scriptAccent: string;
  summary: string;
  connectedActivities: string[];
  relatedRouteHref: string;
  relatedRouteLabel: string;
}

export interface AboutTeamRoleOverview {
  id: string;
  roleTitle: string;
  departmentTag: string;
  howTheySupportResidents: string;
  questionsToAskOnTour: string;
}

export interface AboutPetPolicyDisclosure {
  headline: string;
  badge: string;
  summary: string;
  confirmationItems: string[];
  verificationStatus: 'CLIENT CONFIRMATION REQUIRED';
  inquiryPresetNote: string;
}

export const ABOUT_PHILOSOPHY_CHAPTERS: AboutPhilosophyChapter[] = [
  {
    id: 'person-first-dignity',
    chapterNumber: 'Chapter I',
    kicker: 'Dignity & Respect First',
    title: 'Honoring the Individual Behind Every Life Story',
    subtitle: 'Care shaped around lifelong identity, personal privacy, and self-respect',
    editorialLead:
      'At Mission Villa Senior Living, we believe that living with Alzheimer’s disease or another form of dementia never diminishes a person’s right to dignity, warmth, and personal choice.',
    narrativeBody:
      'Our philosophy starts with seeing the whole person—their accomplishments, sense of humor, treasured routines, and cultural traditions. Whether assisting with morning habits in a private or companion suite or welcoming a resident to the dining table, our 24-hour staff moves at a calm, human pace that protects self-esteem.',
    inEverydayLife: [
      'Unhurried, respectful assistance with bathing, dressing, and personal care',
      'Private and shared suites—each with an attached private bathroom—to safeguard personal privacy',
      'Encouraging everyday independence and personal decision-making wherever possible',
    ],
    familyPromise:
      'Your loved one is respected as a cherished individual, never treated as a schedule or a diagnosis.',
    relatedRoute: {
      label: 'Explore Our Memory Care Approach',
      href: '/memory-care',
    },
    inquiryPresetNote:
      'Would like to learn more about Mission Villa’s care philosophy and person-centered approach during a visit.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm, sunlit homelike sitting room designed for calm daily living and personal dignity',
      caption: 'Respectful, person-first relationships form the heart of Mission Villa in Daly City',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'legacies-stewardship',
    chapterNumber: 'Chapter II',
    kicker: 'Personalized Memory Care',
    title: 'The Legacies™ Philosophy of Familiar Connection',
    subtitle: 'Connecting past history with present comfort and daily purpose',
    editorialLead:
      'Through our signature Legacies™ Memory Care program and short-term Respite Care stays, we tailor daily support and engagement around what feels familiar and reassuring to each resident.',
    narrativeBody:
      'Before and after a resident joins our community, we partner closely with family members to learn the details that matter—favorite melodies, career stories, preferred mealtime comforts, and calming routines. Our team weaves these insights into daily interactions and small-group programming.',
    inEverydayLife: [
      'Life-story learning that informs daily conversation, music, and reminiscence',
      'Routine assessments so care plans adapt thoughtfully as needs evolve',
      'Failure-free creative, social, and recreational activities guided by our Activity Director',
    ],
    familyPromise:
      'Care is customized around who your loved one has always been and what brings them comfort today.',
    relatedRoute: {
      label: 'Discover Life at Mission Villa',
      href: '/life-at-mission-villa',
    },
    inquiryPresetNote:
      'Interested in how the Legacies™ Memory Care philosophy personalizes daily routines for new residents.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Botanical florals and sensory table arrangement representing Legacies programming',
      caption: 'Tailoring daily engagement and gentle rhythms around personal life stories',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'family-peace-of-mind',
    chapterNumber: 'Chapter III',
    kicker: 'Family Support & Partnership',
    title: 'Lifting the Caregiving Burden So Families Can Reconnect',
    subtitle: 'Standing beside spouses, adult children, and relatives at every step',
    editorialLead:
      'We know that searching for Memory Care or Respite Care often comes after months or years of devoted family caregiving at home.',
    narrativeBody:
      'Mission Villa exists to support the entire family. When our 24-hour staff takes on the physical and logistical responsibilities of daily care, housekeeping, laundry, and meal preparation, family members can return to being a loving spouse, son, daughter, or grandchild—enjoying unhurried visits in our lounges, dining room, and garden courtyard.',
    inEverydayLife: [
      'Open, approachable communication between families and our Daly City care team',
      'Flexible short-term Respite Care stays when primary family caregivers need rest or travel',
      'Welcoming common lounges, patio seating, and private family dining for meaningful visits',
    ],
    familyPromise:
      'You never navigate memory loss alone—our team at 995 East Market Street is your partner.',
    relatedRoute: {
      label: 'Explore Short-Term Respite Care',
      href: '/respite-care',
    },
    inquiryPresetNote:
      'Exploring how Mission Villa partners with families transitioning from home caregiving.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Sunlit residential lounge welcoming visiting family members',
      caption: 'Warm, homelike gathering spaces where visiting relatives always feel welcome',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'homelike-belonging',
    chapterNumber: 'Chapter IV',
    kicker: 'Intimate Residential Scale',
    title: 'A Homelike Community Rather Than an Institution',
    subtitle: 'Warm architecture, shared meals, and familiar neighborhood roots in Daly City',
    editorialLead:
      'Large, clinical facilities can feel overwhelming for seniors living with memory loss. Mission Villa is intentionally designed to feel like a welcoming home.',
    narrativeBody:
      'From our restaurant-style dining room with full-table service to our quiet library nook and enclosed garden courtyard near the foothills of San Bruno Mountain, every corner of Mission Villa encourages calm navigation, friendly companionship, and everyday belonging.',
    inEverydayLife: [
      'Three chef-prepared meals daily served with attentive full-table hospitality',
      'Easy-to-navigate indoor common areas paired with an enclosed outdoor courtyard and patio',
      'Licensed California RCFE (#415601046) dedicated specifically to Memory Care and Respite Care',
    ],
    familyPromise:
      'A comforting residential sanctuary where neighbors, staff, and families know one another by name.',
    relatedRoute: {
      label: 'Browse Our Photo Gallery & Tour',
      href: '/gallery',
    },
    inquiryPresetNote:
      'Would love to tour Mission Villa in person to experience the homelike environment and dining spaces.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Peaceful garden courtyard with greenery and sunlit seating',
      caption: 'An intimate, residential setting at 995 East Market Street in Daly City',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const DALY_CITY_GEOGRAPHY_LANDMARKS: DalyCityGeographyLandmark[] = [
  {
    id: 'san-bruno-mountain-foothills',
    indexCode: 'LOC 01',
    category: 'Natural Surroundings',
    title: 'Nestled Near San Bruno Mountain in Daly City',
    subtitle: 'Tranquil Peninsula Foothill Microclimate & Coastal Breeze',
    proximityContext: '995 East Market Street · Adjacent to San Bruno Mountain State & County Park',
    description:
      'Mission Villa is situated on East Market Street in Daly City, just steps from the western slopes of San Bruno Mountain. The surrounding hillside greenery, open sky, and fresh coastal air lend a peaceful residential character while remaining right in town.',
    whyItMattersForFamilies: [
      'Quiet residential setting buffered from heavy downtown congestion',
      'Fresh Peninsula air enjoyed from our enclosed garden courtyard and outdoor patio',
      'Natural hillside backdrop that makes family arrivals and outdoor visits calming',
    ],
    inquiryPresetNote:
      'Looking for a Daly City Memory Care community near San Bruno Mountain; would like to schedule a visit.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Sunlit California garden greenery and peaceful outdoor hillside atmosphere',
      caption: 'Peaceful residential surroundings near the slopes of San Bruno Mountain',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'sf-peninsula-family-corridor',
    indexCode: 'LOC 02',
    category: 'Family Access',
    title: 'Effortless Visits for San Francisco & Peninsula Families',
    subtitle: 'Minutes from I-280, Mission Street & BART Connections',
    proximityContext: 'Northern San Mateo County · Immediate Border of Southern San Francisco',
    description:
      'Because frequent family connection means everything in Memory Care, our location at 995 East Market Street bridges San Francisco and San Mateo County—making it simple for spouses, adult children, and grandchildren to drop by for lunch, an afternoon activity, or an evening visit.',
    whyItMattersForFamilies: [
      'Convenient access from San Francisco neighborhoods (Excelsior, Mission, Glen Park, Sunset) and Northern Peninsula communities (Colma, South San Francisco, San Bruno, Pacifica)',
      'On-site community parking for visiting relatives and guests',
      'Close enough for spontaneous weekday visits rather than long weekend drives',
    ],
    inquiryPresetNote:
      'Our family lives in the San Francisco / Peninsula area and would like directions and parking info for a tour.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Welcoming residential entrance and sunlit patio for visiting families',
      caption: 'Conveniently located at 995 East Market Street for San Francisco and Peninsula families',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'peninsula-amenities-and-parks',
    indexCode: 'LOC 03',
    category: 'Peninsula Amenities',
    title: 'Connected to Surrounding Peninsula Amenities',
    subtitle: 'Local Dining, Shopping, Parks & Healthcare Proximity',
    proximityContext: 'Daly City & Greater Peninsula Neighborhood Conveniences',
    description:
      'Mission Villa enjoys easy access to surrounding Peninsula amenities—including neighborhood cafes, shopping centers, local parks, and major regional medical centers across Daly City, Seton/Peninsula corridors, and San Francisco.',
    whyItMattersForFamilies: [
      'Easy for visiting family members to pick up favorite treats, flowers, or personal essentials nearby',
      'Scheduled community transportation available (confirm current routing and details with our team)',
      'Proximity to established Daly City and Peninsula medical and community services',
    ],
    inquiryPresetNote:
      'Interested in learning about scheduled transportation and nearby Peninsula amenities.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm hospitality and dining setting reflecting Peninsula community life',
      caption: 'Close to everyday Daly City and Peninsula amenities, parks, and family conveniences',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'scenic-drives-and-outings',
    indexCode: 'LOC 04',
    category: 'Scenic Outings',
    title: 'Scenic Drives & Coastal Peninsula Vistas',
    subtitle: 'Bringing the Beauty of the Bay Area Into Community Life',
    proximityContext: 'Activity Director Programming · Peninsula & Coastline Excursions',
    description:
      'As highlighted in Mission Villa’s original community offerings, our life-enrichment programming includes scenic drives and community outings that allow residents to enjoy the natural beauty of San Bruno Mountain, the Pacific coastline, and familiar Bay Area neighborhoods.',
    whyItMattersForFamilies: [
      'Guided scenic drives organized through our Activity Director and transportation team',
      'Familiar regional landmarks that spark conversation and reminiscence',
      'Balanced with safe, comforting indoor and courtyard activities back at home',
    ],
    inquiryPresetNote:
      'Would love to ask about scenic drives and monthly activity calendars during our visit.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Bright residential lounge where residents gather before and after community activities',
      caption: 'Connecting residents with the familiar beauty of Daly City and the Peninsula',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const ABOUT_CORE_VALUES: AboutCoreValueItem[] = [
  {
    id: 'value-dignity-respect',
    index: '01',
    valueTitle: 'Unconditional Dignity & Respect',
    scriptAccent: 'Every Resident Honored',
    summary:
      'We honor each resident’s life history, personal privacy, and individual pace—providing gentle 24-hour support in private and companion suites with private bathrooms.',
    connectedActivities: [
      'Unhurried personal care & morning routines',
      'One-on-one reminiscence & life-story conversations',
      'Personalization of suites with treasured keepsakes',
    ],
    relatedRouteHref: '/suites-and-floor-plans',
    relatedRouteLabel: 'View Suites & Floor Plans',
  },
  {
    id: 'value-purposeful-engagement',
    index: '02',
    valueTitle: 'Engaging Daily Community Activities',
    scriptAccent: 'Moments of Joy',
    summary:
      'Led by our dedicated Activity Director and Legacies™ Memory Care approach, every day invites residents into social, creative, and sensory experiences adapted to their abilities.',
    connectedActivities: [
      'Creative art sessions, tabletop games & puzzles',
      'Live entertainment, music & group sing-alongs',
      'Gentle fitness, courtyard strolls & scenic drives',
    ],
    relatedRouteHref: '/life-at-mission-villa',
    relatedRouteLabel: 'Explore Daily Culture & Activities',
  },
  {
    id: 'value-shared-nourishment',
    index: '03',
    valueTitle: 'Warm Hospitality & Shared Table',
    scriptAccent: 'Nourishing Body & Spirit',
    summary:
      'Meals at Mission Villa bring neighbors and families together three times a day for chef-prepared dishes served with full-table care and dietary thoughtfulness.',
    connectedActivities: [
      'Restaurant-style dining with full-table service',
      'Private dining room for family celebrations',
      'Afternoon socials & refreshments on the patio',
    ],
    relatedRouteHref: '/services-and-amenities',
    relatedRouteLabel: 'See Dining & Amenities',
  },
  {
    id: 'value-family-trust',
    index: '04',
    valueTitle: 'Transparent Family Partnership',
    scriptAccent: 'Peace of Mind',
    summary:
      'Whether your family is exploring full-time Memory Care or a short-term Respite Care stay, we communicate openly, welcome regular visits, and support you through every transition.',
    connectedActivities: [
      'Family visits in our lounges, courtyard & dining room',
      'Routine care assessments & collaborative planning',
      'Volunteer programs & multi-generational gatherings',
    ],
    relatedRouteHref: '/respite-care',
    relatedRouteLabel: 'Learn About Respite Stays',
  },
];

export const ABOUT_TEAM_ROLES_OVERVIEW: AboutTeamRoleOverview[] = [
  {
    id: 'role-24hr-care-staff',
    roleTitle: '24-Hour Dedicated Care Staff',
    departmentTag: 'Around-the-Clock Personal Support',
    howTheySupportResidents:
      'Present day and night to provide compassionate assistance with bathing, dressing, grooming, escort/transfer support, and comforting reassurance tailored to each resident’s Legacies™ care plan.',
    questionsToAskOnTour:
      'How does your day and evening staff learn my loved one’s personal routines and preferences?',
  },
  {
    id: 'role-activity-director',
    roleTitle: 'Activity Director & Life Enrichment',
    departmentTag: 'Legacies™ Programming & Community Culture',
    howTheySupportResidents:
      'Designs and guides daily small-group and one-on-one activities—including games, creative arts, gentle fitness, live entertainment, volunteer programs, and scenic drives.',
    questionsToAskOnTour:
      'May we see a current monthly activity calendar and learn how quieter residents are gently included?',
  },
  {
    id: 'role-culinary-dining',
    roleTitle: 'Culinary & Full-Table Dining Team',
    departmentTag: 'Chef-Prepared Meals & Hospitality',
    howTheySupportResidents:
      'Prepares three nourishing daily meals and snacks, offers full-table service in our main dining room, accommodates dietary needs, and hosts families in our private dining space.',
    questionsToAskOnTour:
      'How does the culinary team accommodate favorite comfort foods and physician-recommended diets?',
  },
  {
    id: 'role-concierge-housekeeping',
    roleTitle: 'Community Leadership, Concierge & Housekeeping',
    departmentTag: 'Family Communication & Daily Convenience',
    howTheySupportResidents:
      'Coordinates family inquiries, routine care assessments, scheduled transportation, laundry and linen service, and suite upkeep so residents live in a clean, calm environment.',
    questionsToAskOnTour:
      'Who is our primary point of contact for care updates, and how often are routine assessments reviewed?',
  },
];

export const ABOUT_PET_POLICY_NOTE: AboutPetPolicyDisclosure = {
  headline: 'Pet-Friendly Community Policy (With Applicable Restrictions)',
  badge: 'Conditional Community Policy · Confirm Details on Tour',
  summary:
    'Mission Villa’s original community profile notes a pet-friendly approach with applicable restrictions. Because resident safety, comfort, and daily care abilities are paramount in a Memory Care environment, pet eligibility and visiting pet guidelines are reviewed individually with each family.',
  confirmationItems: [
    'Confirm current eligibility, size/breed guidelines, and care requirements for resident pets',
    'Ask about guidelines for family members bringing a gentle, leashed family dog during courtyard or lounge visits',
    'Verify vaccination documentation and community safety protocols with our Daly City team',
  ],
  verificationStatus: 'CLIENT CONFIRMATION REQUIRED',
  inquiryPresetNote:
    'Would like to confirm Mission Villa’s current pet-friendly policy and restrictions (for visiting or resident pets).',
};

export function filterGeographyLandmarks(
  landmarks: DalyCityGeographyLandmark[],
  category: GeographyCategory
): DalyCityGeographyLandmark[] {
  if (category === 'All Landmarks') {
    return landmarks;
  }
  return landmarks.filter((item) => item.category === category);
}

// ============================================================================
// PAGE 08: FINANCIAL PLANNING (/financial-planning) — SOURCE-GROUNDED DATA
// ============================================================================
// Grounded in https://missionvillaseniorliving.com/living-options/financial-planning/
// Topics: Assessment-informed personalized pricing; typical cost inclusions
// (housing, meals, care services, housekeeping, activities); comparison categories
// for home-based care; long-term care insurance; referral credit and state
// assistance participation mentioned on old site MUST BE RECONFIRMED BEFORE LAUNCH.
// Guardrails: Zero pre-filled fake numbers, no counterfeit savings calculator,
// no exact pricing, no plan lock-ins, no claims of "no hidden fees".

export interface FinancialCostFactor {
  id:
    | 'care-assessment'
    | 'suite-selection'
    | 'stay-horizon'
    | 'optional-services';
  index: string;
  kicker: string;
  title: string;
  subtitle: string;
  explanation: string;
  whatWeReviewTogether: string[];
  questionsForYourVisit: string;
  relatedRouteHref: string;
  relatedRouteLabel: string;
}

export type FinancialInclusionGroup =
  | 'All Categories'
  | 'Housing & Suite Comfort'
  | 'Chef-Prepared Dining'
  | '24-Hour Support & Care'
  | 'Housekeeping & Daily Living'
  | 'Life Enrichment & Community';

export interface FinancialInclusionItem {
  id: string;
  code: string;
  group: Exclude<FinancialInclusionGroup, 'All Categories'>;
  title: string;
  summary: string;
  howItHelpsFamilies: string;
  confirmationStatus: 'Standard Community Offering' | 'CLIENT CONFIRMATION REQUIRED';
  verificationNote: string;
}

export interface PaperLedgerComparisonRow {
  id: string;
  lineNumber: string;
  categoryGroup:
    | 'Housing & Residence'
    | 'Utilities & Household'
    | 'Food & Nourishment'
    | 'Personal Care & Support'
    | 'Daily Living & Upkeep'
    | 'Engagement & Mobility';
  expenseLabel: string;
  homeLivingPrompt: string;
  // Strictly empty string by default — never pre-fill fake numbers
  defaultMonthlyInput: '';
  missionVillaConsolidatedContext: string;
  questionToVerifyOnTour: string;
}

export interface FinancialPlanningPathway {
  id:
    | 'personal-assessment-consultation'
    | 'long-term-care-insurance'
    | 'family-and-benefit-planning'
    | 'legacy-site-referral-and-state-programs';
  index: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  questionsToAsk: string[];
  verificationStatus: 'Standard Planning Guidance' | 'CLIENT CONFIRMATION REQUIRED';
  disclaimerNote: string;
  inquiryPresetNote: string;
}

export interface FinancialPlanningFaqItem {
  id: string;
  category:
    | 'How Pricing Works'
    | 'Inclusions & Suites'
    | 'Insurance & Assistance'
    | 'Short-Term Stays';
  question: string;
  answer: string;
}

export const FINANCIAL_COST_FACTORS: FinancialCostFactor[] = [
  {
    id: 'care-assessment',
    index: 'Factor 01',
    kicker: 'Individualized Support Level',
    title: 'Assessment-Informed Personal Care Needs',
    subtitle: 'Tailored around the daily support your loved one actually needs',
    explanation:
      'No two residents experience Alzheimer’s disease or dementia in the exact same way. Rather than publishing a one-size-fits-all rate online, Mission Villa conducts a thoughtful care assessment to understand your loved one’s daily routines, personal care needs, mobility, and Legacies™ Memory Care preferences.',
    whatWeReviewTogether: [
      'Level of daily assistance with bathing, dressing, grooming, and hygiene',
      'Escort and transfer support to the dining room, courtyard, and daily activities',
      'Routine reassessments over time so care plans remain aligned as needs evolve',
    ],
    questionsForYourVisit:
      'How does the initial care assessment work, and how are families notified if care needs change over time?',
    relatedRouteHref: '/memory-care',
    relatedRouteLabel: 'Explore Legacies™ Memory Care',
  },
  {
    id: 'suite-selection',
    index: 'Factor 02',
    kicker: 'Accommodation Format',
    title: 'Suite Layout & Shared vs. Private Living',
    subtitle: 'Private Suite, Companion Unit, or Jack & Jill floor-plan formats',
    explanation:
      'Accommodation costs vary depending on the suite format your family selects. Some families prefer the quiet sanctuary of an individual Private Suite, while others value the shared camaraderie and cost structure of a Companion Unit or Jack & Jill arrangement—each featuring an attached private bathroom.',
    whatWeReviewTogether: [
      'Private Suite with dedicated sleeping/living area and attached private bathroom',
      'Companion Unit (Shared Suite) designed for comforting companionship and shared value',
      'Jack & Jill format connecting distinct sleeping quarters with an adjoining private bath',
    ],
    questionsForYourVisit:
      'May we compare current availability and monthly rates across Private, Companion, and Jack & Jill suites?',
    relatedRouteHref: '/suites-and-floor-plans',
    relatedRouteLabel: 'Compare Suites & Floor Plans',
  },
  {
    id: 'stay-horizon',
    index: 'Factor 03',
    kicker: 'Program & Stay Duration',
    title: 'Long-Term Memory Care vs. Short-Term Respite Stays',
    subtitle: 'Ongoing residential living or temporary caregiver relief',
    explanation:
      'Financial planning looks different when preparing for a permanent move into Memory Care versus arranging a short-term Respite Care stay of a few days to several weeks while a primary family caregiver rests, travels, or recovers.',
    whatWeReviewTogether: [
      'Monthly residential planning for ongoing Legacies™ Memory Care',
      'Short-term Respite Care stay structure, furnished suite availability, and minimum stay lengths',
      'How a temporary Respite Care stay can serve as a gentle introduction to Mission Villa',
    ],
    questionsForYourVisit:
      'How is short-term Respite Care billed compared with full-time Memory Care residency?',
    relatedRouteHref: '/respite-care',
    relatedRouteLabel: 'Learn About Respite Care Stays',
  },
  {
    id: 'optional-services',
    index: 'Factor 04',
    kicker: 'Clarity on Everyday vs. Optional Items',
    title: 'Included Community Living vs. Personal Add-Ons',
    subtitle: 'Understanding what is part of base care versus optional conveniences',
    explanation:
      'A clear financial conversation separates everyday community inclusions—such as housing, three daily chef-prepared meals, housekeeping, laundry, and daily activities—from optional personal services or specialized requests that may carry separate charges.',
    whatWeReviewTogether: [
      'Core residential inclusions (suite, utilities, dining, housekeeping, laundry, activities)',
      'Individual care support tiers determined during your loved one’s assessment',
      'Confirming which conveniences (such as on-site salon/spa appointments or specialized transport) involve separate fees',
    ],
    questionsForYourVisit:
      'Can you walk us through a sample resident agreement so we see which services are base inclusions versus optional?',
    relatedRouteHref: '/services-and-amenities',
    relatedRouteLabel: 'Review Services & Amenities',
  },
];

export const FINANCIAL_INCLUSION_GROUPS: FinancialInclusionGroup[] = [
  'All Categories',
  'Housing & Suite Comfort',
  'Chef-Prepared Dining',
  '24-Hour Support & Care',
  'Housekeeping & Daily Living',
  'Life Enrichment & Community',
];

export const FINANCIAL_INCLUSION_ITEMS: FinancialInclusionItem[] = [
  {
    id: 'inc-suite-residence',
    code: 'INC 01',
    group: 'Housing & Suite Comfort',
    title: 'Private or Shared Suite With Private Bathroom',
    summary:
      'Residential accommodation in your chosen Private Suite, Companion Unit, or Jack & Jill layout, each with an attached private bathroom.',
    howItHelpsFamilies:
      'Consolidates rent or mortgage obligations into a supportive residential setting designed for seniors living with memory loss.',
    confirmationStatus: 'Standard Community Offering',
    verificationNote:
      'Rates vary by suite format and current availability at 995 East Market Street.',
  },
  {
    id: 'inc-utilities-comfort',
    code: 'INC 02',
    group: 'Housing & Suite Comfort',
    title: 'Household Utilities, Comfort Controls & Wi-Fi in Common Spaces',
    summary:
      'Everyday utilities, individual suite thermostat comfort (confirm per-unit configuration), and Wi-Fi access in common areas as listed on the original site.',
    howItHelpsFamilies:
      'Eliminates separate monthly electric, gas, water, trash, and building maintenance bills.',
    confirmationStatus: 'CLIENT CONFIRMATION REQUIRED',
    verificationNote:
      'Confirm specific utility inclusions and in-suite Wi-Fi/cable options with the Daly City team during your visit.',
  },
  {
    id: 'inc-chef-dining',
    code: 'INC 03',
    group: 'Chef-Prepared Dining',
    title: 'Three Daily Chef-Prepared Meals & Nutritious Snacks',
    summary:
      'Freshly prepared breakfast, lunch, and dinner served with full-table hospitality in our welcoming community dining room, plus daily refreshments.',
    howItHelpsFamilies:
      'Replaces the weekly cost and daily labor of grocery shopping, cooking, and dishwashing at home.',
    confirmationStatus: 'Standard Community Offering',
    verificationNote:
      'Ask our team about specific dietary options and private family dining reservations.',
  },
  {
    id: 'inc-24hr-staff-presence',
    code: 'INC 04',
    group: '24-Hour Support & Care',
    title: '24-Hour On-Site Staff & Emergency Alert Support',
    summary:
      'Around-the-clock on-site care staff availability, emergency alert system features, and routine wellness check-ins day and night.',
    howItHelpsFamilies:
      'Provides continuous day-and-night presence that is often prohibitively expensive to arrange through hourly in-home care agencies.',
    confirmationStatus: 'Standard Community Offering',
    verificationNote:
      'Discuss how day and overnight supervision aligns with your loved one’s assessment.',
  },
  {
    id: 'inc-personalized-care-assistance',
    code: 'INC 05',
    group: '24-Hour Support & Care',
    title: 'Personalized Assistance With Daily Living & Routine Assessments',
    summary:
      'Respectful help with bathing, dressing, grooming, and escort/transfer support, guided by routine assessments as needs change.',
    howItHelpsFamilies:
      'Tailors daily support around your loved one’s Legacies™ care plan rather than charging unpredictability per task at home.',
    confirmationStatus: 'CLIENT CONFIRMATION REQUIRED',
    verificationNote:
      'Individual care support levels are determined through a personal assessment prior to move-in.',
  },
  {
    id: 'inc-housekeeping-laundry',
    code: 'INC 06',
    group: 'Housekeeping & Daily Living',
    title: 'Routine Housekeeping, Personal Laundry & Linen Service',
    summary:
      'Regular suite cleaning, bed linen changes, and personal clothing laundry handled by our housekeeping staff.',
    howItHelpsFamilies:
      'Removes the physical strain of household chores so family visits focus on connection rather than housework.',
    confirmationStatus: 'Standard Community Offering',
    verificationNote:
      'Confirm housekeeping frequency and personal laundry labeling guidelines on tour.',
  },
  {
    id: 'inc-legacies-activities',
    code: 'INC 07',
    group: 'Life Enrichment & Community',
    title: 'Legacies™ Memory Care Programming & Daily Activities',
    summary:
      'Daily social, creative, musical, and recreational activities led by our Activity Director—including games, art, gentle fitness, and live entertainment.',
    howItHelpsFamilies:
      'Provides structured daily engagement and social belonging without separate adult day-program fees.',
    confirmationStatus: 'Standard Community Offering',
    verificationNote:
      'Request a current monthly activity calendar when you visit Mission Villa.',
  },
  {
    id: 'inc-courtyard-common-areas',
    code: 'INC 08',
    group: 'Life Enrichment & Community',
    title: 'Access to Garden Courtyard, Patio, Library & Communal Lounges',
    summary:
      'Full enjoyment of our enclosed outdoor courtyard, sunlit patio, quiet library nook, and homelike sitting rooms for residents and visiting relatives.',
    howItHelpsFamilies:
      'Gives families welcoming indoor and outdoor spaces in Daly City to gather comfortably.',
    confirmationStatus: 'Standard Community Offering',
    verificationNote:
      'On-site community parking is available for visiting family members.',
  },
  {
    id: 'inc-transportation-concierge',
    code: 'INC 09',
    group: 'Housekeeping & Daily Living',
    title: 'Concierge Coordination, Scenic Drives & Scheduled Transportation',
    summary:
      'Front-desk concierge assistance for families, community scenic drives, and scheduled transportation as described on Mission Villa’s original site.',
    howItHelpsFamilies:
      'Helps coordinate everyday logistics and community outings along the Peninsula.',
    confirmationStatus: 'CLIENT CONFIRMATION REQUIRED',
    verificationNote:
      'Confirm current scheduled transportation routes, appointment escort availability, and any applicable fees.',
  },
  {
    id: 'inc-salon-and-specialty',
    code: 'INC 10',
    group: 'Housekeeping & Daily Living',
    title: 'On-Site Salon / Spa & Optional Personal Conveniences',
    summary:
      'Access to our on-site beauty salon/barber space and personalized convenience support right inside the community.',
    howItHelpsFamilies:
      'Allows residents to enjoy grooming and self-care without needing outside trips.',
    confirmationStatus: 'CLIENT CONFIRMATION REQUIRED',
    verificationNote:
      'Salon/spa services and personal care supplies may be billed separately; confirm current fee schedule with our team.',
  },
];

export const PAPER_LEDGER_COMPARISON_ROWS: PaperLedgerComparisonRow[] = [
  {
    id: 'ledger-housing-property',
    lineNumber: '01',
    categoryGroup: 'Housing & Residence',
    expenseLabel: 'Mortgage, Rent, Property Taxes & Homeowner Insurance',
    homeLivingPrompt: 'Current monthly mortgage/rent + prorated property tax & home insurance',
    defaultMonthlyInput: '',
    missionVillaConsolidatedContext:
      'At Mission Villa, residential accommodation in a Private Suite, Companion Unit, or Jack & Jill suite with a private bathroom is part of the monthly residence agreement.',
    questionToVerifyOnTour:
      'What are the current monthly rates for Private vs. Companion suites?',
  },
  {
    id: 'ledger-utilities-upkeep',
    lineNumber: '02',
    categoryGroup: 'Utilities & Household',
    expenseLabel: 'Electricity, Gas, Water, Trash & Common-Area Wi-Fi',
    homeLivingPrompt: 'Current monthly PG&E, water, garbage, heating & internet bills',
    defaultMonthlyInput: '',
    missionVillaConsolidatedContext:
      'Everyday community utilities, climate comfort, and Wi-Fi in common spaces are consolidated into community living (confirm per-suite utility details).',
    questionToVerifyOnTour:
      'Are all utilities included in the base monthly rate, or are any billed separately?',
  },
  {
    id: 'ledger-home-maintenance',
    lineNumber: '03',
    categoryGroup: 'Utilities & Household',
    expenseLabel: 'Home Repairs, Yard Care & Accessibility Modifications',
    homeLivingPrompt: 'Average monthly upkeep, plumbing/roof reserves, lawn care & safety retrofits',
    defaultMonthlyInput: '',
    missionVillaConsolidatedContext:
      'Building maintenance, groundskeeping for our courtyard and patio, and emergency alert features are maintained by Mission Villa.',
    questionToVerifyOnTour:
      'How are suite maintenance requests and safety features handled for residents?',
  },
  {
    id: 'ledger-groceries-dining',
    lineNumber: '04',
    categoryGroup: 'Food & Nourishment',
    expenseLabel: 'Groceries, Meal Preparation & Special Dietary Shopping',
    homeLivingPrompt: 'Monthly grocery bills, meal delivery services & kitchen staples',
    defaultMonthlyInput: '',
    missionVillaConsolidatedContext:
      'Three chef-prepared meals daily with full-table service plus nutritious snacks and refreshments are part of daily life at Mission Villa.',
    questionToVerifyOnTour:
      'How are special dietary options and family guest meals accommodated?',
  },
  {
    id: 'ledger-inhome-care',
    lineNumber: '05',
    categoryGroup: 'Personal Care & Support',
    expenseLabel: 'In-Home Caregiver Hours, Overnight Supervision & Agency Fees',
    homeLivingPrompt: 'Current or projected monthly cost for private or agency home-care aides',
    defaultMonthlyInput: '',
    missionVillaConsolidatedContext:
      '24-hour on-site staff availability and assessment-informed assistance with bathing, dressing, grooming, and transfers are provided in our nurturing setting.',
    questionToVerifyOnTour:
      'How does Mission Villa structure care levels following a resident assessment?',
  },
  {
    id: 'ledger-housekeeping-laundry',
    lineNumber: '06',
    categoryGroup: 'Daily Living & Upkeep',
    expenseLabel: 'Housekeeping, Linen Service & Personal Laundry',
    homeLivingPrompt: 'Monthly home cleaning service, laundry supplies & dry cleaning',
    defaultMonthlyInput: '',
    missionVillaConsolidatedContext:
      'Routine suite housekeeping, bed linen service, and personal laundry are handled by our community staff.',
    questionToVerifyOnTour:
      'How often are suites cleaned and personal laundry washed each week?',
  },
  {
    id: 'ledger-activities-social',
    lineNumber: '07',
    categoryGroup: 'Engagement & Mobility',
    expenseLabel: 'Adult Day Programs, Social Activities & Life Enrichment',
    homeLivingPrompt: 'Monthly adult day-care tuition, classes, hobbies & companion outings',
    defaultMonthlyInput: '',
    missionVillaConsolidatedContext:
      'Legacies™ Memory Care programming, daily group and one-on-one activities, games, art, fitness, and live entertainment are included daily.',
    questionToVerifyOnTour:
      'How does the Activity Director tailor daily engagement to my loved one’s interests?',
  },
  {
    id: 'ledger-transportation',
    lineNumber: '08',
    categoryGroup: 'Engagement & Mobility',
    expenseLabel: 'Transportation, Errands & Escort Coordination',
    homeLivingPrompt: 'Monthly vehicle upkeep, gas, insurance, rideshares or medical transport',
    defaultMonthlyInput: '',
    missionVillaConsolidatedContext:
      'Mission Villa offers scheduled transportation, scenic drives, and concierge coordination (confirm current routing and eligibility with our team).',
    questionToVerifyOnTour:
      'What scheduled transportation is included, and when do separate transport fees apply?',
  },
];

export const FINANCIAL_PLANNING_PATHWAYS: FinancialPlanningPathway[] = [
  {
    id: 'personal-assessment-consultation',
    index: '01',
    badge: 'Recommended First Step',
    title: 'Personalized Care Assessment & Written Cost Overview',
    subtitle: 'Clear, one-on-one guidance with our Daly City team',
    description:
      'Because Memory Care and Respite Care costs depend on your loved one’s specific daily support needs and suite selection, the most accurate way to plan is a conversation with our team at 995 East Market Street. We review available suites, explain how our assessment works, and outline costs clearly before you make any commitment.',
    questionsToAsk: [
      'What suite formats (Private, Companion Unit, Jack & Jill) are currently available?',
      'How does the care assessment determine my loved one’s personalized support plan?',
      'What one-time community or move-in fees apply, and how are monthly statements structured?',
    ],
    verificationStatus: 'Standard Planning Guidance',
    disclaimerNote:
      'Mission Villa provides individualized pricing information directly to families following a consultation.',
    inquiryPresetNote:
      'Would like to schedule a financial planning conversation and learn how a care assessment shapes monthly pricing.',
  },
  {
    id: 'long-term-care-insurance',
    index: '02',
    badge: 'Original-Site Planning Topic',
    title: 'Long-Term Care Insurance Policies',
    subtitle: 'Reviewing policy benefits for Memory Care or Respite Care',
    description:
      'As highlighted on Mission Villa’s original Financial Planning page, many families use Long-Term Care (LTC) insurance policies to help offset qualified senior care and Memory Care expenses. Because every policy has its own elimination period, daily/monthly benefit cap, and care-trigger definitions, we encourage families to review their policy documents early.',
    questionsToAsk: [
      'Does my loved one’s Long-Term Care policy cover licensed RCFE Memory Care (#415601046) or short-term Respite Care?',
      'What documentation or care plans can Mission Villa provide to support our insurance claim submissions?',
      'What is our policy’s elimination (waiting) period before reimbursements begin?',
    ],
    verificationStatus: 'Standard Planning Guidance',
    disclaimerNote:
      'Coverage and reimbursement depend on your specific insurance contract; verify policy benefits directly with your insurer.',
    inquiryPresetNote:
      'Our family has a Long-Term Care insurance policy and would like to ask how Mission Villa supports documentation.',
  },
  {
    id: 'family-and-benefit-planning',
    index: '03',
    badge: 'Family Financial Coordination',
    title: 'Home Equity, Family Contributions & Companion Suite Value',
    subtitle: 'Practical ways families structure ongoing care budgets',
    description:
      'Families often combine retirement income, Social Security, savings, or proceeds from downsizing a family home to fund Memory Care. Selecting a shared Companion Unit or Jack & Jill suite format is also a meaningful way many families balance warm daily companionship with a more approachable monthly accommodation cost.',
    questionsToAsk: [
      'How does the monthly rate of a Companion Unit or Jack & Jill suite compare with a Private Suite?',
      'Can a short-term Respite Care stay help us evaluate fit while we finalize longer-term family planning?',
      'Who on the Mission Villa team can answer billing questions for adult children or fiduciaries?',
    ],
    verificationStatus: 'Standard Planning Guidance',
    disclaimerNote:
      'We recommend consulting your family’s financial or elder-law advisor when evaluating tax, estate, or benefit strategies.',
    inquiryPresetNote:
      'Interested in comparing Private Suite vs. Companion Unit / Jack & Jill pricing options for our family budget.',
  },
  {
    id: 'legacy-site-referral-and-state-programs',
    index: '04',
    badge: 'Reconfirm Current Eligibility on Tour',
    title: 'Referral Credits & State Assistance Participation',
    subtitle: 'Original-website references that require fresh confirmation',
    description:
      'Mission Villa’s legacy public website referenced a resident referral credit as well as participation in state assistance programs. Because promotional credits, program participation, and regulatory eligibility criteria can change over time, families should reconfirm current availability and qualification rules directly with Mission Villa leadership.',
    questionsToAsk: [
      'Is a resident or family referral credit currently offered, and what terms apply?',
      'Does Mission Villa currently participate in any California state assistance or waiver programs, and what are the eligibility requirements?',
      'Are there any current seasonal or move-in planning considerations we should know about?',
    ],
    verificationStatus: 'CLIENT CONFIRMATION REQUIRED',
    disclaimerNote:
      'CLIENT CONFIRMATION REQUIRED: Referral credit offers and state assistance participation mentioned on the legacy website must be verified directly with Mission Villa prior to relying on them.',
    inquiryPresetNote:
      'Would like to confirm current policies regarding referral credits or state assistance participation mentioned on the website.',
  },
];

export const FINANCIAL_PLANNING_FAQS: FinancialPlanningFaqItem[] = [
  {
    id: 'fp-faq-why-no-online-price',
    category: 'How Pricing Works',
    question: 'Why doesn’t Mission Villa list fixed monthly prices or an automated calculator online?',
    answer:
      'Every resident living with Alzheimer’s or dementia has distinct daily care needs, routines, and suite preferences. Online calculators that display pre-filled estimates or promised “savings” often mislead families. Instead, our Daly City team provides straightforward, personalized pricing information after learning about your loved one and discussing available Private, Companion, or Jack & Jill suites.',
  },
  {
    id: 'fp-faq-assessment-role',
    category: 'How Pricing Works',
    question: 'How does the care assessment influence Memory Care costs?',
    answer:
      'Before move-in—and periodically thereafter—our team conducts a thoughtful assessment to understand the level of daily assistance your loved one needs with bathing, dressing, grooming, transfers, and daily engagement. This ensures your family’s care plan is tailored appropriately to your loved one’s current support needs.',
  },
  {
    id: 'fp-faq-what-is-included',
    category: 'Inclusions & Suites',
    question: 'What is typically included in monthly Memory Care living at Mission Villa?',
    answer:
      'Monthly living typically brings together your loved one’s private or shared suite (with a private bathroom), three chef-prepared meals and snacks daily, 24-hour staff availability, emergency alert features, housekeeping, personal laundry and linen service, and daily Legacies™ Memory Care activities. During your visit, our team will review the exact inclusion list and note any optional services that carry separate fees.',
  },
  {
    id: 'fp-faq-companion-vs-private',
    category: 'Inclusions & Suites',
    question: 'How do Companion Units and Jack & Jill suites help families planning a budget?',
    answer:
      'For many families, our Companion Unit (shared suite) and Jack & Jill suite formats offer two benefits at once: they provide a more approachable accommodation rate than a solo Private Suite while giving residents comforting daily camaraderie and a shared private bathroom.',
  },
  {
    id: 'fp-faq-ltc-insurance',
    category: 'Insurance & Assistance',
    question: 'Can we use Long-Term Care Insurance, referral credits, or state assistance programs?',
    answer:
      'Many families draw on Long-Term Care (LTC) insurance benefits to help pay for Memory Care or Respite Care; our team can share licensing information (CA RCFE #415601046) and care documentation to assist with your insurer’s claim process. Because referral credits and state assistance participation mentioned on our historical website are subject to change and specific eligibility rules, please ask our team to confirm current program status directly.',
  },
  {
    id: 'fp-faq-respite-rates',
    category: 'Short-Term Stays',
    question: 'How does pricing work for a short-term Respite Care stay?',
    answer:
      'Short-term Respite Care stays—ranging from a few days to several weeks, subject to availability—are arranged based on stay length, furnished suite availability, and your loved one’s daily care needs. Call our team at (650) 756-1995 for current Respite Care availability and rate details.',
  },
];

export function filterFinancialInclusions(
  items: FinancialInclusionItem[],
  group: FinancialInclusionGroup
): FinancialInclusionItem[] {
  if (group === 'All Categories') {
    return items;
  }
  return items.filter((item) => item.group === group);
}

export function parseBlankLedgerAmount(rawInput: string): number | null {
  const cleaned = (rawInput || '').replace(/[$,\s]/g, '').trim();
  if (!cleaned) {
    return null;
  }
  const parsed = Number(cleaned);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return null;
  }
  return Math.round(parsed * 100) / 100;
}

export interface PaperLedgerSummary {
  checkedCount: number;
  enteredAmountCount: number;
  familyEnteredHomeTotal: number | null;
  checkedLabels: string[];
  inquiryNoteSummary: string;
}

export function summarizePaperLedger(
  rows: PaperLedgerComparisonRow[],
  checkedIds: string[],
  userAmounts: Record<string, string>
): PaperLedgerSummary {
  const checkedSet = new Set(checkedIds);
  const checkedRows = rows.filter((r) => checkedSet.has(r.id));

  let enteredAmountCount = 0;
  let runningTotal = 0;

  for (const row of rows) {
    const val = parseBlankLedgerAmount(userAmounts[row.id] || '');
    if (val !== null) {
      enteredAmountCount += 1;
      runningTotal += val;
    }
  }

  const familyEnteredHomeTotal =
    enteredAmountCount > 0 ? Math.round(runningTotal * 100) / 100 : null;
  const checkedLabels = checkedRows.map((r) => r.expenseLabel);

  const parts: string[] = [
    'Requesting a personalized Financial Planning discussion.',
  ];
  if (checkedLabels.length > 0) {
    parts.push(
      `Comparing ${checkedLabels.length} expense categories (${checkedLabels
        .slice(0, 3)
        .join('; ')}${checkedLabels.length > 3 ? '...' : ''}).`
    );
  }
  if (familyEnteredHomeTotal !== null) {
    parts.push(
      `Self-entered home comparison worksheet subtotal: $${familyEnteredHomeTotal.toLocaleString(
        'en-US'
      )}/mo across ${enteredAmountCount} item(s).`
    );
  }

  return {
    checkedCount: checkedRows.length,
    enteredAmountCount,
    familyEnteredHomeTotal,
    checkedLabels,
    inquiryNoteSummary: parts.join(' '),
  };
}

// ============================================================================
// PAGE 09: FOR FAMILIES / FAQs (/for-families) — SOURCE-GROUNDED DATA & LOGIC
// ============================================================================
// Grounded in:
// - https://missionvillaseniorliving.com/living-options/
// - https://missionvillaseniorliving.com/living-options/memory-care/
// - https://missionvillaseniorliving.com/living-options/respite-care/
// - Current homepage FAQs & blueprint §5 Page 09
// Guardrails: Elegant family-decision guide & grouped accordion (Care, Suites,
// Cost, Visits). Strictly NO diagnosis tool, NO risk scoring, and NO implied
// medical advice. All images marked ILLUSTRATIVE — REPLACE BEFORE LAUNCH.

export interface FamilyDecisionPathway {
  id:
    | 'ongoing-memory-support'
    | 'short-term-caregiver-relief'
    | 'transitional-recovery-stay'
    | 'planning-ahead-together';
  index: string;
  kicker: string;
  title: string;
  familySituation: string;
  primaryOption: 'Memory Care (Legacies™ Program)' | 'Short-Term Respite Care' | 'Comparing Both Programs';
  recommendedRouteHref: '/memory-care' | '/respite-care' | '/suites-and-floor-plans';
  recommendedRouteLabel: string;
  howToThinkAboutIt: string;
  keySignsOfFit: string[];
  howBothProgramsConnect: string;
  suggestedFirstQuestion: string;
  presetCareOption: 'Memory Care' | 'Respite Care';
}

export interface CareVsRespiteComparisonDimension {
  id: string;
  dimension: string;
  memoryCareApproach: string;
  respiteCareApproach: string;
  familyTakeaway: string;
}

export type VisitQuestionTheme =
  | 'All Themes'
  | 'Daily Care & Legacies™'
  | 'Suites & Personalization'
  | 'Dining & Community Life'
  | 'Cost, Assessment & Timing';

export interface VisitChecklistQuestion {
  id: string;
  code: string;
  theme: Exclude<VisitQuestionTheme, 'All Themes'>;
  question: string;
  whyItMatters: string;
  whatToListenFor: string;
}

export interface FamilyInvolvementChapter {
  id: 'first-conversations' | 'personalizing-the-suite' | 'staying-connected' | 'evolving-partnership';
  stepNumber: string;
  kicker: string;
  title: string;
  subtitle: string;
  narrative: string;
  practicalWaysToParticipate: string[];
  reassuranceNote: string;
  placeholderImage: {
    src: string;
    alt: string;
    caption: string;
    status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH';
  };
}

export type FamilyFaqCategory = 'All Topics' | 'Care' | 'Suites' | 'Cost' | 'Visits';

export interface FamilyFaqItem {
  id: string;
  code: string;
  category: Exclude<FamilyFaqCategory, 'All Topics'>;
  question: string;
  answer: string;
  relatedRouteHref: string;
  relatedRouteLabel: string;
  confirmationNote?: string;
}

export const FAMILY_DECISION_PATHWAYS: FamilyDecisionPathway[] = [
  {
    id: 'ongoing-memory-support',
    index: 'Pathway 01',
    kicker: 'Ongoing Daily Living & Memory Support',
    title: 'When Daily Routines & Memory Changes Call for Steady Community Support',
    familySituation:
      '“My parent or spouse is living with Alzheimer’s disease or dementia, and our family wants a calm, nurturing community where they are known personally and supported around the clock.”',
    primaryOption: 'Memory Care (Legacies™ Program)',
    recommendedRouteHref: '/memory-care',
    recommendedRouteLabel: 'Explore Legacies™ Memory Care',
    howToThinkAboutIt:
      'Full-time Memory Care at Mission Villa is designed for older adults who benefit from consistent daily rhythms, 24-hour on-site staff presence, and person-centered support rooted in their personal life story.',
    keySignsOfFit: [
      'Your loved one benefits from predictable morning, mealtime, and evening routines in a homelike environment',
      'Hands-on daily assistance with bathing, dressing, grooming, or escorting would improve everyday comfort and dignity',
      'Social connection, chef-prepared dining, and tailored Legacies™ activities would reduce isolation at home',
      'Family caregivers want to shift from round-the-clock care coordination back to meaningful visits as spouse, son, or daughter',
    ],
    howBothProgramsConnect:
      'Some families begin with a personal walkthrough of Memory Care suites right away, while others arrange a short-term Respite Care stay first so their loved one can experience our dining room and daily rhythm firsthand.',
    suggestedFirstQuestion:
      'How does the Legacies™ Memory Care team learn my loved one’s personal history and help them settle into the first few weeks?',
    presetCareOption: 'Memory Care',
  },
  {
    id: 'short-term-caregiver-relief',
    index: 'Pathway 02',
    kicker: 'Caregiver Rest, Travel or Family Obligations',
    title: 'When a Primary Family Caregiver Needs Dependable Time to Rest or Travel',
    familySituation:
      '“I care for my loved one at home and want them welcomed into a safe, compassionate community for a few days or several weeks while I recharge, travel, or handle family commitments.”',
    primaryOption: 'Short-Term Respite Care',
    recommendedRouteHref: '/respite-care',
    recommendedRouteLabel: 'Explore Short-Term Respite Care',
    howToThinkAboutIt:
      'Respite Care offers a temporary, furnished stay (subject to current availability) with the same attentive staff support, chef-prepared meals, and engaging daily activities enjoyed by full-time residents.',
    keySignsOfFit: [
      'You have upcoming travel, work obligations, or family events and want dependable 24-hour support for your loved one',
      'As a dedicated family caregiver, you need intentional time to rest and protect your own wellbeing',
      'Your loved one would enjoy sociable meals, activities, and a comfortable suite with a private bathroom during your time away',
      'You want direct communication with our Daly City team while you are away',
    ],
    howBothProgramsConnect:
      'Many families use Respite Care periodically throughout the year for caregiver rest, and find it provides natural familiarity if full-time Memory Care is ever needed later.',
    suggestedFirstQuestion:
      'What short-term stay lengths and furnished suite accommodations are currently available for Respite Care?',
    presetCareOption: 'Respite Care',
  },
  {
    id: 'transitional-recovery-stay',
    index: 'Pathway 03',
    kicker: 'Bridge Support After Illness or Rehabilitation',
    title: 'When Returning Straight Home Feels Too Soon After a Health Change',
    familySituation:
      '“After an illness, hospital stay, or rehabilitation period, our family wants a supportive environment where daily meals, personal care, and routines are looked after before deciding next steps.”',
    primaryOption: 'Short-Term Respite Care',
    recommendedRouteHref: '/respite-care',
    recommendedRouteLabel: 'Review Respite Care Transitions',
    howToThinkAboutIt:
      'As noted on Mission Villa’s Respite Care page, a short-term stay can offer extra daily support after illness or rehabilitation—giving your loved one attentive daily assistance, regular meals, and unhurried recovery time.',
    keySignsOfFit: [
      'Your family needs time to prepare the home or evaluate whether returning home is practical',
      'Consistent daily meals, housekeeping, laundry, and personal care assistance would ease the transition',
      'Routine assessments help clarify what level of ongoing daily support feels most comfortable',
      'You want an unhurried window to observe how your loved one responds to community life',
    ],
    howBothProgramsConnect:
      'If a guest thrives in the community rhythm during a transitional Respite Care stay, our team can discuss long-term Memory Care suite options without any high-pressure obligation.',
    suggestedFirstQuestion:
      'How does your pre-stay assessment coordinate with our family when planning a transitional Respite Care stay?',
    presetCareOption: 'Respite Care',
  },
  {
    id: 'planning-ahead-together',
    index: 'Pathway 04',
    kicker: 'Early Exploration & Suite Comparison',
    title: 'When Your Family Is Gathering Information Before an Urgent Crisis',
    familySituation:
      '“We are beginning first conversations as a family and want to understand Memory Care vs. Respite Care, compare Private and Companion suites, and learn how costs work without sales pressure.”',
    primaryOption: 'Comparing Both Programs',
    recommendedRouteHref: '/suites-and-floor-plans',
    recommendedRouteLabel: 'Compare Suites & Floor Plans',
    howToThinkAboutIt:
      'Visiting before an urgent need allows siblings, spouses, and relatives to walk through our Daly City community calmly, meet staff, see suites in person, and align on financial planning at a comfortable pace.',
    keySignsOfFit: [
      'Multiple family members are sharing the decision and want clear, consistent facts to discuss together',
      'You want to see the difference between a Private Suite, a Companion Unit, and a Jack & Jill layout in person',
      'You want to understand how assessment-informed pricing and home-expense comparisons work early on',
      'You value a pressure-free conversation where questions are welcomed',
    ],
    howBothProgramsConnect:
      'An early visit lets your family learn about both ongoing Legacies™ Memory Care and short-term Respite Care so you know every option available at 995 East Market Street.',
    suggestedFirstQuestion:
      'May our family schedule an informational walkthrough to see suites, dining spaces, and review how pricing is structured?',
    presetCareOption: 'Memory Care',
  },
];

export const CARE_VS_RESPITE_COMPARISON: CareVsRespiteComparisonDimension[] = [
  {
    id: 'comp-purpose',
    dimension: 'Primary Purpose & Focus',
    memoryCareApproach:
      'Ongoing, residential support for seniors living with Alzheimer’s disease or other forms of dementia through our signature Legacies™ Memory Care program.',
    respiteCareApproach:
      'Temporary, short-term stays that provide attentive care for a senior guest while giving primary family caregivers time to rest, travel, or manage obligations.',
    familyTakeaway:
      'Both programs share the same compassionate staff, homelike Daly City setting, and respect for personal dignity.',
  },
  {
    id: 'comp-duration',
    dimension: 'Typical Time Horizon',
    memoryCareApproach:
      'Long-term community residency shaped around familiar, unhurried daily rhythms and evolving personal care plans.',
    respiteCareApproach:
      'Short-term stays ranging from a few days to several weeks (confirm current stay duration terms and availability with our team).',
    familyTakeaway:
      'A short-term Respite stay can also serve as a gentle introduction before deciding on longer-term residency.',
  },
  {
    id: 'comp-accommodations',
    dimension: 'Suites & Living Spaces',
    memoryCareApproach:
      'Private Suites, Companion Units, and Jack & Jill floor-plan formats—each featuring a private bathroom and space for personal furniture and keepsakes.',
    respiteCareApproach:
      'Comfortable, furnished short-term accommodations with private bathroom access and full enjoyment of communal lounges, dining room, and courtyard.',
    familyTakeaway:
      'Even for a short stay, bringing a few familiar photos or a favorite blanket helps a suite feel immediately welcoming.',
  },
  {
    id: 'comp-daily-life',
    dimension: 'Dining, Activities & Support',
    memoryCareApproach:
      '24-hour staff availability, personalized help with daily tasks, three chef-prepared meals daily, housekeeping, laundry, and Legacies™ life-enrichment programming.',
    respiteCareApproach:
      'Tailored daily assistance, three chef-prepared meals and snacks daily, housekeeping, and warm inclusion in daily social, creative, and recreational activities.',
    familyTakeaway:
      'Respite Care guests are welcomed into the heart of daily community life—never set apart.',
  },
  {
    id: 'comp-cost-planning',
    dimension: 'How Pricing Is Discussed',
    memoryCareApproach:
      'Assessment-informed monthly pricing based on your loved one’s personal care needs and chosen suite format (Private, Companion, or Jack & Jill).',
    respiteCareApproach:
      'Arranged based on desired stay dates, furnished suite availability, and daily support needs confirmed during a pre-stay conversation.',
    familyTakeaway:
      'Our team shares clear, individualized cost information directly with your family—without generic online calculators.',
  },
];

export const VISIT_QUESTION_THEMES: VisitQuestionTheme[] = [
  'All Themes',
  'Daily Care & Legacies™',
  'Suites & Personalization',
  'Dining & Community Life',
  'Cost, Assessment & Timing',
];

export const VISIT_CHECKLIST_QUESTIONS: VisitChecklistQuestion[] = [
  {
    id: 'vq-legacies-story',
    code: 'Q01',
    theme: 'Daily Care & Legacies™',
    question:
      'How does the Legacies™ Memory Care team learn about my loved one’s life story, habits, and personal preferences before move-in?',
    whyItMatters:
      'Person-centered care depends on knowing who your loved one has always been—their family bonds, career, favorite music, and comforting routines.',
    whatToListenFor:
      'Look for a collaborative intake process where staff actively ask for family insights and share them across the daily care team.',
  },
  {
    id: 'vq-24hr-support',
    code: 'Q02',
    theme: 'Daily Care & Legacies™',
    question:
      'What does 24-hour on-site staff support look like during the day and overnight, and how are routine assessments handled?',
    whyItMatters:
      'Understanding how staff assist with bathing, dressing, grooming, transfers, and nighttime reassurance gives families confidence in everyday safety.',
    whatToListenFor:
      'Clear, plain-language explanations of how staff respond to resident needs and how families are updated when care plans adjust.',
  },
  {
    id: 'vq-suite-formats',
    code: 'Q03',
    theme: 'Suites & Personalization',
    question:
      'May we walk through available Private Suites, Companion Units, and Jack & Jill layouts to see the private bathrooms and lighting in person?',
    whyItMatters:
      'Seeing the physical scale, natural light, and bathroom layout helps you picture which suite format best matches your loved one’s personality.',
    whatToListenFor:
      'How companion matching is thoughtfully approached for shared suites and which apartment features (such as thermostat and emergency alert) apply.',
  },
  {
    id: 'vq-personal-items',
    code: 'Q04',
    theme: 'Suites & Personalization',
    question:
      'What favorite furniture, framed family photographs, or familiar keepsakes do you recommend bringing to help the suite feel like home?',
    whyItMatters:
      'Familiar visual cues and textures provide immediate emotional grounding during the transition into a new environment.',
    whatToListenFor:
      'Practical guidance on arranging personal items safely and comfortably before your loved one arrives.',
  },
  {
    id: 'vq-dining-experience',
    code: 'Q05',
    theme: 'Dining & Community Life',
    question:
      'How are chef-prepared meals served each day, and how do you accommodate personal food preferences or dietary needs?',
    whyItMatters:
      'Shared mealtimes are a daily anchor of warmth, nutrition, and social connection.',
    whatToListenFor:
      'Attentive table service, gentle mealtime cues, and flexibility for resident tastes and family dining visits.',
  },
  {
    id: 'vq-activities-rhythm',
    code: 'Q06',
    theme: 'Dining & Community Life',
    question:
      'How does the Activity Director adapt daily games, music, art, gentle fitness, and courtyard time for different energy levels?',
    whyItMatters:
      'Meaningful engagement should feel inviting rather than overwhelming, offering both group camaraderie and quiet one-on-one moments.',
    whatToListenFor:
      'Examples of how staff gently invite participation while respecting when a resident prefers quiet rest in the lounge or patio.',
  },
  {
    id: 'vq-cost-inclusions',
    code: 'Q07',
    theme: 'Cost, Assessment & Timing',
    question:
      'Following a care assessment, what services are included in the monthly rate versus billed as optional conveniences?',
    whyItMatters:
      'Separating core inclusions (suite, meals, 24-hour staff, housekeeping, laundry, activities) from optional services prevents surprises.',
    whatToListenFor:
      'A transparent walk-through of how care assessments, suite formats, and optional services (like salon/spa) are structured.',
  },
  {
    id: 'vq-respite-availability',
    code: 'Q08',
    theme: 'Cost, Assessment & Timing',
    question:
      'If we are considering a short-term Respite Care stay or planning a move in the coming weeks, what are the steps and timeline?',
    whyItMatters:
      'Knowing the sequence from initial conversation and assessment to suite preparation helps families coordinate smoothly.',
    whatToListenFor:
      'Clear guidance on required documentation, assessment scheduling, and current suite availability at 995 East Market Street.',
  },
];

export const FAMILY_INVOLVEMENT_CHAPTERS: FamilyInvolvementChapter[] = [
  {
    id: 'first-conversations',
    stepNumber: 'Chapter 01',
    kicker: 'Before the Transition',
    title: 'Sharing Your Loved One’s Life Story & Daily Comforts',
    subtitle: 'Beginning with listening, never a rushed checklist',
    narrative:
      'Long before move-in day or a short-term Respite stay, our team sits down with your family to learn who your loved one is. We talk about their lifelong routines, favorite foods, family history, and what brings them calm—laying the foundation for our Legacies™ Memory Care approach.',
    practicalWaysToParticipate: [
      'Share stories about your loved one’s career, hobbies, cultural traditions, and favorite music',
      'Discuss familiar morning and evening habits so daily assistance feels natural and unhurried',
      'Walk through available Private, Companion, or Jack & Jill suites together to choose the right setting',
    ],
    reassuranceNote:
      'Your insights as spouse, son, daughter, or relative guide how our team connects with your loved one from day one.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Warm, unhurried conversation between family members and care staff',
      caption: 'Every transition begins with listening closely to your family’s knowledge and stories',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'personalizing-the-suite',
    stepNumber: 'Chapter 02',
    kicker: 'Creating a Familiar Sanctuary',
    title: 'Personalizing the Suite With Treasured Touchpoints From Home',
    subtitle: 'Making a Private or Companion suite feel recognizable right away',
    narrative:
      'Moving into a new space is gentler when a resident is surrounded by the things they love. Families are encouraged to bring framed photographs, a favorite quilt or armchair, and meaningful keepsakes so the suite feels personal and comforting from the very first afternoon.',
    practicalWaysToParticipate: [
      'Arrange family photo albums, labeled portraits, and familiar bedside items in the suite',
      'Include favorite blankets, comfortable clothing, and sensory touchpoints that spark recognition',
      'Set up the space ahead of arrival so your loved one walks into a warm, settled room',
    ],
    reassuranceNote:
      'Whether in a Private Suite, Companion Unit, or Jack & Jill layout, personal touches honor identity and privacy.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Sunlit residential suite personalized with warm bedding and home comforts',
      caption: 'Personalizing suites with familiar photographs, bedding, and keepsakes from home',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'staying-connected',
    stepNumber: 'Chapter 03',
    kicker: 'Everyday Family Visits',
    title: 'Meaningful Visits in Our Lounges, Dining Room & Courtyard',
    subtitle: 'Returning to being family while our team handles daily caregiving tasks',
    narrative:
      'When daily bathing, laundry, cooking, and 24-hour supervision are cared for by our staff, family visits transform. Instead of spending every visit exhausted by chores, you can enjoy a cup of coffee on the patio, join an afternoon activity, or reserve private family dining.',
    practicalWaysToParticipate: [
      'Visit comfortably in our communal sitting lounges, quiet library nook, or enclosed garden courtyard',
      'Join your loved one for chef-prepared meals or inquire about private dining for family milestones',
      'Participate in community music, art, and seasonal gatherings in Daly City',
    ],
    reassuranceNote:
      'Conveniently located at 995 East Market Street in Daly City with on-site parking for visiting relatives.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Welcoming sunlit lounge and garden setting for family visits',
      caption: 'Inviting indoor lounges and outdoor courtyard spaces designed for relaxed family time',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
  {
    id: 'evolving-partnership',
    stepNumber: 'Chapter 04',
    kicker: 'Ongoing Communication',
    title: 'Open Dialogue & Routine Care Plan Reviews Over Time',
    subtitle: 'A transparent partnership as your loved one’s needs evolve',
    narrative:
      'Memory Care is an ongoing relationship between our staff and your family. Through approachable day-to-day communication and periodic routine assessments, we keep you informed about how your loved one is doing and collaborate closely whenever support needs change.',
    practicalWaysToParticipate: [
      'Stay in touch with our Daly City team by phone, email, or in-person conversations during visits',
      'Review routine care assessments together as daily support or mobility needs change',
      'Share feedback at any time on what is bringing your loved one comfort and joy',
    ],
    reassuranceNote:
      'You never lose your voice in your loved one’s care—our team is here as your partner.',
    placeholderImage: {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
      alt: 'Illustrative placeholder: Peaceful garden greenery symbolizing ongoing care and family peace of mind',
      caption: 'Continuous communication and collaborative assessments that support the whole family',
      status: 'ILLUSTRATIVE — REPLACE BEFORE LAUNCH',
    },
  },
];

export const FAMILY_FAQ_CATEGORIES: FamilyFaqCategory[] = [
  'All Topics',
  'Care',
  'Suites',
  'Cost',
  'Visits',
];

export const FOR_FAMILIES_FAQS: FamilyFaqItem[] = [
  // CARE (3 items)
  {
    id: 'ff-faq-care-programs',
    code: 'CARE 01',
    category: 'Care',
    question: 'What care programs does Mission Villa Senior Living offer in Daly City?',
    answer:
      'Mission Villa Senior Living specializes in two dedicated programs at 995 East Market Street in Daly City: full-time Memory Care (featuring our signature Legacies™ Memory Care program for seniors living with Alzheimer’s disease or other forms of dementia) and short-term Respite Care stays that support both seniors and family caregivers.',
    relatedRouteHref: '/memory-care',
    relatedRouteLabel: 'Explore Memory Care',
  },
  {
    id: 'ff-faq-care-legacies',
    code: 'CARE 02',
    category: 'Care',
    question: 'How does the Legacies™ Memory Care program support my loved one day to day?',
    answer:
      'Our Legacies™ Memory Care program centers on knowing the person behind the memory. By learning each resident’s life story, family relationships, and familiar routines, our 24-hour on-site staff provides respectful assistance with bathing, dressing, grooming, escorting, chef-prepared dining, and engaging daily activities that nurture dignity and belonging.',
    relatedRouteHref: '/memory-care',
    relatedRouteLabel: 'Read About Legacies™ Memory Care',
  },
  {
    id: 'ff-faq-care-respite-vs-memory',
    code: 'CARE 03',
    category: 'Care',
    question: 'How do families decide between a short-term Respite Care stay and full-time Memory Care?',
    answer:
      'Families often choose Respite Care when a primary caregiver needs temporary relief to rest, travel, or manage commitments, or when a loved one needs extra daily support for a few days to several weeks after an illness or rehabilitation. Full-time Memory Care is ideal when ongoing 24-hour staff support, predictable daily structure, and specialized dementia programming are needed long term. Some families also begin with a Respite stay as a gentle introduction to Mission Villa.',
    relatedRouteHref: '/respite-care',
    relatedRouteLabel: 'Explore Respite Care Stays',
    confirmationNote: 'Confirm current Respite Care stay duration options and suite availability with our team.',
  },

  // SUITES (3 items)
  {
    id: 'ff-faq-suites-formats',
    code: 'SUITES 01',
    category: 'Suites',
    question: 'What types of suites and floor-plan formats are available at Mission Villa?',
    answer:
      'Mission Villa offers both private suites and shared suites—including our Companion Unit and Jack & Jill floor-plan formats—each equipped with a private bathroom. During your visit in Daly City, our team will gladly show you available suite layouts so you can see the rooms and bathrooms in person.',
    relatedRouteHref: '/suites-and-floor-plans',
    relatedRouteLabel: 'View Suites & Floor Plans',
  },
  {
    id: 'ff-faq-suites-companion-vs-private',
    code: 'SUITES 02',
    category: 'Suites',
    question: 'How do we know whether a Private Suite, Companion Unit, or Jack & Jill format is best for our loved one?',
    answer:
      'A Private Suite offers a quiet individual sanctuary for residents who prefer solo downtime. A Companion Unit or Jack & Jill arrangement suits seniors who find comfort, reassurance, and camaraderie in sharing a homelike suite—while also offering families a more approachable monthly accommodation cost. All suite formats include private bathroom access and full community amenities.',
    relatedRouteHref: '/suites-and-floor-plans',
    relatedRouteLabel: 'Compare Suite Formats',
  },
  {
    id: 'ff-faq-suites-personalize',
    code: 'SUITES 03',
    category: 'Suites',
    question: 'Can our family personalize a suite with familiar photographs, bedding, and keepsakes?',
    answer:
      'Yes—we warmly encourage families to personalize suites with framed family photos, favorite quilts or armchairs, and meaningful keepsakes from home. Familiar surroundings help residents feel grounded, recognized, and comfortable right away. Routine housekeeping, personal laundry, and linen service are handled by our staff.',
    relatedRouteHref: '/suites-and-floor-plans',
    relatedRouteLabel: 'See Suite Personalization Guide',
    confirmationNote: 'Ask our team during your tour about suite dimensions, furniture placement, and per-unit features.',
  },

  // COST (3 items)
  {
    id: 'ff-faq-cost-determination',
    code: 'COST 01',
    category: 'Cost',
    question: 'How is monthly pricing determined, and why aren’t fixed rates or calculators shown online?',
    answer:
      'Because every resident’s daily support needs, care assessment, and suite preference (Private, Companion Unit, or Jack & Jill) are unique, automated online calculators or flat rate estimates can be misleading. Instead, our Daly City team provides clear, assessment-informed pricing tailored to your loved one after a personal conversation.',
    relatedRouteHref: '/financial-planning',
    relatedRouteLabel: 'Open Financial Planning & Paper Ledger',
  },
  {
    id: 'ff-faq-cost-inclusions',
    code: 'COST 02',
    category: 'Cost',
    question: 'What is typically included in monthly living compared with paying separate bills at home?',
    answer:
      'Monthly living at Mission Villa consolidates suite accommodation, utilities, three daily chef-prepared meals and snacks, 24-hour on-site staff availability, emergency alert features, housekeeping, personal laundry, and daily Legacies™ activities. On our Financial Planning page, you can use our blank Paper-Ledger Worksheet to compare these inclusions against your current household expenses.',
    relatedRouteHref: '/financial-planning',
    relatedRouteLabel: 'Use the Blank Paper-Ledger Worksheet',
    confirmationNote: 'Confirm specific utility inclusions and optional fee-based services (such as salon/spa) on tour.',
  },
  {
    id: 'ff-faq-cost-insurance-programs',
    code: 'COST 03',
    category: 'Cost',
    question: 'Can families use Long-Term Care Insurance, referral credits, or state assistance programs?',
    answer:
      'Many families use Long-Term Care (LTC) insurance benefits to help pay for licensed RCFE Memory Care (#415601046) or Respite Care, and our team can assist with care documentation for your insurer. Because referral credits and state assistance participation mentioned on our historical website are subject to updates and specific eligibility rules, please reconfirm current availability directly with our team.',
    relatedRouteHref: '/financial-planning',
    relatedRouteLabel: 'Review Planning Pathways',
    confirmationNote: 'CLIENT CONFIRMATION REQUIRED: Reconfirm current referral credit and state assistance terms with leadership.',
  },

  // VISITS (3 items)
  {
    id: 'ff-faq-visits-schedule',
    code: 'VISITS 01',
    category: 'Visits',
    question: 'How can our family schedule a tour of Mission Villa in Daly City, and what happens during a visit?',
    answer:
      'You can call us directly at (650) 756-1995, email mktg.missionvilla@missionvillaseniorliving.com, or use the inquiry form on this page to request a visit at 995 East Market Street, Daly City, CA 94014. During your visit, we walk through our dining room, communal lounges, courtyard, and available suites, and take time to answer your family’s questions without pressure.',
    relatedRouteHref: '#schedule-visit',
    relatedRouteLabel: 'Schedule a Personal Visit ↓',
  },
  {
    id: 'ff-faq-visits-family-involvement',
    code: 'VISITS 02',
    category: 'Visits',
    question: 'How can family members visit and stay involved after a loved one moves in?',
    answer:
      'Family connection is central to life at Mission Villa. Relatives are welcomed to visit in our sunlit lounges, enclosed courtyard, and patio, join residents for meals or private family dining, participate in community events, and stay in close communication with our care team.',
    relatedRouteHref: '/life-at-mission-villa',
    relatedRouteLabel: 'Explore Life at Mission Villa',
  },
  {
    id: 'ff-faq-visits-first-conversation',
    code: 'VISITS 03',
    category: 'Visits',
    question: 'Should my loved one join us on our first tour, or should family members visit first?',
    answer:
      'Either approach is completely welcome. Many spouses or adult children choose to visit first so they can ask candid questions about care, suites, and financial planning at their own pace, and then return for a second visit—perhaps over lunch or an afternoon activity—with their loved one.',
    relatedRouteHref: '#schedule-visit',
    relatedRouteLabel: 'Plan Your First Conversation ↓',
  },
];

export function filterVisitChecklistQuestions(
  questions: VisitChecklistQuestion[],
  theme: VisitQuestionTheme
): VisitChecklistQuestion[] {
  if (theme === 'All Themes') {
    return questions;
  }
  return questions.filter((q) => q.theme === theme);
}

export function buildVisitQuestionsInquiryNote(
  questions: VisitChecklistQuestion[],
  selectedIds: string[],
  activePathwayTitle?: string
): string {
  const selectedSet = new Set(selectedIds);
  const chosen = questions.filter((q) => selectedSet.has(q.id));

  const parts: string[] = [];
  if (activePathwayTitle) {
    parts.push(`Exploring pathway: ${activePathwayTitle}.`);
  }

  if (chosen.length === 0) {
    parts.push('Would like to schedule a family visit and discuss questions about care, suites, and pricing.');
    return parts.join(' ');
  }

  const previewList = chosen
    .slice(0, 3)
    .map((q) => `(${q.code}) ${q.question}`)
    .join(' ');

  parts.push(
    `Bringing ${chosen.length} family visit question(s) to discuss on tour: ${previewList}${
      chosen.length > 3 ? ` (+${chosen.length - 3} more)` : ''
    }`
  );
  return parts.join(' ');
}

export function filterFamilyFaqs(
  faqs: FamilyFaqItem[],
  category: FamilyFaqCategory,
  searchQuery: string
): FamilyFaqItem[] {
  const normalizedQuery = (searchQuery || '').trim().toLowerCase();

  return faqs.filter((item) => {
    const matchesCategory = category === 'All Topics' || item.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    const haystack = `${item.code} ${item.category} ${item.question} ${item.answer} ${
      item.confirmationNote || ''
    }`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

// ============================================================================
// PAGE 10: CONTACT / SCHEDULE A VISIT (/contact) — SOURCE-GROUNDED DATA & LOGIC
// ============================================================================
// Grounded in https://missionvillaseniorliving.com/contact-us/ and §5 Page 10.
// Do NOT request medical diagnoses or detailed health histories in this form.
// Enforces local client-side validation and explicit "Demo only — no inquiry sent".

export type ContactMethodPreference = 'Phone Call' | 'Email' | 'Either Phone or Email';

export type PreferredContactWindow =
  | 'Morning (9:00 AM – 12:00 PM)'
  | 'Afternoon (12:00 PM – 4:00 PM)'
  | 'Late Afternoon / Early Evening (4:00 PM – 6:00 PM)'
  | 'Flexible / Any Convenient Time';

export type ContactInquiryIntent =
  | 'Schedule a Personal Visit'
  | 'Request Pricing & Program Info'
  | 'Request a Team Phone Call'
  | 'Referral or Professional Introduction';

export interface ContactPageInquiryInput {
  fullName: string;
  preferredContactMethod: ContactMethodPreference;
  phone: string;
  email: string;
  careInterest: 'Memory Care (Legacies™ Program)' | 'Short-Term Respite Care' | 'Both / Exploring Options';
  suitePreference: 'Private Suite' | 'Companion Unit (Shared)' | 'Jack & Jill Format' | 'Open / Compare on Tour';
  inquiryIntent: ContactInquiryIntent;
  preferredWindow: PreferredContactWindow;
  preferredVisitTiming?: string;
  message?: string;
  referralNote?: string;
  consentAccepted: boolean;
}

export interface ContactPageInquiryValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactPageInquiryInput, string>>;
  sanitized?: ContactPageInquiryInput;
}

export function validateContactPageInquiry(
  input: ContactPageInquiryInput
): ContactPageInquiryValidationResult {
  const errors: Partial<Record<keyof ContactPageInquiryInput, string>> = {};

  const fullName = (input.fullName || '').trim();
  const phone = (input.phone || '').trim();
  const email = (input.email || '').trim();
  const preferredVisitTiming = (input.preferredVisitTiming || '').trim();
  const message = (input.message || '').trim();
  const referralNote = (input.referralNote || '').trim();

  if (fullName.length < 2) {
    errors.fullName = 'Please enter your full name so our team knows how to address you.';
  }

  const digitsOnly = phone.replace(/\D/g, '');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasValidPhone = digitsOnly.length >= 10;
  const hasValidEmail = emailRegex.test(email);

  if (input.preferredContactMethod === 'Phone Call') {
    if (!hasValidPhone) {
      errors.phone = 'Please enter a valid 10-digit telephone number for a phone call.';
    }
    if (email.length > 0 && !hasValidEmail) {
      errors.email = 'Please enter a valid email address or leave blank if preferring phone only.';
    }
  } else if (input.preferredContactMethod === 'Email') {
    if (!hasValidEmail) {
      errors.email = 'Please enter a valid email address so we can reply by email.';
    }
    if (phone.length > 0 && !hasValidPhone) {
      errors.phone = 'Please enter a valid 10-digit phone number or leave blank if preferring email only.';
    }
  } else {
    if (!hasValidPhone) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!hasValidEmail) {
      errors.email = 'Please enter a valid email address.';
    }
  }

  const validCareInterests: ContactPageInquiryInput['careInterest'][] = [
    'Memory Care (Legacies™ Program)',
    'Short-Term Respite Care',
    'Both / Exploring Options',
  ];
  if (!validCareInterests.includes(input.careInterest)) {
    errors.careInterest = 'Please select the care program you are exploring.';
  }

  const validWindows: PreferredContactWindow[] = [
    'Morning (9:00 AM – 12:00 PM)',
    'Afternoon (12:00 PM – 4:00 PM)',
    'Late Afternoon / Early Evening (4:00 PM – 6:00 PM)',
    'Flexible / Any Convenient Time',
  ];
  if (!validWindows.includes(input.preferredWindow)) {
    errors.preferredWindow = 'Please select a preferred contact window.';
  }

  if (!input.consentAccepted) {
    errors.consentAccepted =
      'Please acknowledge the contact and privacy consent note before previewing submission.';
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    sanitized: {
      fullName,
      preferredContactMethod: input.preferredContactMethod,
      phone: phone || 'Not provided (Email preferred)',
      email: email || 'Not provided (Phone preferred)',
      careInterest: input.careInterest,
      suitePreference: input.suitePreference,
      inquiryIntent: input.inquiryIntent,
      preferredWindow: input.preferredWindow,
      preferredVisitTiming,
      message,
      referralNote,
      consentAccepted: true,
    },
  };
}

export type ArrivalCorridorCategory =
  | 'All Routes'
  | 'Highway & Peninsula'
  | 'San Francisco & Local Streets'
  | 'BART & Public Transit'
  | 'Parking & Accessibility';

export interface ContactArrivalCorridor {
  id: string;
  code: string;
  category: Exclude<ArrivalCorridorCategory, 'All Routes'>;
  title: string;
  subtitle: string;
  routeSummary: string;
  landmarksAndStreets: string[];
  arrivalTip: string;
}

export const CONTACT_ARRIVAL_CORRIDORS: ContactArrivalCorridor[] = [
  {
    id: 'corridor-i280-peninsula',
    code: 'ROUTE 01',
    category: 'Highway & Peninsula',
    title: 'Approaching From I-280 North or South (San Mateo County & Peninsula)',
    subtitle: 'Direct freeway access from Burlingame, San Bruno, South San Francisco, and Colma',
    routeSummary:
      'Mission Villa Senior Living is located at 995 East Market Street in Daly City, just east of the I-280 corridor toward the residential foothills of San Bruno Mountain.',
    landmarksAndStreets: [
      'Connect via I-280 toward Mission Street / Junipero Serra Boulevard in Daly City',
      'Head east along Market Street / East Market Street into the quiet residential neighborhood',
      'Convenient regional access for relatives visiting from across the San Francisco Peninsula',
    ],
    arrivalTip:
      'Call our front desk at 650-756-1995 if you would like live turn-by-turn landmarks before setting out.',
  },
  {
    id: 'corridor-sf-mission',
    code: 'ROUTE 02',
    category: 'San Francisco & Local Streets',
    title: 'Approaching From San Francisco, Excelsior, Glen Park & Sunset',
    subtitle: 'Minutes south of the San Francisco county border along Mission Street or Geneva Avenue',
    routeSummary:
      'For families living in southern San Francisco neighborhoods, 995 East Market Street offers a straightforward neighborhood drive without needing to cross bridges or major toll corridors.',
    landmarksAndStreets: [
      'Travel south via Mission Street or San Jose Avenue into northern Daly City',
      'Turn east onto Market Street / East Market Street toward San Bruno Mountain State & County Park',
      'Situated in an established residential setting close to local dining and community parks',
    ],
    arrivalTip:
      'Many San Francisco spouses and adult children find East Market Street easy to reach for regular afternoon or dining visits.',
  },
  {
    id: 'corridor-bart-transit',
    code: 'ROUTE 03',
    category: 'BART & Public Transit',
    title: 'BART & SamTrans Connections in Daly City',
    subtitle: 'Public transit proximity via Daly City BART and Colma BART stations',
    routeSummary:
      'Visiting family members and friends arriving without a car can connect through the Daly City or Colma BART stations and local SamTrans bus routes serving Mission Street and East Market Street.',
    landmarksAndStreets: [
      'Short taxi, rideshare, or local bus connection from Daly City BART or Colma BART',
      'Served by local SamTrans corridors along Mission Street in Daly City',
      'Ask our concierge team for local transportation pointers when planning your visit',
    ],
    arrivalTip:
      'When scheduling your visit, let our team know your arrival window so we are ready to greet you at the main entrance.',
  },
  {
    id: 'corridor-parking-accessibility',
    code: 'ACCESS 04',
    category: 'Parking & Accessibility',
    title: 'On-Site Visitor Parking & Accessible Community Entry',
    subtitle: 'Thoughtful arrival experience for older adults, walkers, and wheelchairs',
    routeSummary:
      'Whether you are visiting solo for a first conversation or bringing an older loved one to see our dining room and suites, our community entrance is arranged for calm, unhurried arrival.',
    landmarksAndStreets: [
      'On-site parking available at 995 East Market Street (confirm specific visitor stall and drop-off instructions with our team)',
      'Step-free, mobility-supportive entry pathways and residential common areas',
      'Staff greeting at the front desk to assist with escorting or mobility devices',
    ],
    arrivalTip:
      'If you are bringing a loved one who uses a walker or wheelchair, call 650-756-1995 upon arrival so a team member can meet you right at the entrance.',
  },
];

export function filterContactArrivalCorridors(
  corridors: ContactArrivalCorridor[],
  category: ArrivalCorridorCategory
): ContactArrivalCorridor[] {
  if (category === 'All Routes') {
    return corridors;
  }
  return corridors.filter((c) => c.category === category);
}

export interface PostSubmissionWorkflowStep {
  id: string;
  stepNumber: string;
  timingBadge: string;
  title: string;
  subtitle: string;
  whatHappensInProduction: string;
  currentPrototypeBehavior: string;
  familyReassurance: string;
}

export const POST_SUBMISSION_WORKFLOW_STEPS: PostSubmissionWorkflowStep[] = [
  {
    id: 'post-step-01-acknowledgment',
    stepNumber: 'Step 01',
    timingBadge: 'Immediate · Production Handoff',
    title: 'Clear Inquiry Receipt & Direct Team Routing',
    subtitle: 'Your request goes straight to our Daly City community desk—never a high-pressure call center',
    whatHappensInProduction:
      'Once backend integration is connected at launch, submitting the form securely delivers your contact preferences, care interest (Memory Care or Respite Care), and preferred time window directly to the Mission Villa team.',
    currentPrototypeBehavior:
      'In this frontend design prototype, clicking Submit validates your inputs locally in the browser and displays an explicit "Demo only — no inquiry sent" preview card without transmitting personal data.',
    familyReassurance:
      'Need to reach us today during the prototype phase? Call 650-756-1995 or email mktg.missionvilla@missionvillaseniorliving.com directly.',
  },
  {
    id: 'post-step-02-listening-call',
    stepNumber: 'Step 02',
    timingBadge: 'In Your Preferred Contact Window',
    title: 'An Unhurried First Conversation by Phone or Email',
    subtitle: 'Listening to your family’s situation before suggesting next steps',
    whatHappensInProduction:
      'A Mission Villa team member reaches out during the contact window you selected (Morning, Afternoon, or Early Evening) using your preferred method to answer initial questions about Legacies™ Memory Care, short-term Respite Care, or suite formats.',
    currentPrototypeBehavior:
      'You can preview how preferred contact method and time window selections are captured in the guided inquiry form above.',
    familyReassurance:
      'There is never any obligation or sales pressure—only straightforward answers tailored to your timeline.',
  },
  {
    id: 'post-step-03-personal-walkthrough',
    stepNumber: 'Step 03',
    timingBadge: 'At 995 East Market Street',
    title: 'A Personal Visit & Guided Community Walkthrough',
    subtitle: 'See our dining room, lounges, enclosed courtyard, and suites in person',
    whatHappensInProduction:
      'We confirm a convenient day and time for you (and your loved one, if you wish) to visit 995 East Market Street in Daly City, meet our 24-hour care staff, and compare Private, Companion Unit, and Jack & Jill suite layouts.',
    currentPrototypeBehavior:
      'Use the Guided Inquiry form’s "Preferred Visit Day or Timing" field to test how tour scheduling notes are structured.',
    familyReassurance:
      'Many spouses and adult children visit solo first to ask candid questions, then return with their loved one for a second visit.',
  },
  {
    id: 'post-step-04-care-and-pricing-plan',
    stepNumber: 'Step 04',
    timingBadge: 'Personalized Follow-Up',
    title: 'Assessment-Informed Care & Financial Planning Clarity',
    subtitle: 'Written inclusions and care recommendations grounded in your loved one’s needs',
    whatHappensInProduction:
      'Following your conversation and walkthrough, our team outlines assessment-informed pricing, monthly inclusions, and—when moving forward—schedules a collaborative care assessment.',
    currentPrototypeBehavior:
      'Explore our interactive Paper-Ledger Worksheet on /financial-planning or bring questions from /for-families right into your visit.',
    familyReassurance:
      'Every step respects your family’s pace, privacy, and peace of mind.',
  },
];

export interface ReferralInterestPathway {
  id: 'family-friend-referral' | 'professional-care-referral';
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  verificationStatus: 'CLIENT CONFIRMATION REQUIRED';
  verificationDisclosure: string;
  presetInquiryNote: string;
}

export const CONTACT_REFERRAL_PATHWAYS: ReferralInterestPathway[] = [
  {
    id: 'family-friend-referral',
    badge: 'Original Contact Page Topic · Family & Resident Referrals',
    title: 'Referring a Friend or Relative to Mission Villa',
    subtitle: 'Sharing a trusted Daly City Memory Care or Respite Care community with another family',
    description:
      'The original Mission Villa Contact Us and Financial Planning pages include a dedicated area for families and current community friends who wish to introduce another family exploring Memory Care or short-term Respite Care in Daly City.',
    highlights: [
      'Introduce a friend, neighbor, or relative who is searching for compassionate dementia or respite support',
      'Our team reaches out with the same unhurried warmth, privacy, and respect',
      'Legacy site materials mention a resident referral credit; specific eligibility and credit terms must be confirmed directly with Mission Villa leadership',
    ],
    verificationStatus: 'CLIENT CONFIRMATION REQUIRED',
    verificationDisclosure:
      'CLIENT CONFIRMATION REQUIRED: The historical Mission Villa website mentions a resident referral credit program. Please confirm current program status, dollar amounts, and eligibility terms with leadership before launch.',
    presetInquiryNote:
      'Referral Interest (Family / Friend Introduction): I would like to ask about introducing a family friend or relative to Mission Villa and confirm current referral program details.',
  },
  {
    id: 'professional-care-referral',
    badge: 'Community Partners · Senior Care Professionals',
    title: 'Discharge Planners, Care Managers & Peninsula Senior Advisors',
    subtitle: 'Coordinating Memory Care transitions or post-rehabilitation Respite Care stays',
    description:
      'Social workers, hospital discharge planners, geriatric care managers, and fiduciaries across San Mateo and San Francisco Counties can connect directly with our Daly City team regarding suite availability and care assessments.',
    highlights: [
      'Direct coordination for Legacies™ Memory Care or short-term Respite Care inquiries',
      'Licensed California RCFE (#415601046) at 995 East Market Street, Daly City, CA 94014',
      'Please do not transmit protected medical records or clinical diagnoses through the public website form; call 650-756-1995 to coordinate directly',
    ],
    verificationStatus: 'CLIENT CONFIRMATION REQUIRED',
    verificationDisclosure:
      'CLIENT CONFIRMATION REQUIRED: Confirm preferred professional referral intake contact protocol and whether secondary telephone (650) 534-2859 is active for partner inquiries.',
    presetInquiryNote:
      'Professional Referral / Care Coordination Inquiry: Reaching out to connect with the Mission Villa team regarding current Memory Care or Respite Care suite availability.',
  },
];

export type ContactFaqCategory =
  | 'All Questions'
  | 'Scheduling & Visits'
  | 'Directions & Accessibility'
  | 'Contact & Phone Numbers'
  | 'Privacy & Prototype Form';

export interface ContactFaqItem {
  id: string;
  code: string;
  category: Exclude<ContactFaqCategory, 'All Questions'>;
  question: string;
  answer: string;
  confirmationNote?: string;
}

export const CONTACT_PAGE_FAQS: ContactFaqItem[] = [
  {
    id: 'contact-faq-schedule-tour',
    code: 'VISIT 01',
    category: 'Scheduling & Visits',
    question: 'What is the fastest way to schedule a visit or speak with the Mission Villa team?',
    answer:
      'You can call our main community telephone directly at 650-756-1995, email mktg.missionvilla@missionvillaseniorliving.com, or use the Guided Inquiry & Visit Request form on this page (note: while this website is in its frontend design prototype stage, the form demonstrates validation locally—please call or email us directly for immediate assistance).',
  },
  {
    id: 'contact-faq-what-to-expect-on-tour',
    code: 'VISIT 02',
    category: 'Scheduling & Visits',
    question: 'What happens during an in-person visit at 995 East Market Street?',
    answer:
      'During a personal visit in Daly City, a member of our team will welcome you, listen to your family’s questions, and walk you through our dining room, communal lounges, enclosed courtyard/patio, and available Private, Companion Unit, or Jack & Jill suites. We can also discuss Legacies™ Memory Care, short-term Respite Care, and personalized pricing at your pace.',
  },
  {
    id: 'contact-faq-parking-and-mobility',
    code: 'ACCESS 01',
    category: 'Directions & Accessibility',
    question: 'Where is Mission Villa located, and is the entrance accessible for seniors with mobility needs?',
    answer:
      'Mission Villa Senior Living is located at 995 East Market Street, Daly City, CA 94014, near the San Bruno Mountain foothills with convenient access from I-280 and Mission Street. On-site parking is available, and our community features step-free, wheelchair- and walker-friendly pathways. If you are arriving with a loved one who needs escort or transfer assistance from the car, call 650-756-1995 when you pull up.',
    confirmationNote:
      'Confirm specific visitor parking stall locations and arrival gate/door buzz procedures when booking your tour.',
  },
  {
    id: 'contact-faq-phone-numbers',
    code: 'CONTACT 01',
    category: 'Contact & Phone Numbers',
    question: 'Which telephone number and email address should families use to reach Mission Villa?',
    answer:
      'Please use our primary verified telephone number, 650-756-1995, and our marketing email, mktg.missionvilla@missionvillaseniorliving.com, for all family inquiries, tour requests, and general questions. (Note: While the legacy Contact page also displayed a secondary number, (650) 534-2859, 650-756-1995 is the primary verified community line across Mission Villa.)',
    confirmationNote:
      'CLIENT CONFIRMATION REQUIRED: Confirm whether secondary number (650) 534-2859 from the legacy Contact page remains active for specific inquiries or should be retired.',
  },
  {
    id: 'contact-faq-no-medical-history',
    code: 'PRIVACY 01',
    category: 'Privacy & Prototype Form',
    question: 'Should I include my loved one’s medical diagnoses or health records in the online contact form?',
    answer:
      'No. For your family’s privacy and security, please do not enter medical diagnoses, medication lists, or detailed health histories into the website inquiry form. You only need to share your contact details, whether you are exploring Memory Care or Respite Care, and when you would like to talk. Personal care needs are discussed privately with our team during your consultation and routine assessment.',
  },
  {
    id: 'contact-faq-digital-accessibility',
    code: 'ACCESS 02',
    category: 'Directions & Accessibility',
    question: 'What digital accessibility features are built into this website for older adults and relatives?',
    answer:
      'Every page includes a "Text Comfort" reading scale selector (A, A+, A++) in the top utility bar, high-contrast editorial typography, keyboard-navigable menus and accordions, visible focus rings, and support for reduced-motion preferences. If you need assistance accessing any information on our site, please call us at 650-756-1995.',
  },
];

export function filterContactFaqs(
  faqs: ContactFaqItem[],
  category: ContactFaqCategory,
  searchQuery: string
): ContactFaqItem[] {
  const normalizedQuery = (searchQuery || '').trim().toLowerCase();

  return faqs.filter((item) => {
    const matchesCategory = category === 'All Questions' || item.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    const haystack = `${item.code} ${item.category} ${item.question} ${item.answer} ${
      item.confirmationNote || ''
    }`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}




