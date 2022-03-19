import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

const ProductCategoryPage = () => {
  const { category } = useParams();

  return <div className="product-category-wrapper pt-4">{category}</div>;
};

export default ProductCategoryPage;
