import React from "react";
import { UserPlus, ExternalLink } from "lucide-react";

export function AccountOpenButton() {
  return (
    <a
      href="http://p.njw.bz/32156"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Account Open"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-2.5 sm:px-3 py-3.5 sm:py-4 rounded-l-2xl shadow-xl hover:shadow-2xl transition-all duration-200 border-y border-l border-white/20 hover:-translate-x-1 cursor-pointer select-none"
      style={{
        writingMode: "vertical-rl",
        transform: "translateY(-50%) rotate(180deg)",
      }}
    >
      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase">
        <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse shrink-0" />
        <span>Account Open</span>
        <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity -rotate-90 shrink-0" />
      </div>
    </a>
  );
}
