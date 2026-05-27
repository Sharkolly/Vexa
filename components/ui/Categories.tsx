import { categories_data } from "../../data/categories";

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl text-nav-blue-active/90  font-bold">Shop By Category</h2>

        <button className="text-blue-700 font-semibold">View All</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories_data.map((item) => (
          <div
            key={item.title}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
