import axios from "axios";
import { authservice } from "../http-common";

// const BASE_URL = `http://174.138.0.201:3000`;

const register = async (userDetails) => {
  const response = await authservice.post(`/account/register`, userDetails);
  return response;
};

const login = async (userDetails) => {
  const response = await authservice.post(`/account/login`, userDetails);
  return response;
};

const logout = () => {
  setTimeout(() => localStorage.clear(), 3000);
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

const authService = {
  register,
  login,
  logout,
  resetPassword,
  processPasswordReset,
};

export default authService;
