import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { IconRenderer } from "@/components/common/IconRenderer";
import { servicesData } from "@/data/services";

export function ServicesSection() {
  const standardServices = servicesData.slice(0, 6);
  const featuredService = servicesData[6]; // GovTech

  return (
    <section id="services" className="py-20 sm:py-24 bg-navy">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="From comprehensive master plans to targeted technical assistance — we deliver the planning expertise your community needs at every scale."
            isDark
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.07] rounded-xl overflow-hidden border border-white/[0.07]">
          {standardServices.map((service, index) => (
            <ScrollReveal
              key={service.slug}
              delay={index * 50}
              className="h-full"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-navy/90 hover:bg-white/[0.06] p-8 sm:p-9 transition-colors duration-200 border border-white/[0.05]"
              >
                <div className="w-[46px] h-[46px] border border-terracotta/40 rounded-lg flex items-center justify-center text-terracotta text-[22px] mb-6 transition-colors group-hover:border-terracotta">
                  <IconRenderer
                    name={service.iconName}
                    fallbackEmoji={service.icon}
                    size={22}
                  />
                </div>

                <h3 className="font-serif text-[22px] text-white font-normal mb-3 leading-[1.2]">
                  {service.title}
                </h3>

                <p className="text-[13.5px] text-white/50 leading-[1.7] mb-4">
                  {service.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] tracking-[0.1em] uppercase text-terracotta border border-terracotta/30 px-2.5 py-1 rounded-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-terracotta tracking-[0.06em] uppercase transition-all duration-200 group-hover:gap-2.5">
                  <span>View Service</span>
                  <span>→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}

          {/* Featured GovTech Card - Spans full width on desktop */}
          {featuredService && (
            <ScrollReveal
              delay={350}
              className="col-span-1 md:col-span-2 lg:col-span-3"
            >
              <Link
                href={`/services/${featuredService.slug}`}
                className="group block bg-navy/90 hover:bg-white/[0.06] p-8 sm:p-9 transition-colors duration-200 border border-white/[0.05]"
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="w-[46px] h-[46px] border border-terracotta/40 rounded-lg flex items-center justify-center text-terracotta text-[22px] transition-colors group-hover:border-terracotta">
                    <IconRenderer
                      name={featuredService.iconName}
                      fallbackEmoji={featuredService.icon}
                      size={22}
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-[22px] text-white font-normal mb-3 leading-[1.2]">
                      {featuredService.title}
                    </h3>
                    <p className="text-[13.5px] text-white/50 leading-[1.7] max-w-4xl">
                      {featuredService.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {featuredService.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] tracking-[0.1em] uppercase text-terracotta border border-terracotta/30 px-2.5 py-1 rounded-[3px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-terracotta tracking-[0.06em] uppercase transition-all duration-200 group-hover:gap-2.5">
                      <span>View Service</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}
        </div>
      </Container>
    </section>
  );
}
