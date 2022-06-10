import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/auth";

import { useNavigate } from "react-router-dom";

const local_cart = window.localStorage.getItem("fabUser");
const initialState = local_cart
  ? JSON.parse(local_cart)
  : {
      isAuthenticated: false,
      user: null,
      error: false,
      errorMessage: [],
      isLoading: false,
      registrationError: [],
    };

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.errors;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const res = await authService.login(user);
    window.localStorage.setItem("session", res?.data?.data?.fabAccessToken);
    return res;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const resetPassword = createAsyncThunk(
  "auth/resetpassword",
  async (email, thunkAPI) => {
    try {
      return await authService.resetPassword(email);
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.errors;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const processPasswordReset = createAsyncThunk(
  "auth/proccesspasswordreset",
  async (cred, thunkAPI) => {
    try {
      return await authService.processPasswordReset(cred);
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.errors;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
      state.errorMessage = "";
      state.isSuccessful = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "successful";
        state.isLoading = false;
        state.error = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.isLoading = false;
        state.error = true;
        state.registrationError = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.status = "pending";
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "successful";
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = false;
        state.errorMessage = "";
        localStorage.setItem("fabUser", JSON.stringify(state));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        localStorage.removeItem("fabUser");
        localStorage.removeItem("cucumislush-cart");
      })

      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isSuccessful = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isSuccessful = false;
        state.isLoading = false;
        state.error = true;
      })
      .addCase(processPasswordReset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(processPasswordReset.fulfilled, (state, action) => {
        state.isSuccessful = true;
        state.isLoading = false;
        state.resetCompleted = true;
        state.error = false;
        state.errorMessage = "";
      })
      .addCase(processPasswordReset.rejected, (state, action) => {
        state.isLoading = false;
        state.resetCompleted = false;
        state.isSuccessful = false;
        state.error = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
