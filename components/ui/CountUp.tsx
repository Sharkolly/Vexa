// import Marquee from "react-fast-marquee";
// import CountUp from "react-countup";

const CountUpPage = () => {
  return (
    <section className="w-[90%] max-md:w-[95%] mx-auto px-4 py-16">
      {/* <Marquee play={true}>
        🚚 Free Delivery On Orders Above ₦100,000
      </Marquee>
       <Marquee speed={60} pauseOnHover gradient={false}>
        <span className="mx-6">🔥 Flash Sale — Up to 70% OFF</span>
        <span className="mx-6">🚚 Free Delivery on Orders Above ₦100k</span>
        <span className="mx-6">⚡ New Arrivals Every Week</span>
        <span className="mx-6">💳 Secure Payments Available</span>
      </Marquee> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "20K+", label: "Happy Customers" , color: "green-600"},
          { value: "99%", label: "Positive Reviews" , color: "red-600 "},
          { value: "10K+", label: "Products" , color: "blue-600"},
          { value: "24/7", label: "Customer Support" , color: "indigo-700"},
        ].map((item) => (
          <div
            key={item.label}
            className={`bg-white rounded-2xl p-3.5 text-center  shadow-md`}
          > 
            <h3 className={`text-2xl md:text-3xl font-semibold  text-${item.color}`}>
              {item.value}
            </h3>

            {/* <CountUp
              start={0}
              end={parseInt(item.value)}
              duration={2.5}
              separator=","
              className={`text-2xl md:text-3xl font-semibold  text-${item.color}`}
            /> */}

            <p className="mt-2 text-gray-500 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountUpPage;
