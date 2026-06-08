import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { snacks } from "@/data/menu";

export const SnacksSection = () => {
  return (
    <section id="snacks" className="py-20 bg-[#F7EBD6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#6F1612] leading-tight mb-4 uppercase tracking-widest">
              Hot Snacks.<br />
              Fresh Chai.<br />
              <span className="text-[#8B4A20]">Every Day.</span>
            </h2>
            <div className="h-[1px] w-24 bg-[#C9942E] mx-auto lg:mx-0 mb-6"></div>
            <p className="text-gray-700 mb-8 max-w-sm mx-auto lg:mx-0">
              Crispy, tasty and made fresh all day — perfect with our signature chai.
            </p>
            <Button variant="primary">
              Explore Snacks
            </Button>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {snacks.map((item) => (
                <div key={item.id} className="group flex flex-col items-center bg-[#FDF9F1] border border-[#8B4A20]/10 rounded-lg p-3 hover:border-[#C9942E] transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full overflow-hidden border-2 border-[#C9942E]/30 group-hover:border-[#C9942E] transition-colors">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="font-serif text-sm md:text-base font-bold text-[#071827] leading-tight uppercase tracking-wide">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
