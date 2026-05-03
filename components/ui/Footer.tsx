import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter mb-20">
          <div className="col-span-full md:col-span-4">
            <h2 className="text-3xl font-black tracking-tighter mb-6">VEXA</h2>
            <p className="text-slate-400 font-body-md max-w-sm mb-8">
              Redefining luxury through technical precision and editorial style.
              Your destination for the finest curated tech, fashion, and
              services.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="public"
                >
                  public
                </span>
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="alternate_email"
                >
                  alternate_email
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 md:col-span-2">
            <h5 className="font-label-md uppercase tracking-widest text-slate-500 mb-8">
              Shop
            </h5>
            <ul className="space-y-4">
              <li>
                <NavLink
                  className="text-slate-300 hover:text-white transition-colors"
                  to="/categories/tech"
                >
                  Tech Essentials
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-slate-300 hover:text-white transition-colors"
                  to="#"
                >
                  Men's Fashion
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-slate-300 hover:text-white transition-colors"
                  to="#"
                >
                  Women's Fashion
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-slate-300 hover:text-white transition-colors"
                  to="#"
                >
                  Footwear
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-full sm:col-span-6 md:col-span-2">
            <h5 className="font-label-md uppercase tracking-widest text-slate-500 mb-8">
              Services
            </h5>
            <ul className="space-y-4">
              <li>
                <NavLink
                  className="text-slate-300 hover:text-white transition-colors"
                  to="#"
                >
                  Automotive Concierge
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-slate-300 hover:text-white transition-colors"
                  to="#"
                >
                  Styling Lab
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-slate-300 hover:text-white transition-colors"
                  to="#"
                >
                  Vexa Members
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-slate-300 hover:text-white transition-colors"
                  to="#"
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-full md:col-span-4">
            <h5 className="font-label-md uppercase tracking-widest text-slate-500 mb-8">
              Newsletter
            </h5>
            <p className="text-slate-400 mb-6">
              Subscribe to receive first access to limited drops.
            </p>
            <div className="flex gap-2">
              <input
                className="flex-grow bg-slate-900 border-none rounded-lg px-4 text-white focus:ring-1 focus:ring-primary"
                placeholder="Email Address"
                type="email"
              />
              <button className="px-6 py-3 bg-white text-slate-950 font-label-md rounded-lg hover:bg-primary hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[13px] font-label-sm">
          <p>© 2024 VEXA GLOBAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <NavLink className="hover:text-white transition-colors" to="#">
              Privacy Policy
            </NavLink>
            <NavLink className="hover:text-white transition-colors" to="#">
              Terms of Service
            </NavLink>
            <NavLink className="hover:text-white transition-colors" to="#">
              Accessibility
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
