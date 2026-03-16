"use client";

import { BRAND, NAV_LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 group-hover:scale-105 transition-transform duration-300">
              <Image src="/logo.png" alt={BRAND.name} fill className="object-contain" />
            </div>
            <span className="text-lg font-black text-ticlu-dark uppercase tracking-tight">
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="text-sm font-semibold text-slate-500 hover:text-ticlu-dark px-4 py-2 rounded-lg transition-colors hover:bg-slate-50"
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="#download"
              className="btn-primary text-sm px-5 py-2.5 hidden sm:inline-flex"
            >
              Join
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-700 transition-colors"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-slate-600 hover:text-ticlu-dark py-3 border-b border-slate-100"
                >
                  {l.name}
                </Link>
              ))}
              <Link
                href="#download"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 py-3.5 justify-center text-sm"
              >
                Join
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
