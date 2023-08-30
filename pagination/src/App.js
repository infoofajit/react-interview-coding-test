import ProductsClientSide from "./components/ProductsClientSide";
import ProductsServerSide from "./components/ProductsServerSide";

function App() {
  return (
    <div className="App">
      <ProductsServerSide />
      <ProductsClientSide />
    </div>
  );
}

export default App;
