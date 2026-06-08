"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
        <div className="flex items-center gap-[2px] cursor-pointer">
          <img src="/logo.png" alt="Antera Logo" className="h-24 md:h-32 lg:h-40 w-auto object-contain" />
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-white/90">
          <a href="#home" className="hover:text-white transition-colors relative group">
            HOME
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-white"></span>
          </a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#menu" className="hover:text-white transition-colors">MENU</a>
          <a href="#gallery" className="hover:text-white transition-colors">GALLERY</a>
          <a href="#booking" className="hover:text-white transition-colors">BOOKING</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </nav>
      </header>

      {/* The text has been removed so it doesn't overlap with the text already in the background images */}
    </section>
  );
};
