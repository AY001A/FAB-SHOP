import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import authService from "../api/auth";
import { getUserById, updateUserAccount } from "../api/user";

export function useGetUserById(id) {
  return useQuery(["products", id], () => getUserById(id));
}

export function useUpdateUserAccount() {
  return useMutation((prod) => updateUserAccount(prod), {
    onSuccess: () => {
      toast.success("Account updated successfully.");
    },
    onError: (error) => {
      toast.error("oops, something went wrong, try again");
    },
  });
}

export function useChangePassword() {
  return useMutation((details) => authService.changePassword(details));
}
