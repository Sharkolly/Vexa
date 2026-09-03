import {
 // Search,
  ChevronRight,
  Monitor,
  Home,
  HeartPulse,
  Shirt,
  Gamepad2,
  Apple,
  Gamepad,
  Car,
  ShieldCheck,
  Truck,
  Tag,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import { useQueryProduct } from "../../lib/useQuery";
import type { AllProductType } from "../../types/product.types";
import AddToCart from "../../components/ui/AddToCart";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import SearchNav from "../../components/ui/SearchNav";

const categories = [
  { name: "Supermarket", icon: <Apple size={18} /> },
  { name: "Health & Beauty", icon: <HeartPulse size={18} /> },
  { name: "Home & Office", icon: <Home size={18} /> },
  { name: "Gaming", icon: <Gamepad size={18} /> },
  { name: "Computing", icon: <Monitor size={18} /> },
  { name: "Electronics", icon: <Gamepad2 size={18} /> },
  { name: "Fashion", icon: <Shirt size={18} /> },
  { name: "Automobile", icon: <Car size={18} /> },
];

const resolveImage = (
  img: string | File | null | undefined,
  fallback: string
) =>
  typeof img === "string"
    ? img
    : img instanceof File
    ? URL.createObjectURL(img)
    : fallback;

type PRODUCT_CATEGORY_TYPE = {
  category: string;
  products: AllProductType[];
};

export default function Random() {
  const { data, isLoading } = useQueryProduct("/products/all");
  const productData: PRODUCT_CATEGORY_TYPE[] = data?.data || [];

  return (
    <>
      {isLoading && productData.length === 0 ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased pt-20 pb-24 max-md:pt-16">
          <main className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16">
            {/* HERO & CATEGORIES SECTION */}
            <div className="flex flex-col lg:flex-row gap-5 mb-8">
              {/* SIDEBAR CATEGORIES */}
              <aside className="hidden lg:block w-1/5 bg-white rounded-2xl border border-slate-200/80 shadow-xs p-3 h-[420px] shrink-0">
                <div className="px-3 py-2 border-b border-slate-100 mb-1">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                    Categories
                  </h3>
                </div>
                <ul className="flex flex-col justify-between h-[340px] text-sm font-medium text-slate-700">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <Link
                        to={`/search?category=${cat.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="group flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 group-hover:text-emerald-600 transition-colors">
                            {cat.icon}
                          </span>
                          <span className="text-sm font-medium">{cat.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* MAIN HERO BANNER */}
              <div className="w-full lg:flex-1">
                <div className="relative overflow-hidden w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-6 sm:p-10 md:p-12 h-[380px] lg:h-[420px] flex flex-col justify-center shadow-md">
                  {/* Background Decorative Graphic */}
                  <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-96 aspect-square opacity-20 md:opacity-30 pointer-events-none select-none hidden sm:block text-emerald-400">
                    <svg
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M100 20 L100 100 M100 180 L100 100 M30 60 L100 100 M170 140 L100 100 M30 140 L100 100 M170 60 L100 100"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        strokeOpacity="0.5"
                      />
                      <path
                        d="M100 20 L170 60 L100 100 L30 60 Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Hero Content */}
                  <div className="relative z-10 max-w-2xl w-full flex flex-col gap-4 sm:gap-5">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-full w-fit shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      VEXA ONLINE SHOP
                    </div>

                    <h1 className="text-white font-black tracking-tight text-3xl sm:text-5xl lg:text-5xl leading-[1.15]">
                      Everything You Need, <br className="hidden sm:inline" />
                      <span className="text-emerald-400">In One Place.</span>
                    </h1>

                    <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-lg">
                      Shop quality products across multiple categories with
                      secure checkout, trusted service, and convenient delivery
                      across Nigeria.
                    </p>

                    <div className="flex items-center max-md:flex-col max-md:items-start md:flex-row gap-4 mt-2">
                      <Link to="/shop" className="max-md:w-full">
                        <button className="group flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm py-3.5 px-7 rounded-xl shadow-md shadow-emerald-950/20 transition-all duration-200 cursor-pointer max-md:w-full">
                          <span>Shop Now</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>

                      <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>100% Verified Products</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT PROMO CARDS */}
              <div className="hidden lg:flex w-1/5 flex-col gap-4 h-[420px] shrink-0">
                <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-3 group-hover:scale-110 transition-transform">
                    <HeartPulse size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Health & Beauty
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Starting from ₦2,000</p>
                </div>

                <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-3 group-hover:scale-110 transition-transform">
                    <Home size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Home Essentials
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Free delivery available</p>
                </div>
              </div>
            </div>

            {/* TRUST BADGES BAR */}
            <div className="flex flex-wrap items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
              <div className="flex items-center gap-2 bg-white border border-slate-200/80 shadow-xs px-4 py-2.5 rounded-full text-slate-700 font-semibold text-xs sm:text-sm shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Secure checkout</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200/80 shadow-xs px-4 py-2.5 rounded-full text-slate-700 font-semibold text-xs sm:text-sm shrink-0">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Fast dispatch</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200/80 shadow-xs px-4 py-2.5 rounded-full text-slate-700 font-semibold text-xs sm:text-sm shrink-0">
                <Tag className="w-4 h-4 text-amber-600" />
                <span>Great value</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200/80 shadow-xs px-4 py-2.5 rounded-full text-slate-700 font-semibold text-xs sm:text-sm shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Quality checked</span>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200/80 shadow-xs px-4 py-2.5 rounded-full text-slate-700 font-semibold text-xs sm:text-sm shrink-0">
                <Headphones className="w-4 h-4 text-purple-600" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* PRODUCT CATEGORIES SECTIONS */}
            {productData?.map((productGroup: PRODUCT_CATEGORY_TYPE) => (
              <div
                key={productGroup.category}
                className={`${
                  productGroup.products.length <= 0 ? "hidden" : "mb-10"
                }`}
              >
                <section className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                  {/* Category Header */}
                  <div className="border-b border-slate-100 p-4 sm:px-6 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-6 rounded-full bg-emerald-600"></div>
                      <h2 className="text-base sm:text-lg capitalize font-bold text-slate-900 tracking-tight">
                        {productGroup.category}
                      </h2>
                    </div>
                    <Link
                      to={`/search?category=${productGroup.category}`}
                      className="text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors"
                    >
                      <span>SEE ALL</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>

                  {/* Product Cards Row */}
                  <div className="p-4 sm:p-6 overflow-x-auto scrollbar-none">
                    <div className="flex gap-4 sm:gap-5 min-w-max items-stretch">
                      {productGroup.products.map((product) => (
                        <div
                          key={product.id || product._id}
                          className="w-[290px] sm:w-[330px] shrink-0 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
                        >
                          {/* Image Container */}
                          <div className="relative w-full aspect-square bg-slate-50 overflow-hidden border-b border-slate-100">
                            <span className="absolute top-3 right-3 bg-rose-500 text-white font-bold text-[11px] px-2 py-0.5 rounded-full shadow-xs z-10">
                              -{product.discount || Math.ceil(Math.random() * 40)}%
                            </span>

                            <Link
                              to={`/products/${product.category.toLowerCase()}/${product.subCategory}/${
                                product.slug || product._id
                              }`}
                              className="w-full h-full block"
                            >
                              <img
                                src={resolveImage(product?.images[0], "")}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </Link>
                          </div>

                          {/* Product Details */}
                          <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                            <div>
                              <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                                {product.subCategory}
                              </p>
                              <Link
                                to={`/products/${product.category.toLowerCase()}/${product.subCategory}/${
                                  product.slug || product._id
                                }`}
                              >
                                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[40px] leading-snug">
                                  {product.name}
                                </h3>
                              </Link>
                            </div>

                            <div className="mt-3">
                              <div className="flex items-baseline gap-2">
                                <span className="font-mono font-bold text-base text-slate-900">
                                  ₦{product.price?.toLocaleString()}
                                </span>
                                <span className="font-mono text-xs text-slate-400 line-through">
                                  ₦{(product.price * 1.15).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </span>
                              </div>

                              <AddToCart
                                AddToCartClassName="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 mt-4 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-[0.98] text-xs sm:text-sm flex items-center gap-2 justify-center cursor-pointer"
                                quantityNumberStyle="w-full flex justify-between items-center mt-4 border border-slate-200 rounded-xl py-1.5 px-3 bg-slate-50 text-slate-900 font-mono text-xs"
                                quantity={product?.quantity}
                                id={product?._id}
                                category={product?.category}
                                subCategory={product?.subCategory}
                                price={product?.price}
                                image={resolveImage(product?.images[0], "")}
                                name={product?.name}
                                slug={product?.slug}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </main>

          <SearchNav />
        </div>
      )}
    </>
  );
              }
