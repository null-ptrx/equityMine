"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Inbox,
  Clock,
  CheckCircle2,
  PhoneCall,
  Search,
  Filter,
  Download,
  RefreshCw,
  Eye,
  MessageSquare,
  Mail,
  Phone,
  Trash2,
  Calendar,
  AlertCircle,
  TrendingUp,
  X,
  ExternalLink,
  ChevronDown,
  Sparkles,
  User,
  PlusCircle,
  Check
} from "lucide-react";

export interface ContactQuery {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  goal: string;
  message?: string;
  createdAt: string;
  status: "new" | "in_progress" | "contacted" | "resolved" | "archived";
  priority: "high" | "medium" | "low";
  notes?: string[];
  lastContactedAt?: string;
}

const GOAL_BADGES: Record<string, { bg: string; text: string; border: string }> = {
  "Wealth Creation": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Retirement Planning": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Child Education": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  "Buying a Home": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Tax Saving": { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  "Emergency Fund": { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
  "Not sure yet": { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
};

const STATUS_CONFIG = {
  new: { label: "New Lead", bg: "bg-emerald-100 text-emerald-800 border-emerald-200", dot: "bg-emerald-500" },
  in_progress: { label: "In Review", bg: "bg-amber-100 text-amber-800 border-amber-200", dot: "bg-amber-500" },
  contacted: { label: "Contacted", bg: "bg-blue-100 text-blue-800 border-blue-200", dot: "bg-blue-500" },
  resolved: { label: "Resolved", bg: "bg-slate-100 text-slate-700 border-slate-200", dot: "bg-slate-400" },
  archived: { label: "Archived", bg: "bg-zinc-100 text-zinc-600 border-zinc-200", dot: "bg-zinc-400" },
};

const PRIORITY_CONFIG = {
  high: { label: "High", badge: "bg-rose-50 text-rose-700 border-rose-200" },
  medium: { label: "Medium", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  low: { label: "Low", badge: "bg-slate-50 text-slate-600 border-slate-200" },
};

export default function AdminPage() {
  const [queries, setQueries] = useState<ContactQuery[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [goalFilter, setGoalFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "priority">("newest");
  const [selectedQuery, setSelectedQuery] = useState<ContactQuery | null>(null);
  const [newNote, setNewNote] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  // Show a quick notification toast
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Fetch queries from API
  const fetchQueries = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/contact");
      if (res.ok) {
        const json = await res.json();
        setQueries(json.data || []);
      }
    } catch (err) {
      console.error("Failed to load queries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  // Update Status handler
  const handleStatusChange = async (id: string, newStatus: ContactQuery["status"]) => {
    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setQueries((prev) =>
          prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
        );
        if (selectedQuery?.id === id) {
          setSelectedQuery((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
        triggerToast(`Query status changed to "${STATUS_CONFIG[newStatus].label}"`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Add internal note
  const handleAddNote = async (id: string) => {
    if (!newNote.trim()) return;
    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, note: newNote.trim() }),
      });
      if (res.ok) {
        const noteText = newNote.trim();
        setQueries((prev) =>
          prev.map((q) =>
            q.id === id ? { ...q, notes: [...(q.notes || []), noteText] } : q
          )
        );
        if (selectedQuery?.id === id) {
          setSelectedQuery((prev) =>
            prev ? { ...prev, notes: [...(prev.notes || []), noteText] } : null
          );
        }
        setNewNote("");
        triggerToast("Note added successfully");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete query
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this query entry?")) return;
    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setQueries((prev) => prev.filter((q) => q.id !== id));
        if (selectedQuery?.id === id) {
          setSelectedQuery(null);
        }
        triggerToast("Lead enquiry deleted");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Simulate inserting a sample client test query
  const handleSimulateNewQuery = async () => {
    const sampleGoals = [
      "Wealth Creation",
      "Retirement Planning",
      "Child Education",
      "Buying a Home",
      "Tax Saving",
    ];
    const sampleNames = [
      "Priya Sundaram",
      "Rohan Mehra",
      "Siddharth Rao",
      "Neha Kulkarni",
      "Aditya Kapoor",
    ];
    const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    const randomGoal = sampleGoals[Math.floor(Math.random() * sampleGoals.length)];

    const payload = {
      fullName: randomName,
      email: `${randomName.toLowerCase().replace(" ", ".")}@example.com`,
      mobile: `+91 ${Math.floor(9000000000 + Math.random() * 999999999)}`,
      goal: randomGoal,
      message: `Looking for personalized advisory regarding ${randomGoal.toLowerCase()}. Please connect over WhatsApp or call.`,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const json = await res.json();
        setQueries((prev) => [json.data, ...prev]);
        triggerToast(`New inquiry received from ${randomName}!`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    if (queries.length === 0) return;
    const headers = ["ID", "Full Name", "Email", "Phone", "Goal", "Status", "Priority", "Message", "Created At"];
    const rows = filteredQueries.map((q) => [
      q.id,
      `"${q.fullName.replace(/"/g, '""')}"`,
      `"${q.email}"`,
      `"${q.mobile}"`,
      `"${q.goal}"`,
      q.status,
      q.priority,
      `"${(q.message || "").replace(/"/g, '""')}"`,
      `"${new Date(q.createdAt).toLocaleString()}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `equitymine_queries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast("Exported filtered queries to CSV");
  };

  // Metrics
  const stats = useMemo(() => {
    return {
      total: queries.length,
      new: queries.filter((q) => q.status === "new").length,
      inProgress: queries.filter((q) => q.status === "in_progress").length,
      contacted: queries.filter((q) => q.status === "contacted").length,
      resolved: queries.filter((q) => q.status === "resolved").length,
    };
  }, [queries]);

  // Filter and sort queries
  const filteredQueries = useMemo(() => {
    return queries
      .filter((q) => {
        const matchesSearch =
          q.fullName.toLowerCase().includes(search.toLowerCase()) ||
          q.email.toLowerCase().includes(search.toLowerCase()) ||
          q.mobile.includes(search) ||
          q.goal.toLowerCase().includes(search.toLowerCase()) ||
          (q.message && q.message.toLowerCase().includes(search.toLowerCase()));

        const matchesStatus = statusFilter === "all" || q.status === statusFilter;
        const matchesGoal = goalFilter === "all" || q.goal === goalFilter;

        return matchesSearch && matchesStatus && matchesGoal;
      })
      .sort((a, b) => {
        if (sortBy === "newest") {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        if (sortBy === "oldest") {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        }
        if (sortBy === "priority") {
          const priorityWeight = { high: 3, medium: 2, low: 1 };
          return (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
        }
        return 0;
      });
  }, [queries, search, statusFilter, goalFilter, sortBy]);

  // Time formatter
  const formatTimeAgo = (dateStr: string) => {
    const diff = Math.floor((new Date().getTime() - new Date(dateStr).getTime()) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
    return new Date(dateStr).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 animate-in fade-in slide-in-from-top-4 duration-200 text-sm font-medium">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Admin Top Command Header */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Contact Form Inquiries
                </h1>
                <span className="ml-2 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  Admin Console
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Real-time CRM dashboard for tracking & responding to client call-back requests
              </p>
            </div>

            {/* Actions & Tools */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleSimulateNewQuery}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors"
                title="Create a sample form submission to test notifications"
              >
                <PlusCircle className="w-4 h-4 text-teal-600" />
                <span>Simulate Query</span>
              </button>

              <button
                onClick={exportToCSV}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 transition-colors shadow-xs"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Export CSV</span>
              </button>

              <button
                onClick={fetchQueries}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors shadow-xs disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>

              <Link
                href="/contact"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <span>Live Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* KPI Stats Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div
            onClick={() => setStatusFilter("all")}
            className={`p-4 sm:p-5 rounded-2xl bg-white border cursor-pointer transition-all ${
              statusFilter === "all"
                ? "border-teal-500 ring-2 ring-teal-500/20 shadow-sm"
                : "border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Inquiries</span>
              <Inbox className="w-4 h-4 text-slate-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stats.total}</span>
              <span className="text-xs text-slate-500">all time</span>
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("new")}
            className={`p-4 sm:p-5 rounded-2xl bg-white border cursor-pointer transition-all ${
              statusFilter === "new"
                ? "border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm"
                : "border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Uncontacted (New)</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">{stats.new}</span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
                Needs attention
              </span>
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("in_progress")}
            className={`p-4 sm:p-5 rounded-2xl bg-white border cursor-pointer transition-all ${
              statusFilter === "in_progress"
                ? "border-amber-500 ring-2 ring-amber-500/20 shadow-sm"
                : "border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">In Review</span>
              <Clock className="w-4 h-4 text-amber-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">{stats.inProgress}</span>
              <span className="text-xs text-slate-500">active</span>
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("contacted")}
            className={`p-4 sm:p-5 rounded-2xl bg-white border cursor-pointer transition-all ${
              statusFilter === "contacted"
                ? "border-blue-500 ring-2 ring-blue-500/20 shadow-sm"
                : "border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Contacted</span>
              <PhoneCall className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">{stats.contacted}</span>
              <span className="text-xs text-slate-500">called / emailed</span>
            </div>
          </div>

          <div
            onClick={() => setStatusFilter("resolved")}
            className={`col-span-2 sm:col-span-1 p-4 sm:p-5 rounded-2xl bg-white border cursor-pointer transition-all ${
              statusFilter === "resolved"
                ? "border-slate-800 ring-2 ring-slate-800/10 shadow-sm"
                : "border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Converted / Done</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-800">{stats.resolved}</span>
              <span className="text-xs text-slate-500">completed</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by client name, email, phone, or goal..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Status selector */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 text-slate-700 pl-3 pr-8 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-600 cursor-pointer"
              >
                <option value="all">All Statuses ({queries.length})</option>
                <option value="new">New ({stats.new})</option>
                <option value="in_progress">In Review ({stats.inProgress})</option>
                <option value="contacted">Contacted ({stats.contacted})</option>
                <option value="resolved">Resolved ({stats.resolved})</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Goal Filter */}
            <div className="relative">
              <select
                value={goalFilter}
                onChange={(e) => setGoalFilter(e.target.value)}
                className="appearance-none text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 text-slate-700 pl-3 pr-8 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-600 cursor-pointer"
              >
                <option value="all">All Investment Goals</option>
                <option value="Wealth Creation">Wealth Creation</option>
                <option value="Retirement Planning">Retirement Planning</option>
                <option value="Child Education">Child Education</option>
                <option value="Buying a Home">Buying a Home</option>
                <option value="Tax Saving">Tax Saving</option>
                <option value="Emergency Fund">Emergency Fund</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sort Filter */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 text-slate-700 pl-3 pr-8 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-600 cursor-pointer"
              >
                <option value="newest">Sort: Newest First</option>
                <option value="oldest">Sort: Oldest First</option>
                <option value="priority">Sort: By Priority</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
              <button
                onClick={() => setViewMode("table")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                  viewMode === "table"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Table
              </button>
              <button
                onClick={() => setViewMode("cards")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                  viewMode === "cards"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Cards
              </button>
            </div>
          </div>
        </div>

        {/* Query Records List */}
        {loading ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center shadow-xs">
            <RefreshCw className="w-8 h-8 text-teal-600 animate-spin mx-auto mb-3" />
            <p className="text-slate-600 font-medium">Loading user queries...</p>
          </div>
        ) : filteredQueries.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center shadow-xs">
            <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">No inquiries found</h3>
            <p className="text-slate-500 text-sm mt-1 max-w-sm mx-auto">
              {search || statusFilter !== "all" || goalFilter !== "all"
                ? "Try clearing or adjusting your search filters to view inquiries."
                : "There are currently no contact form submissions. Click 'Simulate Query' to generate a test lead."}
            </p>
            {(search || statusFilter !== "all" || goalFilter !== "all") && (
              <button
                onClick={() => {
                  setSearch("");
                  setStatusFilter("all");
                  setGoalFilter("all");
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition"
              >
                Reset All Filters
              </button>
            )}
          </div>
        ) : viewMode === "table" ? (
          /* Table View */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50/75 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Client Details</th>
                    <th className="py-3.5 px-4">Investment Goal</th>
                    <th className="py-3.5 px-4">Message Snippet</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Submitted</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredQueries.map((query) => {
                    const goalStyle = GOAL_BADGES[query.goal] || GOAL_BADGES["Not sure yet"];
                    const statusStyle = STATUS_CONFIG[query.status] || STATUS_CONFIG.new;

                    return (
                      <tr
                        key={query.id}
                        className="hover:bg-teal-50/20 transition-colors group cursor-pointer"
                        onClick={() => setSelectedQuery(query)}
                      >
                        {/* Client details */}
                        <td className="py-4 px-4 sm:px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm shrink-0">
                              {query.fullName
                                .split(" ")
                                .map((n) => n[0])
                                .slice(0, 2)
                                .join("")
                                .toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                                  {query.fullName}
                                </p>
                                {query.priority === "high" && (
                                  <span className="px-1.5 py-0.2 text-[10px] font-bold rounded bg-rose-50 text-rose-600 border border-rose-200">
                                    HIGH
                                  </span>
                                )}
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs text-slate-500 mt-0.5">
                                <span className="flex items-center gap-1 hover:text-slate-800">
                                  <Mail className="w-3 h-3 text-slate-400" />
                                  {query.email}
                                </span>
                                <span className="hidden sm:inline text-slate-300">•</span>
                                <span className="flex items-center gap-1 hover:text-slate-800">
                                  <Phone className="w-3 h-3 text-slate-400" />
                                  {query.mobile}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Goal */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${goalStyle.bg} ${goalStyle.text} ${goalStyle.border}`}
                          >
                            {query.goal || "General Inquiry"}
                          </span>
                        </td>

                        {/* Message Preview */}
                        <td className="py-4 px-4 max-w-xs">
                          <p className="text-slate-600 text-xs line-clamp-2">
                            {query.message ? query.message : <em className="text-slate-400">No message provided</em>}
                          </p>
                          {query.notes && query.notes.length > 0 && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded mt-1">
                              <MessageSquare className="w-3 h-3" />
                              {query.notes.length} internal note{query.notes.length > 1 ? "s" : ""}
                            </span>
                          )}
                        </td>

                        {/* Status with quick changer */}
                        <td
                          className="py-4 px-4 whitespace-nowrap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="relative inline-block">
                            <select
                              value={query.status}
                              onChange={(e) => handleStatusChange(query.id, e.target.value as any)}
                              className={`appearance-none text-xs font-semibold pl-2.5 pr-7 py-1 rounded-full border cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${statusStyle.bg}`}
                            >
                              <option value="new">New Lead</option>
                              <option value="in_progress">In Review</option>
                              <option value="contacted">Contacted</option>
                              <option value="resolved">Resolved</option>
                            </select>
                            <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-current opacity-70" />
                          </div>
                        </td>

                        {/* Time */}
                        <td className="py-4 px-4 whitespace-nowrap text-xs text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{formatTimeAgo(query.createdAt)}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 block mt-0.5">
                            {new Date(query.createdAt).toLocaleDateString()}
                          </span>
                        </td>

                        {/* Actions */}
                        <td
                          className="py-4 px-4 text-right whitespace-nowrap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center justify-end gap-1.5">
                            <a
                              href={`tel:${query.mobile}`}
                              title="Direct Phone Call"
                              className="p-1.5 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                            >
                              <Phone className="w-4 h-4" />
                            </a>
                            <a
                              href={`mailto:${query.email}?subject=Regarding your inquiry at Equity Mine`}
                              title="Send Email"
                              className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            >
                              <Mail className="w-4 h-4" />
                            </a>
                            <button
                              onClick={() => setSelectedQuery(query)}
                              title="View Full Details"
                              className="p-1.5 text-slate-500 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(query.id)}
                              title="Delete Query"
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>
                Showing <strong>{filteredQueries.length}</strong> of <strong>{queries.length}</strong> queries
              </span>
              <span>Click on any row to open the complete profile and communication console</span>
            </div>
          </div>
        ) : (
          /* Card / Kanban Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredQueries.map((query) => {
              const goalStyle = GOAL_BADGES[query.goal] || GOAL_BADGES["Not sure yet"];
              const statusStyle = STATUS_CONFIG[query.status] || STATUS_CONFIG.new;

              return (
                <div
                  key={query.id}
                  onClick={() => setSelectedQuery(query)}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-teal-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header: ID & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-slate-400">{query.id}</span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusStyle.bg}`}
                      >
                        {statusStyle.label}
                      </span>
                    </div>

                    {/* Name & Priority */}
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-base">{query.fullName}</h4>
                      {query.priority === "high" && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">
                          HIGH PRIORITY
                        </span>
                      )}
                    </div>

                    {/* Goal Pill */}
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${goalStyle.bg} ${goalStyle.text} ${goalStyle.border}`}
                      >
                        {query.goal || "Investment Advisory"}
                      </span>
                    </div>

                    {/* Message preview */}
                    <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 line-clamp-3 mb-4">
                      {query.message || <em className="text-slate-400">No message provided</em>}
                    </p>
                  </div>

                  {/* Footer Info */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {formatTimeAgo(query.createdAt)}
                    </span>
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={`tel:${query.mobile}`}
                        className="p-1 text-slate-400 hover:text-emerald-600"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`mailto:${query.email}`}
                        className="p-1 text-slate-400 hover:text-blue-600"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Detail Slide-Over Drawer */}
      {selectedQuery && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
          <div
            className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white font-bold text-base flex items-center justify-center">
                  {selectedQuery.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{selectedQuery.fullName}</h3>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {selectedQuery.id}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Submitted on {new Date(selectedQuery.createdAt).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedQuery(null)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Quick Communication Bar */}
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={`tel:${selectedQuery.mobile}`}
                  onClick={() => handleStatusChange(selectedQuery.id, "contacted")}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs transition"
                >
                  <Phone className="w-4 h-4 mb-1 text-emerald-600" />
                  <span>Call Client</span>
                </a>

                <a
                  href={`https://wa.me/${selectedQuery.mobile.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello ${selectedQuery.fullName}, thanks for reaching out to Equity Mine regarding ${selectedQuery.goal}. How can we assist you with your investments?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleStatusChange(selectedQuery.id, "contacted")}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 font-semibold text-xs transition"
                >
                  <Sparkles className="w-4 h-4 mb-1 text-teal-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${selectedQuery.email}?subject=Equity Mine Advisory - Regarding your request`}
                  onClick={() => handleStatusChange(selectedQuery.id, "contacted")}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold text-xs transition"
                >
                  <Mail className="w-4 h-4 mb-1 text-blue-600" />
                  <span>Send Email</span>
                </a>
              </div>

              {/* Status and Priority Controls */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Lead Management Status
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Current Stage
                    </label>
                    <select
                      value={selectedQuery.status}
                      onChange={(e) => handleStatusChange(selectedQuery.id, e.target.value as any)}
                      className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="new">New Lead</option>
                      <option value="in_progress">In Review</option>
                      <option value="contacted">Contacted</option>
                      <option value="resolved">Resolved / Converted</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Goal Category
                    </label>
                    <div className="text-xs font-semibold p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800">
                      {selectedQuery.goal || "General Inquiry"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Client Information
                </h4>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 divide-y divide-slate-100 text-sm">
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-slate-500 text-xs">Full Name</span>
                    <span className="font-semibold text-slate-900">{selectedQuery.fullName}</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-slate-500 text-xs">Phone Number</span>
                    <span className="font-semibold text-slate-900 font-mono">{selectedQuery.mobile}</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-slate-500 text-xs">Email Address</span>
                    <span className="font-semibold text-slate-900 font-mono">{selectedQuery.email}</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-slate-500 text-xs">Target Goal</span>
                    <span className="font-semibold text-teal-700">{selectedQuery.goal}</span>
                  </div>
                  {selectedQuery.lastContactedAt && (
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-slate-500 text-xs">Last Interaction</span>
                      <span className="text-slate-700 text-xs">
                        {new Date(selectedQuery.lastContactedAt).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Inquiry Message */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Inquiry Message
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">
                  {selectedQuery.message || (
                    <span className="italic text-slate-400">Client did not provide any additional message.</span>
                  )}
                </div>
              </div>

              {/* Internal Staff Notes */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Internal Advisor Notes ({selectedQuery.notes?.length || 0})</span>
                </h4>

                {/* Notes List */}
                <div className="space-y-2">
                  {selectedQuery.notes && selectedQuery.notes.length > 0 ? (
                    selectedQuery.notes.map((note, idx) => (
                      <div
                        key={idx}
                        className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900"
                      >
                        <p>{note}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-400 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                      No internal notes recorded yet. Add one below.
                    </div>
                  )}
                </div>

                {/* Add Note Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddNote(selectedQuery.id);
                    }}
                    placeholder="Add meeting note or call update..."
                    className="flex-1 text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    onClick={() => handleAddNote(selectedQuery.id)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
              <button
                onClick={() => handleDelete(selectedQuery.id)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Lead</span>
              </button>

              <button
                onClick={() => setSelectedQuery(null)}
                className="px-5 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition shadow-xs"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}