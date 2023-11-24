import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'keep-react';
import { Label, TextInput, Textarea, Dropdown } from 'keep-react';
/* import { useDispatch } from 'react-redux';
import { createPostThunk } from "../redux/post/postSlice";  */
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';





const CreatePost = () => {
  /* const dispatch = useDispatch(); */
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const categoryId = '65562c3566b20c9043b537b7';
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    const postData = {
      title,
      categoryId,
      content,
      image,
    };
  
    try {
      
      await /* dispatch(createPostThunk(postData)); */ axios.post('https://health-plus-q4tt.onrender.com/api/v1/post/create', postData);
  
      
      setTitle('');
      setContent('');
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
          <TextInput
            id="blogTitle"
            placeholder="Enter Blog Title"
            color="gray"
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
          <Label value="Content" />
          <Textarea
            id="comment"
            placeholder="Your Blog Content..."
            withBg={true}
            color="gray"
            border={true}
            rows={4}
            onChange={handleContentChange}
            value={content}
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
};


/* 
import { useState } from 'react';
import axios from 'axios';
 */
/* const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const categoryId = '65562c3566b20c9043b537b7'; // Replace with your actual static category ID
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePostBlog = async () => {
    try {
      const postData = {
        title,
        image,
        categoryId,
        description,
      };

      // Make the API call to post the blog
      const response = await axios.post('https://health-plus-q4tt.onrender.com/api/v1/post/create', postData);

      // Handle the response or show a success message
      console.log('Blog posted successfully:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error posting blog:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={image} onChange={handleImageChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange} />
      </div>
      <button onClick={handlePostBlog}>Post Blog</button>
    </div>
  );
};

 */


export default CreatePost;
