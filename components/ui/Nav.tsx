import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md  dark:border-slate-800 shadow-sm  ">
      <div className="flex items-center justify-between px-4 md:px-6 py-4 w-full max-w-360 mx-auto">
        <div className="flex items-center ga justify-between">
          <h1
            className="text-3xl font-black tracking-wide text-slate-900 
            "
          >
            VEXA
          </h1>
        </div>
        <nav className="hidden md:flex  gap-8">
          <NavLink
            className="text-indigo-600 dark:text-indigo-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/arrivals"
          >
            New Arrivals
          </NavLink>
        </nav>
        <div className="flex items-center gap-6">
          <button
            className="material-symbols-outlined text-slate-500"
            data-icon="search"
          >
            search
          </button>
          <button
            className="material-symbols-outlined text-indigo-600 dark:text-indigo-400"
            data-icon="shopping_bag"
          >
            shopping_bag
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
