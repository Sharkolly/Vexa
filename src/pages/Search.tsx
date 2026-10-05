import {
  Search as SearchIcon,
  Grid3X3,
  List as ListIcon,
  X,
} from "lucide-react";
import { useProductsByCategory, useQueryProduct } from "../../lib/useQuery";
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
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SearchNav from "../../components/ui/SearchNav";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  const { category } = useParams();

  const [query, setQuery] = useState("");
  const [subCategory, setSubCategory] = useState(category || "all");
  const [searchData, setSearchData] = useState<AllProductType[] | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data,
    isLoading: ProductLoading,
    isFetching,
    // isError,
  } = useProductsByCategory(category, currentPage);
  const { data: CategoryData, isLoading } = useQueryProduct(
    `/products/all-category`,
  );
  const subCategories = CategoryData?.data || [];

  // Keyword search function
  const handleSearch = useCallback(async (searchQuery: string) => {
    try {
      const res = await API(`/products?search=${searchQuery}`);
      console.log(res);
      setSearchData(res.data?.data || []);
      setTotalPages(res.data?.totalPages || 1);
      setCurrentPage(res.data?.currentPage || 1);
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error(errorMessage.message);
    }
  }, []);

  const navigate = useNavigate();

  // Category filter fetcher
  const categorySearch = async (selectedCategory: string) => {
    navigate(`/search/category/${selectedCategory}`);
  };

  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");

    categorySearch(subCategory);
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

  const displayedSearchData = query
    ? (searchData ?? data?.data ?? [])
    : (data?.data ?? []);

  const displayedCurrentPage =
    (currentPage ?? 1) ? (data?.currentPage ?? 1) : 1;

  const displayedTotalPages = (totalPages ?? 1) ? (data?.totalPages ?? 1) : 1;

  if (totalPages < 1) return null;
  const getPages = () => {
    const pages: (number | "...")[] = [];
    if (displayedTotalPages <= 7) {
      for (let i = 1; i <= displayedTotalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
    if (displayedCurrentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", displayedTotalPages];
    }
    if (displayedCurrentPage >= displayedTotalPages - 3) {
      return [
        1,
        "...",
        displayedTotalPages - 4,
        displayedTotalPages - 3,
        displayedTotalPages - 2,
        displayedTotalPages - 1,
        displayedTotalPages,
      ];
    }
    return [
      1,
      "...",
      displayedCurrentPage - 1,
      displayedCurrentPage,
      displayedCurrentPage + 1,
      "...",
      displayedTotalPages,
    ];
  };
  const pages = getPages();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      {isLoading || isFetching || ProductLoading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader />
        </div>
      ) : (
        <div className="w-full">
          {/* Constrained layout container for big screens */}
          <div className="md:w-full mx-auto max-md:pt-24 pb-20 md:pb-12 max-lg:px-4 sm:pr-4.5 lg:pr-6 ">
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
              {/* Sidebar Filter Component */}
              <div className="w-full lg:w-64 shrink-0">
                <SearchFilter
                  categories={subCategories}
                  categorySearchBtn={categorySearch}
                  category={subCategory}
                  setCategory={setSubCategory}
                  searchOnChange={searchOnChange}
                  query={query}
                />
              </div>

              {/* Main Content Area */}
              <main className="flex-1 min-w-0 w-full md:pt-24 z-20 bg-transparent md:pl-4">
                {/* Search Header Bar */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 sm:p-5 mb-6">
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
                  <div className="mt-4 w-full pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {subCategories.map((item: string) => {
                      return (
                        <>
                          <NavLink
                            className={({
                              isActive,
                            }) => `px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all whitespace-nowrap active:scale-95 cursor-pointer  ${
                              isActive
                                ? "bg-emerald-700 text-white shadow-xs"
                                : "bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                            }
                        
                        `}
                            to={`/search/category/${item}`}
                          >
                            {item}
                          </NavLink>
                        </>
                      );
                    })}
                  </div>
                </div>

                {/* Product View Selection */}
                {view === "grid" ? (
                  <Grid
                    isLoading={isLoading}
                    category={subCategory}
                    searchData={displayedSearchData}
                    query={query}
                    />
                  ) : (
                    <List
                    isLoading={isLoading}
                    category={subCategory}
                    searchData={displayedSearchData}
                    query={query}
                  />
                )}

                {displayedSearchData && displayedSearchData.length > 0 && (
                  <div className="flex flex-col items-center gap-4 mt-10 mb-8">
                    <p className="text-sm text-gray-500">
                      Page{" "}
                      <span className="font-semibold text-gray-800">
                        {currentPage}{" "}
                      </span>
                      of{" "}
                      <span className="font-semibold text-gray-800">
                        {displayedTotalPages}
                      </span>
                    </p>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className=" flex items-center justify-center gap-1 h-10 px-3 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm font-medium transition-all hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed "
                      >
                        <FiChevronLeft size={17} />
                        <span className="hidden sm:inline">Previous</span>
                      </button>

                      {pages.map((page, index) => {
                        if (page === "...") {
                          return (
                            <span
                              key={`ellipsis-${index}`}
                              className=" flex items-center justify-center w-10 h-10 text-gray-400 text-sm   "
                            >
                              ...
                            </span>
                          );
                        }
                        const isActive = page === currentPage;
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={` flex items-center justify-center w-10 h-10 rounded-lg text-sm cursor-pointer font-medium transition-all ${isActive ? "bg-blue-600 text-white shadow-sm" : "bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600"} `}
                          >
                            {page}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className=" flex items-center justify-center gap-1 h-10 px-3 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm font-medium transition-all hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed "
                      >
                        <span className="hidden sm:inline">Next</span>
                        <FiChevronRight size={17} />
                      </button>
                    </div>
                  </div>
                )}
              </main>
            </div>
          </div>

          <SearchNav />
        </div>
      )}
    </div>
  );
};

export default Search;
