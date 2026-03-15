"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "10M+",  label: "Creator community",   color: "text-ticlu-blue"   },
  { num: "500k+", label: "Videos shared daily",  color: "text-ticlu-purple" },
  { num: "50+",   label: "Interest categories",  color: "text-ticlu-indigo" },
  { num: "4.8★",  label: "Average app rating",   color: "text-amber-400"    },
];

export default function Stats() {
  return (
    <section className="relative z-10 border-y border-slate-100 bg-white overflow-hidden">
      {/* subtle moving gradient */}
      <motion.div
        animate={{ x: ["0%","-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.04) 25%, transparent 50%, rgba(129,140,248,0.04) 75%, transparent 100%)", width: "200%" }}
      />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t md:border-t-0 md:border-l-0 border-slate-100">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center justify-center py-10 px-6 text-center border-r border-b border-slate-100 md:border-b-0"
            >
              <span className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter ${s.color} mb-2`}>
                {s.num}
              </span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-[9px] sm:text-[10px]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
