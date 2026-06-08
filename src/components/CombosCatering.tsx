import React from "react";
import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { combos } from "@/data/menu";

export const CombosCatering = () => {
  return (
    <section id="catering" className="py-20 bg-[#FDF9F1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Combos Column */}
          <div className="bg-[#F7EBD6] p-8 md:p-10 rounded-xl border border-[#C9942E]/30">
            <SectionHeading title="Combos Made For You" />
            
            <div className="flex flex-col gap-6">
              {combos.map((combo) => (
                <div key={combo.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-[#8B4A20]/10 hover:border-[#C9942E] transition-colors">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={combo.image}
                      alt={combo.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif font-bold text-[#071827] text-lg uppercase tracking-wide">
                      {combo.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {combo.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-[#6F1612]">₹{combo.price}</span>
                      <Button variant="primary" className="!px-3 !py-1 text-xs">
                        Order Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Catering Column */}
          <div className="relative bg-[#6F1612] p-8 md:p-10 rounded-xl overflow-hidden text-center lg:text-left flex flex-col justify-between">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{ backgroundImage: 'radial-gradient(#F7EBD6 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F7EBD6] uppercase tracking-widest mb-4">
                Catering<br />Made Easy
              </h2>
              <div className="h-[1px] w-16 bg-[#C9942E] mx-auto lg:mx-0 mb-6"></div>
              <p className="text-[#F7EBD6]/80 mb-8 max-w-sm mx-auto lg:mx-0">
                For birthdays, weddings, corporate events, social gatherings and all special occasions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Birthdays', 'Weddings', 'Corporate Events', 'Small Functions'].map((event, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 border border-[#C9942E]/30 rounded bg-[#520f0d]/50">
                    <span className="text-2xl mb-2 text-[#C9942E]">
                      {i === 0 ? "🎂" : i === 1 ? "💍" : i === 2 ? "💼" : "🎉"}
                    </span>
                    <span className="text-xs text-[#F7EBD6] uppercase tracking-wider text-center">{event}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                View Catering Menu
              </Button>
              <Button variant="outline" className="w-full sm:w-auto !border-[#C9942E] !text-[#C9942E] hover:!bg-[#C9942E] hover:!text-[#071827]">
                Get A Quote
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
