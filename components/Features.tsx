"use client";

import { FEATURES } from "@/lib/constants";
import { motion } from "framer-motion";

// Extra visual data per feature card
const featureMeta: Record<string, { gradient: string; preview: React.ReactNode }> = {
  feed: {
    gradient: "from-blue-500/10 to-indigo-500/10",
    preview: (
      <div className="flex gap-1.5 mt-4 flex-wrap">
        {["Photography","Tech","Music","Travel","Gaming"].map((t,i) => (
          <span key={t} className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${i===0?"bg-ticlu-blue text-white":"bg-slate-100 text-slate-500 border border-slate-200"}`}>
            #{t}
          </span>
        ))}
      </div>
    ),
  },
  spotlight: {
    gradient: "from-purple-500/10 to-pink-500/10",
    preview: (
      <div className="flex gap-2 mt-4">
        {[80,55,90,40,70].map((h,i)=>(
          <div key={i} style={{height:`${h}%`}} className="flex-1 bg-ticlu-purple/20 rounded-sm min-h-[20px] max-h-[40px] self-end" />
        ))}
      </div>
    ),
  },
  discover: {
    gradient: "from-indigo-500/10 to-blue-500/10",
    preview: (
      <div className="mt-4 space-y-2">
        {["@jordanm · 2.1k likes","@techwave · 892 likes","@artsy_mel · 1.4k likes"].map(u=>(
          <div key={u} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-ticlu-blue/30 flex-shrink-0" />
            <span className="text-[9px] text-slate-500">{u}</span>
          </div>
        ))}
      </div>
    ),
  },
  create: {
    gradient: "from-green-500/10 to-teal-500/10",
    preview: (
      <div className="mt-4">
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full w-[65%] bg-gradient-to-r from-ticlu-blue to-ticlu-indigo rounded-full" />
        </div>
        <p className="text-[9px] text-slate-400 mt-1">Uploading… 65%</p>
      </div>
    ),
  },
  profiles: {
    gradient: "from-pink-500/10 to-rose-500/10",
    preview: (
      <div className="flex gap-4 mt-4">
        {[["128","Posts"],["4.2k","Likes"],["312","Following"]].map(([n,l])=>(
          <div key={l}>
            <p className="text-sm font-black text-slate-900">{n}</p>
            <p className="text-[9px] text-slate-400">{l}</p>
          </div>
        ))}
      </div>
    ),
  },
};

const tagColors = [
  "bg-blue-100 text-blue-700",
  "bg-purple-100 text-purple-700",
  "bg-indigo-100 text-indigo-700",
  "bg-green-100 text-green-700",
  "bg-pink-100 text-pink-700",
];

const spans = [
  "md:col-span-3 lg:col-span-4",
  "md:col-span-3 lg:col-span-8",
  "md:col-span-6 lg:col-span-12",
  "md:col-span-3 lg:col-span-6",
  "md:col-span-3 lg:col-span-6",
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-ticlu-slate grid-pattern">
      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Built Different
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black mb-8 text-slate-900 tracking-tighter leading-[0.85] uppercase"
          >
            Everything you need.{" "}
            <span className="text-highlight-box text-white not-italic">Nothing you don't.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium"
          >
            Powerful simplicity meets high-performance networking. Every feature is built around your interests.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {FEATURES.map((feature, index) => {
            const meta = featureMeta[feature.id];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`bento-card ${spans[index] || "md:col-span-3 lg:col-span-4"} group`}
              >
                {/* Gradient tint on hover */}
                <div className={`absolute inset-0 rounded-4xl bg-gradient-to-br ${meta?.gradient ?? ""} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${tagColors[index]}`}>
                      {feature.id}
                    </span>
                    <div className="text-4xl group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 grayscale group-hover:grayscale-0">
                      {feature.icon}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black mb-3 text-slate-900 tracking-tight uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                    {/* Visual preview */}
                    {meta?.preview}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
