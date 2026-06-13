import type { ProductType } from "../../types/product.types";
import NoProduct from "./NoProduct";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

type SearchProductsType = {
  isLoading: boolean;
  searchData: ProductType[] | [];
  category?: string;
};

const List = ({ isLoading, searchData, category }: SearchProductsType) => {
  return (
    <>
      {isLoading && !searchData ? (
        <Loader />
      ) : (
        <>
          {searchData.length > 0 ? (
            <>
              <div className="flex flex-col gap-5">
                {/* <div className="flex flex-co flex-wrap justify-between  gap- gap-y-8"> */}
                {searchData.map((item: ProductType) => (                  
                  <div
                    className="flex flex-row gap-4 border-b-1.5 rounded-lg  border-b-slate-200 shadow-md md:p-5 p-2 py-4"
                    key={item._id}
                  >
                    <Link
                      to={`/products/product/${item._id}`}
                      className="relative"
                    >
                      <img
                        src={item?.image}
                        alt="product"
                        className="h-64 md:w-64 max-md:w-52 object-cover rounded-md"
                      />

                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -25%
                      </span>
                    </Link>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-1 mt-4 max-md:mt-0">
                        <Link
                          to={`/products/product/${item._id}`}
                          className="text-sm text-gray-500 font-medium line-clamp-2"
                        >
                          {item?.category}
                        </Link>
                        <Link
                          to={`/products/product/${item._id}`}
                          className="font-medium line-clamp-2 max-lg:text-lg"
                        >
                          {item?.title}
                        </Link>
                        <Link
                          to={`/products/product/${item._id}`}
                          className="text-sm text-gray-500 mb-2 md:mb-4 w-8/12 max-md:w-full line-clamp-2 max-md:line-clamp-3"
                        >
                          {item?.description}
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
                          price={item?.price}
                          image={item?.image}
                          title={item?.title}
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
