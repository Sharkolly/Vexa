import { Link, useParams } from "react-router-dom";
import { useQueryProduct } from "../../lib/useQuery";
import BouncingLoader from "../../components/BouncingLoader";
import SearchNav from "../../components/ui/SearchNav";
import RelatedProduct from "../../components/ui/RelatedProduct";
import type { AllProductType, ProductType } from "../../types/product.types";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/index";
import { MdFormatLineSpacing } from "react-icons/md";
import Carousel from "../../components/ui/Carousel";

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

const getColorClassName = (color?: string) => {
  switch (color?.toLowerCase()) {
    case "black":
      return "bg-black";
    case "white":
      return "bg-white";
    default:
      return `bg-${color}-700`;
  }
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[80vh] ">
        <BouncingLoader />
      </div>
    );
  }
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="pt-32 pb-24 max-w-360 mx-auto px-20 max-md:px-5 max-xl:pt-28 max-md:pt-24">
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
          <Carousel product={product} />

          <div className="col-span-5 flex flex-col mt-0 flex-1 ">
            <div className="mb-4">
              <span className="inline-block bg-green-700 text-white px-3 py-1 rounded-full font-semibold uppercase tracking-widest font-bol">
                {product?.condition}
              </span>
            </div>
            <h1 className="font-bold  leading-10 text-4xl max-md:text-3xl text-on-surface mb-2 uppercase">
              {product?.name}
            </h1>

            <div>
              <p className="text-3xl max-md:text-2xl text-yellow-500 font-semibold  mt-4 mb-8 ">
                ₦{product?.price.toLocaleString()}
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
                  className={`${toggleFormat ? "whitespace-pre-line" : "whitespace-normal"} text-slate-900  max-h-45   overflow-y-auto text-on-surface-variant leading-relaxed`}
                >
                  {product?.description}
                </p>
              </div>
            </div>
              <div className='flex  items-center   justify-between gap-3 mt-4 '>
              <p className='text-lg font-semibold  '>Color:</p>

              <div className="flex items-center gap-2">
                <span
                  className={`inline-block h-5 w-5 rounded-full border border-slate-300 ${getColorClassName(product?.color)}`}
                />
                <span className="capitalize">{product?.color}</span>
              </div>
            </div> 
            <div className="flex items-center mb-5 mt-7 gap-5  justify-between ">
              {toggleAddToCart || single_product ? (
                <div className="flex items-center gap-5  text-sm">
                  <span className="text-2xl font-medium hidden">Order: </span>
                  <div className="flex items-center justify-center gap-13">
                    <button
                      onClick={() => decrementProductQuantity(product?.slug)}
                      className="bg-red-600 text-white text-center flex items-center justify-center rounded w-7 h-7 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xl font-medium">
                      {single_product?.quantity}
                    </span>
                    <button
                      onClick={() => incrementProductQuantity(product?.slug)}
                      className="bg-green-600 text-white  text-center flex items-center justify-center rounded w-7 h-7 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="hidd w-5/12 text-lg bg-yellow-600 text-white font-medium py-3 rounded-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-sm  shadow-primary/20"
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
              <Link to="/cart" className='w-5/12 '>
                <button className="w-full bg-green-700 text-white cursor-pointer font-medium py-3 text-lg rounded-xl hover:bg-surface-container-high transition-all active:scale-[0.98]">
                  Buy Now
                </button>
              </Link>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
              <div className="flex items-center">
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
