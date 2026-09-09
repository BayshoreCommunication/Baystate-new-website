import React from "react";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { CountUp } from "@/components/common/CountUp";

export function StatsBar() {
  return (
    <div className="bg-warm-white border-b border-warm-gray">
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1140px] mx-auto">
        {siteConfig.stats.map((stat, index) => (
          <ScrollReveal
            key={index}
            delay={index * 90}
            className={`py-8 sm:py-[38px] px-4 sm:px-6 text-center border-warm-gray ${
              index % 2 === 0 ? "border-r" : ""
            } ${index < 2 ? "border-b lg:border-b-0" : ""} ${
              index < 3 ? "lg:border-r" : "lg:border-r-0"
            }`}
          >
            <div className="font-serif text-3xl sm:text-[44px] text-navy leading-none mb-2">
              <CountUp value={stat.num} duration={1400} />
            </div>
            <div className="text-[10px] sm:text-[11px] text-gray-mid tracking-[0.13em] uppercase font-medium">
              {stat.label}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
