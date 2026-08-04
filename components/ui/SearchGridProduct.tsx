import { Link } from "react-router-dom";
// import { IoMdHeartEmpty } from "react-icons/io";
import Loader from "../Loader";

import NoProduct from "./NoProduct";
import type { AllProductType } from "../../types/product.types";
import AddToCart from "./AddToCart";

type SearchProductsType = {
  isLoading?: boolean;
  searchData: AllProductType[] | [];
  category?: string;
};

const Grid = ({ isLoading, searchData, category }: SearchProductsType) => {
  const resolveImage = (
    img: string | File | null | undefined,
    fallback: string,
  ) =>
    typeof img === "string"
      ? img
      : img instanceof File
        ? URL.createObjectURL(img)
        : fallback;
  return (
    <>
      {isLoading && searchData.length == 0 ? (
        <Loader />
      ) : (
        <>
          {searchData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 ">
                {searchData.map((item: AllProductType) => (
                  <>
                    <div
                      key={item?._id}
                      className="group bg-white rounded-2x overflow-hidden  flex flex-col text-sm sm:text-base border-b-1.5 rounded-lg  border-b-slate-200 shadow-md"
                    >
                      <div className="bg-white p-4 rounded-md hover:shadow-lg transition">
                        <Link
                          to={`/products/${item.category}/${item.subCategory}/${item.slug}`}
                          className="relative"
                        >
                          <img
                            src={resolveImage(item?.images[0], "")}
                            alt="product"
                            className="w-full h-74 max-md:h-85  object-cover rounded-md"
                          />

                          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -25%
                          </span>
                        </Link>

                        <div className="mt-4">
                          <div className="space-y-1">
                            <Link
                              to={`/products/${item.category}/${item.subCategory}/${item.slug}`}
                              className="text-sm text-gray-500 font-medium mb-2 line-clamp-2 capitalize"
                            >
                              {item?.subCategory}
                            </Link>
                            <Link
                              to={`/products/${item.category}/${item.subCategory}/${item.slug}`}
                              className="font-medium line-clamp-2 max-lg:text-lg mb-10 "
                            >
                              {item?.name}
                            </Link>
                            <Link
                              to={`/products/${item.category}/${item.subCategory}/${item.slug}`}
                              className="text-sm text-gray-500 mb-4 line-clamp-2 wrap-break-word hidden"
                            >
                              {item?.description}
                            </Link>
                          </div>

                          <div className="flex items-center gap-2 mt-2 hidden">
                            <div className="flex text-yellow-500">
                              ⭐⭐⭐⭐⭐
                            </div>

                            <span className="text-sm text-blue-600">2,340</span>
                          </div>

                          <div className="mt-2 flex justify-between items-center">
                            <div>
                              <p className="text-xl font-bold">
                                ₦{item?.price?.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-500 line-through">
                                ₦{(item?.price * 1.12).toLocaleString()}
                              </p>
                            </div>

                            <AddToCart
                              quantity={item?.quantity}
                              id={item?._id}
                              category={item?.category}
                              price={item?.price}
                              image={resolveImage(item?.images[0], "")}
                              name={item?.name}
                              slug={item?.slug}
                              subCategory={item?.subCategory}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="mt-stack-lg flex justify-center items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon="chevron_left"
                  >
                    {/* chevron_left */}
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
                    {/* chevron_right */}
                  </span>
                </button>
              </div>
            </>
          ) : (
            <NoProduct category={category} />
          )}
        </>
      )}
    </>
  );
};

export default Grid;
