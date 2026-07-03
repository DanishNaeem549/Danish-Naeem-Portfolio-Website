import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi";
import { submitContact } from "../services/api.js";

const services = [
  "Frontend Development",
  "React.js Development",
  "Responsive Web Design",
  "UI/UX Implementation",
  "API Integration",
  "Portfolio Website",
  "Business Website",
  "Landing Page",
  "AI-Powered Web Application",
  "Website Optimization",
  "Other",
];

const budgets = ["< $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000+", "Not sure yet"];

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
  website: "", // honeypot field, must stay empty
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, error: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) next.email = "Enter a valid email address";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, error: "" });
    try {
      await submitContact(form);
      navigate("/thank-you");
    } catch (err) {
      setStatus({
        loading: false,
        error: err.response?.data?.message || "Something went wrong. Please try again.",
      });
      return;
    }
    setStatus({ loading: false, error: "" });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      noValidate
      className="card grid sm:grid-cols-2 gap-5"
    >
      {/* Honeypot - hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium mb-1.5" htmlFor="fullName">Full Name *</label>
        <input
          id="fullName"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
          placeholder="John Doe"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium mb-1.5" htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
          placeholder="john@company.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium mb-1.5" htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
          placeholder="+1 234 567 890"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium mb-1.5" htmlFor="company">Company Name</label>
        <input
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
          placeholder="Acme Inc."
        />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium mb-1.5" htmlFor="service">Service Required</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium mb-1.5" htmlFor="budget">Budget Range</label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
        >
          <option value="">Select a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-sm font-medium mb-1.5" htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent px-4 py-2.5 text-sm focus:border-accent outline-none"
          placeholder="Tell me about your project..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {status.error && (
        <p className="sm:col-span-2 text-red-500 text-sm">{status.error}</p>
      )}

      <div className="sm:col-span-2">
        <button type="submit" disabled={status.loading} className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60">
          {status.loading ? "Sending..." : "Send Message"} <HiPaperAirplane className="rotate-90" />
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
