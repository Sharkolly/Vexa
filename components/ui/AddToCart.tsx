import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus, ShoppingCart } from "lucide-react";

import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../../store/product.slice";
import type { AppDispatch } from "../../store/index";
import type { ProductType } from "../../types/product.types";

type RootState = {
  product: {
    addToCart: ProductType[];
  };
};

type AddToCartType = ProductType & {
  AddToCartClassName?: string;
  quantityNumberStyle?: string;
  quantityColorStyle?: string;
};

const AddToCart = ({
  name = "",
  category = "",
  subCategory = "",
  image = "",
  _id = "",
  price = 0,
  slug = "",
  AddToCartClassName,
  quantityNumberStyle,
}: AddToCartType) => {
  const dispatch = useDispatch<AppDispatch>();

  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart
  );

  const singleProduct = CartedProduct?.find(
    (product) => product.slug === slug || (product._id && product._id === _id)
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id,
        name,
        quantity: 1,
        image,
        price,
        category,
        subCategory,
        slug,
      })
    );
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ slug }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ slug }));

    if (
      singleProduct &&
      singleProduct.quantity &&
      singleProduct.quantity - 1 <= 0
    ) {
      dispatch(removeCart({ slug }));
    }
  };

  if (singleProduct) {
    return (
      <div
        className={
          quantityNumberStyle ||
          "flex items-center justify-between gap-2 bg-slate-50 border border-slate-200/80 p-1 rounded-xl shadow-xs"
        }
      >
        <button
          type="button"
          onClick={handleDecrement}
          aria-label="Decrease quantity"
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-rose-50 text-rose-600 border border-rose-200/70 hover:bg-rose-100 hover:text-rose-700 active:scale-95 transition-all shadow-xs cursor-pointer"
        >
          <Minus className="w-4 h-4" />
        </button>

        <span className="font-extrabold text-slate-900 text-sm px-2">
          {singleProduct.quantity || 1}
        </span>

        <button
          type="button"
          onClick={handleIncrement}
          aria-label="Increase quantity"
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/70 hover:bg-emerald-100 active:scale-95 transition-all shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={
        AddToCartClassName ||
        "w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
      }
      onClick={handleAddToCart}
    >
      <ShoppingCart className="w-4 h-4" />
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCart;
