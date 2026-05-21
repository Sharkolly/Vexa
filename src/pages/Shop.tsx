import { CiSearch } from "react-icons/ci";
import { useQueryProduct } from "../../lib/useQuery";
import type { ProductType } from "../../types/product.types";
// import Loader from "../../components/Loader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import API from "../../api/api";
import type { AxiosError } from "axios";
import ShopFilter from "../../components/ui/ShopFilter";
import ShopProducts from "../../components/ui/ShopProducts";

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
    try {
      const res = await API(`/products?search=${query}`);
      const { data } = await res.data;
      setShopData(data);
    } catch (error) {
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
          <ShopFilter />
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
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-nav-blue-active transition-colors text-xlgithub"
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

            <ShopProducts isLoading={isLoading} shopData={shopData} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
