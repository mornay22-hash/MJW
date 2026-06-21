import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import founderPhoto from "@/assets/founder-photo.jpeg";
import { ArrowRight, Quote } from "lucide-react";

const Founder = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="floating-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" style={{ background: 'radial-gradient(circle, hsl(182 100% 40%), transparent 70%)' }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <AnimatedSection className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-[-4px] rounded-full" style={{ background: 'conic-gradient(from 0deg, hsl(182 100% 40% / 0.5), transparent 40%, hsl(210 70% 50% / 0.3), transparent 80%, hsl(182 100% 40% / 0.5))', animation: 'spin-slow 10s linear infinite', filter: 'blur(4px)' }} />
                <img src={founderPhoto} alt="Mornay Walters" className="h-[260px] w-[260px] md:h-[320px] md:w-[320px] rounded-full object-cover relative z-10 border-2 border-border" />
                <div className="absolute inset-0 rounded-full z-0" style={{ boxShadow: '0 30px 80px -20px hsl(182 100% 40% / 0.2)' }} />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">Founder</p>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif mb-4 text-gradient-shimmer">Mornay Walters</h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-2">
                Founder and sole operator of MJW GROUP. Building independent software platforms from Cape Town, South Africa.
              </p>
              <p className="text-muted-foreground/70 text-sm leading-relaxed">
                All MJW GROUP development takes place independently, outside of professional commitments in the property industry.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Operating Background */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">Background</p>
              <h2 className="text-2xl md:text-3xl font-serif mb-8">Why These Platforms Exist</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                <p>
                  MJW GROUP was not created from a business plan or a startup accelerator. It grew from years of working inside property operations, financial administration, and family coordination — and repeatedly hitting the same problem: the tools available were either too generic, too complex, or simply did not exist.
                </p>
                <p>
                  With a professional background in commercial property management, Mornay Walters has direct experience managing operational complexity across tenants, financial reporting, maintenance workflows, and compliance requirements. That operating context shaped every platform in the ecosystem.
                </p>
                <p>
                  The same principle applies outside of work. Managing family healthcare, personal finances, and household administration revealed the same structural gaps — fragmented information, manual processes, and no single source of truth.
                </p>
                <p>
                  MJW GROUP exists to close those gaps. Each platform is built from direct experience with the problem it solves, not from market research or abstract ideation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">Philosophy</p>
              <h2 className="text-2xl md:text-3xl font-serif mb-8">How We Build</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <div className="glass-card p-8 md:p-10 gradient-border mb-8">
                <div className="flex gap-4 items-start">
                  <Quote size={24} className="text-accent shrink-0 mt-1" />
                  <p className="text-foreground/90 text-lg md:text-xl font-serif leading-relaxed italic">
                    Software should help people operate better — not just look at more data.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                <p>
                  The approach is straightforward: identify real operational friction, design structured solutions, and build platforms that people can rely on every day. No venture capital. No growth-at-all-costs pressure. No features built for pitch decks.
                </p>
                <p>
                  Every platform is independently funded and independently developed. This means the development timeline is determined by quality and real-world testing, not investor expectations. Platforms ship when they are ready, not when a deadline demands it.
                </p>
                <p>
                  This independence is a deliberate choice. It ensures every design decision serves the person using the software, not the person funding it.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground/70 text-sm mb-5">Based in Cape Town, South Africa.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/platforms" className="btn-primary group">
                Explore Platforms <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Founder;
