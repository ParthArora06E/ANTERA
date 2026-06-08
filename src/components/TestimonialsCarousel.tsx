import React from "react";
import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";

const reviews = [
  {
    name: "Rahul Verma",
    rating: 5,
    text: "The best authentic Hyderabadi biryani I've had outside of India. The packaging was incredibly premium and the taste was royal.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Ordered the family bucket for a weekend gathering. Everyone loved it! The meat was tender and spices were perfect.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Arjun Reddy",
    rating: 5,
    text: "Top tier service and food. The Mirchi Bajji reminded me of home. Will definitely be a regular customer now.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const TestimonialsCarousel = () => {
  return (
    <section className="py-24 bg-[#F7EBD6] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9942E]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading title="Royal Reviews" subtitle="Hear from our satisfied customers who experienced the feast." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 flex flex-col relative animate-on-scroll group" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-4xl text-[#C9942E] opacity-20 absolute top-6 right-6 font-serif">"</div>
              
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-[#C9942E]">★</span>
                ))}
              </div>
              
              <p className="text-gray-800 font-serif italic mb-8 flex-grow leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9942E]/50 group-hover:border-[#C9942E] transition-colors">
                  <Image src={review.avatar} alt={review.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#071827] text-sm uppercase tracking-wide">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
