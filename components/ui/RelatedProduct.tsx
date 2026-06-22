import { Link } from "react-router-dom";
import type { ProductType } from "../../types/product.types";
import AddToCart from "../../components/ui/AddToCart";

type RELATEDPRODUCT_TYPE = {
  relatedData: ProductType[] | [];
  isLoadingRelatedData?: boolean;
};

const RelatedProduct = ({
  relatedData,
//   isLoadingRelatedData,
}: RELATEDPRODUCT_TYPE) => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl mt-10 font-bold text-gray-900">You may also like</h2>

        <Link
          to="/shop"
          className="text-blue-600 hover:text-blue-700 text-sm  font-medium"
        >
          View All
        </Link>
      </div>

      <div className=" w-full max-md:overflow-x-auto  ">
        <div className="max-md:flex gap-5  min-w-max  max-md:items-center w-full md:grid md:grid-cols-4 max-lg:grid-cols-2  ">
          {relatedData &&
            relatedData.map((product, index) => (
              <div
                className="w-full max-md:w-75  bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 "
                key={index}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="md:w-60 h-50 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -15%
                  </span>

                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                    ❤️
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">
                    {product.category}
                  </p>

                  <h3 className="font-medium text-sm line-clamp-2 h-10">
                    {product.title}
                  </h3>

                  <div className="mt-3">
                    <p className="text-blue-700 font-bold text-lg">
                      ₦{product.price.toLocaleString()}{" "}
                    </p>

                    <p className="text-gray-400 text-sm line-through">
                      ₦{(product.price * 1.03).toLocaleString()}
                    </p>
                  </div>

                  {/* <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-sm  ">
                  Add To Cart
                </button> */}

                  <AddToCart
                    AddToCartClassName="w-full bg-nav-blue-active  text-white font-semibold py-2.5  mt-5 cursor-pointer rounded opacity- text-sm lg: group-hover:opacity-100 transition-opacity hidde lg: shadow flex items-center gap-2 justify-center"
                    quantityNumberStyle="w-full flex justify-between   items-center  mt-5  borde-1 border-orange-00 rounded-md py-1"
                    quantity={product?.quantity}
                    id={product?._id}
                    category={product?.category}
                    price={product?.price}
                    image={product?.image}
                    title={product?.title}
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
