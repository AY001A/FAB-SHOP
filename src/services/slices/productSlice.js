import { products, top_deals } from "../../api/products";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const register = createAsyncThunk(
//     "auth/register",
//     async (user, thunkAPI) => {
//       try {
//         return await authService.register(user);
//       } catch (error) {
//         const message =
//           error.response && error.response.data && error.response.data.errors;

//         return thunkAPI.rejectWithValue(message);
//       }
//     }
//   );

export const allProducts = createAsyncThunk(
  "product/allProducts",
  async (thunkAPI) => {
    try {
      let prods = [];

      setTimeout(() => (prods = products), 3);
    } catch (err) {
      const message =
        error.response && error.response.data && error.response.data.errors;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productByID = createAsyncThunk(
  "product/productByID",
  async (thunkAPI) => {
    try {
    } catch (err) {
      const message =
        error.response && error.response.data && error.response.data.errors;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
