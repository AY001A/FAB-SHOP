import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const local_cart = window.localStorage.getItem("cucumislush-cart");
const initialState = local_cart
  ? JSON.parse(local_cart)
  : {
      OwnerId: "",
      CartId: null,
      Quantity: 0,
      TotalAmount: 0,
      Items: [],
      UserDetails: null,
      Receipt: null,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // state.products.push({
      //   productId: action.payload.productId,
      //   name: action.payload.name,
      //   quantity: 1,
      //   price: action.payload.price,
      //   subtotal: action.payload.price,
      //   // photo: product.photo,
      // });
      // state.cartQuantity++;
      // state.totalPrice = action.payload.subtotal + state.totalPrice;

      state.OwnerId = "";
      state.Quantity++;
      state.TotalAmount = action.payload.TotalAmount + state.TotalAmount;
      state.Items.push({
        BaseAmount: action.payload.BaseAmount,
        Quantity: 1,
        ProductId: action.payload.ProductId,
        TotalAmount: action.payload.TotalAmount,
        Name: action.payload.Name,
        Photo: action.payload.Image,
      });
      toast.success(`product added to cart`);
      window.localStorage.setItem("cucumislush-cart", JSON.stringify(state));
    },

    removeFromCart(state, action) {
      const nextProductsItems = state.Items.filter(
        (product) => product.ProductId !== action.payload.ProductId
      );
      state.Items = nextProductsItems;
      state.Quantity--;
      state.TotalAmount = state.TotalAmount - action.payload.TotalAmount;

      toast.warn(`product removed from cart`);
      window.localStorage.setItem("cucumislush-cart", JSON.stringify(state));
    },

    increaseProductQuantity(state, action) {
      const product = state.Items.find(
        (product) => product.ProductId === action.payload
      );
      product.Quantity++;
      product.TotalAmount = product.Quantity * product.BaseAmount;
      const newTotal = state.Items.reduce(
        (sum, prod) => (sum += prod.TotalAmount),
        0
      );

      state.TotalAmount = newTotal;
      toast.info("increased quantity");
      window.localStorage.setItem("cucumislush-cart", JSON.stringify(state));
    },

    decreaseProductQuantity(state, action) {
      const product = state.Items.find(
        (product) => product.ProductId === action.payload
      );
      product.Quantity--;
      product.TotalAmount = product.Quantity * product.BaseAmount;
      const newTotal = state.Items.reduce(
        (sum, prod) => (sum += prod.TotalAmount),
        0
      );

      state.TotalAmount = newTotal;
      toast.info("decreased quantity");
      window.localStorage.setItem("cucumislush-cart", JSON.stringify(state));
    },
    addShippingDetails(state, action) {
      state.UserDetails = {
        FullName: action.payload.fullName,
        Email: action.payload.email,
        Phone: action.payload.number,
        Address: action.payload.address,
        State: action.payload.state,
      };
      state.OwnerId = action.payload.email;
      window.localStorage.setItem("cucumislush-cart", JSON.stringify(state));
    },
    paymentReceipt(state, action) {
      state.Receipt = action.payload;
      window.localStorage.setItem("cucumislush-cart", JSON.stringify(state));
    },
    refreshCart(state) {
      window.localStorage.removeItem("cucumislush-cart");
      state.OwnerId = "";
      state.Quantity = 0;
      state.TotalAmount = 0;
      state.Items = [];
      state.UserDetails = null;
      state.Receipt = null;
    },

    updateCartId(state, action) {
      state.CartId = action.payload;
      window.localStorage.setItem("cucumislush-cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  addShippingDetails,
  paymentReceipt,
  refreshCart,
  updateCartId,
} = cartSlice.actions;

export default cartSlice.reducer;
