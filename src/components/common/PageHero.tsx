import React from "react";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { Container } from "./Container";

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  bgImage: string;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  bgImage,
}: PageHeroProps) {
  return (
    <div className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-15"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 hero-grid-pattern pointer-events-none" />

      {/* Content Container */}
      <Container className="relative z-10">
        <Breadcrumb items={breadcrumbs} />

        <div className="inline-flex items-center gap-3 text-terracotta text-[11px] font-medium tracking-[0.22em] uppercase mb-5">
          <span className="w-7 h-[1px] bg-terracotta block" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] text-white font-normal leading-[1.1] mb-5">
          {title}
        </h1>

        <p className="text-white/60 text-lg font-light max-w-[620px] leading-[1.75]">
          {description}
        </p>
      </Container>
    </div>
  );
}
