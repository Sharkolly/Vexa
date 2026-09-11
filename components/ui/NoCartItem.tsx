import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const NoCartItem = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 h-screen py-12 text-center">
      {/* Graphic Container with Emerald Ring */}
      <div className="relative mb-6 flex items-center justify-center">
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-inner">
          <TiShoppingCart className="text-emerald-500/80 w-20 h-20 sm:w-24 sm:h-24 -translate-x-0.5" />
        </div>
        <span className="absolute top-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
      </div>

      {/* Messaging */}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
        Your Cart is Empty
      </h2>
      <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
        Your cart is currently empty, but there&apos;s plenty to discover. Browse
        through our categories, find your favorite products, and add them to get started.
      </p>

      {/* Primary Emerald Call to Action */}
      <Link
        to="/shop"
        className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-7 rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/30 active:scale-95 transition-all duration-200 text-base"
      >
        <span>Start Shopping</span>
      </Link>
    </div> 
  );
};

export default NoCartItem;