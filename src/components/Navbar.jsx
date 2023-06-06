import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  // console.log(
  //     useSelector((store) => {
  //     console.log(store);
  // })
  // );

  return (
    <>
      <nav className="nav">
        {/* <Link to="/" className="site-title">Angel Dust</Link> */}

        <div>
          <ul>
            {/* <li className="active">
                            <Link to="/">Home</Link>
                        </li> */}
            <li>
              <Link to="/originals">Originals</Link>
            </li>
            {/* <li>
                            <Link to="/vhs">Vhs</Link>
                        </li> */}
            <li>
              <Link to="/cart">Cart</Link>
            </li>

            <div className="nav-center">
              <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                  <p className="total-amount">{amount}</p>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
