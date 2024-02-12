import axios from "axios";
import { BASE_URL } from "./base";
import { errorHandling } from "./errorHandling";

export const GetAllProducts = (
  pageNumber = 1,
  searchQuery = "",
  orderBy = "",
  productsWithReview = false,
  productsOnSale = false,
  productsInStock = false
) => {
  let url = `${BASE_URL}/product?${
    searchQuery === "" ? "" : `SearchQuery=${searchQuery}&`
  }PageNumber=${pageNumber}${
    orderBy === "" ? "" : `&OrderBy=${orderBy}`
  }&ProductsWithReview=${productsWithReview}&ProductsOnSale=${productsOnSale}&ProductsInStock=${productsInStock}`;

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

export const GetProductById = (productId) => {
  let url = `${BASE_URL}/product/${productId}`;

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PostAddProduct = (product) => {
  let url = `${BASE_URL}/product`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .post(url, product, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const DeleteProduct = (productId) => {
  let url = `${BASE_URL}/product/${productId}`;
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

export const PutEditProduct = (product, productId) => {
  let url = `${BASE_URL}/product/${productId}`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .put(url, product, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const PostAddPhotoToProduct = (productId, file) => {
  let url = `${BASE_URL}/product/${productId}/addPhoto`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  };

  return axios
    .post(url, file, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const DeletePhoto = (productId, photoId) => {
  let url = `${BASE_URL}/product/${productId}/deletePhoto/${photoId}`;
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

export const PutSetMainPhoto = (productId, photoId) => {
  let url = `${BASE_URL}/product/${productId}/mainPhoto/${photoId}`;
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

export const PostReview = (productId, review) => {
  let url = `${BASE_URL}/product/${productId}/addReview`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .post(url, review, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};

export const DeleteReview = (productId, reviewId) => {
  let url = `${BASE_URL}/product/${productId}/deleteReview/${reviewId}`;
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

export const PostSale = (productId, saleAmount) => {
  let url = `${BASE_URL}/product/${productId}/addSale/${saleAmount}`;
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .post(url, null, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return errorHandling(error);
    });
};
