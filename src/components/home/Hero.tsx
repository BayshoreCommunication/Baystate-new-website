import React from "react";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[680px] h-[92vh] max-h-[1080px] bg-navy flex items-end px-6 sm:px-10 lg:px-[60px] pb-20 sm:pb-24 overflow-hidden pt-28 sm:pt-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
          alt="Urban landscape"
          fill
          priority
          className="object-cover object-[center_40%] opacity-[0.22]"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 hero-grid-pattern pointer-events-none" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-navy to-transparent z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[860px]">
        <div className="inline-flex items-center gap-3 text-terracotta text-[11px] font-medium tracking-[0.22em] uppercase mb-6 sm:mb-7">
          <span className="w-9 h-[1px] bg-terracotta block" />
          <span>{siteConfig.tagline}</span>
        </div>

        <h1 className="font-serif text-[42px] sm:text-[60px] lg:text-[76px] xl:text-[84px] text-white leading-[1.08] font-normal mb-6 sm:mb-7">
          We Plan with <em className="text-terracotta italic">Purpose,</em>
          <br />
          and People in Mind.
        </h1>

        <p className="text-white/60 text-base font-light max-w-[520px] leading-[1.75] mb-9 sm:mb-11">
          {siteConfig.heroSubheading}
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <Button href="#services" variant="primary">
            Explore Our Services
          </Button>
          <Button href="#about" variant="ghost">
            Meet Our Founder
          </Button>
        </div>
      </div>
    </section>
  );
}
