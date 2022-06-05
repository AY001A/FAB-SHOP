import jwtdecode from "jwt-decode";

export const decodeToken = (token) => {
  return jwtdecode(token);
};
