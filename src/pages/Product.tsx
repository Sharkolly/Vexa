import { Link, useParams } from "react-router-dom";
import { useQueryProduct } from "../../lib/useQuery";
import BouncingLoader from "../../components/BouncingLoader";
import SearchNav from "../../components/ui/SearchNav";
import RelatedProduct from "../../components/ui/RelatedProduct";
import type { AllProductType, ProductType } from "../../types/product.types";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/index";
import { MdFormatLineSpacing } from "react-icons/md";
import Carousel from '../../components/ui/Carousel';

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
  const { slug, category, subCategory } = useParams();

  const [toggleFormat, setToggleFormat] = useState(true);

  const toggleFormatHandle = () => setToggleFormat(!toggleFormat);

  const [toggleAddToCart, setToggleAddToCart] = useState(false);

  const { data, isLoading } = useQueryProduct(
    `/products/${category?.toLowerCase()}/${subCategory}/${slug}`,
  );
  // const { data: RelatedData, isLoading: isLoadingRelatedData } = useQueryProduct(`/products/category/${category}`);
  const { data: RelatedData, isLoading: isLoadingRelatedData } =
    useQueryProduct(`/products/category/${category?.toLowerCase()}`);

  const product: AllProductType | null = data?.data || null;

  const relatedData: AllProductType[] | [] = RelatedData?.data || [];

  const dispatch = useDispatch<AppDispatch>();

  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart,
  );

  const single_product = CartedProduct.find(
    (product: ProductType) => product.slug === slug,
  );

  const addToCartBtn = (
    name: string = "",
    category: string = "",
    subCategory: string = "",
    _id: string = "",
    image: string = "",
    slug: string = "",
    price: number = 0,
  ) => {
    setToggleAddToCart(true);
    dispatch(
      addToCart({
        _id,
        subCategory,
        name,
        quantity: 1,
        image,
        price,
        category,
        slug,
      }),
    );
  };

  const incrementProductQuantity = (slug: string = "") => {
    dispatch(incrementQuantity({ slug }));
  };
  const decrementProductQuantity = (slug: string = "") => {
    dispatch(decrementQuantity({ slug }));

    if (
      single_product &&
      single_product?.quantity &&
      single_product?.quantity - 1 <= 0
    ) {
      dispatch(removeCart({ slug }));
      setToggleAddToCart(false);
    }
  };

  const resolveImage = (
    img: string | File | null | undefined,
    fallback: string,
  ) =>
    typeof img === "string"
      ? img
      : img instanceof File
        ? URL.createObjectURL(img)
        : fallback;

  const resolveVideo = (video: string | File | null | undefined) =>
    typeof video === "string"
      ? video
      : video instanceof File
        ? URL.createObjectURL(video)
        : undefined;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[80vh] ">
        <BouncingLoader />
      </div>
    );
  }
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="pt-32 pb-24 max-w-360 mx-auto px-12 max-md:px-5 max-xl:pt-28 max-md:pt-24">
        <nav className="flex items-center gap-2 mb-6 max-md:gap-1.5   max-md:text-[13px]   text-outline">
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
            className="hover:text-nav-blue-active font-medium capitalize transition-colors"
            to={`/search?categories=${product?.category}`}
          >
            {product?.category}
          </Link>
          <span className="material-symbols-outlined text-[14px]">&gt;</span>
          <span className="font-medium  truncate">{product?.name}</span>
        </nav>
        <div className="flex  max-lg:flex-col gap-10 max-md:gap-3">
          {/* <div className="flex-1 "> 
            <div className="w-full h-fit ">
              <div className="aspect-square rounded-lg overflow-hidden border border-outline-variant cursor-pointer hover:border-primary  transition-all">
                <img
                  className="w-full h-full object-cover"
                  data-alt={product?.description}
                  src={resolveImage(
                    product?.images?.[0] ?? undefined,
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuADpcuApAMNwgTNOJuk0lE8Missb02pVKQbFi3oA_cyXAssxt5GcreNbWEFuDdo4ZVW3LaDWWC7jxoT60kK6VSslKL8LcCDS7YHvcqfjYwISqnsTqT18kOpV-eGpJUAh3E_dpheOaKTQ9pFzN_beS7ZboTw9R6UnBBACBqu5Fdhs6dfAm5WVDV5yVjCh_6J6k5_7MlSNhMR2J9mqHBdTQ9DkQQ8E7sDsyt9yKEydvb0tcllN8Z9V7Cv7FkEhYz16yRcbeyPENlTjjY",
                  )}
                />
              </div>
            </div>
          </div> */}

          <Carousel product={product} />

          <div className="col-span-5 flex flex-col mt-0 flex-1 ">
            <div className="mb-4">
              <span className="inline-block bg-nav-blue-active text-white px-3 py-1 rounded-full text-sm uppercase tracking-widest font-bold">
                New Release
              </span>
            </div>
            <h1 className="font-semibold  leading-10 text-3xl text-on-surface mb-2 uppercase">
              {product?.name}
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
            <div className="mb-10 hidden">
              <span className="font-bold  text-4xl text-on-surface">
                {/* ₦{product?.price.toLocaleString() || 0} */}
              </span>
              <p className="text-slate-600 text-outline mt-2">
                {/* Or ₦{Math.ceil(49.91 * 1390).toLocaleString()}/mo for 12 months
                with 0% interest */}
              </p>
            </div>
            <div className="space-y-10  mb-">
              <div>
                <div className="flex items-center justify-between font-semibold text-xl text-slate-800 underline  uppercase text-outline mb-4">
                  <p>Description</p>
                  <span onClick={toggleFormatHandle}>
                    <MdFormatLineSpacing className="w-6 h-6 cursor-pointer" />
                  </span>
                </div>
                <p
                  className={`${toggleFormat ? "whitespace-pre-line" : "whitespace-normal"} text-slate-900  max-h-60  overflow-y-auto text-on-surface-variant leading-relaxed`}
                >
                  {product?.description}
                </p>
              </div>
              <div className="hidden">
                <h3 className="font-medium text-slate-600  uppercase text-outline mb-4">
                  Select Finish
                </h3>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full bg-[#E5E7EB] border-2 border-primary ring-2 ring-white ring-offset-0"></button>
                  <button className="w-12 h-12 rounded-full bg-[#1F2937] border-2 border-transparent hover:border-outline-variant"></button>
                  <button className="w-12 h-12 rounded-full bg-[#D1D5DB] border-2 border-transparent hover:border-outline-variant"></button>
                </div>
              </div>
              <div className="hidden">
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
            <div className="flex items-center mb-5  gap-5  ">
              {toggleAddToCart || single_product ? (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-xl font-medium">Order: </span>
                  <div className="flex items-center justify-center gap-7">
                    <button
                      onClick={() => decrementProductQuantity(product?.slug)}
                      className="bg-nav-blue-active text-white text-center flex items-center justify-center rounded w-7 h-7 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">
                      {single_product?.quantity}
                    </span>
                    <button
                      onClick={() => incrementProductQuantity(product?.slug)}
                      className="bg-nav-blue-active text-white  text-center flex items-center justify-center rounded w-7 h-7 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="hidd w-full text-lg bg-nav-blue-active text-white font-medium py-3 rounded-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-sm  shadow-primary/20"
                  onClick={() =>
                    addToCartBtn(
                      product?.name,
                      product?.category,
                      product?.subCategory,
                      product?._id,
                      resolveImage(product?.images[0], ""),
                      product?.slug,
                      product?.price,
                    )
                  }
                >
                  Add to Cart
                </button>
              )}

              <button className="w-full bg-black/10  border border-outline-variant text-on-surface font-medium py-3 rounded-xl hover:bg-surface-container-high transition-all active:scale-[0.98]">
                Buy Now
              </button>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  {/* verified_user */}
                </span>
                <div>
                  <p className="font-semibold">14 days Fexa Warranty</p>
                  <p className="text-sm text-outline">
                    Extended protection included automatically
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <ProductReview /> */}

        <RelatedProduct
          relatedData={relatedData}
          isLoadingRelatedData={isLoadingRelatedData}
        />

        <SearchNav />
      </main>
    </div>
  );
};

export default Product;
