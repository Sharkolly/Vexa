import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  Heart,
  Shield,
  LogOut,
  Camera,
  Edit3,
  Check,
  Clock,
  ChevronRight,
  KeyRound,
  Sparkles,
} from "lucide-react";
import { useAuthContextStore } from "../../store/useAuthContext";

type TabType = "profile" | "orders" | "favorites" | "security";

// Mock Order Data
const MOCK_ORDERS = [
  {
    id: "VX-98231",
    date: "Aug 02, 2026",
    status: "Delivered",
    items: "Brand Identity Suite + UI Audit",
    total: "$1,250.00",
  },
  {
    id: "VX-97410",
    date: "Jul 18, 2026",
    status: "In Progress",
    items: "Custom E-Commerce Storefront",
    total: "$2,400.00",
  },
];

const Profile = (): React.JSX.Element => {
  const { user } = useAuthContextStore();
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "Alex",
    lastName: user?.lastName || "Morgan",
    email: user?.email || "alex.morgan@vexa.com",
    phone: "+1 (555) 019-2834",
    address: "742 Evergreen Terrace, Springfield, OR",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Avatar Upload Placeholder */}
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-1 shadow-md">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-slate-700 font-extrabold text-3xl overflow-hidden">
                    {user?.firstName ? user.firstName[0].toUpperCase() : "A"}
                  </div>
                </div>
                <button
                  className="absolute bottom-1 right-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md transition-transform active:scale-95 cursor-pointer"
                  title="Update Avatar"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {formData.firstName} {formData.lastName}
                  </h1>
                  <span className="md:inline-flex items-center gap-1 hidden px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200/60">
                    <Sparkles className="w-3 h-3" />
                    Pro Member
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-medium mb-3">
                  {formData.email}
                </p>
                <p className="text-xs text-slate-400">
                  Member since March 2025 • Port Harcourt, NG
                </p>
              </div>
            </div>

            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Navigation Tabs */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-3 shadow-xs space-y-1">
              {[
                { id: "profile", label: "Personal Details", icon: User },
                { id: "orders", label: "Order History", icon: Package },
                { id: "favorites", label: "Saved Items", icon: Heart },
                { id: "security", label: "Security & Login", icon: Shield },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 opacity-70 ${isActive ? "text-white" : "text-slate-400"}`} />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Content Panels */}
          <main className="lg:col-span-3">
            
            {/* Tab 1: Personal Details */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Personal Details</h2>
                    <p className="text-xs text-slate-500 mt-1">Manage your public profile and account credentials.</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    {isEditing ? <Check className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </button>
                </div>

                <form onSubmit={handleSave} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="firstName"
                          disabled={!isEditing}
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 disabled:opacity-75 focus:outline-none focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="lastName"
                          disabled={!isEditing}
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 disabled:opacity-75 focus:outline-none focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          disabled={!isEditing}
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 disabled:opacity-75 focus:outline-none focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="phone"
                          disabled={!isEditing}
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 disabled:opacity-75 focus:outline-none focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Default Delivery / Billing Address
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="address"
                        disabled={!isEditing}
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 disabled:opacity-75 focus:outline-none focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {/* Tab 2: Order History */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
                <div className="pb-6 border-b border-slate-100 mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Order History</h2>
                  <p className="text-xs text-slate-500 mt-1">Track and manage your recent service orders.</p>
                </div>

                <div className="space-y-4">
                  {MOCK_ORDERS.map((order) => (
                    <div
                      key={order.id}
                      className="p-5 border border-slate-200/80 rounded-2xl hover:border-slate-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-extrabold text-sm text-slate-900">{order.id}</span>
                          <span
                            className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                              order.status === "Delivered"
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
                                : "bg-amber-50 text-amber-600 border border-amber-200/60"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-600">{order.items}</p>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>Ordered on {order.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <span className="font-extrabold text-slate-900 text-sm">{order.total}</span>
                        <button className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer">
                          Invoice
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Favorites */}
            {activeTab === "favorites" && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs text-center py-12">
                <Heart className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 text-lg mb-1">No Saved Services Yet</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
                  Click the heart icon on any service card in our store to save items for quick access later.
                </p>
                <a
                  href="/services"
                  className="inline-flex px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-blue-700 transition-colors"
                >
                  Browse Services
                </a>
              </div>
            )}

            {/* Tab 4: Security */}
            {activeTab === "security" && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
                <div className="pb-6 border-b border-slate-100 mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Security & Password</h2>
                  <p className="text-xs text-slate-500 mt-1">Keep your credentials and sessions secure.</p>
                </div>

                <div className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <button className="px-6 py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer">
                    Update Password
                  </button>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;