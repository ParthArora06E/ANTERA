import React from "react";
import { FadeIn } from "./ui/FadeIn";

export const SushiDealsBanner = () => {
  return (
    <section className="w-full relative min-h-[400px] md:min-h-[500px] flex items-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1600")',
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay gradient to ensure text readability on the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-[#0a0a0a] md:to-[#0a0a0a]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 flex justify-end">
        <FadeIn direction="left" delay={0.1}>
          <div className="flex flex-col items-end text-right">
            <h2 className="font-serif text-[36px] md:text-[54px] text-white tracking-wide uppercase leading-[1.15] mb-8 font-normal">
              FRESH BIRYANI DEALS<br />JUST FOR YOU
            </h2>
            <button className="bg-[#cc1c1c] text-white text-[12px] font-sans font-medium tracking-[0.15em] uppercase py-4 px-10 hover:bg-[#a01515] transition-colors">
              CONTACT US
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
