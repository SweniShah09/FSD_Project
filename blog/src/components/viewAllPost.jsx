// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ViewAllPost = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/posts/getAllPosts');
//                 setPosts(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>All Posts</h1>
//             {posts.map(post => (
//                 <div key={post.id}>
//                     <h2>{post.title}</h2>
//                     <p>{post.description}</p>
//                     <img src={post.image} alt="Post" />
//                     <p>Posted By: {post.postedBy}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ViewAllPost;

import * as React from 'react';
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
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ViewAllPost() {
    const [expanded, setExpanded] = React.useState(false);
    const [posts, setPosts] = useState([]);
    const navigate =useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/posts/getAllPosts');
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleLikeClick = async (id) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/posts/${id}/like`);
            const updatedPosts = posts.map((post) =>
                post.id === id ? { ...post, like_count: response.data.like_count } : post
            );
            setPosts(updatedPosts);
            
        } catch (error) {
            console.error(error);
        }
    }
    const handleviewpost =()=>{
        navigate(`/viewPost/:id`);
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap',gap: '16px', marginTop: '35px', marginLeft: '15px' }}>
            {posts.map((post,id) => (
                
                <Card key={post.id}sx={{ flexBasis: 'auto', maxWidth: 345 }}>
                    <CardHeader
                        style={{width: '50vh'}}
                        title={post.title}
                        subheader={`Posted By: ${post.postedBy}`}
                    />
                   {post.image && (
                        <CardMedia
                            component="img"
                            height="194"
                            image={post.image}
                            alt="Post Image"
                        />
                    )}
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {post.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" onClick={() => handleLikeClick(post.id)}>
                            <FavoriteIcon />
                            <Typography variant="body2" color="text.secondary" style={{ marginLeft: '4px' }}>
                                {post.likeCount}
                            </Typography>
                            </IconButton>
                        <IconButton >
                            <VisibilityIcon/>
                        </IconButton>
                        <Link to={'/viewPost/'+id} className='btn btn-secondary'>View Post</Link>
                    </CardActions>
                   
                </Card>
            ))}
        </div>
    );
}