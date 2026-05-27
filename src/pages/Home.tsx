// import Marquee from "react-fast-marquee";
// import LandingPage from "../../components/ui/LandingPage";
import CountUp from "../../components/ui/CountUp";

import Categories from "../../components/ui/Categories";
import ShopWithUs from "../../components/ui/ShopWithUs";
// import NewsLetter from "../../components/ui/NewsLetter";
// import Testimonials from "../../components/ui/Testimonials";
import FeaturedProduct from "../../components/ui/FeaturedProduct";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen text-gray-900 pt-16 ">
      <div className="bg-green-800 text-white text-center text-sm py-2 px-4">
        🚚 Free Delivery On Orders Above ₦100,000
      </div>
      {/* <Marquee >🚚 Free Delivery On Orders Above ₦100,000</Marquee> 
         <Marquee play={true}>
        🚚 Free Delivery On Orders Above ₦100,000
      </Marquee>
       <Marquee speed={60} pauseOnHover gradient={false}>
        <span className="mx-6">🔥 Flash Sale — Up to 70% OFF</span>
        <span className="mx-6">🚚 Free Delivery on Orders Above ₦100k</span>
        <span className="mx-6">⚡ New Arrivals Every Week</span>
        <span className="mx-6">💳 Secure Payments Available</span>
      </Marquee> */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&auto=format&fit=crop"
          alt="hero"
          className="w-full h-[600px] object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center ">
          <div className="w-[90%] max-md:w-[95%] mx-auto px-4 text-white">
            <span className="bg-red-500 px-4 py-2 rounded-full text-sm font-semibold">
              UP TO 70% OFF
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight max-w-3xl">
              Discover The Best Deals On Premium Products
            </h2>

            <p className="mt-4 text-lg text-gray-200 max-w-2xl">
              Shop trending products with secure payments, fast delivery, and
              amazing discounts.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/shop">
              <button className="bg-blue-800 cursor-pointer hover:bg-blue-800 px-6 py-3.5 rounded-xl font-semibold transition">
                Shop Now
              </button>
              </Link>

              <button className="bg-white cursor-pointer text-black px-6 py-3.5 rounded-xl font-semibold">
                Explore Deals
              </button>
            </div>
          </div>
        </div>
      </section>

      <CountUp />
      <Categories />
      <FeaturedProduct />
      <ShopWithUs />
      {/* <Testimonials /> */}
      {/* <NewsLetter /> */}
    </div>
  );
};

export default Home;
