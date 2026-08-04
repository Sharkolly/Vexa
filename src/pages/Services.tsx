import { servicesData } from "../../data/services";
const Services = () => {
  return (
    <div>
      <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
        <main className="pt-17 min-h-screen">
          <section className="relative h-140  flex items-center overflow-hidden bg-surface-container">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-80"
                data-alt="A professional and high-end digital design studio environment with large high-resolution monitors displaying vibrant abstract user interface layouts. The lighting is cool-toned and sophisticated, creating a modern creative-agency atmosphere. Elegant glass surfaces reflect the soft glow of the screens, while the overall aesthetic is clean, minimalist, and luxury-oriented with indigo and slate accents."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA68LJYW0JM7G0bptR65jIM7TNwrX6LHtMor0GaJx_z9FUpYNv_zhaHCwvT3wmJmH-O30K5hI9zOs5qyAP3GbE20Ep_4nhqyHd91MVhx237steHu7lL4FUNaCI7kDIm6Tf3aKvELn8pbLHTxiYlR-KEMjUiVer14kmnHAilQjdHMlioruUTzh3Ro_EQgKoAqBz6dq3lOQt01daYkHzQ4lD_ZPf7IV4ZomlT-gOug5Q81ASOKmELsm1xZFxqpazZYKvvV_GRdVxRx90"
              />
              <div className="absolute inset-0 bg-gradient-to-r  from-white/40 via-white/50 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-16 w-full max-md:px-5 max-[330px]:px-3 ">
              <div className="max-w-2xl">
                <span className="font-sm text-blue-900  tracking-[0.3em] uppercase mb-4 block">
                  Premier Digital Solutions
                </span>
                <h1 className="font-display-xl text-5xl max-md:text-4xl md:text-display-xl font-bold mb-6 max-w-2xl leading-[1.3]">
                  Elevate Your Brand Through Design &amp; Tech.
                </h1>
                <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-lg mb-10">
                  Bespoke digital services tailored for the modern enterprise.
                  From visionary Graphics Design to seamless Website Creation,
                  we engineer excellence.
                </p>
                <div className="flex gap-4 max-md:flex-col">
                  <button className="px-8 py-4 bg-nav-blue-active cursor-pointer text-white font-label-md rounded-lg shadow-xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 font-semibold">
                    View Portfolio
                  </button>
                  <button className="px-8 py-4 border border-outline rounded-lg font-label-md cursor-pointer transition-all font-semibold  active:scale-95">
                    Our Process
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-360 mx-auto px-16 py-24 max-md:py-10 max-md:px-5 max-[320px]:px-3 flex flex-col xl:flex-row gap-5">
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-32">
                <h2 className="font-semibold text-3xl mb-8">
                  Filters
                </h2>
                <div className="space-y-8">
                  <div>
                    <button className="flex items-center justify-between w-full font-medium text-lg mb-4">
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
                        <span className=" group-hover:text-nav-blue-active transition-colors">
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
                  <div className="border-t border-slate-300  pt-8">
                    <button className="flex items-center justify-between w-full font-medium mb-4">
                      Budget Range
                      <span className="material-symbols-outlined text-sm">
                        expand_more
                      </span>
                    </button>
                  </div>
                  <div className="border-t border-slate-300  pt-8">
                    <button className="flex items-center justify-between w-full font-medium mb-4">
                      Delivery Time
                      <span className="material-symbols-outlined text-sm">
                        expand_more
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <div className="grow">
              <div className="flex justify-between items-center mb-12">
                <p className="font-body-md text-secondary">
                  <span className="font-bold text-on-surface">12</span><span className=""> services <span className="max-[320px]:hidden">found</span></span>
                  {/* found in Digital Category */}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-secondary uppercase max-[320px]:hidden">
                    Sort By:
                  </span>
                  <select className="border-none font-medium text-on-surface focus:ring-0 cursor-pointer px-2">
                    <option>Recommended</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {servicesData.map((service) => (
                  <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        data-alt="A sophisticated collection of minimalist brand identity assets including business cards, letterheads, and a sleek mobile device displaying a logo. The composition uses a clean, high-contrast palette of indigo and white, with soft professional studio lighting and deep shadows to emphasize luxury texture and premium paper quality. The overall feel is modern, corporate, and extremely precise."
                        src={service.imageUrl}
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-nav-blue-active">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 max-xl:p-5 max-[320px]:p-3">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-xl text-on-surface">
                          {service.title}
                        </h3>
                        <span className="material-symbols-outlined text-secondary hover:text-error transition-colors cursor-pointer">
                          favorite
                        </span>
                      </div>
                      <p className="mb-6 text-slate-500 text-sm">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-600">
                        <div>
                          <span className="text-xs text-secondary uppercase block mb-1">
                            Starting Price
                          </span>
                          <span className="font-medium text-lg  text-nav-blue-active">
                            ${service.price.toLocaleString()}
                          </span>
                        </div>
                        <button className="px-5 py-2.5 bg-black text-white rounded-lg font-label-md hover:bg-primary transition-all active:scale-95">
                          Inquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 flex items-center justify-center gap-2 max-md:mt-10">
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
          <section className="bg-slate-900 py-24 text-white max-md:py-12">
            <div className="max-w-[1440px] mx-auto px-16 max-lg:px-8 max-md:px-6 ">
              <div className="flex justify-between max-lg:flex-col lg:items-center  mb-16 gap-8">
                <div className="max-w-xl">
                  <h2 className="font-semibold text-4xl mb-6 leading-12 max-[320px]:text-3xl">
                    Built by experts, <br />
                    trusted by innovators.
                  </h2>
                  <p className="font-light text-slate-400">
                    We don't just build websites and design logos; we engineer
                    digital experiences that drive market leadership.
                  </p>
                </div>
                <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-label-md hover:bg-indigo-50 transition-all active:scale-95 mb-2">
                  Partner With Us
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors max-xl:p-5">
                  <span className="material-symbols-outlined text-indigo-400 text-4xl mb-6">
                    {/* bolt */}
                  </span>
                  <h4 className="font-semibold text-3xl mb-4 ">
                    Precision First
                  </h4>
                  <p className="font-light text-slate-400 leading-relaxed">
                    Every pixel is deliberate. Every line of code is optimized
                    for maximum performance and clarity.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors lg:mt-12 max-xl:p-5">
                  <span className="material-symbols-outlined text-indigo-400 text-4xl mb-6">
                    {/* auto_awesome */}
                  </span>
                  <h4 className="font-semibold text-3xl mb-4 ">
                    Creative Mastery
                  </h4>
                  <p className="font-light text-slate-400 leading-relaxed">
                    Artistic vision meets business strategy. Our designs don't
                    just look good; they solve problems.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors max-xl:p-5">
                  <span className="material-symbols-outlined text-indigo-400 text-4xl mb-6">
                    {/* shield */}
                  </span>
                  <h4 className="font-semibold text-3xl mb-4 ">
                    Rock-Solid Trust
                  </h4>
                  <p className="font-light text-slate-400 leading-relaxed">
                    From initial wireframe to final launch, your vision is
                    protected by our uncompromising quality standards.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Services;
