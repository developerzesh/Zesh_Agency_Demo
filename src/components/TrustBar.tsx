import { CLIENT_LOGOS } from "../data";

export default function TrustBar() {


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
        <div className="flex w-max animate-[marquee_35s_linear_infinite] items-center whitespace-nowrap gap-16 pr-16 hover:[animation-play-state:paused]">
          {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center select-none transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto max-w-[120px] object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe for marquee scroll */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
