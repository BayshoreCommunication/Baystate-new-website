"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "scale" | "fade" | "left" | "right";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const variantClass = {
    up: "",
    scale: "reveal-scale",
    fade: "reveal-fade",
    left: "reveal-left",
    right: "reveal-right",
  }[variant];

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
      className={cn(
        "reveal-item",
        variantClass,
        isVisible && "visible",
        className,
      )}
    >
      {children}
    </div>
  );
}
