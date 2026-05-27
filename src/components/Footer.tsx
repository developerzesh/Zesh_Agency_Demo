import { ViewType } from "../types";
import { ArrowUp, CornerDownRight, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

interface FooterProps {
  setView: (view: ViewType) => void;
  setSelectedDetailId: (id: string | null) => void;
}

export default function Footer({ setView, setSelectedDetailId }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (view: ViewType, hash?: string) => {
    setSelectedDetailId(null);
    setView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const capabilities = [
    { label: "Search Engine Optimization (SEO)", id: "seo" },
    { label: "Answer & Generative Engine Optimization", id: "aeo" },
    { label: "Growth Engineering and Web Development", id: "web-dev" },
    { label: "Lead Generation Systems", id: "lead-generation" },
  ];

  const consultancy = [
    { label: "Why Partner With Us", view: "about" as ViewType },
    { label: "Our Framework", view: "home" as ViewType },
    { label: "Featured Cases", view: "insights" as ViewType, hash: "case-studies-section" },
    { label: "Insights & Advisory", view: "insights" as ViewType },
  ];

  const legal = [
    { label: "Privacy Policy" },
    { label: "Terms of Engagement" },
    { label: "Client Portal Access" },
  ];

  return (
    <footer className="relative bg-[#060505] text-white border-t border-white/5 pt-20 pb-12 overflow-hidden">
      
      {/* GLOBAL BOTTOM CTA SECTION (Section 11 Copy) */}
      <div className="max-w-7xl mx-auto px-6 mb-24 border-b border-white/5 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 text-left">
            <span className="font-mono text-accent text-[10px] block mb-3 uppercase tracking-widest font-semibold">ACQUISITION</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Making marketing work for businesses.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-xl">
              We analyze your website metrics, inspect competitor search campaigns, and map out custom acquisition strategies from day one.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={() => handleNavClick("contact")}
              className="cta-primary btn-gold font-display text-xs uppercase tracking-widest px-8 py-4 bg-accent text-warm-dark font-extrabold hover:bg-transparent hover:text-accent border border-accent transition-all duration-300 shadow-lg text-center cursor-pointer"
            >
              Book a Discovery Call
            </button>
            <button
              onClick={() => handleNavClick("insights", "case-studies-section")}
              className="font-display text-xs uppercase tracking-widest px-8 py-4 border border-white/20 text-white font-extrabold hover:border-accent hover:text-accent transition-all duration-300 text-center cursor-pointer"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* METADATA DIRECTORIES & LOGO SPAN */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 text-left mb-16">
        
        {/* Brand layout left */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <span className="font-display text-4xl font-black text-white tracking-widest block mb-4">ZESH.</span>
            <p className="font-sans text-xs text-white/40 leading-relaxed max-w-xs font-light">
              Partnering with ambitious brands to engineer high-converting growth systems.
            </p>
          </div>
          
          {/* Social icons */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="p-2 border border-white/5 hover:border-accent text-white/40 hover:text-accent transition-all duration-200">
              <Twitter size={14} />
            </a>
            <a href="#" className="p-2 border border-white/5 hover:border-accent text-white/40 hover:text-accent transition-all duration-200">
              <Linkedin size={14} />
            </a>
            <a href="#" className="p-2 border border-white/5 hover:border-accent text-white/40 hover:text-accent transition-all duration-200">
              <Github size={14} />
            </a>
            <a href="#" className="p-2 border border-white/5 hover:border-accent text-white/40 hover:text-accent transition-all duration-200">
              <Instagram size={14} />
            </a>
          </div>
        </div>

        {/* Directory links */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Capabilities */}
          <div>
            <h4 className="font-mono text-[10px] text-accent font-semibold uppercase tracking-widest mb-6">Capabilities</h4>
            <ul className="space-y-3">
              {capabilities.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setSelectedDetailId(c.id);
                      setView("solution-detail");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="font-sans text-xs text-white/50 hover:text-accent transition-colors flex items-start gap-1.5 text-left cursor-pointer"
                  >
                    <CornerDownRight size={10} className="mt-1" /> {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultancy */}
          <div>
            <h4 className="font-mono text-[10px] text-accent font-semibold uppercase tracking-widest mb-6 font-semibold">Consultancy</h4>
            <ul className="space-y-3">
              {consultancy.map((con) => (
                <li key={con.label}>
                  <button
                    onClick={() => handleNavClick(con.view, con.hash)}
                    className="font-sans text-xs text-white/50 hover:text-accent transition-colors flex items-start gap-1.5 text-left cursor-pointer"
                  >
                    <CornerDownRight size={10} className="mt-1" /> {con.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Admin */}
          <div>
            <h4 className="font-mono text-[10px] text-accent font-semibold uppercase tracking-widest mb-6">Legal & Admin</h4>
            <ul className="space-y-3">
              {legal.map((leg) => (
                <li key={leg.label}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="font-sans text-xs text-white/50 hover:text-accent transition-colors flex items-start gap-1.5 text-left"
                  >
                    <CornerDownRight size={10} className="mt-1" /> {leg.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM METADATA copyright bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-left">
        <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
          &copy; 2026 Zesh Agency LLC. All rights reserved.
        </span>
        <span className="font-sans text-[9px] text-white/30 mt-2 sm:mt-0 font-light">
          Designed with extreme visual discipline. Standard full stack environment.
        </span>
      </div>

      {/* FIXED CIRCULAR BACK TO TOP TRIGGER */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#121110] border border-white/10 hover:border-accent text-white hover:text-accent flex items-center justify-center transition-all duration-300 hover:scale-115 active:scale-95 shadow-lg"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} />
        </button>
      )}

    </footer>
  );
}
