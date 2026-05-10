import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {

  const [menu, setMenu] = useState(false); 

  const toggleMenu = () => setMenu(!menu)
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
        <nav className={`flex  gap-6 max-md:flex-col  max-md:fixed max-md:top-0 max-md:pt-10 max-md:h-screen  max-md:bg-navy-blue max-md:right-0 max-md:backdrop-blur-md max-md:w-[55%] max-md:px-10 max-md:gap-12 ${menu ? '' : 'max-md:hidden'} `}>
        <div className='absolute top-5 right-4 cursor-pointer md:hidden' onClick={toggleMenu}>
          <MdClose className='text-white text-3xl' />
        </div>
          <NavLink
            className="text-indigo-600 dark:text-indigo-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest max-md:mt-8"
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
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/delivery"
          >
            Delivery
          </NavLink>
          <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/product-details"
          >
            Product
          </NavLink>
          {/* <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/arrivals"
          >
            New Arrivals
          </NavLink> */}
        </nav>
        <div className="flex items-center gap-6">
          <button
            className="hidden material-symbols-outlined text-slate-500"
            data-icon="search"
          >
            search
          </button>
          <button
            className="text-2xl"
            // className=" text-indigo-600 text-2xl  dark:text-indigo-400"
            data-icon="shopping_bag"
          >
            <AiOutlineShoppingCart />
          </button>
          <div onClick={toggleMenu} className="md:hidden cursor-pointer">
            <GiHamburgerMenu className='text-2xl rounded-lg ' />
          </div> 
        </div>
      </div>
    </header>
  );
};

export default Nav;
