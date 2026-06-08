import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const Flourish = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`hidden sm:block w-20 md:w-28 lg:w-36 text-[#C8952E] ${className}`} 
    viewBox="0 0 100 15" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: "drop-shadow(0px 2px 4px rgba(200,149,46,0.3))" }}
  >
    {/* Straighter, thicker line */}
    <rect x="0" y="6.75" width="45" height="1.5" />
    {/* Sharper First diamond */}
    <path d="M54 7.5L58 3.5L62 7.5L58 11.5Z" />
    {/* Thicker Center circle ring */}
    <path fillRule="evenodd" clipRule="evenodd" d="M72 13C68.9624 13 66.5 10.5376 66.5 7.5C66.5 4.46243 68.9624 2 72 2C75.0376 2 77.5 4.46243 77.5 7.5C77.5 10.5376 75.0376 13 72 13ZM72 10.5C73.6569 10.5 75 9.15685 75 7.5C75 5.84315 73.6569 4.5 72 4.5C70.3431 4.5 69 5.84315 69 7.5C69 9.15685 70.3431 10.5 72 10.5Z" />
    {/* Prominent Inner dot */}
    <circle cx="72" cy="7.5" r="1.5" />
    {/* Second diamond */}
    <path d="M82 7.5L86 3.5L90 7.5L86 11.5Z" />
    {/* Final dots */}
    <circle cx="96" cy="7.5" r="2" />
    <circle cx="100" cy="7.5" r="1" />
  </svg>
);

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  eyebrow, 
  title, 
  subtitle, 
  align = "center" 
}) => {
  return (
    <div className={`mb-10 md:mb-14 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      
      {eyebrow && (
        <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.25em] text-[#C8952E] mb-3 drop-shadow-sm">
          {eyebrow}
        </span>
      )}
      
      <div className={`flex items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-4 ${align === "left" ? "justify-start" : ""}`}>
        {/* Left Flourish (only show on centered headers) */}
        {align === "center" && <Flourish className="rotate-180" />}
        
        <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] font-black uppercase text-[var(--color-brand-maroon-royal)] leading-tight shrink-0 drop-shadow-sm">
          {title}
        </h2>
        
        {/* Right Flourish (only show on centered headers) */}
        {align === "center" && <Flourish />}
      </div>
      
      {/* Decorative divider - removed since we have flourishes now, except for left aligned */}
      {align === "left" && (
        <div className="w-20 h-1 bg-[#C8952E]/80 mb-4 rounded-full"></div>
      )}
      
      {subtitle && (
        <p className={`text-[15px] md:text-[16px] text-[var(--color-brand-text-muted)] font-medium max-w-2xl ${align === "center" ? "mt-2" : ""}`}>
          {subtitle}
        </p>
      )}
      
    </div>
  );
};
