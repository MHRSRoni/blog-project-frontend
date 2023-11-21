import axios from "../../utilities/axiosInstance";

export const getPosts = async () => {
  const response = await axios.get(`/post/read`);
  return response.data;
};


export const createPost = async (postData) => {
  const response = await axios.post(`/post/create`, postData);
  return response.data;



};
export const singleBlog = async () => {
  const response = await axios.get(`/post/read?slug=নারীদের-জন্য-স্বাস্থ্যকর-ও-উপকারী-ফলগুলো`);
  return response.data;
};