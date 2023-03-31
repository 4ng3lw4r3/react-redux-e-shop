import { createSlice } from '@reduxjs/toolkit';
import products from '../products';


const initialState = {
  products: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.products = [];
    },
    removeItem: (state, action) => {
      // console.log(action)
      const itemId = action.payload;
      state.products = state.products.filter((item) =>
        item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const CartItem = state.products.find((item) => item.id === payload.id)
      CartItem.amount = CartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const CartItem = state.products.find((item) => item.id === payload.id)
      CartItem.amount = CartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total
    },
    addToCart(state, action){
      state.products.push(action.payload)
    }
  },
});

// console.log(cartSlice)

export const { clearCart, removeItem, increase, decrease, calculateTotals, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;

