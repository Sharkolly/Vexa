import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import Loader from "../../components/Loader";
import ShopNav from "../../components/ui/ShopNav";
import type { ProductType } from "../../types/product.types";

type ShopProductsType = {
  isLoading: boolean;
  shopData: ProductType[] | [];
};

const ShopProducts = ({ isLoading, shopData }: ShopProductsType) => {
  return (
    <>
      {isLoading && !shopData ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {shopData.map((item: ProductType) => (
              <Link
                to={`/products/product/${item._id}`}
                className="group bg-white rounded-2xl overflow-hidden  flex flex-col text-sm sm:text-base"
              >
                <div className="relative aspect-squar  overflow-hidden bg-slate-50">
                  <img
                    alt="Luxury Tablet"
                    className="w-full h-full   object-cover transition-transform duration-500"
                    data-alt="A premium, ultra-thin slate-grey tablet computer resting on a minimalist white marble desk. The lighting is soft and natural, coming from a large window to the side, creating gentle shadows. The screen displays a vibrant, colorful abstract digital art piece. The setting is a bright, airy modern office with a high-end corporate aesthetic."
                    src={item.image}
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full  hover:text-error transition-colors">
                    <span
                      className="material-symbols-outlined text-[20px]"
                      data-icon="favorite"
                    >
                      <IoMdHeartEmpty />
                    </span>
                  </button>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="fle hidden justify-between items-start mb-2">
                    <span className="font-semibold  text-sm text-nav-blue-active uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <span className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                      <span className="font-label-sm text-label-sm -variant font-bold">
                        4.9
                      </span>
                    </div>
                  </div>
                  <h2 className="text-lg max-md:text-sm  mb-2 leading-tight  md:text-headline-md text-center truncate-25   ">
                    {item.title}
                  </h2>
                  {/* <p className="font-light text-sm hidden text-slate-800 mb-6 flex-1">
                      {item.description}
                    </p> */}
                  <div className="flex items-center justify-center mt-3  pt-0  border- border-slate-200">
                    <span className="font-semibold text-lg text-center max-md:text-md ">
                      ₦{item.price.toLocaleString()}
                    </span>
                    <button className="fle items-center gap-2  px-5 py-2.5  bg-green-800 text-white  rounded-lg  font-medium text-sm hover:bg-primary-container transition-colors active:scale-95 duration-200 hidden">
                      <span
                        className="material-symbols-outlined"
                        data-icon="shopping_cart"
                      >
                        {/* shopping_cart */}
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-stack-lg flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
              <span
                className="material-symbols-outlined text-[20px]"
                data-icon="chevron_left"
              >
                {/* chevron_left */}
              </span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-md text-label-md">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
              3
            </button>
            <span className="px-2">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors font-label-md text-label-md">
              12
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
              <span
                className="material-symbols-outlined text-[20px]"
                data-icon="chevron_right"
              >
                {/* chevron_right */}
              </span>
            </button>
          </div>

          <ShopNav />
        </>
      )}
    </>
  );
};

export default ShopProducts;
