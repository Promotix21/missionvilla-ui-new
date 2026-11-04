'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  ArrowUpRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Search,
  Compass,
  Camera,
  Video,
  Grid,
  Layers,
  Eye,
  ShieldCheck,
  MapPin,
  Sparkles,
  Info,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  GALLERY_CATEGORY_META,
  GALLERY_PHOTO_PLATES,
  VIRTUAL_TOUR_STOPS,
  filterGalleryPhotoPlates,
  type GalleryFilterCategory,
  type GalleryPhotoPlate,
  type VirtualTourStop,
  type VisitInquiryInput,
} from '@/lib/mission-villa-data';

export default function GalleryAndVirtualTourPage() {
  const [fontScale, setFontScale] = useState<number>(1);
  const [activeCategory, setActiveCategory] = useState<GalleryFilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [layoutMode, setLayoutMode] = useState<'editorial-masonry' | 'contact-sheet'>(
    'editorial-masonry'
  );
  const [lightboxPlateId, setLightboxPlateId] = useState<string | null>(null);
  const [activeTourStopId, setActiveTourStopId] = useState<string>(
    VIRTUAL_TOUR_STOPS[0].id
  );
  const [tourViewMode, setTourViewMode] = useState<'guided-walkthrough' | 'official-embed'>(
    'guided-walkthrough'
  );

  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >(null);
  const [presetSuitePreference, setPresetSuitePreference] = useState<
    VisitInquiryInput['suitePreference'] | undefined
  >(undefined);
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  const filteredPlates = filterGalleryPhotoPlates(
    GALLERY_PHOTO_PLATES,
    activeCategory,
    searchQuery
  );

  const activeCategoryMeta =
    GALLERY_CATEGORY_META.find((c) => c.id === activeCategory) || GALLERY_CATEGORY_META[0];

  const activeTourStop: VirtualTourStop =
    VIRTUAL_TOUR_STOPS.find((stop) => stop.id === activeTourStopId) ||
    VIRTUAL_TOUR_STOPS[0];

  const activeTourStopIndex = VIRTUAL_TOUR_STOPS.findIndex(
    (stop) => stop.id === activeTourStop.id
  );

  const lightboxIndex = lightboxPlateId
    ? GALLERY_PHOTO_PLATES.findIndex((p) => p.id === lightboxPlateId)
    : -1;
  const activeLightboxPlate: GalleryPhotoPlate | null =
    lightboxIndex >= 0 ? GALLERY_PHOTO_PLATES[lightboxIndex] : null;

  // Keyboard support for Fullscreen Lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!lightboxPlateId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxPlateId(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxPlateId((prevId) => {
          const currentIdx = GALLERY_PHOTO_PLATES.findIndex((p) => p.id === prevId);
          const nextIdx = (currentIdx + 1) % GALLERY_PHOTO_PLATES.length;
          return GALLERY_PHOTO_PLATES[nextIdx].id;
        });
      } else if (e.key === 'ArrowLeft') {
        setLightboxPlateId((prevId) => {
          const currentIdx = GALLERY_PHOTO_PLATES.findIndex((p) => p.id === prevId);
          const prevIdx =
            (currentIdx - 1 + GALLERY_PHOTO_PLATES.length) %
            GALLERY_PHOTO_PLATES.length;
          return GALLERY_PHOTO_PLATES[prevIdx].id;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPlateId]);

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

  const handleSelectCategoryAndScroll = (category: GalleryFilterCategory) => {
    setActiveCategory(category);
    setSearchQuery('');
    const target = document.getElementById('editorial-masonry-gallery');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            SECTION 1: CLEAN TITLE / INTRO — CURATORIAL EXHIBITION FOLIO HERO
            Distinct visual composition for Page 06:
            Warm Sand & Pressed-Linen Exhibition Header + Asymmetric 3-Plate
            Aperture Contact-Sheet Preview + Direct Category Jump Index
        ==================================================================== */}
        <section
          id="gallery-hero"
          className="w-full min-h-[calc(100svh-104px)] py-3 lg:py-5 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture flex flex-col justify-between relative overflow-hidden"
        >
          {/* Top Breadcrumb & Monograph Index Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#3B2348]/15 text-xs">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#29272B]/75">
              <Link href="/" className="hover:text-[#3B2348] transition font-medium">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/life-at-mission-villa"
                className="hover:text-[#3B2348] transition font-medium"
              >
                Life at Mission Villa
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#3B2348] font-semibold" aria-current="page">
                Gallery &amp; Virtual Tour
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] text-[#29272B]/75">
              <span className="font-semibold uppercase tracking-[0.18em] text-[#3B2348]">
                Page 06 · Visual Proof &amp; Spatial Tour
              </span>
              <span className="hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="hidden sm:inline">
                995 East Market Street, Daly City, CA 94014
              </span>
            </div>
          </div>

          {/* Center 12-Column Curatorial Stage */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch my-auto py-2.5">
            {/* Left 5 Columns: Clean Title, Intro, Category Jump Strip & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
              <div className="space-y-2">
                <span className="font-script script-display text-[#C98268] block">
                  Seeing Is Reassurance
                </span>

                <h1
                  className="font-serif text-[clamp(1.9rem,3.1vw,3.15rem)] leading-[1.06] tracking-[-0.02em] text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  A Visual Look Inside Daily Life at Mission Villa.
                </h1>

                <p className="text-sm sm:text-[15px] text-[#29272B]/85 leading-relaxed">
                  Before you walk through our doors at{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    995 East Market Street in Daly City
                  </strong>
                  , explore the rooms, restaurant-style dining table, homelike indoor lounges, enclosed garden courtyard, and daily activities that shape our Memory Care and short-term Respite Care community.
                </p>
              </div>

              {/* Direct Category Filter Jump Panel (Rooms, Dining, Common Areas, Outdoor Spaces, Activities) */}
              <div className="herbarium-mount rounded-2xl p-3.5 sm:p-4 bg-[#FCFBF8] space-y-2.5">
                <div className="flex items-center justify-between gap-2 border-b border-[#D8C7A5] pb-2">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#A65D43] font-semibold">
                    Jump to Gallery Category
                  </span>
                  <span className="text-[11px] text-[#29272B]/70 tabular-nums">
                    10 Curated Plates · 05 Categories
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {GALLERY_CATEGORY_META.filter((c) => c.id !== 'All').map((cat) => {
                    const count = GALLERY_PHOTO_PLATES.filter(
                      (p) => p.category === cat.id
                    ).length;
                    const isSelected = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategoryAndScroll(cat.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap ${
                          isSelected
                            ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348]'
                            : 'bg-[#F7F4ED] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span
                          className={`text-[10px] tabular-nums ${
                            isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                          }`}
                        >
                          (0{count})
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="text-[11px] text-[#29272B]/70 leading-snug">
                  <strong className="text-[#3B2348]">Prototype Media Note:</strong> Preview plates use illustrative placeholder photography (<code className="text-[10px] bg-[#D8C7A5]/35 px-1.5 py-0.5 rounded">ILLUSTRATIVE — REPLACE BEFORE LAUNCH</code>) until official Mission Villa photography is supplied.
                </p>
              </div>

              {/* Primary Hero CTAs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('virtual-tour')}
                  className="px-5 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] font-semibold text-xs sm:text-sm hover:bg-[#C98268] transition-all shadow-md cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <Compass className="w-4 h-4 shrink-0 text-[#D8C7A5]" aria-hidden="true" />
                  <span>Explore Virtual Tour Stage</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => setLightboxPlateId(GALLERY_PHOTO_PLATES[0].id)}
                  className="px-4 py-3 rounded-full border border-[#3B2348]/30 bg-[#FCFBF8] text-[#3B2348] font-semibold text-xs sm:text-sm hover:border-[#3B2348] transition cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                  <span>Launch Fullscreen Lightbox</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleNavigateToSection(
                      'schedule-visit',
                      undefined,
                      undefined,
                      'Interested in scheduling an in-person tour after exploring the Gallery & Virtual Tour page.'
                    )
                  }
                  className="px-3 py-2 text-xs sm:text-sm font-semibold text-[#A65D43] hover:text-[#3B2348] underline cursor-pointer whitespace-nowrap"
                >
                  Schedule an In-Person Visit →
                </button>
              </div>
            </div>

            {/* Right 7 Columns: Asymmetric 3-Plate Curatorial Aperture Contact Sheet */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
              {/* Left Focal Arch Plate (6 of 12 internal cols): Dining & Gathering */}
              <div className="sm:col-span-6 arch-portal bento-frame bg-[#22122B] min-h-[300px] sm:min-h-[380px] relative flex flex-col justify-between group">
                <img
                  src={GALLERY_PHOTO_PLATES[1].placeholderImage.src}
                  alt={GALLERY_PHOTO_PLATES[1].placeholderImage.alt}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover mood-grade transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/30 to-transparent" />

                <div className="relative z-10 pt-7 px-5 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setLightboxPlateId(GALLERY_PHOTO_PLATES[1].id)}
                    className="px-3.5 py-1.5 rounded-xl bg-black/55 backdrop-blur-md text-[#F7F4ED] text-[11px] font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                  >
                    <Maximize2 className="w-3 h-3" aria-hidden="true" />
                    <span>Inspect Plate 02 · Dining</span>
                  </button>
                </div>

                <div className="relative z-10 p-5 mt-auto space-y-1 text-[#F7F4ED]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                    {GALLERY_PHOTO_PLATES[1].plateCode} · {GALLERY_PHOTO_PLATES[1].category}
                  </span>
                  <h2 className="font-serif text-lg sm:text-xl font-semibold leading-snug">
                    {GALLERY_PHOTO_PLATES[1].title}
                  </h2>
                  <p className="text-[11px] text-[#F7F4ED]/75">
                    {GALLERY_PHOTO_PLATES[1].subtitle} · Illustrative placeholder
                  </p>
                </div>
              </div>

              {/* Right Stacked Pair (6 of 12 internal cols): Rooms + Outdoor Courtyard */}
              <div className="sm:col-span-6 flex flex-col justify-between gap-4">
                {/* Top Wide Frame: Rooms */}
                <div className="bento-frame bg-[#3B2348] text-[#F7F4ED] min-h-[180px] flex-1 relative flex flex-col justify-between p-4 sm:p-5 group overflow-hidden">
                  <img
                    src={GALLERY_PHOTO_PLATES[0].placeholderImage.src}
                    alt={GALLERY_PHOTO_PLATES[0].placeholderImage.alt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover mood-grade transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/35 to-transparent" />

                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {GALLERY_PHOTO_PLATES[0].plateCode} · Rooms
                    </span>
                    <button
                      type="button"
                      onClick={() => setLightboxPlateId(GALLERY_PHOTO_PLATES[0].id)}
                      aria-label="Inspect Plate 01 Private Suite in lightbox"
                      className="p-2 rounded-xl bg-black/55 hover:bg-[#C98268] text-[#F7F4ED] transition cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="relative z-10 space-y-0.5 mt-auto pt-4">
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-[#F7F4ED]">
                      {GALLERY_PHOTO_PLATES[0].title}
                    </h3>
                    <p className="text-xs text-[#F7F4ED]/80">
                      Private, Companion &amp; Jack &amp; Jill suites with private bathrooms
                    </p>
                  </div>
                </div>

                {/* Bottom Wide Frame: Outdoor Courtyard */}
                <div className="bento-frame bg-[#22122B] text-[#F7F4ED] min-h-[180px] flex-1 relative flex flex-col justify-between p-4 sm:p-5 group overflow-hidden">
                  <img
                    src={GALLERY_PHOTO_PLATES[3].placeholderImage.src}
                    alt={GALLERY_PHOTO_PLATES[3].placeholderImage.alt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover mood-grade transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/35 to-transparent" />

                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FAF78] font-semibold bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {GALLERY_PHOTO_PLATES[3].plateCode} · Outdoor Spaces
                    </span>
                    <button
                      type="button"
                      onClick={() => setLightboxPlateId(GALLERY_PHOTO_PLATES[3].id)}
                      aria-label="Inspect Plate 04 Garden Courtyard in lightbox"
                      className="p-2 rounded-xl bg-black/55 hover:bg-[#C98268] text-[#F7F4ED] transition cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="relative z-10 space-y-0.5 mt-auto pt-4">
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-[#F7F4ED]">
                      {GALLERY_PHOTO_PLATES[3].title}
                    </h3>
                    <p className="text-xs text-[#F7F4ED]/80">
                      Enclosed garden courtyard &amp; sunlit outdoor patio in Daly City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: SOPHISTICATED FULL-WIDTH EDITORIAL MASONRY GALLERY
            Category-based filtering (Rooms, Dining, Common Areas, Outdoor
            Spaces, Activities), alternating aspect ratios, rich photo-caption
            system, and keyboard-accessible lightbox triggers.
        ==================================================================== */}
        <section
          id="editorial-masonry-gallery"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#FCFBF8] grid-line-b"
        >
          {/* Section Header */}
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Curated Photographic Monograph
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Explore Mission Villa by Space &amp; Daily Rhythm
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/80 leading-relaxed pt-1">
                Filter across <strong className="text-[#3B2348]">Rooms</strong>,{' '}
                <strong className="text-[#3B2348]">Dining</strong>,{' '}
                <strong className="text-[#3B2348]">Common Areas</strong>,{' '}
                <strong className="text-[#3B2348]">Outdoor Spaces</strong>, and{' '}
                <strong className="text-[#3B2348]">Activities</strong>. Every plate pairs alternating architectural aspect ratios with detailed captions and keyboard-supported lightbox inspection.
              </p>
            </div>

            {/* Layout Mode Switcher (Editorial Masonry vs Contact Sheet) */}
            <div className="flex items-center gap-2 self-start xl:self-end bg-[#F7F4ED] p-1.5 rounded-2xl border border-[#D8C7A5]">
              <button
                type="button"
                onClick={() => setLayoutMode('editorial-masonry')}
                aria-pressed={layoutMode === 'editorial-masonry'}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap ${
                  layoutMode === 'editorial-masonry'
                    ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Editorial Masonry</span>
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('contact-sheet')}
                aria-pressed={layoutMode === 'contact-sheet'}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap ${
                  layoutMode === 'contact-sheet'
                    ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <Grid className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Contact Sheet Index</span>
              </button>
            </div>
          </div>

          {/* Filter & Search Command Bar */}
          <div className="w-full rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] p-4 sm:p-6 mb-12 space-y-4 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Category Tabs */}
              <div
                role="tablist"
                aria-label="Filter gallery by category"
                className="flex flex-wrap items-center gap-2"
              >
                {GALLERY_CATEGORY_META.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const count =
                    cat.id === 'All'
                      ? GALLERY_PHOTO_PLATES.length
                      : GALLERY_PHOTO_PLATES.filter((p) => p.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer inline-flex items-center gap-2 whitespace-nowrap ${
                        isActive
                          ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                          : 'bg-[#FCFBF8] text-[#3B2348] border border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[11px] tabular-nums ${
                          isActive ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                        }`}
                      >
                        ({count.toString().padStart(2, '0')})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="relative w-full lg:w-72 shrink-0">
                <label htmlFor="gallery-search-input" className="sr-only">
                  Search gallery plates by space or keyword
                </label>
                <Search
                  className="w-4 h-4 text-[#3B2348]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="gallery-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search suites, patio, dining..."
                  className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-xs sm:text-sm text-[#29272B]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear gallery search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#29272B]/60 hover:text-[#3B2348] cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Active Category Description & Result Count */}
            <div className="pt-3 border-t border-[#D8C7A5]/70 flex flex-wrap items-center justify-between gap-2 text-xs text-[#29272B]/80">
              <p>
                <strong className="text-[#3B2348]">{activeCategoryMeta.label}:</strong>{' '}
                {activeCategoryMeta.shortDescription}
              </p>
              <span className="font-semibold text-[#3B2348] tabular-nums">
                Showing {filteredPlates.length} of {GALLERY_PHOTO_PLATES.length} plates
              </span>
            </div>
          </div>

          {/* Empty Filter State */}
          {filteredPlates.length === 0 ? (
            <div className="w-full rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] p-10 text-center space-y-4">
              <p className="font-serif text-2xl text-[#3B2348] font-semibold">
                No gallery plates match “{searchQuery}” in {activeCategoryMeta.label}.
              </p>
              <p className="text-sm text-[#29272B]/75 max-w-lg mx-auto">
                Reset the search filter to browse all 10 visual plates across Rooms, Dining, Common Areas, Outdoor Spaces, and Activities.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer"
              >
                Reset Gallery Filters
              </button>
            </div>
          ) : layoutMode === 'contact-sheet' ? (
            /* COMPACT CONTACT-SHEET INDEX GRID (3-Column High-Density Inspection View) */
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPlates.map((plate) => (
                <article
                  key={plate.id}
                  className="bento-frame bg-[#F7F4ED] border border-[#D8C7A5] flex flex-col justify-between group"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-[#22122B]">
                    <img
                      src={plate.placeholderImage.src}
                      alt={plate.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mood-grade transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/85 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8C7A5] bg-[#3B2348]/90 px-3 py-1 rounded-lg">
                        {plate.plateCode} · {plate.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => setLightboxPlateId(plate.id)}
                        className="px-3 py-1.5 rounded-lg bg-black/60 text-[#F7F4ED] text-[11px] font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center gap-1"
                      >
                        <Maximize2 className="w-3 h-3" aria-hidden="true" />
                        <span>Lightbox</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-[#A65D43] font-semibold block">
                        {plate.spatialContext}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-[#3B2348]">
                        {plate.title}
                      </h3>
                      <p className="text-xs text-[#29272B]/85 leading-relaxed">
                        {plate.editorialCaption}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#D8C7A5] flex items-center justify-between gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setLightboxPlateId(plate.id)}
                        className="font-semibold text-[#3B2348] hover:text-[#C98268] underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Inspect Full Caption</span>
                      </button>
                      <Link
                        href={plate.relatedRoute.href}
                        className="text-[#A65D43] hover:text-[#3B2348] font-medium inline-flex items-center gap-1"
                      >
                        <span>{plate.relatedRoute.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* SOPHISTICATED FULL-WIDTH 12-COLUMN EDITORIAL MASONRY WITH ALTERNATING ASPECT RATIOS & PHOTO-CAPTION SYSTEM */
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {filteredPlates.map((plate, idx) => {
                const isPanoramic = plate.aspectVariant === 'cinematic-panoramic';
                const isArchVariant = plate.aspectVariant === 'portrait-arch';

                return (
                  <article
                    key={plate.id}
                    className={`${
                      activeCategory === 'All' && !searchQuery
                        ? plate.masonrySpan
                        : 'lg:col-span-6'
                    } bento-frame bg-[#F7F4ED] border border-[#D8C7A5] flex flex-col justify-between shadow-sm group`}
                  >
                    {/* Alternating Aspect-Ratio Image Container */}
                    <div
                      className={`${plate.aspectCssClass} ${
                        isArchVariant ? 'rounded-t-[140px]' : ''
                      } relative overflow-hidden bg-[#22122B] flex flex-col justify-between`}
                    >
                      <img
                        src={plate.placeholderImage.src}
                        alt={plate.placeholderImage.alt}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover mood-grade transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/25 to-transparent" />

                      {/* Top Action Bar (Positioned safely inside arch/frame) */}
                      <div
                        className={`relative z-10 ${
                          isArchVariant
                            ? 'pt-7 px-6 justify-center'
                            : 'p-4 sm:p-5 justify-between'
                        } flex flex-wrap items-center gap-2`}
                      >
                        {!isArchVariant && (
                          <span className="text-xs font-semibold text-[#D8C7A5] bg-[#3B2348]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#D8C7A5]/30">
                            {plate.plateCode} · {plate.category}
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => setLightboxPlateId(plate.id)}
                          className="px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center gap-1.5 shadow-md whitespace-nowrap"
                        >
                          <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>
                            {isArchVariant
                              ? `Open ${plate.plateCode} in Lightbox`
                              : 'Open Lightbox'}
                          </span>
                        </button>
                      </div>

                      {/* Bottom Image Overlay Kicker & Headline */}
                      <div className="relative z-10 p-6 sm:p-7 mt-auto text-[#F7F4ED] max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold">
                          <span>{plate.plateCode}</span>
                          <span aria-hidden="true">·</span>
                          <span>{plate.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{plate.subtitle}</span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-1 leading-snug">
                          {plate.title}
                        </h3>
                      </div>

                      {/* Optional Inverted-Radius Cutout on Panoramic or Featured Wide Plates */}
                      {isPanoramic && (
                        <div className="cutout-br-cream hidden md:block">
                          <button
                            type="button"
                            onClick={() => setLightboxPlateId(plate.id)}
                            className="px-5 py-2.5 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold hover:bg-[#C98268] hover:text-white transition cursor-pointer inline-flex items-center gap-1.5"
                          >
                            <Camera className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Inspect Full Panoramic Plate</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Photo-Caption System & Curatorial Details */}
                    <div className="p-6 sm:p-8 bg-[#FCFBF8] flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#29272B]/70 pb-3 border-b border-[#D8C7A5]">
                          <span className="font-semibold text-[#A65D43] uppercase tracking-[0.16em]">
                            {plate.spatialContext}
                          </span>
                          <span className="tabular-nums">
                            Aspect Study {(idx + 1).toString().padStart(2, '0')} ·{' '}
                            {plate.placeholderImage.status}
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                          {plate.editorialCaption}
                        </p>
                      </div>

                      {/* What Families Notice List */}
                      <div className="space-y-2.5 pt-2">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-[#3B2348] font-bold block">
                          What Families Notice in This Space
                        </span>
                        <ul className="space-y-2">
                          {plate.whatFamiliesNotice.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                            >
                              <Check
                                className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Caption Footer: Related Route + Lightbox + Tour Inquiry */}
                      <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-3">
                        <Link
                          href={plate.relatedRoute.href}
                          className="text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition inline-flex items-center gap-1.5"
                        >
                          <span>{plate.relatedRoute.label}</span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </Link>

                        <div className="flex flex-wrap items-center gap-2.5">
                          <button
                            type="button"
                            onClick={() =>
                              handleNavigateToSection(
                                'schedule-visit',
                                undefined,
                                undefined,
                                plate.inquiryPresetNote
                              )
                            }
                            className="px-4 py-2 rounded-full border border-[#3B2348]/30 text-[#3B2348] hover:bg-[#3B2348] hover:text-[#F7F4ED] text-xs font-semibold transition cursor-pointer whitespace-nowrap"
                          >
                            Ask About This Space
                          </button>

                          <button
                            type="button"
                            onClick={() => setLightboxPlateId(plate.id)}
                            className="px-4 py-2 rounded-full bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap"
                          >
                            <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>View in Lightbox</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* ===================================================================
            SECTION 3: DEDICATED VIRTUAL-TOUR EMBED & INTERACTIVE WALKTHROUGH
            Combines a 4-stop guided spatial walkthrough with an explicit
            Official Virtual Tour Embed container (honestly noting client URL
            verification status and offering a live video tour option).
        ==================================================================== */}
        <section
          id="virtual-tour"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#3B2348] text-[#F7F4ED] grid-line-b relative overflow-hidden"
        >
          {/* Section Header & Mode Switcher */}
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-8 mb-12 border-b border-white/15">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#D8C7A5] block">
                Remote &amp; Interactive Exploration
              </span>
              <h2
                className="font-serif section-display text-[#F7F4ED] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Virtual Tour Stage &amp; Guided Community Walkthrough
              </h2>
              <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                Whether your family lives right here in Daly City or is coordinating care from across the Bay Area, step through our 4-stop interactive spatial tour below—or switch to the dedicated{' '}
                <strong className="text-[#D8C7A5]">Official 360° Virtual Tour Embed Stage</strong>{' '}
                to review embed specifications and request a personalized live video walkthrough.
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div
              role="tablist"
              aria-label="Virtual tour stage mode"
              className="inline-flex flex-wrap p-1.5 rounded-2xl bg-[#22122B] border border-[#D8C7A5]/30 gap-1.5 self-start xl:self-end"
            >
              <button
                type="button"
                role="tab"
                aria-selected={tourViewMode === 'guided-walkthrough'}
                onClick={() => setTourViewMode('guided-walkthrough')}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer inline-flex items-center gap-2 whitespace-nowrap ${
                  tourViewMode === 'guided-walkthrough'
                    ? 'bg-[#D8C7A5] text-[#3B2348] shadow-sm'
                    : 'text-[#F7F4ED]/85 hover:bg-white/10'
                }`}
              >
                <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                <span>4-Stop Guided Walkthrough</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={tourViewMode === 'official-embed'}
                onClick={() => setTourViewMode('official-embed')}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer inline-flex items-center gap-2 whitespace-nowrap ${
                  tourViewMode === 'official-embed'
                    ? 'bg-[#D8C7A5] text-[#3B2348] shadow-sm'
                    : 'text-[#F7F4ED]/85 hover:bg-white/10'
                }`}
              >
                <Video className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Official 360° Embed Stage</span>
              </button>
            </div>
          </div>

          {tourViewMode === 'official-embed' ? (
            /* DEDICATED OFFICIAL VIRTUAL-TOUR EMBED STAGE (Honest Pre-Launch Embed Container) */
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-8 rounded-[32px] bg-[#22122B] border-2 border-[#D8C7A5]/40 p-6 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/15">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#8FAF78] font-semibold block">
                      Dedicated Virtual-Tour Embed Mount
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4ED] mt-1">
                      Mission Villa Official 360° Virtual Tour Stage
                    </h3>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-xl bg-[#C98268]/25 border border-[#C98268] text-[#F7F4ED] text-xs font-semibold">
                    Awaiting Verified Official Embed URL
                  </span>
                </div>

                {/* Responsive 16:9 Embed Frame */}
                <div className="rounded-2xl bg-[#3B2348]/55 border border-dashed border-[#D8C7A5]/50 p-6 sm:p-10 space-y-5 my-auto">
                  <div className="flex items-start gap-3.5">
                    <Video
                      className="w-6 h-6 text-[#D8C7A5] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div className="space-y-2">
                      <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4ED]">
                        Ready for Official Virtual Tour Source Integration
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F7F4ED]/85 leading-relaxed">
                        Per project guardrails, this dedicated 16:9 viewport is engineered to host the official interactive tour embed from{' '}
                        <code className="text-[#D8C7A5] bg-black/30 px-1.5 py-0.5 rounded">
                          missionvillaseniorliving.com/gallery/
                        </code>{' '}
                        once the client confirms the active production iframe URL (e.g., Matterport / 360° panoramic player). We never substitute an unverified third-party building’s 360° tour.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                    <div className="p-4 rounded-xl bg-[#22122B]/90 border border-white/10 space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FAF78] font-bold block">
                        Option 01 · Interactive Stops
                      </span>
                      <p className="text-xs text-[#F7F4ED]/90">
                        Use our 4-Stop Guided Walkthrough tab to inspect Common Areas, Dining, Suites, and Outdoor Spaces right now.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#22122B]/90 border border-white/10 space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-bold block">
                        Option 02 · Live Video Tour
                      </span>
                      <p className="text-xs text-[#F7F4ED]/90">
                        Request a real-time video walkthrough with our Daly City team from anywhere.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#22122B]/90 border border-white/10 space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#C98268] font-bold block">
                        Option 03 · In-Person Visit
                      </span>
                      <p className="text-xs text-[#F7F4ED]/90">
                        Schedule an unhurried family tour at 995 East Market Street, Daly City.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setTourViewMode('guided-walkthrough')}
                    className="px-5 py-2.5 rounded-full bg-[#D8C7A5] text-[#3B2348] text-xs font-semibold hover:bg-white transition cursor-pointer inline-flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4" aria-hidden="true" />
                    <span>Return to 4-Stop Guided Walkthrough</span>
                  </button>

                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="text-xs sm:text-sm font-semibold text-[#D8C7A5] hover:underline inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                    <span>Call Desk: {MISSION_VILLA_FACTS.phone.formatted}</span>
                  </a>
                </div>
              </div>

              {/* Right 4 Columns: Request a Personal Video or In-Person Walkthrough Card */}
              <div className="lg:col-span-4 herbarium-mount bg-[#F7F4ED] text-[#29272B] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                    Personalized For Long-Distance &amp; Local Families
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#3B2348]">
                    Request a Live Video Walkthrough or In-Person Tour
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                    Want to see a specific suite layout, peek into the dining room, or ask questions while looking at our enclosed courtyard? Our team at 995 East Market Street can coordinate a personal visit or live video tour.
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {[
                      'Walk through available Private, Companion, or Jack & Jill suites',
                      'See our dining room, lounges, library nook, and courtyard',
                      'Invite out-of-town siblings or relatives to join the conversation',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
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
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigateToSection(
                        'schedule-visit',
                        undefined,
                        undefined,
                        'Requesting a live video walkthrough / personal tour of Mission Villa Senior Living.'
                      )
                    }
                    className="w-full py-3.5 px-5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
                  >
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>Schedule a Personal or Video Tour</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* 4-STOP INTERACTIVE SPATIAL WALKTHROUGH STAGE */
            <div className="w-full space-y-8">
              {/* 4-Stop Selector Rail */}
              <div
                role="tablist"
                aria-label="Select a virtual walkthrough stop"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
              >
                {VIRTUAL_TOUR_STOPS.map((stop) => {
                  const isSelected = stop.id === activeTourStop.id;
                  return (
                    <button
                      key={stop.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveTourStopId(stop.id)}
                      className={`text-left p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-[#F7F4ED] text-[#3B2348] border-[#D8C7A5] shadow-xl'
                          : 'bg-[#22122B]/85 text-[#F7F4ED] border-white/15 hover:border-[#D8C7A5]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-xs uppercase tracking-[0.18em] font-bold ${
                            isSelected ? 'text-[#A65D43]' : 'text-[#8FAF78]'
                          }`}
                        >
                          {stop.stopIndex}
                        </span>
                        <span
                          className={`text-[11px] font-medium ${
                            isSelected ? 'text-[#3B2348]/75' : 'text-[#D8C7A5]'
                          }`}
                        >
                          {stop.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                        {stop.title}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* Active Stop 12-Column Stage */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Left 7 Columns: Visual Viewport */}
                <div className="lg:col-span-7 bento-frame bg-[#22122B] border border-[#D8C7A5]/35 min-h-[360px] sm:min-h-[440px] relative flex flex-col justify-between overflow-hidden">
                  <img
                    src={activeTourStop.placeholderImage.src}
                    alt={activeTourStop.placeholderImage.alt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover mood-grade transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/30 to-transparent" />

                  <div className="relative z-10 p-5 flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3.5 py-1.5 rounded-xl bg-[#3B2348]/90 backdrop-blur-md text-[#D8C7A5] text-xs font-semibold border border-[#D8C7A5]/30">
                      {activeTourStop.stopIndex} of 04 · {activeTourStop.locationLabel}
                    </span>

                    <button
                      type="button"
                      onClick={() => setTourViewMode('official-embed')}
                      className="px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <Video className="w-3.5 h-3.5 text-[#D8C7A5]" aria-hidden="true" />
                      <span>360° Embed Info</span>
                    </button>
                  </div>

                  <div className="relative z-10 p-6 sm:p-8 mt-auto space-y-2 text-[#F7F4ED]">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8FAF78] font-semibold block">
                      Guided Spatial Preview · {activeTourStop.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                      {activeTourStop.title}
                    </h3>
                    <p className="text-[11px] text-[#F7F4ED]/75">
                      Illustrative preview ({activeTourStop.placeholderImage.status}) — schedule a visit to walk this space in person.
                    </p>
                  </div>
                </div>

                {/* Right 5 Columns: Spatial Orientation Notes & Next/Prev Controls */}
                <div className="lg:col-span-5 herbarium-mount bg-[#F7F4ED] text-[#29272B] rounded-[28px] p-6 sm:p-9 flex flex-col justify-between space-y-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-[#D8C7A5] flex items-center justify-between gap-2">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold">
                        {activeTourStop.stopIndex} · Spatial Notes
                      </span>
                      <Link
                        href={activeTourStop.relatedRouteHref}
                        className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline inline-flex items-center gap-1"
                      >
                        <span>{activeTourStop.relatedRouteLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>

                    <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                      {activeTourStop.summary}
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold block">
                        Key Spatial Highlights
                      </span>
                      <ul className="space-y-2">
                        {activeTourStop.spatialHighlights.map((hl) => (
                          <li
                            key={hl}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                          >
                            <Check
                              className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] space-y-1">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-[#A65D43] font-bold block">
                        What to Look For on Your Visit
                      </span>
                      <p className="text-xs sm:text-sm text-[#29272B]/85 italic">
                        “{activeTourStop.whatToLookForInPerson}”
                      </p>
                    </div>
                  </div>

                  {/* Stop Navigation & Tour Request */}
                  <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          const prevIdx =
                            (activeTourStopIndex - 1 + VIRTUAL_TOUR_STOPS.length) %
                            VIRTUAL_TOUR_STOPS.length;
                          setActiveTourStopId(VIRTUAL_TOUR_STOPS[prevIdx].id);
                        }}
                        className="px-3.5 py-2 rounded-full border border-[#3B2348]/30 text-[#3B2348] hover:bg-[#3B2348] hover:text-[#F7F4ED] text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Prev Stop</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const nextIdx =
                            (activeTourStopIndex + 1) % VIRTUAL_TOUR_STOPS.length;
                          setActiveTourStopId(VIRTUAL_TOUR_STOPS[nextIdx].id);
                        }}
                        className="px-3.5 py-2 rounded-full bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1"
                      >
                        <span>Next Stop</span>
                        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleNavigateToSection(
                          'schedule-visit',
                          undefined,
                          undefined,
                          `Interested in seeing ${activeTourStop.title} in person during a visit to 995 East Market Street.`
                        )
                      }
                      className="px-4 py-2 rounded-full bg-[#C98268] text-white hover:bg-[#3B2348] text-xs font-semibold transition cursor-pointer whitespace-nowrap"
                    >
                      Tour This Space in Person →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ===================================================================
            SECTION 4: DIRECT VISIT CTA & VISUAL-TO-CARE ROUTING BRIDGE
            Connects Gallery proof to Suites, Services, Memory Care & Respite Care
        ==================================================================== */}
        <section
          id="gallery-visit-bridge"
          className="w-full py-20 lg:py-24 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2">
              <span className="font-script script-display text-[#C98268] block">
                From Visual Proof to Personal Connection
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Continue Exploring Mission Villa or Plan Your Visit
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#3B2348]/15 lg:pl-8">
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                Photographs offer a helpful first impression, and walking through our suites, dining room, and courtyard in Daly City brings the full warmth of our team and residents to life.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <article className="herbarium-mount rounded-[28px] p-6 sm:p-8 bg-[#FCFBF8] flex flex-col justify-between space-y-5">
              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold block">
                  01 · Accommodations &amp; Layouts
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3B2348]">
                  Suites &amp; Floor Plans
                </h3>
                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  Review our Private Suites, Companion Units, and Jack &amp; Jill suite formats—all featuring private bathrooms and 24-hour staff support.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8C7A5]">
                <Link
                  href="/suites-and-floor-plans"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                >
                  <span>Visit Suites &amp; Floor Plans</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="herbarium-mount rounded-[28px] p-6 sm:p-8 bg-[#FCFBF8] flex flex-col justify-between space-y-5">
              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-[0.18em] text-[#5F7F49] font-bold block">
                  02 · Care Programs
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3B2348]">
                  Memory Care &amp; Respite Care
                </h3>
                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  Learn how our signature Legacies™ Memory Care program and flexible short-term Respite Care stays support both residents and families.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8C7A5] flex flex-wrap items-center gap-4">
                <Link
                  href="/memory-care"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                >
                  <span>Memory Care</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/respite-care"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#A65D43] hover:text-[#3B2348] transition"
                >
                  <span>Respite Care</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="rounded-[28px] p-6 sm:p-8 bg-[#3B2348] text-[#F7F4ED] border border-[#D8C7A5]/30 flex flex-col justify-between space-y-5 shadow-lg">
              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-bold block">
                  03 · Direct Visit CTA
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F4ED]">
                  Tour 995 East Market Street in Person
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/85 leading-relaxed">
                  Meet our care team, see available suites firsthand, and ask about personalized pricing in Daly City.
                </p>
              </div>
              <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="px-5 py-2.5 rounded-full bg-[#C98268] text-white text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5] hover:text-[#3B2348] transition cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Schedule a Visit</span>
                </button>
                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="text-xs font-semibold text-[#D8C7A5] hover:underline"
                >
                  {MISSION_VILLA_FACTS.phone.formatted}
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: SHARED SCHEDULE A VISIT / PRICING INQUIRY (DEMO) + FOOTER
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
          KEYBOARD-ACCESSIBLE FULLSCREEN IMAGE LIGHTBOX MODAL
          Supports Escape, ArrowLeft, ArrowRight, Filmstrip Jump & Inquiry CTA
      ====================================================================== */}
      {activeLightboxPlate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          className="fixed inset-0 z-50 bg-[#22122B]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/15 text-[#F7F4ED]">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold uppercase tracking-[0.2em] text-[#D8C7A5]">
                {activeLightboxPlate.plateCode} of {GALLERY_PHOTO_PLATES.length.toString().padStart(2, '0')}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#8FAF78] font-semibold">
                {activeLightboxPlate.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#F7F4ED]/75 hidden sm:inline">
                Use ← / → Arrow Keys to Browse or ESC to Close
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  const prevIdx =
                    (lightboxIndex - 1 + GALLERY_PHOTO_PLATES.length) %
                    GALLERY_PHOTO_PLATES.length;
                  setLightboxPlateId(GALLERY_PHOTO_PLATES[prevIdx].id);
                }}
                aria-label="Previous gallery plate"
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#D8C7A5] text-[#F7F4ED] hover:text-[#3B2348] text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const nextIdx = (lightboxIndex + 1) % GALLERY_PHOTO_PLATES.length;
                  setLightboxPlateId(GALLERY_PHOTO_PLATES[nextIdx].id);
                }}
                aria-label="Next gallery plate"
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#D8C7A5] text-[#F7F4ED] hover:text-[#3B2348] text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => setLightboxPlateId(null)}
                aria-label="Close gallery lightbox"
                className="px-4 py-2 rounded-xl bg-[#C98268] hover:bg-white text-white hover:text-[#3B2348] text-xs font-semibold transition cursor-pointer inline-flex items-center gap-1.5"
              >
                <X className="w-4 h-4" aria-hidden="true" />
                <span>Close (ESC)</span>
              </button>
            </div>
          </div>

          {/* Center 12-Column Lightbox Image & Photo-Caption Drawer */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-6">
            {/* Left 8 Columns: High-Resolution Image Frame */}
            <div className="lg:col-span-8 rounded-[28px] overflow-hidden bg-black/40 border border-white/15 relative">
              <img
                src={activeLightboxPlate.placeholderImage.src}
                alt={activeLightboxPlate.placeholderImage.alt}
                referrerPolicy="no-referrer"
                className="w-full max-h-[58vh] object-cover mood-grade"
              />
              <div className="p-4 bg-[#22122B]/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#D8C7A5]">
                <span>
                  Status: <strong>{activeLightboxPlate.placeholderImage.status}</strong>
                </span>
                <span className="text-[#F7F4ED]/75">
                  {activeLightboxPlate.placeholderImage.assetReplacementNote}
                </span>
              </div>
            </div>

            {/* Right 4 Columns: Complete Curatorial Caption & Tour Action */}
            <div className="lg:col-span-4 rounded-[28px] bg-[#3B2348] border border-[#D8C7A5]/30 p-6 sm:p-7 text-[#F7F4ED] space-y-5">
              <div className="space-y-2 border-b border-white/15 pb-4">
                <span className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                  {activeLightboxPlate.plateCode} · {activeLightboxPlate.category}
                </span>
                <h2
                  id="gallery-lightbox-title"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4ED]"
                >
                  {activeLightboxPlate.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.16em] text-[#8FAF78] font-medium">
                  {activeLightboxPlate.spatialContext}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#F7F4ED]/90 leading-relaxed">
                {activeLightboxPlate.editorialCaption}
              </p>

              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#D8C7A5] font-bold block">
                  What Families Notice Here
                </span>
                <ul className="space-y-2">
                  {activeLightboxPlate.whatFamiliesNotice.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-[#F7F4ED]/90"
                    >
                      <Check
                        className="w-4 h-4 text-[#8FAF78] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const note = activeLightboxPlate.inquiryPresetNote;
                    setLightboxPlateId(null);
                    handleNavigateToSection('schedule-visit', undefined, undefined, note);
                  }}
                  className="w-full py-3 px-4 rounded-full bg-[#C98268] hover:bg-[#D8C7A5] text-white hover:text-[#3B2348] text-xs font-semibold transition cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Ask About This Space on Your Tour</span>
                </button>

                <Link
                  href={activeLightboxPlate.relatedRoute.href}
                  onClick={() => setLightboxPlateId(null)}
                  className="w-full py-2.5 px-4 rounded-full border border-[#D8C7A5]/40 text-[#D8C7A5] hover:bg-white/10 text-xs font-semibold transition text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>{activeLightboxPlate.relatedRoute.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Filmstrip Selector */}
          <div className="w-full pt-4 border-t border-white/15 flex items-center gap-2.5 overflow-x-auto pb-1">
            {GALLERY_PHOTO_PLATES.map((plate) => {
              const isSelected = plate.id === activeLightboxPlate.id;
              return (
                <button
                  key={plate.id}
                  type="button"
                  onClick={() => setLightboxPlateId(plate.id)}
                  className={`px-3.5 py-2 rounded-xl text-left shrink-0 transition cursor-pointer border ${
                    isSelected
                      ? 'bg-[#D8C7A5] text-[#3B2348] border-[#D8C7A5] font-bold'
                      : 'bg-white/5 text-[#F7F4ED]/80 border-white/15 hover:border-[#D8C7A5]/60'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider block">
                    {plate.plateCode} · {plate.category}
                  </span>
                  <span className="text-xs font-serif block truncate max-w-[160px]">
                    {plate.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
