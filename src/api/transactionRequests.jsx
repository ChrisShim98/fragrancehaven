import axios from "axios";
import { BASE_URL } from "./base";
import { errorHandling } from "./errorHandling";

export const PostTransaction = (transaction) => {
  let url = `${BASE_URL}/transaction`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .post(url, transaction, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const GetTransactionAdmin = (pageNumber = 1) => {
  let url = `${BASE_URL}/transaction?PageNumber=${pageNumber}`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(url, { headers })
    .then((response) => {
      return {
        data: response.data,
        pagination: JSON.parse(response.headers.pagination),
      };
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const GetTransaction = (username, pageNumber = 1) => {
  let url = `${BASE_URL}/transaction/${username}?PageNumber=${pageNumber}`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(url, { headers })
    .then((response) => {
      return {
        data: response.data,
        pagination: JSON.parse(response.headers.pagination),
      };
    })
    .catch((error) => {
      return errorHandling(error);
    });
};
