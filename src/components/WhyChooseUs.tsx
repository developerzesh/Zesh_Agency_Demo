import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, ShieldCheck, RefreshCw, ChevronDown, Check, Sparkles } from "lucide-react";
import InteractiveTooltip from "./InteractiveTooltip";

export default function WhyChooseUs() {
  const [expandedCards, setExpandedCards] = useState<boolean[]>([false, false, false]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const values = [
    {
      title: "Strategic Transparency",
      body: "We don’t hide performance data behind marketing jargon. You get direct access to real-time dashboards showing pipeline value, client acquisition cost (CAC), and exact ranking distribution.",
      extendedBody: "We construct live telemetry feeds mapping customer journey interactions. You watch organic pipeline expand in real time as crawlers mapping your digital assets respond to active optimizations.",
      icon: Eye,
      metric: "+100% Data Integrity",
      highlights: [
        "Real-time pipeline monitoring",
        "Competitor search budget theft mapping",
        "Crawl frequency visualization"
      ],
      tooltipData: {
        cac: "Customer Acquisition Cost — the total sales and marketing cost required to earn a single client.",
        ranking: "Exact ranking distribution cluster tells you how many keywords sit in target positions."
      }
    },
    {
      title: "Founder Oversight",
      body: "Your systems are designed, coded, and optimized under direct founder oversight. Our founders personally strategize and supervise every step to ensure absolute technical and strategic alignment.",
      extendedBody: "We bypass administrative account executives entirely. This ensures high-velocity feature deployments and precise strategic executions that directly impact search indexing speed and code performance.",
      icon: ShieldCheck,
      metric: "Principal Only Execution",
      highlights: [
        "Direct access to founding operators",
        "Zero middle-management bottlenecks",
        "High-fidelity custom technical roadmaps"
      ]
    },
    {
      title: "Retainer Flexibility",
      body: "No 1-year or 6-month retainer traps—our relationships are built on continuous value and trust. If we aren’t moving the needle, we adjust the roadmap dynamically.",
      extendedBody: "We operate on a professional trust model with zero administrative exit barriers. If algorithmic patterns change, we re-allocate growth engineering schedules to realign with high-intent keywords instantly.",
      icon: RefreshCw,
      metric: "Dynamic Performance Clause",
      highlights: [
        "Adaptive monthly search strategies",
        "Resource re-allocation on key signals",
        "Performance-bound flexible retainers"
      ]
    },
  ];

  return (
    <section className="bg-warm-dark h-[96vh] min-h-[700px] flex flex-col justify-center text-white px-6 border-b border-white/5 relative overflow-hidden py-6">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading Pair matching guidelines exactly */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-mono text-[9px] text-accent font-semibold tracking-widest uppercase">
              THE DIFFERENCE
            </span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Built for operators who expect clear growth systems.
          </h2>
          
          <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed max-w-2xl">
            We built this consultancy to focus purely on measurable outcomes. Our mission is to align strategic growth planning with high-converting execution, replacing speculation with performance.
          </p>
        </div>

        {/* Value Slider / Grid (3-Column Layout with Horizontal Scroll fallback) */}
        <div className="flex md:grid md:grid-cols-3 gap-6 text-left overflow-x-auto md:overflow-visible scrollbar-thin pb-4 snap-x snap-mandatory">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            const isExpanded = expandedCards[idx];

            return (
              <motion.div
                key={val.title}
                layout="position"
                className={`snap-start min-w-[290px] md:min-w-0 flex-shrink-0 w-4/5 md:w-auto flex flex-col justify-between border p-6 sm:p-8 transition-all duration-300 relative ${
                  isExpanded 
                    ? "bg-warm-card-dark border-accent/40 shadow-lg shadow-accent/5" 
                    : "bg-[#100f0e] border-white/5 hover:border-white/10"
                }`}
              >
                <div>
                  {/* Top bar of the card */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 flex items-center justify-center border transition-colors duration-300 ${
                      isExpanded ? "bg-accent/15 border-accent/40 text-accent" : "bg-[#171615] border-white/5 text-white/50"
                    }`}>
                      <IconComp size={20} />
                    </div>
                    
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/30 bg-white/2 px-2 py-1 select-none">
                      0{idx + 1} // Value
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h3 className="font-display text-xl font-bold text-white tracking-tight mb-4">
                    {val.title}
                  </h3>

                  <div className="font-sans text-[14px] text-white/70 font-light leading-relaxed mb-6">
                    {idx === 0 ? (
                      <>
                        We don’t hide performance data behind marketing jargon. You get direct access to real-time dashboards showing pipeline value, <InteractiveTooltip title="CAC" text="Customer Acquisition Cost — the total sales and marketing cost required to earn a single client.">client acquisition cost (CAC)</InteractiveTooltip>, and <InteractiveTooltip title="Ranking Distribution" text="Exact ranking distribution cluster tells you how many keywords sit in target positions.">exact ranking distribution.</InteractiveTooltip>
                      </>
                    ) : (
                      val.body
                    )}
                  </div>
                  
                  {/* Collapsible deeper strategic specs */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-white/5 pt-6 mt-6 space-y-4"
                      >
                        <div className="bg-[#171615] p-3 border border-white/5">
                          <span className="font-mono text-[9px] uppercase text-accent tracking-widest block mb-1">
                            Aligned KPI Target
                          </span>
                          <span className="font-display text-lg font-bold text-white">
                            {val.metric}
                          </span>
                        </div>

                        <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
                          {val.extendedBody}
                        </p>

                        <div className="space-y-2 pt-2">
                          <span className="font-mono text-[8px] uppercase text-white/40 tracking-wider block">
                            Core Strategic Pillars
                          </span>
                          {val.highlights.map((item, keyIdx) => (
                            <div key={keyIdx} className="flex items-center gap-2 text-xs text-white/80 font-light">
                              <Check size={10} className="text-accent flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card footer CTA trigger */}
                <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between">
                  <button
                    onClick={() => toggleCard(idx)}
                    className="font-mono text-[10px] uppercase text-accent tracking-widest flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Collapse Details" : "Inspect System Spec"}</span>
                    <ChevronDown size={12} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                  
                  <Sparkles size={11} className="text-white/10" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
