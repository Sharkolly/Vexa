import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Search, ArrowRight, ShoppingBag } from "lucide-react";

const CATEGORIES = [
  {
    title: "Tech & Electronics",
    subtitle: "Innovation & Devices",
    href: "/search?category=Electronics",
    alt: "Tech Category",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Fashion & Apparel",
    subtitle: "Curated Style",
    href: "/search?category=Fashion",
    alt: "Fashion Category",
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Footwear & Shoes",
    subtitle: "Premium Comfort",
    href: "/search?category=Shoes",
    alt: "Shoes Category",
    src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
  },
];

const NotFound = () => {
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchProduct.trim()) return;
    navigate(`/search?product=${encodeURIComponent(searchProduct.trim())}`);
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      <main className="flex-grow pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-5 md:px-12 py-12 md:py-20 flex flex-col items-center justify-center text-center">
          
          {/* Ambient Background Radial Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-emerald-400/15 blur-[120px] rounded-full pointer-events-none -z-10" />

          {/* 404 Visual Graphic */}
          <div className="relative mb-6 flex items-center justify-center select-none">
            <span className="text-[130px] sm:text-[200px] md:text-[240px] font-black text-slate-200/80 leading-none tracking-tight">
              404
            </span>
            
            {/* Floating Error Badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md border border-slate-200 px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Item Not Found
                </span>
              </div>
            </div>
          </div>

          {/* Heading & Subtext */}
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight max-w-2xl">
            Lost in the <span className="text-emerald-700">Digital Aisle?</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-10 mt-4 leading-relaxed">
            The requested page seems to have expired or moved to another directory. Use our store search or return home to keep exploring.
          </p>

          {/* Search & Action Bar */}
          <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 justify-center items-center mb-20">
            <Link
              to="/"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
            >
              <FaHome className="text-sm" />
              <span>Back to Home</span>
            </Link>

            <form
              onSubmit={handleSearch}
              className="w-full flex items-center gap-2 flex-1"
            >
              <div className="relative w-full flex items-center bg-white rounded-xl border border-slate-200 shadow-xs focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 transition-all">
                <Search className="text-slate-400 w-5 h-5 absolute left-3.5 pointer-events-none" />
                <input
                  className="w-full bg-transparent pl-11 pr-4 py-3 text-sm font-medium outline-none text-slate-900 placeholder:text-slate-400"
                  placeholder="Search products, brands, categories..."
                  type="text"
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-emerald-700/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Popular Destinations Cards */}
          <div className="w-full max-w-5xl text-left">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
              <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                Popular Destinations
              </h2>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest hidden sm:inline-block">
                Fexa Categories
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.title}
                  to={category.href}
                  className="group relative overflow-hidden rounded-2xl h-80 bg-slate-900 border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Category Image */}
                  <img
                    alt={category.alt}
                    src={category.src}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                  />
                  
                  {/* Dark Emerald Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity group-hover:from-slate-950/95" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">
                        {category.subtitle}
                      </p>
                      <h3 className="text-white font-extrabold text-2xl tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
