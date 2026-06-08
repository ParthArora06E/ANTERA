import React from "react";
import Image from "next/image";
import { MenuItem } from "@/data/menu";

interface ProductCardProps {
  item: MenuItem;
  dark?: boolean;
}

export const ProductCard = ({ item, dark = false }: ProductCardProps) => {
  return (
    <div className={`group relative flex flex-col rounded-2xl p-4 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-on-scroll ${dark ? "glass-dark hover:border-[#C9942E]" : "glass-card hover:border-[#C9942E]"}`}>
      
      {/* Floating 3D Image Container */}
      <div className="relative h-48 w-full -mt-8 mb-4 rounded-xl overflow-visible">
        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl group-hover:shadow-[#C9942E]/20 transition-all duration-500">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {item.badge && (
          <div className="absolute -top-3 -left-3 bg-[#6F1612] text-[#F7EBD6] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest border border-[#C9942E]/50 z-10 animate-bounce">
            {item.badge}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow text-center">
        <h3 className={`font-serif text-xl mb-2 font-bold ${dark ? "text-[#F7EBD6]" : "text-[#6F1612]"}`}>
          {item.name}
        </h3>
        
        {item.description && (
          <p className={`text-sm mb-4 flex-grow ${dark ? "text-gray-400" : "text-gray-600"}`}>
            {item.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#C9942E]/20">
          {item.spiceLevel ? (
            <div className="flex space-x-1" aria-label={`Spice level ${item.spiceLevel} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-sm ${i < item.spiceLevel! ? "text-red-500" : "text-gray-300/20"}`}>
                  🌶️
                </span>
              ))}
            </div>
          ) : (
            <div />
          )}

          {item.price && (
            <div className={`font-bold text-xl ${dark ? "text-[#C9942E]" : "text-[#6F1612]"}`}>
              ₹{item.price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
