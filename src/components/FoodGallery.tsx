"use client";

import React, { useState } from "react";
import { FadeIn } from "./ui/FadeIn";

export const FoodGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using 10 high-quality images to ensure a smooth, long marquee
  const originalImages = [
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg", // Dosa
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.JPG", // Idli
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600", // Vada/Snack
    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600", // Biryani
    "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=600", // Thali
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600", // Curry/Sambar
    "https://images.unsplash.com/photo-1572099107898-46f22b3af4f9?auto=format&fit=crop&q=80&w=600", // Samosa
    "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=600", // Mutton Biryani
    "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600", // Punugulu
    "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600"  // Chicken Starter
  ];

  // Duplicate the array to create a seamless infinite loop
  const images = [...originalImages, ...originalImages];

  return (
    <section className="w-full pb-16 overflow-hidden bg-white relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-fast {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* Auto-scrolling Image Gallery */}
      <FadeIn direction="up" delay={0.2}>
        <div className="flex w-max h-[300px] md:h-[420px] animate-marquee hover:[animation-play-state:paused]">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[420px] h-full relative group shrink-0 overflow-hidden border-r border-[#1a1a1a] cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Optional Overlay on Hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest text-[14px] uppercase border border-white px-4 py-2">View Full</span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-[32px] hover:text-[#d2231c] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
