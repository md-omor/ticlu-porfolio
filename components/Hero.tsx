"use client";

import { BRAND } from "@/lib/constants";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handler = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  } as any;
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as any;

  const interests = ["Photography", "Tech", "Music", "Travel", "Gaming", "Art", "Fitness", "Food"];

  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-36 pb-24 overflow-hidden bg-white grid-pattern">
      {/* Mouse spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-30 opacity-0 lg:opacity-100 transition duration-300"
        style={{ background: `radial-gradient(700px at ${spotlightX}px ${spotlightY}px, rgba(96,165,250,0.07), transparent 80%)` }}
      />

      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1,1.15,1], x:[0,40,0], y:[0,-25,0] }}
        transition={{ duration:14, repeat: Infinity, ease:"linear" }}
        className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-ticlu-blue/15 rounded-full blur-[130px] -z-10"
      />
      <motion.div
        animate={{ scale:[1,1.2,1], x:[0,-40,0], y:[0,25,0] }}
        transition={{ duration:17, repeat:Infinity, ease:"linear" }}
        className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-ticlu-purple/15 rounded-full blur-[130px] -z-10"
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-10 relative z-40">

          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-ticlu-blue/8 text-ticlu-blue text-[11px] font-black tracking-[0.3em] uppercase border border-ticlu-blue/20">
              <span className="w-1.5 h-1.5 rounded-full bg-ticlu-blue animate-pulse" />
              Now in Beta — Join free
            </span>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-4">
            <motion.h1 variants={item} className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85] uppercase">
              {BRAND.name}
            </motion.h1>
            <motion.p variants={item} className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Discover content you{" "}
              <span className="text-highlight-box text-white not-italic">actually</span>{" "}
              care about
            </motion.p>
          </div>

          {/* Sub */}
          <motion.p variants={item} className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-xl">
            Interest-based video feeds. Real creators. Zero algorithm noise.
            Follow your passions — not what's trending for everyone else.
          </motion.p>

          {/* Scrolling interest pills */}
          <motion.div variants={item} className="overflow-hidden -mx-2">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex gap-2 w-max"
            >
              {[...interests, ...interests].map((tag, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold bg-slate-50 border border-slate-200 text-slate-500 select-none"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              href="#download"
              className="group flex items-center gap-2 bg-ticlu-blue text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_16px_40px_-8px_rgba(96,165,250,0.45)]"
            >
              Download Free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="flex items-center gap-2 glass-card px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm text-slate-600 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 border-slate-200"
            >
              See how it works
            </Link>
          </motion.div>

          {/* Social proof row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Avatars */}
            <div className="flex -space-x-3">
              {["from-ticlu-blue to-ticlu-indigo","from-ticlu-purple to-pink-500","from-ticlu-indigo to-ticlu-blue","from-pink-400 to-ticlu-purple"].map((grad,i) => (
                <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden ring-1 ring-ticlu-blue/10 shadow-sm">
                  <div className={`w-full h-full bg-gradient-to-br ${grad}`} />
                </div>
              ))}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white glass-card flex items-center justify-center text-[8px] sm:text-[10px] font-black text-ticlu-blue ring-1 ring-ticlu-blue/10">
                +10k
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-200" />
            {/* Stars */}
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={11} className="fill-amber-400 text-amber-400 sm:size-[13px]"/>)}
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500">
                Loved by <span className="text-slate-900">10k+ creators</span>
              </p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            {/* Stat */}
            <div className="flex flex-col gap-0.5">
              <p className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">500k+</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500">Videos shared</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — phone mockup group */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="relative flex justify-center items-end gap-4"
        >
          {/* Left phone — Profile */}
          <motion.div
            animate={{ y: [0,-12,0], rotate:[-1.5,1.5,-1.5] }}
            transition={{ duration:6.5, repeat:Infinity, ease:"easeInOut", delay:0.8 }}
            className="relative hidden md:block w-[140px] lg:w-[170px] h-[280px] lg:h-[340px] bg-[#0F172A] rounded-[2rem] lg:rounded-[2.4rem] p-2 lg:p-2.5 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)] border-[6px] lg:border-[8px] border-[#1e293b] mt-16 opacity-80"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 lg:w-20 h-4 lg:h-5 bg-[#1e293b] rounded-b-2xl z-20" />
            <div className="w-full h-full rounded-[1.5rem] lg:rounded-[1.8rem] bg-[#0A0A0A] overflow-hidden relative">
              <ProfileScreen small />
            </div>
          </motion.div>

          {/* Main phone — Feed */}
          <motion.div
            animate={{ y:[0,-20,0] }}
            transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
            className="relative w-[180px] sm:w-[220px] lg:w-[240px] h-[370px] sm:h-[450px] lg:h-[490px] bg-[#0F172A] rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.2rem] p-2.5 sm:p-3 shadow-[0_60px_120px_-20px_rgba(15,23,42,0.5)] border-[8px] lg:border-[10px] border-[#1e293b] z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 sm:h-6 bg-[#1e293b] rounded-b-2xl sm:rounded-b-3xl z-20 flex items-center justify-center gap-1.5 sm:gap-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-700" />
              <div className="w-6 h-0.5 sm:w-8 sm:h-1 rounded-full bg-slate-700" />
            </div>
            <div className="w-full h-full rounded-[2rem] sm:rounded-[2.4rem] lg:rounded-[2.6rem] bg-[#0A0A0A] overflow-hidden">
              <FeedScreen />
            </div>
          </motion.div>

          {/* Right phone — Notifications */}
          <motion.div
            animate={{ y:[0,-14,0], rotate:[1,-1.5,1] }}
            transition={{ duration:7, repeat:Infinity, ease:"easeInOut", delay:0.4 }}
            className="relative hidden md:block w-[140px] lg:w-[170px] h-[280px] lg:h-[340px] bg-[#0F172A] rounded-[2rem] lg:rounded-[2.4rem] p-2 lg:p-2.5 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)] border-[6px] lg:border-[8px] border-[#1e293b] mt-16 opacity-80"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 lg:w-20 h-4 lg:h-5 bg-[#1e293b] rounded-b-2xl z-20" />
            <div className="w-full h-full rounded-[1.5rem] lg:rounded-[1.8rem] bg-[#0A0A0A] overflow-hidden">
              <NotifScreen small />
            </div>
          </motion.div>

          {/* Ambient glows */}
          <div className="absolute top-1/3 -left-16 w-56 h-56 bg-ticlu-blue/25 rounded-full blur-[70px] -z-10 animate-pulse-slow" />
          <div className="absolute bottom-1/3 -right-16 w-56 h-56 bg-ticlu-purple/25 rounded-full blur-[70px] -z-10 animate-pulse-slow" />

          {/* Floating badges */}
          <motion.div
            initial={{ opacity:0, x:-20 }}
            animate={{ opacity:1, x:0 }}
            transition={{ delay:1.4 }}
            className="absolute -left-4 top-1/4 glass-card rounded-2xl px-4 py-3 shadow-lg border border-slate-100 hidden lg:flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center text-sm">🎬</div>
            <div>
              <p className="text-xs font-black text-slate-900">New post liked</p>
              <p className="text-[10px] text-slate-400 font-medium">2 sec ago</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity:0, x:20 }}
            animate={{ opacity:1, x:0 }}
            transition={{ delay:1.6 }}
            className="absolute -right-4 bottom-1/3 glass-card rounded-2xl px-4 py-3 shadow-lg border border-slate-100 hidden lg:flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-sm">✨</div>
            <div>
              <p className="text-xs font-black text-slate-900">You're trending</p>
              <p className="text-[10px] text-slate-400 font-medium">in #Photography</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── INLINE SCREEN COMPONENTS ─── */

function FeedScreen() {
  const pills = ["All","Photography","Tech","Music","Travel"];
  const posts = [
    { user:"@jordanm", tag:"Photography", title:"Golden hour at the canyon", time:"2:34", grad:"from-blue-900/60 to-indigo-900/60" },
    { user:"@techwave", tag:"Tech",        title:"Building my first PCB board", time:"1:12", grad:"from-indigo-900/60 to-purple-900/60" },
  ];
  return (
    <div className="w-full h-full bg-[#080810] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-8 pb-2">
        <span className="text-[#60A5FA] font-black text-lg tracking-tight">ticlu</span>
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-white/10" />
          <div className="w-5 h-5 rounded-full bg-white/10" />
        </div>
      </div>
      {/* Interest pills */}
      <div className="flex gap-1.5 px-3 pb-3 overflow-hidden">
        {pills.map((p,i) => (
          <span key={p} className={`flex-shrink-0 text-[8px] font-bold px-2.5 py-1 rounded-full ${i===0 ? "bg-[#60A5FA] text-[#080810]" : "bg-white/8 text-white/60 border border-white/10"}`}>
            {p}
          </span>
        ))}
      </div>
      {/* Posts */}
      <div className="flex flex-col gap-2 px-2 overflow-hidden flex-1">
        {posts.map((post,i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-white/6 bg-white/4">
            <div className={`w-full h-20 bg-gradient-to-br ${post.grad} flex items-center justify-center relative`}>
              <div className="w-7 h-7 rounded-full bg-[#60A5FA]/90 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#080810] border-b-[5px] border-b-transparent ml-0.5" />
              </div>
              <span className="absolute bottom-1.5 right-2 text-[7px] text-white/70 bg-black/50 rounded px-1">{post.time}</span>
            </div>
            <div className="px-2.5 py-2">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#818CF8]" />
                <span className="text-[8px] font-bold text-white/80">{post.user}</span>
                <span className="text-[7px] text-[#60A5FA] ml-auto">#{post.tag}</span>
              </div>
              <p className="text-[8px] text-white/55 leading-tight">{post.title}</p>
              <div className="flex gap-3 mt-1.5">
                {["♥ 2.1k","💬 48","↗ Share"].map(a => (
                  <span key={a} className="text-[7px] text-white/40">{a}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Tab bar */}
      <div className="flex justify-around items-center px-4 py-2.5 border-t border-white/6 mt-auto">
        {["⌂","◎","＋","🔔","◉"].map((ic,i) => (
          <div key={i} className={`text-sm ${i===0 ? "text-[#60A5FA]" : "text-white/30"}`}>{ic}</div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen({ small }: { small?: boolean }) {
  return (
    <div className="w-full h-full bg-[#080810] flex flex-col">
      <div className="h-14 bg-gradient-to-br from-[#60A5FA]/20 to-[#818CF8]/20" />
      <div className="px-3 -mt-5 flex justify-between items-end pb-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#818CF8] border-2 border-[#080810]" />
        <div className="text-[8px] border border-white/20 text-white/60 rounded-full px-2 py-0.5 mb-1">Edit</div>
      </div>
      <div className="px-3 pb-2">
        <p className="text-[10px] font-bold text-white">Alex Rivera</p>
        <p className="text-[8px] text-white/40">@alexrivera</p>
        <div className="flex gap-4 mt-2">
          {[["128","Posts"],["4.2k","Likes"]].map(([n,l]) => (
            <div key={l}><p className="text-[10px] font-black text-white">{n}</p><p className="text-[7px] text-white/40">{l}</p></div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-px px-1 flex-1">
        {[...Array(6)].map((_,i) => (
          <div key={i} className="aspect-square bg-gradient-to-br from-white/6 to-white/3 flex items-center justify-center">
            <span className="text-white/15 text-[10px]">▶</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotifScreen({ small }: { small?: boolean }) {
  const notifs = [
    { emoji:"♥", text:"@janedoe liked your video", time:"2m", color:"bg-red-500/80" },
    { emoji:"💬", text:"@mike commented: 'Wow!'", time:"5m", color:"bg-[#60A5FA]/80" },
    { emoji:"👤", text:"@sara started following you", time:"1h", color:"bg-[#818CF8]/80" },
    { emoji:"✨", text:"Your post is trending", time:"2h", color:"bg-amber-500/80" },
  ];
  return (
    <div className="w-full h-full bg-[#080810] flex flex-col">
      <div className="px-3 pt-8 pb-3">
        <p className="text-[11px] font-black text-white">Notifications</p>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        {notifs.map((n,i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-2.5 border-b border-white/4">
            <div className={`w-6 h-6 rounded-full ${n.color} flex items-center justify-center text-[9px] flex-shrink-0`}>{n.emoji}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[8px] text-white/70 leading-tight truncate">{n.text}</p>
              <p className="text-[7px] text-white/30 mt-0.5">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
