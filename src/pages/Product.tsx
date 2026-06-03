import { Link, useParams } from "react-router-dom";
import { useQueryProduct } from "../../lib/useQuery";
import BouncingLoader from "../../components/BouncingLoader";
// import ProductReview from "../../components/ui/Product-Review";
import type { ProductType } from "../../types/product.types";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/index";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeCart,
  // updateProductQuantity,
} from "../../store/product.slice";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

type RootState = {
  product: {
    addToCart: ProductType[];
  };
};

const Product = () => {
  const { id } = useParams();

  const [toggleAddToCart, setToggleAddToCart] = useState(false);

  const { data, isLoading } = useQueryProduct(`/products/product/${id}`);

  const product: ProductType | null = data?.data || null;

  const dispatch = useDispatch<AppDispatch>();

  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart,
  );

  const single_product = CartedProduct.find(
    (product: ProductType) => String(product.id) === String(id),
  );

  const addToCartBtn = (
    title: string = "",
    category: string = "",
    id: string = "",
    image: string = "",
    price: number = 0,
  ) => {
    setToggleAddToCart(true);
    dispatch(
      addToCart({
        id,
        title,
        quantity: 1,
        image,
        price,
        category,
      }),
    );
  };

  const incrementProductQuantity = (id: string = "") => {
    dispatch(incrementQuantity({ id }));
  };
  const decrementProductQuantity = (id: string = "") => {
    dispatch(decrementQuantity({ id }));

    if (single_product && single_product?.quantity && single_product?.quantity - 1 <= 0) {
      dispatch(removeCart({ id }));
      setToggleAddToCart(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[80vh] ">
        <BouncingLoader />
      </div>
    );
  }
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="pt-32 pb-24 max-w-360 mx-auto px-16 max-md:px-6 max-xl:pt-28">
        <nav className="flex items-center gap-2 mb-6  max-md:text-sm text-outline">
          <Link
            className="hover:text-nav-blue-active font-medium flex  items-center gap-1 transition-colors"
            to={"/shop"}
          >
            <span>
              <IoMdArrowBack /> 
            </span>
            <span>Products</span>
          </Link>
          <span className="material-symbols-outlined text-[14px]">&gt;</span>
          <Link
            className="hover:text-nav-blue-active font-medium  transition-colors"
            to={`/product/categories/${product?.category}`}
          >
            {product?.category}
          </Link>
          <span className="material-symbols-outlined text-[14px]">&gt;</span>
          <span className="font-medium">{product?.title}</span>
        </nav>
        <div className="grid grid-cols-12 max-xl:block gap-16">
          <div className="col-span-7 flex flex-col gap-6">
            <div className="aspect-[4/5] h-150 max-md:h-120 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group">
              <img
                className="w-full h-150  rounded-sm object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt={product?.description}
                src={product?.image}
              />
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-all">
                <img
                  className="w-full h-full object-cover"
                  data-alt={product?.description}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADpcuApAMNwgTNOJuk0lE8Missb02pVKQbFi3oA_cyXAssxt5GcreNbWEFuDdo4ZVW3LaDWWC7jxoT60kK6VSslKL8LcCDS7YHvcqfjYwISqnsTqT18kOpV-eGpJUAh3E_dpheOaKTQ9pFzN_beS7ZboTw9R6UnBBACBqu5Fdhs6dfAm5WVDV5yVjCh_6J6k5_7MlSNhMR2J9mqHBdTQ9DkQQ8E7sDsyt9yKEydvb0tcllN8Z9V7Cv7FkEhYz16yRcbeyPENlTjjY"
                />
              </div>
              <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all">
                <img
                  className="w-full h-full object-cover"
                  data-alt={product?.description}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPdm8CQYc8K8TM0rqNgSed97lMBqzGqd2tQ0IyCQ3DIRxXIRHbxI6SZOPJy5oWFmnJ7OJAw7o9XYqnI64ot2QiBj-6l6iLmILUbcqlfpCggOl4NWddh0GsamHKw_Kc5qFnPeSefrUQhRVYGm7xmKdn4gvFXXL-_4Du1vBT5ZNfcuxhSGnSPQzn6lsx3go2Ts3D-Ml1uzZTRvsp_EmGgVNKUgpTVueEghvrfyaJff9ZK73aVOeJniKFwKdNuQCEKOM-PVKL7yu-M3M"
                />
              </div>
              <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all">
                <img
                  className="w-full h-full object-cover"
                  data-alt={product?.description}
                  src={product?.image}
                />
              </div>
              <div className="aspect-square bg-surface-container-lowest rounded-lg overflow-hidden border border-transparent cursor-pointer hover:border-primary transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-outline text-3xl">
                  {/* play_circle */}
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-5 flex flex-col mt-10 ">
            <div className="mb-4">
              <span className="inline-block bg-nav-blue-active text-white px-3 py-1 rounded-full text-sm uppercase tracking-widest font-bold">
                New Release
              </span>
            </div>
            <h1 className="font-semibold text-3xl text-on-surface mb-2">
              {product?.title}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-primary hidden">
                <span className="material-symbols-outlined fill text-[18px]">
                  star
                </span>
                <span className="material-symbols-outlined fill text-[18px]">
                  star
                </span>
                <span className="material-symbols-outlined fill text-[18px]">
                  star
                </span>
                <span className="material-symbols-outlined fill text-[18px]">
                  star
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  star_half
                </span>
              </div>
              <span className="text-body-md text-outline">(128 Reviews)</span>
            </div>
            <div className="mb-10">
              <span className="font-bold  text-4xl text-on-surface">
                ₦{product?.price.toLocaleString()}
              </span>
              <p className="text-slate-600 text-outline mt-2">
                Or ₦{Math.ceil(49.91 * 1390).toLocaleString()}/mo for 12 months
                with 0% interest
              </p>
            </div>
            <div className="space-y-10  mb-12">
              <div>
                <h3 className="font-medium text-slate-600 uppercase text-outline mb-4">
                  Description
                </h3>
                <p className=" text-slate-900 text-on-surface-variant leading-relaxed">
                  {product?.description}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-slate-600  uppercase text-outline mb-4">
                  Select Finish
                </h3>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full bg-[#E5E7EB] border-2 border-primary ring-2 ring-white ring-offset-0"></button>
                  <button className="w-12 h-12 rounded-full bg-[#1F2937] border-2 border-transparent hover:border-outline-variant"></button>
                  <button className="w-12 h-12 rounded-full bg-[#D1D5DB] border-2 border-transparent hover:border-outline-variant"></button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-slate-600 uppercase text-outline mb-4">
                  Specifications
                </h3>
                <ul className="space-y-4 ">
                  <li className="flex justify-between border-b border-slate-300 pb-3">
                    <span className="text-slate-800">Case Material</span>
                    <span className="font-semibold">Titanium Grade 5</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-300 pb-3">
                    <span className="text-slate-800">Water Resistance</span>
                    <span className="font-semibold">100m (ISO 22810)</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-300 pb-3">
                    <span className="text-slate-800">Battery Life</span>
                    <span className="font-semibold">72 Hours (Normal)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-10">
              {toggleAddToCart || single_product ? (
                <div className="flex items-center justify-between text-sm mb-5">
                  <span className="text-xl">Order: </span>
                  <div className="flex items-center justify-center gap-7">
                    <button
                      onClick={() => decrementProductQuantity(product?._id)}
                      className="bg-nav-blue-active text-white text-center flex items-center justify-center rounded-md w-7 h-7 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">
                      {single_product?.quantity}
                    </span>
                    <button
                      onClick={() => incrementProductQuantity(product?._id)}                      
                      className="bg-nav-blue-active text-white  text-center flex items-center justify-center rounded-md w-7 h-7 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="hidd w-full text-lg bg-nav-blue-active text-white font-medium py-3.5 rounded-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 mb-5"
                  onClick={() =>
                    addToCartBtn(
                      product?.title,
                      product?.category,
                      product?._id,
                      product?.image,
                      product?.price,
                    )
                  }
                >
                  Add to Cart
                </button>
              )}

              <button className="w-full bg-black/10  border border-outline-variant text-on-surface font-medium py-5 rounded-xl hover:bg-surface-container-high transition-all active:scale-[0.98]">
                Buy Now
              </button>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary">
                  {/* local_shipping */}
                </span>
                <div>
                  <p className="font-semibold">Free Express Shipping</p>
                  <p className="text-sm text-outline">
                    Delivery expected by Tuesday, Oct 24
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  {/* verified_user */}
                </span>
                <div>
                  <p className="font-semibold">2-Year Vexa Warranty</p>
                  <p className="text-sm text-outline">
                    Extended protection included automatically
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <ProductReview /> */}
      </main>
    </div>
  );
};

export default Product;
