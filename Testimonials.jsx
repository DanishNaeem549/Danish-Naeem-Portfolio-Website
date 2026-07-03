import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Nimbus Labs",
    quote: "Danish delivered a polished, responsive front-end well ahead of schedule. Communication was excellent throughout.",
  },
  {
    name: "James Okafor",
    role: "CTO, Brightpath",
    quote: "One of the most reliable React developers I've worked with. Clean code and great attention to UI detail.",
  },
  {
    name: "Elena Torres",
    role: "Product Manager, Vertex",
    quote: "He translated our vague requirements into a genuinely great product experience. Highly recommended.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-pad max-w-3xl mx-auto text-center">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-14">What Clients Say</h2>

      <div className="relative card min-h-[220px] flex items-center justify-center">
        <FaQuoteLeft className="absolute top-6 left-6 text-3xl text-primary/20" />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg italic text-ink dark:text-surface mb-6">
              "{testimonials[index].quote}"
            </p>
            <p className="font-display font-semibold">{testimonials[index].name}</p>
            <p className="text-sm text-muted">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button onClick={prev} aria-label="Previous testimonial" className="p-2 rounded-full border border-secondary/20 dark:border-white/20 hover:border-accent hover:text-accent transition-colors">
          <HiChevronLeft />
        </button>
        <button onClick={next} aria-label="Next testimonial" className="p-2 rounded-full border border-secondary/20 dark:border-white/20 hover:border-accent hover:text-accent transition-colors">
          <HiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
