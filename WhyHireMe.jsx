import { motion } from "framer-motion";
import { HiLightningBolt, HiDeviceMobile, HiSparkles, HiCode, HiSwitchHorizontal, HiTemplate } from "react-icons/hi";

const reasons = [
  { icon: HiLightningBolt, title: "Fast Development", desc: "Efficient workflows and reusable components mean quicker turnaround without cutting corners." },
  { icon: HiDeviceMobile, title: "Responsive Design", desc: "Every interface is built mobile-first and tested across devices and screen sizes." },
  { icon: HiSparkles, title: "Modern UI/UX", desc: "Interfaces that feel current, intuitive, and aligned with your brand." },
  { icon: HiCode, title: "Clean Code", desc: "Readable, maintainable, well-structured code that's easy to extend." },
  { icon: HiSwitchHorizontal, title: "API Integration", desc: "Seamless connections to REST APIs, third-party services, and databases." },
  { icon: HiTemplate, title: "Full Stack Development", desc: "End-to-end delivery — from database design to polished front-end." },
];

const WhyHireMe = () => {
  return (
    <section className="section-pad bg-secondary/5 dark:bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-14">
          Why Work With Me
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card"
            >
              <r.icon className="text-3xl text-primary mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
