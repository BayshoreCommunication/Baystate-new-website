"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrolled } from "@/hooks/useScrolled";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const isScrolled = useScrolled(50);

  return (
    <header
      id="nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-navy py-4 flex items-center justify-between px-6 sm:px-10 lg:px-[60px] transition-shadow duration-300",
        isScrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.35)]" : "",
      )}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center no-underline group py-1">
        <Image
          src="/logo/logo.png"
          alt="Baystate Planning & Consulting"
          width={220}
          height={60}
          className="h-16 sm:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <Navbar />

      {/* Mobile Menu Toggle & Drawer */}
      <MobileMenu />
    </header>
  );
}
