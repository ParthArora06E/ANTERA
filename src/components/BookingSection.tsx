import React from "react";
import { FadeIn } from "./ui/FadeIn";

export const BookingSection = () => {
  return (
    <section className="bg-white w-full py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row shadow-2xl">
        
        {/* Left Side - Booking Form */}
        <div className="relative w-full md:w-1/2 min-h-[600px] z-10">
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            {/* The dark container with hidden overflow for background */}
            <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden">
              <div 
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Decorative Bowl/Plate at Bottom */}
              <div className="absolute -bottom-[120px] left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-black shadow-[inset_0_20px_50px_rgba(0,0,0,0.9)] z-0 pointer-events-none"></div>
            </div>
            
            {/* Content (Form) */}
            <div className="relative z-10 w-full h-full py-16 px-10 md:px-14 flex flex-col justify-center text-center text-white">
              <div className="w-full max-w-[420px] mx-auto">
                <h2 className="font-serif text-[32px] md:text-[38px] mb-12 tracking-wide uppercase text-[#cc1c1c]">CONTACT US!</h2>
                
                <form className="space-y-8 text-left font-sans">
                  <div className="grid grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Type your name" 
                      className="bg-transparent border-b border-white/20 pb-2 text-[13px] placeholder-white/60 focus:outline-none focus:border-white w-full"
                    />
                    <input 
                      type="text" 
                      placeholder="Phone number" 
                      className="bg-transparent border-b border-white/20 pb-2 text-[13px] placeholder-white/60 focus:outline-none focus:border-white w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <input 
                      type="text" 
                      placeholder="Date" 
                      className="bg-transparent border-b border-white/20 pb-2 text-[13px] placeholder-white/60 focus:outline-none focus:border-white w-full"
                    />
                    <div className="relative">
                      <select defaultValue="" className="bg-transparent border-b border-white/20 pb-2 text-[13px] text-white/60 focus:outline-none focus:border-white w-full appearance-none cursor-pointer">
                        <option value="" disabled>Time</option>
                        <option value="18:00" className="text-black">18:00</option>
                        <option value="19:00" className="text-black">19:00</option>
                        <option value="20:00" className="text-black">20:00</option>
                      </select>
                      <div className="absolute right-0 top-1 text-white/60 pointer-events-none text-[10px]">▼</div>
                    </div>
                    <div className="relative">
                      <select defaultValue="1" className="bg-transparent border-b border-white/20 pb-2 text-[13px] text-white/60 focus:outline-none focus:border-white w-full appearance-none cursor-pointer">
                        <option value="1" className="text-black">1 Persons</option>
                        <option value="2" className="text-black">2 Persons</option>
                        <option value="3" className="text-black">3 Persons</option>
                        <option value="4" className="text-black">4 Persons</option>
                      </select>
                      <div className="absolute right-0 top-1 text-white/60 pointer-events-none text-[10px]">▼</div>
                    </div>
                  </div>
                  
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-transparent border-b border-white/20 pb-2 text-[13px] placeholder-white/60 focus:outline-none focus:border-white w-full"
                  />
                  
                  <div className="pt-20 flex justify-center relative z-20">
                    <button 
                      type="button" 
                      className="bg-[#cc1c1c] text-white text-[12px] font-sans font-semibold tracking-[0.15em] py-3.5 px-10 hover:bg-[#a01515] transition-colors"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Decorative floating plate outside the hidden overflow */}
            <div className="absolute -left-12 bottom-12 w-[160px] h-[160px] hidden md:flex rounded-full border-[6px] border-[#111] shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-30 overflow-hidden bg-black items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=400&auto=format&fit=crop" 
                alt="Biryani Plate" 
                className="w-[120%] h-[120%] object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Side - Info */}
        <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center py-16 px-10 md:px-14 min-h-[600px]">
          <FadeIn direction="left" delay={0.2} duration={0.8}>
            {/* Top Image */}
            <div className="w-full max-w-[420px] h-[220px] mb-14 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" 
                alt="Biryani Dish" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center font-serif text-[#333]">
              <h3 className="text-[15px] tracking-[0.1em] mb-4 uppercase text-[#cc1c1c]">VISIT US</h3>
              <p className="text-[14px] text-[#666] leading-relaxed mb-1 font-sans">256th North Neusvill Avenue, 19302, USA</p>
              <p className="text-[14px] text-[#666] leading-relaxed mb-12 font-sans">+1 (003) 563-7585, info@tastoria.com</p>
              
              <h3 className="text-[15px] tracking-[0.1em] mb-4 uppercase text-[#cc1c1c]">OPENING HOURS</h3>
              <p className="text-[14px] text-[#666] leading-relaxed mb-1 font-sans">Monday - Friday: 6:00pm - 10:00pm</p>
              <p className="text-[14px] text-[#666] leading-relaxed mb-14 font-sans">Saturday & sunday only: 12:00pm - 2:00pm</p>
              
              <div className="flex gap-5 justify-center text-[13px] tracking-widest text-[#444] font-medium font-sans">
                <a href="#" className="hover:text-black transition-colors">FB</a>
                <a href="#" className="hover:text-black transition-colors">TW</a>
                <a href="#" className="hover:text-black transition-colors">IN</a>
                <a href="#" className="hover:text-black transition-colors">IG</a>
              </div>
            </div>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
};
