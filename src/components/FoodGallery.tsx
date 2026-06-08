import React from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

export const FoodGallery = () => {
  const images = [
    "https://images.pexels.com/photos/32825917/pexels-photo-32825917.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800",
    "https://images.pexels.com/photos/32825913/pexels-photo-32825913.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="section-container border-t border-[var(--color-brand-gold-soft)]/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-black uppercase text-[var(--color-brand-maroon-royal)] mb-4">
          Moments From The Antera Table
        </h2>
        <p className="text-lg text-[var(--color-brand-text-muted)] font-medium max-w-2xl mx-auto">
          Freshly served, warmly shared and made for every celebration.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="relative aspect-square rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
            <Image
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
              <div className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-gold-soft)] bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Maximize2 className="w-5 h-5 text-[var(--color-brand-gold-soft)]" />
              </div>
              <span className="font-bold text-white uppercase tracking-widest text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Order Now
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
