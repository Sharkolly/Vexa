// import { CiSearch } from "react-icons/ci";
import { Search as SearchIcon, Grid3X3, List as ListIcon } from "lucide-react";
import { useQueryProduct } from "../../lib/useQuery";
import type { ProductType } from "../../types/product.types";
// import Loader from "../../components/Loader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import API from "../../api/api";
import type { AxiosError } from "axios";
import SearchFilter from "../../components/ui/SearchFilter";
import Grid from "../../components/ui/SearchGridProduct";
import List from "../../components/ui/SearchListProduct";
import { useSearchParams } from 'react-router-dom';

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
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState<ProductType[] | []>(
    data?.data || [],
  );

  const oldCategories = data?.categories || []
  const categories = ['All', ...oldCategories]

  const [view, setView] = useState<"grid" | "list">("grid");
  const [category, setCategory] = useState("All");

  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryFilter = searchParams.get('category');


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
      setSearchData(data);
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error(errorMessage.message);
    }
  };

  const categorySearch = async (category: string) => {
    setCategory(category);
    setSearchParams({ category});
    const res = await API(`/products/category?search=${category}`);
    const { data } = await res.data;
    setSearchData(data);    
  };
  
  if(categoryFilter) categorySearch(categoryFilter);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch();
    }, 700);

    return () => clearTimeout(timeout);
  }, [query ]);

  return (
    <div>
      <div className="bg-background text-on-background min-h-screen pb-24  md:pb-0">
        <div className="pt-24 flex max-w-container-max mx-auto gap-5 pb-32 max-md:pt-20   px-2  md:px-12 max-md:flex-col">
          <SearchFilter />
          <main className="flex-1 z-25 bg-white">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between  gap-4">
                <div className="flex items-center border rounded-xl px-3 py-2 w-full md:w-96">
                  <SearchIcon size={18} className="text-gray-500" />
                  <input
                    placeholder="Search products..."
                    className="w-full px-2 outline-none text-sm"
                    type="search"
                    value={query}
                    onChange={(e) => searchOnChange(e)}
                  />
                </div>
                <div className="flex items-center  gap-3 flex-">
                {/* <div className="flex items-start  gap-3 flex-"> */}
                  <select className="border rounded-xl px-3 py-2 text-sm outline-none">
                    <option>Sort: Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Rating</option>
                  </select>

                  {/* <div className='flex gap-4'> */}
                    <div className="flex border-2  border-nav-blue-active/80 rounded-xl overflow-hidden ">                      
                        <button
                          onClick={() => setView("grid")}
                          className={`p-2 ${
                            view === "grid"
                              ? "bg-nav-blue-active/80 text-white"
                              : "bg-white text-nav-blue-active/80" 
                          }`}
                        >
                          <Grid3X3 size={18} />
                        </button>

                      <button
                        onClick={() => setView("list")}
                        className={`p-2 ${
                          view === "list"
                            ? "bg-nav-blue-active/80 text-white"
                            : "bg-white text-nav-blue-active/80"
                        }`}
                      >
                        <ListIcon size={18} />
                      </button>
                    </div>

                  {/* <div className="flex flex-col  gap-1 w-full text-black  rounded ">
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                  </div> */}
                  {/* </div> */}


                  <button className="bg-gray-100 px-4 py-2 rounded-xl text-sm md:hidden">
                    Filters
                  </button>
                </div>
              </div>

              <div className="hidden md:flex gap-3 mt-4 flex-wrap">
                {categories.map((item: string) => (
                  <button
                    key={item}
                    className={`px-3 py-1 border rounded-full text-sm hove:bg-blue-700  hove:text-white ${category == item && "bg-black text-white "}`}
                    onClick={() => categorySearch(item)}
                  >
                    {item}
                  </button>
                ))}
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
    </div>
  );
};

export default Search;
