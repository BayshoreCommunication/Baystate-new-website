import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  if (featured) {
    return (
      <article
        className={cn(
          "group grid grid-cols-1 lg:grid-cols-12 gap-8 bg-warm-white rounded-2xl overflow-hidden border border-warm-gray p-6 sm:p-8 lg:p-10 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
          className,
        )}
      >
        <div className="lg:col-span-7 relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-sm">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-terracotta text-white text-[11px] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full shadow-sm">
            Featured Article
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs text-primary-muted mb-3 font-medium">
            <span className="text-terracotta font-semibold uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-navy font-normal mb-3.5 leading-snug group-hover:text-terracotta transition-colors">
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-start justify-between gap-2"
            >
              <span>{post.title}</span>
              <ArrowUpRight className="w-6 h-6 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-terracotta" />
            </Link>
          </h3>

          <p className="text-primary-muted text-sm sm:text-base leading-[1.75] mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-warm-gray/60">
            {post.author.image && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-warm-gray">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="text-sm font-semibold text-navy leading-tight">
                {post.author.name}
              </div>
              <div className="text-xs text-primary-muted">
                {post.author.role}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group bg-white rounded-xl overflow-hidden border border-warm-gray transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col h-full",
        className,
      )}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full shadow-sm border border-white/60">
          {post.category}
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 text-xs text-primary-muted mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-[22px] text-navy font-normal mb-3 leading-snug group-hover:text-terracotta transition-colors">
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-start justify-between gap-2"
          >
            <span>{post.title}</span>
            <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-terracotta" />
          </Link>
        </h3>

        <p className="text-primary-muted text-sm leading-[1.7] mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-warm-gray/60">
          {post.author.image && (
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-warm-gray">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <div className="text-xs font-semibold text-navy leading-tight">
              {post.author.name}
            </div>
            <div className="text-[11px] text-primary-muted">
              {post.author.role}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
