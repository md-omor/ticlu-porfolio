"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "1",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>,
    title: "Download the app",
    body: "Free on iOS and Android. Create an account with your email or sign in with Google — you're set up in under a minute.",
  },
  {
    n: "2",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Pick your interests",
    body: "Select the topics you love from 50+ categories. Ticlu personalises your video feed instantly — no algorithm guessing, no cold start.",
  },
  {
    n: "3",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
    title: "Watch, create, connect",
    body: "Scroll your personalised feed, post your own videos with the built-in editor, and connect with creators who share your exact passions.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-ticlu-slate grid-pattern">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="section-label">Getting started</span>
          <h2 className="text-4xl md:text-5xl font-black text-ticlu-dark leading-tight tracking-tight mt-2">
            Up and running in three steps.
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium leading-relaxed">
            From download to first post in under five minutes. No tutorial required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(33.3%+12px)] right-[calc(33.3%+12px)] h-px"
            style={{ background:"linear-gradient(90deg, transparent, rgba(96,165,250,0.4), transparent)" }} />

          {steps.map((s,i) => (
            <motion.div
              key={s.n}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.55, delay:i*0.1 }}
              className="bento-card flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background:"rgba(96,165,250,0.1)", border:"1.5px solid rgba(96,165,250,0.25)", color:"#60A5FA" }}>
                  {s.icon}
                </div>
                <span className="text-6xl font-black leading-none select-none" style={{ color:"rgba(30,41,59,0.05)" }}>
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black text-ticlu-dark mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
