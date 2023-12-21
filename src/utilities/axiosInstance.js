import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://health-plus-q4tt.onrender.com/api/v1",
  baseURL: "https://health-plus-bd-backend.vercel.app/api/v1",
});

export default axiosInstance;
