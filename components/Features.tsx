"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-ticlu-dark grid-pattern">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-ticlu-blue/10 border border-ticlu-blue/20 text-ticlu-blue text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
          >
            Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-[1.1]"
          >
            Engineered for <span className="text-transparent bg-clip-text bg-linear-to-r from-ticlu-blue via-ticlu-purple to-ticlu-indigo">Modern Creators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-medium"
          >
            Powerful simplicity meets high-performance networking. Everything you need, exactly where you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {FEATURES.map((feature, index) => {
            // Define Bento Grid spans based on index
            const spans = [
              "md:col-span-3 lg:col-span-4 h-[400px]", // 0
              "md:col-span-3 lg:col-span-8 h-[400px]", // 1
              "md:col-span-6 lg:col-span-12 h-[350px]", // 2
              "md:col-span-3 lg:col-span-6 h-[400px]", // 3
              "md:col-span-3 lg:col-span-6 h-[400px]", // 4
            ][index] || "md:col-span-3 lg:col-span-4";

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bento-card ${spans} flex flex-col justify-end p-10 group`}
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-ticlu-blue/10 to-transparent rounded-full blur-3xl group-hover:bg-ticlu-blue/20 transition-all duration-700" />
                
                <div className="relative z-10 w-full">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-white tracking-tighter">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg font-medium max-w-md">
                    {feature.description}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-ticlu-blue font-bold text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Explore technology <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Grid Overlay inside card */}
                <div className="absolute inset-0 grid-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
