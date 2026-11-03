'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Phone,
  Check,
  Utensils,
  Sparkles,
  Sun,
  Users,
  Compass,
  Calendar,
  Info,
  Camera,
  HeartHandshake,
  Music,
  Trees,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  LIFESTYLE_STORY_CHAPTERS,
  CURATED_DAY_ILLUSTRATION,
  EDITORIAL_GALLERY_BAND_PLATES,
  LIFESTYLE_SERVICES_PREVIEW,
  type DayInTheLifeMoment,
  type EditorialGalleryPlate,
} from '@/lib/mission-villa-data';

export default function LifeAtMissionVillaPage() {
  const prefersReducedMotion = useReducedMotion();
  const [fontScale, setFontScale] = useState<number>(1);
  const [activeDayWindowId, setActiveDayWindowId] =
    useState<DayInTheLifeMoment['id']>('morning-table');
  const [showAllDayWindows, setShowAllDayWindows] = useState<boolean>(false);
  const [galleryCategoryFilter, setGalleryCategoryFilter] = useState<
    'All' | EditorialGalleryPlate['category']
  >('All');
  const [selectedPlateId, setSelectedPlateId] = useState<string>(
    EDITORIAL_GALLERY_BAND_PLATES[0].id
  );
  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >(null);

  const handleFontScaleChange = (scale: number) => {
    setFontScale(scale);
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--font-scale', String(scale));
    }
  };

  const handleNavigateToSection = (
    sectionId: string,
    presetCare?: 'Memory Care' | 'Respite Care'
  ) => {
    if (presetCare) {
      setPresetCareOption(presetCare);
    }
    if (typeof document !== 'undefined') {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const activeDayIndex = Math.max(
    0,
    CURATED_DAY_ILLUSTRATION.findIndex((item) => item.id === activeDayWindowId)
  );
  const activeDayMoment =
    CURATED_DAY_ILLUSTRATION[activeDayIndex] || CURATED_DAY_ILLUSTRATION[0];

  const filteredGalleryPlates =
    galleryCategoryFilter === 'All'
      ? EDITORIAL_GALLERY_BAND_PLATES
      : EDITORIAL_GALLERY_BAND_PLATES.filter(
          (plate) => plate.category === galleryCategoryFilter
        );

  const activeGalleryPlate =
    filteredGalleryPlates.find((p) => p.id === selectedPlateId) ||
    filteredGalleryPlates[0] ||
    EDITORIAL_GALLERY_BAND_PLATES[0];

  const fadeUpProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
      };

  const chapterIcons = {
    dining: Utensils,
    activities: Music,
    spaces: Trees,
    'family-connection': HeartHandshake,
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F7F4ED] text-[#29272B]">
      {/* Shared Utility Bar & Sticky Navigation (No Shutter Replay on Interior Pages) */}
      <HeaderAndUtilityBar
        fontScale={fontScale}
        onChangeFontScale={handleFontScaleChange}
        onNavigateToSection={handleNavigateToSection}
      />

      <main className="w-full flex-1">
        {/* ===================================================================
            SECTION 1: IMMERSIVE EDITORIAL LIFESTYLE HERO
            Complete First-Screen Composition (100svh - 104px on Desktop)
            Asymmetric 6/6 Split with Oversized Bento Stage + Herbarium Arch Inset
        ==================================================================== */}
        <section
          id="top"
          className="w-full py-6 lg:py-6 lg:min-h-[calc(100svh-104px)] flex items-center fluid-canvas grid-line-b paper-texture relative overflow-hidden"
        >
          <div className="dappled-sunlight absolute inset-0" aria-hidden="true" />

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch relative z-10">
            {/* Left 6 Columns: Breadcrumb, Editorial Lifestyle H1, Narrative & 4-Chapter Index */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-6 flex flex-col justify-between py-1 space-y-6"
            >
              {/* Breadcrumb & Daly City Context */}
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-xs text-[#29272B]/75"
              >
                <Link
                  href="/"
                  className="hover:text-[#3B2348] underline decoration-[#D8C7A5] font-medium"
                >
                  Home
                </Link>
                <span aria-hidden="true">·</span>
                <span className="text-[#3B2348] font-semibold" aria-current="page">
                  Life at Mission Villa
                </span>
                <span className="hidden sm:inline text-[#29272B]/40" aria-hidden="true">
                  |
                </span>
                <span className="hidden sm:inline text-[#5F7F49] font-medium">
                  Daily Culture &amp; Belonging · Daly City, CA
                </span>
              </nav>

              {/* Main Editorial Headline & Supporting Copy */}
              <div className="space-y-4 my-auto">
                <div>
                  <span className="font-script script-display text-[#C98268] block">
                    Daily Culture · Warmth · Belonging
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#3B2348]/85 font-semibold block mt-0.5">
                    Community Life at 995 East Market Street · Daly City, California
                  </span>
                </div>

                <h1
                  className="font-serif editorial-h1 text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Where Every Day Feels Familiar, Connected, and{' '}
                  <span className="italic font-normal text-[#C98268]">
                    Lived With Purpose.
                  </span>
                </h1>

                <p className="text-[#29272B]/90 text-sm sm:text-base xl:text-[17px] leading-relaxed max-w-[62ch]">
                  At <strong>{MISSION_VILLA_FACTS.name}</strong>, community life is shaped around human warmth rather than institutional routine. From chef-prepared meals shared at a welcoming table to creative art, tabletop games, gentle fitness, live entertainment, scenic Peninsula drives, and peaceful afternoons in our garden courtyard, every day invites genuine belonging for residents and visiting families alike.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="px-6 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] font-semibold text-xs sm:text-sm hover:bg-[#C98268] transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <span>{MISSION_VILLA_FACTS.primaryCtas.scheduleVisit}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('story-chapters')}
                    className="px-5 py-3.5 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] text-[#3B2348] font-semibold text-xs sm:text-sm hover:border-[#3B2348] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Explore the 4 Lifestyle Chapters
                  </button>

                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                    <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
                  </a>
                </div>
              </div>

              {/* Bottom 4-Chapter Interactive Cultural Jump Ledger */}
              <div className="herbarium-mount p-4 sm:p-5 rounded-2xl">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#A65D43] font-bold mb-3">
                  <span>Four Chapters of Daily Belonging</span>
                  <span className="text-[#5F7F49]">Select a Chapter to Jump ↓</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'dining', tag: '01 · Dining', label: 'Shared Table' },
                    { id: 'activities', tag: '02 · Activities', label: 'Life Enrichment' },
                    { id: 'spaces', tag: '03 · Spaces', label: 'Garden & Lounges' },
                    { id: 'family-connection', tag: '04 · Family', label: 'Family Visits' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigateToSection(`chapter-${item.id}`)}
                      className="text-left p-2.5 rounded-xl bg-[#F7F4ED] hover:bg-[#3B2348] text-[#3B2348] hover:text-[#F7F4ED] border border-[#D8C7A5] transition-colors cursor-pointer group"
                    >
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#A65D43] group-hover:text-[#D8C7A5] block">
                        {item.tag}
                      </span>
                      <span className="font-serif text-xs sm:text-sm font-semibold block mt-0.5 whitespace-nowrap truncate">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right 6 Columns: Layered Oversized Lifestyle Stage with Botanical Arch Vignette */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-6 relative flex flex-col justify-between min-h-[430px] sm:min-h-[500px] lg:min-h-0"
            >
              <div className="bento-frame w-full h-[450px] sm:h-[520px] lg:h-full max-h-[630px] relative shadow-2xl border border-[#D8C7A5] bg-[#3B2348] group flex flex-col justify-between">
                {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                  alt="Illustrative placeholder: Warm, sunlit residential living and social gathering space at Mission Villa"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center mood-grade group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/35 to-transparent" />

                {/* Top-Left Inverted-Radius Cutout */}
                <div className="cutout-tl-cream">
                  <span className="inline-block px-4 py-2 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold tracking-wider uppercase">
                    Monograph III · Life at Mission Villa
                  </span>
                </div>

                {/* Floating Botanical Arch Vignette (Top-Right on Tablet/Desktop) */}
                <div className="hidden sm:flex flex-col items-end p-5 ml-auto relative z-10">
                  <div className="w-40 xl:w-44 p-2 rounded-t-[110px] rounded-b-2xl bg-[#FCFBF8]/95 border border-[#D8C7A5] shadow-xl">
                    <div className="arch-portal h-36 xl:h-40 w-full bg-[#22122B] relative">
                      <img
                        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
                        alt="Illustrative placeholder: Peaceful garden courtyard greenery and sunlit patio setting"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover mood-grade"
                      />
                    </div>
                    <div className="pt-2 px-1.5 pb-1 text-center">
                      <span className="block font-serif text-[11px] font-semibold text-[#3B2348] leading-tight">
                        Courtyard &amp; Patio Air
                      </span>
                      <span className="block text-[9px] text-[#29272B]/70 mt-0.5">
                        Indoor &amp; Outdoor Living
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Narrative & Quick Action */}
                <div className="relative z-10 p-6 sm:p-7 mt-auto text-[#F7F4ED] space-y-3.5">
                  <div className="space-y-1.5 max-w-xl">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#8FAF78] font-semibold block">
                      Shared Table · Activities · Garden Courtyard · Family Visits
                    </span>
                    <p className="font-serif text-sm sm:text-base xl:text-lg italic leading-snug">
                      “From freshly prepared meals in our dining room to music, art, scenic drives, and unhurried visits with family, life here honors who each resident is.”
                    </p>
                    <p className="text-[10px] text-[#F7F4ED]/70">
                      Illustrative placeholder photography · Replace with official Mission Villa photography before launch
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleNavigateToSection('day-in-the-life')}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FCFBF8]/95 hover:bg-[#D8C7A5] text-[#3B2348] text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <span>Explore a Day in the Life</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNavigateToSection('editorial-gallery-band')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-[#F7F4ED] text-xs font-medium transition-colors cursor-pointer"
                      >
                        <Camera className="w-3.5 h-3.5 text-[#D8C7A5]" aria-hidden="true" />
                        <span>Gallery Band</span>
                      </button>
                    </div>

                    <span className="text-[11px] text-[#D8C7A5] font-medium">
                      Daly City · CA License #{MISSION_VILLA_FACTS.licenseNumber}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            FULL-WIDTH NARRATIVE RIBBON
            Grounding Daily Culture Across Memory Care & Short-Term Respite Stays
        ==================================================================== */}
        <div className="w-full bg-[#3B2348] text-[#F7F4ED] py-5 fluid-canvas border-b border-[#D8C7A5]/20">
          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-[#8FAF78] font-semibold uppercase tracking-[0.18em] text-xs">
                Belonging Over Clinical Routine
              </span>
              <span className="hidden sm:inline text-white/30" aria-hidden="true">
                ·
              </span>
              <span className="font-serif italic text-sm sm:text-base text-[#F7F4ED]">
                “Whether living with us full-time in Memory Care or visiting for a short-term Respite stay, every resident is welcomed into the full warmth of our house.”
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#D8C7A5]">
              <span>Chef-Prepared Meals</span>
              <span aria-hidden="true">·</span>
              <span>Games, Art, Fitness &amp; Scenic Drives</span>
              <span aria-hidden="true">·</span>
              <span>Garden Courtyard &amp; Patio</span>
            </div>
          </div>
        </div>

        {/* ===================================================================
            SECTION 2: FOUR PHOTO-LED STORY CHAPTERS
            Visual Signature: Oversized Alternating Image Compositions
            (Chapter I: Dining / Chapter II: Activities / Chapter III: Spaces / Chapter IV: Family Connection)
        ==================================================================== */}
        <section
          id="story-chapters"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          {/* Section Header + Quick Chapter Navigation Bar */}
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#3B2348]/15">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Four Chapters of Daily Life
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                A Culture of Nourishment, Purpose, Sanctuary &amp; Family
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {LIFESTYLE_STORY_CHAPTERS.map((chap, idx) => (
                <button
                  key={chap.id}
                  type="button"
                  onClick={() => handleNavigateToSection(`chapter-${chap.id}`)}
                  className="px-4 py-2.5 rounded-full bg-[#F7F4ED] hover:bg-[#3B2348] text-[#3B2348] hover:text-[#F7F4ED] border border-[#D8C7A5] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  0{idx + 1} · {chap.kicker}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Oversized Alternating 12-Column Editorial Spreads */}
          <div className="w-full space-y-20 lg:space-y-28">
            {LIFESTYLE_STORY_CHAPTERS.map((chapter, idx) => {
              const isReversed = idx % 2 === 1;
              const ChapterIcon = chapterIcons[chapter.id] || Sparkles;

              return (
                <motion.article
                  key={chapter.id}
                  id={`chapter-${chapter.id}`}
                  {...fadeUpProps}
                  className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-stretch scroll-mt-28"
                >
                  {/* Oversized Photographic Composition Column (7 of 12 Columns) */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between space-y-5 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="bento-frame w-full min-h-[380px] sm:min-h-[480px] lg:h-full relative bg-[#3B2348] border border-[#D8C7A5] shadow-xl group flex flex-col justify-between">
                      {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                      <img
                        src={chapter.primaryImage.src}
                        alt={chapter.primaryImage.alt}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover mood-grade group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/92 via-[#22122B]/25 to-transparent" />

                      {/* Surgical Inverted-Radius Corner Cutout */}
                      <div className={chapter.cutoutPosition}>
                        <span
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider uppercase ${
                            idx % 2 === 0
                              ? 'bg-[#3B2348] text-[#D8C7A5]'
                              : 'bg-[#8FAF78] text-[#22122B]'
                          }`}
                        >
                          <ChapterIcon className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>
                            {chapter.chapterNumber} · {chapter.kicker}
                          </span>
                        </span>
                      </div>

                      {/* Bottom Image Caption & Inset Herbarium Annotation */}
                      <div className="relative z-10 p-6 sm:p-8 mt-auto grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                        <div className="sm:col-span-7 text-[#F7F4ED] space-y-1">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                            Fig. 0{idx + 1} · {chapter.kicker}
                          </span>
                          <p className="font-serif italic text-base sm:text-lg leading-snug">
                            “{chapter.primaryImage.caption}”
                          </p>
                          <p className="text-[10px] text-[#F7F4ED]/70">
                            Illustrative placeholder photography — replace before launch
                          </p>
                        </div>

                        <div className="sm:col-span-5 p-4 rounded-2xl bg-[#FCFBF8]/95 text-[#29272B] border border-[#D8C7A5] shadow-lg space-y-1">
                          <span className="text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-bold block">
                            {chapter.insetNote.heading}
                          </span>
                          <p className="text-xs text-[#29272B]/85 leading-relaxed">
                            {chapter.insetNote.body}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3 Signature Experience Strip Below Oversized Image */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {chapter.signatureExperiences.map((exp, expIdx) => (
                        <div
                          key={exp.label}
                          className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-1"
                        >
                          <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F7F49] font-bold block">
                            0{idx + 1}.0{expIdx + 1} · Highlight
                          </span>
                          <h4 className="font-serif text-sm font-bold text-[#3B2348]">
                            {exp.label}
                          </h4>
                          <p className="text-xs text-[#29272B]/80 leading-relaxed">
                            {exp.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Curatorial Monograph Narrative Column (5 of 12 Columns) */}
                  <div
                    className={`lg:col-span-5 herbarium-mount rounded-[32px] p-7 sm:p-10 lg:p-11 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2 border-b border-[#D8C7A5] pb-3.5">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-bold">
                          {chapter.chapterNumber} · {chapter.kicker}
                        </span>
                        <span className="text-xs font-serif italic text-[#5F7F49]">
                          Life at Mission Villa
                        </span>
                      </div>

                      <h3
                        className="font-serif text-2xl sm:text-3xl xl:text-4xl font-semibold text-[#3B2348] leading-tight"
                        style={{ textWrap: 'balance' }}
                      >
                        {chapter.title}
                      </h3>

                      <p className="font-serif italic text-base sm:text-lg text-[#A65D43]">
                        {chapter.subtitle}
                      </p>

                      {/* Editorial Prose with Subtle Initial Drop Cap */}
                      <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#3B2348] first-letter:float-left first-letter:mr-2.5 first-letter:leading-none">
                        {chapter.leadParagraph}
                      </p>

                      <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                        {chapter.secondaryParagraph}
                      </p>
                    </div>

                    {/* Editorial Pull Quote with Top & Bottom Hairline Rules (No Thick Left Border) */}
                    <blockquote className="py-4 border-y border-[#D8C7A5] font-serif italic text-base sm:text-lg text-[#3B2348] leading-relaxed">
                      “{chapter.pullQuote}”
                    </blockquote>

                    {/* What Families & Residents Notice Checklist */}
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                        What This Looks Like in Daily Life
                      </h4>
                      <ul className="space-y-2.5">
                        {chapter.communityHighlights.map((highlight) => (
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
                    </div>

                    {/* Contextual Chapter Footer Action */}
                    <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-[#29272B]/70">
                        Experience {chapter.kicker.toLowerCase()} in person
                      </span>
                      <button
                        type="button"
                        onClick={() => handleNavigateToSection('schedule-visit')}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition-colors cursor-pointer"
                      >
                        <span>Plan a Family Visit</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: CURATED DAY-IN-THE-LIFE ILLUSTRATION
            Explicitly Labeled as an Illustrative Rhythm, NOT a Fixed Timetable
        ==================================================================== */}
        <section
          id="day-in-the-life"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F7F4ED] paper-texture"
        >
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Gentle Daily Rhythm
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                A Curated Day-in-the-Life Illustration
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed max-w-[65ch]">
                Every resident brings lifelong habits, personal preferences, and changing energy levels. Rather than enforcing a rigid institutional clock, our team guides each day through comforting, recognizable windows of nourishment, activity, and rest.
              </p>
            </div>

            {/* Required Blueprint Disclaimer + View Mode Toggle */}
            <div className="flex flex-col sm:flex-row xl:flex-col items-start sm:items-center xl:items-end gap-3 shrink-0">
              <div className="px-4 py-2.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] text-xs text-[#3B2348] font-medium flex items-center gap-2">
                <Info className="w-4 h-4 text-[#A65D43] shrink-0" aria-hidden="true" />
                <span>
                  <strong>Illustrative Rhythm Only:</strong> Not a fixed timetable — daily life adapts to each resident.
                </span>
              </div>

              <button
                type="button"
                onClick={() => setShowAllDayWindows((prev) => !prev)}
                className="px-4 py-2 rounded-full bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                {showAllDayWindows
                  ? 'Switch to Interactive Rhythm Explorer'
                  : 'View All 5 Rhythm Windows Together'}
              </button>
            </div>
          </div>

          {/* 5-Window Horizontal Rhythm Selector Rail */}
          <div
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10"
            role="tablist"
            aria-label="Curated day-in-the-life rhythm windows"
          >
            {CURATED_DAY_ILLUSTRATION.map((moment, index) => {
              const isSelected = moment.id === activeDayWindowId && !showAllDayWindows;
              return (
                <button
                  key={moment.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setShowAllDayWindows(false);
                    setActiveDayWindowId(moment.id);
                  }}
                  className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2.5 ${
                    isSelected
                      ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-lg'
                      : 'bg-[#FCFBF8] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isSelected ? 'text-[#8FAF78]' : 'text-[#A65D43]'
                      }`}
                    >
                      Window {moment.windowIndex}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        isSelected ? 'text-[#D8C7A5]' : 'text-[#29272B]/65'
                      }`}
                    >
                      {moment.timeOfDayLabel}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug">
                      {moment.rhythmTheme}
                    </h3>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[11px]">
                    <span className={isSelected ? 'text-[#D8C7A5]' : 'text-[#5F7F49]'}>
                      {isSelected ? 'Viewing Window' : `Explore 0${index + 1} →`}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {showAllDayWindows ? (
            /* Expanded All-5-Windows Overview Ledger */
            <div className="w-full space-y-6">
              {CURATED_DAY_ILLUSTRATION.map((moment) => (
                <article
                  key={moment.id}
                  className="herbarium-mount rounded-[28px] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-4 h-60 rounded-2xl overflow-hidden bg-[#22122B] relative">
                    <img
                      src={moment.placeholderImage.src}
                      alt={moment.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mood-grade"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-[#3B2348]/90 text-[#D8C7A5] text-xs font-semibold">
                      {moment.windowIndex} · {moment.timeOfDayLabel}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold">
                        {moment.rhythmTheme}
                      </span>
                      <span className="text-xs text-[#5F7F49] font-medium">
                        Illustrative Rhythm · Not a Fixed Timetable
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#3B2348]">
                      {moment.title}
                    </h3>
                    <p className="text-sm text-[#29272B]/85 leading-relaxed">
                      {moment.narrative}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                      {moment.residentChoices.map((choice) => (
                        <li
                          key={choice}
                          className="p-3 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] text-xs text-[#29272B]/90 flex items-start gap-2"
                        >
                          <Check className="w-3.5 h-3.5 text-[#5F7F49] shrink-0 mt-0.5" />
                          <span>{choice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Interactive Single-Window Spotlight Stage */
            <div className="w-full herbarium-mount rounded-[32px] p-6 sm:p-10 lg:p-12">
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Left 7 Columns: Active Rhythm Window Narrative & Choices */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8C7A5] pb-4">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-bold">
                        Window {activeDayMoment.windowIndex} of 05 ·{' '}
                        {activeDayMoment.timeOfDayLabel}
                      </span>
                      <span className="text-xs font-semibold text-[#5F7F49]">
                        {activeDayMoment.rhythmTheme}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B2348] leading-tight">
                      {activeDayMoment.title}
                    </h3>

                    <p className="font-serif italic text-base sm:text-lg text-[#A65D43]">
                      {activeDayMoment.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                      {activeDayMoment.narrative}
                    </p>
                  </div>

                  {/* Resident Choices & Sensory Touchpoints */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
                    <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-3">
                      <h4 className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                        Personal Pace &amp; Choices
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-[#29272B]/90">
                        {activeDayMoment.residentChoices.map((choice) => (
                          <li key={choice} className="flex items-start gap-2">
                            <Check
                              className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{choice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-3 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <h4 className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold">
                          Atmosphere &amp; Touchpoints
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#3B2348] font-serif italic">
                          {activeDayMoment.sensoryTouchpoints.map((tp) => (
                            <li key={tp}>“{tp}”</li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-[11px] text-[#29272B]/70 pt-3 border-t border-[#D8C7A5]/70">
                        {activeDayMoment.illustrationDisclaimer}
                      </p>
                    </div>
                  </div>

                  {/* Previous / Next Window Controls */}
                  <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          const prevIdx =
                            (activeDayIndex - 1 + CURATED_DAY_ILLUSTRATION.length) %
                            CURATED_DAY_ILLUSTRATION.length;
                          setActiveDayWindowId(CURATED_DAY_ILLUSTRATION[prevIdx].id);
                        }}
                        className="px-4 py-2.5 rounded-full border border-[#3B2348]/30 text-[#3B2348] hover:bg-[#3B2348] hover:text-[#F7F4ED] text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Previous Window</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const nextIdx =
                            (activeDayIndex + 1) % CURATED_DAY_ILLUSTRATION.length;
                          setActiveDayWindowId(CURATED_DAY_ILLUSTRATION[nextIdx].id);
                        }}
                        className="px-4 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>Next Window</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleNavigateToSection('schedule-visit')}
                      className="text-xs sm:text-sm font-semibold text-[#A65D43] hover:text-[#3B2348] underline cursor-pointer"
                    >
                      Ask for a Sample Monthly Activity Calendar →
                    </button>
                  </div>
                </div>

                {/* Right 5 Columns: Botanical Arch Visual Frame */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="arch-portal w-full h-[360px] sm:h-[420px] lg:h-full min-h-[360px] bg-[#22122B] relative border border-[#D8C7A5] shadow-xl overflow-hidden flex flex-col justify-end">
                    <img
                      src={activeDayMoment.placeholderImage.src}
                      alt={activeDayMoment.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover mood-grade transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/25 to-transparent" />

                    <div className="relative z-10 p-6 sm:p-7 text-[#F7F4ED] space-y-1.5">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                        {activeDayMoment.timeOfDayLabel} · {activeDayMoment.rhythmTheme}
                      </span>
                      <p className="font-serif italic text-base sm:text-lg leading-snug">
                        “{activeDayMoment.placeholderImage.caption}”
                      </p>
                      <p className="text-[10px] text-[#F7F4ED]/70">
                        Illustrative placeholder photography ({activeDayMoment.placeholderImage.status})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ===================================================================
            SECTION 4: HORIZONTAL EDITORIAL GALLERY BAND (VISUAL SIGNATURE)
            Deep Plum Curatorial Filmstrip + Interactive Plate Inspector
        ==================================================================== */}
        <section
          id="editorial-gallery-band"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#3B2348] text-[#F7F4ED] relative overflow-hidden"
        >
          {/* Gallery Band Header & Category Filter */}
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/15">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#D8C7A5] block">
                Visual Monograph · Community Scenes
              </span>
              <h2
                className="font-serif section-display text-[#F7F4ED] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Horizontal Editorial Gallery Band
              </h2>
              <p className="text-sm sm:text-base text-[#F7F4ED]/80 leading-relaxed max-w-[62ch]">
                Explore the atmosphere of daily life at Mission Villa—from shared meals and creative sessions to sunlit garden patios and warm family visits. Select any plate below to inspect its curatorial notes.
              </p>
            </div>

            {/* Interactive Category Filter Buttons */}
            <div
              className="flex flex-wrap items-center gap-2 bg-white/10 p-1.5 rounded-2xl self-start xl:self-end"
              role="group"
              aria-label="Filter gallery plates by lifestyle category"
            >
              {(
                [
                  'All',
                  'Dining & Table',
                  'Activities & Outings',
                  'Garden & Spaces',
                  'Family & Belonging',
                ] as const
              ).map((cat) => {
                const isActive = galleryCategoryFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setGalleryCategoryFilter(cat);
                      const matching =
                        cat === 'All'
                          ? EDITORIAL_GALLERY_BAND_PLATES
                          : EDITORIAL_GALLERY_BAND_PLATES.filter((p) => p.category === cat);
                      if (matching.length > 0) {
                        setSelectedPlateId(matching[0].id);
                      }
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#D8C7A5] text-[#3B2348]'
                        : 'text-[#F7F4ED]/85 hover:bg-white/10'
                    }`}
                  >
                    {cat === 'All' ? 'All Plates (05)' : cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Horizontal Editorial Gallery Band — Scrollable / Interactive Filmstrip */}
          <div
            className="w-full flex flex-col lg:flex-row gap-5 overflow-x-auto pb-4 mb-10 snap-x"
            role="region"
            aria-label="Horizontal editorial gallery filmstrip"
          >
            {filteredGalleryPlates.map((plate) => {
              const isSelected = plate.id === activeGalleryPlate.id;
              return (
                <button
                  key={plate.id}
                  type="button"
                  onClick={() => setSelectedPlateId(plate.id)}
                  className={`text-left group rounded-[28px] overflow-hidden border transition-all cursor-pointer shrink-0 w-full lg:w-[360px] xl:w-[400px] snap-start flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#22122B] border-[#D8C7A5] ring-2 ring-[#D8C7A5]/60 shadow-2xl'
                      : 'bg-[#22122B]/70 border-white/15 hover:border-[#D8C7A5]/60'
                  }`}
                >
                  <div className="h-56 sm:h-64 w-full relative overflow-hidden bg-[#22122B]">
                    <img
                      src={plate.placeholderImage.src}
                      alt={plate.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mood-grade group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B] via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-xl bg-[#3B2348]/90 text-[#D8C7A5] text-[11px] font-semibold uppercase tracking-wider">
                        {plate.plateNumber}
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-black/50 text-[#8FAF78] text-[11px] font-medium">
                        {plate.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                        {plate.locationContext}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-[#F7F4ED]">
                        {plate.title}
                      </h3>
                      <p className="text-xs text-[#F7F4ED]/80 leading-relaxed line-clamp-2">
                        {plate.caption}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#D8C7A5]">
                      <span>{isSelected ? 'Selected in Plate Viewer' : 'Inspect Plate →'}</span>
                      <span className="text-[#F7F4ED]/55">Illustrative Placeholder</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Plate Spotlight Viewer */}
          <div className="w-full rounded-[32px] bg-[#22122B] border border-[#D8C7A5]/30 p-6 sm:p-9 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 bento-frame h-[300px] sm:h-[380px] relative bg-[#3B2348] border border-white/15">
              <img
                src={activeGalleryPlate.placeholderImage.src}
                alt={activeGalleryPlate.placeholderImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover mood-grade"
              />
              <div className="cutout-br-plum hidden sm:block">
                <span className="inline-block px-4 py-2 rounded-2xl bg-[#D8C7A5] text-[#3B2348] text-xs font-bold uppercase tracking-wider">
                  {activeGalleryPlate.plateNumber} · {activeGalleryPlate.category}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#8FAF78] font-semibold">
                <span>Active Gallery Plate</span>
                <span>{activeGalleryPlate.plateNumber} of 05</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F4ED]">
                {activeGalleryPlate.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5]">
                {activeGalleryPlate.locationContext}
              </p>
              <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                {activeGalleryPlate.caption}
              </p>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#D8C7A5]/90">
                <strong>Photography Note:</strong> Current preview uses illustrative placeholder imagery ({activeGalleryPlate.placeholderImage.status}). Official Mission Villa photography and virtual tour media will be integrated in the Gallery &amp; Virtual Tour collection.
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="px-5 py-3 rounded-full bg-[#C98268] text-white text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5] hover:text-[#3B2348] transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Tour Our Spaces in Person</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: STRONG SERVICES, GALLERY & CARE OPTIONS BRIDGE
            Connecting Daily Lifestyle to Services, Amenities, Memory Care & Respite Care
        ==================================================================== */}
        <section
          id="services-and-gallery-bridge"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-14">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Practical Support Behind the Warmth
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Services, Amenities &amp; Care Pathways at Mission Villa
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                A vibrant daily culture rests on dependable everyday services. Below is a preview of the hospitality, spaces, and care offerings described on the Mission Villa website—alongside direct links to our Memory Care and Respite Care programs.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] max-w-md text-xs text-[#29272B]/85 space-y-2.5">
              <div>
                <strong className="text-[#3B2348] block mb-0.5">
                  Ask Us About Current Availability &amp; Inclusions:
                </strong>
                Specific service schedules, dietary options, and amenity inclusions are confirmed during your personal assessment and visit at 995 East Market Street.
              </div>
              <Link
                href="/services-and-amenities"
                className="inline-flex items-center gap-1.5 font-semibold text-[#3B2348] hover:text-[#C98268] underline transition-colors"
              >
                <span>Explore Full Services &amp; Amenities Directory</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* 4-Column Services & Amenities Preview Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
            {LIFESTYLE_SERVICES_PREVIEW.map((cat, idx) => (
              <article
                key={cat.id}
                className="p-6 sm:p-7 rounded-[28px] bg-[#F7F4ED] border border-[#D8C7A5] flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-bold block">
                    0{idx + 1} · Services &amp; Amenities
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3B2348] leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#29272B]/75">{cat.subtitle}</p>
                  <ul className="space-y-2.5 pt-2">
                    {cat.items.map((item) => (
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

                <p className="pt-4 border-t border-[#D8C7A5]/70 text-[11px] text-[#29272B]/70">
                  {cat.verificationNote}
                </p>
              </article>
            ))}
          </div>

          {/* 3-Card Next-Step Routing Bridge (Memory Care / Respite Care / Schedule In-Person Tour) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Bridge 1: Memory Care */}
            <div className="herbarium-mount rounded-[28px] p-7 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-bold block">
                  Living Option 01 · Full-Time Support
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3B2348]">
                  Memory Care &amp; The Legacies™ Program
                </h3>
                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  Explore how our person-centered Legacies™ Memory Care program supports older adults living with Alzheimer’s disease and other forms of dementia in private and companion suites.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8C7A5]">
                <Link
                  href="/memory-care"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition-colors"
                >
                  <span>Visit Memory Care Page</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Bridge 2: Respite Care */}
            <div className="herbarium-mount rounded-[28px] p-7 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#5F7F49] font-bold block">
                  Living Option 02 · Short-Term Stays
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3B2348]">
                  Short-Term Respite Care &amp; Caregiver Relief
                </h3>
                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  Learn how a short-term stay of a few days to several weeks welcomes your loved one into the full dining, activity, and care life of Mission Villa while family caregivers rest.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8C7A5]">
                <Link
                  href="/respite-care"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition-colors"
                >
                  <span>Visit Respite Care Page</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Bridge 3: In-Person Visit & Gallery Walkthrough */}
            <div className="rounded-[28px] p-7 sm:p-8 bg-[#3B2348] text-[#F7F4ED] border border-[#D8C7A5]/30 flex flex-col justify-between space-y-5 shadow-lg">
              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-bold block">
                  See Mission Villa Firsthand
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F4ED]">
                  Experience Our Dining Room, Courtyard &amp; Suites
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/85 leading-relaxed">
                  The truest measure of daily culture is how a community feels when you walk through the door. Schedule a personal tour at 995 East Market Street in Daly City.
                </p>
              </div>
              <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="px-5 py-2.5 rounded-full bg-[#C98268] text-white text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5] hover:text-[#3B2348] transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Schedule a Personal Tour</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="text-xs font-semibold text-[#D8C7A5] hover:underline"
                >
                  {MISSION_VILLA_FACTS.phone.raw}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: SHARED VISIT INQUIRY FORM & ARCHITECTURAL FOOTER
        ==================================================================== */}
        <VisitAndFooterSection
          presetCareOption={presetCareOption}
          onNavigateToSection={handleNavigateToSection}
        />
      </main>
    </div>
  );
}
