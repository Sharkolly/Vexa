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
    (state: RootState) => state.product.addToCart,
  );
  const total = useSelector((state: RootState) => state.product.total);

  const incrementProductQuantity = (id: string = "") => {
    dispatch(incrementQuantity({ id }));
  };
  const decrementProductQuantity = (id: string = "", quantity: number) => {
    dispatch(decrementQuantity({ id }));

    if (quantity - 1 <= 0) {
      dispatch(removeCart({ id }));
    }
  };
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col antialiased mb-50">
      {CartedProduct.length > 0 ? (
        <main className="flex-grow pt-32  pb-24 max-w-[1440px] mx-auto w-full md:px-16 max-md:pt-24 max-md:px-2.5 ">
          <>
            <div className="mb-12 max-md:mb-7 px-2.5">
              <h1 className="font-semibold text-4xl text-on-surface mb-4">
                Shopping Cart
              </h1>
              <Link
                className="text-nav-blue-active font-label-md flex items-center gap-2 hover:underline transition-all "
                to="/shop"
              >
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_back"
                >
                  <IoMdArrowBack />
                </span>
                Continue Shopping
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-grow">
                <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden border border-slate-200">
                  <table className="w-full border-collapse  hidden md:table">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-6 px-8 font-label-sm text-nav-blue-active uppercase tracking-widest">
                          Product
                        </th>
                        <th className="text-center py-6 px-4 font-label-sm text-nav-blue-active uppercase tracking-widest">
                          Price
                        </th>
                        <th className="text-center py-6 px-4 font-label-sm text-nav-blue-active uppercase tracking-widest">
                          Quantity
                        </th>
                        <th className="text-right py-6 px-8 font-label-sm text-nav-blue-active uppercase tracking-widest">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {CartedProduct.map((product: ProductType) => (
                        <tr className="group hover:bg-slate-50/50 transition-colors">
                          <td className="py-8 px-8">
                            <div className="flex items-center gap-6">
                              <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                                <img
                                  className="w-full h-full object-cover"
                                  data-alt="A high-end, sleek matte black wireless headphone set resting on a minimalist white marble surface. The studio lighting is soft and directional, highlighting the premium metallic textures and smooth leather ear pads. The aesthetic is ultra-modern and professional, aligning with a luxury electronics catalog. Soft shadows ground the product in a bright, airy environment."
                                  src={product?.image}
                                />
                              </div>
                              <div>
                                <Link to={`/products/product/${product.id}`}>
                                  <h3 className="font-semibold text-lg  text-slate-900 mb-1">
                                    {product.title}
                                  </h3>
                                  <p className="text-slate-500 text-label-md mb-2">
                                    {product.category}
                                  </p>
                                </Link>
                                <button
                                  className="text-error font-label-sm flex items-center gap-1 cursor-pointer"
                                  onClick={() =>
                                    dispatch(
                                      removeCart({ id: String(product.id) }),
                                    )
                                  }
                                >
                                  <span className="text-red-500 hover:text-red-600 flex items-center gap-2">
                                    <span className="text-sm">Delete </span>{" "}
                                    <span>
                                      <RiDeleteBinLine />{" "}
                                    </span>
                                  </span>
                                  {/* Remove */}
                                </button>
                              </div>
                            </div>
                          </td>

                          <td className="py-8 px-4 text-center">
                            <span className="font-medium text-slate-900">
                              ₦{product.price.toLocaleString()}
                            </span>
                          </td>
                          <td className="py-8 px-4">
                            <div className="flex items-center justify-center">
                              <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                                <button
                                  className="px-3 py-1 hover:bg-slate-50 text-slate-400"
                                  onClick={() =>
                                    decrementProductQuantity(
                                      String(product.id),
                                      product?.quantity,
                                    )
                                  }
                                >
                                  -
                                </button>
                                <span className="px-4 py-1 font-medium text-slate-900 border-x border-slate-200">
                                  {product.quantity}
                                </span>
                                <button
                                  className="px-3 py-1 hover:bg-slate-50 text-slate-400"
                                  onClick={() =>
                                    incrementProductQuantity(String(product.id))
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="py-8 px-8 text-right">
                            <span className="font-medium text-slate-900">
                              ₦{product?.new_price?.toLocaleString()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="md:hidden">
                    {CartedProduct.map((product: ProductType) => (
                      <div className="p-6  space-y-4">
                        <div className="flex gap-4">
                          <div className="w-28 h-28 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                            <img
                              alt="Acoustic Pro Headphones"
                              className="w-full h-full object-cover"
                              src={product.image}
                            />
                          </div>
                          <div className="flex-grow flex flex-col gap-2">
                            <Link to={`/products/product/${product?.id}`}>
                              <h3 className="font-medium text-slate-900">
                                {product.title}
                              </h3>
                              <p className="text-slate-500 text-sm">
                                {product.category}
                              </p>
                            </Link>
                            <div className="flex justify-between items-center">
                              <p className=" font-semibold max-md:text-sm text-slate-600 ">
                                ₦{product.price.toLocaleString()}
                              </p>
                              <span className=" font-semibold text-blue-900 flex flex-col items-center">
                                {/* <span>{product.quantity}</span> */}
                                <span>
                                  <MdArrowRightAlt />
                                </span>
                              </span>
                              <p className="font-semibold text-slate-900 max-md:text-sm">
                                ₦
                                {product.new_price
                                  ? product.new_price?.toLocaleString()
                                  : "0"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                            <button
                              className="px-3 py-1 hover:bg-slate-50 text-slate-400"
                              onClick={() =>
                                decrementProductQuantity(
                                  String(product.id),
                                  product.quantity,
                                )
                              }
                            >
                              -
                            </button>
                            <span className="px-4 py-1 font-medium text-slate-900 border-x border-slate-200">
                              {product.quantity}
                            </span>
                            <button
                              className="px-3 py-1 hover:bg-slate-50 text-slate-400"
                              onClick={() =>
                                incrementProductQuantity(String(product.id))
                              }
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="text-error font-label-sm flex items-center gap-1 cursor-pointer"
                            onClick={() =>
                              dispatch(removeCart({ id: String(product.id) }))
                            }
                          >
                            <span className="text-red-500 hover:text-red-600 flex items-center gap-2">
                              <span className="text-sm">Delete </span>{" "}
                              <span>
                                <RiDeleteBinLine />{" "}
                              </span>
                            </span>
                            {/* Remove */}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex justify-between items-center hidden">
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <input
                      className="flex-grow px-6 py-3 border border-slate-200 rounded-lg focus:ring-primary focus:border-primary bg-white outline-none "
                      placeholder="Promo code "
                      type="text"
                    />
                    <button className="px-6 py-3 bg-nav-blue-active/90  text-white font-label-md rounded-lg hover:bg-slate-800 transition-all active:scale-95">
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <aside className="w-full lg:w-100 shrink-0 ">
                <div className="bg-white rounded-xl md:border md:border-slate-200 md:shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-9  max-md:p-4   md:sticky md:top-32 fixed bottom-0 left-0 right-0 z-10 border-t-1 h-[250px] overflow-y-auto">
                  <h2 className="font-semibold text-2xl text-slate-900 mb-8">
                    Order Summary
                  </h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-body-md">
                        Subtotal
                      </span>
                      <span className="text-slate-900 font-medium">
                        ₦{total?.totalPrice.toLocaleString() || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-body-md">
                        Shipping
                      </span>
                      <span className="text-slate-900 font-medium">
                        ₦{(total?.totalPrice * 0.03).toLocaleString() || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-body-md">
                        Shipping
                      </span>
                      <span className="text-green-600 font-medium uppercase text-label-sm tracking-wider">
                        Free
                      </span>
                    </div>
                    <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-slate-900 font-medium  text-body-lg">
                        Total
                      </span>
                      <span className="text-nav-blue-active font-semibold  text-xl">
                        ₦{(total?.totalPrice * 1.08).toLocaleString() || 0}
                      </span>
                    </div>
                  </div>
                  <Link to="/delivery">
                    <button className="w-full py-3 mb-2   bg-nav-blue-active/90 text-white  rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer">
                      Proceed to Delivery
                    </button>
                  </Link>
                  <Link to="/shop">
                    <button className="w-full mt-3 border border-nav-blue-active  text-nav-blue-active py-3 rounded-xl cursor-pointer ">
                      {" "}
                      Continue Shopping
                    </button>
                  </Link>
                  <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                    <div className="flex items-center gap-3 text-slate-500 text-label-md">
                      <span
                        className="material-symbols-outlined text-primary"
                        data-icon="verified"
                      >
                        <MdVerified className="text-green-700 w-3.5   h-3.5 " />
                      </span>
                      <span className="text-sm">
                        Secure checkout powered by Stripe
                      </span>
                    </div>
                    <div className=" flex items-center gap-3 text-slate-500 text-label-md">
                      <span
                        className="material-symbols-outlined text-primary"
                        data-icon="local_shipping"
                      >
                        <MdLocalShipping className="text-blue-700 w-3.5   h-3.5 " />
                      </span>
                      <span className="text-sm">
                        Free shipping on orders over $150
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 text-label-md">
                      <span
                        className="material-symbols-outlined text-primary"
                        data-icon="sync"
                      >
                        <MdSync className="text-orange-700  w-3.5   h-3.5 " />
                      </span>
                      <span className="text-sm">
                        30-day hassle-free returns
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </>
        </main>
      ) : (
        <NoCartItem />
      )}
    </div>
  );
};

export default Cart;
