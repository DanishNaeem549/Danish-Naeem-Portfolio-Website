import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Dashboard",
    category: "React",
    description: "An admin dashboard with real-time analytics, order management, and inventory tracking.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
    demo: "#",
    code: "#",
  },
  {
    title: "AI Chat Assistant",
    category: "AI",
    description: "A conversational assistant UI with streaming responses and context-aware suggestions.",
    tech: ["React", "Express", "OpenAI API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60",
    demo: "#",
    code: "#",
  },
  {
    title: "SaaS Landing Page",
    category: "Landing Page",
    description: "A conversion-focused landing page with animated sections and a pricing calculator.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
    demo: "#",
    code: "#",
  },
  {
    title: "Business Website",
    category: "Business",
    description: "A multi-page corporate site with CMS-driven content and a contact pipeline.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60",
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Template",
    category: "Portfolio",
    description: "A reusable, themeable portfolio template built for freelance developers.",
    tech: ["React", "Vite", "Tailwind"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    demo: "#",
    code: "#",
  },
  {
    title: "API Integration Hub",
    category: "React",
    description: "A unified interface for connecting and monitoring third-party API integrations.",
    tech: ["React", "Express", "REST API"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
    demo: "#",
    code: "#",
  },
];

const categories = ["All", "React", "AI", "Landing Page", "Business", "Portfolio"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="section-pad max-w-6xl mx-auto">
      <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-8">Featured Work</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-12 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-colors ${
              filter === cat
                ? "bg-primary text-white border-primary"
                : "border-secondary/20 dark:border-white/20 hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="card !p-0 overflow-hidden group"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-1 rounded bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-mono">
                  <a href={project.demo} className="flex items-center gap-1 hover:text-accent transition-colors">
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                  <a href={project.code} className="flex items-center gap-1 hover:text-accent transition-colors">
                    <FaGithub size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
