import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Originals from "./pages/Originals";
import Cart from "./pages/Cart";
import Vhs from "./pages/Vhs";
import Header from "./components/Header";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/vhs" element={<Vhs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
