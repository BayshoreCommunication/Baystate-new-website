"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNavItems, serviceDropdownItems } from "@/data/navigation";
import { IconRenderer } from "@/components/common/IconRenderer";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2 text-white/90 hover:text-white transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-20 sm:top-[84px] right-0 bottom-0 w-[300px] sm:w-[340px] bg-navy border-l border-white/10 p-6 z-50 overflow-y-auto transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col gap-4">
          {mainNavItems.map((item) => {
            if (item.isCta) {
              return (
                <div key={item.label} className="pt-4 border-t border-white/10">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-terracotta hover:bg-terracotta-light text-white px-5 py-3 rounded-md text-sm font-medium tracking-wider"
                  >
                    {item.label}
                  </Link>
                </div>
              );
            }

            if (item.children) {
              return (
                <div key={item.label} className="flex flex-col">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="flex items-center justify-between py-2 text-sm text-white/80 hover:text-white font-medium"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        servicesExpanded && "rotate-180",
                      )}
                    />
                  </button>

                  {servicesExpanded && (
                    <div className="pl-3 py-1 flex flex-col gap-1 border-l border-white/15 my-1">
                      {serviceDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-2.5 py-2 text-xs text-white/70 hover:text-white",
                            pathname === subItem.href &&
                              "text-terracotta font-medium",
                          )}
                        >
                          <span className="w-4 flex justify-center text-terracotta">
                            <IconRenderer name={subItem.iconName} size={14} />
                          </span>
                          <span>{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 text-sm text-white/80 hover:text-white",
                  pathname === item.href && "text-terracotta font-medium",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
