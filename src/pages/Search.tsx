import React, { useEffect, useState, useCallback } from "react";
import { Search as SearchIcon, Grid3X3, List as ListIcon, X, SlidersHorizontal } from "lucide-react";
import { useQueryProduct } from "../../lib/useQuery";
import type { AllProductType } from "../../types/product.types";
import Loader from "../../components/Loader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import API from "../../api/api";
import type { AxiosError } from "axios";
import SearchFilter from "../../components/ui/SearchFilter";
import Grid from "../../components/ui/SearchGridProduct";
import List from "../../components/ui/SearchListProduct";
import { useSearchParams } from "react-router-dom";
import SearchNav from "../../components/ui/SearchNav";

export const PlaceholderCard = () => (
  <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs overflow-hidden">
    <Skeleton height={180} className="w-full rounded-xl mb-4" />
    <Skeleton height={20} width="75%" className="mb-2" />
    <Skeleton height={14} width="45%" className="mb-4" />
    <Skeleton height={22} width="35%" className="mb-4" />
    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
      <Skeleton height={14} width="25%" />
      <Skeleton height={14} width="20%" />
    </div>
  </div>
);

const Search = () => {
  const { data, isLoading } = useQueryProduct(`/products`);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState<AllProductType[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [category, setCategory] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const searchProduct = searchParams.get("product");

  const categories = ["All", ...(data?.categories || [])];

  if (searchProduct) setQuery(searchProduct)
  // Sync initial query & category state safely from search params on mount
 // useEffect(() => {
  //  if (searchProduct && searchProduct !== query) {
 //     setQuery(searchProduct);
 //   }
  //  if (categoryFilter && categoryFilter !== category) {
  //    setCategory(categoryFilter);
  //  }
  // }, [searchProduct, categoryFilter]);

  // Sync fetched product data when initial load finishes
//  useEffect(() => {
 //   if (data?.data && searchData.length === 0 && !query) {
   //   setSearchData(data.data);
 //   }
//  }, [data]);

  // Search API Call
  const handleSearch = useCallback(async () => {
    try {
      const endpoint = query ? `/products?search=${query}` : `/products`;
      const res = await API(endpoint);
      const {data} = await res.data || [];
      setSearchData(data);
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error(errorMessage.message);
    }
  }, [query]);

  // Category Search Handler
  const categorySearch = async (category: string) => {
    setCategory(category);
    // setSearchParams(
    //  selectedCategory === "All" ? {} : { category: selectedCategory }
  //  );

    setSearchParams({category})
    try {
     // const endpoint =
       // selectedCategory === "All"
         // ? `/products`
         // : `/products/category?search=${selectedCategory}`;
      const res = await API(`/products/category?search=${category}`);
      const resData = res.data?.data || [];
      setSearchData(resData);
    } catch (error) {
      console.error(error);
    }
  };

  if (categoryFilter) categorySearch(categoryFilter)

  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
    if (data?.data) setSearchData(data.data);
  };

  // Debounce text search query
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-12">
      {isLoading && searchData.length === 0 ? (
        <Loader />
      ) : (
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-24">
              <SearchFilter
                categories={categories}
                searchOnChange={searchOnChange}
                categorySearchBtn={categorySearch}
                category={category}
                setCategory={setCategory}
                query={query}
              />
            </aside>

            {/* Mobile Filter Drawer Overlay */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden flex">
                <div
                  className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
                  onClick={() => setIsMobileFilterOpen(false)}
                />
                <div className="relative w-full max-w-xs bg-white h-full p-6 shadow-2xl z-10 overflow-y-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <h2 className="font-extrabold text-slate-900 text-lg">Filters</h2>
                    <button
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="p-1 rounded-full text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <SearchFilter
                    categories={categories}
                    searchOnChange={searchOnChange}
                    categorySearchBtn={(cat) => {
                      categorySearch(cat);
                      setIsMobileFilterOpen(false);
                    }}
                    category={category}
                    setCategory={setCategory}
                    query={query}
                  />
                </div>
              </div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 w-full min-w-0">
              
              {/* Top Search & Controls Bar */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 sm:p-5 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Search Input Box */}
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
                        onClick={clearSearch}
                        className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60"
                        title="Clear"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Actions Right: Mobile Filter Button & View Switcher */}
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
                    <button
                      onClick={() => setIsMobileFilterOpen(true)}
                      className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                      <span>Filters</span>
                    </button>

                    {/* View Switcher Toggle */}
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

                {/* Horizontal Categories Scroll */}
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

              {/* Product Results Grid/List */}
              <div className="min-h-[400px]">
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
              </div>
            </main>
          </div>

          <SearchNav />
        </div>
      )}
    </div>
  );
};

export default Search;
