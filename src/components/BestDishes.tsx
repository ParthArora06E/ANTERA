import React from "react";
import { FadeIn } from "./ui/FadeIn";

export const BestDishes = () => {
  const categories = ["DOSAS", "IDLIS", "BIRYANI", "SNACKS"];
  
  const dishes = [
    {
      name: "MASALA DOSA",
      description: "Crispy rice crepe filled with spiced potato masala",
      price: "$ 14.00 AUD",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg"
    },
    {
      name: "IDLI SAMBAR",
      description: "Soft steamed rice cakes submerged in a flavorful lentil stew",
      price: "$ 12.00 AUD",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.JPG"
    },
    {
      name: "MUTTON BIRYANI",
      description: "Slow-cooked mutton with fragrant rice and saffron",
      price: "$ 22.00 AUD",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "MEDU VADA",
      description: "Crispy savory lentil donuts served with coconut chutney",
      price: "$ 10.00 AUD",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "SOUTH INDIAN THALI",
      description: "A grand platter featuring rice, curries, papad, and pickle",
      price: "$ 26.00 AUD",
      image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "CHICKEN DUM BIRYANI",
      description: "Aromatic basmati rice cooked with tender marinated chicken",
      price: "$ 18.00 AUD",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="bg-transparent w-full py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-24 gap-8">
          <div>
            <FadeIn direction="left" delay={0.1}>
              <h2 className="font-serif text-[42px] md:text-[50px] text-[#111] tracking-wide uppercase leading-none font-normal">
                THE BEST DISHES
              </h2>
            </FadeIn>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-10 pb-2">
            <FadeIn direction="right" delay={0.2}>
              <div className="flex flex-wrap gap-6 md:gap-10">
                {categories.map((cat, idx) => (
                  <button 
                    key={idx} 
                    className={`text-[13px] uppercase tracking-widest font-serif transition-colors ${
                      idx === 0 
                        ? "text-[#cc1c1c] border-b border-[#cc1c1c] pb-2" 
                        : "text-[#555] hover:text-[#cc1c1c] pb-2 border-b border-transparent"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
          {dishes.map((dish, idx) => (
            <FadeIn direction="up" delay={0.1 * (idx % 4)} key={idx}>
              <div className="flex items-start border-b border-[#eee] pb-10 group cursor-pointer h-full">
                {/* Image */}
                <div className="w-[110px] h-[110px] shrink-0 overflow-hidden mr-8">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Info */}
                <div className="flex-1 pr-4 pt-1">
                  <h3 className="font-serif text-[18px] text-[#222] mb-3 uppercase tracking-widest group-hover:text-[#cc1c1c] transition-colors">{dish.name}</h3>
                  <p className="text-[14px] text-[#777] font-sans leading-relaxed w-full max-w-[280px]">{dish.description}</p>
                </div>
                
                {/* Price */}
                <div className="text-[15px] font-serif text-[#222] tracking-wider shrink-0 pt-1">
                  {dish.price}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
};
