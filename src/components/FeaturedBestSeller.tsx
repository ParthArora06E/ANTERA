"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, CheckCircle } from "lucide-react";

export const FeaturedBestSeller = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: "f1",
    name: "Royal Chicken Dum Biryani",
    price: 299,
    image: "https://images.pexels.com/photos/32825917/pexels-photo-32825917.jpeg?auto=compress&cs=tinysrgb&w=1800",
  };

  const handleAdd = () => {
    addToCart({ ...product, quantity });
    setQuantity(1); // reset after add
  };

  return (
    <section className="section-compact !py-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="premium-card !rounded-[20px] bg-[var(--color-brand-cream-card)] flex-row shadow-lg">
          <div className="flex flex-col md:flex-row w-full h-auto">
            
            {/* Image Side - Reduced Height */}
            <div className="w-full md:w-[45%] relative h-[260px] md:h-auto min-h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-5 left-5 bg-[var(--color-brand-maroon-deep)] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md z-10">
                Most Ordered
              </div>
            </div>

            {/* Content Side - Tighter Padding */}
            <div className="w-full md:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center relative">
              <h2 className="font-serif text-[28px] md:text-[34px] font-black uppercase text-[var(--color-brand-maroon-royal)] leading-[1.1] mb-3">
                {product.name}
              </h2>
              
              <p className="text-[14px] md:text-[15px] text-[var(--color-brand-text-dark)] mb-5 leading-relaxed font-medium">
                Fragrant basmati rice, slow-cooked chicken, roasted spices and the unmistakable aroma of traditional dum.
              </p>

              <div className="space-y-2.5 mb-6">
                {[
                  "Serves 1–2",
                  "Medium Spicy",
                  "Fresh Raita & Salan included"
                ].map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-[16px] h-[16px] text-[var(--color-brand-gold-royal)]" />
                    <span className="text-[13px] text-[var(--color-brand-text-muted)] font-bold uppercase tracking-wide">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-5 mb-6">
                <div className="text-[32px] font-bold text-[var(--color-brand-maroon-deep)]">
                  ₹{product.price}
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center gap-3 bg-white rounded-full border border-[var(--color-brand-gold-soft)]/50 p-1 shadow-sm h-[44px]">
                  <button 
                    className="w-[36px] h-full flex items-center justify-center rounded-full hover:bg-[var(--color-brand-cream-bg)] text-[var(--color-brand-text-dark)] transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-[16px] h-[16px]" />
                  </button>
                  <span className="font-bold text-[15px] w-6 text-center">{quantity}</span>
                  <button 
                    className="w-[36px] h-full flex items-center justify-center rounded-full hover:bg-[var(--color-brand-cream-bg)] text-[var(--color-brand-text-dark)] transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-[16px] h-[16px]" />
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAdd}
                className="btn-primary w-full sm:w-auto self-start !rounded-full !px-8 shadow-md"
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                Add to Cart
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
