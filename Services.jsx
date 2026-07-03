import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiCode, HiDeviceMobile, HiTemplate, HiAdjustments, HiSwitchHorizontal,
  HiBriefcase, HiOfficeBuilding, HiViewGridAdd, HiChip, HiTrendingUp,
  HiStar, HiSparkles, HiThumbUp, HiLightningBolt,
} from "react-icons/hi";
import Seo from "../components/Seo.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTA from "../components/CTA.jsx";

const allServices = [
  { title: "Frontend Development", category: "Development", icon: HiCode, description: "Modern, maintainable UI built with React and best-practice component architecture.", features: ["Component architecture", "State management", "Performance tuning"], price: "From $200", popular: true },
  { title: "React.js Development", category: "Development", icon: HiSwitchHorizontal, description: "Custom React applications, from single pages to complex dashboards.", features: ["Custom hooks", "Reusable UI kits", "Testing setup"], price: "From $100", popular: true },
  { title: "Responsive Web Design", category: "Design", icon: HiDeviceMobile, description: "Layouts that adapt cleanly from mobile to ultra-wide displays.", features: ["Mobile-first design", "Cross-browser testing", "Fluid typography"], price: "From $90" },
  { title: "UI/UX Implementation", category: "Design", icon: HiAdjustments, description: "Turning Figma designs into pixel-accurate, interactive interfaces.", features: ["Design-to-code", "Micro-interactions", "Accessibility pass"], price: "From $100" },
  { title: "API Integration", category: "Development", icon: HiChip, description: "Connecting your front-end to REST APIs, payment gateways, and third-party services.", features: ["REST & GraphQL", "Auth flows", "Error handling"], price: "From $50" },
  { title: "Portfolio Websites", category: "Websites", icon: HiTemplate, description: "A personal site that showcases your work and gets you hired or hired-for.", features: ["Custom design", "SEO setup", "Contact pipeline"], price: "From $150" },
  { title: "Business Websites", category: "Websites", icon: HiOfficeBuilding, description: "Multi-page corporate sites with CMS-ready content sections.", features: ["Up to 6 pages", "CMS integration", "Analytics setup"], price: "From $300" },
  { title: "Landing Pages", category: "Websites", icon: HiViewGridAdd, description: "High-converting single pages for product launches and campaigns.", features: ["A/B test ready", "Fast load times", "Lead capture form"], price: "From $150" },
  { title: "AI-Powered Web Applications", category: "Development", icon: HiBriefcase, description: "Web apps integrated with AI APIs for chat, generation, or automation features.", features: ["LLM API integration", "Streaming UI", "Prompt design"], price: "From $500", popular: true },
  { title: "Website Optimization", category: "Optimization", icon: HiTrendingUp, description: "Speed, SEO, and accessibility audits with hands-on fixes.", features: ["Lighthouse audit", "Core Web Vitals", "SEO improvements"], price: "From $100" },
];

const categories = ["All", "Development", "Design", "Websites", "Optimization"];

const trustStats = [
  { icon: HiStar, value: "4.9/5", label: "Avg. client rating" },
  { icon: HiLightningBolt, value: "48h", label: "Avg. first response" },
  { icon: HiThumbUp, value: "98%", label: "On-time delivery" },
];

const Services = () => {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? allServices : allServices.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <>
      <Seo
        title="Services | Danish Naeem"
        description="Frontend development, React.js applications, UI/UX implementation, API integration, and more."
      />
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
        <div
          className="absolute top-1/3 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float pointer-events-none"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative section-pad max-w-6xl mx-auto !pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-mono mb-5">
              <HiSparkles /> 10 services · booking 2 new projects this month
            </span>

      
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              What I Can Build For You
            </h1>
            <p className="text-muted max-w-2xl mx-auto">
              From landing pages to full-stack AI applications — here's how I can help move your
              project forward, with transparent pricing and no surprise scope.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-14"
          >
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 card !p-3 !px-4">
                <stat.icon className="text-xl text-primary flex-shrink-0" />
                <div>
                  <p className="font-display font-bold leading-none">{stat.value}</p>
                  <p className="text-[11px] text-muted mt-1 whitespace-nowrap">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-3 font-mono text-xs">
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

          <p className="text-center text-xs text-muted font-mono mb-10">
            Showing {filtered.length} of {allServices.length} services
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-4"
            >
              {filtered.map((service, i) => (
                <div key={service.title} className="relative">
                  {service.popular && (
                    <span className="absolute -top-3 left-5 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-ink text-[10px] font-mono font-semibold shadow-glow">
                      <HiStar size={11} /> Most Requested
                    </span>
                  )}
                  <ServiceCard service={service} index={i} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <CTA />
    </>
  );
};

export default Services;