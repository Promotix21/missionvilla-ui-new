'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Phone, ChevronDown, HeartHandshake, Shield } from 'lucide-react';
import {
  LIVING_SPACE_OPTIONS,
  MISSION_VILLA_FACTS,
  type LivingSpaceOption,
} from '@/lib/mission-villa-data';

interface SuitesAndFamilySectionProps {
  onNavigateToSection: (sectionId: string, presetCare?: 'Memory Care' | 'Respite Care') => void;
}

const FAMILY_FAQS = [
  {
    id: 'faq-legacies',
    question: 'What is the Legacies™ Memory Care program at Mission Villa?',
    answer:
      'Our Legacies™ Memory Care program focuses on honoring each resident’s life story, personal preferences, and sense of dignity. By learning about a resident’s background, family connections, and comforting routines, our team provides compassionate daily support tailored to the individual.',
  },
  {
    id: 'faq-suites',
    question: 'What types of suites and living spaces are available?',
    answer:
      'Mission Villa offers both private suites and shared companion suites, each equipped with a private bathroom. Residents also enjoy welcoming communal living spaces, social lounges, and an inviting dining room where chef-prepared meals are served daily.',
  },
  {
    id: 'faq-respite',
    question: 'How does Short-Term Respite Care work for family caregivers?',
    answer:
      'Respite Care provides a supportive short-term stay for seniors when a primary family caregiver needs time to rest, travel, or manage personal obligations. Guests receive attentive care, comfortable suite accommodations, chef-prepared dining, and full participation in daily activities.',
  },
  {
    id: 'faq-visit',
    question: 'How can our family schedule a tour or get pricing information?',
    answer: `You can call our team directly at ${MISSION_VILLA_FACTS.phone.formatted}, email us at ${MISSION_VILLA_FACTS.email.address}, or use the inquiry form on this page to request a visit at ${MISSION_VILLA_FACTS.address.full}.`,
  },
];

export default function SuitesAndFamilySection({
  onNavigateToSection,
}: SuitesAndFamilySectionProps) {
  const [selectedSpaceId, setSelectedSpaceId] =
    useState<LivingSpaceOption['id']>('private-suite');
  const [openFaqId, setOpenFaqId] = useState<string>(FAMILY_FAQS[0].id);

  const activeSpace =
    LIVING_SPACE_OPTIONS.find((s) => s.id === selectedSpaceId) ||
    LIVING_SPACE_OPTIONS[0];

  return (
    <>
      {/* =====================================================================
          SECTION 6: COMFORTABLE LIVING & SUITES PREVIEW
      ====================================================================== */}
      <section
        id="suites-preview"
        className="w-full py-20 lg:py-28 fluid-canvas bg-[#D8C7A5]/25 grid-line-b"
      >
        {/* Header + Suite Option Switcher */}
        <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="font-script script-display text-[#C98268] block">
              Homelike Comfort &amp; Privacy
            </span>
            <h2
              className="font-serif section-display text-[#3B2348] font-semibold"
              style={{ textWrap: 'balance' }}
            >
              Comfortable Suites &amp; Welcoming Communal Spaces
            </h2>
          </div>

          {/* Interactive Suite & Space Selector Tabs */}
          <div
            className="inline-flex flex-wrap p-1.5 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] shadow-sm gap-1 self-start xl:self-end"
            role="tablist"
            aria-label="Suites and living spaces"
          >
            {LIVING_SPACE_OPTIONS.map((option) => {
              const isSelected = option.id === selectedSpaceId;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedSpaceId(option.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#3B2348] text-[#F7F4ED]'
                      : 'text-[#3B2348] hover:bg-[#D8C7A5]/40'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric 12-Column Suite & Space Showcase */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left 7 Columns: Striking Photograph with Inverted Cutout */}
          <div className="lg:col-span-7 bento-frame bg-[#3B2348] min-h-[380px] sm:min-h-[480px] relative flex flex-col justify-between">
            <img
              src={activeSpace.placeholderImage.src}
              alt={activeSpace.placeholderImage.alt}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover mood-grade transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#3B2348]/30 to-transparent" />

            {/* Top-Left Inverted Cutout */}
            <div className="cutout-tl-cream">
              <div className="px-4 py-2 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold">
                {activeSpace.label}
              </div>
            </div>

            <div className="relative z-10 p-6 sm:p-10 mt-auto space-y-2 text-[#F7F4ED] max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                {activeSpace.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-semibold">
                {activeSpace.title}
              </h3>
              <p className="text-[11px] text-[#F7F4ED]/75">
                Illustrative placeholder photography · Schedule an in-person tour in Daly City to view our actual suites and living areas.
              </p>
            </div>
          </div>

          {/* Right 5 Columns: Concise Suite Highlights & Inquiry Action */}
          <div className="lg:col-span-5 herbarium-mount rounded-[28px] p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="border-b border-[#D8C7A5] pb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                  Living at Mission Villa
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#3B2348] mt-1">
                  {activeSpace.title}
                </h4>
              </div>

              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                {activeSpace.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                  Key Highlights
                </span>
                <ul className="space-y-2.5">
                  {activeSpace.features.map((feature) => (
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

            <div className="space-y-4 pt-5 border-t border-[#D8C7A5]">
              <p className="text-xs text-[#29272B]/80 italic bg-[#F7F4ED] p-3.5 rounded-xl border border-[#D8C7A5]/70">
                {activeSpace.note}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigateToSection('schedule-visit')}
                  className="flex-1 py-3.5 px-5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Request Suite Availability &amp; Pricing</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: REASSURANCE FOR FAMILIES (STORY BLOCK + FAQ)
      ====================================================================== */}
      <section
        id="family-reassurance"
        className="w-full py-20 lg:py-28 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left 6 Columns: Meaningful Human Passage for Families */}
          <div className="lg:col-span-6 herbarium-mount rounded-[32px] p-7 sm:p-11 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-script script-display text-[#C98268] block">
                Peace of Mind for Families
              </span>
              <h2
                className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.12] text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                You Don’t Have to Navigate Memory Care Alone.
              </h2>

              <p className="text-base sm:text-lg text-[#29272B]/85 leading-relaxed">
                When a parent, spouse, or loved one is living with Alzheimer’s disease or dementia, families often carry a quiet weight—balancing daily safety concerns with a deep desire to honor their loved one’s independence and dignity.
              </p>

              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                At Mission Villa Senior Living in Daly City, our role is to support your entire family. We welcome your questions, listen carefully to your loved one’s personal history, and keep communication personal and transparent so you can focus on spending meaningful time together as family.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#D8C7A5]">
              <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/70 space-y-1">
                <div className="flex items-center gap-2 text-[#3B2348] font-serif font-semibold text-base">
                  <HeartHandshake className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                  <span>Family Partnership</span>
                </div>
                <p className="text-xs text-[#29272B]/80 leading-relaxed">
                  Ongoing communication and a warm welcome whenever family members visit.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5]/70 space-y-1">
                <div className="flex items-center gap-2 text-[#3B2348] font-serif font-semibold text-base">
                  <Shield className="w-4 h-4 text-[#5F7F49]" aria-hidden="true" />
                  <span>Licensed Daly City Care</span>
                </div>
                <p className="text-xs text-[#29272B]/80 leading-relaxed">
                  California RCFE License #{MISSION_VILLA_FACTS.licenseNumber} at 995 East Market Street.
                </p>
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Practical Questions Families Ask Most */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                Clear, Straightforward Answers
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2348] font-semibold">
                Common Questions From Families Evaluating Care
              </h3>
              <p className="text-sm text-[#29272B]/80">
                Select a topic below or call our Daly City team directly at{' '}
                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="font-semibold text-[#3B2348] underline"
                >
                  {MISSION_VILLA_FACTS.phone.formatted}
                </a>
                .
              </p>
            </div>

            <div className="space-y-3 my-auto">
              {FAMILY_FAQS.map((faq) => {
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
                      <span className="font-serif text-base sm:text-lg font-semibold text-[#3B2348]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#3B2348] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#29272B]/85 leading-relaxed border-t border-[#D8C7A5]/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-5 rounded-2xl bg-[#3B2348] text-[#F7F4ED] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] block">
                  Speak With Our Team Today
                </span>
                <span className="font-serif text-lg font-semibold">
                  We’re here to listen and answer your questions.
                </span>
              </div>
              <a
                href={MISSION_VILLA_FACTS.phone.href}
                className="px-5 py-2.5 rounded-full bg-[#D8C7A5] text-[#3B2348] text-xs sm:text-sm font-semibold hover:bg-white transition inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
