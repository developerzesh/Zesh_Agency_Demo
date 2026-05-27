import React, { useState } from "react";
import { JOB_ROLES_DATA } from "../data";
import { Check, Send, ShieldCheck, Mail, Link as LinkIcon, User, Terminal, ChevronDown, Award, Briefcase, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveTooltip from "./InteractiveTooltip";
import Breadcrumbs from "./Breadcrumbs";
import { ViewType } from "../types";

export default function Careers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  
  // Track expanded active job role accordion index
  const [expandedRoleIdx, setExpandedRoleIdx] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !portfolioUrl || !message) return;
    setSuccess(true);
    setName("");
    setEmail("");
    setPortfolioUrl("");
    setMessage("");
    setTimeout(() => setSuccess(false), 5000);
  };

  const culturePoints = [
    {
      title: "Autonomy & Trust",
      copy: "We trust you to manage your time and deliverables. You work directly with founders and clients without administrative middle-managers or layers of bureaucracy.",
    },
    {
      title: "Quiet Focus",
      copy: "We minimize meeting overhead so you have uninterrupted hours to code, analyze, and strategize. We believe deep work requires quiet space.",
    },
    {
      title: "Continuous Mastery",
      copy: "Work on cutting-edge generative and answer engine search systems (AEO & GEO) that define the future of digital discovery.",
    },
  ];

  // Specific role parameters to enrich the active job accordion with responsibilities
  const roleParameters = [
    {
      responsibilities: [
        "Develop lightning-fast pre-rendered static indexation systems.",
        "Integrate dynamic CRM intake APIs using lightweight vanilla scripts.",
        "Refactor bloated client portfolios to achieve 100/100 Core Web Vitals."
      ],
      requirements: "Deep proficiency in JS/TS performance budgeting, headless architectures, and DOM optimization."
    },
    {
      responsibilities: [
        "Declare semantic schemas and inspect GPT recommendation profiles.",
        "Reverse-engineer ChatGPT, Perplexity, and SGE citation mechanisms.",
        "Structure programmatic alternative grids that drive direct indexed authority."
      ],
      requirements: "Familiarity with JSON-LD, schema indexing models, semantic RAG pipelines, and search engine crawling parameters."
    }
  ];

  // Breadcrumbs items
  const breadcrumbItems = [
    { label: "Home", view: "home" as ViewType },
    { label: "System Gateway", view: "careers" as ViewType },
    { label: "/careers", view: "careers" as ViewType }
  ];

  return (
    <section className="bg-warm-dark py-24 sm:py-32 text-white px-6 border-b border-white/5 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* SECURE BREADCRUMBS BANNER */}
        <Breadcrumbs
          items={breadcrumbItems}
          setViewValue={() => {}}
          systemCode="OPERATOR_PORTAL"
        />

        {/* Careers Hero */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-mono text-[10px] text-accent/80 uppercase tracking-widest font-semibold animate-pulse">
              CAREERS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Built for operators who love quiet focus.
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-xl">
            We don't believe in corporate politics, endless status meetings, or micro-management. We offer a calm, fully remote environment designed for technical experts who want to build high-performance search and growth systems.
          </p>
        </div>

        {/* Culture Point Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left">
          {culturePoints.map((pt, idx) => (
            <div key={idx} className="bg-warm-card-dark p-8 border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-accent/20 transition-colors">
              <div className="absolute top-0 right-0 w-12 h-12 bg-accent/2 rounded-full blur-xl pointer-events-none" />
              <div>
                <span className="font-mono text-[10px] text-accent font-semibold block mb-3 uppercase tracking-wider">CULTURE POINT 0{idx + 1}</span>
                <h4 className="font-display text-lg font-bold text-white mb-3 tracking-tight">
                  {pt.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                  {pt.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Active roles list as a Collapsible Accordion layout */}
        <div className="mb-24 text-left">
          <div className="flex items-center justify-between gap-4 mb-12 border-b border-white/5 pb-4">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Active Strategic Roles
            </h3>
            <span className="font-sans text-xs text-emerald-500 bg-emerald-500/10 px-3 py-1 font-semibold flex items-center gap-1.5 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" /> Remote Openings
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            {JOB_ROLES_DATA.map((job, idx) => {
              const isExpanded = expandedRoleIdx === idx;
              return (
                <div key={job.id} className={`border transition-all duration-300 ${isExpanded ? "bg-warm-card-dark border-accent/40" : "bg-[#121110]/40 border-white/5 hover:border-white/10"}`}>
                  
                  {/* Accordion header trigger */}
                  <button
                    onClick={() => setExpandedRoleIdx(isExpanded ? null : idx)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="font-mono text-[9px] text-accent uppercase tracking-widest font-semibold block mb-1">
                        ROLE DETAILS — {job.id.toUpperCase()}
                      </span>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                        {job.title}
                      </h4>
                    </div>
                    <ChevronDown size={18} className={`text-white/40 transition-transform duration-300 ${isExpanded ? "text-accent rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-white/5"
                      >
                        <div className="p-6 sm:p-8 space-y-6">
                          <p className="font-sans text-sm text-white/70 font-light leading-relaxed max-w-2xl">
                            {job.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                            <div>
                              <h5 className="font-mono text-[9px] text-accent font-semibold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                                <Award size={12} /> Key Responsibilities
                              </h5>
                              <ul className="space-y-2">
                                {roleParameters[idx]?.responsibilities.map((resItem, resIdx) => (
                                  <li key={resIdx} className="font-sans text-xs text-white/50 font-light flex items-start gap-2 leading-relaxed">
                                    <span className="font-mono text-accent/60 mt-0.5">◆</span>
                                    <span>{resItem}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-mono text-[9px] text-accent font-semibold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                                <Briefcase size={12} /> Desired Qualifications
                              </h5>
                              <p className="font-sans text-xs text-white/50 leading-relaxed font-light mb-4">
                                {roleParameters[idx]?.requirements}
                              </p>
                              <div>
                                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest block mb-1">
                                  <InteractiveTooltip title="AUTONOMY MODEL" text="Direct execution privileges where you govern product features directly with founders, minus client proxy blockers.">
                                    AUTONOMY MODEL
                                  </InteractiveTooltip>
                                </span>
                                <p className="font-sans text-xs text-white/80 font-medium">{job.autonomyLevel}</p>
                              </div>
                            </div>
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

        {/* Careers Intake Form */}
        <div className="max-w-3xl mx-auto bg-warm-card-dark border border-white/5 p-8 sm:p-12 text-left relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-accent" />
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#171615] border border-white/10 flex items-center justify-center text-accent">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight text-white">Careers Submission Gateway</h3>
              <p className="font-sans text-xs text-white/40 mt-1">Send us your portfolio, GitHub, or cleanest project</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-sans text-xs font-semibold text-white/70 block mb-2 flex items-center gap-1.5">
                  <User size={14} className="text-white/30" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alexander Wright"
                  className="w-full bg-[#171615] border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10 rounded-none"
                />
              </div>

              <div>
                <label className="font-sans text-xs font-semibold text-white/70 block mb-2 flex items-center gap-1.5">
                  <Mail size={14} className="text-white/30" /> Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alexander@company.com"
                  className="w-full bg-[#171615] border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10 rounded-none"
                />
              </div>
            </div>

            <div>
              <label className="font-sans text-xs font-semibold text-white/70 block mb-2 flex items-center gap-1.5">
                <LinkIcon size={14} className="text-white/30" /> GitHub or Portfolio URL
              </label>
              <input
                type="url"
                required
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                placeholder="https://github.com/username"
                className="w-full bg-[#171615] border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10 rounded-none"
              />
            </div>

            <div>
              <label className="font-sans text-xs font-semibold text-white/70 block mb-2">
                Tell us about a complex technical problem you solved
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detail the stack, indexation barriers, or structural optimizations implemented..."
                className="w-full bg-[#171615] border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10 rounded-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto font-display text-xs uppercase font-extrabold tracking-widest px-8 py-4 bg-accent text-warm-dark hover:bg-transparent hover:text-accent border border-accent transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Start the Conversation <Send size={12} />
              </button>

              <span className="font-mono text-[10px] text-white/30">
                We review technical submissions within 48 hours.
              </span>
            </div>

            {success && (
              <div className="bg-accent/15 border border-accent/30 p-4 text-accent font-sans text-sm flex items-center gap-2 mt-4 animate-fade-in-up">
                <ShieldCheck size={18} />
                <span>Strategic application logged successfully. Our founding team will contact you directly via email.</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
