import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";

const NotFound = () => {
  return (
    <>
      <Seo title="404 Not Found | Danish Naeem" description="Page not found." />
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-accent text-sm mb-4">// error.log</p>
          <h1 className="font-display font-bold text-7xl mb-4">404</h1>
          <p className="text-muted mb-8 font-mono text-sm">Cannot GET this route — page not found.</p>
          <Link to="/" className="btn-primary">Return Home</Link>
        </motion.div>
      </section>
    </>
  );
};

export default NotFound;
