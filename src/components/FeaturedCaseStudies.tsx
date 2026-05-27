import { motion } from "motion/react";
import { ViewType } from "../types";
import { ArrowRight, Star, ExternalLink, Activity, Sparkles, Quote } from "lucide-react";

interface FeaturedCaseStudiesProps {
  setView: (view: ViewType) => void;
}

export default function FeaturedCaseStudies({ setView }: FeaturedCaseStudiesProps) {
  const handleReadCaseStudy = () => {
    setView("insights");
    setTimeout(() => {
      const el = document.getElementById("case-studies-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="bg-warm-dark h-[96vh] min-h-[720px] flex flex-col justify-center text-white px-6 border-b border-white/5 relative overflow-hidden py-6">
      {/* Absolute decorative gradient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-accent/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full justify-between">
        
        {/* Section Heading Compact */}
        <div className="max-w-3xl mb-4 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-mono text-[9px] text-accent font-semibold tracking-widest uppercase">
              PROOF IN PRODUCTION
            </span>
          </div>
          
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Strategic shifts that changed enterprise growth trajectories.
          </h2>
        </div>

        {/* 3-COLUMN LAYOUT SYSTEM WITH HORIZONTAL SCROLL OVERFLOW */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-accent/20 items-stretch flex-grow h-[calc(100%-80px)]">
          
          {/* COLUMN 1: THE PERSPECTIVE & AUTHOR PULLQUOTE */}
          <div className="snap-start min-w-[290px] md:min-w-[340px] lg:min-w-0 flex-shrink-0 w-4/5 lg:w-auto bg-[#100f0e] border border-white/5 p-6 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-[9px] text-white/40 block mb-6 uppercase tracking-widest">
                STRATEGIC REALIZATION
              </span>
              <div className="relative">
                <Quote size={20} className="text-accent/30 absolute -top-3 -left-2 z-0" />
                <p className="font-sans text-[13px] sm:text-sm text-white/70 leading-relaxed font-light italic relative z-10 pl-4">
                  "Most B2B SaaS corporations bleed acquisition budgets bidding on high-CAC software directory aggregators. By engineering programmatic comparison boards directly on their core matching indexes, we successfully capture buyer intent before third parties redirect them."
                </p>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-mono text-[10px] text-accent font-bold">
                FS
              </div>
              <div>
                <span className="text-[11px] text-white block font-medium">Founder & Strategy Principal</span>
                <span className="font-mono text-[8px] text-white/30 block uppercase">Growth Engineering Labs</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: FEATURED CASE STUDY 01 */}
          <div className="snap-start min-w-[290px] md:min-w-[340px] lg:min-w-0 flex-shrink-0 w-4/5 lg:w-auto bg-warm-card-dark border border-white/10 p-6 flex flex-col justify-between h-full relative group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/2 rounded-full blur-xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-1 h-[30%] bg-accent" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] text-accent font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <Star size={10} className="text-accent animate-pulse" />
                  CASE-01 // SAAS
                </span>
                <Activity size={12} className="text-white/20" />
              </div>

              <h3 className="font-display text-lg font-extrabold text-white leading-tight tracking-tight mb-2">
                Scaling B2B SaaS Pipeline by 312%
              </h3>

              <p className="font-sans text-xs text-white/60 font-light leading-relaxed mb-4">
                Bypassed paid search software listings by building custom programmatic index alternatives.
              </p>

              {/* Metrics block */}
              <div className="bg-[#171615] p-4 border border-white/5 space-y-2.5">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="font-mono text-[8.5px] text-white/40 uppercase">Organic Traffic</span>
                  <span className="font-display text-xs font-bold text-accent">+312% increase</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="font-mono text-[8.5px] text-white/40 uppercase">Asset Pipeline</span>
                  <span className="font-display text-xs font-bold text-white">$1.2M Generated</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[8.5px] text-white/40 uppercase">Search Standing</span>
                  <span className="font-display text-xs font-bold text-white">Top-3 position</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <button
                onClick={handleReadCaseStudy}
                className="font-mono text-[9px] uppercase tracking-wider text-accent hover:text-white font-semibold flex items-center gap-1.5 cursor-pointer transition-all"
              >
                Inspect SaaS Setup <ArrowRight size={10} />
              </button>
            </div>
          </div>

          {/* COLUMN 3: FEATURED CASE STUDY 02 */}
          <div className="snap-start min-w-[290px] md:min-w-[340px] lg:min-w-0 flex-shrink-0 w-4/5 lg:w-auto bg-warm-card-dark border border-white/5 p-6 flex flex-col justify-between h-full relative group">
            <div className="absolute top-0 left-0 w-1 h-[30%] bg-white/20 group-hover:bg-accent transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] text-white/40 font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles size={10} className="text-accent/60" />
                  CASE-02 // ADVISORY
                </span>
                <ExternalLink size={12} className="text-white/20" />
              </div>

              <h3 className="font-display text-lg font-extrabold text-white leading-tight tracking-tight mb-2">
                Enterprise Search Land Grab
              </h3>

              <p className="font-sans text-xs text-white/60 font-light leading-relaxed mb-4">
                Engineered custom semantic silo mapping of high-intent regional keywords for a luxury real estate brokerage.
              </p>

              {/* Metrics block */}
              <div className="bg-[#171615] p-4 border border-white/5 space-y-2.5">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="font-mono text-[8.5px] text-white/40 uppercase">Organic Leads</span>
                  <span className="font-display text-xs font-bold text-accent">+420% increase</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="font-mono text-[8.5px] text-white/40 uppercase">Attributed ACV</span>
                  <span className="font-display text-xs font-bold text-white">{">$4.5M pipeline"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[8.5px] text-white/40 uppercase">Crawl Index Rate</span>
                  <span className="font-display text-xs font-bold text-white">4.8x frequency</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <button
                onClick={handleReadCaseStudy}
                className="font-mono text-[9px] uppercase tracking-wider text-accent hover:text-white font-semibold flex items-center gap-1.5 cursor-pointer transition-all"
              >
                Inspect Regional Setup <ArrowRight size={10} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
