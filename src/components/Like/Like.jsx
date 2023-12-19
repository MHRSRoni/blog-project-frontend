// import { ThumbsUp } from "phosphor-react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateLike } from "../../redux/post/postSlice";
// import axios from "../../utilities/axiosInstance";
// import { singlePostUpdateLike } from "../../redux/singlePost/singlePostSlice";

// const Like = ({ react, postId, sliceType }) => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const userId = user?.data?._id;
//   const isLiked = react.reactUserId.find((id) => id === userId);

//   const handleLike = async () => {
//     try {
//       if (!userId) {
//         return window.alert("You are not loggedIn . please login first");
//       }
//       await axios.post(`/post/react/${postId}/like`);

//       if (sliceType === "postSlice") {
//         dispatch(updateLike({ postId, userId }));
//       }

//       if (sliceType === "readSingleBlogSlice") {
//         dispatch(singlePostUpdateLike({ postId, userId }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <button
//       className="flex flex-row items-center text-md ml-2 rounded-md pr-4 pl-4 pt-2 pb-2 hover:bg-[#f5f5f5] "
//       onClick={handleLike}
//     >
//       <ThumbsUp size={24} style={{ color: `${isLiked ? "red" : ""}` }} />
//       <span className="pl-2">{react.like} লাইক</span>
//     </button>
//   );
// };

// export default Like;





// import { ThumbsUp, CloudArrowUp } from "phosphor-react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateLike } from "../../redux/post/postSlice";
// import axios from "../../utilities/axiosInstance";
// import { singlePostUpdateLike } from "../../redux/singlePost/singlePostSlice";
import banglaNumber from "../../utilities/banglaNumber";
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const Like = ({ react, postId, sliceType }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const userId = user?.data?._id;
//   const isLiked = react.reactUserId.find((id) => id === userId);

//   const [showModal, setShowModal] = useState(false);

//   const handleLike = async () => {
//     try {
//       if (!userId) {
//         return setShowModal(true);
//       }

//       await axios.post(`/post/react/${postId}/like`);

//       if (sliceType === "postSlice") {
//         dispatch(updateLike({ postId, userId }));
//       }

//       if (sliceType === "readSingleBlogSlice") {
//         dispatch(singlePostUpdateLike({ postId, userId }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const onClickModalCancel = () => {
//     setShowModal(false);
//   };

//   const onClickModalLogin = () => {
//     setShowModal(false);
//     navigate("/login");
//   };

//   return (
//     <button
//       className="flex flex-row items-center text-md ml-2 rounded-md pr-4 pl-4 pt-2 pb-2 hover:bg-[#f5f5f5] "
//       onClick={handleLike}
//     >
//       <ThumbsUp size={24} style={{ color: `${isLiked ? "red" : ""}` }} />
//       <span className="pl-2">{banglaNumber(react.like)} লাইক</span>
//     </button>
//   );
// };

// export default Like;



import { ThumbsUp, CloudArrowUp } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { updateLike } from "../../redux/post/postSlice";
import axios from "../../utilities/axiosInstance";
import { singlePostUpdateLike } from "../../redux/singlePost/singlePostSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Like = ({ react, postId, sliceType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const userId = user?.data?._id;
  const isLiked = react.reactUserId.find((id) => id === userId);

  const [showModal, setShowModal] = useState(false);

  const handleLike = async () => {
    try {
      if (!userId) {
        return setShowModal(true);
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

  const onClickModalCancel = () => {
    setShowModal(false);
  };

  const onClickModalLogin = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <button
        className="flex flex-row items-center text-md ml-2 rounded-md pr-4 pl-4 pt-2 pb-2 hover:bg-[#f5f5f5] "
        onClick={handleLike}
      >
        <ThumbsUp size={24} style={{ color: `${isLiked ? "red" : ""}` }} />
        <span className="pl-2">{banglaNumber(react.like)} লাইক</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="flex fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="bg-white w-96 p-4 rounded-md z-10">
            <CloudArrowUp size={28} color="#1B4DFF" />
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
              You are not logged in. Please login first.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-[#1B4DFF] text-white rounded-md"
              onClick={onClickModalCancel}
            >
              Close
            </button>
            <button
              className="mt-4 px-4 py-2 bg-[#1B4DFF] text-white rounded-md ml-2"
              onClick={onClickModalLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Like;

