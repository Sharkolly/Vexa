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
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const [menu, setMenu] = useState(false);
  const { user, refetch } = useAuthContextStore();

  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart,
  );

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  const toggleMenu = () => setMenu(!menu);
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md  dark:border-slate-800 shadow-sm  ">
      <div className="flex items-center justify-between px-4 md:px-6 py-4 w-full max-w-380 mx-auto">
        <div className="flex items-center ga justify-between">
          <h1
            className="text-3xl font-black tracking-wide text-slate-900 
            "
          >
            VEXA
          </h1>
        </div>
        <nav
          className={`flex  gap-6 max-md:flex-col  max-md:fixed max-md:top-0 max-md:pt-10 max-md:h-screen  max-md:bg-navy-blue max-md:right-0 max-md:backdrop-blur-md max-md:w-[55%] max-md:px-10 max-md:gap-12 ${!menu && "max-md:hidden font-semibold z-10 "} `}
        >
          <div
            className="absolute top-5 right-4 cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <MdClose className="text-white text-3xl" />
          </div>
          <NavLink
            className="text-indigo-600 dark:text-indigo-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest max-md:mt-8"
            to="/"
          >
            Home
          </NavLink>
          <span
            className="relative text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest cursor-pointer"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <NavLink to="/shop" className="hover:text-blue-600">
              Shop ▾
            </NavLink>

            {/* Dropdown */}
            {open && (
              <div className="absolute top-11 -z-20 -left-10 w-50 bg-slate-50 shadow-lg rounded-md py-2">
                <a className="block px-7 py-2 hover:bg-gray-100" href="#">
                  Tech
                </a>
                <a className="block px-7 py-2 hover:bg-gray-100" href="#">
                  Fashion
                </a>
                <a className="block px-7 py-2 hover:bg-gray-100" href="#">
                  Shoes
                </a>
                <a className="block px-7 py-2 hover:bg-gray-100" href="#">
                  Accessories
                </a>
              </div>
            )}
          </span>
          <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/cart"
          >
            Cart
          </NavLink>
          <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/search"
          >
            Search
          </NavLink>
          {/* <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors uppercase tracking-widest"
            to="/delivery"
          >
            Delivery
          </NavLink> */}
          <NavLink
            className="text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 transition-colors md:hidden uppercase tracking-widest"
            to="/random"
          >
            Random
          </NavLink>
          {!user && (
            <>
              <Link
                to="/login"
                className="md:hidden text-slate-500 text-[14px]  tracking-widest dark:text-slate-400"
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className="md:hidden text-[14px] tracking-widest text-slate-500 dark:text-slate-400"
              >
                SIGNUP
              </Link>
            </>
          )}
          <button
            onClick={logout}
            className="md:hidden cursor-pointer text-slate-500 dark:text-slate-400 font-headline-md text-[14px] hover:text-indigo-500 uppercase tracking-widest "
          >
            Log out
          </button>
        </nav>
        <div className="flex items-center gap-6">
          <button
            className="hidden material-symbols-outlined text-slate-500"
            data-icon="search"
          >
            search
          </button>
          <Link
            to="/cart"
            className="text-2xl relative z-1 text-slate-500"
            data-icon="shopping_bag"
          >
            <AiOutlineShoppingCart />

            <span className="absolute -top-2 bg-red-600 text-white text-xs w-1 h-1  -right-2 -z-10 flex justify-center items-center  p-2  rounded-full ">
              {CartedProduct.length || 0}
            </span>
          </Link>

          {user?.email && user ? (
            <>
              <Link
                to="/login"
                className="text-xl bg-slate-100 p-2 rounded-full text-slate-500"
                title={`${user?.firstName} ${user?.lastName}`}
              >
                <IoPersonSharp />
              </Link>

              <button
                onClick={logout}
                className="max-md:hidden px-4 py-1.5 bg-red-600 text-white rounded-md shadow-md active:scale-95 transition-transform font-semibold cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-3 max-md:hidden">
              <Link to="/login" className="cursor-pointer">
                <Button
                  color="text-white"
                  content="Login"
                  bg="bg-blue-800"
                  cursor="cursor-pointer"
                  border="border-2 border-blue-800 shadow-md"
                />
              </Link>

              <Link to="/signup" className="">
                <Button
                  color="text-blue-800"
                  content="Sign Up"
                  bg="bg-transparent"
                  cursor="cursor-pointer"
                  border="border-2 border-blue-800 shadow-md"
                />
              </Link>
            </div>
          )}

          <div onClick={toggleMenu} className="md:hidden cursor-pointer">
            <GiHamburgerMenu className="text-2xl rounded-lg " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
