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
  const [open, setOpen] = useState(false);
  const { user, refetch } = useAuthContextStore();

  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart,
  );

  useEffect(() => {
    refetch();
  }, [user, refetch]);

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95  backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="flex items-center justify-between px-4 sm:px-10  py-3.5 w-full  mx-auto">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900">
            VEXA
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.path}
                  className="relative group py-2"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-[13px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-blue-600"
                          : "text-slate-600 hover:text-blue-600"
                      }`
                    }
                  >
                    Shop <span className="text-xs">▾</span>
                  </NavLink>

                  {/* Desktop Dropdown */}
                  {open && (
                    <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <a
                        className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                        href="#"
                      >
                        Fashion
                      </a>
                      <a
                        className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                        href="#"
                      >
                        Shoes
                      </a>
                      <a
                        className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                        href="#"
                      >
                        Accessories
                      </a>
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
                  `text-[13px] font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative p-2 text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Cart"
          >
            <AiOutlineShoppingCart className="text-2xl" />
            <span className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow-xs">
              {CartedProduct?.length || 0}
            </span>
          </Link>

          {/* User Status / Desktop Auth */}
          {user?.email ? (
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/profile"
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors"
                title={`${user?.firstName || "User"} ${user?.lastName || ""}`}
              >
                <IoPersonSharp className="text-lg" />
              </Link>

              <button
                onClick={logout}
                className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer uppercase tracking-wider"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <Button
                  color="text-white"
                  content="Login"
                  bg="bg-blue-600 hover:bg-blue-700"
                  cursor="cursor-pointer"
                  border="shadow-xs rounded-lg px-4 py-2 text-xs font-semibold"
                />
              </Link>
              <Link to="/signup">
                <Button
                  color="text-blue-600"
                  content="Sign Up"
                  bg="bg-blue-50 hover:bg-blue-100"
                  cursor="cursor-pointer"
                  border="border border-blue-200 rounded-lg px-4 py-2 text-xs font-semibold"
                />
              </Link>
            </div>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Navigation Drawer */}
      {menu && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
          />

          {/* Drawer Sidebar */}
          <aside className="relative w-[80%] max-w-xs bg-navy-blue b-white shadow-2xl z-60 h-screen flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300 ">
            <div>
              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <span className="text-xl font-black tex-slate-900 text-white tracking-wider">
                  VEXA
                </span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <MdClose className="text-2xl" />
                </button>
              </div>

              {/* Sidebar User Header (If Logged In) */}
              {user?.email && (
                <div className="flex items-center gap-3 p-3 mb-6 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                    <IoPersonSharp className="text-base" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-slate-900 truncate">
                      {user.firstName ? `${user.firstName} ${user.lastName || ""}` : "Account"}
                    </p>
                    <p className="text-xs text-slate-500 truncate">{user.email}</p>
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
                      `px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <span className="text-xs">▾</span>}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t mb-20 border-slate-100 space-y-3">
              {user?.email ? (
                <button
                  onClick={logout}
                  className="w-full py-3 z-[1000] bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  Log out
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-center rounded-xl text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-center rounded-xl text-xs uppercase tracking-wider transition-all active:scale-95"
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