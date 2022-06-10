import { toast } from "react-toastify";
import { authservice } from "../http-common";

// const BASE_URL = `http://174.138.0.201:3000`;

const token = window.localStorage.getItem("session");
console.log(token);
const register = async (userDetails) => {
  const response = await authservice.post(`/account/register`, userDetails);
  return response;
};

const login = async (userDetails) => {
  const response = await authservice.post(`/account/login`, userDetails);
  return response;
};

const logout = () => {
  localStorage.removeItem("fabUser");
};

const resetPassword = async (email) => {
  return await authservice.post(`/account/resetPassword`, email);
};

const processPasswordReset = async (cred) => {
  const { password, ownerId, emCid } = cred;

  return await authservice.post(
    `/account/processPasswordReset?ownerId=${ownerId}&emCid=${emCid}`,
    password
  );
};

const changePassword = async (data) => {
  try {
    const res = await authservice.post("account/changePassword", data, {
      headers: { "x-fab-access-token": token },
    });

    if (res.status === 200) toast.success("Password changed successfully");
  } catch (error) {
    toast.error("incorrect credentials");
  }
};

const authService = {
  register,
  login,
  logout,
  resetPassword,
  processPasswordReset,
  changePassword,
};

export default authService;
