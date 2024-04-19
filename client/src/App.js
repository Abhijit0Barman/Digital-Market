// import Cart from "./features/cart/Cart";
// import Counter from "./features/counter/Counter";
// import ProductList from "./features/product-list/ProductList";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
