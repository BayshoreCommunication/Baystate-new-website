import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";

interface ProcessStepItem {
  stepNum: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  sectionLabel?: string;
  heading?: string;
  intro?: string;
  steps: ProcessStepItem[];
}

export function ServiceProcess({
  sectionLabel = "Our Approach",
  heading = "How We Work",
  intro,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="py-20 sm:py-24 bg-navy">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label={sectionLabel}
            title={heading}
            description={intro}
            isDark
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b sm:border-b-0 border-white/[0.08] lg:border-none">
          {steps.map((step, index) => (
            <ScrollReveal
              key={index}
              delay={index * 60}
              className={`group p-7 sm:p-9 border-white/[0.08] transition-colors duration-200 hover:bg-white/[0.03] ${
                index < steps.length - 1 ? "lg:border-r" : ""
              } ${index % 2 === 0 ? "sm:border-r lg:border-r" : ""} ${
                index < 2 ? "sm:border-b lg:border-b-0" : ""
              }`}
            >
              <div className="font-serif text-[48px] sm:text-[52px] text-terracotta group-hover:text-terracotta-light leading-none mb-4 transition-all duration-300 group-hover:scale-105 origin-left select-none">
                {step.stepNum}
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2.5">
                {step.title}
              </h3>
              <p className="text-[13px] text-white/60 leading-[1.7]">
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
