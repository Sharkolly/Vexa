import {
  Search,
  ShoppingCart,
  // User,
  // Menu,
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

const flashDeals = [
  {
    id: 1,
    name: "Apple AirPods Pro",
    price: "₦185,000",
    oldPrice: "₦210,000",
    img: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    discount: "-12%",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: "₦78,000",
    oldPrice: "₦100,000",
    discount: "-26%",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "PlayStation 5",
    price: "₦850,000",
    oldPrice: "₦920,000",
    discount: "-37%",
    img:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Samsung Smart TV",
    price: "₦450,000",
    discount: "-41%",
    oldPrice: "₦510,000",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: 'Hisense 43" Smart Full HD TV',
    price: "₦ 198,000",
    oldPrice: "₦ 250,000",
    discount: "-20%",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 6,
    name: "HP 15 Intel Celeron 8GB 1TB HDD",
    price: "₦ 245,000",
    oldPrice: "₦ 300,000",
    discount: "-18%",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 1,
    name: "Apple AirPods Pro",
    price: "₦185,000",
    oldPrice: "₦210,000",
    img: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    discount: "-12%",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: "₦78,000",
    oldPrice: "₦100,000",
    discount: "-26%",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "PlayStation 5",
    price: "₦850,000",
    oldPrice: "₦920,000",
    discount: "-37%",
    img:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Samsung Smart TV",
    price: "₦450,000",
    discount: "-41%",
    oldPrice: "₦510,000",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: 'Hisense 43" Smart Full HD TV',
    price: "₦ 198,000",
    oldPrice: "₦ 250,000",
    discount: "-20%",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 6,
    name: "HP 15 Intel Celeron 8GB 1TB HDD",
    price: "₦ 245,000",
    oldPrice: "₦ 300,000",
    discount: "-18%",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
];

export default function Random() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white/80  font-sans mt-20 max-md:mt-16 ">
      <main className="max-w-7xl mx-auto px-2 lg:px-8 py-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Sidebar Categories (Desktop) */}
          <aside className="hidden lg:block w-1/5 bg-white rounded-md shadow-sm py-2 h-[400px]">
            <ul className="flex flex-col h-full text-sm text-gray-700">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className="hover:text-blue-800 hover:bg-gray-50 cursor-pointer transition-colors px-4 py-2.5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Hero Slider Area */}
          <div className="w-full lg:w-3/5 h-[280px] lg:h-[400px] bg-blue-900 rounded-md shadow-sm relative overflow-hidden flex items-center justify-center text-white">
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

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>

          {/* Right Promo Banners (Desktop) */}
          <div className="hidden lg:flex w-1/5 flex-col gap-4 h-[400px]">
            <div className="flex-1 bg-white rounded-md shadow-sm flex items-center justify-center border-2 border-blue-100 p-4 text-center hover:shadow-md transition">
              <div>
                <HeartPulse className="mx-auto text-blue-800 mb-2" size={32} />
                <h3 className="font-bold text-gray-800">Health & Beauty</h3>
                <p className="text-xs text-gray-500">Starting from ₦2,000</p>
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

        <section className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="bg-orange-700  text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 p-1 rounded">
                <Search size={20} className="text-white" />
              </div>
              <h2 className="text-lg lg:text-xl font-bold">Electronics</h2>
            </div>
            <a
              href="#"
              className="text-sm font-semibold flex items-center hover:underline"
            >
              SEE ALL <ChevronRight size={16} />
            </a>
          </div>

          {/* Product Grid */}
          <div className="p-4 overflow-x-auto max-md:px-0">
            {/* <div className="flex gap-4 min-w-max lg:grid lg:grid-cols-6 lg:min-w-0"> */}
            <div className="flex gap-4 min-w-max items-center">
              {flashDeals.map((product) => (
                <div
                  key={product.id}
                  className="basis-50 lg:w-full flex-shrink-0 group cursor-pointer hover:shadow-lg p-2 rounded transition-shadow border border-transparent hover:border-gray-100 relative"
                >
                  <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-bold px-1.5 py-0.5 rounded z-10">
                    {product.discount}
                  </div>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[160px] object-cover rounded mb-2 mix-blend-multiply"
                  />
                  <h3 className="text-sm text-gray-800 line-clamp-2 mb-1 h-10">
                    {product.name}
                  </h3>
                  <div className="font-bold text-base">{product.price}</div>
                  <div className="text-xs text-gray-500 line-through">
                    {product.oldPrice}
                  </div>

                  <button className="w-full bg-orange-700 text-white font-semibold py-1.5 mt-2 rounded opacity- text-sm lg: group-hover:opacity-100 transition-opacity hidde lg: shadow flex items-center gap-2 justify-center">
                             <ShoppingCart size={15} /> <span> ADD TO CART</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className=" mt-6 bg-white rounded-md shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-red-700  text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 p-1 rounded">
                <Search size={20} className="text-white" />
              </div>
              <h2 className="text-lg lg:text-xl font-bold">Sneakers</h2>
            </div>
            <a
              href="#"
              className="text-sm font-semibold flex items-center hover:underline"
            >
              SEE ALL <ChevronRight size={16} />
            </a>
          </div>

          {/* Product Grid */}
          <div className="p-4 overflow-x-auto max-md:px-0">
            <div className="flex gap-4 min-w-max pb-4 items-center">
              {flashDeals.reverse().map((product) => (
                <div
                  key={product.id}
                  className="basis-50 lg:w-full flex-shrink-0 group cursor-pointer hover:shadow-lg p-2 rounded transition-shadow border border-transparent hover:border-gray-100 relative"
                >
                  <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-bold px-1.5 py-0.5 rounded z-10">
                    {product.discount}
                  </div>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[160px] object-cover rounded mb-2 mix-blend-multiply"
                  />
                  <h3 className="text-sm text-gray-800 line-clamp-2 mb-1 h-10">
                    {product.name}
                  </h3>
                  <div className="font-bold text-base">{product.price}</div>
                  <div className="text-xs text-gray-500 line-through">
                    {product.oldPrice}
                  </div>
                  
                  <button className="w-full bg-orange-700 text-white font-semibold py-1.5 mt-2 rounded opacity- text-sm lg: group-hover:opacity-100 transition-opacity hidde lg: shadow flex items-center gap-2 justify-center">
                             <ShoppingCart size={15} /> <span> ADD TO CART</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}