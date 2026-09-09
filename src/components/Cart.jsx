import { useReducer } from "react";
import cartReducer from "../reducer/cartReducer";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

export default function Cart({ products }) {
  const [state, dispatch] = useReducer(cartReducer, []);

  const handleClick = (product) => {
    if (state.some((element) => element.id === product.id)) {
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: product.id,
      });
    } else {
      dispatch({
        type: "ADD_PRODUCT",
        payload: {
          ...product,
          quantity: 1,
        },
      });
    }
  };

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

  const handleClear = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const items = state.reduce((items, product) => {
    return items + product.quantity;
  }, 0);

  return (
    <>
      <ProductList products={products} handleClick={handleClick} />

      <h2>Cart</h2>

      <ul>
        {state.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            handleRemove={handleRemove}
          />
        ))}
      </ul>
      <p>Items: {items}</p>
      <p>Total: ${total}</p>
      <button onClick={handleClear}>Clear Cart</button>
    </>
  );
}
