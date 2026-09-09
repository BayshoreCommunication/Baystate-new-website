import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { IconRenderer } from "@/components/common/IconRenderer";
import { cn } from "@/lib/utils";

interface AudienceItem {
  icon: string;
  iconName?: string;
  label: string;
}

interface AudienceCard {
  isDark?: boolean;
  label: string;
  title: string;
  points: string[];
}

interface ServiceAudiencesProps {
  sectionLabel?: string;
  heading?: string;
  items?: AudienceItem[];
  cards?: AudienceCard[];
}

export function ServiceAudiences({
  sectionLabel = "Who It's For",
  heading = "We Work With",
  items,
  cards,
}: ServiceAudiencesProps) {
  // If GovTech 2-column detailed audience cards
  if (cards && cards.length > 0) {
    return (
      <section className="py-20 sm:py-24 bg-warm-white">
        <Container>
          <ScrollReveal>
            <SectionHeading label={sectionLabel} title={heading} />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {cards.map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div
                  className={cn(
                    "rounded-xl p-8 sm:p-10 border",
                    card.isDark
                      ? "bg-navy border-navy"
                      : "bg-white border-warm-gray",
                  )}
                >
                  <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-terracotta mb-3.5">
                    {card.label}
                  </div>
                  <h3
                    className={cn(
                      "font-serif text-2xl sm:text-[26px] font-normal mb-5",
                      card.isDark ? "text-white" : "text-navy",
                    )}
                  >
                    {card.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                    {card.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className={cn(
                          "flex items-start gap-2.5 text-sm leading-[1.5]",
                          card.isDark ? "text-white/60" : "text-primary-muted",
                        )}
                      >
                        <span className="text-terracotta text-xs mt-0.5 shrink-0">
                          →
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Regular 4-column audience cards
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading label={sectionLabel} title={heading} />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {items?.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 50}>
              <div className="text-center py-8 px-4 sm:px-5 bg-warm-white rounded-lg border-t-[3px] border-terracotta h-full flex flex-col items-center justify-center">
                <div className="text-[28px] text-terracotta mb-3 flex items-center justify-center">
                  <IconRenderer
                    name={item.iconName}
                    fallbackEmoji={item.icon}
                    size={28}
                  />
                </div>
                <div className="text-sm font-semibold text-navy leading-snug">
                  {item.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
