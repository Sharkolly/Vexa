import { Link } from "react-router-dom";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { categories_data } from "../../data/categories";

const Categories = () => {
  return (
    <section className="w-[90%] max-md:w-[95%] mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/70">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-6 h-6 text-emerald-700" />
          <h2 className="text-2xl max-[440px]:text-lg sm:text-3xl font-black text-slate-900 tracking-tight">
            Shop By Category
          </h2>
        </div>

        <Link
          to="/shop"
          className="group flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-all"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories_data.map((item) => (
          <Link
            to={item.link}
            key={item.title}
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
          >
            {/* Background Category Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              loading="lazy"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent transition-opacity group-hover:from-slate-950/90" />

            {/* Card Content & Badge */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-white">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 mb-1 opacity-90 transition-transform duration-300 group-hover:-translate-y-0.5">
                Explore Collection
              </span>
              <div className="flex items-center justify-between w-full">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
