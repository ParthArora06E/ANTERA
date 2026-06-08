import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-300 rounded";
  
  const variants = {
    primary: "bg-[#6F1612] text-[#F7EBD6] hover:bg-[#520f0d] shadow-md hover:shadow-lg hover:-translate-y-0.5 px-6 py-3 text-sm",
    secondary: "bg-[#C9942E] text-[#071827] hover:bg-[#b08127] shadow-md hover:shadow-lg hover:-translate-y-0.5 px-6 py-3 text-sm",
    outline: "border border-[#6F1612] text-[#6F1612] bg-transparent hover:bg-[#6F1612] hover:text-[#F7EBD6] px-6 py-3 text-sm"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
