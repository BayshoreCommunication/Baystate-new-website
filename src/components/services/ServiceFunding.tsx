import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";

interface FundingCard {
  title: string;
  examples: string;
}

interface ServiceFundingProps {
  sectionLabel?: string;
  heading?: string;
  cards: FundingCard[];
}

export function ServiceFunding({
  sectionLabel = "Funding Sources",
  heading = "Programs We Write For",
  cards,
}: ServiceFundingProps) {
  return (
    <section className="py-20 sm:py-24 bg-navy">
      <Container>
        <ScrollReveal>
          <SectionHeading label={sectionLabel} title={heading} isDark />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/[0.06] rounded-lg overflow-hidden border border-white/[0.05]">
          {cards.map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 60} className="h-full">
              <div className="h-full bg-navy/90 p-8 border border-white/[0.05]">
                <div className="text-sm font-semibold text-white mb-2.5">
                  {card.title}
                </div>
                <div className="text-[12.5px] text-white/45 leading-[1.7]">
                  {card.examples}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
