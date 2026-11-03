'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  Phone,
  Check,
  Search,
  X,
  ShieldCheck,
  Utensils,
  Sparkles,
  Trees,
  ConciergeBell,
  Info,
  HelpCircle,
  BookmarkCheck,
  BookmarkPlus,
  ChevronDown,
  Calendar,
  HeartHandshake,
  Layers,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  SERVICES_AMENITIES_CATEGORIES,
  SERVICES_AND_AMENITIES_ITEMS,
  ASK_US_ABOUT_DISCLOSURES,
  filterServicesAndAmenities,
  type ServiceAmenityCategoryId,
  type OfferingClassification,
} from '@/lib/mission-villa-data';

export default function ServicesAndAmenitiesPage() {
  const prefersReducedMotion = useReducedMotion();
  const [fontScale, setFontScale] = useState<number>(1);

  // Interactive Category Switcher, Search & Classification State
  const [activeCategory, setActiveCategory] = useState<'All' | ServiceAmenityCategoryId>('Support');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [classificationFilter, setClassificationFilter] = useState<
    'All' | OfferingClassification
  >('All');
  const [expandedItemId, setExpandedItemId] = useState<string>('service-24-hour-staff');

  // Interactive "Ask Us About..." Tour Question Builder State
  const [bookmarkedItemIds, setBookmarkedItemIds] = useState<string[]>([
    'service-24-hour-staff',
    'amenity-full-table-service',
  ]);
  const [selectedDisclosureIds, setSelectedDisclosureIds] = useState<string[]>([
    'disclosure-care-eligibility',
    'disclosure-inclusions-fees',
  ]);
  const [prefilledFormNotes, setPrefilledFormNotes] = useState<string>('');
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

  const handleCategorySelect = (
    category: 'All' | ServiceAmenityCategoryId,
    scrollToExplorer = false
  ) => {
    setActiveCategory(category);
    const matching = filterServicesAndAmenities(
      SERVICES_AND_AMENITIES_ITEMS,
      category,
      searchQuery,
      classificationFilter
    );
    if (matching.length > 0) {
      setExpandedItemId(matching[0].id);
    }
    if (scrollToExplorer) {
      handleNavigateToSection('services-explorer');
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim().length > 0 && activeCategory !== 'All') {
      setActiveCategory('All');
    }
    const matching = filterServicesAndAmenities(
      SERVICES_AND_AMENITIES_ITEMS,
      value.trim().length > 0 ? 'All' : activeCategory,
      value,
      classificationFilter
    );
    if (matching.length > 0) {
      setExpandedItemId(matching[0].id);
    }
  };

  const filteredItems = useMemo(
    () =>
      filterServicesAndAmenities(
        SERVICES_AND_AMENITIES_ITEMS,
        activeCategory,
        searchQuery,
        classificationFilter
      ),
    [activeCategory, searchQuery, classificationFilter]
  );

  // Determine which category editorial photo pairing to show on the left stage
  const focusedItem =
    SERVICES_AND_AMENITIES_ITEMS.find((item) => item.id === expandedItemId) ||
    filteredItems[0] ||
    SERVICES_AND_AMENITIES_ITEMS[0];

  const activeCategoryMeta =
    SERVICES_AMENITIES_CATEGORIES.find(
      (cat) =>
        cat.id === (activeCategory === 'All' ? focusedItem.category : activeCategory)
    ) || SERVICES_AMENITIES_CATEGORIES[0];

  const toggleBookmarkItem = (id: string) => {
    setBookmarkedItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleDisclosureTopic = (id: string) => {
    setSelectedDisclosureIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApplyQuestionsToForm = () => {
    const selectedItemTitles = SERVICES_AND_AMENITIES_ITEMS.filter((item) =>
      bookmarkedItemIds.includes(item.id)
    ).map((item) => item.title);

    const selectedDisclosureTopics = ASK_US_ABOUT_DISCLOSURES.filter((d) =>
      selectedDisclosureIds.includes(d.id)
    ).map((d) => d.topic);

    const parts: string[] = [];
    if (selectedItemTitles.length > 0) {
      parts.push(`Services/Amenities to discuss: ${selectedItemTitles.join(', ')}.`);
    }
    if (selectedDisclosureTopics.length > 0) {
      parts.push(`Eligibility/Inclusions questions: ${selectedDisclosureTopics.join('; ')}.`);
    }

    const compiledNote =
      parts.join(' ') ||
      'Would like to discuss Mission Villa services, amenities, and current availability during a visit.';
    setPrefilledFormNotes(compiledNote);
    handleNavigateToSection('schedule-visit');
  };

  const categoryIcons: Record<ServiceAmenityCategoryId, React.ComponentType<{ className?: string }>> = {
    Support: ShieldCheck,
    Dining: Utensils,
    Lifestyle: Sparkles,
    'Community Spaces': Trees,
    Convenience: ConciergeBell,
  };

  const fadeUpProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
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
            SECTION 1: DISTINCT DEEP-PLUM ARCHITECTURAL TRIPTYCH HERO
            + INTEGRATED LIVE SEARCH & CATEGORY COMMAND DOCK
            Breaks away from the light-cream 6/6 split used on Pages 01–03
        ==================================================================== */}
        <section
          id="top"
          className="w-full py-6 lg:py-7 lg:min-h-[calc(100svh-104px)] flex flex-col justify-between fluid-canvas bg-[#22122B] text-[#F7F4ED] border-b border-[#D8C7A5]/25 relative overflow-hidden"
        >
          {/* Subtle Warm Conservatory Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 520px 320px at 15% 20%, rgba(201, 130, 104, 0.16), transparent 70%), radial-gradient(ellipse 560px 360px at 85% 30%, rgba(143, 175, 120, 0.14), transparent 72%)',
            }}
            aria-hidden="true"
          />

          {/* Top Bar: Breadcrumb & Monograph IV Identifier */}
          <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 relative z-10">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs text-[#F7F4ED]/75"
            >
              <Link
                href="/"
                className="hover:text-[#D8C7A5] underline decoration-[#D8C7A5]/50 font-medium"
              >
                Home
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/life-at-mission-villa"
                className="hover:text-[#D8C7A5] underline decoration-[#D8C7A5]/50 font-medium"
              >
                Life at Mission Villa
              </Link>
              <span aria-hidden="true">·</span>
              <span className="text-[#D8C7A5] font-semibold" aria-current="page">
                Services &amp; Amenities
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 text-xs text-[#D8C7A5]">
              <span>Monograph IV · Practical Care &amp; Hospitality</span>
              <span aria-hidden="true">·</span>
              <span>995 East Market Street, Daly City</span>
            </div>
          </div>

          {/* Center 12-Column Asymmetric Architectural Triptych (5 Cols Left / 7 Cols Dual-Photo Right) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center my-auto py-5 relative z-10">
            {/* Left 5 Columns: Human-Centered H1, Empathetic Lead & Primary CTAs */}
            <motion.div {...fadeUpProps} className="lg:col-span-5 space-y-5">
              <div>
                <span className="font-script script-display text-[#D8C7A5] block">
                  Everyday Ease · Attentive Support
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#8FAF78] font-semibold block mt-0.5">
                  Services &amp; Amenities at Mission Villa Senior Living
                </span>
              </div>

              <h1
                className="font-serif editorial-h1 text-[#F7F4ED] font-semibold tracking-wide"
                style={{ textWrap: 'balance' }}
              >
                Practical Care &amp; Warm Hospitality,{' '}
                <span className="italic font-normal text-[#D8C7A5]">
                  Thoughtfully Gathered Under One Roof.
                </span>
              </h1>

              <p className="text-[#F7F4ED]/85 text-sm sm:text-base leading-relaxed">
                Families exploring Memory Care or a short-term Respite Care stay deserve clear, unhurried answers about how daily life works. From{' '}
                <strong className="text-[#F7F4ED]">24-hour on-site staff</strong>,{' '}
                <strong className="text-[#F7F4ED]">routine assessments</strong>, and{' '}
                <strong className="text-[#F7F4ED]">personal laundry</strong> to{' '}
                <strong className="text-[#F7F4ED]">restaurant-style full-table dining</strong>,{' '}
                <strong className="text-[#F7F4ED]">salon/spa care</strong>, and our{' '}
                <strong className="text-[#F7F4ED]">enclosed garden courtyard</strong>, every offering at Mission Villa in Daly City is designed to lift household burdens and protect personal dignity.
              </p>

              {/* Primary & Secondary Conversion CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit')}
                  className="px-6 py-3.5 rounded-full bg-[#C98268] text-white font-semibold text-xs sm:text-sm hover:bg-[#D8C7A5] hover:text-[#3B2348] transition-colors inline-flex items-center gap-2 shadow-lg cursor-pointer whitespace-nowrap"
                >
                  <span>{MISSION_VILLA_FACTS.primaryCtas.scheduleVisit}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('ask-us-about')}
                  className="px-5 py-3.5 rounded-full bg-white/10 border border-[#D8C7A5]/35 text-[#F7F4ED] font-semibold text-xs sm:text-sm hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Ask Us About Eligibility &amp; Inclusions
                </button>

                <a
                  href={MISSION_VILLA_FACTS.phone.href}
                  className="inline-flex items-center gap-1.5 px-2 py-2 text-xs sm:text-sm font-semibold text-[#D8C7A5] hover:text-white transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                  <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
                </a>
              </div>
            </motion.div>

            {/* Right 7 Columns: Asymmetric Dual-Frame Photo Pairing (Panoramic Bento + Botanical Arch) */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch"
            >
              {/* Frame A (7 of 12 cols): Full-Table Dining & Hospitality */}
              <div className="sm:col-span-7 bento-frame min-h-[290px] sm:min-h-[360px] relative bg-[#3B2348] border border-[#D8C7A5]/30 shadow-2xl flex flex-col justify-between group">
                {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85"
                  alt="Illustrative placeholder: Restaurant-style full-table dining service with freshly prepared dishes at Mission Villa"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover mood-grade group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/30 to-transparent" />

                <div className="relative z-10 p-4 flex items-center justify-between text-[11px]">
                  <span className="text-[#D8C7A5] font-semibold uppercase tracking-wider">
                    01 · Full-Table Dining &amp; Hospitality
                  </span>
                  <span className="text-[#F7F4ED]/70">Illustrative</span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 mt-auto space-y-1.5">
                  <p className="font-serif italic text-base sm:text-lg text-[#F7F4ED] leading-snug">
                    “Chef-prepared meals with full-table service, private family dining, and tailored dietary options.”
                  </p>
                  <p className="text-[10px] text-[#D8C7A5]/80">
                    Illustrative placeholder photography — replace before launch
                  </p>
                </div>
              </div>

              {/* Frame B (5 of 12 cols): Botanical Arch Courtyard & 24-Hour Support Note */}
              <div className="sm:col-span-5 flex flex-col justify-between gap-4">
                <div className="arch-portal h-[220px] sm:h-[235px] w-full relative bg-[#3B2348] border border-[#D8C7A5]/35 shadow-xl overflow-hidden flex flex-col justify-end group">
                  {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                  <img
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80"
                    alt="Illustrative placeholder: Sunlit enclosed garden courtyard and patio seating at Mission Villa"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover mood-grade group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-transparent to-transparent" />
                  <div className="relative z-10 p-4 text-[#F7F4ED]">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#8FAF78] font-semibold block">
                      Courtyard, Patio &amp; Lounges
                    </span>
                    <p className="font-serif text-xs sm:text-sm italic mt-0.5">
                      Homelike indoor &amp; outdoor gathering spaces
                    </p>
                  </div>
                </div>

                {/* Archival Summary Ledger Box */}
                <div className="p-4 rounded-2xl bg-[#3B2348]/90 border border-[#D8C7A5]/30 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold">
                    <span>At a Glance</span>
                    <span>5 Categories</span>
                  </div>
                  <p className="font-serif text-sm font-semibold text-[#F7F4ED]">
                    9 Core Services · 9 Community Amenities
                  </p>
                  <p className="text-[11px] text-[#F7F4ED]/75 leading-relaxed">
                    Grounded in Mission Villa’s original Daly City offerings. Confirm current schedules and care inclusions during your tour.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Integrated Command Bar: Live Search + 5 Category Switcher Buttons */}
          <div className="w-full rounded-2xl bg-[#FCFBF8] text-[#29272B] p-3.5 sm:p-4 border border-[#D8C7A5] shadow-2xl relative z-10">
            <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-3 items-center">
              {/* Search Input (5 Columns) */}
              <div className="xl:col-span-5 relative flex items-center">
                <Search
                  className="w-4 h-4 text-[#3B2348]/70 absolute left-3.5 pointer-events-none"
                  aria-hidden="true"
                />
                <label htmlFor="hero-services-search" className="sr-only">
                  Search Mission Villa services and amenities
                </label>
                <input
                  id="hero-services-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search offerings (e.g., laundry, 24-hour staff, Wi-Fi, patio, salon)..."
                  className="w-full pl-10 pr-20 py-2.5 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-xs sm:text-sm text-[#29272B]"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => handleSearchChange('')}
                    className="absolute right-2.5 px-2 py-1 rounded-lg bg-[#3B2348]/10 hover:bg-[#3B2348]/20 text-[11px] font-semibold text-[#3B2348] cursor-pointer"
                  >
                    Clear
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('services-explorer')}
                    className="absolute right-2.5 px-2.5 py-1 rounded-lg bg-[#3B2348] text-[#F7F4ED] text-[11px] font-semibold hover:bg-[#C98268] transition-colors cursor-pointer"
                  >
                    Browse ↓
                  </button>
                )}
              </div>

              {/* 5 Category Quick-Jump Buttons (7 Columns) */}
              <div
                className="xl:col-span-7 flex flex-wrap items-center gap-1.5 sm:gap-2 xl:justify-end"
                role="group"
                aria-label="Jump to service and amenity category"
              >
                {SERVICES_AMENITIES_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id && !searchQuery;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id, true)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                          : 'bg-[#F7F4ED] text-[#3B2348] border border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      {cat.index} · {cat.label}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => handleCategorySelect('All', true)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    activeCategory === 'All'
                      ? 'bg-[#C98268] text-white shadow-sm'
                      : 'bg-[#F7F4ED] text-[#A65D43] border border-[#D8C7A5] hover:border-[#3B2348]'
                  }`}
                >
                  All (18)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: VISUAL SIGNATURE — NON-GENERIC CATEGORY SWITCHER
            + SYNCHRONIZED EDITORIAL PHOTO PAIRING & ARCHIVAL SPEC LEDGER
            (Explicitly avoids 50 giant repeated cards; uses a 5/7 split atelier)
        ==================================================================== */}
        <section
          id="services-explorer"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F7F4ED] paper-texture scroll-mt-20"
        >
          {/* Section Header + Category Switcher Bar */}
          <div className="w-full space-y-8 mb-12 pb-8 border-b border-[#3B2348]/15">
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="font-script script-display text-[#C98268] block">
                  Categorized Directory &amp; Editorial Pairing
                </span>
                <h2
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Explore Services &amp; Amenities by Daily Need
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed max-w-[65ch]">
                  Select any of the five categories below—or search by keyword—to explore how Mission Villa’s on-site services and community amenities support residents and visiting families. Click any item in the ledger to inspect details or bookmark a question for your tour.
                </p>
              </div>

              {/* Bookmarked Tour Questions Counter */}
              <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] flex items-center justify-between gap-4 shrink-0">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A65D43] font-bold block">
                    Your Visit Question List
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-[#3B2348] tabular-nums">
                    {bookmarkedItemIds.length} Offering{bookmarkedItemIds.length === 1 ? '' : 's'} Bookmarked
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigateToSection('ask-us-about')}
                  className="px-4 py-2.5 rounded-xl bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Review Questions ↓
                </button>
              </div>
            </div>

            {/* Interactive 5-Category Switcher Tabs + Classification Toolbar */}
            <div className="w-full flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              {/* 5 Category Tabs + All View */}
              <div
                className="flex flex-wrap items-center gap-2"
                role="tablist"
                aria-label="Services and Amenities Categories"
              >
                {SERVICES_AMENITIES_CATEGORIES.map((cat) => {
                  const IconComp = categoryIcons[cat.id];
                  const isSelected = activeCategory === cat.id;
                  const count = SERVICES_AND_AMENITIES_ITEMS.filter(
                    (i) => i.category === cat.id
                  ).length;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => handleCategorySelect(cat.id, false)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl border text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        isSelected
                          ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-md'
                          : 'bg-[#FCFBF8] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      <IconComp
                        className={`w-3.5 h-3.5 ${
                          isSelected ? 'text-[#8FAF78]' : 'text-[#C98268]'
                        }`}
                      />
                      <span>
                        {cat.index} · {cat.label}
                      </span>
                      <span
                        className={`text-[11px] tabular-nums ${
                          isSelected ? 'text-[#D8C7A5]' : 'text-[#29272B]/60'
                        }`}
                      >
                        ({count})
                      </span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === 'All'}
                  onClick={() => handleCategorySelect('All', false)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl border text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    activeCategory === 'All'
                      ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-md'
                      : 'bg-[#FCFBF8] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                  }`}
                >
                  <Layers
                    className={`w-3.5 h-3.5 ${
                      activeCategory === 'All' ? 'text-[#8FAF78]' : 'text-[#C98268]'
                    }`}
                  />
                  <span>All Offerings</span>
                  <span
                    className={`text-[11px] tabular-nums ${
                      activeCategory === 'All' ? 'text-[#D8C7A5]' : 'text-[#29272B]/60'
                    }`}
                  >
                    ({SERVICES_AND_AMENITIES_ITEMS.length})
                  </span>
                </button>
              </div>

              {/* Classification Segmented Control (Single-Line Non-Wrapping) */}
              <div
                className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] self-start xl:self-auto shrink-0"
                role="group"
                aria-label="Filter by Community Service or Community Amenity"
              >
                {(
                  [
                    { value: 'All', label: 'All Types' },
                    { value: 'Community Service', label: 'Services (9)' },
                    { value: 'Community Amenity', label: 'Amenities (9)' },
                  ] as const
                ).map((opt) => {
                  const active = classificationFilter === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setClassificationFilter(opt.value)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'text-[#3B2348] hover:bg-[#D8C7A5]/30'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main 12-Column Asymmetric Split: Left 5 Cols Editorial Photo Pairing + Right 7 Cols Spec Ledger */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT 5 COLUMNS: Synchronized Editorial Photo Pairing & Category Monograph */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="herbarium-mount rounded-[32px] p-6 sm:p-8 space-y-6">
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 border-b border-[#D8C7A5] pb-3.5">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-bold">
                    Category {activeCategoryMeta.index} · {activeCategoryMeta.label}
                  </span>
                  <span className="text-xs font-serif italic text-[#5F7F49]">
                    Editorial Photo Pairing
                  </span>
                </div>

                {/* Synchronized Editorial Image Frame */}
                <div className="bento-frame h-[270px] sm:h-[310px] w-full relative bg-[#3B2348] border border-[#D8C7A5] shadow-lg flex flex-col justify-between">
                  {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                  <img
                    src={activeCategoryMeta.editorialPairingImage.src}
                    alt={activeCategoryMeta.editorialPairingImage.alt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover mood-grade transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/92 via-[#22122B]/25 to-transparent" />

                  <div className="relative z-10 p-4 flex items-center justify-between gap-2">
                    <span className="inline-block px-3.5 py-1.5 rounded-xl bg-[#22122B]/90 backdrop-blur-sm border border-[#D8C7A5]/40 text-[#D8C7A5] text-[11px] font-semibold uppercase tracking-wider">
                      {activeCategoryMeta.shortTitle}
                    </span>
                  </div>

                  <div className="relative z-10 p-5 text-[#F7F4ED] space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                      {activeCategoryMeta.editorialPairingImage.locationLabel}
                    </span>
                    <p className="font-serif italic text-sm sm:text-base leading-snug">
                      “{activeCategoryMeta.editorialPairingImage.caption}”
                    </p>
                    <p className="text-[10px] text-[#F7F4ED]/70">
                      Illustrative placeholder ({activeCategoryMeta.editorialPairingImage.status})
                    </p>
                  </div>
                </div>

                {/* Editorial Category Narrative */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348] leading-tight">
                    {activeCategoryMeta.editorialHeading}
                  </h3>
                  <p className="font-serif italic text-sm sm:text-base text-[#A65D43]">
                    {activeCategoryMeta.editorialSubtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#29272B]/90 leading-relaxed">
                    {activeCategoryMeta.editorialNarrative}
                  </p>
                </div>

                {/* Secondary Vignette + Availability Note */}
                <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#5F7F49] font-bold block">
                    {activeCategoryMeta.secondaryVignette.title}
                  </span>
                  <p className="text-xs text-[#29272B]/85 leading-relaxed">
                    {activeCategoryMeta.secondaryVignette.detail}
                  </p>
                  <p className="text-[11px] text-[#29272B]/70 pt-2 border-t border-[#D8C7A5]/70">
                    {activeCategoryMeta.availabilityNote}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT 7 COLUMNS: Non-Generic Hairline-Divided Archival Ledger */}
            <div className="lg:col-span-7 space-y-5">
              {/* Ledger Top Status & Inline Search Filter */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A65D43] font-bold block">
                    Mission Villa Offerings Ledger
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#3B2348] tabular-nums">
                    Showing {filteredItems.length} of {SERVICES_AND_AMENITIES_ITEMS.length} Offerings
                    {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
                    {searchQuery ? ` matching “${searchQuery}”` : ''}
                  </p>
                </div>

                {/* Quick Filter Reset if Filtered */}
                {(searchQuery || activeCategory !== 'Support' || classificationFilter !== 'All') && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setClassificationFilter('All');
                      setActiveCategory('All');
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] text-xs font-semibold text-[#3B2348] hover:border-[#3B2348] transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Show All 18 Offerings</span>
                  </button>
                )}
              </div>

              {/* Empty Search State */}
              {filteredItems.length === 0 ? (
                <div className="herbarium-mount rounded-[28px] p-8 sm:p-10 text-center space-y-4">
                  <p className="font-serif text-2xl font-semibold text-[#3B2348]">
                    No offerings matched “{searchQuery}”
                  </p>
                  <p className="text-sm text-[#29272B]/80 max-w-md mx-auto">
                    Try searching for terms like <strong>laundry</strong>, <strong>24-hour staff</strong>, <strong>dining</strong>, <strong>courtyard</strong>, <strong>Wi-Fi</strong>, or <strong>transportation</strong>, or view all 18 offerings.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setClassificationFilter('All');
                      setActiveCategory('All');
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold hover:bg-[#C98268] transition-colors cursor-pointer"
                  >
                    Reset Search &amp; View All Offerings
                  </button>
                </div>
              ) : (
                /* Hairline-Divided Archival Spec Ledger */
                <div className="herbarium-mount rounded-[32px] p-4 sm:p-8 divide-y divide-[#D8C7A5]">
                  {filteredItems.map((item, idx) => {
                    const isExpanded = item.id === expandedItemId;
                    const isBookmarked = bookmarkedItemIds.includes(item.id);

                    return (
                      <article
                        key={item.id}
                        className="py-5 first:pt-2 last:pb-2 transition-colors"
                      >
                        {/* Row Header: Clickable to Expand & Sync Left Editorial Pairing */}
                        <div className="flex items-start justify-between gap-4">
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            onClick={() =>
                              setExpandedItemId(isExpanded ? '' : item.id)
                            }
                            className="flex-1 text-left group cursor-pointer space-y-1.5"
                          >
                            {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                            <div className="flex flex-wrap items-center gap-2 text-xs text-[#29272B]/70 font-medium tabular-nums">
                              <span className="font-bold text-[#A65D43]">
                                0{idx + 1} · {item.code}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span className="text-[#3B2348] font-semibold">
                                {item.category}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span className="text-[#5F7F49]">
                                {item.classification}
                              </span>
                            </div>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3B2348] group-hover:text-[#C98268] transition-colors">
                              {item.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-[#29272B]/80 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </button>

                          {/* Right Controls: Bookmark Question + Expand Chevron */}
                          <div className="flex items-center gap-2 shrink-0 pt-1">
                            <button
                              type="button"
                              onClick={() => toggleBookmarkItem(item.id)}
                              aria-pressed={isBookmarked}
                              title={
                                isBookmarked
                                  ? 'Saved to your visit question list'
                                  : 'Add this offering to your visit question list'
                              }
                              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                                isBookmarked
                                  ? 'bg-[#3B2348] text-[#D8C7A5] border-[#3B2348]'
                                  : 'bg-[#F7F4ED] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                              }`}
                            >
                              {isBookmarked ? (
                                <>
                                  <BookmarkCheck className="w-3.5 h-3.5 text-[#8FAF78]" />
                                  <span className="hidden sm:inline">Saved for Tour</span>
                                </>
                              ) : (
                                <>
                                  <BookmarkPlus className="w-3.5 h-3.5 text-[#C98268]" />
                                  <span className="hidden sm:inline">Ask on Tour</span>
                                </>
                              )}
                            </button>

                            <button
                              type="button"
                              aria-label={
                                isExpanded
                                  ? `Collapse details for ${item.title}`
                                  : `Expand details for ${item.title}`
                              }
                              onClick={() =>
                                setExpandedItemId(isExpanded ? '' : item.id)
                              }
                              className="p-2 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] text-[#3B2348] hover:bg-[#3B2348] hover:text-[#F7F4ED] transition-colors cursor-pointer"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        {/* Expanded Drawer: Plain-Language Description, Resident Support & Tour Question */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-[#D8C7A5]/60 space-y-4">
                            <p className="text-sm text-[#29272B]/90 leading-relaxed">
                              {item.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                              <div className="sm:col-span-7 p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-2">
                                <span className="text-[10px] uppercase tracking-[0.18em] text-[#3B2348] font-bold block">
                                  How This Supports Daily Life
                                </span>
                                <ul className="space-y-1.5 text-xs text-[#29272B]/90">
                                  {item.howItSupportsResidents.map((point) => (
                                    <li key={point} className="flex items-start gap-2">
                                      <Check
                                        className="w-3.5 h-3.5 text-[#5F7F49] shrink-0 mt-0.5"
                                        aria-hidden="true"
                                      />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="sm:col-span-5 p-4 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] flex flex-col justify-between space-y-2">
                                <div className="space-y-1">
                                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#A65D43] font-bold block">
                                    Suggested Question for Your Visit
                                  </span>
                                  <p className="font-serif italic text-xs sm:text-sm text-[#3B2348] leading-snug">
                                    “{item.askUsPrompt}”
                                  </p>
                                </div>
                                <p className="text-[10px] text-[#29272B]/65 pt-2 border-t border-[#D8C7A5]/60">
                                  {item.confirmationFlag}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: RICH PHOTOGRAPHIC FEATURE — PANORAMIC DIPTYCH
            "Where Practical Support Meets Homelike Sanctuary"
        ==================================================================== */}
        <section
          id="photographic-feature"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F2ECE0]/75"
        >
          <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Hospitality in Practice
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                How Everyday Services &amp; Spaces Come Together at 995 East Market Street
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#29272B]/80 max-w-md">
              A service list only matters when it translates into real human comfort. Here is how our dining room, courtyard, and on-site care work together throughout the day.
            </p>
          </div>

          {/* Asymmetric 12-Column Photographic Feature (8 Cols Panoramic + 4 Cols Arch & Field Note) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left 8 Columns: Oversized Panoramic Feature Plate */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-8 flex flex-col justify-between space-y-5"
            >
              <div className="bento-frame w-full min-h-[380px] sm:min-h-[460px] lg:h-full relative bg-[#3B2348] border border-[#D8C7A5] shadow-xl flex flex-col justify-between group">
                {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
                  alt="Illustrative placeholder: Sunlit residential common lounge, library reading corner, and dining transition at Mission Villa"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover mood-grade group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/95 via-[#22122B]/30 to-transparent" />

                <div className="cutout-br-cream hidden sm:block">
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="px-5 py-3 rounded-2xl bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] text-xs font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Walk Through Our Spaces in Person</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="relative z-10 p-6 sm:p-8 mt-auto max-w-2xl text-[#F7F4ED] space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#8FAF78] font-semibold block">
                    Photographic Feature I · Common Spaces, Wi-Fi &amp; Escort Support
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug">
                    From Private or Companion Suites to the Shared Table—Without Hurry or Confusion
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F7F4ED]/85 leading-relaxed">
                    Because our 24-hour staff provides gentle escort and transfer support, residents can move comfortably from their suites to full-table meals, library reading corners, salon appointments, and afternoon activities.
                  </p>
                  <p className="text-[10px] text-[#D8C7A5]/80">
                    Illustrative placeholder photography (ILLUSTRATIVE — REPLACE BEFORE LAUNCH)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right 4 Columns: Companion Botanical Arch + Tactile Service Pairings */}
            <motion.div
              {...fadeUpProps}
              className="lg:col-span-4 herbarium-mount rounded-[32px] p-6 sm:p-8 flex flex-col justify-between space-y-5"
            >
              <div className="arch-portal h-56 w-full relative bg-[#22122B] border border-[#D8C7A5] overflow-hidden">
                {/* ILLUSTRATIVE — REPLACE BEFORE LAUNCH */}
                <img
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80"
                  alt="Illustrative placeholder: Fresh botanical detail representing daily enrichment and courtyard garden care"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover mood-grade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-[#F7F4ED]">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                    Photographic Feature II · Daily Details
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-serif text-2xl font-bold text-[#3B2348] leading-snug">
                  The Quiet Details Families Appreciate Most
                </h3>
                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  When personal laundry, housekeeping, meal preparation, and routine assessments are handled reliably on-site, relatives no longer spend their visits catching up on chores—they simply enjoy being family again.
                </p>
              </div>

              <div className="pt-3 border-t border-[#D8C7A5] space-y-2 text-xs text-[#29272B]/85">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#3B2348]">Indoor &amp; Outdoor Flow</span>
                  <span>Courtyard · Patio · Library</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#3B2348]">Family Convenience</span>
                  <span>On-Site Parking · Wi-Fi · Private Dining</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: PRACTICAL "ASK US ABOUT..." DISCLOSURE
            ON ELIGIBILITY & SERVICE AVAILABILITY + INTERACTIVE TOUR BUILDER
        ==================================================================== */}
        <section
          id="ask-us-about"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#3B2348] text-[#F7F4ED] relative overflow-hidden scroll-mt-20"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 5 Columns: Transparent Disclosure Narrative & Custom Question Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="font-script script-display text-[#D8C7A5] block">
                  Transparent Guidance for Families
                </span>
                <h2
                  className="font-serif section-display text-[#F7F4ED] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Ask Us About Eligibility, Inclusions &amp; Current Availability
                </h2>
                <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                  The services and amenities shown on this page reflect the offerings described on the official Mission Villa Senior Living website. Because every resident’s health profile, mobility, and care plan are individual—and because community schedules or third-party salon/transportation terms can change—we encourage families to confirm specifics directly with our Daly City team.
                </p>
              </div>

              {/* Interactive Tour Question Compiler Card */}
              <div className="rounded-3xl bg-[#22122B] border border-[#D8C7A5]/30 p-6 sm:p-7 space-y-5 shadow-xl">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8FAF78] font-bold block">
                      Interactive Visit Preparation
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#F7F4ED] mt-0.5">
                      Your Selected Questions for Our Team
                    </h3>
                  </div>
                  <HelpCircle className="w-5 h-5 text-[#D8C7A5] shrink-0" aria-hidden="true" />
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[#D8C7A5] font-semibold block mb-1">
                      Bookmarked Offerings ({bookmarkedItemIds.length}):
                    </span>
                    {bookmarkedItemIds.length === 0 ? (
                      <p className="text-[#F7F4ED]/65 italic">
                        Click “Ask on Tour” on any offering above to add it here.
                      </p>
                    ) : (
                      <p className="text-[#F7F4ED]/90 leading-relaxed">
                        {SERVICES_AND_AMENITIES_ITEMS.filter((i) =>
                          bookmarkedItemIds.includes(i.id)
                        )
                          .map((i) => i.title)
                          .join(' · ')}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[#D8C7A5] font-semibold block mb-1">
                      Selected Eligibility &amp; Availability Topics ({selectedDisclosureIds.length}):
                    </span>
                    {selectedDisclosureIds.length === 0 ? (
                      <p className="text-[#F7F4ED]/65 italic">
                        Select any “Ask Us About...” topic on the right to include it.
                      </p>
                    ) : (
                      <p className="text-[#F7F4ED]/90 leading-relaxed">
                        {ASK_US_ABOUT_DISCLOSURES.filter((d) =>
                          selectedDisclosureIds.includes(d.id)
                        )
                          .map((d) => d.topic)
                          .join(' · ')}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleApplyQuestionsToForm}
                  className="w-full py-3.5 px-5 rounded-full bg-[#C98268] text-white font-semibold text-xs sm:text-sm hover:bg-[#D8C7A5] hover:text-[#3B2348] transition-colors cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Add Selected Questions to My Visit Inquiry ↓</span>
                </button>
              </div>
            </div>

            {/* Right 7 Columns: 4 "Ask Us About..." Disclosure Ledger Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {ASK_US_ABOUT_DISCLOSURES.map((disc) => {
                const isSelected = selectedDisclosureIds.includes(disc.id);
                return (
                  <article
                    key={disc.id}
                    className={`rounded-[28px] p-6 sm:p-7 border transition-all flex flex-col justify-between space-y-5 ${
                      isSelected
                        ? 'bg-[#FCFBF8] text-[#29272B] border-[#D8C7A5] shadow-xl'
                        : 'bg-[#22122B]/85 text-[#F7F4ED] border-white/15 hover:border-[#D8C7A5]/50'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isSelected ? 'text-[#A65D43]' : 'text-[#D8C7A5]'
                          }`}
                        >
                          Ask Us About {disc.index}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleDisclosureTopic(disc.id)}
                          aria-pressed={isSelected}
                          className={`px-3 py-1 rounded-xl text-[11px] font-semibold border transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348]'
                              : 'bg-white/10 text-[#D8C7A5] border-white/15 hover:bg-white/20'
                          }`}
                        >
                          {isSelected ? '✓ Included in Inquiry' : '+ Include Topic'}
                        </button>
                      </div>

                      <h3
                        className={`font-serif text-xl font-bold leading-snug ${
                          isSelected ? 'text-[#3B2348]' : 'text-[#F7F4ED]'
                        }`}
                      >
                        {disc.headline}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isSelected ? 'text-[#29272B]/85' : 'text-[#F7F4ED]/80'
                        }`}
                      >
                        {disc.explanation}
                      </p>
                    </div>

                    <div
                      className={`pt-4 border-t space-y-2 ${
                        isSelected ? 'border-[#D8C7A5]' : 'border-white/10'
                      }`}
                    >
                      <span
                        className={`text-[10px] uppercase tracking-[0.18em] font-bold block ${
                          isSelected ? 'text-[#5F7F49]' : 'text-[#8FAF78]'
                        }`}
                      >
                        Questions to Bring on Your Tour
                      </span>
                      <ul className="space-y-1.5 text-xs">
                        {disc.questionsToBring.map((q) => (
                          <li
                            key={q}
                            className={`font-serif italic ${
                              isSelected ? 'text-[#3B2348]' : 'text-[#D8C7A5]'
                            }`}
                          >
                            “{q}”
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: RELATED MEMORY CARE & RESPITE CARE LINKS BRIDGE
            Connecting Practical Offerings to Mission Villa's Two Care Programs
        ==================================================================== */}
        <section
          id="care-programs-bridge"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-3xl">
              <span className="font-script script-display text-[#C98268] block">
                Connected Care Pathways
              </span>
              <h2
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                How Services &amp; Amenities Support Our Two Care Programs
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                At Mission Villa Senior Living in Daly City, these services and amenities are dedicated to our two core care programs: full-time <strong>Memory Care</strong> and short-term <strong>Respite Care</strong>. Explore either program below to see how daily support is tailored to your family’s situation.
              </p>
            </div>

            <Link
              href="/life-at-mission-villa"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F7F4ED] border border-[#D8C7A5] text-[#3B2348] hover:border-[#3B2348] text-xs sm:text-sm font-semibold transition-colors self-start lg:self-end whitespace-nowrap"
            >
              <span>← Return to Life at Mission Villa Overview</span>
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Program 1: Memory Care (/memory-care) — 6 Columns */}
            <div className="lg:col-span-6 herbarium-mount rounded-[32px] p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#A65D43] font-bold">
                  <span>Program 01 · Dedicated Dementia Support</span>
                  <span>Page 01</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348]">
                  Memory Care &amp; The Legacies™ Program
                </h3>
                <p className="text-sm text-[#29272B]/85 leading-relaxed">
                  For older adults living with Alzheimer’s disease or other forms of dementia, our 24-hour staff, routine assessments, full-table dining, and activity director programming work together through our person-centered <strong>Legacies™ Memory Care</strong> approach.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#29272B]/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5" />
                    <span>
                      Private Suites, Companion Units, and Jack &amp; Jill suite formats with private bathrooms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5" />
                    <span>
                      Individualized assistance with bathing, dressing, grooming, and escort support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5" />
                    <span>
                      Life-story activities, chef-prepared meals, personal laundry, and housekeeping
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/memory-care"
                  className="px-5 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] text-xs sm:text-sm font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Memory Care</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit', 'Memory Care')}
                  className="text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] underline cursor-pointer"
                >
                  Inquire About Memory Care →
                </button>
              </div>
            </div>

            {/* Program 2: Respite Care (/respite-care) — 6 Columns */}
            <div className="lg:col-span-6 herbarium-mount rounded-[32px] p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#5F7F49] font-bold">
                  <span>Program 02 · Flexible Short-Term Stays</span>
                  <span>Page 02</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348]">
                  Short-Term Respite Care &amp; Caregiver Relief
                </h3>
                <p className="text-sm text-[#29272B]/85 leading-relaxed">
                  When a primary family caregiver needs time to rest, travel, or bridge a post-illness transition, short-term Respite Care guests are welcomed into the full hospitality, dining, courtyard, and 24-hour support of Mission Villa for a few days to several weeks.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#29272B]/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5" />
                    <span>
                      Comfortable furnished accommodations with private bathroom access
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5" />
                    <span>
                      Three daily chef-prepared meals with full-table service plus snacks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#5F7F49] shrink-0 mt-0.5" />
                    <span>
                      Full participation in daily activities, garden courtyard time, and 24-hour staff care
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/respite-care"
                  className="px-5 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268] text-xs sm:text-sm font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Respite Care</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleNavigateToSection('schedule-visit', 'Respite Care')}
                  className="text-xs sm:text-sm font-semibold text-[#3B2348] hover:text-[#C98268] underline cursor-pointer"
                >
                  Inquire About Respite Availability →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: SHARED VISIT INQUIRY FORM & ARCHITECTURAL FOOTER
        ==================================================================== */}
        <VisitAndFooterSection
          presetCareOption={presetCareOption}
          prefilledNotes={prefilledFormNotes}
          onNavigateToSection={handleNavigateToSection}
        />
      </main>
    </div>
  );
}
