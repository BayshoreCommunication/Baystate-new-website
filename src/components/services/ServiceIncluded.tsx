import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { IconRenderer } from "@/components/common/IconRenderer";
import { cn } from "@/lib/utils";

interface IncludedItem {
  icon: string;
  iconName?: string;
  title: string;
  description: string;
}

interface ServiceIncludedProps {
  sectionLabel?: string;
  heading?: string;
  items: IncludedItem[];
  bgVariant?: "warm-white" | "white";
}

export function ServiceIncluded({
  sectionLabel = "What's Included",
  heading = "Services We Provide",
  items,
  bgVariant = "warm-white",
}: ServiceIncludedProps) {
  const isFourCols = items.length > 6;
  const isWhiteBg = bgVariant === "white";

  return (
    <section
      className={cn("py-20 sm:py-24", isWhiteBg ? "bg-white" : "bg-warm-white")}
    >
      <Container>
        <ScrollReveal>
          <SectionHeading label={sectionLabel} title={heading} />
        </ScrollReveal>

        <div
          className={cn(
            "grid gap-5",
            isFourCols
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50} className="h-full">
              <div
                className={cn(
                  "group h-full rounded-lg p-7 sm:p-8 border border-warm-gray transition-all duration-300 ease-out hover:border-terracotta/30 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(11,30,63,0.08)] flex flex-col",
                  isWhiteBg ? "bg-warm-white" : "bg-white",
                )}
              >
                <div className="text-[26px] text-terracotta mb-3.5 flex items-center transition-transform duration-300 group-hover:scale-110 origin-left">
                  <IconRenderer
                    name={item.iconName}
                    fallbackEmoji={item.icon}
                    size={26}
                  />
                </div>
                <h3 className="text-[15px] font-semibold text-navy mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-primary-muted leading-[1.7] mt-auto">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
