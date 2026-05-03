const services = () => {
  return (
    <div>
      <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
        <main className="pt-24 min-h-screen">
          <section className="relative h-[500px] flex items-center overflow-hidden bg-surface-container">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-80"
                data-alt="A professional and high-end digital design studio environment with large high-resolution monitors displaying vibrant abstract user interface layouts. The lighting is cool-toned and sophisticated, creating a modern creative-agency atmosphere. Elegant glass surfaces reflect the soft glow of the screens, while the overall aesthetic is clean, minimalist, and luxury-oriented with indigo and slate accents."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA68LJYW0JM7G0bptR65jIM7TNwrX6LHtMor0GaJx_z9FUpYNv_zhaHCwvT3wmJmH-O30K5hI9zOs5qyAP3GbE20Ep_4nhqyHd91MVhx237steHu7lL4FUNaCI7kDIm6Tf3aKvELn8pbLHTxiYlR-KEMjUiVer14kmnHAilQjdHMlioruUTzh3Ro_EQgKoAqBz6dq3lOQt01daYkHzQ4lD_ZPf7IV4ZomlT-gOug5Q81ASOKmELsm1xZFxqpazZYKvvV_GRdVxRx90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-16 w-full">
              <div className="max-w-2xl">
                <span className="text-primary font-label-sm uppercase tracking-widest mb-4 block">
                  Premier Digital Solutions
                </span>
                <h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-tight">
                  Elevate Your Brand Through Design &amp; Tech.
                </h1>
                <p className="font-body-lg text-body-lg text-secondary mb-8">
                  Bespoke digital services tailored for the modern enterprise.
                  From visionary Graphics Design to seamless Website Creation,
                  we engineer excellence.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20">
                    View Portfolio
                  </button>
                  <button className="px-8 py-4 border border-outline rounded-lg font-label-md hover:bg-surface-container transition-all active:scale-95">
                    Our Process
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[1440px] mx-auto px-16 py-24 flex flex-col md:flex-row gap-gutter">
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-32">
                <h2 className="font-headline-md text-headline-md mb-8">
                  Filters
                </h2>
                <div className="space-y-8">
                  <div>
                    <button className="flex items-center justify-between w-full font-label-md text-on-surface mb-4">
                      Service Type
                      <span className="material-symbols-outlined text-sm">
                        expand_less
                      </span>
                    </button>
                    <div className="space-y-4">
                      <label className="flex items-center group cursor-pointer">
                        <input
                          className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 mr-3 transition-colors"
                          type="checkbox"
                        />
                        <span className="font-body-md text-secondary group-hover:text-primary transition-colors">
                          Graphics Design
                        </span>
                      </label>
                      <label className="flex items-center group cursor-pointer">
                        <input
                          className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 mr-3 transition-colors"
                          type="checkbox"
                        />
                        <span className="font-body-md text-secondary group-hover:text-primary transition-colors">
                          Website Creation
                        </span>
                      </label>
                      <label className="flex items-center group cursor-pointer">
                        <input
                          className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 mr-3 transition-colors"
                          type="checkbox"
                        />
                        <span className="font-body-md text-secondary group-hover:text-primary transition-colors">
                          Brand Identity
                        </span>
                      </label>
                      <label className="flex items-center group cursor-pointer">
                        <input
                          className="rounded border-outline-variant text-primary focus:ring-primary w-5 h-5 mr-3 transition-colors"
                          type="checkbox"
                        />
                        <span className="font-body-md text-secondary group-hover:text-primary transition-colors">
                          UI/UX Audit
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="border-t border-surface-variant pt-8">
                    <button className="flex items-center justify-between w-full font-label-md text-on-surface mb-4">
                      Budget Range
                      <span className="material-symbols-outlined text-sm">
                        expand_more
                      </span>
                    </button>
                  </div>
                  <div className="border-t border-surface-variant pt-8">
                    <button className="flex items-center justify-between w-full font-label-md text-on-surface mb-4">
                      Delivery Time
                      <span className="material-symbols-outlined text-sm">
                        expand_more
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-12">
                <p className="font-body-md text-secondary">
                  <span className="font-bold text-on-surface">12</span> services
                  found in Digital Category
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-secondary uppercase">
                    Sort By:
                  </span>
                  <select className="bg-transparent border-none font-label-md text-on-surface focus:ring-0 cursor-pointer">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      data-alt="A sophisticated collection of minimalist brand identity assets including business cards, letterheads, and a sleek mobile device displaying a logo. The composition uses a clean, high-contrast palette of indigo and white, with soft professional studio lighting and deep shadows to emphasize luxury texture and premium paper quality. The overall feel is modern, corporate, and extremely precise."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8vThPbyvydLP_iD2xw20YQ1ziw_deMfnIgwgTI4mYc1nrH3STP1sSCHE_BVHf55Tb-0MHC3BZKNMY_DrjE-3GSJfohjFowmfBx3g72kiu70iB2U7_K31Lt-7KEq5kQn_a0DitCZc--Cq0hxYifmqEOihGcPfLzUQnI1BxrhsnOCgEskG6OwB7GVakJ7BU-yBTB1hRi_jfan6cthQrDFbj-vo0T5lT3jroQbwYg0nCdQlnS87qMu3Ti2mMnzL3Pv48fhgqwpvNvbg"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        Graphics Design
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        Premium Brand Identity Suite
                      </h3>
                      <span className="material-symbols-outlined text-secondary hover:text-error transition-colors cursor-pointer">
                        favorite
                      </span>
                    </div>
                    <p className="font-body-md text-secondary mb-8 line-clamp-2">
                      Complete visual overhaul for ambitious brands. Includes
                      logo systems, typography, color theory, and full
                      collateral guidelines.
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-surface-variant">
                      <div>
                        <span className="text-xs text-secondary uppercase block mb-1">
                          Starting Price
                        </span>
                        <span className="font-headline-md text-primary">
                          $1,200
                        </span>
                      </div>
                      <button className="px-6 py-3 bg-on-secondary-fixed text-white rounded-lg font-label-md hover:bg-primary transition-all active:scale-95">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      data-alt="A clean, minimalist high-end e-commerce website interface displayed on a sleek laptop. The design features large editorial photography, generous whitespace, and sophisticated indigo accents. The lighting is bright and airy, suggesting a modern digital workspace. The overall aesthetic communicates premium web development and high-performance user experience design."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5P6E_8kW2mF6R9JHURUiveqsWlEuYOdA7PjwJGWROdGq1Xou6TTdHpn91nwHR2EB4D4tnCjz7M-nLi0z92RgYsRoq4Q6GJtFiMtqUgZawGQ4jm87xQa7oSNV3vogSCVwGksZON8uXI43IQKHmoay1GfQGwHfObGBZ_axxdgI32V-A6i6ZNGCgZMwHWA0oToeobc46Dnfmycz5SocTWy5NRY1Jq1h0rzLWOStRKbI1tHVq1JOwKf5Mqrn5GjWudCKUcHGq5arNeyE"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        Website Creation
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        E-commerce Experience Engine
                      </h3>
                      <span className="material-symbols-outlined text-secondary hover:text-error transition-colors cursor-pointer">
                        favorite
                      </span>
                    </div>
                    <p className="font-body-md text-secondary mb-8 line-clamp-2">
                      High-performance digital storefronts built on headless
                      architecture. Optimized for conversion, speed, and
                      seamless UX across all devices.
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-surface-variant">
                      <div>
                        <span className="text-xs text-secondary uppercase block mb-1">
                          Starting Price
                        </span>
                        <span className="font-headline-md text-primary">
                          $4,500
                        </span>
                      </div>
                      <button className="px-6 py-3 bg-on-secondary-fixed text-white rounded-lg font-label-md hover:bg-primary transition-all active:scale-95">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      data-alt="A designer's desk with a high-end drawing tablet and a stylus. On the screen, a complex vector illustration of a modern cityscape is being edited. The lighting is warm and creative, with a shallow depth of field focusing on the precision of the stylus against the digital surface. The color palette is composed of rich blacks, slate grays, and electric indigo highlights."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmBMeRDN9C41NeEpdrMNEJIK2N4NMYyGmcwLBKqvJoVw0BLsTYnpForyNwW3NZW-WSpxAKEFdAdi_ONqJhxkl83wbQV9-ey_9WX9cyt4iJ8pYGoP8LBT_AnP6V7kbyNhMFYJ-kbFZTxjOAmCLSJUoHstMbwknXtoFow0xrhdIoP6NLKxStEaTmlteYOpttcoB6Q5HIajBcaOiBF1xGdypQ-L-ciWmMxdlD8o6zEbg5sEl1OyeTaw88ytE94D7Fqp0v_vfqbCkc4_A"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        Graphics Design
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        Editorial Illustration Pack
                      </h3>
                      <span className="material-symbols-outlined text-secondary hover:text-error transition-colors cursor-pointer">
                        favorite
                      </span>
                    </div>
                    <p className="font-body-md text-secondary mb-8 line-clamp-2">
                      Bespoke digital illustrations for publications, web
                      content, and internal communications. Hand-crafted vectors
                      that tell your unique story.
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-surface-variant">
                      <div>
                        <span className="text-xs text-secondary uppercase block mb-1">
                          Starting Price
                        </span>
                        <span className="font-headline-md text-primary">
                          $800
                        </span>
                      </div>
                      <button className="px-6 py-3 bg-on-secondary-fixed text-white rounded-lg font-label-md hover:bg-primary transition-all active:scale-95">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      data-alt="A macro shot of a sleek smartphone screen displaying a dynamic dashboard with glowing charts and metrics. The background is a blurred high-tech office with cool neon lighting. The interface is clean, dark-themed, and highly sophisticated, representing professional SaaS platform development and data-driven website creation with a focus on modern corporate aesthetics."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8QFXZxktAEDz0x__-TRkCNEas3Le4rlfshYsjAQWNpMqdFW2Jq0veGTBd30sB4D9z63yx8DsLJHz2p4uXQpLM2MSV6ei7X7ZzrfA7zSDGtCcDgT3XCsCE9o5Gc4RINnlMW3c_6k7RfhPO1KWBiEKfJqkaFIGE_CzECt5JFW3hbXnJQYtaBGIrin7HiQsqWxRvgIW4UfdbauLwjfdwmJdUR9P3atnzVVFctPjyVEtEbtDOf5bGsvAwRQ4GkU7Y_oTXLAy9uJwWfY0"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        Website Creation
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        Custom SaaS Product Design
                      </h3>
                      <span className="material-symbols-outlined text-secondary hover:text-error transition-colors cursor-pointer">
                        favorite
                      </span>
                    </div>
                    <p className="font-body-md text-secondary mb-8 line-clamp-2">
                      End-to-end product engineering from prototype to launch.
                      Specialized in complex data visualization and multi-tenant
                      systems.
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-surface-variant">
                      <div>
                        <span className="text-xs text-secondary uppercase block mb-1">
                          Starting Price
                        </span>
                        <span className="font-headline-md text-primary">
                          $8,900
                        </span>
                      </div>
                      <button className="px-6 py-3 bg-on-secondary-fixed text-white rounded-lg font-label-md hover:bg-primary transition-all active:scale-95">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex items-center justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-secondary hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-label-md">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent text-secondary hover:bg-surface-container font-label-md transition-colors">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent text-secondary hover:bg-surface-container font-label-md transition-colors">
                  3
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-secondary hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </section>
          <section className="bg-slate-900 py-24 text-white">
            <div className="max-w-[1440px] mx-auto px-16">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-xl">
                  <h2 className="font-display-xl text-headline-lg mb-6">
                    Built by experts, <br />
                    trusted by innovators.
                  </h2>
                  <p className="font-body-lg text-slate-400">
                    We don't just build websites and design logos; we engineer
                    digital experiences that drive market leadership.
                  </p>
                </div>
                <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-label-md hover:bg-indigo-50 transition-all active:scale-95 mb-2">
                  Partner With Us
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-indigo-400 text-4xl mb-6">
                    bolt
                  </span>
                  <h4 className="font-headline-md text-headline-md mb-4">
                    Precision First
                  </h4>
                  <p className="font-body-md text-slate-400 leading-relaxed">
                    Every pixel is deliberate. Every line of code is optimized
                    for maximum performance and clarity.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors md:mt-12">
                  <span className="material-symbols-outlined text-indigo-400 text-4xl mb-6">
                    auto_awesome
                  </span>
                  <h4 className="font-headline-md text-headline-md mb-4">
                    Creative Mastery
                  </h4>
                  <p className="font-body-md text-slate-400 leading-relaxed">
                    Artistic vision meets business strategy. Our designs don't
                    just look good; they solve problems.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-indigo-400 text-4xl mb-6">
                    shield
                  </span>
                  <h4 className="font-headline-md text-headline-md mb-4">
                    Rock-Solid Trust
                  </h4>
                  <p className="font-body-md text-slate-400 leading-relaxed">
                    From initial wireframe to final launch, your vision is
                    protected by our uncompromising quality standards.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full mt-auto border-t bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 font-inter text-sm tracking-wide">
          <div className="max-w-[1440px] mx-auto px-16 py-24 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <span className="text-xl font-bold text-slate-900 dark:text-white mb-6 block">
                Vexa
              </span>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mb-8">
                Redefining digital excellence through precision design and
                high-performance engineering. Join the elite who choose Vexa.
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">
                    language
                  </span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">
                    alternate_email
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-slate-900 dark:text-white font-semibold mb-6">
                Company
              </h5>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    href="#"
                  >
                    About Vexa
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    href="#"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-900 dark:text-white font-semibold mb-6">
                Support
              </h5>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    href="#"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    href="#"
                  >
                    Order Status
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    href="#"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-900 dark:text-white font-semibold mb-6">
                Stay Updated
              </h5>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Join our newsletter for the latest digital trends.
              </p>
              <div className="flex">
                <input
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-indigo-600 outline-none"
                  placeholder="Email address"
                  type="email"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-16 py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-slate-400">
              © 2024 Vexa. Engineered for excellence.
            </p>
            <div className="flex gap-8">
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default services;
