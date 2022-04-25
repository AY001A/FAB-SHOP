import { useQuery } from "react-query";
import { products, productById } from "../api/products";

export function useGetProducts(currentPage, pageSize) {
  return useQuery("products", () => products(currentPage, pageSize));
}

export function useGetProductById(id) {
  return useQuery(["product", id], () => productById(id));
}
