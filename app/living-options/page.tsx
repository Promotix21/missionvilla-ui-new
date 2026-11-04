'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles,
  Info,
  Search,
  ChevronDown,
  BedDouble,
  Bath,
  HeartHandshake,
  Compass,
  Clock,
  Layers,
  MessageSquareHeart,
  HelpCircle,
  Building2,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  LIVING_OPTIONS_OVERVIEW_CARDS,
  LIVING_OPTIONS_COMPARISON_CATEGORIES,
  LIVING_OPTIONS_COMPARISON_ROWS,
  LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS,
  LIVING_OPTIONS_ROUTE_DESTINATIONS,
  LIVING_OPTIONS_FAQS,
  CARE_GUIDANCE_SCENARIOS,
  filterLivingOptionsComparisonRows,
  filterLivingOptionsAccommodations,
  filterLivingOptionsFaqs,
  type LivingOptionComparisonCategory,
  type LivingOptionAccommodationHighlight,
  type LivingOptionsFaqCategory,
  type CareGuidanceScenario,
  type VisitInquiryInput,
} from '@/lib/mission-villa-data';

export default function LivingOptionsOverviewPage() {
  const [fontScale, setFontScale] = useState<number>(1);

  // Shared inquiry form presets passed down to VisitAndFooterSection (#schedule-visit)
  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >(null);
  const [presetSuitePreference, setPresetSuitePreference] =
    useState<VisitInquiryInput['suitePreference']>('Private Suite');
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  // Section 2: Memory Care vs. Respite Care Distinction Studio state
  const [activeProgramSpotlight, setActiveProgramSpotlight] = useState<
    'both' | 'memory-care' | 'respite-care'
  >('both');
  const [activeComparisonCategory, setActiveComparisonCategory] =
    useState<LivingOptionComparisonCategory>('All Dimensions');
  const [onlyKeyDistinctions, setOnlyKeyDistinctions] = useState<boolean>(false);
  const [selectedScenarioId, setSelectedScenarioId] =
    useState<CareGuidanceScenario['id']>('dementia-support');

  // Section 3: Accommodation Highlights state
  const [programSuiteFilter, setProgramSuiteFilter] = useState<
    'All Programs' | 'Memory Care' | 'Respite Care'
  >('All Programs');
  const [selectedSuiteId, setSelectedSuiteId] = useState<
    LivingOptionAccommodationHighlight['id']
  >('private-suite');

  // Section 5: Living Options FAQs state
  const [activeFaqCategory, setActiveFaqCategory] =
    useState<LivingOptionsFaqCategory>('All Topics');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([
    'lo-faq-two-programs',
    'lo-faq-mc-vs-respite',
    'lo-faq-suite-formats',
  ]);

  const filteredComparisonRows = filterLivingOptionsComparisonRows(
    LIVING_OPTIONS_COMPARISON_ROWS,
    activeComparisonCategory,
    onlyKeyDistinctions
  );

  const activeScenario =
    CARE_GUIDANCE_SCENARIOS.find((s) => s.id === selectedScenarioId) ||
    CARE_GUIDANCE_SCENARIOS[0];

  const filteredAccommodations = filterLivingOptionsAccommodations(
    LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS,
    programSuiteFilter
  );

  const activeSuite =
    filteredAccommodations.find((s) => s.id === selectedSuiteId) ||
    filteredAccommodations[0] ||
    LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS[0];

  const filteredFaqs = filterLivingOptionsFaqs(
    LIVING_OPTIONS_FAQS,
    activeFaqCategory,
    faqSearchQuery
  );

  const handleNavigateToSection = (
    sectionId: string,
    presetCare?: 'Memory Care' | 'Respite Care',
    suitePref?: VisitInquiryInput['suitePreference'],
    customNote?: string
  ) => {
    if (presetCare) {
      setPresetCareOption(presetCare);
    }
    if (suitePref) {
      setPresetSuitePreference(suitePref);
    }
    if (typeof customNote === 'string' && customNote.trim().length > 0) {
      setPrefilledNotes(customNote);
    }
    if (typeof document !== 'undefined') {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="min-h-screen w-full bg-[#F7F4ED] text-[#29272B] selection:bg-[#3B2348] selection:text-[#F7F4ED]"
      style={{ zoom: fontScale }}
    >
      {/* Shared Utility Ribbon & Sticky Editorial Header */}
      <HeaderAndUtilityBar
        fontScale={fontScale}
        onChangeFontScale={setFontScale}
        onNavigateToSection={(sectionId, presetCare) =>
          handleNavigateToSection(sectionId, presetCare)
        }
      />

      <main className="w-full">
        {/* ===================================================================
            SECTION 1: ACCESSIBLE LIVING OPTIONS OVERVIEW HERO (DUAL-APERTURE MONOGRAPH)
        ==================================================================== */}
        <section
          aria-labelledby="living-options-hero-heading"
          className="w-full bg-[#F7F4ED] grid-line-b relative overflow-hidden pt-4 pb-10 lg:py-8 fluid-canvas"
        >
          {/* Breadcrumb & Focused Care Scope Strip */}
          <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#3B2348]/15 text-xs">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#29272B]/75">
              <Link href="/" className="hover:text-[#3B2348] transition font-medium">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#3B2348] font-semibold" aria-current="page">
                Living Options Overview
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#29272B]/80">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#3B2348]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5F7F49]" aria-hidden="true" />
                <span>CA RCFE License #{MISSION_VILLA_FACTS.licenseNumber}</span>
              </span>
              <span aria-hidden="true" className="text-[#3B2348]/30">
                ·
              </span>
              <span>995 East Market Street, Daly City, CA 94014</span>
            </div>
          </div>

          {/* Main 12-Column Hero Composition */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left 6 Columns: Editorial Monograph Narrative & Primary Conversion CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold">
                  <span>Page 11 · Living Options Monograph</span>
                  <span aria-hidden="true">·</span>
                  <span>Memory Care &amp; Respite Care</span>
                </div>

                <h1
                  id="living-options-hero-heading"
                  className="font-serif hero-display text-[#3B2348] font-semibold tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Two Focused Care Offerings, One Homelike Daly City Community.
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-[#29272B]/90 leading-relaxed max-w-2xl">
                  Rather than dividing our attention across large, impersonal apartment tiers, Mission Villa Senior Living focuses wholeheartedly on two interconnected care paths:{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    full-time Legacies™ Memory Care
                  </strong>{' '}
                  for older adults living with Alzheimer’s or dementia, and{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    short-term Respite Care stays
                  </strong>{' '}
                  that support both seniors and dedicated family caregivers.
                </p>
              </div>

              {/* Explicit Scope & Program Clarity Ledger */}
              <div className="herbarium-mount rounded-3xl p-4 sm:p-5 bg-[#FCFBF8] border border-[#D8C7A5] space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-[#D8C7A5]/70 pb-2">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                    Our Focused Care Commitment
                  </span>
                  <span className="text-xs text-[#A65D43] font-semibold">
                    Daly City, CA 94014
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  Mission Villa is a dedicated Memory Care and Respite Care community (we do not offer separate standalone Independent Living or Assisted Living programs). Whether your loved one joins us for an ongoing residential home or a temporary stay of a few days to several weeks, they share the same 24-hour staff support, private-bath suite options, and chef-prepared dining.
                </p>
              </div>

              {/* Primary & Secondary Action Bar */}
              <div className="pt-1">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="px-5 sm:px-6 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] font-semibold text-xs sm:text-sm hover:bg-[#C98268] transition-colors shadow-md cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Schedule a Visit in Daly City</span>
                    <span aria-hidden="true">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('care-distinction-studio')}
                    className="px-4 sm:px-5 py-3 rounded-full bg-[#FCFBF8] border border-[#3B2348]/30 text-[#3B2348] font-semibold text-xs sm:text-sm hover:border-[#3B2348] hover:bg-[#D8C7A5]/25 transition-colors cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Layers className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                    <span>Compare Memory Care vs. Respite ↓</span>
                  </button>

                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="px-4 sm:px-5 py-3 rounded-full border border-[#D8C7A5] bg-[#F7F4ED] text-[#3B2348] font-semibold text-xs sm:text-sm hover:border-[#3B2348] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                    <span>Call {MISSION_VILLA_FACTS.phone.formatted}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Dual-Aperture Architectural Diptych (Memory Care + Respite Care) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
              {LIVING_OPTIONS_OVERVIEW_CARDS.map((card) => {
                const isMemoryCare = card.id === 'memory-care';
                return (
                  <article
                    key={card.id}
                    className={`rounded-[28px] overflow-hidden border flex flex-col justify-between shadow-lg transition-all ${
                      isMemoryCare
                        ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348]'
                        : 'bg-[#FCFBF8] text-[#29272B] border-[#D8C7A5]'
                    }`}
                  >
                    {/* Arch/Cutout Visual Aperture */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-[#22122B]">
                      <img
                        src={card.placeholderImage.src}
                        alt={card.placeholderImage.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover mood-grade transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/35 to-transparent" />

                      {/* Top-Left Inverted-Radius Cutout Corner */}
                      <div className="cutout-tl-cream">
                        <span
                          className={`inline-block px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap ${
                            isMemoryCare
                              ? 'bg-[#3B2348] text-[#D8C7A5]'
                              : 'bg-[#8FAF78] text-[#22122B]'
                          }`}
                        >
                          {card.numberBadge}
                        </span>
                      </div>

                      <div className="absolute bottom-3.5 left-5 right-5 text-[#F7F4ED]">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#D8C7A5] font-medium block">
                          {card.programTag}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-[26px] font-semibold leading-tight mt-0.5">
                          {card.title}
                        </h2>
                      </div>
                    </div>

                    {/* Non-overlapping Illustrative Status Strip */}
                    <div
                      className={`px-5 py-1.5 text-[10px] font-mono uppercase tracking-wider border-b flex items-center justify-between ${
                        isMemoryCare
                          ? 'bg-[#22122B]/70 text-[#D8C7A5]/85 border-white/10'
                          : 'bg-[#F7F4ED] text-[#A65D43] border-[#D8C7A5]/60'
                      }`}
                    >
                      <span>{card.placeholderImage.status}</span>
                    </div>

                    {/* Diptych Card Summary & Direct Route Link */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <p
                          className={`font-serif italic text-sm sm:text-base leading-snug ${
                            isMemoryCare ? 'text-[#D8C7A5]' : 'text-[#3B2348]'
                          }`}
                        >
                          {card.signatureHeadline}
                        </p>
                        <p
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isMemoryCare ? 'text-[#F7F4ED]/85' : 'text-[#29272B]/85'
                          }`}
                        >
                          {card.coreDistinction}
                        </p>
                      </div>

                      <div className="pt-3.5 border-t border-current/15 flex flex-col gap-2">
                        <Link
                          href={card.routeHref}
                          className={`w-full py-2.5 px-4 rounded-full text-xs font-semibold inline-flex items-center justify-between transition-colors ${
                            isMemoryCare
                              ? 'bg-[#D8C7A5] text-[#3B2348] hover:bg-[#C98268] hover:text-white'
                              : 'bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268]'
                          }`}
                        >
                          <span>{card.routeLabel}</span>
                          <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            handleNavigateToSection(
                              'schedule-visit',
                              card.presetCareOption,
                              undefined,
                              card.presetInquiryNote
                            )
                          }
                          className={`w-full py-2 px-4 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                            isMemoryCare
                              ? 'border-[#D8C7A5]/40 text-[#D8C7A5] hover:bg-white/10'
                              : 'border-[#3B2348]/30 text-[#3B2348] hover:bg-[#D8C7A5]/30'
                          }`}
                        >
                          Inquire About {card.title} ↓
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Full-Width Section Index Bar Below Hero Split */}
          <div className="w-full mt-8 pt-6 border-t border-[#3B2348]/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                index: '01',
                label: 'Care Program Profiles',
                target: 'care-distinction-studio',
              },
              {
                index: '02',
                label: '6-Dimension Comparison Ledger',
                target: 'side-by-side-ledger',
              },
              {
                index: '03',
                label: 'Family Situation Reflection',
                target: 'family-situation-matcher',
              },
              {
                index: '04',
                label: 'Suite & Bathroom Highlights',
                target: 'accommodation-highlights',
              },
              {
                index: '05',
                label: 'Detailed Services & FAQs',
                target: 'living-options-faqs',
              },
            ].map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavigateToSection(item.target)}
                className="text-left p-3.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] hover:border-[#3B2348] transition group cursor-pointer flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A65D43] block">
                    Section {item.index}
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-semibold text-[#3B2348] group-hover:text-[#C98268] transition truncate block">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-[#3B2348]/60 group-hover:text-[#C98268] shrink-0"
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: MEMORY CARE VS. RESPITE CARE DISTINCTION STUDIO
        ==================================================================== */}
        <section
          id="care-distinction-studio"
          aria-labelledby="care-distinction-heading"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          {/* Section Header & Program Spotlight Switcher */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2.5">
              <span className="font-script script-display text-[#C98268] block">
                Understanding Our Two Care Paths
              </span>
              <h2
                id="care-distinction-heading"
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Memory Care vs. Respite Care: How They Differ &amp; What They Share
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:items-end justify-end space-y-2">
              <span className="text-xs uppercase tracking-[0.18em] text-[#29272B]/70 font-semibold">
                Filter Program View
              </span>
              <div
                role="group"
                aria-label="Filter care program cards"
                className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]"
              >
                {[
                  { id: 'both', label: 'Compare Both Side-by-Side' },
                  { id: 'memory-care', label: 'Focus: Memory Care' },
                  { id: 'respite-care', label: 'Focus: Respite Care' },
                ].map((tab) => {
                  const active = activeProgramSpotlight === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setActiveProgramSpotlight(
                          tab.id as 'both' | 'memory-care' | 'respite-care'
                        )
                      }
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                          : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Part A: Deep-Dive Program Monograph Cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {LIVING_OPTIONS_OVERVIEW_CARDS.filter(
              (card) =>
                activeProgramSpotlight === 'both' || card.id === activeProgramSpotlight
            ).map((card) => {
              const isSingleFocused = activeProgramSpotlight !== 'both';
              const colSpan = isSingleFocused ? 'lg:col-span-12' : 'lg:col-span-6';
              const isMemoryCare = card.id === 'memory-care';

              return (
                <article
                  key={card.id}
                  className={`${colSpan} rounded-[32px] bg-[#F7F4ED] border border-[#D8C7A5] p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-sm`}
                >
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8C7A5] pb-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A65D43]">
                        <span>{card.numberBadge}</span>
                        <span aria-hidden="true">·</span>
                        <span>{card.programTag}</span>
                      </div>
                      <Link
                        href={card.routeHref}
                        className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] inline-flex items-center gap-1 underline underline-offset-4"
                      >
                        <span>Dedicated Page</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3B2348]">
                        {card.title}
                      </h3>
                      <p className="font-serif italic text-base sm:text-lg text-[#A65D43]">
                        {card.signatureHeadline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                      {card.editorialLead}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      {/* Who This Supports */}
                      <div className="p-5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5]/80 space-y-3">
                        <h4 className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                          When Families Choose {card.title}
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#29272B]/90">
                          {card.idealForList.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check
                                className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Core Program Pillars */}
                      <div className="p-5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5]/80 space-y-3">
                        <h4 className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold">
                          Core Inclusions &amp; Support
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#29272B]/90">
                          {card.includedPillars.map((pillar) => (
                            <li key={pillar} className="flex items-start gap-2">
                              <Check
                                className="w-4 h-4 text-[#3B2348] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{pillar}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Suite Note & Action Bar */}
                  <div className="pt-6 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-[#29272B]/80">
                      <strong className="text-[#3B2348]">Accommodations:</strong>{' '}
                      {card.suiteSummary}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={card.routeHref}
                        className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap ${
                          isMemoryCare
                            ? 'bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268]'
                            : 'bg-[#C98268] text-white hover:bg-[#3B2348]'
                        }`}
                      >
                        <span>{card.routeLabel}</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          handleNavigateToSection(
                            'schedule-visit',
                            card.presetCareOption,
                            undefined,
                            card.presetInquiryNote
                          )
                        }
                        className="px-4 py-3 rounded-full border border-[#3B2348]/35 text-[#3B2348] text-xs sm:text-sm font-semibold hover:bg-[#3B2348] hover:text-[#F7F4ED] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Request {card.title} Info ↓
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Part B: Interactive 6-Dimension Side-by-Side Comparison Ledger */}
          <div
            id="side-by-side-ledger"
            className="w-full rounded-[32px] bg-[#22122B] text-[#F7F4ED] p-6 sm:p-10 lg:p-12 border border-[#D8C7A5]/25 space-y-8 mb-20"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/15 pb-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8FAF78] font-semibold block">
                  Side-by-Side Care Ledger · 6 Dimensions
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F7F4ED]">
                  Comparing Memory Care &amp; Respite Care Across Daily Life
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 max-w-2xl">
                  Filter by dimension below or toggle to highlight only the primary differences between ongoing Memory Care and short-term Respite Care stays.
                </p>
              </div>

              {/* Toggle Key Distinctions Only */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  aria-pressed={onlyKeyDistinctions}
                  onClick={() => setOnlyKeyDistinctions((prev) => !prev)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold border transition cursor-pointer whitespace-nowrap ${
                    onlyKeyDistinctions
                      ? 'bg-[#D8C7A5] text-[#22122B] border-[#D8C7A5]'
                      : 'bg-white/10 text-[#F7F4ED] border-white/20 hover:border-[#D8C7A5]'
                  }`}
                >
                  {onlyKeyDistinctions
                    ? 'Showing Key Distinctions Only (4)'
                    : 'Highlight Key Distinctions Only'}
                </button>
              </div>
            </div>

            {/* Category Filter Bar */}
            <div
              role="group"
              aria-label="Filter comparison dimensions"
              className="flex flex-wrap items-center gap-2"
            >
              {LIVING_OPTIONS_COMPARISON_CATEGORIES.map((category) => {
                const active = activeComparisonCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveComparisonCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#C98268] text-white shadow-sm'
                        : 'bg-white/10 text-[#F7F4ED]/85 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {filteredComparisonRows.map((row) => (
                <div
                  key={row.id}
                  className="rounded-2xl bg-[#3B2348]/75 border border-white/15 p-5 sm:p-7 space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-[#D8C7A5] font-semibold">
                        {row.code}
                      </span>
                      <span aria-hidden="true" className="text-white/30">
                        ·
                      </span>
                      <span className="text-xs uppercase tracking-wider text-[#8FAF78] font-semibold">
                        {row.category}
                      </span>
                    </div>
                    <span className="text-xs text-[#D8C7A5]/90 font-medium">
                      {row.isKeyDistinction
                        ? 'Key Program Distinction'
                        : 'Shared Community Standard'}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4ED]">
                    {row.dimensionTitle}
                  </h4>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* Column 1: Memory Care */}
                    <div className="lg:col-span-4 p-4 rounded-xl bg-[#22122B]/80 border border-[#D8C7A5]/25 space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider text-[#D8C7A5] font-semibold block">
                        01 · Memory Care (Legacies™)
                      </span>
                      <p className="text-xs sm:text-sm text-[#F7F4ED]/90 leading-relaxed">
                        {row.memoryCareDetail}
                      </p>
                    </div>

                    {/* Column 2: Respite Care */}
                    <div className="lg:col-span-4 p-4 rounded-xl bg-[#22122B]/80 border border-[#C98268]/35 space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider text-[#C98268] font-semibold block">
                        02 · Short-Term Respite Care
                      </span>
                      <p className="text-xs sm:text-sm text-[#F7F4ED]/90 leading-relaxed">
                        {row.respiteCareDetail}
                      </p>
                    </div>

                    {/* Column 3: Shared Mission Villa Foundation */}
                    <div className="lg:col-span-4 p-4 rounded-xl bg-white/5 border border-[#8FAF78]/30 space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider text-[#8FAF78] font-semibold block">
                        Shared Daly City Foundation
                      </span>
                      <p className="text-xs sm:text-sm text-[#F7F4ED]/85 leading-relaxed">
                        {row.sharedFoundation}
                      </p>
                    </div>
                  </div>

                  {row.confirmationNote && (
                    <div className="p-3.5 rounded-xl bg-black/30 border border-[#D8C7A5]/30 text-xs text-[#D8C7A5] flex items-start gap-2">
                      <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#C98268]" aria-hidden="true" />
                      <span>{row.confirmationNote}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Part C: Non-Clinical Family Care Situation Reflection Guide */}
          <div
            id="family-situation-matcher"
            className="w-full rounded-[32px] bg-[#D8C7A5]/30 border border-[#D8C7A5] p-6 sm:p-10 lg:p-12"
          >
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold">
                    <MessageSquareHeart className="w-4 h-4" aria-hidden="true" />
                    <span>Non-Clinical Family Reflection</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2348] font-semibold">
                    Which Situation Sounds Closest to Your Family’s Conversation?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29272B]/80 leading-relaxed">
                    Select a scenario below to see how Mission Villa’s Memory Care and Respite Care options align with your family’s goals—plus questions to bring on your visit.
                  </p>
                </div>

                <div className="space-y-3" role="tablist" aria-label="Family situation selector">
                  {CARE_GUIDANCE_SCENARIOS.map((scenario) => {
                    const isSelected = scenario.id === selectedScenarioId;
                    return (
                      <button
                        key={scenario.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedScenarioId(scenario.id)}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all cursor-pointer space-y-1.5 ${
                          isSelected
                            ? 'border-[#3B2348] bg-[#3B2348] text-[#F7F4ED] shadow-md'
                            : 'border-[#D8C7A5] bg-[#FCFBF8] text-[#3B2348] hover:border-[#3B2348]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold">
                          <span className={isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'}>
                            {scenario.kicker}
                          </span>
                          <span className={isSelected ? 'text-[#8FAF78]' : 'text-[#3B2348]/70'}>
                            {scenario.label}
                          </span>
                        </div>
                        <p className="font-serif text-sm sm:text-base italic leading-snug">
                          {scenario.familyQuestion}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-7 herbarium-mount rounded-3xl p-6 sm:p-10 bg-[#FCFBF8] flex flex-col justify-between space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#D8C7A5] pb-5">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                      Relevant Living Option
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348] mt-1">
                      {activeScenario.reassuranceTitle}
                    </h4>
                  </div>
                  <span className="px-4 py-2 rounded-xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold whitespace-nowrap">
                    {activeScenario.relevantProgram}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                  {activeScenario.reassuranceBody}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
                  <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/80 space-y-3">
                    <h5 className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                      What You Can Expect
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#29272B]/90">
                      {activeScenario.whatToExpect.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <Check
                            className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/80 space-y-3">
                    <h5 className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Questions for Your Daly City Tour</span>
                    </h5>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#29272B]/90">
                      {activeScenario.questionsForYourVisit.map((q) => (
                        <li key={q} className="font-serif italic text-[#3B2348]">
                          “{q}”
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/for-families"
                    className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline underline-offset-4"
                  >
                    Explore the full Family Decision Guide on /for-families →
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigateToSection(
                        'schedule-visit',
                        activeScenario.recommendedProgramId === 'respite-care'
                          ? 'Respite Care'
                          : 'Memory Care',
                        undefined,
                        `Family Reflection (${activeScenario.label}): Would like to discuss ${activeScenario.relevantProgram}.`
                      )
                    }
                    className="px-6 py-3 rounded-full bg-[#C98268] text-white text-xs sm:text-sm font-semibold hover:bg-[#3B2348] transition-colors cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>Discuss This Scenario With Our Team ↓</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: ACCOMMODATION HIGHLIGHTS (PRIVATE, COMPANION UNIT, JACK & JILL)
        ==================================================================== */}
        <section
          id="accommodation-highlights"
          aria-labelledby="accommodation-highlights-heading"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F7F4ED]"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2.5">
              <span className="font-script script-display text-[#C98268] block">
                Residential Comfort &amp; Privacy
              </span>
              <h2
                id="accommodation-highlights-heading"
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Accommodation Highlights: Private Suites, Companion Units &amp; Jack &amp; Jill Formats
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/85 max-w-2xl leading-relaxed">
                Every suite at Mission Villa—whether private or shared—includes a private bathroom, individual comfort controls, housekeeping, laundry, and emergency alert features.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:items-end justify-end space-y-2">
              <span className="text-xs uppercase tracking-[0.18em] text-[#29272B]/70 font-semibold">
                Filter Suites by Care Program
              </span>
              <div
                role="group"
                aria-label="Filter suite formats by care program"
                className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5]"
              >
                {(['All Programs', 'Memory Care', 'Respite Care'] as const).map((filterOpt) => {
                  const active = programSuiteFilter === filterOpt;
                  return (
                    <button
                      key={filterOpt}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setProgramSuiteFilter(filterOpt);
                        const nextList = filterLivingOptionsAccommodations(
                          LIVING_OPTIONS_ACCOMMODATION_HIGHLIGHTS,
                          filterOpt
                        );
                        if (nextList.length > 0 && !nextList.some((i) => i.id === selectedSuiteId)) {
                          setSelectedSuiteId(nextList[0].id);
                        }
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                      }`}
                    >
                      {filterOpt}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3-Format Interactive Selector Tabs + Featured Accommodation Stage */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 5 Columns: Format Selector Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3" role="tablist" aria-label="Suite format selector">
                {filteredAccommodations.map((suite) => {
                  const isSelected = suite.id === activeSuite.id;
                  return (
                    <button
                      key={suite.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedSuiteId(suite.id)}
                      className={`w-full text-left p-5 sm:p-6 rounded-3xl border-2 transition-all cursor-pointer space-y-2 ${
                        isSelected
                          ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-lg'
                          : 'bg-[#FCFBF8] text-[#29272B] border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs font-semibold">
                        <span
                          className={`font-mono uppercase tracking-wider ${
                            isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                          }`}
                        >
                          {suite.code}
                        </span>
                        <span
                          className={
                            isSelected ? 'text-[#8FAF78]' : 'text-[#3B2348]/75'
                          }
                        >
                          {suite.applicablePrograms.join(' & ')}
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-xl sm:text-2xl font-semibold ${
                          isSelected ? 'text-[#F7F4ED]' : 'text-[#3B2348]'
                        }`}
                      >
                        {suite.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isSelected ? 'text-[#F7F4ED]/85' : 'text-[#29272B]/80'
                        }`}
                      >
                        {suite.bathroomDetail}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Honest Floor-Plan Verification Notice */}
              <div className="p-5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#3B2348]">
                  <span>Architectural Floor Plans &amp; Dimensions</span>
                  <span className="font-mono text-[11px] text-[#A65D43]">
                    Awaiting official floor plan
                  </span>
                </div>
                <p className="text-xs text-[#29272B]/80 leading-relaxed">
                  In keeping with our commitment to factual accuracy, we do not publish speculative architectural CAD drawings or unverified square-footage figures. Visit our dedicated{' '}
                  <Link
                    href="/suites-and-floor-plans"
                    className="text-[#3B2348] font-semibold underline underline-offset-2 hover:text-[#C98268]"
                  >
                    Suites &amp; Floor Plans page
                  </Link>{' '}
                  or tour 995 East Market Street in person to compare layouts.
                </p>
              </div>
            </div>

            {/* Right 7 Columns: Active Suite Format Showcase */}
            <div className="lg:col-span-7 rounded-[32px] bg-[#FCFBF8] border border-[#D8C7A5] overflow-hidden flex flex-col justify-between shadow-md">
              <div className="relative h-64 sm:h-80 bg-[#22122B] overflow-hidden">
                <img
                  src={activeSuite.placeholderImage.src}
                  alt={activeSuite.placeholderImage.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mood-grade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/30 to-transparent" />

                <div className="cutout-tl-cream">
                  <span className="inline-block px-4 py-2 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                    {activeSuite.code} · {activeSuite.id.replace(/-/g, ' ')}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-sm text-[#D8C7A5] text-[10px] font-mono uppercase tracking-wider">
                    {activeSuite.placeholderImage.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-[#F7F4ED]">
                  <span className="text-xs uppercase tracking-[0.16em] text-[#D8C7A5] font-medium block">
                    {activeSuite.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-0.5">
                    {activeSuite.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-9 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                    {activeSuite.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/80 space-y-1.5">
                      <span className="text-xs uppercase tracking-wider text-[#A65D43] font-bold block">
                        Who This Format Suits
                      </span>
                      <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                        {activeSuite.whoItSuitsBest}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/80 space-y-1.5">
                      <span className="text-xs uppercase tracking-wider text-[#3B2348] font-bold block">
                        Floor-Plan Status
                      </span>
                      <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                        {activeSuite.floorPlanNotice}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                      Suite Features &amp; Everyday Inclusions (Confirm Per-Unit Applicability)
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeSuite.suiteFeatures.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#29272B]/90"
                        >
                          <Check
                            className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/suites-and-floor-plans"
                      className="px-5 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      <span>Explore Suites &amp; Floor Plans</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        handleNavigateToSection(
                          'schedule-visit',
                          activeSuite.applicablePrograms.includes('Respite Care') &&
                            programSuiteFilter === 'Respite Care'
                            ? 'Respite Care'
                            : 'Memory Care',
                          activeSuite.inquirySuiteValue,
                          `Accommodation Interest: Would like to see ${activeSuite.title} during a visit.`
                        )
                      }
                      className="px-5 py-3 rounded-full border border-[#3B2348]/35 text-[#3B2348] text-xs sm:text-sm font-semibold hover:bg-[#3B2348] hover:text-[#F7F4ED] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Ask About {activeSuite.title} ↓
                    </button>
                  </div>

                  <Link
                    href="/gallery"
                    className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline underline-offset-4"
                  >
                    View Photo Gallery &amp; Virtual Tour →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: DETAILED SERVICES, SUITES & PLANNING ROUTE DIRECTORY
        ==================================================================== */}
        <section
          aria-labelledby="living-options-directory-heading"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#3B2348] text-[#F7F4ED]"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2.5">
              <span className="font-script script-display text-[#D8C7A5] block">
                Continue Exploring Mission Villa
              </span>
              <h2
                id="living-options-directory-heading"
                className="font-serif section-display text-[#F7F4ED] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Direct Pathways to Detailed Services, Suites, Financial Planning &amp; Contact
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-8">
              <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                Every living option at Mission Villa connects seamlessly with our 24-hour staff support, chef-prepared dining, financial planning tools, and family visit guides.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIVING_OPTIONS_ROUTE_DESTINATIONS.map((dest) => (
              <article
                key={dest.id}
                className="rounded-3xl bg-[#22122B] border border-[#D8C7A5]/25 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#D8C7A5] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                    <span className="font-mono text-[#D8C7A5] font-semibold">
                      {dest.index} · {dest.kicker}
                    </span>
                    <span className="text-[#8FAF78] font-mono text-[11px]">
                      {dest.href}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#F7F4ED]">
                    {dest.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed">
                    {dest.description}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {dest.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-[#D8C7A5]/90 flex items-center gap-2"
                      >
                        <span aria-hidden="true" className="text-[#8FAF78]">
                          ·
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={dest.href}
                    className="w-full py-3 px-5 rounded-full bg-[#F7F4ED] text-[#3B2348] font-semibold text-xs sm:text-sm hover:bg-[#C98268] hover:text-white transition-colors inline-flex items-center justify-between"
                  >
                    <span>{dest.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: LIVING OPTIONS OVERVIEW FAQS
        ==================================================================== */}
        <section
          id="living-options-faqs"
          aria-labelledby="living-options-faqs-heading"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 4 Columns: FAQ Controls & Direct Team Prompt */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2.5">
                <span className="font-script script-display text-[#C98268] block">
                  Common Family Questions
                </span>
                <h2
                  id="living-options-faqs-heading"
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Living Options Overview FAQs
                </h2>
                <p className="text-sm text-[#29272B]/80 leading-relaxed">
                  Clear, source-grounded answers about how Memory Care and Respite Care work at Mission Villa in Daly City.
                </p>
              </div>

              {/* Search Input */}
              <div className="space-y-2">
                <label
                  htmlFor="living-options-faq-search"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348]"
                >
                  Search Living Options Questions
                </label>
                <div className="relative">
                  <Search
                    className="w-4 h-4 text-[#3B2348]/60 absolute left-3.5 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  />
                  <input
                    id="living-options-faq-search"
                    type="search"
                    value={faqSearchQuery}
                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                    placeholder="e.g., Respite, Jack & Jill, bathroom..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                  />
                </div>
              </div>

              {/* Category Filter Buttons */}
              <div className="space-y-2">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348]">
                  Filter by Topic
                </span>
                <div
                  role="group"
                  aria-label="Filter Living Options FAQs by category"
                  className="flex flex-wrap gap-2"
                >
                  {(
                    [
                      'All Topics',
                      'Care Offerings',
                      'Suites & Bathrooms',
                      'Transitions & Stays',
                      'Pricing & Visits',
                    ] as const
                  ).map((cat) => {
                    const active = activeFaqCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setActiveFaqCategory(cat)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                          active
                            ? 'bg-[#3B2348] text-[#F7F4ED]'
                            : 'bg-[#F7F4ED] text-[#3B2348] border border-[#D8C7A5] hover:border-[#3B2348]'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Contact Callout */}
              <div className="p-6 rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-3">
                <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                  Talk With Us Directly
                </span>
                <p className="font-serif text-lg font-semibold text-[#3B2348]">
                  Have a question specific to your loved one’s routines?
                </p>
                <p className="text-xs text-[#29272B]/80 leading-relaxed">
                  Call our Daly City team at{' '}
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="font-semibold text-[#3B2348] underline"
                  >
                    {MISSION_VILLA_FACTS.phone.formatted}
                  </a>{' '}
                  or visit our full{' '}
                  <Link
                    href="/contact"
                    className="font-semibold text-[#3B2348] underline"
                  >
                    Contact &amp; Directions page
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Right 8 Columns: Accordion List */}
            <div className="lg:col-span-8 space-y-4">
              {filteredFaqs.length === 0 ? (
                <div className="p-8 rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] text-center space-y-3">
                  <p className="font-serif text-xl text-[#3B2348] font-semibold">
                    No matching questions found
                  </p>
                  <p className="text-xs sm:text-sm text-[#29272B]/75">
                    Try clearing your search filter or browse all 6 Living Options questions.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFaqCategory('All Topics');
                      setFaqSearchQuery('');
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold cursor-pointer"
                  >
                    Reset FAQ Filters
                  </button>
                </div>
              ) : (
                filteredFaqs.map((faq) => {
                  const isOpen = openFaqIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#D8C7A5]/20 transition"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-[#A65D43] font-semibold">
                            <span className="font-mono">{faq.code}</span>
                            <span aria-hidden="true">·</span>
                            <span>{faq.category}</span>
                          </div>
                          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#3B2348]">
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
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#D8C7A5]/60 space-y-4">
                          <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                            {faq.answer}
                          </p>

                          {faq.confirmationNote && (
                            <div className="p-3.5 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] text-xs text-[#A65D43] flex items-start gap-2">
                              <Info className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                              <span>{faq.confirmationNote}</span>
                            </div>
                          )}

                          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                            <Link
                              href={faq.relatedHref}
                              className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] inline-flex items-center gap-1 underline underline-offset-4"
                            >
                              <span>{faq.relatedLabel}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </Link>

                            <button
                              type="button"
                              onClick={() =>
                                handleNavigateToSection(
                                  'schedule-visit',
                                  undefined,
                                  undefined,
                                  `Question from Living Options Overview (${faq.code}): ${faq.question}`
                                )
                              }
                              className="text-xs font-semibold text-[#A65D43] hover:text-[#3B2348] cursor-pointer"
                            >
                              Ask Our Team About This ↓
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: SCHEDULE A VISIT / REQUEST PRICING & SHARED FOOTER
        ==================================================================== */}
        <VisitAndFooterSection
          presetCareOption={presetCareOption}
          presetSuitePreference={presetSuitePreference}
          prefilledNotes={prefilledNotes}
          onNavigateToSection={(sectionId, presetCare) =>
            handleNavigateToSection(sectionId, presetCare)
          }
        />
      </main>
    </div>
  );
}
