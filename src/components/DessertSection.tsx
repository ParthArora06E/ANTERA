import React from "react";
import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { desserts } from "@/data/menu";

export const DessertSection = () => {
  return (
    <section className="py-20 bg-[#FDF9F1] border-t border-[#C9942E]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <SectionHeading 
          title="Refresh. Indulge. Repeat." 
        />
        
        <div className="flex overflow-x-auto gap-4 md:gap-8 pb-4 snap-x hide-scrollbar md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:pb-0">
          {desserts.map((item) => (
            <div key={item.id} className="w-40 md:w-auto flex-shrink-0 snap-center group flex flex-col items-center">
              <div className="w-full aspect-[4/5] relative rounded-t-full rounded-b-md overflow-hidden border-2 border-[#C9942E]/20 group-hover:border-[#C9942E] transition-colors mb-4 shadow-sm group-hover:shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 160px, 200px"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-[#071827] uppercase tracking-widest text-center group-hover:text-[#6F1612] transition-colors">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
