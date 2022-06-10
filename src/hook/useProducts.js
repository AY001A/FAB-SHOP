import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import {
  products,
  productById,
  productsUnpaginated,
  searchProduct,
} from "../api/products";

import { useSelector } from "react-redux";

// const { data, status, error } = useGetProducts(1, 10)

export function useGetProducts(currentPage, pageSize) {
  return useQuery("products", () => products(currentPage, pageSize));
}

export function useGetProductById(id) {
  return useQuery(["products", id], () => productById(id));
}

export function useGetUnpaginatedProducts() {
  return useQuery("productList", () => productsUnpaginated());
}

// export funct useSearchProduct(currentPage, pageSize, searchKeyword){
//   return useQuery('search', () => searchProduct(currentPage, pageSize, keyword))
// }

export function useSearchProduct() {
  const { searchedProducts } = useSelector((state) => state.product);

  return useMutation((searchKeyword) => searchProduct(searchKeyword), {
    onSuccess: (res) => {
      searchedProducts(res);
    },
    onError: (error) => {
      toast.error("oops! please try again later: ", error);
    },
  });
}

export function useGetCartItems() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) return;

  return;
}
