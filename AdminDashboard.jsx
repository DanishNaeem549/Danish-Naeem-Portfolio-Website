import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiSearch, HiTrash, HiMailOpen, HiDownload, HiLogout } from "react-icons/hi";
import Seo from "../components/Seo.jsx";
import { getContacts, updateContactStatus, deleteContact, exportContactsCsvUrl } from "../services/api.js";
import { useAuth } from "../context/AuthContext.jsx";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const { user, logout, token } = useAuth();

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const { data } = await getContacts({ search: search || undefined });
      setContacts(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchContacts();
  };

  const markRead = async (id) => {
    await updateContactStatus(id, "read");
    fetchContacts();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await deleteContact(id);
    fetchContacts();
  };

  const stats = {
    total: contacts.length,
    unread: contacts.filter((c) => c.status === "unread").length,
  };

  return (
    <>
      <Seo title="Admin Dashboard | Danish Naeem" description="Manage portfolio inquiries" />
      <section className="min-h-screen px-6 md:px-12 lg:px-24 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-1"> dashboard.jsx</p>
              <h1 className="font-display font-bold text-3xl">Welcome, {user?.name || "Admin"}</h1>
            </div>
            <button onClick={logout} className="btn-outline text-sm">
              <HiLogout /> Log Out
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="card !p-5">
              <p className="text-xs text-muted mb-1">Total Contacts</p>
              <p className="font-display font-bold text-3xl text-primary">{stats.total}</p>
            </div>
            <div className="card !p-5">
              <p className="text-xs text-muted mb-1">Unread Messages</p>
              <p className="font-display font-bold text-3xl text-accent">{stats.unread}</p>
            </div>
            <a
              href={`${exportContactsCsvUrl()}?token=${token}`}
              className="card !p-5 flex flex-col justify-center items-center hover:-translate-y-1 transition-transform"
              onClick={(e) => {
                e.preventDefault();
                fetch(exportContactsCsvUrl(), { headers: { Authorization: `Bearer ${token}` } })
                  .then((res) => res.blob())
                  .then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "contacts.csv";
                    a.click();
                  });
              }}
            >
              <HiDownload className="text-2xl text-primary mb-1" />
              <p className="text-xs font-mono">Export CSV</p>
            </a>
          </div>

          <form onSubmit={handleSearch} className="flex gap-3 mb-6">
            <div className="relative flex-1">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, or company..."
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-secondary/20 dark:border-white/20 bg-transparent text-sm focus:border-accent outline-none"
              />
            </div>
            <button type="submit" className="btn-outline text-sm">Search</button>
          </form>

          <div className="card !p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-secondary/10 dark:border-white/10 font-mono text-xs text-muted">
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={6} className="p-6 text-center text-muted">Loading...</td></tr>
                ) : contacts.length === 0 ? (
                  <tr><td colSpan={6} className="p-6 text-center text-muted">No contacts found.</td></tr>
                ) : (
                  contacts.map((c) => (
                    <motion.tr
                      key={c._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-secondary/5 dark:border-white/5"
                    >
                      <td className="p-4 font-medium">{c.fullName}</td>
                      <td className="p-4 text-muted">{c.email}</td>
                      <td className="p-4">{c.service || "-"}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-mono ${
                          c.status === "unread" ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"
                        }`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="p-4 text-muted">{new Date(c.createdAt).toLocaleDateString()}</td>
                      <td className="p-4">
                        <div className="flex justify-end gap-3">
                          <button onClick={() => markRead(c._id)} title="Mark as read" className="hover:text-accent">
                            <HiMailOpen />
                          </button>
                          <button onClick={() => handleDelete(c._id)} title="Delete" className="hover:text-red-500">
                            <HiTrash />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
