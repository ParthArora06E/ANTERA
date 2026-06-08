import React from "react";

export const FeaturesStrip = () => {
  const features = [
    "100% Authentic Hyderabadi Spices",
    "✨",
    "Fast 30-Min Delivery",
    "✨",
    "Premium Royal Packaging",
    "✨",
    "Award Winning Dum Biryani",
    "✨",
    "100% Authentic Hyderabadi Spices",
    "✨",
    "Fast 30-Min Delivery",
    "✨",
    "Premium Royal Packaging",
    "✨",
    "Award Winning Dum Biryani",
    "✨"
  ];

  return (
    <div className="bg-[#6F1612] border-y border-[#C9942E]/50 overflow-hidden py-3 relative z-20">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex w-1/2 justify-around items-center min-w-max">
          {features.map((feature, idx) => (
            <span key={idx} className={`mx-4 font-sans text-sm uppercase tracking-widest ${feature === "✨" ? "text-[#C9942E] text-xs" : "text-[#F7EBD6] font-semibold"}`}>
              {feature}
            </span>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center min-w-max">
          {features.map((feature, idx) => (
            <span key={`dup-${idx}`} className={`mx-4 font-sans text-sm uppercase tracking-widest ${feature === "✨" ? "text-[#C9942E] text-xs" : "text-[#F7EBD6] font-semibold"}`}>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
