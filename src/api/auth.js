import http from "../http-common";

const register = async (userDetails) => {
  const response = await http.post(`/account/register`, userDetails);

  return response.data;
};

const login = async (userDetails) => {
  const response = await http.post(`/account/login`, userDetails);
  return response;
};

const logout = () => {
  localStorage.clear();
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
