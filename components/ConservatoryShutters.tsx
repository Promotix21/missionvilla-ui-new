'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MISSION_VILLA_FACTS } from '@/lib/mission-villa-data';

interface ConservatoryShuttersProps {
  replayCounter: number;
  onIntroComplete?: () => void;
}

export default function ConservatoryShutters({
  replayCounter,
  onIntroComplete,
}: ConservatoryShuttersProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [activeRunId, setActiveRunId] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftShutterRef = useRef<HTMLDivElement>(null);
  const rightShutterRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const completeAndDismiss = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    try {
      sessionStorage.setItem('mv_shutter_seen', '1');
    } catch {
      // Ignore storage restrictions
    }
    setIsVisible(false);
    onIntroComplete?.();
  };

  // Trigger visibility when replayCounter increments
  useEffect(() => {
    if (replayCounter > 0) {
      setIsVisible(true);
      setActiveRunId((id) => id + 1);
    }
  }, [replayCounter]);

  // Run the shutter animation when visible and refs are mounted
  useEffect(() => {
    if (!isVisible) return;

    if (typeof window !== 'undefined' && replayCounter === 0 && activeRunId === 0) {
      const params = new URLSearchParams(window.location.search);
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      const alreadySeen = (() => {
        try {
          return sessionStorage.getItem('mv_shutter_seen') === '1';
        } catch {
          return false;
        }
      })();

      if (params.get('autostart') === '1' || prefersReducedMotion || alreadySeen) {
        setIsVisible(false);
        onIntroComplete?.();
        return;
      }
    }

    if (!containerRef.current || !leftShutterRef.current || !rightShutterRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([leftShutterRef.current, rightShutterRef.current], {
        xPercent: 0,
      });
      gsap.set('.shutter-fade', { opacity: 1, y: 0 });

      const openingTL = gsap.timeline({
        defaults: { ease: 'expo.inOut' },
        onComplete: () => {
          try {
            sessionStorage.setItem('mv_shutter_seen', '1');
          } catch {
            // Ignore storage errors
          }
          setIsVisible(false);
          onIntroComplete?.();
        },
      });

      timelineRef.current = openingTL;

      openingTL
        .to('.shutter-fade', {
          opacity: 0,
          y: -10,
          duration: 0.4,
          delay: 0.65,
          ease: 'power2.inOut',
        })
        .to(
          leftShutterRef.current,
          {
            xPercent: -100,
            duration: 1.15,
          },
          0.95
        )
        .to(
          rightShutterRef.current,
          {
            xPercent: 100,
            duration: 1.15,
          },
          0.95
        );
    }, containerRef);

    const fallbackTimer = window.setTimeout(() => {
      completeAndDismiss();
    }, 3200);

    return () => {
      window.clearTimeout(fallbackTimer);
      ctx.revert();
    };
  }, [isVisible, activeRunId]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="conservatory-shutters"
      ref={containerRef}
      role="dialog"
      aria-label="Mission Villa Senior Living Welcome Intro"
      className="fixed inset-0 z-[100] flex overflow-hidden"
    >
      {/* Left Conservatory Shutter Panel */}
      <div
        id="shutter-left"
        ref={leftShutterRef}
        className="w-1/2 h-full bg-[#22122B] border-r border-[#D8C7A5]/25 flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none"
      >
        <div className="shutter-fade flex items-center gap-3">
          <span className="font-script text-2xl sm:text-4xl text-[#D8C7A5]">
            A Place to Belong
          </span>
        </div>

        <div className="my-auto text-right pr-2 sm:pr-8 lg:pr-12 shutter-fade">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#8FAF78] font-medium block mb-2">
            Mission Villa
          </span>
          <p className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F7F4ED] italic leading-tight">
            {MISSION_VILLA_FACTS.taglineLeft}
          </p>
        </div>

        <div className="shutter-fade flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#F7F4ED]/60">
          <span>Memory Care · Respite Care</span>
        </div>
      </div>

      {/* Right Conservatory Shutter Panel */}
      <div
        id="shutter-right"
        ref={rightShutterRef}
        className="w-1/2 h-full bg-[#22122B] flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none"
      >
        <div className="shutter-fade flex items-center justify-end">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#D8C7A5]">
            Daly City, California
          </span>
        </div>

        <div className="my-auto pl-2 sm:pl-8 lg:pl-12 shutter-fade">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C98268] font-medium block mb-2">
            Senior Living
          </span>
          <p className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#D8C7A5] italic leading-tight">
            {MISSION_VILLA_FACTS.taglineRight}
          </p>
        </div>

        <div className="shutter-fade flex items-center justify-end text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#F7F4ED]/60">
          <span>995 East Market Street</span>
        </div>
      </div>

      {/* Skip Intro Control (Accessible & Non-Blocking) */}
      <button
        type="button"
        onClick={completeAndDismiss}
        aria-label="Skip opening intro"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] px-5 py-2.5 rounded-full bg-[#F7F4ED]/15 hover:bg-[#F7F4ED] text-[#F7F4ED] hover:text-[#3B2348] border border-[#D8C7A5]/40 backdrop-blur-md text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8C7A5]"
      >
        Skip Intro
      </button>
    </div>
  );
}
