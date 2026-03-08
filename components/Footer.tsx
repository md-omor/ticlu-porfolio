"use client";

import { BRAND, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ticlu-dark text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-ticlu-blue/5 rounded-full blur-[120px] -z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <Link href="/" className="flex items-center gap-3 tracking-tighter group">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt={BRAND.name} 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-black text-white">{BRAND.name}</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-lg font-medium">
              {BRAND.tagline}. Leading the charge in the short-form video revolution. Built for creators, by creators.
            </p>
            <div className="flex gap-5">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-ticlu-blue hover:scale-110 transition-all duration-300 border border-white/5">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-slate-500 mb-10">Navigation</h4>
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-ticlu-blue transition-colors font-bold text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-slate-500 mb-10">Company</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="#" className="text-slate-300 hover:text-ticlu-blue transition-colors font-bold text-lg">About Us</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-ticlu-blue transition-colors font-bold text-lg">Careers</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-ticlu-blue transition-colors font-bold text-lg">Press Kit</Link></li>
              <li><Link href="#" className="text-slate-300 hover:text-ticlu-blue transition-colors font-bold text-lg">Privacy</Link></li>
            </ul>
          </div>

          <div className="glass-dark p-10 rounded-[2.5rem] border-white/5 space-y-6">
            <h4 className="font-black text-lg">Join the Club</h4>
            <p className="text-slate-400 text-sm font-medium">Stay ahead of the curve with our weekly creative briefing.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="you@awesome.com" 
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-ticlu-blue transition-colors font-bold"
                disabled
              />
              <button className="bg-white text-ticlu-dark font-black py-4 rounded-2xl hover:bg-ticlu-blue hover:text-white transition-all duration-500 text-sm">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-bold">
           <p>© {new Date().getFullYear()} {BRAND.name} Social. All rights reserved.</p>
           <div className="flex gap-8">
             <Link href="#" className="hover:text-white">Terms</Link>
             <Link href="#" className="hover:text-white">Privacy</Link>
             <Link href="#" className="hover:text-white">Cookies</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
