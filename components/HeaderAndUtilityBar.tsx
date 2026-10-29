'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Calendar, RotateCcw } from 'lucide-react';
import { MISSION_VILLA_FACTS } from '@/lib/mission-villa-data';

interface HeaderAndUtilityBarProps {
  fontScale: number;
  onChangeFontScale: (scale: number) => void;
  onReplayIntro: () => void;
  onNavigateToSection: (sectionId: string, presetCare?: 'Memory Care' | 'Respite Care') => void;
}

export default function HeaderAndUtilityBar({
  fontScale,
  onChangeFontScale,
  onReplayIntro,
  onNavigateToSection,
}: HeaderAndUtilityBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Care Options', id: 'care-options' },
    { label: 'Our Approach', id: 'our-approach' },
    { label: 'Life at Mission Villa', id: 'daily-life' },
    { label: 'Suites & Spaces', id: 'suites-preview' },
    { label: 'For Families', id: 'family-reassurance' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(id);
  };

  return (
    <>
      {/* 1. Full-Width Senior Accessibility & Verified Location Utility Bar */}
      <div className="w-full bg-[#3B2348] text-[#F7F4ED]/95 text-xs py-2.5 fluid-canvas border-b border-white/10 relative z-40">
        <div className="w-full flex flex-wrap items-center justify-between gap-3">
          {/* Left: Verified Daly City Address & Care Focus */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-[#D8C7A5] font-medium">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-[#8FAF78]" aria-hidden="true" />
              <span>{MISSION_VILLA_FACTS.address.full}</span>
            </span>
            <span className="hidden lg:inline text-white/25" aria-hidden="true">
              ·
            </span>
            <span className="hidden lg:inline text-[#F7F4ED]/80">
              Memory Care &amp; Respite Care · CA License #{MISSION_VILLA_FACTS.licenseNumber}
            </span>
          </div>

          {/* Right: Reading Comfort Scale, Replay Intro & Direct Phone */}
          <div className="flex items-center gap-4 ml-auto">
            <button
              type="button"
              onClick={onReplayIntro}
              className="hidden md:inline-flex items-center gap-1.5 text-[11px] text-[#D8C7A5] hover:text-white transition cursor-pointer"
              title="Replay the French conservatory shutter intro"
            >
              <RotateCcw className="w-3 h-3" aria-hidden="true" />
              <span>Replay Intro</span>
            </button>

            {/* Senior Reading Scale Selector */}
            <div
              className="flex items-center gap-1 bg-white/10 rounded-full px-2.5 py-0.5"
              role="group"
              aria-label="Reading text size"
            >
              <span className="text-[#D8C7A5] text-[11px] mr-1 hidden sm:inline">
                Text Size:
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
                    className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition cursor-pointer ${
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
              className="inline-flex items-center gap-1.5 font-semibold text-[#F7F4ED] hover:text-[#D8C7A5] transition whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
              <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Sticky Full-Width Architectural Header */}
      <header className="sticky top-0 z-40 w-full bg-[#F7F4ED]/95 backdrop-blur-md grid-line-b fluid-canvas">
        <div className="w-full h-18 sm:h-24 flex items-center justify-between gap-2 sm:gap-6">
          {/* Brand Identity Lockup (Botanical Leaf Emblem Placeholder — replaceable with final official logo) */}
          <a
            href="#top"
            className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#3B2348] rounded-lg"
          >
            <div
              className="w-9 h-9 sm:w-13 sm:h-13 shrink-0 transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              {/* Placeholder botanical emblem adapted from Reference A/B — replace with official finalized Mission Villa logo SVG/PNG when supplied */}
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
              <span className="block font-serif text-base sm:text-2xl font-bold tracking-tight text-[#3B2348] leading-none">
                MISSION VILLA
              </span>
              <span className="block font-sans text-[9px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.26em] uppercase text-[#29272B]/75 font-medium mt-1">
                Senior Living · Daly City
              </span>
            </div>
          </a>

          {/* Center Editorial Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-8 text-sm font-medium text-[#29272B]"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="hover:text-[#3B2348] py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[1.5px] after:bg-[#C98268] hover:after:w-full after:transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Conversion Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={MISSION_VILLA_FACTS.phone.href}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#3B2348]/25 text-[#3B2348] font-medium text-xs sm:text-sm hover:bg-[#3B2348] hover:text-[#F7F4ED] transition whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C98268]" aria-hidden="true" />
              <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
            </a>

            <button
              type="button"
              onClick={() => handleNavClick('schedule-visit')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#C98268] text-white font-medium text-xs sm:text-sm shadow-md hover:bg-[#3B2348] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
              <span className="sm:hidden">Visit</span>
              <span className="hidden sm:inline">{MISSION_VILLA_FACTS.primaryCtas.scheduleVisit}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="xl:hidden p-2 sm:p-2.5 rounded-xl border border-[#3B2348]/20 text-[#3B2348] hover:bg-[#D8C7A5]/30 transition cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-5 border-t border-[#3B2348]/15 space-y-4">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-3 py-2.5 rounded-xl text-base font-serif font-medium text-[#3B2348] hover:bg-[#D8C7A5]/35 transition cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#3B2348]/15 flex flex-col sm:flex-row gap-3">
              <a
                href={MISSION_VILLA_FACTS.phone.href}
                className="flex-1 py-3 px-4 rounded-xl border border-[#3B2348]/30 text-[#3B2348] font-medium text-sm text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C98268]" />
                <span>Call {MISSION_VILLA_FACTS.phone.formatted}</span>
              </a>
              <button
                type="button"
                onClick={() => handleNavClick('schedule-visit')}
                className="flex-1 py-3 px-4 rounded-xl bg-[#3B2348] text-[#F7F4ED] font-medium text-sm text-center cursor-pointer"
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
