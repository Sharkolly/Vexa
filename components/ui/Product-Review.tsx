
const ProductReview = () => {
  return (
   <section className="mt-30 border-t border-outline-variant pt-20 max-md:mt-20 max-md:pt-13">
          <div className="flex justify-between mb-16 flex-col md:flex-row items-start md:items-end gap-6">
            <div>
              <h2 className="font-medium text-3xl text-on-surface mb-2">
                Reviews &amp; Ratings
              </h2>
              <p className="text-slate-500 max-md:text-sm">
                What our community is saying about Elite Series 5
              </p>
            </div>
            <button className="font-label-md text-label-md text-nav-blue-active border border-nav-blue-active px-8 py-3 rounded-full hover:bg-primary-container hover:text-white transition-all">
              Write a Review
            </button>
          </div>
          <div className="grid grid-cols-12 gap-16 max-xl:block">
            <div className="col-span-4 max-xl:mb-12">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant flex flex-col items-center text-center">
                <span className="text-[80px] font-black leading-none text-on-surface">
                  4.8
                </span>
                <div className="flex text-primary my-4 hidden">
                  <span className="material-symbols-outlined text-3xl">
                    star
                  </span>
                  <span className="material-symbols-outlined text-3xl">
                    star
                  </span>
                  <span className="material-symbols-outlined text-3xl">
                    star
                  </span>
                  <span className="material-symbols-outlined text-3xl">
                    star
                  </span>
                  <span className="material-symbols-outlined text-3xl">
                    star
                  </span>
                </div>
                <p className="text-sm text-slate-500 ">
                  Based on 128 verified purchases
                </p>
                <div className="w-full mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-4 font-medium ">5</span>
                    <div className="flex-1 h-2 bg-slate-300 rounded-full overflow-hidden">
                      <div className="bg-nav-blue-active  h-full w-[85%]"></div>
                    </div>
                    <span className="text-sm text-outline">85%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-4 font-medium ">4</span>
                    <div className="flex-1 h-2 bg-slate-300 rounded-full overflow-hidden">
                      <div className="bg-nav-blue-active  h-full w-[10%]"></div>
                    </div>
                    <span className="text-sm text-outline">10%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-4 font-medium ">3</span>
                    <div className="flex-1 h-2 bg-slate-300 rounded-full overflow-hidden">
                      <div className="bg-nav-blue-active  h-full w-[3%]"></div>
                    </div>
                    <span className="text-sm text-outline">3%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-4 font-medium ">2</span>
                    <div className="flex-1 h-2 bg-slate-300 rounded-full overflow-hidden">
                      <div className="bg-nav-blue-active  h-full w-[1%]"></div>
                    </div>
                    <span className="text-sm text-outline">1%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm w-4 font-medium ">1</span>
                    <div className="flex-1 h-2 bg-slate-300 rounded-full overflow-hidden">
                      <div className="bg-nav-blue-active  h-full w-[1%]"></div>
                    </div>
                    <span className="text-sm text-outline">1%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8 space-y-12">
              <div className="pb-12 border-b border-slate-300 max-md:pb-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-nav-blue-active/30 flex items-center justify-center font-bold text-nav-blue-active">
                      JD
                    </div>
                    <div>
                      <p className="font-bold">Julian Deveraux</p>
                      <p className="text-sm text-slate-500">
                        Verified Buyer • 2 days ago
                      </p>
                    </div>
                  </div>
                  <div className="flex text-primary hidden">
                    <span className="material-symbols-outlined text-[18px] hidden">
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
                </div>
                <h4 className="font-medium text-on-surface mb-2">
                  Unparalleled build quality
                </h4>
                <p className="text-slate-900  leading-relaxed">
                  The titanium finish on the Series 5 is leagues ahead of
                  anything else on the market. It feels substantial without
                  being heavy on the wrist. The display brightness in direct
                  sunlight is incredible—I haven't had to squint once during my
                  midday runs.
                </p>
              </div>
              <div className="pb-12 border-b border-slate-300 max-md:pb-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-nav-blue-active/30 flex items-center justify-center font-bold text-nav-blue-active">
                      SC
                    </div>
                    <div>
                      <p className="font-bold">Sarah Chen</p>
                      <p className="text-sm text-slate-500">
                        Verified Buyer • 1 week ago
                      </p>
                    </div>
                  </div>
                  <div className="flex text-primary hidden">
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
                      star_half
                    </span>
                  </div>
                </div>
                <h4 className="font-medium text-on-surface mb-2">
                  Battery life is the real winner
                </h4>
                <p className="text-slate-900  leading-relaxed">
                  Easily getting three days of charge even with the Always-On
                  display enabled. The sleep tracking metrics are more detailed
                  than my previous Oura ring. My only gripe is the proprietary
                  strap connector, but the included band is quite comfortable.
                </p>
              </div>
              <div className="flex justify-center pt-8">
                <button className="font-label-md text-label-md text-slate-500 hover:text-nav-blue-active  transition-colors flex items-center gap-2">
                  Load More Reviews ...
                  <span className="material-symbols-outlined">
                    {/* expand_more */}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

  )
}

export default ProductReview
