import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://db-car-store-webservice.onrender.com/",
  timeout: 5000,
});

export default axiosApi;
