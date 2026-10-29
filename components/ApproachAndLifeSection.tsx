'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Utensils, Users, Sun } from 'lucide-react';
import {
  APPROACH_PILLARS,
  DAILY_LIFE_MOMENTS,
  MISSION_VILLA_FACTS,
  type ApproachPillar,
} from '@/lib/mission-villa-data';

interface ApproachAndLifeSectionProps {
  onNavigateToSection: (sectionId: string, presetCare?: 'Memory Care' | 'Respite Care') => void;
}

export default function ApproachAndLifeSection({
  onNavigateToSection,
}: ApproachAndLifeSectionProps) {
  const [activePillarId, setActivePillarId] = useState<ApproachPillar['id']>('dignity');
  const [selectedMomentId, setSelectedMomentId] = useState<string>(DAILY_LIFE_MOMENTS[0].id);

  const activePillar =
    APPROACH_PILLARS.find((p) => p.id === activePillarId) || APPROACH_PILLARS[0];

  const momentIcons = [Sun, Sparkles, Utensils, Users];

  return (
    <>
      {/* =====================================================================
          SECTION 4: OUR APPROACH TO CARE (DEEP PLUM FULL-WIDTH STAGE)
      ====================================================================== */}
      <section
        id="our-approach"
        className="w-full bg-[#3B2348] text-[#F7F4ED] py-20 lg:py-28 fluid-canvas relative overflow-hidden"
      >
        {/* Top Stage Header + Interactive Pillar Selector */}
        <div className="w-full flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-8 mb-12">
          <div className="space-y-2 max-w-3xl">
            <span className="font-script script-display text-[#D8C7A5] block">
              Comfort · Community · Belonging
            </span>
            <h2
              className="font-serif section-display text-[#F7F4ED] font-semibold"
              style={{ textWrap: 'balance' }}
            >
              Our Approach to Care: What Matters Every Day
            </h2>
          </div>

          {/* Interactive Pillar Switcher Tabs */}
          <div
            className="flex flex-wrap items-center gap-2 bg-white/10 p-1.5 rounded-full"
            role="tablist"
            aria-label="Our Care Pillars"
          >
            {APPROACH_PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#D8C7A5] text-[#3B2348] shadow-sm'
                      : 'text-[#F7F4ED]/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {pillar.index} · {pillar.motto}
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Asymmetric 12-Column Interactive Spotlight */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left 5 Columns: Active Pillar Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.22em] text-[#8FAF78] font-semibold block">
                Pillar {activePillar.index} · {activePillar.motto}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F4ED] font-semibold leading-tight">
                {activePillar.title}
              </h3>
              <p className="font-serif italic text-lg text-[#D8C7A5]">
                {activePillar.subtitle}
              </p>
            </div>

            <p className="text-[#F7F4ED]/85 text-base sm:text-lg leading-relaxed">
              {activePillar.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-white/15">
              <span className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                Core Commitments
              </span>
              <ul className="space-y-2.5">
                {activePillar.keyPrinciples.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-start gap-2.5 text-sm text-[#F7F4ED]/90"
                  >
                    <Check
                      className="w-4 h-4 text-[#8FAF78] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right 7 Columns: Visual Stage with Plum Inverted-Radius Cutout */}
          <div className="lg:col-span-7">
            <div className="bento-frame h-[380px] sm:h-[460px] xl:h-[520px] w-full relative bg-[#22122B] border border-white/15">
              <img
                src={activePillar.placeholderImage.src}
                alt={activePillar.placeholderImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover mood-grade transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#3B2348]/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:right-64 text-[#F7F4ED] z-10 space-y-1">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                  {activePillar.motto}
                </span>
                <p className="font-serif text-lg sm:text-xl italic">
                  “{activePillar.placeholderImage.caption}”
                </p>
              </div>

              {/* Bottom-Right Inverted Cutout on Deep Plum Background */}
              <div className="cutout-br-plum hidden sm:block">
                <button
                  type="button"
                  onClick={() => onNavigateToSection('schedule-visit')}
                  className="px-6 py-3.5 rounded-2xl bg-[#C98268] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2.5 hover:bg-[#D8C7A5] hover:text-[#3B2348] transition-colors cursor-pointer"
                >
                  <span>Visit Us in Daly City</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Overview Triptych Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/15">
          {APPROACH_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                className={`text-left p-6 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? 'bg-white/12 border-[#D8C7A5] shadow-lg'
                    : 'bg-white/[0.04] border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                  <span className="text-[#8FAF78]">
                    {pillar.index} · {pillar.motto}
                  </span>
                  <span className="text-[#D8C7A5]">
                    {isSelected ? 'Viewing' : 'Explore →'}
                  </span>
                </div>
                <h4 className="font-serif text-xl font-semibold text-[#F7F4ED]">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/75 line-clamp-2">
                  {pillar.description}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: EVERYDAY LIFE AT MISSION VILLA (EDITORIAL PHOTO STORY)
      ====================================================================== */}
      <section
        id="daily-life"
        className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F7F4ED] paper-texture"
      >
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="space-y-2 max-w-3xl">
            <span className="font-script script-display text-[#C98268] block">
              Living Fully Every Day
            </span>
            <h2
              className="font-serif section-display text-[#3B2348] font-semibold"
              style={{ textWrap: 'balance' }}
            >
              Everyday Life at Mission Villa: Warmth, Rhythm &amp; Connection
            </h2>
          </div>

          <p className="text-[#29272B]/80 text-base sm:text-lg max-w-[52ch]">
            From unhurried mornings to chef-prepared meals and engaging daily activities, community life is structured around familiarity, comfort, and genuine human connection.
          </p>
        </div>

        {/* Full-Width 4-Card Editorial Story Grid with Interactive Selection */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {DAILY_LIFE_MOMENTS.map((moment, idx) => {
            const IconComponent = momentIcons[idx % momentIcons.length];
            const isHighlighted = moment.id === selectedMomentId;

            return (
              <article
                key={moment.id}
                onClick={() => setSelectedMomentId(moment.id)}
                className={`bento-frame p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer border ${
                  isHighlighted
                    ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-xl'
                    : 'bg-[#FCFBF8] text-[#29272B] border-[#D8C7A5] hover:border-[#3B2348]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold mb-4">
                    <span
                      className={`uppercase tracking-wider ${
                        isHighlighted ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                      }`}
                    >
                      {moment.rhythmLabel}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 font-serif italic ${
                        isHighlighted ? 'text-[#8FAF78]' : 'text-[#3B2348]'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{moment.category}</span>
                    </span>
                  </div>

                  <div className="h-48 rounded-2xl overflow-hidden mb-5 bg-[#22122B]">
                    <img
                      src={moment.placeholderImage.src}
                      alt={moment.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mood-grade transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-2xl font-semibold mb-2.5 leading-snug ${
                      isHighlighted ? 'text-[#F7F4ED]' : 'text-[#3B2348]'
                    }`}
                  >
                    {moment.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isHighlighted ? 'text-[#F7F4ED]/85' : 'text-[#29272B]/80'
                    }`}
                  >
                    {moment.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t text-xs font-medium flex items-center justify-between ${
                    isHighlighted
                      ? 'border-white/15 text-[#D8C7A5]'
                      : 'border-[#D8C7A5]/70 text-[#3B2348]'
                  }`}
                >
                  <span>{moment.detailNote}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Callout Strip */}
        <div className="w-full mt-12 p-6 sm:p-8 rounded-3xl bg-[#FCFBF8] border border-[#D8C7A5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
              Experience Our Community Firsthand
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#3B2348] font-semibold">
              Want to learn more about our daily activities, dining, and Legacies™ Memory Care program?
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigateToSection('schedule-visit')}
              className="px-6 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>{MISSION_VILLA_FACTS.primaryCtas.scheduleVisit}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
