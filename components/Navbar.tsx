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
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-7xl z-50 transition-all duration-500 px-6 py-3 rounded-full border border-white/10 ${
        scrolled ? "bg-ticlu-dark/60 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]" : "bg-transparent"
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
          <span className="text-xl font-black text-white tracking-tighter">{BRAND.name}</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white px-5 py-2 rounded-full transition-all hover:bg-white/5 active:scale-95"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <Link
            href="#download"
            className="bg-white text-ticlu-dark px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-ticlu-blue hover:text-white transition-all shadow-xl active:scale-95 ml-2"
          >
            Get App
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
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
            className="absolute top-20 left-0 right-0 md:hidden bg-ticlu-dark/95 backdrop-blur-2xl border border-white/10 rounded-4xl overflow-hidden shadow-2xl z-40"
          >
            <div className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-300 hover:text-ticlu-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#download"
                className="bg-white text-ticlu-dark px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-sm"
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
