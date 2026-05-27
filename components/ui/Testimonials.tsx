const Tesimonials = () => {
      const testimonials = [
    {
      name: "David",
      text: "One of the best online shopping experiences I’ve had.",
    },
    {
      name: "Sarah",
      text: "Fast delivery and the product quality was top notch.",
    },
    {
      name: "Michael",
      text: "The checkout process was smooth and easy.",
    },
  ];

  return (
   <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl  text-nav-blue-active/90  font-bold">Customer Reviews</h2>

          <p className="text-gray-500 mt-3">What our customers are saying.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-600 mt-4 leading-7">{item.text}</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                  {item.name[0]}
                </div>

                <div>
                  <h4 className="font-bold">{item.name}</h4>

                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Tesimonials
