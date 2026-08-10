import React, { useEffect, useState, useCallback } from "react";
import { Search as SearchIcon, Grid3X3, List as ListIcon, X } from "lucide-react";
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
  const [searchParams, setSearchParams] = useSearchParams();

  // Lazily derive initial state from URL parameters without triggering extra renders
  const [query, setQuery] = useState(() => searchParams.get("product") || "");
  const [category, setCategory] = useState(() => searchParams.get("category") || "All");
  
  const [searchData, setSearchData] = useState<AllProductType[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");

  const categories = ["All", ...(data?.categories || [])];

  // API fetcher callback
  const fetchProducts = useCallback(async (searchQuery: string, catQuery: string) => {
    try {
      let endpoint = "/products";
      if (catQuery && catQuery !== "All") {
        endpoint = `/products/category?search=${encodeURIComponent(catQuery)}`;
      } else if (searchQuery) {
        endpoint = `/products?search=${encodeURIComponent(searchQuery)}`;
      }

      const res = await API(endpoint);
      setSearchData(res.data?.data || []);
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error("Search error:", errorMessage.message);
    }
  }, []);

  // Sync initial query data once loaded
  useEffect(() => {
    if (data?.data && !query && category === "All" && searchData.length === 0) {
      setSearchData(data.data);
    }
  }, [data, query, category, searchData.length]);

  // Debounced search trigger when state updates
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchProducts(query, category);
    }, 400);

    return () => clearTimeout(timeout);
  }, [query, category, fetchProducts]);

  // Controlled Category Handler
  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    
    const newParams = new URLSearchParams(searchParams);
    if (selectedCategory === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", selectedCategory);
    }
    setSearchParams(newParams);
  };

  // Controlled Search Input Handler
  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("product", value);
    } else {
      newParams.delete("product");
    }
    setSearchParams(newParams);
  };

  const clearSearch = () => {
    setQuery("");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("product");
    setSearchParams(newParams);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-16">
      {isLoading && searchData.length === 0 ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          
          {/* Top Custom Filter Component */}
          <div className="w-full mb-6">
            <SearchFilter
              categories={categories}
              searchOnChange={searchOnChange}
              categorySearchBtn={handleCategorySelect}
              category={category}
              setCategory={setCategory}
              query={query}
            />
          </div>

          {/* Top Controls Header */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 sm:p-5 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Search Bar Input */}
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
                    type="button"
                    onClick={clearSearch}
                    className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* View Switcher Toggle */}
              <div className="flex items-center justify-end w-full sm:w-auto">
                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
                  <button
                    type="button"
                    onClick={() => setView("grid")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      view === "grid"
                        ? "bg-white text-blue-600 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                    title="Grid View"
                  >
                    <Grid3X3 className="w-4 h-4" />
                    <span>Grid</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setView("list")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      view === "list"
                        ? "bg-white text-blue-600 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                    title="List View"
                  >
                    <ListIcon className="w-4 h-4" />
                    <span>List</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Category Tags Bar */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap">
              {categories.map((item: string) => {
                const isSelected = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleCategorySelect(item)}
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

          {/* Product Output Area */}
          <main className="min-h-[400px]">
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

          <SearchNav />
        </div>
      )}
    </div>
  );
};

export default Search;  /*
   * -------------------------------------------------------
   * Keep local state synchronized with URL
   *
   * IMPORTANT:
   * We do NOT call setQuery/setCategory directly in the
   * component render body.
   * -------------------------------------------------------
   */
  useEffect(() => {
    setQuery(searchProduct);
  }, [searchProduct]);

  useEffect(() => {
    setCategory(categoryFilter);
  }, [categoryFilter]);

  /*
   * -------------------------------------------------------
   * Fetch products
   *
   * This is the ONLY place where automatic searching happens.
   *
   * Rules:
   *
   * 1. Category + search text:
   *    /products?search=text
   *
   * 2. Category only:
   *    /products/category?search=category
   *
   * 3. Nothing selected:
   *    /products
   *
   * The request is debounced by 500ms.
   * -------------------------------------------------------
   */
  useEffect(() => {
    const timeout = window.setTimeout(async () => {
      try {
        setIsSearching(true);

        let response;

        /*
         * ---------------------------------------------------
         * Text search takes priority
         * ---------------------------------------------------
         */
        if (query.trim()) {
          response = await API(
            `/products?search=${encodeURIComponent(query.trim())}`
          );
        }

        /*
         * ---------------------------------------------------
         * Category search
         * ---------------------------------------------------
         */
        else if (categoryFilter && categoryFilter !== "All") {
          response = await API(
            `/products/category?search=${encodeURIComponent(
              categoryFilter
            )}`
          );
        }

        /*
         * ---------------------------------------------------
         * No filters
         * ---------------------------------------------------
         */
        else {
          response = await API("/products");
        }

        const products = response?.data?.data || [];

        setSearchData(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setSearchData([]);
      } finally {
        setIsSearching(false);
      }
    }, 500);

    /*
     * Cancel previous request timer whenever query/category
     * changes.
     */
    return () => {
      window.clearTimeout(timeout);
    };
  }, [query, categoryFilter]);

  /*
   * -------------------------------------------------------
   * Category selection
   * -------------------------------------------------------
   */
  const categorySearch = (selectedCategory: string) => {
    /*
     * Update local state immediately.
     */
    setCategory(selectedCategory);

    /*
     * Update URL.
     *
     * We preserve the product search parameter if it exists.
     */
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      /*
       * Selecting a category clears the text search.
       * This prevents the two filters from fighting each other.
       */
      params.delete("product");

      if (selectedCategory === "All") {
        params.delete("category");
      } else {
        params.set("category", selectedCategory);
      }

      return params;
    });

    /*
     * Clear the text search because category filtering and
     * text searching are treated as separate modes.
     */
    setQuery("");
  };

  /*
   * -------------------------------------------------------
   * Search input
   * -------------------------------------------------------
   */
  const searchOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    /*
     * Update input immediately.
     */
    setQuery(value);

    /*
     * When the user starts typing, remove category filtering.
     */
    setCategory("All");

    /*
     * Update URL.
     */
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      /*
       * Remove category because text search is now active.
       */
      params.delete("category");

      if (value.trim()) {
        params.set("product", value);
      } else {
        params.delete("product");
      }

      return params;
    });
  };

  /*
   * -------------------------------------------------------
   * Clear search
   * -------------------------------------------------------
   */
  const clearSearch = () => {
    setQuery("");

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      params.delete("product");

      return params;
    });
  };

  /*
   * -------------------------------------------------------
   * Initial loading
   * -------------------------------------------------------
   */
  if (isLoading && searchData.length === 0) {
    return <Loader />;
  }

  /*
   * -------------------------------------------------------
   * UI
   * -------------------------------------------------------
   */
  return (  const [searchParams, setSearchParams] = useSearchParams();
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
  // const handleSearch = useCallback(async () => {
  const handleSearch = async () => {
    try {
    //  const endpoint = query ? `/products?search=${query}` : `/products`;
      const res = await API(`/products?search=${query}`);
      const {data} = await res.data || [];
      setSearchData(data);
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error(errorMessage.message);
    }
  }
 // }, [query]);

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
      const resData = await res.data?.data || [];
      setSearchData(resData);
    } catch (error) {
      console.error(error);
    }
  };

  if (categoryFilter) categorySearch(categoryFilter)

  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

 // const clearSearch = () => {
  //  setQuery("");
 //   if (data?.data) setSearchData(data.data);
 // };

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
                    //    onClick={clearSearch}
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
