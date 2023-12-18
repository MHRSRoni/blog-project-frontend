import axios from "../../utilities/axiosInstance";

export const getReadList = async () => {
  const response = await axios.get("/readlist");
  const result = response?.data?.data?.posts.map((item) => {
    return {
      title: item?.postData[0]?.title,
      slug: item?.postData[0]?.slug,
      picture: item?.postData[0]?.picture,
      updatedAt: item?.updatedAt,
      readTime: item?.postData[0]?.readTime,
      userName: item?.postData[0]?.userName || "demo user",
      postId: item?.post,
    };
  });

  return {
    totalPage: response?.data?.data?.totalPage,
    currentPage: response?.data?.data?.currentPage,
    data: result,
  };
};
export const updateReadListRequest = async (postId) => {
  const response = await axios.put(`/readlist/update/${postId}`);
  return response?.data?.success;
};
