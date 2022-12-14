import { useMutation, useQuery } from "react-query";
import { addToCart, createCart, getOrdersById, placeOrder } from "../api/order";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useCreateCart() {
  const navigate = useNavigate();

  return useMutation((prod) => createCart(prod), {
    onSuccess: () => {
      navigate("/cart/proceed/checkout");
    },
    onError: (error) => {
      toast.error("oops! please try again later: ", error);
    },
  });
}
export function usePlaceOrder() {
  const navigate = useNavigate();

  return useMutation((order) => placeOrder(order), {
    onSuccess: (res) => {
      console.log(res);
      window.localStorage.removeItem("cucumislush-cart");
      navigate("/cart/proceed/success");
    },
    onError: (error) => {
      toast.error("oops! please try again later: ", error);
    },
  });
}
export function useGetOrdersByOwnerId(id) {
  return useQuery(["orders", id], () => getOrdersById(id));
}

//   export function useGetUnpaginatedProducts() {
//     return useQuery("productList", () => productsUnpaginated());
//   }
