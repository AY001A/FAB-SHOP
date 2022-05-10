import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { searchProduct } from "../../api/products";
import ProductCard from "../../components/cards/product-card/ProductCard";
import { useSearchProduct } from "../../hook/useProducts";
import "./style.scss";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prods, setProds] = useState([]);

  const { keyword } = useParams();

  const searchWord = async (word) => {
    setIsLoading(true);
    return axios
      .post(
        "http://174.138.0.201/product/searchProduct?currentPage=1&pageSize=10",
        { searchKeyword: word }
      )
      .then((res) => {
        setIsLoading(false);
        setProds(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    searchWord(keyword);
  }, [keyword]);

  return (
    <div className="searchpage-wrapper container">
      <h4 className="mt-4">
        {prods.length} Items found for <strong>{keyword}</strong>
      </h4>

      <div className="top-products search-products p-sm-5">
        {/* <p>No product available</p> */}
        {isLoading && <Spinner animation="border" className="text-primary" />}

        {!isLoading &&
          prods?.map((prod) => (
            <div className="mx-2" key={prod.Id}>
              <ProductCard
                id={prod.Id}
                description={prod.Description}
                title={prod.Name}
                image={prod.ImagesUrls[0]}
                price={prod.Price}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
