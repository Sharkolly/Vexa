import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
import {
  Store,
  Star,
  Share2,
  Check,
  Search,
//   SlidersHorizontal,
  ShoppingBag,
  MapPin,
  ShieldCheck,
  MessageSquare,
  Package,
} from "lucide-react";

// Mock Vendor Data
const MOCK_VENDOR = {
  id: "v-102",
  slug: "apex-tech-store",
  name: "Apex Tech & Gadgets",
  owner: "Chidi Okafor",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
  rating: 4.9,
  reviewsCount: 142,
  location: "Port Harcourt, Rivers State",
  joinedDate: "Member since Jan 2025",
  isVerified: true,
  category: "Electronics & Tech",
  bio: "Official distributor of high-end consumer electronics, gaming rigs, mobile accessories, and custom hardware setups with direct warranty.",
};

// Mock Products Data
const MOCK_PRODUCTS = [
  {
    id: "p-1",
    title: "Pro Sound ANC Wireless Headphones",
    category: "Audio",
    price: 185000,
    originalPrice: 210000,
    rating: 4.8,
    stock: 12,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    isBestSeller: true,
  },
  {
    id: "p-2",
    title: "Ultra-Fast Mechanical Gaming Keyboard",
    category: "Accessories",
    price: 95000,
    originalPrice: 110000,
    rating: 4.9,
    stock: 5,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    isBestSeller: false,
  },
  {
    id: "p-3",
    title: "Minimalist Aluminum Laptop Stand",
    category: "Accessories",
    price: 42000,
    originalPrice: 48000,
    rating: 4.7,
    stock: 24,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    isBestSeller: false,
  },
  {
    id: "p-4",
    title: "4K UHD Ergonomic Curved Monitor 27\"",
    category: "Displays",
    price: 450000,
    originalPrice: 490000,
    rating: 5.0,
    stock: 3,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    isBestSeller: true,
  },
  {
    id: "p-5",
    title: "Smartwatch Series 9 Titan",
    category: "Wearables",
    price: 260000,
    originalPrice: 285000,
    rating: 4.6,
    stock: 8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    isBestSeller: false,
  },
  {
    id: "p-6",
    title: "Dual Fast Charging Power Bank 30,000mAh",
    category: "Accessories",
    price: 38000,
    originalPrice: 45000,
    rating: 4.9,
    stock: 19,
    image: "https://images.unsplash.com/photo-1609592424083-a0e2a9e3240e?auto=format&fit=crop&w=600&q=80",
    isBestSeller: false,
  },
];

const CATEGORIES = ["All", "Audio", "Accessories", "Displays", "Wearables"];

const VendorProduct2 = (): React.JSX.Element => {
//   const { vendorSlug } = useParams<{ vendorSlug: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedLink, setCopiedLink] = useState(false);

  // Copy personal vendor storefront URL to clipboard
  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Filter products by category and search term
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen pt-20 pb-20">
      {/* Vendor Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden mb-8">
          {/* Cover Photo */}
          <div className="h-48 sm:h-64 w-full relative bg-slate-800">
            <img
              src={MOCK_VENDOR.banner}
              alt={MOCK_VENDOR.name}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          {/* Vendor Profile Header Info */}
          <div className="px-6 sm:px-8 pb-8 pt-0 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-16 sm:-mt-20 gap-6 text-center sm:text-left">
              {/* Avatar + Vendor Name */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5">
                <div className="relative">
                  <img
                    src={MOCK_VENDOR.avatar}
                    alt={MOCK_VENDOR.name}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white object-cover shadow-lg bg-white"
                  />
                  {MOCK_VENDOR.isVerified && (
                    <span
                      title="Verified Merchant"
                      className="absolute bottom-2 right-2 bg-emerald-700 text-white p-1.5 rounded-full border-2 border-white shadow-md"
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <div className="mb-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2.5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {MOCK_VENDOR.name}
                    </h1>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      <Store className="w-3 h-3 text-emerald-600" />
                      Official Store
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      {MOCK_VENDOR.rating} ({MOCK_VENDOR.reviewsCount} reviews)
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {MOCK_VENDOR.location}
                    </span>
                  </p>
                </div>
              </div>

              {/* Action Buttons: Contact & Share Personal Link */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {copiedLink ? (
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

                <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer">
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">Contact Vendor</span>
                </button>
              </div>
            </div>

            {/* Vendor Bio */}
            <div className="mt-6 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
              {MOCK_VENDOR.bio}
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in this store..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isBestSeller && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-extrabold tracking-wider uppercase bg-emerald-700 text-white shadow-md">
                      Best Seller
                    </span>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-md text-[11px] font-bold text-slate-700 flex items-center gap-1 shadow-xs">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {product.rating}
                  </div>
                </div>

                {/* Product Meta */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2">
                      {product.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-3">
                    <div>
                      <span className="block text-xs text-slate-400 line-through">
                        ₦{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-base font-extrabold text-slate-900">
                        ₦{product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      className="p-2.5 bg-emerald-50 hover:bg-emerald-700 text-emerald-700 hover:text-white rounded-xl transition-all cursor-pointer active:scale-95"
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center max-w-md mx-auto">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 text-base mb-1">
              No Products Found
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              We couldn't find anything matching "{searchQuery}" in this store.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs hover:bg-emerald-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorProduct2;