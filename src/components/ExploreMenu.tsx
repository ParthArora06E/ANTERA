"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Search, Plus, Star } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

export const ExploreMenu = () => {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Best Sellers", "Spicy", "Vegetarian", "Buckets", "Combos", "Desserts"];

  const menuItems = [
    { id: "m1", name: "Chicken Dum Biryani", category: "Best Sellers", price: 299, rating: 4.9, image: "https://images.pexels.com/photos/32825917/pexels-photo-32825917.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "m2", name: "Mutton Dum Biryani", category: "Best Sellers", price: 449, rating: 4.8, image: "https://images.pexels.com/photos/32825918/pexels-photo-32825918.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: "m3", name: "Veg Biryani", category: "Vegetarian", price: 249, rating: 4.6, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800" },
    { id: "m4", name: "Paneer Biryani", category: "Vegetarian", price: 299, rating: 4.7, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=800" },
    { id: "m5", name: "Samosa", category: "Snacks", price: 79, rating: 4.5, image: "https://images.unsplash.com/photo-1572099107898-46f22b3af4f9?auto=format&fit=crop&q=80&w=800" },
    { id: "m6", name: "Chicken Lollipop", category: "Snacks", price: 199, rating: 4.8, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800" },
    { id: "m7", name: "Mango Lassi", category: "Desserts", price: 129, rating: 4.9, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800" },
    { id: "m8", name: "Gulab Jamun", category: "Desserts", price: 99, rating: 4.8, image: "https://images.pexels.com/photos/35021308/pexels-photo-35021308.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <SectionHeading 
          title="Explore The Menu"
          subtitle="Find your next favourite in seconds."
          align="left"
        />
        
        {/* Refined Search UI - Fixed absolute positioning bug */}
        <div className="w-full md:w-[340px] mb-4 md:mb-12">
          <div className="relative w-full h-[48px]">
            <input 
              type="text" 
              placeholder="Search biryani, snacks..." 
              className="w-full h-full bg-white border border-[var(--color-brand-gold-soft)]/40 rounded-[12px] pl-12 pr-6 focus:outline-none focus:border-[var(--color-brand-maroon-royal)] text-[var(--color-brand-text-dark)] shadow-sm transition-colors text-[14px]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Refined Filter Pills */}
      <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 mb-6 snap-x">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex-none h-[40px] px-5 rounded-[8px] text-[13px] font-bold uppercase tracking-wide transition-all snap-center ${
              activeFilter === filter
                ? "bg-[var(--color-brand-maroon-deep)] text-white shadow-sm"
                : "bg-white border border-[var(--color-brand-gold-soft)]/30 text-[var(--color-brand-text-dark)] hover:border-[var(--color-brand-maroon-royal)] hover:bg-[var(--color-brand-cream-card)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="premium-card p-4 group">
            <div className="relative w-full h-[150px] md:h-[180px] rounded-[10px] overflow-hidden mb-4 border border-white/50">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            
            <div className="flex flex-col flex-grow text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-gold-royal)] mb-1.5">
                {item.category}
              </span>
              <h3 className="font-serif text-[15px] md:text-[17px] font-bold text-[var(--color-brand-text-dark)] group-hover:text-[var(--color-brand-maroon-royal)] leading-tight mb-2 flex-grow transition-colors">
                {item.name}
              </h3>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-brand-gold-soft)]/20">
                <div>
                  <div className="font-bold text-[18px] md:text-[20px] text-[var(--color-brand-maroon-deep)] leading-none">₹{item.price}</div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 mt-1">
                    <Star className="w-3 h-3 text-[var(--color-brand-gold-royal)] fill-current" />
                    {item.rating}
                  </div>
                </div>
                
                <button 
                  onClick={() => addToCart({ ...item, quantity: 1 })}
                  className="btn-add"
                >
                  <Plus className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
