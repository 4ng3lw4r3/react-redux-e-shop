import { Route, Routes } from "react-router-dom";
import CartSlice from "./features/cart/CartSlice";
import Home from "./components/home/Home";
import ProductList from "./components/productList/ProductList";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartSlice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
