import { useAuthContextStore } from "../../store/useAuthContext";
import { useSelector } from "react-redux";
import SearchNav from "../../components/ui/SearchNav";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PayButton } from "../../components/ui/paystack";

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
  const { deliveryDetails } = useAuthContextStore();
  const total = useSelector((state: RootState) => state.product.total);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 pt-28 max-md:pt-24 max-md:mb-20 max-md:px-2.5">
      <div className="max-w-[1440px] mx-auto w-full md:px-10 xl:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border-gray-200 border p-6 max-md:p-5 ">
            <h2 className="text-2xl font-bold mb-6 text-nav-blue-active/80">
              Delivery Details
            </h2>

            <form className="space-y-10 ">
              <div className="flex max-md:flex-col justify-be  gap-">
                <div className="flex gap-2 items-center w-full ">
                  <label htmlFor="">Name:</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input w-full text-gray-600 "
                    value={deliveryDetails.fullName || ""}
                    disabled
                  />
                </div>
                <div className="flex gap-2 items-center w-full  ">
                  <label htmlFor="">Email:</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input text-gray-600 w-full"
                    value={deliveryDetails.email || ""}
                    disabled
                  />
                </div>
              </div>

              <div className="flex max-md:flex-col justify-be  gap-">
                <div className="flex gap-2 items-center w-full  ">
                  <label htmlFor="">Phone Number:</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input text-gray-600"
                    value={deliveryDetails.phone || ""}
                    disabled
                  />
                </div>
                <div className="flex gap-2 items-center w-full  ">
                  <label htmlFor="">Landmark:</label>
                  <input
                    type="tel"
                    className="input text-gray-600 w-full"
                    placeholder="Apartment, Suite, Landmark (optional)"
                    value={deliveryDetails.landmark || ""}
                    disabled
                  />
                </div>
              </div>

              <div className="flex max-md:flex-col justify-be  gap-">
                <div className="flex gap-2 items-center w-full  ">
                  <label htmlFor="">City:</label>
                  <input
                    type="text"
                    disabled
                    placeholder="City"
                    className="input text-gray-600 w-full"
                    value={deliveryDetails.city || ""}
                  />
                </div>
                <div className="flex gap-2 items-center w-full  ">
                  <label htmlFor="">State:</label>
                  <input
                    type="text"
                    placeholder="State"
                    className="input text-gray-600 w-full"
                    value={deliveryDetails.state || ""}
                    disabled
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center w-full  ">
                <label htmlFor="">Country:</label>
                <select className="input text-gray-600 w-full" disabled>
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Kenya</option>
                  <option>South Africa</option>
                  <option>United Kingdom</option>
                </select>
              </div>

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
              <span className="text-lg">Subtotal</span>
              <span>₦{total?.totalPrice?.toLocaleString() || 0}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg">Shipping</span>
              <span>₦{(total?.totalPrice * 0.03).toLocaleString() || 0}</span>
            </div>

            <hr className="text-gray-300" />

            <div className="flex justify-between text-lg font-bold">
              <span className="text-nav-blue-active/80 text-lg">Total</span>
              <span className="text-nav-blue-active/80">
                ₦
                {total?.totalPrice
                  ? (
                      total.totalPrice +
                      total.totalPrice * 0.03
                    ).toLocaleString()
                  : 0}
              </span>
            </div>
          </div>

          <PayButton
            email={deliveryDetails.email || "sharkollymofeoluwa@gmail.com"}
            amountInNaira={total?.totalPrice}
          />
          <Link to="/delivery">
            <button className="w-full mt-4  bg-red-700/90  text-white py-3 rounded-xl hover:opacity-90 transition flex items-center gap-2 justify-center">
              <span>
                <IoIosArrowRoundBack className="w-6 h-6 " />
              </span>
              <span>Go Back</span>
            </button>
          </Link>

          <p className="text-xs text-gray-500 text-center mt-6">
            Secure checkout • Encrypted payment
          </p>
        </div>
      </div>
      <SearchNav />
    </div>
  );
};

export default CheckoutPage;
