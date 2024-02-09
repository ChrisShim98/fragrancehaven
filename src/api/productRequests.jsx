import axios from "axios";
import { BASE_URL } from "./base";
import { errorHandling } from "./errorHandling";

export const GetAllProducts = (
  pageNumber = 1,
  searchQuery = "",
  orderBy = ""
) => {
  let url = `${BASE_URL}/product?${
    searchQuery === "" ? "" : `SearchQuery=${searchQuery}&`
  }PageNumber=${pageNumber}${orderBy === "" ? "" : `&OrderBy=${orderBy}`}`;

  return axios
    .get(url)
    .then((response) => {
      if (response.headers?.pagination) {
        return {
          data: response.data,
          pagination: JSON.parse(response.headers.pagination),
        };
      }
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PostAddProduct = (product) => {
  let url = `${BASE_URL}/product`;

  return axios
    .post(url, product)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const DeleteProduct = (productId) => {
  let url = `${BASE_URL}/product/${productId}`;

  return axios
    .delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PutEditProduct = (product, productId) => {
  let url = `${BASE_URL}/product/${productId}`;

  return axios
    .put(url, product)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PostAddPhotoToProduct = (productId, file) => {
  let url = `${BASE_URL}/product/${productId}/addPhoto`;

  return axios
    .post(url, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const DeletePhoto = (productId, photoId) => {
  let url = `${BASE_URL}/product/${productId}/deletePhoto/${photoId}`;

  return axios
    .delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PutSetMainPhoto = (productId, photoId) => {
  let url = `${BASE_URL}/product/${productId}/mainPhoto/${photoId}`;

  return axios
    .put(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PostReview = (productId, review) => {
  let url = `${BASE_URL}/product/${productId}/addReview`;

  return axios
    .post(url, review)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};
