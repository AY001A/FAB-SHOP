import http from "../http-common";

const register = async (userDetails) => {
  const response = await http.post(`/account/register`, userDetails);
  return response;
};

const login = async (userDetails) => {
  const response = await http.post(`/account/login`, userDetails);
  return response;
};

const logout = () => {
  localStorage.clear();
};

const resetPassword = async (email) => {
  return await http.post("account/resetPassword", email);
};

const processPasswordReset = async (cred) => {
  const { password, ownerId, emCid } = cred;

  return await http.post(
    `account/processPasswordReset?ownerId=${ownerId}&emCid=${emCid}`,
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
