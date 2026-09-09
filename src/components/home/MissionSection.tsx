import React from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/common/Button";

export function MissionSection() {
  return (
    <section id="mission" className="py-20 sm:py-24 bg-white text-center">
      <div className="max-w-[780px] mx-auto px-6">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
            <span className="w-6 h-[1px] bg-terracotta block" />
            <span>Our Mission</span>
            <span className="w-6 h-[1px] bg-terracotta block" />
          </div>

          <div className="w-[50px] h-[2px] bg-terracotta mx-auto mb-9" />

          <p className="font-serif italic text-2xl sm:text-3xl lg:text-[38px] text-navy font-normal leading-[1.4] mb-7">
            &ldquo;To shape communities that are sustainable, inclusive, and
            resilient — where people of all ages, incomes, and backgrounds can
            thrive.&rdquo;
          </p>

          <p className="text-primary-muted text-base leading-[1.8] mb-9 font-normal">
            We partner with municipalities, nonprofits, and private
            organizations to navigate complex planning challenges with clarity
            and creativity. By combining technical expertise with authentic
            community engagement, we deliver practical solutions that balance
            growth, equity, and environmental stewardship.
          </p>

          <Button href="#contact" variant="primary">
            Work With Us
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
