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
