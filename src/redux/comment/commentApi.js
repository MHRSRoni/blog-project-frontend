import axios from "../../utilities/axiosInstance";

export const getCommentRequest = async (postId, page) => {
  const response = await axios.get(
    `/comments/read/${postId}?pageSize=5&currentPage=${page}`
  );

  return response.data?.data;
};

export const postCommentRequest = async (_id, comment) => {
  const response = await axios.post(`/comments/create/${_id}`, {
    comment: comment,
  });

  return response.data?.data;
};
