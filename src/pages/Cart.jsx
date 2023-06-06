import CartItem from "../components/CartItem"
import { useSelector, useDispatch } from "react-redux"
import { calculateTotals } from "../features/CartSlice";
import { openModal } from "../features/ModalSlice";
import { useEffect } from "react";
import ProductModal from '../components/OriginalsModal'

const Cart = () => {

    const { products, total, amount } = useSelector((store) => store.cart);
    const { isOpen } = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [products]);


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
            {isOpen && <ProductModal />}
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                </header>
                <div>
                    {products.map((item) => {
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
                            dispatch(openModal())}}
                    >
                        Clear cart
                    </button>
                </footer>
            </section>
        </>
    )
}

export default Cart