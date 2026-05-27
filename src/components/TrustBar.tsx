import { motion } from "motion/react";

export default function TrustBar() {
  const logos = [
    "TarsCase",
    "MineWork",
    "OPJE Studio",
    "OLD YO Co",
    "Hamilton Tech",
    "Ther Digital",
    "Clinique Healthcare",
    "ContentStack Systems",
    "NextRound Advisory",
    "Psyche Medicine",
  ];

  return (
    <section className="bg-warm-dark py-12 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="font-sans text-xs text-white/40 tracking-wider inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/45 animate-pulse" />
          Retained by leading brands. Almost all of our clients come via referrals and word of mouth.
        </p>
      </div>

      {/* Marquee viewport container with edge masks */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right edge linear gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-dark to-transparent z-10 pointer-events-none" />

        {/* Rolling Container */}
        <div className="flex w-max animate-[marquee_35s_linear_infinite] whitespace-nowrap gap-16 pr-16 hover:[animation-play-state:paused]">
          {/* First loop iterations */}
          {logos.concat(logos).map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex items-center justify-center font-display text-base tracking-widest text-white/30 uppercase font-semibold transition-colors duration-300 hover:text-accent/60 select-none"
            >
              <span className="text-white/10 mr-3 font-mono text-xs">◆</span>
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tail Wind CSS styled keyframe for marquee scroll */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
