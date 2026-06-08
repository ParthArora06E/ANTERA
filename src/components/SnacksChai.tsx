"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";

export const SnacksChai = () => {
  const { addToCart } = useCart();

  const snacks = [
    { id: "s1", name: "Punugulu", price: 149, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=900" },
    { id: "s2", name: "Mirchi Bajji", price: 129, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=900" },
    { id: "s3", name: "Samosa", price: 79, image: "https://images.unsplash.com/photo-1572099107898-46f22b3af4f9?auto=format&fit=crop&q=80&w=900" },
    { id: "s4", name: "Chicken Lollipop", price: 199, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=900" },
    { id: "s5", name: "Cutting Chai", price: 49, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=80&w=900" },
    { id: "s6", name: "Onion Pakoda", price: 99, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=900" },
  ];

  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-[32%_68%] gap-6 lg:gap-8 items-stretch">
        
        {/* Premium Left Panel */}
        <div className="bg-[var(--color-brand-cream-card)] border border-[var(--color-brand-gold-soft)]/40 rounded-[20px] p-8 md:p-10 h-full flex flex-col justify-center text-center lg:text-left shadow-sm">
          
          <div className="inline-block border border-[var(--color-brand-gold-soft)]/50 px-3 py-1 rounded-full mb-6 mx-auto lg:mx-0 bg-white/50 w-fit">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-brand-maroon-deep)]">
              Perfect Sides
            </span>
          </div>

          <h2 className="font-serif text-[34px] md:text-[40px] font-black text-[var(--color-brand-maroon-royal)] leading-[1.1] mb-5">
            Hot Snacks.<br />
            Fresh Chai.<br />
            Every Day.
          </h2>
          <p className="text-[var(--color-brand-text-muted)] text-[15px] font-medium leading-[1.6] mb-8">
            Crispy, tasty and made fresh through the day — the perfect side to every biryani craving.
          </p>
          <button className="btn-outline w-fit mx-auto lg:mx-0">
            Explore Menu
          </button>
        </div>

        {/* Right Grid (Balanced & Aligned) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {snacks.map((snack) => (
            <div key={snack.id} className="premium-card p-4 flex flex-col text-left group cursor-pointer h-full">
              <div className="relative w-full h-[130px] md:h-[150px] rounded-[10px] overflow-hidden mb-4">
                <Image 
                  src={snack.image} 
                  alt={snack.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-[15px] font-bold text-[var(--color-brand-text-dark)] group-hover:text-[var(--color-brand-maroon-royal)] mb-2 flex-grow transition-colors">
                {snack.name}
              </h3>
              
              <div className="flex items-center justify-between mt-auto w-full pt-3 border-t border-[var(--color-brand-gold-soft)]/20">
                <span className="font-bold text-[18px] text-[var(--color-brand-maroon-deep)] leading-none">₹{snack.price}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({ ...snack, quantity: 1 });
                  }}
                  className="btn-add !w-[36px] !h-[36px]"
                  aria-label="Add to cart"
                >
                  <Plus className="w-[16px] h-[16px]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
