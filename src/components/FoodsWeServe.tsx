"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const menuItems = [
  {
    title: "Chicken Dum Biryani",
    category: "Signature",
    price: "$18 AUD",
    rating: 4.9,
    description: "Aromatic basmati rice cooked with tender marinated chicken and secret Antera spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Mutton Biryani",
    category: "Signature",
    price: "$22 AUD",
    rating: 4.8,
    description: "Slow-cooked mutton with fragrant rice, saffron, and caramelized onions.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Masala Dosa",
    category: "Classic",
    price: "$14 AUD",
    rating: 4.7,
    description: "Crispy rice crepe filled with spiced potato masala, served with chutneys.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg",
  },
  {
    title: "Idli Sambar",
    category: "Breakfast",
    price: "$12 AUD",
    rating: 4.6,
    description: "Soft steamed rice cakes submerged in a piping hot, flavorful lentil stew.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.JPG",
  },
  {
    title: "South Indian Thali",
    category: "Feast",
    price: "$26 AUD",
    rating: 4.9,
    description: "A grand platter featuring rice, curries, papad, pickle, and authentic desserts.",
    image: "https://plus.unsplash.com/premium_photo-1723928494246-0c38f1bdf204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8c291dGglMjBpbmRpYW4lMjBtZWFsc3xlbnwwfHx8fDE3ODA4OTM0Mjh8MA&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    title: "Filter Coffee",
    category: "Beverage",
    price: "$5 AUD",
    rating: 4.8,
    description: "Authentic Madras filter coffee brewed strong and served frothy.",
    image: "https://plus.unsplash.com/premium_photo-1674931348670-68936350ed55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZmlsdGVyJTIwY29mZmVlfGVufDB8fHx8MTc4MDg5MzQyOHww&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    title: "Mango Lassi",
    category: "Beverage",
    price: "$6 AUD",
    rating: 4.7,
    description: "Rich and creamy yogurt drink blended with sweet Alphonso mangoes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Salt_lassi.jpg",
  },
  {
    title: "Sweet Gulab Jamun",
    category: "Dessert",
    price: "$8 AUD",
    rating: 4.9,
    description: "Soft, melt-in-your-mouth milk dumplings soaked in fragrant rose syrup.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Bowl_of_Gulab_Jamuns.jpg",
  },
  {
    title: "Crispy Medu Vada",
    category: "Breakfast",
    price: "$10 AUD",
    rating: 4.8,
    description: "Deep-fried lentil donuts, crispy on the outside and soft inside.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Onion Samosa",
    category: "Classic",
    price: "$7 AUD",
    rating: 4.6,
    description: "Crispy pastry filled with spiced caramelized onions and herbs.",
    image: "https://images.unsplash.com/photo-1572099107898-46f22b3af4f9?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Onion Pakoda",
    category: "Classic",
    price: "$8 AUD",
    rating: 4.5,
    description: "Golden fried onion fritters seasoned with carom seeds and curry leaves.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Masala Chai",
    category: "Beverage",
    price: "$4 AUD",
    rating: 4.9,
    description: "Traditional Indian tea brewed with aromatic spices and milk.",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Paneer Tikka",
    category: "Signature",
    price: "$16 AUD",
    rating: 4.7,
    description: "Cubes of paneer marinated in spices and grilled in a tandoor.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Chicken 65",
    category: "Signature",
    price: "$15 AUD",
    rating: 4.8,
    description: "Spicy, deep-fried chicken bites tossed with curry leaves and chilies.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Special Pulao",
    category: "Signature",
    price: "$18 AUD",
    rating: 4.6,
    description: "Fragrant basmati rice cooked with mixed vegetables and mild spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Rasmalai",
    category: "Dessert",
    price: "$9 AUD",
    rating: 4.9,
    description: "Soft cheese patties soaked in sweet, saffron-infused milk.",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=600",
  }
];

export const FoodsWeServe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  // 1. Map tabs to actual item categories (simplistic approach for demo)
  const getFilteredItems = () => {
    if (activeTab === "All") return menuItems;
    if (activeTab === "Biryani") return menuItems.filter(item => item.category === "Signature");
    if (activeTab === "Tiffins") return menuItems.filter(item => item.category === "Classic" || item.category === "Breakfast" || item.category === "Feast");
    if (activeTab === "Drinks") return menuItems.filter(item => item.category === "Beverage");
    if (activeTab === "Desserts") return menuItems.filter(item => item.category === "Dessert");
    return menuItems;
  };

  const filteredItems = getFilteredItems();
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    // Reset to page 1 on tab change
    setCurrentPage(1);
  }, [activeTab]);

  useEffect(() => {
    // GSAP Scroll Animations
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [paginatedItems]); // Re-run animation when items change

  return (
    <section ref={sectionRef} className="bg-transparent w-full py-24 md:py-32 relative overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--color-brand-gold-soft)] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[var(--color-brand-maroon-royal)] opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
          
        {/* Header Area */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 lg:mb-24 gap-10">
          
          {/* Title */}
          <h2 className="font-serif text-[50px] md:text-[68px] lg:text-[82px] text-[#1a1a1a] leading-[1.05] tracking-tight max-w-[450px]">
            Foods that<br />we serve
          </h2>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-8 md:gap-14 pb-2">
            {['All', 'Biryani', 'Tiffins', 'Drinks', 'Desserts'].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                className={`relative group text-[14px] md:text-[16px] font-sans tracking-[0.15em] pb-4 uppercase transition-colors duration-300 ${
                  activeTab === cat 
                    ? 'text-[var(--color-brand-maroon-royal)] font-bold' 
                    : 'text-[#888] hover:text-[#222] font-semibold'
                }`}
              >
                {cat}
                
                {/* Active Underline */}
                {activeTab === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-brand-maroon-royal)]"></span>
                )}
                
                {/* Hover Underline for inactive tabs */}
                {activeTab !== cat && (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#222] transition-all duration-400 ease-out group-hover:w-full"></span>
                )}
              </button>
            ))}
          </div>

        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {paginatedItems.map((item, index) => (
            <div 
              key={`${item.title}-${index}`} 
              ref={el => { cardsRef.current[index] = el; }}
              className="group cursor-pointer flex flex-col items-center text-center w-full"
            >
              {/* Image Container with Hover Overlay */}
              <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.06)] mb-6 transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-3 group-hover:shadow-[0_30px_60px_rgba(121,27,27,0.15)] bg-white">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />

                {/* Rating Badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-[#cc1c1c] text-[12px]">★</span>
                  <span className="text-[#222] font-sans text-[12px] font-bold">{item.rating}</span>
                </div>
              </div>
              
              {/* Card Meta Details */}
              <div className="w-full flex flex-col items-center">
                <span className="text-[var(--color-brand-gold-solid)] uppercase tracking-[0.2em] text-[10px] font-bold mb-2 opacity-80">
                  {item.category}
                </span>
                
                <h3 className="font-serif text-[22px] md:text-[26px] text-[#111] leading-tight group-hover:text-[var(--color-brand-maroon-royal)] transition-colors duration-300 px-2">
                  {item.title}
                </h3>
                
                <div className="mt-3 flex items-center justify-center gap-4 w-full">
                  <div className="w-8 h-[1px] bg-[#ddd] group-hover:bg-[var(--color-brand-maroon-royal)] transition-colors duration-300"></div>
                  <span className="font-serif text-[20px] text-[#444] italic group-hover:text-[var(--color-brand-maroon-royal)] transition-colors duration-300">
                    {item.price}
                  </span>
                  <div className="w-8 h-[1px] bg-[#ddd] group-hover:bg-[var(--color-brand-maroon-royal)] transition-colors duration-300"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16 md:mt-24">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full border border-[#ddd] flex items-center justify-center text-[#222] hover:bg-[var(--color-brand-maroon-royal)] hover:text-white hover:border-[var(--color-brand-maroon-royal)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#222] disabled:hover:border-[#ddd]"
              aria-label="Previous page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-sans text-[15px] font-medium transition-all duration-300 ${
                    currentPage === i + 1 
                      ? 'bg-[var(--color-brand-maroon-royal)] text-white shadow-md' 
                      : 'text-[#666] hover:bg-black/5'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full border border-[#ddd] flex items-center justify-center text-[#222] hover:bg-[var(--color-brand-maroon-royal)] hover:text-white hover:border-[var(--color-brand-maroon-royal)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#222] disabled:hover:border-[#ddd]"
              aria-label="Next page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
