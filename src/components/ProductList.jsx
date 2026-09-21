import { addProduct, increaseQuantity } from "../actions/cartActions";

import useCart from "../hooks/useCart";

function ProductList({ products }) {
  const { state, dispatch } = useCart();

  const handleClick = (product) => {
    if (state.some((element) => element.id === product.id)) {
      dispatch(increaseQuantity(product.id));
    } else {
      dispatch(
        addProduct({
          ...product,
          quantity: 1,
        }),
      );
    }
  };

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}{" "}
            <button onClick={() => handleClick(product)}>Add To Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
