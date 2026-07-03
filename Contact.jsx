import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiBadgeCheck } from "react-icons/hi";
import Seo from "../components/Seo.jsx";
import ContactForm from "../components/ContactForm.jsx";

const contactDetails = [
  { icon: HiMail, label: "Email", value: "danishnaeem323@gmail.com", href: "mailto:hello@danishnaeem.dev" },
  { icon: HiPhone, label: "Phone", value: "+92 305 7950323", href: "tel:+10000000000" },
  { icon: HiLocationMarker, label: "Location", value: "Available Worldwide (Remote)", href: null },
];

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact | Danish Naeem"
        description="Get in touch to discuss your project — front-end development, React applications, and more."
      />
      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
        <div
          className="absolute bottom-0 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float pointer-events-none"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative section-pad max-w-6xl mx-auto grid lg:grid-cols-5 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-mono mb-5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Currently accepting new projects
            </span>

            <p className="eyebrow mb-3"> contact </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Let's Talk
            </h1>
            <p className="text-muted leading-relaxed mb-10 max-w-sm">
              Tell me a bit about your project and I'll get back to you within 24–48 hours with
              clear next steps — no lengthy back-and-forth required.
            </p>

            <div className="space-y-4 mb-10">
              {contactDetails.map((item, i) => {
                const Wrapper = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  >
                    <Wrapper
                      href={item.href || undefined}
                      className="group flex items-center gap-4 card !p-4 hover:!translate-y-[-2px]"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors flex-shrink-0">
                        <item.icon className="text-lg" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-mono text-muted uppercase tracking-wide">
                          {item.label}
                        </span>
                        <span className="block text-sm font-medium">{item.value}</span>
                      </span>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex gap-6 pt-6 border-t border-secondary/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <HiClock className="text-accent" />
                <div>
                  <p className="font-display font-bold text-lg leading-none">24–48h</p>
                  <p className="text-[11px] text-muted mt-1">Response time</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <HiBadgeCheck className="text-accent" />
                <div>
                  <p className="font-display font-bold text-lg leading-none">25+</p>
                  <p className="text-[11px] text-muted mt-1">Happy clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;