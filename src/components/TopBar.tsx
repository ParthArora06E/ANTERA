import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-[var(--color-brand-maroon-deep)] text-[var(--color-brand-cream-bg)] hidden lg:flex items-center h-[38px] border-b border-white/10 shadow-sm">
      <div className="max-w-[1240px] w-full mx-auto px-5 md:px-8 flex justify-between items-center text-[11px] font-bold tracking-widest uppercase">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-[var(--color-brand-gold-soft)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Royal Hyderabadi Flavours
          </span>
          <span className="text-white/30">•</span>
          <span className="opacity-90">Pickup & Catering Available</span>
        </div>
        <div className="flex items-center gap-8 text-white/90">
          <span className="flex items-center gap-2 hover:text-[var(--color-brand-gold-soft)] transition-colors cursor-pointer">
            <MapPin className="w-3.5 h-3.5" /> 63 Marion St, Harris Park
          </span>
          <span className="flex items-center gap-2 hover:text-[var(--color-brand-gold-soft)] transition-colors cursor-pointer">
            <Phone className="w-3.5 h-3.5" /> 0450 994 196
          </span>
        </div>
      </div>
    </div>
  );
};
