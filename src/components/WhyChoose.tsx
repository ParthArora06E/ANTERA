"use client";

import React from "react";
import { Clock, ShieldCheck, Users, MousePointerClick } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { FadeIn } from "./ui/FadeIn";

export const WhyChoose = () => {
  const reasons = [
    {
      title: "Authentic Dum Cooking",
      desc: "Slow-cooked with layered spices and traditional methods.",
      icon: ShieldCheck
    },
    {
      title: "Fresh Every Day",
      desc: "Prepared daily with quality ingredients and rich flavours.",
      icon: Clock
    },
    {
      title: "Perfect For Groups",
      desc: "Buckets, combos and catering for every gathering.",
      icon: Users
    },
    {
      title: "Easy Online Ordering",
      desc: "Pickup, delivery and catering enquiry in a few clicks.",
      icon: MousePointerClick
    }
  ];

  return (
    <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="bg-white/60 backdrop-blur-md border border-[#C8952E]/30 rounded-[32px] p-8 md:p-14 shadow-xl relative overflow-hidden">
        {/* Subtle royal pattern in the background of this rounded card */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative z-10">
      <SectionHeading 
        eyebrow="Our Promise"
        title="Why Guests Choose Antera"
        subtitle="From slow-cooked dum techniques to fresh ingredients, we bring true royal hospitality to every meal."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-4">
        {reasons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="premium-card !p-8 flex flex-col items-center text-center bg-white h-full group hover:bg-[var(--color-brand-cream-card)]">
                <div className="w-[60px] h-[60px] rounded-full bg-[var(--color-brand-cream-bg)] border border-[var(--color-brand-gold-soft)]/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-brand-maroon-deep)] transition-all duration-300">
                  <Icon className="w-7 h-7 text-[var(--color-brand-gold-royal)] group-hover:text-[var(--color-brand-cream-bg)] transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-[18px] font-bold text-[var(--color-brand-text-dark)] mb-3 group-hover:text-[var(--color-brand-maroon-royal)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[var(--color-brand-text-muted)] text-[14px] font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
      </div>
      </div>
    </section>
  );
};
