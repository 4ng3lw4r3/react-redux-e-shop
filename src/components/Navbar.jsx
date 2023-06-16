import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartIcon } from "../icons";
import { useEffect } from "react";
import { calculateTotals } from "../features/CartSlice";

const Navbar = () => {
  const { products, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products]);

  return (
    <>
      <nav className="nav">
        <div>
          <ul>
            <li>
              <Link to="/originals">Originals</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="nav-center">
          <div className="nav-container">
            <Link to="/cart">
              <CartIcon />
            </Link>
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
