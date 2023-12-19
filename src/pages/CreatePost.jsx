


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, Label, TextInput, Textarea, Dropdown } from 'keep-react';
// import toast, { Toaster } from 'react-hot-toast';
// import axios from '../utilities/axiosInstance';
// import Loader from '../components/Spinner/Spinner';
// import { Folders } from 'phosphor-react';
// import { useSelector } from 'react-redux';

// const CreatePost = () => {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const { category } = useSelector((state) => state.category);
//   const [description, setDescription] = useState('');
//   const [picture, setPicture] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const WORD_LIMIT = 500;

//   const handleContentChange = (e) => {
//     const content = e.target.value;

//     const words = content.split(/\s+/).filter((word) => word.length > 0);

//     if (words.length <= WORD_LIMIT) {
//       setDescription(content);
//     } else {
//       toast.error(`Exceeded word limit. Maximum ${WORD_LIMIT} words allowed.`, {
//         position: 'top-right',
//       });
//     }
//   };

//   const handleImageUpload = (e) => {
//     setPicture(e.target.files[0]);
//   };

//   const handleCategoryClick = (categoryId) => {
//     const selectedCategory = category.find((item) => item._id === categoryId);
//     setSelectedCategory(selectedCategory);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     const postData = new FormData();
//     postData.append('title', title);
//     postData.append('categoryId', selectedCategory ? selectedCategory._id : '');
//     postData.append('description', description);
//     postData.append('picture', picture);

//     try {
//       await axios.post('https://health-plus-q4tt.onrender.com/api/v1/post/create', postData, {});

//       setTitle('');
//       setDescription('');
//       setPicture(null);

//       toast.success('Post created successfully!', {
//         position: 'top-right',
//       });

//       setTimeout(() => {
//         navigate('/');
//       });
//     } catch (error) {
//       console.error('Error creating post:', error);

//       toast.error('Error creating post. Please try again.', {
//         position: 'top-right',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 w-full">
//       <div className="w-full max-w-4xl mx-auto border rounded shadow bg-white flex flex-col md:p-20 gap-4 focus:border-highlight">
//         <Toaster />
//         <h2 className="text-2xl font-bold text-center">Create a New Post</h2>
//         <hr className="mb-4 border-t-2 border-blue-200 mx-auto w-1/2" />
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           {/* First Column */}
//           <div className="mb-4 flex flex-col md:items-start md:gap-4 focus:border-highlight w-full">
//             <div className="flex flex-col gap-3 focus:border-highlight w-full">
//               <Label
//                 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
//                 value="Blog Title"
//                 className="mb-3"
//               />
//               <TextInput
//                 sizing="lg"
//                 id="blogTitle"
//                 placeholder="Enter Blog Title"
//                 color="gray"
//                 handleOnChange={handleTitleChange}
//                 value={title}
//                 className="w-full"
//               />
//             </div>
//             <div className="w-full">
//               <label className="block text-lg font-bold ">Upload Image:</label>
//               <input
//                 className="border p-2 w-full"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />
//               {/* Image Preview */}
//               {picture && (
//                 <img
//                   src={URL.createObjectURL(picture)}
//                   alt="Image Preview"
//                   className="mt-2 w-full h-full object-cover cursor-pointer"
//                 />
//               )}
//             </div>

//             <div className="flex flex-col mt-4 w-full">
//               <div className='mb-2'>
//               <Label
//                 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
//                 value="Select Category"
//                 />
//                 </div>
//               <Dropdown className="w-full" label="Select Category" size="md" type="primary" dismissOnClick={true}>
//                 {category.map((item) => (
//                   <Dropdown.Item
//                     key={item._id}
//                     icon={<Folders size={24} />}
//                     onClick={() => handleCategoryClick(item._id)}
//                   >
//                     {item.title}
//                   </Dropdown.Item>
//                 ))}
//               </Dropdown>
//               {selectedCategory && (
//                 <p className="mt-2 font-bold text-lg text-gray-800">Selected Category: {selectedCategory.title}</p>
//               )}
//             </div>
//           </div>

//           {/* Description */}
//           <div className="mb-4 w-full">
//             <Label value="Description" />
//             <Textarea
//               id="description"
//               placeholder="Your Blog Content..."
//               withBg={true}
//               color="gray"
//               border={true}
//               rows={4}
//               onChange={handleContentChange}
//               value={description}
//               className="w-full"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2 mt-4 md:w-full md:justify-end">
//             {loading ? (
//               <Loader type="Oval" color="#1B4DFF" height={30} width={30} />
//             ) : (
//               <>
//                 <Button size="md" type="primary" onClick={handleSubmit}>
//                   Post
//                 </Button>
//                 <Button size="md" type="outlinePrimary" onClick={() => navigate('/')}>
//                   Back Home
//                 </Button>
//               </>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;



/////////////
// return (
//   <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 w-full">
//     <div className="w-full max-w-4xl mx-auto border rounded shadow bg-white flex flex-col md:p-20 gap-4">
//       <Toaster />
//       <h2 className="text-2xl font-bold text-center">Create a New Post</h2>
//       <hr className="mb-4 border-t-2 border-blue-200" />
//       <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
//         {/* First Column */}
//         <div className="mb-4 flex flex-col md:w-1/2 md:items-start md:gap-4">
//           <div className="flex flex-col gap-3">
//             <Label
//               style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
//               value="Blog Title"
//               className="mb-3"
//             />
//             <TextInput
//               sizing="lg"
//               id="blogTitle"
//               placeholder="Enter Blog Title"
//               color="gray"
//               handleOnChange={handleTitleChange}
//               value={title}
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Upload Image:</label>
//             <input
//               className="border p-2"
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//             />
//           </div>

//           <div className="flex flex-col mt-4">
//             <Label
//               style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
//               value="Select Category"
//             />
//             <Dropdown label="Select Category" size="md" type="primary" dismissOnClick={true}>
//               {/* ... (Dropdown items) */}
//             </Dropdown>
//           </div>
//         </div>

//         {/* Second Column */}
//         <div className="mb-4 flex flex-col md:w-1/2 md:items-start md:gap-4">
//           <label>Image</label>
//           {/* Image Preview */}
//           {picture && (
//             <img
//               src={URL.createObjectURL(picture)}
//               alt="Image Preview"
//               className="mt-2 w-full h-full object-cover cursor-pointer"
//             />
//           )}
//         </div>
//       </form>

//       {/* Description */}
//       <div className="mb-4">
//         <Label value="Description" />
//         <Textarea
//           id="description"
//           placeholder="Your Blog Content..."
//           withBg={true}
//           color="gray"
//           border={true}
//           rows={4}
//           onChange={handleContentChange}
//           value={description}
//         />
//       </div>

//       {/* Buttons at the bottom */}
//       <div className="flex gap-2 mt-4 md:w-full md:justify-end">
  
//         {loading ? (
//           <Loader type="Oval" color="#1B4DFF" height={30} width={30} />
//         ) : (
//           <>
//             <Button size="md" type="primary" onClick={handleSubmit}>
//               Post
//             </Button>
//             <Button size="md" type="outlinePrimary" onClick={() => navigate('/')}>
//               Back Home
//             </Button>
//           </>
//         )}
//       </div>
//     </div>
//   </div>
// );
////////////////

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, Label, TextInput, Textarea, Dropdown, Upload } from 'keep-react';
// import toast, { Toaster } from 'react-hot-toast';
// import axios from '../utilities/axiosInstance';
// import Loader from '../components/Spinner/Spinner';
// import { useSelector } from 'react-redux';
// import { Folders } from 'phosphor-react';

// const CreatePost = () => {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const { category } = useSelector((state) => state.category);
//   const [description, setDescription] = useState('');
//   const [picture, setPicture] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const WORD_LIMIT = 100;

//   const handleContentChange = (e) => {
//     const content = e.target.value;

//     const words = content.split(/\s+/).filter((word) => word.length > 0);

//     if (words.length <= WORD_LIMIT) {
//       setDescription(content);
//     } else {
//       toast.error(`Exceeded word limit. Maximum ${WORD_LIMIT} words allowed.`, {
//         position: 'top-right',
//       });
//     }
//   };

//   const handleFileChange = (event) => {
//     const picture = event.target.files[0];
//     if (picture) {
//       setPicture(picture);
//     }
//   };

//   const handleCategoryClick = (categoryId) => {
//     const selectedCategory = category.find((item) => item._id === categoryId);
//     setSelectedCategory(selectedCategory);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     const postData = new FormData();
//     postData.append('title', title);
//     postData.append('categoryId', selectedCategory?._id || '');
//     postData.append('description', description);
//     postData.append('picture', picture);

//     try {
//       await axios.post('https://health-plus-q4tt.onrender.com/api/v1/post/create', postData, {});

//       setTitle('');
//       setDescription('');
//       setPicture(null);
//       setSelectedCategory(null);

//       toast.success('Post created successfully!', {
//         position: 'top-right',
//       });

//       setTimeout(() => {
//         navigate('/');
//       });
//     } catch (error) {
//       console.error('Error creating post:', error);

//       toast.error('Error creating post. Please try again.', {
//         position: 'top-right',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 w-full">
//       <div className="w-full max-w-4xl mx-auto border rounded shadow bg-white flex flex-col md:p-20 gap-4 focus:border-highlight">
//         <Toaster />
//         <h2 className="text-2xl font-bold text-center">Create a New Post</h2>
//         <hr className="mb-4 border-t-2 border-blue-200" />
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           {/* First Column */}
//           <div className="mb-4 flex flex-col md:items-start md:gap-4 focus:border-highlight w-full">
//             <div className="flex flex-col gap-3 focus:border-highlight w-full">
//               <Label
//                 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
//                 value="Blog Title"
//                 className="mb-3"
//               />
//               <TextInput
//                 sizing="lg"
//                 id="blogTitle"
//                 placeholder="Enter Blog Title"
//                 color="gray"
//                 handleOnChange={handleTitleChange}
//                 value={title}
//                 className="w-full"
//               />
//             </div>
//             <div className="w-full">
//               <label className="block text-gray-600">Upload Image:</label>
//               <Upload
//                 onFileChange={handleFileChange}
//                 file={picture}
//                 horizontal={true}
//                 id="horizontal_upload"
//               />
//               {/* Image Preview */}
//               {picture && (
//                 <img
//                   src={URL.createObjectURL(picture)}
//                   alt="Image Preview"
//                   className="mt-2 w-full h-full object-cover cursor-pointer"
//                 />
//               )}
//             </div>

//             <div className="flex flex-col mt-4 w-full">
//               <Label
//                 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
//                 value="Select Category"
//               />
//               <Dropdown label="Select Category" size="md" type="primary" dismissOnClick={true}>
//                 {category.map((item) => (
//                   <Dropdown.Item
//                     key={item._id}
//                     icon={<Folders size={24} />}
//                     onClick={() => handleCategoryClick(item._id)}
//                   >
//                     {item.title}
//                   </Dropdown.Item>
//                 ))}
//               </Dropdown>
//               {selectedCategory && (
//                 <p className="mt-2 text-gray-600">Selected Category: {selectedCategory.title}</p>
//               )}
//             </div>
//           </div>

//           {/* Description */}
//           <div className="mb-4 w-full">
//             <Label value="Description" />
//             <Textarea
//               id="description"
//               placeholder="Your Blog Content..."
//               withBg={true}
//               color="gray"
//               border={true}
//               rows={4}
//               onChange={handleContentChange}
//               value={description}
//               className="w-full"
//             />
//           </div>

//           {/* Buttons at the bottom */}
//           <div className="flex gap-2 mt-4 md:w-full md:justify-end">
//             {loading ? (
//               <Loader type="Oval" color="#1B4DFF" height={30} width={30} />
//             ) : (
//               <>
//                 <Button size="md" type="primary" onClick={handleSubmit}>
//                   Post
//                 </Button>
//                 <Button size="md" type="outlinePrimary" onClick={() => navigate('/')}>
//                   Back Home
//                 </Button>
//               </>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;






import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput, Textarea, Dropdown } from 'keep-react';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../utilities/axiosInstance';
import Loader from '../components/Spinner/Spinner';
import { Folders } from 'phosphor-react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMore } from "../../src/redux/category/categorySlice";

const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { category } = useSelector((state) => state.category);
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const WORD_LIMIT = 500;

  const handleContentChange = (e) => {
    const content = e.target.value;

    const words = content.split(/\s+/).filter((word) => word.length > 0);

    if (words.length <= WORD_LIMIT) {
      setDescription(content);
    } else {
      toast.error(`Exceeded word limit. Maximum ${WORD_LIMIT} words allowed.`, {
        position: 'top-right',
      });
    }
  };

  const handleImageUpload = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleCategoryClick = async (categoryId) => {
    try {
      // Dispatch the loadMore action to make the API call
      await dispatch(loadMore());

      // Find the selected category
      const selectedCategory = category.find((item) => item._id === categoryId);
      setSelectedCategory(selectedCategory);
    } catch (error) {
      console.error('Error loading more categories:', error);

      toast.error('Error loading more categories. Please try again.', {
        position: 'top-right',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const postData = new FormData();
    postData.append('title', title);
    postData.append('categoryId', selectedCategory ? selectedCategory._id : '');
    postData.append('description', description);
    postData.append('picture', picture);

    try {
      await axios.post('https://health-plus-q4tt.onrender.com/api/v1/post/create', postData, {});

      setTitle('');
      setDescription('');
      setPicture(null);

      toast.success('Post created successfully!', {
        position: 'top-right',
      });

      setTimeout(() => {
        navigate('/');
      });
    } catch (error) {
      console.error('Error creating post:', error);

      toast.error('Error creating post. Please try again.', {
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 w-full">
      <div className="w-full max-w-4xl mx-auto border rounded shadow bg-white flex flex-col md:p-20 gap-4 focus:border-highlight">
        <Toaster />
        <h2 className="text-2xl font-bold text-center">Create a New Post</h2>
        <hr className="mb-4 border-t-2 border-blue-200 mx-auto w-1/2" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* First Column */}
          <div className="mb-4 flex flex-col md:items-start md:gap-4 focus:border-highlight w-full">
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
            <div className="w-full">
              <label className="block text-lg font-bold ">Upload Image:</label>
              <input
                className="border p-2 w-full"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {/* Image Preview */}
              {picture && (
                <img
                  src={URL.createObjectURL(picture)}
                  alt="Image Preview"
                  className="mt-2 w-full h-full object-cover cursor-pointer"
                />
              )}
            </div>

            <div className="flex flex-col mt-4 w-full">
              <div className='mb-2'>
                <Label
                  style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
                  value="Select Category"
                />
              </div>
              <Dropdown className="w-full" label="Select Category" size="md" type="primary" dismissOnClick={true}>
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
                <p className="mt-2 font-bold text-lg text-gray-800">Selected Category: {selectedCategory.title}</p>
              )}
            </div>
          </div>

          {/* Description */}
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
              className="w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-4 md:w-full md:justify-end">
            {loading ? (
              <Loader type="Oval" color="#1B4DFF" height={30} width={30} />
            ) : (
              <>
                <Button size="md" type="primary" onClick={handleSubmit}>
                  Post
                </Button>
                <Button size="md" type="outlinePrimary" onClick={() => navigate('/')}>
                  Back Home
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

