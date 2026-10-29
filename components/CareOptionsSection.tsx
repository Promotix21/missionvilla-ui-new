'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Phone, MessageSquareHeart, HelpCircle } from 'lucide-react';
import {
  CARE_PROGRAMS,
  CARE_GUIDANCE_SCENARIOS,
  MISSION_VILLA_FACTS,
  type CareGuidanceScenario,
} from '@/lib/mission-villa-data';

interface CareOptionsSectionProps {
  onNavigateToSection: (sectionId: string, presetCare?: 'Memory Care' | 'Respite Care') => void;
}

export default function CareOptionsSection({
  onNavigateToSection,
}: CareOptionsSectionProps) {
  const [selectedScenarioId, setSelectedScenarioId] =
    useState<CareGuidanceScenario['id']>('dementia-support');

  const activeScenario =
    CARE_GUIDANCE_SCENARIOS.find((s) => s.id === selectedScenarioId) ||
    CARE_GUIDANCE_SCENARIOS[0];

  return (
    <section
      id="care-options"
      className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F7F4ED]"
    >
      {/* Part 1: Section Header */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
        <div className="lg:col-span-7 space-y-2">
          <span className="font-script script-display text-[#C98268] block">
            Dedicated Support in Daly City
          </span>
          <h2
            className="font-serif section-display text-[#3B2348] font-semibold"
            style={{ textWrap: 'balance' }}
          >
            Our Two Focused Care Offerings: Memory Care &amp; Respite Care
          </h2>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-[#3B2348]/15 lg:pl-10">
          <p className="text-[#29272B]/85 text-base sm:text-lg leading-relaxed">
            Rather than trying to be everything to everyone, Mission Villa focuses wholeheartedly on what we do best: supporting seniors living with Alzheimer’s disease or dementia, and providing welcoming short-term Respite Care stays.
          </p>
        </div>
      </div>

      {/* Part 2: Asymmetric 12-Column Dual Care Showcases (7/5 + 5/7 Editorial Rhythm) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20">
        {CARE_PROGRAMS.map((program, idx) => {
          const isMemoryCare = program.id === 'memory-care';
          const colSpanClass = isMemoryCare ? 'lg:col-span-7' : 'lg:col-span-5';

          return (
            <article
              key={program.id}
              className={`${colSpanClass} bento-frame bg-[#FCFBF8] border border-[#D8C7A5] flex flex-col justify-between shadow-sm`}
            >
              {/* Visual Header Stage with Inverted-Radius Cutout */}
              <div className="h-64 sm:h-80 relative overflow-hidden bg-[#3B2348]">
                <img
                  src={program.placeholderImage.src}
                  alt={program.placeholderImage.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mood-grade transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#3B2348]/30 to-transparent" />

                {/* Top-Left Inverted Cutout */}
                <div className="cutout-tl-cream">
                  <span
                    className={`inline-block px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider uppercase ${
                      isMemoryCare
                        ? 'bg-[#3B2348] text-[#D8C7A5]'
                        : 'bg-[#8FAF78] text-[#3B2348]'
                    }`}
                  >
                    {program.badge}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-5 left-6 right-6 text-[#F7F4ED] space-y-1">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-medium block">
                    {program.programSignature}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-9 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="font-serif italic text-base sm:text-lg text-[#3B2348]">
                    {program.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                    {program.summary}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/70 space-y-1.5">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#A65D43] font-semibold block">
                      Who This Supports
                    </span>
                    <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                      {program.whoItSupports}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-semibold">
                      What Families Can Expect
                    </h4>
                    <ul className="space-y-2">
                      {program.highlights.map((item) => (
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
                </div>

                {/* Action Footer */}
                <div className="pt-5 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      onNavigateToSection(
                        'schedule-visit',
                        idx === 0 ? 'Memory Care' : 'Respite Care'
                      )
                    }
                    className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer ${
                      isMemoryCare
                        ? 'bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268]'
                        : 'bg-[#C98268] text-white hover:bg-[#3B2348]'
                    }`}
                  >
                    <span>{program.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                    <span>Ask a question: {MISSION_VILLA_FACTS.phone.formatted}</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Part 3: Empathetic Family Care Reflection Guide (Non-Clinical Exploratory Selector) */}
      <div className="w-full rounded-[32px] bg-[#D8C7A5]/30 border border-[#D8C7A5] p-6 sm:p-10 lg:p-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left 5 Columns: Family Situation Prompts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold">
                <MessageSquareHeart className="w-4 h-4" aria-hidden="true" />
                <span>Thoughtful Family Reflection Guide</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2348] font-semibold">
                Which Conversation Sounds Most Like Your Family Today?
              </h3>
              <p className="text-xs sm:text-sm text-[#29272B]/80 leading-relaxed">
                Select a family situation below to explore how Mission Villa’s Memory Care and Respite Care programs can support you—along with helpful questions to ask when you visit.
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

          {/* Right 7 Columns: Tailored Program Guidance & Tour Questions */}
          <div className="lg:col-span-7 herbarium-mount rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#D8C7A5] pb-5">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                  Relevant Mission Villa Offering
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
              {/* Column A: What to Expect */}
              <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/80 space-y-3">
                <h5 className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                  How Our Team Supports You
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

              {/* Column B: Helpful Questions for Your Visit */}
              <div className="p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/80 space-y-3">
                <h5 className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Questions to Bring on Your Visit</span>
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
              <p className="text-xs text-[#29272B]/70">
                Every resident’s care needs are discussed personally with our team in Daly City.
              </p>
              <button
                type="button"
                onClick={() =>
                  onNavigateToSection(
                    'schedule-visit',
                    activeScenario.recommendedProgramId === 'respite-care'
                      ? 'Respite Care'
                      : 'Memory Care'
                  )
                }
                className="px-6 py-3 rounded-full bg-[#C98268] text-white text-xs sm:text-sm font-semibold hover:bg-[#3B2348] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Schedule a Conversation With Our Team</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
