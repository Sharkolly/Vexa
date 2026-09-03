import { useAuthContextStore } from "../../store/useAuthContext";
import { useSelector } from "react-redux";
import SearchNav from "../../components/ui/SearchNav";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PayButton } from "../../components/ui/paystack";

type RootState = {
  product: {
    total: {
      totalPrice: number;
      totalItems: number;
      overallTotal: number;
      totalDelivery?: number;
    };
  };
};

const CheckoutPage = () => {
  const { deliveryDetails } = useAuthContextStore();
  const total = useSelector((state: RootState) => state.product.total);

  return (
    <div className="pt-20 pb-24 max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 xl:px-16 text-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT COLUMN: DELIVERY DETAILS */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm transition-shadow hover:shadow-md">
          <div className="border-b border-slate-100 pb-5 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Delivery Details
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Please review your delivery details before proceeding with payment.
            </p>
          </div>

          <form className="space-y-5">
            {/* NAME & EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  disabled={true}
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-600 bg-slate-100/80 cursor-not-allowed select-none"
                  value={deliveryDetails.fullName || ""}
                  
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Email Address
                </label>
                <input
                  type="email"
                  disabled={true}
                  placeholder="Email Address"
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-600 bg-slate-100/80 cursor-not-allowed select-none"
                  value={deliveryDetails.email || ""}
                  
                />
              </div>
            </div>

            {/* PHONE & LANDMARK */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  disabled={true}
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-600 bg-slate-100/80 cursor-not-allowed select-none"
                  value={deliveryDetails.phone || ""}
                  
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Landmark
                </label>
                <input
                  type="tel"
                  disabled={true}
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-600 bg-slate-100/80 cursor-not-allowed select-none"
                  placeholder="Apartment, Suite, Landmark (optional)"
                  value={deliveryDetails.landmark || ""}
                  
                />
              </div>
            </div>

            {/* CITY & STATE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  City
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="City"
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-600 bg-slate-100/80 cursor-not-allowed select-none"
                  value={deliveryDetails.city || ""}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  State
                </label>
                <input
                  type="text"
                  disabled={true}
                  placeholder="State"
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-600 bg-slate-100/80 cursor-not-allowed select-none"
                  value={deliveryDetails.state || ""}
                  
                />
              </div>
            </div>

            {/* COUNTRY */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Country
              </label>
              <select
                className="w-full border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-600 bg-slate-100/80 cursor-not-allowed select-none"
                disabled
              >
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>South Africa</option>
                <option>United Kingdom</option>
              </select>
            </div>

            {/* SAVE ADDRESS CHECKBOX */}
            <div className="pt-2">
              <label className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500/20"
                />
                <span>Save this address for future orders</span>
              </label>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: ORDER SUMMARY */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm sticky top-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-4 mb-5">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>Subtotal</span>
              <span className="font-mono text-slate-900 font-bold">
                ₦{total?.totalPrice?.toLocaleString() || 0}
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-600 font-medium">
              <span>Shipping</span>
              <span className="font-mono text-slate-900 font-bold">
                ₦{(deliveryDetails.deliveryFee).toLocaleString() || 0}
              </span>
            </div>

            <hr className="border-slate-100 my-2" />

            <div className="flex justify-between items-center text-base font-bold text-slate-900">
              <span>Total</span>
              <span className="font-mono text-lg text-emerald-700">
                ₦
                {total?.totalPrice
                  ? ( deliveryDetails.totalFee || total.totalPrice ).toLocaleString()
                  : 0}
              </span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-7 space-y-3">
            <div className="w-full">
              <PayButton
                email={deliveryDetails.email || "sharkollymofeoluwa@gmail.com"}
                amountInNaira={deliveryDetails.totalFee + total?.totalPrice || total?.totalPrice}
              />
            </div>

            <Link to="/delivery" className="block">
              <button className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                <IoIosArrowRoundBack className="w-6 h-6" />
                <span>Go Back</span>
              </button>
            </Link>
          </div>

          <p className="text-xs text-slate-400 text-center mt-6 font-medium">
            🔒 Secure checkout • Encrypted payment
          </p>
        </div>
      </div>

      <SearchNav />
    </div>
  );
};

export default CheckoutPage;
