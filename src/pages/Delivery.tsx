import { useState } from "react";

const DeliveryPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("standard");

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-10">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl text-nav-blue-active/80  font-bold mb-6">
            Delivery Information
          </h1>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg p-3"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Country"
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="State"
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="City"
                className="border rounded-lg p-3"
              />
            </div>

            <input
              type="text"
              placeholder="Street Address"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Apartment, Landmark (Optional)"
              className="w-full border rounded-lg p-3"
            />

            <div className="space-y-3 pt-4">
              <h2 className="font-semibold text-lg text-nav-blue-active/80">
                Delivery Method
              </h2>

              <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium">
                    Standard Delivery
                  </p>
                  <p className="text-sm text-gray-500">
                    3-5 Business Days
                  </p>
                </div>

                <input
                  type="radio"
                  checked={deliveryMethod === "standard"}
                  onChange={() =>
                    setDeliveryMethod("standard")
                  }
                />
              </label>

              <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium">
                    Express Delivery
                  </p>
                  <p className="text-sm text-gray-500">
                    1-2 Business Days
                  </p>
                </div>

                <input
                  type="radio"
                  checked={deliveryMethod === "express"}
                  onChange={() =>
                    setDeliveryMethod("express")
                  }
                />
              </label>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white p-6 rounded-xl shadow h-fit sticky top-4">
          <h2 className="text-xl font-bold mb-4 text-nav-blue-active/80">
            Order Summary
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦40,000</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₦2,500</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold">
              <span className='text-nav-blue-active/80'>Total</span>
              <span className='text-nav-blue-active/80'>₦42,500</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-nav-blue-active text-white py-3 rounded-lg">
            Continue To Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;