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
import { siteConfig } from "@/data/site";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: `Service Not Found — ${siteConfig.name}`,
    };
  }

  return {
    title: `${service.title} — ${siteConfig.name}`,
    description: service.heroDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const isGovTech = service.slug === "govtech-software";

  return (
    <main>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        eyebrow={service.eyebrow}
        title={service.title}
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

      {/* For GovTech, Audiences comes before Included */}
      {isGovTech && service.audienceCards && (
        <ServiceAudiences
          sectionLabel={service.audienceCards.sectionLabel}
          heading={service.audienceCards.heading}
          cards={service.audienceCards.cards}
        />
      )}

      {/* What's Included Section */}
      {service.included && (
        <ServiceIncluded
          sectionLabel={service.included.sectionLabel}
          heading={service.included.heading}
          items={service.included.items}
          bgVariant={isGovTech ? "white" : "warm-white"}
        />
      )}

      {/* Funding Sources Section (e.g. Grant Writing) */}
      {service.fundingSources && (
        <ServiceFunding
          sectionLabel={service.fundingSources.sectionLabel}
          heading={service.fundingSources.heading}
          cards={service.fundingSources.cards}
        />
      )}

      {/* Who It's For Section (Standard Services) */}
      {!isGovTech && service.audiences && (
        <ServiceAudiences
          sectionLabel={service.audiences.sectionLabel}
          heading={service.audiences.heading}
          items={service.audiences.items}
        />
      )}

      {/* How We Work / Process Section */}
      {service.process && (
        <ServiceProcess
          sectionLabel={service.process.sectionLabel}
          heading={service.process.heading}
          intro={service.process.intro}
          steps={service.process.steps}
        />
      )}

      {/* CTA Band */}
      <CtaBand
        heading={service.cta.heading}
        description={service.cta.description}
        buttonText={service.cta.buttonText}
        buttonHref={service.cta.buttonHref}
      />
    </main>
  );
}
