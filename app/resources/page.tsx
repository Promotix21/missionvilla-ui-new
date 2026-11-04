'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Search,
  ChevronDown,
  BookOpen,
  FileText,
  HelpCircle,
  ClipboardCheck,
  Calculator,
  Clock,
  Layers,
  Mail,
} from 'lucide-react';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';
import {
  MISSION_VILLA_FACTS,
  RESOURCE_LIBRARY_CATEGORIES,
  RESOURCE_LIBRARY_ITEMS,
  BROCHURE_PACKET_ITEMS,
  BLOG_INVENTORY_STAGES,
  VERIFIED_BLOG_ALTERNATIVE_BRIDGES,
  RESOURCES_PAGE_FAQS,
  filterResourceLibraryItems,
  buildResourcePacketInquiryNote,
  filterResourcesFaqs,
  type ResourcePillarCategory,
  type ResourceLibraryItem,
  type BlogInventoryStage,
  type ResourcesFaqCategory,
  type VisitInquiryInput,
} from '@/lib/mission-villa-data';

export default function ResourcesOverviewPage() {
  const [fontScale, setFontScale] = useState<number>(1);

  // Shared inquiry form presets passed down to VisitAndFooterSection (#schedule-visit)
  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >(null);
  const [presetSuitePreference, setPresetSuitePreference] =
    useState<VisitInquiryInput['suitePreference']>('Private Suite');
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  // Section 2: Interactive Family Resource Desk state
  const [activeResourceCategory, setActiveResourceCategory] =
    useState<ResourcePillarCategory>('All Resources');
  const [resourceSearchQuery, setResourceSearchQuery] = useState<string>('');
  const [selectedResourceId, setSelectedResourceId] = useState<string>(
    'resource-financial-planning'
  );

  // Section 3: Community Brochure & Tour Packet Builder state
  const [selectedPacketIds, setSelectedPacketIds] = useState<string[]>(
    BROCHURE_PACKET_ITEMS.filter((item) => item.defaultSelected).map((item) => item.id)
  );
  const [packetAttachedNotice, setPacketAttachedNotice] = useState<boolean>(false);

  // Section 4: Blog Inventory & Editorial Archive Status state
  const [selectedBlogStageId, setSelectedBlogStageId] = useState<BlogInventoryStage['id']>(
    'blog-stage-02-article-inventory'
  );

  // Section 5: Resources FAQs state
  const [activeFaqCategory, setActiveFaqCategory] =
    useState<ResourcesFaqCategory>('All Questions');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([
    'res-faq-where-to-start',
    'res-faq-brochure-request',
    'res-faq-why-blog-pending',
  ]);

  const filteredResources = filterResourceLibraryItems(
    RESOURCE_LIBRARY_ITEMS,
    activeResourceCategory,
    resourceSearchQuery
  );

  const activeResourceItem: ResourceLibraryItem =
    filteredResources.find((item) => item.id === selectedResourceId) ||
    filteredResources[0] ||
    RESOURCE_LIBRARY_ITEMS[0];

  const activeBlogStage: BlogInventoryStage =
    BLOG_INVENTORY_STAGES.find((stage) => stage.id === selectedBlogStageId) ||
    BLOG_INVENTORY_STAGES[1];

  const filteredFaqs = filterResourcesFaqs(
    RESOURCES_PAGE_FAQS,
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
    if (typeof customNote === 'string' && customNote.trim().length > 0) {
      setPrefilledNotes(customNote);
    }
    if (typeof document !== 'undefined') {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const togglePacketItem = (id: string) => {
    setPacketAttachedNotice(false);
    setSelectedPacketIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAttachPacketToInquiry = () => {
    const note = buildResourcePacketInquiryNote(BROCHURE_PACKET_ITEMS, selectedPacketIds);
    setPrefilledNotes(note);
    setPacketAttachedNotice(true);
    handleNavigateToSection('schedule-visit', undefined, undefined, note);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Top 4 core pillars highlighted in the Hero Archival Catalogue Grid
  const heroFolioPillars = RESOURCE_LIBRARY_ITEMS.slice(0, 4);

  return (
    <div className="min-h-screen w-full bg-[#F7F4ED] text-[#29272B] selection:bg-[#3B2348] selection:text-[#F7F4ED]">
      {/* Shared Utility Ribbon & Sticky Editorial Header */}
      <HeaderAndUtilityBar
        fontScale={fontScale}
        onChangeFontScale={setFontScale}
        onNavigateToSection={(sectionId, presetCare) =>
          handleNavigateToSection(sectionId, presetCare)
        }
      />

      <main className="w-full">
        {/* ===================================================================
            SECTION 1: ARCHIVAL READING ROOM & FAMILY REFERENCE LIBRARY HERO
        ==================================================================== */}
        <section
          aria-labelledby="resources-hero-heading"
          className="w-full bg-[#F7F4ED] grid-line-b relative overflow-hidden pt-4 pb-10 lg:py-8 fluid-canvas"
        >
          {/* Breadcrumb & Verified Community Identity Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#3B2348]/15 text-xs">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#29272B]/75">
              <Link href="/" className="hover:text-[#3B2348] transition font-medium">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#3B2348] font-semibold" aria-current="page">
                Resources Overview
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#29272B]/80">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#3B2348]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5F7F49]" aria-hidden="true" />
                <span>CA RCFE License #{MISSION_VILLA_FACTS.licenseNumber}</span>
              </span>
              <span aria-hidden="true" className="text-[#3B2348]/30">
                ·
              </span>
              <span>{MISSION_VILLA_FACTS.address.full}</span>
            </div>
          </div>

          {/* Main 12-Column Hero Split */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left 6 Columns: Editorial Reference Library Introduction & Primary CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold">
                  <span>Family Reference Library</span>
                  <span aria-hidden="true">·</span>
                  <span>Guides, Brochure &amp; Archive Status</span>
                </div>

                <h1
                  id="resources-hero-heading"
                  className="font-serif text-3xl sm:text-4xl xl:text-[42px] leading-[1.12] text-[#3B2348] font-semibold tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Practical Guides, Financial Clarity &amp; Honest Answers for Your Family’s Next Step.
                </h1>

                <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed max-w-2xl">
                  Exploring Memory Care or a short-term Respite Care stay brings important questions about daily life, suite options, and monthly costs. This resource library gathers Mission Villa’s{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    Financial Planning Paper-Ledger Guide
                  </strong>
                  ,{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    Family Decision &amp; Tour Question Notebook
                  </strong>
                  ,{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    Community Brochure Packet Builder
                  </strong>
                  , and transparent{' '}
                  <strong className="text-[#3B2348] font-semibold">
                    Blog Inventory Status
                  </strong>{' '}
                  into one calm, accessible reading desk.
                </p>
              </div>

              {/* Herbarium-Mounted Editorial Accuracy & Anti-Fabrication Pledge */}
              <div className="herbarium-mount rounded-3xl p-4 bg-[#FCFBF8] border border-[#D8C7A5] space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8C7A5]/70 pb-1.5">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#3B2348] font-bold">
                    Our Editorial Accuracy Commitment
                  </span>
                  <span className="text-xs text-[#A65D43] font-semibold">
                    Zero Fabricated Articles or Rates
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#29272B]/85 leading-relaxed">
                  Every guide in this library is grounded in Mission Villa Senior Living’s verified Daly City offerings (Legacies™ Memory Care and short-term Respite Care). Where official downloadable PDFs or legacy blog articles are still awaiting final client verification, we label their status transparently rather than publishing placeholder blog posts, fictional authors, or invented prices.
                </p>
              </div>

              {/* Primary & Secondary Action Bar */}
              <div className="pt-0.5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('schedule-visit')}
                    className="px-4 sm:px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] font-semibold text-xs hover:bg-[#C98268] transition-colors shadow-md cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Schedule a Visit in Daly City</span>
                    <span className="hidden sm:inline" aria-hidden="true">
                      →
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigateToSection('resource-pillars-desk')}
                    className="px-4 py-2.5 rounded-full bg-[#FCFBF8] border border-[#3B2348]/30 text-[#3B2348] font-semibold text-xs hover:border-[#3B2348] hover:bg-[#D8C7A5]/25 transition-colors cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                    <span>Browse Resource Desk ↓</span>
                  </button>

                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="px-4 py-2.5 rounded-full border border-[#D8C7A5] bg-[#F7F4ED] text-[#3B2348] font-semibold text-xs hover:border-[#3B2348] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
                    <span>Call {MISSION_VILLA_FACTS.phone.formatted}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: 4-Folio Archival Catalogue Grid (Core §5 Page 12 Deliverables) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch">
              {heroFolioPillars.map((pillar, idx) => {
                const isDarkCard = idx === 0 || idx === 3;
                const isAnchorLink = pillar.primaryHref.startsWith('#');

                return (
                  <article
                    key={pillar.id}
                    className={`rounded-[24px] p-4 sm:p-5 border flex flex-col justify-between transition-all shadow-sm ${
                      isDarkCard
                        ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348]'
                        : 'bg-[#FCFBF8] text-[#29272B] border-[#D8C7A5]'
                    }`}
                  >
                    <div className="space-y-2">
                      {/* Folio Header & Unboxed Status Metadata */}
                      <div className="flex items-center justify-between gap-2 pb-2 border-b border-current/15 text-[11px]">
                        <span
                          className={`font-mono uppercase tracking-widest font-semibold ${
                            isDarkCard ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                          }`}
                        >
                          {pillar.folioCode}
                        </span>
                        <span
                          className={`font-medium ${
                            isDarkCard ? 'text-[#8FAF78]' : 'text-[#5F7F49]'
                          }`}
                        >
                          {pillar.statusBadge}
                        </span>
                      </div>

                      <h2
                        className={`font-serif text-base sm:text-lg font-semibold leading-snug ${
                          isDarkCard ? 'text-[#F7F4ED]' : 'text-[#3B2348]'
                        }`}
                      >
                        {pillar.title}
                      </h2>

                      <p
                        className={`text-xs leading-relaxed ${
                          isDarkCard ? 'text-[#F7F4ED]/85' : 'text-[#29272B]/80'
                        }`}
                      >
                        {pillar.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-current/15 flex flex-col gap-2">
                      {isAnchorLink ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleNavigateToSection(pillar.primaryHref.replace('#', ''))
                          }
                          className={`w-full py-2 px-3.5 rounded-full text-xs font-semibold inline-flex items-center justify-between transition-colors cursor-pointer whitespace-nowrap ${
                            isDarkCard
                              ? 'bg-[#D8C7A5] text-[#3B2348] hover:bg-[#C98268] hover:text-white'
                              : 'bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268]'
                          }`}
                        >
                          <span>{pillar.primaryCtaLabel}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </button>
                      ) : (
                        <Link
                          href={pillar.primaryHref}
                          className={`w-full py-2 px-3.5 rounded-full text-xs font-semibold inline-flex items-center justify-between transition-colors whitespace-nowrap ${
                            isDarkCard
                              ? 'bg-[#D8C7A5] text-[#3B2348] hover:bg-[#C98268] hover:text-white'
                              : 'bg-[#3B2348] text-[#F7F4ED] hover:bg-[#C98268]'
                          }`}
                        >
                          <span>{pillar.primaryCtaLabel}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Full-Width Section Index Bar Below Hero Split */}
          <div className="w-full mt-6 pt-5 border-t border-[#3B2348]/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                index: '01',
                label: 'Interactive Resource Desk',
                target: 'resource-pillars-desk',
              },
              {
                index: '02',
                label: 'Brochure & Tour Packet Builder',
                target: 'brochure-and-packet',
              },
              {
                index: '03',
                label: 'Blog Inventory Status',
                target: 'blog-inventory-status',
              },
              {
                index: '04',
                label: 'Verified Topic Router',
                target: 'verified-topic-router',
              },
              {
                index: '05',
                label: 'Resources & Brochure FAQs',
                target: 'resources-faqs',
              },
            ].map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavigateToSection(item.target)}
                className="text-left p-3 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] hover:border-[#3B2348] transition group cursor-pointer flex items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A65D43] block">
                    Section {item.index}
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-semibold text-[#3B2348] group-hover:text-[#C98268] transition truncate block">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-[#3B2348]/60 group-hover:text-[#C98268] shrink-0"
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: INTERACTIVE FAMILY RESOURCE DESK & GUIDED TOPIC EXPLORER
        ==================================================================== */}
        <section
          id="resource-pillars-desk"
          aria-labelledby="resource-desk-heading"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#FCFBF8]"
        >
          {/* Section Header & Filter/Search Bar */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-2.5">
              <span className="font-script script-display text-[#C98268] block">
                Curated Family Planning Library
              </span>
              <h2
                id="resource-desk-heading"
                className="font-serif section-display text-[#3B2348] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Explore Mission Villa’s Planning Guides, Checklists &amp; Archive Status
              </h2>
              <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed max-w-2xl">
                Filter by planning topic or search by keyword to preview each guide’s key takeaways and jump directly to our interactive worksheets, decision tools, and collateral status notes.
              </p>
            </div>

            {/* Search Input */}
            <div className="lg:col-span-5">
              <label
                htmlFor="resource-library-search"
                className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-2"
              >
                Search Family Resources &amp; Guides
              </label>
              <div className="relative">
                <Search
                  className="w-4 h-4 text-[#3B2348]/60 absolute left-4 top-1/2 -translate-y-1/2"
                  aria-hidden="true"
                />
                <input
                  id="resource-library-search"
                  type="search"
                  value={resourceSearchQuery}
                  onChange={(e) => setResourceSearchQuery(e.target.value)}
                  placeholder="Search e.g., Paper-Ledger, FAQs, Brochure, Blog, Respite..."
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-[#F7F4ED] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-xs sm:text-sm text-[#29272B]"
                />
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter family resources by category"
            className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-[#D8C7A5]"
          >
            {RESOURCE_LIBRARY_CATEGORIES.map((category) => {
              const isActive = activeResourceCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveResourceCategory(category);
                    const nextMatches = filterResourceLibraryItems(
                      RESOURCE_LIBRARY_ITEMS,
                      category,
                      resourceSearchQuery
                    );
                    if (nextMatches.length > 0) {
                      setSelectedResourceId(nextMatches[0].id);
                    }
                  }}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#3B2348] text-[#F7F4ED] shadow-sm'
                      : 'bg-[#F7F4ED] text-[#3B2348] border border-[#D8C7A5] hover:border-[#3B2348]'
                  }`}
                >
                  {category}
                </button>
              );
            })}

            {(activeResourceCategory !== 'All Resources' || resourceSearchQuery.trim() !== '') && (
              <button
                type="button"
                onClick={() => {
                  setActiveResourceCategory('All Resources');
                  setResourceSearchQuery('');
                  setSelectedResourceId(RESOURCE_LIBRARY_ITEMS[0].id);
                }}
                className="px-3.5 py-2 text-xs font-semibold text-[#A65D43] underline cursor-pointer ml-auto"
              >
                Reset Resource Filter
              </button>
            )}
          </div>

          {/* 12-Column Interactive Catalogue List + Synchronized Folio Spotlight Reader */}
          {filteredResources.length === 0 ? (
            <div className="p-8 rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] text-center space-y-3">
              <p className="font-serif text-xl text-[#3B2348] font-semibold">
                No resources matched “{resourceSearchQuery}” in {activeResourceCategory}.
              </p>
              <p className="text-xs sm:text-sm text-[#29272B]/80">
                Try clearing your search term or switching back to All Resources.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveResourceCategory('All Resources');
                  setResourceSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold cursor-pointer"
              >
                Show All 6 Family Resource Folios
              </button>
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left 5 Columns: Selectable Folio Index List */}
              <div className="lg:col-span-5 space-y-3">
                {filteredResources.map((item) => {
                  const isSelected = activeResourceItem.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedResourceId(item.id)}
                      className={`w-full text-left p-5 rounded-3xl border transition-all cursor-pointer block ${
                        isSelected
                          ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348] shadow-lg'
                          : 'bg-[#F7F4ED] text-[#29272B] border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] mb-1.5">
                        <span
                          className={`font-mono uppercase tracking-wider font-semibold ${
                            isSelected ? 'text-[#D8C7A5]' : 'text-[#A65D43]'
                          }`}
                        >
                          {item.folioCode} · {item.category}
                        </span>
                        <span
                          className={`font-medium ${
                            isSelected ? 'text-[#8FAF78]' : 'text-[#5F7F49]'
                          }`}
                        >
                          {item.statusBadge}
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-lg font-semibold leading-snug ${
                          isSelected ? 'text-[#F7F4ED]' : 'text-[#3B2348]'
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`text-xs mt-1.5 leading-relaxed ${
                          isSelected ? 'text-[#F7F4ED]/85' : 'text-[#29272B]/75'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right 7 Columns: Synchronized Folio Spotlight Reader */}
              <div className="lg:col-span-7">
                <article className="herbarium-mount rounded-[32px] bg-[#F7F4ED] border border-[#D8C7A5] overflow-hidden shadow-xl">
                  {/* Top Editorial Photo Pairing */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#22122B]">
                    <img
                      src={activeResourceItem.placeholderImage.src}
                      alt={activeResourceItem.placeholderImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover mood-grade"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#22122B]/35 to-transparent" />

                    {/* Top-Left Cutout Folio Tag */}
                    <div className="cutout-tl-cream">
                      <span className="inline-block px-4 py-2 rounded-2xl bg-[#3B2348] text-[#D8C7A5] text-xs font-mono uppercase tracking-wider font-semibold">
                        {activeResourceItem.folioCode} · {activeResourceItem.statusBadge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 text-[#F7F4ED]">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#D8C7A5] font-semibold block">
                        {activeResourceItem.category}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-1 leading-tight">
                        {activeResourceItem.title}
                      </h3>
                    </div>
                  </div>

                  {/* Illustrative Placeholder Status Ribbon */}
                  <div className="px-6 py-2 bg-[#22122B] text-[#D8C7A5] text-[11px] font-mono uppercase tracking-wider flex flex-wrap items-center justify-between gap-2">
                    <span>{activeResourceItem.placeholderImage.status}</span>
                    <span className="text-[#F7F4ED]/75 font-sans normal-case italic">
                      {activeResourceItem.placeholderImage.caption}
                    </span>
                  </div>

                  {/* Detailed Folio Body */}
                  <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                    <p className="text-sm sm:text-base text-[#29272B]/90 leading-relaxed">
                      {activeResourceItem.summary}
                    </p>

                    <div className="space-y-3 pt-2 border-t border-[#D8C7A5]">
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B2348]">
                        What You Will Find Inside This Resource
                      </h4>
                      <ul className="space-y-2.5">
                        {activeResourceItem.keyTakeaways.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[#29272B]/90"
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

                    {activeResourceItem.verificationNote && (
                      <div className="p-4 rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] text-xs text-[#A65D43] leading-relaxed">
                        <strong className="text-[#3B2348] block mb-0.5">
                          Editorial &amp; Pre-Launch Verification Note:
                        </strong>
                        {activeResourceItem.verificationNote}
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center gap-3">
                      {activeResourceItem.primaryHref.startsWith('#') ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleNavigateToSection(
                              activeResourceItem.primaryHref.replace('#', '')
                            )
                          }
                          className="px-6 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                        >
                          <span>{activeResourceItem.primaryCtaLabel}</span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                      ) : (
                        <Link
                          href={activeResourceItem.primaryHref}
                          className="px-6 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                        >
                          <span>{activeResourceItem.primaryCtaLabel}</span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      )}

                      {activeResourceItem.secondaryHref &&
                        activeResourceItem.secondaryCtaLabel && (
                          <Link
                            href={activeResourceItem.secondaryHref}
                            className="px-5 py-3 rounded-full bg-[#FCFBF8] border border-[#3B2348]/30 text-[#3B2348] text-xs sm:text-sm font-semibold hover:border-[#3B2348] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                          >
                            <span>{activeResourceItem.secondaryCtaLabel}</span>
                            <ArrowUpRight className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                          </Link>
                        )}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )}
        </section>

        {/* ===================================================================
            SECTION 3: COMMUNITY BROCHURE PLACEHOLDER & TOUR RESOURCE PACKET BUILDER
        ==================================================================== */}
        <section
          id="brochure-and-packet"
          aria-labelledby="brochure-packet-heading"
          className="w-full py-20 lg:py-28 fluid-canvas grid-line-b bg-[#F7F4ED]"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left 5 Columns: Honest Community Brochure Placeholder Vault */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="font-script script-display text-[#C98268] block">
                  Printed &amp; Downloadable Materials
                </span>
                <h2
                  id="brochure-packet-heading"
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Community Brochure Status &amp; Custom Visit Packet Builder
                </h2>
                <p className="text-sm sm:text-base text-[#29272B]/85 leading-relaxed">
                  Families often appreciate having printed materials to review around the kitchen table with relatives. Here is the transparent status of our downloadable brochure alongside an interactive checklist to request specific materials for your tour at 995 East Market Street.
                </p>
              </div>

              {/* Honest Brochure Asset Placeholder Card */}
              <div className="rounded-[28px] bg-[#FCFBF8] border-2 border-dashed border-[#3B2348]/35 p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#D8C7A5]">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B2348]">
                    <FileText className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
                    <span>Official Community Brochure PDF</span>
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#A65D43]">
                    Awaiting Official Asset
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3B2348]">
                  Awaiting Official Mission Villa Brochure PDF &amp; Floor-Plan Inserts
                </h3>

                <p className="text-xs sm:text-sm text-[#29272B]/85 leading-relaxed">
                  In keeping with our design-stage accuracy rules, this slot is reserved for Mission Villa Senior Living’s official client-approved PDF brochure (
                  <span className="font-mono text-xs text-[#A65D43] font-semibold">
                    CLIENT CONFIRMATION &amp; ASSET REQUIRED
                  </span>
                  ). We do not link to placeholder PDFs with invented room measurements or unapproved pricing tables.
                </p>

                <div className="p-4 rounded-2xl bg-[#F7F4ED] border border-[#D8C7A5] space-y-2 text-xs">
                  <span className="font-semibold text-[#3B2348] block">
                    Need community information right away?
                  </span>
                  <p className="text-[#29272B]/80 leading-relaxed">
                    Call our Daly City desk at{' '}
                    <a
                      href={MISSION_VILLA_FACTS.phone.href}
                      className="font-bold text-[#3B2348] underline"
                    >
                      {MISSION_VILLA_FACTS.phone.formatted}
                    </a>{' '}
                    or email{' '}
                    <a
                      href={MISSION_VILLA_FACTS.email.href}
                      className="font-bold text-[#3B2348] underline break-all"
                    >
                      {MISSION_VILLA_FACTS.email.address}
                    </a>
                    , or use the Packet Builder on the right to request printed materials for your visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive "Assemble Your Family Visit Packet" Builder */}
            <div className="lg:col-span-7 flex">
              <div className="herbarium-mount rounded-[32px] bg-[#FCFBF8] border border-[#D8C7A5] p-6 sm:p-8 lg:p-10 w-full flex flex-col justify-between shadow-lg space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#D8C7A5] pb-5">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                      Interactive Tour Preparation Tool
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348] mt-1">
                      Assemble Your Family Resource Packet
                    </h3>
                    <p className="text-xs sm:text-sm text-[#29272B]/80 mt-1">
                      Select the guides and worksheets you would like our team to prepare for your visit or phone consultation, then attach them to your inquiry with one click.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#3B2348] tabular-nums">
                    {selectedPacketIds.length} of {BROCHURE_PACKET_ITEMS.length} Selected
                  </span>
                </div>

                {/* Selectable Collateral Items */}
                <div className="space-y-3">
                  {BROCHURE_PACKET_ITEMS.map((doc) => {
                    const isChecked = selectedPacketIds.includes(doc.id);
                    return (
                      <div
                        key={doc.id}
                        onClick={() => togglePacketItem(doc.id)}
                        role="checkbox"
                        aria-checked={isChecked}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            togglePacketItem(doc.id);
                          }
                        }}
                        className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-3.5 ${
                          isChecked
                            ? 'bg-[#3B2348]/5 border-[#3B2348]'
                            : 'bg-[#F7F4ED] border-[#D8C7A5] hover:border-[#3B2348]/60'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition ${
                            isChecked
                              ? 'bg-[#3B2348] border-[#3B2348] text-[#F7F4ED]'
                              : 'bg-white border-[#3B2348]/40 text-transparent'
                          }`}
                          aria-hidden="true"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#A65D43] font-semibold">
                            <span className="font-mono">{doc.code}</span>
                            <span aria-hidden="true">·</span>
                            <span>{doc.category}</span>
                          </div>
                          <h4 className="font-serif text-base font-bold text-[#3B2348] mt-0.5">
                            {doc.title}
                          </h4>
                          <p className="text-xs text-[#29272B]/80 mt-1 leading-relaxed">
                            {doc.description}
                          </p>
                          <p className="text-[11px] text-[#5F7F49] font-medium mt-1.5">
                            Status: {doc.availabilityStatus}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Packet Builder Action Footer */}
                <div className="pt-4 border-t border-[#D8C7A5] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-xs">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedPacketIds(BROCHURE_PACKET_ITEMS.map((item) => item.id))
                      }
                      className="font-semibold text-[#3B2348] underline cursor-pointer"
                    >
                      Select All 5 Items
                    </button>
                    <span aria-hidden="true" className="text-[#3B2348]/30">
                      ·
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedPacketIds([])}
                      className="font-semibold text-[#A65D43] underline cursor-pointer"
                    >
                      Clear Selection
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAttachPacketToInquiry}
                    className="px-6 py-3 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs sm:text-sm font-semibold hover:bg-[#C98268] transition-colors shadow-md cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                    <span>
                      Attach {selectedPacketIds.length} Packet Item
                      {selectedPacketIds.length === 1 ? '' : 's'} to Visit Inquiry ↓
                    </span>
                  </button>
                </div>

                {packetAttachedNotice && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="p-3.5 rounded-xl bg-[#8FAF78]/20 border border-[#8FAF78] text-xs text-[#3B2348] font-medium"
                  >
                    Your selected resource packet items have been added to the Visit &amp; Information Request form below.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: ORIGINAL BLOG INVENTORY & EDITORIAL ARCHIVE STATUS
            (Strictly zero fabricated blog articles, authors, or dates)
        ==================================================================== */}
        <section
          id="blog-inventory-status"
          aria-labelledby="blog-inventory-heading"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#22122B] text-[#F7F4ED] grid-line-b"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 5 Columns: Transparent Blog Inventory Explanation & Guardrail Ledger */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="font-script script-display text-[#D8C7A5] block">
                  Editorial Integrity &amp; Archive Status
                </span>
                <h2
                  id="blog-inventory-heading"
                  className="font-serif section-display text-[#F7F4ED] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Mission Villa Blog Inventory &amp; Migration Status
                </h2>
                <p className="text-sm sm:text-base text-[#F7F4ED]/85 leading-relaxed">
                  The original Mission Villa Senior Living navigation includes a{' '}
                  <strong className="text-[#D8C7A5] font-semibold">Blog</strong> section. Per our multi-page blueprint (§5 Page 12), we preserve original blog articles where helpful—but strictly refuse to invent placeholder articles, fictional staff authors, or fabricated publication dates during design prototyping.
                </p>
              </div>

              {/* Zero-Fabrication Guardrail Card */}
              <div className="rounded-3xl bg-[#3B2348] border border-[#D8C7A5]/30 p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/15 text-xs">
                  <span className="uppercase tracking-[0.18em] text-[#8FAF78] font-bold">
                    Sitemap Status: /blog
                  </span>
                  <span className="font-mono text-[#D8C7A5]">Inventory Pending</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F4ED]/90">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8FAF78] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <strong>Zero fabricated articles:</strong> No synthetic dementia care blog posts or placeholder headlines are published on this prototype.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8FAF78] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <strong>Zero invented authors or dates:</strong> No fictional medical directors, fake staff bylines, or backdated timestamps appear anywhere in the site.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8FAF78] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <strong>No dead navigation links:</strong> Until extant articles from{' '}
                      <code className="text-[#D8C7A5]">missionvillaseniorliving.com</code> are inventoried and approved, blog references route cleanly to this status ledger.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right 7 Columns: Interactive 4-Stage Blog Migration & Verification Protocol */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-[32px] bg-[#3B2348]/75 border border-[#D8C7A5]/25 p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block">
                      4-Stage Editorial Verification Protocol
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4ED] mt-1">
                      How Original Blog Articles Will Be Audited Before /blog Activation
                    </h3>
                  </div>
                </div>

                {/* Stage Selector Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BLOG_INVENTORY_STAGES.map((stage) => {
                    const isSelected = activeBlogStage.id === stage.id;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setSelectedBlogStageId(stage.id)}
                        className={`p-3.5 rounded-2xl text-left border transition cursor-pointer ${
                          isSelected
                            ? 'bg-[#D8C7A5] text-[#22122B] border-[#D8C7A5] font-semibold'
                            : 'bg-[#22122B]/60 text-[#F7F4ED] border-white/15 hover:border-[#D8C7A5]/60'
                        }`}
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wider block opacity-80">
                          {stage.stepNumber}
                        </span>
                        <span className="font-serif text-xs sm:text-sm font-bold block mt-0.5 leading-snug">
                          {stage.stageTitle}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Stage Detail Panel */}
                <div className="p-6 rounded-2xl bg-[#22122B] border border-[#D8C7A5]/30 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-white/10 pb-3">
                    <span className="font-mono uppercase tracking-wider text-[#D8C7A5] font-semibold">
                      {activeBlogStage.stepNumber} · {activeBlogStage.stageTitle}
                    </span>
                    <span className="text-[#8FAF78] font-semibold">
                      Status: {activeBlogStage.statusLabel}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#F7F4ED]/90 leading-relaxed">
                    {activeBlogStage.summary}
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#D8C7A5] leading-relaxed space-y-1">
                    <strong className="text-[#F7F4ED] block">Content &amp; Accuracy Guardrail:</strong>
                    <p>{activeBlogStage.guardrailDetail}</p>
                    <p className="text-[#8FAF78] pt-1 font-medium">
                      Deliverable: {activeBlogStage.deliverableNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Section: Verified Topic Router (Where to Find Answers Right Now) */}
          <div
            id="verified-topic-router"
            className="w-full mt-16 pt-12 border-t border-white/15 space-y-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8FAF78] font-semibold block">
                  Immediate Source-Grounded Reading
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F4ED] mt-1">
                  Looking for Senior Living Guidance Today? Read Our Verified Guides
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#D8C7A5] max-w-md">
                While historical blog posts are being inventoried, these four completed pages answer the core questions families research most often.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {VERIFIED_BLOG_ALTERNATIVE_BRIDGES.map((bridge) => (
                <article
                  key={bridge.id}
                  className="rounded-3xl bg-[#3B2348] border border-[#D8C7A5]/25 p-6 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D8C7A5] block">
                      {bridge.topicTag}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-[#F7F4ED] leading-snug">
                      “{bridge.commonFamilyQuestion}”
                    </h4>
                    <p className="text-xs text-[#F7F4ED]/80 leading-relaxed pt-1">
                      {bridge.whatYouWillFind}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15 space-y-2">
                    <span className="text-[11px] text-[#8FAF78] font-medium block">
                      {bridge.verifiedDestinationTitle}
                    </span>
                    <Link
                      href={bridge.href}
                      className="w-full py-2.5 px-4 rounded-full bg-[#D8C7A5] text-[#22122B] text-xs font-semibold hover:bg-[#C98268] hover:text-white transition-colors inline-flex items-center justify-between"
                    >
                      <span>{bridge.ctaLabel}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: SEARCHABLE RESOURCES, BROCHURE & ARCHIVE FAQs
        ==================================================================== */}
        <section
          id="resources-faqs"
          aria-labelledby="resources-faqs-heading"
          className="w-full py-20 lg:py-28 fluid-canvas bg-[#FCFBF8] grid-line-b"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 4 Columns: FAQ Heading, Category Filter & Search */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2.5">
                <span className="font-script script-display text-[#C98268] block">
                  Questions About Our Guides
                </span>
                <h2
                  id="resources-faqs-heading"
                  className="font-serif section-display text-[#3B2348] font-semibold"
                  style={{ textWrap: 'balance' }}
                >
                  Resources, Brochure &amp; Blog FAQs
                </h2>
                <p className="text-sm text-[#29272B]/85 leading-relaxed">
                  Common questions about using our Financial Planning and Family FAQ guides, requesting printed brochures, and our blog verification process.
                </p>
              </div>

              {/* Search Input */}
              <div>
                <label
                  htmlFor="resources-faq-search"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-2"
                >
                  Search Resource FAQs
                </label>
                <div className="relative">
                  <Search
                    className="w-4 h-4 text-[#3B2348]/60 absolute left-3.5 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  />
                  <input
                    id="resources-faq-search"
                    type="search"
                    value={faqSearchQuery}
                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                    placeholder="Filter questions..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F7F4ED] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-xs sm:text-sm text-[#29272B]"
                  />
                </div>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-col gap-2" role="group" aria-label="FAQ topic categories">
                {(
                  [
                    'All Questions',
                    'Planning Guides',
                    'Brochure & Print Packet',
                    'Blog & Editorial Status',
                  ] as const
                ).map((cat) => {
                  const active = activeFaqCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveFaqCategory(cat)}
                      className={`text-left px-4 py-2.5 rounded-2xl text-xs font-semibold transition cursor-pointer flex items-center justify-between ${
                        active
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'bg-[#F7F4ED] text-[#3B2348] border border-[#D8C7A5] hover:border-[#3B2348]'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-[11px] opacity-80">→</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right 8 Columns: Accordion Items */}
            <div className="lg:col-span-8 space-y-3.5">
              {filteredFaqs.length === 0 ? (
                <div className="p-8 rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] text-center space-y-3">
                  <p className="font-serif text-lg text-[#3B2348] font-semibold">
                    No resource FAQs matched your current filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFaqCategory('All Questions');
                      setFaqSearchQuery('');
                    }}
                    className="px-5 py-2 rounded-full bg-[#3B2348] text-[#F7F4ED] text-xs font-semibold cursor-pointer"
                  >
                    Show All 6 Resource FAQs
                  </button>
                </div>
              ) : (
                filteredFaqs.map((faq) => {
                  const isOpen = openFaqIds.includes(faq.id);
                  const isAnchor = faq.relatedHref.startsWith('#');
                  return (
                    <div
                      key={faq.id}
                      className="rounded-3xl bg-[#F7F4ED] border border-[#D8C7A5] overflow-hidden transition"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#D8C7A5]/15 transition"
                      >
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#A65D43] font-semibold">
                            <span className="font-mono">{faq.code}</span>
                            <span aria-hidden="true">·</span>
                            <span>{faq.category}</span>
                          </div>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-[#3B2348]">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-[#3B2348] shrink-0 mt-1 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#D8C7A5]/60 space-y-4">
                          <p className="text-xs sm:text-sm text-[#29272B]/90 leading-relaxed">
                            {faq.answer}
                          </p>

                          {faq.confirmationNote && (
                            <p className="text-xs text-[#A65D43] bg-[#FCFBF8] p-3 rounded-xl border border-[#D8C7A5]">
                              {faq.confirmationNote}
                            </p>
                          )}

                          <div>
                            {isAnchor ? (
                              <button
                                type="button"
                                onClick={() =>
                                  handleNavigateToSection(faq.relatedHref.replace('#', ''))
                                }
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline cursor-pointer"
                              >
                                <span>{faq.relatedLabel}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                              </button>
                            ) : (
                              <Link
                                href={faq.relatedHref}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B2348] hover:text-[#C98268] underline"
                              >
                                <span>{faq.relatedLabel}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: SCHEDULE A VISIT / REQUEST RESOURCE PACKET & FOOTER
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
