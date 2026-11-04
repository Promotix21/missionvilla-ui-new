'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  RotateCcw,
  ArrowUpRight,
  Compass,
  Clock,
  Info,
  Copy,
  Check,
  Car,
  Train,
  Accessibility,
  Users,
  Search,
  ChevronDown,
  FileSpreadsheet,
  HeartHandshake,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  CONTACT_ARRIVAL_CORRIDORS,
  POST_SUBMISSION_WORKFLOW_STEPS,
  CONTACT_REFERRAL_PATHWAYS,
  CONTACT_PAGE_FAQS,
  validateContactPageInquiry,
  filterContactArrivalCorridors,
  filterContactFaqs,
  type ContactPageInquiryInput,
  type ContactMethodPreference,
  type PreferredContactWindow,
  type ContactInquiryIntent,
  type ArrivalCorridorCategory,
  type PostSubmissionWorkflowStep,
  type ReferralInterestPathway,
  type ContactFaqCategory,
} from '@/lib/mission-villa-data';

const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=995+East+Market+Street+Daly+City+CA+94014';

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps?q=995+East+Market+Street,+Daly+City,+CA+94014&output=embed';

export default function ContactPage() {
  const [fontScale, setFontScale] = useState<number>(1);
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);

  // Section 2: Guided Inquiry / Request-Visit Prototype Form (#schedule-visit) state
  const [formState, setFormState] = useState<ContactPageInquiryInput>({
    fullName: '',
    preferredContactMethod: 'Either Phone or Email',
    phone: '',
    email: '',
    careInterest: 'Memory Care (Legacies™ Program)',
    suitePreference: 'Private Suite',
    inquiryIntent: 'Schedule a Personal Visit',
    preferredWindow: 'Morning (9:00 AM – 12:00 PM)',
    preferredVisitTiming: '',
    message: '',
    referralNote: '',
    consentAccepted: false,
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof ContactPageInquiryInput, string>>
  >({});
  const [demoSubmittedData, setDemoSubmittedData] =
    useState<ContactPageInquiryInput | null>(null);

  // Section 3: Grounded Map & Peninsula Directions state
  const [activeCorridorCategory, setActiveCorridorCategory] =
    useState<ArrivalCorridorCategory>('All Routes');
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>(
    CONTACT_ARRIVAL_CORRIDORS[0].id
  );
  const [mapVisualMode, setMapVisualMode] = useState<'editorial-card' | 'live-embed'>(
    'editorial-card'
  );

  // Section 4: What Happens After Submitting (Once Backend Is Connected) state
  const [activeWorkflowStepId, setActiveWorkflowStepId] = useState<
    PostSubmissionWorkflowStep['id']
  >(POST_SUBMISSION_WORKFLOW_STEPS[0].id);

  // Section 5: Optional Referral Interest Area state
  const [activeReferralId, setActiveReferralId] = useState<
    ReferralInterestPathway['id']
  >(CONTACT_REFERRAL_PATHWAYS[0].id);

  // Section 6: Contact & Accessibility FAQs state
  const [activeFaqCategory, setActiveFaqCategory] =
    useState<ContactFaqCategory>('All Questions');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([
    'contact-faq-schedule-tour',
    'contact-faq-parking-and-mobility',
    'contact-faq-no-medical-history',
  ]);

  const filteredCorridors = filterContactArrivalCorridors(
    CONTACT_ARRIVAL_CORRIDORS,
    activeCorridorCategory
  );

  const activeCorridor =
    filteredCorridors.find((c) => c.id === selectedCorridorId) ||
    filteredCorridors[0] ||
    CONTACT_ARRIVAL_CORRIDORS[0];

  const activeWorkflowStep =
    POST_SUBMISSION_WORKFLOW_STEPS.find((s) => s.id === activeWorkflowStepId) ||
    POST_SUBMISSION_WORKFLOW_STEPS[0];

  const activeReferral =
    CONTACT_REFERRAL_PATHWAYS.find((r) => r.id === activeReferralId) ||
    CONTACT_REFERRAL_PATHWAYS[0];

  const filteredFaqs = filterContactFaqs(
    CONTACT_PAGE_FAQS,
    activeFaqCategory,
    faqSearchQuery
  );

  const handleCopyAddress = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(MISSION_VILLA_FACTS.address.full).catch(() => {});
    }
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleNavigateToSection = (
    sectionId: string,
    presetCare?: 'Memory Care' | 'Respite Care'
  ) => {
    if (presetCare === 'Memory Care') {
      setFormState((prev) => ({
        ...prev,
        careInterest: 'Memory Care (Legacies™ Program)',
      }));
    } else if (presetCare === 'Respite Care') {
      setFormState((prev) => ({
        ...prev,
        careInterest: 'Short-Term Respite Care',
      }));
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const applyQuickPreset = (preset: {
    inquiryIntent: ContactInquiryIntent;
    careInterest: ContactPageInquiryInput['careInterest'];
    suitePreference?: ContactPageInquiryInput['suitePreference'];
    message: string;
    referralNote?: string;
  }) => {
    setDemoSubmittedData(null);
    setFormErrors({});
    setFormState((prev) => ({
      ...prev,
      inquiryIntent: preset.inquiryIntent,
      careInterest: preset.careInterest,
      suitePreference: preset.suitePreference || prev.suitePreference,
      message: preset.message,
      referralNote: preset.referralNote || '',
    }));
    const target = document.getElementById('schedule-visit');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactPageInquiry(formState);
    if (!validation.valid || !validation.sanitized) {
      setFormErrors(validation.errors);
      return;
    }
    setFormErrors({});
    setDemoSubmittedData(validation.sanitized);
    const target = document.getElementById('schedule-visit');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetDemoForm = () => {
    setDemoSubmittedData(null);
    setFormErrors({});
  };

  const toggleFaqOpen = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F4ED] text-[#29272B] flex flex-col selection:bg-[#3B2348] selection:text-[#F7F4ED]">
      {/* Shared Utility Ribbon & Sticky Editorial Header */}
      <HeaderAndUtilityBar
        fontScale={fontScale}
        onChangeFontScale={setFontScale}
        onNavigateToSection={(sectionId, presetCare) =>
          handleNavigateToSection(sectionId, presetCare)
        }
      />

      <main className="flex-1 w-full">
        {/* ===================================================================
            SECTION 1: CLEAR CONTACT HERO & DIRECT HOSPITALITY DESK
            Distinct visual composition for Page 10 (/contact):
            Full-width 12-column editorial monograph pairing an unhurried family
            welcome and prominent direct Call/Visit CTAs with a verified Daly City
            Hospitality Desk card and botanical arch arrival plate.
        ==================================================================== */}
        <section
          id="contact-hero"
          className="w-full min-h-[calc(100svh-104px)] py-3 lg:py-5 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture flex flex-col justify-between relative overflow-hidden"
        >
          {/* Top Breadcrumb & Page 10 Identity Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#3B2348]/15 text-xs">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[#29272B]/75"
            >
              <Link
                href="/"
                className="hover:text-[#3B2348] transition font-medium"
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#3B2348] font-semibold" aria-current="page">
                Contact &amp; Schedule a Visit
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] text-[#29272B]/75">
              <span className="font-semibold uppercase tracking-[0.18em] text-[#3B2348]">
                Direct Community Desk · Phone, Guided Inquiry &amp; Arrival Guide
              </span>
              <span className="hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="hidden sm:inline tabular-nums">
                CA License #{MISSION_VILLA_FACTS.licenseNumber}
              </span>
            </div>
          </div>

          {/* Center 12-Column Split: Direct Hospitality Narrative + Verified Contact Desk & Arch */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch my-auto py-3">
            {/* Left 6 Columns: Headline, Direct Call CTA & Guided Jump */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  A Warm Welcome in Daly City
                </span>

                <h1
                  className="font-serif text-[clamp(1.95rem,3.25vw,3.3rem)] leading-[1.06] tracking-[-0.02em] text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Reach Out to Our Team or Schedule an Unhurried Personal Visit.
                </h1>

                <p className="text-sm sm:text-[15px] text-[#29272B]/85 leading-relaxed">
                  Whether you are exploring{' '}
                  <Link
                    href="/memory-care"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Legacies™ Memory Care
                  </Link>{' '}
                  for a loved one living with Alzheimer’s or dementia, planning a short-term{' '}
                  <Link
                    href="/respite-care"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Respite Care
                  </Link>{' '}
                  stay, or simply want to walk through our suites and dining room in person, our team at{' '}
                  <strong className="text-[#3B2348]">
                    {MISSION_VILLA_FACTS.address.full}
                  </strong>{' '}
                  is here to listen and help without pressure.
                </p>
              </div>

              {/* Direct Verified Contact Trio Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="p-3.5 rounded-2xl bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] transition group flex flex-col justify-between shadow-md"
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#D8C7A5] group-hover:text-white">
                    <span>Main Phone</span>
                    <Phone className="w-3.5 h-3.5 text-[#C98268] group-hover:text-white" aria-hidden="true" />
                  </div>
                  <span className="font-serif text-lg font-bold mt-1.5 tabular-nums block">
                    {MISSION_VILLA_FACTS.phone.raw}
                  </span>
                  <span className="text-[11px] text-[#F7F4ED]/80 mt-0.5 block">
                    Tap to call our desk →
                  </span>
                </a>

                <a
                  href={MISSION_VILLA_FACTS.email.href}
                  className="p-3.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] hover:border-[#3B2348] transition flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#5F7F49] font-semibold">
                    <span>Marketing Email</span>
                    <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-[11px] font-bold text-[#3B2348] mt-1.5 break-words leading-snug block">
                    mktg.missionvilla
                    <wbr />
                    @missionvillaseniorliving.com
                  </span>
                  <span className="text-[11px] text-[#29272B]/70 mt-0.5 block">
                    Direct email inquiry →
                  </span>
                </a>

                <div className="p-3.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#A65D43] font-semibold">
                    <span>Daly City Address</span>
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span className="font-serif text-xs sm:text-sm font-bold text-[#3B2348] mt-1.5 leading-snug block">
                    {MISSION_VILLA_FACTS.address.street}, {MISSION_VILLA_FACTS.address.city},{' '}
                    {MISSION_VILLA_FACTS.address.state} {MISSION_VILLA_FACTS.address.zip}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="text-left text-[11px] font-semibold text-[#3B2348] hover:text-[#C98268] transition mt-0.5 inline-flex items-center gap-1 cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3 h-3 text-[#5F7F49]" aria-hidden="true" />
                        <span className="text-[#5F7F49]">Address copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" aria-hidden="true" />
                        <span>Copy street address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Primary Hero Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition shadow-lg cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Schedule a Visit or Request Info ↓</span>
                </button>

                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#C98268] text-white text-xs sm:text-sm font-semibold hover:bg-[#22122B] transition shadow-md whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Call {MISSION_VILLA_FACTS.phone.raw}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('map-and-directions')}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  <Compass className="w-4 h-4 shrink-0 text-[#5F7F49]" aria-hidden="true" />
                  <span>Map &amp; Directions</span>
                </button>
              </div>
            </div>

            {/* Right 6 Columns: Hospitality Arrival Monograph & Botanical Arch Visual */}
            <div className="lg:col-span-6 flex">
              <div className="herbarium-mount bg-[#FCFBF8] rounded-[32px] p-4 sm:p-6 w-full grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch shadow-xl">
                {/* Botanical Arch Arrival Photo Plate */}
                <div className="sm:col-span-6 flex flex-col justify-between">
                  <div className="relative w-full h-56 sm:h-full min-h-[240px] botanical-arch overflow-hidden bg-[#22122B] border border-[#D8C7A5]">
                    {/* REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO */}
                    <img
                      src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85"
                      alt="Illustrative placeholder: Welcoming sunlit garden pathway and residential courtyard entrance"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/85 via-[#22122B]/25 to-transparent" />
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#22122B]/85 border border-[#D8C7A5]/40 text-[9px] font-semibold uppercase tracking-wider text-[#D8C7A5] whitespace-nowrap">
                      ILLUSTRATIVE — REPLACE BEFORE LAUNCH
                    </div>
                    <div className="absolute bottom-3 inset-x-3 text-[#F7F4ED]">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FAF78] font-semibold block">
                        San Bruno Mountain Foothills
                      </span>
                      <p className="font-serif text-xs sm:text-sm font-medium leading-snug mt-0.5">
                        A calm, residential setting at 995 East Market Street in Daly City.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verified Arrival & Hospitality Ledger */}
                <div className="sm:col-span-6 flex flex-col justify-between space-y-4 p-1">
                  <div className="space-y-2 border-b border-[#D8C7A5] pb-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                      Verified Community Directory
                    </span>
                    <h2 className="font-serif text-xl font-bold text-[#3B2348] leading-snug">
                      Direct Hospitality &amp; Family Inquiries
                    </h2>
                    <p className="text-xs text-[#29272B]/80 leading-relaxed">
                      Every call and visit request is handled by our compassionate local team—never an automated call center.
                    </p>
                  </div>

                  <dl className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5]/70">
                      <dt className="text-[10px] uppercase tracking-wider text-[#29272B]/65 font-semibold">
                        Dedicated Care Programs
                      </dt>
                      <dd className="font-serif text-sm font-bold text-[#3B2348] mt-0.5">
                        Legacies™ Memory Care &amp; Short-Term Respite Care
                      </dd>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5]/70">
                      <dt className="text-[10px] uppercase tracking-wider text-[#29272B]/65 font-semibold">
                        Suite Formats Available to Tour
                      </dt>
                      <dd className="font-medium text-[#29272B] mt-0.5">
                        Private Suites, Companion Units &amp; Jack &amp; Jill Formats (All with Private Baths)
                      </dd>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5]/70">
                      <dt className="text-[10px] uppercase tracking-wider text-[#29272B]/65 font-semibold">
                        Licensing &amp; Location
                      </dt>
                      <dd className="font-medium text-[#3B2348] mt-0.5 tabular-nums">
                        CA RCFE License #{MISSION_VILLA_FACTS.licenseNumber} · Daly City, CA 94014
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#3B2348]/10 hover:bg-[#3B2348] text-[#3B2348] hover:text-[#F7F4ED] text-xs font-semibold transition"
                  >
                    <span>Open 995 East Market St in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4-Column Quick Section Strip */}
          <div className="w-full pt-3 border-t border-[#3B2348]/15 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              {
                id: 'schedule-visit',
                index: '01',
                title: 'Guided Visit & Inquiry Form',
                subtitle: 'Local validation · Demo-only state',
              },
              {
                id: 'map-and-directions',
                index: '02',
                title: 'Grounded Map & Directions',
                subtitle: 'I-280, SF, BART & accessible entry',
              },
              {
                id: 'what-happens-next',
                index: '03',
                title: 'What Happens After Submitting',
                subtitle: 'Production workflow vs. demo stage',
              },
              {
                id: 'referral-interest',
                index: '04',
                title: 'Referral Interest & FAQs',
                subtitle: 'Family/partner referrals & answers',
              },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigateToSection(item.id)}
                className="text-left p-2.5 rounded-xl bg-[#FCFBF8]/90 hover:bg-[#3B2348] text-[#29272B] hover:text-[#F7F4ED] border border-[#D8C7A5] transition group cursor-pointer flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A65D43] group-hover:text-[#D8C7A5] block">
                    {item.index} · Section
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-semibold text-[#3B2348] group-hover:text-[#F7F4ED] truncate block">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#29272B]/70 group-hover:text-[#F7F4ED]/80 truncate block">
                    {item.subtitle}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#3B2348] group-hover:text-[#D8C7A5] shrink-0">
                  ↓
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: SPLIT EDITORIAL CONTACT COMPOSITION & GUIDED INQUIRY /
            REQUEST-VISIT PROTOTYPE FORM (#schedule-visit)
            Left 5 columns: Direct contact cards, conversation presets, legacy
            phone confirmation note, and non-medical privacy guardrail.
            Right 7 columns: Guided inquiry/request-visit prototype form with
            local validation and explicit "Demo only — no inquiry sent" state.
        ==================================================================== */}
        <section
          id="schedule-visit"
          className="w-full py-16 lg:py-24 fluid-canvas bg-[#3B2348] text-[#F7F4ED] grid-line-b relative overflow-hidden"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left 5 Columns: Split Editorial Contact Directory & Quick Presets */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold">
                  <span>01 · Split Editorial Contact Studio</span>
                </div>

                <h2
                  className="font-serif section-display text-[#F7F4ED] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Connect By Phone, Email, or Guided Visit Request.
                </h2>

                <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                  Choose the way you feel most comfortable reaching out. Call our Daly City desk directly for an immediate conversation, or use the guided form to outline your preferred contact method, care interest, and time window.
                </p>
              </div>

              {/* Verified Contact Card with Prominent Call Button */}
              <div className="rounded-3xl bg-[#22122B] border border-[#D8C7A5]/30 p-6 sm:p-7 space-y-5 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8FAF78] font-semibold block">
                      Verified Primary Contact
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#F7F4ED] mt-0.5">
                      {MISSION_VILLA_FACTS.name}
                    </h3>
                  </div>
                  <span className="text-xs text-[#D8C7A5] font-medium tabular-nums">
                    CA License #{MISSION_VILLA_FACTS.licenseNumber}
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#C98268] shrink-0 mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-wider text-[#D8C7A5]/80 block">
                        Main Community Telephone (Verified)
                      </span>
                      <a
                        href={MISSION_VILLA_FACTS.phone.href}
                        className="font-serif text-2xl font-bold text-[#F7F4ED] hover:text-[#D8C7A5] transition tabular-nums inline-block mt-0.5"
                      >
                        {MISSION_VILLA_FACTS.phone.raw}
                      </a>
                      <p className="text-xs text-[#F7F4ED]/70 mt-1 leading-relaxed">
                        Also formatted as {MISSION_VILLA_FACTS.phone.formatted}.{' '}
                        <span className="text-[#D8C7A5]">
                          (CLIENT CONFIRMATION REQUIRED: Legacy Contact page also listed (650) 534-2859; use {MISSION_VILLA_FACTS.phone.raw} as primary.)
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#8FAF78] shrink-0 mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-wider text-[#D8C7A5]/80 block">
                        Direct Marketing &amp; Tour Email
                      </span>
                      <a
                        href={MISSION_VILLA_FACTS.email.href}
                        className="font-medium text-[#F7F4ED] hover:text-[#D8C7A5] transition break-all inline-block mt-0.5"
                      >
                        {MISSION_VILLA_FACTS.email.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#D8C7A5] shrink-0 mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <span className="text-xs uppercase tracking-wider text-[#D8C7A5]/80 block">
                        Community Street Address
                      </span>
                      <span className="font-medium text-[#F7F4ED] block mt-0.5">
                        {MISSION_VILLA_FACTS.address.full}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prominent Call & Email Action Row */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="py-3 px-4 rounded-full bg-[#C98268] text-white font-semibold text-xs text-center hover:bg-[#D8C7A5] hover:text-[#22122B] transition inline-flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Call {MISSION_VILLA_FACTS.phone.raw}</span>
                  </a>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-full border border-[#D8C7A5]/40 text-[#D8C7A5] font-semibold text-xs text-center hover:bg-white/10 transition inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Google Maps Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Quick Conversation Presets (1-Click Form Pre-Fill) */}
              <div className="rounded-3xl bg-white/10 border border-[#D8C7A5]/25 p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold">
                    Quick Inquiry Presets
                  </span>
                  <span className="text-[11px] text-[#F7F4ED]/75">
                    Click to pre-fill form →
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    {
                      label: 'Tour Memory Care Suites',
                      inquiryIntent: 'Schedule a Personal Visit' as const,
                      careInterest: 'Memory Care (Legacies™ Program)' as const,
                      suitePreference: 'Open / Compare on Tour' as const,
                      message:
                        'Would like to schedule a personal walkthrough of Legacies™ Memory Care and compare Private, Companion Unit, and Jack & Jill suites.',
                    },
                    {
                      label: 'Short-Term Respite Stay',
                      inquiryIntent: 'Request Pricing & Program Info' as const,
                      careInterest: 'Short-Term Respite Care' as const,
                      suitePreference: 'Private Suite' as const,
                      message:
                        'Exploring a short-term Respite Care stay in Daly City and would like to ask about availability and what is included.',
                    },
                    {
                      label: 'Pricing & Paper-Ledger Chat',
                      inquiryIntent: 'Request Pricing & Program Info' as const,
                      careInterest: 'Both / Exploring Options' as const,
                      suitePreference: 'Open / Compare on Tour' as const,
                      message:
                        'Would like to discuss assessment-informed pricing and monthly inclusions for our family.',
                    },
                    {
                      label: 'First Family Phone Call',
                      inquiryIntent: 'Request a Team Phone Call' as const,
                      careInterest: 'Memory Care (Legacies™ Program)' as const,
                      suitePreference: 'Open / Compare on Tour' as const,
                      message:
                        'We are beginning our family conversation and would appreciate an unhurried phone call with your team.',
                    },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => applyQuickPreset(preset)}
                      className="text-left px-3.5 py-2.5 rounded-xl bg-[#22122B]/70 hover:bg-[#D8C7A5] text-[#F7F4ED] hover:text-[#22122B] border border-[#D8C7A5]/25 text-xs font-medium transition cursor-pointer flex items-center justify-between gap-2"
                    >
                      <span className="truncate">{preset.label}</span>
                      <span aria-hidden="true" className="font-bold shrink-0">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Non-Medical Privacy Guardrail Notice */}
              <div className="p-4 rounded-2xl bg-[#22122B]/80 border border-[#8FAF78]/40 text-xs text-[#F7F4ED]/90 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8FAF78] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-[#D8C7A5] block mb-0.5">
                    Privacy &amp; Non-Clinical Form Guardrail
                  </strong>
                  <p className="leading-relaxed text-[#F7F4ED]/80">
                    For your family’s privacy, this inquiry form never asks for medical diagnoses, medication lists, or clinical health histories. Personal support needs are discussed privately with our care team.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Guided Inquiry / Request-Visit Prototype Form */}
            <div className="lg:col-span-7 flex">
              <div className="herbarium-mount bg-[#F7F4ED] text-[#29272B] rounded-[32px] p-6 sm:p-10 lg:p-12 w-full flex flex-col justify-between shadow-2xl">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#D8C7A5] pb-5 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                      Guided Inquiry &amp; Request-Visit Studio
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348] mt-1">
                      Schedule a Visit or Request Information
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="px-3.5 py-1.5 rounded-xl bg-[#D8C7A5]/50 text-[#3B2348] text-xs font-semibold inline-block">
                      Demo only — no inquiry sent
                    </span>
                  </div>
                </div>

                {demoSubmittedData ? (
                  /* EXPLICIT VISUAL DEMO STATE (Honest Prototype Feedback — Demo only — no inquiry sent) */
                  <div
                    role="status"
                    aria-live="polite"
                    data-testid="contact-demo-confirmation"
                    className="my-auto p-6 sm:p-8 rounded-2xl bg-[#FCFBF8] border-2 border-[#3B2348] space-y-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#D8C7A5]">
                      <div className="flex items-center gap-2.5 text-[#3B2348]">
                        <CheckCircle2
                          className="w-6 h-6 text-[#5F7F49] shrink-0"
                          aria-hidden="true"
                        />
                        <h4 className="font-serif text-xl sm:text-2xl font-bold">
                          Demo only — no inquiry sent
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#C98268]/20 text-[#A65D43] text-xs font-bold uppercase tracking-wider">
                        Frontend Design Prototype
                      </span>
                    </div>

                    <p className="text-sm text-[#29272B]/90 leading-relaxed">
                      This website is currently in its frontend design prototype phase. Your inputs passed local client-side validation, but <strong>no visit has been booked and no personal data or email was transmitted to any external server or CRM</strong>. Below is the structured inquiry preview prepared for future backend handoff:
                    </p>

                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] text-xs sm:text-sm">
                      <div>
                        <dt className="text-[#29272B]/65 font-medium">Full Name</dt>
                        <dd className="font-semibold text-[#3B2348]">
                          {demoSubmittedData.fullName}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#29272B]/65 font-medium">
                          Preferred Contact Method
                        </dt>
                        <dd className="font-semibold text-[#3B2348]">
                          {demoSubmittedData.preferredContactMethod}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#29272B]/65 font-medium">Telephone</dt>
                        <dd className="font-semibold text-[#3B2348] tabular-nums">
                          {demoSubmittedData.phone}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#29272B]/65 font-medium">Email Address</dt>
                        <dd className="font-semibold text-[#3B2348] break-all">
                          {demoSubmittedData.email}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#29272B]/65 font-medium">Inquiry Purpose</dt>
                        <dd className="font-semibold text-[#3B2348]">
                          {demoSubmittedData.inquiryIntent}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#29272B]/65 font-medium">
                          Preferred Contact Window
                        </dt>
                        <dd className="font-semibold text-[#3B2348]">
                          {demoSubmittedData.preferredWindow}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#29272B]/65 font-medium">Care Program Interest</dt>
                        <dd className="font-semibold text-[#3B2348]">
                          {demoSubmittedData.careInterest}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#29272B]/65 font-medium">Suite Format Interest</dt>
                        <dd className="font-semibold text-[#3B2348]">
                          {demoSubmittedData.suitePreference}
                        </dd>
                      </div>
                      {demoSubmittedData.preferredVisitTiming && (
                        <div className="sm:col-span-2">
                          <dt className="text-[#29272B]/65 font-medium">
                            Preferred Visit Day / Timing
                          </dt>
                          <dd className="font-semibold text-[#3B2348]">
                            {demoSubmittedData.preferredVisitTiming}
                          </dd>
                        </div>
                      )}
                      {demoSubmittedData.message && (
                        <div className="sm:col-span-2">
                          <dt className="text-[#29272B]/65 font-medium">
                            Family Questions / Notes
                          </dt>
                          <dd className="font-semibold text-[#3B2348]">
                            {demoSubmittedData.message}
                          </dd>
                        </div>
                      )}
                      {demoSubmittedData.referralNote && (
                        <div className="sm:col-span-2">
                          <dt className="text-[#29272B]/65 font-medium">Referral Context</dt>
                          <dd className="font-semibold text-[#3B2348]">
                            {demoSubmittedData.referralNote}
                          </dd>
                        </div>
                      )}
                    </dl>

                    <div className="p-4 rounded-xl bg-[#8FAF78]/20 border border-[#8FAF78]/50 text-xs sm:text-sm text-[#3B2348]">
                      <strong>To reach Mission Villa Senior Living right now:</strong> Call{' '}
                      <a
                        href={MISSION_VILLA_FACTS.phone.href}
                        className="underline font-bold tabular-nums"
                      >
                        {MISSION_VILLA_FACTS.phone.raw}
                      </a>{' '}
                      or email{' '}
                      <a
                        href={MISSION_VILLA_FACTS.email.href}
                        className="underline font-bold break-all"
                      >
                        {MISSION_VILLA_FACTS.email.address}
                      </a>
                      .
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleResetDemoForm}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3B2348] text-[#3B2348] text-xs font-semibold hover:bg-[#3B2348] hover:text-[#F7F4ED] transition cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Return to Form / Edit Demo Inquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNavigateToSection('what-happens-next')}
                        className="text-xs font-semibold text-[#A65D43] hover:text-[#3B2348] transition cursor-pointer"
                      >
                        See What Happens Once Backend Is Connected ↓
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitForm} noValidate className="space-y-5 my-auto">
                    {/* 1. Inquiry Intent Selector */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-2">
                        1. How Can Our Team Help You Today?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(
                          [
                            'Schedule a Personal Visit',
                            'Request Pricing & Program Info',
                            'Request a Team Phone Call',
                            'Referral or Professional Introduction',
                          ] as const
                        ).map((intentOption) => {
                          const isSelected = formState.inquiryIntent === intentOption;
                          return (
                            <button
                              key={intentOption}
                              type="button"
                              onClick={() =>
                                setFormState((prev) => ({
                                  ...prev,
                                  inquiryIntent: intentOption,
                                }))
                              }
                              className={`py-2.5 px-3.5 rounded-xl text-xs font-semibold border text-left transition cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348]'
                                  : 'bg-[#FCFBF8] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                              }`}
                            >
                              <span className="truncate">{intentOption}</span>
                              {isSelected && (
                                <Check className="w-3.5 h-3.5 text-[#D8C7A5] shrink-0" aria-hidden="true" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Name & Preferred Contact Method */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-full-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                        >
                          2. Your Full Name *
                        </label>
                        <input
                          id="contact-full-name"
                          type="text"
                          required
                          value={formState.fullName}
                          onChange={(e) =>
                            setFormState((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                          placeholder="e.g., Elena Martinez"
                          className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                        />
                        {formErrors.fullName && (
                          <p
                            role="alert"
                            className="text-xs text-[#A65D43] font-semibold mt-1"
                          >
                            {formErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-preferred-method"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                        >
                          3. Preferred Contact Method *
                        </label>
                        <select
                          id="contact-preferred-method"
                          value={formState.preferredContactMethod}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              preferredContactMethod: e.target
                                .value as ContactMethodPreference,
                            }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                        >
                          <option value="Either Phone or Email">
                            Either Phone or Email (Both Provided)
                          </option>
                          <option value="Phone Call">Phone Call Preferred</option>
                          <option value="Email">Email Reply Preferred</option>
                        </select>
                      </div>
                    </div>

                    {/* 3. Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                        >
                          Telephone Number{' '}
                          {formState.preferredContactMethod === 'Email'
                            ? '(Optional)'
                            : '*'}
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          placeholder="(650) 555-0199"
                          className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                        />
                        {formErrors.phone && (
                          <p
                            role="alert"
                            className="text-xs text-[#A65D43] font-semibold mt-1"
                          >
                            {formErrors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                        >
                          Email Address{' '}
                          {formState.preferredContactMethod === 'Phone Call'
                            ? '(Optional)'
                            : '*'}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                        />
                        {formErrors.email && (
                          <p
                            role="alert"
                            className="text-xs text-[#A65D43] font-semibold mt-1"
                          >
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* 4. Care Interest & Suite Format Preference */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-care-interest"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                        >
                          4. Care Program Interest *
                        </label>
                        <select
                          id="contact-care-interest"
                          value={formState.careInterest}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              careInterest: e.target
                                .value as ContactPageInquiryInput['careInterest'],
                            }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                        >
                          <option value="Memory Care (Legacies™ Program)">
                            Memory Care (Legacies™ Program)
                          </option>
                          <option value="Short-Term Respite Care">
                            Short-Term Respite Care
                          </option>
                          <option value="Both / Exploring Options">
                            Both / Exploring Options
                          </option>
                        </select>
                        {formErrors.careInterest && (
                          <p
                            role="alert"
                            className="text-xs text-[#A65D43] font-semibold mt-1"
                          >
                            {formErrors.careInterest}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-suite-preference"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                        >
                          Suite Format to Discuss or View
                        </label>
                        <select
                          id="contact-suite-preference"
                          value={formState.suitePreference}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              suitePreference: e.target
                                .value as ContactPageInquiryInput['suitePreference'],
                            }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                        >
                          <option value="Private Suite">
                            Private Suite with Private Bathroom
                          </option>
                          <option value="Companion Unit (Shared)">
                            Companion Unit (Shared Suite with Private Bath)
                          </option>
                          <option value="Jack & Jill Format">
                            Jack &amp; Jill Suite Format
                          </option>
                          <option value="Open / Compare on Tour">
                            Open / Would Like to Compare All Formats
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* 5. Preferred Contact Window & Optional Visit Timing */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-preferred-window"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                        >
                          5. Preferred Contact Window *
                        </label>
                        <select
                          id="contact-preferred-window"
                          value={formState.preferredWindow}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              preferredWindow: e.target
                                .value as PreferredContactWindow,
                            }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                        >
                          <option value="Morning (9:00 AM – 12:00 PM)">
                            Morning (9:00 AM – 12:00 PM)
                          </option>
                          <option value="Afternoon (12:00 PM – 4:00 PM)">
                            Afternoon (12:00 PM – 4:00 PM)
                          </option>
                          <option value="Late Afternoon / Early Evening (4:00 PM – 6:00 PM)">
                            Late Afternoon / Early Evening (4:00 PM – 6:00 PM)
                          </option>
                          <option value="Flexible / Any Convenient Time">
                            Flexible / Any Convenient Time
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-visit-timing"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                        >
                          Preferred Visit Day or Timing (Optional)
                        </label>
                        <input
                          id="contact-visit-timing"
                          type="text"
                          value={formState.preferredVisitTiming}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              preferredVisitTiming: e.target.value,
                            }))
                          }
                          placeholder="e.g., This Thursday afternoon or weekend"
                          className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                        />
                      </div>
                    </div>

                    {/* 6. Optional Message (Explicitly Non-Medical) */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348]"
                        >
                          6. Questions or Notes for Our Team (Optional)
                        </label>
                        <span className="text-[11px] text-[#A65D43] font-medium">
                          Please do not include medical diagnoses or health records
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, message: e.target.value }))
                        }
                        placeholder="Share any questions about Legacies™ Memory Care, short-term Respite Care, suites, or visiting with family..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                      />
                    </div>

                    {/* 7. Consent Language Appropriate to Later Legal/Privacy Review */}
                    <div className="p-3.5 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5]">
                      <label
                        htmlFor="contact-consent-checkbox"
                        className="flex items-start gap-3 cursor-pointer text-xs text-[#29272B]/90 leading-relaxed"
                      >
                        <input
                          id="contact-consent-checkbox"
                          type="checkbox"
                          checked={formState.consentAccepted}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              consentAccepted: e.target.checked,
                            }))
                          }
                          className="mt-1 w-4 h-4 accent-[#3B2348] rounded shrink-0 cursor-pointer"
                        />
                        <span>
                          <strong>Consent &amp; Privacy Notice *:</strong> I request that Mission Villa Senior Living contact me via my selected preference regarding community information, pricing, or scheduling a visit. I understand that this prototype form is for general inquiry purposes only (not medical history), and final consent wording is subject to legal/privacy review prior to production launch.
                        </span>
                      </label>
                      {formErrors.consentAccepted && (
                        <p
                          role="alert"
                          className="text-xs text-[#A65D43] font-semibold mt-2 pl-7"
                        >
                          {formErrors.consentAccepted}
                        </p>
                      )}
                    </div>

                    {/* Submit Button & Explicit Demo Notice */}
                    <div className="pt-1 space-y-2.5">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-full bg-[#C98268] text-white font-semibold text-sm sm:text-base hover:bg-[#3B2348] transition-colors shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>
                          Preview Guided Inquiry (Demo only — no inquiry sent)
                        </span>
                      </button>

                      <p className="text-[11px] text-[#29272B]/75 flex items-center justify-center gap-1.5 text-center">
                        <Info
                          className="w-3.5 h-3.5 text-[#3B2348] shrink-0"
                          aria-hidden="true"
                        />
                        <span>
                          Demo only — no inquiry sent. Submitting validates fields locally without transmitting personal data.
                        </span>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: GROUNDED MAP, PENINSULA DIRECTIONS & ARRIVAL CONTEXT
            Interactive corridor switcher (I-280/Peninsula, San Francisco/Mission St,
            BART & Public Transit, On-Site Parking & Accessibility) paired with a
            grounded 995 East Market Street map & arrival visual studio.
        ==================================================================== */}
        <section
          id="map-and-directions"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture"
        >
          <div className="w-full space-y-10">
            {/* Section Header */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7 space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Reaching 995 East Market Street
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Grounded Map, Peninsula Directions &amp; Accessible Arrival.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#29272B]/80 leading-relaxed">
                  Mission Villa Senior Living sits in an established Daly City neighborhood near the western foothills of San Bruno Mountain—offering straightforward access from I-280, southern San Francisco neighborhoods, and Peninsula transit.
                </p>
              </div>
            </div>

            {/* Category Filter Bar */}
            <div className="w-full flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D8C7A5]">
              <div
                className="flex flex-wrap items-center gap-2"
                role="tablist"
                aria-label="Filter arrival and direction corridors"
              >
                {(
                  [
                    'All Routes',
                    'Highway & Peninsula',
                    'San Francisco & Local Streets',
                    'BART & Public Transit',
                    'Parking & Accessibility',
                  ] as const
                ).map((cat) => {
                  const isActive = activeCorridorCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => {
                        setActiveCorridorCategory(cat);
                        const matching = filterContactArrivalCorridors(
                          CONTACT_ARRIVAL_CORRIDORS,
                          cat
                        );
                        if (matching.length > 0) {
                          setSelectedCorridorId(matching[0].id);
                        }
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                          : 'bg-[#FCFBF8] text-[#3B2348] border border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition whitespace-nowrap"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D8C7A5]" aria-hidden="true" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* 12-Column Split: Corridor Selector Cards (Left 6) + Grounded Map & Arrival Plate (Right 6) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left 6 Columns: Corridor Cards */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                {filteredCorridors.map((corridor) => {
                  const isSelected = activeCorridor.id === corridor.id;
                  return (
                    <div
                      key={corridor.id}
                      onClick={() => setSelectedCorridorId(corridor.id)}
                      className={`rounded-3xl p-5 sm:p-6 border transition cursor-pointer ${
                        isSelected
                          ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-xl'
                          : 'bg-[#FCFBF8] text-[#29272B] border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span
                          className={`font-bold uppercase tracking-[0.18em] ${
                            isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                          }`}
                        >
                          {corridor.code} · {corridor.category}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCorridorId(corridor.id);
                          }}
                          className={`text-xs font-semibold underline cursor-pointer ${
                            isSelected ? 'text-[#8FAF78]' : 'text-[#3B2348]'
                          }`}
                        >
                          {isSelected ? 'Selected Route Context' : 'Inspect Route Details →'}
                        </button>
                      </div>

                      <h3
                        className={`font-serif text-xl sm:text-2xl font-bold mt-2 ${
                          isSelected ? 'text-[#F7F4ED]' : 'text-[#3B2348]'
                        }`}
                      >
                        {corridor.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                          isSelected ? 'text-[#F7F4ED]/85' : 'text-[#29272B]/80'
                        }`}
                      >
                        {corridor.routeSummary}
                      </p>

                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-white/15 space-y-3">
                          <ul className="space-y-1.5 text-xs sm:text-sm text-[#F7F4ED]/90">
                            {corridor.landmarksAndStreets.map((point) => (
                              <li key={point} className="flex items-start gap-2">
                                <span className="text-[#D8C7A5] font-bold" aria-hidden="true">
                                  ·
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="p-3 rounded-xl bg-[#22122B] border border-[#D8C7A5]/30 text-xs text-[#D8C7A5]">
                            <strong>Visitor Arrival Tip:</strong> {corridor.arrivalTip}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right 6 Columns: Grounded Map & Architectural Arrival Companion */}
              <div className="lg:col-span-6 flex">
                <div className="herbarium-mount bg-[#FCFBF8] rounded-[32px] p-6 sm:p-8 w-full flex flex-col justify-between space-y-6 shadow-xl">
                  {/* Top Bar: Mode Switcher (Editorial Orientation vs Live Google Map Embed) */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8C7A5] pb-4">
                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] text-[#5F7F49] font-semibold block">
                        Grounded Location Context
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2348] mt-0.5">
                        995 East Market Street, Daly City, CA 94014
                      </h3>
                    </div>

                    <div className="flex items-center gap-1 p-1 rounded-full bg-[#F7F4ED] border border-[#D8C7A5]">
                      <button
                        type="button"
                        onClick={() => setMapVisualMode('editorial-card')}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                          mapVisualMode === 'editorial-card'
                            ? 'bg-[#3B2348] text-[#F7F4ED]'
                            : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                        }`}
                      >
                        Editorial Orientation
                      </button>
                      <button
                        type="button"
                        onClick={() => setMapVisualMode('live-embed')}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                          mapVisualMode === 'live-embed'
                            ? 'bg-[#3B2348] text-[#F7F4ED]'
                            : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                        }`}
                      >
                        Interactive Map Frame
                      </button>
                    </div>
                  </div>

                  {/* Center Visual Canvas */}
                  {mapVisualMode === 'editorial-card' ? (
                    <div className="space-y-5 my-auto">
                      {/* Large Inviting Location Photo Plate with Grounded Overlay */}
                      <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#22122B] border border-[#D8C7A5]">
                        {/* REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO */}
                        <img
                          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
                          alt="Illustrative placeholder: Welcoming residential sitting room and garden view in Daly City"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/35 to-transparent" />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#22122B]/85 border border-[#D8C7A5]/40 text-[10px] font-semibold uppercase tracking-wider text-[#D8C7A5]">
                          ILLUSTRATIVE — REPLACE BEFORE LAUNCH
                        </div>
                        <div className="absolute bottom-4 inset-x-4 text-[#F7F4ED] flex flex-wrap items-end justify-between gap-3">
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8FAF78] font-semibold block">
                              Northern San Mateo County · Peninsula
                            </span>
                            <p className="font-serif text-lg sm:text-xl font-bold mt-0.5">
                              Mission Villa Senior Living · 995 East Market St
                            </p>
                          </div>
                          <span className="text-xs text-[#D8C7A5] font-medium tabular-nums">
                            {MISSION_VILLA_FACTS.phone.raw}
                          </span>
                        </div>
                      </div>

                      {/* Grounded Neighborhood Compass Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]">
                          <div className="flex items-center gap-2 font-semibold text-[#3B2348]">
                            <Car className="w-4 h-4 text-[#A65D43]" aria-hidden="true" />
                            <span>Primary Road Corridors</span>
                          </div>
                          <p className="text-[#29272B]/80 mt-1 leading-relaxed">
                            East Market Street connects directly with Mission Street and the I-280 freeway corridor in Daly City.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]">
                          <div className="flex items-center gap-2 font-semibold text-[#3B2348]">
                            <Train className="w-4 h-4 text-[#5F7F49]" aria-hidden="true" />
                            <span>Nearby Natural &amp; Transit Anchors</span>
                          </div>
                          <p className="text-[#29272B]/80 mt-1 leading-relaxed">
                            Minutes from San Bruno Mountain State &amp; County Park, Daly City BART, and Colma BART.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] sm:col-span-2">
                          <div className="flex items-center gap-2 font-semibold text-[#3B2348]">
                            <Accessibility className="w-4 h-4 text-[#3B2348]" aria-hidden="true" />
                            <span>Selected Route Focus: {activeCorridor.title}</span>
                          </div>
                          <p className="text-[#29272B]/80 mt-1 leading-relaxed">
                            {activeCorridor.arrivalTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 my-auto">
                      <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#D8C7A5] bg-[#F7F4ED] relative">
                        <iframe
                          title="Google Map for Mission Villa Senior Living at 995 East Market Street, Daly City, CA 94014"
                          src={GOOGLE_MAPS_EMBED_URL}
                          className="w-full h-full border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                      <p className="text-xs text-[#29272B]/75 leading-relaxed">
                        Map centered on verified community address:{' '}
                        <strong className="text-[#3B2348]">
                          {MISSION_VILLA_FACTS.address.full}
                        </strong>
                        . If your browser blocks embedded third-party maps, use the direct Google Maps link below.
                      </p>
                    </div>
                  )}

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer"
                      >
                        {copiedAddress ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#5F7F49]" aria-hidden="true" />
                            <span>Copied: 995 East Market St</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Copy Verified Address</span>
                          </>
                        )}
                      </button>

                      <a
                        href={GOOGLE_MAPS_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition"
                      >
                        <span>Turn-by-Turn on Google Maps</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>

                    <a
                      href={MISSION_VILLA_FACTS.phone.href}
                      className="text-xs font-bold text-[#A65D43] hover:text-[#3B2348] transition tabular-nums"
                    >
                      Arrival Desk: {MISSION_VILLA_FACTS.phone.raw}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: WHAT HAPPENS AFTER SUBMITTING — ONCE BACKEND IS CONNECTED
            Transparent explanation of the 4-step family experience once production
            backend/CRM is wired, contrasted honestly with current prototype behavior.
        ==================================================================== */}
        <section
          id="what-happens-next"
          className="w-full py-20 lg:py-24 fluid-canvas bg-[#FCFBF8] grid-line-b"
        >
          <div className="w-full space-y-10">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7 space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Unhurried Follow-Through
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  What Happens After Submitting (Once Live Backend Is Connected).
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#29272B]/80 leading-relaxed">
                  Until production backend integration is connected in a later phase, this page’s inquiry form operates strictly in <strong>Demo only — no inquiry sent</strong> mode. Here is how your inquiry flows once connected—and how to reach us today.
                </p>
              </div>
            </div>

            {/* 4-Step Interactive Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {POST_SUBMISSION_WORKFLOW_STEPS.map((step) => {
                const isActive = activeWorkflowStep.id === step.id;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveWorkflowStepId(step.id)}
                    className={`text-left p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between space-y-3 ${
                      isActive
                        ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-lg'
                        : 'bg-[#F7F4ED] text-[#29272B] border-[#D8C7A5] hover:border-[#3B2348]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`font-bold uppercase tracking-wider ${
                          isActive ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                        }`}
                      >
                        {step.stepNumber}
                      </span>
                      <Clock
                        className={`w-4 h-4 ${
                          isActive ? 'text-[#8FAF78]' : 'text-[#3B2348]/60'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-serif text-lg font-bold leading-snug ${
                          isActive ? 'text-[#F7F4ED]' : 'text-[#3B2348]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 ${
                          isActive ? 'text-[#D8C7A5]' : 'text-[#29272B]/70'
                        }`}
                      >
                        {step.timingBadge}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detail Ledger */}
            <div className="rounded-[32px] bg-[#F7F4ED] border border-[#D8C7A5] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch shadow-md">
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4 border-b lg:border-b-0 lg:border-r border-[#D8C7A5] pb-6 lg:pb-0 lg:pr-8">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                    {activeWorkflowStep.stepNumber} · {activeWorkflowStep.timingBadge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348]">
                    {activeWorkflowStep.title}
                  </h3>
                  <p className="text-sm text-[#29272B]/80 font-medium">
                    {activeWorkflowStep.subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#3B2348] text-[#F7F4ED] space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                    Our Commitment to Families
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {activeWorkflowStep.familyReassurance}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
                <div className="p-5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#5F7F49] font-bold block">
                      Once Live Backend Is Connected
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#3B2348] mt-1">
                      Production Handoff Behavior
                    </h4>
                    <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed mt-2">
                      {activeWorkflowStep.whatHappensInProduction}
                    </p>
                  </div>
                  <span className="text-[11px] text-[#29272B]/65">
                    Planned for production CRM/email phase
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#FCFBF8] border border-[#C98268]/50 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A65D43] font-bold block">
                      Current Prototype Stage (Today)
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#3B2348] mt-1">
                      Demo Only — No Inquiry Sent
                    </h4>
                    <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed mt-2">
                      {activeWorkflowStep.currentPrototypeBehavior}
                    </p>
                  </div>
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                    <span>Call {MISSION_VILLA_FACTS.phone.raw} for live help →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: OPTIONAL REFERRAL INTEREST AREA (BASED ON ORIGINAL CONTACT PAGE)
            Supports both Family/Friend Referrals and Senior Care Professional
            introductions, with explicit CLIENT CONFIRMATION REQUIRED disclosures.
        ==================================================================== */}
        <section
          id="referral-interest"
          className="w-full py-20 lg:py-24 fluid-canvas bg-[#D8C7A5]/30 grid-line-b"
        >
          <div className="w-full space-y-8">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7 space-y-2.5">
                <span className="font-script script-display text-[#A65D43] block">
                  Community &amp; Partner Introductions
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Introducing a Family Friend or Professional Care Referral.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                  {CONTACT_REFERRAL_PATHWAYS.map((pathway) => {
                    const isSelected = activeReferral.id === pathway.id;
                    return (
                      <button
                        key={pathway.id}
                        type="button"
                        onClick={() => setActiveReferralId(pathway.id)}
                        className={`px-4 py-2.5 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                          isSelected
                            ? 'bg-[#3B2348] text-[#F7F4ED] shadow-md'
                            : 'bg-[#FCFBF8] text-[#3B2348] border border-[#D8C7A5] hover:border-[#3B2348]'
                        }`}
                      >
                        {pathway.id === 'family-friend-referral'
                          ? 'Family & Friend Referral'
                          : 'Care Professionals & Advisors'}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active Referral Pathway Card */}
            <div className="rounded-[32px] bg-[#FCFBF8] border border-[#D8C7A5] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch shadow-lg">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold uppercase tracking-[0.18em] text-[#5F7F49]">
                      {activeReferral.badge}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-[#A65D43]">
                      {activeReferral.verificationStatus}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348]">
                    {activeReferral.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                    {activeReferral.description}
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#29272B]/90">
                  {activeReferral.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Users className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-4 p-5 sm:p-6 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#A65D43] font-bold block">
                    Transparency &amp; Pre-Launch Verification Note
                  </span>
                  <p className="text-xs text-[#29272B]/85 leading-relaxed">
                    {activeReferral.verificationDisclosure}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      applyQuickPreset({
                        inquiryIntent: 'Referral or Professional Introduction',
                        careInterest: 'Both / Exploring Options',
                        message: activeReferral.presetInquiryNote,
                        referralNote: activeReferral.title,
                      })
                    }
                    className="w-full py-3.5 px-5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Pre-Fill Guided Form With Referral Inquiry ↑</span>
                  </button>

                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="w-full py-3 px-5 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                    <span>Or Call Desk Directly: {MISSION_VILLA_FACTS.phone.raw}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: CONTACT, VISIT & ACCESSIBILITY DIRECTIONS FAQS
            Filterable and searchable FAQ accordion + contextual bridge to
            Financial Planning, For Families, and Suites.
        ==================================================================== */}
        <section
          id="contact-faqs"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#F7F4ED]"
        >
          <div className="w-full space-y-10">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7 space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Practical Answers Before You Visit
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Contact, Visit &amp; Accessibility Directions FAQs.
                </h2>
              </div>
              <div className="lg:col-span-5">
                {/* Search Input */}
                <div className="relative">
                  <Search
                    className="w-4 h-4 text-[#3B2348]/60 absolute left-4 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    aria-label="Search contact and accessibility FAQs"
                    value={faqSearchQuery}
                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                    placeholder="Search phone, parking, wheelchair, medical privacy..."
                    className="w-full pl-11 pr-4 py-3 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-xs sm:text-sm text-[#29272B]"
                  />
                </div>
              </div>
            </div>

            {/* Category Filter Pills & Expand/Collapse Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D8C7A5]">
              <div className="flex flex-wrap items-center gap-2">
                {(
                  [
                    'All Questions',
                    'Scheduling & Visits',
                    'Directions & Accessibility',
                    'Contact & Phone Numbers',
                    'Privacy & Prototype Form',
                  ] as const
                ).map((cat) => {
                  const isActive = activeFaqCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveFaqCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'bg-[#FCFBF8] text-[#3B2348] border border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setOpenFaqIds(filteredFaqs.map((f) => f.id))}
                  className="font-semibold text-[#3B2348] hover:text-[#C98268] transition cursor-pointer"
                >
                  Expand All ({filteredFaqs.length})
                </button>
                <span aria-hidden="true" className="text-[#29272B]/30">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => setOpenFaqIds([])}
                  className="font-semibold text-[#29272B]/70 hover:text-[#3B2348] transition cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* FAQ Accordion List */}
            {filteredFaqs.length === 0 ? (
              <div className="p-8 rounded-3xl bg-[#FCFBF8] border border-[#D8C7A5] text-center space-y-3">
                <p className="font-serif text-xl text-[#3B2348] font-semibold">
                  No contact FAQs matched “{faqSearchQuery}”.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFaqSearchQuery('');
                    setActiveFaqCategory('All Questions');
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold cursor-pointer"
                >
                  Reset FAQ Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                {filteredFaqs.map((faq) => {
                  const isOpen = openFaqIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] overflow-hidden transition"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaqOpen(faq.id)}
                        className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#D8C7A5]/20 transition"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A65D43] block">
                            {faq.code} · {faq.category}
                          </span>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-[#3B2348] leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-[#3B2348] shrink-0 mt-1 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 border-t border-[#D8C7A5]/60 space-y-3 text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                          <p>{faq.answer}</p>
                          {faq.confirmationNote && (
                            <p className="p-3 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] text-xs text-[#A65D43] font-medium">
                              {faq.confirmationNote}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Contextual Planning Bridge */}
            <div className="pt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              <div className="rounded-3xl bg-[#FCFBF8] border border-[#D8C7A5] p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#5F7F49] font-semibold">
                    <span>Prepare for Your Tour</span>
                    <HeartHandshake className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3B2348]">
                    For Families &amp; Visit Questions Guide
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29272B]/80 leading-relaxed">
                    Compare Memory Care vs. short-term Respite Care and review our 8-question checklist before your visit.
                  </p>
                </div>
                <Link
                  href="/for-families"
                  className="inline-flex items-center justify-between px-4 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition"
                >
                  <span>Open For Families &amp; FAQs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-3xl bg-[#FCFBF8] border border-[#D8C7A5] p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#A65D43] font-semibold">
                    <span>Compare Monthly Inclusions</span>
                    <FileSpreadsheet className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3B2348]">
                    Financial Planning &amp; Paper Ledger
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29272B]/80 leading-relaxed">
                    Use our editable blank Paper-Ledger Worksheet to organize your current household costs before speaking with our team.
                  </p>
                </div>
                <Link
                  href="/financial-planning"
                  className="inline-flex items-center justify-between px-4 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition"
                >
                  <span>Open Financial Planning</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-3xl bg-[#FCFBF8] border border-[#D8C7A5] p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#3B2348] font-semibold">
                    <span>Preview Living Spaces</span>
                    <Sparkles className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#3B2348]">
                    Suites, Floor Plans &amp; Gallery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29272B]/80 leading-relaxed">
                    Explore Private Suites, Companion Units, and Jack &amp; Jill formats or browse our community photo gallery.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/suites-and-floor-plans"
                    className="flex-1 text-center px-3 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition whitespace-nowrap"
                  >
                    Suites &amp; Plans →
                  </Link>
                  <Link
                    href="/gallery"
                    className="flex-1 text-center px-3 py-3 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition whitespace-nowrap"
                  >
                    Gallery →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shared Architectural Footer (with hideVisitSection=true so #schedule-visit is not duplicated) */}
        <VisitAndFooterSection
          hideVisitSection={true}
          onNavigateToSection={(sectionId, presetCare) =>
            handleNavigateToSection(sectionId, presetCare)
          }
        />
      </main>
    </div>
  );
}
