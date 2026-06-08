import React from "react";
import { ShoppingBag, Truck, Users, Crown, ArrowRight } from "lucide-react";

export const OrderYourWay = () => {
  const options = [
    {
      title: "Store Pickup",
      desc: "Order ahead and skip the line",
      icon: ShoppingBag,
      link: "Order Now",
    },
    {
      title: "Fast Delivery",
      desc: "Hot & fresh to your doorstep",
      icon: Truck,
      link: "Order Delivery",
    },
    {
      title: "Family Buckets",
      desc: "Perfect for group meals",
      icon: Users,
      link: "View Buckets",
    },
    {
      title: "Royal Catering",
      desc: "For your special occasions",
      icon: Crown,
      link: "Enquire Now",
    },
  ];

  return (
    <section className="section-container !py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {options.map((opt, idx) => {
          const Icon = opt.icon;
          return (
            <div 
              key={idx} 
              className="group premium-card !rounded-[12px] p-6 flex flex-col items-start cursor-pointer hover:bg-white"
            >
              <div className="w-[46px] h-[46px] rounded-full bg-[var(--color-brand-cream-bg)] border border-[var(--color-brand-gold-soft)]/40 flex items-center justify-center mb-5 group-hover:bg-[var(--color-brand-maroon-deep)] transition-colors duration-300">
                <Icon className="w-[20px] h-[20px] text-[var(--color-brand-maroon-royal)] group-hover:text-[var(--color-brand-gold-soft)] transition-colors duration-300" />
              </div>
              
              <h3 className="font-serif text-[18px] font-bold text-[var(--color-brand-text-dark)] mb-2 group-hover:text-[var(--color-brand-maroon-royal)] transition-colors">
                {opt.title}
              </h3>
              
              <p className="text-[14px] text-[var(--color-brand-text-muted)] mb-5 flex-grow">
                {opt.desc}
              </p>
              
              <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-[var(--color-brand-maroon-deep)] mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                {opt.link}
                <ArrowRight className="w-[14px] h-[14px] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
