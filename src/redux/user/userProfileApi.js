import axios from "../../utilities/axiosInstance";



// Read single blog api

export const userProfile = async () => {
  const response = await axios.get(`user/profile`);
  const result = response.data
  return result;
};