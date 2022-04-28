import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/cards/product-card/ProductCard";
import ProductCatImage from "../../assets/images/productcategory/productcategory.jpg";
import ProductCatImageWebP from "../../assets/images/productcategory/productcategory.webp";
import "./style.scss";
import { useGetUnpaginatedProducts } from "../../hook/useProducts";
import Spinner from "../../components/spinner/Spinner";

const ProductCategoryPage = () => {
  const { category, categoryId } = useParams();
  const { data, status, error } = useGetUnpaginatedProducts();

  const productsCategory = data?.data?.filter(
    (prod) => prod.Category?.Id === Number(categoryId)
  );

  console.log(data);

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
        {status === "loading" && <Spinner />}
        {!productsCategory.length && (
          <p className="text-center w-100">Products unavailable...</p>
        )}
        {productsCategory.map((prod) => (
          <ProductCard
            id={prod.Id}
            description={prod.Description}
            title={prod.Name}
            image={prod.ImagesUrls[0]}
            price={prod.Price}
            key={prod.Id}
          />
        ))}
        {status === "error" && (
          <p className="text-center">Oops!!! something went wrong...</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
