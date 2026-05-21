import React from 'react'

const ShopFilter = () => {
  return (
       <aside className="flex-shrink- sticky top-24 h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar pr-5 max-lg:hidden  lg:w-72 ">
            <div className="mb-8">
              <h1 className="font-semibold  text-2xl mb-2">Tech Gadgets</h1>
              <p className="font-light text-black/70  -variant">
                428 items found
              </p>
            </div>
            <div className="space-y-7">
              <div>
                <h3 className="font-semibold  text-label-md  uppercase tracking-wider mb-2">
                  Brand
                </h3>
                <div className="space-y-3 ">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-nav-blue-active focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md -variant group-hover:text-nav-blue-active transition-colors">
                      Vexa Core
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      checked={false}
                      className="w-5 h-5 rounded border-outline-variant text-nav-blue-active focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md -variant group-hover:text-nav-blue-active transition-colors">
                      AeroTech
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-nav-blue-active focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-body-md text-body-md -variant group-hover:text-nav-blue-active transition-colors">
                      Nova Dynamics
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-label-md  uppercase tracking-wider mb-4">
                  Price Range
                </h3>
                <input
                  className="w-full h-1.5 cursor-pointer accent-nav-blue-active"
                  min={0}
                  max={5000}
                  value={2100}
                  type="range"
                />
                <div className="flex justify-between mt-2 font-label-sm text-label-sm -variant">
                  <span>$0</span>
                  <span>$5000+</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-label-md  uppercase tracking-wider mb-4">
                  Rating
                </h3>
                <div className="space-y-3">
                  <button className="flex items-center gap-2 -variant hover:text-nav-blue-active transition-colors">
                    <div className="flex text-amber-400 hidden">
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    </div>
                    <span className="font-body-md text-body-md">&amp; Up</span>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold uppercase tracking-wider mb-4">
                  Specifications
                </h3>
                <div className="flex flex-wrap gap-2 ">
                  <span className="px-3 py-1 bg-yellow-700 text-white border border-outline-variant rounded-full font-label-sm text-label-sm -variant hover:border-primary hover:text-nav-blue-active cursor-pointer transition-colors">
                    OLED
                  </span>
                  <span className="px-3 py-1 bg-green-700 text-white border border-outline-variant rounded-full font-label-sm text-label-sm -variant hover:border-primary hover:text-nav-blue-active cursor-pointer transition-colors">
                    Wireless
                  </span>
                  <span className="px-3 py-1 bg-blue-700 text-white border border-outline-variant rounded-full font-label-sm text-label-sm -variant hover:border-primary hover:text-nav-blue-active cursor-pointer transition-colors">
                    8K UHD
                  </span>
                  <span className="px-3 py-1 bg-cyan-800 text-white border border-outline-variant rounded-full font-label-sm text-label-sm -variant hover:border-primary hover:text-nav-blue-active cursor-pointer transition-colors">
                    Thunderbolt 4
                  </span>
                </div>
              </div>
            </div>
          </aside>

  )
}

export default ShopFilter
