import React, { useState, useEffect, useMemo } from "react";

// Types
export interface BrandOption {
  id: string;
  name: string;
  count?: number;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

export interface FilterState {
  search: string;
  category: string;
  brands: string[];
  minPrice: number | "";
  maxPrice: number | "";
  minRating: number;
  inStockOnly: boolean;
  onSaleOnly: boolean;
  colors: string[];
  minDiscount: number;
}

export interface FilterSidebarProps {
  categories: { name: string; count?: number }[] | string[];
  brands?: BrandOption[];
  colors?: ColorOption[];
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categorySearchBtn: (category: string) => void;
  onFilterChange?: (filters: FilterState) => void;
  initialMinPrice?: number;
  initialMaxPrice?: number;
  autoApply?: boolean;
}

// Default Swatches
const DEFAULT_COLORS: ColorOption[] = [
  { id: "black", name: "Black", hex: "#000000" },
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "silver", name: "Silver", hex: "#E5E7EB" },
  { id: "blue", name: "Blue", hex: "#2563EB" },
  { id: "red", name: "Red", hex: "#DC2626" },
  { id: "green", name: "Green", hex: "#16A34A" },
  { id: "gold", name: "Gold", hex: "#D97706" },
];

const DEFAULT_BRANDS: BrandOption[] = [
  { id: "apple", name: "Apple", count: 42 },
  { id: "samsung", name: "Samsung", count: 38 },
  { id: "nike", name: "Nike", count: 19 },
  { id: "sony", name: "Sony", count: 15 },
  { id: "adidas", name: "Adidas", count: 12 },
  { id: "lg", name: "LG", count: 9 },
];

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  brands = DEFAULT_BRANDS,
  colors = DEFAULT_COLORS,
  category,
  setCategory,
  categorySearchBtn,
  onFilterChange,
  initialMinPrice = 0,
  initialMaxPrice = 1000000,
  autoApply = false,
}) => {
  // --- Mobile Drawer Open/Close State ---
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  // --- Filter State ---
  const [search, setSearch] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | "">(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | "">(initialMaxPrice);
  const [minRating, setMinRating] = useState<number>(0);
  const [minDiscount, setMinDiscount] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [onSaleOnly, setOnSaleOnly] = useState<boolean>(false);

  // --- UI Search Inputs ---
  const [brandSearchQuery, setBrandSearchQuery] = useState<string>("");

  // --- Accordion States ---
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    categories: true,
    price: true,
    brands: true,
    ratings: true,
    colors: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Normalize categories prop
  const normalizedCategories = useMemo(() => {
    return categories.map((cat) =>
      typeof cat === "string" ? { name: cat } : cat
    );
  }, [categories]);

  // Construct current state object
  const currentFilterState = useMemo<FilterState>(
    () => ({
      search,
      category,
      brands: selectedBrands,
      colors: selectedColors,
      minPrice: minPrice === "" ? 0 : minPrice,
      maxPrice: maxPrice === "" ? 1000000 : maxPrice,
      minRating,
      minDiscount,
      inStockOnly,
      onSaleOnly,
    }),
    [
      search,
      category,
      selectedBrands,
      selectedColors,
      minPrice,
      maxPrice,
      minRating,
      minDiscount,
      inStockOnly,
      onSaleOnly,
    ]
  );

  // Auto-apply trigger
  useEffect(() => {
    if (!autoApply) return;
    const timer = setTimeout(() => {
      onFilterChange?.(currentFilterState);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentFilterState, autoApply, onFilterChange]);

  // Handlers
  const handleApply = () => {
    onFilterChange?.(currentFilterState);
    setIsMobileOpen(false); // Close mobile drawer on apply
  };

  const handleCategorySelect = (catName: string) => {
    setCategory(catName);
    categorySearchBtn(catName);
  };

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((b) => b !== brandId)
        : [...prev, brandId]
    );
  };

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((c) => c !== colorId)
        : [...prev, colorId]
    );
  };

  const handleReset = () => {
    setSearch("");
    setCategory("All");
    categorySearchBtn("All");
    setSelectedBrands([]);
    setSelectedColors([]);
    setMinPrice(initialMinPrice);
    setMaxPrice(initialMaxPrice);
    setMinRating(0);
    setMinDiscount(0);
    setInStockOnly(false);
    setOnSaleOnly(false);

    const resetState: FilterState = {
      search: "",
      category: "All",
      brands: [],
      colors: [],
      minPrice: initialMinPrice,
      maxPrice: initialMaxPrice,
      minRating: 0,
      minDiscount: 0,
      inStockOnly: false,
      onSaleOnly: false,
    };
    onFilterChange?.(resetState);
  };

  // Active filter count calculation
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (search) count++;
    if (category && category !== "All") count++;
    if (selectedBrands.length > 0) count += selectedBrands.length;
    if (selectedColors.length > 0) count += selectedColors.length;
    if (minPrice !== initialMinPrice || maxPrice !== initialMaxPrice) count++;
    if (minRating > 0) count++;
    if (minDiscount > 0) count++;
    if (inStockOnly) count++;
    if (onSaleOnly) count++;
    return count;
  }, [
    search,
    category,
    selectedBrands,
    selectedColors,
    minPrice,
    maxPrice,
    initialMinPrice,
    initialMaxPrice,
    minRating,
    minDiscount,
    inStockOnly,
    onSaleOnly,
  ]);

  const filteredBrandsList = brands.filter((b) =>
    b.name.toLowerCase().includes(brandSearchQuery.toLowerCase())
  );

  return (
    <>
      {/* ========================================================= */}
      {/* 1. MOBILE TRIGGER BUTTON (Visible on < lg screens)       */}
      {/* ========================================================= */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="flex items-center justify-between w-full bg-white border border-gray-300 shadow-sm px-4 py-2.5 rounded-sm  text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-all active:scale-[0.99]"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span>Filters & Categories</span>
          </div>
          {activeFiltersCount > 0 && (
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* ========================================================= */}
      {/* 2. MOBILE OVERLAY BACKDROP                                */}
      {/* ========================================================= */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs transition-opacity"
        />
      )}

      {/* ========================================================= */}
      {/* 3. RESPONSIVE SIDEBAR CONTAINER                           */}
      {/* - Mobile: Slide-over Drawer (fixed z-50 left-0)         */}
      {/* - Desktop: Sticky Sidebar (lg:sticky lg:top-24 lg:w-72)   */}
      {/* ========================================================= */}
      <aside
        className={`
          bg-white max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-50 max-lg:h-full max-lg:w-[310px] max-lg:p-5 max-lg:shadow-2xl max-lg:transition-transform max-lg:duration-300 max-lg:ease-in-out max-lg:overflow-y-auto
          ${isMobileOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}
          lg:flex-shrink-0 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] lg:overflow-y-auto lg:custom-scrollbar lg:pr-3 lg:w-72 select-none
        `}
      >
        {/* Header (Shows Close 'X' button on Mobile) */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-gray-900 tracking-tight">
              Filters
            </h2>
            {activeFiltersCount > 0 && (
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {activeFiltersCount > 0 && (
              <button
                onClick={handleReset}
                type="button"
                className="text-xs font-medium text-red-600 hover:text-red-700 hover:underline transition-colors"
              >
                Clear All
              </button>
            )}
            {/* Close Button on Mobile Drawer */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-1 rounded-md text-gray-500 hover:bg-gray-100"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Active Filter Chips / Pills */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4 pb-3 border-b border-gray-100">
            {category && category !== "All" && (
              <span className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2.5 py-1 rounded-full font-medium transition-colors capitalize">
                {category}
                <button onClick={() => handleCategorySelect("All")}>✕</button>
              </span>
            )}
            {search && (
              <span className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2.5 py-1 rounded-full font-medium transition-colors">
                "{search}"
                <button onClick={() => setSearch("")}>✕</button>
              </span>
            )}
            {selectedBrands.map((bId) => {
              const bName = brands.find((b) => b.id === bId)?.name || bId;
              return (
                <span
                  key={bId}
                  className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2.5 py-1 rounded-full font-medium capitalize"
                >
                  {bName}
                  <button onClick={() => toggleBrand(bId)}>✕</button>
                </span>
              );
            })}
            {(minPrice !== initialMinPrice || maxPrice !== initialMaxPrice) && (
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-1 rounded-full font-medium">
                ₦{minPrice || 0} - ₦{maxPrice || "Max"}
                <button
                  onClick={() => {
                    setMinPrice(initialMinPrice);
                    setMaxPrice(initialMaxPrice);
                  }}
                >
                  ✕
                </button>
              </span>
            )}
            {minRating > 0 && (
              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 text-xs px-2.5 py-1 rounded-full font-medium">
                {minRating}★ & Up
                <button onClick={() => setMinRating(0)}>✕</button>
              </span>
            )}
          </div>
        )}

        {/* Global Product Search Input */}
        <div className="mb-5">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-gray-50 border border-gray-300 rounded-sm  py-2 pl-9 pr-8 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categories Section (With CSS Capitalize) */}
        <div className="border-b border-gray-200 py-3">
          <button
            type="button"
            onClick={() => toggleSection("categories")}
            className="flex items-center justify-between w-full text-left font-semibold text-sm text-gray-800"
          >
            <span>Categories</span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                openSections.categories ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openSections.categories && (
            <div className="mt-3 flex flex-col gap-1 max-h-52 overflow-y-auto custom-scrollbar pr-1">
              {/* All Categories Button */}
              <button
                type="button"
                onClick={() => handleCategorySelect("All")}
                className={`flex items-center justify-between w-full text-left px-2.5 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${
                  category === "All" || category === ""
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>All Categories</span>
              </button>

              {/* Individual Category Buttons with CSS capitalize */}
              {normalizedCategories.map((cat) => {
                if (cat.name === "All") return null;
                const isSelected =
                  cat.name.toLowerCase() === category.toLowerCase();

                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => handleCategorySelect(cat.name)}
                    className={`flex items-center justify-between w-full text-left px-2.5 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="truncate capitalize">{cat.name}</span>
                    {cat.count !== undefined && (
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected
                            ? "bg-blue-700 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {cat.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Price Range Section */}
        <div className="border-b border-gray-200 py-3">
          <button
            type="button"
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full text-left font-semibold text-sm text-gray-800"
          >
            <span>Price Range (₦)</span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                openSections.price ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openSections.price && (
            <div className="mt-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1">
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                    Min Price
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    value={minPrice}
                    onChange={(e) =>
                      setMinPrice(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                    className="w-full border border-gray-300 px-2 py-1.5 rounded-md text-xs focus:outline-none focus:border-blue-600"
                  />
                </div>
                <span className="text-gray-400 font-bold mt-4">-</span>
                <div className="flex-1">
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">
                    Max Price
                  </label>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                    className="w-full border border-gray-300 px-2 py-1.5 rounded-md text-xs focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Price Presets */}
              <div className="flex flex-wrap gap-1">
                {[
                  { label: "Under ₦10k", min: 0, max: 10000 },
                  { label: "₦10k - ₦50k", min: 10000, max: 50000 },
                  { label: "₦50k - ₦200k", min: 50000, max: 200000 },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setMinPrice(preset.min);
                      setMaxPrice(preset.max);
                    }}
                    className="text-[11px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-md transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Brands Section */}
        <div className="border-b border-gray-200 py-3">
          <button
            type="button"
            onClick={() => toggleSection("brands")}
            className="flex items-center justify-between w-full text-left font-semibold text-sm text-gray-800"
          >
            <div className="flex items-center gap-1.5">
              <span>Brands</span>
              {selectedBrands.length > 0 && (
                <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.2 rounded-full font-bold">
                  {selectedBrands.length}
                </span>
              )}
            </div>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                openSections.brands ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openSections.brands && (
            <div className="mt-3">
              {brands.length > 5 && (
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={brandSearchQuery}
                  onChange={(e) => setBrandSearchQuery(e.target.value)}
                  className="w-full text-xs border border-gray-200 p-1.5 rounded-md mb-2 focus:outline-none focus:border-blue-500"
                />
              )}

              <div className="flex flex-col gap-1.5 max-h-44 overflow-y-auto custom-scrollbar pr-1">
                {filteredBrandsList.map((brand) => {
                  const isChecked = selectedBrands.includes(brand.id);
                  return (
                    <label
                      key={brand.id}
                      className="flex items-center justify-between cursor-pointer text-xs text-gray-700 hover:text-black py-0.5 capitalize"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleBrand(brand.id)}
                          className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                        />
                        <span className="capitalize">{brand.name}</span>
                      </div>
                      {brand.count !== undefined && (
                        <span className="text-[10px] text-gray-400">
                          ({brand.count})
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        {/* Color Swatches */}
        <div className="border-b border-gray-200 py-3">
          <button
            type="button"
            onClick={() => toggleSection("colors")}
            className="flex items-center justify-between w-full text-left font-semibold text-sm text-gray-800"
          >
            <span>Color</span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                openSections.colors ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openSections.colors && (
            <div className="mt-3 flex flex-wrap gap-2">
              {colors.map((color) => {
                const isSelected = selectedColors.includes(color.id);
                return (
                  <button
                    key={color.id}
                    type="button"
                    title={color.name}
                    onClick={() => toggleColor(color.id)}
                    className={`w-6 h-6 rounded-full border border-gray-300 relative transition-transform ${
                      isSelected
                        ? "scale-110 ring-2 ring-blue-600 ring-offset-1"
                        : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Stock & Sale Switches */}
        <div className="py-3 flex flex-col gap-2.5 border-b border-gray-200">
          <label className="flex items-center justify-between cursor-pointer text-xs font-medium text-gray-700">
            <span>In Stock Only</span>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 border-gray-300 accent-blue-600 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer text-xs font-medium text-gray-700">
            <span>On Sale Only</span>
            <input
              type="checkbox"
              checked={onSaleOnly}
              onChange={(e) => setOnSaleOnly(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 border-gray-300 accent-blue-600 cursor-pointer"
            />
          </label>
        </div>

        {/* Manual Apply Button */}
        {!autoApply && (
          <div className="pt-4 sticky bottom-0 bg-white pb-2">
            <button
              type="button"
              onClick={handleApply}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-sm  shadow-sm active:scale-[0.98] transition-all text-xs uppercase tracking-wider"
            >
              Apply Filters
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default FilterSidebar;