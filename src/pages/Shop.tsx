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
  const { data } = useQueryProduct("/products/all");
  console.log(data);
  const productData: PRODUCT_CATEGORY_TYPE[] = data?.data || [];

  return (
    <div className="min-h-screen bg-white/80  mt-20 max-md:mt-16 ">
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
                      className="basis-60  lg:basis-70 flex-shrink-0 group cursor-pointer hover:shadow-lg  rounded-md transition-shadow border-2 border-gray-200 md:hover:border-gray-100 relative"
                    >
                      <div className="absolute top-2 right-2 bg-red-100 text-red-800 text-xs font-bold px-1.5 py-0.5 rounded z-10">
                        {product.discount || Math.ceil(Math.random() * 60)}%
                      </div>
                      <Link
                    to={`/products/product/${product._id}`}>
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
                          AddToCartClassName="w-full bg-orange-600  text-white font-semibold py-2 mt-5 cursor-pointer rounded opacity- text-sm lg: group-hover:opacity-100 transition-opacity hidde lg: shadow flex items-center gap-2 justify-center"
                          quantityNumberStyle="w-full flex justify-between   items-center  mt-5  borde-1 border-orange-00 rounded-md py-1"
                          // quantityColorStyle='bg-orange-700 text-white lg:hover:bg-orange-800 rounded-xs w-7 h-7 flex justify-center items-center font-medium text-md cursor-pointer '
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
    </div>
  );
}
