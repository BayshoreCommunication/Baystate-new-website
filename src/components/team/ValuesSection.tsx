import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { companyValues } from "@/data/team";

export function ValuesSection() {
  return (
    <section className="py-20 sm:py-24 bg-navy">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="What Drives Us"
            title="Our Values"
            description="These aren't aspirational words on a wall — they're the principles that shape how we work with every client and every community."
            isDark
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.05]">
          {companyValues.map((val, idx) => (
            <ScrollReveal key={idx} delay={idx * 50} className="h-full">
              <div className="h-full bg-navy/90 p-9 sm:p-10 border border-white/[0.05] flex flex-col">
                <div className="text-[28px] mb-4.5">{val.icon}</div>
                <h3 className="font-serif text-[22px] text-white font-normal mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-white/50 leading-[1.7]">
                  {val.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
