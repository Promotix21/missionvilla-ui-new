'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, ArrowUpRight, MapPin, HeartHandshake, Home, ShieldCheck } from 'lucide-react';
import { MISSION_VILLA_FACTS } from '@/lib/mission-villa-data';

interface HeroStageProps {
  onNavigateToSection: (sectionId: string, presetCare?: 'Memory Care' | 'Respite Care') => void;
}

export default function HeroStage({ onNavigateToSection }: HeroStageProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal-item',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.25,
        }
      );

      gsap.fromTo(
        '.hero-bento-card',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          stagger: 0.14,
          ease: 'expo.out',
          delay: 0.4,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="w-full pt-8 pb-14 lg:pt-12 lg:pb-20 fluid-canvas grid-line-b paper-texture"
    >
      {/* Row 1: Asymmetric 12-Column Full-Width Editorial Header */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 lg:mb-12">
        {/* Left 7 Columns: Script Marginalia & Primary Editorial Headline */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 hero-reveal-item">
            <span className="font-script script-display text-[#C98268]">
              A Place to Belong
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-[#3B2348]/80 font-semibold">
              Daly City, California · Memory Care &amp; Respite Care
            </span>
          </div>

          <h1
            className="font-serif hero-display text-[#3B2348] font-semibold hero-reveal-item"
            style={{ textWrap: 'balance' }}
          >
            The honor they deserve,{' '}
            <span className="italic font-normal text-[#C98268] block sm:inline">
              the care you’ll love.
            </span>
          </h1>
        </div>

        {/* Right 5 Columns: Grounded Supporting Copy & Primary / Secondary CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-[#3B2348]/15 lg:pl-10">
          <p className="text-[#29272B]/90 text-base sm:text-lg leading-relaxed max-w-[58ch] hero-reveal-item">
            {MISSION_VILLA_FACTS.heroSupportingCopy}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 hero-reveal-item">
            <button
              type="button"
              onClick={() => onNavigateToSection('schedule-visit')}
              className="px-7 py-4 rounded-full bg-[#3B2348] text-[#F7F4ED] font-medium text-sm sm:text-base hover:bg-[#C98268] transition-colors inline-flex items-center gap-2.5 shadow-lg cursor-pointer whitespace-nowrap"
            >
              <span>{MISSION_VILLA_FACTS.primaryCtas.scheduleVisit}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => onNavigateToSection('care-options')}
              className="px-6 py-4 rounded-full bg-[#FCFBF8] border border-[#D8C7A5] text-[#3B2348] font-medium text-sm sm:text-base hover:border-[#3B2348] transition-colors cursor-pointer whitespace-nowrap"
            >
              {MISSION_VILLA_FACTS.primaryCtas.exploreCare}
            </button>

            <a
              href={MISSION_VILLA_FACTS.phone.href}
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#3B2348] hover:text-[#C98268] transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#C98268]" aria-hidden="true" />
              <span>{MISSION_VILLA_FACTS.phone.formatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Row 2: Full-Width Asymmetric 8/4 Bento Panorama with Surgical Inverted-Radius Corner Cutouts */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left 8 Columns: Main Warm Community Stage with Top-Left & Bottom-Right Inverted Cutouts */}
        <div className="lg:col-span-8 bento-frame min-h-[440px] sm:min-h-[540px] xl:min-h-[620px] relative bg-[#3B2348] group hero-bento-card">
          {/* REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO: Replace with official Mission Villa Senior Living photography */}
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
            alt="Illustrative placeholder: Warm, sunlit residential living and gathering space"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center mood-grade group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#22122B]/90 via-[#3B2348]/25 to-transparent" />

          {/* Top-Left Inverted Radius Corner Cutout */}
          <div className="cutout-tl-cream">
            <div className="bg-[#FCFBF8] border border-[#D8C7A5] px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-sm">
              <MapPin className="w-4 h-4 text-[#8FAF78] shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide text-[#3B2348]">
                995 East Market Street · Daly City, CA
              </span>
            </div>
          </div>

          {/* Bottom-Left Editorial Narrative Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-72 text-[#F7F4ED] z-10 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold">
              Legacies™ Memory Care &amp; Respite Care
            </p>
            <p className="font-serif text-xl sm:text-2xl xl:text-3xl italic leading-snug max-w-2xl">
              “A welcoming, homelike community where every resident’s life story, dignity, and comfort come first.”
            </p>
            <p className="text-[11px] text-[#F7F4ED]/70">
              Illustrative community photography · Visit us in Daly City to tour our suites and common areas in person.
            </p>
          </div>

          {/* Bottom-Right Inverted Radius Corner Cutout CTA Pod */}
          <div className="cutout-br-cream hidden sm:block">
            <button
              type="button"
              onClick={() => onNavigateToSection('care-options')}
              className="flex items-center gap-4 bg-[#3B2348] text-[#F7F4ED] px-6 py-4 rounded-2xl hover:bg-[#C98268] transition-colors shadow-lg group/btn cursor-pointer text-left"
            >
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#D8C7A5]">
                  Dedicated Daly City Care
                </span>
                <span className="block font-serif text-base sm:text-lg font-semibold">
                  Explore Memory Care &amp; Respite Care
                </span>
              </div>
              <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>

        {/* Right 4 Columns: Dual Stacked Editorial Cards (Botanical Arch Motif + Homelike Living Card) */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8 justify-between">
          {/* Upper Card: Legacies Memory Care Program Card */}
          <div className="bento-frame flex-1 min-h-[260px] bg-[#3B2348] text-[#F7F4ED] p-7 sm:p-8 flex flex-col justify-between relative group hero-bento-card">
            {/* REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO */}
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=85"
              alt="Illustrative placeholder: Warm natural foliage symbolizing growth, peace, and renewal"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-35 mood-grade group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#22122B]/95 via-[#3B2348]/80 to-[#3B2348]/60" />

            <div className="relative z-10 flex items-center justify-between text-xs text-[#D8C7A5] font-medium">
              <span>Signature Approach</span>
              <span aria-hidden="true">·</span>
              <span>Alzheimer’s &amp; Dementia Support</span>
            </div>

            <div className="relative z-10 space-y-2.5 my-auto pt-5 pr-12">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight text-[#F7F4ED]">
                The Legacies™ Memory Care Program
              </h2>
              <p className="text-xs sm:text-sm text-[#F7F4ED]/85 leading-relaxed">
                Personalized support honoring each resident’s unique background, daily routines, and cherished family connections.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <button
                type="button"
                onClick={() => onNavigateToSection('care-options', 'Memory Care')}
                className="text-xs font-semibold text-[#D8C7A5] hover:text-white inline-flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Learn about Memory Care</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Bottom-Right Inverted Cutout */}
            <div className="cutout-br-cream">
              <div
                className="w-12 h-12 rounded-2xl bg-[#8FAF78] text-[#3B2348] flex items-center justify-center shadow-sm"
                aria-hidden="true"
              >
                <HeartHandshake className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Lower Card: Homelike Comfort & Direct Family Access */}
          <div className="herbarium-mount rounded-[28px] flex-1 min-h-[260px] p-7 sm:p-8 flex flex-col justify-between relative hero-bento-card">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[#A65D43] font-semibold block">
                  Comfort · Dignity · Belonging
                </span>
                <h2 className="font-serif text-2xl text-[#3B2348] font-semibold">
                  A Welcoming Home in Daly City
                </h2>
              </div>
              {/* REPLACEABLE ILLUSTRATIVE PLACEHOLDER PHOTO */}
              <img
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=80"
                alt="Illustrative placeholder: Sunlit cosmos blossoms in warm daylight"
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-2xl object-cover border border-[#D8C7A5] shadow-sm shrink-0"
              />
            </div>

            <div className="space-y-2.5 my-auto py-4 border-y border-[#D8C7A5]/70 text-xs sm:text-sm text-[#29272B]/90">
              <p className="flex items-center justify-between gap-2">
                <span className="font-medium text-[#3B2348]">Living Options</span>
                <span>Private &amp; Shared Suites</span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="font-medium text-[#3B2348]">Suite Features</span>
                <span>Private Bathrooms Included</span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="font-medium text-[#3B2348]">Community Life</span>
                <span>Chef-Prepared Dining &amp; Activities</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#3B2348] pt-1">
              <button
                type="button"
                onClick={() => onNavigateToSection('schedule-visit')}
                className="text-[#A65D43] hover:text-[#3B2348] transition cursor-pointer inline-flex items-center gap-1"
              >
                <span>Get Pricing &amp; Information</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <a
                href={MISSION_VILLA_FACTS.phone.href}
                className="hover:underline text-[#3B2348]"
              >
                {MISSION_VILLA_FACTS.phone.formatted}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Quick Trust & Identity Strip (100% Grounded in Official Mission Villa Facts) */}
      <div className="w-full mt-10 pt-8 border-t border-[#3B2348]/15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#3B2348]/10 text-[#3B2348] flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-[#3B2348]">
              Daly City Location
            </h3>
            <p className="text-xs sm:text-sm text-[#29272B]/80 mt-0.5">
              {MISSION_VILLA_FACTS.address.full} — accessible for Peninsula and San Francisco families.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#8FAF78]/25 text-[#3B2348] flex items-center justify-center shrink-0 mt-0.5">
            <HeartHandshake className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-[#3B2348]">
              Memory Care &amp; Respite Care
            </h3>
            <p className="text-xs sm:text-sm text-[#29272B]/80 mt-0.5">
              Specialized support for seniors living with Alzheimer’s or dementia, plus flexible short-term stays.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#D8C7A5]/45 text-[#3B2348] flex items-center justify-center shrink-0 mt-0.5">
            <Home className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-[#3B2348]">
              Homelike Suites &amp; Spaces
            </h3>
            <p className="text-xs sm:text-sm text-[#29272B]/80 mt-0.5">
              Private and shared suites with private bathrooms, welcoming lounges, and chef-prepared dining.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#C98268]/20 text-[#A65D43] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-[#3B2348]">
              Licensed &amp; Family-Centered
            </h3>
            <p className="text-xs sm:text-sm text-[#29272B]/80 mt-0.5">
              California RCFE License #{MISSION_VILLA_FACTS.licenseNumber} · Call{' '}
              <a href={MISSION_VILLA_FACTS.phone.href} className="font-semibold underline">
                {MISSION_VILLA_FACTS.phone.raw}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
