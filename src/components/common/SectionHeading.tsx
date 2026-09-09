import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  isDark?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  isDark = false,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center mx-auto" : "text-left",
        "mb-10 sm:mb-12",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta",
          align === "center" && "justify-center",
        )}
      >
        <span className="w-6 h-[1px] bg-terracotta block" />
        <span>{label}</span>
      </div>

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] mb-5",
          isDark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base font-light leading-[1.75] max-w-[540px]",
            align === "center" && "mx-auto",
            isDark ? "text-white/50" : "text-text-light",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
