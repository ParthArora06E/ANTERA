"use client";

import React from "react";
import Image from "next/image";
import { Gift, Crown, Building2, Users } from "lucide-react";

export const Catering = () => {
  const eventTypes = [
    { label: "Birthdays", icon: Gift },
    { label: "Weddings", icon: Crown },
    { label: "Corporate", icon: Building2 },
    { label: "Functions", icon: Users },
  ];

  return (
    <section id="catering" className="section-container">
      <div className="overflow-hidden rounded-[24px] bg-[var(--color-brand-navy)] border border-[var(--color-brand-gold-soft)]/20 text-white relative shadow-2xl">
        
        {/* Background Texture & Gradient */}
        <Image 
          src="https://images.pexels.com/photos/32689482/pexels-photo-32689482.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Catering Background"
          fill
          className="object-cover opacity-20 pointer-events-none mix-blend-luminosity"
        />
        {/* Elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-maroon-deep)] via-[var(--color-brand-navy)]/90 to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row p-8 md:p-12 lg:p-16 gap-10 items-center">
          
          {/* Left Content (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="inline-block border border-[var(--color-brand-gold-soft)]/50 px-3 py-1 rounded-full mb-6 w-fit bg-white/5 backdrop-blur-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-brand-gold-soft)]">
                Royal Catering
              </span>
            </div>

            <h2 className="font-serif text-[40px] md:text-[50px] font-black uppercase text-white leading-tight mb-5 drop-shadow-md">
              Catering<br />Made Easy
            </h2>
            <p className="text-[16px] text-gray-300 font-medium leading-[1.6] mb-10 max-w-md">
              For birthdays, weddings, corporate events, family gatherings and special occasions — bring royal flavours to every table.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-md">
              {eventTypes.map((type, idx) => {
                const Icon = type.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-[var(--color-brand-gold-royal)]/10 border border-[var(--color-brand-gold-soft)]/30 flex items-center justify-center mb-3">
                      <Icon className="w-[20px] h-[20px] text-[var(--color-brand-gold-soft)]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/90">{type.label}</span>
                  </div>
                );
              })}
            </div>

            <button className="btn-secondary w-fit !px-8">
              View Catering Menu
            </button>
          </div>

          {/* Right Enquiry Form (50%) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="bg-[var(--color-brand-cream-card)] rounded-[16px] p-8 md:p-10 shadow-2xl w-full max-w-[440px] border border-[var(--color-brand-gold-soft)]/40 relative text-[var(--color-brand-text-dark)]">
              
              <div className="absolute -top-5 -right-5 w-[48px] h-[48px] bg-[var(--color-brand-gold-royal)] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <Crown className="w-[22px] h-[22px] text-white" />
              </div>

              <h3 className="font-serif text-[24px] font-bold text-[var(--color-brand-maroon-royal)] mb-2">Request a Quote</h3>
              <p className="text-[13px] text-[var(--color-brand-text-muted)] mb-6">Fill in your details and we'll get back to you.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[11px] font-bold text-[var(--color-brand-text-muted)] uppercase tracking-wide mb-1.5">Event Type</label>
                  <select className="w-full h-[48px] bg-white border border-[var(--color-brand-gold-soft)]/50 rounded-[10px] px-4 text-[14px] text-[var(--color-brand-text-dark)] focus:outline-none focus:border-[var(--color-brand-maroon-royal)] transition-colors shadow-sm">
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[var(--color-brand-text-muted)] uppercase tracking-wide mb-1.5">Guests</label>
                    <input type="number" placeholder="e.g. 50" className="w-full h-[48px] bg-white border border-[var(--color-brand-gold-soft)]/50 rounded-[10px] px-4 text-[14px] text-[var(--color-brand-text-dark)] focus:outline-none focus:border-[var(--color-brand-maroon-royal)] transition-colors shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[var(--color-brand-text-muted)] uppercase tracking-wide mb-1.5">Date</label>
                    <input type="date" className="w-full h-[48px] bg-white border border-[var(--color-brand-gold-soft)]/50 rounded-[10px] px-4 text-[14px] text-[var(--color-brand-text-dark)] focus:outline-none focus:border-[var(--color-brand-maroon-royal)] transition-colors shadow-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[var(--color-brand-text-muted)] uppercase tracking-wide mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="Your contact number" className="w-full h-[48px] bg-white border border-[var(--color-brand-gold-soft)]/50 rounded-[10px] px-4 text-[14px] text-[var(--color-brand-text-dark)] focus:outline-none focus:border-[var(--color-brand-maroon-royal)] transition-colors shadow-sm" />
                </div>

                <button className="btn-primary w-full !mt-6 !h-[50px]">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
