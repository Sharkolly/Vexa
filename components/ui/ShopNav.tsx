import { Link } from "react-router-dom";

const ShopNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] h-20 px-4 pb-4 flex justify-around items-center">
      <Link
        className="flex flex-col items-center justify-center text-indigo-600 gap-1 active:scale-95 duration-200"
        to="/"
      >
        <span className="material-symbols-outlined" data-icon="home_max">
          home_max
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider">
          Home
        </span>
      </Link>
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
  );
};

export default ShopNav;
