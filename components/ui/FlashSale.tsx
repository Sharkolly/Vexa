

const FlashSale = () => {
  return (
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="text-3xl font-black">⚡ Flash Sale Live Now</h2>

            <p className="mt-3 text-white/90 max-w-xl">
              Get premium products at discounted prices before the sale ends.
            </p>
          </div>

          <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold">
            Grab Deals
          </button>
        </div>
      </section>  );
};

export default FlashSale;
