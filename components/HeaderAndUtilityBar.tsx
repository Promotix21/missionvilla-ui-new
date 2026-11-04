'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MapPin,
  Menu,
  X,
  Calendar,
  RotateCcw,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';
import { MISSION_VILLA_FACTS } from '@/lib/mission-villa-data';

interface HeaderAndUtilityBarProps {
  fontScale: number;
  onChangeFontScale: (scale: number) => void;
  onReplayIntro?: () => void;
  lovedOneName?: string;
  onNavigateToSection: (sectionId: string, presetCare?: 'Memory Care' | 'Respite Care') => void;
}

export default function HeaderAndUtilityBar({
  fontScale,
  onChangeFontScale,
  onReplayIntro,
  lovedOneName,
  onNavigateToSection,
}: HeaderAndUtilityBarProps) {
  const pathname = usePathname() || '/';
  const isHome = pathname === '/';
  const isMemoryCare = pathname === '/memory-care';
  const isRespiteCare = pathname === '/respite-care';
  const isLifeAtMissionVilla = pathname === '/life-at-mission-villa';
  const isServicesAndAmenities = pathname === '/services-and-amenities';
  const isSuitesAndFloorPlans = pathname === '/suites-and-floor-plans';
  const isGallery = pathname === '/gallery';
  const isAbout = pathname === '/about';
  const isFinancialPlanning = pathname === '/financial-planning';
  const isForFamilies = pathname === '/for-families';
  const isContact = pathname === '/contact';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [livingDropdownOpen, setLivingDropdownOpen] = useState(false);
  const [lifeDropdownOpen, setLifeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lifeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLivingDropdownOpen(false);
      }
      if (lifeDropdownRef.current && !lifeDropdownRef.current.contains(e.target as Node)) {
        setLifeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string, presetCare?: 'Memory Care' | 'Respite Care') => {
    setMobileMenuOpen(false);
    setLivingDropdownOpen(false);
    setLifeDropdownOpen(false);
    onNavigateToSection(id, presetCare);
  };

  const cleanLovedOne = (lovedOneName || '').trim();

  return (
    <>
      {/* 1. Full-Width Senior Accessibility, Intro Replay & Verified Location Utility Ribbon (36px on Desktop) */}
      <div className="w-full bg-[#3B2348] text-[#F7F4ED]/95 text-xs min-h-9 py-1.5 lg:py-0 lg:h-9 flex items-center fluid-canvas border-b border-white/10 relative z-40">
        <div className="w-full flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          {/* Left: Verified Daly City Address & Care Focus */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-[#D8C7A5] font-medium text-[11px]">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-[#8FAF78]" aria-hidden="true" />
              <span>{MISSION_VILLA_FACTS.address.full}</span>
            </span>
            <span className="hidden xl:inline text-white/25" aria-hidden="true">
              |
            </span>
            <span className="hidden md:inline text-[#F7F4ED]/80 text-[11px]">
              Memory Care &amp; Respite Care · CA License #{MISSION_VILLA_FACTS.licenseNumber}
            </span>
          </div>

          {/* Right: Homepage Replay Intro (on /), Reading Comfort Scale & Direct Phone */}
          <div className="flex items-center gap-2.5 sm:gap-4 ml-auto">
            {onReplayIntro ? (
              <button
                id="replay-intro-btn"
                type="button"
                onClick={onReplayIntro}
                aria-label="Replay Intro"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 hover:bg-[#D8C7A5] text-[#D8C7A5] hover:text-[#3B2348] text-[11px] font-semibold transition cursor-pointer whitespace-nowrap"
                title="Replay the French conservatory shutter intro animation"
              >
                <RotateCcw className="w-3 h-3" aria-hidden="true" />
                <span>Replay Intro</span>
              </button>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[#D8C7A5] hover:text-white text-[11px] font-medium transition whitespace-nowrap"
              >
                <span>← Home Overview</span>
              </Link>
            )}

            {/* Senior Reading Scale Selector */}
            <div
              className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5"
              role="group"
              aria-label="Reading text size"
            >
              <span className="text-[#D8C7A5] text-[10px] mr-1 hidden sm:inline">
                Text Comfort:
              </span>
              {[
                { scale: 1, label: 'A', name: 'Standard text size' },
                { scale: 1.08, label: 'A+', name: 'Large text size' },
                { scale: 1.15, label: 'A++', name: 'Extra large text size' },
              ].map((item) => {
                const active = Math.abs(fontScale - item.scale) < 0.01;
                return (
                  <button
                    key={item.label}
                    type="button"
                    aria-label={item.name}
                    aria-pressed={active}
                    onClick={() => onChangeFontScale(item.scale)}
                    className={`px-2 py-0.2 rounded-full text-[10px] font-bold transition cursor-pointer ${
                      active
                        ? 'bg-[#D8C7A5] text-[#3B2348]'
                        : 'text-[#F7F4ED] hover:bg-white/15'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <a
              href={MISSION_VILLA_FACTS.phone.href}
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#F7F4ED] hover:text-[#D8C7A5] transition whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#C98268]" aria-hidden="true" />
              <span>Direct Desk: {MISSION_VILLA_FACTS.phone.formatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Sticky Full-Width Editorial Monograph Header (68px Desktop — Total Top Height = 104px) */}
      <header className="sticky top-0 z-40 w-full bg-[#F7F4ED]/95 backdrop-blur-md grid-line-b fluid-canvas">
        <div className="w-full h-16 lg:h-[68px] flex items-center justify-between gap-2 sm:gap-4">
          {/* Zone 1: Brand Identity Lockup */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#3B2348] rounded-lg"
          >
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 120 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="mvPlum" x1="10" y1="10" x2="60" y2="95" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#5B3270" />
                    <stop offset="55%" stopColor="#3B2348" />
                    <stop offset="100%" stopColor="#22122B" />
                  </linearGradient>
                  <linearGradient id="mvSage" x1="35" y1="8" x2="65" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C5DFB0" />
                    <stop offset="50%" stopColor="#8FAF78" />
                    <stop offset="100%" stopColor="#3D682E" />
                  </linearGradient>
                  <linearGradient id="mvTerra" x1="115" y1="30" x2="48" y2="102" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E57B52" />
                    <stop offset="50%" stopColor="#C98268" />
                    <stop offset="100%" stopColor="#9A482B" />
                  </linearGradient>
                  <linearGradient id="mvSand" x1="25" y1="70" x2="52" y2="102" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F5E6C8" />
                    <stop offset="100%" stopColor="#D8C7A5" />
                  </linearGradient>
                </defs>
                <path d="M26 74C34 80 45 84 48 104C36 93 29 84 26 74Z" fill="url(#mvSand)" />
                <path
                  d="M28 6C5 34 4 68 32 80C42 84 47 92 48 104C49 85 40 66 32 48C25 32 24 18 28 6Z"
                  fill="url(#mvPlum)"
                />
                <path
                  d="M28 6C26 26 36 46 47 64C55 77 54 92 48 104C66 86 72 60 56 38C44 22 33 16 28 6Z"
                  fill="url(#mvSage)"
                />
                <path
                  d="M114 34C82 42 64 58 64 78C64 89 56 97 48 104C76 94 96 76 114 34Z"
                  fill="url(#mvTerra)"
                />
                <path
                  d="M28 6C26 32 46 66 48 104"
                  stroke="#F7F4ED"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <path
                  d="M114 34C86 56 68 78 48 104"
                  stroke="#F7F4ED"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <span className="block font-serif text-sm sm:text-xl font-bold tracking-tight text-[#3B2348] leading-none whitespace-nowrap">
                MISSION VILLA
              </span>
              <span className="block font-sans text-[8.5px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.28em] uppercase text-[#29272B]/75 font-medium mt-1 whitespace-nowrap">
                Senior Living · Daly City
              </span>
            </div>
          </Link>

          {/* Zone 2: Center Editorial Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-2.5 text-xs font-medium text-[#29272B]"
          >
            <Link
              href="/"
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                isHome
                  ? 'text-[#3B2348] font-semibold after:w-full'
                  : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
              }`}
            >
              Home
            </Link>

            {/* Accessible Living Options Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setLivingDropdownOpen(true)}
              onMouseLeave={() => setLivingDropdownOpen(false)}
            >
              <button
                type="button"
                aria-expanded={livingDropdownOpen}
                aria-haspopup="true"
                onClick={() => setLivingDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1 py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                  isMemoryCare ||
                  isRespiteCare ||
                  isSuitesAndFloorPlans ||
                  isFinancialPlanning ||
                  isForFamilies
                    ? 'text-[#3B2348] font-semibold after:w-full'
                    : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
                }`}
              >
                <span>Living Options</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    livingDropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {livingDropdownOpen && (
                <div
                  role="menu"
                  aria-label="Living Options submenu"
                  className="absolute left-0 top-full pt-2 w-72 z-50"
                >
                  <div className="rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] shadow-xl p-2 space-y-1">
                    <Link
                      href="/memory-care"
                      role="menuitem"
                      onClick={() => setLivingDropdownOpen(false)}
                      className={`flex items-start justify-between gap-2 p-3 rounded-xl transition ${
                        isMemoryCare
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'hover:bg-[#D8C7A5]/35 text-[#3B2348]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-semibold block">
                          Memory Care
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isMemoryCare ? 'text-[#D8C7A5]' : 'text-[#29272B]/75'
                          }`}
                        >
                          Legacies™ Alzheimer’s &amp; dementia support
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/respite-care"
                      role="menuitem"
                      onClick={() => setLivingDropdownOpen(false)}
                      className={`flex items-start justify-between gap-2 p-3 rounded-xl transition ${
                        isRespiteCare
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'hover:bg-[#D8C7A5]/35 text-[#3B2348]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-semibold block">
                          Respite Care
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isRespiteCare ? 'text-[#D8C7A5]' : 'text-[#29272B]/75'
                          }`}
                        >
                          Short-term stays &amp; caregiver relief
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/suites-and-floor-plans"
                      role="menuitem"
                      onClick={() => setLivingDropdownOpen(false)}
                      className={`flex items-start justify-between gap-2 p-3 rounded-xl transition ${
                        isSuitesAndFloorPlans
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'hover:bg-[#D8C7A5]/35 text-[#3B2348]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-semibold block">
                          Suites &amp; Floor Plans
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isSuitesAndFloorPlans ? 'text-[#D8C7A5]' : 'text-[#29272B]/75'
                          }`}
                        >
                          Private, Companion &amp; Jack &amp; Jill suites
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/financial-planning"
                      role="menuitem"
                      onClick={() => setLivingDropdownOpen(false)}
                      className={`flex items-start justify-between gap-2 p-3 rounded-xl transition ${
                        isFinancialPlanning
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'hover:bg-[#D8C7A5]/35 text-[#3B2348]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-semibold block">
                          Financial Planning
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isFinancialPlanning ? 'text-[#D8C7A5]' : 'text-[#29272B]/75'
                          }`}
                        >
                          Cost factors, inclusions &amp; paper-ledger worksheet
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/for-families"
                      role="menuitem"
                      onClick={() => setLivingDropdownOpen(false)}
                      className={`flex items-start justify-between gap-2 p-3 rounded-xl transition ${
                        isForFamilies
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'hover:bg-[#D8C7A5]/35 text-[#3B2348]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-semibold block">
                          For Families &amp; FAQs
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isForFamilies ? 'text-[#D8C7A5]' : 'text-[#29272B]/75'
                          }`}
                        >
                          Decision guide, visit questions &amp; grouped FAQs
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/memory-care"
              aria-current={isMemoryCare ? 'page' : undefined}
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                isMemoryCare
                  ? 'text-[#3B2348] font-semibold after:w-full'
                  : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
              }`}
            >
              Memory Care
            </Link>

            <Link
              href="/respite-care"
              aria-current={isRespiteCare ? 'page' : undefined}
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                isRespiteCare
                  ? 'text-[#3B2348] font-semibold after:w-full'
                  : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
              }`}
            >
              Respite Care
            </Link>

            {/* Accessible Life at Mission Villa Dropdown */}
            <div
              ref={lifeDropdownRef}
              className="relative"
              onMouseEnter={() => setLifeDropdownOpen(true)}
              onMouseLeave={() => setLifeDropdownOpen(false)}
            >
              <button
                type="button"
                aria-expanded={lifeDropdownOpen}
                aria-haspopup="true"
                onClick={() => setLifeDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1 py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                  isLifeAtMissionVilla || isServicesAndAmenities || isGallery
                    ? 'text-[#3B2348] font-semibold after:w-full'
                    : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
                }`}
              >
                <span>Life at Mission Villa</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    lifeDropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {lifeDropdownOpen && (
                <div
                  role="menu"
                  aria-label="Life at Mission Villa submenu"
                  className="absolute left-0 top-full pt-2 w-72 z-50"
                >
                  <div className="rounded-2xl bg-[#FCFBF8] border border-[#D8C7A5] shadow-xl p-2 space-y-1">
                    <Link
                      href="/life-at-mission-villa"
                      role="menuitem"
                      onClick={() => setLifeDropdownOpen(false)}
                      className={`flex items-start justify-between gap-2 p-3 rounded-xl transition ${
                        isLifeAtMissionVilla
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'hover:bg-[#D8C7A5]/35 text-[#3B2348]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-semibold block">
                          Life at Mission Villa Overview
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isLifeAtMissionVilla ? 'text-[#D8C7A5]' : 'text-[#29272B]/75'
                          }`}
                        >
                          Daily culture, dining, activities &amp; belonging
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/services-and-amenities"
                      role="menuitem"
                      onClick={() => setLifeDropdownOpen(false)}
                      className={`flex items-start justify-between gap-2 p-3 rounded-xl transition ${
                        isServicesAndAmenities
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'hover:bg-[#D8C7A5]/35 text-[#3B2348]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-semibold block">
                          Services &amp; Amenities
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isServicesAndAmenities ? 'text-[#D8C7A5]' : 'text-[#29272B]/75'
                          }`}
                        >
                          24-hour staff, dining, spaces &amp; convenience
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    </Link>

                    <Link
                      href="/gallery"
                      role="menuitem"
                      onClick={() => setLifeDropdownOpen(false)}
                      className={`flex items-start justify-between gap-2 p-3 rounded-xl transition ${
                        isGallery
                          ? 'bg-[#3B2348] text-[#F7F4ED]'
                          : 'hover:bg-[#D8C7A5]/35 text-[#3B2348]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm font-semibold block">
                          Gallery &amp; Virtual Tour
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isGallery ? 'text-[#D8C7A5]' : 'text-[#29272B]/75'
                          }`}
                        >
                          Rooms, dining, lounges, gardens &amp; tour preview
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              aria-current={isAbout ? 'page' : undefined}
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                isAbout
                  ? 'text-[#3B2348] font-semibold after:w-full'
                  : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/financial-planning"
              aria-current={isFinancialPlanning ? 'page' : undefined}
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                isFinancialPlanning
                  ? 'text-[#3B2348] font-semibold after:w-full'
                  : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
              }`}
            >
              Financial Planning
            </Link>

            <Link
              href="/for-families"
              aria-current={isForFamilies ? 'page' : undefined}
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                isForFamilies
                  ? 'text-[#3B2348] font-semibold after:w-full'
                  : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
              }`}
            >
              For Families &amp; FAQs
            </Link>

            <Link
              href="/contact"
              aria-current={isContact ? 'page' : undefined}
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[1.5px] after:bg-[#C98268] after:transition-all ${
                isContact
                  ? 'text-[#3B2348] font-semibold after:w-full'
                  : 'hover:text-[#3B2348] after:w-0 hover:after:w-full'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Zone 3: Right Conversion CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {cleanLovedOne && (
              <div className="hidden lg:block text-right">
                <span className="block text-[9px] uppercase tracking-[0.2em] text-[#A65D43] font-semibold">
                  Personalizing For
                </span>
                <span className="font-serif text-xs font-bold text-[#3B2348]">
                  {cleanLovedOne}
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={() => handleNavClick('schedule-visit')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#3B2348] text-[#F7F4ED] font-medium text-[11px] sm:text-xs hover:bg-[#C98268] transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{MISSION_VILLA_FACTS.primaryCtas.scheduleVisit}</span>
              <span className="hidden sm:inline" aria-hidden="true">
                →
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="xl:hidden p-2 rounded-xl border border-[#3B2348]/20 text-[#3B2348] hover:bg-[#D8C7A5]/30 transition cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-[#3B2348]/15 space-y-4">
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition ${
                  isHome
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                Home Overview
              </Link>
              <Link
                href="/memory-care"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isMemoryCare
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>Memory Care (Legacies™ Program)</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 01
                </span>
              </Link>
              <Link
                href="/respite-care"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isRespiteCare
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>Respite Care (Short-Term Stays)</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 02
                </span>
              </Link>
              <Link
                href="/life-at-mission-villa"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isLifeAtMissionVilla
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>Life at Mission Villa (Daily Culture)</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 03
                </span>
              </Link>
              <Link
                href="/services-and-amenities"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isServicesAndAmenities
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>Services &amp; Amenities</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 04
                </span>
              </Link>
              <Link
                href="/suites-and-floor-plans"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isSuitesAndFloorPlans
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>Suites &amp; Floor Plans</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 05
                </span>
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isGallery
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>Gallery &amp; Virtual Tour</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 06
                </span>
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isAbout
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>About Us (Philosophy &amp; Location)</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 07
                </span>
              </Link>
              <Link
                href="/financial-planning"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isFinancialPlanning
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>Financial Planning (Paper-Ledger Guide)</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 08
                </span>
              </Link>
              <Link
                href="/for-families"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isForFamilies
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>For Families &amp; FAQs (Decision Guide)</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 09
                </span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left px-3 py-2 rounded-xl text-base font-serif font-medium transition flex items-center justify-between ${
                  isContact
                    ? 'bg-[#3B2348] text-[#F7F4ED]'
                    : 'text-[#3B2348] hover:bg-[#D8C7A5]/35'
                }`}
              >
                <span>Contact &amp; Schedule a Visit</span>
                <span className="text-xs font-sans uppercase tracking-wider opacity-80">
                  Page 10
                </span>
              </Link>
              <button
                type="button"
                onClick={() =>
                  handleNavClick(
                    isMemoryCare
                      ? 'legacies-program'
                      : isRespiteCare
                      ? 'stay-timeline'
                      : isLifeAtMissionVilla
                      ? 'day-in-the-life'
                      : isServicesAndAmenities
                      ? 'services-explorer'
                      : isSuitesAndFloorPlans
                      ? 'floor-plan-viewer'
                      : isGallery
                      ? 'editorial-masonry-gallery'
                      : isAbout
                      ? 'care-philosophy-narrative'
                      : isFinancialPlanning
                      ? 'paper-ledger-worksheet'
                      : isForFamilies
                      ? 'family-decision-guide'
                      : isContact
                      ? 'map-and-directions'
                      : 'our-approach'
                  )
                }
                className="text-left px-3 py-2 rounded-xl text-base font-serif font-medium text-[#3B2348] hover:bg-[#D8C7A5]/35 transition cursor-pointer"
              >
                {isMemoryCare
                  ? 'Legacies™ Approach'
                  : isRespiteCare
                  ? 'How a Respite Stay Works'
                  : isLifeAtMissionVilla
                  ? 'Curated Day-in-the-Life'
                  : isServicesAndAmenities
                  ? 'Interactive Category & Search Directory'
                  : isSuitesAndFloorPlans
                  ? 'Floor-Plan Format Viewer'
                  : isGallery
                  ? 'Category Masonry Gallery'
                  : isAbout
                  ? 'Our Care Philosophy'
                  : isFinancialPlanning
                  ? 'Interactive Paper-Ledger Worksheet'
                  : isForFamilies
                  ? 'Memory Care vs. Respite Decision Guide'
                  : isContact
                  ? 'Grounded Map & Peninsula Directions'
                  : 'Our Approach'}
              </button>
              <button
                type="button"
                onClick={() =>
                  handleNavClick(
                    isMemoryCare
                      ? 'family-questions'
                      : isRespiteCare
                      ? 'respite-faqs'
                      : isLifeAtMissionVilla
                      ? 'chapter-family-connection'
                      : isServicesAndAmenities
                      ? 'ask-us-about'
                      : isSuitesAndFloorPlans
                      ? 'what-to-expect-in-a-suite'
                      : isGallery
                      ? 'virtual-tour'
                      : isAbout
                      ? 'daly-city-geography'
                      : isFinancialPlanning
                      ? 'financial-faqs'
                      : isForFamilies
                      ? 'grouped-family-faqs'
                      : isContact
                      ? 'what-happens-next'
                      : 'family-reassurance'
                  )
                }
                className="text-left px-3 py-2 rounded-xl text-base font-serif font-medium text-[#3B2348] hover:bg-[#D8C7A5]/35 transition cursor-pointer"
              >
                {isServicesAndAmenities
                  ? 'Ask Us About Eligibility & Availability'
                  : isSuitesAndFloorPlans
                  ? 'What to Expect in a Suite'
                  : isGallery
                  ? 'Virtual Tour & Walkthrough Stage'
                  : isAbout
                  ? 'Daly City & San Bruno Mountain Location'
                  : isFinancialPlanning
                  ? 'Financial Planning FAQs & Ways to Plan'
                  : isForFamilies
                  ? 'Grouped FAQs (Care, Suites, Cost, Visits)'
                  : isContact
                  ? 'What Happens After Submitting & FAQs'
                  : 'For Families & Connection'}
              </button>
            </nav>

            <div className="pt-3 border-t border-[#3B2348]/15 flex flex-col sm:flex-row gap-2.5">
              <a
                href={MISSION_VILLA_FACTS.phone.href}
                className="flex-1 py-2.5 px-4 rounded-xl border border-[#3B2348]/30 text-[#3B2348] font-medium text-xs text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C98268]" />
                <span>Call {MISSION_VILLA_FACTS.phone.formatted}</span>
              </a>
              <button
                type="button"
                onClick={() => handleNavClick('schedule-visit')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#3B2348] text-[#F7F4ED] font-medium text-xs text-center cursor-pointer"
              >
                Get Pricing &amp; Schedule a Visit
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

