import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Users2, Landmark, Hourglass, HelpCircle } from "lucide-react";
import InteractiveTooltip from "./InteractiveTooltip";
import Breadcrumbs from "./Breadcrumbs";
import { ViewType } from "../types";

export default function About() {
  const principles = [
    {
      title: "Direct Communication",
      copy: "We do not use corporate euphemisms or hide behind marketing fluff. We tell you exactly what is failing, why it’s failing, and how we are correcting it.",
      icon: MessageSquare,
    },
    {
      title: "Senior Execution Only",
      copy: "Your systems are designed, coded, and optimized under direct founder oversight. Our founders personally strategize and supervise every step to ensure absolute alignment.",
      icon: Users2,
    },
    {
      title: "Revenue Alignment",
      copy: "Pageviews mean nothing if your sales demo pipeline is empty. Every keyword we target and page we build is chosen because it connects to an active buyer.",
      icon: Landmark,
    },
    {
      title: "Operational Respect",
      copy: "We believe great work happens when talented operators are given the quiet focus to solve complex problems. We meet weekly, execute quickly, and respect your team’s focus.",
      icon: Hourglass,
    },
  ];

  const breadcrumbItems = [
    { label: "Home", view: "home" as ViewType },
    { label: "About Us", view: "about" as ViewType },
    { label: "Ethos & Principles", view: "about" as ViewType }
  ];

  return (
    <section className="bg-warm-dark text-white py-24 sm:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb path */}
        <Breadcrumbs
          items={breadcrumbItems}
          setViewValue={() => {}}
          systemCode="ABOUT_PROTOCOL_OK"
        />

        {/* About Hero headline */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-mono text-[10px] text-accent/80 uppercase tracking-widest font-semibold animate-pulse">
              OUR ETHOS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Built to focus purely on outcomes.
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/65 font-light leading-relaxed">
            We built this agency to focus purely on outcomes. Our mission is to align strategic growth planning with high-converting execution, replacing speculation with performance.
          </p>
        </div>

        {/* Founder's Narrative styled letter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-y border-white/5 py-16 mb-24 text-left">
          <div className="lg:col-span-4">
            <span className="font-mono text-accent text-xs block mb-4 uppercase tracking-widest font-semibold">THE FOUNDER STATEMENT</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">Why we built this strategic growth consultancy.</h3>
          </div>
          
          <div className="lg:col-span-8 space-y-6">
            <blockquote className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed border-l-2 border-accent/70 pl-6 italic">
              "Every week, we speak with operators who are looking for strategic clarity. They want growth systems that connect directly to their bottom line without administrative bottlenecks or delayed updates.
              <br /><br />
              We started this consultancy with a single mandate: to build the strategic partner we would want to hire. A lean, highly technical team of operators who work directly on your codebase to optimize{" "}
              <InteractiveTooltip title="CORE WEB VITALS" text="Core Web Vitals — speed, load time, and visual stability metrics used by search bots to grade design quality.">
                Core Web Vitals
              </InteractiveTooltip>
              , design custom database funnels, and declare your private{" "}
              <InteractiveTooltip title="ENTITY MAPS" text="JSON-LD schema nodes linking your brand name, address, and products to global citation databases.">
                entity maps
              </InteractiveTooltip>.
              <br /><br />
              We don't employ account executives or sales reps. When you partner with us, you work directly with senior engineers and strategists building your growth engines. If something isn't working, we are honest about it."
            </blockquote>
            <p className="font-mono text-xs text-accent uppercase tracking-widest pt-4">— The Founding Team</p>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="mb-24 text-left">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-16">
            Core Principles of Collaboration
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((pr) => {
              const IconComp = pr.icon;
              return (
                <div key={pr.title} className="bg-warm-card-dark border border-white/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-6">
                      <IconComp className="w-4.5 h-4.5 text-accent" />
                    </div>
                    <h4 className="font-display text-base font-bold text-white mb-3">
                      {pr.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/55 font-light leading-relaxed">
                      {pr.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Retention Signal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-warm-card-dark/40 border border-white/5 p-8 sm:p-12 text-left mb-24">
          <div>
            <span className="font-mono text-accent text-xs block mb-3 uppercase tracking-widest font-semibold">PARTNERSHIP COMPOUNDING</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Long-term partners, not locked-in clients.</h3>
          </div>
          <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed self-center">
            We are incredibly grateful that nearly all of our partners join us through direct recommendations and word of mouth. Our longest relationships span up to 8 years, growing together as our systems compound their digital presence.
          </p>
        </div>

        {/* Team Philosophy section */}
        <div className="border-t border-white/5 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          <div className="lg:col-span-4">
            <span className="font-mono text-accent text-xs block mb-3 uppercase tracking-widest font-semibold animate-pulse">THE OPERATORS</span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">The heroes who make everything possible.</h3>
          </div>
          
          <div className="lg:col-span-8">
            <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed mb-6">
              We believe exceptional systems are built by operators who have the quiet focus to think clearly. We don't just hire specialists; we partner with the absolute best in their fields. These are the developers, search architects, and data strategists who work behind the scenes every day to design and code the growth systems that compound our partners' revenue.
            </p>
            <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed mb-6">
              They are our heroes—the ones who make our clients' success possible through their relentless dedication, high-performance code, and strategic brilliance. We don't have account managers or layers of administration to slow down execution. Every partner you collaborate with is directly responsible for engineering your growth pathways, bringing senior expertise to your everyday strategy.
            </p>
            <p className="font-sans text-sm sm:text-base text-white/60 font-light leading-relaxed">
              We are incredibly grateful to work alongside them, and we know that every milestone we achieve is built entirely on their expertise.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
