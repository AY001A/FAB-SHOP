import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CLOUDINARY_ENDPOINT =
  "https://api.cloudinary.com/v1_1/conclase/image/upload";

const initialState = {
  loading: false,
  response: null,
  isUploaded: false,
  errorMsg: null,
};
export const uploadToCloudinary = createAsyncThunk(
  "image/upload",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "z5by6os1");

      const response = await axios.post(CLOUDINARY_ENDPOINT, formData);

      return response.data.url;
    } catch (error) {
      const message =
        error.response && error.response.data && error.response.data.errors;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const imageUploadSlice = createSlice({
  name: "image",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(uploadToCloudinary.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadToCloudinary.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        state.isUploaded = true;
      })
      .addCase(uploadToCloudinary.rejected, (state, action) => {
        state.loading = false;
        state.isUploaded = false;
        state.errorMsg = action.error;
        state.response = action.payload;
      });
  },
});

export default imageUploadSlice.reducer;
