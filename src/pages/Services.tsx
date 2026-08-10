import React, { useState, useMemo } from "react";
import {
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Heart,
  Zap,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  X,
  Search,
  ArrowUpRight,
  RotateCcw,
} from "lucide-react";
import { servicesData } from "../../data/services";

const ITEMS_PER_PAGE = 6;

const CATEGORY_OPTIONS = [
  "Graphics Design",
  "Website Creation",
  "Brand Identity",
  "UI/UX Audit",
];

const Services = (): React.JSX.Element => {
  // State
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("recommended");
  const [favorites, setFavorites] = useState<Record<string | number, boolean>>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [openSections, setOpenSections] = useState({
    serviceType: true,
    budget: false,
    delivery: false,
  });

  // Toggle Category Checkbox
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  // Toggle Favorites
  const toggleFavorite = (id: string | number) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle Accordion Sections
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Reset Filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
    setSortBy("recommended");
    setCurrentPage(1);
  };

  // Filtered & Sorted Services Logic
  const filteredServices = useMemo(() => {
    return servicesData
      .filter((service) => {
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.some(
            (cat) =>
              service.category?.toLowerCase().includes(cat.toLowerCase()) ||
              service.title?.toLowerCase().includes(cat.toLowerCase())
          );

        const matchesSearch =
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "low-to-high") return a.price - b.price;
        if (sortBy === "high-to-low") return b.price - a.price;
        return 0; // "recommended" / default
      });
  }, [selectedCategories, searchQuery, sortBy]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE) || 1;
  const paginatedServices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredServices.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredServices, currentPage]);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen mt-17 ">
      {/* Hero Section */} 
      <section className="relative min-h-[480px] lg:h-[540px] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
            alt="Digital Design Studio"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Premier Digital Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mb-6">
              Elevate Your Brand Through Design & Tech.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Bespoke digital services tailored for the modern enterprise. From visionary Graphics Design to seamless Website Creation, we engineer excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 flex items-center gap-2 cursor-pointer">
                View Portfolio
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="px-7 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-800/50 font-semibold rounded-xl transition-all active:scale-95 cursor-pointer">
                Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Search & Top Action Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {selectedCategories.length > 0 && (
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full text-[11px] flex items-center justify-center font-bold">
                  {selectedCategories.length}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 px-3 py-2.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 cursor-pointer transition-all"
              >
                <option value="recommended">Recommended</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                  Filters
                </h3>
                {(selectedCategories.length > 0 || searchQuery) && (
                  <button
                    onClick={resetFilters}
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {/* Service Type Section */}
              <div className="space-y-3">
                <button
                  onClick={() => toggleSection("serviceType")}
                  className="flex items-center justify-between w-full font-semibold text-slate-800 text-sm"
                >
                  Service Type
                  {openSections.serviceType ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {openSections.serviceType && (
                  <div className="space-y-2.5 pt-1">
                    {CATEGORY_OPTIONS.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-3 cursor-pointer group text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Budget Accordion Placeholder */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => toggleSection("budget")}
                  className="flex items-center justify-between w-full font-semibold text-slate-800 text-sm"
                >
                  Budget Range
                  {openSections.budget ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>
                {openSections.budget && (
                  <p className="text-xs text-slate-400 mt-2">
                    Custom pricing based on deliverables.
                  </p>
                )}
              </div>

              {/* Delivery Accordion Placeholder */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => toggleSection("delivery")}
                  className="flex items-center justify-between w-full font-semibold text-slate-800 text-sm"
                >
                  Delivery Time
                  {openSections.delivery ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>
                {openSections.delivery && (
                  <p className="text-xs text-slate-400 mt-2">
                    Standard delivery 3 - 14 business days.
                  </p>
                )}
              </div>
            </div>
          </aside>

          {/* Service Cards Grid */}
          <div className="flex-1 min-w-0">
            {/* Meta Count */}
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
              Showing <span className="text-slate-900 font-bold">{filteredServices.length}</span> services found
            </p>

            {filteredServices.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <p className="text-slate-600 font-medium mb-4">
                  No services match your current filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedServices.map((service, idx) => {
                  const serviceId = service.id || idx;
                  const isFav = !!favorites[serviceId];

                  return (
                    <div
                      key={serviceId}
                      className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                      {/* Image Banner */}
                      <div className="relative h-56 overflow-hidden bg-slate-100">
                        <img
                          src={
                            service.imageUrl ||
                            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                          }
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur text-blue-600 shadow-xs border border-white/40">
                            {service.category || "Digital Service"}
                          </span>
                        </div>
                        <button
                          onClick={() => toggleFavorite(serviceId)}
                          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur text-slate-600 hover:text-rose-500 transition-colors shadow-xs cursor-pointer"
                          aria-label="Add to favorites"
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${
                              isFav ? "fill-rose-500 text-rose-500" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </div>

                        {/* Footer / Price */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                              Starting Price
                            </span>
                            <span className="font-extrabold text-lg text-slate-900">
                              ${service.price ? service.price.toLocaleString() : "Custom"}
                            </span>
                          </div>
                          <button className="px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-semibold transition-colors duration-200 cursor-pointer">
                            Inquire Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Light Premium Value Proposition Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-100 border-t border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block">
                Why Work With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
                Built by experts, <br />
                <span className="text-blue-600">trusted by innovators.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We don't just build websites and design logos; we engineer digital experiences that drive market leadership.
              </p>
            </div>
            <button className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all active:scale-95 shadow-md shadow-blue-600/20 cursor-pointer self-start lg:self-auto">
              Partner With Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-slate-900">Precision First</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every pixel is deliberate. Every line of code is optimized for maximum performance and clarity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-slate-900">Creative Mastery</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Artistic vision meets business strategy. Our designs don't just look good; they solve real problems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-slate-900">Rock-Solid Trust</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                From initial wireframe to final launch, your vision is protected by our quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Drawer Filter Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                  Filters
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-slate-800 text-sm">Service Type</h4>
                <div className="space-y-3">
                  {CATEGORY_OPTIONS.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 cursor-pointer text-sm text-slate-600"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;