function CartItem({ product, handleDecrease, handleIncrease, handleRemove }) {
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
