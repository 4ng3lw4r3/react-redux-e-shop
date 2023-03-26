import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { clearCart, calculateTotals } from "../features/cart/CartSlice";
import { useEffect } from "react";
import Modal from "./Modal";

const Cart = () => {

    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((store) => store.cart);


    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);


    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <>
            <Modal />
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                </header>
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />;
                    })}
                </div>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>
                            Total <span>${total.toFixed(2)}</span>
                        </h4>
                    </div>
                    <button
                        className="btn clear-btn"
                        onClick={() => {
                            dispatch(clearCart)
                        }
                        }
                    >
                        Clear cart
                    </button>
                </footer>
            </section>
        </>
    )
}

export default Cart