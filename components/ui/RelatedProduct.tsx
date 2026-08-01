import { Link } from "react-router-dom";
import type { AllProductType } from "../../types/product.types";
import AddToCart from "../../components/ui/AddToCart";

type RELATEDPRODUCT_TYPE = {
  relatedData: AllProductType[] | [];
  isLoadingRelatedData?: boolean;
};

const RelatedProduct = ({
  relatedData,
  //   isLoadingRelatedData,
}: RELATEDPRODUCT_TYPE) => {
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
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">You may also like</h2>

        <Link
          to="/shop"
          className="text-blue-600 hover:text-blue-700 text-sm  font-medium"
        >
          View All
        </Link>
      </div>

      <div className=" w-full overflow-x-auto  ">
        <div className="max-md:flex gap-5 grid grid-cols-4 min-w-max  max-md:items-center w-full overflow-x-auto max-md:scrollbar-hide  ">
          {relatedData &&
            relatedData.map((product, index) => (
              <div
                className="w-full max-2xl:w-90 max-md:w-75  bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 "
                key={index}
              >
                <Link
                  className="relative"
                  to={`/products/${product.category.toLowerCase()}/${product.subCategory}/${product.slug || product._id}`}
                >
                  <img
                    src={resolveImage(product?.images[0], "")}
                    alt={product.name}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -15%
                  </span>

                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                    ❤️
                  </button>
                </Link>

                <div className="p-4">
                  <Link
                    to={`/products/${product.category.toLowerCase()}/${product.subCategory}/${product.slug || product._id}`}
                  >
                    <p className="text-xs text-gray-500 mb-1 capitalize">
                      {product.subCategory}
                    </p>

                    <h3 className="font-medium text-sm line-clamp-2 h-10">
                      {product?.name}
                    </h3>

                    <div className="mt-3">
                      <p className="text-blue-700 font-bold text-lg">
                        ₦{product.price.toLocaleString()}{" "}
                      </p>

                      <p className="text-gray-400 text-sm line-through">
                        ₦{(product.price * 1.03).toLocaleString()}
                      </p>
                    </div>
                  </Link>

                  <AddToCart
                    AddToCartClassName="w-full bg-nav-blue-active  text-white font-semibold py-2.5  mt-5 cursor-pointer rounded opacity- text-sm lg: group-hover:opacity-100 transition-opacity hidde lg: shadow flex items-center gap-2 justify-center"
                    quantityNumberStyle="w-full flex justify-between   items-center  mt-5  borde-1 border-orange-00 rounded-md py-1"
                    quantity={product?.quantity}
                    slug={product?.slug}
                    category={product?.category}
                    image={resolveImage(product?.images[0], "")}
                    name={product?.name}
                    price={product?.price}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
