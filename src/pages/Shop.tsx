import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useQueryProduct } from "../../lib/useQuery";
import type { ProductType } from "../../types/product.types";
import BouncingLoader from "../../components/BouncingLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import API from "../../api/api";
import type { AxiosError } from "axios";

export const PlaceholderCard = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <Skeleton height={200} className="w-full" />
    <div className="p-6">
      <Skeleton height={24} width="70%" className="mb-2" />
      <Skeleton height={16} width="50%" className="mb-4" />
      <Skeleton height={20} width="40%" className="mb-4" />
      <div className="flex justify-between">
        <Skeleton height={16} width="20%" />
        <Skeleton height={16} width="20%" />
        <Skeleton height={16} width="20%" />
      </div>
    </div>
  </div>
);

const Shop = () => {
  const { data, isLoading } = useQueryProduct(`/products`);
  const [query, setQuery] = useState("");
  const [shopData, setShopData] = useState<ProductType[] | []>(
    data?.data || [],
  );

  const searchOnChange = async (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = e.target.value;    
    setQuery(value);
  };

  const handleSearch = async () => {
    try{
      const res = await API(`/products?search=${query}`);
      const { data } = await res.data;
      setShopData(data);
    }
    catch(error)  {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error(errorMessage.message);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch();
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0">
        <div className="pt-24 flex max-w-container-max mx-auto gap-5 pb-32 px-4 md:px-12 max-md:flex-col">
          <aside className="flex-shrink- sticky top-24 h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar pr-5 max-lg:hidden  lg:w-72 ">
            <div className="mb-8">
              <h1 className="font-semibold  text-2xl mb-2">Tech Gadgets</h1>
              <p className="font-light text-black/70  -variant">
                428 items found
              </p>
            </div>
            <div className="space-y-7">
              <div>
                <h3 className="font-semibold  text-label-md  uppercase tracking-wider mb-2">
                  Brand
                </h3>
                <div className="space-y-3 ">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-nav-blue-active focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md -variant group-hover:text-nav-blue-active transition-colors">
                      Vexa Core
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      checked={false}
                      className="w-5 h-5 rounded border-outline-variant text-nav-blue-active focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md -variant group-hover:text-nav-blue-active transition-colors">
                      AeroTech
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-nav-blue-active focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md -variant group-hover:text-nav-blue-active transition-colors">
                      Nova Dynamics
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-label-md  uppercase tracking-wider mb-4">
                  Price Range
                </h3>
                <input
                  className="w-full h-1.5 cursor-pointer accent-nav-blue-active"
                  min={0}
                  max={5000}
                  value={2100}
                  type="range"
                />
                <div className="flex justify-between mt-2 font-label-sm text-label-sm -variant">
                  <span>$0</span>
                  <span>$5000+</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-label-md  uppercase tracking-wider mb-4">
                  Rating
                </h3>
                <div className="space-y-3">
                  <button className="flex items-center gap-2 -variant hover:text-nav-blue-active transition-colors">
                    <div className="flex text-amber-400 hidden">
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    </div>
                    <span className="font-body-md text-body-md">&amp; Up</span>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold uppercase tracking-wider mb-4">
                  Specifications
                </h3>
                <div className="flex flex-wrap gap-2 ">
                  <span className="px-3 py-1 bg-yellow-700 text-white border border-outline-variant rounded-full font-label-sm text-label-sm -variant hover:border-primary hover:text-nav-blue-active cursor-pointer transition-colors">
                    OLED
                  </span>
                  <span className="px-3 py-1 bg-green-700 text-white border border-outline-variant rounded-full font-label-sm text-label-sm -variant hover:border-primary hover:text-nav-blue-active cursor-pointer transition-colors">
                    Wireless
                  </span>
                  <span className="px-3 py-1 bg-blue-700 text-white border border-outline-variant rounded-full font-label-sm text-label-sm -variant hover:border-primary hover:text-nav-blue-active cursor-pointer transition-colors">
                    8K UHD
                  </span>
                  <span className="px-3 py-1 bg-cyan-800 text-white border border-outline-variant rounded-full font-label-sm text-label-sm -variant hover:border-primary hover:text-nav-blue-active cursor-pointer transition-colors">
                    Thunderbolt 4
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 z-25 bg-white">
            <div className="flex items-center justify-between gap-4 mb-10 flex-row  items-center">
              {/* <button className=" flex items-center justify-center gap-2 px-4 py-4 bg-white ring-1 ring-slate-100 rounded-xl font-label-md  hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  filter_list
                </span>
                Filters
              </button>  */}
              <div className="flex- relative group w-[60%] max-md:w-ful">
                <span
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-nav-blue-active transition-colors"
                  data-icon="search"
                >
                  <CiSearch />
                </span>
                <input
                  className="w-full pl-12 pr-6 py-4 bg-white border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-primary outline-none  rounded-xl font-body-md text-body-md transition-all shadow-sm max-md:w-full"
                  placeholder="Search..."
                  type="search"
                  value={query}
                  onChange={(e) => searchOnChange(e)}
                />
              </div>
              <div className="flex items-center gap-3 justify-between sm:justify-end">
                <span className="font-label-md text-label-md -variant hidden">
                  Sort by:
                </span>
                <select className="border-0 bg-transparent font-label-md text-label-md  focus:ring-0 cursor-pointer px-2 outline-none">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center w-full h-[80vh] ">
                <BouncingLoader />
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
                {shopData.map((item: ProductType) => (
                  <Link
                    to={`/products/product/${item._id}`}
                    className="group bg-white rounded-2xl overflow-hidden  flex flex-col text-sm sm:text-base"
                  >
                    <div className="relative aspect-squar  overflow-hidden bg-slate-50">
                      <img
                        alt="Luxury Tablet"
                        className="w-full h-full   object-cover transition-transform duration-500"
                        data-alt="A premium, ultra-thin slate-grey tablet computer resting on a minimalist white marble desk. The lighting is soft and natural, coming from a large window to the side, creating gentle shadows. The screen displays a vibrant, colorful abstract digital art piece. The setting is a bright, airy modern office with a high-end corporate aesthetic."
                        src={item.image}
                      />
                      <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full  hover:text-error transition-colors">
                        <span
                          className="material-symbols-outlined text-[20px]"
                          data-icon="favorite"
                        >
                          favorite
                        </span>
                      </button>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="fle hidden justify-between items-start mb-2">
                        <span className="font-semibold  text-sm text-nav-blue-active uppercase tracking-wider">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400">
                          <span className="material-symbols-outlined text-[16px]">
                            star
                          </span>
                          <span className="font-label-sm text-label-sm -variant font-bold">
                            4.9
                          </span>
                        </div>
                      </div>
                      <h2 className="text-lg max-md:text-sm  mb-2 leading-tight  md:text-headline-md text-center truncate-25   ">
                        {item.title}
                      </h2>
                      {/* <p className="font-light text-sm hidden text-slate-800 mb-6 flex-1">
                      {item.description}
                    </p> */}
                      <div className="flex items-center justify-center mt-3  pt-0  border- border-slate-200">
                        <span className="font-semibold text-lg text-center max-md:text-md ">
                          ₦{item.price.toLocaleString()}
                        </span>
                        <button className="fle items-center gap-2  px-5 py-2.5  bg-green-800 text-white  rounded-lg  font-medium text-sm hover:bg-primary-container transition-colors active:scale-95 duration-200 hidden">
                          <span
                            className="material-symbols-outlined"
                            data-icon="shopping_cart"
                          >
                            {/* shopping_cart */}
                          </span>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-stack-lg flex justify-center items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="chevron_left"
                >
                  chevron_left
                </span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-md text-label-md">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
                3
              </button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
                12
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="chevron_right"
                >
                  chevron_right
                </span>
              </button>
            </div>
          </main>
        </div>

        <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] h-20 px-4 pb-4 flex justify-around items-center">
          <Link
            className="flex flex-col items-center justify-center text-indigo-600 gap-1 active:scale-95 duration-200"
            to="/"
          >
            <span className="material-symbols-outlined" data-icon="home_max">
              home_max
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider">
              Home
            </span>
          </Link>
          <a
            className="flex flex-col items-center justify-center text-slate-400 gap-1 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="grid_view">
              grid_view
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider">
              Categories
            </span>
          </a>
          <a
            className="flex flex-col items-center justify-center text-slate-400 gap-1 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider">
              Account
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Shop;
