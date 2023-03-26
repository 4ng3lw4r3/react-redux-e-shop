import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/productList/ProductList";
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import Cart from "./components/Cart";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
