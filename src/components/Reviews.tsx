"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

export const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Verma",
      date: "2 days ago",
      text: "Absolutely the best dum biryani in Sydney. The meat was tender, rice perfectly cooked, and the packaging was premium. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      date: "1 week ago",
      text: "Ordered the family bucket for a get-together. Everyone loved it! The chicken 65 starter was perfectly spicy. Will order again.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      date: "2 weeks ago",
      text: "Authentic Hyderabadi taste. Reminded me of home. The raita and mirchi ka salan were exactly how they should be.",
      rating: 5,
    },
  ];

  return (
    <section className="section-container">
      <SectionHeading 
        eyebrow="Loved by Biryani Lovers"
        title="What Our Guests Say"
        subtitle="Don't just take our word for it. Here's what Sydney is saying about Antera Biryani Co."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white p-8 rounded-[16px] shadow-sm border border-[var(--color-brand-gold-soft)]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group"
          >
            {/* Subtle quote icon mark */}
            <div className="absolute top-6 right-6 text-[var(--color-brand-gold-soft)]/20 font-serif text-[60px] leading-none group-hover:text-[var(--color-brand-gold-soft)]/40 transition-colors">
              "
            </div>

            <div className="flex gap-1 mb-4 text-[var(--color-brand-gold-royal)]">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <p className="text-[15px] text-[var(--color-brand-text-dark)] leading-relaxed mb-6 italic relative z-10 font-medium">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-brand-maroon-deep)] text-white flex items-center justify-center font-bold text-[14px]">
                {review.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[var(--color-brand-text-dark)] leading-tight">{review.name}</span>
                <span className="text-[12px] text-gray-500">{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-[var(--color-brand-gold-soft)]/30 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={20} height={20} />
          <span className="text-[14px] font-bold text-[var(--color-brand-text-dark)]">4.8 Stars</span>
          <span className="text-[14px] text-gray-500 font-medium">(250+ Reviews)</span>
        </div>
      </div>
    </section>
  );
};
