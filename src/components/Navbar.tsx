import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mjwLogo from "@/assets/mjw-logo-new.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/platforms", label: "Platforms" },
  { to: "/#music", label: "Music" },
  { to: "/#books", label: "Books" },
  { to: "/founder", label: "Founder" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path.includes("#")) return false;
    return location.pathname === path;
  };

  const handleHashNav = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (!to.includes("#")) return;
    e.preventDefault();
    const hash = to.split("#")[1];
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl"
      style={{ background: "hsl(222 47% 8% / 0.88)", borderBottom: "1px solid rgba(201,169,97,0.07)" }}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center group">
          <img src={mjwLogo} alt="MJW GROUP" className="h-14 object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to.includes("#") ? `#${link.to.split("#")[1]}` : link.to}
              onClick={(e) => {
                if (!link.to.includes("#")) {
                  e.preventDefault();
                  window.location.href = link.to;
                } else {
                  handleHashNav(e, link.to);
                }
              }}
              className="relative text-sm tracking-wide transition-colors duration-200 group py-1 cursor-pointer"
            >
              <span className={isActive(link.to)
                ? "font-medium"
                : "text-muted-foreground group-hover:text-foreground"
              }
                style={isActive(link.to) ? { color: "#C9A961" } : {}}>
                {link.label}
              </span>
              {isActive(link.to) && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: "#C9A961" }} />
              )}
            </a>
          ))}
          <Link
            to="/contact"
            className="btn-gold-mjw text-xs px-5 py-2.5"
            style={{ fontSize: "0.72rem", borderRadius: "2rem" }}
          >
            Enter Platform
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden backdrop-blur-2xl" style={{ background: "hsl(222 47% 8% / 0.98)", borderTop: "1px solid rgba(201,169,97,0.07)" }}>
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to.includes("#") ? `#${link.to.split("#")[1]}` : link.to}
                onClick={(e) => {
                  if (!link.to.includes("#")) {
                    e.preventDefault();
                    setOpen(false);
                    window.location.href = link.to;
                  } else {
                    handleHashNav(e, link.to);
                  }
                }}
                className={`text-sm tracking-wide py-3 px-4 rounded-lg transition-colors cursor-pointer ${
                  isActive(link.to) ? "font-medium bg-white/5" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                style={isActive(link.to) ? { color: "#C9A961" } : {}}
              >
                {link.label}
              </a>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}
              className="btn-gold-mjw mt-3 justify-center text-xs">
              Enter Platform
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
