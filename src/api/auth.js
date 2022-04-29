import axios from "axios";
import http from "../http-common";

const BASE_URL = `http://174.138.0.201:3000`;

const register = async (userDetails) => {
  const response = await axios.post(
    `${BASE_URL}/account/register`,
    userDetails
  );
  return response;
};

const login = async (userDetails) => {
  const response = await http.post(`${BASE_URL}/account/login`, userDetails);
  return response;
};

const logout = () => {
  setTimeout(() => localStorage.clear(), 3000);
};

const resetPassword = async (email) => {
  return await axios.post(`${BASE_URL}/account/resetPassword`, email);
};

const processPasswordReset = async (cred) => {
  const { password, ownerId, emCid } = cred;

  return await http.post(
    `${BASE_URL}/account/processPasswordReset?ownerId=${ownerId}&emCid=${emCid}`,
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
