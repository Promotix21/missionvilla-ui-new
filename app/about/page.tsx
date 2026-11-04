'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  MapPin,
  ShieldCheck,
  Heart,
  Compass,
  Sparkles,
  Users,
  Check,
  ArrowUpRight,
  ChevronRight,
  Info,
  Building2,
  Trees,
  MessageSquareHeart,
  PawPrint,
  Clock,
  BookOpen,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  ABOUT_PHILOSOPHY_CHAPTERS,
  DALY_CITY_GEOGRAPHY_LANDMARKS,
  ABOUT_CORE_VALUES,
  ABOUT_TEAM_ROLES_OVERVIEW,
  ABOUT_PET_POLICY_NOTE,
  filterGeographyLandmarks,
  type AboutPhilosophyChapter,
  type GeographyCategory,
  type DalyCityGeographyLandmark,
  type VisitInquiryInput,
} from '@/lib/mission-villa-data';

const GEOGRAPHY_CATEGORIES: GeographyCategory[] = [
  'All Landmarks',
  'Natural Surroundings',
  'Family Access',
  'Peninsula Amenities',
  'Scenic Outings',
];

export default function AboutUsPage() {
  const [fontScale, setFontScale] = useState<number>(1);
  const [activePhilosophyId, setActivePhilosophyId] = useState<
    AboutPhilosophyChapter['id']
  >(ABOUT_PHILOSOPHY_CHAPTERS[0].id);
  const [activeGeoCategory, setActiveGeoCategory] =
    useState<GeographyCategory>('All Landmarks');
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<string>(
    DALY_CITY_GEOGRAPHY_LANDMARKS[0].id
  );
  const [selectedTeamRoleId, setSelectedTeamRoleId] = useState<string>(
    ABOUT_TEAM_ROLES_OVERVIEW[0].id
  );

  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >(null);
  const [presetSuitePreference, setPresetSuitePreference] = useState<
    VisitInquiryInput['suitePreference'] | undefined
  >(undefined);
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  const activePhilosophyChapter: AboutPhilosophyChapter =
    ABOUT_PHILOSOPHY_CHAPTERS.find((c) => c.id === activePhilosophyId) ||
    ABOUT_PHILOSOPHY_CHAPTERS[0];

  const filteredLandmarks = filterGeographyLandmarks(
    DALY_CITY_GEOGRAPHY_LANDMARKS,
    activeGeoCategory
  );

  const activeLandmark: DalyCityGeographyLandmark =
    filteredLandmarks.find((l) => l.id === selectedLandmarkId) ||
    filteredLandmarks[0] ||
    DALY_CITY_GEOGRAPHY_LANDMARKS[0];

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
    if (customNote) {
      setPrefilledNotes(customNote);
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectGeoCategory = (category: GeographyCategory) => {
    setActiveGeoCategory(category);
    const matching = filterGeographyLandmarks(
      DALY_CITY_GEOGRAPHY_LANDMARKS,
      category
    );
    if (matching.length > 0) {
      setSelectedLandmarkId(matching[0].id);
    }
  };

  return (
    <div
      style={{ zoom: fontScale }}
      className="min-h-screen w-full bg-[#F7F4ED] text-[#29272B] flex flex-col selection:bg-[#3B2348] selection:text-[#F7F4ED]"
    >
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
            SECTION 1: MISSION-LED HERO — PORTRAIT-LED EDITORIAL & TRUST STAGE
            Distinct visual composition for Page 07 (/about):
            Asymmetric 12-column first-screen monograph pairing Mission Villa’s
            founding promise of dignity & personalized Memory Care with an
            arched portrait-led study and San Bruno Mountain / Daly City anchor.
        ==================================================================== */}
        <section
          id="about-hero"
          className="w-full min-h-[calc(100svh-104px)] py-3 lg:py-5 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture flex flex-col justify-between relative overflow-hidden"
        >
          {/* Top Breadcrumb & Verified Community Identity Bar */}
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
                About Us
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] text-[#29272B]/75">
              <span className="font-semibold uppercase tracking-[0.18em] text-[#3B2348]">
                Page 07 · Philosophy, Location &amp; Community Trust
              </span>
              <span className="hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="hidden sm:inline">
                CA License #{MISSION_VILLA_FACTS.licenseNumber}
              </span>
            </div>
          </div>

          {/* Center 12-Column Mission & Portrait Composition */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 items-stretch my-auto py-3">
            {/* Left 6 Columns: Mission Statement, Editorial Lead, Verified Pillars & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <span className="font-script script-display text-[#C98268] block">
                  {MISSION_VILLA_FACTS.tagline}
                </span>

                <h1
                  className="font-serif text-[clamp(1.95rem,3.25vw,3.3rem)] leading-[1.06] tracking-[-0.02em] text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Compassionate Memory Care Rooted in Dignity, Respect &amp;
                  Neighborhood Trust.
                </h1>

                <p className="text-sm sm:text-[15px] text-[#29272B]/85 leading-relaxed">
                  Located at{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    995 East Market Street in Daly City
                  </strong>{' '}
                  near the peaceful slopes of{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    San Bruno Mountain
                  </strong>
                  , Mission Villa Senior Living is an intimate residential
                  community dedicated to personalized{' '}
                  <Link
                    href="/memory-care"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Legacies™ Memory Care
                  </Link>{' '}
                  and short-term{' '}
                  <Link
                    href="/respite-care"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Respite Care
                  </Link>
                  . Every day, we honor the individual behind each life story
                  while supporting the families who love them.
                </p>
              </div>

              {/* Unboxed Editorial Trust Ledger (3 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-b border-[#3B2348]/15 py-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                    01 · Our Focus
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block">
                    Memory &amp; Respite Care
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    Personalized Legacies™ support &amp; short-term stays
                  </span>
                </div>

                <div className="space-y-0.5 sm:border-l sm:border-[#3B2348]/15 sm:pl-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F7F49] font-semibold block">
                    02 · Our Setting
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block">
                    Daly City, CA 94014
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    Near San Bruno Mountain &amp; Peninsula amenities
                  </span>
                </div>

                <div className="space-y-0.5 sm:border-l sm:border-[#3B2348]/15 sm:pl-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                    03 · Licensed Stewardship
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block tabular-nums">
                    RCFE #{MISSION_VILLA_FACTS.licenseNumber}
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    24-hour staff presence &amp; family partnership
                  </span>
                </div>
              </div>

              {/* Jump Anchors + Primary Conversion CTAs */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#29272B]/80">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#3B2348] font-semibold mr-1">
                    On This Page:
                  </span>
                  {[
                    { label: 'Care Philosophy', id: 'care-philosophy-narrative' },
                    { label: 'Daly City & San Bruno Mtn', id: 'daly-city-geography' },
                    { label: 'Values & Activities', id: 'values-and-activities' },
                    { label: 'Care Team & Pet Policy', id: 'team-and-policies' },
                  ].map((item, idx) => (
                    <React.Fragment key={item.id}>
                      {idx > 0 && <span aria-hidden="true">·</span>}
                      <button
                        type="button"
                        onClick={() => handleNavigateToSection(item.id)}
                        className="font-medium text-[#3B2348] hover:text-[#C98268] underline decoration-[#D8C7A5] underline-offset-4 transition cursor-pointer whitespace-nowrap"
                      >
                        {item.label}
                      </button>
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigateToSection(
                        'schedule-visit',
                        'Memory Care',
                        undefined,
                        'Would like to schedule a personal visit to Mission Villa at 995 East Market Street and meet the care team.'
                      )
                    }
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Schedule a Visit in Daly City</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigateToSection('care-philosophy-narrative')
                    }
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#FCFBF8] text-[#3B2348] border border-[#3B2348]/25 text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                  >
                    <BookOpen
                      className="w-4 h-4 text-[#C98268] shrink-0"
                      aria-hidden="true"
                    />
                    <span>Read Our Care Philosophy</span>
                  </button>

                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-semibold text-[#3B2348] hover:text-[#C98268] transition whitespace-nowrap"
                  >
                    <Phone
                      className="w-3.5 h-3.5 text-[#C98268]"
                      aria-hidden="true"
                    />
                    <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Warm Portrait-Led Botanical Arch + Local Geography Inset */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
              {/* Primary Arched Portrait-Led Study (7 of 12 right cols) */}
              <div className="sm:col-span-7 relative rounded-t-[140px] rounded-b-[28px] overflow-hidden border border-[#D8C7A5] bg-[#22122B] min-h-[290px] lg:min-h-[370px] flex flex-col justify-between p-5 shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Illustrative placeholder: Warm, sunlit residential living space honoring a senior resident’s personal story and comfort"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/35 to-black/15" />

                <div className="relative z-10 flex items-center justify-center pt-5 px-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold bg-[#22122B]/85 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/15">
                    Person-Centered Philosophy
                  </span>
                </div>

                <div className="relative z-10 space-y-1.5 pt-16">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FAF78] font-semibold block">
                    Dignity · Privacy · Belonging
                  </span>
                  <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#F7F4ED] leading-snug">
                    Known by Name, Life Story &amp; Everyday Comforts
                  </h2>
                  <p className="text-xs text-[#F7F4ED]/85 leading-relaxed">
                    Our 24-hour staff partners with families to honor each
                    resident’s routines, cherished memories, and personal pace.
                  </p>
                  <p className="text-[10px] text-[#D8C7A5]/75 pt-1">
                    ILLUSTRATIVE — REPLACE BEFORE LAUNCH
                  </p>
                </div>
              </div>

              {/* Right Column Stack: Geography Card + Herbarium Promise Card (5 of 12 right cols) */}
              <div className="sm:col-span-5 flex flex-col justify-between gap-4">
                {/* Top Card: Daly City & San Bruno Mountain Context */}
                <div className="flex-1 relative rounded-[24px] overflow-hidden border border-[#D8C7A5] bg-[#22122B] min-h-[175px] p-4 flex flex-col justify-between">
                  <img
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80"
                    alt="Illustrative placeholder: Sunlit California garden greenery near San Bruno Mountain in Daly City"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/50 to-transparent" />

                  <div className="relative z-10 flex items-center justify-between text-[10px] text-[#D8C7A5] font-semibold uppercase tracking-wider">
                    <span>Local Roots</span>
                    <MapPin className="w-3.5 h-3.5 text-[#8FAF78]" aria-hidden="true" />
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h3 className="font-serif text-sm sm:text-base font-semibold text-[#F7F4ED] leading-snug">
                      Near San Bruno Mountain
                    </h3>
                    <p className="text-[11px] text-[#F7F4ED]/80 leading-snug">
                      995 East Market Street in Daly City—minutes from San
                      Francisco &amp; Peninsula neighborhoods.
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        handleNavigateToSection('daly-city-geography')
                      }
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D8C7A5] hover:text-white pt-1 cursor-pointer"
                    >
                      <span>Explore Location Story</span>
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Bottom Card: Herbarium Family Reassurance */}
                <div className="herbarium-mount rounded-[24px] bg-[#FCFBF8] border border-[#D8C7A5] p-4 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-semibold">
                    <span>Family Partnership</span>
                    <Heart className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                  </div>
                  <p className="font-serif italic text-xs sm:text-sm text-[#3B2348] leading-relaxed">
                    “We welcome spouses, adult children, and grandchildren as
                    partners in daily life—so every visit feels like coming
                    home.”
                  </p>
                  <div className="pt-1 border-t border-[#D8C7A5]/60 flex items-center justify-between text-[10px] text-[#29272B]/70">
                    <span>Memory &amp; Respite Care</span>
                    <span>Daly City, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom First-Screen Transparency & Quick Fact Strip */}
          <div className="w-full pt-2 border-t border-[#3B2348]/15 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#29272B]/75">
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-[#C98268] shrink-0" aria-hidden="true" />
              <span>
                <strong>Prototype Visual Note:</strong> Photography on this page
                is marked{' '}
                <code className="text-[#3B2348] font-semibold">
                  ILLUSTRATIVE — REPLACE BEFORE LAUNCH
                </code>{' '}
                pending official community &amp; team portraits.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/memory-care"
                className="font-semibold text-[#3B2348] hover:text-[#C98268] transition"
              >
                Legacies™ Memory Care →
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/respite-care"
                className="font-semibold text-[#3B2348] hover:text-[#C98268] transition"
              >
                Respite Care →
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: CARE PHILOSOPHY EDITORIAL NARRATIVE
            Interactive 4-Chapter Monograph on Person-First Dignity, Legacies™,
            Family Reassurance & Homelike Residential Scale
        ==================================================================== */}
        <section
          id="care-philosophy-narrative"
          className="w-full py-16 lg:py-24 fluid-canvas bg-[#FCFBF8] grid-line-b"
        >
          <div className="w-full space-y-10">
            {/* Section Header */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#D8C7A5]">
              <div className="lg:col-span-7 space-y-2.5">
                <span className="font-script script-display text-[#C98268] block">
                  What Guides Every Day
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Our Care Philosophy: Person-Centered Support Built on
                  Relationship.
                </h2>
              </div>
              <div className="lg:col-span-5 text-sm sm:text-[15px] text-[#29272B]/80 leading-relaxed">
                <p>
                  At Mission Villa, Memory Care and Respite Care are never
                  reduced to impersonal checklists. Select any of the four
                  chapters below to explore how our philosophy shapes daily life
                  for residents and families in Daly City.
                </p>
              </div>
            </div>

            {/* Interactive 4-Chapter Selector Tabs */}
            <div
              role="tablist"
              aria-label="Mission Villa Care Philosophy Chapters"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {ABOUT_PHILOSOPHY_CHAPTERS.map((chapter) => {
                const isSelected = chapter.id === activePhilosophyChapter.id;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActivePhilosophyId(chapter.id)}
                    className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-lg'
                        : 'bg-[#F7F4ED] text-[#29272B] border-[#D8C7A5] hover:border-[#3B2348]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`font-semibold uppercase tracking-[0.18em] ${
                          isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                        }`}
                      >
                        {chapter.chapterNumber}
                      </span>
                      <span
                        className={`text-[11px] ${
                          isSelected ? 'text-[#8FAF78]' : 'text-[#29272B]/60'
                        }`}
                      >
                        {chapter.kicker}
                      </span>
                    </div>
                    <h3
                      className={`font-serif text-base sm:text-lg font-semibold leading-snug ${
                        isSelected ? 'text-[#F7F4ED]' : 'text-[#3B2348]'
                      }`}
                    >
                      {chapter.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Active Philosophy Chapter Editorial Spread (12-Column Asymmetric Split) */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch bg-[#F7F4ED] rounded-[32px] border border-[#D8C7A5] p-6 sm:p-10 lg:p-12 shadow-sm">
              {/* Left 7 Columns: Deep Editorial Narrative & Everyday Practice */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#A65D43] font-semibold uppercase tracking-[0.18em]">
                    <span>{activePhilosophyChapter.chapterNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activePhilosophyChapter.kicker}</span>
                  </div>

                  <h3
                    className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3B2348] leading-tight"
                    style={{ textWrap: 'balance' }}
                  >
                    {activePhilosophyChapter.title}
                  </h3>

                  <p className="font-serif italic text-base sm:text-lg text-[#3B2348]/90 leading-relaxed">
                    {activePhilosophyChapter.editorialLead}
                  </p>

                  <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                    {activePhilosophyChapter.narrativeBody}
                  </p>
                </div>

                {/* How This Philosophy Shows Up Every Day */}
                <div className="pt-5 border-t border-[#D8C7A5] space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B2348]">
                    How Families See This in Daily Life at Mission Villa:
                  </h4>
                  <ul className="space-y-2.5">
                    {activePhilosophyChapter.inEverydayLife.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-[#29272B]/90"
                      >
                        <Check
                          className="w-4 h-4 text-[#5F7F49] shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Family Promise Callout + Action Row */}
                <div className="pt-5 border-t border-[#D8C7A5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-md">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                      Our Commitment to Your Family
                    </span>
                    <p className="font-serif text-sm sm:text-base font-semibold text-[#3B2348]">
                      “{activePhilosophyChapter.familyPromise}”
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        handleNavigateToSection(
                          'schedule-visit',
                          'Memory Care',
                          undefined,
                          activePhilosophyChapter.inquiryPresetNote
                        )
                      }
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer whitespace-nowrap"
                    >
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Ask About This on Your Tour</span>
                    </button>

                    <Link
                      href={activePhilosophyChapter.relatedRoute.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition whitespace-nowrap"
                    >
                      <span>{activePhilosophyChapter.relatedRoute.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right 5 Columns: Synchronized Portrait-Led Visual Plate */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="relative rounded-[28px] overflow-hidden border border-[#D8C7A5] bg-[#22122B] h-full min-h-[320px] flex flex-col justify-between p-6">
                  <img
                    src={activePhilosophyChapter.placeholderImage.src}
                    alt={activePhilosophyChapter.placeholderImage.alt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/35 to-black/20" />

                  {/* Inverted Cutout Top Corner Label */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F7F4ED] bg-[#3B2348]/90 px-3.5 py-1.5 rounded-xl border border-[#D8C7A5]/30">
                      {activePhilosophyChapter.chapterNumber} ·{' '}
                      {activePhilosophyChapter.kicker}
                    </span>
                  </div>

                  {/* Bottom Caption & Placeholder Disclosure */}
                  <div className="relative z-10 space-y-2 pt-24">
                    <p className="font-serif text-base sm:text-lg text-[#F7F4ED] font-medium leading-snug">
                      {activePhilosophyChapter.placeholderImage.caption}
                    </p>
                    <p className="text-[11px] text-[#D8C7A5]/80">
                      Status:{' '}
                      {activePhilosophyChapter.placeholderImage.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: NEIGHBORHOOD & LOCAL GEOGRAPHY STORY
            Daly City at 995 East Market Street Near San Bruno Mountain &
            Surrounding Peninsula Amenities
        ==================================================================== */}
        <section
          id="daly-city-geography"
          className="w-full py-18 lg:py-24 fluid-canvas bg-[#22122B] text-[#F7F4ED] grid-line-b relative overflow-hidden"
        >
          <div className="w-full space-y-10">
            {/* Top Geography Header & Filter Bar */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-white/15">
              <div className="lg:col-span-7 space-y-2.5">
                <span className="font-script script-display text-[#D8C7A5] block">
                  Rooted in Daly City &amp; the Peninsula
                </span>
                <h2
                  className="font-serif section-display text-[#F7F4ED] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  A Peaceful Neighborhood Setting Near San Bruno Mountain.
                </h2>
              </div>
              <div className="lg:col-span-5 text-sm sm:text-[15px] text-[#F7F4ED]/80 leading-relaxed">
                <p>
                  Where a community is located shapes both resident peace and
                  how often family members can visit. At{' '}
                  <strong className="text-[#D8C7A5]">
                    995 East Market Street in Daly City
                  </strong>
                  , Mission Villa pairs tranquil hillside surroundings near San
                  Bruno Mountain with effortless access to San Francisco and
                  Peninsula amenities.
                </p>
              </div>
            </div>

            {/* Interactive Geography Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div
                role="group"
                aria-label="Filter neighborhood & geography highlights"
                className="flex flex-wrap items-center gap-2"
              >
                {GEOGRAPHY_CATEGORIES.map((category) => {
                  const active = activeGeoCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleSelectGeoCategory(category)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#D8C7A5] text-[#22122B] shadow-md'
                          : 'bg-white/10 text-[#F7F4ED]/85 hover:bg-white/20'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="text-xs text-[#D8C7A5] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8FAF78]" aria-hidden="true" />
                <span>{MISSION_VILLA_FACTS.address.full}</span>
              </div>
            </div>

            {/* 12-Column Local Geography Atlas Split */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left 5 Columns: Interactive Landmark Cards */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
                {filteredLandmarks.map((landmark) => {
                  const isSelected = landmark.id === activeLandmark.id;
                  return (
                    <button
                      key={landmark.id}
                      type="button"
                      onClick={() => setSelectedLandmarkId(landmark.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                        isSelected
                          ? 'bg-[#3B2348] border-[#D8C7A5] shadow-xl'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold uppercase tracking-[0.18em] text-[#D8C7A5]">
                          {landmark.indexCode} · {landmark.category}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected
                              ? 'text-[#D8C7A5] translate-x-0.5'
                              : 'text-white/40'
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-[#F7F4ED]">
                        {landmark.title}
                      </h3>
                      <p className="text-xs text-[#F7F4ED]/75 leading-relaxed">
                        {landmark.proximityContext}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right 7 Columns: Selected Geography Spotlight & Orientation Card */}
              <div className="lg:col-span-7 flex">
                <div className="w-full rounded-[32px] bg-[#3B2348]/70 border border-[#D8C7A5]/30 overflow-hidden flex flex-col justify-between shadow-2xl">
                  {/* Top Image Header */}
                  <div className="relative h-64 sm:h-72 w-full bg-[#22122B]">
                    <img
                      src={activeLandmark.placeholderImage.src}
                      alt={activeLandmark.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B] via-[#22122B]/35 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] bg-[#22122B]/85 text-[#D8C7A5] px-3.5 py-1.5 rounded-xl border border-[#D8C7A5]/30">
                        {activeLandmark.indexCode} · {activeLandmark.category}
                      </span>
                      <span className="text-[10px] bg-black/50 text-[#F7F4ED]/80 px-2.5 py-1 rounded-lg">
                        {activeLandmark.placeholderImage.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs text-[#8FAF78] font-semibold uppercase tracking-wider block">
                        {activeLandmark.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F4ED] mt-0.5">
                        {activeLandmark.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Narrative & Why It Matters for Visiting Families */}
                  <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base text-[#F7F4ED]/90 leading-relaxed">
                        {activeLandmark.description}
                      </p>

                      <div className="space-y-2.5 pt-3 border-t border-white/10">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C7A5]">
                          Why This Location Matters for Residents &amp; Families:
                        </h4>
                        <ul className="space-y-2">
                          {activeLandmark.whyItMattersForFamilies.map(
                            (reason) => (
                              <li
                                key={reason}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F7F4ED]/85"
                              >
                                <Check
                                  className="w-4 h-4 text-[#8FAF78] shrink-0 mt-0.5"
                                  aria-hidden="true"
                                />
                                <span>{reason}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="text-xs text-[#D8C7A5]">
                        <span className="font-semibold">Address:</span>{' '}
                        {MISSION_VILLA_FACTS.address.full}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleNavigateToSection(
                            'schedule-visit',
                            'Memory Care',
                            undefined,
                            activeLandmark.inquiryPresetNote
                          )
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C98268] text-white text-xs font-semibold hover:bg-[#D8C7A5] hover:text-[#22122B] transition cursor-pointer whitespace-nowrap"
                      >
                        <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Plan Your Visit to Daly City</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: CORE VALUES & COMMUNITY ACTIVITIES
            Connecting Mission Villa's Guiding Values With Real Daily Activities
        ==================================================================== */}
        <section
          id="values-and-activities"
          className="w-full py-18 lg:py-24 fluid-canvas bg-[#F7F4ED] grid-line-b"
        >
          <div className="w-full space-y-10">
            {/* Section Heading */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#3B2348]/15">
              <div className="lg:col-span-7 space-y-2">
                <span className="font-script script-display text-[#C98268] block">
                  Values in Action
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  How Our Core Values Shape Daily Community Activities.
                </h2>
              </div>
              <div className="lg:col-span-5 text-sm sm:text-[15px] text-[#29272B]/80 leading-relaxed">
                <p>
                  Values mean the most when you can see and feel them in daily
                  life. From games, art, gentle fitness, and live entertainment
                  to scenic Peninsula drives and shared family meals, every
                  activity reflects our commitment to dignity and connection.
                </p>
              </div>
            </div>

            {/* 4-Pillar Editorial Value & Activity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {ABOUT_CORE_VALUES.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[28px] bg-[#FCFBF8] border border-[#D8C7A5] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#D8C7A5]/60 pb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A65D43]">
                        Core Value {item.index}
                      </span>
                      <span className="font-script text-xl text-[#3B2348]">
                        {item.scriptAccent}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3B2348]">
                      {item.valueTitle}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-[#29272B]/85 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#D8C7A5]/60">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5F7F49] block">
                      Connected Community Activities &amp; Experiences:
                    </span>
                    <ul className="space-y-2">
                      {item.connectedActivities.map((act) => (
                        <li
                          key={act}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                        >
                          <Check
                            className="w-4 h-4 text-[#5F7F49] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 flex items-center justify-between">
                      <Link
                        href={item.relatedRouteHref}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                      >
                        <span>{item.relatedRouteLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: CARE TEAM STEWARDSHIP (NO FAKE BIOS) & CONDITIONAL PET POLICY
            Honors Blueprint §5 Page 07 strictly:
            - People/team section ONLY if real bios/photos obtained (zero fake
              founders, portraits, or staffing ratios; transparent role stewardship).
            - Pet policy as a short conditional note (confirm current policy).
        ==================================================================== */}
        <section
          id="team-and-policies"
          className="w-full py-18 lg:py-24 fluid-canvas bg-[#FCFBF8] grid-line-b"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left 7 Columns: Care Team Stewardship & Role Explorer (Honest — No Fabricated Bios) */}
            <div className="lg:col-span-7 rounded-[32px] bg-[#F7F4ED] border border-[#D8C7A5] p-6 sm:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A65D43]">
                    People &amp; Care Stewardship
                  </span>
                  <span className="text-[11px] font-semibold text-[#3B2348] bg-[#D8C7A5]/45 px-3 py-1 rounded-lg">
                    Awaiting Official Team Bios &amp; Portraits
                  </span>
                </div>

                <h2
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#3B2348]"
                  style={{ textWrap: 'balance' }}
                >
                  Meet Our Team in Person at 995 East Market Street.
                </h2>

                <p className="text-sm text-[#29272B]/85 leading-relaxed">
                  Rather than displaying stock portraits or generic staff
                  profiles online, we invite families to meet our real Daly City
                  caregivers, Activity Director, culinary team, and leadership
                  in person during a visit. Select a team role below to see how
                  each department supports your loved one and what questions to
                  bring on your tour.
                </p>
              </div>

              {/* Role Selector Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_TEAM_ROLES_OVERVIEW.map((role) => {
                  const isSelected = role.id === selectedTeamRoleId;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedTeamRoleId(role.id)}
                      className={`text-left p-4 rounded-2xl border transition cursor-pointer space-y-1 ${
                        isSelected
                          ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-md'
                          : 'bg-[#FCFBF8] text-[#29272B] border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider block ${
                          isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                        }`}
                      >
                        {role.departmentTag}
                      </span>
                      <span className="font-serif text-base font-semibold block">
                        {role.roleTitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Team Role Detail Box */}
              {(() => {
                const activeRole =
                  ABOUT_TEAM_ROLES_OVERVIEW.find(
                    (r) => r.id === selectedTeamRoleId
                  ) || ABOUT_TEAM_ROLES_OVERVIEW[0];
                return (
                  <div className="rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#3B2348]">
                        {activeRole.roleTitle}
                      </span>
                      <span className="text-[11px] text-[#5F7F49] font-medium">
                        On-Site Daly City Team
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                      {activeRole.howTheySupportResidents}
                    </p>
                    <div className="pt-3 border-t border-[#D8C7A5]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="text-xs text-[#3B2348]">
                        <span className="font-semibold text-[#A65D43] block">
                          Suggested Question for Your Tour:
                        </span>
                        “{activeRole.questionsToAskOnTour}”
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleNavigateToSection(
                            'schedule-visit',
                            'Memory Care',
                            undefined,
                            `Question for our visit: ${activeRole.questionsToAskOnTour}`
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer shrink-0 whitespace-nowrap"
                      >
                        <span>Add Question to Inquiry</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Right 5 Columns: Conditional Pet-Friendly Policy Note + Licensing Transparency */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Conditional Pet-Friendly Policy Card */}
              <div className="herbarium-mount rounded-[32px] bg-[#F7F4ED] border border-[#D8C7A5] p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#5F7F49]">
                      <PawPrint className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                      <span>{ABOUT_PET_POLICY_NOTE.badge}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3B2348]">
                    {ABOUT_PET_POLICY_NOTE.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                    {ABOUT_PET_POLICY_NOTE.summary}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {ABOUT_PET_POLICY_NOTE.confirmationItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-[#29272B]/85"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-[#5F7F49] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A65D43]">
                    Status: {ABOUT_PET_POLICY_NOTE.verificationStatus}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigateToSection(
                        'schedule-visit',
                        'Memory Care',
                        undefined,
                        ABOUT_PET_POLICY_NOTE.inquiryPresetNote
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#3B2348] text-[#3B2348] text-xs font-semibold hover:bg-[#3B2348] hover:text-[#F7F4ED] transition cursor-pointer whitespace-nowrap"
                  >
                    <span>Ask About Current Pet Policy</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Direct Team Conversation Bridge Card */}
              <div className="rounded-[28px] bg-[#3B2348] text-[#F7F4ED] p-6 sm:p-7 space-y-3 shadow-lg">
                <div className="flex items-center justify-between text-xs text-[#D8C7A5]">
                  <span className="uppercase tracking-[0.18em] font-semibold">
                    Direct Team Conversation
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#8FAF78]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F7F4ED]">
                  Have Questions About Our Philosophy or Availability?
                </h3>
                <p className="text-xs text-[#F7F4ED]/80 leading-relaxed">
                  Speak directly with our Daly City team at{' '}
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="text-[#D8C7A5] underline font-semibold"
                  >
                    {MISSION_VILLA_FACTS.phone.formatted}
                  </a>{' '}
                  or request a tour below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: SHARED SCHEDULE A VISIT / INQUIRY FORM & FOOTER
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
