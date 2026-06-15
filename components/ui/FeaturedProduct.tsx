import { Link } from "react-router-dom";
// import { product_data } from "../../data/product";
import { useQueryProduct } from "../../lib/useQuery";
import type { ProductType } from "../../types/product.types";
import AddToCart from "./AddToCart";

const FeaturedProduct = () => {
  const { data } = useQueryProduct("/products/min");

  const productItem: ProductType[] = data?.data || [];

  return (
    <section className="w-[90%] max-md:w-[95%] mx-auto px-4 pb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl text-nav-blue-active/90  font-bold">
          Featured Products
        </h2>

        <Link to="/shop" className="text-blue-700 max-md:hidden font-semibold">
          View More 
          &gt;
        </Link>
        <Link to="/shop" className="text-blue-700 text-xl md:hidden font-semibold">
          &gt;
        </Link>
      </div>

      <div className="grid  sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {productItem.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <Link
              to={`/products/product/${product?._id}`}
              className="relative overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover hover:scale-105 transition duration-300"
              />

              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                -20%
              </span>
            </Link>

            <div className="p-5">
              <Link to={`/products/product/${product?._id}`}>
                <p className="text-sm text-gray-500">Electronics</p>
                <h3 className="font-medium h-14  text-lg mt-1 line-clamp-3">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-yellow-500 text-sm hidden">
                  ⭐⭐⭐⭐⭐
                  <span className="text-gray-500">(4.8)</span>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-bold">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400 line-through">
                    {/* {product.oldPrice} */}₦
                    {(product.price * 1.08).toLocaleString()}
                  </p>
                </div>
              </Link>

              <div className="flex w-full gap-3 mt-5">
                {/* <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-xl font-semibold transition">
                  Add To Cart
                </button> */}

                <AddToCart
                  AddToCartClassName="w-full bg-blue-600  text-white font-semibold py-2 mt-2 cursor-pointer rounded opacity- text-sm lg: group-hover:opacity-100 transition-opacity hidde lg: shadow flex items-center gap-2 justify-center"
                  quantityNumberStyle="w-full flex justify-between mt-2  items-center    borde-1 border-orange-00 rounded-md py-1"
                  quantity={product?.quantity}
                  id={product?._id}
                  category={product?.category}
                  price={product?.price}
                  image={product?.image}
                  title={product?.title}
                />

                {/* <button className="border px-4 rounded-xl">❤️</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
