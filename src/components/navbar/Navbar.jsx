import { Link } from "react-router-dom";

const Navbar = () => {



    return (
        <>
            <nav>
                <div>
                    <h1>Navbar</h1>
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
                </div>

            </nav>
        </>
    );
}

export default Navbar