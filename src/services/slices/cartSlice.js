import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  // products: [],
  // cartQuantity: 0,
  // totalPrice: 0,
  OwnerId: "",
  Quantity: 0,
  TotalAmount: 0,
  Items: [],
  UserDetails: null,
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
    },

    removeFromCart(state, action) {
      const nextProductsItems = state.Items.filter(
        (product) => product.ProductId !== action.payload.ProductId
      );
      state.Items = nextProductsItems;
      state.Quantity--;
      state.TotalAmount = state.TotalAmount - action.payload.TotalAmount;

      toast.warn(`product removed from cart`);
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
    },
    addShippingDetails(state, action) {
      state.UserDetails = {
        FullName: action.payload.fullName,
        Email: action.payload.email,
        Phone: action.payload.number,
        Address: action.payload.address,
        State: action.payload.state,
      };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  addShippingDetails,
} = cartSlice.actions;

export default cartSlice.reducer;
