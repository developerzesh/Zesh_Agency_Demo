import React from "react";
import { ViewType } from "../types";
import { CornerDownRight, Terminal } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  view?: ViewType;
  id?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  setViewValue: (view: ViewType) => void;
  setSelectedId?: (id: string | null) => void;
  systemCode?: string;
}

export default function Breadcrumbs({
  items,
  setViewValue,
  setSelectedId,
  systemCode = "SYSTEM_OK"
}: BreadcrumbsProps) {
  
  const handleItemClick = (item: BreadcrumbItem) => {
    if (item.view) {
      if (setSelectedId) {
        setSelectedId(item.id || null);
      }
      setViewValue(item.view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8 py-2">
      {/* Dynamic breadcrumb nodes */}
      <div className="flex items-center flex-wrap gap-2 text-left">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/30 hidden sm:block" />
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="font-mono text-[9px] text-accent/50 select-none">◆</span>
              )}
              
              {item.view && !isLast ? (
                <button
                  onClick={() => handleItemClick(item)}
                  className="font-mono text-[10px] text-white/50 hover:text-accent uppercase tracking-widest transition-colors font-medium border-b border-transparent hover:border-accent/40 cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <span className="font-mono text-[10px] text-white/90 uppercase tracking-widest font-semibold flex items-center gap-1">
                  {isLast && <CornerDownRight size={10} className="text-accent/60" />}
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Cybernetic telemetry node on the right for exceptional design signature */}
      <div className="hidden lg:flex items-center gap-2 font-mono text-[9px] text-white/30 border border-white/15 px-3 py-1 flex-shrink-0">
        <Terminal size={11} className="text-accent animate-pulse" />
        <span className="tracking-wider uppercase">SECURE_NODE</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="text-emerald-500 font-semibold">{systemCode}</span>
      </div>
    </div>
  );
}
