import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserIdThunk } from "../../redux/DTable/Dtableslice.js";
import {
  deletePostThunk,
  setModalOpen,
  setPostToDelete,
} from "../../redux/DTable/Dtableslice";
import { Modal, Button } from "keep-react";
import { useNavigate } from "react-router-dom";
import { Trash } from "phosphor-react";
import Loader from "../Spinner/Spinner";

const DTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, isLoading, error, modalOpen, postToDelete } = useSelector(
    (state) => state.table
  );
  const { user } = useSelector((state) => state.auth);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    dispatch(getPostsByUserIdThunk(user.data._id));
  }, [dispatch, modalOpen, key]);

  const handleDelete = (postSlug) => {
    dispatch(setPostToDelete(postSlug));
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deletePostThunk(postToDelete));
    dispatch(setModalOpen(false));
    setShowDeleteModal(false);
    setKey((prevKey) => prevKey + 1);
  };

  const handleCancelDelete = () => {
    dispatch(setModalOpen(false));
    dispatch(setPostToDelete(null));
    setShowDeleteModal(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ব্লগ টাইটেল </th>
            <th className="py-2 px-4 border-b">লাইক</th>
            <th className="py-2 px-4 border-b">অ্যাকশন</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td className="py-2 px-4 border-b">{post.title}</td>
              <td className="py-2 px-4 border-b align-middle">
                <div className="flex flex-col items-center">
                  <span>{`Likes: ${post.react.likes}`}</span>
                </div>
              </td>
              <td className="py-2 px-4 border-b align-middle">
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <button
                      className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(post.slug)}
                    >
                      <span className="ml-1">Delete</span>
                    </button>
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => navigate(`/edit-post/${post.slug}`)}
                    >
                      <span className="ml-1">Edit</span>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for delete confirmation */}
      <Modal
        icon={<Trash size={32} color="#1B4DFF" />}
        size="md"
        show={showDeleteModal}
        position="center"
        onClose={handleCancelDelete}
      >
        <Modal.Header>Do you want to delete this post?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
              Confirm Post Delete
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleConfirmDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DTable;
