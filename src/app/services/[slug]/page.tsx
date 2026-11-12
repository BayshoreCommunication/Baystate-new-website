import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { PageHero } from "@/components/common/PageHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceIncluded } from "@/components/services/ServiceIncluded";
import { ServiceAudiences } from "@/components/services/ServiceAudiences";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFunding } from "@/components/services/ServiceFunding";
import { CtaBand } from "@/components/common/CtaBand";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { siteConfig } from "@/data/site";
import { ShieldCheck } from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = servicesData.map((s) => ({ slug: s.slug }));
  // Add legacy slugs for backwards compatibility
  slugs.push({ slug: "grant-writing" });
  slugs.push({ slug: "govtech-software" });
  return slugs;
}

function resolveService(slug: string) {
  if (slug === "grant-writing") {
    return servicesData.find((s) => s.slug === "grants-funding");
  }
  if (slug === "govtech-software") {
    return servicesData.find((s) => s.slug === "government-technology");
  }
  return servicesData.find((s) => s.slug === slug);
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = resolveService(params.slug);

  if (!service) {
    return {
      title: `Service Not Found — ${siteConfig.name}`,
    };
  }

  return {
    title: `${service.title} — ${siteConfig.name}`,
    description: service.metaDescription || service.heroDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = resolveService(params.slug);

  if (!service) {
    notFound();
  }

  const isGovTech =
    service.slug === "government-technology" ||
    service.slug === "govtech-software";

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        eyebrow={service.eyebrow}
        title={service.heroHeading || service.title}
        description={service.heroDescription}
        bgImage={service.heroImage}
      />

      <ServiceOverview
        badgeLabel={service.overview.badgeLabel}
        heading={service.overview.heading}
        paragraphs={service.overview.paragraphs}
        image={service.overview.image}
        imageAlt={service.overview.imageAlt}
      />

      {/* For GovTech: Detailed Audiences Cards */}
      {isGovTech && service.audienceCards && (
        <ServiceAudiences
          sectionLabel={service.audienceCards.sectionLabel}
          heading={service.audienceCards.heading}
          cards={service.audienceCards.cards}
        />
      )}

      {/* Services Included */}
      {service.included && (
        <ServiceIncluded
          sectionLabel={service.included.sectionLabel}
          heading={service.included.heading}
          items={service.included.items}
          bgVariant={isGovTech ? "white" : "warm-white"}
        />
      )}

      {/* Optional Narrative Block */}
      {service.narrativeBlock && (
        <section className="py-16 sm:py-20 bg-navy text-white border-t border-white/[0.08]">
          <Container>
            <div className="max-w-[800px] mx-auto text-center">
              <ScrollReveal>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-5">
                  {service.narrativeBlock.heading}
                </h3>
                <div className="space-y-4 text-white/70 text-sm sm:text-base leading-[1.8]">
                  {service.narrativeBlock.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      )}

      {/* Conflict of Interest Commitment (e.g. RFP and Procurement) */}
      {service.conflictCommitment && (
        <section className="py-16 bg-white border-t border-warm-gray">
          <Container>
            <div className="max-w-[800px] mx-auto bg-warm-white p-8 sm:p-10 rounded-xl border-l-4 border-terracotta shadow-xs">
              <ScrollReveal>
                <div className="flex items-center gap-3 text-terracotta mb-3">
                  <ShieldCheck className="w-6 h-6" />
                  <h3 className="font-serif text-2xl text-navy font-normal">
                    {service.conflictCommitment.heading}
                  </h3>
                </div>
                <p className="text-primary-muted text-base leading-[1.8]">
                  {service.conflictCommitment.description}
                </p>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      )}

      {/* Funding Sources Section */}
      {service.fundingSources && (
        <ServiceFunding
          sectionLabel={service.fundingSources.sectionLabel}
          heading={service.fundingSources.heading}
          cards={service.fundingSources.cards}
        />
      )}

      {/* Audiences Section for standard services */}
      {!isGovTech && service.audiences && (
        <ServiceAudiences
          sectionLabel={service.audiences.sectionLabel}
          heading={service.audiences.heading}
          items={service.audiences.items}
        />
      )}

      {/* Process Section */}
      {service.process && (
        <ServiceProcess
          sectionLabel={service.process.sectionLabel}
          heading={service.process.heading}
          intro={service.process.intro}
          steps={service.process.steps}
        />
      )}

      {/* Call to Action Band */}
      <CtaBand
        heading={service.cta.heading}
        description={service.cta.description}
        buttonText={service.cta.buttonText}
        buttonHref={service.cta.buttonHref}
      />
    </main>
  );
}
