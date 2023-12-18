

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsByUserIdThunk } from '../../redux/DTable/Dtableslice.js';
import { deletePostThunk, setModalOpen, setPostToDelete } from '../../redux/DTable/Dtableslice';
import { Modal, Button } from 'keep-react';
import { useNavigate } from 'react-router-dom';
import { Trash } from 'phosphor-react';
import Loader from '../Spinner/Spinner';



// const DTable = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { posts, isLoading, error, modalOpen, postToDelete } = useSelector((state) => state.table);
//   const { user } = useSelector((state) => state.auth);


//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [key, setKey] = useState(0);
  

//   useEffect(() => {

//       dispatch(getPostsByUserIdThunk(user.data._id));
    
//   }, [dispatch, modalOpen, key]);

//   const handleDelete = (postSlug) => {
//     dispatch(setPostToDelete(postSlug));
//     setShowDeleteModal(true);
//   };



//   const handleConfirmDelete = () => {
//     dispatch(deletePostThunk(postToDelete));
//     dispatch(setModalOpen(false));
//     setShowDeleteModal(false);
//     setKey((prevKey) => prevKey + 1);
//   };

//   const handleCancelDelete = () => {
//     dispatch(setModalOpen(false));
//     dispatch(setPostToDelete(null));
//     setShowDeleteModal(false);
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Blog Title</th>
//             <th className="py-2 px-4 border-b">Likes</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {posts.map((post) => (
//             <tr key={post._id}>
//               <td className="py-2 px-4 border-b">{post.title}</td>
//               <td className="py-2 px-4 border-b align-middle">
//                 <div className="flex flex-col items-center">
//                   <span>{`Likes: ${post.react.likes}`}</span>
//                 </div>
//               </td>
//               <td className="py-2 px-4 border-b align-middle">
//                 <div className="flex flex-col items-center">
//                   <div className="flex items-center">
//                     <button
//                       className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleDelete(post.slug)}
//                     >
//                       <span className="ml-1">Delete</span>
//                     </button>
//                     <button
//                       className="bg-blue-500 text-white px-2 py-1 rounded"
//                       onClick={() => navigate(`/edit-post/${post.slug}`)}
//                     >
//                       <span className="ml-1">Edit</span>
//                     </button>
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for delete confirmation */}
//       <Modal
//         icon={<Trash size={32} color="#1B4DFF" />}
//         size="md"
//         show={showDeleteModal}
//         position="center"
//         onClose={handleCancelDelete}
//       >
//         <Modal.Header>Do you want to delete this post?</Modal.Header>
//         <Modal.Body>
//           <div className="space-y-6">
//             <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
//               Confirm Post Delete
//             </p>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button type="outlineGray" onClick={handleCancelDelete}>
//             Cancel
//           </Button>
//           <Button type="primary" onClick={handleConfirmDelete}>
//             Confirm
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default DTable;


/////////////// working code



import {
  Dropdown,
  Label,
  Textarea,
  TextInput,
} from 'keep-react'; 

import { Folders } from 'phosphor-react';
import axios from "../../utilities/axiosInstance";


const DTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, isLoading, error, postToDelete, modalOpen } = useSelector((state) => state.table);
  const { user } = useSelector((state) => state.auth);
  const { category } = useSelector((state) => state.category);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [key, setKey] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);

  const handleDelete = (postSlug) => {
    dispatch(setPostToDelete(postSlug));
    setShowDeleteModal(true);
  };

  const handleEdit = (postSlug) => {
    fetchPostData(postSlug);
    setShowEditModal(true);
  };

  const fetchPostData = async (postSlug) => {
    try {
      const response = await axios.get(`/post/read?slug=${postSlug}`);
      const postData = response.data.data;

      setTitle(postData.title);
      setDescription(postData.description);

      const selectedCategory = category.find((item) => item._id === postData.categoryId);
      setSelectedCategory(selectedCategory);

      if (postData.picture) {
        setPicture(postData.picture);
      }
    } catch (error) {
      console.error('Error fetching post data:', error.message);
    }
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

  const handleCancelEdit = () => {
    dispatch(setModalOpen(false));
    setShowEditModal(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePictureUpload = (e) => {
    const selectedPicture = e.target.files[0];
    setPicture(selectedPicture);
  };

  const handleCategoryClick = (categoryId) => {
    const selectedCategory = category.find((item) => item._id === categoryId);
    setSelectedCategory(selectedCategory);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);

      if (selectedCategory) {
        formData.append('categoryId', selectedCategory._id);
      }

      if (picture) {
        formData.append('picture', picture);
      }

      const response = await axios.post(`/post/update/${postToDelete}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Blog post updated successfully:', response.data);

      navigate('/user/dashboard');
    } catch (error) {
      console.error('Error updating blog post:', error.message);
    }
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
                  <span>{`Likes: ${post.react.like}`}</span>
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
                      onClick={() => handleEdit(post.slug)}
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

      {/* Modal for edit confirmation */}
      <Modal
        icon={<Trash size={32} color="#1B4DFF" />}
        size="md"
        show={showEditModal}
        onClose={handleCancelEdit}
      >
        <Modal.Header>Edit Blog</Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 focus:border-highlight w-full">
              <Label
                style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
                value="Blog Title"
                className="mb-3"
              />
              <TextInput
                sizing="lg"
                id="blogTitle"
                placeholder="Enter Blog Title"
                color="gray"
                handleOnChange={handleTitleChange}
                value={title}
                className="w-full"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-600">Upload Image:</label>
              <input
                className="border p-2 w-full"
                type="file"
                accept="picture/*"
                onChange={handlePictureUpload}
              />
              {picture && typeof picture === 'object' ? (
                <img
                  src={URL.createObjectURL(picture)}
                  alt="Current Image"
                  className="mt-2 w-full h-full object-cover"
                />
              ) : picture && typeof picture === 'string' ? (
                <img
                  src={picture}
                  alt="Current Image"
                  className="mt-2 w-full h-full object-cover"
                />
              ) : null}
            </div>

            <div className="mb-4 w-full">
              <Dropdown label="Select Category" size="md" type="primary" dismissOnClick={true}>
                {category.map((item) => (
                  <Dropdown.Item
                    key={item._id}
                    icon={<Folders size={24} />}
                    onClick={() => handleCategoryClick(item._id)}
                  >
                    {item.title}
                  </Dropdown.Item>
                ))}
              </Dropdown>
              {selectedCategory && (
                <p className="mt-2 text-gray-600">Selected Category: {selectedCategory.title}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <Label value="Description" />
              <Textarea
                id="description"
                placeholder="Your Blog Content..."
                withBg={true}
                color="gray"
                border={true}
                rows={4}
                onChange={handleContentChange}
                value={description}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button size="md" type="outlinePrimary" onClick={handleCancelEdit}>
            Back to Dashboard
          </Button>
          <Button type="primary" onClick={handleEditSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DTable;