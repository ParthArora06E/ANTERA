import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Globe, Share2, Sparkles, ChevronRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-[var(--color-brand-text-dark)] pt-[80px] pb-[40px] border-t border-[var(--color-brand-maroon-royal)]/20 relative overflow-hidden">
      
      {/* Subtle background pattern matching globals */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")' }}></div>

      <div className="section-container relative z-10 !py-0">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="lg:pr-8">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-[48px] h-[48px] rounded-full border border-[var(--color-brand-maroon-royal)]/30 flex flex-col items-center justify-center bg-[var(--color-brand-cream-card)] text-[var(--color-brand-maroon-deep)] shadow-sm">
                <span className="font-serif font-black text-[10px] leading-none mt-1">ANTERA</span>
                <span className="text-[5px] text-[var(--color-brand-gold-royal)] uppercase tracking-[0.2em] leading-none mt-0.5">BIRYANI CO.</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-serif text-[22px] font-black text-[var(--color-brand-maroon-deep)] tracking-wide leading-none">
                  ANTERA
                </h1>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-brand-gold-royal)] mt-1">BIRYANI CO.</span>
              </div>
            </Link>
            <p className="text-[14px] text-[var(--color-brand-text-muted)] leading-[1.6] mb-8 font-medium pr-4">
              Authentic flavours. Royal recipes. Made with love. Served with pride.
            </p>
            <div className="flex gap-4 text-[var(--color-brand-maroon-royal)]">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-cream-bg)] border border-[var(--color-brand-gold-soft)]/40 flex items-center justify-center hover:bg-[var(--color-brand-maroon-deep)] hover:text-white transition-all hover:scale-110 shadow-sm"><Globe className="w-[18px] h-[18px]" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-cream-bg)] border border-[var(--color-brand-gold-soft)]/40 flex items-center justify-center hover:bg-[var(--color-brand-maroon-deep)] hover:text-white transition-all hover:scale-110 shadow-sm"><Share2 className="w-[18px] h-[18px]" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-cream-bg)] border border-[var(--color-brand-gold-soft)]/40 flex items-center justify-center hover:bg-[var(--color-brand-maroon-deep)] hover:text-white transition-all hover:scale-110 shadow-sm"><Sparkles className="w-[18px] h-[18px]" /></a>
            </div>
          </div>

          {/* Visit Us Column */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[var(--color-brand-maroon-deep)] mb-6">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-[var(--color-brand-gold-royal)] flex-shrink-0 mt-0.5" />
                <p className="text-[14px] text-[var(--color-brand-text-muted)] leading-relaxed">63 Marion St,<br />Harris Park NSW 2150</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-[18px] h-[18px] text-[var(--color-brand-gold-royal)] flex-shrink-0" />
                <p className="text-[14px] text-[var(--color-brand-text-muted)]">0450 994 196</p>
              </div>
              <div className="flex items-start gap-3 mt-6">
                <Clock className="w-[18px] h-[18px] text-[var(--color-brand-gold-royal)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] text-[var(--color-brand-text-muted)] mb-1">Mon – Sun</p>
                  <p className="text-[14px] font-bold text-[var(--color-brand-text-dark)]">11:00 AM – 11:00 PM</p>
                  <p className="text-[11px] text-[var(--color-brand-maroon-deep)] uppercase tracking-[0.1em] mt-1 font-bold">Open 7 Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[var(--color-brand-maroon-deep)] mb-6">Menu</h3>
            <ul className="space-y-3">
              {["Dum Biryanis", "Bucket Biryanis", "Hot Snacks", "Combos", "Desserts & Drinks", "Catering"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="group flex items-center gap-2 text-[14px] text-[var(--color-brand-text-muted)] hover:text-[var(--color-brand-maroon-royal)] transition-colors">
                    <ChevronRight className="w-4 h-4 text-[var(--color-brand-gold-royal)] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Your Way Column */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[var(--color-brand-maroon-deep)] mb-6">Order Your Way</h3>
            <ul className="space-y-4 mb-8">
              {["Pickup from Store", "Home Delivery", "Event Catering"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="flex items-center gap-3 text-[14px] font-medium text-[var(--color-brand-text-muted)] hover:text-[var(--color-brand-maroon-royal)] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold-royal)]"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full shadow-lg shadow-[var(--color-brand-maroon-deep)]/20">
              Order Online
            </button>
          </div>

        </div>

        <div className="border-t border-[var(--color-brand-maroon-royal)]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[var(--color-brand-text-muted)] font-medium tracking-wide">
            © 2026 Antera Biryani Co. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-[var(--color-brand-text-muted)] font-medium">
            <a href="#" className="hover:text-[var(--color-brand-maroon-royal)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-brand-maroon-royal)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
