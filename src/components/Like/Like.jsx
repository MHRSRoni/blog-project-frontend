import { ThumbsUp } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { updateLike } from "../../redux/post/postSlice";
import axios from "../../utilities/axiosInstance";
import { singlePostUpdateLike } from "../../redux/singlePost/singlePostSlice";

const Like = ({ react, postId, sliceType }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const userId = user?.data?._id;
  const isLiked = react.reactUserId.find((id) => id === userId);

  const handleLike = async () => {
    try {
      if (!userId) {
        return window.alert("You are not loggedIn . please login first");
      }
      await axios.post(`/post/react/${postId}/like`);

      if (sliceType === "postSlice") {
        dispatch(updateLike({ postId, userId }));
      }

      if (sliceType === "readSingleBlogSlice") {
        dispatch(singlePostUpdateLike({ postId, userId }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="flex flex-row items-center text-md ml-2 rounded-md pr-4 pl-4 pt-2 pb-2 hover:bg-[#f5f5f5] "
      onClick={handleLike}
    >
      <ThumbsUp size={24} style={{ color: `${isLiked ? "red" : ""}` }} />
      <span className="pl-2">{react.like} likes</span>
    </button>
  );
};

export default Like;
