import React, { useState } from "react";
import { CheckCheck, Send, ShieldCheck, Mail, Globe, User, BookOpen } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [challenge, setChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !website || !challenge) return;
    
    // Smooth local submission validation
    setSubmitted(true);
    setName("");
    setEmail("");
    setWebsite("");
    setChallenge("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="conversational-form-section" className="bg-warm-dark py-24 sm:py-32 text-white px-6 relative overflow-hidden">
      {/* Background soft glow accent */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Contact Intro Copy column */}
        <div className="lg:col-span-5 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-[1px] bg-accent" />
            <span className="font-mono text-[10px] text-accent/80 uppercase tracking-widest font-semibold animate-pulse">
              DISCOVERY
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Let's build a predictable revenue engine.
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-lg">
            We respect your time. No generic sales pitches or follow-up call sequences. You will speak directly with our founders to analyze your organic search pipeline and conversion roadblocks.
          </p>

          <div className="mt-12 space-y-6 max-w-sm hidden lg:block">
            <div className="flex items-center gap-3 text-xs text-white/40">
              <div className="w-6 h-6 border border-white/10 flex items-center justify-center font-mono">1</div>
              <span>Submit your operational bottlenecks & credentials</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-white/40">
              <div className="w-6 h-6 border border-white/10 flex items-center justify-center font-mono">2</div>
              <span>Receive a customized performance index audit</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-white/40">
              <div className="w-6 h-6 border border-white/10 flex items-center justify-center font-mono">3</div>
              <span>Meet directly with our founders for strategy</span>
            </div>
          </div>
        </div>

        {/* Conversational form block */}
        <div className="lg:col-span-7 bg-warm-card-dark border border-white/5 p-8 sm:p-12 text-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
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
                className="w-full bg-[#171615] border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10"
              />
            </div>

            {/* Email */}
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
                className="w-full bg-[#171615] border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10"
              />
              <span className="font-mono text-[9px] text-white/30 italic mt-1.5 block">
                *The inbox you actually check.
              </span>
            </div>

            {/* Website URL */}
            <div>
              <label className="font-sans text-xs font-semibold text-white/70 block mb-2 flex items-center gap-1.5">
                <Globe size={14} className="text-white/30" /> Company Website URL
              </label>
              <input
                type="url"
                required
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://company.com"
                className="w-full bg-[#171615] border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10"
              />
            </div>

            {/* Challenge prompt text area */}
            <div>
              <label className="font-sans text-xs font-semibold text-white/70 block mb-2 flex items-center gap-1.5">
                <BookOpen size={14} className="text-white/30" /> What is not working right now?
              </label>
              <textarea
                required
                rows={4}
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                placeholder="Tell us about your product, organic search visibility gaps, or current pipeline challenges..."
                className="w-full bg-[#171615] border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10"
              />
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto font-display text-xs uppercase font-extrabold tracking-widest px-8 py-4 bg-accent text-warm-dark hover:bg-transparent hover:text-accent border border-accent transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Request Discovery Call <Send size={12} />
              </button>

              <span className="font-mono text-[9px] text-white/30">
                We respond within 12 business hours. Safe, secure, confidential.
              </span>
            </div>

            {/* Success Prompt dialog inline */}
            {submitted && (
              <div className="bg-accent/10 border border-accent/30 p-4 text-accent font-sans text-sm flex items-center gap-2 mt-4 animate-fade-in-up">
                <ShieldCheck size={18} />
                <span>Discovery meeting parameters submitted successfully. Our founding general partners will reach out to analyze your portfolio index within 12 business hours.</span>
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
