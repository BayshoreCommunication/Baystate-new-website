import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "ghost" | "white" | "terra";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-200 text-sm tracking-wider font-medium text-center active:scale-[0.98] select-none cursor-pointer";

  const variants = {
    primary:
      "bg-terracotta hover:bg-terracotta-light text-white px-8 py-3.5 rounded hover:-translate-y-0.5 shadow-sm hover:shadow-[0_8px_24px_rgba(181,99,74,0.35)]",
    ghost: "text-white/65 hover:text-white font-normal gap-2 group",
    white:
      "bg-white text-terracotta hover:opacity-95 font-semibold px-9 py-3.5 rounded shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)]",
    terra:
      "bg-terracotta hover:bg-terracotta-light text-white px-7 py-3 rounded-md hover:-translate-y-0.5 shadow-sm hover:shadow-[0_8px_24px_rgba(181,99,74,0.35)]",
  };

  const combinedClasses = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {variant === "ghost" && (
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        )}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {variant === "ghost" && (
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
}
