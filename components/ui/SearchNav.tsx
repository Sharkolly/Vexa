import { NavLink } from "react-router-dom";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

const SearchNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] h-16 px-2 flex justify-around items-center">
      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-full h-full gap-0.5 active:scale-95 transition-all duration-200 ${
            isActive
              ? "text-emerald-700 font-bold"
              : "text-slate-400 hover:text-slate-600 font-medium"
          }`
        }
        to="/"
      >
        {({ isActive }) => (
          <>
            <span
              className={`p-1 rounded-xl transition-all duration-300 ${
                isActive ? "bg-emerald-50 text-emerald-700 scale-110" : ""
              }`}
            >
              <IoIosHome className="w-5 h-5" />
            </span>
            <span className="text-[10px] uppercase tracking-wider">Home</span>
          </>
        )}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-full h-full gap-0.5 active:scale-95 transition-all duration-200 ${
            isActive
              ? "text-emerald-700 font-bold"
              : "text-slate-400 hover:text-slate-600 font-medium"
          }`
        }
        to="/shop"
      >
        {({ isActive }) => (
          <>
            <span
              className={`p-1 rounded-xl transition-all duration-300 ${
                isActive ? "bg-emerald-50 text-emerald-700 scale-110" : ""
              }`}
            >
              <RiShoppingBag4Fill className="w-5 h-5" />
            </span>
            <span className="text-[10px] uppercase tracking-wider">Shop</span>
          </>
        )}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-full h-full gap-0.5 active:scale-95 transition-all duration-200 ${
            isActive
              ? "text-emerald-700 font-bold"
              : "text-slate-400 hover:text-slate-600 font-medium"
          }`
        }
        to="/search?categories=All"
      >
        {({ isActive }) => (
          <>
            <span
              className={`p-1 rounded-xl transition-all duration-300 ${
                isActive ? "bg-emerald-50 text-emerald-700 scale-110" : ""
              }`}
            >
              <BiCategory className="w-5 h-5" />
            </span>
            <span className="text-[10px] uppercase tracking-wider">
              Categories
            </span>
          </>
        )}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-full h-full gap-0.5 active:scale-95 transition-all duration-200 ${
            isActive
              ? "text-emerald-700 font-bold"
              : "text-slate-400 hover:text-slate-600 font-medium"
          }`
        }
        to="/profile"
      >
        {({ isActive }) => (
          <>
            <span
              className={`p-1 rounded-xl transition-all duration-300 ${
                isActive ? "bg-emerald-50 text-emerald-700 scale-110" : ""
              }`}
            >
              <IoPersonSharp className="w-5 h-5" />
            </span>
            <span className="text-[10px] uppercase tracking-wider">
              Account
            </span>
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default SearchNav;
