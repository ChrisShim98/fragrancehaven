import { jwtDecode } from "jwt-decode";

export const parseJWT = (token) => {
  let decodedJWT = jwtDecode(token);

  localStorage.setItem("token", token);
  localStorage.setItem("username", decodedJWT.unique_name);
  localStorage.setItem("role", decodedJWT.role);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  window.location.reload(false);
};
