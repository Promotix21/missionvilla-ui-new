'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  ShieldCheck,
  CheckSquare,
  Square,
  FileSpreadsheet,
  HelpCircle,
  ArrowUpRight,
  ChevronDown,
  RotateCcw,
  ClipboardCheck,
  Info,
  Sparkles,
  Scale,
  Home,
  HeartHandshake,
  Utensils,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  FINANCIAL_COST_FACTORS,
  FINANCIAL_INCLUSION_GROUPS,
  FINANCIAL_INCLUSION_ITEMS,
  PAPER_LEDGER_COMPARISON_ROWS,
  FINANCIAL_PLANNING_PATHWAYS,
  FINANCIAL_PLANNING_FAQS,
  filterFinancialInclusions,
  parseBlankLedgerAmount,
  summarizePaperLedger,
  type FinancialCostFactor,
  type FinancialInclusionGroup,
  type VisitInquiryInput,
} from '@/lib/mission-villa-data';

export default function FinancialPlanningPage() {
  const [fontScale, setFontScale] = useState<number>(1);

  // Section 2: Active Cost Factor state
  const [activeFactorId, setActiveFactorId] = useState<FinancialCostFactor['id']>(
    FINANCIAL_COST_FACTORS[0].id
  );

  // Section 3: What May Be Included filter & interactive checklist state
  const [activeInclusionGroup, setActiveInclusionGroup] =
    useState<FinancialInclusionGroup>('All Categories');
  const [checkedInclusionIds, setCheckedInclusionIds] = useState<string[]>([
    'inc-suite-residence',
    'inc-chef-dining',
    'inc-24hr-staff-presence',
  ]);

  // Section 4: Interactive Paper-Ledger Checklist & Blank Comparison Fields state
  // Strictly initialized from row.defaultMonthlyInput ('') — zero pre-filled numbers
  const [ledgerMode, setLedgerMode] = useState<'worksheet' | 'text-checklist'>('worksheet');
  const [checkedLedgerIds, setCheckedLedgerIds] = useState<string[]>([
    'ledger-housing-property',
    'ledger-groceries-dining',
    'ledger-inhome-care',
    'ledger-housekeeping-laundry',
  ]);
  const [userLedgerAmounts, setUserLedgerAmounts] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const row of PAPER_LEDGER_COMPARISON_ROWS) {
      initial[row.id] = row.defaultMonthlyInput;
    }
    return initial;
  });

  // Section 5: Active Way to Plan pathway
  const [activePathwayId, setActivePathwayId] = useState<string>(
    FINANCIAL_PLANNING_PATHWAYS[0].id
  );

  // Section 6: FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState<string>(FINANCIAL_PLANNING_FAQS[0].id);

  // Section 7: Shared Visit & Inquiry Form presets
  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >('Memory Care');
  const [presetSuitePreference, setPresetSuitePreference] = useState<
    VisitInquiryInput['suitePreference'] | undefined
  >(undefined);
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  const activeFactor =
    FINANCIAL_COST_FACTORS.find((f) => f.id === activeFactorId) ||
    FINANCIAL_COST_FACTORS[0];

  const filteredInclusions = filterFinancialInclusions(
    FINANCIAL_INCLUSION_ITEMS,
    activeInclusionGroup
  );

  const ledgerSummary = summarizePaperLedger(
    PAPER_LEDGER_COMPARISON_ROWS,
    checkedLedgerIds,
    userLedgerAmounts
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

  const toggleInclusionCheck = (id: string) => {
    setCheckedInclusionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleLedgerRowCheck = (id: string) => {
    setCheckedLedgerIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLedgerAmountChange = (rowId: string, rawValue: string) => {
    // Allow digits, commas, decimal point, dollar sign, or empty string
    const sanitized = rawValue.replace(/[^0-9.,$]/g, '');
    setUserLedgerAmounts((prev) => ({
      ...prev,
      [rowId]: sanitized,
    }));
    if (sanitized.trim().length > 0 && !checkedLedgerIds.includes(rowId)) {
      setCheckedLedgerIds((prev) => [...prev, rowId]);
    }
  };

  const handleResetPaperLedger = () => {
    const cleared: Record<string, string> = {};
    for (const row of PAPER_LEDGER_COMPARISON_ROWS) {
      cleared[row.id] = '';
    }
    setUserLedgerAmounts(cleared);
    setCheckedLedgerIds([]);
  };

  const handleSendInclusionsToInquiry = () => {
    const selectedTitles = FINANCIAL_INCLUSION_ITEMS.filter((item) =>
      checkedInclusionIds.includes(item.id)
    ).map((item) => item.title);

    const note =
      selectedTitles.length > 0
        ? `Would like to review personalized pricing and confirm these ${selectedTitles.length} inclusions: ${selectedTitles.slice(0, 4).join('; ')}${selectedTitles.length > 4 ? '...' : ''}.`
        : 'Would like to review what is included in monthly Memory Care and Respite Care pricing.';

    handleNavigateToSection('schedule-visit', 'Memory Care', undefined, note);
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
            SECTION 1: COMPASSIONATE HERO — ARCHIVAL LEDGER & GUIDANCE STAGE
            Distinct visual composition for Page 08 (/financial-planning):
            Full-width 12-column editorial monograph pairing compassionate,
            assessment-informed pricing philosophy with an archival Paper-Ledger
            preview folio and direct jump controls.
        ==================================================================== */}
        <section
          id="financial-hero"
          className="w-full min-h-[calc(100svh-104px)] py-3 lg:py-5 fluid-canvas bg-[#F7F4ED] grid-line-b paper-texture flex flex-col justify-between relative overflow-hidden"
        >
          {/* Top Breadcrumb & Page 08 Identity Bar */}
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
                Financial Planning
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] text-[#29272B]/75">
              <span className="font-semibold uppercase tracking-[0.18em] text-[#3B2348]">
                Financial Monograph · Assessment-Informed Planning &amp; Paper-Ledger Checklist
              </span>
              <span className="hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="hidden sm:inline tabular-nums">
                CA License #{MISSION_VILLA_FACTS.licenseNumber}
              </span>
            </div>
          </div>

          {/* Center 12-Column Split: Compassionate Narrative + Archival Ledger Folio */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch my-auto py-3">
            {/* Left 6 Columns: Headline, Assessment Philosophy & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Clarity Without Pressure
                </span>

                <h1
                  className="font-serif text-[clamp(1.95rem,3.25vw,3.3rem)] leading-[1.06] tracking-[-0.02em] text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Thoughtful Financial Planning Shaped Around Your Loved One’s Needs.
                </h1>

                <p className="text-sm sm:text-[15px] text-[#29272B]/85 leading-relaxed">
                  Planning for{' '}
                  <Link
                    href="/memory-care"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Legacies™ Memory Care
                  </Link>{' '}
                  or a short-term{' '}
                  <Link
                    href="/respite-care"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    Respite Care
                  </Link>{' '}
                  stay in Daly City is an important family decision. Because every resident’s daily support needs and{' '}
                  <Link
                    href="/suites-and-floor-plans"
                    className="underline decoration-[#C98268] underline-offset-4 font-semibold text-[#3B2348] hover:text-[#C98268] transition"
                  >
                    suite preference
                  </Link>{' '}
                  are personal, Mission Villa shares straightforward, assessment-informed pricing rather than publishing generic online estimates or artificial savings calculators.
                </p>
              </div>

              {/* 3-Column Unboxed Financial Principles Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-3 border-t border-b border-[#3B2348]/15">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                    01 · Personal Assessment
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block">
                    Tailored Care Plan
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    Guided by actual daily assistance &amp; suite layout
                  </span>
                </div>

                <div className="space-y-0.5 sm:border-l sm:border-[#3B2348]/15 sm:pl-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F7F49] font-semibold block">
                    02 · Consolidated Living
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block">
                    Suite, Dining &amp; Support
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    Housing, 3 daily meals, 24-hr staff, laundry &amp; activities
                  </span>
                </div>

                <div className="space-y-0.5 sm:border-l sm:border-[#3B2348]/15 sm:pl-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                    03 · Honest Worksheet
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3B2348] block">
                    Blank Paper Ledger
                  </span>
                  <span className="text-xs text-[#29272B]/75 block leading-snug">
                    Compare your own home expenses with zero pre-filled numbers
                  </span>
                </div>
              </div>

              {/* Primary & Secondary Action Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    handleNavigateToSection(
                      'schedule-visit',
                      'Memory Care',
                      undefined,
                      'Requesting a personalized Financial Planning discussion and suite pricing overview.'
                    )
                  }
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition shadow-md cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Request a Personalized Cost Discussion</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('paper-ledger-worksheet')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#FCFBF8] border border-[#3B2348]/30 text-[#3B2348] text-xs sm:text-sm font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#A65D43] shrink-0" aria-hidden="true" />
                  <span>Open Paper-Ledger Worksheet ↓</span>
                </button>

                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold text-[#3B2348] hover:text-[#C98268] transition whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                  <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
                </a>
              </div>
            </div>

            {/* Right 6 Columns: Ruled Archival Paper-Ledger Preview Folio */}
            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-[28px] bg-[#22122B] text-[#F7F4ED] border border-[#D8C7A5]/35 p-5 sm:p-6 shadow-xl flex flex-col justify-between gap-4">
                {/* Top Dark-Plum Ledger Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/15">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8FAF78] font-semibold block">
                      Archival Paper-Ledger Folio · Zero Pre-Filled Numbers
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-[#F7F4ED]">
                      Side-by-Side Household vs. Community Ledger
                    </h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[#D8C7A5] text-[11px] font-mono tabular-nums">
                    7 Ruled Lines
                  </span>
                </div>

                {/* Asymmetric Split Inside Folio: Left Botanical Arch Image + Right Blank Ledger Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch my-auto">
                  <div className="sm:col-span-5 relative arch-portal overflow-hidden bg-[#3B2348] min-h-[190px] border border-[#D8C7A5]/40">
                    <img
                      src="/images/illustrative/approach-main.webp"
                      alt="Illustrative placeholder: Warm, unhurried family conversation in a sunlit residential lounge"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mood-grade"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/25 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-[#F7F4ED]">
                      <span className="text-[9px] uppercase tracking-[0.16em] text-[#D8C7A5] font-semibold block">
                        ILLUSTRATIVE — REPLACE BEFORE LAUNCH
                      </span>
                      <p className="font-serif italic text-xs leading-snug mt-0.5">
                        Personal assessment &amp; suite format guide every conversation.
                      </p>
                    </div>
                  </div>

                  {/* Ruled Paper-Ledger Preview Sheet */}
                  <div className="sm:col-span-7 rounded-2xl bg-[#FCFBF8] text-[#29272B] border border-[#D8C7A5] p-4 flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between border-b border-[#D8C7A5] pb-2 text-[10px] font-mono uppercase tracking-wider text-[#A65D43]">
                      <span>Household Expense Line</span>
                      <span>Your Blank Figure</span>
                    </div>
                    <div className="divide-y divide-[#D8C7A5]/70 text-xs">
                      {[
                        { line: '01', label: 'Mortgage, Rent or Property Tax', status: '$ ______ /mo' },
                        { line: '02', label: 'Groceries & 3 Daily Prepared Meals', status: '$ ______ /mo' },
                        { line: '03', label: 'In-Home Caregiver & Night Supervision', status: '$ ______ /mo' },
                      ].map((row) => (
                        <div key={row.line} className="py-2 flex items-center justify-between gap-2">
                          <span className="font-serif font-semibold text-[#3B2348] truncate">
                            {row.line}. {row.label}
                          </span>
                          <span className="font-mono text-[11px] text-[#A65D43] shrink-0">
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNavigateToSection('paper-ledger-worksheet')}
                      className="w-full py-2 px-3 rounded-xl bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer inline-flex items-center justify-between"
                    >
                      <span>Fill In Your Own Figures in Section 4 ↓</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Compact 4-Section Chapter Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/15">
                  {[
                    { code: 'I', title: '4 Cost Drivers', targetId: 'cost-factors' },
                    { code: 'II', title: 'Monthly Inclusions', targetId: 'what-may-be-included' },
                    { code: 'III', title: 'Blank Paper Ledger', targetId: 'paper-ledger-worksheet' },
                    { code: 'IV', title: 'Ways to Plan', targetId: 'ways-to-plan' },
                  ].map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => handleNavigateToSection(item.targetId)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-left transition cursor-pointer"
                    >
                      <span className="font-mono text-[10px] text-[#D8C7A5] block">
                        Chapter {item.code}
                      </span>
                      <span className="font-serif text-xs font-semibold text-[#F7F4ED] block truncate mt-0.5">
                        {item.title} →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom First-Screen Anchor Bar */}
          <div className="w-full pt-2.5 border-t border-[#3B2348]/15 flex flex-wrap items-center justify-between gap-2 text-xs text-[#29272B]/75">
            <span>
              Serving Daly City, San Francisco &amp; San Mateo County Families · {MISSION_VILLA_FACTS.address.full}
            </span>
            <span className="font-medium text-[#3B2348]">
              No online rate lock-ins or pre-filled calculators — personalized guidance by phone or visit
            </span>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: FACTORS THAT AFFECT MEMORY CARE & RESPITE CARE COSTS
            Deep-plum editorial monograph band explaining the 4 real factors
            that shape personalized pricing at Mission Villa.
        ==================================================================== */}
        <section
          id="cost-factors"
          className="w-full py-20 lg:py-24 fluid-canvas bg-[#22122B] text-[#F7F4ED] border-b border-[#D8C7A5]/20"
        >
          <div className="w-full space-y-12">
            {/* Section Header */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/15 pb-8">
              <div className="lg:col-span-7 space-y-3">
                <span className="font-script script-display text-[#D8C7A5] block">
                  How Personalized Pricing Works
                </span>
                <h2
                  className="font-serif section-display text-[#F7F4ED] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Four Factors That Shape Memory Care &amp; Respite Care Costs
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#F7F4ED]/80 leading-relaxed">
                  Rather than quoting an arbitrary flat fee before meeting your family, our Daly City team looks at four practical dimensions so your care plan reflects your loved one’s real daily life.
                </p>
              </div>
            </div>

            {/* Interactive 12-Column Factor Selector & Detail Stage */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left 5 Columns: 4 Factor Selector Buttons */}
              <div
                className="lg:col-span-5 flex flex-col justify-between gap-3"
                role="tablist"
                aria-label="Factors that affect Memory Care costs"
              >
                {FINANCIAL_COST_FACTORS.map((factor) => {
                  const isSelected = factor.id === activeFactor.id;
                  return (
                    <button
                      key={factor.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveFactorId(factor.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'bg-[#F7F4ED] text-[#3B2348] border-[#D8C7A5] shadow-xl'
                          : 'bg-[#3B2348]/55 text-[#F7F4ED] border-white/15 hover:bg-[#3B2348] hover:border-[#D8C7A5]/50'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold">
                          <span className={isSelected ? 'text-[#A65D43]' : 'text-[#D8C7A5]'}>
                            {factor.index}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className={isSelected ? 'text-[#3B2348]/75' : 'text-[#F7F4ED]/75'}>
                            {factor.kicker}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                          {factor.title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isSelected ? 'text-[#29272B]/80' : 'text-[#F7F4ED]/75'
                          }`}
                        >
                          {factor.subtitle}
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

              {/* Right 7 Columns: Active Factor Deep-Dive Monograph */}
              <div className="lg:col-span-7 flex">
                <div className="w-full rounded-[28px] bg-[#3B2348] border border-[#D8C7A5]/30 p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/15">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold">
                        {activeFactor.index} · {activeFactor.kicker}
                      </span>
                      <Link
                        href={activeFactor.relatedRouteHref}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8C7A5] hover:text-white transition"
                      >
                        <span>{activeFactor.relatedRouteLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4ED] leading-tight">
                      {activeFactor.title}
                    </h3>

                    <p className="text-base text-[#F7F4ED]/90 leading-relaxed">
                      {activeFactor.explanation}
                    </p>
                  </div>

                  {/* What We Review Together List */}
                  <div className="space-y-3 bg-[#22122B]/70 rounded-2xl p-5 sm:p-6 border border-white/10">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#8FAF78] font-semibold block">
                      What Our Daly City Team Reviews With Your Family
                    </span>
                    <ul className="space-y-2.5 text-sm text-[#F7F4ED]/90">
                      {activeFactor.whatWeReviewTogether.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="text-[#D8C7A5] font-bold mt-0.5" aria-hidden="true">
                            •
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Helpful Question to Bring & Action */}
                  <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 max-w-xl">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                        Question to Bring to Your Visit
                      </span>
                      <p className="font-serif italic text-sm sm:text-base text-[#F7F4ED]">
                        “{activeFactor.questionsForYourVisit}”
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleNavigateToSection(
                          'schedule-visit',
                          activeFactor.id === 'stay-horizon' ? 'Respite Care' : 'Memory Care',
                          undefined,
                          `Question about ${activeFactor.title}: "${activeFactor.questionsForYourVisit}"`
                        )
                      }
                      className="px-5 py-3 rounded-full bg-[#D8C7A5] text-[#22122B] text-xs font-bold hover:bg-white transition cursor-pointer shrink-0 whitespace-nowrap"
                    >
                      Ask Our Team This Question →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: CLEARLY GROUPED "WHAT MAY BE INCLUDED" CHECKLIST
            Interactive category switcher + checkable inclusion ledger so
            families can see how housing, meals, 24-hr support, housekeeping,
            and activities come together—while flagging items that require
            specific confirmation on tour.
        ==================================================================== */}
        <section
          id="what-may-be-included"
          className="w-full py-20 lg:py-24 fluid-canvas bg-[#F7F4ED] grid-line-b"
        >
          <div className="w-full space-y-10">
            {/* Header & Category Filter Bar */}
            <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#3B2348]/15 pb-8">
              <div className="space-y-2.5 max-w-3xl">
                <span className="font-script script-display text-[#C98268] block">
                  Consolidated Community Living
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Clearly Grouped: What May Be Included in Monthly Living
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/80 leading-relaxed">
                  Living at Mission Villa brings housing, chef-prepared meals, 24-hour staff availability, housekeeping, and daily Legacies™ activities under one roof. Filter by category below and check any items you would like our team to confirm for your loved one’s care plan.
                </p>
              </div>

              {/* Selected Count & Send to Form CTA */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <span className="text-xs font-medium text-[#3B2348] tabular-nums">
                  {checkedInclusionIds.length} of {FINANCIAL_INCLUSION_ITEMS.length} items marked to confirm
                </span>
                <button
                  type="button"
                  onClick={handleSendInclusionsToInquiry}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer whitespace-nowrap"
                >
                  <ClipboardCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Confirm Selected Items With Team</span>
                </button>
              </div>
            </div>

            {/* Interactive Category Filter Buttons */}
            <div
              className="flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Filter cost inclusions by category"
            >
              {FINANCIAL_INCLUSION_GROUPS.map((group) => {
                const isSelected = activeInclusionGroup === group;
                const count =
                  group === 'All Categories'
                    ? FINANCIAL_INCLUSION_ITEMS.length
                    : FINANCIAL_INCLUSION_ITEMS.filter((i) => i.group === group).length;
                return (
                  <button
                    key={group}
                    type="button"
                    onClick={() => setActiveInclusionGroup(group)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                        : 'bg-[#FCFBF8] text-[#3B2348] border border-[#D8C7A5] hover:bg-[#D8C7A5]/35'
                    }`}
                  >
                    <span>{group}</span>
                    <span className="ml-1.5 opacity-75 tabular-nums">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* 2-Column Grouped Inclusion Ledger Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredInclusions.map((item) => {
                const isChecked = checkedInclusionIds.includes(item.id);
                const needsClientConfirm =
                  item.confirmationStatus === 'CLIENT CONFIRMATION REQUIRED';

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl p-5 sm:p-6 border transition flex flex-col justify-between gap-4 ${
                      isChecked
                        ? 'bg-[#FCFBF8] border-[#3B2348] shadow-md'
                        : 'bg-[#FCFBF8]/70 border-[#D8C7A5] hover:border-[#3B2348]/50'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2 text-[11px] text-[#29272B]/70 font-medium">
                          <span className="font-bold text-[#A65D43] tabular-nums">
                            {item.code}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{item.group}</span>
                          <span aria-hidden="true">·</span>
                          <span
                            className={
                              needsClientConfirm
                                ? 'text-[#A65D43] font-semibold'
                                : 'text-[#5F7F49] font-semibold'
                            }
                          >
                            {needsClientConfirm
                              ? 'Confirm Specifics on Tour'
                              : item.confirmationStatus}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleInclusionCheck(item.id)}
                          aria-pressed={isChecked}
                          aria-label={`Mark ${item.title} to confirm during tour`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2348] hover:text-[#C98268] transition cursor-pointer shrink-0"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-[#3B2348]" aria-hidden="true" />
                          ) : (
                            <Square className="w-4 h-4 text-[#29272B]/50" aria-hidden="true" />
                          )}
                          <span>{isChecked ? 'Marked' : 'Mark'}</span>
                        </button>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B2348]">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#29272B]/85 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#D8C7A5]/70 space-y-1.5 text-xs">
                      <p className="text-[#3B2348] font-medium">
                        <strong className="font-semibold">Family Planning Context:</strong>{' '}
                        {item.howItHelpsFamilies}
                      </p>
                      <p className="text-[#29272B]/70 italic">
                        Note: {item.verificationNote}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: VISUAL SIGNATURE — INTERACTIVE PAPER-LEDGER CHECKLIST
            & EDITABLE BLANK EXPENSE COMPARISON WORKSHEET
            Strictly obeys Blueprint §5 Page 08:
            - Editable blank fields with ZERO pre-filled fake numbers
            - Toggleable between Editable Blank Worksheet & Text-Only Checklist
            - No counterfeit savings calculator, no fake prices, no claims of
              "no hidden fees"
        ==================================================================== */}
        <section
          id="paper-ledger-worksheet"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#EFECE3] grid-line-b paper-texture"
        >
          <div className="w-full space-y-10">
            {/* Section Top Header & Mode Switcher */}
            <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <span className="font-script script-display text-[#C98268] block">
                  Interactive Family Worksheet
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Home-Based Living vs. Mission Villa Paper-Ledger Comparison
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  When caring for a loved one at home, monthly expenses are spread across many separate bills—from housing, groceries, and utilities to hourly in-home care and maintenance. Use this blank paper-ledger worksheet to check the categories that apply to your household and optionally jot down your own current monthly figures before talking with our team.
                </p>
              </div>

              {/* Mode Switcher: Editable Blank Fields vs Text-Only Checklist */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <div
                  className="inline-flex items-center p-1 rounded-full bg-[#FCFBF8] border border-[#D8C7A5]"
                  role="group"
                  aria-label="Paper ledger display mode"
                >
                  <button
                    type="button"
                    onClick={() => setLedgerMode('worksheet')}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                      ledgerMode === 'worksheet'
                        ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                        : 'text-[#3B2348] hover:bg-[#D8C7A5]/30'
                    }`}
                  >
                    Editable Blank Worksheet
                  </button>
                  <button
                    type="button"
                    onClick={() => setLedgerMode('text-checklist')}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                      ledgerMode === 'text-checklist'
                        ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                        : 'text-[#3B2348] hover:bg-[#D8C7A5]/30'
                    }`}
                  >
                    Text-Only Checklist View
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleResetPaperLedger}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#3B2348]/25 bg-[#FCFBF8] text-[#3B2348] text-xs font-semibold hover:bg-[#D8C7A5]/35 transition cursor-pointer whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Clear Worksheet</span>
                </button>
              </div>
            </div>

            {/* Archival Paper-Ledger Sheet */}
            <div className="herbarium-mount w-full rounded-[32px] bg-[#FCFBF8] border-2 border-[#D8C7A5] shadow-2xl overflow-hidden">
              {/* Ledger Top Archival Header Band */}
              <div className="bg-[#3B2348] text-[#F7F4ED] px-6 sm:px-10 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D8C7A5]/30">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#D8C7A5] font-semibold block">
                    Mission Villa Senior Living · Family Expense Comparison Ledger
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    Side-by-Side Monthly Expense Category Ledger
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="text-xs text-[#D8C7A5] space-y-0.5">
                    <span className="block font-semibold tabular-nums">
                      Checked: {ledgerSummary.checkedCount}/{PAPER_LEDGER_COMPARISON_ROWS.length} Categories · Your Subtotal:{' '}
                      <strong className="font-mono text-white">
                        {ledgerSummary.familyEnteredHomeTotal !== null
                          ? `$${ledgerSummary.familyEnteredHomeTotal.toLocaleString('en-US')}/mo`
                          : 'Blank'}
                      </strong>
                    </span>
                    <span className="block text-[#F7F4ED]/75">
                      Zero pre-filled prices · Figures you type stay in your browser only
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigateToSection(
                        'schedule-visit',
                        'Memory Care',
                        undefined,
                        ledgerSummary.inquiryNoteSummary
                      )
                    }
                    className="px-4 py-2 rounded-full bg-[#D8C7A5] text-[#22122B] text-xs font-bold hover:bg-white transition cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    Attach to Inquiry ↓
                  </button>
                </div>
              </div>

              {/* Desktop Column Header Row */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-8 py-3.5 bg-[#F7F4ED] border-b border-[#D8C7A5] text-[11px] uppercase tracking-[0.18em] font-semibold text-[#3B2348]">
                <div className="col-span-5">
                  01 · Household &amp; Care Expense Category
                </div>
                <div className="col-span-3">
                  {ledgerMode === 'worksheet'
                    ? '02 · Your Current Monthly Cost (Blank Field)'
                    : '02 · Home Expense Reflection Prompt'}
                </div>
                <div className="col-span-4">
                  03 · How Mission Villa Approaches This Category
                </div>
              </div>

              {/* Paper-Ledger Ruled Rows */}
              <div className="divide-y divide-[#D8C7A5]">
                {PAPER_LEDGER_COMPARISON_ROWS.map((row) => {
                  const isChecked = checkedLedgerIds.includes(row.id);
                  const rawVal = userLedgerAmounts[row.id] || '';
                  const parsedAmount = parseBlankLedgerAmount(rawVal);

                  return (
                    <div
                      key={row.id}
                      className={`p-6 sm:px-8 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start transition ${
                        isChecked ? 'bg-[#F7F4ED]/65' : 'bg-[#FCFBF8]'
                      }`}
                    >
                      {/* Col 1–5: Checkable Category Title & Prompt */}
                      <div className="lg:col-span-5 flex items-start gap-3.5">
                        <button
                          type="button"
                          onClick={() => toggleLedgerRowCheck(row.id)}
                          aria-pressed={isChecked}
                          aria-label={`Include ${row.expenseLabel} in comparison checklist`}
                          className="mt-1 text-[#3B2348] hover:text-[#C98268] transition cursor-pointer shrink-0"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 text-[#3B2348]" aria-hidden="true" />
                          ) : (
                            <Square className="w-5 h-5 text-[#29272B]/40" aria-hidden="true" />
                          )}
                        </button>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#A65D43] font-semibold">
                            <span className="tabular-nums">Line {row.lineNumber}</span>
                            <span aria-hidden="true">·</span>
                            <span>{row.categoryGroup}</span>
                          </div>
                          <label
                            htmlFor={`ledger-input-${row.id}`}
                            className="font-serif text-base sm:text-lg font-bold text-[#3B2348] block cursor-pointer"
                          >
                            {row.expenseLabel}
                          </label>
                          <p className="text-xs text-[#29272B]/75 leading-relaxed">
                            {row.homeLivingPrompt}
                          </p>
                        </div>
                      </div>

                      {/* Col 6–8: Editable Blank Field (or Text-Only Checklist Prompt) */}
                      <div className="lg:col-span-3 flex flex-col justify-center">
                        {ledgerMode === 'worksheet' ? (
                          <div className="space-y-1.5">
                            <label
                              htmlFor={`ledger-input-${row.id}`}
                              className="lg:hidden text-[11px] uppercase tracking-wider font-semibold text-[#3B2348] block"
                            >
                              Your Current Monthly Home Expense (Optional)
                            </label>
                            <div className="relative flex items-center">
                              <span
                                className="absolute left-3.5 text-sm font-semibold text-[#3B2348]/70 select-none"
                                aria-hidden="true"
                              >
                                $
                              </span>
                              <input
                                id={`ledger-input-${row.id}`}
                                type="text"
                                inputMode="decimal"
                                value={rawVal}
                                onChange={(e) =>
                                  handleLedgerAmountChange(row.id, e.target.value)
                                }
                                placeholder="Blank — enter your figure"
                                aria-label={`Your current monthly cost for ${row.expenseLabel}`}
                                className="w-full pl-8 pr-12 py-2.5 rounded-xl bg-white border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm font-mono tabular-nums text-[#3B2348] placeholder:font-sans placeholder:text-xs placeholder:text-[#29272B]/45"
                              />
                              <span
                                className="absolute right-3 text-[11px] text-[#29272B]/55 font-medium select-none"
                                aria-hidden="true"
                              >
                                /mo
                              </span>
                            </div>
                            {parsedAmount !== null && (
                              <span className="text-[11px] text-[#5F7F49] font-medium block tabular-nums">
                                Recorded on worksheet: ${parsedAmount.toLocaleString('en-US')}/mo
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="p-3 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5]/80 text-xs text-[#3B2348]">
                            <span className="font-semibold block">
                              {isChecked
                                ? '✓ Checked for Family Review'
                                : 'Unchecked Category'}
                            </span>
                            <span className="text-[#29272B]/75 block mt-0.5">
                              Bring your current household bills for this line item when comparing with our team.
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Col 9–12: Mission Villa Consolidated Context & Question */}
                      <div className="lg:col-span-4 space-y-2 border-t lg:border-t-0 lg:border-l border-[#D8C7A5]/70 pt-3 lg:pt-0 lg:pl-5">
                        <p className="text-xs sm:text-sm text-[#29272B]/90 leading-relaxed">
                          {row.missionVillaConsolidatedContext}
                        </p>
                        <p className="text-xs text-[#3B2348] font-serif italic">
                          Ask on tour: “{row.questionToVerifyOnTour}”
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Paper-Ledger Summary & Action Footer */}
              <div className="bg-[#F7F4ED] border-t-2 border-[#3B2348]/20 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left 7 Columns: Honest Ledger Summary */}
                <div className="lg:col-span-7 space-y-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#A65D43]">
                    <span className="tabular-nums">
                      Categories Checked: {ledgerSummary.checkedCount} of{' '}
                      {PAPER_LEDGER_COMPARISON_ROWS.length}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">
                      Blank Fields Filled by You: {ledgerSummary.enteredAmountCount}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#3B2348]">
                      Your Entered Current-Home Subtotal:
                    </span>
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#3B2348] tabular-nums">
                      {ledgerSummary.familyEnteredHomeTotal !== null
                        ? `$${ledgerSummary.familyEnteredHomeTotal.toLocaleString('en-US')} / month`
                        : '— (Enter your own figures above if helpful)'}
                    </span>
                  </div>

                  <p className="text-xs text-[#29272B]/75 leading-relaxed">
                    <strong>Mission Villa Personalized Comparison:</strong> Because monthly Memory Care and Respite Care rates depend on your loved one’s assessment and suite choice (Private, Companion Unit, or Jack &amp; Jill), we review our current rates side-by-side with your worksheet during a personal conversation.
                  </p>
                </div>

                {/* Right 5 Columns: Attach Summary to Inquiry Form */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigateToSection(
                        'schedule-visit',
                        'Memory Care',
                        undefined,
                        ledgerSummary.inquiryNoteSummary
                      )
                    }
                    className="px-6 py-3.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition shadow-md cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <ClipboardCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Add Ledger Summary to My Inquiry →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: WAYS TO PLAN & QUESTIONS TO ASK
            Covers Personal Assessment, Long-Term Care Insurance, Companion
            Suite Value, and the explicit CLIENT CONFIRMATION REQUIRED notice
            for legacy-site referral credit and state assistance mentions.
        ==================================================================== */}
        <section
          id="ways-to-plan"
          className="w-full py-20 lg:py-24 fluid-canvas bg-[#F7F4ED] grid-line-b"
        >
          <div className="w-full space-y-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#3B2348]/15 pb-8">
              <div className="lg:col-span-7 space-y-2.5">
                <span className="font-script script-display text-[#C98268] block">
                  Practical Planning Pathways
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Ways Families Plan &amp; Questions to Ask Our Team
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#29272B]/80 leading-relaxed">
                  From reviewing Long-Term Care insurance policies to comparing shared Companion Suites or reconfirming program policies, here are four ways families prepare for a financial conversation.
                </p>
              </div>
            </div>

            {/* 4-Card Editorial Planning Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {FINANCIAL_PLANNING_PATHWAYS.map((pathway) => {
                const isSelected = activePathwayId === pathway.id;
                const requiresReconfirm =
                  pathway.verificationStatus === 'CLIENT CONFIRMATION REQUIRED';

                return (
                  <article
                    key={pathway.id}
                    onClick={() => setActivePathwayId(pathway.id)}
                    className={`rounded-[28px] p-6 sm:p-8 border transition flex flex-col justify-between gap-6 cursor-pointer ${
                      requiresReconfirm
                        ? 'bg-[#FCFBF8] border-2 border-[#C98268]'
                        : isSelected
                        ? 'bg-[#FCFBF8] border-2 border-[#3B2348] shadow-lg'
                        : 'bg-[#FCFBF8] border border-[#D8C7A5] hover:border-[#3B2348]'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#D8C7A5]">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#3B2348]">
                          <span className="text-[#A65D43] tabular-nums">
                            Pathway {pathway.index}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{pathway.badge}</span>
                        </div>
                        {requiresReconfirm && (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#A65D43]">
                            Reconfirm Current Policy on Tour
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2348]">
                          {pathway.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-[#A65D43]">
                          {pathway.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-[15px] text-[#29272B]/85 leading-relaxed">
                        {pathway.description}
                      </p>

                      {/* Questions to Ask List */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-2.5">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-[#3B2348] font-semibold block">
                          Questions to Ask During Your Consultation
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#29272B]/90">
                          {pathway.questionsToAsk.map((q) => (
                            <li key={q} className="flex items-start gap-2.5">
                              <HelpCircle
                                className="w-4 h-4 text-[#C98268] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D8C7A5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs text-[#29272B]/75 italic max-w-md">
                        {pathway.disclaimerNote}
                      </p>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigateToSection(
                            'schedule-visit',
                            'Memory Care',
                            pathway.id === 'family-and-benefit-planning'
                              ? 'Shared Suite'
                              : undefined,
                            pathway.inquiryPresetNote
                          );
                        }}
                        className="px-4 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition cursor-pointer shrink-0 whitespace-nowrap"
                      >
                        Ask About This Topic →
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: FINANCIAL PLANNING FAQS
            Accessible accordion addressing family cost questions honestly.
        ==================================================================== */}
        <section
          id="financial-faqs"
          className="w-full py-20 lg:py-24 fluid-canvas bg-[#FCFBF8] grid-line-b"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 5 Columns: FAQ Intro & Direct Call Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Straightforward Answers
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Frequently Asked Financial Planning Questions
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/80 leading-relaxed">
                  Every family’s financial picture is unique. Here is how Mission Villa approaches pricing conversations, suite options, and care assessments in Daly City.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] p-6 space-y-4">
                <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                  Prefer a Direct Conversation?
                </span>
                <h3 className="font-serif text-xl font-bold text-[#3B2348]">
                  Speak With Our Daly City Team
                </h3>
                <p className="text-xs sm:text-sm text-[#29272B]/80 leading-relaxed">
                  Call us at{' '}
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="font-bold text-[#3B2348] underline"
                  >
                    {MISSION_VILLA_FACTS.phone.formatted}
                  </a>{' '}
                  to ask about current Private Suite, Companion Unit, or Jack &amp; Jill availability and schedule an unhurried visit at 995 East Market Street.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <Link
                    href="/suites-and-floor-plans"
                    className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline underline-offset-4"
                  >
                    Compare Suite Formats →
                  </Link>
                  <span aria-hidden="true" className="text-[#D8C7A5]">
                    ·
                  </span>
                  <Link
                    href="/memory-care"
                    className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline underline-offset-4"
                  >
                    Explore Memory Care →
                  </Link>
                  <span aria-hidden="true" className="text-[#D8C7A5]">
                    ·
                  </span>
                  <Link
                    href="/respite-care"
                    className="text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline underline-offset-4"
                  >
                    Explore Respite Care →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Accessible Accordion */}
            <div className="lg:col-span-7 divide-y divide-[#D8C7A5] border-t border-b border-[#D8C7A5]">
              {FINANCIAL_PLANNING_FAQS.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="py-5">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      className="w-full flex items-start justify-between gap-4 text-left cursor-pointer group"
                    >
                      <div className="space-y-1">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                          0{index + 1} · {faq.category}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B2348] group-hover:text-[#C98268] transition">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#3B2348] shrink-0 mt-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#C98268]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-3 pr-6 space-y-3">
                        <p className="text-sm sm:text-[15px] text-[#29272B]/85 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: SHARED SCHEDULE A VISIT / REQUEST PRICING & FOOTER
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
