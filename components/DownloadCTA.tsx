"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 bg-ticlu-slate grid-pattern">
      <div className="container mx-auto px-10">
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
              Free Download for Android
            </motion.div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-none tracking-tighter uppercase font-open-sans">
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

            <p className="mt-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              Free forever · No credit card · No spam
            </p>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
}