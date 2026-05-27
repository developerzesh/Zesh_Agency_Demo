import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle } from "lucide-react";

interface InteractiveTooltipProps {
  text: string;
  children: React.ReactNode;
  title?: string;
}

export default function InteractiveTooltip({ text, children, title }: InteractiveTooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span 
      className="relative inline-flex items-center gap-0.5 group cursor-help border-b border-dashed border-accent/60 hover:text-accent transition-colors"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(!visible)}
    >
      {children}
      <HelpCircle size={10} className="text-accent/60 opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <AnimatePresence>
        {visible && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-68 bg-[#151413] border border-accent/30 p-3.5 shadow-2xl z-50 text-left pointer-events-none rounded-none"
            style={{ width: "260px" }}
          >
            {title && (
              <span className="font-mono text-[9px] text-accent uppercase tracking-widest block mb-1 font-bold">
                {title}
              </span>
            )}
            <span className="font-sans text-[11px] text-white/90 leading-relaxed font-light block whitespace-normal">
              {text}
            </span>
            {/* Tooltip little arrow tail */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#151413] border-r border-b border-accent/30 rotate-45 -mt-[4px]" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
