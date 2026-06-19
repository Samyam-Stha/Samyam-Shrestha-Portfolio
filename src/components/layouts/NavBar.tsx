import { useState, useEffect } from "react";

const navItems = [
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="w-full h-24 md:bg-card/70 sticky top-0 md:backdrop-blur border-b border-muted/30 flex items-center px-7 justify-between z-50">
      <div className="text-heading-text font-bold text-2xl">
        <h1>&lt;Samyam /&gt;</h1>
      </div>

      <div className="hidden md:flex items-center gap-6 text-muted font-medium">
        {navItems.map((item) => (
          <div key={item.href} className="relative group">
            <a
              href={item.href}
              className="hover:text-heading-text transition-colors duration-200"
            >
              {item.label}
            </a>
            <div className="absolute left-0 -bottom-1 h-0.5 w-0 bg-heading-text transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>

      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-muted/10 transition-colors duration-200 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`block h-0.5 w-5 bg-heading-text rounded-full transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-heading-text rounded-full transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-heading-text rounded-full transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-24  z-40 flex flex-col px-7 py-8 gap-2  h-fit bg-card"
          onClick={() => setMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-2xl font-medium text-muted hover:text-heading-text transition-colors duration-200 py-3 border-b border-border/40"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
