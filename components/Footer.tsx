"use client";

import { BRAND, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ticlu-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-ticlu-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-20">

          {/* Brand col */}
          <div className="col-span-1 md:col-span-1 space-y-7">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 group-hover:rotate-12 transition-transform duration-500">
                <Image src="/logo.png" alt={BRAND.name} fill className="object-contain" />
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-tighter">{BRAND.name}</span>
            </Link>
            <p className="text-white/50 leading-relaxed font-medium">
              Interest-based video for creators who are tired of irrelevant feeds. Your passions, front and center.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-ticlu-blue hover:border-ticlu-blue/30 hover:bg-ticlu-blue/10 transition-all">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8">Platform</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy","Terms of Service","Cookie Policy","Community Guidelines"].map(l => (
                <li key={l}>
                  <Link href="#" className="text-white/60 hover:text-white font-medium transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8">Stay in the loop</h4>
            <p className="text-sm text-white/50 mb-5 font-medium leading-relaxed">
              New features, creator spotlights, and updates — straight to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ticlu-blue/50 transition-all"
              />
              <button className="bg-ticlu-blue text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-400 transition-all shadow-lg shadow-ticlu-blue/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-white/35 text-sm font-medium">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {["React Native","GraphQL","Firebase"].map(t => (
              <span key={t} className="text-[10px] text-white/25 bg-white/4 border border-white/6 rounded-md px-2.5 py-1 font-bold">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-6 text-sm text-white/35 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Support</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
