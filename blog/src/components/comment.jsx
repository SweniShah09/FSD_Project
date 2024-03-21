import React, { useState } from 'react';
import axios from 'axios';

function CommentForm() {
  const [postId, setPostId] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/comments/create', {
      id: postId,
      postedBy: postedBy,
      comment: comment
    })
      .then(response => {
        console.log(response.data);
        // Handle the response data if needed
      })
      .catch(error => {
        console.error('There was a problem with your axios request:', error);
        // Handle error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="postId" value={postId} onChange={(e) => setPostId(e.target.value)} placeholder="Post ID" />
      <input type="text" id="postedBy" value={postedBy} onChange={(e) => setPostedBy(e.target.value)} placeholder="Posted By" />
      <input type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
