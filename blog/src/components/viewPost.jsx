import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentForm from './comment';
const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/`+id);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/comments/create', {
        id,
        postedBy,
        comment        
      });
      setPostedBy('');
      setComment('');
      // You may want to fetch the updated comments here
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/comments/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [id]);

  return (
    <Card>
      <CardContent>
        {post ? (
          <>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="body1">{post.description}</Typography>
            <Typography variant="body2">Posted By: {post.postedBy}</Typography>
            <Typography variant="h5">Create Comment</Typography>
            {/* <form onSubmit={handleSubmit}>
            <TextField
                label="Posted By"
                type="text"
                value={postedBy}
                onChange={(e) => setPostedBy(e.target.value)}
                required
                margin="normal"
              /><br/>
              <TextField
                label="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                multiline
                rows={4}
                margin="normal"
              /><br/>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form> */}
            <CommentForm/>
            <Typography variant="h5">Comments</Typography>
            {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
          </>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </CardContent>
    </Card>
  );
};
export default  ViewPost;
