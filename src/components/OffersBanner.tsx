import React from "react";
import { ArrowRight } from "lucide-react";

export const OffersBanner = () => {
  const pills = ["Weekend Buckets", "Family Combos", "Catering Deals", "New Launches"];

  return (
    <section className="max-w-[1180px] mx-auto px-4 md:px-8 pb-20">
      <div className="premium-card !rounded-[32px] bg-[var(--color-brand-maroon-royal)] border-none overflow-hidden relative shadow-2xl">
        
        {/* Background glow & texture */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-brand-gold-royal)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-white mb-6 leading-tight drop-shadow-md">
              Make Every Order<br />More Rewarding
            </h2>
            <p className="text-[var(--color-brand-cream-bg)]/90 text-[16px] font-medium mb-8 max-w-lg">
              Get exclusive offers, new menu drops and catering updates directly from Antera.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              {pills.map((pill, idx) => (
                <span key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="btn-secondary !rounded-full !px-8 shadow-lg shadow-black/20">
                Join Rewards
              </button>
              <button className="flex items-center gap-2 text-[var(--color-brand-gold-soft)] font-bold uppercase tracking-wider hover:text-white transition-colors py-3 px-4">
                View Offers <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center relative">
            {/* Reverted exactly back to the old, clean navy design */}
            <div className="relative w-64 h-64 border-[12px] border-[var(--color-brand-gold-royal)]/30 rounded-full flex items-center justify-center p-2 shadow-[0_0_50px_rgba(200,149,46,0.3)]">
              <div className="w-full h-full bg-[var(--color-brand-navy)] rounded-full flex flex-col items-center justify-center border border-[var(--color-brand-gold-royal)] shadow-inner text-center p-6">
                <span className="font-serif text-5xl font-black text-[var(--color-brand-gold-soft)]">10%</span>
                <span className="font-bold text-white uppercase tracking-widest mt-2">Off First Order</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
