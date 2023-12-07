


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../../utilities/axiosInstance";
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  Button,
  Dropdown,
  Label,
  Textarea,
  TextInput,
} from 'keep-react'; 
import Loader from '../Spinner/Spinner';






const EditBlogPage = () => {
  

  const navigate = useNavigate();
  const { slug } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //State for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);
  const categoryId = '65562c3566b20c9043b537b7';

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`post/read?slug=${slug}`);

        setPostData(response.data.data);
        setTitle(response.data.data.title);
        setDescription(response.data.data.description);
        /* setCategory(response.data.data.category);  */
        
        if (response.data.data.picture) {
          setPicture(response.data.data.picture);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

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

  /* const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('categoryId', categoryId); 
      if (picture) {
        formData.append('picture', picture);
      }

      const response = await axios.post(`/post/update/${slug}`, formData, {
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

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="max-w-4xl mx-auto border rounded shadow bg-white flex flex-col md:p-20 gap-4">
        <Toaster />
        <h2 className="text-2xl font-bold mb-4">Edit Blog Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-4 flex flex-col md:flex md:items-start md:gap-4">
            <Label
              style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
              value="Blog Title"
            />
            <TextInput
              id="blogTitle"
              placeholder="Enter Blog Title"
              color="gray"
              handleOnChange={handleTitleChange}
              value={title}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Upload Image:</label>
            <input
              className="border p-2"
              type="file"
              accept="picture/*"
              onChange={handlePictureUpload}
            />
            {picture && typeof picture === 'object' ? (
              <img
                src={URL.createObjectURL(picture)}
                alt="Current Image"
                className="mt-2 w-100 h-100 object-cover"
              />
            ) : picture && typeof picture === 'string' ? (
              <img
                src={picture}
                alt="Current Image"
                className="mt-2 w-100 h-100 object-cover"
              />
            ) : null}
          </div>
          <div>
            <Dropdown
              label="Select Category"
              size="sm"
              type="primary"
              dismissOnClick={true}
              value={categoryId}
              /* onChange={handleCategoryChange} */
            >
              {/* ... (Dropdown items) */}
            </Dropdown>
          </div>
          <div className="mb-4">
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

          <div className="flex gap-2">
            <Button size="md" type="primary" onClick={handleSubmit}>
              Update
            </Button>
            <Button
              size="md"
              type="outlinePrimary"
              onClick={() => navigate('/user/dashboard')}
            >
              Back to Dashboard
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogPage;


//const result = response.data.data;