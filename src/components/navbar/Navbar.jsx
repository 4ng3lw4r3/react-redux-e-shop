import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../icons";


const Navbar = () => {

    console.log(
        useSelector((store) => {
        console.log(store);
    })
    );


    return (
        <>
            <nav className="nav">

                <Link to="/" className="site-title">Angel Dust</Link>

                <div>
                    <div className="nav-center">
                        {/* <h3>Miwau</h3> */}
                        <div className="nav-container">
                        <CartIcon />
                        <div className="amount-container">
                            <p className='total-amount'>0</p>
                            </div>
                        </div>
                    </div>



                    <ul>
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    );
};

export default Navbar