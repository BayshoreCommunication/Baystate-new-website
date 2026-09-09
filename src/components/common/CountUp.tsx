"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function CountUp({
  value,
  duration = 1300,
  delay = 200,
  className,
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  const isNumeric = !!match;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setHasStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

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

      // easeOutExpo for dramatic deceleration at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * target;

      const formatted = isDecimal
        ? current.toFixed(decimalPlaces)
        : Math.floor(current).toString();

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
