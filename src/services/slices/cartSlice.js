import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
      state.cartQuantity++;
      state.totalPrice = action.payload.subtotal + state.totalPrice;
    },

    removeFromCart(state, action) {
      const nextProductsItems = state.products.filter(
        (product) => product.productId !== action.payload.productId
      );
      state.products = nextProductsItems;
      state.cartQuantity--;
      state.totalPrice = state.totalPrice - action.payload.subtotal;
    },

    changeProductQuantity(state, action) {
      const product = state.products.find(
        (product) => product.productId === action.payload.productId
      );
      product.quantity = action.payload.newQuantity;
      product.subtotal = action.payload.newQuantity * product.price;
      const newTotal = state.products.reduce(
        (sum, prod) => (sum += prod.subtotal),
        0
      );

      state.totalPrice = newTotal;
    },
  },
});

export const { addToCart, removeFromCart, changeProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
