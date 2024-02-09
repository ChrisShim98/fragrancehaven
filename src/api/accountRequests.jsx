import axios from "axios";
import { BASE_URL } from "./base";
import { errorHandling } from "./errorHandling";

export const PostLogin = (username, password) => {
  let url = `${BASE_URL}/account/login`;

  return axios
    .post(url, {
      username: username,
      password: password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PostRegister = (username, password, email) => {
  let url = `${BASE_URL}/account/register`;

  return axios
    .post(url, {
      username: username,
      password: password,
      email: email,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PostUpdatePassword = (updatePasswordForm) => {
  let url = `${BASE_URL}/account/updatePassword`;

  return axios
    .post(url, updatePasswordForm)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};
