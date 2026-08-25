
import { Link } from "react-router-dom";
import { PackageX, ArrowRight, RotateCcw } from "lucide-react";

interface NoProductProps {
  category?: string;
  onReset?: () => void;
}

const NoProduct = ({ category, onReset }: NoProductProps) => {
  const isFilteredCategory = category && category.toLowerCase() !== "all";

  return (
    <div className="w-full min-h-[410px] flex flex-col items-center justify-center text-center px-4 py-12 rounded-3xl border border-dashed border-slate-200/80 bg-slate-50/50 my-6">
      {/* Visual Icon with Ambient Glow */}
      <div className="relative mb-5 flex items-center justify-center">
        <div className="absolute w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
        <div className="relative w-16 h-16 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-emerald-600">
          <PackageX className="w-8 h-8 stroke-[1.5]" />
        </div>
      </div>

      {/* Main Title */}
      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
        No {isFilteredCategory ? <span className="capitalize text-emerald-700">{category}</span> : null} Products Found
      </h3>

      {/* Subtext */}
      <p className="text-sm text-slate-500 max-w-md mt-2 leading-relaxed">
        We couldn't find any items matching this view right now. Try resetting your filter or exploring other categories.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        {onReset && (
          <button
            onClick={onReset}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider shadow-2xs transition-all cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear Filter</span>
          </button>
        )}

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer active:scale-95 border border-slate-800"
        >
          <span>Explore All Items</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default NoProduct;
