import axios from "../../utilities/axiosInstance";

export const loginRequest = async (reqBody) => {
  const response = await axios.post(`user/login`, reqBody);
  return response.data;
};
