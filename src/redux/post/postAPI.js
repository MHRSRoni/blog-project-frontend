import axios from "../../utilities/axiosInstance";

export const getPosts = async () => {
  const response = await axios.get(`/post/read`);
  return response.data;
};
