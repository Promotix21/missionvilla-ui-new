'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  ArrowUpRight,
  Check,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Sparkles,
  Home,
  Bath,
  Thermometer,
  ShieldCheck,
  Heart,
  Compass,
  Info,
  Layers,
  Eye,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  SUITE_ACCOMMODATION_GALLERY_PLATES,
  OFFICIAL_FLOOR_PLAN_FORMATS,
  SUITE_WHAT_TO_EXPECT_SPECS,
  SUITE_PERSONALIZATION_TOUCHPOINTS,
  RELATED_COMMUNITY_SPACES_FROM_SUITES,
  filterSuiteGalleryPlates,
  type SuiteGalleryFilterCategory,
  type OfficialFloorPlanFormatSpec,
  type VisitInquiryInput,
} from '@/lib/mission-villa-data';

const GALLERY_CATEGORIES: SuiteGalleryFilterCategory[] = [
  'All Accommodations',
  'Private Suites',
  'Shared & Companion',
  'Private Bathrooms & Comfort',
];

export default function SuitesAndFloorPlansPage() {
  const [fontScale, setFontScale] = useState<number>(1);
  const [activeGalleryCategory, setActiveGalleryCategory] =
    useState<SuiteGalleryFilterCategory>('All Accommodations');
  const [lightboxPlateIndex, setLightboxPlateIndex] = useState<number | null>(null);
  const [activeFloorPlanId, setActiveFloorPlanId] =
    useState<OfficialFloorPlanFormatSpec['id']>('companion-unit');
  const [selectedExpectationId, setSelectedExpectationId] = useState<string>(
    SUITE_WHAT_TO_EXPECT_SPECS[0].id
  );
  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >(null);
  const [presetSuitePreference, setPresetSuitePreference] = useState<
    VisitInquiryInput['suitePreference'] | undefined
  >(undefined);
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  const filteredPlates = filterSuiteGalleryPlates(
    SUITE_ACCOMMODATION_GALLERY_PLATES,
    activeGalleryCategory
  );

  const activeFloorPlan =
    OFFICIAL_FLOOR_PLAN_FORMATS.find((f) => f.id === activeFloorPlanId) ||
    OFFICIAL_FLOOR_PLAN_FORMATS[0];

  const activeExpectation =
    SUITE_WHAT_TO_EXPECT_SPECS.find((item) => item.id === selectedExpectationId) ||
    SUITE_WHAT_TO_EXPECT_SPECS[0];

  // Keyboard navigation for the real accommodation photo lightbox
  useEffect(() => {
    if (lightboxPlateIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxPlateIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxPlateIndex(
          (prev) =>
            prev === null ? 0 : (prev + 1) % SUITE_ACCOMMODATION_GALLERY_PLATES.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxPlateIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + SUITE_ACCOMMODATION_GALLERY_PLATES.length) %
              SUITE_ACCOMMODATION_GALLERY_PLATES.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPlateIndex]);

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

  const activeLightboxPlate =
    lightboxPlateIndex !== null
      ? SUITE_ACCOMMODATION_GALLERY_PLATES[lightboxPlateIndex]
      : null;

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
            SECTION 1: WELCOMING SUITES & FLOOR PLANS HERO
            Warm Alabaster & Pressed-Linen Architectural Folio Hero
            Distinct from Homepage (Conservatory Shutters), Memory Care (Split
            Arch), Respite Care (Terracotta Banner), Life at Mission Villa
            (Editorial Diptych), and Services & Amenities (Deep-Plum Triptych)
        ==================================================================== */}
        <section
          id="suites-hero"
          className="w-full min-h-[calc(100svh-104px)] pt-4 pb-8 lg:py-7 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture flex flex-col justify-between relative overflow-hidden"
        >
          {/* Top Breadcrumb & Page Monograph Ledger Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-[#3B2348]/15 text-xs">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#29272B]/75">
              <Link href="/" className="hover:text-[#3B2348] transition font-medium">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#3B2348] font-semibold" aria-current="page">
                Suites &amp; Floor Plans
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-3 py-1 rounded-md bg-[#3B2348]/10 text-[#3B2348] font-semibold tracking-wider uppercase text-[10px]">
                Page 05 · Residential Monograph
              </span>
              <span className="hidden sm:inline text-[#29272B]/65 text-[11px]">
                Private &amp; Shared Suites with Private Bathrooms · Daly City, CA
              </span>
            </div>
          </div>

          {/* Center 12-Column Architectural Residence Stage */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 items-stretch my-auto py-4">
            {/* Left 6 Columns: Warm Residential Narrative & Direct Format Jump */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Privacy, Comfort &amp; Familiar Belonging
                </span>

                <h1
                  className="font-serif text-[clamp(2rem,3.3vw,3.35rem)] leading-[1.06] tracking-[-0.02em] text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Welcoming Private &amp; Shared Suites Designed to Feel Like Home.
                </h1>

                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed max-w-2xl">
                  Selecting a Memory Care or short-term Respite Care community means choosing the room where your loved one will wake up each morning, keep cherished family photographs, and rest peacefully at night. At Mission Villa Senior Living in Daly City, both our{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    private suites and shared companion formats include a private bathroom
                  </strong>
                  , pairing homelike privacy with 24-hour on-site support.
                </p>
              </div>

              {/* Quick Format Anchor Strip (Jump straight to named floor plans) */}
              <div className="herbarium-mount rounded-2xl p-3.5 sm:p-4 space-y-2.5 bg-[#FCFBF8]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#A65D43] font-semibold">
                    Original-Site Suite &amp; Floor-Plan Formats
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('floor-plan-viewer')}
                    className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Open Floor-Plan Viewer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {OFFICIAL_FLOOR_PLAN_FORMATS.map((format) => {
                    const isSelected = activeFloorPlanId === format.id;
                    return (
                      <button
                        key={format.id}
                        type="button"
                        onClick={() => {
                          setActiveFloorPlanId(format.id);
                          handleNavigateToSection('floor-plan-viewer');
                        }}
                        className={`text-left p-3 rounded-xl border transition cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348]'
                            : 'bg-[#F7F4ED] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                        }`}
                      >
                        <span
                          className={`text-[10px] uppercase tracking-wider font-semibold block ${
                            isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                          }`}
                        >
                          {format.occupancyLabel}
                        </span>
                        <span className="font-serif text-sm font-bold block mt-0.5">
                          {format.name}
                        </span>
                        <span
                          className={`text-[11px] block mt-1 ${
                            isSelected ? 'text-[#F7F4ED]/80' : 'text-[#29272B]/75'
                          }`}
                        >
                          {format.bathroomConfiguration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <button
                  type="button"
                  onClick={() =>
                    handleNavigateToSection(
                      'schedule-visit',
                      undefined,
                      'Open / Undecided',
                      'Interested in touring Mission Villa suites in person and reviewing current suite availability.'
                    )
                  }
                  className="px-6 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] font-semibold text-xs sm:text-sm hover:bg-[#C98268] transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Schedule an In-Person Suite Tour</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('accommodation-photo-story')}
                  className="px-5 py-3.5 rounded-full border border-[#3B2348]/30 bg-[#FCFBF8] text-[#3B2348] font-semibold text-xs sm:text-sm hover:border-[#3B2348] transition cursor-pointer inline-flex items-center gap-2"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                  <span>Browse Suite Photo Story</span>
                </button>

                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="px-4 py-3 text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                  <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
                </a>
              </div>
            </div>

            {/* Right 6 Columns: Asymmetric Architectural Suite Diptych with Lightbox Trigger */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
              {/* Primary Arch Suite Photograph (7 of 12 internal cols) */}
              <div className="sm:col-span-7 arch-portal bento-frame bg-[#3B2348] min-h-[340px] sm:min-h-[420px] relative flex flex-col justify-between group">
                <img
                  src={SUITE_ACCOMMODATION_GALLERY_PLATES[0].placeholderImage.src}
                  alt={SUITE_ACCOMMODATION_GALLERY_PLATES[0].placeholderImage.alt}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover mood-grade transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/25 to-transparent" />

                {/* Centered top action inside the arch curve so it never clips */}
                <div className="relative z-10 pt-8 px-5 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setLightboxPlateIndex(0)}
                    className="px-3.5 py-1.5 rounded-xl bg-black/55 backdrop-blur-md text-[#F7F4ED] text-[11px] font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Maximize2 className="w-3 h-3" aria-hidden="true" />
                    <span>Inspect in Lightbox</span>
                  </button>
                </div>

                <div className="relative z-10 p-6 mt-auto space-y-1.5 text-[#F7F4ED]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                    Private &amp; Shared Suites · Private Baths
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold leading-snug">
                    Calm, Sunlit Accommodations Built Around Dignity
                  </h2>
                  <p className="text-[11px] text-[#F7F4ED]/75">
                    Illustrative photography — replace before launch with official Mission Villa suite photos.
                  </p>
                </div>
              </div>

              {/* Right Companion Stack (5 of 12 internal cols) */}
              <div className="sm:col-span-5 flex flex-col justify-between gap-4">
                <div className="bento-frame bg-[#22122B] text-[#F7F4ED] p-5 rounded-[24px] flex-1 flex flex-col justify-between relative overflow-hidden">
                  <img
                    src={SUITE_ACCOMMODATION_GALLERY_PLATES[1].placeholderImage.src}
                    alt={SUITE_ACCOMMODATION_GALLERY_PLATES[1].placeholderImage.alt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover mood-grade opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B] via-[#22122B]/70 to-[#22122B]/30" />

                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#D8C7A5]/20 text-[#D8C7A5] text-[10px] font-semibold uppercase tracking-wider">
                      Companion &amp; Jack &amp; Jill
                    </span>
                    <button
                      type="button"
                      onClick={() => setLightboxPlateIndex(1)}
                      aria-label="Open Companion Suite photo in lightbox"
                      className="p-1.5 rounded-lg bg-white/15 hover:bg-[#C98268] text-white transition cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="relative z-10 space-y-1.5 mt-6">
                    <h3 className="font-serif text-lg font-semibold text-[#F7F4ED]">
                      Named Shared Formats
                    </h3>
                    <p className="text-xs text-[#F7F4ED]/85 leading-relaxed">
                      Explore our original-site <strong className="text-[#D8C7A5]">Companion Unit</strong> and <strong className="text-[#D8C7A5]">Jack &amp; Jill</strong> formats—each equipped with a private bathroom.
                    </p>
                  </div>
                </div>

                {/* Honest Floor-Plan Verification Callout */}
                <div className="herbarium-mount rounded-[24px] p-5 bg-[#FCFBF8] space-y-2.5">
                  <div className="flex items-center gap-2 text-[#3B2348]">
                    <ShieldCheck className="w-4 h-4 text-[#5F7F49] shrink-0" aria-hidden="true" />
                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold">
                      Transparent Architectural Policy
                    </span>
                  </div>
                  <p className="text-xs text-[#29272B]/85 leading-relaxed">
                    We never publish fabricated CAD floor plans or unverified square-footage numbers. Below you will find verified suite features alongside our official floor-plan viewer status.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('what-to-expect-in-a-suite')}
                    className="text-xs font-semibold text-[#A65D43] hover:text-[#3B2348] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>See What to Expect in a Suite</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: AUTHENTIC ACCOMMODATION PHOTO STORY
            Filterable Asymmetric Folio with Real Interactive Image Lightbox
        ==================================================================== */}
        <section
          id="accommodation-photo-story"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#FCFBF8] grid-line-b"
        >
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Authentic Accommodation Photo Story
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Inside Our Private &amp; Companion Living Spaces
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/80 leading-relaxed pt-1">
                Select any accommodation plate below to inspect larger imagery and spatial notes in our interactive lightbox. All current photographs are marked as illustrative placeholders to be replaced with official Mission Villa suite photography before launch.
              </p>
            </div>

            {/* Category Filter Bar */}
            <div
              role="tablist"
              aria-label="Filter suite accommodation photo plates"
              className="inline-flex flex-wrap p-1.5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] gap-1 self-start xl:self-end"
            >
              {GALLERY_CATEGORIES.map((category) => {
                const isActive = activeGalleryCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveGalleryCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                        : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Asymmetric 12-Column Photo Story Plates */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {filteredPlates.map((plate) => {
              const masterIndex = SUITE_ACCOMMODATION_GALLERY_PLATES.findIndex(
                (p) => p.id === plate.id
              );

              return (
                <article
                  key={plate.id}
                  className={`${plate.colSpan} bento-frame bg-[#F7F4ED] border border-[#D8C7A5] flex flex-col justify-between shadow-sm group`}
                >
                  {/* Top Image Stage with Lightbox Trigger */}
                  <div
                    className={`${plate.aspectClass} relative overflow-hidden bg-[#3B2348] flex flex-col justify-between`}
                  >
                    <img
                      src={plate.placeholderImage.src}
                      alt={plate.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover mood-grade transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/25 to-transparent" />

                    {/* Clean Top Bar: Plate Badge + Lightbox Action (Never overlaps bottom title) */}
                    <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between gap-2">
                      <span className="inline-block px-3.5 py-1.5 rounded-xl bg-[#3B2348]/90 backdrop-blur-md text-[#D8C7A5] text-xs font-semibold border border-[#D8C7A5]/30">
                        {plate.plateNumber} · {plate.suiteFormatTag}
                      </span>

                      <button
                        type="button"
                        onClick={() => setLightboxPlateIndex(masterIndex)}
                        className="px-3.5 py-2 rounded-xl bg-black/55 backdrop-blur-md text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center gap-1.5 shadow-md"
                      >
                        <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Open Lightbox</span>
                      </button>
                    </div>

                    {/* Bottom Image Caption */}
                    <div className="relative z-10 p-6 sm:p-7 mt-auto text-[#F7F4ED] max-w-xl">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                        {plate.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
                        {plate.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Narrative & Spatial Highlights */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5 bg-[#FCFBF8]">
                    <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                      {plate.storyCaption}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-[#D8C7A5]">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                        Key Accommodation Highlights
                      </span>
                      <ul className="space-y-2">
                        {plate.spatialHighlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                          >
                            <Check
                              className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#29272B]/65">
                        <span>Status: {plate.placeholderImage.status}</span>
                        <button
                          type="button"
                          onClick={() => setLightboxPlateIndex(masterIndex)}
                          className="font-semibold text-[#3B2348] hover:text-[#C98268] underline cursor-pointer inline-flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Inspect Full Plate</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: FLOOR-PLAN GALLERY / VIEWER FOR REAL SOURCED PLANS ONLY
            Strictly shows 'Awaiting official floor plan' placeholder where
            official architectural drawings are not available in repo/site.
            Never invents fake architectural CAD diagrams or square footage.
        ==================================================================== */}
        <section
          id="floor-plan-viewer"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#3B2348] text-[#F7F4ED] grid-line-b relative overflow-hidden"
        >
          {/* Section Header */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2">
              <span className="font-script script-display text-[#D8C7A5] block">
                Original-Site Named Formats
              </span>
              <h2
                className="font-serif section-display text-[#F7F4ED] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Suite &amp; Floor-Plan Format Viewer
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-8">
              <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                The original Mission Villa floor-plans page identifies <strong className="text-[#D8C7A5]">Companion Unit</strong> and <strong className="text-[#D8C7A5]">Jack &amp; Jill</strong> alongside <strong className="text-[#D8C7A5]">Private Suites with Private Bathrooms</strong>. Select a format below to review its spatial arrangement and official floor-plan asset status.
              </p>
            </div>
          </div>

          {/* Format Selector Tabs */}
          <div
            role="tablist"
            aria-label="Select a Mission Villa suite format"
            className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10"
          >
            {OFFICIAL_FLOOR_PLAN_FORMATS.map((format) => {
              const isSelected = format.id === activeFloorPlan.id;
              return (
                <button
                  key={format.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFloorPlanId(format.id)}
                  className={`text-left p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-[#F7F4ED] text-[#3B2348] border-[#D8C7A5] shadow-xl'
                      : 'bg-[#22122B]/80 text-[#F7F4ED] border-white/15 hover:border-[#D8C7A5]/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                        isSelected ? 'text-[#A65D43]' : 'text-[#D8C7A5]'
                      }`}
                    >
                      {format.code}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-semibold ${
                        isSelected
                          ? 'bg-[#3B2348]/10 text-[#3B2348]'
                          : 'bg-white/10 text-[#D8C7A5]'
                      }`}
                    >
                      {format.bathroomConfiguration}
                    </span>
                  </div>

                  <div className="mt-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold">
                      {format.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 ${
                        isSelected ? 'text-[#29272B]/80' : 'text-[#F7F4ED]/75'
                      }`}
                    >
                      {format.occupancyLabel} · {format.sourceClassification}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Floor-Plan Viewer Stage (12 Columns) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left 7 Columns: Official Floor-Plan Sheet Mount (Honest 'Awaiting official floor plan' State) */}
            <div className="lg:col-span-7 rounded-[28px] bg-[#22122B] border-2 border-[#D8C7A5]/35 p-6 sm:p-9 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden">
              {/* Top Architectural Title Block */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/15">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#8FAF78] font-semibold block">
                    {activeFloorPlan.code} · {activeFloorPlan.sourceClassification}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4ED] mt-1">
                    {activeFloorPlan.name}
                  </h3>
                </div>

                {/* Required Blueprint Status Badge: 'Awaiting official floor plan' */}
                <div className="px-4 py-2 rounded-xl bg-[#C98268]/20 border border-[#C98268] text-[#F7F4ED] text-xs font-semibold inline-flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D8C7A5] shrink-0" aria-hidden="true" />
                  <span>{activeFloorPlan.diagramAssetStatus}</span>
                </div>
              </div>

              {/* Honest Architectural Sheet Placeholder (Zero Fake CAD Drawings or Invented Sq. Ft.) */}
              <div className="rounded-2xl bg-[#3B2348]/55 border border-dashed border-[#D8C7A5]/45 p-6 sm:p-8 space-y-6 my-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                      Architectural Diagram Status
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-[#F7F4ED] font-semibold">
                      Awaiting official floor plan
                    </p>
                  </div>

                  <span className="px-3 py-1.5 rounded-lg bg-black/35 text-[#D8C7A5] text-[11px] font-medium self-start sm:self-center">
                    No fabricated dimensions or synthetic CAD lines shown
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#F7F4ED]/85 leading-relaxed">
                  To protect family trust, we do not generate synthetic architectural blueprints or estimate square footage. Until Mission Villa’s official architectural diagram for the{' '}
                  <strong className="text-[#D8C7A5]">{activeFloorPlan.name}</strong> is uploaded, here is the verified spatial arrangement you can inspect in person at 995 East Market Street:
                </p>

                {/* Verified Spatial Zones List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {activeFloorPlan.spatialArrangementNotes.map((note, idx) => (
                    <div
                      key={note}
                      className="p-4 rounded-xl bg-[#22122B]/90 border border-white/10 space-y-1.5"
                    >
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FAF78] font-bold block">
                        Spatial Note 0{idx + 1}
                      </span>
                      <p className="text-xs text-[#F7F4ED]/90 leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Sheet Metadata Ledger */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-[#D8C7A5]/90">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>Occupancy: {activeFloorPlan.occupancyLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>Bath: {activeFloorPlan.bathroomConfiguration}</span>
                  <span aria-hidden="true">·</span>
                  <span>CA License #{MISSION_VILLA_FACTS.licenseNumber}</span>
                </div>

                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="font-semibold text-[#F7F4ED] hover:text-[#D8C7A5] underline inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                  <span>Ask About Current Openings: {MISSION_VILLA_FACTS.phone.formatted}</span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Format Brief, Who It Serves, Included Support & Tour Action */}
            <div className="lg:col-span-5 herbarium-mount bg-[#F7F4ED] text-[#29272B] rounded-[28px] p-6 sm:p-9 flex flex-col justify-between space-y-6 shadow-2xl">
              <div className="space-y-4">
                <div className="pb-4 border-b border-[#D8C7A5]">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                    Format Specification &amp; Suitability
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#3B2348] mt-1">
                    {activeFloorPlan.name}
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  {activeFloorPlan.editorialOverview}
                </p>

                <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] space-y-1.5">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#5F7F49] font-bold block">
                    Who This Format Serves Best
                  </span>
                  <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                    {activeFloorPlan.whoThisFormatServes}
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                    Included Daily Support &amp; Suite Care
                  </span>
                  <ul className="space-y-2">
                    {activeFloorPlan.includedSuiteSupport.map((supportItem) => (
                      <li
                        key={supportItem}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                      >
                        <Check
                          className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{supportItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#D8C7A5]">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                    Helpful Questions for Your In-Person Tour
                  </span>
                  <ul className="space-y-1.5">
                    {activeFloorPlan.tourInspectionQuestions.map((question) => (
                      <li
                        key={question}
                        className="text-xs text-[#29272B]/85 italic flex items-start gap-2"
                      >
                        <span className="text-[#C98268] font-bold" aria-hidden="true">
                          •
                        </span>
                        <span>“{question}”</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8C7A5] flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() =>
                    handleNavigateToSection(
                      'schedule-visit',
                      undefined,
                      activeFloorPlan.inquirySuitePreset,
                      activeFloorPlan.inquiryNotePreset
                    )
                  }
                  className="flex-1 py-3.5 px-5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Inquire About {activeFloorPlan.name}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: WHAT TO EXPECT IN A SUITE
            Original-site apartment features (private bathrooms, thermostat,
            utilities, housekeeping, laundry, emergency alert) with explicit
            per-unit tour confirmation notes.
        ==================================================================== */}
        <section
          id="what-to-expect-in-a-suite"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2">
              <span className="font-script script-display text-[#C98268] block">
                Everyday Comfort &amp; Practical Clarity
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                What to Expect in a Mission Villa Suite
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#3B2348]/15 lg:pl-8">
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                Families deserve clear, accurate expectations before touring. Below are the suite features referenced on the original Mission Villa website, paired with helpful reminders on what to confirm per individual room during your visit.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left 7 Columns: Hairline-Divided Suite Expectation Ledger */}
            <div className="lg:col-span-7 rounded-[28px] bg-[#FCFBF8] border border-[#D8C7A5] divide-y divide-[#D8C7A5] overflow-hidden shadow-sm">
              {SUITE_WHAT_TO_EXPECT_SPECS.map((spec) => {
                const isSelected = spec.id === activeExpectation.id;
                return (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => setSelectedExpectationId(spec.id)}
                    className={`w-full text-left p-5 sm:p-6 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#3B2348] text-[#F7F4ED]'
                        : 'hover:bg-[#D8C7A5]/25 text-[#29272B]'
                    }`}
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                            isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                          }`}
                        >
                          {spec.code} · {spec.category}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-md text-[10px] font-semibold ${
                            spec.verificationBadge === 'Verified Original-Site Feature'
                              ? isSelected
                                ? 'bg-[#8FAF78]/25 text-[#D8C7A5]'
                                : 'bg-[#8FAF78]/25 text-[#3B2348]'
                              : isSelected
                              ? 'bg-[#C98268]/30 text-[#F7F4ED]'
                              : 'bg-[#C98268]/20 text-[#A65D43]'
                          }`}
                        >
                          {spec.verificationBadge}
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-lg sm:text-xl font-semibold ${
                          isSelected ? 'text-[#F7F4ED]' : 'text-[#3B2348]'
                        }`}
                      >
                        {spec.featureName}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isSelected ? 'text-[#F7F4ED]/85' : 'text-[#29272B]/80'
                        }`}
                      >
                        {spec.summary}
                      </p>
                    </div>

                    <div className="shrink-0 self-end sm:self-center">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl border ${
                          isSelected
                            ? 'border-[#D8C7A5] text-[#D8C7A5]'
                            : 'border-[#3B2348]/25 text-[#3B2348]'
                        }`}
                      >
                        <span>Inspect Detail</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right 5 Columns: Deep-Dive Inspector Card for Selected Suite Feature */}
            <div className="lg:col-span-5 herbarium-mount rounded-[28px] p-6 sm:p-9 bg-[#FCFBF8] flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="pb-4 border-b border-[#D8C7A5] flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                      {activeExpectation.code} · {activeExpectation.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348] mt-1">
                      {activeExpectation.featureName}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.16em] text-[#3B2348] font-semibold block">
                    What This Means for Your Loved One
                  </span>
                  <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                    {activeExpectation.howItWorksForResidents}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-2">
                  <div className="flex items-center gap-2 text-[#A65D43]">
                    <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-[0.16em] font-bold">
                      Tour Verification Note
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                    {activeExpectation.clientConfirmationNote}
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-[#D8C7A5] space-y-3">
                <button
                  type="button"
                  onClick={() =>
                    handleNavigateToSection(
                      'schedule-visit',
                      undefined,
                      undefined,
                      `Question about ${activeExpectation.featureName}: Would like to confirm per-unit details during our visit.`
                    )
                  }
                  className="w-full py-3.5 px-5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Ask Our Team About {activeExpectation.featureName}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: PERSONALIZATION OF SPACE
            How personal touches, family photos, and familiar objects help
            residents feel at home (connected to Legacies™ Memory Care)
        ==================================================================== */}
        <section
          id="personalizing-your-suite"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#D8C7A5]/25 grid-line-b"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2">
              <span className="font-script script-display text-[#C98268] block">
                Making a Suite Truly Theirs
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Personalizing Your Loved One’s Living Space
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#3B2348]/15 lg:pl-8">
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                A suite becomes a true home when it reflects the life story, family bonds, and comforting habits of the person living inside it. Here is how our team helps families personalize each accommodation.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {SUITE_PERSONALIZATION_TOUCHPOINTS.map((touchpoint) => (
              <article
                key={touchpoint.id}
                className="herbarium-mount rounded-[28px] p-7 sm:p-9 bg-[#FCFBF8] flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#D8C7A5]">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-bold">
                      Touchpoint {touchpoint.number} · {touchpoint.label}
                    </span>
                    <Heart className="w-4 h-4 text-[#C98268] shrink-0" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#3B2348]">
                    {touchpoint.title}
                  </h3>

                  <p className="text-sm text-[#29272B]/85 leading-relaxed">
                    {touchpoint.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#3B2348] font-semibold block">
                      What Families Often Bring
                    </span>
                    <ul className="space-y-2">
                      {touchpoint.familyExamples.map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                        >
                          <Check
                            className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F7F49] font-bold block">
                    Legacies™ Memory Care Connection
                  </span>
                  <p className="text-xs text-[#29272B]/85 leading-relaxed">
                    {touchpoint.legaciesConnection}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: RELATED COMMUNITY SPACES
            Dining, Lounges, Courtyard, and Patio as extensions of suite life
        ==================================================================== */}
        <section
          id="related-community-spaces"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#FCFBF8] grid-line-b"
        >
          <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Beyond the Suite Door
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Welcoming Shared Spaces Just Steps from Every Suite
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/80 leading-relaxed pt-1">
                While a private or companion suite offers restful sanctuary, daily life at Mission Villa unfolds across our restaurant-style dining room, fireside lounges, library, enclosed courtyard, and outdoor patio.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services-and-amenities"
                className="px-5 py-3 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#3B2348] hover:text-[#F7F4ED] transition inline-flex items-center gap-1.5"
              >
                <span>All 18 Services &amp; Amenities</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {RELATED_COMMUNITY_SPACES_FROM_SUITES.map((space) => (
              <article
                key={space.id}
                className="bento-frame bg-[#F7F4ED] border border-[#D8C7A5] flex flex-col justify-between shadow-sm group"
              >
                <div className="h-60 sm:h-64 relative overflow-hidden bg-[#3B2348]">
                  <img
                    src={space.placeholderImage.src}
                    alt={space.placeholderImage.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover mood-grade transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/85 via-transparent to-transparent" />

                  <div className="cutout-tl-cream">
                    <span className="inline-block px-3.5 py-1.5 rounded-xl bg-[#3B2348] text-[#D8C7A5] text-[11px] font-semibold">
                      {space.atmosphereTag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm text-[10px] text-[#F7F4ED]/85">
                    Illustrative photo
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A65D43] font-bold block">
                      {space.code}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3B2348]">
                      {space.spaceName}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                      {space.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#D8C7A5]">
                    <p className="text-xs text-[#3B2348] italic bg-[#FCFBF8] p-3.5 rounded-xl border border-[#D8C7A5]/70">
                      {space.connectionToSuiteLife}
                    </p>

                    <Link
                      href={space.destinationHref}
                      className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-[#3B2348]/10 hover:bg-[#3B2348] text-[#3B2348] hover:text-[#F7F4ED] text-xs font-semibold transition"
                    >
                      <span>{space.destinationLabel}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: VISIT CTA & COMPLETE ARCHITECTURAL FOOTER
            Shared conversion form with explicit Demo only — no inquiry sent state
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

      {/* =====================================================================
          REAL INTERACTIVE ACCOMMODATION PHOTO LIGHTBOX MODAL
      ====================================================================== */}
      {activeLightboxPlate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Suite photo lightbox: ${activeLightboxPlate.title}`}
          className="fixed inset-0 z-50 bg-[#22122B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxPlateIndex(null)}
        >
          <div
            className="w-full max-w-5xl rounded-[28px] bg-[#FCFBF8] text-[#29272B] border-2 border-[#D8C7A5] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left 7 Columns: High-Resolution Plate View */}
            <div className="lg:col-span-7 min-h-[300px] sm:min-h-[460px] bg-[#3B2348] relative flex flex-col justify-between">
              <img
                src={activeLightboxPlate.placeholderImage.src}
                alt={activeLightboxPlate.placeholderImage.alt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover mood-grade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-transparent to-[#22122B]/40" />

              <div className="relative z-10 p-5 flex items-center justify-between gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold">
                  {activeLightboxPlate.plateNumber} · {activeLightboxPlate.suiteFormatTag}
                </span>
                <span className="px-3 py-1 rounded-lg bg-black/55 text-[#F7F4ED] text-[10px] uppercase tracking-wider font-semibold">
                  {activeLightboxPlate.placeholderImage.status}
                </span>
              </div>

              {/* Prev / Next Controls */}
              <div className="relative z-10 p-5 mt-auto flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxPlateIndex((prev) =>
                      prev === null
                        ? 0
                        : (prev - 1 + SUITE_ACCOMMODATION_GALLERY_PLATES.length) %
                          SUITE_ACCOMMODATION_GALLERY_PLATES.length
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-black/60 hover:bg-[#C98268] text-[#F7F4ED] text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Previous Plate</span>
                </button>

                <span className="text-xs text-[#D8C7A5] font-semibold">
                  {(lightboxPlateIndex ?? 0) + 1} of {SUITE_ACCOMMODATION_GALLERY_PLATES.length}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setLightboxPlateIndex((prev) =>
                      prev === null
                        ? 0
                        : (prev + 1) % SUITE_ACCOMMODATION_GALLERY_PLATES.length
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-black/60 hover:bg-[#C98268] text-[#F7F4ED] text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Next Plate</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Plate Details & Direct Tour Action */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#D8C7A5]">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                      {activeLightboxPlate.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#3B2348] mt-1">
                      {activeLightboxPlate.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxPlateIndex(null)}
                    aria-label="Close photo lightbox"
                    className="p-2 rounded-xl border border-[#3B2348]/20 text-[#3B2348] hover:bg-[#3B2348] hover:text-[#F7F4ED] transition cursor-pointer"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <p className="text-sm text-[#29272B]/85 leading-relaxed">
                  {activeLightboxPlate.storyCaption}
                </p>

                <ul className="space-y-2 pt-2">
                  {activeLightboxPlate.spatialHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#29272B]/90"
                    >
                      <Check
                        className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#D8C7A5] space-y-3">
                <p className="text-[11px] text-[#29272B]/70 italic">
                  {activeLightboxPlate.placeholderImage.caption}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setLightboxPlateIndex(null);
                    handleNavigateToSection(
                      'schedule-visit',
                      undefined,
                      activeLightboxPlate.category === 'Shared & Companion'
                        ? 'Shared Suite'
                        : 'Private Suite',
                      `Interested in seeing ${activeLightboxPlate.suiteFormatTag} during an in-person visit.`
                    );
                  }}
                  className="w-full py-3.5 px-5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Schedule a Tour to View Suites in Person</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
