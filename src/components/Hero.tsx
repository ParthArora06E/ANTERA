"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/FadeIn";

export const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center w-full h-screen min-h-[600px] bg-[#000] overflow-hidden">
      
      {/* Dynamic Full-width Background Video */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/videos/animate_this_image_into_video.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle top gradient to ensure the white header text is always readable */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Transparent Overlay Header matching exactly to the screenshot */}
      <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-16 py-6 text-white bg-transparent">
        <Link href="#home" className="flex items-center gap-[2px] cursor-pointer">
          <img src="/logo.png" alt="Antera Logo" className="h-24 md:h-32 lg:h-40 w-auto object-contain" />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-white/90">
          <Link href="#home" className="hover:text-white transition-colors relative group">
            HOME
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-white"></span>
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">ABOUT</Link>
          <Link href="#menu" className="hover:text-white transition-colors">MENU</Link>
          <Link href="#gallery" className="hover:text-white transition-colors">GALLERY</Link>
          <Link href="#contact" className="hover:text-white transition-colors">CONTACT</Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl">
        <FadeIn delay={0.2} duration={1.2}>
          <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[72px] lg:text-[90px] leading-[1.1] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            FRESH, FLAVORFUL, <br className="hidden sm:block" />
            AUTHENTIC
          </h1>
        </FadeIn>
      </div>

      {/* Floating Circular Menu Button (also covers video watermark) */}
      <Link 
        href="#menu" 
        className="absolute bottom-4 right-20 md:bottom-8 md:right-28 z-40 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-[var(--color-brand-maroon-royal)] border border-[var(--color-brand-gold-soft)] rounded-full text-[var(--color-brand-gold-soft)] font-bold tracking-widest text-[10px] md:text-[12px] uppercase shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:bg-[var(--color-brand-gold-soft)] hover:text-[var(--color-brand-maroon-royal)] transition-all hover:scale-105 duration-300"
      >
        MENU
      </Link>
    </section>
  );
};
