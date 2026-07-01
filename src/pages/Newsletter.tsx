import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const EDITIONS = [
  {
    num: "006",
    date: "July 2026",
    title: "I Built a Custom Property Operations Dashboard Because Spreadsheets Were No Longer Enough",
    tags: ["Platform", "Obstrata"],
    preview: "Property management is not a filing problem — it is a visibility problem. Here is why I built Obstrata as a command centre for property operations, and what it changed.",
    full: `Property management is often described as tenant queries, maintenance follow-ups, site visits, lease renewals, arrears, and monthly reporting.

That description is accurate, but it is incomplete.

In reality, property management is a layered operating environment. A property manager is expected to know what is happening across buildings, tenants, facilities, compliance, arrears, leasing, contractors, documents, inspections, budgets, reporting deadlines, and risk items — often before an issue has been formally escalated.

The challenge is not usually a lack of effort. The challenge is fragmentation.

One issue sits in an email thread. Another sits in a spreadsheet. A maintenance item is buried in WhatsApp. A lease expiry is hidden in a schedule. A tenant concern is raised during a site visit but never converted into an action. A compliance matter is known, but not properly tracked to closure.

Over time, the information exists — but it does not exist in one operational view.

That is why I started building Obstrata. Not as another admin system. As a command centre for property operations.

**From Information Storage to Risk Visibility**

The first mistake I made was trying to organise property information the same way it already existed. Buildings in one place. Tenants in another. Arrears somewhere else. Compliance registers in separate folders.

That structure works when the goal is to store information. It does not work when the goal is to make decisions.

A property manager does not start the day by asking: "Which spreadsheet should I open?" The real questions are more direct: What needs attention today? Which tenant issue could escalate? Which arrears item requires action? Which compliance matter is overdue?

That shift changed the way I thought about the dashboard. I stopped designing around files. I started designing around operational pressure.

The home screen of Obstrata is not a filing cabinet. It is an exception view — showing what needs attention, what is overdue, what carries commercial exposure, and who owns the next action.

**One Operational View for Work That Normally Sits Across Ten Places**

The dashboard is built around the way a property manager actually works. It includes sections for buildings, tenants, arrears, leasing, vacancies, compliance, facilities, action items, site reports, security reports, documents, data loads, and management pack preparation.

Each section has value on its own. The real value comes from connecting them.

A tenant is not just a name on a lease schedule. A tenant may have arrears, open maintenance items, lease exposure, turnover concerns, compliance matters, documents, and site-specific notes. A building is not just a property. It is a live operating environment with income, risk, contractors, inspections, vacancies, municipal matters, and reporting deadlines.

Once those items are visible in one place, the portfolio becomes easier to control. Not because the work disappears. Because the work becomes visible.

**Built for Action, Not Decoration**

I did not want a dashboard full of attractive graphs that look impressive but do not help with actual decisions. For property operations, a dashboard must answer practical questions quickly.

Is this item overdue? Who owns it? What is the next action? What is the Rand exposure? Does this need escalation?

The dashboard uses clear status indicators, risk levels, due dates, ownership fields, notes, source references, and evidence links. The purpose is not to create more reporting. The purpose is to reduce the chance that something important gets missed.

**Site Visits Became Operational Control Tools**

Site visits are one of the most important parts of property management. They are also one of the easiest areas to under-document.

A walkthrough may identify lighting failures, signage issues, refuse concerns, landscaping problems, tenant shopfront matters, bathroom conditions, parking issues, or security risks. If those observations are not converted into structured actions, they depend too heavily on memory and follow-up.

The site visit section of Obstrata was designed to capture issues by building, category, severity, status, photo evidence, due date, and responsible party. That changes the function of a site visit. It becomes more than proof that someone was on site. It becomes an operational control tool.

**The Management Pack Should Not Be a Monthly Scramble**

The information needed for a management pack usually exists. The problem is that it is scattered. Minutes, fast facts, problem tenants, arrears, leasing updates, site reports, planned maintenance, compliance updates, vacancies, and open action items often sit in different formats and locations.

Obstrata is being shaped to reduce that friction. The idea is to allow information to build up during the month, so reporting becomes a controlled process rather than a last-minute chase.

That is where the dashboard becomes more than a personal productivity tool. It becomes a governance layer.

**The Most Useful Feature Is Knowing What Not to Chase**

In a busy property environment, everything can feel urgent. But not everything carries the same weight. A tenant complaint, a compliance gap, a lease expiry, an arrears matter, a contractor delay — these cannot all be treated as equal.

The dashboard helps separate noise from signal.

Some items need immediate action. Some need monitoring. Some need escalation. Some only need to be recorded. Some can safely wait.

Property management is not just about doing more. It is about directing attention to the areas where delay creates commercial, compliance, operational, or reputational exposure.

**The Direction Is Clear**

Obstrata is still evolving. There are more modules to refine, more imports to improve, more reporting layers to automate, and more operational logic to build into the system.

But the direction is clear.

The future of property management is not more spreadsheets, more inbox pressure, or more manual chasing. It is structured visibility. It is risk-led prioritisation. It is evidence-based follow-up. It is knowing what matters today, what is becoming a problem, and what can safely be ignored.

A dashboard that does not just store property information. A dashboard that helps run the portfolio.

No noise. Just operational signal.`,
  },
  {
    num: "005",
    date: "June 2026",
    title: "Platform Suite Update — MJW Signal V2 Launch",
    tags: ["Platform", "Obstrata"],
    preview: "The second major release of MJW Signal is live. Key additions: structured goal tracking, a redesigned weekly review module, and an integrated contact intelligence layer.",
    full: `MJW Signal V2 is the most significant update since the platform launched. Here's what changed and why.

**Goal Tracking**
The original version tracked tasks. V2 introduces goals as a separate, structured layer — goals have timelines, milestones, and a direct link to the weekly review. Every task now exists within the context of what it's working toward.

**Weekly Review Module**
The weekly review has been redesigned from the ground up. It's no longer a checklist — it's a structured 15-minute operating process. Covers: commitments vs. actuals, energy patterns, next-week priorities, and open loops. The output is a weekly summary stored in your Signal history.

**Contact Intelligence**
A new contacts module tracks every person you interact with: relationship type, last contact date, open commitments, and notes. Built for founders and operators who manage relationships without a team around them.

**What's next**
MJW Signal V3 will introduce automated pattern detection across tasks, goals, and reviews. Expected Q3 2026.`,
  },
  {
    num: "004",
    date: "May 2026",
    title: "Music Update — New Tracks Released & Streaming Milestones",
    tags: ["Music", "MJW Audio"],
    preview: "Six new tracks now live across Spotify, Apple Music, and YouTube. Distribution is fully independent. This edition covers the production process, creative direction, and what's coming next.",
    full: `Six tracks released in May 2026 across all major streaming platforms. All independently distributed through DistroKid.

**The Production Process**
Every track starts with a feeling, not a brief. The Cape Town environment — the light, the pace, the contrast between mountains and ocean — shapes the sound more than any reference playlist. Production happens at home, late at night, usually after the rest of the work is done for the day.

**The Creative Direction**
MJW Audio sits in the atmospheric electronic space. No vocals on most tracks. Designed for focus states, movement, and late-night work sessions. The intent is to make music that disappears into the background in the best possible way — present but not demanding.

**Distribution**
Fully independent. No label. No manager. Revenue comes directly from streaming royalties and playlist placements. Small but clean.

**Streaming Links**
Available on Spotify, Apple Music, Amazon Music, YouTube (@thisismjw), TikTok (@mjw.audio3), and Facebook.

**What's next**
An EP is planned for Q3 2026. Six to eight tracks, cohesive theme, released together.`,
  },
  {
    num: "003",
    date: "April 2026",
    title: "The Family Caregiver — One Month Post-Launch",
    tags: ["Books", "Published Work"],
    preview: "One month since the book launched on Amazon. This edition covers reader feedback, the story behind writing it, and how the same system-thinking applies to the rest of the MJW ecosystem.",
    full: `The Family Caregiver launched on Amazon in March 2026. One month in, here's what the data and feedback look like.

**Why the book exists**
I managed complex family health administration for several years. No existing resource gave me what I needed: a structured, practical operating system for families in crisis. Every guide I found was either emotional support material or clinical information. Nothing showed you how to actually run the logistics.

So I built the system myself. And then I wrote it down.

**What the book covers**
The book is structured around six operational areas: medical records management, care team coordination, financial administration, communication systems, legal and documentation, and personal sustainability for the caregiver. Each chapter ends with a practical framework and templates.

**Reader feedback**
The most common response: "I wish I had this three years ago." The second most common: "I'm sharing this with my siblings."

**The system connection**
The same thinking that built Vaulta (family health coordination) went into the book. The book is the manual. The app is the tool. They're designed to work together.

**Available on Amazon**
[The Family Caregiver on Amazon](https://a.co/d/0ftxdKNU)`,
  },
  {
    num: "002",
    date: "March 2026",
    title: "MJW Portfolio Signal — Property Intelligence Dashboard",
    tags: ["Platform", "Portfolio Signal"],
    preview: "An inside look at the Portfolio Signal dashboard: how it was built, what problem it solves, and the data architecture behind tenant tracking, arrears management, and lease risk visibility.",
    full: `MJW Portfolio Signal is a private property intelligence dashboard. This edition explains how it was built and why.

**The problem it solves**
Commercial property management generates an enormous amount of data: leases, tenants, maintenance schedules, arrears, inspections, compliance documents, insurance, valuations. None of the available tools consolidated this into a single, usable operational view. Most operators use a combination of spreadsheets, email folders, and accounting software. It works — until it doesn't.

**The architecture**
Portfolio Signal is built around four core data layers:
1. Asset Registry — every property, its details, valuation, and linked documents
2. Tenant Management — lease terms, payment history, contact records, arrears status
3. Operational Calendar — maintenance schedules, inspection dates, compliance deadlines
4. Risk Dashboard — lease expiry proximity, arrears flags, compliance gaps

**The design principle**
Every view in Portfolio Signal answers one of three questions: What's happening now? What's overdue? What's coming? Anything that doesn't answer one of those questions doesn't belong in the dashboard.

**Access**
Portfolio Signal is a private operational tool. Access available on request for property operators and portfolio managers.`,
  },
  {
    num: "001",
    date: "February 2026",
    title: "MJW GROUP — Why This Exists",
    tags: ["Founder", "MJW GROUP"],
    preview: "The founding edition. What MJW GROUP is, why it was built, and what makes an independent operator-run business different from a startup. The operating philosophy behind every platform.",
    full: `MJW GROUP is not a startup. It was never intended to be one.

**What it is**
MJW GROUP is a privately operated business built around one question: what tools do I need that don't exist yet? The answer, so far, has been: a lot of them.

The business operates across four lanes: software platforms and intelligence dashboards, mobile applications, published books, and independent music. Each lane is operationally independent but philosophically connected. The same thinking that builds a property dashboard builds a book. Clear structure. Real problem. Practical output.

**Why it was built**
After years of working inside commercial property management, family healthcare administration, and personal financial operations, the pattern was the same every time: the available tools were either too generic to be useful or too complex to be practical. So the tools got built from scratch.

**What makes it different**
No venture capital. No co-founders. No growth-at-all-costs pressure. Every decision is made by one person with full context. Every platform exists because the problem was real — not because a market analysis said there was an opportunity.

**The operating philosophy**
Three principles drive every build:
1. Identify real friction — the problem has to exist in the real world, not in a pitch deck
2. Design structured solutions — the output has to be usable daily, not just impressive in a demo
3. Independent by design — every decision serves the user, not the cap table

**What's coming**
More platforms. More music. A second book. And a newsletter to document all of it.

Welcome to Edition 001.`,
  },
];

const NewsletterEdition = ({ ed }: { ed: typeof EDITIONS[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="gold-card rounded-2xl overflow-hidden transition-all duration-300">
      <button
        className="w-full text-left p-8 group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[8.5px] text-[#C9A961] tracking-[0.38em] uppercase font-semibold">
                Edition {ed.num}
              </span>
              <span className="text-[8.5px] text-white/20 tracking-[0.2em] uppercase">{ed.date}</span>
              {ed.tags.map((tag) => (
                <span key={tag} className="text-[7.5px] px-2.5 py-1 rounded-full tracking-widest uppercase font-semibold"
                  style={{ background: "rgba(201,169,97,0.06)", border: "1px solid rgba(201,169,97,0.12)", color: "rgba(201,169,97,0.7)" }}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-serif font-bold text-lg mb-3 text-white/90 leading-tight">{ed.title}</h3>
            <p className="text-white/35 text-sm leading-relaxed">{ed.preview}</p>
          </div>
          <div className="flex-shrink-0 mt-1 text-white/20 group-hover:text-[#C9A961] transition-colors">
            {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </button>

      {open && (
        <div className="px-8 pb-8" style={{ borderTop: "1px solid rgba(201,169,97,0.08)" }}>
          <div className="pt-6">
            {ed.full.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h4 key={i} className="font-serif font-bold text-base mb-2 mt-5"
                    style={{ color: "#C9A961" }}>
                    {para.replace(/\*\*/g, "")}
                  </h4>
                );
              }
              if (para.startsWith("**")) {
                const parts = para.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={i} className="text-white/50 text-sm leading-relaxed mb-3">
                    {parts.map((part, j) => j % 2 === 1
                      ? <strong key={j} className="text-white/80 font-semibold">{part}</strong>
                      : part
                    )}
                  </p>
                );
              }
              if (para.startsWith("[") && para.includes("](")) {
                const match = para.match(/\[(.+?)\]\((.+?)\)/);
                if (match) {
                  return (
                    <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#C9A961] text-sm font-semibold mt-2 hover:underline">
                      {match[1]} <ArrowUpRight size={13} />
                    </a>
                  );
                }
              }
              if (para.match(/^\d+\./m) || para.startsWith("-")) {
                const lines = para.split("\n");
                return (
                  <ul key={i} className="space-y-1.5 mb-3 pl-4">
                    {lines.map((line, j) => (
                      <li key={j} className="text-white/45 text-sm leading-relaxed list-disc">{line.replace(/^\d+\.\s*/, "").replace(/^-\s*/, "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-white/45 text-sm leading-relaxed mb-3">{para}</p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

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
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px" style={{ background: "rgba(201,169,97,0.08)" }} />
          <span className="text-[8.5px] text-white/20 tracking-[0.38em] uppercase font-semibold">Past Editions — Click to Read</span>
          <div className="flex-1 h-px" style={{ background: "rgba(201,169,97,0.08)" }} />
        </div>
      </div>

      {/* Past editions — expandable */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-4">
          {EDITIONS.map((ed, i) => (
            <AnimatedSection key={ed.num} delay={i * 0.07}>
              <NewsletterEdition ed={ed} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Newsletter;
