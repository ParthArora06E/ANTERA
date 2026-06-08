"use client";

import React, { useState, useEffect } from "react";

export const FloatingCart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [itemCount, setItemCount] = useState(3); // Dummy cart count

  useEffect(() => {
    const handleScroll = () => {
      // Show cart after scrolling past hero
      setIsVisible(window.scrollY > 400);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button 
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#C9942E] text-[#071827] shadow-2xl border-2 border-[#F7EBD6] transition-all duration-500 hover:scale-110 hover:shadow-[#C9942E]/50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
      aria-label="View Cart"
    >
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-3 -right-3 bg-[#6F1612] text-[#F7EBD6] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-[#F7EBD6]">
            {itemCount}
          </span>
        )}
      </div>
    </button>
  );
};
