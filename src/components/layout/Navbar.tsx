"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems, serviceDropdownItems } from "@/data/navigation";
import { IconRenderer } from "@/components/common/IconRenderer";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timer and open dropdown immediately
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  // Grace period before closing (350ms) so user can comfortably move mouse to submenu
  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 350);
  };

  // When clicking an item, immediately close the dropdown
  const handleItemClick = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDropdownOpen(false);
  };

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <ul className="hidden xl:flex items-center gap-6 2xl:gap-7 list-none m-0 p-0">
      {mainNavItems.map((item) => {
        if (item.isCta) {
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="bg-terracotta hover:bg-terracotta-light active:scale-95 text-white px-5 py-2.5 rounded text-[13px] font-medium tracking-[0.04em] transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(181,99,74,0.35)]"
              >
                {item.label}
              </Link>
            </li>
          );
        }

        if (item.children) {
          const isServicesActive = pathname.startsWith("/services");

          return (
            <li
              key={item.label}
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                onClick={handleItemClick}
                onFocus={handleMouseEnter}
                className={cn(
                  "text-[13px] tracking-[0.04em] font-normal transition-colors duration-200 inline-flex items-center gap-1.5 py-1",
                  isServicesActive || isDropdownOpen
                    ? "text-white font-medium"
                    : "text-white/75 hover:text-white",
                )}
              >
                <span>{item.label}</span>
                <span
                  className={cn(
                    "text-[9px] opacity-60 transition-transform duration-200",
                    isDropdownOpen && "rotate-180 text-terracotta opacity-100",
                  )}
                >
                  ▾
                </span>
              </Link>

              {/* Dropdown Menu Container with hover bridge & delay */}
              <div
                className={cn(
                  "absolute top-full pt-2 left-1/2 -translate-x-1/2 w-[340px] z-50 transition-all duration-200 ease-out",
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible translate-y-1.5 pointer-events-none",
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Arrow Pointer */}
                <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[7px] border-x-transparent border-b-[7px] border-b-white z-10" />

                {/* Dropdown Card */}
                <div
                  style={{
                    overflow: "hidden",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    scrollbarWidth: "none",
                  }}
                  className="no-scrollbar bg-white rounded-xl p-2 shadow-[0_16px_48px_rgba(0,0,0,0.18)] border border-warm-gray/70 overflow-hidden select-none"
                >
                  <div
                    style={{
                      overflow: "hidden",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      scrollbarWidth: "none",
                    }}
                    className="no-scrollbar flex flex-col gap-0.5 overflow-hidden"
                  >
                    {serviceDropdownItems.map((subItem) => (
                      <React.Fragment key={subItem.href}>
                        <Link
                          href={subItem.href}
                          onClick={handleItemClick}
                          className={cn(
                            "group/sub flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-primary-text transition-all duration-150 hover:bg-[#FDF8F5] hover:text-terracotta overflow-hidden select-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 active:outline-none",
                            pathname === subItem.href &&
                              "text-terracotta bg-[#FDF8F5] font-medium",
                          )}
                        >
                          <span className="w-5 flex justify-center items-center text-terracotta shrink-0 transition-transform duration-150 group-hover/sub:scale-110">
                            <IconRenderer name={subItem.iconName} size={16} />
                          </span>
                          <span className="leading-snug transition-colors duration-150 whitespace-nowrap">
                            {subItem.label}
                          </span>
                        </Link>
                        {subItem.dividerAfter && (
                          <div className="h-[1px] bg-warm-gray/80 my-1 mx-2" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        }

        const isActive = pathname === item.href;

        return (
          <li key={item.label}>
            <Link
              href={item.href}
              className={cn(
                "text-[13px] tracking-[0.04em] font-normal transition-colors duration-200 relative py-1 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-terracotta after:transition-all after:duration-200 hover:after:w-full",
                isActive
                  ? "text-white font-medium after:w-full"
                  : "text-white/75",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
