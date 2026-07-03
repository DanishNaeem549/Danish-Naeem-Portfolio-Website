import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-pad max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Who I Am</h2>
        <p className="text-muted leading-relaxed mb-4">
          I'm Danish Naeem, a Front-End and React.js Developer focused on building interfaces that
          feel fast, look intentional, and hold up in production. My work spans single-page
          applications, dashboards, and full-stack platforms — always with an emphasis on clean
          component architecture and measurable performance.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          My objective is simple: help startups, agencies, and companies turn ideas into polished
          digital products, without the back-and-forth of unclear requirements or missed deadlines.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Shipped", value: "40+" },
            { label: "Happy Clients", value: "25+" },
          ].map((stat) => (
            <div key={stat.label} className="card !p-4 text-center">
              <p className="font-display font-bold text-2xl text-primary">{stat.value}</p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="card font-mono text-sm leading-7"
      >
        
        <p>{"{"}</p>
        <p className="pl-6">"focus": <span className="text-primary">"React & modern front-end architecture"</span>,</p>
        <p className="pl-6">"approach": <span className="text-primary">"component-driven, performance-first"</span>,</p>
        <p className="pl-6">"strengths": [<span className="text-primary">"UI/UX"</span>, <span className="text-primary">"API integration"</span>, <span className="text-primary">"full-stack delivery"</span>],</p>
        <p className="pl-6">"currentlyLearning": <span className="text-primary">"AI-powered web apps"</span></p>
        <p>{"}"}</p>
      </motion.div>
    </section>
  );
};

export default About;
