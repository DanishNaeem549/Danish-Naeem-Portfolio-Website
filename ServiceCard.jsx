import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="card flex flex-col"
    >
      <Icon className="text-3xl text-primary mb-4" />
      <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
      <p className="text-sm text-muted mb-4">{service.description}</p>
      <ul className="space-y-2 mb-5 flex-1">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <HiCheck className="text-accent mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <p className="font-mono text-xs text-muted mb-4">{service.price}</p>
      <Link to="/contact" className="btn-outline justify-center text-sm">
        Get a Quote
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
