import React from "react";

const ProductDetails = () => {
  return (
    <div>
      Product Details
      <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        <main className="pt-32 pb-24 max-w-[1440px] mx-auto px-16">
          <nav className="flex items-center gap-2 mb-12 text-label-sm text-outline">
            <a className="hover:text-primary transition-colors" href="#">
              Products
            </a>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <a className="hover:text-primary transition-colors" href="#">
              Wearables
            </a>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="text-on-surface">Vexa Elite Series 5</span>
          </nav>
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-7 flex flex-col gap-6">
              <div className="aspect-[4/5] bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="A high-end Vexa Elite Series 5 smartwatch with a polished titanium casing and a deep sapphire glass screen, displayed on a clean white pedestal in a high-key studio environment. The lighting is soft and diffused, highlighting the intricate brushed textures of the metal. The watch face shows a minimalist indigo-themed digital display. The overall aesthetic is ultra-modern, professional, and luxurious, using a crisp light-mode palette with subtle indigo accents."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyyuT5xXyx5HfLaqhB-AtMfpsaSlJ_N5M_5za8IOX7jaUUHqvrJaMM-zpnrdguWRb4I8KYtuZITAFBy3k5wDLIUJ91nL7lUtbcYHGmwPSoBOZJ_yOq-KwbHCbqM0edYRBPDn_LUhUUzxAJ4dLYq6ae2MCadULIqFrXj7dffC919jeiylNy_P-OgrPmVVI5cUnR240xDWH0ZvSdKwH5JNtWGIgIlkS3YM-D7opWqDBG1vFelabhzZbUFz7CASHy5ymrBYHzLtmQSPQ"
                />
              </div>
              <div className="grid grid-cols-4 gap-6">
                <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-all">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Close-up macro shot of the Vexa Elite Series 5 smartwatch's digital crown and side button. The titanium finish reflects soft overhead studio lighting, showcasing the precision engineering and elegant curves of the device. The background is a soft-focus minimalist grey, maintaining a high-end corporate aesthetic with subtle depth and clean highlights."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADpcuApAMNwgTNOJuk0lE8Missb02pVKQbFi3oA_cyXAssxt5GcreNbWEFuDdo4ZVW3LaDWWC7jxoT60kK6VSslKL8LcCDS7YHvcqfjYwISqnsTqT18kOpV-eGpJUAh3E_dpheOaKTQ9pFzN_beS7ZboTw9R6UnBBACBqu5Fdhs6dfAm5WVDV5yVjCh_6J6k5_7MlSNhMR2J9mqHBdTQ9DkQQ8E7sDsyt9yKEydvb0tcllN8Z9V7Cv7FkEhYz16yRcbeyPENlTjjY"
                  />
                </div>
                <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="The Vexa Elite Series 5 smartwatch being worn by a professional in a modern office setting. The watch sits elegantly on the wrist, paired with a white shirt sleeve. The background features a blurred corporate interior with large windows and soft daylight. The image conveys a sense of high-performance efficiency and professional luxury, aligned with a minimalist light-mode interface."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPdm8CQYc8K8TM0rqNgSed97lMBqzGqd2tQ0IyCQ3DIRxXIRHbxI6SZOPJy5oWFmnJ7OJAw7o9XYqnI64ot2QiBj-6l6iLmILUbcqlfpCggOl4NWddh0GsamHKw_Kc5qFnPeSefrUQhRVYGm7xmKdn4gvFXXL-_4Du1vBT5ZNfcuxhSGnSPQzn6lsx3go2Ts3D-Ml1uzZTRvsp_EmGgVNKUgpTVueEghvrfyaJff9ZK73aVOeJniKFwKdNuQCEKOM-PVKL7yu-M3M"
                  />
                </div>
                <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Exploded view or artistic arrangement of the Vexa Elite Series 5 smartwatch showing the premium strap options including a fluoroelastomer band and a link bracelet. The items are neatly arranged on a flat surface with long, soft shadows, creating a gallery-like composition. The colors are muted and sophisticated, focusing on neutral tones and a singular indigo highlight."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVWBP3I8T5_nlwPGZhvKX5lKofdD8dd1oehezMqkWEluiabalSoGIMgiLtogBUGgt4VLQMqkZoy5yxSsigFn4bQb8H7Q_3ZqYy9RLIdWLr9k4HaP60jaYybcJ5X8skpxBOOVOuqupG4LcwoLL_N44fMJRg0oZJ2g_HG3_1t0YIo8XX9Gr0KMMrTTCJ7W7lFIoM9IU_bw6aQHZgskXGdojfkmu-JXMctJl7zl0ZDhVrI6afRsGkWCm8XOQeVirjcQdanUk886uCO0E"
                  />
                </div>
                <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline text-3xl">
                    play_circle
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-5 flex flex-col">
              <div className="mb-4">
                <span className="inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-sm uppercase tracking-widest font-bold">
                  New Release
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Vexa Elite Series 5 Smartwatch
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex text-primary">
                  <span className="material-symbols-outlined fill text-[18px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill text-[18px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill text-[18px]">
                    star
                  </span>
                  <span className="material-symbols-outlined fill text-[18px]">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    star_half
                  </span>
                </div>
                <span className="text-body-md text-outline">(128 Reviews)</span>
              </div>
              <div className="mb-10">
                <span className="font-display-xl text-display-xl text-on-surface">
                  $599.00
                </span>
                <p className="text-body-md text-outline mt-2">
                  Or $49.91/mo for 12 months with 0% interest
                </p>
              </div>
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-label-md text-label-md uppercase text-outline mb-4">
                    Description
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Engineered for those who demand excellence. The Vexa Elite
                    Series 5 combines aerospace-grade titanium with an advanced
                    LTPO OLED display. Featuring 24/7 biometric tracking,
                    dual-band GPS, and up to 72 hours of battery life, it's more
                    than a watch—it's your performance command center.
                  </p>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md uppercase text-outline mb-4">
                    Select Finish
                  </h3>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full bg-[#E5E7EB] border-2 border-primary ring-2 ring-white ring-offset-0"></button>
                    <button className="w-12 h-12 rounded-full bg-[#1F2937] border-2 border-transparent hover:border-outline-variant"></button>
                    <button className="w-12 h-12 rounded-full bg-[#D1D5DB] border-2 border-transparent hover:border-outline-variant"></button>
                  </div>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md uppercase text-outline mb-4">
                    Specifications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-outline-variant pb-2">
                      <span className="text-on-surface-variant">
                        Case Material
                      </span>
                      <span className="font-semibold">Titanium Grade 5</span>
                    </li>
                    <li className="flex justify-between border-b border-outline-variant pb-2">
                      <span className="text-on-surface-variant">
                        Water Resistance
                      </span>
                      <span className="font-semibold">100m (ISO 22810)</span>
                    </li>
                    <li className="flex justify-between border-b border-outline-variant pb-2">
                      <span className="text-on-surface-variant">
                        Battery Life
                      </span>
                      <span className="font-semibold">72 Hours (Normal)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-10">
                <button className="w-full bg-primary-container text-on-primary text-headline-md font-headline-md py-6 rounded-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
                  Add to Cart
                </button>
                <button className="w-full bg-surface-container border border-outline-variant text-on-surface font-headline-md py-6 rounded-xl hover:bg-surface-container-high transition-all active:scale-[0.98]">
                  Buy Now
                </button>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary">
                    local_shipping
                  </span>
                  <div>
                    <p className="font-semibold">Free Express Shipping</p>
                    <p className="text-sm text-outline">
                      Delivery expected by Tuesday, Oct 24
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    verified_user
                  </span>
                  <div>
                    <p className="font-semibold">2-Year Vexa Warranty</p>
                    <p className="text-sm text-outline">
                      Extended protection included automatically
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="mt-32 border-t border-outline-variant pt-24">
            <div className="flex justify-between mb-16 flex-col md:flex-row items-start md:items-end gap-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                  Reviews &amp; Ratings
                </h2>
                <p className="text-body-md text-outline">
                  What our community is saying about Elite Series 5
                </p>
              </div>
              <button className="font-label-md text-label-md text-primary border border-primary px-8 py-3 rounded-full hover:bg-primary-container hover:text-white transition-all">
                Write a Review
              </button>
            </div>
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-4">
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant flex flex-col items-center text-center">
                  <span className="text-[80px] font-black leading-none text-on-surface">
                    4.8
                  </span>
                  <div className="flex text-primary my-4">
                    <span className="material-symbols-outlined text-3xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-3xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-3xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-3xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-3xl">
                      star
                    </span>
                  </div>
                  <p className="text-body-md text-outline">
                    Based on 128 verified purchases
                  </p>
                  <div className="w-full mt-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-4">5</span>
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[85%]"></div>
                      </div>
                      <span className="text-sm text-outline">85%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-4">4</span>
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[10%]"></div>
                      </div>
                      <span className="text-sm text-outline">10%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-4">3</span>
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[3%]"></div>
                      </div>
                      <span className="text-sm text-outline">3%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-4">2</span>
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[1%]"></div>
                      </div>
                      <span className="text-sm text-outline">1%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-4">1</span>
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[1%]"></div>
                      </div>
                      <span className="text-sm text-outline">1%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-8 space-y-12">
                <div className="pb-12 border-b border-outline-variant">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">
                        JD
                      </div>
                      <div>
                        <p className="font-bold">Julian Deveraux</p>
                        <p className="text-sm text-outline">
                          Verified Buyer • 2 days ago
                        </p>
                      </div>
                    </div>
                    <div className="flex text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    </div>
                  </div>
                  <h4 className="font-headline-md text-on-surface mb-2">
                    Unparalleled build quality
                  </h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    The titanium finish on the Series 5 is leagues ahead of
                    anything else on the market. It feels substantial without
                    being heavy on the wrist. The display brightness in direct
                    sunlight is incredible—I haven't had to squint once during
                    my midday runs.
                  </p>
                </div>
                <div className="pb-12 border-b border-outline-variant">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">
                        SC
                      </div>
                      <div>
                        <p className="font-bold">Sarah Chen</p>
                        <p className="text-sm text-outline">
                          Verified Buyer • 1 week ago
                        </p>
                      </div>
                    </div>
                    <div className="flex text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star_half
                      </span>
                    </div>
                  </div>
                  <h4 className="font-headline-md text-on-surface mb-2">
                    Battery life is the real winner
                  </h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Easily getting three days of charge even with the Always-On
                    display enabled. The sleep tracking metrics are more
                    detailed than my previous Oura ring. My only gripe is the
                    proprietary strap connector, but the included band is quite
                    comfortable.
                  </p>
                </div>
                <div className="flex justify-center pt-8">
                  <button className="font-label-md text-label-md text-outline hover:text-primary transition-colors flex items-center gap-2">
                    Load More Reviews
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-slate-50 dark:bg-slate-900/50 w-full mt-auto border-t border-slate-200 dark:border-slate-800 font-inter text-sm tracking-wide">
          <div className="max-w-[1440px] mx-auto px-16 py-24 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <a
                className="text-xl font-bold text-slate-900 dark:text-white mb-6 block"
                href="#"
              >
                Vexa
              </a>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs leading-relaxed">
                Setting the standard for technical precision and minimalist
                luxury in digital experiences.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">
                    public
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">
                    podcasts
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-6">
                Company
              </h4>
              <nav className="flex flex-col gap-4 text-slate-500 dark:text-slate-400">
                <a
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  href="#"
                >
                  About Vexa
                </a>
                <a
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  href="#"
                >
                  Sustainability
                </a>
                <a
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  href="#"
                >
                  Careers
                </a>
              </nav>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-6">
                Support
              </h4>
              <nav className="flex flex-col gap-4 text-slate-500 dark:text-slate-400">
                <a
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  href="#"
                >
                  Help Center
                </a>
                <a
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  href="#"
                >
                  Order Status
                </a>
                <a
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  href="#"
                >
                  Returns
                </a>
              </nav>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-6">
                Stay Updated
              </h4>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Receive early access to new collections and private events.
              </p>
              <a
                className="text-primary font-semibold hover:underline cursor-pointer"
                href="#"
              >
                Newsletter Signup
              </a>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-16 py-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-slate-400">
            <p>© 2024 Vexa. Engineered for excellence.</p>
            <div className="flex gap-8">
              <a className="hover:text-slate-900 transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-slate-900 transition-colors" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProductDetails;
