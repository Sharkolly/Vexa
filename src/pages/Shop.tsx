const Shop = () => {
  return (
    <div>
      Shop
      <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0">
        <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-100 shadow-sm shadow-slate-200/50">
          <div className="flex items-center justify-between py-4 w-full px-4 md:px-margin-desktop">
            <div className="flex items-center gap-stack-lg">
              <button className="text-slate-500 hover:text-indigo-500 transition-colors active:opacity-70">
                <span className="material-symbols-outlined" data-icon="menu">
                  menu
                </span>
              </button>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                VEXA
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-stack-lg">
              <a
                className="font-label-md text-label-md text-indigo-600 font-semibold transition-colors"
                href="#"
              >
                Tech
              </a>
              <a
                className="font-label-md text-label-md text-slate-500 hover:text-indigo-500 transition-colors"
                href="#"
              >
                Fashion
              </a>
              <a
                className="font-label-md text-label-md text-slate-500 hover:text-indigo-500 transition-colors"
                href="#"
              >
                Shoes
              </a>
              <a
                className="font-label-md text-label-md text-slate-500 hover:text-indigo-500 transition-colors"
                href="#"
              >
                Cars
              </a>
              <a
                className="font-label-md text-label-md text-slate-500 hover:text-indigo-500 transition-colors"
                href="#"
              >
                Services
              </a>
            </nav>
            <div className="flex items-center gap-stack-md">
              <button className="text-slate-500 hover:text-indigo-500 transition-colors active:opacity-70">
                <span className="material-symbols-outlined" data-icon="search">
                  search
                </span>
              </button>
              <button className="text-slate-500 hover:text-indigo-500 transition-colors active:opacity-70">
                <span
                  className="material-symbols-outlined"
                  data-icon="shopping_bag"
                >
                  shopping_bag
                </span>
              </button>
            </div>
          </div>
        </header>
        <div className="pt-24 flex max-w-container-max mx-auto gap-gutter pb-32 px-4 md:px-margin-desktop">
          <aside className="flex-shrink-0 sticky top-24 h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar pr-gutter hidden md:block w-64 lg:w-80">
            <div className="mb-stack-lg">
              <h1 className="font-headline-md text-headline-md text-on-surface mb-2">
                Tech Gadgets
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                428 items found
              </p>
            </div>
            <div className="space-y-stack-lg">
              <div>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-stack-md">
                  Brand
                </h3>
                <div className="space-y-stack-sm">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">
                      Vexa Core
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      checked={false}
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">
                      AeroTech
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">
                      Nova Dynamics
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-stack-md">
                  Price Range
                </h3>
                <input
                  className="w-full h-1.5 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary"
                  type="range"
                />
                <div className="flex justify-between mt-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>$0</span>
                  <span>$5000+</span>
                </div>
              </div>

              <div>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-stack-md">
                  Rating
                </h3>
                <div className="space-y-stack-sm">
                  <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                    <div className="flex text-amber-400">
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
                    <span className="font-body-md text-body-md">&amp; Up</span>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-stack-md">
                  Specifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-colors">
                    OLED
                  </span>
                  <span className="px-3 py-1 bg-white border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-colors">
                    Wireless
                  </span>
                  <span className="px-3 py-1 bg-white border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-colors">
                    8K UHD
                  </span>
                  <span className="px-3 py-1 bg-white border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface-variant hover:border-primary hover:text-primary cursor-pointer transition-colors">
                    Thunderbolt 4
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center gap-gutter mb-stack-lg flex-col sm:flex-row items-stretch sm:items-center">
              <button className="md:hidden flex items-center justify-center gap-2 px-4 py-4 bg-white ring-1 ring-slate-100 rounded-xl font-label-md text-on-surface hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  filter_list
                </span>
                Filters
              </button>
              <div className="flex-1 relative group">
                <span
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
                  data-icon="search"
                >
                  search
                </span>
                <input
                  className="w-full pl-12 pr-6 py-4 bg-white border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-primary rounded-xl font-body-md text-body-md transition-all shadow-sm"
                  placeholder="Search tech gadgets..."
                  type="text"
                />
              </div>
              <div className="flex items-center gap-3 justify-between sm:justify-end">
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Sort by:
                </span>
                <select className="border-0 bg-transparent font-label-md text-label-md text-on-surface focus:ring-0 cursor-pointer">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col text-sm sm:text-base">
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <img
                    alt="Luxury Tablet"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A premium, ultra-thin slate-grey tablet computer resting on a minimalist white marble desk. The lighting is soft and natural, coming from a large window to the side, creating gentle shadows. The screen displays a vibrant, colorful abstract digital art piece. The setting is a bright, airy modern office with a high-end corporate aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVynCByEOtru3nS1S9rmXcXtQ8yH1yTQv9veNfoJN5uQM95IIEbHnlRpeZojd_arT3OQxfXoa1dq93w-goRRKK0Y7V117QZmDyOrdaQJ2JGQyT1O6iC6ZMHIWTqAIKv-rhYQ3UlRz1X-sFqNZlu-ZqYTnUQfMS85Vyqn_EdoEC3-ZjjVD1WKeaIxyPNTxMTut6sWtWxFHlx0ZLaxo2ik3uzXrfCo91dBWPdnFSd8iMTy1E2fERGi3NtUBHh8MeQ7gCAg-wPlsXEBw"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-on-surface hover:text-error transition-colors">
                    <span
                      className="material-symbols-outlined text-[20px]"
                      data-icon="favorite"
                    >
                      favorite
                    </span>
                  </button>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                      AeroTech
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        4.9
                      </span>
                    </div>
                  </div>
                  <h2 className="font-headline-md text-on-surface mb-stack-sm leading-tight text-lg md:text-headline-md">
                    Nexus Pro Tablet OLED
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Next-generation 14-inch OLED display with M3 integrated
                    silicon.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="font-headline-md text-headline-md text-on-surface">
                      $1,299.00
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors active:scale-95 duration-200">
                      <span
                        className="material-symbols-outlined"
                        data-icon="shopping_cart"
                      >
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col text-sm sm:text-base">
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <img
                    alt="Mechanical Keyboard"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A professional-grade mechanical keyboard with a sleek matte black aluminum chassis and subtle RGB lighting under the keys. The lighting is restricted to soft white and indigo tones. The keyboard is positioned on a premium felt desk mat. The overall atmosphere is focused and sophisticated, reflecting a high-performance corporate workspace."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK3q0A3s0VZAe4DEYpSPI-aDFY9t_rNT0QRBkZMEymRal-NVUfnFyYFCf9Cpwh8oBcBxwsfrchVCJCPSPk_VdD3aMTRoD4wxqTChstrUda8pLmJ7La4rupvdUElQIt8yexncKEqOX9GG_ZYHah8rCUNOCM-CM-6rCLZDrbok8TvZPFsCCoanTXbpEKXnQm_A-QNK-mfmZNSFyAoaSxH0jXaiPcdPKJLS8b7HF_3TIT9YCHNsnsjUJ8bLzsxT1ZjFrKxCh0sjWyGLE"
                  />
                  <div className="absolute top-4 left-4 bg-error text-white px-3 py-1 rounded-full font-label-sm text-label-sm">
                    Sale
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                      Nova Dynamics
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        4.8
                      </span>
                    </div>
                  </div>
                  <h2 className="font-headline-md text-on-surface mb-stack-sm leading-tight text-lg md:text-headline-md">
                    Tactile Flow Keyboard
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Ultra-responsive mechanical switches with aerospace-grade
                    aluminum base.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="font-headline-md text-headline-md text-on-surface">
                        $249.00
                      </span>
                      <span className="text-label-sm text-on-surface-variant line-through">
                        $320.00
                      </span>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors active:scale-95 duration-200">
                      <span
                        className="material-symbols-outlined"
                        data-icon="shopping_cart"
                      >
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col text-sm sm:text-base">
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <img
                    alt="Wireless Headphones"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Modern over-ear wireless headphones in a stunning pearl-white finish with brushed silver metallic accents. They are showcased against a clean, minimalist background with soft focus. The scene is illuminated by crisp, cool studio lighting that emphasizes the high-end material textures. The aesthetic is clean, luxurious, and perfectly aligned with a premium tech brand."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa8Gss0Hq90TKrmRJmjgDpbx1rTy-hzuC-o5rB-UIbvO-TeCGE4inkTcev3Cj7ZKYUs1DjvuJ_eFFe1u0AUuEtSP-x0NX_aK5vt_yjeKqC7-sejxX7U6ykcK38imyiaHjsEI2z3qFvAyVaZV0InJb4Q0RZyn1fGATZFzu-DHhvCNrsroBdGmwBp8vrRr1F_oHdPXjxWFaoMeYUSYfij9rvRXtqQO1eQjCa5ncEyMKr3cPq-GLgLmUVIdTpgN43Lz2sf0ag3u1YHyw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                      AeroTech
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        5.0
                      </span>
                    </div>
                  </div>
                  <h2 className="font-headline-md text-on-surface mb-stack-sm leading-tight text-lg md:text-headline-md">
                    Zenith ANC Headphones
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Industry-leading noise cancellation with spatial audio
                    capabilities.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="font-headline-md text-headline-md text-on-surface">
                      $549.00
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors active:scale-95 duration-200">
                      <span
                        className="material-symbols-outlined"
                        data-icon="shopping_cart"
                      >
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col text-sm sm:text-base">
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <img
                    alt="Smart Watch"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A futuristic smartwatch with a circular titanium body and a liquid silicone strap in deep navy. It is placed on a minimalist charging dock made of dark wood. The background is a soft-focus interior of a luxury penthouse at dusk, with city lights beginning to twinkle. The mood is calm, high-tech, and aspirational."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAasG2wVfB2Q_rXweXfvYuDO-cZ5O_sIlwBbobsuLAGjbTMqBXCXeJWRxLL8E-cRAQZapv4dE7Bprr3kj3KTl5FVnQ9jURJZsRqmYzAJRs0SifBJmpDNOVsz5kn8_LRi8MqvnckvzoyZmm2kU20R6DgJ_RPg6bu2gzMwd8QuY327kd0MfwJgn8VC6hM0VxpEO5k2gOq7d3SYy95P9OtF_M_iDjrUKhuMzQ8UGOrwgbfxYvCjFEfN6dHqn_tYYXXAE6qdvGVM8zjzNM"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                      Vexa Core
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        4.7
                      </span>
                    </div>
                  </div>
                  <h2 className="font-headline-md text-on-surface mb-stack-sm leading-tight text-lg md:text-headline-md">
                    Quantum Watch Series 4
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Health tracking with sapphire crystal and 5-day battery
                    life.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="font-headline-md text-headline-md text-on-surface">
                      $399.00
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors active:scale-95 duration-200">
                      <span
                        className="material-symbols-outlined"
                        data-icon="shopping_cart"
                      >
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col text-sm sm:text-base">
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <img
                    alt="Ergonomic Mouse"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A high-performance ergonomic mouse with an asymmetric design and matte silver finish. It sits next to a sleek laptop on a light-colored desk. The desk features minimal accessories—a single ceramic vase and a small notepad. The lighting is bright and directional, highlighting the contours and precision engineering of the device."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoK9-1lYJQHvTLh7WqOAOoRtexQW1d5_yQgQf7KMyZVnnn8xh31yv8ZlOSw34C2o5UhM9QD_aJV94bhcqPhq8ZQYlF9-1efla7Yn7lLaGzbp31s6TQRmxUlK-H2xo3GWWabxI_I_mDtYNdCVPCot2elSIfS3q9NYnf-P4H97_NWcn-jOVxBplaioeEFVFaVH14t0V5BW4hzR1qIBIzEFWECGtybakCCUkddLB-OjKfOo_w9my4E2njPvG6P5AIVe0kvCJVggqb3NY"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                      Nova Dynamics
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        4.9
                      </span>
                    </div>
                  </div>
                  <h2 className="font-headline-md text-on-surface mb-stack-sm leading-tight text-lg md:text-headline-md">
                    Glide Precision Mouse
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Lag-free wireless connectivity with 26k DPI optical sensor.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="font-headline-md text-headline-md text-on-surface">
                      $129.00
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors active:scale-95 duration-200">
                      <span
                        className="material-symbols-outlined"
                        data-icon="shopping_cart"
                      >
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col text-sm sm:text-base">
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <img
                    alt="Desktop Monitor"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A massive 34-inch curved ultra-wide monitor displaying a high-contrast architectural photograph. The monitor has nearly invisible bezels and a sleek chrome stand. It's positioned in a dark-themed designer studio with accent indigo lighting in the background. The mood is intensely professional, expensive, and tech-forward."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFLuDsKll4Vvj7fnefqzcLhZGDh07l0d4MhzgIHacS1AfmbEtAAWXREFoxuI8mcencCt-nIcit3P5yTcWn6lhp0fZb7pZAOnW-hypfYaioR2J5JLCZreCOy2pkVRlMeAmlSX341ExBqhaMA1QHDyMROEYcdIEaWa1eReV84vAxDcM5Idn95rI0ict4I5EREjgmDkoGkPHoPfv8lpt4m5wnmMbBGGwn_1-zMzhS3NMBC6eIvlR9nfwMKPfCsWzIocyEJD0EDcKcjlU"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                      AeroTech
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                        4.8
                      </span>
                    </div>
                  </div>
                  <h2 className="font-headline-md text-on-surface mb-stack-sm leading-tight text-lg md:text-headline-md">
                    Horizon UltraWide 8K
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Panoramic 34-inch curved display with Nano-IPS technology.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="font-headline-md text-headline-md text-on-surface">
                      $1,899.00
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors active:scale-95 duration-200">
                      <span
                        className="material-symbols-outlined"
                        data-icon="shopping_cart"
                      >
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-stack-lg flex justify-center items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="chevron_left"
                >
                  chevron_left
                </span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-md text-label-md">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
                3
              </button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
                12
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="chevron_right"
                >
                  chevron_right
                </span>
              </button>
            </div>
          </main>
        </div>

        <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] h-20 px-4 pb-4 flex justify-around items-center">
          <a
            className="flex flex-col items-center justify-center text-indigo-600 gap-1 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="home_max">
              home_max
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider">
              Home
            </span>
          </a>
          <a
            className="flex flex-col items-center justify-center text-slate-400 gap-1 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="grid_view">
              grid_view
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider">
              Categories
            </span>
          </a>
          <a
            className="flex flex-col items-center justify-center text-slate-400 gap-1 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider">
              Account
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Shop;
