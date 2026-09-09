"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";

interface StatItemProps {
  num: string;
  label: string;
  index: number;
  trigger: boolean;
}

function StatItem({ num, label, index, trigger }: StatItemProps) {
  const [display, setDisplay] = useState<string>("0");
  const [isInfinity, setIsInfinity] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    // Slight stagger based on index
    const startTimeout = setTimeout(() => {
      if (num === "∞" || num.includes("∞")) {
        // Dynamic roll into infinity
        const frames = ["0", "8", "88", "∞"];
        let frameIndex = 0;
        const interval = setInterval(() => {
          frameIndex++;
          if (frameIndex < frames.length) {
            setDisplay(frames[frameIndex]);
          } else {
            setDisplay("∞");
            setIsInfinity(true);
            clearInterval(interval);
          }
        }, 160);
        return () => clearInterval(interval);
      }

      // Parse target number and suffix (e.g. 10 and +)
      const match = num.match(/^(\d+)(.*)$/);
      if (!match) {
        setDisplay(num);
        return;
      }

      const target = parseInt(match[1], 10);
      const suffix = match[2] || "";
      const duration = 1200; // ms
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeOutExpo for dramatic deceleration at the end
        const easeProgress =
          progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeProgress * target);

        setDisplay(`${currentCount}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setDisplay(`${target}${suffix}`);
        }
      };

      requestAnimationFrame(updateCounter);
    }, index * 140);

    return () => clearTimeout(startTimeout);
  }, [trigger, num, index]);

  return (
    <div
      className={`py-8 sm:py-[38px] px-4 sm:px-6 text-center border-warm-gray transition-all duration-700 ${
        trigger ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${index % 2 === 0 ? "border-r" : ""} ${
        index < 2 ? "border-b lg:border-b-0" : ""
      } ${index < 3 ? "lg:border-r" : "lg:border-r-0"}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="font-serif text-3xl sm:text-[44px] text-navy leading-none mb-2 font-normal">
        <span
          className={`inline-block transition-transform duration-300 ${
            isInfinity ? "scale-110 text-terracotta" : ""
          }`}
        >
          {trigger ? display : "0"}
        </span>
      </div>
      <div className="text-[10px] sm:text-[11px] text-gray-mid tracking-[0.13em] uppercase font-medium">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when stats bar enters the viewport
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-warm-white border-b border-warm-gray overflow-hidden"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1140px] mx-auto">
        {siteConfig.stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            num={stat.num}
            label={stat.label}
            index={index}
            trigger={isInView}
          />
        ))}
      </div>
    </div>
  );
}
