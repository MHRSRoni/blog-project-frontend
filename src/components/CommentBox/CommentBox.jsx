import { useState, useEffect } from "react";
import axiosInstance from "../../utilities/axiosInstance";

const CommentBox = ({ loggedInUserPhoto, post }) => {
  const { _id } = post;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const placeholderImg =
    "https://res.cloudinary.com/dscxtnb94/image/upload/v1700723393/health_plus/user/download_dxmyep.png";

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await axiosInstance
      .post(`/comments/create/${_id}`, { comment: comment })
      .then((response) => {
        setLoading(false);
        console.log(response);
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axiosInstance.get(
          `/comments/read/${_id}?pageSize=10`
        );
        setComments(response.data.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    getComments();
  }, [loading]);

  return (
    <>
      {/* Comment Box */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-4">Comments</h2>
        {/* Add your comment form here */}
        <div className="flex items-start">
          <img
            src={loggedInUserPhoto ?? placeholderImg}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="flex-grow flex flex-col">
            <form onSubmit={handleCommentSubmit}>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Write your comment here..."
                rows="4"
                name="comment"
                value={comment}
                onChange={handleCommentChange}
                disabled={!loggedInUserPhoto ? true : false}
              ></textarea>
              <button
                disabled={!loggedInUserPhoto ? true : false}
                className={`self-end text-white py-2 px-4 rounded-md mt-2  focus:outline-none focus:shadow-outline-blue  ${
                  loggedInUserPhoto
                    ? "hover:bg-blue-600 bg-blue-500"
                    : "bg-slate-300"
                } `}
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Individual Comment */}
        {/* {console.log(comments)} */}
        {comments.map((com) => {
          const now = new Date(comments[0]?.updatedAt);
          const time = now.toLocaleTimeString();
          const date = now.toLocaleDateString();

          return (
            <div key={com._id} className="flex items-start mt-4 mb-4">
              <img
                src={com?.user?.picture}
                alt="User Avatar"
                className="w-8 h-8  rounded-full mr-2 mt-4"
              />
              <div className="bg-gray-0 p-3 rounded-md flex-grow">
                <p>
                  {date} - {time}
                </p>
                <p className="text-gray-800 font-semibold mb-1">
                  {com?.user?.name}
                </p>
                <p className="text-gray-600">{com?.comment}.</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentBox;
