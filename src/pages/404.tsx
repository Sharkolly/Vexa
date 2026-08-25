import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Search } from "lucide-react";

const CATEGORIES = [
  {
    title: "Tech",
    subtitle: "Innovation First",
    href: "/search?category=Electronics",
    alt: "Tech Category",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATgmLtybDFEJj8QJ9zXt2HZyLn9iioTVoZyI-faCneSaEwATIs14OqJAlD4lenz2ob5iezfXVJuIgkjmZu9nqfaUiUkFrIw3EOcM95UOYumopjCD3gze32mrPZWjilRh1xvzvbro6F9tzrI9OHpUBVUoVKpEH8wrAsJ5GHeUotBf9NqRGfT_AWxGhkKmWoU0j-Q2zLxm_GClG4Qf9LA38lvz0lOvtkPijI-Qk11hPBDwLyEgycTSKR4GKc519PCIQYVNZGMY6dHz4",
  },
  {
    title: "Fashion",
    subtitle: "Timeless Design",
    href: "/search?category=Fashion",
    alt: "Fashion Category",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr6G611_N7U2Y5a4D7KSEIfrca2wgi_Rsptdk5gH-1T7Rgfd6RRnPFJMZvwcWJfW7ZYCphMAv9U2a70pVN4yP0dzBGTY50E5rCJ6sfIMXMd0fncjbGZ5Tiw06aUnswQ7bXcFvBISIzUcDB4y_EEzB2XMfsFs9V0kxw5B1JqZCYPqWhxmmOwjA4TkbQzjel1w9Zz2FOwYIjMbOzQ7B4NNtXul72SwqKdwhPza6VDsUAbG5gbeHX8rD35WrA0JhStxkM_SWfL46ECAc",
  },
  {
    title: "Shoes",
    subtitle: "Premium Comfort",
    href: "/search?category=Beauty",
    alt: "Shoes Category",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Kt0lR7M7Q9VtrLejfOPNULvUNiYX-MvL6in7XmS_M4Gy8zpKalR16wYJiBigxFJXABfIQG3Dzs6OSem7Qt_FKeddS5jbR8bh7SXCu2chaXyFpqgR1RFehUDjwn2_DGzDoAabXivimyn5YXstEqR0z_2w85qxiJut4eR85u6wMO8G4nLGm0O6-JHIM509e9PARw012yAJ3P40zh1KmSCutoR4EKKucpK1PZ-awCdSDNCax1hPx_rDKKosFxCKiZTCNIR8By2jn9g",
  },
];

const NotFound = () => {
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchProduct.trim()) return;
    navigate(`/search?product=${encodeURIComponent(searchProduct.trim())}`);
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow pt-24">
        <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-16 md:py-32 flex flex-col items-center justify-center text-center">
          {/* Hero Graphic */}
          <div className="relative mb-4 flex items-center justify-center">
            <span className="text-[140px] sm:text-[180px] font-black text-slate-200 leading-none select-none tracking-wide">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                alt="Error Graphic"
                className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmE6aEgJnZX6aPWvc3W4PL00Oqi2neqyI6FchS0hvBmMJgZ1InQO_Y4tJ0OWNeykKH1igejgX3kLO1ZGIaBntopdpMQwFb6E0sdi5x6SmPWhXfhLSmYy2xe4sE5mhiD_vwrG1zTRY4znceBjTiqtpFd_-MOtUOWoiNTU4yqq4Su-ApbalYxiLLp4QCt7xO371btafj_UvhuRqYKFL1GyUnPe43NZQhN3Oahv-HOQb6HYhnrZurk_IFrTuiNX3v2SUeqQuV_Qew6CI"
              />
            </div>
          </div>

          <h1 className="font-bold text-3xl md:text-4xl text-on-surface mt-6 mb-2 tracking-wide">
            Lost in the Digital World?
          </h1>
          <p className="text-md text-slate-700 max-w-xl mx-auto mb-8 mt-3">
            The page you're looking for doesn't exist. It might have been moved,
            or perhaps it never arrived in this dimension.
          </p>

          {/* Action Bar */}
          <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/"
              className="w-full sm:w-auto bg-nav-blue-active text-white px-5 py-2.5 rounded-xl font-medium text-base shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 duration-200 flex items-center justify-center gap-2"
            >
              <FaHome size={18} />
              <span>Back to Home</span>
            </Link>

            <form
              onSubmit={handleSearch}
              className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 items-center flex-1"
            >
              <div className="w-full flex items-center bg-surface-container px-4 py-2.5 rounded-xl border border-slate-400 focus-within:border-primary transition-colors">
                <Search size={18} className="text-gray-500 mr-3 flex-shrink-0" />
                <input
                  className="bg-transparent border-none focus:ring-0 w-full font-medium text-base outline-none text-on-surface placeholder:text-gray-400"
                  placeholder="Search products..."
                  type="text"
                  value={searchProduct}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchProduct(e.target.value)
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-400 hover:bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium text-base shadow-lg transition-all active:scale-95 duration-200 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
              >
                <Search size={18} className="text-white" />
                <span>Search</span>
              </button>
            </form>
          </div>

          {/* Popular Destinations */}
          <div className="w-full max-w-5xl mt-6">
            <h2 className="font-semibold text-2xl text-on-surface mb-6 text-left">
              Popular Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.title}
                  to={category.href}
                  className="group relative overflow-hidden rounded-xl h-80 bg-slate-200 border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <img
                    alt={category.alt}
                    src={category.src}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-left">
                    <p className="text-white font-semibold text-2xl">
                      {category.title}
                    </p>
                    <p className="text-slate-300 font-medium text-sm uppercase tracking-widest">
                      {category.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
