import { useState } from "react";
import React from "react";
import { Solution, ViewType } from "../types";
import { SOLUTIONS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  MessageSquare,
  Cpu,
  Terminal,
  MapPin,
  GitBranch,
  Share2,
  Users,
  ArrowRight,
  TrendingUp,
  Calendar,
  Layers,
  ChevronLeft
} from "lucide-react";
import InteractiveTooltip from "./InteractiveTooltip";
import Breadcrumbs from "./Breadcrumbs";

// Helper to map icon types based on solution ID
const getSolutionIcon = (id: string) => {
  switch (id) {
    case "seo":
      return Search;
    case "aeo":
      return MessageSquare;
    case "geo":
      return Cpu;
    case "web-dev":
      return Terminal;
    case "local-seo":
      return MapPin;
    case "lead-generation":
      return GitBranch;
    case "social-media":
      return Share2;
    case "consultation":
      return Users;
    default:
      return Layers;
  }
};

interface SolutionsProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  selectedDetailId: string | null;
  setSelectedDetailId: (id: string | null) => void;
}

export default function Solutions({
  currentView,
  setView,
  selectedDetailId,
  setSelectedDetailId
}: SolutionsProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "search" | "engineering" | "specialty" | "consulting">("all");

  const categories = [
    { value: "all", label: "All Capabilities" },
    { value: "search", label: "Traditional & AI Search" },
    { value: "engineering", label: "Growth Web Dev" },
    { value: "specialty", label: "Specialty Systems" },
    { value: "consulting", label: "Strategic Consultation" }
  ];

  const filteredSolutions = SOLUTIONS_DATA.filter((s) => {
    if (activeFilter === "all") return true;
    return s.category === activeFilter;
  });

  const handleOpenDetail = (id: string) => {
    setSelectedDetailId(id);
    setView("solution-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHub = () => {
    setSelectedDetailId(null);
    setView("solutions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedSolution = SOLUTIONS_DATA.find((s) => s.id === selectedDetailId);

  // Helper to inject interactive tooltips directly inside specific copy blocks
  const renderDetailedOverview = (sol: Solution) => {
    if (sol.id === "seo") {
      return (
        <>
          Modern SEO is a technical battle. Search engines favor lightning-fast page loading speeds, semantic content depth, and strict structural hierarchy. We build programmatic frameworks that make indexing effortless for{" "}
          <InteractiveTooltip title="CRAWLER BOT" text="Automated search engine scripts (like Googlebot) that traverse your site's codebase to detect and index assets.">
            crawlers
          </InteractiveTooltip>{" "}
          and diagnostic scraper spiders.
        </>
      );
    }
    if (sol.id === "aeo") {
      return (
        <>
          Conversational models evaluate semantic trust networks. To win{" "}
          <InteractiveTooltip title="AEO" text="Answer Engine Optimization — the process of styling entity declarations to satisfy ChatGPT, Claude, and Apple Intelligence recommendation nodes.">
            AEO
          </InteractiveTooltip>{" "}
          dominance, your brand must exist in high-authority reference databases, possess clean{" "}
          <InteractiveTooltip title="JSON-LD" text="JavaScript Object Notation for Linked Data — structural code schemas declaring exact brand characteristics.">
            JSON-LD schemas
          </InteractiveTooltip>{" "}
          declaration maps, and maintain active, verified review nodes that LLM scrapers scan.
        </>
      );
    }
    if (sol.id === "geo") {
      return (
        <>
          GEO requires structured data alignment, authoritative content references, and high-frequency crawling profiles. We synchronize your product properties with the{" "}
          <InteractiveTooltip title="RAG PIPELINES" text="Retrieval-Augmented Generation — systems optimizing conversational queries by supplying external verified database nodes.">
            retrieval-augmented generation (RAG)
          </InteractiveTooltip>{" "}
          graphs scanned by search AI bots.
        </>
      );
    }
    if (sol.id === "web-dev") {
      return (
        <>
          Most websites are weighed down by heavy CMS structures and unoptimized asset files. We construct bespoke{" "}
          <InteractiveTooltip title="HEADLESS WEBSITES" text="A decoupled architecture hosting fast CDN-cached static pages with zero server database delays.">
            headless static frameworks
          </InteractiveTooltip>{" "}
          designed from the ground up for extreme speeds and seamless user experiences.
        </>
      );
    }
    return sol.detailedOverview;
  };

  // --- RENDERING DETAIL VIEW FOR INDIVIDUAL SOLUTION PAGES ---
  if (currentView === "solution-detail" && selectedSolution) {
    const IconComponent = getSolutionIcon(selectedSolution.id);

    // Setup breadcrumb list
    const breadcrumbItems = [
      { label: "Home", view: "home" as ViewType },
      { label: "Solutions Hub", view: "solutions" as ViewType },
      { label: selectedSolution.title.split("(")[0].trim(), id: selectedSolution.id, view: "solution-detail" as ViewType }
    ];

    return (
      <div className="bg-warm-dark pt-32 pb-24 text-white min-h-screen relative overflow-hidden px-6">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* INTERACTIVE BREADCRUMBS TO REVEAL DEEP PATH */}
          <Breadcrumbs
            items={breadcrumbItems}
            setViewValue={setView}
            setSelectedId={setSelectedDetailId}
            systemCode={`CAPABILITY_SYNC: ${selectedSolution.id.toUpperCase()}`}
          />

          {/* Solution Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/5 pb-16 mb-16">
            <div className="lg:col-span-7">
              <div className="w-12 h-12 bg-accent/15 border border-accent/30 flex items-center justify-center mb-6">
                <IconComponent className="w-5 h-5 text-accent" />
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
                {selectedSolution.title === "Growth Engineering and Website Development" ? "Fast static websites. Engineered to convert search traffic." : selectedSolution.title === "Local SEO Dominance" ? "Dominate local search maps and local organic intent." : selectedSolution.title === "Scalable Lead Generation" ? "Predictable pipelines from high-intent inbound search." : selectedSolution.title === "Social Media Management and Distribution" ? "Elevate executive authority where B2B buyers read." : selectedSolution.title === "High-Trust Consultation" ? "Principal-led workshops to unlock hidden revenue." : selectedSolution.title === "Search Engine Optimization (SEO)" ? "Dominance on the search engines where your buyers buy." : selectedSolution.title === "Answer Engine Optimization (AEO)" ? "Dominate the conversational search answers of tomorrow." : "Secure citations inside generative search summaries."}
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-xl">
                {renderDetailedOverview(selectedSolution)}
              </p>
            </div>

            <div className="lg:col-span-5 bg-warm-card-dark/60 border border-white/5 p-8 self-center relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-accent" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4 flex items-center gap-2">
                <TrendingUp size={14} /> EXPECTED PERFORMANCE OUTCOME
              </h4>
              <p className="font-sans text-base text-white/80 leading-relaxed font-light">
                {selectedSolution.expectedOutcomes}
              </p>
            </div>
          </div>

          {/* Solution Scope (3 features / key services blocks) */}
          <div className="mb-20">
            <h3 className="font-display text-2xl font-bold tracking-tight mb-8">
              Capabilities & Specialized Scope
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectedSolution.scope?.map((item, idx) => (
                <div key={idx} className="bg-warm-card-dark border border-white/5 p-8 flex flex-col justify-between hover:border-accent/20 transition-colors">
                  <div>
                    <span className="font-mono text-accent text-xs block mb-4">SCOPE 0{idx + 1}</span>
                    <h4 className="font-display text-lg font-bold text-white mb-3 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive 6 Months Timeline Roadmap */}
          <div className="bg-warm-card-dark border border-white/5 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/2 rounded-full blur-2xl pointer-events-none" />
            <h3 className="font-display text-2xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <Calendar className="text-accent" /> 6 Months Strategic Execution Roadmap
            </h3>
            <p className="font-sans text-sm text-white/50 max-w-xl font-light mb-12">
              Every system is iteratively designed, audited, and deployed based on transparent operational goals.
            </p>

            <div className="relative border-l border-white/10 ml-4 pl-8 sm:ml-12 sm:pl-12 space-y-12">
              {selectedSolution.roadmap?.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Point */}
                  <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-5 h-5 bg-warm-card-dark border-2 border-accent rounded-none flex items-center justify-center transition-all group-hover:bg-accent">
                    <div className="w-1.5 h-1.5 bg-accent group-hover:bg-warm-card-dark rounded-none" />
                  </div>
                  
                  <div>
                    <span className="font-mono text-accent text-xs font-semibold uppercase tracking-widest block mb-1">
                      {milestone.period}
                    </span>
                    <h5 className="font-display text-base font-bold text-white mb-2">
                      {milestone.task}
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-white/60 font-light max-w-2xl leading-relaxed">
                      {milestone.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action trigger below roadmap */}
          <div className="mt-16 text-center border-t border-white/5 pt-16">
            <h4 className="font-display text-xl text-white font-medium mb-6">Learn how we can deploy this to your platform.</h4>
            <button
              onClick={() => {
                setView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cta-primary btn-gold font-display text-xs uppercase tracking-widest px-8 py-4 bg-accent text-warm-dark font-bold hover:bg-transparent hover:text-accent border border-accent transition-all duration-300"
            >
              Request Discovery Call
            </button>
          </div>

        </div>
      </div>
    );
  }

  // --- RENDERING SOLUTIONS HUB / HOME FEATURED GRID VIEW ---
  const isHomeView = currentView === "home";

  const featuredList = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      subheading: "Technical structures that outrank competitors.",
      bullets: ["Technical SEO Architecture", "Intent-First Content Clusters", "Programmatic Hub Development"],
      linkText: "Explore SEO Capability"
    },
    {
      id: "aeo",
      title: "Answer Engine Optimization (AEO)",
      subheading: "Securing citations inside conversational AI models.",
      bullets: ["LLM Model Visibility Auditing", "Structured Semantic Entity Mappings", "Apple Intelligence Reference Setup"],
      linkText: "Explore AEO Capability"
    },
    {
      id: "geo",
      title: "Generative Engine Optimization (GEO)",
      subheading: "Aligning your brand with synthetic search queries.",
      bullets: ["Retrieval-Augmented Graph Syncing", "Perplexity Context Targeting", "Real-Time AI Indexing Syncs"],
      linkText: "Explore GEO Capability"
    },
    {
      id: "web-dev",
      title: "Growth Engineering and Website Development",
      subheading: "Zero-bloat static engines built for speed and conversions.",
      bullets: ["Headless HTML/JS Architecture", "Frictionless Intake Funnels", "Pipeline Conversion Engineering"],
      linkText: "Explore Web Dev Capability"
    }
  ];

  return (
    <section 
      className={`bg-warm-dark text-white px-6 border-b border-white/5 relative flex flex-col justify-center ${
        isHomeView ? "h-[96vh] min-h-[700px] py-4 overflow-hidden" : "py-24 sm:py-32"
      }`} 
      id="solutions-section"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className={`max-w-3xl ${isHomeView ? "mb-6" : "mb-16 sm:mb-24"}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-mono text-[9px] text-accent font-semibold tracking-widest uppercase">
              CAPABILITIES
            </span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-3 text-left">
            {isHomeView ? "Engineered to capture market share." : "Growth Systems Built for Search Dominance"}
          </h2>
          
          <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-2xl text-left">
            {isHomeView 
              ? "We replace abstract marketing speculation with predictive performance systems designed to convert customer query intent into pipelines."
              : "We replace abstract vanity metrics with attributed sales pipelines. Below is the technical roadmap and capability suite we deploy to establish authority inside traditional, AI, and conversational search platforms."}
          </p>
        </div>

        {isHomeView ? (
          /* --- HOME FEATURED GRID (3-Column Layout with Horizontal Scroll) --- */
          <div>
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent/20">
              {featuredList.map((sol, index) => {
                const IconComponent = getSolutionIcon(sol.id);
                return (
                  <div
                    key={sol.id}
                    onClick={() => handleOpenDetail(sol.id)}
                    className="snap-start min-w-[290px] md:min-w-[340px] lg:min-w-[380px] lg:w-1/3 flex-shrink-0 bg-warm-card-dark border border-white/5 p-6 flex flex-col justify-between hover:border-accent hover:shadow-xl hover:shadow-accent/4 transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors">
                          <IconComponent className="w-5 h-5 text-white/50 group-hover:text-accent transition-colors" />
                        </div>
                        <span className="font-mono text-[9px] text-white/20">
                          0{index + 1} // CAPABILITY
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight mb-2 text-white">
                        {sol.title}
                      </h3>
                      
                      <p className="font-mono text-[10px] text-accent font-semibold tracking-wide mb-4">
                        {sol.subheading}
                      </p>
                      
                      <div className="w-full h-[1px] bg-white/5 my-4" />

                      {/* Explicit Bullet Points */}
                      <ul className="space-y-2 mb-6 text-left">
                        {sol.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="font-sans text-[13px] text-white/70 font-light flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 bg-accent/70" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[9px] uppercase font-semibold tracking-widest text-accent/80 group-hover:text-accent group-hover:translate-x-1.5 transition-all pt-3 border-t border-white/5 mt-2">
                      {sol.linkText} <ArrowRight size={12} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hub Link CTA block */}
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setView("solutions");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="font-display text-[10px] uppercase tracking-widest px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold hover:bg-white hover:text-warm-dark hover:border-white transition-all duration-300 cursor-pointer"
              >
                View All 8 Capabilities
              </button>
            </div>
          </div>
        ) : (
          /* --- FULL SOLUTIONS HUB VIEW WITH CATEGORIES FILTER --- */
          <div>
            {/* Tab Filter Row */}
            <div className="flex flex-wrap items-center gap-3 border-b border-white/5 pb-8 mb-12">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setActiveFilter(c.value as any)}
                  className={`font-sans text-xs uppercase tracking-wider px-4 py-2.5 transition-all outline-none rounded-none cursor-pointer ${
                    activeFilter === c.value
                      ? "bg-accent text-warm-dark font-semibold border border-accent"
                      : "bg-transparent text-white/50 border border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Dynamic Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <AnimatePresence mode="popLayout">
                {filteredSolutions.map((sol) => {
                  const IconComponent = getSolutionIcon(sol.id);
                  return (
                    <motion.div
                      layout
                      key={sol.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => handleOpenDetail(sol.id)}
                      className="group bg-warm-card-dark border border-white/5 p-8 flex flex-col justify-between hover:border-accent hover:shadow-xl hover:shadow-accent/4 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                    >
                      <div>
                        {/* Unique line icon at top */}
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-8 group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors">
                          <IconComponent className="w-4.5 h-4.5 text-white/60 group-hover:text-accent transition-colors" />
                        </div>

                        <h3 className="font-display text-[19px] font-bold tracking-tight mb-3 text-white">
                          {sol.title}
                        </h3>
                        
                        <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6">
                          {sol.description}
                        </p>

                        {/* Features checklist bullets */}
                        <ul className="space-y-2 mb-8 border-t border-white/5 pt-6 text-left">
                          {sol.features.map((f, i) => (
                            <li key={i} className="font-sans text-xs text-white/70 font-light flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-accent/60" /> {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Arrow link at bottom */}
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-semibold tracking-wider text-accent/80 group-hover:text-accent group-hover:translate-x-1.5 transition-all">
                        Explore Capability <ArrowRight size={12} />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
