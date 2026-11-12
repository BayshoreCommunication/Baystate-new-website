import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { IconRenderer } from "@/components/common/IconRenderer";
import { servicesData } from "@/data/services";

const homeServicesCopy = [
  {
    title: "Community Planning",
    slug: "community-planning",
    iconName: "Building2",
    description:
      "Baystate Planning & Consulting Group prepares comprehensive plans, parks and open space plans, and housing plans for cities, counties, towns, and nonprofits. Each plan turns your community’s goals into specific projects, costs, and timelines that boards and residents can support, from rural towns to growing metro areas.",
    tags: ["Comprehensive Plans", "Parks & Open Space", "Housing Plans"],
  },
  {
    title: "Zoning",
    slug: "zoning-permitting",
    iconName: "Compass",
    description:
      "We help communities keep local zoning codes current, compliant, and easy to administer. Our planners advise on state housing requirements, code updates, overlay districts, transit-oriented zoning, and accessory dwelling units.",
    tags: ["Code Updates", "Overlay Districts", "Transit-Oriented", "ADUs"],
  },
  {
    title: "Housing and Community Development",
    slug: "housing-community-development",
    iconName: "Home",
    description:
      "We help communities plan affordable housing, from big-city neighborhoods to small towns and older industrial towns. We connect housing policy, funding sources, and local staff capacity, so more residents can find stable housing.",
    tags: ["Affordable Housing", "Policy & Funding", "Staff Capacity"],
  },
  {
    title: "Technical Assistance",
    slug: "technical-assistance",
    iconName: "Map",
    description:
      "We prepare grant applications for state and federal programs, such as the Community One Stop for Growth in Massachusetts, prepare boards for public hearings, and review permits. We also support planning commissions and zoning boards that operate with limited staff and packed agendas.",
    tags: ["Grant Applications", "Hearing Prep", "Permit Review"],
  },
];

interface ServicesSectionProps {
  showAll?: boolean;
}

export function ServicesSection({ showAll = false }: ServicesSectionProps) {
  if (showAll) {
    return (
      <section id="services" className="py-20 sm:py-24 bg-navy">
        <Container>
          <ScrollReveal>
            <SectionHeading
              label="Our Services"
              title="Comprehensive Planning Services"
              description="We serve projects of every size, from a 30-year comprehensive plan to a single permit due at the next hearing."
              isDark
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.map((service, index) => (
              <ScrollReveal
                key={service.slug}
                delay={index * 40}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-white/[0.04] hover:bg-white/[0.08] p-7 sm:p-8 rounded-xl transition-all duration-300 ease-out border border-white/[0.08] hover:border-terracotta/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]"
                >
                  <div className="w-[44px] h-[44px] border border-terracotta/40 rounded-lg flex items-center justify-center text-terracotta text-[20px] mb-5 transition-all duration-300 group-hover:border-terracotta group-hover:scale-110 group-hover:bg-terracotta/10">
                    <IconRenderer
                      name={service.iconName}
                      fallbackEmoji={service.icon}
                      size={20}
                    />
                  </div>

                  <h3 className="font-serif text-[20px] text-white font-normal mb-2.5 leading-[1.25] transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-[13px] text-white/55 leading-[1.7] mb-5 flex-1">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {service.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] tracking-[0.08em] uppercase text-terracotta border border-terracotta/30 px-2.5 py-0.5 rounded-[3px] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta tracking-[0.06em] uppercase transition-all duration-200 pt-2 border-t border-white/[0.06]">
                    <span>View Service</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Home Page 4-Service Grid exactly matching user copy
  return (
    <section id="services" className="py-20 sm:py-24 bg-navy">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="We serve projects of every size, from a 30-year comprehensive plan to a single permit due at the next hearing."
            isDark
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {homeServicesCopy.map((service, index) => (
            <ScrollReveal
              key={service.slug}
              delay={index * 60}
              className="h-full"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col h-full bg-white/[0.04] hover:bg-white/[0.08] p-8 sm:p-9 rounded-xl transition-all duration-300 ease-out border border-white/[0.08] hover:border-terracotta/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]"
              >
                <div className="w-[46px] h-[46px] border border-terracotta/40 rounded-lg flex items-center justify-center text-terracotta text-[22px] mb-5 transition-all duration-300 group-hover:border-terracotta group-hover:scale-110 group-hover:bg-terracotta/10">
                  <IconRenderer name={service.iconName} size={22} />
                </div>

                <h3 className="font-serif text-[24px] text-white font-normal mb-3 leading-[1.25]">
                  {service.title}
                </h3>

                <p className="text-[14px] text-white/60 leading-[1.75] mb-6 flex-1">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] tracking-[0.08em] uppercase text-terracotta border border-terracotta/30 px-2.5 py-1 rounded-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta tracking-[0.06em] uppercase transition-all duration-200 pt-3 border-t border-white/[0.06]">
                  <span>Explore {service.title}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Services Link */}
        <ScrollReveal delay={250} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-terracotta text-terracotta hover:bg-terracotta hover:text-white text-xs font-medium tracking-[0.1em] uppercase transition-all duration-200"
          >
            <span>Explore All 8 Planning Services</span>
            <span>→</span>
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
