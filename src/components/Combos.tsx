"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { SectionHeading } from "./ui/SectionHeading";

export const Combos = () => {
  const { addToCart } = useCart();

  const combos = [
    {
      id: "c1",
      name: "Biryani Combo",
      desc: "Biryani + Raita + Salan",
      price: 299,
      badge: "Quick Meal",
      image: "https://images.pexels.com/photos/32825909/pexels-photo-32825909.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "c2",
      name: "Bhagara Rice Combo",
      desc: "Bhagara Rice + Curry + Dal + Raita",
      price: 249,
      badge: "Comfort Pick",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "c3",
      name: "Royal Bucket Combo",
      desc: "Bucket Biryani + Starter + Drinks",
      price: 999,
      badge: "Best Value",
      image: "https://images.pexels.com/photos/32689482/pexels-photo-32689482.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "c4",
      name: "Family Pack Combo",
      desc: "Feeds 4–5 People",
      price: 1199,
      badge: "Family Favourite",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="section-container">
      <SectionHeading 
        eyebrow="Perfect Pairings"
        title="Combos Made For You"
        subtitle="Complete meals for quick cravings, family dinners and group orders."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {combos.map((combo) => (
          <div key={combo.id} className="premium-card group">
            <div className="relative h-[200px] w-full overflow-hidden">
              <Image 
                src={combo.image}
                alt={combo.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute top-4 left-4 bg-[var(--color-brand-maroon-deep)] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md z-10">
                {combo.badge}
              </div>
            </div>
            
            <div className="premium-card-pad text-left">
              <h3 className="font-serif text-[17px] md:text-[19px] font-bold text-[var(--color-brand-text-dark)] group-hover:text-[var(--color-brand-maroon-royal)] transition-colors mb-2 leading-tight">
                {combo.name}
              </h3>
              <p className="text-[14px] text-[var(--color-brand-text-muted)] font-medium mb-6 flex-grow">
                {combo.desc}
              </p>
              
              <div className="flex flex-col gap-4 mt-auto border-t border-[var(--color-brand-gold-soft)]/20 pt-4">
                <span className="text-[22px] font-bold text-[var(--color-brand-maroon-deep)] leading-none">
                  ₹{combo.price}
                </span>
                <button 
                  onClick={() => addToCart({ ...combo, quantity: 1 })}
                  className="btn-outline w-full !border-[var(--color-brand-gold-soft)] hover:!bg-[var(--color-brand-gold-soft)] hover:!text-[var(--color-brand-text-dark)]"
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
