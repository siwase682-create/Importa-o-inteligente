/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";

// Exactly SIX Landing Page Content Sections
import { HeroSection } from "./components/sections/HeroSection";
import { ProblemOpportunitySection } from "./components/sections/ProblemOpportunitySection";
import { CurriculumSection } from "./components/sections/CurriculumSection";
import { IncludedResourcesSection } from "./components/sections/IncludedResourcesSection";
import { SocialProofSection } from "./components/sections/SocialProofSection";
import { FinalCtaFaqSection } from "./components/sections/FinalCtaFaqSection";

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#FFC928]/30 selection:text-[#FFC928]">
      {/* Top Navigation */}
      <Navbar onOpenCheckout={() => scrollToSection("oferta")} />

      {/* Main Landing Page Content: EXACTLY 6 SECTIONS */}
      <main className="flex-1">
        {/* SECTION 1: HERO / HIGH-CONVERSION INTRODUCTION */}
        <HeroSection
          onExploreGuide={() => scrollToSection("oferta")}
          onViewIncluded={() => scrollToSection("recursos")}
        />

        {/* SECTION 2: THE PROBLEM AND THE OPPORTUNITY */}
        <ProblemOpportunitySection />

        {/* SECTION 3: WHAT THE EBOOK TEACHES */}
        <CurriculumSection />

        {/* SECTION 4: WHAT IS INCLUDED / BONUSES */}
        <IncludedResourcesSection />

        {/* SECTION 5: TESTIMONIALS / SOCIAL PROOF (ILLUSTRATIVE SCENARIOS) */}
        <SocialProofSection />

        {/* SECTION 6: FINAL CTA, OFFER, FAQ AND WHATSAPP CONVERSION */}
        <FinalCtaFaqSection />
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button (Direct Redirect to bit.ly link) */}
      <FloatingWhatsApp />
    </div>
  );
}
