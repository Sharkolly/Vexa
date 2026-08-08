import type { AllProductType } from "../../types/product.types";
import NoProduct from "./NoProduct";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

type SearchProductsType = {
  isLoading?: boolean;
  searchData: AllProductType[] | [];
  category?: string;
};

const List = ({ isLoading, searchData, category }: SearchProductsType) => {
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
      {isLoading && !searchData ? (
        <Loader />
      ) : (
        <>
          {searchData.length > 0 ? (
            <>
              <div className="flex flex-col gap-5 overflow-x-hidden max-sm:overflow-x-hidden">
                {/* <div className="flex flex-co flex-wrap justify-between  gap- gap-y-8"> */}
                {searchData.map((item: AllProductType) => (
                  <div
                    className="flex flex-row gap-4 border-b-1.5 rounded-lg  border-b-slate-200 shadow-md max-md:gap-2 md:p-5 p-2 py-4"
                    key={item._id}
                  >
                    <Link
                      to={`/products/${item.category}/${item.subCategory}/${item.slug}`}
                      className="relative max-md:flex-1 max-md:w-full"
                    >
                      <img
                        src={resolveImage(item?.images[0], "")}
                        alt="product"
                        className="sm:h-64 md:w-64 sm:w-56 w-6/12 h-60 object-cover rounded-md"
                      />

                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -25%
                      </span>
                    </Link>

                    <div className="md:flex-1 flex flex-col justify-between flex-none max-md:w-6/12">
                      <div className="space-y-1 mt-4 max-md:mt-0">
                        <Link
                          to={`/products/${item.category}/${item.subCategory}/${item.slug}`}
                          className="text-sm text-gray-500 font-medium capitalize line-clamp-2 capitalize"
                        >
                          {item?.subCategory}
                        </Link>
                        <Link
                          to={`/products/${item.category}/${item.subCategory}/${item.slug}`}
                          className="font-medium line-clamp-2 max-lg:text-lg mb- truncate"
                        >
                          {item?.name}
                        </Link>
                       

                        <p className="text-sm text-yellow-500 mt-1 hidden">
                          ⭐⭐⭐⭐☆ (4.5)
                        </p>

                        <p className="text-xl font-bold">
                          ₦{item?.price?.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 line-through">
                          ₦{(item?.price * 1.12).toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 max-md:mt-2">
                        <AddToCart
                          quantity={item?.quantity}
                          id={item?._id}
                          category={item?.category}
                          subCategory={item?.subCategory}
                          price={item?.price}
                          image={resolveImage(item?.images[0], "")}
                          name={item?.name}
                          slug={item?.slug}
                        />

                        <button className="border px-4 py-2 rounded-lg hidden">
                          ❤️ Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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

export default List;
