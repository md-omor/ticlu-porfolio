"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-7xl z-50 transition-all duration-500 px-6 py-3 rounded-full border border-black/5 ${
        scrolled ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center gap-12">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 group-hover:rotate-12 transition-transform duration-500">
            <Image 
              src="/logo.png" 
              alt={BRAND.name} 
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black text-slate-800 tracking-tighter uppercase">{BRAND.name}</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-ticlu-blue px-5 py-2 rounded-full transition-all hover:bg-black/5 active:scale-95"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-4 bg-slate-200 mx-2" />
          <Link
            href="#download"
            className="bg-ticlu-blue text-white px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-200 active:scale-95 ml-2"
          >
            Get App
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 md:hidden bg-white/95 backdrop-blur-2xl border border-black/5 rounded-4xl overflow-hidden shadow-2xl z-40"
          >
            <div className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-black uppercase tracking-widest text-slate-600 hover:text-ticlu-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#download"
                className="bg-ticlu-blue text-white px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-lg shadow-blue-100"
                onClick={() => setIsOpen(false)}
              >
                Get App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
