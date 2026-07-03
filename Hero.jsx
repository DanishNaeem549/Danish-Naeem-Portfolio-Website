import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4"> Available for hire</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Danish Naeem
          </h1>
          <p className="mt-4 font-mono text-primary text-lg sm:text-xl">
            Front-End Developer <span className="text-muted">|</span> React Developer{" "}
            <span className="text-muted">|</span> AI Enthusiast
          </p>
          <p className="mt-6 text-muted max-w-lg leading-relaxed">
            I design and build fast, responsive, production-ready web applications —
            turning ideas into clean interfaces and reliable code that ships.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Hire Me <HiArrowRight />
            </Link>
            <Link to="/services" className="btn-outline">
              View Services
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-xl shadow-glass overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-secondary/10 dark:border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 font-mono text-xs text-muted">about-me.jsx</span>
          </div>
          <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
            <p><span className="text-accent">const</span> <span className="text-primary">developer</span> = {"{"}</p>
            <p className="pl-6">name: <span className="text-emerald-500">"Danish Naeem"</span>,</p>
            <p className="pl-6">role: <span className="text-emerald-500">"Front-End / React Developer"</span>,</p>
            <p className="pl-6">stack: [<span className="text-emerald-500">"React"</span>, <span className="text-emerald-500">"Tailwind"</span>, <span className="text-emerald-500">"Node.js"</span>],</p>
            <p className="pl-6">focus: <span className="text-emerald-500">"clean UI, solid architecture"</span>,</p>
            <p className="pl-6">
              available: <span className="text-primary">true</span>
              <span className="inline-block w-2 h-4 ml-1 bg-accent animate-blink align-middle" />
            </p>
            <p>{"};"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
