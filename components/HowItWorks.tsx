"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Pick Your Passions",
    description:
      "On first launch, choose the topics you love — Photography, Tech, Music, Travel and 50+ more. Ticlu builds your personal feed from day one, with zero cold-start noise.",
    tag: "Personalisation",
    bullets: ["50+ interest categories", "Refine anytime in settings", "Instant feed calibration"],
    screen: <InterestScreen />,
    accent: "bg-ticlu-blue/10 border-ticlu-blue/20",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    number: "02",
    title: "Watch Your Feed",
    description:
      "Scroll through videos curated specifically for you. Like, comment, and react. The more you interact, the smarter your feed gets.",
    tag: "Discovery",
    bullets: ["Interest-filtered content", "Live reaction & comments", "Save videos for later"],
    screen: <FeedShowScreen />,
    accent: "bg-ticlu-purple/10 border-ticlu-purple/20",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    number: "03",
    title: "Create & Share",
    description:
      "Record directly in the app, trim to perfection with the built-in editor, tag your interests, and post. Your first upload takes under 60 seconds.",
    tag: "Creation",
    bullets: ["Built-in camera & trimmer", "Tag with interests", "Upload in under 60s"],
    screen: <CameraShowScreen />,
    accent: "bg-ticlu-indigo/10 border-ticlu-indigo/20",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Get Started in Minutes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 text-slate-900 tracking-tighter leading-[0.9] uppercase"
          >
            Three steps to{" "}
            <span className="text-highlight-box text-white not-italic">your</span>
            {" "}feed.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium"
          >
            No algorithm guessing. No cold start. Personalised from the first second.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-32">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text side */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${step.tagColor}`}>
                    {step.tag}
                  </span>
                  <span className="text-6xl font-black text-slate-100 select-none leading-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9]">
                  {step.title}
                </h3>

                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  {step.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-ticlu-blue/15 border border-ticlu-blue/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-ticlu-blue" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone side */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className="relative"
                >
                  {/* Glow halo */}
                  <div className={`absolute -inset-8 rounded-full blur-3xl ${step.accent}`} />

                  {/* Phone frame */}
                  <div className="relative w-[260px] h-[530px] bg-[#0F172A] rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)] border-[10px] border-[#1e293b] z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1e293b] rounded-b-3xl z-20 flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                      <div className="w-8 h-1 rounded-full bg-slate-700" />
                    </div>
                    <div className="w-full h-full rounded-[2.4rem] bg-[#0A0A0A] overflow-hidden">
                      {step.screen}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SCREEN COMPONENTS ─── */

function InterestScreen() {
  const cats = [
    { label:"🎨 Art",         active:true  },
    { label:"📷 Photography", active:true  },
    { label:"💻 Tech",        active:false },
    { label:"🎵 Music",       active:true  },
    { label:"✈️ Travel",      active:false },
    { label:"🎮 Gaming",      active:true  },
    { label:"🍕 Food",        active:false },
    { label:"💪 Fitness",     active:false },
    { label:"📚 Education",   active:true  },
    { label:"🐾 Pets",        active:false },
  ];
  return (
    <div className="w-full h-full bg-[#080810] flex flex-col pt-8 px-4">
      <p className="text-white font-black text-sm mb-1">Pick your passions</p>
      <p className="text-white/40 text-[10px] mb-5">Select at least 3 to personalise your feed</p>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <span
            key={c.label}
            className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all ${
              c.active
                ? "bg-[#60A5FA] text-[#080810] border-[#60A5FA]"
                : "bg-white/5 text-white/55 border-white/10"
            }`}
          >
            {c.label}
          </span>
        ))}
      </div>
      <div className="mt-auto pb-6">
        <div className="w-full bg-[#60A5FA] text-[#080810] rounded-2xl py-3 text-center text-xs font-black uppercase tracking-widest">
          Continue →
        </div>
      </div>
    </div>
  );
}

function FeedShowScreen() {
  return (
    <div className="w-full h-full bg-[#080810] flex flex-col">
      <div className="flex items-center justify-between px-4 pt-8 pb-2">
        <span className="text-[#60A5FA] font-black text-base tracking-tight">ticlu</span>
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-white/10" />
          <div className="w-5 h-5 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="flex gap-1.5 px-3 pb-3">
        {["All","Photography","Tech","Music"].map((p,i)=>(
          <span key={p} className={`flex-shrink-0 text-[8px] font-bold px-2.5 py-1 rounded-full ${i===0?"bg-[#60A5FA] text-[#080810]":"bg-white/8 text-white/50 border border-white/10"}`}>{p}</span>
        ))}
      </div>
      {/* Big featured post */}
      <div className="mx-3 rounded-2xl overflow-hidden border border-white/6 mb-2">
        <div className="h-36 bg-gradient-to-br from-blue-900/70 to-indigo-900/70 flex items-center justify-center relative">
          <div className="w-10 h-10 rounded-full bg-[#60A5FA]/90 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[11px] border-l-[#080810] border-b-[7px] border-b-transparent ml-1" />
          </div>
          <span className="absolute bottom-2 right-3 text-[8px] text-white/70 bg-black/50 rounded px-1.5">3:24</span>
          <span className="absolute top-2 left-2 text-[8px] text-white/80 bg-[#60A5FA]/80 rounded px-2 py-0.5 font-bold">#Photography</span>
        </div>
        <div className="px-3 py-2.5">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#818CF8]" />
            <span className="text-[9px] font-bold text-white/80">@jordanm</span>
            <span className="text-[8px] text-white/30 ml-auto">2m ago</span>
          </div>
          <p className="text-[9px] text-white/60">Golden hour at the canyon — took 3 trips to get this shot 🌅</p>
          <div className="flex gap-4 mt-2">
            <span className="text-[8px] text-red-400">♥ 2.1k</span>
            <span className="text-[8px] text-white/40">💬 48</span>
            <span className="text-[8px] text-white/40">↗ 210</span>
          </div>
        </div>
      </div>
      {/* Small post */}
      <div className="mx-3 rounded-xl overflow-hidden border border-white/6 flex gap-2 p-2">
        <div className="w-16 h-14 rounded-lg bg-gradient-to-br from-purple-900/60 to-indigo-900/60 flex-shrink-0 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white/60 border-b-[5px] border-b-transparent ml-0.5" />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <p className="text-[8px] text-white/70 font-bold">@techwave · #Tech</p>
          <p className="text-[8px] text-white/45 leading-snug">Building my first PCB board 🔧</p>
          <span className="text-[7px] text-white/30">♥ 892 · 14m ago</span>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex justify-around px-4 py-2.5 border-t border-white/6 mt-auto">
        {["⌂","◎","＋","🔔","◉"].map((ic,i)=>(
          <div key={i} className={`text-sm ${i===0?"text-[#60A5FA]":"text-white/25"}`}>{ic}</div>
        ))}
      </div>
    </div>
  );
}

function CameraShowScreen() {
  return (
    <div className="w-full h-full bg-black flex flex-col">
      {/* Viewfinder */}
      <div className="flex-1 bg-gradient-to-b from-[#050d18] to-[#0a1520] relative flex items-center justify-center">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white" />
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-white" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-white" />
        </div>
        {/* Focus corners */}
        <div className="absolute inset-8 border border-transparent">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#60A5FA] rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#60A5FA] rounded-tr-sm" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#60A5FA] rounded-bl-sm" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#60A5FA] rounded-br-sm" />
        </div>
        {/* Subject silhouette */}
        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="text-3xl opacity-30">👤</span>
        </div>
        {/* Rec indicator */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 rounded-full px-2 py-1">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[8px] text-white/80 font-bold">REC 0:14</span>
        </div>
      </div>
      {/* Trim bar */}
      <div className="bg-[#080810] px-3 py-2.5 border-t border-white/6">
        <div className="h-6 bg-white/5 rounded-lg relative overflow-hidden mb-1">
          <div className="absolute left-[15%] right-[25%] top-0 bottom-0 bg-[#60A5FA]/25 border-l-2 border-r-2 border-[#60A5FA]" />
          <div className="absolute left-[38%] top-0 bottom-0 w-0.5 bg-[#60A5FA]" />
        </div>
        <p className="text-center text-[7px] text-white/30">Drag to trim • 0:14 / 0:30</p>
      </div>
      {/* Controls */}
      <div className="bg-[#080810] flex items-center justify-around px-6 py-3 pb-5">
        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm">🔄</div>
        <div className="w-14 h-14 rounded-full bg-[#60A5FA] flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.5)]">
          <div className="w-5 h-5 rounded-sm bg-[#080810]" />
        </div>
        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
          <span className="text-[8px] text-white/50 font-bold">FX</span>
        </div>
      </div>
    </div>
  );
}
