"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 bg-ticlu-blue/5 grid-pattern">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-ticlu-blue rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-3xl shadow-blue-200/50"
        >
          {/* Abstract blobs */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-900/10 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px]" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/20 border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-sm"
            >
              Get Started
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[1.1] tracking-tighter uppercase">
              Release Your <span className="text-slate-900">Passion</span> Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-16 font-medium leading-relaxed max-w-2xl mx-auto">
              Join the elite ecosystem where creativity meets high-performance networking. Your journey begins here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="#download"
                className="w-full sm:w-auto bg-white text-ticlu-blue px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl active:scale-95"
              >
                App Store
              </Link>
              <Link
                href="#download"
                className="w-full sm:w-auto bg-slate-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all hover:bg-black active:scale-95 border border-white/10"
              >
                Google Play
              </Link>
            </div>
            
            <p className="mt-12 text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">
                Free to download. <span className="text-white">Connecting Creativity.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
