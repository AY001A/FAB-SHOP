import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Compressor from "compressorjs";

const CLOUDINARY_ENDPOINT =
  "https://api.cloudinary.com/v1_1/conclase/image/upload";

const initialState = {
  loading: false,
  url: null,
  isUploaded: false,
  errorMsg: "",
};
export const uploadToCloudinary = createAsyncThunk(
  "image/upload",
  async (file, thunkAPI) => {
    try {
      if (!file) return;

      //  uses image compression from compress.js

      return new Compressor(file, {
        quality: 0.8,
        maxHeight: 350,
        maxWidth: 512,
        convertSize: 3000,

        success(result, dispatch) {
          const formData = new FormData();
          formData.append("file", result, result.name);
          formData.append("upload_preset", "z5by6os1");
          return axios
            .post(CLOUDINARY_ENDPOINT, formData)
            .then((res) => geturl(res.data.url));
        },
      });
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
  reducers: {
    geturl: (state, action) => {
      state.url = action.payload.url;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadToCloudinary.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadToCloudinary.fulfilled, (state, action) => {
        state.loading = false;
        // state.url = action.payload;
        state.isUploaded = true;
        state.errorMsg = "";
      })
      .addCase(uploadToCloudinary.rejected, (state, action) => {
        state.loading = false;
        state.isUploaded = false;
        state.errorMsg = action.error;
        state.url = null;
      });
  },
});

export const { geturl } = imageUploadSlice.actions;
export default imageUploadSlice.reducer;
