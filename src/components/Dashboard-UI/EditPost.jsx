
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../../utilities/axiosInstance";
import { useNavigate } from 'react-router-dom';
import { Folders } from 'phosphor-react';
import { useSelector } from 'react-redux';
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
  const { category } = useSelector((state) => state.category);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`post/read?slug=${slug}`);

        setTitle(response.data.data.title);
        setDescription(response.data.data.description);

        if (response.data.data.categoryId) {
          // If there's a category, find and set it
          const selectedCategory = category.find((item) => item._id === response.data.data.categoryId);
          setSelectedCategory(selectedCategory);
        }

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
  }, [slug, category]);

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
  
  const handleSubmit = async (e) => {
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
        <h2 className="text-2xl font-bold mb-1 text-center">Edit Blog Post</h2>
        <hr className="mb-4 border-t-2 border-blue-200 mx-auto w-1/2" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            {/* Display selected category */}
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

          <div className="flex gap-2 w-full">
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