import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useQueryProduct } from "../../lib/useQuery";
import type { AllProductType } from "../../types/product.types";
import AddToCart from "./AddToCart";
import Loader from "../Loader";

const FeaturedProduct = () => {
  const { data, isLoading } = useQueryProduct("/products/min");

  const productItem: AllProductType[] = data?.data || [];

  const resolveImage = (
    img: string | File | null | undefined,
    fallback: string
  ) =>
    typeof img === "string"
      ? img
      : img instanceof File
        ? URL.createObjectURL(img)
        : fallback;

  return (
    <section className=" w-[90%] max-md:w-[95%] mx-auto px-4 py-12 pb-24">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/70">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-emerald-700" />
          <h2 className="text-2xl max-[440px]:text-lg sm:text-3xl font-black text-slate-900 tracking-tight">
            Featured Products
          </h2>
        </div>

        <Link
          to="/shop"
          className="group max-[440px]:hidden flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-all"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {isLoading && productItem.length === 0 ? (
        <div className="flex justify-center items-center py-16">
          <Loader />
        </div>
      ) : (
        /* Product Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productItem.map((product) => {
            const productSlug = product.slug || product._id;
            const productDetailUrl = `/products/${product.category.toLowerCase()}/${product.subCategory}/${productSlug}`;
            const imageSrc = resolveImage(
              product?.images?.[0],
              "https://placehold.co/400x400?text=No+Image"
            );

            // Calculated 12% markup for standard discount display
            const oldPrice = Math.round(product.price * 1.12);

            return (
              <div
                key={product._id || product.id}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div>
                  <Link
                    to={productDetailUrl}
                    className="relative block aspect-square overflow-hidden bg-slate-50"
                  >
                    <img
                      src={imageSrc}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Badge */}
                    <span className="absolute top-3 left-3 bg-rose-500 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wider">
                      -10% OFF
                    </span>
                  </Link>

                  {/* Content Details */}
                  <div className="p-4 sm:p-5">
                    <Link to={productDetailUrl} className="block group/title">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                        {product?.subCategory || product?.category}
                      </p>
                      <h3 className="font-semibold text-slate-800 text-base line-clamp-2 h-12 group-hover/title:text-emerald-700 transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Pricing */}
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-900">
                        ₦{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 line-through">
                        ₦{oldPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Footer Action */}
                <div className="p-4 sm:p-5 pt-0 mt-auto">
                  <AddToCart
                    AddToCartClassName="w-full bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    quantityNumberStyle="w-full flex items-center justify-between gap-2 bg-slate-50 border border-slate-200/80 p-1.5 rounded-xl shadow-xs"
                    quantity={product?.quantity}
                      id={product?._id}
                      category={product?.category}
                      price={product?.price}
                      image={resolveImage(product?.images[0], "")}
                      name={product?.name}
                      slug={product?.slug}

                    
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default FeaturedProduct
