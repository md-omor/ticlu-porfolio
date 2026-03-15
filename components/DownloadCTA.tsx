"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 bg-ticlu-slate grid-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-ticlu-dark p-8 sm:p-12 md:p-20 text-center shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)]"
        >
          {/* Animated bg blobs */}
          <motion.div
            animate={{ scale:[1,1.3,1], x:[0,60,0], y:[0,-40,0] }}
            transition={{ duration:16, repeat:Infinity, ease:"linear" }}
            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-ticlu-blue/20 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ scale:[1,1.2,1], x:[0,-40,0], y:[0,30,0] }}
            transition={{ duration:20, repeat:Infinity, ease:"linear" }}
            className="absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] bg-ticlu-purple/20 rounded-full blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity:0, scale:0.9 }}
              whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }}
              className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/10 border border-white/20 text-white/80 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-sm"
            >
              Free Download — iOS & Android
            </motion.div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-[1.0] tracking-tighter uppercase">
              Your feed.<br />
              <span className="text-ticlu-blue">Your rules.</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 mb-14 font-medium leading-relaxed max-w-xl mx-auto">
              Join 10,000+ creators already discovering content that actually matters to them.
              Download free today — no credit card, no ads, no nonsense.
            </p>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                href="#"
                className="w-full sm:w-auto flex items-center gap-4 bg-white text-slate-900 px-7 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl active:scale-95 group"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-slate-900">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-medium leading-none mb-0.5">Download on the</p>
                  <p className="text-base font-black leading-none">App Store</p>
                </div>
              </Link>

              <Link
                href="#"
                className="w-full sm:w-auto flex items-center gap-4 bg-white/10 border border-white/20 text-white px-7 py-4 rounded-2xl font-bold hover:scale-105 hover:bg-white/15 transition-all active:scale-95 group"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M3.18 23.76c.3.17.65.19.97.06l11.51-6.64-2.59-2.6-9.89 9.18zm-1.6-20.4C1.23 3.7 1 4.08 1 4.56v14.88c0 .48.23.86.58 1.1l.1.07 8.34-8.34v-.2L1.58 3.3l-.01.06zm18.1 8.62l-2.36-1.36-2.9 2.9 2.9 2.89 2.38-1.37c.68-.39.68-1.03-.02-1.06zm-17.5 9.58l9.89-9.18-2.59-2.6L1.67 21.15c.32.32.71.44 1.09.41z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-white/60 font-medium leading-none mb-0.5">Get it on</p>
                  <p className="text-base font-black leading-none">Google Play</p>
                </div>
              </Link>
            </div>

            {/* Or waitlist */}
            <div className="flex items-center gap-4 justify-center mb-8">
              <div className="h-px flex-1 max-w-[80px] bg-white/20" />
              <span className="text-xs text-white/40 font-bold uppercase tracking-widest">or</span>
              <div className="h-px flex-1 max-w-[80px] bg-white/20" />
            </div>

            {/* Email waitlist */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-ticlu-blue/60 transition-all backdrop-blur-sm"
              />
              <button className="flex items-center gap-2 justify-center bg-ticlu-blue text-white px-6 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-blue-400 transition-all active:scale-95 shadow-lg shadow-ticlu-blue/30 whitespace-nowrap">
                Join waitlist <ArrowRight size={14} />
              </button>
            </div>

            <p className="mt-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              Free forever · No credit card · No spam
            </p>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
