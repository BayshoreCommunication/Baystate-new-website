"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems, serviceDropdownItems } from "@/data/navigation";
import { IconRenderer } from "@/components/common/IconRenderer";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex items-center gap-7 xl:gap-8 list-none m-0 p-0">
      {mainNavItems.map((item) => {
        if (item.isCta) {
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="bg-terracotta hover:bg-terracotta-light text-white px-5 py-2.5 rounded text-[13px] font-medium tracking-[0.04em] transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          );
        }

        if (item.children) {
          const isServicesActive = pathname.startsWith("/services");

          return (
            <li key={item.label} className="relative group py-2">
              <Link
                href={item.href}
                className={cn(
                  "text-[13px] tracking-[0.04em] font-normal transition-colors duration-200 inline-flex items-center gap-1.5",
                  isServicesActive
                    ? "text-white font-medium"
                    : "text-white/75 hover:text-white",
                )}
              >
                <span>{item.label}</span>
                <span className="text-[9px] opacity-60 transition-transform duration-200 group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[300px] bg-white rounded-xl p-2 shadow-[0_12px_48px_rgba(0,0,0,0.18)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                {/* Arrow Pointer */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[7px] border-x-transparent border-b-[7px] border-b-white" />

                <div className="flex flex-col gap-0.5">
                  {serviceDropdownItems.map((subItem) => (
                    <React.Fragment key={subItem.href}>
                      <Link
                        href={subItem.href}
                        className={cn(
                          "flex items-center gap-2.5 px-3.5 py-2.5 rounded-md text-[13px] text-primary-text transition-colors duration-150 hover:bg-warm-white hover:text-terracotta",
                          pathname === subItem.href &&
                            "text-terracotta bg-warm-white font-medium",
                        )}
                      >
                        <span className="w-5 flex justify-center items-center text-terracotta shrink-0">
                          <IconRenderer name={subItem.iconName} size={16} />
                        </span>
                        <span className="leading-snug">{subItem.label}</span>
                      </Link>
                      {subItem.dividerAfter && (
                        <div className="h-[1px] bg-warm-gray my-1 mx-2" />
                      )}
                    </React.Fragment>
                  ))}
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
                "text-[13px] tracking-[0.04em] font-normal transition-colors duration-200",
                isActive
                  ? "text-white font-medium"
                  : "text-white/75 hover:text-white",
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
