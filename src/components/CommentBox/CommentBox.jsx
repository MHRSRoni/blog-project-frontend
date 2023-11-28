import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axiosInstance from '../../utilities/axiosInstance';
const CommentBox = (props) => {


    const { user } = useSelector((state) => state.auth);

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    let postId = props.postId;

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handleCommentSubmit = async (event) => {

        event.preventDefault();
        setLoading(true)

        await axiosInstance.post(`/comments/create/${postId}`, { comment: comment })
            .then((response) => {
                setLoading(false)
                console.log(response)
                setComment("")

            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        const getComments = async () => {

            try {
                const response = await axiosInstance.get(`/comments/read/${postId}?pageSize=10`);

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
            <div className="mt-4" >
                <h2 className="text-lg font-semibold mb-4">Comments</h2>
                {/* Add your comment form here */}
                <div className="flex items-start">
                    <img
                        src="https://placekitten.com/40/40"
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
                            ></textarea>
                            <button
                                className="bg-blue-500 self-end text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"

                            >
                                Post Comment
                            </button>
                        </form>
                    </div>
                </div>

                {/* Individual Comment */}
                {
                    comments.map(com => {
                        return (

                            <div key={com._id} className="flex items-start mt-4 mb-4">
                                {console.log(com)}
                                <img
                                    src={com?.user?.picture}
                                    alt="User Avatar"
                                    className="w-8 h-8  rounded-full mr-2 mt-4"
                                />
                                <div className="bg-gray-0 p-3 rounded-md flex-grow">
                                    <p className="text-gray-800 font-semibold mb-1">{com?.user?.name}</p>

                                    <p className="text-gray-600">{com?.comment}.</p>
                                </div>
                            </div>

                        )
                    })
                }
                {/* End of Individual Comment */}

            </div>
            {/* End of Comment Box */}
        </ >
    );
};

export default CommentBox;