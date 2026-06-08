"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Flame, Plus } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

export const SignatureBiryanis = () => {
  const { addToCart } = useCart();

  const biryanis = [
    {
      id: "b1",
      name: "Chicken Dum Biryani",
      desc: "Timeless classic made the royal way.",
      price: 299,
      badge: "Best Seller",
      spice: 4,
      image: "https://images.pexels.com/photos/32825917/pexels-photo-32825917.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: "b2",
      name: "Chicken 65 Biryani",
      desc: "Fiery Chicken 65 with fragrant rice.",
      price: 349,
      badge: "Chef's Choice",
      spice: 5,
      image: "https://images.pexels.com/photos/32825909/pexels-photo-32825909.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: "b3",
      name: "Mutton Dum Biryani",
      desc: "Tender mutton cooked in aromatic spices.",
      price: 449,
      badge: "Royal Pick",
      spice: 4,
      image: "https://images.pexels.com/photos/32825918/pexels-photo-32825918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: "b4",
      name: "Nalli Gosht Biryani",
      desc: "Rich & royal nalli gosht for meat lovers.",
      price: 549,
      badge: "Premium",
      spice: 5,
      image: "https://images.pexels.com/photos/32825913/pexels-photo-32825913.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <section className="section-container">
      <SectionHeading 
        eyebrow="Royal Favourites"
        title="Signature Biryanis"
        subtitle="Slow-cooked, spice-layered and made the royal way."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {biryanis.map((item) => (
          <div key={item.id} className="premium-card group">
            
            {/* Image Area */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors"></div>
              {item.badge && <span className="badge-premium">{item.badge}</span>}
            </div>

            {/* Content Area */}
            <div className="premium-card-pad text-left">
              <h3 className="font-serif text-[18px] md:text-[20px] font-bold leading-tight text-[var(--color-brand-text-dark)] group-hover:text-[var(--color-brand-maroon-royal)] transition-colors mb-2">
                {item.name}
              </h3>
              
              <p className="text-[14px] leading-relaxed text-[var(--color-brand-text-muted)] mb-4 flex-grow">
                {item.desc}
              </p>

              <div className="flex items-center gap-1.5 text-[var(--color-brand-maroon-royal)] mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Flame key={idx} className={`w-3.5 h-3.5 ${idx < item.spice ? "fill-current" : "text-gray-200"}`} />
                ))}
              </div>

              {/* Action Row */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-brand-gold-soft)]/20">
                <span className="font-bold text-[22px] text-[var(--color-brand-maroon-deep)]">₹{item.price}</span>
                <button 
                  onClick={() => addToCart({ ...item, quantity: 1 })}
                  className="btn-primary !h-[40px] !px-5 !text-[13px] !rounded-[8px]"
                  aria-label="Add to cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
