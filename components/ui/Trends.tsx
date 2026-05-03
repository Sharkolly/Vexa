import React from 'react'

const Trends = () => {
  return (
     <section className="py-10 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-12">
              <h3 className="font-bold text-3xl  text-on-surface">
                Trending on Vexa
              </h3>
            </div>
            <div className="flex gap-4 md:gap-8 px-6 md:px-16 overflow-x-auto  hide-scrollbar snap-x">
              <div className="flex-none w-[300px] md:w-[600px] h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden snap-start group">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  data-alt="A clean, futuristic concept of a high-tech laboratory with glowing blue geometric interfaces and holographic data displays. The scene is bright and airy, using a white and electric indigo color palette to convey innovation and luxury technical services in a corporate environment."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRQo19m9mcTe1Uy6Z7tt8vFnObHJ3tilXq2rjpApbUy5UPinyO-cjm3RsnB4qQ0xeUnneL6y1U3kGlPKrZFN-OzQHnRHPPF7SvLhWb9HU79nrbf1ie7jhqB-hRNI0unITr-UagvyCcCTjqDIkP6PIG-nDJGoEu0IuoAYyIl4xoG3qGu7yjJxjYG05lS5oiu50FBAKD6U_o7jjlCzal04wJDeQ47V1hMKcmzVFABGspyM7s5X9xHAzPs6usdq81aiUqdBiCGo9k3oI"
                />
                <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                  <span className="font-label-sm text-primary-fixed-dim uppercase tracking-widest mb-2">
                    Featured Service
                  </span>
                  <h4 className="text-[32px] font-bold text-white leading-tight">
                    Vexa AI Lab:
                    <br />
                    Personalized Styling
                  </h4>
                  <button className="mt-6 flex items-center gap-2 text-white font-label-md group-hover:translate-x-2 transition-transform">
                    Explore Lab{" "}
                    <span
                      className="material-symbols-outlined"
                      data-icon="trending_flat"
                    >
                      trending_flat
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex-none w-[300px] md:w-[600px] h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden snap-start group">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  data-alt="A striking image of a high-performance luxury sports car captured in a modern architectural driveway at dusk. The vehicle's metallic paint reflects deep blues and purples from the setting sky, while the bright LED headlights provide a focal point of intense white light, following a minimalist corporate aesthetic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB17DkQvp80gv_4Bl9mkxMHqM2SuZyjcKZoko6wW9eCCL3qnv4Jf8mvzdka9B6BuoVaj28BNbf3TaqZxoKGCBgEGqCxCUIjdvsph1mgrz60L7JuGfTxOlfmz8o4bY8rzDEK2nv-WfcpH8ctdrGH0DLE2aHi_esS9NGt0XBk4J4MGIWCIILNychTyJrRNpKF6aL9TKgDUWack6g1ZqCm0TRvtx4U35zUCZ3r62Zmj690TdVjWIOsTXA4w_8e30QHNCXHEnORo0YET8A"
                />
                <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                  <span className="font-label-sm text-primary-fixed-dim uppercase tracking-widest mb-2">
                    New Arrival
                  </span>
                  <h4 className="text-[32px] font-bold text-white leading-tight">
                    Vexa Drive:
                    <br />
                    The Electric G-Series
                  </h4>
                  <button className="mt-6 flex items-center gap-2 text-white font-label-md group-hover:translate-x-2 transition-transform">
                    Order Now{" "}
                    <span
                      className="material-symbols-outlined"
                      data-icon="trending_flat"
                    >
                      trending_flat
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex-none w-[300px] md:w-[600px] h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden snap-start group">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  data-alt="A collection of luxury cotton textiles and designer clothing neatly arranged in a minimalist, high-end retail environment. The soft textures and high-quality fabrics are emphasized through natural lighting and a palette of neutral whites and slates, creating an editorial fashion-forward atmosphere."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbjVrGTK1eW-nHxHptiuk9MNFbFVaXETliQ8yGtb8OXr72barLEUfoKcueNhy0UxOtugT6hSW3J8dU-Wd7MmuuHXCxgcIwTlUnLClgiYQT0UCqjZyIiZRu2T83zMLzwQ5syn39cb7tvXxL1xCySz2KpBEQu0JgFp5AZ8cRpBCE4uRsesUfqSIFlL08vsY4TvEOXkQgmQnTYUMor1VqKSyGqAu58YCR_j4qTspI7vvdLg33IZLL9olAais3oQno7SnkPnRBDnSU1cc"
                />
                <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                  <span className="font-label-sm text-primary-fixed-dim uppercase tracking-widest mb-2">
                    Limited Edition
                  </span>
                  <h4 className="text-[32px] font-bold text-white leading-tight">
                    Artisan Series:
                    <br />
                    Cashmere Capsule
                  </h4>
                  <button className="mt-6 flex items-center gap-2 text-white font-label-md group-hover:translate-x-2 transition-transform">
                    Shop Release{" "}
                    <span
                      className="material-symbols-outlined"
                      data-icon="trending_flat"
                    >
                      trending_flat
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Trends
