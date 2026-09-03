import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { ProductType } from "../../types/product.types";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { useAuthContextStore } from "../../store/useAuthContext";
import SearchNav from "../../components/ui/SearchNav";
import API from "../../api/api";
import type { AxiosError } from "axios";

type RootState = {
  product: {
    addToCart: ProductType[];
    total: {
      totalPrice: number;
      totalItems: number;
      overallTotal: number;
      totalDelivery?: number;
    };
  };
};

const DeliveryPage = () => {
  const { setDeliveryDetails, deliveryDetails } = useAuthContextStore();

  const [calculating, setCalculating] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  const total = useSelector((state: RootState) => state.product.total);

  const calcDistance = async () => {
    const destination = deliveryDetails.address;
    const numberOfProduct = total?.totalItems || 0;

    try {
      if (destination && numberOfProduct > 0) {
        setCalculating(true);
        const res = await API.post(
          `/products/get-distance`,
          { destination, numberOfProduct },
          { withCredentials: true }
        );
        const data = await res.data;
        setTimeout(() => {
          setCalculating(false);
        }, 1100);
        setDeliveryFee(data.deliveryFee);
      }
    } catch (error) {
      const errorMessage = error as AxiosError<{ message: string }>;
      console.error(errorMessage.message);
      setCalculating(false);
    }
  };

  const changeDeliveryDetails = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nigeriaStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Federal Capital Territory (FCT)",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  return (
    <div className="pt-20 pb-24 max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 xl:px-16 text-slate-800">
      <div className="grid xl:grid-cols-3 gap-8 items-start">
        {/* LEFT COLUMN: FORM */}
        <div className="xl:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm transition-shadow hover:shadow-md">
          <div className="border-b border-slate-100 pb-5 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Delivery Information
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Please enter your shipping address details to calculate accurate delivery rates.
            </p>
          </div>

          <div className="space-y-5">
            {/* EMAIL & FULL NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
                  value={deliveryDetails.email || ""}
                  name="email"
                  onChange={changeDeliveryDetails}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
                  value={deliveryDetails.fullName || ""}
                  name="fullName"
                  onChange={changeDeliveryDetails}
                />
              </div>
            </div>

            {/* PHONE NUMBER */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+234 800 000 0000"
                className="w-full border border-slate-300 rounded-xl p-3 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
                value={deliveryDetails.phone || ""}
                name="phone"
                onChange={changeDeliveryDetails}
              />
            </div>

            {/* COUNTRY, STATE & CITY */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Country
                </label>
                <input
                  type="text"
                  value="Nigeria"
                  disabled
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-500 bg-slate-100 cursor-not-allowed select-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  State
                </label>
                <select
                  name="state"
                  value={deliveryDetails.state || ""}
                  onChange={changeDeliveryDetails}
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all cursor-pointer"
                >
                  <option value="">Select State</option>
                  {nigeriaStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City / Town"
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
                  value={deliveryDetails.city || ""}
                  name="city"
                  onChange={changeDeliveryDetails}
                />
              </div>
            </div>

            {/* ADDRESS & LANDMARK */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="House number & street name"
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
                  value={deliveryDetails.address || ""}
                  name="address"
                  onChange={changeDeliveryDetails}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Landmark <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Apartment, suite, or nearby landmark"
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
                  value={deliveryDetails.landmark || ""}
                  name="landmark"
                  onChange={changeDeliveryDetails}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ORDER SUMMARY CARD */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm sticky top-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-4 mb-5">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>Subtotal ({total?.totalItems || 0} items)</span>
              <span className="font-mono text-slate-900 font-bold">
                ₦{total?.totalPrice?.toLocaleString() || 0}
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>Delivery Fee</span>
              <span className="font-mono font-bold text-slate-900">
                {calculating ? (
                  <span className="text-amber-600 animate-pulse text-xs">Calculating...</span>
                ) : (
                  `₦${deliveryFee?.toLocaleString() || 0}`
                )}
              </span>
            </div>

            <hr className="border-slate-100 my-2" />

            <div className="flex justify-between items-center text-base font-bold text-slate-900">
              <span>Total Amount</span>
              <span className="font-mono text-lg text-emerald-700">
                ₦{(total?.totalPrice + deliveryFee || 0).toLocaleString()}
              </span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-7 space-y-3">
            {deliveryFee > 0 && (
              <Link to="/checkout" className="block">
                <button className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-700/10 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                  <IoBagCheckOutline className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>
              </Link>
            )}

            <button
              disabled={calculating}
              onClick={calcDistance}
              className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-bold text-sm rounded-xl shadow-md shadow-amber-500/10 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <IoBagCheckOutline className="hidden" />
              <span>{calculating ? "Calculating Distance..." : "Calculate Delivery Fee"}</span>
            </button>

            <Link to="/shop" className="block">
              <button className="w-full py-3 px-4 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                <FaShoppingBag className="w-4 h-4 text-slate-600" />
                <span>Continue Shopping</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <SearchNav />
    </div>
  );
};

export default DeliveryPage;
