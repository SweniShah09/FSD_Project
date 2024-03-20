import React,{useState} from 'react'
import './createPost.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [postedBy, setPostedBy] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            title,
            description,
            image,
            postedBy,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/posts/createPost', postData);
            console.log(response.data);
            // Reset form fields
            setTitle('');
            setDescription('');
            setImage('');
            setPostedBy('');

            navigate(`/viewAllPost`);
           
            
        } catch (error) {
            
            console.error(error);
        }
    };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Posted By:</label>
        <input
          type="text"
          value={postedBy}
          onChange={(e) => setPostedBy(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  

  )
}
