import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const NoCartItem = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div>
        <TiShoppingCart className="text-slate-300/90 w-60 h-60 md:w-72 md:h-72" />
      </div>
      <p className="text-4xl text-black text-center mb-2  font-semibold  ">
        Your Cart is Empty
      </p>
      <p className="text-center text-gray-500 mt-2 mb-6 w-5/12 max-lg:w-10/12  ">
        Your cart is currently empty, but there's plenty to discover. Browse
        through our categories, find your favorite products, and add them to
        your cart to get started.
      </p>

      <Link
        className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2.5 px-5 rounded"
        to="/shop"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default NoCartItem;
