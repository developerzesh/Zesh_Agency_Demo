import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ViewType } from "../types";
import { CLIENT_LOGOS } from "../data";
import { Flame, Zap, ArrowUpRight, Radio, Sparkles, TrendingUp, Sliders } from "lucide-react";

interface HeroProps {
  setView: (view: ViewType) => void;
}

export default function Hero({ setView }: HeroProps) {
  const [boostPercent, setBoostPercent] = useState(83);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });



  // Soft slow swell of the metrics to simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBoostPercent((prev) => {
        const offset = Math.floor(Math.random() * 3) - 1;
        const next = prev + offset;
        return next > 95 ? 90 : next < 80 ? 83 : next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-13 pb-6 px-4 sm:px-8 md:px-12 border-b border-white/5 transition-all duration-1000 select-text"
      style={{
        background: "radial-gradient(circle at 80% 30%, #4a0104 0%, #1a0002 45%, #0a0001 80%, #050000 100%)"
      }}
    >
      {/* GLOWING HOT SPOTLIGHTS: Capturing the supreme warm-red lighting from the reference mockup */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      <div
        className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none mix-blend-screen transition-all duration-300 opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(255,100,50,0.3) 0%, rgba(220,10,30,0.15) 50%, rgba(0,0,0,0) 100%)",
          transform: `translate(${mousePos.x * 0.04}px, ${mousePos.y * 0.04}px)`
        }}
      />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#ff3a45]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Decorative vector grid lines running gently behind */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none"
        style={{ maskImage: "radial-gradient(circle at 75% 40%, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at 75% 40%, black, transparent 80%)" }}
      />

      {/* INTEGRATED MAJESTIC BACKGROUND GRAPHIC: Hand supporting the rising white-hot curve, unified fluidly behind the copy */}
      <div className="absolute inset-x-0 inset-y-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 1000 700"
          className="absolute right-0 bottom-0 w-full h-full min-w-[1024px] opacity-90 transition-all duration-1000"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            {/* Blurs and shadows representing physical light depth */}
            <filter id="handShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="18" />
              <feOffset dx="-8" dy="12" />
              <feComponentTransfer><feFuncA type="linear" slope="0.6" /></feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="heavyGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="22" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur1" />
              <feGaussianBlur stdDeviation="3" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glowing yellow metal gradients */}
            <linearGradient id="neonGradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#4e0205" />
              <stop offset="30%" stopColor="#ff111e" />
              <stop offset="75%" stopColor="#ffb915" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            <linearGradient id="handMesh" x1="0" y1="1" x2="0.6" y2="0">
              <stop offset="0%" stopColor="#080001" />
              <stop offset="40%" stopColor="#250103" />
              <stop offset="70%" stopColor="#81020b" />
              <stop offset="100%" stopColor="#e30c1a" />
            </linearGradient>

            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff1c2a" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#ffb915" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ff111e" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* BACKGROUND CHARTS BAR COLUMNS - Stylized exactly like the columns in the feedback photo */}
          <g className="opacity-30 lg:opacity-50">
            {/* Column 1 */}
            <rect
              x="620"
              y="280"
              width="28"
              height="220"
              rx="4"
              fill="url(#barGradient)"
            />
            {/* Column 2 */}
            <rect
              x="680"
              y="220"
              width="28"
              height="280"
              rx="4"
              fill="url(#barGradient)"
            />
            {/* Column 3 */}
            <rect
              x="740"
              y="150"
              width="28"
              height="350"
              rx="4"
              fill="url(#barGradient)"
            />
            {/* Column 4 - Strongest, highest-converting volume anchor */}
            <rect
              x="800"
              y="60"
              width="28"
              height="440"
              rx="4"
              fill="url(#barGradient)"
              stroke="rgba(255, 185, 21, 0.25)"
              strokeWidth="1.5"
            />
          </g>

          {/* SCULPTED HAND VISUAL - Recreating the hand silhouette holding the arrow */}
          <g filter="url(#handShadow)">
            {/* Physical hand contour representation */}
            <path
              d="M 200,580 
                 C 290,560 360,460 430,420 
                 C 500,380 560,375 620,385 
                 C 675,395 720,385 750,360 
                 C 780,335 790,300 793,265 
                 C 795,240 778,228 758,238 
                 C 720,246 680,275 635,310 
                 C 590,345 530,385 470,420 
                 C 400,462 315,490 220,535 Z"
              fill="url(#handMesh)"
              opacity="0.95"
            />

            {/* Hand highlights reflecting the hot yellow neon curve */}
            <path
              d="M 430,420 
                 C 500,380 560,375 620,385 
                 C 675,395 720,385 750,360 
                 C 780,335 790,300 793,265"
              fill="none"
              stroke="#ffea5a"
              strokeWidth="3"
              opacity="0.9"
              filter="url(#laserGlow)"
            />

            {/* Joint structure mapping to replicate supportive architectural grid lines */}
            <g opacity="0.35">
              <line x1="510" y1="400" x2="570" y2="360" stroke="#ff111e" strokeWidth="1.5" />
              <line x1="570" y1="385" x2="630" y2="340" stroke="#ffea5a" strokeWidth="2" />
              <line x1="630" y1="392" x2="690" y2="335" stroke="#ffea5a" strokeWidth="1.5" />

              <circle cx="570" cy="360" r="4" fill="#ffea5a" />
              <circle cx="630" cy="340" r="4.5" fill="#ffffff" />
              <circle cx="690" cy="335" r="4" fill="#ff111e" />
            </g>
          </g>

          {/* SWEEPING NEON RISING ARROW - Sourced beautifully from reference graphic */}
          <g>
            {/* Dynamic underlying heat bloom path */}
            <path
              d="M 200,520 Q 370,400 500,410 C 610,420 720,360 820,140"
              fill="none"
              stroke="#ff111e"
              strokeWidth="22"
              opacity="0.35"
              filter="url(#heavyGlow)"
            />

            {/* Intermediate vibrant core glow path */}
            <path
              d="M 200,520 Q 370,400 500,410 C 610,420 720,360 820,140"
              fill="none"
              stroke="url(#neonGradient)"
              strokeWidth="10"
              opacity="0.9"
              filter="url(#laserGlow)"
            />

            {/* White-Hot Core Laser Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              d="M 200,520 Q 370,400 500,410 C 610,420 720,360 820,140"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Hot Yellow Arrowhead Pointer exactly indicating the rise */}
            <g transform="translate(820, 140)">
              <motion.path
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                d="M -35,5 L 5,-5 L -5,-35"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#laserGlow)"
              />
              {/* Central high-voltage spot indicator */}
              <circle cx="0" cy="0" r="16" fill="none" stroke="#ffea5a" strokeWidth="1.5" className="animate-ping opacity-60" style={{ transformOrigin: "0px 0px" }} />
              <circle cx="0" cy="0" r="8" fill="#ffffff" />
            </g>
          </g>

          {/* Sparks/Leads indicator particles floating off the peak */}
          <g className="opacity-80">
            <circle cx="790" cy="90" r="2.5" fill="#ffffff" className="animate-pulse" />
            <circle cx="850" cy="170" r="3.5" fill="#ffea5a" className="animate-ping" style={{ animationDuration: "3s" }} />
            <circle cx="750" cy="190" r="2" fill="#ffea5a" />
            <circle cx="830" cy="80" r="3" fill="#ffffff" className="animate-pulse" />
          </g>
        </svg>

        {/* Unified Soft Overlay gradient to melt the background grid and graphic into the general copy flow */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050000] via-[#050000]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#050000] to-transparent pointer-events-none hidden lg:block" />
      </div>

      {/* FLUID INTERACTIVE HERO TEXT CONTENT: Perfectly overlaying the artwork in a cohesive, unified fluid layout */}
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center relative z-10 py-8 md:py-12 select-text">
        <div className="max-w-4xl flex flex-col items-start text-left space-y-3 lg:space-y-4">
          {/* Badge Cluster */}
          <div className="flex flex-wrap gap-2.5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-none backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/80 font-semibold">
                Awarded 30 under 30 for Innovative Marketing
              </span>
            </motion.div>
          </div>

          {/* MAIN HEADING - Structured pairing solid white text with a glowing gold-crimson gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold text-white leading-[1.02] tracking-tight text-left max-w-3xl"
          >
            Empowering brands with{" "}
            <span
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-300 to-[#ff4b3c]"
              style={{ filter: "drop-shadow(0 0 25px rgba(255, 28, 42, 0.35))" }}
            >
              search systems
            </span>{" "}
            and{" "}
            <span
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b3c] via-orange-400 to-white"
              style={{ filter: "drop-shadow(0 0 25px rgba(255, 28, 42, 0.35))" }}
            >
              generative discovery
            </span>
            .
          </motion.h1>

          {/* CONSULTANCY DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl text-left backdrop-blur-xs"
          >
            We are a strategic growth consultancy. We scale brands through high-converting web engineering, search optimization, and AI platform discovery (AEO & GEO). Clean, predictive pipeline growth without vanity benchmarks.
          </motion.p>

          {/* CALL TO ACTION BUTTONS WITH RED/ORANGE NEON GLOW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20"
          >
            <button
              onClick={() => {
                setView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group font-display text-[11px] uppercase tracking-widest px-10 py-5 bg-[#ff1c2a] text-white hover:bg-white hover:text-black border border-[#ff1c2a] hover:border-white font-black transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(255,28,42,0.45)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
            >
              <span>Book discovery</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={() => {
                setView("insights");
                setTimeout(() => {
                  const el = document.getElementById("case-studies-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="font-display text-[11px] uppercase tracking-widest px-10 py-5 border border-white/20 text-white font-black hover:border-[#ff1c2a] hover:text-[#ff1c2a] transition-all duration-300 text-center cursor-pointer bg-white/5 backdrop-blur-sm hover:bg-white/10"
            >
              View Cases
            </button>
          </motion.div>

          {/* Dynamic Trust Telemetry Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6 w-full max-w-xl font-sans text-xs text-white/60"
          >
            <span className="font-light">Trusted by high-stakes brands driving massive pipeline scale.</span>
          </motion.div>

        </div>
      </div>

      {/* TRUST LOGOS MARQUEE - Re-integrated directly into Hero */}
      <div className="w-full pt-6 border-t border-white/5 z-20">
        <div className="relative w-full overflow-hidden flex items-center py-8 bg-black/20 backdrop-blur-xs">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050000] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050000] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee items-center whitespace-nowrap gap-16 pr-16 hover:[animation-play-state:paused]">
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex items-center justify-center select-none px-6"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 sm:h-12 w-auto max-w-[180px] object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
