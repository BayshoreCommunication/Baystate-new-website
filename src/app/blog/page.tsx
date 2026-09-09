import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/common/Container";
import { CtaBand } from "@/components/common/CtaBand";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Blog & Insights — ${siteConfig.name}`,
  description:
    "Expert insights, policy analysis, and practical guidance on urban planning, affordable housing, zoning reform, grant writing, and civic technology.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        eyebrow="Insights &amp; Articles"
        title="Planning Perspectives"
        description="Expert analysis, regulatory updates, and practical guidance on urban planning, housing policy, zoning reform, and civic technology."
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <BlogGrid posts={blogPosts} />
        </Container>
      </section>

      <CtaBand
        heading="Have a Planning or Policy Question?"
        description="Connect with our team of urban planners and policy specialists to discuss your community's needs."
        buttonText="Get In Touch"
        buttonHref="/#contact"
      />
    </main>
  );
}
