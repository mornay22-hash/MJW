import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.subject) errs.subject = "Please select an enquiry type.";
    if (!form.message.trim()) errs.message = "Message is required.";
    else if (form.message.trim().length < 10) errs.message = "Please provide a bit more detail.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast({ title: "Message Sent", description: "Thank you for reaching out. Your enquiry will be directed to the appropriate team." });
  };

  const handleReset = () => {
    setForm({ name: "", company: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <PageLayout>
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="floating-orb w-[400px] h-[400px] -top-20 -right-20 opacity-[0.05]" style={{ background: 'radial-gradient(circle, hsl(182 100% 40%), transparent 70%)' }} />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4" style={{ background: 'linear-gradient(135deg, hsl(43 60% 70%) 0%, hsl(43 30% 85%) 30%, hsl(43 70% 55%) 60%, hsl(43 40% 75%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Contact</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Reach out about platform access, partnerships, or general enquiries. All messages are handled directly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <AnimatedSection className="lg:col-span-3">
              <div className="glass-card p-6 md:p-8 gradient-border">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-teal mx-auto mb-4" />
                    <h3 className="font-serif text-xl mb-3">Message Sent</h3>
                    <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Your enquiry will be reviewed and directed to the appropriate team. You can expect a response within 2 business days.
                    </p>
                    <Button onClick={handleReset} variant="outline" className="rounded-full">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-xl mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Name <span className="text-destructive">*</span></label>
                          <Input value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }} placeholder="Your name" className="bg-secondary border-border" />
                          {errors.name && <p className="text-destructive text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                          <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your organisation (optional)" className="bg-secondary border-border" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email <span className="text-destructive">*</span></label>
                        <Input type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }} placeholder="you@company.com" className="bg-secondary border-border" />
                        {errors.email && <p className="text-destructive text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Enquiry Type <span className="text-destructive">*</span></label>
                        <select value={form.subject} onChange={(e) => { setForm({ ...form, subject: e.target.value }); setErrors({ ...errors, subject: "" }); }}
                          className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                          <option value="">Select enquiry type</option>
                          <option value="general">General Enquiry</option>
                          <option value="product">Product Enquiry</option>
                          <option value="access">Platform Access</option>
                          <option value="partnership">Partnership / Collaboration</option>
                        </select>
                        {errors.subject && <p className="text-destructive text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.subject}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Message <span className="text-destructive">*</span></label>
                        <Textarea value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                          placeholder="How can we help?" className="min-h-[130px] bg-secondary border-border" maxLength={2000} />
                        {errors.message && <p className="text-destructive text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                        <p className="text-muted-foreground/50 text-xs mt-1 text-right">{form.message.length}/2000</p>
                      </div>
                      <div>
                        <Button type="submit" className="btn-primary gap-2">
                          <Send size={16} /> Send Message
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:col-span-2">
              <div className="glass-card p-6 md:p-8 gradient-border h-full">
                <h3 className="font-serif text-xl mb-6">Contact Information</h3>
                <div className="space-y-5 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsl(182 100% 40% / 0.1)' }}>
                      <Phone size={14} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Telephone</p>
                      <a href="tel:+27211804244" className="text-sm text-foreground hover:text-teal transition-colors font-medium">021 180 4244</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsl(182 100% 40% / 0.1)' }}>
                      <Mail size={14} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                      <a href="mailto:info@mjwgroup.co.za" className="text-sm text-foreground hover:text-teal transition-colors font-medium">info@mjwgroup.co.za</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-5 pt-6 border-t border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsl(182 100% 40% / 0.1)' }}>
                      <MapPin size={14} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Address</p>
                      <p className="text-sm text-foreground font-medium">Cape Town, South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
