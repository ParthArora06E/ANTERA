"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Plus, Users } from "lucide-react";

// Reusable Royal Corner Ornament for Borders
const RoyalCorner = ({ className }: { className?: string }) => (
  <svg className={`absolute text-[#C8952E] pointer-events-none opacity-60 ${className}`} width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0V100C0 44.7715 44.7715 0 100 0H0Z" stroke="currentColor" strokeWidth="3" />
    <path d="M0 0V70C0 31.34 31.34 0 70 0H0Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M0 0V40C0 17.9086 17.9086 0 40 0H0Z" stroke="currentColor" strokeWidth="1" />
    <circle cx="15" cy="15" r="4" fill="currentColor" />
    <circle cx="30" cy="30" r="2.5" fill="currentColor" />
  </svg>
);

export const BucketBiryani = () => {
  const { addToCart } = useCart();

  const buckets = [
    { id: "bu1", name: "Chicken Dum Bucket", price: 699, image: "https://images.pexels.com/photos/32689482/pexels-photo-32689482.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: "bu2", name: "Mutton Dum Bucket", price: 899, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400" },
    { id: "bu3", name: "Veg Biryani Bucket", price: 549, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=400" },
    { id: "bu4", name: "Paneer Biryani Bucket", price: 649, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section id="buckets" className="section-container relative">
      <div className="relative overflow-hidden rounded-[24px] bg-[var(--color-brand-navy)] border-2 border-[#C8952E]/40 px-6 py-10 md:p-14 shadow-2xl">
        
        {/* Royal Corner Borders added as requested */}
        <RoyalCorner className="top-4 left-4" />
        <RoyalCorner className="top-4 right-4 rotate-90" />
        <RoyalCorner className="bottom-4 right-4 rotate-180" />
        <RoyalCorner className="bottom-4 left-4 -rotate-90" />
        
        {/* Very subtle repeating pattern in background for extra royal feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 pointer-events-none"></div>

        {/* Background Image with Gradient Overlay */}
        <Image 
          src="https://images.pexels.com/photos/32689482/pexels-photo-32689482.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Bucket Biryani Background"
          fill
          className="object-cover opacity-[0.15] pointer-events-none mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-navy)] via-[var(--color-brand-navy)]/95 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)] via-transparent to-transparent pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-serif text-[32px] md:text-[40px] font-black uppercase text-white leading-[1.1] tracking-wide mb-4 drop-shadow-md">
              Feed More.<br />
              <span className="text-[#C8952E]">Save More.</span>
            </h2>
            <p className="text-[15px] leading-[1.6] text-gray-300 mb-8 max-w-sm mx-auto lg:mx-0 font-medium">
              Our Bucket Biryanis are packed fresh for parties, office lunches and family feasts. True royal portions.
            </p>
            
            <ul className="space-y-4 max-w-sm mx-auto lg:mx-0">
              {[
                "Serves 3–5 generously",
                "Freshly packed to order",
                "Best value for money"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-[#C8952E]/20 border border-[#C8952E]/50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-[#C8952E]" />
                  </div>
                  <span className="text-[14px] font-medium tracking-wide">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
            {buckets.map((bucket) => (
              <div 
                key={bucket.id} 
                className="group relative flex flex-col sm:flex-row items-center p-4 rounded-[16px] border border-[#C8952E]/30 bg-[var(--color-brand-navy)]/50 backdrop-blur-md hover:bg-white/10 hover:border-[#C8952E]/80 transition-all duration-300 shadow-lg"
              >
                
                <div className="relative w-full sm:w-[90px] h-[100px] sm:h-[110px] rounded-[10px] overflow-hidden flex-shrink-0 shadow-sm mb-4 sm:mb-0 sm:mr-5 border border-white/10">
                  <Image 
                    src={bucket.image} 
                    alt={bucket.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    sizes="110px"
                  />
                </div>

                <div className="flex flex-col flex-grow text-center sm:text-left w-full">
                  <h3 className="font-serif text-[16px] font-bold uppercase text-white leading-tight mb-3 flex-grow">
                    {bucket.name}
                  </h3>
                  
                  <div className="flex items-end justify-between w-full mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8952E] opacity-90 mb-1">From</span>
                      <span className="text-[20px] font-bold text-white leading-none drop-shadow-sm">₹{bucket.price}</span>
                    </div>
                    
                    <button 
                      onClick={() => addToCart({ ...bucket, quantity: 1, name: bucket.name })}
                      className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#C8952E] to-[#a87a22] text-[var(--color-brand-navy)] flex items-center justify-center hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-md"
                      aria-label="Add to cart"
                    >
                      <Plus className="w-[18px] h-[18px]" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
