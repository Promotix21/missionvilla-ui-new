'use client';

import React, { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Info,
  CheckCircle2,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import {
  MISSION_VILLA_FACTS,
  validateVisitInquiry,
  type VisitInquiryInput,
} from '@/lib/mission-villa-data';

interface VisitAndFooterSectionProps {
  presetCareOption?: 'Memory Care' | 'Respite Care' | null;
  onNavigateToSection: (sectionId: string, presetCare?: 'Memory Care' | 'Respite Care') => void;
}

export default function VisitAndFooterSection({
  presetCareOption,
  onNavigateToSection,
}: VisitAndFooterSectionProps) {
  const [formState, setFormState] = useState<VisitInquiryInput>({
    fullName: '',
    phone: '',
    email: '',
    careInterest: 'Memory Care',
    suitePreference: 'Private Suite',
    inquiryType: 'Schedule a Visit',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof VisitInquiryInput, string>>>({});
  const [demoSubmittedData, setDemoSubmittedData] = useState<VisitInquiryInput | null>(null);
  const [policyNotice, setPolicyNotice] = useState<'privacy' | 'accessibility' | null>(null);

  useEffect(() => {
    if (presetCareOption) {
      setFormState((prev) => ({
        ...prev,
        careInterest: presetCareOption,
      }));
    }
  }, [presetCareOption]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateVisitInquiry(formState);
    if (!validation.valid || !validation.sanitized) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setDemoSubmittedData(validation.sanitized);
  };

  const resetDemoForm = () => {
    setDemoSubmittedData(null);
    setErrors({});
  };

  return (
    <>
      {/* =====================================================================
          SECTION 8: PRACTICAL NEXT STEP / SCHEDULE A VISIT & GET PRICING
      ====================================================================== */}
      <section
        id="schedule-visit"
        className="w-full py-20 lg:py-28 fluid-canvas bg-[#3B2348] text-[#F7F4ED] relative overflow-hidden"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left 5 Columns: Direct Contact Details & Warm Invitation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="font-script script-display text-[#D8C7A5] block">
                A Place to Belong
              </span>
              <h2
                className="font-serif section-display text-[#F7F4ED] font-semibold"
                style={{ textWrap: 'balance' }}
              >
                Schedule a Visit or Request Pricing &amp; Information
              </h2>
              <p className="text-[#F7F4ED]/85 text-base sm:text-lg leading-relaxed">
                Seeing our community in person and meeting our care team is the clearest way to know if Mission Villa feels right for your loved one. Reach out by phone, email, or the inquiry form to schedule a personal visit in Daly City.
              </p>
            </div>

            {/* Verified Mission Villa Contact Card */}
            <div className="rounded-3xl bg-[#22122B] border border-[#D8C7A5]/25 p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8FAF78] font-semibold block">
                  Direct Community Contact
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F4ED] mt-1">
                  {MISSION_VILLA_FACTS.name}
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D8C7A5] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D8C7A5]/80 block">
                      Location
                    </span>
                    <span className="font-medium text-[#F7F4ED]">
                      {MISSION_VILLA_FACTS.address.full}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#C98268] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D8C7A5]/80 block">
                      Main Telephone
                    </span>
                    <a
                      href={MISSION_VILLA_FACTS.phone.href}
                      className="font-serif text-xl font-bold text-[#F7F4ED] hover:text-[#D8C7A5] transition"
                    >
                      {MISSION_VILLA_FACTS.phone.raw}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#8FAF78] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D8C7A5]/80 block">
                      Email Our Team
                    </span>
                    <a
                      href={MISSION_VILLA_FACTS.email.href}
                      className="font-medium text-[#F7F4ED] hover:text-[#D8C7A5] transition break-all"
                    >
                      {MISSION_VILLA_FACTS.email.address}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D8C7A5]/85">
                <span>Memory Care · Respite Care</span>
                <span>CA License #{MISSION_VILLA_FACTS.licenseNumber}</span>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Request a Tour / Pricing Information Form (With Explicit Demo State) */}
          <div className="lg:col-span-7 flex">
            <div className="herbarium-mount bg-[#F7F4ED] text-[#29272B] rounded-[32px] p-6 sm:p-10 lg:p-12 w-full flex flex-col justify-between shadow-2xl">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#D8C7A5] pb-5 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A65D43] font-semibold block">
                    Connect With Mission Villa
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2348] mt-1">
                    Request a Visit or Pricing Information
                  </h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#D8C7A5]/45 text-[#3B2348] text-xs font-semibold">
                  Daly City, CA 94014
                </span>
              </div>

              {demoSubmittedData ? (
                /* EXPLICIT VISUAL DEMO STATE (Honest Prototype Feedback — Backend Not Connected) */
                <div
                  role="status"
                  aria-live="polite"
                  className="my-auto p-6 sm:p-8 rounded-2xl bg-[#FCFBF8] border-2 border-[#3B2348] space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#D8C7A5]">
                    <div className="flex items-center gap-2.5 text-[#3B2348]">
                      <CheckCircle2 className="w-6 h-6 text-[#5F7F49] shrink-0" aria-hidden="true" />
                      <h4 className="font-serif text-xl sm:text-2xl font-bold">
                        Demo — Backend Not Connected
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#C98268]/20 text-[#A65D43] text-xs font-bold uppercase tracking-wider">
                      Visual Design Prototype
                    </span>
                  </div>

                  <p className="text-sm text-[#29272B]/90 leading-relaxed">
                    This homepage is a visual design prototype, so form entries are not yet transmitted to a live CRM or email server. Below is a preview of the inquiry payload captured for future developer integration:
                  </p>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#F7F4ED] border border-[#D8C7A5] text-xs sm:text-sm">
                    <div>
                      <dt className="text-[#29272B]/65 font-medium">Name</dt>
                      <dd className="font-semibold text-[#3B2348]">{demoSubmittedData.fullName}</dd>
                    </div>
                    <div>
                      <dt className="text-[#29272B]/65 font-medium">Phone</dt>
                      <dd className="font-semibold text-[#3B2348]">{demoSubmittedData.phone}</dd>
                    </div>
                    <div>
                      <dt className="text-[#29272B]/65 font-medium">Email</dt>
                      <dd className="font-semibold text-[#3B2348] break-all">
                        {demoSubmittedData.email}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#29272B]/65 font-medium">Request Type</dt>
                      <dd className="font-semibold text-[#3B2348]">
                        {demoSubmittedData.inquiryType}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#29272B]/65 font-medium">Care Program</dt>
                      <dd className="font-semibold text-[#3B2348]">
                        {demoSubmittedData.careInterest}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#29272B]/65 font-medium">Suite Interest</dt>
                      <dd className="font-semibold text-[#3B2348]">
                        {demoSubmittedData.suitePreference}
                      </dd>
                    </div>
                    {demoSubmittedData.notes && (
                      <div className="sm:col-span-2">
                        <dt className="text-[#29272B]/65 font-medium">Family Notes</dt>
                        <dd className="font-semibold text-[#3B2348]">
                          {demoSubmittedData.notes}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <div className="p-4 rounded-xl bg-[#8FAF78]/20 border border-[#8FAF78]/50 text-xs sm:text-sm text-[#3B2348]">
                    <strong>To contact Mission Villa Senior Living directly right now:</strong> Call{' '}
                    <a href={MISSION_VILLA_FACTS.phone.href} className="underline font-bold">
                      {MISSION_VILLA_FACTS.phone.raw}
                    </a>{' '}
                    or email{' '}
                    <a href={MISSION_VILLA_FACTS.email.href} className="underline font-bold">
                      {MISSION_VILLA_FACTS.email.address}
                    </a>
                    .
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={resetDemoForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3B2348] text-[#3B2348] text-xs font-semibold hover:bg-[#3B2348] hover:text-[#F7F4ED] transition cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Return to Form</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 my-auto">
                  {/* Inquiry Type Selector Buttons */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-2">
                      How Can Our Team Help You Today?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {(
                        [
                          'Schedule a Visit',
                          'Get Pricing & Information',
                          'Request a Phone Call',
                        ] as const
                      ).map((typeOption) => {
                        const isSelected = formState.inquiryType === typeOption;
                        return (
                          <button
                            key={typeOption}
                            type="button"
                            onClick={() =>
                              setFormState((prev) => ({ ...prev, inquiryType: typeOption }))
                            }
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                              isSelected
                                ? 'bg-[#3B2348] text-[#F7F4ED] border-[#3B2348]'
                                : 'bg-[#FCFBF8] text-[#3B2348] border-[#D8C7A5] hover:border-[#3B2348]'
                            }`}
                          >
                            {typeOption}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-full-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="inquiry-full-name"
                        type="text"
                        required
                        value={formState.fullName}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, fullName: e.target.value }))
                        }
                        placeholder="e.g., Elena Martinez"
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-[#A65D43] font-medium mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="(650) 555-0199"
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                      />
                      {errors.phone && (
                        <p className="text-xs text-[#A65D43] font-medium mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Care Program */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                      />
                      {errors.email && (
                        <p className="text-xs text-[#A65D43] font-medium mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-care-interest"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                      >
                        Care Option of Interest
                      </label>
                      <select
                        id="inquiry-care-interest"
                        value={formState.careInterest}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            careInterest: e.target.value as VisitInquiryInput['careInterest'],
                          }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                      >
                        <option value="Memory Care">Memory Care (Legacies™ Program)</option>
                        <option value="Respite Care">Short-Term Respite Care</option>
                        <option value="Both / Exploring Options">
                          Both / Exploring Care Options
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Suite Preference & Optional Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-suite-pref"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                      >
                        Suite Preference
                      </label>
                      <select
                        id="inquiry-suite-pref"
                        value={formState.suitePreference}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            suitePreference: e.target
                              .value as VisitInquiryInput['suitePreference'],
                          }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                      >
                        <option value="Private Suite">Private Suite with Private Bathroom</option>
                        <option value="Shared Suite">
                          Shared Companion Suite with Private Bathroom
                        </option>
                        <option value="Open / Undecided">Open / Would Like to Compare Both</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-notes"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#3B2348] mb-1.5"
                      >
                        Questions or Preferred Visit Day (Optional)
                      </label>
                      <input
                        id="inquiry-notes"
                        type="text"
                        value={formState.notes}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, notes: e.target.value }))
                        }
                        placeholder="e.g., Looking to visit this week..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFBF8] border border-[#D8C7A5] focus:border-[#3B2348] focus:outline-none text-sm text-[#29272B]"
                      />
                    </div>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-full bg-[#C98268] text-white font-semibold text-sm sm:text-base hover:bg-[#3B2348] transition-colors shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>Submit Inquiry (Visual Prototype Demo)</span>
                    </button>

                    <p className="text-[11px] text-[#29272B]/70 flex items-center justify-center gap-1.5 text-center">
                      <Info className="w-3.5 h-3.5 text-[#3B2348] shrink-0" aria-hidden="true" />
                      <span>
                        Design prototype preview — submitting displays the demo state without sending live data.
                      </span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: COMPLETE ARCHITECTURAL FOOTER
      ====================================================================== */}
      <footer className="w-full bg-[#22122B] text-[#F7F4ED] border-t border-[#D8C7A5]/20 relative overflow-hidden">
        {/* Main 12-Column Directory */}
        <div className="w-full fluid-canvas py-16 lg:py-20">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Columns 1–4: Brand Identity & Tagline */}
            <div className="lg:col-span-4 space-y-5 pr-0 lg:pr-6">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 shrink-0" aria-hidden="true">
                  <svg
                    viewBox="0 0 120 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path d="M26 74C34 80 45 84 48 104C36 93 29 84 26 74Z" fill="#D8C7A5" />
                    <path
                      d="M28 6C5 34 4 68 32 80C42 84 47 92 48 104C49 85 40 66 32 48C25 32 24 18 28 6Z"
                      fill="#5B3270"
                    />
                    <path
                      d="M28 6C26 26 36 46 47 64C55 77 54 92 48 104C66 86 72 60 56 38C44 22 33 16 28 6Z"
                      fill="#8FAF78"
                    />
                    <path
                      d="M114 34C82 42 64 58 64 78C64 89 56 97 48 104C76 94 96 76 114 34Z"
                      fill="#C98268"
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
                  <span className="block font-serif text-xl font-bold tracking-tight text-[#F7F4ED] leading-none">
                    MISSION VILLA
                  </span>
                  <span className="block font-sans text-[10px] tracking-[0.26em] uppercase text-[#D8C7A5] font-medium mt-1">
                    Senior Living · Daly City
                  </span>
                </div>
              </div>

              <p className="font-serif italic text-base text-[#D8C7A5] leading-relaxed">
                “{MISSION_VILLA_FACTS.tagline}”
              </p>

              <p className="text-xs sm:text-sm text-[#F7F4ED]/75 leading-relaxed">
                Compassionate, personalized Memory Care and short-term Respite Care in a welcoming, homelike Daly City community.
              </p>
            </div>

            {/* Columns 5–7: Care Offerings */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block border-b border-white/10 pb-2.5">
                Care &amp; Living Offerings
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F4ED]/80">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('care-options', 'Memory Care')}
                    className="hover:text-[#D8C7A5] transition text-left cursor-pointer"
                  >
                    Memory Care (Legacies™ Program)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('care-options', 'Respite Care')}
                    className="hover:text-[#D8C7A5] transition text-left cursor-pointer"
                  >
                    Short-Term Respite Care
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('suites-preview')}
                    className="hover:text-[#D8C7A5] transition text-left cursor-pointer"
                  >
                    Private &amp; Shared Suites with Private Bathrooms
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('daily-life')}
                    className="hover:text-[#D8C7A5] transition text-left cursor-pointer"
                  >
                    Chef-Prepared Dining &amp; Engaging Activities
                  </button>
                </li>
              </ul>
            </div>

            {/* Columns 8–9: Page Navigation */}
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block border-b border-white/10 pb-2.5">
                Explore Homepage
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F4ED]/80">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('top')}
                    className="hover:text-[#D8C7A5] transition cursor-pointer"
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('our-approach')}
                    className="hover:text-[#D8C7A5] transition cursor-pointer"
                  >
                    Our Approach
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('family-reassurance')}
                    className="hover:text-[#D8C7A5] transition cursor-pointer"
                  >
                    For Families &amp; FAQ
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToSection('schedule-visit')}
                    className="hover:text-[#D8C7A5] transition cursor-pointer"
                  >
                    Schedule a Visit
                  </button>
                </li>
              </ul>
            </div>

            {/* Columns 10–12: Verified Location & Contact */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D8C7A5] font-semibold block border-b border-white/10 pb-2.5">
                Location &amp; Contact
              </span>
              <div className="space-y-3 text-xs sm:text-sm text-[#F7F4ED]/85">
                <p className="font-medium text-[#F7F4ED]">
                  {MISSION_VILLA_FACTS.address.full}
                </p>
                <p>
                  Phone:{' '}
                  <a
                    href={MISSION_VILLA_FACTS.phone.href}
                    className="text-[#D8C7A5] font-semibold hover:underline"
                  >
                    {MISSION_VILLA_FACTS.phone.raw}
                  </a>
                </p>
                <p className="break-all">
                  Email:{' '}
                  <a
                    href={MISSION_VILLA_FACTS.email.href}
                    className="text-[#D8C7A5] hover:underline"
                  >
                    {MISSION_VILLA_FACTS.email.address}
                  </a>
                </p>
                <p className="inline-flex items-center gap-1.5 text-xs text-[#8FAF78] pt-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>CA License #{MISSION_VILLA_FACTS.licenseNumber}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Expandable Privacy / Accessibility Notice Panel */}
          {policyNotice && (
            <div className="mt-10 p-5 rounded-2xl bg-white/10 border border-[#D8C7A5]/30 text-xs sm:text-sm text-[#F7F4ED]/90 flex items-start justify-between gap-4">
              <div>
                <strong className="text-[#D8C7A5] block mb-1">
                  {policyNotice === 'privacy'
                    ? 'Privacy Notice (Design Prototype)'
                    : 'Accessibility Commitment'}
                </strong>
                {policyNotice === 'privacy' ? (
                  <p>
                    Mission Villa Senior Living respects your family’s privacy. In this design prototype, inquiry form fields are demonstrated client-side only. When connected in production, personal contact details are used solely to respond to your family’s care inquiry.
                  </p>
                ) : (
                  <p>
                    Mission Villa Senior Living is committed to digital and physical accessibility for seniors and families, including adjustable reading text scales, keyboard navigation, and reduced-motion support. For assistance, call{' '}
                    {MISSION_VILLA_FACTS.phone.formatted}.
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setPolicyNotice(null)}
                className="text-xs text-[#D8C7A5] underline shrink-0 cursor-pointer"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Bottom Regulatory & Copyright Bar */}
        <div className="w-full border-t border-white/10 bg-black/25 fluid-canvas py-6">
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F7F4ED]/65">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>© {new Date().getFullYear()} {MISSION_VILLA_FACTS.name}</span>
              <span aria-hidden="true">·</span>
              <span>CA License #{MISSION_VILLA_FACTS.licenseNumber}</span>
              <span aria-hidden="true">·</span>
              <span>Equal Housing Opportunity</span>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() =>
                  setPolicyNotice(policyNotice === 'privacy' ? null : 'privacy')
                }
                className="hover:text-[#D8C7A5] transition cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() =>
                  setPolicyNotice(
                    policyNotice === 'accessibility' ? null : 'accessibility'
                  )
                }
                className="hover:text-[#D8C7A5] transition cursor-pointer"
              >
                Accessibility Statement
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
