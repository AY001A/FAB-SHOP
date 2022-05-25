import { authservice } from "../http-common";

export const getUserById = async (id) => {
  try {
    const res = await authservice.get(`account/GetAccountById?id=${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUserAccount = async (data) => {
  try {
    const res = await authservice.patch("/account/updateAccount", data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
