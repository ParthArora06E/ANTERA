import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const Flourish = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`hidden sm:block w-16 md:w-24 lg:w-32 text-[#C8952E] ${className}`} 
    viewBox="0 0 100 15" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Crisp straight line */}
    <rect x="0" y="7" width="40" height="1" />
    
    {/* Central elegant star/diamond shape */}
    <path d="M50 0L52.5 5.5L58 7.5L52.5 9.5L50 15L47.5 9.5L42 7.5L47.5 5.5L50 0Z" />
    
    {/* Two crisp dots */}
    <circle cx="68" cy="7.5" r="1.5" />
    <circle cx="76" cy="7.5" r="1.5" />
    
    {/* End line */}
    <rect x="84" y="7" width="16" height="1" />
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
