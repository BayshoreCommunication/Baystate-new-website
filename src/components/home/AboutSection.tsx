"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";

function FloatingBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    // Delay 350ms so parent ScrollReveal fade-in is visible before counting starts
    const timer = setTimeout(() => {
      const target = 10;
      const duration = 1200; // ms
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeOutExpo for dramatic deceleration at the end
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeOut * target);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(10);
        }
      };

      requestAnimationFrame(animate);
    }, 350);

    return () => clearTimeout(timer);
  }, [hasStarted]);

  return (
    <div
      ref={badgeRef}
      className="absolute top-7 -right-2 sm:-right-4 bg-terracotta text-white py-5 px-5 sm:px-6 rounded-md text-center shadow-[0_8px_30px_rgba(181,99,74,0.45)] z-10"
    >
      <div className="font-serif text-3xl sm:text-[38px] leading-none select-none">
        <span>{hasStarted ? count : "0"}</span>
        <span>+</span>
      </div>
      <div className="text-[10px] tracking-[0.14em] uppercase text-white/85 mt-1.5 leading-tight">
        Years Leading
        <br />
        Communities
      </div>
    </div>
  );
}

export function AboutSection() {
  const credentials = [
    {
      org: "Central MA Regional Planning Commission",
      role: "Regional Planning Leadership",
    },
    {
      org: "Cambridge Housing Authority",
      role: "Affordable Housing Policy",
    },
    {
      org: "City of Cambridge — Dept. of Housing & Community Development",
      role: "Community Development Strategy",
    },
    {
      org: "Vernon Housing Authority",
      role: "Housing Authority Operations",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase mb-4 text-terracotta">
              <span className="w-6 h-[1px] bg-terracotta block" />
              <span>Who We Are</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-navy font-normal leading-[1.2] mb-5">
              Cross-Sector Expertise.
              <br />
              Community-First Vision.
            </h2>

            <p className="text-primary-muted text-base leading-[1.8] mb-4.5">
              At Baystate Planning &amp; Consulting, we bring over{" "}
              <strong className="text-primary-text font-medium">
                10 years of cross-sector experience
              </strong>{" "}
              in municipal, regional, and international planning.
            </p>

            <p className="text-primary-muted text-base leading-[1.8] mb-8">
              Our founder,{" "}
              <strong className="text-primary-text font-medium">
                Jasifa Chowdhury
              </strong>
              , is an Urban Planner and Housing Policy Specialist with a strong
              track record in affordable housing, zoning, land use strategy,
              climate resilience, and federal/state grant writing.
            </p>

            {/* Credentials List */}
            <div className="flex flex-col gap-2.5">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:px-5 sm:py-3.5 bg-warm-white rounded-md border-l-[3px] border-terracotta"
                >
                  <div className="text-xs font-semibold text-navy tracking-[0.04em] uppercase">
                    {cred.org}
                  </div>
                  <div className="text-[13px] text-primary-muted mt-0.5">
                    {cred.role}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column with Floating Images & Badge */}
          <ScrollReveal delay={120} className="relative pb-10 sm:pb-12">
            <div className="relative">
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=800&q=80"
                  alt="Urban planning professionals collaborating"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge with Synchronized Live Count-Up */}
              <FloatingBadge />

              {/* Accent Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-[52%] aspect-[4/3] rounded-md overflow-hidden border-4 border-white shadow-[0_10px_40px_rgba(0,0,0,0.16)] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                  alt="Urban planning map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
