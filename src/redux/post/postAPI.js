import axios from "../../utilities/axiosInstance";

// Read blog card on home page api

export const getPosts = async (queryObj) => {
  const { page, limit, sort } = queryObj;

  const response = await axios.get(
    `/post/read?page=${page}&limit=${limit || 6}&sort=${sort}`
  );

  return response.data;
};
