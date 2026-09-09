import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";

interface ServiceOverviewProps {
  badgeLabel?: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export function ServiceOverview({
  badgeLabel = "Overview",
  heading,
  paragraphs,
  image,
  imageAlt,
}: ServiceOverviewProps) {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
              <span className="w-6 h-[1px] bg-terracotta block" />
              <span>{badgeLabel}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-navy font-normal leading-[1.2] mb-5">
              {heading}
            </h2>

            <div className="space-y-4 text-primary-muted text-base leading-[1.8]">
              {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image src={image} alt={imageAlt} fill className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
