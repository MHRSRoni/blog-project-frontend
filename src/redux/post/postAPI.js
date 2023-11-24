import axios from "../../utilities/axiosInstance";


// Read blog card on home page api

export const getPosts = async () => {
  const response = await axios.get(`/post/read`);
  return response.data;
};


// Create blog api

export const createPost = async (postData) => {
  const response = await axios.post(`/post/create`, postData);
  return response.data;

};



// Read single blog api

export const singleBlog = async (slugData) => {
  const response = await axios.get(`/post/read?slug=${slugData}`);
  return response.data;
};