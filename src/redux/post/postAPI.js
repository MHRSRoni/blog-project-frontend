import axios from "../../utilities/axiosInstance";

export const getPosts = async (queryObj) => {
  const { page, limit, sort } = queryObj;

  const response = await axios.get(
    `/post/read?page=${page}&limit=${limit || 6}&sort=${sort}`
  );
  console.log(response.data);
  return response.data;
};
