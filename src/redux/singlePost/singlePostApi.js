import axios from "../../utilities/axiosInstance";



// Read single blog api

export const singleBlog = async (slugData) => {
  const response = await axios.get(`post/read?slug=${slugData}`);
  const result = response.data.data
  return result;
};