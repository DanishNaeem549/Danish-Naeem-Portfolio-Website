import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 overflow-hidden bg-ink text-surface">
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-40 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
          Let's Build Something <span className="text-accent">Amazing</span> Together
        </h2>
        <p className="mt-5 text-surface/70 max-w-xl mx-auto">
          Have a project in mind? Let's turn it into a fast, polished product your users will love.
        </p>
        <Link to="/contact" className="btn-primary mt-8">
          Contact Me <HiArrowRight />
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
