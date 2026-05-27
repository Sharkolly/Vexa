import { useState } from "react";

const FilterSidebar = () => {
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minRating, setMinRating] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <aside className="w-full md:w-72 bg-white p-4 rounded-xl shadow h-fit">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full border p-2 rounded-lg mb-4"
      />      
      <div className="mb-4">
        <p className="font-semibold mb-2">Category</p>

        {["All", "Fashion", "Electronics", "Gaming"].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`block w-full text-left px-3 py-2 rounded-lg mb-1 ${
              category === c ? "bg-nav-blue-active/80  text-white" : "hover:bg-gray-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      
      <div className="mb-4">
        <p className="font-semibold mb-2">Price Range</p>

        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full border p-2 rounded-lg mb-2"
        />

        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full border p-2 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <p className="font-semibold mb-2">Minimum Rating</p>

        {[0, 3, 4, 4.5, 5].map((r) => (
          <button
            key={r}
            onClick={() => setMinRating(r)}
            className={`block  w-full text-left px-3 py-2 rounded-lg mb-1 ${
              minRating === r ? "bg-nav-blue-active/80 text-white" : "hover:bg-gray-100"
            }`}
          >
            ⭐ {r}+ Stars
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          setCategory("All");
          setMinPrice(0);
          setMaxPrice(1000000);
          setMinRating(0);
          setSearch("");
        }}
        className="w-full bg-red-500 text-white py-2 rounded-lg"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
