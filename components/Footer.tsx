"use client";

import { BRAND, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-ticlu-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
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
              <span className="text-3xl font-black text-slate-900 uppercase">{BRAND.name}</span>
            </Link>
            <p className="text-slate-500 leading-relaxed text-lg font-medium">
              Connecting Creativity. Leading the charge in the short-form video revolution. Built for creators, by creators.
            </p>
            <div className="flex gap-6">
              {[Github, Twitter, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-ticlu-blue hover:border-ticlu-blue/20 hover:shadow-lg transition-all">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-10">Platform</h4>
            <ul className="space-y-5">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 hover:text-ticlu-blue font-medium transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-10">Legal</h4>
            <ul className="space-y-5">
              <li><Link href="#" className="text-slate-500 hover:text-ticlu-blue font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-ticlu-blue font-medium transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-ticlu-blue font-medium transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-10">Newsletter</h4>
            <div className="glass-card p-8 rounded-3xl border-slate-100 bg-white">
              <p className="text-sm text-slate-500 mb-6 font-medium">Get the latest updates from the creative front.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm text-slate-900 focus:outline-hidden focus:border-ticlu-blue/30 transition-all font-medium"
                />
                <button className="bg-ticlu-blue text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-slate-400 font-medium">
            <Link href="#" className="hover:text-ticlu-blue transition-colors">Support</Link>
            <Link href="#" className="hover:text-ticlu-blue transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
