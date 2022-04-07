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
      state.products.push({
        productId: action.payload.productId,
        name: action.payload.name,
        quantity: 1,
        price: action.payload.price,
        subtotal: action.payload.price,
        // photo: product.photo,
      });
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

    increaseProductQuantity(state, action) {
      const product = state.products.find(
        (product) => product.productId === action.payload
      );
      product.quantity++;
      product.subtotal = product.quantity * product.price;
      const newTotal = state.products.reduce(
        (sum, prod) => (sum += prod.subtotal),
        0
      );

      state.totalPrice = newTotal;
    },

    decreaseProductQuantity(state, action) {
      const product = state.products.find(
        (product) => product.productId === action.payload
      );
      product.quantity--;
      product.subtotal = product.quantity * product.price;
      const newTotal = state.products.reduce(
        (sum, prod) => (sum += prod.subtotal),
        0
      );

      state.totalPrice = newTotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
