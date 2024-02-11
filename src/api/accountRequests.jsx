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

export const GetUserCart = (username) => {
  let url = `${BASE_URL}/account/cart?username=${username}`;

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PutUserCart = (username, productId, addProduct) => {
  let url = `${BASE_URL}/account/cart/${productId}?username=${username}&addProduct=${addProduct}`;

  return axios
    .put(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const DeleteUserCart = (username) => {
  let url = `${BASE_URL}/account/cart?username=${username}`;

  return axios
    .delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};
