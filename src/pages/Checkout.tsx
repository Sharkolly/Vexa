import { useState } from "react";
import { useAuthContextStore } from "../../store/useAuthContext";
import { useSelector } from "react-redux";
import SearchNav from "../../components/ui/SearchNav";

type RootState = {
  product: {
    // addToCart: ProductType[];
    total: {
      totalPrice: number;
      totalItems: number;
      overallTotal: number;
      totalDelivery?: number;
    };
  };
};

const CheckoutPage = () => {
  const {  deliveryDetails } = useAuthContextStore();
  const total = useSelector((state: RootState) => state.product.total);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 pt-28 max-md:pt-24 max-md:mb-20 max-md:px-2.5">
      <div className="max-w-[1440px] mx-auto w-full md:px-10 xl:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border-gray-200 border p-6 max-md:p-5 ">
            <h2 className="text-2xl font-bold mb-6 text-nav-blue-active/80">
              Shipping Details
            </h2>

            <form className="space-y-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input"
                  value={deliveryDetails.fullName || ""}
                  disabled
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input"
                  value={deliveryDetails.email || ""}
                  disabled
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input"
                  value={deliveryDetails.phone || ""}
                  disabled
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="input"
                  value={deliveryDetails.address || ""}
                  disabled
                />
                <input
                  type="text"
                  placeholder="Apartment, Suite, Landmark (optional)"
                  className="input"
                  value={deliveryDetails.landmark || ""}
                  disabled
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="input"
                  value={deliveryDetails.city || ""}
                  disabled
                />
                <input
                  type="text"
                  placeholder="State"
                  className="input"
                  value={deliveryDetails.state || ""}
                  disabled
                />
                {/* <input
            type="text"
            placeholder="ZIP Code"
            className="input"
            disabled
          /> */}
              </div>

              <select className="input" disabled>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>South Africa</option>
                <option>United Kingdom</option>
              </select>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                Save this address for future orders
              </label>
            </form>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm h-fit sticky top-4 border-gray-200 border">
          <h2 className="md:text-xl  text-2xl  font-bold mb-4 text-nav-blue-active/80">
            Order Summary
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦{total?.totalPrice?.toLocaleString() || 0}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₦{(total?.totalPrice * 0.03).toLocaleString() || 0}</span>
            </div>

            <hr className='text-gray-300'/>

            <div className="flex justify-between text-lg font-bold">
              <span className="text-nav-blue-active/80">Total</span>
              <span className="text-nav-blue-active/80">₦{total?.totalPrice ? (total.totalPrice + (total.totalPrice * 0.03)).toLocaleString() : 0}</span>
            </div>
          </div>

       
          <button className="w-full mt-6 bg-green-800/90  text-white py-3 rounded-xl hover:opacity-90 transition">
            Place Order
          </button>

          <p className="text-xs text-gray-500 text-center mt-6">
            Secure checkout • Encrypted payment
          </p>
        </div>
      </div>
      <SearchNav/>
    </div>
  );
};

export default CheckoutPage;
