"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally a feed that shows me what I actually care about. I've discovered more photographers in one week on Ticlu than I did in a year on other apps.",
    name: "Alex Rivera",
    handle: "@alexrivera",
    tag: "#Photography",
    initials: "AR",
    grad: "from-ticlu-blue to-ticlu-indigo",
    stars: 5,
  },
  {
    quote: "The video trimmer is insane for a mobile app. I record, trim and post in under a minute. The interest system means my content actually reaches the right people.",
    name: "Jordan Mills",
    handle: "@jordanm",
    tag: "#Tech",
    initials: "JM",
    grad: "from-ticlu-purple to-pink-500",
    stars: 5,
  },
  {
    quote: "I was skeptical but Ticlu proved me wrong. Within 48 hours my travel videos were being seen by real travel enthusiasts — not random bots.",
    name: "Sara Chen",
    handle: "@sarachen",
    tag: "#Travel",
    initials: "SC",
    grad: "from-ticlu-indigo to-ticlu-blue",
    stars: 5,
  },
];

const marqueeItems = [
  { text: "Best interest-based feed I've used", name: "@creativepro" },
  { text: "Love how it surfaces relevant content", name: "@techblogger" },
  { text: "The camera tool is super clean", name: "@filmmaker22" },
  { text: "Finally — content I actually want to see", name: "@artsy_mel" },
  { text: "Great community of niche creators", name: "@musicmaven" },
  { text: "Notifications are actually useful here", name: "@devdiary" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 container mx-auto bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Creator Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 text-slate-900 tracking-tighter leading-[0.9] uppercase font-open-sans"
          >
            Loved by{" "}
            <span className="text-highlight-box text-white not-italic">real</span>{" "}
            creators.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium"
          >
            10,000+ creators already sharing what they love. Here's what they say.
          </motion.p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glossy-card p-8 flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_,s) => (
                  <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed font-medium text-sm sm:text-[15px] italic flex-1">
                "{t.quote}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-ticlu-blue font-bold">{t.handle} · {t.tag}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden -mx-6 px-0 py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3"
              >
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s=><Star key={s} size={10} className="fill-amber-400 text-amber-400"/>)}
                </div>
                <p className="text-sm font-medium text-slate-700">"{m.text}"</p>
                <p className="text-xs text-ticlu-blue font-bold">{m.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}