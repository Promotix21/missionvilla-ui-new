'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  HeartHandshake,
  CheckSquare,
  Square,
  HelpCircle,
  ArrowUpRight,
  ChevronDown,
  RotateCcw,
  ClipboardCheck,
  Search,
  Compass,
  BookOpen,
  FileSpreadsheet,
  Home,
  Sparkles,
  Check,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  FAMILY_DECISION_PATHWAYS,
  CARE_VS_RESPITE_COMPARISON,
  VISIT_QUESTION_THEMES,
  VISIT_CHECKLIST_QUESTIONS,
  FAMILY_INVOLVEMENT_CHAPTERS,
  FAMILY_FAQ_CATEGORIES,
  FOR_FAMILIES_FAQS,
  filterVisitChecklistQuestions,
  buildVisitQuestionsInquiryNote,
  filterFamilyFaqs,
  type FamilyDecisionPathway,
  type VisitQuestionTheme,
  type FamilyInvolvementChapter,
  type FamilyFaqCategory,
  type VisitInquiryInput,
} from '@/lib/mission-villa-data';

export default function ForFamiliesPage() {
  const [fontScale, setFontScale] = useState<number>(1);

  // Section 2: Family-Decision Guide state
  const [activePathwayId, setActivePathwayId] = useState<FamilyDecisionPathway['id']>(
    FAMILY_DECISION_PATHWAYS[0].id
  );

  // Section 3: Questions to Bring to a Visit interactive notebook state
  const [activeQuestionTheme, setActiveQuestionTheme] =
    useState<VisitQuestionTheme>('All Themes');
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<string[]>([
    'vq-legacies-story',
    'vq-suite-formats',
    'vq-cost-inclusions',
  ]);

  // Section 4: Family Involvement & Personalization chapter state
  const [activeChapterId, setActiveChapterId] = useState<FamilyInvolvementChapter['id']>(
    FAMILY_INVOLVEMENT_CHAPTERS[0].id
  );

  // Section 5: Grouped FAQs (Care, Suites, Cost, Visits) state
  const [activeFaqCategory, setActiveFaqCategory] =
    useState<FamilyFaqCategory>('All Topics');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([
    'ff-faq-care-programs',
    'ff-faq-suites-formats',
    'ff-faq-cost-determination',
    'ff-faq-visits-schedule',
  ]);

  // Section 7: Shared Visit & Inquiry Form presets
  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >('Memory Care');
  const [presetSuitePreference, setPresetSuitePreference] = useState<
    VisitInquiryInput['suitePreference'] | undefined
  >(undefined);
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  const activePathway =
    FAMILY_DECISION_PATHWAYS.find((p) => p.id === activePathwayId) ||
    FAMILY_DECISION_PATHWAYS[0];

  const filteredQuestions = filterVisitChecklistQuestions(
    VISIT_CHECKLIST_QUESTIONS,
    activeQuestionTheme
  );

  const activeChapter =
    FAMILY_INVOLVEMENT_CHAPTERS.find((c) => c.id === activeChapterId) ||
    FAMILY_INVOLVEMENT_CHAPTERS[0];

  const filteredFaqs = filterFamilyFaqs(
    FOR_FAMILIES_FAQS,
    activeFaqCategory,
    faqSearchQuery
  );

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

  const toggleQuestionSelection = (id: string) => {
    setSelectedQuestionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSendQuestionsToInquiry = () => {
    const note = buildVisitQuestionsInquiryNote(
      VISIT_CHECKLIST_QUESTIONS,
      selectedQuestionIds,
      activePathway.title
    );
    handleNavigateToSection(
      'schedule-visit',
      activePathway.presetCareOption,
      undefined,
      note
    );
  };

  const toggleFaqOpen = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAllVisibleFaqs = () => {
    const visibleIds = filteredFaqs.map((f) => f.id);
    setOpenFaqIds((prev) => Array.from(new Set([...prev, ...visibleIds])));
  };

  const handleCollapseAllFaqs = () => {
    setOpenFaqIds([]);
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F4ED] text-[#29272B] flex flex-col selection:bg-[#3B2348] selection:text-[#F7F4ED]">
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
            SECTION 1: EMPATHETIC HERO — FAMILY DECISION & CONVERSATION FOLIO
            Distinct visual composition for Page 09 (/for-families):
            Full-width 12-column editorial monograph pairing empathetic guidance
            for spouses and adult children with a curated Family Companion Folio
            and direct jump controls. Strictly non-clinical: no diagnosis tool,
            risk scoring, or implied medical advice.
        ==================================================================== */}
        <section
          id="for-families-hero"
          className="w-full min-h-[calc(100svh-104px)] py-3 lg:py-5 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture flex flex-col justify-between relative overflow-hidden"
        >
          {/* Top Breadcrumb & Page 09 Identity Bar */}
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
                For Families &amp; FAQs
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] text-[#29272B]/75">
              <span className="font-semibold uppercase tracking-[0.18em] text-[#3B2348]">
                Family Guidance Monograph · Decision Guide, Tour Notebook &amp; Grouped FAQs
              </span>
              <span className="hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="hidden sm:inline tabular-nums">
                CA License #{MISSION_VILLA_FACTS.licenseNumber}
              </span>
            </div>
          </div>

          {/* Center 12-Column Split: Empathetic Narrative + Family Companion Folio */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch my-auto py-3">
            {/* Left 6 Columns: Headline, Empathetic Orientation & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Guidance for the Whole Family
                </span>

                <h1
                  className="font-serif text-[clamp(1.95rem,3.25vw,3.3rem)] leading-[1.06] tracking-[-0.02em] text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  A Calm, Honest Companion for Families Navigating Care Decisions.
                </h1>

                <p className="text-sm sm:text-[15px] text-[#29272B]/85 leading-relaxed">
                  Beginning a conversation about{' '}
                  <Link
                    href="/memory-care"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Legacies™ Memory Care
                  </Link>{' '}
                  or a temporary{' '}
                  <Link
                    href="/respite-care"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Respite Care
                  </Link>{' '}
                  stay is rarely just a logistical checklist—it is an act of love and stewardship for a parent, spouse, or relative. We created this family guide to help you weigh care options, prepare meaningful questions for your Daly City visit, and find straightforward answers on suites, transitions, and{' '}
                  <Link
                    href="/financial-planning"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    financial planning
                  </Link>
                  .
                </p>
              </div>

              {/* 3-Column Unboxed Family Guide Pillars Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-3 border-t border-b border-[#3B2348]/15">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                    01 · Family-Decision Guide
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block">
                    Memory vs. Respite Care
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    Compare ongoing support vs. short-term caregiver relief
                  </span>
                </div>

                <div className="space-y-0.5 sm:border-l sm:border-[#3B2348]/15 sm:pl-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F7F49] font-semibold block">
                    02 · Tour Notebook
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block">
                    Questions for Your Visit
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    Check practical questions to bring to 995 East Market Street
                  </span>
                </div>

                <div className="space-y-0.5 sm:border-l sm:border-[#3B2348]/15 sm:pl-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                    03 · Grouped FAQs
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block">
                    Care, Suites, Cost &amp; Visits
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    Accessible answers organized by what families ask most
                  </span>
                </div>
              </div>

              {/* Primary & Secondary Action Bar */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    handleNavigateToSection(
                      'schedule-visit',
                      'Memory Care',
                      undefined,
                      'Would like to schedule a family visit and discuss Memory Care and Respite Care options.'
                    )
                  }
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition shadow-md cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{MISSION_VILLA_FACTS.primaryCtas.scheduleVisit}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('family-decision-guide')}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#FCFBF8] border border-[#3B2348]/30 text-[#3B2348] text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  <Compass className="w-4 h-4 text-[#A65D43] shrink-0" aria-hidden="true" />
                  <span>Family-Decision Guide ↓</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('grouped-family-faqs')}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#FCFBF8] border border-[#3B2348]/30 text-[#3B2348] text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  <HelpCircle className="w-4 h-4 text-[#5F7F49] shrink-0" aria-hidden="true" />
                  <span>Grouped FAQs ↓</span>
                </button>
              </div>
            </div>

            {/* Right 6 Columns: Family Companion Folio & Quick-Jump Index */}
            <div className="lg:col-span-6 flex">
              <div className="herbarium-mount w-full rounded-[28px] bg-[#FCFBF8] border border-[#D8C7A5] p-5 sm:p-6 shadow-xl flex flex-col justify-between gap-4">
                {/* Folio Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#D8C7A5]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                      Family Guidance Monograph · 995 East Market Street
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3B2348]">
                      First Conversations, Visits &amp; Transitions
                    </h2>
                  </div>
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2348] hover:text-[#C98268] transition tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                    <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
                  </a>
                </div>

                {/* Editorial Photography Plate (Clearly Labeled Illustrative) */}
                <div className="relative rounded-2xl overflow-hidden bg-[#22122B] h-44 sm:h-52 border border-[#D8C7A5]/60">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85"
                    alt="Illustrative placeholder: Warm, sunlit residential sitting room designed for unhurried family visits and conversation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/40 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-[#F7F4ED] space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                      ILLUSTRATIVE — REPLACE BEFORE LAUNCH
                    </span>
                    <p className="font-serif text-sm sm:text-base font-medium leading-snug">
                      You don’t have to have every question figured out before you call or visit—our Daly City team is here to listen first.
                    </p>
                  </div>
                </div>

                {/* Quick Jump Folio Index Rows */}
                <div className="divide-y divide-[#D8C7A5]/70 border-t border-b border-[#D8C7A5]">
                  {[
                    {
                      code: 'I',
                      title: 'How to Consider Memory Care vs. Temporary Respite Care',
                      meta: '4 Family Reflection Pathways · Side-by-Side Comparison',
                      targetId: 'family-decision-guide',
                    },
                    {
                      code: 'II',
                      title: 'Questions to Bring to a Visit (Interactive Tour Notebook)',
                      meta: '8 Checkable Questions Across Care, Suites, Dining & Cost',
                      targetId: 'questions-for-your-visit',
                    },
                    {
                      code: 'III',
                      title: 'Family Involvement, Suite Personalization & Transitions',
                      meta: 'Life-Story Intake · Familiar Keepsakes · Ongoing Dialogue',
                      targetId: 'family-involvement-and-personalization',
                    },
                    {
                      code: 'IV',
                      title: 'Accessible FAQs Grouped by Care, Suites, Cost & Visits',
                      meta: '12 Source-Grounded Answers · Filter & Search',
                      targetId: 'grouped-family-faqs',
                    },
                  ].map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => handleNavigateToSection(item.targetId)}
                      className="w-full py-2.5 px-2 flex items-center justify-between gap-3 text-left hover:bg-[#F7F4ED] transition group cursor-pointer"
                    >
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span className="font-serif text-xs font-bold text-[#A65D43] w-5 shrink-0">
                          {item.code}.
                        </span>
                        <div className="min-w-0">
                          <span className="font-serif text-sm font-semibold text-[#3B2348] group-hover:text-[#C98268] transition block truncate">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-[#29272B]/70 block truncate">
                            {item.meta}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight
                        className="w-4 h-4 text-[#3B2348]/60 group-hover:text-[#C98268] shrink-0 transition"
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom First-Screen Non-Clinical Transparency Bar */}
          <div className="w-full pt-2.5 border-t border-[#3B2348]/15 flex flex-wrap items-center justify-between gap-2 text-xs text-[#29272B]/75">
            <span>
              Compassionate Family Decision Guide · Not a clinical diagnosis tool, risk score, or medical advice
            </span>
            <span className="font-medium text-[#3B2348]">
              Serving Daly City &amp; San Mateo County Families · {MISSION_VILLA_FACTS.address.full}
            </span>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: VISUAL SIGNATURE — ELEGANT FAMILY-DECISION GUIDE
            (HOW TO CONSIDER MEMORY CARE VS. TEMPORARY RESPITE CARE)
            Interactive 4-pathway reflection explorer + side-by-side comparison
            ledger across 5 core dimensions. Strictly non-clinical: zero
            diagnosis scoring, zero risk calculators, zero medical claims.
        ==================================================================== */}
        <section
          id="family-decision-guide"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#22122B] text-[#F7F4ED] border-b border-[#D8C7A5]/20"
        >
          <div className="w-full space-y-14">
            {/* Section Header */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/15 pb-8">
              <div className="lg:col-span-7 space-y-3">
                <span className="font-script script-display text-[#D8C7A5] block">
                  Family-Decision Guide
                </span>
                <h2
                  className="font-serif section-display text-[#F7F4ED] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  How to Consider Full-Time Memory Care vs. Temporary Respite Care
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#F7F4ED]/80 leading-relaxed">
                  Mission Villa focuses exclusively on two interconnected offerings in Daly City: ongoing{' '}
                  <strong className="text-[#D8C7A5] font-semibold">Legacies™ Memory Care</strong> and short-term{' '}
                  <strong className="text-[#D8C7A5] font-semibold">Respite Care</strong>. Select the reflection below that sounds closest to your family’s current conversation.
                </p>
              </div>
            </div>

            {/* Part A: Interactive 4-Pathway Family Reflection Explorer */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left 5 Columns: 4 Reflection Pathway Buttons */}
              <div
                className="lg:col-span-5 flex flex-col justify-between gap-3.5"
                role="tablist"
                aria-label="Family situation reflection pathways"
              >
                {FAMILY_DECISION_PATHWAYS.map((pathway) => {
                  const isSelected = pathway.id === activePathway.id;
                  return (
                    <button
                      key={pathway.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActivePathwayId(pathway.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'bg-[#F7F4ED] text-[#3B2348] border-[#D8C7A5] shadow-xl'
                          : 'bg-[#3B2348]/55 text-[#F7F4ED] border-white/15 hover:bg-[#3B2348] hover:border-[#D8C7A5]/50'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold">
                          <span className={isSelected ? 'text-[#A65D43]' : 'text-[#D8C7A5]'}>
                            {pathway.index}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className={isSelected ? 'text-[#3B2348]/75' : 'text-[#F7F4ED]/75'}>
                            {pathway.kicker}
                          </span>
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-bold leading-snug">
                          {pathway.title}
                        </h3>
                        <p
                          className={`text-xs leading-relaxed italic ${
                            isSelected ? 'text-[#29272B]/80' : 'text-[#F7F4ED]/75'
                          }`}
                        >
                          {pathway.familySituation}
                        </p>
                      </div>
                      <span
                        className={`mt-1 text-xs font-bold shrink-0 ${
                          isSelected ? 'text-[#A65D43]' : 'text-[#D8C7A5]'
                        }`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right 7 Columns: Active Pathway Guidance Monograph */}
              <div className="lg:col-span-7 flex">
                <div className="w-full rounded-[28px] bg-[#3B2348] border border-[#D8C7A5]/30 p-6 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/15">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold">
                        <span>{activePathway.index}</span>
                        <span aria-hidden="true">·</span>
                        <span>Relevant Focus: {activePathway.primaryOption}</span>
                      </div>
                      <Link
                        href={activePathway.recommendedRouteHref}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8C7A5] hover:text-white transition"
                      >
                        <span>{activePathway.recommendedRouteLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>

                    <blockquote className="font-serif italic text-lg sm:text-xl text-[#D8C7A5] leading-relaxed">
                      {activePathway.familySituation}
                    </blockquote>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4ED] leading-tight">
                      {activePathway.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#F7F4ED]/90 leading-relaxed">
                      {activePathway.howToThinkAboutIt}
                    </p>
                  </div>

                  {/* Signs This Path Helps Your Family */}
                  <div className="space-y-3 bg-[#22122B]/70 rounded-2xl p-5 sm:p-6 border border-white/10">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#8FAF78] font-semibold block">
                      Practical Considerations for Your Family Conversation
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F4ED]/90">
                      {activePathway.keySignsOfFit.map((sign) => (
                        <li key={sign} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#8FAF78] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How Both Programs Connect + Action */}
                  <div className="space-y-4 pt-4 border-t border-white/15">
                    <p className="text-xs sm:text-sm text-[#D8C7A5]/90 leading-relaxed">
                      <strong className="text-[#F7F4ED] font-semibold">How Our Programs Connect:</strong>{' '}
                      {activePathway.howBothProgramsConnect}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                      <div className="space-y-1 max-w-xl">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                          Suggested First Question for Our Team
                        </span>
                        <p className="font-serif italic text-sm text-[#F7F4ED]">
                          “{activePathway.suggestedFirstQuestion}”
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleNavigateToSection(
                            'schedule-visit',
                            activePathway.presetCareOption,
                            undefined,
                            `Exploring ${activePathway.primaryOption}: "${activePathway.suggestedFirstQuestion}"`
                          )
                        }
                        className="px-5 py-3 rounded-full bg-[#D8C7A5] text-[#22122B] text-xs font-bold hover:bg-white transition cursor-pointer shrink-0 whitespace-nowrap"
                      >
                        Discuss This Situation With Us →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part B: Side-by-Side Editorial Comparison Ledger (Memory Care vs. Respite Care) */}
            <div className="w-full rounded-[28px] bg-[#FCFBF8] text-[#29272B] border border-[#D8C7A5] shadow-2xl overflow-hidden">
              <div className="bg-[#3B2348] text-[#F7F4ED] px-6 sm:px-10 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D8C7A5]/30">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                    Side-by-Side Program Reference · Mission Villa Senior Living
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    Comparing Legacies™ Memory Care &amp; Short-Term Respite Care
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/memory-care"
                    className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#D8C7A5] text-[#F7F4ED] hover:text-[#22122B] text-xs font-semibold transition whitespace-nowrap"
                  >
                    Memory Care Page →
                  </Link>
                  <Link
                    href="/respite-care"
                    className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#D8C7A5] text-[#F7F4ED] hover:text-[#22122B] text-xs font-semibold transition whitespace-nowrap"
                  >
                    Respite Care Page →
                  </Link>
                </div>
              </div>

              {/* Desktop Column Headers */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-6 px-8 py-4 bg-[#F7F4ED] border-b border-[#D8C7A5] text-[11px] uppercase tracking-[0.18em] font-semibold text-[#3B2348]">
                <div className="col-span-3">01 · Comparison Dimension</div>
                <div className="col-span-4">02 · Legacies™ Memory Care (Ongoing)</div>
                <div className="col-span-5">03 · Short-Term Respite Care &amp; Family Takeaway</div>
              </div>

              <div className="divide-y divide-[#D8C7A5]">
                {CARE_VS_RESPITE_COMPARISON.map((row, idx) => (
                  <div
                    key={row.id}
                    className="p-6 sm:px-8 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start hover:bg-[#F7F4ED]/60 transition"
                  >
                    <div className="lg:col-span-3 space-y-1">
                      <span className="text-[11px] font-bold text-[#A65D43] uppercase tracking-wider block tabular-nums">
                        Dimension 0{idx + 1}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#3B2348]">
                        {row.dimension}
                      </h4>
                    </div>

                    <div className="lg:col-span-4 space-y-1.5">
                      <span className="lg:hidden text-[11px] uppercase tracking-wider font-semibold text-[#3B2348] block">
                        Legacies™ Memory Care:
                      </span>
                      <p className="text-xs sm:text-sm text-[#29272B]/90 leading-relaxed">
                        {row.memoryCareApproach}
                      </p>
                    </div>

                    <div className="lg:col-span-5 space-y-2.5">
                      <div>
                        <span className="lg:hidden text-[11px] uppercase tracking-wider font-semibold text-[#A65D43] block">
                          Short-Term Respite Care:
                        </span>
                        <p className="text-xs sm:text-sm text-[#29272B]/90 leading-relaxed">
                          {row.respiteCareApproach}
                        </p>
                      </div>
                      <p className="text-xs text-[#3B2348] bg-[#F7F4ED] px-3.5 py-2 rounded-xl border border-[#D8C7A5]/80">
                        <strong className="font-semibold">Family Note:</strong> {row.familyTakeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: QUESTIONS TO BRING TO A VISIT (INTERACTIVE TOUR NOTEBOOK)
            Checkable, theme-filterable questions that relatives can bring on an
            in-person tour of 995 East Market Street or attach directly to the
            visit inquiry form with one click.
        ==================================================================== */}
        <section
          id="questions-for-your-visit"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture"
        >
          <div className="w-full space-y-10">
            {/* Header & Selected Counter Action */}
            <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#3B2348]/15 pb-8">
              <div className="space-y-2.5 max-w-3xl">
                <span className="font-script script-display text-[#C98268] block">
                  Preparing for Your Walkthrough
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Questions to Bring to a Visit in Daly City
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  Walking into a senior living community for the first time is much easier when you have a clear set of questions in hand. Check the questions below that matter most to your family—then click <strong className="text-[#3B2348]">Bring Selected Questions to Visit Form</strong> so our team can prepare thoughtful answers for your visit.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <span className="text-xs font-semibold text-[#3B2348] tabular-nums">
                  {selectedQuestionIds.length} of {VISIT_CHECKLIST_QUESTIONS.length} questions selected
                </span>
                <button
                  type="button"
                  onClick={handleSendQuestionsToInquiry}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition shadow-md cursor-pointer whitespace-nowrap"
                >
                  <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Bring Selected Questions to Visit Form ({selectedQuestionIds.length})</span>
                </button>
              </div>
            </div>

            {/* Theme Filter Bar & Quick Selection Controls */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3">
              <div
                className="flex flex-wrap items-center gap-2"
                role="group"
                aria-label="Filter tour questions by theme"
              >
                {VISIT_QUESTION_THEMES.map((theme) => {
                  const isSelected = activeQuestionTheme === theme;
                  const count =
                    theme === 'All Themes'
                      ? VISIT_CHECKLIST_QUESTIONS.length
                      : VISIT_CHECKLIST_QUESTIONS.filter((q) => q.theme === theme).length;
                  return (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => setActiveQuestionTheme(theme)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                          : 'bg-[#FCFBF8] text-[#3B2348] border border-[#D8C7A5] hover:bg-[#D8C7A5]/35'
                      }`}
                    >
                      <span>{theme}</span>
                      <span className="ml-1.5 opacity-75 tabular-nums">({count})</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedQuestionIds(VISIT_CHECKLIST_QUESTIONS.map((q) => q.id))
                  }
                  className="px-3.5 py-2 rounded-full border border-[#3B2348]/25 bg-[#FCFBF8] text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  Select All 8
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedQuestionIds([])}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full border border-[#3B2348]/25 bg-[#FCFBF8] text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  <RotateCcw className="w-3 h-3" aria-hidden="true" />
                  <span>Clear</span>
                </button>
              </div>
            </div>

            {/* 2-Column Interactive Tour Question Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredQuestions.map((item) => {
                const isChecked = selectedQuestionIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl p-6 border transition flex flex-col justify-between gap-4 ${
                      isChecked
                        ? 'bg-[#FCFBF8] border-[#3B2348] shadow-md'
                        : 'bg-[#FCFBF8]/75 border-[#D8C7A5] hover:border-[#3B2348]/50'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 text-[11px] font-medium text-[#29272B]/70">
                          <span className="font-bold text-[#A65D43] tabular-nums">
                            {item.code}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#3B2348] font-semibold">{item.theme}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleQuestionSelection(item.id)}
                          aria-pressed={isChecked}
                          aria-label={`Include question ${item.code} in your visit checklist`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2348] hover:text-[#C98268] transition cursor-pointer shrink-0"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-[#3B2348]" aria-hidden="true" />
                          ) : (
                            <Square className="w-4 h-4 text-[#29272B]/50" aria-hidden="true" />
                          )}
                          <span>{isChecked ? 'In Your Tour List' : 'Add to Tour List'}</span>
                        </button>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B2348] leading-snug">
                        “{item.question}”
                      </h3>

                      <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                        <strong className="text-[#3B2348] font-semibold">Why It Matters:</strong>{' '}
                        {item.whyItMatters}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#D8C7A5]/70 text-xs text-[#29272B]/80">
                      <strong className="text-[#5F7F49] font-semibold">
                        What to Listen For on Tour:
                      </strong>{' '}
                      {item.whatToListenFor}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: FAMILY INVOLVEMENT, TRANSITIONS & SUITE PERSONALIZATION
            Asymmetric 12-column editorial storyboard showing how relatives
            remain at the heart of life at Mission Villa—from life-story intake
            and suite personalization to communal visits and ongoing dialogue.
        ==================================================================== */}
        <section
          id="family-involvement-and-personalization"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#EFECE3] grid-line-b"
        >
          <div className="w-full space-y-12">
            {/* Section Header & Chapter Switcher */}
            <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6">
              <div className="space-y-2.5 max-w-3xl">
                <span className="font-script script-display text-[#C98268] block">
                  Transitions &amp; Partnership
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Family Involvement &amp; Personalizing Your Loved One’s Space
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  Moving into Memory Care or arriving for a Respite stay never means stepping back from family life. Explore the four chapters below to see how families shape daily routines, personalize suites, and stay connected in Daly City.
                </p>
              </div>

              {/* 4-Chapter Selector Tabs */}
              <div
                className="flex flex-wrap items-center gap-2"
                role="tablist"
                aria-label="Family involvement and transition chapters"
              >
                {FAMILY_INVOLVEMENT_CHAPTERS.map((chapter) => {
                  const isSelected = chapter.id === activeChapter.id;
                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveChapterId(chapter.id)}
                      className={`px-4 py-2.5 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#3B2348] text-[#F7F4ED] shadow-md'
                          : 'bg-[#FCFBF8] text-[#3B2348] border border-[#D8C7A5] hover:bg-[#D8C7A5]/35'
                      }`}
                    >
                      {chapter.stepNumber} · {chapter.kicker}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 12-Column Asymmetric Story Showcase */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left 7 Columns: Editorial Photograph with Inverted Cutout */}
              <div className="lg:col-span-7 bento-frame bg-[#22122B] min-h-[360px] sm:min-h-[460px] relative flex flex-col justify-between overflow-hidden rounded-[28px]">
                <img
                  src={activeChapter.placeholderImage.src}
                  alt={activeChapter.placeholderImage.alt}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover mood-grade transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/35 to-transparent" />

                <div className="cutout-tl-cream">
                  <div className="px-4 py-2 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-semibold">
                    {activeChapter.stepNumber} · {activeChapter.kicker}
                  </div>
                </div>

                <div className="relative z-10 p-6 sm:p-10 mt-auto space-y-2 text-[#F7F4ED] max-w-2xl">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                    {activeChapter.placeholderImage.status}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                    {activeChapter.title}
                  </h3>
                  <p className="text-xs text-[#F7F4ED]/80">
                    {activeChapter.placeholderImage.caption}
                  </p>
                </div>
              </div>

              {/* Right 5 Columns: Practical Participation & Suite Links */}
              <div className="lg:col-span-5 herbarium-mount rounded-[28px] bg-[#FCFBF8] border border-[#D8C7A5] p-6 sm:p-9 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="border-b border-[#D8C7A5] pb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                      {activeChapter.subtitle}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2348] mt-1">
                      {activeChapter.title}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                    {activeChapter.narrative}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                      Ways Your Family Participates
                    </span>
                    <ul className="space-y-2.5">
                      {activeChapter.practicalWaysToParticipate.map((way) => (
                        <li
                          key={way}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#29272B]/90"
                        >
                          <Check
                            className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{way}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#D8C7A5]">
                  <p className="text-xs text-[#3B2348] italic bg-[#F7F4ED] p-3.5 rounded-xl border border-[#D8C7A5]/80">
                    {activeChapter.reassuranceNote}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/suites-and-floor-plans"
                      className="flex-1 py-3 px-4 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition text-center whitespace-nowrap"
                    >
                      Suites &amp; Personalization →
                    </Link>
                    <Link
                      href="/life-at-mission-villa"
                      className="py-3 px-4 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition whitespace-nowrap"
                    >
                      Life at Mission Villa
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: ACCESSIBLE FAQS GROUPED BY CARE, SUITES, COST, AND VISITS
            Visual signature grouped accordion with category filter tabs, live
            keyword search, expand/collapse all, and direct inquiry actions.
        ==================================================================== */}
        <section
          id="grouped-family-faqs"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture"
        >
          <div className="w-full space-y-10">
            {/* Section Header */}
            <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#3B2348]/15 pb-8">
              <div className="space-y-2.5 max-w-3xl">
                <span className="font-script script-display text-[#C98268] block">
                  Straightforward Answers
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Frequently Asked Questions Grouped by Care, Suites, Cost &amp; Visits
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  Browse all 12 questions organized across <strong className="text-[#3B2348]">Care</strong>, <strong className="text-[#3B2348]">Suites</strong>, <strong className="text-[#3B2348]">Cost</strong>, and <strong className="text-[#3B2348]">Visits</strong>, filter by category, or search by keyword.
                </p>
              </div>

              {/* Expand / Collapse All Controls */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={handleExpandAllVisibleFaqs}
                  className="px-4 py-2.5 rounded-full bg-[#FCFBF8] border border-[#3B2348]/25 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  Expand Visible ({filteredFaqs.length})
                </button>
                <button
                  type="button"
                  onClick={handleCollapseAllFaqs}
                  className="px-4 py-2.5 rounded-full bg-[#FCFBF8] border border-[#3B2348]/25 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* Category Group Filter Tabs + Search Input Bar */}
            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div
                className="flex flex-wrap items-center gap-2"
                role="tablist"
                aria-label="Filter FAQs by category"
              >
                {FAMILY_FAQ_CATEGORIES.map((category) => {
                  const isSelected = activeFaqCategory === category;
                  const count =
                    category === 'All Topics'
                      ? FOR_FAMILIES_FAQS.length
                      : FOR_FAMILIES_FAQS.filter((f) => f.category === category).length;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveFaqCategory(category)}
                      className={`px-4 py-2.5 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                          : 'bg-[#FCFBF8] text-[#3B2348] border border-[#D8C7A5] hover:bg-[#D8C7A5]/35'
                      }`}
                    >
                      <span>{category}</span>
                      <span className="ml-1.5 opacity-75 tabular-nums">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="relative w-full lg:w-80">
                <label htmlFor="family-faq-search" className="sr-only">
                  Search Family FAQs
                </label>
                <Search
                  className="w-4 h-4 text-[#3B2348]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="family-faq-search"
                  type="search"
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  placeholder="Search care, suites, cost, visits..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-xs sm:text-sm text-[#29272B]"
                />
                {faqSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setFaqSearchQuery('')}
                    aria-label="Clear FAQ search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#3B2348] hover:text-[#C98268] cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Grouped FAQ Accordion Display */}
            {filteredFaqs.length === 0 ? (
              <div className="p-10 rounded-3xl bg-[#FCFBF8] border border-[#D8C7A5] text-center space-y-4">
                <p className="font-serif text-xl text-[#3B2348] font-semibold">
                  No FAQ items matched “{faqSearchQuery}” in {activeFaqCategory}.
                </p>
                <p className="text-sm text-[#29272B]/75">
                  Try clearing your search filter or ask our Daly City team directly at{' '}
                  {MISSION_VILLA_FACTS.phone.formatted}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFaqCategory('All Topics');
                    setFaqSearchQuery('');
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer"
                >
                  Reset FAQ Filters
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {(['Care', 'Suites', 'Cost', 'Visits'] as const)
                  .filter(
                    (group) =>
                      activeFaqCategory === 'All Topics' || activeFaqCategory === group
                  )
                  .map((group) => {
                    const groupItems = filteredFaqs.filter((f) => f.category === group);
                    if (groupItems.length === 0) return null;

                    const groupSubtitle =
                      group === 'Care'
                        ? 'Legacies™ Memory Care, 24-hour staff support & short-term Respite Care'
                        : group === 'Suites'
                        ? 'Private Suites, Companion Units, Jack & Jill layouts & personal touches'
                        : group === 'Cost'
                        ? 'Assessment-informed pricing, consolidated inclusions & planning pathways'
                        : 'Scheduling a Daly City walkthrough, first conversations & family visits';

                    return (
                      <div key={group} className="space-y-4">
                        {/* Group Header Strip */}
                        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#3B2348]/20 pb-3">
                          <div className="flex items-baseline gap-3">
                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2348]">
                              {group} FAQs
                            </h3>
                            <span className="text-xs text-[#29272B]/75">
                              · {groupSubtitle}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-[#A65D43] tabular-nums">
                            {groupItems.length} {groupItems.length === 1 ? 'Question' : 'Questions'}
                          </span>
                        </div>

                        {/* Accordion Items in Group */}
                        <div className="space-y-3">
                          {groupItems.map((faq) => {
                            const isOpen = openFaqIds.includes(faq.id);
                            return (
                              <div
                                key={faq.id}
                                className="rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] overflow-hidden transition-all shadow-sm"
                              >
                                <button
                                  type="button"
                                  aria-expanded={isOpen}
                                  onClick={() => toggleFaqOpen(faq.id)}
                                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#D8C7A5]/20 transition-colors"
                                >
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A65D43]">
                                      <span className="tabular-nums">{faq.code}</span>
                                      <span aria-hidden="true">·</span>
                                      <span className="text-[#3B2348]/75">{faq.category}</span>
                                    </div>
                                    <span className="font-serif text-base sm:text-xl font-bold text-[#3B2348] block">
                                      {faq.question}
                                    </span>
                                  </div>
                                  <ChevronDown
                                    className={`w-5 h-5 text-[#3B2348] shrink-0 mt-1 transition-transform duration-200 ${
                                      isOpen ? 'rotate-180' : ''
                                    }`}
                                    aria-hidden="true"
                                  />
                                </button>

                                {isOpen && (
                                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#D8C7A5]/50 space-y-4">
                                    <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                                      {faq.answer}
                                    </p>

                                    {faq.confirmationNote && (
                                      <p className="text-xs text-[#3B2348] bg-[#F7F4ED] px-4 py-2.5 rounded-xl border border-[#D8C7A5]">
                                        <strong className="font-semibold">Tour Confirmation Note:</strong>{' '}
                                        {faq.confirmationNote}
                                      </p>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                                      {faq.relatedRouteHref.startsWith('#') ? (
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleNavigateToSection(
                                              faq.relatedRouteHref.replace('#', '')
                                            )
                                          }
                                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2348] hover:text-[#C98268] transition cursor-pointer"
                                        >
                                          <span>{faq.relatedRouteLabel}</span>
                                        </button>
                                      ) : (
                                        <Link
                                          href={faq.relatedRouteHref}
                                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                                        >
                                          <span>{faq.relatedRouteLabel}</span>
                                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                                        </Link>
                                      )}

                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleNavigateToSection(
                                            'schedule-visit',
                                            faq.category === 'Care' &&
                                              faq.id.includes('respite')
                                              ? 'Respite Care'
                                              : 'Memory Care',
                                            undefined,
                                            `Follow-up on FAQ (${faq.code}): "${faq.question}"`
                                          )
                                        }
                                        className="text-xs font-semibold text-[#A65D43] hover:text-[#3B2348] transition cursor-pointer"
                                      >
                                        Ask Our Team About This Question →
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: CONTEXTUAL LINKS TO FINANCIAL PLANNING, CARE & CONTACT
            Editorial bridge connecting families to Financial Planning
            (/financial-planning), Suites (/suites-and-floor-plans), and direct
            visit scheduling (#schedule-visit).
        ==================================================================== */}
        <section
          id="contextual-planning-bridge"
          className="w-full py-16 lg:py-20 fluid-canvas bg-[#D8C7A5]/30 grid-line-b"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Financial Planning & Blank Paper Ledger */}
            <div className="lg:col-span-4 rounded-[28px] bg-[#FCFBF8] border border-[#D8C7A5] p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold">
                  <span>Next Step · Cost Clarity</span>
                  <FileSpreadsheet className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3B2348]">
                  Financial Planning &amp; Paper-Ledger Worksheet
                </h3>
                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  Explore the four factors that shape Memory Care and Respite Care pricing, review grouped monthly inclusions, and compare your household bills using our blank Paper-Ledger Worksheet.
                </p>
              </div>
              <Link
                href="/financial-planning"
                className="inline-flex items-center justify-between px-5 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition"
              >
                <span>Open Financial Planning Page</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Card 2: Memory Care & Respite Care Programs */}
            <div className="lg:col-span-4 rounded-[28px] bg-[#FCFBF8] border border-[#D8C7A5] p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#5F7F49] font-semibold">
                  <span>Next Step · Living Options</span>
                  <HeartHandshake className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3B2348]">
                  Explore Memory Care, Respite Care &amp; Suites
                </h3>
                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  Read in depth about our Legacies™ Memory Care approach, short-term Respite Care stays, and Private, Companion Unit, and Jack &amp; Jill suite formats.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/memory-care"
                  className="flex-1 text-center px-4 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition whitespace-nowrap"
                >
                  Memory Care →
                </Link>
                <Link
                  href="/respite-care"
                  className="flex-1 text-center px-4 py-3 rounded-full border border-[#3B2348]/30 text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition whitespace-nowrap"
                >
                  Respite Care →
                </Link>
              </div>
            </div>

            {/* Card 3: Direct Contact & Personal Visit */}
            <div className="lg:col-span-4 rounded-[28px] bg-[#3B2348] text-[#F7F4ED] p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-md">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold">
                  <span>Next Step · First Conversation</span>
                  <Phone className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#F7F4ED]">
                  Talk With Our Daly City Team Today
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/85 leading-relaxed">
                  Call us at {MISSION_VILLA_FACTS.phone.formatted} or schedule an unhurried walkthrough at {MISSION_VILLA_FACTS.address.full}.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleNavigateToSection('schedule-visit')}
                className="inline-flex items-center justify-between px-5 py-3.5 rounded-full bg-[#D8C7A5] text-[#22122B] text-xs font-bold hover:bg-white transition cursor-pointer"
              >
                <span>Schedule a Visit or Request Call</span>
                <span aria-hidden="true">↓</span>
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7 & 8: SHARED VISIT / INQUIRY FORM & ARCHITECTURAL FOOTER
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
