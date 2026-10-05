import { Link } from "react-router-dom";

import Loader from "../Loader";
import NoProduct from "./NoProduct";
import AddToCart from "./AddToCart";
import type { AllProductType } from "../../types/product.types";

type SearchProductsType = {
  isLoading?: boolean;
  searchData: AllProductType[] | [];
  category?: string;
  query?: string;
};

const Grid = ({
  isLoading,
  searchData,
  category,
  query,
}: SearchProductsType) => {
  const resolveImage = (
    img: string | File | null | undefined,
    fallback: string,
  ) =>
    typeof img === "string"
      ? img
      : img instanceof File
        ? URL.createObjectURL(img)
        : fallback;

  if (isLoading && !searchData) {
    // if (isLoading && searchData.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader />
      </div>
    );
  }

  const searchCategoryOrProduct = query ? query : (category ?? "");

  if (!searchData || searchData.length === 0) {
    return <NoProduct category={searchCategoryOrProduct} />;
  }

  return (
    <div className="w-full">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
        {searchData.map((item: AllProductType) => {
          const productPath = `/products/${item.category?.toLowerCase()}/${item.subCategory}/${item.slug}/${item._id}`;

          return (
            <div
              key={item?._id}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image & Badges */}
                <div className="relative bg-slate-100 aspect-square overflow-hidden">
                  <Link to={productPath}>
                    <img
                      src={resolveImage(item?.images[0], "")}
                      alt={item?.name || "Product"}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </Link>

                  {/* Discount Badge */}
                  <span className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    -25% OFF
                  </span>
                </div>

                {/* Product Metadata */}
                <div className="p-5 max-[500px]:px-2">
                  <Link
                    to={productPath}
                    className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1 block hover:underline"
                  >
                    {item?.subCategory}
                  </Link>

                  <Link to={productPath}>
                    <h3 className="font-bold text-slate-900 text-base line-clamp-2 h-12 leading-snug group-hover:text-emerald-700 transition-colors">
                      {item?.name}
                    </h3>
                  </Link>
                </div>
              </div>

              {/* Price & Add to Cart Container */}
              <div className="px-5 pb-5 pt-0 max-[500px]:px-2">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xl font-extrabold text-emerald-700 tracking-tight max-[500px]:text-sm">
                      ₦{item?.price?.toLocaleString()}
                    </p>
                    <p className="text-xs font-medium text-slate-400 line-through">
                      ₦{(item?.price * 1.12).toLocaleString()}
                    </p>
                  </div>

                  <AddToCart
                    quantity={item?.quantity}
                    _id={item?._id ?? ""}
                    subCategory={item?.subCategory ?? ""}
                    category={item?.category}
                    price={item?.price}
                    image={resolveImage(item?.images[0], "")}
                    name={item?.name}
                    slug={item?.slug}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
    </div>
  );
};

export default Grid;
