"use client";

import React from "react";
import { Button } from "./ui/Button";

export const NewsletterSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#071827]">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#071827] via-[#071827]/80 to-[#071827]"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center animate-on-scroll">
        <div className="glass-dark p-10 md:p-16 rounded-3xl shadow-2xl border border-[#C9942E]/30 relative overflow-hidden">
          {/* Subtle glow inside the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-[#C9942E]/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F7EBD6] mb-4">Join The Royal Club</h2>
          <div className="h-[1px] w-24 bg-[#C9942E] mx-auto mb-6"></div>
          
          <p className="text-gray-300 mb-10 max-w-lg mx-auto text-lg">
            Subscribe to receive exclusive offers, new menu announcements, and get <span className="text-[#C9942E] font-bold">10% off</span> your first online order.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-[#071827]/80 border border-[#C9942E]/50 rounded text-[#F7EBD6] px-6 py-4 focus:outline-none focus:border-[#C9942E] focus:ring-1 focus:ring-[#C9942E] placeholder-gray-500 transition-all"
              required
            />
            <Button variant="secondary" className="whitespace-nowrap px-8">
              Subscribe Now
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">We never spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};
