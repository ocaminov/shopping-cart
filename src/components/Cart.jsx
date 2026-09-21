import ProductList from "./ProductList";
import CartItem from "./CartItem";

import useCart from "../hooks/useCart";
import { CLEAR_CART } from "../constants/cartActions";

export default function Cart({ products }) {
  const { state, dispatch } = useCart();

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const items = state.reduce((items, product) => {
    return items + product.quantity;
  }, 0);

  return (
    <>
      <ProductList products={products} />

      <h2>Cart</h2>

      <ul>
        {state.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <p>Items: {items}</p>
      <p>Total: ${total}</p>
      <button onClick={() => dispatch({ type: CLEAR_CART })}>Clear Cart</button>
    </>
  );
}
