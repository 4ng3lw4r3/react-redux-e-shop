import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/CartSlice";
import ModalReducer from "./features/ModalSlice";
export const store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: ModalReducer,
  },
});
