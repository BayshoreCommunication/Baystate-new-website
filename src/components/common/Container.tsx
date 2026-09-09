import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-[1140px] mx-auto px-6 sm:px-8 md:px-12 lg:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
