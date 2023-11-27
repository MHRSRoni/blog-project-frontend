

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'keep-react';
import { Label, /* TextInput, */ Textarea, Dropdown } from 'keep-react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

// Import the function to get the authentication token


const CreatePost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const categoryId = '65562c3566b20c9043b537b7';
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);


  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWNmYjc3MmQ3NDI3YzI0M2E0NjI3MyIsImVtYWlsIjoibmlnb3lpNzAxM0Bpa2FuaWQuY29tIiwiaWF0IjoxNzAxMDYxNDQxfQ.CA7Yi4Z7HMxxsCTmTNjKICplpYRf4-bpz1hpHyg0YLw";

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
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const postData = new FormData();
    postData.append('title', title);
    postData.append('categoryId', categoryId);
    postData.append('description', description);
    postData.append('image', image);
  
    // Logging the FormData object to inspect its contents
    postData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  
    try {
      // Use the manually set token in the headers
      await axios.post('https://health-plus-q4tt.onrender.com/api/v1/post/create', postData, {
        headers: {
          'token': token,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      setTitle('');
      setDescription('');
      setImage(null);
  
      toast.success('Post created successfully!', {
        duration: 4000,
        position: 'top-right',
      });
  
      setTimeout(() => {
        navigate('/');
      }, 4000);
    } catch (error) {
      console.error('Error creating post:', error);
  
      toast.error('Error creating post. Please try again.', {
        duration: 4000,
        position: 'top-right',
      });
    }
  };
  

    return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded shadow">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label value="Blog Title" />
          {/* <TextInput
            id="blogTitle"
            placeholder="Enter Blog Title"
            color="gray"
            onChange={handleTitleChange}
            value={title}
          /> */}

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
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
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
  );


}
export default CreatePost;