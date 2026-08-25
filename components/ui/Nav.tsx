import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { IoPersonSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useAuthContextStore } from "../../store/useAuthContext";
import { useSelector } from "react-redux";
import type { ProductType } from "../../types/product.types";

type RootState = {
  product: {
    addToCart: ProductType[];
  };
};

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const { user, refetch } = useAuthContextStore();

  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart
  );

  // Calculate total item quantity in cart
  const totalCartCount = CartedProduct?.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  useEffect(() => {
    if (refetch) {
      refetch();
    }
  }, []);

  const toggleMenu = () => setMenu((prev) => !prev);
  const closeMenu = () => setMenu(false);

  const logout = () => {
    localStorage.removeItem("token");
    closeMenu();
    window.location.href = "/login";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", hasDropdown: true },
    { name: "Services", path: "/services" },
    { name: "Search", path: "/search" },
    { name: "Profile", path: "/profile" },
  ];

  const desktopNavLinks = navLinks.filter((link) => link.name !== "Profile");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3.5 w-full max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group">
          <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 group-hover:text-emerald-700 transition-colors">
            VEXA<span className="text-emerald-700">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {desktopNavLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.path}
                  className="relative group py-2"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? "text-emerald-700 font-extrabold"
                          : "text-slate-600 hover:text-emerald-700"
                      }`
                    }
                  >
                    <span>Shop</span>
                    <span className="text-[10px] transition-transform duration-200 group-hover:rotate-180">
                      ▼
                    </span>
                  </NavLink>

                  {/* Desktop Dropdown Menu */}
                  {openDropdown && (
                    <div className="absolute top-full left-0 w-48 bg-white border border-slate-200/80 shadow-xl rounded-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <Link
                        to="/search?category=Fashion"
                        className="block px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Fashion
                      </Link>
                      <Link
                        to="/search?category=Shoes"
                        className="block px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Shoes
                      </Link>
                      <Link
                        to="/search?category=Accessories"
                        className="block px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        Accessories
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-emerald-700 font-extrabold"
                      : "text-slate-600 hover:text-emerald-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative p-2 text-slate-700 hover:text-emerald-700 transition-colors active:scale-95"
            aria-label="View Cart"
          >
            <AiOutlineShoppingCart className="text-2xl" />
            {totalCartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-rose-500 text-white text-[10px] font-extrabold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in">
                {totalCartCount}
              </span>
            )}
          </Link>

          {/* Profile Icon (Desktop & Tablet) */}
          <Link
            to="/profile"
            className="hidden md:flex items-center justify-center w-9 h-9 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 rounded-full text-slate-600 transition-colors border border-slate-200/60"
            title={
              user?.firstName
                ? `${user.firstName} ${user.lastName || ""}`
                : "Profile"
            }
            aria-label="Profile Page"
          >
            <IoPersonSharp className="text-base" />
          </Link>

          {/* Desktop Auth Controls */}
          {user?.email ? (
            <button
              onClick={logout}
              className="hidden md:block px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer uppercase tracking-wider"
            >
              Logout
            </button>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <Button
                  color="text-white"
                  content="Login"
                  bg="bg-emerald-700 hover:bg-emerald-800"
                  cursor="cursor-pointer"
                  border="shadow-xs rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all"
                />
              </Link>
              <Link to="/signup">
                <Button
                  color="text-emerald-700"
                  content="Sign Up"
                  bg="bg-emerald-50 hover:bg-emerald-100"
                  cursor="cursor-pointer"
                  border="border border-emerald-200/80 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all"
                />
              </Link>
            </div>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-800 hover:text-emerald-700 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {menu && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
          />

          {/* Drawer Sidebar */}
          <aside className="relative w-[80%] max-w-xs bg-slate-900 shadow-2xl z-60 h-screen flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                <span className="text-xl font-black text-white tracking-wider">
                  VEXA<span className="text-emerald-500">.</span>
                </span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <MdClose className="text-2xl" />
                </button>
              </div>

              {/* User Account Info Box */}
              {user?.email && (
                <div className="flex items-center gap-3 p-3 mb-6 bg-slate-800/80 rounded-2xl border border-slate-700/60">
                  <div className="p-2.5 bg-emerald-700 text-white rounded-xl">
                    <IoPersonSharp className="text-base" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-white truncate">
                      {user.firstName
                        ? `${user.firstName} ${user.lastName || ""}`
                        : "Account"}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-emerald-700 text-white shadow-xs"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <span className="text-[10px]">▼</span>}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Auth Actions */}
            <div className="pt-6 border-t border-slate-800 mb-20 space-y-3">
              {user?.email ? (
                <button
                  onClick={logout}
                  className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  Log out
                </button>
              ) : (
                <div className="flex flex-col gap-2.5">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-center rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-center rounded-xl text-xs uppercase tracking-wider transition-all active:scale-95 border border-slate-700"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Nav;
