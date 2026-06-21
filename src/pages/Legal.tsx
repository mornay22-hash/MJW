import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, FileText, Building2, Heart, Calculator, Building } from "lucide-react";

const Legal = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(215 45% 8%), hsl(210 50% 12%))' }}>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Governance</p>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Legal, Privacy & Data Governance</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              A unified overview of how MJW GROUP approaches data handling, privacy, and legal responsibility across all platforms.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Shield size={24} className="text-teal" />
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>MJW GROUP designs and operates digital platforms that serve individuals and organisations across multiple sectors.</p>
              <p>Data handling across all MJW GROUP platforms is designed to align with the Protection of Personal Information Act (POPIA). Users remain the owners of their data at all times.</p>
              <p>Each platform maintains its own privacy, consent, and data-governance framework. No cross-platform data sharing occurs unless explicitly stated.</p>
              <p>MJW GROUP collects only the minimum information necessary to operate each platform.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Terms of Service */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <FileText size={24} className="text-teal" />
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">Terms of Service</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>By accessing any MJW GROUP platform, you agree to be bound by these terms.</p>
              <p>MJW GROUP acts as the platform operator for all products within its ecosystem.</p>
              <p>MJW GROUP reserves the right to suspend or revoke access to any platform account that violates terms of use.</p>
              <p>All platforms are provided "as is" without warranties of any kind.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Data Protection Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Building2 size={24} className="text-teal" />
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">Data Protection Statement</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>Users retain ownership of their data at all times.</p>
              <p>Role-based access architecture restricts permissions. Key structural events are logged for traceability.</p>
              <p>System architecture is designed in alignment with POPIA principles.</p>
              <p>Users may export structured data and may request data removal in accordance with applicable regulations.</p>
              <p>Data is hosted on secure cloud infrastructure with encryption at rest and in transit.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Disclaimers */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">Platform Disclaimers</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {[
              { icon: Heart, name: "Vaulta — Medical Disclaimer", text: "Vaulta is a personal health information management platform and is not a healthcare provider. It does not offer medical advice, diagnosis, or treatment." },
              { icon: Calculator, name: "Ledgera — Tax Disclaimer", text: "Ledgera is a financial record-keeping and tracking tool and does not provide tax, accounting, or financial advice." },
              { icon: Building, name: "Obstrata — Investment Disclaimer", text: "Obstrata provides operational property tracking tools and does not constitute investment advice." },
            ].map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <d.icon size={20} className="text-teal" />
                    <h3 className="font-serif text-xl text-foreground">{d.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Entity & Contact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <div className="mb-8 space-y-1">
              <p className="text-foreground font-serif text-lg">MJW Business Solutions (Pty) Ltd</p>
              <p className="text-muted-foreground text-sm">Reg: 2020/924581/07</p>
              <p className="text-muted-foreground text-sm">Trading as <span className="text-foreground font-medium tracking-[0.15em]">MJW GROUP</span></p>
            </div>
            <p className="text-muted-foreground mb-4">
              For data governance enquiries, contact us at{" "}
              <a href="mailto:privacy@mjwgroup.co.za" className="text-teal underline underline-offset-2">privacy@mjwgroup.co.za</a>
            </p>
            <p className="text-muted-foreground text-sm">Jurisdiction: South Africa</p>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Legal;
