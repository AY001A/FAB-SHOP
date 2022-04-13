import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import uploadImageReducer from "./slices/imageUploadToCloudinarySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    image: uploadImageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
