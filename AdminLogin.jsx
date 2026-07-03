import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo.jsx";
import { adminLogin } from "../services/api.js";
import { useAuth } from "../context/AuthContext.jsx";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await adminLogin(form);
      login(data.token, data.user);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo title="Admin Login | Danish Naeem" description="Admin access" />
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="card w-full max-w-sm"
        >
          <p className="eyebrow mb-2"> admin.login()</p>
          <h1 className="font-display font-bold text-2xl mb-6">Admin Access</h1>

          <label className="block text-sm font-medium mb-1.5" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mb-4 rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
            placeholder="admin@danishnaeem.dev"
          />

          <label className="block text-sm font-medium mb-1.5" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full mb-4 rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
            placeholder="••••••••"
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </motion.form>
      </section>
    </>
  );
};

export default AdminLogin;
