"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

export const Desserts = () => {
  const { addToCart } = useCart();

  const desserts = [
    { id: "d1", name: "Mango Lassi", price: 129, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800" },
    { id: "d2", name: "Gulab Jamun", price: 99, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800" },
    { id: "d3", name: "Double ka Meetha", price: 149, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800" },
    { id: "d4", name: "Rasmalai", price: 159, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="section-container">
      <SectionHeading 
        eyebrow="Sweet Endings"
        title="Refresh & Indulge"
        subtitle="The perfect royal finish to a royal meal."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {desserts.map((item) => (
          <div key={item.id} className="premium-card p-4 flex flex-col text-center group cursor-pointer h-full">
            <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden mb-4 border border-white/50">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            
            <h3 className="font-serif text-[16px] md:text-[18px] font-bold text-[var(--color-brand-text-dark)] group-hover:text-[var(--color-brand-maroon-royal)] transition-colors flex-grow">
              {item.name}
            </h3>
            
            <div className="flex items-center justify-between w-full mt-4 pt-4 border-t border-[var(--color-brand-gold-soft)]/20">
              <span className="font-bold text-[18px] text-[var(--color-brand-maroon-deep)]">₹{item.price}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart({ ...item, quantity: 1 });
                }}
                className="btn-add !w-[36px] !h-[36px]"
                aria-label="Add to cart"
              >
                <Plus className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
