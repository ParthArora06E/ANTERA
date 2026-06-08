import React from "react";
import { FadeIn } from "./ui/FadeIn";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-white w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12 xl:gap-16 mb-24">
          
          {/* Left Large Image */}
          <div className="w-full lg:w-[45%] min-h-[500px] md:min-h-[650px] lg:min-h-[700px] shrink-0 overflow-hidden shadow-sm flex flex-col">
            <FadeIn direction="right" delay={0.1}>
              <img 
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800" 
                alt="Biryani Dish" 
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[55%] flex flex-col py-2 lg:py-4">
            
            {/* Top Text Block */}
            <div className="flex flex-col items-start gap-6">
              <FadeIn direction="left" delay={0.2}>
                <h2 className="font-serif text-[42px] lg:text-[46px] xl:text-[54px] text-[#111] tracking-wide uppercase leading-[1.1] font-normal whitespace-nowrap">
                  THE ART OF BIRYANI &<br />INDIAN CUISINE
                </h2>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.3}>
                <p className="text-[15px] text-[#666] leading-[1.8] font-sans w-full pr-4">
                  We are passionate about bringing you the finest biryani and Indian cuisine, crafted with precision, authenticity, and a modern touch. Inspired by India's rich culinary traditions, our chefs create dishes that are truly delicious.
                </p>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.4}>
                <button className="bg-[#cc1c1c] text-white text-[12px] font-sans font-medium tracking-[0.15em] uppercase py-3.5 px-10 hover:bg-[#a01515] transition-colors mt-2">
                  ABOUT US
                </button>
              </FadeIn>
            </div>

            {/* Bottom Split Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 w-full mt-12 lg:mt-16 pt-6 lg:pt-10 border-t border-gray-100 lg:border-none">
              
              <div className="flex-1 pb-1">
                <FadeIn direction="up" delay={0.5}>
                  <h3 className="font-serif text-[18px] text-[#222] uppercase tracking-widest mb-4">
                    OPENING HOURS
                  </h3>
                  <ul className="space-y-3 text-[14px] text-[#666] font-sans tracking-wide whitespace-nowrap">
                    <li>Monday - Thursday: 11:30 AM - 9:30 PM</li>
                    <li>Friday - Saturday: 11:30 AM - 10:30 PM</li>
                    <li>Sunday: 12:00 PM - 9:00 PM</li>
                  </ul>
                </FadeIn>
              </div>

            </div>

          </div>

        </div>

        {/* Inline Typography Gallery */}
        <div className="flex flex-col items-center justify-center space-y-1 md:space-y-2 lg:space-y-3 w-full mt-16 md:mt-24">
          <FadeIn direction="up" delay={0.2}>
            {/* Row 1 */}
            <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 flex-nowrap whitespace-nowrap w-full">
              <span className="font-serif text-[32px] sm:text-[45px] md:text-[60px] lg:text-[85px] text-[#111] uppercase tracking-tight leading-none font-normal">DOSA</span>
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400" 
                alt="Dosa" 
                className="w-[80px] h-[30px] sm:w-[110px] sm:h-[40px] md:w-[140px] md:h-[50px] lg:w-[190px] lg:h-[65px] object-cover" 
              />
              <span className="font-serif text-[32px] sm:text-[45px] md:text-[60px] lg:text-[85px] text-[#111] uppercase tracking-tight leading-none font-normal">BIRYANI</span>
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400" 
                alt="Biryani" 
                className="w-[80px] h-[30px] sm:w-[110px] sm:h-[40px] md:w-[140px] md:h-[50px] lg:w-[190px] lg:h-[65px] object-cover" 
              />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            {/* Row 2 */}
            <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 flex-nowrap whitespace-nowrap w-full">
              <span className="font-serif text-[32px] sm:text-[45px] md:text-[60px] lg:text-[85px] text-[#111] uppercase tracking-tight leading-none font-normal">SOUTH INDIAN</span>
              <img 
                src="https://images.unsplash.com/photo-1572099107898-46f22b3af4f9?auto=format&fit=crop&q=80&w=400" 
                alt="South Indian" 
                className="w-[80px] h-[30px] sm:w-[110px] sm:h-[40px] md:w-[140px] md:h-[50px] lg:w-[190px] lg:h-[65px] object-cover" 
              />
              <span className="font-serif text-[32px] sm:text-[45px] md:text-[60px] lg:text-[85px] text-[#111] uppercase tracking-tight leading-none font-normal">THALI</span>
              <img 
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400" 
                alt="Thali" 
                className="w-[80px] h-[30px] sm:w-[110px] sm:h-[40px] md:w-[140px] md:h-[50px] lg:w-[190px] lg:h-[65px] object-cover" 
              />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            {/* Row 3 */}
            <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 flex-nowrap whitespace-nowrap w-full">
              <span className="font-serif text-[32px] sm:text-[45px] md:text-[60px] lg:text-[85px] text-[#111] uppercase tracking-tight leading-none font-normal">AUTHENTIC FLAVORS</span>
              <img 
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=400" 
                alt="Authentic Flavors" 
                className="w-[80px] h-[30px] sm:w-[110px] sm:h-[40px] md:w-[140px] md:h-[50px] lg:w-[190px] lg:h-[65px] object-cover" 
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
