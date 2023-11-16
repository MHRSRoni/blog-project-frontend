
// "use client";
import { useState } from "react";
// import { Label, TextInput, Textarea, Button } from "keep-react";
// import { X } from "phosphor-react";
// import Navbar2 from "../components/NavBar/NavBar2"

// const CreatePost = () => {
//   const [fileName, setFileName] = useState("");
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFileName(file.name);
//     }
//   };
//   const [dismiss, setDismiss] = useState(false);
//   const onDismiss = () => {
//     setDismiss(!dismiss);
//   };
//   return (
  
//             <div className="container container-fluid flex-col items-center justify-center min-h-screen">
//             <Navbar2 />

//             <Label value="Blog Title " />
//                 <TextInput
//                     id="#id-8"
//                     placeholder="Enter Blog Title"
//                     color="gray"
//                 />
                


//                 <div className="flex w-full flex-row gap-2 container-fluid">
          
//                  </div>

//                 <Textarea
//                 id="content"
//                 placeholder="Blog Content"
//                 withBg={true}
//                 color="gray"
//                 border={true}
//                 rows={4}
//                 />

//                  <Button size="md" type="primary">Publish</Button>
//             </div>


//   );
// }


const CreatePost = () => {
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
          <label className="block text-gray-600">Title:</label>
          <input
            className="border w-full p-2"
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Content:</label>
          <textarea
            className="border w-full p-2"
            value={content}
            onChange={handleContentChange}
            required
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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};



export default CreatePost;