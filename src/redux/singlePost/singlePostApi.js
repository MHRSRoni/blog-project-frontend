import axios from "../../utilities/axiosInstance";

export const singleBlog = async (slug) => {
  const response = await axios.get(`post/read?slug=${slug}`);
  return response.data;
};
