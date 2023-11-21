import axios from "../../utilities/axiosInstance";

export const getCategory = async () => {
  const response = await axios.get("/category/read");
  return response.data;
};
