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
  HeartHandshake,
  ShieldCheck,
  ChevronDown,
  Calendar,
  HelpCircle,
  Clock,
  Home,
  Utensils,
  Sparkles,
  Info,
  Compass,
  Users,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  RESPITE_SCENARIOS,
  RESPITE_SERVICE_TILES,
  RESPITE_STAY_CHAPTERS,
  RESPITE_TIMELINE_STEPS,
  RESPITE_FAQS,
  type RespiteScenario,
  type RespiteTimelineStep,
  type RespiteFaqItem,
  imageCreditLabel,
} from '@/lib/mission-villa-data';

export default function RespiteCarePage() {
  const prefersReducedMotion = useReducedMotion();
  const [fontScale, setFontScale] = useState<number>(1);
  const [activeScenarioId, setActiveScenarioId] =
    useState<RespiteScenario['id']>('caregiver-recharge');
  const [activeTimelineId, setActiveTimelineId] =
    useState<RespiteTimelineStep['id']>('step-inquiry');
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<
    'All' | RespiteFaqItem['category']
  >('All');
  const [openFaqId, setOpenFaqId] = useState<string>(RESPITE_FAQS[0].id);

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

  const activeScenario =
    RESPITE_SCENARIOS.find((s) => s.id === activeScenarioId) ||
    RESPITE_SCENARIOS[0];

  const activeTimelineIndex = Math.max(
    0,
    RESPITE_TIMELINE_STEPS.findIndex((s) => s.id === activeTimelineId)
  );
  const activeTimelineStep =
    RESPITE_TIMELINE_STEPS[activeTimelineIndex] || RESPITE_TIMELINE_STEPS[0];

  const filteredFaqs =
    faqCategoryFilter === 'All'
      ? RESPITE_FAQS
      : RESPITE_FAQS.filter((item) => item.category === faqCategoryFilter);

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
            SECTION 1: DISTINCT WELCOMING INTERIOR HERO
            Asymmetric 7/5 Sanctuary Composition with Panoramic Bento Frame,
            Inverted-Radius Cutout, and Caregiver Peace-of-Mind Ledger
        ==================================================================== */}
        <section
          id="top"
          className="w-full py-6 lg:py-6 lg:min-h-[calc(100svh-104px)] flex items-center fluid-canvas grid-line-b paper-texture relative overflow-hidden"
        >
          <div className="dappled-sunlight absolute inset-0" aria-hidden="true" />

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch relative z-10">
            {/* Left 7 Columns: Breadcrumb, Welcoming H1, Narrative & Reassurance Ledger */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-7 flex flex-col justify-between py-1 space-y-6"
            >
              {/* Breadcrumb & Location Context */}
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
                  Respite Care
                </span>
                <span className="hidden sm:inline text-[#29272B]/40" aria-hidden="true">
                  |
                </span>
                <span className="hidden sm:inline text-[#5F7F49] font-medium">
                  Short-Term Stays in Daly City, CA
                </span>
              </nav>

              {/* Main Editorial Headline & Supporting Copy */}
              <div className="space-y-4 my-auto">
                <div>
                  <span className="font-script script-display text-[#C98268] block">
                    Short-Term Stays &amp; Caregiver Relief
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#3B2348]/85 font-semibold block mt-0.5">
                    Flexible Respite Care at Mission Villa · Daly City, California
                  </span>
                </div>

                <h1
                  className="font-serif editorial-h1 text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  When a Little Extra Support Makes a Difference,{' '}
                  <span className="italic font-normal text-[#C98268]">
                    We Welcome Them Like Family.
                  </span>
                </h1>

                <p className="text-[#29272B]/90 text-sm sm:text-base xl:text-[17px] leading-relaxed max-w-[64ch]">
                  Caring for an aging parent or spouse is an act of deep devotion—and sometimes a short-term stay of a few days to several weeks brings essential breathing room. At{' '}
                  <strong>{MISSION_VILLA_FACTS.name}</strong> in Daly City, our{' '}
                  <strong>Respite Care</strong> guests enjoy comfortable furnished accommodations, tailored daily assistance, chef-prepared meals, and warm community life while family caregivers rest, travel, or bridge a recovery period.
                </p>

                {/* Primary & Secondary Conversion CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="px-6 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] font-semibold text-xs sm:text-sm hover:bg-[#C98268] transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <span>Inquire About Respite Availability</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('stay-timeline')}
                    className="px-5 py-3.5 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] text-[#3B2348] font-semibold text-xs sm:text-sm hover:border-[#3B2348] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    See How a Short-Term Stay Works
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

              {/* Bottom Herbarium Paper-Texture Reassurance Ledger */}
              <div className="herbarium-mount p-4 sm:p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F7F49] font-bold block">
                    Flexible Duration
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#3B2348] mt-0.5">
                    A Few Days to Several Weeks
                  </p>
                  <p className="text-xs text-[#29272B]/75 mt-0.5">
                    Subject to current suite availability &amp; care review.
                  </p>
                </div>

                <div className="sm:border-l sm:border-[#D8C7A5] sm:pl-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-bold block">
                    Ready-Made Comfort
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#3B2348] mt-0.5">
                    Furnished Suite &amp; Private Bath
                  </p>
                  <p className="text-xs text-[#29272B]/75 mt-0.5">
                    Housekeeping, linens, meals &amp; daily support included.
                  </p>
                </div>

                <div className="sm:border-l sm:border-[#D8C7A5] sm:pl-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#3B2348] font-bold block">
                    Community Belonging
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#3B2348] mt-0.5">
                    Full Dining &amp; Activities
                  </p>
                  <p className="text-xs text-[#29272B]/75 mt-0.5">
                    Welcomed into the heart of 995 East Market Street.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right 5 Columns: Panoramic Sanctuary Frame with Inverted-Radius Cutout */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-5 relative flex flex-col justify-between min-h-[420px] sm:min-h-[480px] lg:min-h-0"
            >
              <div className="bento-frame w-full h-[430px] sm:h-[500px] lg:h-full max-h-[620px] relative shadow-2xl border border-[#D8C7A5] bg-[#3B2348] group flex flex-col justify-between">
                {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                <img
                  src="/images/property/sitting-nook-detail.webp"
                  alt="Sunlit sitting nook at Mission Villa with a Golden Gate Bridge mural"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center mood-grade group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/30 to-transparent" />

                {/* Top-Left Inverted-Radius Cutout */}
                <div className="cutout-tl-cream">
                  <span className="inline-block px-4 py-2 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold tracking-wider uppercase">
                    Monograph II · Short-Term Stays
                  </span>
                </div>

                {/* Bottom Overlay Narrative & Quick Link */}
                <div className="relative z-10 p-6 sm:p-7 mt-auto text-[#F7F4ED] space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#D8C7A5] font-semibold block">
                      Caregiver Relief &amp; Guest Comfort
                    </span>
                    <p className="font-serif text-sm sm:text-base xl:text-lg italic leading-snug">
                      “Whether you need a trusted place while you travel, time to recharge as a caregiver, or a supportive bridge after an illness, your loved one is cared for with warmth and dignity.”
                    </p>
                    <p className="text-[10px] text-[#F7F4ED]/70">
                      Mission Villa property photograph · Daly City
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleNavigateToSection('whats-included')}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FCFBF8]/95 hover:bg-[#D8C7A5] text-[#3B2348] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span>What’s Included in a Stay</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>

                    <span className="text-[11px] text-[#D8C7A5] font-medium">
                      CA RCFE #{MISSION_VILLA_FACTS.licenseNumber}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            FULL-WIDTH NARRATIVE RIBBON
            Calm Sage & Deep Plum Editorial Ribbon Grounding Respite Care
        ==================================================================== */}
        <div className="w-full bg-[#3B2348] text-[#F7F4ED] py-5 fluid-canvas border-b border-[#D8C7A5]/20">
          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-[#8FAF78] font-semibold uppercase tracking-[0.18em] text-xs">
                Respite Care at Mission Villa
              </span>
              <span className="hidden sm:inline text-white/30" aria-hidden="true">
                ·
              </span>
              <span className="font-serif italic text-sm sm:text-base text-[#F7F4ED]">
                “Temporary stays with the same heart, dignity, and personal attention as our full-time community.”
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#D8C7A5]">
              <span>Furnished Accommodations</span>
              <span aria-hidden="true">·</span>
              <span>Chef-Prepared Meals &amp; Activities</span>
              <span aria-hidden="true">·</span>
              <span>995 East Market Street, Daly City</span>
            </div>
          </div>
        </div>

        {/* ===================================================================
            SECTION 2: "WHEN A LITTLE EXTRA SUPPORT MAKES A DIFFERENCE"
            Interactive 4-Scenario Family Explorer
        ==================================================================== */}
        <section
          id="respite-scenarios"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2">
              <span className="font-script script-display text-[#C98268] block">
                Understanding Short-Term Care
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                When a Little Extra Support Makes a Difference
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#3B2348]/15 lg:pl-10">
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                Families turn to Respite Care for many different reasons—from planned family travel and caregiver renewal to extra daily support after an illness or a gentle trial of community life.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left 5 Columns: 4 Scenario Selector Tabs */}
            <div
              className="lg:col-span-5 flex flex-col justify-between space-y-3"
              role="tablist"
              aria-label="Respite Care family scenarios"
            >
              {RESPITE_SCENARIOS.map((scenario) => {
                const isSelected = scenario.id === activeScenarioId;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveScenarioId(scenario.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                      isSelected
                        ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-lg'
                        : 'bg-[#F7F4ED] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold">
                      <span className={isSelected ? 'text-[#8FAF78]' : 'text-[#A65D43]'}>
                        {scenario.index} · {scenario.tag}
                      </span>
                      <span className={isSelected ? 'text-[#D8C7A5]' : 'text-[#3B2348]/70'}>
                        {isSelected ? 'Viewing' : 'Select →'}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold leading-snug">
                      {scenario.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right 7 Columns: Active Scenario Editorial Detail Card */}
            <div className="lg:col-span-7 herbarium-mount rounded-[32px] p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8C7A5] pb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold">
                    Scenario {activeScenario.index} · {activeScenario.tag}
                  </span>
                  <span className="text-xs font-medium text-[#5F7F49]">
                    Short-Term Respite Care · Daly City
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348]">
                  {activeScenario.title}
                </h3>

                <blockquote className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] font-serif italic text-base sm:text-lg text-[#3B2348] leading-relaxed">
                  {activeScenario.familySituation}
                </blockquote>

                <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                  {activeScenario.howMissionVillaHelps}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto pt-2">
                <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/80 space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                    How Respite Care Supports You
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#29272B]/90">
                    {activeScenario.keyTakeaways.map((item) => (
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

                <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/80 space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Helpful Questions for Our Team</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#3B2348] font-serif italic">
                    {activeScenario.questionsToAsk.map((q) => (
                      <li key={q}>“{q}”</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const idx = RESPITE_SCENARIOS.findIndex((s) => s.id === activeScenario.id);
                      const prevIdx = idx <= 0 ? RESPITE_SCENARIOS.length - 1 : idx - 1;
                      setActiveScenarioId(RESPITE_SCENARIOS[prevIdx].id);
                    }}
                    className="px-3.5 py-2 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer"
                  >
                    ← Prev Scenario
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const idx = RESPITE_SCENARIOS.findIndex((s) => s.id === activeScenario.id);
                      const nextIdx = idx >= RESPITE_SCENARIOS.length - 1 ? 0 : idx + 1;
                      setActiveScenarioId(RESPITE_SCENARIOS[nextIdx].id);
                    }}
                    className="px-3.5 py-2 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer"
                  >
                    Next Scenario →
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="px-6 py-3 rounded-full bg-[#C98268] text-white text-xs sm:text-sm font-semibold hover:bg-[#3B2348] transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Discuss This Scenario With Us</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: WHAT'S INCLUDED IN A STAY — REFINED EDITORIAL SERVICE TILES
            Visual Signature: Asymmetric 12-Column Architectural Service Ledger
            with Explicit Availability Confirmation Notice
        ==================================================================== */}
        <section
          id="whats-included"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F7F4ED] paper-texture"
        >
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-14">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Thoughtful Daily Hospitality
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                What’s Included in a Short-Term Respite Stay
              </h2>
            </div>

            <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] max-w-md flex items-start gap-3">
              <Info className="w-4 h-4 text-[#A65D43] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-[#29272B]/85 leading-relaxed">
                <strong>Confirm Current Availability &amp; Inclusions:</strong> Every respite stay is shaped around an individual pre-stay assessment and current suite openings at 995 East Market Street.
              </p>
            </div>
          </div>

          {/* Refined Editorial Service Tiles — Asymmetric 7/5 & 5/7 & 6/6 Architectural Grid */}
          <div
            id="respite-accommodations"
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch"
          >
            {RESPITE_SERVICE_TILES.map((tile, idx) => {
              // Asymmetric editorial column rhythm: Row 1 (7 / 5), Row 2 (5 / 7), Row 3 (6 / 6)
              const spanClasses = [
                'lg:col-span-7',
                'lg:col-span-5',
                'lg:col-span-5',
                'lg:col-span-7',
                'lg:col-span-6',
                'lg:col-span-6',
              ];
              const colSpan = spanClasses[idx] || 'lg:col-span-6';
              const isHighlighted = idx === 0 || idx === 3;

              return (
                <article
                  key={tile.id}
                  className={`${colSpan} rounded-[28px] p-7 sm:p-9 flex flex-col justify-between space-y-6 transition-colors ${
                    isHighlighted
                      ? 'herbarium-mount bg-[#FCFBF8]'
                      : 'bg-[#FCFBF8] border border-[#D8C7A5] shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-[#D8C7A5]/70 pb-3.5">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold">
                        {tile.index} · {tile.category}
                      </span>
                      <span className="text-xs font-serif italic text-[#5F7F49]">
                        Respite Care Inclusion
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3B2348] leading-snug">
                      {tile.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                      {tile.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {tile.includedDetails.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                        >
                          <Check
                            className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#D8C7A5]/70 flex items-center justify-between gap-3 text-xs text-[#29272B]/70">
                    <span>{tile.availabilityNote}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: WHAT A SHORT-TERM STAY CAN LOOK LIKE
            Visual Signature: Calming Full-Bleed / Wide Editorial Image Transitions
        ==================================================================== */}
        <section
          id="short-term-stay-life"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-7 space-y-2">
              <span className="font-script script-display text-[#C98268] block">
                A Gentle Rhythm of Care
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                What a Short-Term Stay Can Look Like
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-[#3B2348]/15 lg:pl-10">
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                Every Respite Care guest brings their own lifelong habits, energy levels, and personal preferences. Here is how a short-term stay unfolds naturally from arrival day to a refreshed reunion.
              </p>
            </div>
          </div>

          {/* 3 Calming Full-Width Alternating Editorial Image Transitions */}
          <div className="w-full space-y-10 lg:space-y-14">
            {RESPITE_STAY_CHAPTERS.map((chapter, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <motion.article
                  key={chapter.id}
                  {...fadeUpProps}
                  className="w-full bento-frame bg-[#F7F4ED] border border-[#D8C7A5] grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-sm"
                >
                  {/* Visual Column (7 Columns) */}
                  <div
                    className={`lg:col-span-7 min-h-[320px] sm:min-h-[400px] relative overflow-hidden bg-[#3B2348] ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={chapter.placeholderImage.src}
                      alt={chapter.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mood-grade transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/85 via-[#22122B]/20 to-transparent" />

                    {/* Inverted-Radius Cutout Badge */}
                    <div className={isReversed ? 'cutout-br-cream' : 'cutout-tl-cream'}>
                      <span
                        className={`inline-block px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider uppercase ${
                          idx === 1
                            ? 'bg-[#8FAF78] text-[#3B2348]'
                            : 'bg-[#3B2348] text-[#D8C7A5]'
                        }`}
                      >
                        {chapter.chapterLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-6 right-6 sm:right-48 text-[#F7F4ED] space-y-0.5">
                      <p className="font-serif italic text-sm sm:text-base">
                        “{chapter.placeholderImage.caption}”
                      </p>
                      <p className="text-[10px] text-[#F7F4ED]/70">
                        {imageCreditLabel(chapter.placeholderImage.status)}
                      </p>
                    </div>
                  </div>

                  {/* Narrative Column (5 Columns) */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-10 lg:p-11 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                        {chapter.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3B2348] leading-tight">
                        {chapter.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                        {chapter.narrative}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-[#D8C7A5]">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                        What Guests &amp; Families Experience
                      </span>
                      <ul className="space-y-2">
                        {chapter.guestExperience.map((point) => (
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
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: FAMILY CAREGIVER REASSURANCE
            Deep Plum Editorial Spread Honoring Family Caregivers
        ==================================================================== */}
        <section
          id="caregiver-reassurance"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#3B2348] text-[#F7F4ED] relative overflow-hidden"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left 6 Columns: Compassionate Message to Family Caregivers */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-script script-display text-[#D8C7A5] block">
                  Caring for the Caregiver
                </span>
                <h2
                  className="font-serif section-display text-[#F7F4ED] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Taking Time to Rest Is Part of Loving Them Well
                </h2>
                <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                  Many spouses and adult children hesitate to ask for temporary help because they feel they should carry every hour of caregiving on their own. At Mission Villa, we remind families every day: taking time to sleep, travel, or care for your own health allows you to remain the patient, loving advocate your family member needs.
                </p>
                <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                  Because our Daly City community is also home to our signature{' '}
                  <strong className="text-[#D8C7A5]">Legacies™ Memory Care</strong> program, families caring for someone with Alzheimer’s disease or dementia can step away knowing our staff understands memory loss with patience, warmth, and respect.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="px-6 py-3.5 rounded-full bg-[#C98268] text-white text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5] hover:text-[#3B2348] transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Talk With Our Daly City Team</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <Link
                  href="/memory-care"
                  className="px-5 py-3.5 rounded-full border border-[#D8C7A5]/40 text-[#D8C7A5] hover:bg-white/10 text-xs sm:text-sm font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Full-Time Memory Care</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right 6 Columns: 3 Reassurance Pillars in Deep Plum Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#22122B] border border-[#D8C7A5]/25 space-y-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#8FAF78] font-semibold">
                  <span>01 · No Guilt, Only Partnership</span>
                  <HeartHandshake className="w-4 h-4 text-[#D8C7A5]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4ED]">
                  A Warm Community Extension of Your Care
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed">
                  We listen closely to the routines you’ve built at home—from how your loved one takes their morning tea to what helps them relax in the evening—so their stay feels familiar rather than disruptive.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-[#22122B] border border-[#D8C7A5]/25 space-y-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#8FAF78] font-semibold">
                  <span>02 · Dementia-Aware Support</span>
                  <ShieldCheck className="w-4 h-4 text-[#D8C7A5]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4ED]">
                  Experienced With Memory Changes &amp; Daily Reassurance
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed">
                  If your loved one is living with memory loss, a regular hotel or unfamiliar sitter can feel disorienting. Our 24-hour staff is experienced in gentle redirection, dignified personal care, and calm communal engagement.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-[#22122B] border border-[#D8C7A5]/25 space-y-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#8FAF78] font-semibold">
                  <span>03 · A Relationship for the Future</span>
                  <Users className="w-4 h-4 text-[#D8C7A5]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4ED]">
                  Someone in Your Corner Whenever Needs Change
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed">
                  Once your loved one has stayed with us for Respite Care, you have a familiar team in Daly City you can turn to for future short-term stays or if your family ever considers a longer-term transition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: FLUID HORIZONTAL TIMELINE OF THE GUEST & FAMILY EXPERIENCE
            Steps From Inquiry to Assessment to Stay
            (Explicitly labeled as an Example Workflow, Not Guaranteed Service Terms)
        ==================================================================== */}
        <section
          id="stay-timeline"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#D8C7A5]/25 grid-line-b"
        >
          <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                From First Call to Warm Welcome
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                How a Short-Term Respite Stay Comes Together
              </h2>
            </div>

            {/* Required Blueprint Disclaimer Badge */}
            <div className="px-4 py-2.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] text-xs text-[#3B2348] font-medium self-start xl:self-end flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#A65D43] shrink-0" aria-hidden="true" />
              <span>
                <strong>Example Workflow:</strong> Illustrative guide — confirm specific admission steps &amp; terms with our team.
              </span>
            </div>
          </div>

          {/* Fluid Horizontal Timeline Track (5 Connected Nodes) */}
          <div className="w-full mb-10">
            <div
              className="flex sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3 overflow-x-auto pb-2 sm:pb-0 snap-x snap-mandatory relative"
              role="tablist"
              aria-label="Respite Care example workflow timeline"
            >
              {RESPITE_TIMELINE_STEPS.map((step, index) => {
                const isSelected = step.id === activeTimelineId;
                const isPast = index < activeTimelineIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveTimelineId(step.id)}
                    className={`text-left p-5 rounded-2xl border transition-all cursor-pointer shrink-0 w-[76vw] sm:w-auto snap-start flex flex-col justify-between space-y-3 relative ${
                      isSelected
                        ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-lg'
                        : isPast
                        ? 'bg-[#FCFBF8] text-[#3B2348] border-[#8FAF78]'
                        : 'bg-[#FCFBF8] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isSelected
                            ? 'text-[#D8C7A5]'
                            : isPast
                            ? 'text-[#5F7F49]'
                            : 'text-[#A65D43]'
                        }`}
                      >
                        {step.stepNumber}
                      </span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                          isSelected
                            ? 'bg-[#C98268] text-white'
                            : isPast
                            ? 'bg-[#8FAF78]/30 text-[#3B2348]'
                            : 'bg-[#D8C7A5]/40 text-[#3B2348]'
                        }`}
                      >
                        {index + 1}
                      </span>
                    </div>

                    <div>
                      <span
                        className={`text-[11px] uppercase tracking-wider block ${
                          isSelected ? 'text-[#8FAF78]' : 'text-[#29272B]/65'
                        }`}
                      >
                        {step.phaseLabel}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug mt-0.5">
                        {step.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Timeline Step Detailed Panel */}
          <div className="w-full herbarium-mount rounded-[32px] p-7 sm:p-10 lg:p-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left 5 Columns: Step Narrative & Controls */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center justify-between border-b border-[#D8C7A5] pb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-bold">
                    {activeTimelineStep.stepNumber} of 05 · {activeTimelineStep.phaseLabel}
                  </span>
                  <span className="text-xs font-serif italic text-[#3B2348]">
                    Example Stay Journey
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-semibold text-[#3B2348] leading-tight">
                  {activeTimelineStep.title}
                </h3>

                <p className="font-serif italic text-base sm:text-lg text-[#A65D43]">
                  {activeTimelineStep.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                  {activeTimelineStep.description}
                </p>

                {/* Prev / Next Timeline Step Controls */}
                <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={activeTimelineIndex === 0}
                      onClick={() => {
                        const prev = RESPITE_TIMELINE_STEPS[activeTimelineIndex - 1];
                        if (prev) setActiveTimelineId(prev.id);
                      }}
                      className="px-4 py-2.5 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold disabled:opacity-40 hover:border-[#3B2348] transition cursor-pointer disabled:cursor-not-allowed inline-flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Previous Step</span>
                    </button>

                    <button
                      type="button"
                      disabled={activeTimelineIndex === RESPITE_TIMELINE_STEPS.length - 1}
                      onClick={() => {
                        const next = RESPITE_TIMELINE_STEPS[activeTimelineIndex + 1];
                        if (next) setActiveTimelineId(next.id);
                      }}
                      className="px-4 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold disabled:opacity-40 hover:bg-[#C98268] transition cursor-pointer disabled:cursor-not-allowed inline-flex items-center gap-1.5"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="text-xs font-semibold text-[#A65D43] hover:text-[#3B2348] underline cursor-pointer"
                  >
                    Start Step 01 Today →
                  </button>
                </div>
              </div>

              {/* Right 7 Columns: What Families Prepare vs How Our Team Supports */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-3.5">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold block">
                      What Families Can Prepare
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#29272B]/90">
                      {activeTimelineStep.whatFamiliesPrepare.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-3.5">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold block">
                      How Our Daly City Team Helps
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#29272B]/90">
                      {activeTimelineStep.howOurTeamSupports.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Explicit Workflow Disclaimer Footer */}
                <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#29272B]/80">
                  <p>{activeTimelineStep.workflowDisclaimer}</p>
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="font-semibold text-[#3B2348] hover:text-[#C98268] whitespace-nowrap inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                    <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: RESPITE CARE FAQs & FAMILY PLANNING GUIDE
            Duration, Medication, Accommodations, and Costs
        ==================================================================== */}
        <section
          id="respite-faqs"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left 5 Columns: Respite Planning Checklist */}
            <div className="lg:col-span-5 herbarium-mount rounded-[32px] p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-script script-display text-[#C98268] block">
                  Planning a Short-Term Stay
                </span>
                <h2
                  className="font-serif text-3xl sm:text-4xl text-[#3B2348] font-semibold leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Questions to Ask When Planning Respite Care
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  Because short-term Respite Care stays depend on current suite availability and an individualized care review, a quick conversation with our Daly City team is the easiest way to plan ahead.
                </p>

                <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-3">
                  <h3 className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Helpful Details to Discuss With Us</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#3B2348] font-serif italic">
                    <li>
                      “What suite formats are currently available for our target dates in Daly City?”
                    </li>
                    <li>
                      “What physician paperwork or medication documentation is needed prior to check-in?”
                    </li>
                    <li>
                      “How is the daily or weekly Respite Care rate structured for my loved one’s support level?”
                    </li>
                    <li>
                      “What personal items from home help a short-term guest feel most comfortable?”
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#29272B]/70 block">
                    Direct Community Desk
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
                  <span>Request Availability</span>
                </button>
              </div>
            </div>

            {/* Right 7 Columns: Category-Filtered Respite FAQ Accordion */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                    Clear, Honest Guidance
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2348] font-semibold mt-1">
                    Frequently Asked Questions About Respite Care
                  </h3>
                </div>

                {/* Category Filter Buttons */}
                <div
                  className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5]"
                  role="group"
                  aria-label="Filter Respite Care questions by topic"
                >
                  {(
                    [
                      'All',
                      'Duration & Availability',
                      'Accommodations & Inclusions',
                      'Care & Medication',
                      'Costs & Planning',
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

              {/* Accordion Items */}
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
                  Comparing short-term Respite Care with full-time support for Alzheimer’s or dementia?
                </p>
                <Link
                  href="/memory-care"
                  className="px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition whitespace-nowrap inline-flex items-center gap-1.5"
                >
                  <span>Explore Memory Care</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8 & 9: CLOSING SCHEDULE A VISIT / RESPITE INQUIRY (DEMO) + FOOTER
        ==================================================================== */}
        <VisitAndFooterSection
          presetCareOption="Respite Care"
          onNavigateToSection={handleNavigateToSection}
        />
      </main>
    </div>
  );
}
