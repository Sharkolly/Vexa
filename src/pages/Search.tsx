import {
  Search as SearchIcon,
  Grid3X3,
  List as ListIcon,
  X,
} from "lucide-react";
import { useQueryProduct } from "../../lib/useQuery";
import type { AllProductType } from "../../types/product.types";
import Loader from "../../components/Loader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState, useCallback } from "react";
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
  const { data, isLoading } = useQueryProduct(`/products`);
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get("category") || "All";
  const searchParam = searchParams.get("product") || "";

  const [query, setQuery] = useState(searchParam);
  const [category, setCategory] = useState(categoryParam);
  const [searchData, setSearchData] = useState<AllProductType[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");

  const oldCategories = data?.categories || [];
  const categories = ["All", ...oldCategories];

  // Sync initial product data from query hook when loaded
  useEffect(() => {
    if (data?.data && searchData.length === 0 && !query && category === "All") {
      setSearchData(data.data);
    }
  }, [data, query, category, searchData.length]);

  // Keyword search function
  const handleSearch = useCallback(async (searchQuery: string) => {
    try {
      const res = await API(`/products?search=${searchQuery}`);
      setSearchData(res.data?.data || []);
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error(errorMessage.message);
    }
  }, []);

  // Category filter fetcher
  const categorySearch = async (selectedCategory: string) => {
    setCategory(selectedCategory);
    setSearchParams(
      selectedCategory === "All" ? {} : { category: selectedCategory }
    );

    try {
      const endpoint =
        selectedCategory === "All"
          ? `/products`
          : `/products/category?search=${selectedCategory}`;
      const res = await API(endpoint);
      setSearchData(res.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch products by category", error);
    }
  };

  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
    if (category === "All") {
      setSearchData(data?.data || []);
    } else {
      categorySearch(category);
    }
  };

  // Debounced keyword search
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        handleSearch(query);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, handleSearch]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {isLoading && searchData.length === 0 ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader />
        </div>
      ) : (
        <div>
          <div className="pt-24 lg:flex gap-6 max-md:flex-col lg:px-12 max-lg:px-6 max-xs:px-1.5 max-md:px-3 pb-20 md:pb-12">
            <SearchFilter
              categories={categories}
              categorySearchBtn={categorySearch}
              category={category}
              setCategory={setCategory}
              searchOnChange={searchOnChange}
              query={query}
            />

            <main className="flex-1 z-20 bg-transparent">
              {/* Search Header Bar */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 mb-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  {/* Search Input Box */}
                  <div className="relative flex items-center w-full sm:max-w-md bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 transition-all focus-within:bg-white focus-within:border-emerald-700 focus-within:ring-2 focus-within:ring-emerald-700/20">
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
                        onClick={clearSearch}
                        type="button"
                        className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
                        title="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* View Toggles (Grid / List) */}
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
                      <button
                        type="button"
                        onClick={() => setView("grid")}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          view === "grid"
                            ? "bg-white text-emerald-700 shadow-xs"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                        title="Grid View"
                      >
                        <Grid3X3 className="w-4 h-4" />
                        <span className="hidden sm:inline">Grid</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setView("list")}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          view === "list"
                            ? "bg-white text-emerald-700 shadow-xs"
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

                {/* Horizontal Category Pills Bar */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 max-md:overflow-x-auto pb-1 scrollbar-none">
                  {categories.map((item: string) => {
                    const isSelected = category === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => categorySearch(item)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all whitespace-nowrap active:scale-95 cursor-pointer ${
                          isSelected
                            ? "bg-emerald-700 text-white shadow-xs"
                            : "bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Product View Selection */}
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

          <SearchNav />
        </div>
      )}
    </div>
  );
};

export default Search;
