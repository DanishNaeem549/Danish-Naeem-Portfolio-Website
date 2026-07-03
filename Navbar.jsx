import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { to: "/", label: "home.jsx" },
  { to: "/services", label: "services.json" },
  { to: "/contact", label: "contact.sh" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glass" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-18 py-4">
        <Link to="/" className="font-mono font-semibold text-lg flex items-center gap-1">
          <span className="text-accent">&lt;</span>
          <span>Danish</span>
          <span className="text-primary">.dev</span>
          <span className="text-accent">/&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-secondary dark:text-surface/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-secondary/10 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <Link to="/contact" className="btn-primary !py-2 !px-4 text-sm">
            Hire Me
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2">
            {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2">
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <div className="flex flex-col gap-4 px-6 py-6 font-mono text-sm">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1">
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
