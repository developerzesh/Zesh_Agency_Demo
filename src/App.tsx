/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ViewType } from "./types";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Solutions from "./components/Solutions";
import Achievements from "./components/Achievements";
import Industries from "./components/Industries";
import About from "./components/About";
import Insights from "./components/Insights";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeaturedCaseStudies from "./components/FeaturedCaseStudies";

export default function App() {
  const [currentView, setView] = useState<ViewType>("home");
  const [selectedDetailId, setSelectedDetailId] = useState<string | null>(null);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null);

  const renderActiveView = () => {
    switch (currentView) {
      case "home":
        return (
          <>
            <Hero setView={setView} />
            <WhyChooseUs />
            <Solutions
              currentView={currentView}
              setView={setView}
              selectedDetailId={selectedDetailId}
              setSelectedDetailId={setSelectedDetailId}
            />
            <Achievements />
            <FeaturedCaseStudies setView={setView} />
            <Industries
              currentView={currentView}
              setView={setView}
              selectedIndustryId={selectedIndustryId}
              setSelectedIndustryId={setSelectedIndustryId}
            />
            <Contact />
          </>
        );
      case "about":
        return <About />;
      case "solutions":
      case "solution-detail":
        return (
          <Solutions
            currentView={currentView}
            setView={setView}
            selectedDetailId={selectedDetailId}
            setSelectedDetailId={setSelectedDetailId}
          />
        );
      case "industries":
      case "industry-detail":
        return (
          <Industries
            currentView={currentView}
            setView={setView}
            selectedIndustryId={selectedIndustryId}
            setSelectedIndustryId={setSelectedIndustryId}
          />
        );
      case "insights":
        return <Insights />;
      case "careers":
        return <Careers />;
      case "contact":
        return <Contact />;
      default:
        return <Hero setView={setView} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-warm-dark text-white selection:bg-accent/35 selection:text-white selection:outline-none overflow-hidden">

      {/* High-quality noise film grain overlay across the entire workspace */}
      <div className="fixed inset-0 z-50 pointer-events-none grain-overlay" />

      {/* Desktop Responsive Custom Cursor */}
      <CustomCursor />

      {/* Top Floating Frost glass Header Navigation Banner */}
      <Navigation
        currentView={currentView}
        setView={setView}
      />

      {/* Main Core Router View Panels */}
      <main className="relative z-10">
        {renderActiveView()}
      </main>

      {/* Footer & General bottom CTAs */}
      <Footer
        setView={setView}
        setSelectedDetailId={setSelectedDetailId}
      />

    </div>
  );
}
