import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/auth";

const user = JSON.parse(localStorage.getItem("fabUserAccess"));

const initialState = {
  isAuthenticated: false,
  profile: user ? user : null,
  error: false,
  errorMessage: "",
  isLoading: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.profile = null;
      state.errorMessage = "";
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
        state.errorMessage = action.payload;
        state.profile = null;
      })
      .addCase(login.pending, (state) => {
        state.status = "pending";
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "successful";
        state.isLoading = false;
        state.isAuthenticated = true;
        state.profile = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = true;
        state.errorMessage = action.payload;
        state.profile = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.profile = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
