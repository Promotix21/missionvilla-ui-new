'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  Phone,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  MapPin,
  BookOpen,
  Compass,
  Home,
  Users,
  Calendar,
  HelpCircle,
  FileText,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  LEGACIES_TOUCHPOINTS,
  MEMORY_CARE_STORYBOARD,
  MEMORY_CARE_SUPPORT_COMMITMENTS,
  MEMORY_CARE_SUITE_FORMATS,
  MEMORY_CARE_FAQS,
  type LegaciesTouchpoint,
  type MemoryCareSuiteFormat,
  type MemoryCareFaqItem,
} from '@/lib/mission-villa-data';

export default function MemoryCarePage() {
  const prefersReducedMotion = useReducedMotion();
  const [fontScale, setFontScale] = useState<number>(1);
  const [activeLegaciesId, setActiveLegaciesId] =
    useState<LegaciesTouchpoint['id']>('life-story');
  const [activeSuiteFormatId, setActiveSuiteFormatId] =
    useState<MemoryCareSuiteFormat['id']>('companion-unit');
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<
    'All' | MemoryCareFaqItem['category']
  >('All');
  const [openFaqId, setOpenFaqId] = useState<string>(MEMORY_CARE_FAQS[0].id);

  const handleFontScaleChange = (scale: number) => {
    setFontScale(scale);
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--font-scale', String(scale));
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (typeof document !== 'undefined') {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const activeLegacies =
    LEGACIES_TOUCHPOINTS.find((t) => t.id === activeLegaciesId) ||
    LEGACIES_TOUCHPOINTS[0];

  const activeSuiteFormat =
    MEMORY_CARE_SUITE_FORMATS.find((s) => s.id === activeSuiteFormatId) ||
    MEMORY_CARE_SUITE_FORMATS[0];

  const filteredFaqs =
    faqCategoryFilter === 'All'
      ? MEMORY_CARE_FAQS
      : MEMORY_CARE_FAQS.filter((item) => item.category === faqCategoryFilter);

  const fadeUpProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
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
            SECTION 1: INTERIOR-PAGE EDITORIAL HERO
            Substantial asymmetric split with vertical arched portrait,
            layered paper-texture herbarium annotation, and complete first-fold fit
        ==================================================================== */}
        <section
          id="top"
          className="w-full py-6 lg:py-6 lg:min-h-[calc(100svh-104px)] flex items-center fluid-canvas grid-line-b paper-texture relative overflow-hidden"
        >
          <div className="dappled-sunlight absolute inset-0" aria-hidden="true" />

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch relative z-10">
            {/* Left 6 Columns: Breadcrumb, Reassuring H1, Human Narrative & Primary CTAs */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-6 flex flex-col justify-between py-1 space-y-6"
            >
              {/* Top Breadcrumb & Location Context */}
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
                <span className="text-[#29272B]/70">Living Options</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#3B2348] font-semibold" aria-current="page">
                  Memory Care
                </span>
                <span className="hidden sm:inline text-[#29272B]/40" aria-hidden="true">
                  |
                </span>
                <span className="hidden sm:inline text-[#A65D43] font-medium">
                  Daly City, California
                </span>
              </nav>

              {/* Main Editorial Headline & Lead Copy */}
              <div className="space-y-4 my-auto">
                <div>
                  <span className="font-script script-display text-[#C98268] block">
                    Dedicated Memory Care in Daly City
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#3B2348]/85 font-semibold block mt-0.5">
                    Featuring the Legacies™ Program for Alzheimer’s &amp; Dementia
                  </span>
                </div>

                <h1
                  className="font-serif editorial-h1 text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Where Their Life Story Guides Every Day,{' '}
                  <span className="italic font-normal text-[#C98268]">
                    and Dignity Comes First.
                  </span>
                </h1>

                <p className="text-[#29272B]/90 text-sm sm:text-base xl:text-[17px] leading-relaxed max-w-[60ch]">
                  When someone you love is living with Alzheimer’s disease or another form of dementia, you want more than a safe place—you want a warm, homelike community where they are genuinely known. At{' '}
                  <strong>{MISSION_VILLA_FACTS.name}</strong> in Daly City, our{' '}
                  <strong>Legacies™ Memory Care</strong> program shapes daily support around each resident’s personal history, comforting routines, and family bonds.
                </p>

                {/* Primary & Secondary Conversion CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="px-6 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] font-semibold text-xs sm:text-sm hover:bg-[#C98268] transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <span>Schedule a Memory Care Visit</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('legacies-program')}
                    className="px-5 py-3.5 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] text-[#3B2348] font-semibold text-xs sm:text-sm hover:border-[#3B2348] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Explore the Legacies™ Approach
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

              {/* Bottom Herbarium Paper-Texture Annotation Strip */}
              <div className="herbarium-mount p-4 sm:p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-bold block">
                    Signature Approach
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#3B2348] mt-0.5">
                    Legacies™ Life-Story Care
                  </p>
                  <p className="text-xs text-[#29272B]/75 mt-0.5">
                    Shaped by personal history, habits &amp; preferences.
                  </p>
                </div>

                <div className="sm:border-l sm:border-[#D8C7A5] sm:pl-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F7F49] font-bold block">
                    Accommodations
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#3B2348] mt-0.5">
                    Private &amp; Companion Suites
                  </p>
                  <p className="text-xs text-[#29272B]/75 mt-0.5">
                    Companion Unit, Jack &amp; Jill &amp; Private formats with private baths.
                  </p>
                </div>

                <div className="sm:border-l sm:border-[#D8C7A5] sm:pl-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#3B2348] font-bold block">
                    Daly City Community
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#3B2348] mt-0.5">
                    995 East Market Street
                  </p>
                  <p className="text-xs text-[#29272B]/75 mt-0.5">
                    CA RCFE License #{MISSION_VILLA_FACTS.licenseNumber}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right 6 Columns: Vertical Botanical Arch Composition + Layered Herbarium Note */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[480px] lg:min-h-0"
            >
              <div className="arch-portal w-full lg:w-[90%] h-[430px] sm:h-[500px] lg:h-full max-h-[620px] relative shadow-2xl border-4 border-[#FCFBF8] bg-[#3B2348] group">
                {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=85"
                  alt="Illustrative placeholder: Warm, reassuring connection with an older adult in a sunlit residential setting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center mood-grade group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/25 to-transparent" />

                <div className="absolute bottom-5 left-6 right-6 text-[#F7F4ED] z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-md space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#D8C7A5] font-semibold block">
                      Monograph I · Person-Centered Memory Care
                    </span>
                    <p className="font-serif text-sm sm:text-base xl:text-lg italic leading-snug">
                      “Supporting residents living with Alzheimer’s and dementia in a safe, nurturing environment where personal dignity and family connection endure.”
                    </p>
                    <p className="text-[10px] text-[#F7F4ED]/70">
                      Illustrative placeholder photography · Replace with official Mission Villa photography before launch
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('memory-care-environment')}
                    className="bg-[#FCFBF8]/95 hover:bg-[#D8C7A5] text-[#3B2348] px-4 py-2.5 rounded-2xl text-right shadow-lg shrink-0 transition-colors cursor-pointer flex items-center gap-3 self-start sm:self-end"
                  >
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-widest text-[#29272B]/70 block">
                        Suites &amp; Spaces
                      </span>
                      <span className="font-serif text-xs sm:text-sm font-bold block whitespace-nowrap">
                        View Suite Formats
                      </span>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-[#3B2348] text-[#F7F4ED] flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Layered Paper-Texture Annotation Badge */}
              <div className="hidden sm:block herbarium-mount p-4 w-60 rounded-2xl absolute left-0 top-6 z-20 -rotate-2 shadow-xl">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#5F7F49] font-bold block">
                  Family Reassurance
                </span>
                <p className="font-serif text-xs sm:text-sm font-semibold text-[#3B2348] mt-1 leading-snug">
                  24-hour staff support, chef-prepared meals, and daily life-enriching activities.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            FULL-WIDTH NARRATIVE RIBBON
            Tasteful plum editorial ribbon grounding the page before deep sections
        ==================================================================== */}
        <div className="w-full bg-[#3B2348] text-[#F7F4ED] py-5 fluid-canvas border-b border-[#D8C7A5]/20">
          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-[#D8C7A5] font-semibold uppercase tracking-[0.18em] text-xs">
                Our Memory Care Promise
              </span>
              <span className="hidden sm:inline text-white/30" aria-hidden="true">
                ·
              </span>
              <span className="font-serif italic text-sm sm:text-base text-[#F7F4ED]">
                “The honor they deserve, the care you’ll love.”
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#D8C7A5]">
              <span>Legacies™ Memory Care</span>
              <span aria-hidden="true">·</span>
              <span>Private &amp; Shared Suites with Private Baths</span>
              <span aria-hidden="true">·</span>
              <span>Daly City, San Mateo County</span>
            </div>
          </div>
        </div>

        {/* ===================================================================
            SECTION 2: WHAT MEMORY CARE MEANS HERE
            Who it supports and how person-centered support is shaped by
            resident history, preference, and ability
        ==================================================================== */}
        <section
          id="what-memory-care-means"
          className="w-full py-20 lg:py-24 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 5 Columns: Editorial Essay */}
            <motion.div {...fadeUpProps} className="lg:col-span-5 space-y-4">
              <span className="font-script script-display text-[#C98268] block">
                Understanding Our Approach
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                What Memory Care Means at Mission Villa
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                Memory Care at Mission Villa is a dedicated living option for older adults living with Alzheimer’s disease or other forms of dementia who benefit from attentive daily support in a safe, nurturing, and homelike setting.
              </p>
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                Rather than treating memory loss with a one-size-fits-all routine, our team looks to the whole person. We shape daily assistance around who each resident has always been—honoring their personal history, lifelong preferences, and current abilities so every day feels calm, familiar, and dignified.
              </p>
            </motion.div>

            {/* Right 7 Columns: Three Architectural Pillars of Person-Centered Support */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="herbarium-mount p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#3B2348] text-[#D8C7A5] flex items-center justify-center">
                    <BookOpen className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                    01 · Resident History
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#3B2348]">
                    Shaped by Life Story
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                    From career milestones and family traditions to favorite songs and comforting hobbies, a resident’s personal background informs how our team connects with them each day.
                  </p>
                </div>
                <p className="text-xs font-serif italic text-[#3B2348] pt-3 border-t border-[#D8C7A5]">
                  Rooted in our Legacies™ Memory Care philosophy
                </p>
              </div>

              <div className="herbarium-mount p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#8FAF78]/35 text-[#3B2348] flex items-center justify-center">
                    <Compass className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#5F7F49] font-semibold block">
                    02 · Personal Preference
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#3B2348]">
                    Guided by Familiar Habits
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                    We encourage personal choice and independence wherever possible—supporting morning routines, dining preferences, and social participation at a pace that feels natural.
                  </p>
                </div>
                <p className="text-xs font-serif italic text-[#3B2348] pt-3 border-t border-[#D8C7A5]">
                  Unhurried, respectful assistance with everyday tasks
                </p>
              </div>

              <div className="herbarium-mount p-6 sm:p-7 rounded-3xl flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#C98268]/25 text-[#A65D43] flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                    03 · Family Connection
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#3B2348]">
                    Partnering With Loved Ones
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                    Families know their loved one best. We listen closely to relatives before move-in and throughout a resident’s stay, welcoming families into communal lounges, meals, and events.
                  </p>
                </div>
                <p className="text-xs font-serif italic text-[#3B2348] pt-3 border-t border-[#D8C7A5]">
                  Supporting both the resident and their family
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: LEGACIES™ MEMORY CARE EDITORIAL FEATURE
            Deep Plum Full-Width Interactive Feature honoring personal identity
        ==================================================================== */}
        <section
          id="legacies-program"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#3B2348] text-[#F7F4ED] relative overflow-hidden"
        >
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 border-b border-white/15 pb-8 mb-12">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#D8C7A5] block">
                Signature Memory Care Philosophy
              </span>
              <h2
                className="font-serif section-display text-[#F7F4ED] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                The Legacies™ Memory Care Program: Honoring Who They Are
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#F7F4ED]/80 max-w-[50ch]">
              At the heart of Mission Villa’s Memory Care neighborhood is our{' '}
              <strong className="text-[#D8C7A5]">Legacies™</strong> approach—focused on personal stories, meaningful connection, and everyday moments of recognition.
            </p>
          </div>

          {/* Interactive 4-Chapter Selector */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
            role="tablist"
            aria-label="Legacies Memory Care touchpoints"
          >
            {LEGACIES_TOUCHPOINTS.map((tp) => {
              const isSelected = tp.id === activeLegaciesId;
              return (
                <button
                  key={tp.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveLegaciesId(tp.id)}
                  className={`text-left p-5 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                    isSelected
                      ? 'bg-[#D8C7A5] text-[#3B2348] border-[#D8C7A5] shadow-lg'
                      : 'bg-white/[0.06] text-[#F7F4ED] border-white/15 hover:bg-white/12'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                    <span className={isSelected ? 'text-[#3B2348]' : 'text-[#8FAF78]'}>
                      Chapter {tp.index}
                    </span>
                    <span className={isSelected ? 'text-[#A65D43]' : 'text-[#D8C7A5]/75'}>
                      {isSelected ? 'Active' : 'Explore →'}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold leading-snug">
                    {tp.kicker}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Legacies Touchpoint Editorial Spread */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left 6 Columns: Narrative Details & Family Takeaway */}
            <div className="lg:col-span-6 rounded-3xl bg-[#22122B] border border-[#D8C7A5]/25 p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8FAF78] font-semibold">
                    Legacies™ Focus {activeLegacies.index} · {activeLegacies.kicker}
                  </span>
                  <span className="font-script text-2xl text-[#D8C7A5]">
                    Legacies
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-semibold text-[#F7F4ED] leading-tight">
                  {activeLegacies.title}
                </h3>

                <p className="font-serif italic text-base sm:text-lg text-[#D8C7A5]">
                  {activeLegacies.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                  {activeLegacies.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold">
                    How This Comes to Life at Mission Villa
                  </h4>
                  <ul className="space-y-2.5">
                    {activeLegacies.inPractice.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F7F4ED]/90"
                      >
                        <Check
                          className="w-4 h-4 text-[#8FAF78] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-[#D8C7A5]/30 space-y-1">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                  What This Means for Your Family
                </span>
                <p className="text-xs sm:text-sm text-[#F7F4ED] leading-relaxed">
                  {activeLegacies.familyTakeaway}
                </p>
              </div>
            </div>

            {/* Right 6 Columns: Visual Stage with Plum Inverted-Radius Cutout */}
            <div className="lg:col-span-6">
              <div className="bento-frame h-[380px] sm:h-[460px] lg:h-full min-h-[380px] w-full relative bg-[#22122B] border border-white/15">
                <img
                  src={activeLegacies.placeholderImage.src}
                  alt={activeLegacies.placeholderImage.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mood-grade transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#3B2348]/25 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 sm:right-64 text-[#F7F4ED] z-10 space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                    {activeLegacies.kicker}
                  </span>
                  <p className="font-serif text-base sm:text-xl italic">
                    “{activeLegacies.placeholderImage.caption}”
                  </p>
                  <p className="text-[10px] text-[#F7F4ED]/65">
                    Illustrative placeholder photography
                  </p>
                </div>

                {/* Bottom-Right Inverted Cutout on Deep Plum Background */}
                <div className="cutout-br-plum hidden sm:block">
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="px-6 py-3.5 rounded-2xl bg-[#C98268] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2.5 hover:bg-[#D8C7A5] hover:text-[#3B2348] transition-colors cursor-pointer"
                  >
                    <span>Ask About Legacies™</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: A DAY WITH PURPOSE
            Asymmetrical Three-Scene Storyboard with Inverted-Radius Image Corners
            (Not a fictitious minute-by-minute schedule or 6-card grid)
        ==================================================================== */}
        <section
          id="day-with-purpose"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F7F4ED] paper-texture"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-7 space-y-2">
              <span className="font-script script-display text-[#C98268] block">
                Rhythm, Nourishment &amp; Belonging
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                A Day With Purpose in Memory Care
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#3B2348]/15 lg:pl-10">
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                Every resident’s day is shaped by personal preference rather than a rigid clock. Here is how dignified assistance, chef-prepared dining, and engaging activities flow naturally together at Mission Villa.
              </p>
            </div>
          </div>

          {/* Asymmetrical Three-Scene Storyboard (Scene I: 7 cols, Scene II: 5 cols, Scene III: 12 cols) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {MEMORY_CARE_STORYBOARD.map((scene, index) => {
              const isFullWidthScene = index === 2;

              if (isFullWidthScene) {
                return (
                  <article
                    key={scene.id}
                    className="lg:col-span-12 bento-frame bg-[#FCFBF8] border border-[#D8C7A5] grid grid-cols-1 lg:grid-cols-12 shadow-sm"
                  >
                    {/* Left 7 Columns Image with Inverted-Radius Cutout */}
                    <div className="lg:col-span-7 min-h-[320px] sm:min-h-[400px] relative overflow-hidden bg-[#3B2348]">
                      <img
                        src={scene.placeholderImage.src}
                        alt={scene.placeholderImage.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover mood-grade transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/85 via-transparent to-transparent" />

                      <div className={scene.cutoutStyle}>
                        <span className="inline-block px-4 py-2 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold tracking-wider uppercase">
                          {scene.sceneNumber} · {scene.rhythmWindow}
                        </span>
                      </div>

                      <div className="absolute top-5 right-5 px-3 py-1 rounded-lg bg-black/45 backdrop-blur-sm text-[10px] text-[#F7F4ED]/85">
                        Illustrative photography
                      </div>
                    </div>

                    {/* Right 5 Columns Story Content */}
                    <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                          {scene.subtitle}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3B2348]">
                          {scene.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                          {scene.narrative}
                        </p>
                      </div>

                      <ul className="space-y-2.5 pt-4 border-t border-[#D8C7A5]">
                        {scene.highlights.map((item) => (
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
                  </article>
                );
              }

              return (
                <article
                  key={scene.id}
                  className={`${scene.colSpan} bento-frame bg-[#FCFBF8] border border-[#D8C7A5] flex flex-col justify-between shadow-sm`}
                >
                  <div className="h-64 sm:h-80 relative overflow-hidden bg-[#3B2348]">
                    <img
                      src={scene.placeholderImage.src}
                      alt={scene.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mood-grade transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/85 via-[#3B2348]/20 to-transparent" />

                    <div className={scene.cutoutStyle}>
                      <span
                        className={`inline-block px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider uppercase ${
                          index === 0
                            ? 'bg-[#3B2348] text-[#D8C7A5]'
                            : 'bg-[#8FAF78] text-[#3B2348]'
                        }`}
                      >
                        {scene.sceneNumber} · {scene.rhythmWindow}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-9 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                        {scene.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3B2348]">
                        {scene.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                        {scene.narrative}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-[#D8C7A5]">
                      {scene.highlights.map((item) => (
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
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: CARE, COMFORT AND SECURITY
            Plain-language description of on-site support without invented
            staffing ratios or clinical outcome claims
        ==================================================================== */}
        <section
          id="care-comfort-security"
          className="w-full py-20 lg:py-24 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left 4 Columns: Section Lead & Direct Assessment Callout */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Attentive Daily Support
                </span>
                <h2
                  className="font-serif text-3xl sm:text-4xl text-[#3B2348] font-semibold leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Care, Comfort &amp; Security You Can Trust
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  Families considering Memory Care want clear, honest answers about how their loved one will be supported day and night. At Mission Villa, care is personal, attentive, and tailored through routine assessments.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#3B2348] text-[#F7F4ED] space-y-4">
                <div className="flex items-center gap-2.5 text-[#D8C7A5]">
                  <ShieldCheck className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold">
                    Personalized Care Planning
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/90 leading-relaxed">
                  Every resident’s support plan is shaped around an individual assessment and direct conversation with your family. Ask our Daly City team how we accommodate specific daily routines or mobility needs.
                </p>
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-[#D8C7A5]">
                  <span>CA License #{MISSION_VILLA_FACTS.licenseNumber}</span>
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="font-semibold underline hover:text-white"
                  >
                    {MISSION_VILLA_FACTS.phone.formatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Right 8 Columns: 3 Plain-Language Support Commitments */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {MEMORY_CARE_SUPPORT_COMMITMENTS.map((commitment, idx) => (
                <div
                  key={commitment.id}
                  className="p-6 sm:p-7 rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                      0{idx + 1} · {commitment.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3B2348]">
                      {commitment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-[#D8C7A5]">
                    {commitment.examples.map((ex) => (
                      <li
                        key={ex}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#29272B]/90"
                      >
                        <Check
                          className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: THE ENVIRONMENT — SUITES & SHARED SPACES
            Companion Unit, Jack & Jill, and Private Suites with Private Baths
            (Includes transparent "Awaiting official floor plan" notice)
        ==================================================================== */}
        <section
          id="memory-care-environment"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#D8C7A5]/25 grid-line-b"
        >
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Homelike Accommodations
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                The Memory Care Environment: Suites &amp; Welcoming Shared Spaces
              </h2>
            </div>

            {/* Interactive Suite Format Switcher */}
            <div
              className="inline-flex flex-wrap p-1.5 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] shadow-sm gap-1 self-start xl:self-end"
              role="tablist"
              aria-label="Memory Care suite formats"
            >
              {MEMORY_CARE_SUITE_FORMATS.map((format) => {
                const isSelected = format.id === activeSuiteFormatId;
                return (
                  <button
                    key={format.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveSuiteFormatId(format.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#3B2348] text-[#F7F4ED]'
                        : 'text-[#3B2348] hover:bg-[#D8C7A5]/40'
                    }`}
                  >
                    {format.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 12-Column Suite Format Showcase */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left 7 Columns: Visual Preview + Inverted Cutout */}
            <div className="lg:col-span-7 bento-frame bg-[#3B2348] min-h-[380px] sm:min-h-[460px] relative flex flex-col justify-between">
              <img
                src={activeSuiteFormat.placeholderImage.src}
                alt={activeSuiteFormat.placeholderImage.alt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover mood-grade transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#3B2348]/30 to-transparent" />

              <div className="cutout-tl-cream">
                <div className="px-4 py-2 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold">
                  {activeSuiteFormat.badge}
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-10 mt-auto space-y-2 text-[#F7F4ED] max-w-2xl">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                  {activeSuiteFormat.sourceReference}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-semibold">
                  {activeSuiteFormat.name}
                </h3>
                <p className="text-[11px] text-[#F7F4ED]/75">
                  Illustrative placeholder photography · Schedule an in-person tour at 995 East Market Street to view actual suites.
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Suite Details + Honest Floor Plan Status */}
            <div className="lg:col-span-5 herbarium-mount rounded-[28px] p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="border-b border-[#D8C7A5] pb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                    Memory Care Accommodations
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#3B2348] mt-1">
                    {activeSuiteFormat.name}
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  {activeSuiteFormat.summary}
                </p>

                <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/70 space-y-1">
                  <span className="text-xs uppercase tracking-[0.16em] text-[#5F7F49] font-semibold block">
                    Who This Suits
                  </span>
                  <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                    {activeSuiteFormat.whoItSuits}
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                    Suite &amp; Community Features
                  </span>
                  <ul className="space-y-2">
                    {activeSuiteFormat.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                      >
                        <Check
                          className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Honest Architectural Floor Plan Status Notice */}
              <div className="space-y-4 pt-4 border-t border-[#D8C7A5]">
                <div className="p-3.5 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] flex items-start gap-2.5 text-xs text-[#3B2348]">
                  <FileText className="w-4 h-4 text-[#A65D43] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{activeSuiteFormat.floorPlanStatus}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="flex-1 py-3.5 px-5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <span>Tour Suites in Person</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <Link
                    href="/suites-and-floor-plans"
                    className="py-3.5 px-4 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:border-[#3B2348] transition-colors"
                  >
                    Suites &amp; Floor Plans
                  </Link>

                  <Link
                    href="/respite-care"
                    className="py-3.5 px-4 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:border-[#3B2348] transition-colors"
                  >
                    Compare Respite Care
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: FAMILY QUESTIONS & DECISION GUIDE
            Thoughtful Tour Checklist + Category-Filtered Accordion
        ==================================================================== */}
        <section
          id="family-questions"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture"
        >
          {/* Mobile Quick-Jump Strip Between Tour Guide & FAQ Accordion */}
          <div className="lg:hidden flex items-center gap-2 mb-6">
            <button
              type="button"
              onClick={() => handleNavigateToSection('mc-tour-guide')}
              className="flex-1 py-2.5 px-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold text-center cursor-pointer"
            >
              Tour Questions Guide ↓
            </button>
            <button
              type="button"
              onClick={() => handleNavigateToSection('mc-faq-accordion')}
              className="flex-1 py-2.5 px-3 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] text-[#3B2348] text-xs font-semibold text-center cursor-pointer"
            >
              Skip to Memory Care FAQs ↓
            </button>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left 5 Columns: Empathetic Family Decision & Tour Guide */}
            <div
              id="mc-tour-guide"
              className="lg:col-span-5 herbarium-mount rounded-[32px] p-7 sm:p-10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="font-script script-display text-[#C98268] block">
                  Guidance for Families
                </span>
                <h2
                  className="font-serif text-3xl sm:text-4xl text-[#3B2348] font-semibold leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Questions to Bring When You Visit Mission Villa
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  Exploring Memory Care is one of the most important decisions a family can make. When you visit us at 995 East Market Street in Daly City, we encourage you to take your time, observe daily life, and ask direct questions.
                </p>

                <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-3">
                  <h3 className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Helpful Topics to Discuss on Your Tour</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#3B2348] font-serif italic">
                    <li>
                      “How will your team learn my loved one’s personal history and comforting routines through the Legacies™ program?”
                    </li>
                    <li>
                      “May we walk through both private suites and shared Companion or Jack &amp; Jill suite layouts?”
                    </li>
                    <li>
                      “How are daily care needs assessed before move-in and as my loved one’s needs change?”
                    </li>
                    <li>
                      “How does your team communicate updates and welcome family visits during the week?”
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#29272B]/70 block">
                    Prefer to talk right now?
                  </span>
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="font-serif text-lg font-bold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Call {MISSION_VILLA_FACTS.phone.formatted}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="px-5 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Plan Your Visit</span>
                </button>
              </div>
            </div>

            {/* Right 7 Columns: Accessible Memory Care FAQ Accordion with Category Filter */}
            <div
              id="mc-faq-accordion"
              className="lg:col-span-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                      Straightforward Answers
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2348] font-semibold mt-1">
                      Frequently Asked Questions About Memory Care
                    </h3>
                  </div>
                </div>

                {/* Interactive Category Filter Buttons */}
                <div
                  className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5]"
                  role="group"
                  aria-label="Filter Memory Care questions by topic"
                >
                  {(
                    [
                      'All',
                      'Program & Philosophy',
                      'Daily Support',
                      'Suites & Environment',
                      'Visits & Planning',
                    ] as const
                  ).map((category) => {
                    const isActive = faqCategoryFilter === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setFaqCategoryFilter(category)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
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

              {/* Accordion List */}
              <div className="space-y-3 my-auto">
                {filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#D8C7A5]/20 transition-colors"
                      >
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#A65D43] font-semibold block mb-0.5">
                            {faq.category}
                          </span>
                          <span className="font-serif text-base sm:text-lg font-semibold text-[#3B2348]">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-[#3B2348] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#29272B]/85 leading-relaxed border-t border-[#D8C7A5]/40">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#29272B]/85">
                  Have a specific question about your loved one’s needs? Our team in Daly City is here to help.
                </p>
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="px-5 py-2.5 rounded-full bg-[#C98268] text-white text-xs font-semibold hover:bg-[#3B2348] transition cursor-pointer whitespace-nowrap"
                >
                  Ask Our Team Directly →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8 & 9: CLOSING SCHEDULE A VISIT / PRICING INQUIRY (DEMO) + FOOTER
        ==================================================================== */}
        <VisitAndFooterSection
          presetCareOption="Memory Care"
          onNavigateToSection={handleNavigateToSection}
        />
      </main>
    </div>
  );
}
