import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../../store/product.slice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/index";
import type { ProductType } from "../../types/product.types";
import { Minus, Plus, ShoppingCart } from "lucide-react";

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
  title,
  category,
  image,
  id,
  price,
  AddToCartClassName,
  quantityNumberStyle,
  quantityColorStyle,
}: AddToCartType) => {
  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart,
  );

  const dispatch = useDispatch<AppDispatch>();

  const addToCartBtn = (
    title: string = "",
    category: string = "",
    id: string = "",
    image: string = "",
    price: number = 0,
  ) => {
    // setToggleAddToCart(true);
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

    const single_product = CartedProduct.find((product) => product.id === id);
    if (
      single_product &&
      single_product?.quantity &&
      single_product?.quantity - 1 <= 0
    ) {
      dispatch(removeCart({ id }));
    }
  };

  return (
    <>
      {CartedProduct?.find((product) => product.id === id) ? (
        <div className={quantityNumberStyle || "flex gap-6 items-center"}>
          <button
            onClick={() => decrementProductQuantity(id)}
           className={
              quantityColorStyle ||
              "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-300 rounded-xs w-7 h-7 flex justify-center items-center font-medium text-md cursor-pointer"
            }
          >
            <Minus size={18} />
          </button>
          <span>
            {CartedProduct?.find((product) => product.id === id)?.quantity || 0}
          </span>
          <button
            onClick={() => incrementProductQuantity(id)}
            className={
              quantityColorStyle ||
              "bg-gray-100 text-gray-800 border border-gray-300  hover:bg-gray-300 rounded-xs w-7 h-7 flex justify-center items-center font-medium text-md cursor-pointer"
            }
          >
            <Plus size={18} />
          </button>
        </div>
      ) : (
        <button
          className={
            AddToCartClassName ||
            "bg-blue-600 text-white hover:bg-blue-700 py-2  px-3 rounded-sm font-medium text-sm flex items-center gap-2 justify-center"
          }
          onClick={() => addToCartBtn(title, category, id, image, price)}
        >
          {/* Add To Cart */}
          <ShoppingCart size={15} /> <span> ADD TO CART</span>
        </button>
      )}
    </>
  );
};

export default AddToCart;
