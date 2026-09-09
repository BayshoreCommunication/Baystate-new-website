"use client";

import React, { useState } from "react";
import { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";
import { blogCategories } from "@/data/blog";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts =
    selectedCategory === "All"
      ? posts.filter((p) => p.slug !== featuredPost.slug)
      : filteredPosts;

  return (
    <div className="space-y-12 sm:space-y-14">
      {/* Category Pills */}
      <ScrollReveal className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "text-xs sm:text-[13px] font-medium tracking-[0.03em] px-4 sm:px-5 py-2 rounded-full transition-all duration-200 border",
              selectedCategory === cat
                ? "bg-terracotta text-white border-terracotta shadow-sm"
                : "bg-warm-white text-navy border-warm-gray hover:border-terracotta/50",
            )}
          >
            {cat}
          </button>
        ))}
      </ScrollReveal>

      {/* Featured Post (only show on 'All' tab) */}
      {selectedCategory === "All" && featuredPost && (
        <ScrollReveal delay={100}>
          <BlogCard post={featuredPost} featured />
        </ScrollReveal>
      )}

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {regularPosts.map((post, index) => (
          <ScrollReveal key={post.slug} delay={index * 60} className="h-full">
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 text-primary-muted">
          <p className="text-base">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
}
