import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";

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
