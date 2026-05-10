import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <div>
      Delivery
      <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col antialiased">
        <main className="flex-grow pt-32 pb-24 max-w-[1440px] mx-auto w-full md:px-16 max-md:pt-20 max-md:px-6 ">
          <div className="mb-12">
            <h1 className="font-semibold text-4xl text-on-surface mb-4">
              Shopping Cart
            </h1>
            <Link
              className="text-nav-blue-active font-label-md flex items-center gap-2 hover:underline transition-all"
              to="#"
            >
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_back"
              >
                {/* arrow_back */}
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
                    <tr className="group hover:bg-slate-50/50 transition-colors">
                      <td className="py-8 px-8">
                        <div className="flex items-center gap-6">
                          <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                            <img
                              className="w-full h-full object-cover"
                              data-alt="A high-end, sleek matte black wireless headphone set resting on a minimalist white marble surface. The studio lighting is soft and directional, highlighting the premium metallic textures and smooth leather ear pads. The aesthetic is ultra-modern and professional, aligning with a luxury electronics catalog. Soft shadows ground the product in a bright, airy environment."
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPJJ3lYCaxAKMKWSynG-3eTSaWeEBbwgypOPGjeYe-MVBntv9wcIWARk_MpGW12COH8LayLZRyU_HGeD68EIeAueYKUEKJT6phkyfvZ4eXLvd3_ZxnFVf9z5qvcBWjzxxlisHS73-JVzYIsnqXYRHdjFgdp0yAbfwWMoklYpFOSynIWPKUESCAQ86wanFr3AP_8FYd2P7J0U9drFEyr0OX_439ybAPQAz_nEwPDA7LJFnWH7ba3k_tKXf0wmjRwFWtEda7nKmeP-I"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg  text-slate-900 mb-1">
                              Acoustic Pro Headphones
                            </h3>
                            <p className="text-slate-500 text-label-md mb-2">
                              Midnight Black / Over-Ear
                            </p>
                            <button className="text-error font-label-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span
                                className="material-symbols-outlined text-[16px]"
                                data-icon="delete"
                              >
                                delete
                              </span>
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-8 px-4 text-center">
                        <span className="font-medium text-slate-900">
                          $299.00
                        </span>
                      </td>
                      <td className="py-8 px-4">
                        <div className="flex items-center justify-center">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                            <button className="px-3 py-1 hover:bg-slate-50 text-slate-400">
                              -
                            </button>
                            <span className="px-4 py-1 font-medium text-slate-900 border-x border-slate-200">
                              1
                            </span>
                            <button className="px-3 py-1 hover:bg-slate-50 text-slate-400">
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-8 px-8 text-right">
                        <span className="font-medium text-slate-900">
                          $299.00
                        </span>
                      </td>
                    </tr>

                    <tr className="group hover:bg-slate-50/50 transition-colors">
                      <td className="py-8 px-8">
                        <div className="flex items-center gap-6">
                          <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                            <img
                              className="w-full h-full object-cover"
                              data-alt="A minimalist designer wristwatch with a white dial and a premium tan leather strap, photographed in a high-key studio setting. The lighting is crisp and clean, emphasizing the polished silver casing and the natural grain of the leather. The composition is elegant and spacious, following a luxury editorial style. Background is a seamless soft gray gradient."
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlcXJ7Vi3fGemNSUhV1uhE9XDRd-28xbHySnFCu32EyQRsNWXoJE_6Rk4FevQE-FxlQOQtDCwXyd4cO9W8xXDb4yRvXxH0QApb0BfSPhgTuWN6K-IHZbCT6hYQ_pGVxV0SbbNPFdO4Vn022EB6A6Umy8xgIyjPLSGAPgdlTg2Saw2UcXlKjjqKGtw6_X6WMYMSxfba80bmp0Dl8owvXeJsNMJccACt6gUY3XWPXVAxE54GBsCWtYzW1rkXXbEbPEU0AxJrBij7Zg"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-slate-900 mb-1">
                              Chronos Minimalist Watch
                            </h3>
                            <p className="text-slate-500 text-label-md mb-2">
                              Silver / Tan Leather
                            </p>
                            <button className="text-error font-label-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span
                                className="material-symbols-outlined text-[16px]"
                                data-icon="delete"
                              >
                                delete
                              </span>
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-8 px-4 text-center">
                        <span className="font-medium text-slate-900">
                          $185.00
                        </span>
                      </td>
                      <td className="py-8 px-4">
                        <div className="flex items-center justify-center">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                            <button className="px-3 py-1 hover:bg-slate-50 text-slate-400">
                              -
                            </button>
                            <span className="px-4 py-1 font-medium text-slate-900 border-x border-slate-200">
                              1
                            </span>
                            <button className="px-3 py-1 hover:bg-slate-50 text-slate-400">
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-8 px-8 text-right">
                        <span className="font-medium text-slate-900">
                          $185.00
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="md:hidden divide-y divide-slate-100">
                  <div className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        <img
                          alt="Acoustic Pro Headphones"
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPJJ3lYCaxAKMKWSynG-3eTSaWeEBbwgypOPGjeYe-MVBntv9wcIWARk_MpGW12COH8LayLZRyU_HGeD68EIeAueYKUEKJT6phkyfvZ4eXLvd3_ZxnFVf9z5qvcBWjzxxlisHS73-JVzYIsnqXYRHdjFgdp0yAbfwWMoklYpFOSynIWPKUESCAQ86wanFr3AP_8FYd2P7J0U9drFEyr0OX_439ybAPQAz_nEwPDA7LJFnWH7ba3k_tKXf0wmjRwFWtEda7nKmeP-I"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-slate-900">
                          Acoustic Pro Headphones
                        </h3>
                        <p className="text-slate-500 text-sm">
                          Midnight Black / Over-Ear
                        </p>
                        <p className="mt-1 font-semibold text-slate-900">
                          $299.00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                        <button className="px-3 py-1 hover:bg-slate-50 text-slate-400">
                          -
                        </button>
                        <span className="px-4 py-1 font-medium text-slate-900 border-x border-slate-200">
                          1
                        </span>
                        <button className="px-3 py-1 hover:bg-slate-50 text-slate-400">
                          +
                        </button>
                      </div>
                      <button className="text-error font-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        <img
                          alt="Chronos Minimalist Watch"
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlcXJ7Vi3fGemNSUhV1uhE9XDRd-28xbHySnFCu32EyQRsNWXoJE_6Rk4FevQE-FxlQOQtDCwXyd4cO9W8xXDb4yRvXxH0QApb0BfSPhgTuWN6K-IHZbCT6hYQ_pGVxV0SbbNPFdO4Vn022EB6A6Umy8xgIyjPLSGAPgdlTg2Saw2UcXlKjjqKGtw6_X6WMYMSxfba80bmp0Dl8owvXeJsNMJccACt6gUY3XWPXVAxE54GBsCWtYzW1rkXXbEbPEU0AxJrBij7Zg"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-slate-900">
                          Chronos Minimalist Watch
                        </h3>
                        <p className="text-slate-500 text-sm">
                          Silver / Tan Leather
                        </p>
                        <p className="mt-1 font-semibold text-slate-900">
                          $185.00
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                        <button className="px-3 py-1 hover:bg-slate-50 text-slate-400">
                          -
                        </button>
                        <span className="px-4 py-1 font-medium text-slate-900 border-x border-slate-200">
                          1
                        </span>
                        <button className="px-3 py-1 hover:bg-slate-50 text-slate-400">
                          +
                        </button>
                      </div>
                      <button className="text-error font-label-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <input
                    className="flex-grow px-6 py-3 border border-slate-200 rounded-lg focus:ring-primary focus:border-primary bg-white outline-none "
                    placeholder="Promo code "
                    type="text"
                  />
                  <button className="px-6 py-3 bg-slate-900 text-white font-label-md rounded-lg hover:bg-slate-800 transition-all active:scale-95">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-100 shrink-0">
              <div className="bg-white rounded-xl border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-9  max-md:p-6 sticky top-32">
                <h2 className="font-semibold text-2xl text-slate-900 mb-8">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-body-md">
                      Subtotal
                    </span>
                    <span className="text-slate-900 font-medium">$484.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-body-md">
                      Tax (8%)
                    </span>
                    <span className="text-slate-900 font-medium">$38.72</span>
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
                      $522.72
                    </span>
                  </div>
                </div>
                <button className="w-full py-4 bg-nav-blue-active text-white font-headline-md text-body-lg rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer">
                  Proceed to Checkout
                </button>
                <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                  <div className="flex items-center gap-3 text-slate-500 text-label-md">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="verified"
                    >
                      {/* verified */}
                    </span>
                    <span>Secure checkout powered by Stripe</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-label-md">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="local_shipping"
                    >
                      {/* local_shipping */}
                    </span>
                    <span>Free shipping on orders over $150</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-label-md">
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="sync"
                    >
                      {/* sync */}
                    </span>
                    <span>30-day hassle-free returns</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Delivery;
