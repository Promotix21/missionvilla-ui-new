'use client';

import React, { useState } from 'react';
import {
  Phone,
  ArrowUpRight,
  MapPin,
  HeartHandshake,
  Home,
  ShieldCheck,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { MISSION_VILLA_FACTS } from '@/lib/mission-villa-data';

interface HeroStageProps {
  lovedOneName: string;
  onChangeLovedOneName: (name: string) => void;
  onReplayIntro: () => void;
  onNavigateToSection: (sectionId: string, presetCare?: 'Memory Care' | 'Respite Care') => void;
}

type HeroFocusKey = 'legacies' | 'respite' | 'suites';

interface HeroFocusProfile {
  id: HeroFocusKey;
  pillLabel: string;
  archPlateLabel: string;
  archQuote: (name: string) => string;
  journalNote: (name: string) => string;
  ctaLabel: string;
  targetSection: string;
  presetCare?: 'Memory Care' | 'Respite Care';
}

const HERO_FOCUS_PROFILES: Record<HeroFocusKey, HeroFocusProfile> = {
  legacies: {
    id: 'legacies',
    pillLabel: 'Memory Care',
    archPlateLabel: 'Plate 01 · Legacies™ Memory Care Sanctuary',
    archQuote: (name) =>
      `“Where ${name}’s personal history, familiar daily rhythms, and quiet dignity come first—never a generic routine.”`,
    journalNote: (name) =>
      `Honoring ${name} with specialized Alzheimer’s & dementia support, life-story programming, and compassionate family partnership.`,
    ctaLabel: 'Explore Memory Care',
    targetSection: 'care-options',
    presetCare: 'Memory Care',
  },
  respite: {
    id: 'respite',
    pillLabel: 'Respite Care',
    archPlateLabel: 'Plate 02 · Restorative Short-Term Respite Care',
    archQuote: (name) =>
      `“A welcoming, homelike stay where ${name} enjoys attentive care, warm companionship, and chef-prepared dining while family caregivers rest.”`,
    journalNote: (name) =>
      `Giving family caregivers dependable peace of mind while ${name} is welcomed into daily activities, dining, and comfortable suites.`,
    ctaLabel: 'Explore Respite Care',
    targetSection: 'care-options',
    presetCare: 'Respite Care',
  },
  suites: {
    id: 'suites',
    pillLabel: 'Suites & Dining',
    archPlateLabel: 'Plate 03 · Homelike Suites & Shared Harvest Table',
    archQuote: (name) =>
      `“Private and shared suites with private bathrooms, inviting lounges, and freshly prepared daily meals for ${name}.”`,
    journalNote: (name) =>
      `Both private and shared companion suites at 995 East Market Street include a private bathroom, housekeeping, and chef-prepared meals.`,
    ctaLabel: 'View Suites & Spaces',
    targetSection: 'suites-preview',
  },
};

export default function HeroStage({
  lovedOneName,
  onChangeLovedOneName,
  onNavigateToSection,
}: HeroStageProps) {
  const [activeFocus, setActiveFocus] = useState<HeroFocusKey>('legacies');

  const cleanName = lovedOneName.trim();
  const displayLovedOne = cleanName.length > 0 ? cleanName : 'Your Loved One';
  const focusProfile = HERO_FOCUS_PROFILES[activeFocus];

  return (
    <>
      {/* =====================================================================
          FIRST-FOLD DESKTOP STAGE: Fits 100% within calc(100svh - 104px)
          on 1440x900 and 1920x1080 viewports without vertical clipping
      ====================================================================== */}
      <section
        id="top"
        className="w-full py-5 lg:py-4 lg:h-[calc(100svh-104px)] lg:min-h-[640px] flex items-center fluid-canvas grid-line-b paper-texture relative overflow-hidden"
      >
        {/* Subtle Dappled Conservatory Light Layer */}
        <div className="dappled-sunlight absolute inset-0" aria-hidden="true" />

        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch relative z-10">
          {/* LEFT 5 COLUMNS: Choreographed Editorial Monograph + Interactive Family Personalizer */}
          <div className="lg:col-span-5 flex flex-col justify-between py-0.5 z-10 space-y-5 lg:space-y-0">
            {/* Upper Editorial Narrative & Primary CTAs */}
            <div className="space-y-2.5 xl:space-y-3">
              <div className="hero-fade">
                <span className="font-script script-display text-[#C98268] block">
                  A Place to Belong
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#3B2348]/85 font-semibold block mt-0.5">
                  Daly City, California · Memory Care &amp; Respite Care
                </span>
              </div>

              <h1 className="font-serif editorial-h1 text-[#3B2348] font-semibold">
                <span className="line-clip">
                  <span className="line-word hero-line">The honor</span>
                </span>
                <span className="line-clip">
                  <span className="line-word hero-line">they deserve,</span>
                </span>
                <span className="line-clip">
                  <span className="line-word hero-line italic font-normal text-[#C98268]">
                    the care you’ll love.
                  </span>
                </span>
              </h1>

              <p className="text-[#29272B]/85 text-xs sm:text-sm xl:text-[15px] leading-relaxed max-w-[54ch] hero-fade">
                At <strong>{MISSION_VILLA_FACTS.name}</strong> in Daly City, compassionate{' '}
                <strong>Legacies™ Memory Care</strong> and short-term{' '}
                <strong>Respite Care</strong> come together in a welcoming, homelike community—honoring{' '}
                <span className="font-semibold text-[#3B2348] underline decoration-[#C98268]/70">
                  {displayLovedOne}
                </span>{' '}
                with dignity, familiar routines, and genuine human connection.
              </p>

              {/* Primary & Secondary Action Bar */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1 hero-fade">
                <button
                  type="button"
                  onClick={() =>
                    onNavigateToSection('schedule-visit', focusProfile.presetCare)
                  }
                  className="px-5 xl:px-6 py-2.5 xl:py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] font-medium text-xs sm:text-sm hover:bg-[#C98268] transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>{MISSION_VILLA_FACTS.primaryCtas.scheduleVisit}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigateToSection('care-options')}
                  className="px-4 xl:px-5 py-2.5 xl:py-3 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] text-[#3B2348] font-medium text-xs sm:text-sm hover:border-[#3B2348] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {MISSION_VILLA_FACTS.primaryCtas.exploreCare}
                </button>

                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                  <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
                </a>
              </div>
            </div>

            {/* Lower Interactive Herbarium Family Journal Box (Grounded in Real Mission Villa Offerings) */}
            <div className="herbarium-mount p-4 xl:p-5 rounded-2xl space-y-2.5 xl:space-y-3 hero-fade">
              <div className="flex items-center justify-between border-b border-[#D8C7A5] pb-2 gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A65D43] font-bold block">
                    Interactive Family Care Preview
                  </span>
                  <h2 className="font-serif text-sm sm:text-base xl:text-lg font-semibold text-[#3B2348]">
                    Personalize Mission Villa for Your Family
                  </h2>
                </div>
                <span className="font-script text-xl text-[#5F7F49] shrink-0">
                  Chapter I
                </span>
              </div>

              {/* Input 1: First Name of Loved One */}
              <div>
                <label
                  htmlFor="loved-one-input"
                  className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#3B2348] mb-1"
                >
                  First Name of Your Parent, Spouse, or Loved One:
                </label>
                <div className="flex gap-2">
                  <input
                    id="loved-one-input"
                    type="text"
                    value={lovedOneName}
                    onChange={(e) => onChangeLovedOneName(e.target.value)}
                    placeholder="e.g., Eleanor, Arthur, or Mom..."
                    className="w-full px-3 py-1.5 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none font-serif text-xs sm:text-sm text-[#3B2348]"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      onChangeLovedOneName(cleanName === 'Eleanor' ? '' : 'Eleanor')
                    }
                    className="px-3 py-1.5 rounded-xl bg-[#D8C7A5]/45 text-[#3B2348] text-[11px] font-semibold hover:bg-[#D8C7A5] transition whitespace-nowrap cursor-pointer"
                  >
                    {cleanName === 'Eleanor' ? 'Reset' : 'Try “Eleanor”'}
                  </button>
                </div>
              </div>

              {/* Input 2: Care & Living Focus Selector */}
              <div>
                <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#3B2348] mb-1">
                  What Matters Most for{' '}
                  <span className="underline decoration-[#C98268]">{displayLovedOne}</span>{' '}
                  Right Now?
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(HERO_FOCUS_PROFILES) as HeroFocusKey[]).map((key) => {
                    const item = HERO_FOCUS_PROFILES[key];
                    const isSelected = activeFocus === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveFocus(key)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition whitespace-nowrap text-center cursor-pointer ${
                          isSelected
                            ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                            : 'bg-[#F7F4ED] border border-[#D8C7A5] text-[#3B2348] hover:border-[#3B2348]'
                        }`}
                      >
                        {item.pillLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Preview Summary */}
              <div className="text-[11px] text-[#29272B]/90 bg-[#8FAF78]/15 px-3 py-2 rounded-xl border border-[#8FAF78]/40 flex items-center justify-between gap-2">
                <p className="italic leading-snug">
                  <Sparkles
                    className="w-3.5 h-3.5 text-[#5F7F49] inline mr-1 -mt-0.5"
                    aria-hidden="true"
                  />
                  {focusProfile.journalNote(displayLovedOne)}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    onNavigateToSection(
                      focusProfile.targetSection,
                      focusProfile.presetCare
                    )
                  }
                  className="text-[11px] font-bold text-[#3B2348] hover:text-[#C98268] underline shrink-0 cursor-pointer whitespace-nowrap"
                >
                  {focusProfile.ctaLabel} →
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Monumental Botanical Arch Conservatory + Layered Herbarium Specimens */}
          <div className="lg:col-span-7 relative flex items-center justify-center h-full min-h-[420px] sm:min-h-[500px] lg:min-h-0 py-1">
            {/* Center Archway Portal (Matches 100svh Column Height) */}
            <div
              id="hero-arch-portal"
              className="arch-portal w-full lg:w-[88%] h-[420px] sm:h-[500px] lg:h-full relative shadow-2xl border-4 border-[#FCFBF8] bg-[#3B2348] group"
            >
              {/* REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO */}
              <img
                id="hero-arch-img"
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
                alt="Illustrative placeholder: Warm, sunlit residential living and conservatory gathering space"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center mood-grade group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/20 to-transparent" />

              {/* Archival Caption & Action Badge Inside Conservatory Portal */}
              <div className="absolute bottom-5 left-6 right-6 text-[#F7F4ED] z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-md space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#D8C7A5] font-semibold block">
                    {focusProfile.archPlateLabel}
                  </span>
                  <p className="font-serif text-sm sm:text-base xl:text-lg italic leading-snug">
                    {focusProfile.archQuote(displayLovedOne)}
                  </p>
                  <p className="text-[10px] text-[#F7F4ED]/70">
                    Illustrative community photography · Tour 995 East Market St., Daly City
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onNavigateToSection(
                      focusProfile.targetSection,
                      focusProfile.presetCare
                    )
                  }
                  className="bg-[#FCFBF8]/95 hover:bg-[#D8C7A5] text-[#3B2348] px-4 py-2.5 rounded-2xl text-right shadow-lg shrink-0 transition-colors cursor-pointer flex items-center gap-3 self-start sm:self-end"
                >
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-widest text-[#29272B]/70 block">
                      CA License #{MISSION_VILLA_FACTS.licenseNumber}
                    </span>
                    <span className="font-serif text-sm xl:text-base font-bold block whitespace-nowrap">
                      {focusProfile.ctaLabel}
                    </span>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-[#3B2348] text-[#F7F4ED] flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </button>
              </div>
            </div>

            {/* Floating Specimen 1: Olive Branch Herbarium Card (Top-Left Overlap) */}
            <button
              id="floating-specimen-olive"
              type="button"
              onClick={() => onNavigateToSection('care-options', 'Memory Care')}
              className="hidden sm:block herbarium-mount p-3 w-48 xl:w-52 rounded-2xl absolute left-0 top-6 z-20 -rotate-3 text-left hover:rotate-0 transition-transform cursor-pointer"
            >
              <div className="h-20 xl:h-24 rounded-xl overflow-hidden mb-2 bg-[#3B2348]">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&q=80"
                  alt="Illustrative botanical olive foliage"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mood-grade"
                />
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#5F7F49] font-bold block">
                Signature Program
              </span>
              <p className="font-serif text-[11px] xl:text-xs font-semibold text-[#3B2348] mt-0.5 leading-snug">
                Legacies™ Memory Care &amp; Respite Stays
              </p>
            </button>

            {/* Floating Specimen 2: Blooming Pink Cosmos Card (Bottom-Right Overlap) */}
            <button
              id="floating-specimen-cosmos"
              type="button"
              onClick={() => onNavigateToSection('suites-preview')}
              className="hidden sm:block herbarium-mount p-3.5 w-52 xl:w-56 rounded-2xl absolute right-0 bottom-24 z-20 rotate-3 text-left hover:rotate-0 transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=80"
                  alt="Illustrative sunlit pink cosmos blossom"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-cover shrink-0 border border-[#D8C7A5]"
                />
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#A65D43] font-bold block">
                    Daly City Sanctuary
                  </span>
                  <p className="font-serif text-[11px] xl:text-xs font-semibold text-[#3B2348] leading-snug">
                    Private &amp; Shared Suites with Private Baths
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BELOW-THE-FOLD ARCHITECTURAL TRUST & IDENTITY RIBBON
          (Grounded 100% in Official Mission Villa Facts)
      ====================================================================== */}
      <div className="w-full py-6 fluid-canvas bg-[#FCFBF8] grid-line-b">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#3B2348]/10 text-[#3B2348] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#3B2348]">
                Daly City Location
              </h3>
              <p className="text-xs text-[#29272B]/80 mt-0.5">
                {MISSION_VILLA_FACTS.address.full} — accessible for Peninsula and San Francisco families.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#8FAF78]/25 text-[#3B2348] flex items-center justify-center shrink-0 mt-0.5">
              <HeartHandshake className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#3B2348]">
                Memory Care &amp; Respite Care
              </h3>
              <p className="text-xs text-[#29272B]/80 mt-0.5">
                Specialized support for seniors living with Alzheimer’s or dementia, plus flexible short-term stays.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D8C7A5]/45 text-[#3B2348] flex items-center justify-center shrink-0 mt-0.5">
              <Home className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#3B2348]">
                Homelike Suites &amp; Spaces
              </h3>
              <p className="text-xs text-[#29272B]/80 mt-0.5">
                Private and shared suites with private bathrooms, welcoming lounges, and chef-prepared dining.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C98268]/20 text-[#A65D43] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#3B2348]">
                Licensed &amp; Family-Centered
              </h3>
              <p className="text-xs text-[#29272B]/80 mt-0.5">
                California RCFE License #{MISSION_VILLA_FACTS.licenseNumber} · Call{' '}
                <a href={MISSION_VILLA_FACTS.phone.href} className="font-semibold underline">
                  {MISSION_VILLA_FACTS.phone.raw}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
