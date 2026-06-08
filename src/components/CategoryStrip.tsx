import React from "react";
import Image from "next/image";

export const CategoryStrip = () => {
  const categories = [
    { title: "Dum Biryanis", image: "https://images.pexels.com/photos/32825917/pexels-photo-32825917.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "Bucket Biryanis", image: "https://images.pexels.com/photos/32689482/pexels-photo-32689482.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "Starters & Snacks", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400" },
    { title: "Curries", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=400" },
    { title: "Combos", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400" },
    { title: "Chai & Desserts", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=400" },
    { title: "Catering", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section id="menu" className="max-w-[1200px] mx-auto px-5 md:px-8 py-10 md:py-16">
      <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-5 pb-4 md:pb-0 snap-x lg:grid lg:grid-cols-7">
        {categories.map(({ title, image }) => (
          <a 
            key={title} 
            href="#menu" 
            className="flex-none w-[130px] lg:w-auto flex flex-col items-center gap-3 p-3 rounded-[16px] text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-sm snap-center group border border-transparent hover:border-[var(--color-brand-gold-soft)]/30"
          >
            {/* Real Image Circle */}
            <div className="w-[72px] h-[72px] rounded-full overflow-hidden relative shadow-sm border-2 border-white group-hover:border-[var(--color-brand-gold-royal)] transition-colors">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="72px"
              />
            </div>
            
            <span className="text-[13px] font-bold uppercase leading-tight text-[var(--color-brand-text-dark)] group-hover:text-[var(--color-brand-maroon-royal)] mt-1 tracking-wide">
              {title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
