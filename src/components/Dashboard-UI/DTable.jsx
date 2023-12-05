



// const DTable = () => {
//   const dispatch = useDispatch();
//   const { isLoading, table, error } = useSelector((state) => state.table);

//   useEffect(() => {
    
//     const data = localStorage.getItem('data');
//     console.log(data +"line 15 od Dtable?????");
//     dispatch(getPostsByUserIdThunk("655cfb772d7427c243a46273"));
//   }, [dispatch]);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

  
 

//   return (
//     <table className="min-w-full bg-white border border-gray-300">
//       <thead>
//         <tr>
//           <th className="py-2 px-4 border-b">Blog Title</th>
//           <th className="py-2 px-4 border-b">Likes/Dislikes</th>
//           <th className="py-2 px-4 border-b">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {table.map((post) => (
//           <tr key={post.id}>
//             <td className="py-2 px-4 border-b">{post.title}</td>
//             <td className="py-2 px-4 border-b align-middle">
//               <div className="flex flex-col items-center">
//                 <span>{`Likes: ${post.react.likes}`}</span>
//               </div>
//             </td>
//             <td className="py-2 px-4 border-b align-middle">
//               <div className="flex flex-col items-center">
//                 <button
//                   className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
//                   onClick={() => console.log(`Delete blog with id ${post.id}`)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white px-2 py-1 rounded"
//                   onClick={() => console.log(`Edit blog with id ${post.id}`)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DTable;


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const DTable = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('https://health-plus-q4tt.onrender.com/api/v1//post/read?user=655cfb772d7427c243a46273');

//       const result = response.data.data.resultPosts;
//       console.log(result);
//       setPosts(result);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleDelete = async (postId) => {
//     try {
      
//       await axios.delete(`https://your-api-endpoint/posts/${postId}`);
      
      
//       setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      
//       console.log(`Deleted post with id ${postId}`);
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   return (
//     <table className="min-w-full bg-white border border-gray-300">
//       <thead>
//         <tr>
//           <th className="py-2 px-4 border-b">Blog Title</th>
//           <th className="py-2 px-4 border-b">Likes/Dislikes</th>
//           <th className="py-2 px-4 border-b">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {posts.map((post) => (
//           <tr key={post.id}>
//             <td className="py-2 px-4 border-b">{post.title}</td>
//             <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>
//               Likes: {post.likes} | Dislikes: {post.dislikes}
//             </td>
//             <td className="py-2 px-4 border-b" style={{ verticalAlign: 'middle' }}>
//               <button
//                 className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
//                 onClick={() => handleDelete(post.id)}
//               >
//                 Delete
//               </button>
              
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DTable;



////////     working code
// const DTable = () => {
//   const dispatch = useDispatch();
//   const { posts, isLoading, error } = useSelector((state) => state.table);

//   const id = "655cfb772d7427c243a46273"

//   useEffect(() => {
//     dispatch(getPostsByUserIdThunk(id));
//   }, [dispatch]);
//   console.log(id+"dtable");

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <table className="min-w-full bg-white border border-gray-300">
//       <thead>
//         <tr>
//           <th className="py-2 px-4 border-b">Blog Title</th>
//           <th className="py-2 px-4 border-b">Likes/Dislikes</th>
//           <th className="py-2 px-4 border-b">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {posts.map((post) => (
//           <tr key={post._id}>
//             <td className="py-2 px-4 border-b">{post.title}</td>
//             <td className="py-2 px-4 border-b align-middle">
//               <div className="flex flex-col items-center">
//                 <span>{`Likes: ${post.react.likes}`}</span>
//               </div>
//             </td>
//             <td className="py-2 px-4 border-b align-middle">
//               <div className="flex flex-col items-center">
//                 <button
//                   className="mr-2 bg-red-500 text-white px-2 py-1 rounded"
//                   onClick={() => console.log(`Delete blog with id ${post._id}`)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white px-2 py-1 rounded"
//                   onClick={() => console.log(`Edit blog with id ${post._id}`)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DTable;
////////////////////////    working code


// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPostsByUserIdThunk } from '../../redux/DTable/Dtableslice';
// import { deletePostThunk, setModalOpen, setPostToDelete } from '../../redux/DTable/Dtableslice';
// import { Modal, Button } from 'keep-react';
// import { Trash, Pencil } from 'phosphor-react'; // Import your icons
// import EditPost from './EditPost'; // Import the EditPost component

// const DTable = () => {
//   const dispatch = useDispatch();
//   const { posts, isLoading, error, modalOpen, postToDelete } = useSelector((state) => state.table);

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editPostId, setEditPostId] = useState(null);

//   const userId = '655cfb772d7427c243a46273';

//   useEffect(() => {
//     dispatch(getPostsByUserIdThunk(userId));
//   }, [dispatch, userId, modalOpen]);

//   const handleDelete = (postSlug) => {
//     dispatch(setPostToDelete(postSlug));
//     setShowDeleteModal(true);
//   };

//   const handleConfirmDelete = () => {
//     dispatch(deletePostThunk(postToDelete));
//     dispatch(setModalOpen(false));
//     setShowDeleteModal(false);
//   };

//   const handleCancelDelete = () => {
//     dispatch(setModalOpen(false));
//     dispatch(setPostToDelete(null));
//     setShowDeleteModal(false);
//   };

//   const handleEdit = (postId) => {
//     setEditPostId(postId);
//     setShowEditModal(true);
//   };

//   const handleCloseEditModal = () => {
//     setEditPostId(null);
//     setShowEditModal(false);
//   };

//   useEffect(() => {
//     // Fetch updated data after post is deleted or edited
//     if (!modalOpen && !editPostId) {
//       dispatch(getPostsByUserIdThunk(userId));
//     }
//   }, [modalOpen, editPostId, dispatch, userId]);

//   if (isLoading) {
//     return <p>Loading...</p>;
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
//                       <Trash size={24} color="#fff" />
//                       <span className="ml-1">Delete</span>
//                     </button>
//                     <button
//                       className="bg-blue-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleEdit(post._id)}
//                     >
//                       <Pencil size={24} color="#fff" />
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



//       {/* Modal for edit confirmation */}
//       <Modal
//         icon={<Trash size={32} color="#1B4DFF" />}
//         size="md"
//         show={showEditModal}
//         position="center"
//         onClose={handleCancelEdit}
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
//           <Button type="outlineGray" onClick={handleCancelEdit}>
//             Cancel
//           </Button>
//           <Button type="primary" onClick={handleConfirmEdit}>
//             Confirm
//           </Button>
//         </Modal.Footer>
//       </Modal>

//     </>
//   );
// };

// export default DTable;





import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsByUserIdThunk, deletePostThunk, setModalOpen, setPostToDelete } from '../../redux/DTable/Dtableslice';
import { Modal, Button, Textarea } from 'keep-react'; // Assuming these components are correctly exported
import { Trash, Pencil, CloudArrowUp } from 'phosphor-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, isLoading, error, modalOpen, postToDelete } = useSelector((state) => state.table);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  const [title, setTitle] = useState('');
  const categoryId = '65562c3566b20c9043b537b7';
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    dispatch(getPostsByUserIdThunk('655cfb772d7427c243a46273'));
  }, [dispatch, modalOpen]);

  const handleDelete = (postSlug) => {
    dispatch(setPostToDelete(postSlug));
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deletePostThunk(postToDelete));
    dispatch(setModalOpen(false));
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    dispatch(setModalOpen(false));
    dispatch(setPostToDelete(null));
    setShowDeleteModal(false);
  };

  const handleEdit = (postId) => {
    setEditPostId(postId);
    setShowEditModal(true);
  };

  const handleSubmit = () => {
    // Implement the logic for confirming the edit
    // For example, dispatch an action to update the post
    // and close the modal when the edit is confirmed.
    // You'll need to define the necessary actions and logic in your Redux slices.
    // dispatch(confirmEditAction(/* pass required parameters */));
    setShowEditModal(false);
  };

  const handleCancelEdit = () => {
    // Implement the logic for canceling the edit
    // For example, reset any temporary data and close the modal.
    // dispatch(cancelEditAction(/* pass required parameters */));
    setShowEditModal(false);
  };

  useEffect(() => {
    // Fetch updated data after post is deleted or edited
    if (!modalOpen && !editPostId) {
      dispatch(getPostsByUserIdThunk('655cfb772d7427c243a46273'));
    }
  }, [modalOpen, editPostId, dispatch]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('categoryId', categoryId);
    formData.append('description', description);
    formData.append('picture', picture);

    try {
      // Use the manually set token in the headers
      // await axios.post('https://health-plus-q4tt.onrender.com/api/v1/post/create', formData, {
      //   // headers: { 'Authorization': 'Bearer yourTokenHere' }
      // });

      setTitle('');
      setDescription('');
      setPicture(null);

      toast.success('Post created successfully!', {
        duration: 2000,
        position: 'top-right',
      });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error creating post:', error);

      toast.error('Error creating post. Please try again.', {
        duration: 2000,
        position: 'top-right',
      });
    }
  };

  return (
    <>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Blog Title</th>
            <th className="py-2 px-4 border-b">Likes</th>
            <th className="py-2 px-4 border-b">Actions</th>
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
                      <Trash size={24} color="#fff" />
                      <span className="ml-1">Delete</span>
                    </button>
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => handleEdit(post._id)}
                    >
                      <Pencil size={24} color="#fff" />
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
        icon={<Pencil size={32} color="#1B4DFF" />}
        size="md"
        show={showEditModal}
        position="center"
        onClose={handleCancelEdit}
      >
        <Modal.Header>Edit this post?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
              Confirm Post Edit
            </p>
            {/* Add your edit form components here */}
            <Input label="Title" value={title} onChange={handleTitleChange} />
            <Textarea label="Content" value={description} onChange={handleContentChange} />
            <Input type="file" label="Upload Image" onChange={handleImageUpload} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={handleCancelEdit}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DTable;
