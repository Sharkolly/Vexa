import { useState } from "react";

const CheckoutPage = () => {
  const [payment, setPayment] = useState("card");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 pt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* SHIPPING */}
           <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-6 text-nav-blue-active/80">Shipping Details</h2>

      <form className="space-y-4">

        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="input"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input"
          />
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="input"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input"
          />
        </div>

        {/* Address */}
        <input
          type="text"
          placeholder="Street Address"
          className="input"
        />

        <input
          type="text"
          placeholder="Apartment, Suite, Landmark (optional)"
          className="input"
        />

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            className="input"
          />
          <input
            type="text"
            placeholder="State"
            className="input"
          />
          <input
            type="text"
            placeholder="ZIP Code"
            className="input"
          />
        </div>

        {/* Country */}
        <select className="input">
          <option>Nigeria</option>
          <option>Ghana</option>
          <option>Kenya</option>
          <option>South Africa</option>
          <option>United Kingdom</option>
        </select>

        {/* Save Address */}
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" />
          Save this address for future orders
        </label>

      </form>
    </div>

          {/* DELIVERY OPTIONS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-nav-blue-active/80">Delivery Method</h2>

            <div className="space-y-3">

              {[
                { id: "standard", label: "Standard Delivery", time: "3–5 days", price: "₦2,000" },
                { id: "express", label: "Express Delivery", time: "1–2 days", price: "₦5,000" },
                { id: "same", label: "Same Day", time: "Within 24h", price: "₦8,000" },
              ].map((item) => (
                <label
                  key={item.id}
                  className="flex justify-between items-center border p-4 rounded-xl cursor-pointer hover:border-black"
                >
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">{item.price}</span>
                    <input
                      type="radio"
                      name="delivery"
                    />
                  </div>
                </label>
              ))}

            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-nav-blue-active/80" >Payment Method</h2>

            <div className="space-y-3">

              {[
                { id: "card", label: "Card Payment (Visa/Mastercard)" },
                { id: "bank", label: "Bank Transfer" },
                { id: "cod", label: "Pay on Delivery" },
              ].map((p) => (
                <label
                  key={p.id}
                  className="flex justify-between items-center border p-4 rounded-xl cursor-pointer"
                >
                  <span>{p.label}</span>
                  <input
                    type="radio"
                    checked={payment === p.id}
                    onChange={() => setPayment(p.id)}
                  />
                </label>
              ))}

            </div>
          </div>

        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow-sm h-fit sticky top-4">

          <h2 className="text-xl font-bold mb-5 text-nav-blue-active/80">Order Summary</h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦40,000</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₦2,000</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span>-₦1,000</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold">
              <span className="text-nav-blue-active/80">Total</span>
              <span className="text-nav-blue-active/80">₦41,000</span>
            </div>
          </div>

          {/* PROMO */}
          <div className="mt-5 flex gap-2">
            <input className="border p-2 rounded-lg w-full" placeholder="Promo code" />
            <button className="text-white px-4 rounded-lg bg-nav-blue-active/80">
              Apply
            </button>
          </div>

          {/* BUTTON */}
          <button className="w-full mt-6 bg-nav-blue-active/80  text-white py-3 rounded-xl hover:opacity-90 transition">
            Place Order
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            Secure checkout • Encrypted payment
          </p>

        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;