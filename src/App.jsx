import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Keyboard", price: 80 },
];

function App() {
  return <Cart products={products} />;
}

export default App;
