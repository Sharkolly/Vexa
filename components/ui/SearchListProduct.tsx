import { Link } from "react-router-dom";
import type { AllProductType } from "../../types/product.types";
import NoProduct from "./NoProduct";
import Loader from "../Loader";
import AddToCart from "./AddToCart";

type SearchProductsType = {
  isLoading?: boolean;
  searchData: AllProductType[] | [];
  category?: string;
};

const List = ({ isLoading, searchData, category }: SearchProductsType) => {
  const resolveImage = (
    img: string | File | null | undefined,
    fallback: string
  ) =>
    typeof img === "string"
      ? img
      : img instanceof File
      ? URL.createObjectURL(img)
      : fallback;

  if (isLoading && (!searchData || searchData.length === 0)) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader />
      </div>
    );
  }

  if (!searchData || searchData.length === 0) {
    return <NoProduct category={category} />;
  }

  return (
    <div className="w-full flex flex-col gap-5 pb-12">
      {searchData.map((item: AllProductType) => {
        const productPath = `/products/${item.category?.toLowerCase()}/${item.subCategory}/${item.slug}`;

        return (
          <div
            key={item._id}
            className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-3 sm:p-5 flex flex-row gap-4 sm:gap-6 items-stretch"
          >
            {/* Left: Product Image (Wider & Taller Frame) */}
            <div className="relative w-44 max-[500x]:w-30 sm:w-64 md:w-72 max-[500px]:h-48 sm:h-64 md:h-68 h-54 shrink-0 rounded-xl overflow-hidden bg-slate-100">
              <Link to={productPath} className="block w-full h-full">
                <img
                  src={resolveImage(item?.images[0], "")}
                  alt={item?.name || "Product image"}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </Link>

              {/* Discount Tag */}
              <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-rose-500 text-white text-[10px] font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
                -25% OFF
              </span>
            </div>

            {/* Right: Product Details */}
            <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
              <div>
                {/* Category Header */}
                <Link
                  to={productPath}
                  className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1 block truncate hover:underline"
                >
                  {item?.subCategory}
                </Link>

                {/* Product Title */}
                <Link to={productPath}>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-lg line-clamp-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    {item?.name}
                  </h3>
                </Link>

                {/* Description Preview on larger screens */}
           {/*     {item?.description && (
                  <p className="text-xs text-slate-500 line-clamp-2 sm:line-clamp-3 mt-2 hidden leading-relaxed">
                    {item.description}
                  </p>
                )}
                */}
              </div>

              {/* Pricing & Add to Cart Container */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col justify-between gap-3 ">
                <div>
                  <p className="text-base sm:text-xl font-extrabold text-emerald-700 tracking-tight">
                    ₦{item?.price?.toLocaleString()}
                  </p>
                  <p className="text-xs font-medium text-slate-400 line-through">
                    ₦{(item?.price * 1.12).toLocaleString()}
                  </p>
                </div>

                <div className='max-sm:w-full'>
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
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
