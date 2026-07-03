import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ink text-surface/80 px-6 md:px-12 lg:px-24 py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-mono font-semibold text-lg text-surface">
            <span className="text-accent">&lt;</span>Danish<span className="text-primary">.dev</span>
            <span className="text-accent">/&gt;</span>
          </p>
          <p className="mt-3 text-sm text-surface/60 max-w-xs">
            Front-End & React.js Developer building fast, accessible, production-grade interfaces.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3"> sitemap</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3"> connect</p>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors"><FaTwitter /></a>
            <a href="mailto:hello@danishnaeem.dev" aria-label="Email" className="hover:text-accent transition-colors"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs text-surface/50 flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Danish Naeem. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
