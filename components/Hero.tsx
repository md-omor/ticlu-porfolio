"use client";

import { BRAND } from "@/lib/constants";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-24 overflow-hidden bg-white grid-pattern">
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-30 transition duration-300 opacity-0 lg:opacity-100"
        style={{
          background: `radial-gradient(600px at ${spotlightX}px ${spotlightY}px, rgba(96, 165, 250, 0.1), transparent 80%)`,
        }}
      />

      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-ticlu-blue/20 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-ticlu-purple/20 rounded-full blur-[120px] -z-10" 
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-14 max-w-3xl relative z-40">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black tracking-[0.4em] uppercase border border-slate-100 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-ticlu-blue animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
              The Future of Short-Form
            </span>
          </motion.div>
          
          <div className="flex flex-col gap-2">
            <motion.h1 variants={item} className="text-8xl md:text-9xl font-black tracking-tighter text-slate-900 leading-[0.85] uppercase">
              {BRAND.name}
            </motion.h1>
            <motion.p variants={item} className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-ticlu-blue to-blue-600">
              {BRAND.tagline}.
            </motion.p>
          </div>

          <motion.p variants={item} className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-xl">
            Join 10M+ creators in the fastest growing social ecosystem ever built. Experience passion-based feeds like never before.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-8 mt-4">
            <Link
              href="#download"
              className="group relative bg-ticlu-blue text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(96,165,250,0.4)]"
            >
              <span className="relative z-10">Download App</span>
            </Link>
            <Link
              href="#features"
              className="glass-card px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm text-slate-600 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 border-slate-200"
            >
              Explore Tech
            </Link>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6 mt-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white glass-card overflow-hidden ring-2 ring-ticlu-blue/5">
                  <div className={`w-full h-full bg-linear-to-br ${i % 2 === 0 ? 'from-ticlu-blue to-ticlu-indigo' : 'from-ticlu-purple to-pink-500'}`} />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white glass-card flex items-center justify-center text-xs font-bold text-ticlu-blue ring-2 ring-ticlu-blue/5">
                +10k
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-200" />
            <p className="text-sm font-medium text-slate-500">
              Trusted by creators <br/><span className="text-ticlu-dark font-bold underline decoration-ticlu-blue decoration-2">Worldwide</span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          className="relative flex justify-center perspective-[1000px]"
        >
          {/* Floating Phone Mockup */}
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotateZ: [-1, 1, -1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[320px] h-[640px] bg-[#0F172A] rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] border-[12px] border-[#1e293b]"
          >
             {/* Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1e293b] rounded-b-3xl z-20 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-8 h-1 rounded-full bg-slate-800" />
             </div>
             
             {/* Screen Content */}
             <div className="w-full h-full rounded-[2.8rem] bg-[#0A0A0A] overflow-hidden relative group">
                {/* Simulated Feed */}
                <div className="absolute inset-0 bg-linear-to-b from-indigo-900/40 via-transparent to-black" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center opacity-60">
                        <div className="w-8 h-8 rounded-full border border-white/20" />
                        <div className="flex gap-2">
                            <div className="w-4 h-1 bg-white/20 rounded-full" />
                            <div className="w-4 h-1 bg-white/20 rounded-full" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-linear-to-tr from-ticlu-blue to-ticlu-purple border-2 border-white/30" />
                            <div className="flex flex-col gap-1">
                                <div className="h-3 w-24 bg-white/40 rounded-full" />
                                <div className="h-2 w-16 bg-white/20 rounded-full" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-white/20 rounded-full" />
                            <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                        </div>
                        <div className="flex justify-around py-4 border-t border-white/10 mt-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded bg-white/20" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Video Playback Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                    >
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </motion.div>
                </div>
             </div>
          </motion.div>

          {/* Ambient Glows around phone */}
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-ticlu-blue/30 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-ticlu-purple/30 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
}
