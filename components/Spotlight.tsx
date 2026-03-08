"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

export default function Spotlight() {
  return (
    <section id="spotlight" className="py-24 bg-ticlu-slate overflow-hidden">
       <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-ticlu-blue font-bold tracking-widest uppercase text-sm mb-4 block"
                >
                    Spotlight Mode
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-extrabold text-ticlu-dark mb-8 leading-tight"
                >
                    Discover what the world is <span className="text-ticlu-blue">Creating</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-gray-600 mb-10 leading-relaxed"
                >
                    Experience a curated feed of trending videos tailored specifically to your interests. From high-octane sports to peaceful nature loops, the Spotlight is where talent meets its audience.
                </motion.p>
                
                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="grid grid-cols-2 gap-6"
                >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-3xl mb-2">🔥</div>
                        <h4 className="font-bold text-ticlu-dark">Trending</h4>
                        <p className="text-sm text-gray-500">What's hot right now</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-3xl mb-2">🎈</div>
                        <h4 className="font-bold text-ticlu-dark">For You</h4>
                        <p className="text-sm text-gray-500">Personalized magic</p>
                    </div>
                </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative">
                <div className="relative z-10 grid grid-cols-2 gap-4">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full aspect-9/16 bg-linear-to-br from-gray-200 to-gray-300 rounded-3xl shadow-xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-ticlu-blue/20 group-hover:bg-ticlu-blue/10 transition-colors" />
                        <div className="absolute bottom-4 left-4 text-white font-bold text-sm">#Travel</div>
                    </motion.div>
                    <motion.div 
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full aspect-9/16 bg-linear-to-br from-indigo-200 to-blue-300 rounded-3xl shadow-xl overflow-hidden mt-12 relative group"
                    >
                        <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/5 transition-colors" />
                        <div className="absolute bottom-4 left-4 text-white font-bold text-sm">#Music</div>
                    </motion.div>
                </div>
                {/* Decorative circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-dashed border-ticlu-blue/20 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
       </div>
    </section>
  );
}
