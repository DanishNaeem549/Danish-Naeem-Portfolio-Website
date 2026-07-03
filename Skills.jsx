import { motion } from "framer-motion";

const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion"] },
  { title: "Programming Languages", items: ["Python", "JavaScript", "C++","sql" ] },
  { title: "Database", items: ["MongoDB", "PostgreSQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Figma", "VS Code"] },
];

const Skills = () => {
  return (
    <section className="section-pad bg-secondary/5 dark:bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-14">
          Tools & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
            >
              <p className="font-mono text-xs text-accent mb-4">{` ${group.title.toLowerCase()}`}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
