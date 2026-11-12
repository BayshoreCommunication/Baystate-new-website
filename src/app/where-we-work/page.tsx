import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { CtaBand } from "@/components/common/CtaBand";
import { whereWeWorkData } from "@/data/whereWeWork";
import { siteConfig } from "@/data/site";
import { MapPin, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `${whereWeWorkData.title} — ${siteConfig.name}`,
  description: whereWeWorkData.metaDescription,
};

export default function WhereWeWorkPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Where We Work" }]}
        eyebrow="Where We Work"
        title={whereWeWorkData.heading}
        description="Shaping every planning project around the state and local rules that apply."
        bgImage="https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
                <span className="w-6 h-[1px] bg-terracotta block" />
                <span>Local Rules, National Reach</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-navy font-normal leading-[1.25] mb-6">
                {whereWeWorkData.heading}
              </h2>

              <div className="space-y-5 text-primary-muted text-base sm:text-lg leading-[1.8]">
                {whereWeWorkData.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="bg-warm-white p-8 sm:p-10 rounded-2xl border border-warm-gray shadow-xs space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-1">
                      Massachusetts Home Base
                    </h3>
                    <p className="text-sm text-primary-muted leading-relaxed">
                      Deep familiarity with Massachusetts general laws, Chapter
                      40A &amp; 40B, MBTA Communities zoning, and state grant
                      frameworks like One Stop for Growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-1">
                      Nationwide Municipal &amp; Regional Reach
                    </h3>
                    <p className="text-sm text-primary-muted leading-relaxed">
                      Tailored compliance with HUD programs, FEMA hazard
                      mitigation guidelines, and local statutory jurisdictions
                      across all 50 states.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-1">
                      Rural to Large Metro Experience
                    </h3>
                    <p className="text-sm text-primary-muted leading-relaxed">
                      From small rural towns with limited staff capacity to fast-growing
                      suburbs and major metropolitan regions.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Tell Us About Your Project"
        description="Let us know what your community is facing, and we’ll let you know how we can help."
        buttonText={whereWeWorkData.ctaText}
        buttonHref={whereWeWorkData.ctaHref}
      />
    </main>
  );
}

