import axios from "../../utilities/axiosInstance";


// Read blog card on home page api

export const getPosts = async (queryObj) => {
  const { page, limit, sort } = queryObj;

  const response = await axios.get(
    `/post/read?page=${page}&limit=${limit || 6}&sort=${sort}`
  );
  console.log(response.data);
  return response.data;
};


// Create blog api

// export const createPost = async (postData) => {
//   const response = await axios.post(`/post/create`, postData);
//   return response.data;

// };



// Read single blog api

// export const singleBlog = async (slugData) => {
//   const response = await axios.get(`/post/read?slug=${slugData}`);
//   return response.data;
// };