import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/cards/product-card/ProductCard";
import ProductCatImage from "../../assets/images/productcategory/productcategory.jpg";
import ProductCatImageWebP from "../../assets/images/productcategory/productcategory.webp";
import "./style.scss";
import { products } from "../../api/products";

const ProductCategoryPage = () => {
  const { category, categoryId } = useParams();

  // fetch products where categoryId is same with products
  return (
    <div className="product-category-wrapper ">
      <div className="product-category-image-wrapper mb-4">
        <picture>
          <source
            srcSet={ProductCatImageWebP}
            type="image/webp"
            className="prodcat-image"
          />
          <img
            src={ProductCatImage}
            alt="product category for cucumislush"
            className="prodcat-image"
          />
        </picture>
      </div>
      <h5 className="mb-4 text-capitalize">{category}</h5>

      <div className="prodcat-products-wrapper">
        {/* <p className="text-center">Oops!!! products unavailable...</p> */}
        {products
          .filter((prod) => prod.categoryId === Number(categoryId))
          .map((prod) => (
            <ProductCard
              key={prod.productId}
              title={prod.name}
              image={prod.imageUrls[0]}
              description={prod.description}
              id={prod.productId}
              price={prod.price}
              isMeasurable={prod.kind}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
