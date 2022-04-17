import axios from "axios";
import Compressor from "compressorjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaceholderImage from "../../assets/images/Placeholder.png";
import { uploadToCloudinary } from "../../services/slices/imageUploadToCloudinarySlice";
import "./style.scss";

const ProductFormPage = () => {
  const CLOUDINARY_ENDPOINT =
    "https://api.cloudinary.com/v1_1/conclase/image/upload";
  // const dispatch = useDispatch();
  // const { loading, url } = useSelector((state) => state.image);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState("");

  const handleImageUpload = async () => {
    // dispatch(uploadToCloudinary(imageFile));

    await new Compressor(imageFile, {
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

          .then((res) => {
            setImageUrl(res.data.url);
          });
      },
    });
  };

  return (
    <div className="product_form_page_wrapper">
      <div className="product_image_placeholder">
        {loading && <div className="placeholder_loading">Uploading...</div>}
        {!imageUrl ? <img src={PlaceholderImage} /> : <img src={imageUrl} />}
      </div>

      <input
        type={"file"}
        // style={{ visibility: "hidden" }}
        onChange={(event) => setImageFile(event.target.files[0])}
      />
      <button onClick={handleImageUpload}>upload</button>
    </div>
  );
};

export default ProductFormPage;
