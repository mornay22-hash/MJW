import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

interface Platform {
  logo: string;
  name: string;
  label: string;
  category: string;
  description: string;
  solves: string;
  url: string;
}

const platforms: Platform[] = [
  {
    logo: "/Obstrata_PWA_Web_Transparent_512x512.png",
    name: "Obstrata",
    label: "Property Operations Platform",
    category: "Property Manager Platform",
    description: "Obstrata is a property management and portfolio operations platform built for asset oversight, tenant management, arrears visibility, lease risk, site reporting, compliance tracking, action items, and operational accountability.",
    solves: "Converts fragmented property operations into one structured operational command environment.",
    url: "https://www.obstrata.co.za",
  },
  {
    logo: "/Ledgera_PWA_Web_Transparent_512x512.png",
    name: "Ledgera",
    label: "Financial Operations Platform",
    category: "Financial Operations for South African Businesses",
    description: "Ledgera is a financial operations platform for South African owner-managed businesses, supporting VAT calculations, tax structuring, expense tracking, financial administration, and audit-ready reporting.",
    solves: "Replaces spreadsheet-heavy financial admin with structured, traceable operational reporting.",
    url: "https://www.ledgera.co.za",
  },
  {
    logo: "/Vaulta_PWA_Web_Transparent_512x512.png",
    name: "Vaulta",
    label: "Family Health Platform",
    category: "Family Health Coordination",
    description: "Vaulta is a secure platform for managing family medical records, emergency contacts, care plans, health documents, medication information, and real family health administration.",
    solves: "Keeps critical family health information structured, accessible, and ready when needed.",
    url: "https://www.vaulta.co.za",
  },
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
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div className="glass-card p-6 card-hover min-h-[260px] flex flex-col" style={{ borderRadius: '16px' }}>
                    <div className="flex items-center gap-4 mb-4">
                      <img src={p.logo} alt={p.name} className="h-12 w-12 object-contain shrink-0 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,97,0.15)", padding: "4px" }} />
                      <div>
                        <p className="text-[9px] text-accent tracking-[0.25em] uppercase font-semibold mb-0.5">{p.label}</p>
                        <h2 className="text-xl font-serif">{p.name}</h2>
                        <p className="text-accent text-xs font-medium mt-0.5">{p.category}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                    <div className="text-xs text-white/25 leading-relaxed mb-5 pl-3" style={{ borderLeft: "1px solid rgba(201,169,97,0.2)" }}>
                      <span className="text-accent font-semibold">Solves: </span>{p.solves}
                    </div>
                    <div className="mt-auto">
                      <span className="btn-secondary group/btn text-[11px] !py-2 !px-4 inline-flex items-center gap-1 whitespace-nowrap">
                        Open Platform <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Platforms;
