


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'keep-react';
import { Label, /* TextInput, */ Textarea, Dropdown } from 'keep-react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
/* import axios from 'axios'; */
import axios from '../utilities/axiosInstance';

// Import the function to get the authentication token


const CreatePost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const categoryId = '65562c3566b20c9043b537b7';
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log("title is set >>>>>" + e.target.value);
    console.log(title + "called at line 238>>>>>>>>>>>>");
  };

  const handleContentChange = (e) => {
    setDescription(e.target.value);
    console.log(description + "called at line 238>>>>>>>>>>>>");
  };

  const handleImageUpload = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const postData = new FormData();
    postData.append('title', title);
    postData.append('categoryId', categoryId);
    postData.append('description', description);
    postData.append('picture', picture);
  
    // Log the FormData object to inspect its contents
    postData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  
    try {
      // Use the manually set token in the headers
      await axios.post('https://health-plus-q4tt.onrender.com/api/v1/post/create', postData, {
      });
  
      setTitle('');
      setDescription('');
      setPicture(null);
  
      toast.success('Post created successfully!', {
        duration: 4000,
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
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-4xl mx-auto p-4 md:p-8 border rounded shadow bg-white flex flex-col">
        <Toaster />
        <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4 flex flex-col md:flex-row md:items-center md:gap-4">
            <Label value="Blog Title" />
            <input
              id="blogTitle"
              type="text"
              placeholder="Enter Blog Title"
              className="your-css-classes-here"
              onChange={handleTitleChange}
              value={title}
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-600">Upload Image:</label>
            <input
              className="border p-2"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <div>
            <Dropdown label="Dropdown button" size="sm" type="primary" dismissOnClick={true}>
              {/* ... Dropdown items ... */}
            </Dropdown>
          </div>
          <div className="mb-4">
            <Label value="description" />
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
  
          <div className="flex gap-2">
            <Button size="md" type="primary" onClick={handleSubmit}>
              Post
            </Button>
            <Button size="md" type="outlinePrimary" onClick={() => navigate('/')}>
              Back Home
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
  
}
{/* <TextInput
  id="blogTitle"
  placeholder="Enter Blog Title"
  color="gray"
  onChange={handleTitleChange}
  value={title}
/> */}
export default CreatePost;