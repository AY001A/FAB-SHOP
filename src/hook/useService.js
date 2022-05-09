import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { bookService, listServices } from "../api/services";

export function useCreateServiceBooking() {
  const navigate = useNavigate();

  return useMutation((service) => bookService(service), {
    onSuccess: () => {
      navigate("/cart/proceed/checkout");
    },
    onError: (error) => {
      toast.error("oops! please try again later: ", error);
    },
  });
}

export function useGetServiceList(currentPage, pageSize) {
  return useQuery("services", () => listServices(currentPage, pageSize));
}
