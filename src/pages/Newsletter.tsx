import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const EDITIONS = [
  {
    num: "005",
    date: "June 2026",
    title: "Platform Suite Update — MJW Signal V2 Launch",
    preview: "The second major release of MJW Signal is live. Key additions: structured goal tracking, a redesigned weekly review module, and an integrated contact intelligence layer.",
    tags: ["Platform", "MJW Signal"],
  },
  {
    num: "004",
    date: "May 2026",
    title: "Music Update — New Tracks Released & Streaming Milestones",
    preview: "Six new tracks now live across Spotify, Apple Music, and YouTube. Distribution is fully independent. This edition covers the production process, creative direction, and what's coming next.",
    tags: ["Music", "MJW Audio"],
  },
  {
    num: "003",
    date: "April 2026",
    title: "The Family Caregiver — One Month Post-Launch",
    preview: "One month since the book launched on Amazon. This edition covers reader feedback, the story behind writing it, and how the same system-thinking applies to the rest of the MJW ecosystem.",
    tags: ["Books", "Published Work"],
  },
  {
    num: "002",
    date: "March 2026",
    title: "MJW Portfolio Signal — Property Intelligence Dashboard",
    preview: "An inside look at the Portfolio Signal dashboard: how it was built, what problem it solves, and the data architecture behind tenant tracking, arrears management, and lease risk visibility.",
    tags: ["Platform", "Portfolio Signal"],
  },
  {
    num: "001",
    date: "February 2026",
    title: "MJW GROUP — Why This Exists",
    preview: "The founding edition. What MJW GROUP is, why it was built, and what makes an independent operator-run business different from a startup. The operating philosophy behind every platform.",
    tags: ["Founder", "MJW GROUP"],
  },
];

const Newsletter = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="relative pt-36 pb-20 px-6" style={{
        backgroundImage: "linear-gradient(rgba(201,169,97,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border mb-10"
              style={{ borderColor: "rgba(201,169,97,0.15)", background: "rgba(201,169,97,0.03)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] animate-pulse" />
              <span className="text-[9.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold">
                MJW GROUP · Newsletter
              </span>
            </div>
            <h1 className="font-serif font-black mb-6 leading-none" style={{ fontSize: "clamp(2.5rem,7vw,6rem)" }}>
              The <span className="gold-text">MJW</span><br />Newsletter
            </h1>
            <p className="text-white/35 max-w-xl mx-auto text-sm leading-relaxed">
              Platform progress, published work, music releases, and operating notes from the MJW ecosystem.
              One founder. One business. Multiple active lanes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Subscribe form */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <form
            className="p-8 rounded-3xl"
            style={{ border: "1px solid rgba(201,169,97,0.1)", background: "linear-gradient(135deg,rgba(255,255,255,0.018),transparent)" }}
            onSubmit={(e) => {
              e.preventDefault();
              const success = e.currentTarget.querySelector("#nlSuccess") as HTMLElement;
              if (success) { success.style.display = "block"; setTimeout(() => { success.style.display = "none"; }, 5000); }
              (e.target as HTMLFormElement).reset();
            }}
          >
            <p className="text-[9px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold mb-5">Subscribe to future editions</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" required
                className="flex-1 px-4 py-3.5 rounded-xl text-sm text-white bg-transparent placeholder-white/25"
                style={{ border: "1px solid rgba(201,169,97,0.1)" }} placeholder="Your email address" />
              <button type="submit" className="btn-gold-mjw whitespace-nowrap">Subscribe</button>
            </div>
            <p id="nlSuccess" className="text-[#C9A961] text-xs mt-3 tracking-wider" style={{ display: "none" }}>
              ✓ You're subscribed. No spam — MJW updates only.
            </p>
            <p className="text-[8.5px] text-white/18 mt-3 tracking-[0.28em] uppercase">No spam. Unsubscribe at any time.</p>
          </form>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px" style={{ background: "rgba(201,169,97,0.08)" }} />
          <span className="text-[8.5px] text-white/20 tracking-[0.38em] uppercase font-semibold">Past Editions</span>
          <div className="flex-1 h-px" style={{ background: "rgba(201,169,97,0.08)" }} />
        </div>
      </div>

      {/* Past editions list */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-5">
          {EDITIONS.map((ed, i) => (
            <AnimatedSection key={ed.num} delay={i * 0.08}>
              <div className="gold-card p-8 rounded-2xl group cursor-default">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[8.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold">
                        Edition {ed.num}
                      </span>
                      <span className="text-[8.5px] text-white/20 tracking-[0.2em] uppercase">{ed.date}</span>
                      <div className="flex gap-2">
                        {ed.tags.map((tag) => (
                          <span key={tag} className="text-[7.5px] px-2.5 py-1 rounded-full tracking-widest uppercase font-semibold"
                            style={{ background: "rgba(201,169,97,0.06)", border: "1px solid rgba(201,169,97,0.12)", color: "rgba(201,169,97,0.7)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-lg mb-3 text-white/90 leading-tight">{ed.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed">{ed.preview}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-white/15 group-hover:text-[#C9A961] transition-colors flex-shrink-0 mt-1" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Newsletter;
