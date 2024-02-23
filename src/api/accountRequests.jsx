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
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .post(url, updatePasswordForm, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const GetUserCart = (username) => {
  let url = `${BASE_URL}/account/cart?username=${username}`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(url, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PutUserCart = (username, productName, addProduct) => {
  let url = `${BASE_URL}/account/cart/${productName}?username=${username}&addProduct=${addProduct}`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .put(url, null, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PostUserCart = (username, cart, token) => {
  let url = `${BASE_URL}/account/cart?username=${username}`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .post(url, cart, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const DeleteUserCart = (username) => {
  let url = `${BASE_URL}/account/cart?username=${username}`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .delete(url, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};
