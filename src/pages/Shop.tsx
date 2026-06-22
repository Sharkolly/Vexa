import {
  Search,
  // ShoppingCart,
  ChevronRight,
  Smartphone,
  Monitor,
  Home,
  HeartPulse,
  Shirt,
  Gamepad2,
  Baby,
  Apple,
} from "lucide-react";
import { useQueryProduct } from "../../lib/useQuery";
import type { ProductType } from "../../types/product.types";
import AddToCart from "../../components/ui/AddToCart";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import SearchNav from "../../components/ui/SearchNav";

const categories = [
  { name: "Supermarket", icon: <Apple size={18} /> },
  { name: "Health & Beauty", icon: <HeartPulse size={18} /> },
  { name: "Home & Office", icon: <Home size={18} /> },
  { name: "Phones & Tablets", icon: <Smartphone size={18} /> },
  { name: "Computing", icon: <Monitor size={18} /> },
  { name: "Electronics", icon: <Gamepad2 size={18} /> },
  { name: "Fashion", icon: <Shirt size={18} /> },
  { name: "Baby Products", icon: <Baby size={18} /> },
];

type PRODUCT_CATEGORY_TYPE = {
  category: string;
  products: ProductType[];
};

export default function Random() {
  const { data, isLoading } = useQueryProduct("/products/all");
  const productData: PRODUCT_CATEGORY_TYPE[] = data?.data || [];

  return (
    <>
      {isLoading && productData.length == 0 ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-white/80  mt-20 max-md:my-16 ">
          <main className="max-w-360  mx-auto px-2 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <aside className="hidden lg:block w-1/5 bg-white rounded-md shadow-sm py- h-[400px]">
                <ul className="flex flex-col h-full text-sm text-gray-700">
                  {categories.map((cat, idx) => (
                    <li
                      key={idx}
                      className={`hover:text-blue-800 hover:bg-gray-50 cursor-pointer transition-colors px-4 py-3 flex items-center justify-between ${idx == 0 ? "rounded-t-md" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500">{cat.icon}</span>
                        <span>{cat.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* <div className="w-full lg:w-3/5 h-[280px] lg:h-[400px] bg-blue-900 rounded-md shadow-sm relative overflow-hidden flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90" />
                <div className="relative z-10 text-center p-8">
                  <h2 className="text-3xl lg:text-5xl font-black mb-4">
                    TECH WEEK
                  </h2>
                  <p className="text-lg lg:text-xl mb-6">
                    Up to 40% off on premium devices
                  </p>
                  <button className="bg-white text-blue-800 font-bold py-2 px-6 rounded shadow hover:bg-gray-100 transition">
                    SHOP NOW
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  <div className="w-2 h-2 rounded-full bg-white/50"></div>
                </div>
              </div> */}

              <div className="w-full max-w-7xl mx-auto font-san ">
                {/* Main Hero Card Container */}
                <div className="relative overflow-hidden w-full rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-950  max-md:p-6  sm:p-10 md:p-14 lg:px-8  lg:py-0 min-h-88  md:min-h-[410px]    flex flex-col justify-center shadow-xl">
                  {/* Background Decorative Wireframe Cube */}
                  <div className="absolute right-4 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 aspect-square opacity-30 md:opacity-40 pointer-events-none select-none hidden sm:block text-purple-400">
                    <svg
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      {/* Outer Hexagon Line structure */}
                      <path
                        d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                      {/* Front facing vertex lines */}
                      <path
                        d="M100 20 L100 100 M100 180 L100 100 M30 60 L100 100 M170 140 L100 100 M30 140 L100 100 M170 60 L100 100"
                        stroke="currentColor"
                        strokeWidth="1"
                        // strokeWidth="0.75"
                        strokeDasharray="2 2"
                        strokeOpacity="0.5"
                      />
                      <path
                        d="M100 20 L170 60 L100 100 L30 60 Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30 60 L30 140 L100 180 L100 100 Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M100 100 L100 180 L170 140 L170 60 Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Hero Content Wrapper */}
                  <div className="relative z-10 max-w-2xl w-full flex flex-col gap-4 sm:gap-6">
                    {/* Top Brand Badge */}
                    <div className="flex items-center gap-2  bg-white/10 backdrop-blur-md border border-white/15 text-white font-bold text-xs uppercase tracking-wider py-1.5 px-3.5 rounded-full w-fit shadow-inner">
                      <svg
                        className="w-3.5 h-3.5 text-orange-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.18l8.16 4.71v9.42L12 21.02l-8.16-4.71V6.89L12 2.18zM12 4.5L5.84 8.05l6.16 3.56 6.16-3.56L12 4.5zM5.16 9.64v5.82l5.84 3.37v-5.82l-5.84-3.37zm13.68 0l-5.84 3.37v5.82l5.84-3.37v-5.82z" />
                      </svg>
                      URBANCUBE MART
                    </div>

                    {/* Core Typography Headlines */}
                    <h1 className="text-white font-black tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.1]">
                      Everything You Need, <br className="hidden sm:inline" />
                      <span className="text-orange-500">In One Place.</span>
                    </h1>

                    {/* Subtext description */}
                    <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl ">
                      Shop quality products across multiple categories with
                      secure checkout, trusted service and convenient delivery
                      across Nigeria.
                    </p>

                    {/* CTA & Trust Elements Row */}
                    <div className="flex items-center  sm:flex-row items-star sm:items-center gap-4 sm:gap-6 mt-2">
                      {/* Main Shop Button */}
                      <button className="group flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-sm sm:text-base py-3 px-6 rounded-2xl shadow-lg shadow-orange-600/20 transition-all duration-200">
                        Shop Now
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          ></path>
                        </svg>
                      </button>

                      <div className="flex items-center gap-2  text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
                        <svg
                          className="w-4 h-4 text-orange-400 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                        Secure shopping experience
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Features Horizontal Bar */}
                <div className="flex flex-wrap items-center gap-2 mt-4 justify-start w-full overflow-x-auto pb-2 scrollbar-none">
                  {/* Secure Checkout Badge */}
                  <div className="flex items-center gap-2  bg-white border border-gray-200 shadow-sm px-4 py-2.5 rounded-full text-slate-900 font-bold text-xs sm:text-sm shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-indigo-950"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                    Secure checkout
                  </div>

                  {/* Fast Dispatch Badge */}
                  <div className="flex items-center gap-2  bg-white border border-gray-200 shadow-sm px-4 py-2.5 rounded-full text-slate-900 font-bold text-xs sm:text-sm shrink-0">
                    <svg
                      className="w-4 h-4 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM19.5 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM2.25 5.25h3.83l1.71 8.2a1.5 1.5 0 001.47 1.19h9.17a1.5 1.5 0 001.47-1.19l1.45-6.99h-15.1"
                      />
                    </svg>
                    Fast dispatch
                  </div>

                        <div className="flex items-center gap-2  bg-white border border-gray-200 shadow-sm px-4 py-2.5 rounded-full text-slate-900 font-bold text-xs sm:text-sm shrink-0">
                    <svg
                      className="w-4 h-4 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 003.182 0l5.174-5.173a2.25 2.25 0 000-3.182L12.15 3.659a2.25 2.25 0 00-1.591-.659zM6 7.5h.008v.008H6V7.5z"
                      ></path>
                    </svg>
                    Great value
                  </div>
                  <div className="flex items-center gap-2  bg-white border border-gray-200 shadow-sm px-4 py-2.5 rounded-full text-slate-900 font-bold text-xs sm:text-sm shrink-0">
                    <div className="bg-emerald-600 text-white rounded-full p-0.5">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    Quality checked
                  </div>

                  
                  <div className="flex items-center gap-2  bg-white border border-gray-200 shadow-sm px-4 py-2.5 rounded-full text-slate-900 font-bold text-xs sm:text-sm shrink-0">
                    <svg
                      className="w-4 h-4 text-purple-900"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Customer support
                  </div>

                  
            
                </div>
              </div>

              {/* Right Promo Banners (Desktop) */}
              <div className="hidden lg:flex w-1/5 flex-col gap-4 h-[400px]">
                <div className="flex-1 bg-white rounded-md shadow-sm flex items-center justify-center border-2 border-blue-100 p-4 text-center hover:shadow-md transition">
                  <div>
                    <HeartPulse
                      className="mx-auto text-blue-800 mb-2"
                      size={32}
                    />
                    <h3 className="font-bold text-gray-800">Health & Beauty</h3>
                    <p className="text-xs text-gray-500">
                      Starting from ₦2,000
                    </p>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-md shadow-sm flex items-center justify-center border-2 border-blue-100 p-4 text-center hover:shadow-md transition">
                  <div>
                    <Home className="mx-auto text-blue-800 mb-2" size={32} />
                    <h3 className="font-bold text-gray-800">Home Essentials</h3>
                    <p className="text-xs text-gray-500">Free delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {productData?.map((product: PRODUCT_CATEGORY_TYPE) => (
              <div
                key={product.category}
                className={`${product.products.length <= 0 ? "hidden" : ""}`}
              >
                <section className="bg-white rounded-md shadow-sm overflow-hidden mt-6">
                  <div className="bg-blue-100  text-blue-800 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500 p-1 rounded hidden">
                        <Search size={20} className="text-white" />
                      </div>
                      <h2 className="text-lg lg:text-xl font-bold">
                        {product.category}
                      </h2>
                    </div>
                    <Link
                      to={`/search?category=${product.category}`}
                      className="text-sm font-semibold flex items-center hover:underline"
                    >
                      SEE ALL <ChevronRight size={16} />
                    </Link>
                  </div>

                  <div className="p-4 overflow-x-auto max-md:px-0">
                    {/* <div className="flex gap-4 min-w-max lg:grid lg:grid-cols-6 lg:min-w-0"> */}
                    <div className="flex gap-4 min-w-max items-center">
                      {product.products.map((product) => (
                        <div
                          key={product.id}
                          className="basis-65  lg:basis-70 flex-shrink-0 group cursor-pointer hover:shadow-lg  rounded-md transition-shadow border-2 border-gray-200 md:hover:border-gray-100 relative"
                        >
                          <div className="absolute top-2 right-2 bg-red-100 text-red-800 text-xs font-bold px-1.5 py-0.5 rounded z-10">
                            {product.discount || Math.ceil(Math.random() * 60)}%
                          </div>
                          <Link to={`/products/product/${product._id}`}>
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full md:h-60 h-55 object-cover rounded mb-2 mix-blend-multiply"
                            />
                          </Link>
                          <div className="px-3 py-1 pb-3 ">
                            <Link to={`/products/product/${product._id}`}>
                              <h3 className="text-sm text-gray-600 line-clamp-2 font-semibold ">
                                {product.category}
                              </h3>
                              <h3 className="text-md  text-black font-normal line-clamp-2 mb-1 h-13  mt-1">
                                {product.title}
                              </h3>
                              <div className="font-bold text-base">
                                ₦{product.price?.toLocaleString()}
                              </div>
                              <div className="text-xs text-gray-500 line-through">
                                ₦{(product.price * 1.12).toLocaleString()}
                              </div>
                            </Link>
                            <AddToCart
                              AddToCartClassName="w-full bg-orange-600  text-white font-semibold py-2 mt-5 cursor-pointer rounded opacity- text-sm lg: group-hover:opacity-100 transition-opacity hidde lg: shadow flex items-center gap-2  justify-center"
                              quantityNumberStyle="w-full flex justify-between   items-center  mt-5  borde-1 border-orange-00 rounded-md py-1"
                              quantity={product?.quantity}
                              id={product?._id}
                              category={product?.category}
                              price={product?.price}
                              image={product?.image}
                              title={product?.title}
                            />
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
