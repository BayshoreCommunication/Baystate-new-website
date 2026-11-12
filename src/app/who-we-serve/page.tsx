import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { CtaBand } from "@/components/common/CtaBand";
import { whoWeServeData } from "@/data/whoWeServe";
import { siteConfig } from "@/data/site";
import { IconRenderer } from "@/components/common/IconRenderer";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: `${whoWeServeData.title} — ${siteConfig.name}`,
  description: whoWeServeData.metaDescription,
};

export default function WhoWeServePage() {
  const { heading, subheading, sectors } = whoWeServeData;

  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Who We Serve" }]}
        eyebrow="Who We Serve"
        title={heading}
        description={subheading}
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 sm:py-24 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sectors.map((sec, idx) => {
              const hasChecklist = sec.checklist && sec.checklist.length > 0;
              return (
                <ScrollReveal
                  key={sec.title}
                  delay={idx * 50}
                  className={hasChecklist ? "md:col-span-2 lg:col-span-3" : "h-full"}
                >
                  <div className="h-full bg-white rounded-xl p-8 sm:p-9 border border-warm-gray shadow-xs hover:border-terracotta/40 hover:shadow-md transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center mb-5">
                      <IconRenderer name={sec.iconName} size={24} />
                    </div>

                    <h3 className="font-serif text-2xl text-navy font-normal mb-3">
                      {sec.title}
                    </h3>

                    <p className="text-primary-muted text-sm leading-[1.75] mb-5">
                      {sec.description}
                    </p>

                    {hasChecklist && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 pt-6 border-t border-warm-gray">
                        {sec.checklist!.map((item, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2.5 text-xs text-primary-text leading-relaxed bg-warm-white p-3 rounded-lg border border-warm-gray/60"
                          >
                            <span className="w-4 h-4 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Let’s Work Together"
        description="Whether you're a municipality, housing authority, planner, or builder, we shape every project to your team."
        buttonText="Let’s Work Together"
        buttonHref="/#contact"
      />
    </main>
  );
}

