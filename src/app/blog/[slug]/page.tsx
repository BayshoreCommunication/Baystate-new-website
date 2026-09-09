import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { Container } from "@/components/common/Container";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CtaBand } from "@/components/common/CtaBand";
import { BlogCard } from "@/components/blog/BlogCard";
import { siteConfig } from "@/data/site";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: `Article Not Found — ${siteConfig.name}`,
    };
  }

  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.excerpt,
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main>
      {/* Header Banner */}
      <div className="pt-28 sm:pt-36 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none" />

        <Container className="relative z-10 max-w-4xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category },
            ]}
          />

          <div className="inline-flex items-center gap-2 text-terracotta text-xs font-semibold tracking-[0.14em] uppercase mb-4">
            <span>{post.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-white font-normal leading-[1.15] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/60 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              {post.author.image && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span className="text-white font-medium">{post.author.name}</span>
            </div>

            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-terracotta" />
              {post.date}
            </span>

            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-terracotta" />
              {post.readTime}
            </span>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <article className="py-16 sm:py-20 bg-white">
        <Container className="max-w-4xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-terracotta hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all articles</span>
          </Link>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-12 border border-warm-gray">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Excerpt callout */}
          <div className="p-6 sm:p-8 bg-warm-white border-l-4 border-terracotta rounded-r-xl mb-10">
            <p className="font-serif italic text-lg sm:text-xl text-navy leading-relaxed">
              &ldquo;{post.excerpt}&rdquo;
            </p>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-6 text-primary-muted text-base sm:text-lg leading-[1.85] font-light">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-warm-gray flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-navy uppercase tracking-wider mr-2">
              Tags:
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs text-navy bg-warm-white border border-warm-gray px-3 py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 sm:p-8 bg-warm-white rounded-xl border border-warm-gray flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            {post.author.image && (
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-serif text-xl text-navy mb-1">
                Written by {post.author.name}
              </div>
              <div className="text-xs text-terracotta font-medium tracking-wider uppercase mb-2">
                {post.author.role}
              </div>
              <p className="text-sm text-primary-muted leading-relaxed">
                Specializing in municipal, regional, and technical planning
                solutions that balance economic development, equity, and
                environmental stewardship.
              </p>
            </div>
          </div>
        </Container>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-warm-white border-t border-warm-gray">
          <Container>
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-3 text-terracotta">
                <span className="w-6 h-[1px] bg-terracotta block" />
                <span>Keep Reading</span>
                <span className="w-6 h-[1px] bg-terracotta block" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy font-normal">
                Related Articles &amp; Insights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <CtaBand
        heading="Discuss Your Planning Challenges with Us"
        description="We partner with municipalities, architects, and community developers to solve complex planning, zoning, and funding questions."
        buttonText="Get In Touch"
        buttonHref="/#contact"
      />
    </main>
  );
}
