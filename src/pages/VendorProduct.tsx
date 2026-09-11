import React, { useState } from "react";
import { useQueryProduct } from "../../lib/useQuery";
import { useParams, Link } from "react-router-dom";
import {
  Search,
  Share2,
  Star,
  CheckCircle2,
  MapPin,
  ShoppingBag,
//   Copy,
  Check,
//   Filter,
  ArrowUpDown,
  PhoneCall,
  Clock,
  ShieldCheck,
} from "lucide-react";

// --- MOCK VENDOR DATA ---
const VENDOR_INFO = {
  id: "v-101",
  slug: "apex-tech-hub",
  name: "Apex Tech Hub",
  owner: "Chidi Ezekiel",
  isVerified: true,
  rating: 4.8,
  reviewCount: 142,
  joinedDate: "Jan 2024",
  location: "Port Harcourt, NG",
  phone: "+234 812 345 6789",
  responseTime: "< 2 hours",
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  banner:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  bio: "Official distributor of premium mobile devices, audio gear, and gaming accessories in Rivers State. 100% genuine products with warranty.",
};

// --- MOCK VENDOR PRODUCTS ---
const VENDOR_PRODUCTS = [
  {
    id: "p-1",
    title: "Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 85000,
    originalPrice: 95000,
    rating: 4.9,
    reviews: 38,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
    isFeatured: true,
  },
  {
    id: "p-2",
    title: "Ultra-Fast Magnetic Wireless Charger 15W",
    category: "Accessories",
    price: 18500,
    originalPrice: 22000,
    rating: 4.7,
    reviews: 19,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1622445268465-84382c76e27a?auto=format&fit=crop&q=80&w=500",
    isFeatured: false,
  },
  {
    id: "p-3",
    title: "Smart Ergonomic Wrist Watch (Series 8)",
    category: "Electronics",
    price: 120000,
    originalPrice: 135000,
    rating: 4.8,
    reviews: 54,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500",
    isFeatured: true,
  },
  {
    id: "p-4",
    title: "Mechanical RGB Gaming Keyboard",
    category: "Gaming",
    price: 45000,
    originalPrice: 50000,
    rating: 4.6,
    reviews: 12,
    inStock: false,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500",
    isFeatured: false,
  },
  {
    id: "p-5",
    title: "Portable Waterproof Bluetooth Speaker 20W",
    category: "Audio",
    price: 32000,
    originalPrice: 38000,
    rating: 4.9,
    reviews: 27,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=500",
    isFeatured: false,
  },
];

const VendorProduct: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

    const { data, isLoading } = useQueryProduct(
      `/admin/vendor/${id}`,
    );

    console.log(data, isLoading)
  
  // States
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  // Store Link Generator
  const currentStoreUrl = `${window.location.origin}/store/${id || VENDOR_INFO.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentStoreUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Filter Categories dynamically
  const categories = ["All", ...Array.from(new Set(VENDOR_PRODUCTS.map((p) => p.category)))];

  // Filtering & Sorting Logic
  const filteredProducts = VENDOR_PRODUCTS.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews; // Default: Popular
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* --- VENDOR HERO BANNER --- */}
      <div className="relative w-full h-48 sm:h-64 lg:h-80 bg-slate-800">
        <img
          src={VENDOR_INFO.banner}
          alt={VENDOR_INFO.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
      </div>

      {/* --- VENDOR PROFILE HEADER CARD --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-20 sm:-mt-24 mb-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/80 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            
            {/* Vendor Avatar & Basic Info */}
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="relative flex-shrink-0">
                <img
                  src={VENDOR_INFO.avatar}
                  alt={VENDOR_INFO.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-white shadow-md border border-slate-100"
                />
                {VENDOR_INFO.isVerified && (
                  <div
                    className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-1.5 rounded-full ring-2 ring-white shadow-sm"
                    title="Verified Vexa Merchant"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {VENDOR_INFO.name}
                  </h1>
                  {VENDOR_INFO.isVerified && (
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Merchant
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-500 mt-1 max-w-xl leading-relaxed">
                  {VENDOR_INFO.bio}
                </p>

                {/* Badges & Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 mt-3 font-medium">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold text-slate-900">{VENDOR_INFO.rating}</span>
                    <span className="text-slate-400">({VENDOR_INFO.reviewCount} reviews)</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {VENDOR_INFO.location}
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-4 h-4 text-slate-400" />
                    Replies {VENDOR_INFO.responseTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons & Share Link */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
              {/* Copy Shareable Link CTA */}
              <button
                onClick={handleCopyLink}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm active:scale-95 ${
                  copied
                    ? "bg-slate-900 text-white"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share Store Link</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${VENDOR_INFO.phone}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-md shadow-emerald-700/20 active:scale-95 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact Merchant</span>
              </a>
            </div>
          </div>
        </div>

        {/* --- STORE STATS BAR --- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-center shadow-sm">
            <p className="text-xs text-slate-500 font-medium">Total Products</p>
            <p className="text-xl font-bold text-slate-900 mt-0.5">{VENDOR_PRODUCTS.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-center shadow-sm">
            <p className="text-xs text-slate-500 font-medium">Average Rating</p>
            <p className="text-xl font-bold text-slate-900 mt-0.5">{VENDOR_INFO.rating} / 5.0</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-center shadow-sm">
            <p className="text-xs text-slate-500 font-medium">Member Since</p>
            <p className="text-xl font-bold text-slate-900 mt-0.5">{VENDOR_INFO.joinedDate}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 text-center shadow-sm">
            <p className="text-xs text-slate-500 font-medium">Fulfillment Rate</p>
            <p className="text-xl font-bold text-emerald-600 mt-0.5">99.4%</p>
          </div>
        </div>

        {/* --- CONTROLS: SEARCH & CATEGORY FILTERS --- */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-8 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search in ${VENDOR_INFO.name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 placeholder:text-slate-400"
            />
          </div>

          {/* Category Chips & Sort Controls */}
          <div className="w-full md:w-auto flex flex-wrap items-center gap-3 justify-between md:justify-end">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image & Badges */}
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isFeatured && (
                    <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="bg-rose-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-md">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-1.5">
                      <span>{product.category}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-slate-900 text-base line-clamp-2 group-hover:text-emerald-700 transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-lg font-extrabold text-slate-900">
                        ₦{product.price.toLocaleString()}
                      </p>
                      {product.originalPrice && (
                        <p className="text-xs text-slate-400 line-through">
                          ₦{product.originalPrice.toLocaleString()}
                        </p>
                      )}
                    </div>

                    <button
                      disabled={!product.inStock}
                      className={`p-2.5 rounded-xl transition-all ${
                        product.inStock
                          ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-700 hover:text-white active:scale-95"
                          : "bg-slate-100 text-slate-300 cursor-not-allowed"
                      }`}
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center max-w-md mx-auto my-12">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Products Found</h3>
            <p className="text-sm text-slate-500 mt-1">
              We couldn't find any products matching your current search or category filter in this store.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorProduct;