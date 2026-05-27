import React, { useState } from "react";
import { Industry, ViewType } from "../types";
import { INDUSTRIES_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Lock,
  Compass,
  ArrowRight,
  TrendingUp,
  LineChart,
  Eye,
  Settings,
  ChevronDown,
  Activity,
  Terminal,
  FileCode,
  ShieldCheck,
  Cpu
} from "lucide-react";
import InteractiveTooltip from "./InteractiveTooltip";
import Breadcrumbs from "./Breadcrumbs";

// Helper to return consistent inline line icons for industries
const getIndustryIcon = (id: string) => {
  switch (id) {
    case "saas":
      return ScalingUpIcon;
    case "b2b":
      return BriefcaseIcon;
    case "healthcare":
      return ShieldCheckIcon;
    case "tech-ai":
      return CpuIcon;
    case "b2c":
      return SparklingIcon;
    case "real-estate":
      return MapIcon;
    case "architecture":
      return DrawIcon;
    case "interior-design":
      return DesignIcon;
    default:
      return HelpIcon;
  }
};

// Line-only inline icon representations to enforce Lucide consistent stroke rules
function ScalingUpIcon(props: any) { return <Building2 {...props} />; }
function BriefcaseIcon(props: any) { return <TrendingUp {...props} />; }
function ShieldCheckIcon(props: any) { return <Lock {...props} />; }
function CpuIcon(props: any) { return <Settings {...props} />; }
function SparklingIcon(props: any) { return <Compass {...props} />; }
function MapIcon(props: any) { return <LineChart {...props} />; }
function DrawIcon(props: any) { return <Eye {...props} />; }
function DesignIcon(props: any) { return <Building2 {...props} />; }
function HelpIcon(props: any) { return <Building2 {...props} />; }

interface IndustriesProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  selectedIndustryId: string | null;
  setSelectedIndustryId: (id: string | null) => void;
}

export default function Industries({
  currentView,
  setView,
  selectedIndustryId,
  setSelectedIndustryId
}: IndustriesProps) {
  
  // Keep track of which challenge is expanded in accordion list
  const [expandedChallengeIdx, setExpandedChallengeIdx] = useState<number | null>(0);

  const handleOpenDetail = (id: string) => {
    setSelectedIndustryId(id);
    setView("industry-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHub = () => {
    setSelectedIndustryId(null);
    setView("industries");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedIndustry = INDUSTRIES_DATA.find((ind) => ind.id === selectedIndustryId);

  // --- RENDERING DETAIL VIEW FOR INDIVIDUAL VERTICALS ---
  if (currentView === "industry-detail" && selectedIndustry) {
    const IconComponent = getIndustryIcon(selectedIndustry.id);
    
    // Breadcrumb items for detail page
    const breadcrumbItems = [
      { label: "Home", view: "home" as ViewType },
      { label: "Verticals", view: "industries" as ViewType },
      { label: selectedIndustry.name, id: selectedIndustry.id, view: "industry-detail" as ViewType }
    ];

    // Challenge diagnostic details mapping to provide rich collateral copy inside accordions
    const challengeDiagnostics = [
      "Rigorous crawler indexing bottlenecks require immediate XML site architecture updates, eliminating duplicate crawler paths and optimizing indexing priority.",
      "High competition keyword theft. Traditional competitor brands bid up generic terms, requiring custom comparative alternative pages targeting evaluators directly.",
      "Missing structural metadata schemas. Systems lacking clear entity declarations cannot populate LLM semantic recommendation models."
    ];

    return (
      <div className="bg-warm-dark text-white pt-32 pb-24 min-h-screen relative overflow-hidden px-6">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-accent/3 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* SECURE TERMINAL BREADCRUMBS BLOCK */}
          <Breadcrumbs
            items={breadcrumbItems}
            setViewValue={setView}
            setSelectedId={setSelectedIndustryId}
            systemCode={`VERTICAL_OK: ${selectedIndustry.id.toUpperCase()}`}
          />

          {/* Industry Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/5 pb-16 mb-16">
            <div className="lg:col-span-7 text-left">
              <div className="w-12 h-12 bg-accent/15 border border-accent/30 flex items-center justify-center mb-6 text-accent">
                <IconComponent className="w-5 h-5 animate-pulse" />
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
                {selectedIndustry.title}
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-xl">
                {selectedIndustry.id === "healthcare" ? (
                  <>
                    Patients trust authoritative medical providers. We build clinical search systems optimized under Google's{" "}
                    <InteractiveTooltip title="E-E-A-T" text="Experience, Expertise, Authoritativeness, Trustworthiness — the core framework Google judges content authenticity by, highly strict for medical domains.">
                      E-E-A-T guidelines
                    </InteractiveTooltip>{" "}
                    and{" "}
                    <InteractiveTooltip title="YMYL" text="Your Money Your Life — strict classification of high-impact content including healthcare and wealth where search filters act extremely aggressively.">
                      YMYL algorithms
                    </InteractiveTooltip>{" "}
                    to secure clinic map visibility.
                  </>
                ) : (
                  selectedIndustry.description
                )}
              </p>
            </div>

            {/* Proof blocks */}
            <div className="lg:col-span-5 bg-warm-card-dark border border-white/5 p-8 self-center relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-accent" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-6 flex items-center gap-2">
                <TrendingUp size={14} /> HISTORIC ATTRIBUTED RESULTS
              </h4>
              <ul className="space-y-4 text-left border-t border-white/5 pt-6">
                <li className="font-sans text-sm text-white/80 font-semibold flex items-center gap-3">
                  <Activity size={14} className="text-accent animate-pulse" /> {selectedIndustry.metrics.traffic}
                </li>
                <li className="font-sans text-sm text-white/80 font-semibold flex items-center gap-3">
                  <Terminal size={14} className="text-accent" /> {selectedIndustry.metrics.pipeline}
                </li>
                <li className="font-sans text-sm text-white/80 font-semibold flex items-center gap-3">
                  <FileCode size={14} className="text-accent" /> {selectedIndustry.metrics.rankings}
                </li>
              </ul>
            </div>
          </div>

          {/* Collapsible Challenges Accordion & Strategic Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 text-left items-start">
            
            {/* CHALLENGES HANDLED COLLAPSIBLE SECTION */}
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-6">
                Operational Challenges Handled
              </h3>
              
              <div className="space-y-3">
                {selectedIndustry.challenges.map((c, i) => {
                  const isExpanded = expandedChallengeIdx === i;
                  // Split the title of challenge if exists
                  const splitChallenge = c.split(":");
                  const challengeTitle = splitChallenge[0];
                  const challengeDesc = splitChallenge[1] || "";

                  return (
                    <div
                      key={i}
                      className={`border transition-all duration-300 rounded-none ${
                        isExpanded ? "border-accent/40 bg-warm-card-dark" : "border-white/5 hover:border-white/10 bg-[#121110]/40"
                      }`}
                    >
                      <button
                        onClick={() => setExpandedChallengeIdx(isExpanded ? null : i)}
                        className="w-full p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-xs text-accent mt-0.5">0{i + 1}</span>
                          <span className="font-display text-sm sm:text-base text-white font-bold leading-snug tracking-tight">
                            {challengeTitle}
                          </span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`text-white/40 transition-transform duration-300 flex-shrink-0 ${
                            isExpanded ? "rotate-180 text-accent" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden border-t border-white/5"
                          >
                            <div className="p-5 bg-black/20 space-y-3">
                              <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                                {challengeDesc}
                              </p>
                              <div className="bg-accent/5 border px-4 py-3 border-accent/20 flex gap-2">
                                <span className="font-mono text-[9px] text-accent font-bold mt-0.5 uppercase tracking-wider">RESOLVE PROTOCOL:</span>
                                <p className="font-sans text-[11px] text-accent/90 font-light leading-relaxed">
                                  {challengeDiagnostics[i]}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STRATEGIC OPP SUMMARY */}
            <div className="bg-[#121110] p-8 border border-white/5 hover:border-accent/20 transition-all self-stretch flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-mono text-[9px] text-accent font-bold uppercase tracking-widest block">STRATEGIC HORIZON</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-6">
                  Unlocked Market Opportunities
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  {selectedIndustry.opportunities}
                </p>
              </div>

              <div className="border-t border-white/5 pt-8 mt-10">
                <button
                  onClick={() => {
                    setView("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto font-display text-xs uppercase font-extrabold tracking-widest px-8 py-3.5 bg-accent text-warm-dark hover:bg-transparent hover:text-accent border border-accent transition-all duration-300 cursor-pointer text-center"
                >
                  Schedule Strategy Audit
                </button>
              </div>
            </div>

          </div>

          {/* Proven 6-Months Pipeline Roadmap */}
          <div className="bg-[#121110] border border-white/5 p-8 sm:p-12 text-left relative">
            <div className="absolute top-0 left-0 w-32 h-[1px] bg-accent" />
            <span className="font-mono text-[9px] text-accent/60 uppercase tracking-widest block mb-1">CHRONOLOGICAL PATHWAY</span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-8">
              Proven 6-Months Pipeline Roadmap
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectedIndustry.roadmap.map((step, idx) => (
                <div key={idx} className="relative bg-[#0b0a09]/80 p-8 border border-white/5 hover:border-accent/15 transition-all">
                  <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider block mb-4">
                    {step.period}
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mb-2">
                    {step.task}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    {step.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // --- RENDERING VERTICALS HUB / HOME FEATURED VERTICALS VIEW ---
  const isHomeView = currentView === "home";

  // Filter to exactly the top 4 industries requested for the home view
  const targetHomeIds = ["saas", "healthcare", "tech-ai", "b2c"];
  const industriesToRender = isHomeView 
    ? INDUSTRIES_DATA.filter(ind => targetHomeIds.includes(ind.id))
    : INDUSTRIES_DATA;

  return (
    <section 
      className={`bg-warm-dark text-white px-6 border-b border-white/5 relative flex flex-col justify-center ${
        isHomeView ? "h-[96vh] min-h-[700px] py-4 overflow-hidden" : "py-24 sm:py-32"
      }`} 
      id="industries-section"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading Pair */}
        <div className={`max-w-3xl ${isHomeView ? "mb-6" : "mb-16 sm:mb-24"}`}>
          <div className="flex items-center gap-2 mb-2 text-left">
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-mono text-[9px] text-accent font-semibold tracking-widest uppercase">
              VERTICALS
            </span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mb-3 text-left">
            {isHomeView ? "Specialized structures for high-value business models." : "Dominate the Search Environments Where Your Clients Buy"}
          </h2>
          
          <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-2xl text-left">
            {isHomeView
              ? "We scale and optimize domains specifically within sectors characterized by high contract values, complex evaluation criteria, and rigorous compliance coordinates."
              : "We specialize exclusively in high-value business models where trust, authority, and positioning determine market share. Discover our vertical-specific frameworks below."}
          </p>
        </div>

        {isHomeView ? (
          /* --- HOME 3-COLUMN SECTORS TRACK WITH HORIZONTAL SCROLL OVERFLOW --- */
          <div>
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent/20">
              {industriesToRender.map((ind, index) => {
                const IconComponent = getIndustryIcon(ind.id);
                return (
                  <div
                    key={ind.id}
                    onClick={() => handleOpenDetail(ind.id)}
                    className="snap-start min-w-[280px] md:min-w-[340px] lg:min-w-[380px] lg:w-1/3 flex-shrink-0 bg-warm-card-dark border border-white/5 p-6 flex flex-col justify-between hover:border-accent hover:shadow-xl hover:shadow-accent/4 transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-accent/5 group-hover:border-accent/40 transition-colors">
                          <IconComponent className="w-4.5 h-4.5 text-white/60 group-hover:text-accent transition-colors" />
                        </div>
                        <span className="font-mono text-[9px] text-white/20">
                          0{index + 1} // VERTICAL
                        </span>
                      </div>
                      
                      <h3 className="font-display text-lg font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors">
                        {ind.name}
                      </h3>
                      
                      <p className="font-sans text-[13px] text-white/50 font-light leading-relaxed">
                        {ind.subheading}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider font-semibold text-accent/70 group-hover:text-accent group-hover:translate-x-1 transition-all pt-3 border-t border-white/5 mt-4">
                      Analyze {ind.name} <ArrowRight size={12} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setView("industries");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="font-display text-[10px] uppercase tracking-widest px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold hover:bg-white hover:text-warm-dark hover:border-white transition-all duration-300 cursor-pointer"
              >
                Explore All 8 Sectors We Serve
              </button>
            </div>
          </div>
        ) : (
          /* --- FULL VERTICALS HUB GRID VIEW --- */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
            {industriesToRender.map((ind) => {
              const IconComponent = getIndustryIcon(ind.id);
              return (
                <div
                  key={ind.id}
                  onClick={() => handleOpenDetail(ind.id)}
                  className="group bg-warm-card-dark border border-white/5 p-8 flex flex-col justify-between hover:border-accent hover:shadow-xl hover:shadow-accent/4 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent/5 group-hover:border-accent/40 transition-colors">
                      <IconComponent className="w-4.5 h-4.5 text-white/60 group-hover:text-accent transition-colors" />
                    </div>
                    
                    <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">
                      {ind.name}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-6">
                      {ind.subheading}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider font-semibold text-accent/70 group-hover:text-accent group-hover:translate-x-1 transition-all pt-4 border-t border-white/5 mt-4">
                    Analyze {ind.name} <ArrowRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
