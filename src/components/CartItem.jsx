import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../actions/cartActions";

import useCart from "../hooks/useCart";

function CartItem({ product }) {
  const { dispatch } = useCart();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <li>
      {product.name} - {product.price} -{" "}
      <button onClick={() => handleDecrease(product.id)}>-</button> Quantity:{" "}
      {product.quantity}{" "}
      <button onClick={() => handleIncrease(product.id)}>+</button>
      <button onClick={() => handleRemove(product.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
