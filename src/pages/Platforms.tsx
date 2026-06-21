import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import vaultaLogo from "@/assets/vaulta-logo.png";
import obstrataLogo from "@/assets/obstrata-logo.png";
import ledgeraLogo from "@/assets/ledgera-logo.png";

import sitemarkLogo from "@/assets/sitemark-logo.jpg";
import budgetaLogo from "@/assets/budgeta-logo.jpg";
import vectraLogo from "@/assets/vectra-logo.jpg";
import { ArrowRight } from "lucide-react";

interface Platform {
  logo: string;
  name: string;
  category: string;
  description: string;
}

const platforms: Platform[] = [
  { logo: vaultaLogo, name: "Vaulta", category: "Family Health Coordination", description: "Secure family coordination platform for medical records, emergency access, and structured care management." },
  { logo: budgetaLogo, name: "Budgeta", category: "Personal Budget Intelligence", description: "Personal finance intelligence platform for budgeting, debt tracking, and real-time cashflow visibility." },
  { logo: vectraLogo, name: "Vectra", category: "Operational Control System", description: "Operational command system for directives, risk signals, and portfolio-level control." },
  { logo: sitemarkLogo, name: "Sitemarkа", category: "Property Field Inspection", description: "Site-level operational tracking and reporting system for real-world execution, inspections, and compliance logs." },
  { logo: obstrataLogo, name: "Obstrata", category: "Property Intelligence", description: "Property intelligence platform delivering structured insights across assets, tenants, and performance metrics." },
  { logo: ledgeraLogo, name: "Ledgera", category: "Financial Operations", description: "Financial operations platform for South African owner-managed businesses, including VAT, tax structuring, and audit-ready reporting." },
  
];

const Platforms = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="floating-orb w-[500px] h-[500px] -top-40 -right-20 opacity-[0.06]" style={{ background: 'radial-gradient(circle, hsl(182 100% 40%), transparent 70%)' }} />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-4">Our Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4" style={{ background: 'linear-gradient(135deg, hsl(43 60% 70%) 0%, hsl(43 30% 85%) 30%, hsl(43 70% 55%) 60%, hsl(43 40% 75%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Platforms</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Independent software platforms built from real operational challenges. Each solves a specific problem for a specific audience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.06}>
                <div className="glass-card p-6 card-hover min-h-[260px] flex flex-col" style={{ borderRadius: '16px' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={p.logo} alt={p.name} className="h-12 w-12 object-contain shrink-0 rounded-xl" />
                    <div>
                      <h2 className="text-xl font-serif">{p.name}</h2>
                      <p className="text-accent text-xs font-medium mt-0.5">{p.category}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
                  <div className="mt-auto">
                    <Link to="/contact" className="btn-secondary group/btn text-[11px] !py-2 !px-4 inline-flex items-center gap-1 whitespace-nowrap">
                      Enquire <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Platforms;
