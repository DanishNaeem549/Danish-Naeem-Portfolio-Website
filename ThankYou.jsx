import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import Seo from "../components/Seo.jsx";

const ThankYou = () => {
  return (
    <>
      <Seo title="Thank You | Danish Naeem" description="Thanks for reaching out." />
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center card max-w-md"
        >
          <HiCheckCircle className="text-6xl text-accent mx-auto mb-6" />
          <h1 className="font-display font-bold text-3xl mb-3">Message Sent!</h1>
          <p className="text-muted mb-8">
            Thanks for reaching out. I've received your message and will get back to you within 24–48 hours.
          </p>
          <Link to="/" className="btn-primary justify-center">Back to Home</Link>
        </motion.div>
      </section>
    </>
  );
};

export default ThankYou;
