import React from "react";
import { Button } from "./Button";

interface CtaBandProps {
  heading: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaBand({
  heading,
  description,
  buttonText = "Get In Touch",
  buttonHref = "/#contact",
}: CtaBandProps) {
  return (
    <div className="bg-terracotta py-16 sm:py-[70px] px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3.5">
          {heading}
        </h2>
        <p className="text-white/80 text-base font-light mb-9">{description}</p>
        <Button href={buttonHref} variant="white">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
