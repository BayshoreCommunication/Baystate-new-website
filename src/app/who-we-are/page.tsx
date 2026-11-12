import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { CtaBand } from "@/components/common/CtaBand";
import { servicesData } from "@/data/services";
import { founderData } from "@/data/team";
import { siteConfig } from "@/data/site";
import { IconRenderer } from "@/components/common/IconRenderer";

export const metadata: Metadata = {
  title: `Who We Are — ${siteConfig.name}`,
  description:
    "Baystate Planning is a US-based firm headquartered in Massachusetts, serving communities nationwide on housing, zoning, planning, grants, and GovTech.",
};

export default function WhoWeArePage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Who We Are" }]}
        eyebrow="Who We Are"
        title="Cross-sector expertise and a community-rooted vision"
        description="Baystate Planning & Consulting Group is a US-based planning firm headquartered in Massachusetts, serving communities nationwide on housing, zoning, planning, grants, and GovTech."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Main Narrative & Founder */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
                <span className="w-6 h-[1px] bg-terracotta block" />
                <span>Firm Overview</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-navy font-normal leading-[1.25] mb-6">
                Serving communities nationwide and abroad
              </h2>

              <div className="space-y-4 text-primary-muted text-base leading-[1.8]">
                <p>
                  Baystate Planning &amp; Consulting Group is a US-based planning
                  firm headquartered in Massachusetts. We serve cities, counties,
                  towns, housing authorities, regional agencies, and nonprofits
                  across the country, along with governments and organizations
                  abroad.
                </p>
                <p>
                  Our work covers community planning, zoning and permitting,
                  affordable housing, grants, technical assistance, and
                  government technology.
                </p>
                <p>
                  Our founder,{" "}
                  <strong className="text-primary-text font-medium">
                    Jasifa Chowdhury
                  </strong>
                  , is an urban planner and housing policy specialist with more
                  than 10 years of experience. Her background spans civil
                  engineering and urban planning, and her work covers affordable
                  housing, zoning and land use strategy, climate resilience, and
                  grant writing.
                </p>
              </div>
            </ScrollReveal>

            {/* Experience credentials */}
            <ScrollReveal delay={120}>
              <div className="bg-warm-white p-7 sm:p-9 rounded-xl border border-warm-gray shadow-sm">
                <h3 className="text-xs font-semibold text-navy tracking-[0.08em] uppercase mb-5">
                  Leadership Experience
                </h3>
                <div className="flex flex-col gap-3">
                  {founderData.credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white rounded-md border-l-[3px] border-terracotta shadow-xs"
                    >
                      <div className="text-xs font-semibold text-navy">
                        {cred.org}
                      </div>
                      <div className="text-[12.5px] text-primary-muted mt-0.5">
                        {cred.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Services Summary Section */}
      <section className="py-20 sm:py-24 bg-navy">
        <Container>
          <ScrollReveal>
            <div className="max-w-[760px] mb-12">
              <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
                <span className="w-6 h-[1px] bg-terracotta block" />
                <span>Our Capabilities</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
                Our Services
              </h2>
              <p className="text-white/60 text-base leading-[1.75]">
                We serve projects of every size, from a 30-year comprehensive
                plan to a single permit due at the next hearing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.map((svc, idx) => (
              <ScrollReveal key={svc.slug} delay={idx * 40} className="h-full">
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col h-full bg-white/[0.04] hover:bg-white/[0.08] p-7 rounded-xl border border-white/[0.08] hover:border-terracotta/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg border border-terracotta/40 flex items-center justify-center text-terracotta mb-4 group-hover:scale-110 group-hover:bg-terracotta/10 transition-transform">
                    <IconRenderer name={svc.iconName} size={18} />
                  </div>
                  <h3 className="font-serif text-lg text-white font-normal mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-white/55 leading-relaxed flex-1">
                    {svc.shortDescription}
                  </p>
                  <div className="text-[11px] font-medium text-terracotta uppercase tracking-wider mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Mission */}
      <section className="py-20 sm:py-24 bg-white text-center">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
                <span className="w-6 h-[1px] bg-terracotta block" />
                <span>Our Mission</span>
                <span className="w-6 h-[1px] bg-terracotta block" />
              </div>

              <div className="w-[50px] h-[2px] bg-terracotta mx-auto mb-8" />

              <p className="text-primary-text text-lg sm:text-xl font-light leading-[1.8] mb-9">
                We help communities plan for growth that includes housing for
                people of every age, income, and background. We give local
                governments, nonprofits, and organizations accurate data,
                regulatory guidance, and realistic plans, so they can build,
                stay fair, and protect the environment.
              </p>

              <Link
                href="/work-with-us"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-light text-white px-8 py-3.5 rounded-lg text-xs font-medium tracking-[0.08em] uppercase transition-colors"
              >
                <span>Work With Us</span>
                <span>→</span>
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Let’s Discuss Your Community’s Needs"
        description="Connect with our planning team to explore how we can support your next project."
        buttonText="Get In Touch"
        buttonHref="/#contact"
      />
    </main>
  );
}

