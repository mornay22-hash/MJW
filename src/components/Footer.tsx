import { Link, useNavigate } from "react-router-dom";

const SOCIAL = [
  { label: "YouTube", url: "https://www.youtube.com/@thisismjw" },
  { label: "Spotify", url: "https://open.spotify.com/artist/07A743kq9Ro5mQtbxYFMAl" },
  { label: "Apple Music", url: "https://music.apple.com/us/artist/mjw-audio/1896709966" },
  { label: "TikTok", url: "https://www.tiktok.com/@mjw.audio3" },
  { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61574247269772" },
  { label: "Amazon Music", url: "https://music.amazon.com/artists/B0H22KYT6G/mjw-audio" },
];

const Footer = () => {
  const navigate = useNavigate();

  const goToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    }
  };

  return (
    <footer className="bg-background">
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,97,0.35), rgba(201,169,97,0.15), transparent)" }} />

      {/* Social strip */}
      <div className="py-7 px-4" style={{ borderBottom: "1px solid rgba(201,169,97,0.06)" }}>
        <div className="container mx-auto flex flex-wrap justify-center gap-3">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-pill-gold">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/mjw-logo-correct.png" alt="MJW GROUP" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-4">
              Software platforms, intelligence dashboards, mobile applications, published books, and independent music.
              Built from Cape Town, South Africa.
            </p>
            <p className="text-[8.5px] text-white/20 tracking-[0.35em] uppercase">Cape Town · South Africa · Founder-Operated</p>
          </div>

          {/* Explore — all scroll to homepage sections */}
          <div>
            <h4 className="font-sans text-[8.5px] font-semibold tracking-[0.35em] uppercase mb-5" style={{ color: "#C9A961" }}>Explore</h4>
            <div className="flex flex-col gap-2.5">
              <button onClick={() => goToSection("ecosystem")}
                className="text-sm text-left text-muted-foreground hover:text-foreground transition-colors">
                Platforms
              </button>
              <button onClick={() => goToSection("music")}
                className="text-sm text-left text-muted-foreground hover:text-foreground transition-colors">
                Music
              </button>
              <button onClick={() => goToSection("books")}
                className="text-sm text-left text-muted-foreground hover:text-foreground transition-colors">
                Books
              </button>
              <button onClick={() => goToSection("founder")}
                className="text-sm text-left text-muted-foreground hover:text-foreground transition-colors">
                Founder
              </button>
              <Link to="/newsletter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Newsletter</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[8.5px] font-semibold tracking-[0.35em] uppercase mb-5" style={{ color: "#C9A961" }}>Contact</h4>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+27211804244" className="text-sm text-muted-foreground hover:text-foreground transition-colors">021 180 4244</a>
              <a href="mailto:info@mjwgroup.co.za" className="text-sm text-muted-foreground hover:text-foreground transition-colors">info@mjwgroup.co.za</a>
            </div>
            <div className="mt-6">
              <h4 className="font-sans text-[8.5px] font-semibold tracking-[0.35em] uppercase mb-3" style={{ color: "#C9A961" }}>Published Work</h4>
              <a href="https://a.co/d/0ftxdKNU" target="_blank" rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                The Family Caregiver — Amazon
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
            <p className="text-xs text-white/20">© {new Date().getFullYear()} MJW Group. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link to="/legal-notice" className="text-xs text-white/20 hover:text-white/40 transition-colors">Legal Notice</Link>
              <Link to="/terms-of-service" className="text-xs text-white/20 hover:text-white/40 transition-colors">Terms of Service</Link>
              <Link to="/data-privacy" className="text-xs text-white/20 hover:text-white/40 transition-colors">Data & Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
