import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../features/CartSlice";
import { openModal } from "../features/ModalSlice";
import { useEffect } from "react";
import ProductModal from "../components/OriginalsModal";
import { CartIcon } from "../icons";

const Cart = () => {
  const { products, total, amount } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [products]);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>
            •┈••✦ ❤<br /> ✦••┈•YOUR BAG•┈••✦ ❤<br /> ✦••┈•
          </h2>
          <h4 className="cart-h4">•┈••✦••┈•is currently empty•┈••✦••┈•</h4>
        </header>
      </section>
    );
  }

  return (
    <>
      {isOpen && <ProductModal />}
      <section className="cart">
        <header>
          <h2>
            •┈••✦ ❤ <br />
            ✦••┈•Your bag•┈••✦ ❤ <br />
            ✦••┈•
          </h2>
        </header>
        <div className="cart-bubble">
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
              className="btn confirm-btn"
              onClick={() => {
                dispatch(openModal());
              }}
            >
              Clear cart
            </button>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Cart;
