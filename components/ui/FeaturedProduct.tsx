import { Link } from "react-router-dom";
import { product_data } from "../../data/product";

const FeaturedProduct = () => {
  return (
      <section className="w-[90%] max-md:w-[95%] mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl text-nav-blue-active/90  font-bold">Featured Products</h2>

          <Link to='/shop' className="text-blue-700 font-semibold">View More</Link>
        </div>

        <div className="grid  sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {product_data.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-300"
                />

                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                  -20%
                </span>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">Electronics</p>

                <h3 className="font-semibold text-lg mt-1 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-yellow-500 text-sm hidden">
                  ⭐⭐⭐⭐⭐
                  <span className="text-gray-500">(4.8)</span>
                </div>

                <div className="mt-4">
                  <p className="text-2xl font-bold">{product.price}</p>

                  <p className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </p>
                </div>

                <div className="flex gap-3 mt-5">
                  <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition">
                    Add To Cart
                  </button>

                  <button className="border px-4 rounded-xl">❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default FeaturedProduct;
