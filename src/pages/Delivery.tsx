import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { ProductType } from "../../types/product.types";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { useAuthContextStore } from "../../store/useAuthContext";
import SearchNav from "../../components/ui/SearchNav";

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

  const total = useSelector((state: RootState) => state.product.total);

  const changeDeliveryDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    // console.log(deliveryDetails)
  };

  return (
    <div className="pt-24 pb-24 max-w-[1440px] mx-auto w-full md:px-10 xl:px-16 max-md:pt-24 max-md:px-2.5">
      <div className="grid xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2  bg-white p-6 rounded-xl shadow max-md:p-0 max-md:shadow-none">
          <h1 className="text-3xl text-nav-blue-active/80 font-bold mb-6">
            Delivery Information
          </h1>

          <div className="space-y-4">
            <div className="flex gap-5 justify-between max-md:flex-col  max-md:gap-3">
              <div className="gap-1 flex flex-col flex-1">
                <label className="font-medium text-gray-500">Email </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full outline-none border border-gray-500  rounded-lg p-3"
                  value={deliveryDetails.email || ""}
                  name="email"
                  onChange={changeDeliveryDetails}
                />
              </div>

              <div className="gap-1  flex flex-col flex-1">
                <label className="font-medium text-gray-500">Full Name </label>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full outline-none border border-gray-500  rounded-lg p-3"
                  value={deliveryDetails.fullName || ""}
                  name="fullName"
                  onChange={changeDeliveryDetails}
                />
              </div>
            </div>

            <label className="font-medium text-gray-500">Phone Number </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full outline-none border border-gray-500  rounded-lg p-3"
              value={deliveryDetails.phone || ""}
              name="phone"
              onChange={changeDeliveryDetails}
            />

            <div className="flex gap-4 justify-between max-md:flex-col  max-md:gap-4 mb-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-medium text-gray-500">Country </label>
                <input
                  type="text"
                  placeholder="Country"
                  className="border border-gray-500  rounded-lg p-3"
                  value={"Nigeria"}
                  disabled
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-medium text-gray-500">State </label>
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-500  rounded-lg p-3"
                  value={deliveryDetails.state || ""}
                  name="state"
                  onChange={changeDeliveryDetails}
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-medium text-gray-500">City </label>
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-500  rounded-lg p-3"
                  value={deliveryDetails.city || ""}
                  name="city"
                  onChange={changeDeliveryDetails}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-between max-md:flex-col  max-md:gap-4 mb-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="font-medium text-gray-500">Address </label>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full outline-none border border-gray-500  rounded-lg p-3"
                name="address"
                onChange={changeDeliveryDetails}
              />
            </div>

            <div className="flex flex-col gap-1.5 flex-1 mb-4">
              <label className="font-medium text-gray-500">Landmark </label>
              <input
                type="text"
                placeholder="Apartment, Landmark (Optional)"
                className="w-full outline-none border border-gray-500  rounded-lg p-3"
                name="landmark"
                onChange={changeDeliveryDetails}
              />
            </div>
          </div>

          {/* <div className="space-y-3 pt-4">
            <h2 className="font-semibold text-lg text-nav-blue-active/80">
              Delivery Method
            </h2>

            <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium">Standard Delivery</p>
                <p className="text-sm text-gray-500">3-5 Business Days</p>
              </div>

              <input
                type="radio"
                checked={deliveryMethod === "standard"}
                onChange={() => setDeliveryMethod("standard")}
              />
            </label>

            <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium">Express Delivery</p>
                <p className="text-sm text-gray-500">1-2 Business Days</p>
              </div>

              <input
                type="radio"
                checked={deliveryMethod === "express"}
                onChange={() => setDeliveryMethod("express")}
              />
            </label>
          </div> */}
        </div>
        {/* </div> */}

        <div className="bg-white p-6 rounded-xl shadow-lg max-md:shadow-xl max-md:border max-md:border-gray-200 h-fit sticky top-4  overflow-y-auto mb-10">
          {/* <div className="bg-white md:p-6 rounded-xl shadow-lg md:h-fit md:sticky md:top-4 p-3 py-5 max-md:border-t-1 max-md:shadow-none fixed bottom-0 left-0 z-10  right-0 h-[280px] overflow-y-auto"> */}
          <h2 className="md:text-xl text-2xl  font-bold mb-4 text-nav-blue-active/80">
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

            <hr />

            <div className="flex justify-between text-lg font-bold">
              <span className="text-nav-blue-active/80">Total</span>
              <span className="text-nav-blue-active/80">
                ₦{(total?.totalPrice * 1.03).toLocaleString() || 0}
              </span>
            </div>
          </div>

          <Link to="/checkout">
            <button className="w-full outline-none py-3 mb-4 mt-6 bg-green-800/90 text-white  rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer flex items-center justify-center  gap-2">
              <span>
                <IoBagCheckOutline className="text-white w-5 h-5" />
              </span>
              <p>Proceed to Checkout</p>
            </button>
          </Link>
          <Link to="/shop">
            <button className="w-full border border-green-700  text-green-700 py-3 rounded-xl cursor-pointer flex items-center justify-center gap-2">
              <span>
                <FaShoppingBag className="text-green-700 w-4 h-4" />
              </span>
              <p>Continue Shopping</p>
            </button>
          </Link>
        </div>
      </div>
      <SearchNav/>
    </div>
  );
};

export default DeliveryPage;
