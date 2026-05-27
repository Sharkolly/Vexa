const ShopWithUs = () => {
      const features = [
    {
      title: "Fast Delivery",
      desc: "Nationwide shipping within 24-72 hours.",
      icon: "🚚",
    },
    {
      title: "Secure Payments",
      desc: "Protected checkout with trusted gateways.",
      icon: "💳",
    },
    {
      title: "24/7 Support",
      desc: "Always available to help customers.",
      icon: "📞",
    },
    {
      title: "Easy Returns",
      desc: "Stress-free return process on products.",
      icon: "🔄",
    },
  ];
  return (
          <section className="bg-white py-12 max-md:py-12">
        <div className="w-[90%] max-md:w-[95%] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-nav-blue-active/90  font-bold">Why Shop With Us?</h2>

            <p className="text-gray-500 mt-3">
              Everything customers need for a smooth shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="borde shadow-md rounded-2xl p-8 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="text-xl font-bold mt-5">{item.title}</h3>

                <p className="text-gray-500 mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ShopWithUs
