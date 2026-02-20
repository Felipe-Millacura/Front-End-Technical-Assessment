import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "relative font-medium text-slate-700 hover:text-blue-600 transition";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/60"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl tracking-tight">Portfolio</h1>
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className={linkClass}>
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#about-me" className={linkClass}>
            About me
          </a>

          <a href="#aptitudes" className={linkClass}>
            Skills
          </a>
          <Link
            to="/products"
            className="ml-2 px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold
                       hover:bg-blue-700 transition-all duration-300
                       shadow-md shadow-blue-600/20"
          >
            Products
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200">
          <div className="flex flex-col px-6 py-6 gap-4">
            <a href="#hero" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#about-me" onClick={() => setOpen(false)}>
              About me
            </a>
            <a href="#aptitudes" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2 rounded-xl bg-blue-600 text-white text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
