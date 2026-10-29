'use client';

import React, { useState } from 'react';
import ConservatoryShutters from '@/components/ConservatoryShutters';
import HeaderAndUtilityBar from '@/components/HeaderAndUtilityBar';
import HeroStage from '@/components/HeroStage';
import CareOptionsSection from '@/components/CareOptionsSection';
import ApproachAndLifeSection from '@/components/ApproachAndLifeSection';
import SuitesAndFamilySection from '@/components/SuitesAndFamilySection';
import VisitAndFooterSection from '@/components/VisitAndFooterSection';

export default function MissionVillaHomePage() {
  const [fontScale, setFontScale] = useState<number>(1);
  const [replayCounter, setReplayCounter] = useState<number>(0);
  const [lovedOneName, setLovedOneName] = useState<string>('');
  const [presetCareOption, setPresetCareOption] = useState<
    'Memory Care' | 'Respite Care' | null
  >(null);

  const handleFontScaleChange = (scale: number) => {
    setFontScale(scale);
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--font-scale', String(scale));
    }
  };

  const handleReplayIntro = () => {
    setReplayCounter((c) => c + 1);
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

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F7F4ED] text-[#29272B]">
      {/* Signature Two-Panel French Conservatory Shutter Opening */}
      <ConservatoryShutters replayCounter={replayCounter} />

      {/* Top Utility Bar (36px) & Sticky Full-Width Navigation (68px) */}
      <HeaderAndUtilityBar
        fontScale={fontScale}
        onChangeFontScale={handleFontScaleChange}
        onReplayIntro={handleReplayIntro}
        lovedOneName={lovedOneName}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Edge-to-Edge Full-Width Editorial Canvas */}
      <main className="w-full flex-1">
        {/* 1 & 2. Integrated First-Fold Hero Stage + Verified Identity Ribbon */}
        <HeroStage
          lovedOneName={lovedOneName}
          onChangeLovedOneName={setLovedOneName}
          onReplayIntro={handleReplayIntro}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* 3. The Two Real Care Options (Memory Care & Respite Care) + Family Reflection Guide */}
        <CareOptionsSection onNavigateToSection={handleNavigateToSection} />

        {/* 4 & 5. Our Approach to Care + Everyday Life at Mission Villa */}
        <ApproachAndLifeSection onNavigateToSection={handleNavigateToSection} />

        {/* 6 & 7. Comfortable Suites & Communal Spaces + Reassurance for Families */}
        <SuitesAndFamilySection onNavigateToSection={handleNavigateToSection} />

        {/* 8 & 9. Schedule a Visit / Get Pricing (Demo Form) + Complete Footer */}
        <VisitAndFooterSection
          presetCareOption={presetCareOption}
          onNavigateToSection={handleNavigateToSection}
        />
      </main>
    </div>
  );
}
