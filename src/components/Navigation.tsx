import { useState, useEffect } from "react";
import { ViewType } from "../types";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  onNavigateDetail?: (id: string, type: "solution" | "industry") => void;
}

export default function Navigation({ currentView, setView }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", view: "home" as ViewType },
    { label: "About", view: "about" as ViewType },
    { label: "Solutions", view: "solutions" as ViewType },
    { label: "Industries", view: "industries" as ViewType },
    { label: "Advisory & Cases", view: "insights" as ViewType },
    { label: "Careers", view: "careers" as ViewType },
  ];

  const handleLinkClick = (view: ViewType) => {
    setView(view);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled
            ? "py-4 bg-[#0b0a09]/85 backdrop-blur-xl border-b border-white/5"
            : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo on far left */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center focus:outline-none"
            aria-label="Zesh Agency Home"
          >
            <img
              src="/site_logo.png"
              alt="Zesh Agency"
              className="h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-200"
            />
          </button>

          {/* Centered navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.view)}
                  className={`font-sans text-sm tracking-wide transition-all relative py-1 hover:text-white ${isActive ? "text-accent font-medium" : "text-white/60"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Far right primary CTA button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleLinkClick("contact")}
              className={`cta-primary font-display text-xs uppercase tracking-wider px-5 py-2.5 rounded-none border border-accent bg-accent text-warm-dark font-semibold hover:bg-transparent hover:text-accent transition-all duration-300`}
            >
              Book a Discovery Call
            </button>
          </div>

          {/* Mobile hamburger icon */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/80 p-1"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav drawer overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#0b0a09]/98 flex flex-col justify-center items-center px-8 transition-all">
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.view)}
                  className={`font-display text-2xl tracking-wide transition-all ${isActive ? "text-accent font-semibold" : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleLinkClick("contact")}
              className="mt-6 font-display text-sm uppercase tracking-wider py-3 px-6 bg-accent text-warm-dark font-bold hover:bg-transparent hover:text-accent border border-accent transition-all duration-300"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      )}
    </>
  );
}
