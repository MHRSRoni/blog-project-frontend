
// "use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "keep-react";
import { Label, TextInput, Textarea } from "keep-react";
// import { X } from "phosphor-react";
/* import Navbar2 from "../components/NavBar/NavBar2" */




const CreatePost = () => {


  const navigate = useNavigate();


  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = () => {
    console.log("title set");
  };

  const handleContentChange = () => {
    
    console.log("content set");
  };

  const handleImageUpload = () => {
    
    console.log("file set");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);

    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded shadow">
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
          <Button size="md" type="outlinePrimary" onClick={() => {navigate('/')}}>
            Back Home
          </Button>
        </div>
      </form>
    </div>
  );
};



export default CreatePost;