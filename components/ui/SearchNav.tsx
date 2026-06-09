import { Link } from "react-router-dom";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

const SearchNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] h-20 px-4 pb-4 flex justify-around items-center">
      <Link
        className="flex flex-col items-center justify-center text-indigo-600 gap-1 active:scale-95 duration-200"
        to="/"
      >
        <span className="material-symbols-outlined" data-icon="home_max">
          <IoIosHome />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider">
          Home
        </span>
      </Link>
      <Link
        className="flex flex-col items-center justify-center text-slate-400 gap-1 active:scale-95 duration-200"
        to="/shop"
      >
        <span className="material-symbols-outlined" data-icon="grid_view">
          <RiShoppingBag4Fill />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider">
          Shop
        </span>
      </Link>
      <Link
        className="flex flex-col items-center justify-center text-slate-400 gap-1 active:scale-95 duration-200"
        to="/shop"
      >
        <span className="material-symbols-outlined" data-icon="grid_view">
          <BiCategory />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider">
          Categories
        </span>
      </Link>
      <Link
        className="flex flex-col items-center justify-center text-slate-400 gap-1 active:scale-95 duration-200"
        to="#"
      >
        <span className="material-symbols-outlined" data-icon="person">
          <IoPersonSharp />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider">
          Account
        </span>
      </Link>
    </nav>
  );
};

export default SearchNav;
