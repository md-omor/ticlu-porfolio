"use client";

import { FEATURES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-slate-50 grid-pattern">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Engineering Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black mb-8 text-slate-900 tracking-tighter leading-[0.85] uppercase"
          >
            Engineered for <span className="text-highlight-box">Content</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium"
          >
           Powerful simplicity meets high-performance networking. Everything you need, exactly where you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8">
          {FEATURES.map((feature, index) => {
            const spans = [
              "md:col-span-3 lg:col-span-4", // 0
              "md:col-span-3 lg:col-span-8", // 1
              "md:col-span-6 lg:col-span-12", // 2
              "md:col-span-3 lg:col-span-6", // 3
              "md:col-span-3 lg:col-span-6", // 4
            ][index] || "md:col-span-3 lg:col-span-4";

            const tagColors = [
              "bg-green-100 text-green-700",
              "bg-blue-100 text-blue-700",
              "bg-purple-100 text-purple-700",
              "bg-pink-100 text-pink-700",
              "bg-orange-100 text-orange-700",
            ][index];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bento-card ${spans} group`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                     <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${tagColors}`}>
                        {feature.id}
                     </span>
                     <div className="text-3xl group-hover:scale-125 transition-transform duration-500 grayscale group-hover:grayscale-0">
                        {feature.icon}
                     </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-3xl font-black mb-4 text-slate-900 tracking-tight uppercase border-b border-slate-100 pb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium">
                      {feature.description}
                    </p>
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
