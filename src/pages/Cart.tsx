import { Link } from "react-router-dom";
import { MdLocalShipping, MdSync, MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import type { ProductType } from "../../types/product.types";
import {
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../../store/product.slice";
import type { AppDispatch } from "../../store/index";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import NoCartItem from "../../components/ui/NoCartItem";
import SearchNav from "../../components/ui/SearchNav";

type RootState = {
  product: {
    addToCart: ProductType[];
    total: {
      totalPrice: number;
      totalItems: number;
      overallTotal: number;
      totalDelivery?: number;
    };
  };
};

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart
  );
  const total = useSelector((state: RootState) => state.product.total);

  const incrementProductQuantity = (slug: string = "") => {
    dispatch(incrementQuantity({ slug }));
  };

  const decrementProductQuantity = (slug: string = "", quantity: number) => {
    dispatch(decrementQuantity({ slug }));

    if (quantity - 1 <= 0) {
      dispatch(removeCart({ slug }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased">
      {CartedProduct.length > 0 ? (
        <main className="pt-20 pb-24 max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 xl:px-16">
          {/* HEADER */}
          <div className="border-b border-slate-200/80 pb-5 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Shopping Cart
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Review your items and proceed to checkout when ready.
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors w-fit"
              to="/shop"
            >
              <IoMdArrowBack className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
            {/* LEFT COLUMN: PRODUCT LIST / TABLE */}
            <div className="xl:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-shadow hover:shadow-md">
                {/* DESKTOP TABLE */}
                <table className="w-full border-collapse hidden md:table">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-600 text-xs uppercase tracking-wider font-semibold">
                      <th className="text-left py-4 px-6">Product</th>
                      <th className="text-center py-4 px-4">Price</th>
                      <th className="text-center py-4 px-4">Quantity</th>
                      <th className="text-right py-4 px-6">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {CartedProduct.map((product: ProductType) => (
                      <tr
                        key={product.slug}
                        className="group hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0">
                              <img
                                className="w-full h-full object-cover"
                                src={product.image}
                                alt={product.name}
                              />
                            </div>
                            <div className="space-y-1">
                              <Link
                                to={`/products/${product.category}/${product.subCategory}/${product.slug}`}
                                className="font-semibold text-slate-900 hover:text-emerald-700 transition-colors line-clamp-1"
                              >
                                {product.name}
                              </Link>
                              <p className="text-xs text-slate-500 capitalize">
                                {product.category} / {product.subCategory}
                              </p>
                              <button
                                className="text-xs text-rose-600 hover:text-rose-700 font-medium inline-flex items-center gap-1 pt-1 transition-colors cursor-pointer"
                                onClick={() =>
                                  dispatch(removeCart({ slug: product.slug }))
                                }
                              >
                                <RiDeleteBinLine className="w-3.5 h-3.5" />
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="py-5 px-4 text-center font-mono font-medium text-slate-700">
                          ₦{product.price.toLocaleString()}
                        </td>

                        <td className="py-5 px-4">
                          <div className="flex items-center justify-center">
                            <div className="inline-flex items-center border border-slate-200 rounded-xl bg-white shadow-xs overflow-hidden">
                              <button
                                className="px-3 py-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                                onClick={() =>
                                  decrementProductQuantity(
                                    product.slug,
                                    product.quantity
                                  )
                                }
                              >
                                -
                              </button>
                              <span className="px-3 py-1.5 font-mono font-semibold text-slate-900 border-x border-slate-200 text-xs">
                                {product.quantity}
                              </span>
                              <button
                                className="px-3 py-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                                onClick={() =>
                                  incrementProductQuantity(product.slug)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="py-5 px-6 text-right font-mono font-bold text-slate-900">
                          ₦{product?.new_price?.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* MOBILE LIST VIEW */}
                <div className="md:hidden divide-y divide-slate-100">
                  {CartedProduct.map((product: ProductType) => (
                    <div key={product.slug} className="p-4 space-y-3">
                      <div className="flex gap-3">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0">
                          <img
                            alt={product.name}
                            className="w-full h-full object-cover"
                            src={product.image}
                          />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1">
                          <Link
                            to={`/products/${product.category}/${product.subCategory}/${product.slug}`}
                          >
                            <h3 className="font-semibold text-sm text-slate-900 truncate">
                              {product.name}
                            </h3>
                            <p className="text-xs text-slate-500 capitalize">
                              {product.category} / {product.subCategory}
                            </p>
                          </Link>

                          <div className="flex justify-between items-center pt-1">
                            <p className="text-xs font-mono text-slate-600">
                              ₦{product.price.toLocaleString()}
                            </p>
                            <span className="hidden min-[500px]:flex items-center gap-1 text-xs text-slate-400">
                              <span>Qty: {product.quantity}</span>
                              <MdArrowRightAlt />
                            </span>
                            <p className="font-mono font-bold text-sm text-slate-900">
                              ₦
                              {product.new_price
                                ? product.new_price.toLocaleString()
                                : "0"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="inline-flex items-center border border-slate-200 rounded-xl bg-white shadow-xs overflow-hidden">
                          <button
                            className="px-3 py-1 text-slate-500 hover:bg-slate-100 cursor-pointer text-xs"
                            onClick={() =>
                              decrementProductQuantity(
                                product.slug,
                                product.quantity
                              )
                            }
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-mono font-semibold text-slate-900 border-x border-slate-200 text-xs">
                            {product.quantity}
                          </span>
                          <button
                            className="px-3 py-1 text-slate-500 hover:bg-slate-100 cursor-pointer text-xs"
                            onClick={() =>
                              incrementProductQuantity(product.slug)
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="text-xs text-rose-600 hover:text-rose-700 font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
                          onClick={() =>
                            dispatch(removeCart({ slug: product.slug }))
                          }
                        >
                          <RiDeleteBinLine className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY */}
            <aside className="w-full">
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm sticky top-6">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-4 mb-5">
                  Order Summary
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center text-slate-600 font-medium">
                    <span>Subtotal</span>
                    <span className="font-mono text-slate-900 font-bold">
                      ₦{total?.totalPrice?.toLocaleString() || 0}
                    </span>
                  </div>

                  <hr className="border-slate-100 my-2" />

                  <div className="flex justify-between items-center text-base font-bold text-slate-900">
                    <span>Total</span>
                    <span className="font-mono text-lg text-emerald-700">
                      ₦{total?.totalPrice?.toLocaleString() || 0}
                    </span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-7 space-y-3">
                  <Link to="/delivery" className="block">
                    <button className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-700/10 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                      <span>Proceed to Delivery</span>
                    </button>
                  </Link>

                  <Link to="/shop" className="block">
                    <button className="w-full py-3 px-4 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                      <span>Continue Shopping</span>
                    </button>
                  </Link>
                </div>

                {/* TRUST BADGES */}
                <div className="mt-7 pt-6 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                    <MdVerified className="text-emerald-600 w-4 h-4 shrink-0" />
                    <span>Secure checkout powered by Paystack</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                    <MdLocalShipping className="text-blue-600 w-4 h-4 shrink-0" />
                    <span>Calculated shipping options available</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                    <MdSync className="text-amber-600 w-4 h-4 shrink-0" />
                    <span>30-day hassle-free return policy</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      ) : (
        <NoCartItem />
      )}

      <SearchNav />
    </div>
  );
};

export default Cart;
