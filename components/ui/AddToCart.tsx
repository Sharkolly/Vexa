import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../../store/product.slice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/index";
import type { ProductType } from "../../types/product.types";

type RootState = {
  product: {
    addToCart: ProductType[];
  };
};

const AddToCart = ({ title, category, image, id, price }: ProductType) => {
  const CartedProduct = useSelector(
    (state: RootState) => state.product.addToCart,
  );

  const dispatch = useDispatch<AppDispatch>();

  // const [toggleAddToCart, setToggleAddToCart] = useState(false);

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
    if (single_product && single_product?.quantity &&  single_product?.quantity - 1 <= 0) {
      dispatch(removeCart({ id }));
      // setToggleAddToCart(false);
    }
  };

  return (
    <>
      {CartedProduct?.find((product) => product.id === id) ? (
        <div className="flex gap-6 items-center ">
          <button
            onClick={() => decrementProductQuantity(id)}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 py-1 px-3 rounded-lg font-medium text-sm cursor-pointer"
          >
            -
          </button>
          <span>
            {CartedProduct?.find((product) => product.id === id)?.quantity || 0}
          </span>
          <button
            onClick={() => incrementProductQuantity(id)}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 py-1 px-3 rounded-lg font-medium text-sm cursor-pointer"
          >
            +
          </button>
        </div>
      ) : (
        <button
          className=" bg-blue-600  text-white hover:bg-blue-700 py-1.5 px-3 rounded-lg font-medium text-sm"
          onClick={() => addToCartBtn(title, category, id, image, price)}
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
