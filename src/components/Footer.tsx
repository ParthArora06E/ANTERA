import React from "react";
import Link from "next/link";
import { FadeIn } from "./ui/FadeIn";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#131313] text-[#e0e0e0] font-sans pt-16 pb-8 border-t border-[#222] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Section */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col lg:flex-row justify-between items-start border-b border-[#2a2a2a] pb-12 mb-12 gap-10 lg:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:w-1/2">
              <div className="flex items-center text-white font-serif text-[28px] tracking-widest uppercase">
                <img src="/logo.png" alt="Antera Logo" className="h-24 md:h-32 lg:h-40 w-auto object-contain" />
              </div>
              <div className="hidden sm:block w-[1px] h-16 bg-[#2a2a2a]"></div>
              <p className="text-[13px] text-[#999] leading-relaxed max-w-[280px]">
                Ac turpis ornare enim fringilla vivamus euismod felis egestas. Elementum eget id sagittis consequat enim vitae morbi venenatis. Erat donec turpis
              </p>
            </div>
            <div className="lg:w-1/2 lg:text-left flex items-center lg:justify-end">
              <h2 className="font-serif text-[28px] md:text-[34px] text-white leading-[1.2] uppercase max-w-[450px]">
                TASTE THE TRADITION, ONE BITE AT A TIME
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* Middle Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Newsletter Column */}
            <div className="lg:col-span-5 pr-0 lg:pr-10">
              <h3 className="font-serif text-[22px] text-white mb-8 uppercase tracking-wide">FROM OUR CHOPSTICKS TO YOUR INBOX</h3>
              <form className="mt-6">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-transparent border-b border-[#333] pb-4 text-[14px] text-white placeholder-[#777] focus:outline-none focus:border-white transition-colors mb-6"
                />
                <label className="flex items-center gap-3 text-[14px] text-[#999] mb-8 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 bg-transparent border border-[#555] rounded-sm appearance-none checked:bg-[#d92323] checked:border-[#d92323] relative flex items-center justify-center after:content-[''] after:absolute after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:opacity-0 checked:after:opacity-100 after:-mt-1" 
                  />
                  Yes, subscribe me to your newsletter.
                </label>
                <button 
                  type="button" 
                  className="bg-[#d2231c] hover:bg-[#b01c1c] text-white text-[13px] font-semibold uppercase tracking-wider py-3.5 px-8 transition-colors"
                >
                  SUBSCRIBE NOW
                </button>
              </form>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-serif text-[15px] text-white mb-6 uppercase tracking-widest">QUICK LINKS</h3>
                <ul className="space-y-3.5">
                  {[
                    { name: 'Home', href: '#home' },
                    { name: 'About', href: '#about' },
                    { name: 'Pages', href: '#pages' },
                    { name: 'Menu', href: '#menu' },
                    { name: 'Contact', href: '#contact' }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-[14px] text-[#999] hover:text-white transition-colors">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="font-serif text-[15px] text-white mb-6 uppercase tracking-widest">CONTACT US</h3>
                <div className="text-[14px] text-[#999] space-y-4">
                  <p className="leading-[1.7]">Germany — 785 15h<br />Street, Office 47 Berlin,<br />De 81566</p>
                  <p className="hover:text-white transition-colors cursor-pointer">info@tastoria.com</p>
                  <p className="hover:text-white transition-colors cursor-pointer">+1 (003) 563-7585</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-serif text-[15px] text-white mb-6 uppercase tracking-widest">OPENING HOURS</h3>
                <div className="text-[14px] text-[#999] space-y-2 mb-8">
                  <p>Mon - Fri : 8AM - 9PM</p>
                  <p>Sat - Sun : 8AM - 11PM</p>
                </div>
                <div className="flex gap-3">
                  {[
                    { icon: 'f', label: 'Facebook' },
                    { icon: 'X', label: 'Twitter' },
                    { icon: 'in', label: 'LinkedIn' },
                    { icon: 'Be', label: 'Behance' }
                  ].map((social) => (
                    <a key={social.label} href="#" className="w-8 h-8 rounded-full border border-[#444] flex items-center justify-center text-[12px] font-medium text-[#bbb] hover:text-white hover:border-white transition-colors">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Section */}
        <FadeIn direction="up" delay={0.3}>
          <div className="border-t border-[#2a2a2a] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-[#777]">
            <p>Copyright © Tastoria | Designed By Webflipin</p>
            <p>Powered By Webflow</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
