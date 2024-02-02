export const errorHandling = (error) => {
    if (error?.response?.data?.message && error.response.data.message !== "") {
        return {status: "Network Error", message: error.response.data.message}
    }
    return {status: "Network Error", message: "Network Error"}
  };