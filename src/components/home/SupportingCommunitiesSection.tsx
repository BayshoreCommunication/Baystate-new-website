import React from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Heart } from "lucide-react";

export function SupportingCommunitiesSection() {
  return (
    <section className="py-20 sm:py-24 bg-warm-white border-y border-warm-gray">
      <Container>
        <div className="max-w-[840px] mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
              <span className="w-6 h-[1px] bg-terracotta block" />
              <span>Community Values</span>
              <span className="w-6 h-[1px] bg-terracotta block" />
            </div>

            <div className="w-12 h-12 mx-auto mb-6 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-navy font-normal leading-[1.25] mb-6">
              Supporting Our Communities
            </h2>

            <p className="text-primary-text/80 text-lg sm:text-xl font-light leading-[1.8] max-w-2xl mx-auto">
              A healthy community has homes for people of every age, ability,
              income, and background. We stand behind communities eager to
              welcome new neighbors and grow in ways that are sustainable and
              broadly shared.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

