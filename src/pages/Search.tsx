import {
  Search as SearchIcon,
  Grid3X3,
  List as ListIcon,
  X,
  // SlidersHorizontal,
} from "lucide-react";
import { useQueryProduct } from "../../lib/useQuery";
import type { AllProductType } from "../../types/product.types";
import Loader from "../../components/Loader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import API from "../../api/api";
import type { AxiosError } from "axios";
import SearchFilter from "../../components/ui/SearchFilter";
import Grid from "../../components/ui/SearchGridProduct";
import List from "../../components/ui/SearchListProduct";
import { useSearchParams } from "react-router-dom";
import SearchNav from "../../components/ui/SearchNav";

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

const Search = () => {
const [searchParams, setSearchParams] = useSearchParams();

const categoryFilter = searchParams.get("category") || 'All';
  const searchProduct = searchParams.get("product");
  
  
  // const { data, isLoading } = useQueryProduct(`/products`);
  const { data, isLoading } = useQueryProduct(`/products/category?search=${categoryFilter}`);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState<AllProductType[] | []>(
    data?.data || [],
  );

  const oldCategories = data?.categories || [];
  const categories = ["All", ...oldCategories];

  const [view, setView] = useState<"grid" | "list">("grid");
  const [category, setCategory] = useState("All");

  
  if (searchProduct) setQuery(searchProduct);

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
      // console.log(data)
      setSearchData(data);
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error(errorMessage.message);
    }
  };

  const categorySearch = async (category: string) => {
    setCategory(category);
    setSearchParams({ category });
    if(category !== categoryFilter) {
    const res = await API(`/products/category?search=${category}`);
    const { data } = await res.data;
    setSearchData(data);
    }
  };

  if (categoryFilter) categorySearch(categoryFilter);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch();
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <>
      {isLoading && searchData.length == 0 ? (
        <Loader />
      ) : (
        <div>
          {/* <div className="bg-background text-on-background min-h-screen pb-24  md:pb-0"> */}
          <div className="bg-background text-on-background min-h-screen  md:pb-0">
            <div className="pt-24 lg:flex gap-5 max-md:flex-col lg:px-12 max-lg:px-7 px-3">
              <SearchFilter
                categories={categories}
                categorySearchBtn={categorySearch}
                category={category}
                setCategory={setCategory}
                searchOnChange={searchOnChange}
                query={query}
              />
              <main className="flex-1 z-25 mb-16 bg-white">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <div className="flex flex-co flex-row md:items-center justify-between  gap-4">
                    <div className="relative flex items-center w-full sm:max-w-md bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 transition-all focus-within:bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20">
                      <SearchIcon className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        type="search"
                        placeholder="Search products..."
                        value={query}
                        onChange={searchOnChange}
                        className="w-full px-2.5 bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                      />
                      {query && (
                        <button
                          // onClick={clearSearch}
                          className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60"
                          title="Clear"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center justify-between sm:justify-end sm:w-auto gap-3">
                      <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
                        <button
                          onClick={() => setView("grid")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            view === "grid"
                              ? "bg-white text-blue-600 shadow-xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                          title="Grid View"
                        >
                          <Grid3X3 className="w-4 h-4" />
                          <span className="hidden sm:inline">Grid</span>
                        </button>

                        <button
                          onClick={() => setView("list")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            view === "list"
                              ? "bg-white text-blue-600 shadow-xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                          title="List View"
                        >
                          <ListIcon className="w-4 h-4" />
                          <span className="hidden sm:inline">List</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {categories.map((item: string) => {
                      const isSelected = category === item;
                      return (
                        <button
                          key={item}
                          onClick={() => categorySearch(item)}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all whitespace-nowrap active:scale-95 cursor-pointer ${
                            isSelected
                              ? "bg-slate-900 text-white shadow-xs"
                              : "bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {view === "grid" ? (
                  <Grid
                    isLoading={isLoading}
                    category={category}
                    searchData={searchData}
                  />
                ) : (
                  <List
                    isLoading={isLoading}
                    category={category}
                    searchData={searchData}
                  />
                )}
              </main>
            </div>
          </div>

          <SearchNav />
        </div>
      )}
    </>
  );
};

export default Search;
