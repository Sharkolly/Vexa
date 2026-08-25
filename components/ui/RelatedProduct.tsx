import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import type { AllProductType } from "../../types/product.types";
import AddToCart from "../../components/ui/AddToCart";

type RelatedProductProps = {
  relatedData: AllProductType[] | [];
  isLoadingRelatedData?: boolean;
};

const RelatedProduct = ({ relatedData }: RelatedProductProps) => {
  const resolveImage = (
    img: string | File | null | undefined,
    fallback: string
  ) =>
    typeof img === "string"
      ? img
      : img instanceof File
      ? URL.createObjectURL(img)
      : fallback;

  if (!relatedData || relatedData.length === 0) return null;

  return (
    <section className="mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            You May Also Like
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Handpicked items matching your current view
          </p>
        </div>

        <Link
          to="/shop"
          className="text-emerald-700 hover:text-emerald-800 text-sm font-bold flex items-center gap-1 transition-colors"
        >
          <span>View All</span>
          <span className="text-xs">&rarr;</span>
        </Link>
      </div>

      {/* Product List Grid / Responsive Scroll */}
      <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-w-max md:min-w-0">
          {relatedData.map((product, index) => {
            const productPath = `/products/${product.category.toLowerCase()}/${product.subCategory}/${product.slug || product._id}`;
            const isDiscounted = true; // Example flag for discount visual

            return (
              <div
                className="group w-72 sm:w-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                key={product._id || index}
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative overflow-hidden bg-slate-100 aspect-square">
                    <Link to={productPath}>
                      <img
                        src={resolveImage(product?.images[0], "")}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </Link>

                    {/* Sale Badge */}
                    {isDiscounted && (
                      <span className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        -15% OFF
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      aria-label="Add to Wishlist"
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-slate-600 hover:text-rose-500 hover:bg-white transition-all shadow-sm"
                    >
                      <FiHeart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-5">
                    <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                      {product.subCategory}
                    </p>

                    <Link to={productPath}>
                      <h3 className="font-bold text-slate-900 text-base line-clamp-2 h-12 leading-snug group-hover:text-emerald-700 transition-colors">
                        {product?.name}
                      </h3>
                    </Link>

                    {/* Pricing */}
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-emerald-700 font-extrabold text-lg tracking-tight">
                        ₦{product.price.toLocaleString()}
                      </span>
                      <span className="text-slate-400 text-xs line-through font-medium">
                        ₦{(product.price * 1.03).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <div className="px-5 pb-5">
                  <AddToCart
                    AddToCartClassName="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2.5 rounded-xl text-sm transition-all shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                    quantityNumberStyle="w-full flex justify-between items-center mt-2 border border-slate-200 rounded-xl py-1 px-2"
                    quantity={product?.quantity}
                    slug={product?.slug}
                    category={product?.category}
                    image={resolveImage(product?.images[0], "")}
                    name={product?.name}
                    price={product?.price}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
