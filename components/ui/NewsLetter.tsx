const NewsLetter = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-20">
      <div className="bg-blue-700 rounded-3xl p-10 text-white text-center">
        <h2 className="text-4xl font-black">Subscribe To Our Newsletter</h2>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Get updates on latest products, discounts, and exclusive deals.
        </p>

        <div className="max-w-2xl mx-auto mt-8 flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-xl text-black outline-none"
          />

          <button className="bg-black px-8 py-4 rounded-xl font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
