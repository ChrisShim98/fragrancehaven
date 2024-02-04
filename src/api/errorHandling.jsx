export const errorHandling = (error) => {
  if (error.response.data.status === 400) {
    return { error: true, message: "Something seems to be missing..." };
  } else if (error.response.data.status === 401) {
    return { error: true, message: "Unauthorized, try again..." };
  }
  return { error: true, message: error.response.data };
};
