import axios from "axios";
import { BASE_URL } from "./base";
import { errorHandling } from "./errorHandling";

export const GetAnalytics = (period, startDate, endDate) => {
    let url = `${BASE_URL}/analytics?Period=${period}&StartDate=${startDate}&EndDate=${endDate}`;
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