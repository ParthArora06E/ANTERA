"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const bgImages = [
    { 
      src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=2400", 
      align: "object-right" 
    },
    { 
      src: "https://images.pexels.com/photos/32825917/pexels-photo-32825917.jpeg?auto=compress&cs=tinysrgb&w=2400", 
      align: "object-[85%_center]" 
    },
    { 
      src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=2400", 
      align: "object-right" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <section id="home" className="relative flex items-center h-[90vh] min-h-[600px] max-h-[800px] bg-[var(--color-brand-cream-bg)] overflow-hidden">
      
      {/* Dynamic Full-width Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full bg-[#1A0A08]">
        {bgImages.map((img, index) => (
          <div 
            key={img.src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            <Image
              src={img.src}
              alt={`Premium Hyderabadi Food Scene ${index + 1}`}
              fill
              className={`object-cover ${img.align}`} 
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Constant overlay gradient keeping left text perfectly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-cream-bg)] via-[var(--color-brand-cream-bg)] via-[50%] to-transparent w-full z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-cream-bg)]/30 via-transparent to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="section-container relative z-20 w-full flex items-center h-full pt-10 md:pt-0">
        
        {/* Left Content Area */}
        <div className="w-full max-w-[540px] flex flex-col items-start text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block border border-[var(--color-brand-maroon-royal)]/30 px-3 py-1 rounded-full mb-6 bg-white/50 backdrop-blur-md shadow-sm"
          >
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-brand-maroon-deep)]">
              Authentic Hyderabadi Dum Biryani
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-[42px] md:text-[56px] lg:text-[62px] font-black text-[var(--color-brand-maroon-deep)] leading-[1.05] tracking-tight mb-4 drop-shadow-[0_2px_10px_rgba(248,238,219,0.8)]"
          >
            ROYAL FEASTS.<br />
            <span className="text-[var(--color-brand-gold-royal)]">CRAFTED FRESH.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-[20px] md:text-[24px] text-[var(--color-brand-text-dark)] italic mb-5 drop-shadow-[0_1px_5px_rgba(248,238,219,0.8)]"
          >
            Celebrate Every Meal
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-[15px] md:text-[16px] text-[var(--color-brand-text-muted)] mb-8 leading-[1.6] font-medium max-w-[480px]"
          >
            From slow-cooked dum biryanis to family buckets, crispy snacks, refreshing chai and celebration catering — order royal flavours made for every craving.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2"
          >
            <button className="btn-primary w-full sm:w-auto !h-[50px] !px-8 text-[13px] !rounded-full uppercase tracking-widest border border-transparent hover:border-[var(--color-brand-maroon-deep)]/20 shadow-sm">
              Order Online
            </button>
            <button className="btn-outline w-full sm:w-auto !h-[50px] !px-8 text-[13px] !rounded-full bg-white/60 hover:!bg-[var(--color-brand-maroon-royal)] hover:!text-white uppercase tracking-widest !border-[var(--color-brand-maroon-royal)]/40 hover:!border-[var(--color-brand-maroon-royal)] backdrop-blur-sm">
              Explore Menu
            </button>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};
