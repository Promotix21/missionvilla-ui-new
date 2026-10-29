'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  // Keep the overlay mounted in the DOM at all times (matching Mission Villa(1).html)
  // so both panels start at center (xPercent: 0) with zero flicker, and replaying works infinitely.
  const [isShuttersActive, setIsShuttersActive] = useState(true);
  const [shutterPhase, setShutterPhase] = useState<'closed' | 'parting' | 'open'>('closed');

  const containerRef = useRef<HTMLDivElement>(null);
  const leftShutterRef = useRef<HTMLDivElement>(null);
  const rightShutterRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const onCompleteRef = useRef(onIntroComplete);

  useEffect(() => {
    onCompleteRef.current = onIntroComplete;
  }, [onIntroComplete]);

  const finishIntroImmediately = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    if (leftShutterRef.current && rightShutterRef.current) {
      gsap.set(leftShutterRef.current, { xPercent: -100 });
      gsap.set(rightShutterRef.current, { xPercent: 100 });
    }
    gsap.set('.shutter-fade', { opacity: 0, y: -12 });
    gsap.set('.hero-line', { yPercent: 0, rotateZ: 0 });
    gsap.set('.hero-fade', { y: 0, opacity: 1 });
    gsap.set('#hero-arch-portal', { scale: 1, opacity: 1 });
    gsap.set('#floating-specimen-olive, #floating-specimen-cosmos', { y: 0, opacity: 1 });

    setShutterPhase('open');
    setIsShuttersActive(false);
    onCompleteRef.current?.();
  }, []);

  useEffect(() => {
    const leftEl = leftShutterRef.current;
    const rightEl = rightShutterRef.current;
    if (!leftEl || !rightEl) return;

    // On initial load (replayCounter === 0), only skip automatically if the user has
    // prefers-reduced-motion enabled or explicitly passed ?skipIntro=1.
    // Never let sessionStorage or autostart=1 suppress the preview or Replay Intro!
    if (typeof window !== 'undefined' && replayCounter === 0) {
      const params = new URLSearchParams(window.location.search);
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion || params.get('skipIntro') === '1') {
        finishIntroImmediately();
        return;
      }
    }

    // When Replay Intro is clicked, bring the user to the top of the hero stage
    if (typeof window !== 'undefined' && replayCounter > 0) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    // Kill any prior timeline or active tweens before starting fresh
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    gsap.killTweensOf([
      leftEl,
      rightEl,
      '.shutter-fade',
      '.hero-line',
      '.hero-fade',
      '#hero-arch-portal',
      '#floating-specimen-olive',
      '#floating-specimen-cosmos',
    ]);

    setIsShuttersActive(true);
    setShutterPhase('closed');

    // 1. Lock both conservatory shutters together at the center seam (xPercent: 0)
    gsap.set(leftEl, { xPercent: 0 });
    gsap.set(rightEl, { xPercent: 0 });
    gsap.set('.shutter-fade', { opacity: 1, y: 0 });

    // 2. Pre-stage hero choreography underneath so it rises/scales into view as the seam parts
    gsap.set('.hero-line', { yPercent: 115, rotateZ: 2 });
    gsap.set('.hero-fade', { y: 22, opacity: 0 });
    gsap.set('#hero-arch-portal', { scale: 0.9, opacity: 0 });
    gsap.set('#floating-specimen-olive, #floating-specimen-cosmos', {
      y: 40,
      opacity: 0,
    });

    // 3. Reproduce the exact coordinated openingTL sequence from Mission Villa(1).html
    const openingTL = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      onComplete: () => {
        setShutterPhase('open');
        setIsShuttersActive(false);
        onCompleteRef.current?.();
      },
    });

    timelineRef.current = openingTL;

    openingTL
      // Readable beat on the split tagline at center seam, then fade/rise panel text
      .to('.shutter-fade', {
        opacity: 0,
        y: -12,
        duration: 0.45,
        delay: 1.05,
        ease: 'power2.inOut',
      })
      // Simultaneously part Left (-100%) and Right (+100%) solid panels from center seam
      .call(() => setShutterPhase('parting'), [], 1.35)
      .to(
        leftEl,
        {
          xPercent: -100,
          duration: 1.35,
          ease: 'expo.inOut',
        },
        1.35
      )
      .to(
        rightEl,
        {
          xPercent: 100,
          duration: 1.35,
          ease: 'expo.inOut',
        },
        1.35
      )
      // Coordinated Hero Arch Portal & Split-Line Typography Reveal during separation
      .to(
        '#hero-arch-portal',
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: 'expo.out',
        },
        1.65
      )
      .to(
        '.hero-line',
        {
          yPercent: 0,
          rotateZ: 0,
          duration: 1.15,
          stagger: 0.12,
          ease: 'power4.out',
        },
        1.7
      )
      .to(
        '.hero-fade',
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.09,
          ease: 'power3.out',
        },
        1.85
      )
      .to(
        '#floating-specimen-olive, #floating-specimen-cosmos',
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.18,
          ease: 'back.out(1.4)',
        },
        2.0
      )
      .call(
        () => {
          setShutterPhase('open');
          setIsShuttersActive(false);
        },
        [],
        2.35
      );

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [replayCounter, finishIntroImmediately]);

  return (
    <div
      id="conservatory-shutters"
      ref={containerRef}
      data-shutter-phase={shutterPhase}
      aria-hidden={!isShuttersActive}
      className={`fixed inset-0 z-[100] flex overflow-hidden ${
        isShuttersActive ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Left Conservatory Shutter Panel */}
      <div
        id="shutter-left"
        ref={leftShutterRef}
        className="w-1/2 h-full bg-[#22122B] border-r border-[#D8C7A5]/30 flex flex-col justify-between p-6 sm:p-14 select-none"
      >
        <span className="font-script text-3xl sm:text-4xl text-[#D8C7A5] shutter-fade">
          A Place to Belong
        </span>

        <div className="my-auto text-right pr-3 sm:pr-10 shutter-fade">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#8FAF78] block mb-2">
            Mission Villa
          </span>
          <span className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F7F4ED] italic leading-tight block">
            {MISSION_VILLA_FACTS.taglineLeft}
          </span>
        </div>

        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F7F4ED]/55 shutter-fade">
          Dignity · Connection · Purpose
        </span>
      </div>

      {/* Right Conservatory Shutter Panel */}
      <div
        id="shutter-right"
        ref={rightShutterRef}
        className="w-1/2 h-full bg-[#22122B] flex flex-col justify-between p-6 sm:p-14 select-none"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#D8C7A5] text-right shutter-fade">
          Daly City, California
        </span>

        <div className="my-auto pl-3 sm:pl-10 shutter-fade">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C98268] block mb-2">
            Senior Living
          </span>
          <span className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#D8C7A5] italic leading-tight block">
            {MISSION_VILLA_FACTS.taglineRight}
          </span>
        </div>

        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F7F4ED]/55 text-right shutter-fade">
          Memory Care · Respite Care
        </span>
      </div>

      {/* Skip Intro Button (Visible while shutters are closed/parting) */}
      {isShuttersActive && (
        <button
          id="skip-intro-btn"
          type="button"
          onClick={finishIntroImmediately}
          aria-label="Skip Intro"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] px-5 py-2.5 rounded-full bg-[#F7F4ED]/15 hover:bg-[#F7F4ED] text-[#F7F4ED] hover:text-[#3B2348] border border-[#D8C7A5]/45 backdrop-blur-md text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8C7A5]"
        >
          Skip Intro
        </button>
      )}
    </div>
  );
}
