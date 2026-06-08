"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Buckets", href: "#buckets" },
    { name: "Catering", href: "#catering" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 flex items-center bg-white/95 backdrop-blur-md border-b border-[var(--color-brand-gold-soft)]/20 ${
        isScrolled ? "h-[72px] shadow-sm" : "h-[80px]"
      }`}
    >
      <div className="max-w-[1240px] w-full mx-auto px-5 md:px-8 flex items-center justify-between">
        
        {/* Cleaner Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-[42px] h-[42px] flex flex-col items-center justify-center bg-[var(--color-brand-maroon-deep)] text-white rounded-[10px] shadow-sm transform group-hover:-translate-y-0.5 transition-transform">
            <span className="font-serif font-black text-[12px] leading-none mt-1 uppercase">Ant</span>
            <span className="text-[5px] text-[var(--color-brand-gold-soft)] uppercase tracking-[0.2em] leading-none mt-0.5">ERA</span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-[20px] font-black text-[var(--color-brand-maroon-deep)] tracking-wide leading-none">
              ANTERA
            </h1>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand-gold-royal)] mt-1">BIRYANI CO.</span>
          </div>
        </Link>

        {/* Clean Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-widest text-[var(--color-brand-text-dark)] hover:text-[var(--color-brand-maroon-royal)] transition-colors relative group"
            >
              {link.name}
              {/* Subtle hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-maroon-royal)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="flex items-center gap-5">
          <button 
            className="hidden md:flex btn-primary !h-[42px] !px-6 !rounded-full shadow-lg shadow-[var(--color-brand-maroon-deep)]/20"
            onClick={() => {
              const el = document.getElementById("menu");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Order Online
          </button>
          
          <button 
            onClick={toggleCart}
            className="relative p-2 text-[var(--color-brand-maroon-deep)] hover:bg-[var(--color-brand-cream-bg)] rounded-full transition-colors flex items-center justify-center"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--color-brand-gold-royal)] text-[var(--color-brand-text-dark)] text-[11px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-sm border border-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[var(--color-brand-maroon-deep)] p-2 hover:bg-[var(--color-brand-cream-bg)] rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[100%] bg-white border-b border-[var(--color-brand-gold-soft)]/20 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 max-h-screen py-6" : "opacity-0 max-h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[14px] font-bold uppercase tracking-widest text-[var(--color-brand-maroon-deep)] py-4 border-b border-gray-100 flex items-center justify-between group"
            >
              {link.name}
              <span className="text-[var(--color-brand-gold-soft)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </Link>
          ))}
          <button 
            className="btn-primary w-full !mt-6"
            onClick={() => {
              setIsMobileMenuOpen(false);
              const el = document.getElementById("menu");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Order Online Now
          </button>
        </div>
      </div>
    </header>
  );
};
