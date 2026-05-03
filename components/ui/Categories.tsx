import { categories_data } from "../../data/categories";

const Categories = () => {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="flex justify-between items-center mb-16">
          <h3 className="font-semibold text-3xl text-on-surface">
            The Vexa Selection
          </h3>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
              <span
                className="material-symbols-outlined"
                data-icon="chevron_left"
              >
                chevron_left
              </span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
              <span
                className="material-symbols-outlined"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories_data.map((category) => (
            <div className="group">
              <div className="relative aspect-3/4 overflow-hidden rounded-xl mb-6 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt={category.alt}
                  src={category.image}
                />
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    data-icon="favorite"
                  >
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-3 bg-white/90 text-black font-label-md rounded-lg shadow-lg">
                    Quick Add
                  </button>
                </div>
              </div>
              <p className="font-label-sm text-slate-500 font-medium text-outline tracking-wider uppercase">
                {category.category} • {category.attributes}
              </p>
              <h4 className="font-headline-md font-semibold text-on-surface text-[18px] mt-2">
                {category.name}
              </h4>
              <p className="font-xl text-nav-blue-active font-semibold mt-1">
                {category.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
