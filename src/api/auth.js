import http from "../http-common";

const register = async (userDetails) => {
  const response = await http.post(`/account/register`, userDetails);

  return response.data;
};

const login = async (userDetails) => {
  const response = await http.post(`/account/login`, userDetails);

  if (response.data) {
    const { fabAccessToken, fabAccountDetails } = response.data.data;

    const fabData = {
      token: fabAccessToken,
      profile: {
        firstName: fabAccountDetails.FirstName,
      },
    };
    localStorage.setItem("fabUserAccess", JSON.stringify(fabData));
  }
  return response;
};

const logout = () => {
  localStorage.removeItem("fabUserAccess");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
