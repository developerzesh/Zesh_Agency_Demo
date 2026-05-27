import { useState } from "react";
import { CaseStudy, Resource } from "../types";
import { CASE_STUDIES_DATA, RESOURCES_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, FileText, Calendar, Clock, Sparkles, BookOpen, ChevronLeft } from "lucide-react";

export default function Insights() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  return (
    <section id="case-studies-section" className="bg-warm-dark text-white py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* VIEW CONDITIONAL: DEEP CASE STUDY OVERLAY */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed inset-0 z-50 bg-[#0b0a09]/98 pt-28 pb-16 px-6 overflow-y-auto"
            >
              <div className="max-w-4xl mx-auto text-left relative">
                {/* Back Link */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="flex items-center gap-2 text-white/50 hover:text-accent font-mono text-xs uppercase tracking-widest mb-10 cursor-pointer"
                >
                  <ChevronLeft size={16} /> Close Case Study
                </button>

                <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-4 font-semibold">EDITORIAL COOPERATION CASE STUDY</span>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-8">
                  {selectedCase.title}
                </h1>

                {/* Grid stats overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-warm-card-dark border border-white/5 p-8 mb-12">
                  <div>
                    <span className="font-mono text-[10px] text-accent font-bold block mb-1 uppercase tracking-wide">Client Sector Focus</span>
                    <p className="font-sans text-sm text-white/80 font-semibold">{selectedCase.clientContext}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-accent font-bold block mb-1 uppercase tracking-wide">Strategic Achievement</span>
                    <p className="font-sans text-sm text-accent font-semibold">{selectedCase.outcomes[0]}</p>
                  </div>
                </div>

                {/* Details narrative */}
                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3 border-b border-white/5 pb-2">Client Context & Problem</h3>
                    <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">{selectedCase.problem}</p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold mb-3 border-b border-white/5 pb-2">What Was Structurally Broken</h3>
                    <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">{selectedCase.whatWasBroken}</p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold mb-3 border-b border-white/5 pb-2">Our Proposed Strategic Shift</h3>
                    <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">{selectedCase.strategicShift}</p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold mb-4 border-b border-white/5 pb-2">Technical Execution Blueprint</h3>
                    <ul className="space-y-3 pl-4">
                      {selectedCase.execution.map((exc, idx) => (
                        <li key={idx} className="font-sans text-sm text-white/70 font-light leading-relaxed flex gap-3">
                          <span className="text-accent font-mono">0{idx + 1}.</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold mb-4 border-b border-white/5 pb-2">Measurable Performance Outcomes</h3>
                    <ul className="space-y-3 pl-4">
                      {selectedCase.outcomes.map((out, idx) => (
                        <li key={idx} className="font-sans text-sm text-white/70 font-light leading-relaxed flex gap-3">
                          <span className="text-emerald-500">✔</span>
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Insight Frame */}
                <div className="bg-accent/5 border border-accent/20 p-8">
                  <span className="font-mono text-accent text-[10px] font-bold block mb-2 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles size={14} /> CORE ACQUISITION KEY INSIGHT
                  </span>
                  <p className="font-sans text-sm sm:text-base text-accent font-light leading-relaxed italic">{selectedCase.keyInsight}</p>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* VIEW CONDITIONAL: DEEP RESOURCE NARRATIVE DECK OVERLAY */}
        <AnimatePresence>
          {selectedResource && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed inset-0 z-50 bg-[#0b0a09]/98 pt-28 pb-16 px-6 overflow-y-auto"
            >
              <div className="max-w-3xl mx-auto text-left relative">
                {/* Back Link */}
                <button
                  onClick={() => setSelectedResource(null)}
                  className="flex items-center gap-2 text-white/50 hover:text-accent font-mono text-xs uppercase tracking-widest mb-10 cursor-pointer"
                >
                  <ChevronLeft size={16} /> Close Insight Article
                </button>

                <div className="flex items-center gap-4 text-white/40 font-mono text-[10px] mb-4 uppercase tracking-wide">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {selectedResource.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {selectedResource.readTime}</span>
                </div>

                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-8">
                  {selectedResource.title}
                </h1>

                <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed font-light mb-8">
                  {selectedResource.content}
                </p>

                <div className="border-t border-white/5 pt-12 text-center">
                  <span className="font-sans text-sm text-white/40 block mb-6">Want a custom analysis audit covering your portal bottlenecks?</span>
                  <button
                    onClick={() => {
                      setSelectedResource(null);
                      const el = document.getElementById("conversational-form-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-display text-xs uppercase tracking-widest px-8 py-3 bg-accent text-warm-dark font-bold hover:bg-transparent hover:text-accent border border-accent transition-all duration-300"
                  >
                    Request Diagnostic Call
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MAIN CASES PAGE NARRATIVE GRID --- */}
        <div className="mb-24">
          <div className="max-w-3xl mb-16 sm:mb-24 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-[1px] bg-accent" />
              <span className="font-mono text-[10px] text-accent/80 uppercase tracking-widest font-semibold">
                PROOF
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Strategic shifts that changed business trajectories.
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-xl">
              Real outcomes. We bypass boilerplate layouts and directories to deliver targeted programmatic solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {CASE_STUDIES_DATA.map((cs) => (
              <div
                key={cs.id}
                onClick={() => setSelectedCase(cs)}
                className="group bg-warm-card-dark border border-white/5 p-8 flex flex-col justify-between hover:border-accent hover:shadow-xl hover:shadow-accent/4 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <span className="font-mono text-[10px] text-accent block uppercase tracking-wider mb-2">PARTNERSHIP CASE STUDY</span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
                    {cs.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/65 font-light leading-relaxed mb-6 block">
                    {cs.problem.length > 140 ? cs.problem.slice(0, 140) + "..." : cs.problem}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 font-mono text-[10px] text-accent/80 font-bold tracking-wider group-hover:text-accent transition-colors">
                  Analyze Blueprint <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MAIN BLOG RESOURCE DIRECTORY --- */}
        <div className="border-t border-white/5 pt-20">
          <div className="max-w-3xl mb-16 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-[1px] bg-accent" />
              <span className="font-mono text-[10px] text-accent/80 uppercase tracking-widest font-semibold">
                ADVISORY
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-none mb-6">
              Straightforward analysis for growth-focused operators.
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-xl">
              No generic marketing tips. We publish detailed breakdowns of algorithm changes, AI engine recommendations, and technical site performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 text-left">
            {RESOURCES_DATA.map((res) => (
              <div
                key={res.id}
                onClick={() => setSelectedResource(res)}
                className="group bg-warm-card-dark/40 border border-white/5 p-8 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-warm-card-dark hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 font-mono text-[9px] text-white/40 uppercase tracking-wider mb-2">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {res.date}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="flex items-center gap-1"><Clock size={10} /> {res.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors">
                    {res.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    {res.summary}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 flex items-center gap-2 font-mono text-[10px] uppercase font-bold tracking-wider text-accent/80 group-hover:text-accent group-hover:translate-x-1.5 transition-all">
                  Read Insight <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
