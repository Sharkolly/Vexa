import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="bg-background text-on-background min-h-screen flex flex-col overflow-x-hidden">
        <header className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-slate-100 dark:border-slate-800 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-center max-w-[1440px] mx-auto px-16 h-24">
            <div className="flex items-center gap-12">
              <a
                className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white transition-all duration-300 ease-out hover:opacity-80 active:scale-95 duration-200"
                href="/"
              >
                Vexa
              </a>
              <nav className="hidden md:flex items-center gap-8">
                <a
                  className="text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300 ease-out active:scale-95 duration-200"
                  href="#"
                >
                  Tech
                </a>
                <a
                  className="text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300 ease-out active:scale-95 duration-200"
                  href="#"
                >
                  Fashion
                </a>
                <a
                  className="text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300 ease-out active:scale-95 duration-200"
                  href="#"
                >
                  Shoes
                </a>
                <a
                  className="text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300 ease-out active:scale-95 duration-200"
                  href="#"
                >
                  Cars
                </a>
                <a
                  className="text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300 ease-out active:scale-95 duration-200"
                  href="#"
                >
                  Services
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant">
                <span
                  className="material-symbols-outlined text-outline mr-2"
                  data-icon="search"
                >
                  search
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm w-48"
                  placeholder="Search Vexa..."
                  type="text"
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  data-icon="favorite"
                >
                  favorite
                </button>
                <button
                  className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  data-icon="shopping_cart"
                >
                  shopping_cart
                </button>
                <button
                  className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  data-icon="person"
                >
                  person
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow pt-24">
          <section className="max-w-[1440px] mx-auto px-16 py-32 flex flex-col items-center justify-center text-center">
            [03/05/2026 15:32] Fola 🖤:{" "}
            <div className="relative mb-stack-lg">
              <span className="text-[180px] font-black text-surface-container-high leading-none select-none tracking-tighter">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  alt="Error Graphic"
                  className="w-64 h-64 object-contain"
                  data-alt="A clean, minimalist 3D rendering of a floating, translucent white box that is slightly cracked, revealing a vibrant electric indigo glow from within. The box is suspended in a bright, airy gallery space with soft, diffused white lighting and subtle shadows on the light gray floor. The aesthetic is high-end corporate minimalism with a focus on precision and light-mode clarity."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmE6aEgJnZX6aPWvc3W4PL00Oqi2neqyI6FchS0hvBmMJgZ1InQO_Y4tJ0OWNeykKH1igejgX3kLO1ZGIaBntopdpMQwFb6E0sdi5x6SmPWhXfhLSmYy2xe4sE5mhiD_vwrG1zTRY4znceBjTiqtpFd_-MOtUOWoiNTU4yqq4Su-ApbalYxiLLp4QCt7xO371btafj_UvhuRqYKFL1GyUnPe43NZQhN3Oahv-HOQb6HYhnrZurk_IFrTuiNX3v2SUeqQuV_Qew6CI"
                />
              </div>
            </div>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-stack-sm tracking-tighter">
              Lost in the Digital World?
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
              The page you're looking for doesn't exist. It might have been
              moved, or perhaps it never arrived in this dimension.
            </p>
            <div className="flex flex-col sm:flex-row gap-gutter justify-center mb-16">
              <a
                className="bg-primary text-on-primary px-10 py-4 rounded-xl font-headline-md text-headline-md shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 duration-200"
                href="/"
              >
                Back to Home
              </a>
              <div className="flex items-center bg-surface-container px-6 py-4 rounded-xl border border-outline-variant focus-within:border-primary transition-colors">
                <span
                  className="material-symbols-outlined text-outline mr-3"
                  data-icon="search"
                >
                  search
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 font-body-md text-body-md w-full sm:w-64"
                  placeholder="Search products..."
                  type="text"
                />
              </div>
            </div>
            <div className="w-full max-w-5xl mt-12">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-gutter text-left">
                Popular Destinations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <a
                  className="group relative overflow-hidden rounded-xl h-64 bg-slate-200 border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
                  href="#"
                >
                  <img
                    alt="Tech Category"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="A macro photograph of high-end, minimalist consumer electronics featuring brushed aluminum textures and glowing LED accents. The lighting is cold and clinical, emphasizing the precision engineering and sleek luxury of the products. The background is a soft, out-of-focus white studio setting that maintains a premium corporate editorial look."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATgmLtybDFEJj8QJ9zXt2HZyLn9iioTVoZyI-faCneSaEwATIs14OqJAlD4lenz2ob5iezfXVJuIgkjmZu9nqfaUiUkFrIw3EOcM95UOYumopjCD3gze32mrPZWjilRh1xvzvbro6F9tzrI9OHpUBVUoVKpEH8wrAsJ5GHeUotBf9NqRGfT_AWxGhkKmWoU0j-Q2zLxm_GClG4Qf9LA38lvz0lOvtkPijI-Qk11hPBDwLyEgycTSKR4GKc519PCIQYVNZGMY6dHz4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-left">
                    <p className="text-white font-headline-md text-headline-md">
                      Tech
                    </p>
                    <p className="text-slate-300 font-label-sm text-label-sm uppercase tracking-widest">
                      Innovation First
                    </p>
                  </div>
                </a>
                <a
                  className="group relative overflow-hidden rounded-xl h-64 bg-slate-200 border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
                  href="#"
                >
                  <img
                    alt="Fashion Category"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="A high-fashion editorial shot featuring clean, architectural garment silhouettes in shades of cream and charcoal.
[03/05/2026 15:32] Fola 🖤: The setting is a minimalist concrete studio with sharp, dramatic shadows and bright, direct lighting that highlights fabric textures. The overall mood is sophisticated, exclusive, and representative of a high-end fashion catalog."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr6G611_N7U2Y5a4D7KSEIfrca2wgi_Rsptdk5gH-1T7Rgfd6RRnPFJMZvwcWJfW7ZYCphMAv9U2a70pVN4yP0dzBGTY50E5rCJ6sfIMXMd0fncjbGZ5Tiw06aUnswQ7bXcFvBISIzUcDB4y_EEzB2XMfsFs9V0kxw5B1JqZCYPqWhxmmOwjA4TkbQzjel1w9Zz2FOwYIjMbOzQ7B4NNtXul72SwqKdwhPza6VDsUAbG5gbeHX8rD35WrA0JhStxkM_SWfL46ECAc"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-left">
                    <p className="text-white font-headline-md text-headline-md">
                      Fashion
                    </p>
                    <p className="text-slate-300 font-label-sm text-label-sm uppercase tracking-widest">
                      Timeless Design
                    </p>
                  </div>
                </a>
                <a
                  className="group relative overflow-hidden rounded-xl h-64 bg-slate-200 border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
                  href="#"
                >
                  <img
                    alt="Shoes Category"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt="A focused studio shot of a premium, vibrant red sneaker placed on a pristine white reflective surface. The lighting is soft and multi-directional to eliminate harsh shadows, creating a gallery-like atmosphere. The background is a clean, neutral gray gradient that emphasizes the bold color and athletic silhouette of the footwear."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3Kt0lR7M7Q9VtrLejfOPNULvUNiYX-MvL6in7XmS_M4Gy8zpKalR16wYJiBigxFJXABfIQG3Dzs6OSem7Qt_FKeddS5jbR8bh7SXCu2chaXyFpqgR1RFehUDjwn2_DGzDoAabXivimyn5YXstEqR0z_2w85qxiJut4eR85u6wMO8G4nLGm0O6-JHIM509e9PARw012yAJ3P40zh1KmSCutoR4EKKucpK1PZ-awCdSDNCax1hPx_rDKKosFxCKiZTCNIR8By2jn9g"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-left">
                    <p className="text-white font-headline-md text-headline-md">
                      Shoes
                    </p>
                    <p className="text-slate-300 font-label-sm text-label-sm uppercase tracking-widest">
                      Premium Comfort
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-50 dark:bg-slate-900/50 w-full mt-auto border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-[1440px] mx-auto px-16 py-24 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 font-inter text-sm tracking-wide">
            <div className="lg:col-span-2">
              <span className="text-xl font-bold text-slate-900 dark:text-white mb-6 block">
                Vexa
              </span>
              <p className="text-slate-500 dark:text-slate-400 leading-loose max-w-xs mb-8">
                The pinnacle of modern retail engineering. Bringing you
                excellence through curated design and technical precision.
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer"
                  href="#"
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon="share"
                  >
                    share
                  </span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer"
                  href="#"
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon="public"
                  >
                    public
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 leading-loose hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    href="#"
                  >
                    About Vexa
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 leading-loose hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    href="#"
                  >
                    Sustainability
                  </a>
                </li>
                [03/05/2026 15:32] Fola 🖤:{" "}
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 leading-loose hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-6">
                Support
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 leading-loose hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    href="#"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 leading-loose hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    href="#"
                  >
                    Order Status
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-500 dark:text-slate-400 leading-loose hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    href="#"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-6">
                Newsletter
              </h4>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Join the elite circle.
              </p>
              <div className="flex flex-col gap-4">
                <input
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-16 py-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-[0.2em]">
              © 2024 Vexa. Engineered for excellence.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NotFound;
