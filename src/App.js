import { Link, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/products">Products</Link>
          </li>
          <li>
          <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </>
  );
}

export default App;
