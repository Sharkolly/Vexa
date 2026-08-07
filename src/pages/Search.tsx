import { Search as SearchIcon, Grid3X3, List as ListIcon } from "lucide-react";
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
  const { data, isLoading } = useQueryProduct(`/products`);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState<AllProductType[] | []>(
    data?.data || [],
  );

  const oldCategories = data?.categories || [];
  const categories = ["All", ...oldCategories];

  const [view, setView] = useState<"grid" | "list">("grid");
  const [category, setCategory] = useState("All");

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFilter = searchParams.get("category");
  const searchProduct = searchParams.get("product");

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
    const res = await API(`/products/category?search=${category}`);
    const { data } = await res.data;
    setSearchData(data);
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
            <div className='pt-24 lg:flex gap-5 max-md:flex-col md:px-12 px-3'>
            {/* <div className="pt-24 flex max-w-container-max mx-auto gap-5 pb-32 max-md:pt-20 max-md:pb-26  px-2  md:px-12 max-md:flex-col"> */}
              {/* <div className="pt-24 flex max-w-container-max mx-auto gap-5 pb-32 max-md:pt-20   px-2  md:px-12 max-md:flex-col"> */}
              <SearchFilter categories={categories} categorySearchBtn={categorySearch} category={category} setCategory={setCategory} />
              <main className="flex-1 z-25 mb-12 bg-white">
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
                      <select className="border rounded-xl px-3 py-2 text-sm outline-none hidden">
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

                      <button className="bg-gray-100 px-4 hidden py-2 rounded-xl text-sm md:hidden">
                        Filters
                      </button>
                    </div>
                  </div>

                  <div className="flex  md:gap-3 gap-2  mt-4 flex-wrap">
                    {categories.map((item: string) => (
                      <button
                        key={item}
                        className={`px-3 py-1 border rounded-full text-sm hove:bg-blue-700  capitalize hove:text-white ${category == item && "bg-black text-white "}`}
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

          <SearchNav />
        </div>
      )}
    </>
  );
};

export default Search;
  // <div className="col-span-7 flex flex-col gap-6">
  //           <div className="aspect-[4/5] h-150 max-md:h-120 rounded-xl overflow-hidden shadow-sm group">
  //             <video
  //               className="w-full h-full object-cover"
  //               controls
  //               style={{ marginTop: "10px" }}
  //             >
  //               <source src={resolveVideo(product?.video)} />
  //             </video>
  //           </div>
  //           <div className="grid grid-cols-4 gap-6 h-70 ">
  //             {/* <MediaCarousel image={product?.images} video={product?.video} /> */}

  //             <div className="aspect-square rounded-lg overflow-hidden border border-outline-variant cursor-pointer hover:border-primary  transition-all">
  //               <img
  //                 className="w-full h-full object-cover"
  //                 data-alt={product?.description}
  //                 src={resolveImage(
  //                   product?.images?.[1] ?? undefined,
  //                   "https://lh3.googleusercontent.com/aida-public/AB6AXuADpcuApAMNwgTNOJuk0lE8Missb02pVKQbFi3oA_cyXAssxt5GcreNbWEFuDdo4ZVW3LaDWWC7jxoT60kK6VSslKL8LcCDS7YHvcqfjYwISqnsTqT18kOpV-eGpJUAh3E_dpheOaKTQ9pFzN_beS7ZboTw9R6UnBBACBqu5Fdhs6dfAm5WVDV5yVjCh_6J6k5_7MlSNhMR2J9mqHBdTQ9DkQQ8E7sDsyt9yKEydvb0tcllN8Z9V7Cv7FkEhYz16yRcbeyPENlTjjY",
  //                 )}
  //               />
  //             </div>
  //             <div className="aspect-square rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all">
  //               <img
  //                 className="w-full h-full object-cover"
  //                 data-alt={product?.description}
  //                 src={resolveImage(
  //                   product?.images?.[2] ?? undefined,
  //                   "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdm8CQYc8K8TM0rqNgSed97lMBqzGqd2tQ0IyCQ3DIRxXIRHbxI6SZOPJy5oWFmnJ7OJAw7o9XYqnI64ot2QiBj-6l6iLmILUbcqlfpCggOl4NWddh0GsamHKw_Kc5qFnPeSefrUQhRVYGm7xmKdn4gvFXXL-_4Du1vBT5ZNfcuxhSGnSPQzn6lsx3go2Ts3D-Ml1uzZTRvsp_EmGgVNKUgpTVueEghvrfyaJff9ZK73aVOeJniKFwKdNuQCEKOM-PVKL7yu-M3M",
  //                 )}
  //               />
  //             </div>
  //             <div className="aspect-square rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all">
  //               <img
  //                 className="w-full h-full object-cover"
  //                 data-alt={product?.description}
  //                 src={resolveImage(
  //                   product?.images?.[3] ?? undefined,
  //                   "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdm8CQYc8K8TM0rqNgSed97lMBqzGqd2tQ0IyCQ3DIRxXIRHbxI6SZOPJy5oWFmnJ7OJAw7o9XYqnI64ot2QiBj-6l6iLmILUbcqlfpCggOl4NWddh0GsamHKw_Kc5qFnPeSefrUQhRVYGm7xmKdn4gvFXXL-_4Du1vBT5ZNfcuxhSGnSPQzn6lsx3go2Ts3D-Ml1uzZTRvsp_EmGgVNKUgpTVueEghvrfyaJff9ZK73aVOeJniKFwKdNuQCEKOM-PVKL7yu-M3M",
  //                 )}
  //               />
  //             </div>
  //             <div className="aspect-square rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all flex items-center justify-center">
  //               {/* <span className="material-symbols-outlined text-outline text-3xl"> */}
  //               {/* play_circle */}
  //               {/* </span> */}
  //               <img
  //                 className="w-full rounded-sm object-cover group-hover:scale-105 transition-transform duration-700"
  //                 data-alt={product?.description}
  //                 src={resolveImage(
  //                   product?.images?.[0] ?? undefined,
  //                   "https://lh3.googleusercontent.com/aida-public/AB6AXuADpcuApAMNwgTNOJuk0lE8Missb02pVKQbFi3oA_cyXAssxt5GcreNbWEFuDdo4ZVW3LaDWWC7jxoT60kK6VSslKL8LcCDS7YHvcqfjYwISqnsTqT18kOpV-eGpJUAh3E_dpheOaKTQ9pFzN_beS7ZboTw9R6UnBBACBqu5Fdhs6dfAm5WVDV5yVjCh_6J6k5_7MlSNhMR2J9mqHBdTQ9DkQQ8E7sDsyt9yKEydvb0tcllN8Z9V7Cv7FkEhYz16yRcbeyPENlTjjY",
  //                 )}
  //               />{" "}
  //               *
  //             </div>
  //           </div>
  //         </div>
