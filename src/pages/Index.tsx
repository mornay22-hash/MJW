import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const TRACKS = [
  { id: "fbL0Nt3A4mU", n: "01" },
  { id: "e9aMikihI48", n: "02" },
  { id: "sZFShW_OQW4", n: "03" },
  { id: "6xZqkuHUaFA", n: "04" },
  { id: "M3xiD9Q4RyI", n: "05" },
  { id: "itiT-YrHk0U", n: "06" },
];

const MARQUEE_ITEMS = [
  "Obstrata", "Ledgera", "Vaulta",
  "The Family Caregiver", "Independent Music", "Cape Town", "Founder-Operated",
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <PageLayout>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="floating-orb w-[700px] h-[700px] -top-60 -left-60 opacity-[0.09]"
          style={{ background: "radial-gradient(circle, #C9A961, transparent 70%)", animation: "pulse-glow 7s ease-in-out infinite" }} />
        <div className="floating-orb w-[600px] h-[600px] bottom-0 -right-60 opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #5C4410, transparent 70%)", animation: "pulse-glow 9s ease-in-out infinite 2s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-[2]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border mb-12"
              style={{ borderColor: "rgba(201,169,97,0.15)", background: "rgba(201,169,97,0.03)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] animate-pulse" />
              <span className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold">
                Cape Town · Independent · Founder-Operated
              </span>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-10"
            >
              <img src="/mjw-logo-correct.png" alt="MJW GROUP" className="h-28 md:h-36 object-contain drop-shadow-2xl" />
            </motion.div>

            <h1 className="font-serif mb-8 leading-none"
              style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)", fontWeight: 900, letterSpacing: "-0.04em" }}>
              <span className="block text-white/90">One Operator.</span>
              <span className="gold-text">One Business.</span>
              <span className="block text-white/90">Three Active Platforms.</span>
            </h1>

            <p className="text-white/40 max-w-xl mx-auto mb-14 leading-loose text-sm md:text-base tracking-wide">
              MJW GROUP builds software platforms, intelligence dashboards, mobile applications,
              published work, and independent music from Cape Town, South Africa. The core platform
              ecosystem is built around three operational products: Obstrata, Ledgera, and Vaulta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollTo("ecosystem")} className="btn-gold-mjw">
                Explore Platform Suite <ArrowRight size={14} />
              </button>
              <button onClick={() => scrollTo("founder")} className="btn-secondary">
                Meet the Founder
              </button>
            </div>

            <div className="mt-28 grid grid-cols-3 gap-8 max-w-sm mx-auto">
              <div className="text-center">
                <div className="gold-text font-serif font-black" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.04em" }}>3</div>
                <div className="text-[8.5px] text-white/25 tracking-[0.35em] uppercase mt-2">Platforms</div>
              </div>
              <div className="text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="gold-text font-serif font-black" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.04em" }}>1+</div>
                <div className="text-[8.5px] text-white/25 tracking-[0.35em] uppercase mt-2">Published Works</div>
              </div>
              <div className="text-center">
                <div className="gold-text font-serif font-black" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.04em" }}>∞</div>
                <div className="text-[8.5px] text-white/25 tracking-[0.35em] uppercase mt-2">Music</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────── */}
      <div className="overflow-hidden py-5" style={{ borderTop: "1px solid rgba(201,169,97,0.05)", borderBottom: "1px solid rgba(201,169,97,0.05)" }}>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-14 px-6 whitespace-nowrap text-[9.5px] font-semibold tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.1)" }}>
              {item}
              {i < MARQUEE_ITEMS.length * 2 - 1 && (
                <span style={{ color: "rgba(201,169,97,0.25)" }}>◆</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── INTELLIGENCE DASHBOARDS ──────────────── */}
      <section id="ecosystem" className="relative py-32 px-6" style={{
        backgroundImage: "linear-gradient(rgba(201,169,97,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold mb-5">— Platform Ecosystem</p>
            <div className="section-divider-gold mx-auto mb-8" />
            <h2 className="font-serif font-black mt-5 mb-6 leading-none" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
              Three Platforms.<br /><span className="gold-text">One Operating System.</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto text-sm leading-relaxed">
              A focused ecosystem of founder-operated platforms built from real operational pressure: property operations, financial administration, and family health coordination.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                logo: "/Obstrata_PWA_Web_Transparent_512x512.png",
                label: "Property Operations Platform",
                name: "Obstrata",
                tagline: "Property Manager Platform",
                desc: "Property management and portfolio operations platform for asset oversight, tenant management, arrears visibility, lease risk, site reporting, compliance tracking, action items, and operational accountability.",
                solves: "Converts fragmented property operations into one structured operational command environment.",
                url: "https://www.obstrata.co.za",
              },
              {
                logo: "/Ledgera_PWA_Web_Transparent_512x512.png",
                label: "Financial Operations Platform",
                name: "Ledgera",
                tagline: "Financial Operations for South African Businesses",
                desc: "Financial operations platform for South African owner-managed businesses, supporting VAT calculations, tax structuring, expense tracking, financial administration, and audit-ready reporting.",
                solves: "Replaces spreadsheet-heavy financial admin with structured, traceable operational reporting.",
                url: "https://www.ledgera.co.za",
              },
              {
                logo: "/Vaulta_PWA_Web_Transparent_512x512.png",
                label: "Family Health Platform",
                name: "Vaulta",
                tagline: "Family Health Coordination",
                desc: "Secure platform for managing family medical records, emergency contacts, care plans, health documents, medication information, and real family health administration.",
                solves: "Keeps critical family health information structured, accessible, and ready when needed.",
                url: "https://www.vaulta.co.za",
              },
            ].map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div className="gold-card p-8 rounded-2xl h-full flex flex-col" style={{ transition: "transform 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                    <div className="flex items-center justify-between mb-8">
                      <img src={p.logo} alt={p.name} className="w-14 h-14 rounded-xl object-contain"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,97,0.18)", padding: "6px" }} />
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                        style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)" }}>
                        <span className="status-dot-active" />
                        <span className="text-[8.5px] text-[#10B981] tracking-[0.22em] uppercase font-semibold">Active</span>
                      </span>
                    </div>
                    <p className="text-[9px] text-[#C9A961] tracking-[0.35em] uppercase font-semibold mb-1">{p.label}</p>
                    <h3 className="font-serif font-bold text-xl mb-1">{p.name}</h3>
                    <p className="text-white/40 text-xs mb-3">{p.tagline}</p>
                    <p className="text-white/35 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
                    <div className="text-xs text-white/25 leading-relaxed pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      <span className="text-[#C9A961] font-semibold">Solves: </span>{p.solves}
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Request Access <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MOBILE APPS ──────────────────────────── */}
      <section id="apps" className="relative py-32 px-6 overflow-hidden bg-background">
        <div className="floating-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #C9A961, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold mb-5">— Mobile Applications</p>
            <div className="section-divider-gold mx-auto mb-8" />
            <h2 className="font-serif font-black mt-5 mb-6 leading-none" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
              Built for <span className="gold-text">Daily Use.</span><br />Not Concepts.
            </h2>
            <p className="text-white/35 max-w-xl mx-auto text-sm leading-relaxed">
              Three mobile tools developed from direct operational challenges. Each solving a specific, real problem.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { logo: "/Obstrata_PWA_Web_Transparent_512x512.png", name: "Obstrata", sub: "Property Field Operations", url: "https://www.obstrata.co.za", desc: "Site reporting, tenant issues, compliance logs, action tracking, and operational follow-up. Built for daily property field operations." },
              { logo: "/Ledgera_PWA_Web_Transparent_512x512.png", name: "Ledgera", sub: "Financial Operations", url: "https://www.ledgera.co.za", desc: "VAT, expenses, tax structuring, financial records, and audit-ready reporting for South African owner-managed businesses." },
              { logo: "/Vaulta_PWA_Web_Transparent_512x512.png", name: "Vaulta", sub: "Family Health Coordination", url: "https://www.vaulta.co.za", desc: "Medical records, emergency contacts, care plans, and health documentation — structured, secure, and ready when needed." },
            ].map((a, i) => (
              <AnimatedSection key={a.name} delay={i * 0.1}>
                <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div className="gold-card p-8 rounded-2xl h-full flex flex-col" style={{ transition: "transform 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                    <div className="w-20 h-20 rounded-2xl mb-8 overflow-hidden flex items-center justify-center"
                      style={{ border: "1px solid rgba(201,169,97,0.2)", background: "#0f0f12", padding: "8px" }}>
                      <img src={a.logo} alt={a.name} className="w-full h-full object-contain" />
                    </div>
                    <p className="text-[9px] text-[#C9A961] tracking-[0.35em] uppercase font-semibold mb-3">Mobile App</p>
                    <h3 className="font-serif font-bold mb-2" style={{ fontSize: "1.75rem" }}>{a.name}</h3>
                    <p className="text-white/55 text-sm font-medium mb-4">{a.sub}</p>
                    <p className="text-white/35 text-sm leading-relaxed flex-1">{a.desc}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MUSIC ────────────────────────────────── */}
      <section id="music" className="relative py-32 px-6" style={{
        backgroundImage: "linear-gradient(rgba(201,169,97,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold mb-5">— Music</p>
            <div className="section-divider-gold mx-auto mb-8" />
            <h2 className="font-serif font-black mt-5 mb-6 leading-none" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
              Independent Music<br />from <span className="gold-text">Cape Town</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto text-sm leading-relaxed">
              Atmospheric, intentional, and distributed globally across all major platforms.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {TRACKS.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.07}>
                <a
                  href={`https://www.youtube.com/watch?v=${t.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="music-card-mjw rounded-2xl"
                >
                  <div className="relative" style={{ background: "#0a0a0c" }}>
                    <img src={`https://img.youtube.com/vi/${t.id}/hqdefault.jpg`} alt={`MJW Track ${t.n}`} className="thumb-img" />
                    <div className="music-thumb-overlay">
                      <div className="play-btn-gold">
                        <svg width="18" height="18" fill="black" viewBox="0 0 24 24" style={{ marginLeft: 2 }}><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[9px] text-[#C9A961] tracking-[0.35em] uppercase font-semibold mb-1.5">Track {t.n}</p>
                    <h3 className="font-serif font-bold text-base text-white/90">MJW · YouTube</h3>
                    <p className="text-white/30 text-xs mt-1">@thisismjw · 2026</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <p className="text-[8.5px] text-white/25 tracking-[0.4em] uppercase font-semibold mb-6">Stream Everywhere</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                { label: "Spotify", url: "https://open.spotify.com/artist/07A743kq9Ro5mQtbxYFMAl" },
                { label: "Apple Music", url: "https://music.apple.com/us/artist/mjw-audio/1896709966" },
                { label: "Amazon Music", url: "https://music.amazon.com/artists/B0H22KYT6G/mjw-audio" },
                { label: "YouTube @thisismjw", url: "https://www.youtube.com/@thisismjw" },
                { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61574247269772" },
                { label: "TikTok @mjw.audio3", url: "https://www.tiktok.com/@mjw.audio3" },
              ].map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-pill-gold">{s.label}</a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOOK ─────────────────────────────────── */}
      <section id="books" className="relative py-32 px-6 overflow-hidden bg-background">
        <div className="floating-orb w-[500px] h-[500px] -top-40 -right-40 opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #C9A961, transparent 70%)" }} />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection className="flex justify-center lg:justify-end order-2 lg:order-1">
              <a href="https://a.co/d/0ftxdKNU" target="_blank" rel="noopener noreferrer">
                <img src="/book-cover.webp" alt="The Family Caregiver"
                  className="rounded-2xl w-72 md:w-80 transition-all duration-700 hover:-translate-y-3"
                  style={{ border: "1px solid rgba(201,169,97,0.15)", filter: "drop-shadow(0 30px 80px rgba(201,169,97,0.12))" }} />
              </a>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2" delay={0.15}>
              <p className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold mb-5">— Published Work</p>
              <div className="section-divider-gold mb-8" />
              <h2 className="font-serif font-black mt-5 mb-3 leading-tight" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)" }}>
                The Family<br /><span className="gold-text">Caregiver</span>
              </h2>
              <p className="text-white/55 text-base mb-2 font-semibold">A Practical Operating System for Families in Crisis</p>
              <div className="w-8 h-px my-6" style={{ background: "rgba(201,169,97,0.3)" }} />
              <p className="text-white/38 text-sm leading-relaxed mb-8 max-w-md">
                A structured practical guide for families managing complex care responsibilities —
                built around the same system-thinking principles that underpin the MJW platform model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://a.co/d/0ftxdKNU" target="_blank" rel="noopener noreferrer" className="btn-gold-mjw">
                  Read on Amazon <ArrowUpRight size={14} />
                </a>
                <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs text-white/40"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]/60 animate-pulse" />
                  Second book — In Progress
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────── */}
      <section id="founder" className="relative py-32 px-6" style={{
        backgroundImage: "linear-gradient(rgba(201,169,97,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }}>
        <div className="max-w-7xl mx-auto">
          {/* Photo + Bio row */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(201,169,97,0.15)" }}>
                <img
                  src="/founder-photo-friendlier.png"
                  alt="Mornay Walters — Founder MJW GROUP"
                  className="w-full object-cover object-top"
                  style={{ height: "520px", filter: "grayscale(15%) contrast(1.05)" }}
                  onError={(e) => { (e.target as HTMLImageElement).src = "/mjw-logo-correct.png"; }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold mb-5">— Founder</p>
              <div className="section-divider-gold mb-8" />
              <h2 className="font-serif font-black mt-5 mb-4" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)" }}>
                Mornay <span className="gold-text">Walters</span>
              </h2>
              <p className="text-white/40 text-[10px] tracking-[0.28em] uppercase mb-8">
                Founder & sole operator · MJW GROUP · Cape Town, South Africa
              </p>
              <p className="text-white/42 leading-relaxed mb-5 text-sm">
                MJW GROUP was not created from a business plan or a startup accelerator. It grew from
                years of working inside property operations, financial administration, and family
                coordination — and repeatedly hitting the same problem: the available tools were either
                too generic, too complex, or simply did not exist.
              </p>
              <p className="text-white/42 leading-relaxed mb-5 text-sm">
                With a professional background in commercial property management and direct experience
                across tenant operations, financial reporting, maintenance workflows, compliance, and
                family administration, each MJW platform is built from practical operational friction.
              </p>
              <p className="text-white/42 leading-relaxed mb-10 text-sm">
                The ecosystem now focuses on three core platforms: Obstrata for property operations,
                Ledgera for financial operations, and Vaulta for family health administration.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Independent platform ecosystem",
                  "Founder-operated, privately funded",
                  "Commercially intended",
                  "Built from real operational friction",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ border: "1px solid rgba(201,169,97,0.08)", background: "rgba(255,255,255,0.012)" }}>
                    <span className="text-[#C9A961] text-sm">◆</span>
                    <span className="text-xs text-white/50 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* How We Build — full width below */}
          <AnimatedSection delay={0.25}>
            <div className="rounded-3xl p-10 md:p-14"
              style={{ background: "linear-gradient(135deg,#18181c,#09090c)", border: "1px solid rgba(201,169,97,0.1)" }}>
              <div className="text-center mb-12">
                <p className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold mb-5">— How We Build</p>
                <div className="section-divider-gold mx-auto mb-6" />
                <p className="text-[9.5px] text-white/25 tracking-[0.28em] uppercase">No venture capital. No growth-at-all-costs pressure.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  { sym: "◈", title: "Identify Real Friction", body: "Every platform starts with a lived, real operational problem — not a market opportunity or pitch deck concept." },
                  { sym: "◆", title: "Design Structured Solutions", body: "Clear data models, consistent workflows, reliable outputs — built for daily operational use." },
                  { sym: "✦", title: "Independent by Design", body: "Every decision serves the person using the software. No compromise. No features built for optics." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-[#C9A961]"
                      style={{ background: "rgba(201,169,97,0.08)", border: "1px solid rgba(201,169,97,0.2)" }}>
                      {item.sym}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold mb-2 text-sm">{item.title}</h4>
                      <p className="text-white/35 text-xs leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP ───────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-background">
        <div className="relative max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold mb-5">— Newsletter</p>
            <div className="section-divider-gold mx-auto mb-8" />
            <h2 className="font-serif font-black mt-5 mb-4" style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
              Join the <span className="gold-text">MJW</span> Newsletter
            </h2>
            <p className="text-white/35 text-sm leading-relaxed mb-2">
              Platform progress, published work, music releases, and operating notes from the MJW ecosystem.
            </p>
            <Link to="/newsletter" className="inline-flex items-center gap-1.5 text-[#C9A961] text-xs font-semibold mt-2 hover:gap-3 transition-all">
              View past editions <ArrowRight size={12} />
            </Link>
          </AnimatedSection>

          <form
            className="p-8 rounded-3xl"
            style={{ border: "1px solid rgba(201,169,97,0.08)", background: "linear-gradient(135deg,rgba(255,255,255,0.018),transparent)" }}
            onSubmit={(e) => {
              e.preventDefault();
              const success = e.currentTarget.querySelector("#subSuccess") as HTMLElement;
              if (success) { success.style.display = "block"; setTimeout(() => { success.style.display = "none"; }, 5000); }
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input type="text" className="w-full px-4 py-3.5 rounded-xl text-sm text-white bg-transparent placeholder-white/25"
                style={{ border: "1px solid rgba(201,169,97,0.1)" }} placeholder="Your name (optional)" />
              <input type="email" required className="w-full px-4 py-3.5 rounded-xl text-sm text-white bg-transparent placeholder-white/25"
                style={{ border: "1px solid rgba(201,169,97,0.1)" }} placeholder="Email address" />
            </div>
            <label className="flex items-start gap-3 mb-6 cursor-pointer">
              <input type="checkbox" required className="mt-1 accent-[#C9A961]" />
              <span className="text-xs text-white/35 leading-relaxed">I consent to receiving the MJW Newsletter and can unsubscribe at any time.</span>
            </label>
            <button type="submit" className="btn-gold-mjw w-full justify-center py-3.5 rounded-xl">
              Subscribe to MJW
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p id="subSuccess" className="text-center text-[#C9A961] text-xs mt-4 tracking-wider" style={{ display: "none" }}>
              ✓ Subscribed. No spam — MJW GROUP updates only.
            </p>
            <p className="text-center text-[8.5px] text-white/18 mt-4 tracking-[0.28em] uppercase">No spam. MJW GROUP updates only.</p>
          </form>
        </div>
      </section>

    </PageLayout>
  );
};

export default Index;
