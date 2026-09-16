import { useContext } from "react";
import CartContext from "../context/CartContext";

function CartItem({ product }) {
  const { dispatch } = useContext(CartContext);

  const handleIncrease = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const handleDecrease = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
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
