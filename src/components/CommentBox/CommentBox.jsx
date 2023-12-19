/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { errorNotification } from "../../utilities/NotificationHelper";
import {
  getCommentThunk,
  getViewMoreCommentThunk,
  postCommentThunk,
  reset,
} from "../../redux/comment/commentSlice";
import { useDispatch, useSelector } from "react-redux";

const CommentBox = ({ loggedInUserPhoto, post }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [postLoading, setPostLoading] = useState(false);

  const { isLoading, comments, totalComment, currentPage } = useSelector(
    (state) => state.comments
  );

  const placeholderImg =
    "https://res.cloudinary.com/dscxtnb94/image/upload/v1700723393/health_plus/user/download_dxmyep.png";

  // only first time load
  useEffect(() => {
    dispatch(getCommentThunk({ postId: post._id, page: currentPage }));
    return () => {
      dispatch(reset());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostLoading(true);
    if (!comment) {
      setPostLoading(false);
      return errorNotification("comment box is empty");
    }
    dispatch(postCommentThunk({ _id: post._id, comment: comment }))
      .unwrap()
      .then(() => {
        setPostLoading(false);
        setComment("");
        window.scrollTo(0, 0);
        // again call to fetch data for ui update
        dispatch(getCommentThunk({ postId: post._id, page: 1 }));
      })
      .catch(() => {
        setPostLoading(false);
      });
  };

  const handleViewMore = () => {
    dispatch(
      getViewMoreCommentThunk({ postId: post._id, page: currentPage + 1 })
    );
  };

  return (
    <>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-4">আপনার মতামত প্রদান করুন </h2>

        <div className="flex items-start">
          <img
            src={loggedInUserPhoto ?? placeholderImg}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="flex-grow flex flex-col">
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="আপনার মন্তব্য এখানে করুন ..."
                rows="4"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                disabled={!loggedInUserPhoto ? true : false}
              ></textarea>

              <button
                disabled={!loggedInUserPhoto ? true : false}
                className={`self-end text-white py-2 w-32 rounded-md   active:scale-95  ${
                  loggedInUserPhoto
                    ? "hover:bg-blue-600 bg-blue-500"
                    : "bg-slate-300"
                } `}
              >
                {postLoading ? "...মতামত যুক্ত হচ্ছে " : "মতামত দিন"}
              </button>
            </form>
          </div>
        </div>

        {comments.length > 0 &&
          comments.map((item) => (
            <div key={item._id} className="flex items-start mt-4 mb-4">
              <img
                src={item?.user?.picture}
                alt="User Avatar"
                className="w-8 h-8  rounded-full mr-2 mt-4"
              />
              <div className="bg-gray-0 p-3 rounded-md flex-grow">
                <p>{new Date(item.updatedAt).toDateString()}</p>
                <p className="text-gray-800 font-semibold mb-1">
                  {item?.user?.name}
                </p>
                <p className="text-gray-600">{item.comment}</p>
              </div>
            </div>
          ))}

        {/* for view more button */}
        {totalComment >= 5 && comments.length < totalComment && (
          <p
            className="underline cursor-pointer flex gap-2 items-center"
            onClick={handleViewMore}
          >
            আরোও কমেন্টস দেখুন{" "}
            {isLoading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
          </p>
        )}
      </div>
    </>
  );
};

export default CommentBox;
