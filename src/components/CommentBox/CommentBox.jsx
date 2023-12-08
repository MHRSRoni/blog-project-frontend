/* eslint-disable no-unsafe-optional-chaining */
import { useState, useEffect } from "react";
import axiosInstance from "../../utilities/axiosInstance";
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";
import { errorNotification } from "../../utilities/NotificationHelper";
import ReactPaginate from "react-paginate";

const CommentBox = ({ loggedInUserPhoto, post, setCommentLoading }) => {
  const { _id } = post;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const placeholderImg =
    "https://res.cloudinary.com/dscxtnb94/image/upload/v1700723393/health_plus/user/download_dxmyep.png";

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!comment) {
      setLoading(false);
      return errorNotification("Comment is empty");
    }

    await axiosInstance
      .post(`/comments/create/${_id}`, { comment: comment })
      .then(() => {
        setLoading(false);
        setComment("");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    const getComments = async () => {
      setCommentLoading(true);
      try {
        const response = await axiosInstance.get(
          `/comments/read/${_id}?pageSize=5&currentPage=${currentPage}`
        );

        const { data } = response?.data;
        setCommentLoading(false);
        setComments(data.comments);
        setTotalPage(data.totalPage);
      } catch (error) {
        setCommentLoading(false);
        console.error("Error fetching comments:", error);
      }
    };

    getComments();
  }, [loading, currentPage]);

  const handlePageClick = (number) => {
    const curr = number.selected + 1;
    setCurrentPage(curr);
  };

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
                className={`self-end text-white py-2 w-32 rounded-md   active:scale-95  ${
                  loggedInUserPhoto
                    ? "hover:bg-blue-600 bg-blue-500"
                    : "bg-slate-300"
                } `}
              >
                {loading ? "...Loading" : "Comment"}
              </button>
            </form>
          </div>
        </div>

        {comments.length > 0 &&
          comments.map((com) => {
            const postDate = new Date(comments[0]?.updatedAt);

            return (
              <div key={com._id} className="flex items-start mt-4 mb-4">
                <img
                  src={com?.user?.picture}
                  alt="User Avatar"
                  className="w-8 h-8  rounded-full mr-2 mt-4"
                />
                <div className="bg-gray-0 p-3 rounded-md flex-grow">
                  <p>{postDate.toDateString()}</p>
                  <p className="text-gray-800 font-semibold mb-1">
                    {com?.user?.name}
                  </p>
                  <p className="text-gray-600">{com?.comment}.</p>
                </div>
              </div>
            );
          })}
      </div>

      {comments.length > 0 && (
        <ReactPaginate
          previousLabel={<CaretDoubleLeft size={24} />}
          nextLabel={<CaretDoubleRight size={24} />}
          breakLabel={"..."}
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"list-none flex justify-center items-center"}
          pageClassName={"bg-neutral cursor-pointer"}
          pageLinkClassName={"p-2 rounded-full"}
          previousClassName={"mr-2 cursor-pointer"}
          previousLinkClassName={"p-2 rounded-full"}
          nextClassName={"ml-2 cursor-pointer "}
          nextLinkClassName={"p-2 rounded-full"}
          breakClassName={"bg-neutral cursor-pointer"}
          breakLinkClassName={"p-2 rounded-full"}
          activeClassName={"bg-blue-600 text-white"}
        />
      )}
    </>
  );
};

export default CommentBox;
