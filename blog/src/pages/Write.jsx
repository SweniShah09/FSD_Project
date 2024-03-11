// import React, { useState } from "react";
// import "../style/write.css";
// import { FiPlus } from "react-icons/fi";
// import axios from "axios";
// export default function Write({id}) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   // const [image, setImage] = useState(null);

//   // const handleImageUpload = async (e) => {
//   //   const file = e.target.files[0];
//   //   try {
//   //     const formData = new FormData();
//   //     formData.append('image', file);
//   //     const response = await axios.post(`/post/image/upload`, formData);
//   //     console.log('Image uploaded successfully:', response.data);
//   //     // Optionally, you can update the state with the uploaded image details
//   //   } catch (error) {
//   //     console.error('Error uploading image:', error.response.data);
//   //     // Handle error, show error message, etc.
//   //   }
//   // };
//   const [image, setImage] = useState(null);
//   const [postId, setPostId] = useState(null);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     setImage(URL.createObjectURL(file)); // Set image preview
//     // Set the post ID associated with the image
//     setPostId(123); // Replace with the actual post ID
//   };

//   const handleImageSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('image', image);
//       formData.append('postId', postId);
//       const response = await axios.post('/post/image/upload', formData);
//       console.log('Image uploaded successfully:', response.data);
//       // Optionally, you can update the state or show a success message
//     } catch (error) {
//       console.error('Error uploading image:', error.response.data);
//       // Handle error, show error message, etc.
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/createPost", {
//         title,
//         content,
//       });
//       console.log("Post created successfully:", response.data);
//       // Optionally, you can redirect the user to another page or show a success message
//     } catch (error) {
//       console.error("Error creating post:", error.response.data);
//       // Handle error, show error message, etc.
//     }
//   };
//   return (
//     <div className="write">
//       {/* <img
//         className="writeImg"
//         src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//         alt=""
//       /> */}
//       <form className="writeForm">
//         <div className="writeFormGroup">
//         <label htmlFor="fileInput">
//           {image ? (
//             <img className="writeImg" src={image} alt="Preview" />
//           ) : (
//             <FiPlus className="writeIcon" />
//           )}</label>
//           <input
//           id="fileInput"
//           type="file"
//           style={{ display: 'none' }}
//           onChange={handleImageUpload}
//         />
//           <input
//             className="writeInput"
//             placeholder="Title"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             autoFocus={true}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             className="writeInput writeText"
//             placeholder="Tell your story..."
//             type="text"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             autoFocus={true}
//           />
//         </div>
//         <button className="writeSubmit" type="submit" onClick={handleSubmit}>
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';
import '../style/write.css'
export default function Write({ id }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      const response = await axios.post('http://localhost:8080/post/image/upload', formData);
      console.log('Image uploaded successfully:', response.data);
      return response.data.fileName; // Return the uploaded image file name
    } catch (error) {
      console.error('Error uploading image:', error.response.data);
      // Handle error, show error message, etc.
      throw error; // Rethrow the error to stop post creation if image upload fails
    }
  };

  const handleSubmit = async (imageFileName) => {
    try {
      const response = await axios.post('http://localhost:8080/createPost', {
        title,
        content,
        image: imageFileName, // Use the uploaded image file name
      });
      console.log('Post created successfully:', response.data);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error('Error creating post:', error.response.data);
      // Handle error, show error message, etc.
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageFileName = await handleImageSubmit();
      await handleSubmit(imageFileName);
    } catch (error) {
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleFormSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FiPlus className="writeIcon" />
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
