import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Platforms", hash: "ecosystem" },
  { label: "Music", hash: "music" },
  { label: "Books", hash: "books" },
  { label: "Newsletter", to: "/newsletter" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToHash = (hash: string) => {
    setOpen(false);
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate home then scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const handleClick = (item: typeof NAV_ITEMS[0]) => {
    setOpen(false);
    if (item.hash) {
      scrollToHash(item.hash);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl"
      style={{ background: "hsl(222 47% 8% / 0.88)", borderBottom: "1px solid rgba(201,169,97,0.07)" }}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img src="/mjw-logo-correct.png" alt="MJW GROUP" className="h-12 object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = !item.hash && location.pathname === item.to;
            return item.hash ? (
              <button
                key={item.label}
                onClick={() => scrollToHash(item.hash!)}
                className="relative text-sm tracking-wide transition-colors duration-200 group py-1 cursor-pointer text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                className="relative text-sm tracking-wide transition-colors duration-200 group py-1"
              >
                <span className={isActive ? "font-medium" : "text-muted-foreground group-hover:text-foreground"}
                  style={isActive ? { color: "#C9A961" } : {}}>
                  {item.label}
                </span>
                {isActive && <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: "#C9A961" }} />}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="btn-gold-mjw text-xs px-5 py-2.5"
            style={{ fontSize: "0.72rem", borderRadius: "2rem" }}
          >
            Request Access
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
            {NAV_ITEMS.map((item) =>
              item.hash ? (
                <button
                  key={item.label}
                  onClick={() => handleClick(item)}
                  className="text-sm tracking-wide py-3 px-4 rounded-lg transition-colors text-left text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  onClick={() => setOpen(false)}
                  className={`text-sm tracking-wide py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === item.to ? "font-medium bg-white/5" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                  style={location.pathname === item.to ? { color: "#C9A961" } : {}}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="btn-gold-mjw mt-3 justify-center text-xs"
            >
              Request Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
