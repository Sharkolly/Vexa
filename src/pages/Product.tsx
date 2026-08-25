import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowBack } from "react-icons/io";
import { MdFormatLineSpacing } from "react-icons/md";

import { useQueryProduct } from "../../lib/useQuery";
import BouncingLoader from "../../components/BouncingLoader";
import SearchNav from "../../components/ui/SearchNav";
import RelatedProduct from "../../components/ui/RelatedProduct";
import Carousel from "../../components/ui/Carousel";
import type { AllProductType, ProductType } from "../../types/product.types";
import type { AppDispatch } from "../../store/index";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../../store/product.slice";

type RootState = {
  product: {
    addToCart: ProductType[];
  };
};

const getColorClassName = (color?: string) => {
  switch (color?.toLowerCase()) {
    case "black":
      return "bg-slate-900";
    case "white":
      return "bg-white border-slate-300";
    default:
      return `bg-${color?.trim().toLowerCase()}-600`;
  }
};

const Product = () => {
  const { slug, category, subCategory } = useParams();

  const [toggleFormat, setToggleFormat] = useState(true);
  const [toggleAddToCart, setToggleAddToCart] = useState(false);

  const toggleFormatHandle = () => setToggleFormat(!toggleFormat);

  const { data, isLoading } = useQueryProduct(
    `/products/${category?.toLowerCase()}/${subCategory}/${slug}`
  );

  const { data: RelatedData, isLoading: isLoadingRelatedData } =
    useQueryProduct(`/products/category/${category?.toLowerCase()}`);

  const product: AllProductType | null = data?.data || null;
  const relatedData: AllProductType[] = RelatedData?.data || [];

  const dispatch = useDispatch<AppDispatch>();

  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart
  );

  const single_product = CartedProduct.find(
    (product: ProductType) => product.slug === slug
  );

  const addToCartBtn = (
    name = "",
    category = "",
    subCategory = "",
    _id = "",
    image = "",
    slug = "",
    price = 0
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
      })
    );
  };

  const incrementProductQuantity = (slug = "") => {
    dispatch(incrementQuantity({ slug }));
  };

  const decrementProductQuantity = (slug = "") => {
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
    fallback: string
  ) =>
    typeof img === "string"
      ? img
      : img instanceof File
      ? URL.createObjectURL(img)
      : fallback;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full min-h-[70vh]">
        <BouncingLoader />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen selection:bg-emerald-100 selection:text-emerald-800 antialiased">
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link
            className="hover:text-emerald-700 font-medium flex items-center gap-1.5 transition-colors"
            to="/shop"
          >
            <IoMdArrowBack className="text-base" />
            <span>Products</span>
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            className="hover:text-emerald-700 font-medium capitalize transition-colors"
            to={`/search?categories=${product?.category}`}
          >
            {product?.category}
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-slate-900 truncate max-w-[200px]">
            {product?.name}
          </span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Product Media */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-sm">
            <Carousel product={product} />
          </div>

          {/* Product Info & Actions */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Condition Badge */}
            {product?.condition && (
              <div className="mb-3">
                <span className="inline-flex items-center bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.condition}
                </span>
              </div>
            )}

            {/* Product Title */}
            <h1 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight uppercase">
              {product?.name}
            </h1>

            {/* Price Tag */}
            <div className="mt-4 mb-6">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-700 tracking-tight">
                ₦{product?.price?.toLocaleString()}
              </p>
            </div>

            {/* Color Selector Display */}
            <div className="flex items-center justify-between py-3 border-y border-slate-200/80 my-4">
              <span className="text-sm font-semibold text-slate-700">Color</span>
              <div className="flex items-center gap-2.5">
                <span
                  className={`inline-block h-5 w-5 rounded-full ring-2 ring-slate-200 ${getColorClassName(
                    product?.color
                  )}`}
                />
                <span className="text-sm font-medium text-slate-900 capitalize">
                  {product?.color}
                </span>
              </div>
            </div>

            {/* Description Accordion / Toggle */}
            <div className="my-4">
              <div className="flex items-center justify-between font-bold text-xs tracking-wider text-slate-500 uppercase mb-3">
                <span>Product Description</span>
                <button
                  type="button"
                  onClick={toggleFormatHandle}
                  className="p-1 text-slate-500 hover:text-emerald-700 rounded transition-colors"
                  title="Toggle Line Spacing"
                >
                  <MdFormatLineSpacing className="w-5 h-5" />
                </button>
              </div>
              <p
                className={`${
                  toggleFormat ? "whitespace-pre-line" : "whitespace-normal"
                } text-slate-600 text-sm leading-relaxed max-h-52 overflow-y-auto pr-2 custom-scrollbar`}
              >
                {product?.description}
              </p>
            </div>

            {/* Actions: Add to Cart & Buy Now */}
            <div className="flex items-center gap-4 mt-6 mb-8">
              {toggleAddToCart || single_product ? (
                <div className="w-1/2 flex items-center justify-between bg-slate-100 rounded-xl p-1.5 border border-slate-200">
                  <button
                    onClick={() => decrementProductQuantity(product?.slug)}
                    className="bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center transition-all shadow-sm"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-slate-900 px-3">
                    {single_product?.quantity}
                  </span>
                  <button
                    onClick={() => incrementProductQuantity(product?.slug)}
                    className="bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center transition-all shadow-sm"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="w-1/2 bg-slate-900 text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-slate-800 transition-all active:scale-[0.98] shadow-sm text-center"
                  onClick={() =>
                    addToCartBtn(
                      product?.name,
                      product?.category,
                      product?.subCategory,
                      product?._id,
                      resolveImage(product?.images[0], ""),
                      product?.slug,
                      product?.price
                    )
                  }
                >
                  Add to Cart
                </button>
              )}

              <Link to="/cart" className="w-1/2">
                <button className="w-full bg-emerald-700 text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-emerald-800 transition-all active:scale-[0.98] shadow-md shadow-emerald-700/20 text-center">
                  Buy Now
                </button>
              </Link>
            </div>

            {/* Warranty Badge Card */}
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100 flex items-start gap-3">
              <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg mt-0.5">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">
                  14 Days Fexa Warranty
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Extended protection included automatically on all qualifying orders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <RelatedProduct
            relatedData={relatedData}
            isLoadingRelatedData={isLoadingRelatedData}
          />
        </div>

        <SearchNav />
      </main>
    </div>
  );
};

export default Product;
