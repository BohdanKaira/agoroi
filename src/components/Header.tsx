"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-navy/95 shadow-lg shadow-black/10 backdrop-blur-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className="text-[1.35rem] font-bold tracking-tight text-white"
        >
          Ag<span className="text-gold">.</span>oroi
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium tracking-wide text-white/60 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="h-4 w-px bg-white/15" />
          <span className="cursor-pointer text-[13px] font-medium tracking-wide text-white/40 transition-colors hover:text-white/70">
            EN
          </span>
        </div>

        <button
          type="button"
          className="relative h-8 w-8 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-1 top-2 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "top-[15px] rotate-45" : ""}`}
          />
          <span
            className={`absolute left-1 top-[15px] block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute bottom-2 left-1 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "bottom-[13px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-navy/95 px-6 pb-6 pt-4 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 border-t border-white/10 pt-3">
            <span className="px-3 text-sm text-white/30">EN</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
