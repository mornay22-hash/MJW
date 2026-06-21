import { ReactNode, useState, useEffect } from "react";
import PageLayout from "./PageLayout";
import AnimatedSection from "./AnimatedSection";
import { Shield, Mail, Phone, MapPin, Calendar, Building2 } from "lucide-react";

interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  sections: LegalSection[];
  icon?: ReactNode;
}

const LEGAL_DETAILS = {
  effectiveDate: "01 March 2026",
  lastUpdated: "01 March 2026",
  operator: "MJW Business Solutions t/a MJW Group",
  email: "Info@mjwgroup.co.za",
  telephone: "021 180 4244",
  address: "Cape Town, South Africa",
};

const LegalPageLayout = ({ title, subtitle, sections, icon }: LegalPageLayoutProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(215 45% 8%), hsl(210 50% 12%))" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Legal & Governance</p>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">{title}</h1>
            <p className="text-white/60 text-lg max-w-3xl leading-relaxed">{subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Details Block */}
      <section className="border-b" style={{ borderColor: "hsl(0 0% 100% / 0.06)" }}>
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Calendar size={16} className="text-teal mt-0.5 shrink-0" />
              <div>
                <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Effective Date</p>
                <p className="text-foreground">{LEGAL_DETAILS.effectiveDate}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={16} className="text-teal mt-0.5 shrink-0" />
              <div>
                <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Last Updated</p>
                <p className="text-foreground">{LEGAL_DETAILS.lastUpdated}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 size={16} className="text-teal mt-0.5 shrink-0" />
              <div>
                <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Operator</p>
                <p className="text-foreground">{LEGAL_DETAILS.operator}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-teal mt-0.5 shrink-0" />
              <div>
                <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${LEGAL_DETAILS.email}`} className="text-teal hover:underline">{LEGAL_DETAILS.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-teal mt-0.5 shrink-0" />
              <div>
                <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Telephone</p>
                <a href="tel:+27211804244" className="text-foreground hover:text-teal transition-colors">{LEGAL_DETAILS.telephone}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-teal mt-0.5 shrink-0" />
              <div>
                <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Address</p>
                <p className="text-foreground">{LEGAL_DETAILS.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content with TOC */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-12 max-w-6xl mx-auto">
            {/* Desktop TOC */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Contents</p>
                <nav className="flex flex-col gap-1">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`text-sm py-1.5 px-3 rounded-md transition-colors ${
                        activeSection === s.id
                          ? "text-teal bg-white/5 font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {i + 1}. {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div className="flex-1 max-w-3xl">
              {sections.map((s, i) => (
                <div key={s.id} id={s.id} className="mb-12 scroll-mt-24">
                  <AnimatedSection delay={i * 0.02}>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-teal font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="text-xl md:text-2xl font-serif text-foreground">{s.title}</h2>
                    </div>
                    <div className="text-muted-foreground text-sm leading-relaxed space-y-3 pl-8">
                      {s.content}
                    </div>
                  </AnimatedSection>
                  {i < sections.length - 1 && (
                    <div className="mt-12 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.06), transparent)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operator line */}
      <section className="py-8 border-t" style={{ borderColor: "hsl(0 0% 100% / 0.06)" }}>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-muted-foreground/50 text-xs">Operated by {LEGAL_DETAILS.operator}</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default LegalPageLayout;
