import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const submitContact = (data) => api.post("/contact", data);
export const adminLogin = (data) => api.post("/auth/login", data);
export const getContacts = (params) => api.get("/contact", { params });
export const updateContactStatus = (id, status) => api.put(`/contact/status/${id}`, { status });
export const deleteContact = (id) => api.delete(`/contact/${id}`);
export const exportContactsCsvUrl = () => `${API_BASE_URL}/contact/export/csv`;

export default api;
