"use client";

import { motion } from "framer-motion";

const rows = [
  {
    tag: "Interest-based feed",
    title: "Your feed knows what you love.",
    body: "On signup, choose from 50+ interest categories. Ticlu builds a personalised video feed from day one — no cold start, no random content, no wasted scroll.",
    bullets: ["50+ interest categories", "Feed calibrated from first launch", "Refine your interests anytime"],
    phone: <FeedDetailScreen />,
    flip: false,
    bg: "bg-white",
  },
  {
    tag: "Create & post",
    title: "Record, trim, and share in under a minute.",
    body: "Open the built-in camera, record your moment, and trim to perfection with the frame-accurate timeline editor. Tag your interests and post. No desktop required.",
    bullets: ["Built-in camera recorder", "Frame-accurate video trimmer", "Post with interest tags"],
    phone: <CameraDetailScreen />,
    flip: true,
    bg: "bg-ticlu-slate",
  },
  {
    tag: "Discover",
    title: "Find creators who share your passion.",
    body: "Search by username or browse by interest. Every creator profile is tagged by what they love — finding your community is instant, not buried behind follow counts.",
    bullets: ["Search by interest or username", "Interest-tagged creator profiles", "Follow without algorithmic friction"],
    phone: <SearchDetailScreen />,
    flip: false,
    bg: "bg-white",
  },
  {
    tag: "Notifications",
    title: "Stay in the loop, not overwhelmed.",
    body: "Likes, comments, follows — all grouped cleanly. You always know when something important happens without an inbox full of noise. Fully customisable in settings.",
    bullets: ["Grouped by notification type", "Likes, comments and follows", "Configurable in-app settings"],
    phone: <NotifDetailScreen />,
    flip: true,
    bg: "bg-ticlu-slate",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22,1,0.36,1] },
} as any;

export default function Features() {
  return (
    <section id="features">
      {rows.map((r, i) => (
        <div key={r.tag} className={`${r.bg} py-20 md:py-28`}>
          <div className="container mx-auto px-6 lg:px-10">
            <motion.div
              {...fadeUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${r.flip ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text */}
              <div className="flex flex-col gap-5">
                <span className="section-label">{r.tag}</span>
                <h2 className="text-3xl md:text-4xl font-black text-ticlu-dark leading-tight tracking-tight">
                  {r.title}
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  {r.body}
                </p>
                <ul className="flex flex-col gap-3 mt-1">
                  {r.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background:"rgba(96,165,250,0.12)", border:"1.5px solid rgba(96,165,250,0.3)" }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5 3.5-4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0,-12,0] }}
                  transition={{ duration:5.5, repeat:Infinity, ease:"easeInOut", delay: i*0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-[44px] blur-[40px] opacity-20"
                    style={{ background:"#60A5FA", transform:"scale(0.85) translateY(8%)" }} />
                  <div className="phone-frame relative z-10" style={{ width:230, aspectRatio:"9/19.5" }}>
                    <div className="phone-notch" />
                    <div className="w-full h-full overflow-hidden" style={{ background:"#040814" }}>
                      {r.phone}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ── Screen components ── */

function Base({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-full flex flex-col" style={{ background:"#040814" }}>{children}</div>;
}
function Header({ right }: { right: string }) {
  return (
    <div className="flex items-center justify-between px-3.5 pt-7 pb-2.5">
      <span className="font-black text-base" style={{ color:"#2BB5C1" }}>ticlu</span>
      <span className="text-xs font-bold text-white/70">{right}</span>
    </div>
  );
}

function FeedDetailScreen() {
  const cats = ["All","Photography","Tech","Music","Travel","Gaming"];
  return (
    <Base>
      <Header right="Feed" />
      <div className="flex gap-1.5 px-3 pb-2.5 flex-wrap">
        {cats.map((c,i) => (
          <span key={c} className="text-[7.5px] font-bold px-2.5 py-1 rounded-full"
            style={i===0 ? { background:"#2BB5C1",color:"#040814" } : { background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.45)",border:"1px solid rgba(255,255,255,0.08)" }}>
            {c}
          </span>
        ))}
      </div>
      {[
        { bg:"#0d1a2e", u:"@jordanm",  t:"Photography", d:"Golden hour at the canyon — this shot took 3 trips", dur:"2:34" },
        { bg:"#150d2a", u:"@techwave", t:"Tech",         d:"Building my first PCB board from scratch",           dur:"1:18" },
      ].map((p,i) => (
        <div key={i} className="mx-2 mb-2 rounded-xl overflow-hidden" style={{ background:"#181C28", border:"1px solid rgba(255,255,255,0.05)" }}>
          <div className="h-[72px] flex items-center justify-center relative" style={{ background:p.bg }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background:"rgba(43,181,193,0.85)" }}>
              <div className="w-0 h-0 ml-0.5" style={{ borderTop:"5px solid transparent", borderBottom:"5px solid transparent", borderLeft:"8px solid #040814" }} />
            </div>
            <span className="absolute bottom-1.5 right-2 text-[6.5px] px-1.5 py-0.5 rounded" style={{ background:"rgba(0,0,0,0.55)",color:"rgba(255,255,255,0.7)" }}>{p.dur}</span>
          </div>
          <div className="px-2.5 py-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full" style={{ background:"linear-gradient(135deg,#2BB5C1,#2D69FF)" }} />
              <span className="text-[7.5px] font-bold text-white/80">{p.u}</span>
              <span className="text-[7px] ml-auto" style={{ color:"#2BB5C1" }}>#{p.t}</span>
            </div>
            <p className="text-[7px] mt-1 leading-snug" style={{ color:"rgba(255,255,255,0.45)" }}>{p.d}</p>
            <div className="flex gap-3 mt-1.5">
              {["♥ 2.1k","💬 48","↗"].map(a => <span key={a} className="text-[7px]" style={{ color:"rgba(255,255,255,0.28)" }}>{a}</span>)}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-around px-4 py-2.5 mt-auto" style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
        {[true,false,false,false,false].map((a,i)=>(
          <div key={i} className="w-4 h-1 rounded-full" style={{ background:a?"#2BB5C1":"rgba(255,255,255,0.15)" }}/>
        ))}
      </div>
    </Base>
  );
}

function CameraDetailScreen() {
  return (
    <Base>
      <div className="flex-1 relative flex items-center justify-center" style={{ background:"#050d18" }}>
        {[["top-8 left-8","border-t border-l"],["top-8 right-8","border-t border-r"],["bottom-16 left-8","border-b border-l"],["bottom-16 right-8","border-b border-r"]].map(([pos,cls],i)=>(
          <div key={i} className={`absolute ${pos} w-5 h-5 ${cls}`} style={{ borderColor:"#2BB5C1",borderWidth:1.5 }}/>
        ))}
        <div className="w-16 h-16 rounded-full border border-white/10 bg-white/4 flex items-center justify-center">
          <span className="text-2xl opacity-20">👤</span>
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-2 py-0.5" style={{ background:"rgba(0,0,0,0.5)" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"/>
          <span className="text-[7.5px] font-bold text-white/80">REC 0:14</span>
        </div>
      </div>
      <div className="px-3 py-2" style={{ background:"#0A0A0A", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
        <div className="h-5 rounded-lg relative overflow-hidden" style={{ background:"rgba(255,255,255,0.05)" }}>
          <div className="absolute inset-y-0" style={{ left:"12%",right:"22%",background:"rgba(43,181,193,0.2)",borderLeft:"2px solid #2BB5C1",borderRight:"2px solid #2BB5C1" }}/>
          <div className="absolute inset-y-0 w-0.5" style={{ left:"36%",background:"#2BB5C1" }}/>
        </div>
        <p className="text-center text-[6.5px] mt-1" style={{ color:"rgba(255,255,255,0.28)" }}>Drag handles to trim · 0:14 / 0:30</p>
      </div>
      <div className="flex items-center justify-around px-6 py-3" style={{ background:"#0A0A0A" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background:"rgba(255,255,255,0.08)" }}>🔄</div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background:"#2BB5C1", boxShadow:"0 0 16px rgba(43,181,193,0.45)" }}>
          <div className="w-4 h-4 rounded-sm" style={{ background:"#040814" }}/>
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background:"rgba(255,255,255,0.08)" }}>
          <span className="text-[7px] text-white/45 font-bold">FX</span>
        </div>
      </div>
    </Base>
  );
}

function SearchDetailScreen() {
  const users = [
    { name:"Alex Rivera",   handle:"@alexrivera",  tags:["Photography","Travel"], g:"#2BB5C1,#2D69FF" },
    { name:"Jordan Mills",  handle:"@jordanm",     tags:["Photography"],          g:"#2D69FF,#818CF8" },
    { name:"Sam Tech",      handle:"@samtech",     tags:["Tech","Gaming"],        g:"#818CF8,#2BB5C1" },
    { name:"Music Maven",   handle:"@musicmaven",  tags:["Music"],                g:"#2BB5C1,#818CF8" },
  ];
  return (
    <Base>
      <Header right="Discover" />
      <div className="mx-3 mb-3 rounded-xl px-3 py-2.5 flex items-center gap-2"
        style={{ background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)" }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <span className="text-[7.5px]" style={{ color:"rgba(255,255,255,0.28)" }}>Search creators, interests...</span>
      </div>
      {users.map((u,i) => (
        <div key={i} className="flex items-center gap-2.5 px-3.5 py-2.5" style={{ borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
          <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ background:`linear-gradient(135deg,${u.g})` }} />
          <div className="flex-1 min-w-0">
            <p className="text-[8.5px] font-bold text-white/90">{u.name}</p>
            <p className="text-[7px]" style={{ color:"rgba(255,255,255,0.38)" }}>{u.handle}</p>
          </div>
          <div className="flex gap-1 flex-wrap justify-end">
            {u.tags.map(t => (
              <span key={t} className="text-[6.5px] px-1.5 py-0.5 rounded-full" style={{ background:"rgba(43,181,193,0.12)",color:"#2BB5C1",border:"1px solid rgba(43,181,193,0.2)" }}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </Base>
  );
}

function NotifDetailScreen() {
  const items = [
    { icon:"♥", from:"@sara",    body:"liked your video",    time:"2m",  c:"#e25c72" },
    { icon:"💬", from:"@mike",   body:"commented: 'Wow!'",   time:"5m",  c:"#2BB5C1" },
    { icon:"👤", from:"@alex",   body:"started following",   time:"1h",  c:"#818CF8" },
    { icon:"♥", from:"@design", body:"liked your video",     time:"2h",  c:"#e25c72" },
    { icon:"✨", from:"Ticlu",   body:"Your post is trending", time:"3h", c:"#FACC15" },
  ];
  return (
    <Base>
      <Header right="Notifications" />
      {items.map((n,i) => (
        <div key={i} className="flex items-center gap-2.5 px-3.5 py-2.5" style={{ borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] flex-shrink-0"
            style={{ background:`${n.c}20`, border:`1px solid ${n.c}40` }}>
            {n.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[7.5px] leading-tight" style={{ color:"rgba(255,255,255,0.65)" }}>
              <span className="font-bold" style={{ color:"rgba(255,255,255,0.9)" }}>{n.from}</span> {n.body}
            </p>
            <p className="text-[6.5px] mt-0.5" style={{ color:"rgba(255,255,255,0.28)" }}>{n.time}</p>
          </div>
        </div>
      ))}
    </Base>
  );
}
