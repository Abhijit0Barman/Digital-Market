import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

function HomePage() {
  return (
    <>
      <Navbar>
        <ProductList />
      </Navbar>
    </>
  );
}

export default HomePage;
