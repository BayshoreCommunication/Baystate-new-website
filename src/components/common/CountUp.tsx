"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, duration = 1600, className }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  const isNumeric = !!match;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    if (!isNumeric) {
      return;
    }

    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const isDecimal = match[2].includes(".");
    const decimalPlaces = isDecimal ? match[2].split(".")[1].length : 0;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic: decelerates toward the end for realistic effect
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * target;

      const formatted = isDecimal
        ? current.toFixed(decimalPlaces)
        : Math.round(current).toString();

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(`${prefix}${target}${suffix}`);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, value, duration, isNumeric, match]);

  if (!isNumeric) {
    return (
      <span
        ref={elementRef}
        className={`inline-block transition-all duration-700 ease-out ${
          hasStarted ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } ${className || ""}`}
      >
        {value}
      </span>
    );
  }

  return (
    <span ref={elementRef} className={className}>
      {hasStarted ? displayValue : `0${match?.[3] || ""}`}
    </span>
  );
}
