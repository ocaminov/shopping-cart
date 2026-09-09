function ProductList({ products, handleClick }) {
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
