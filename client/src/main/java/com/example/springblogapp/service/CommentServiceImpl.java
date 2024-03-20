package com.example.springblogapp.service;

import com.example.springblogapp.bean.Comment;
import com.example.springblogapp.bean.Post;
import com.example.springblogapp.dao.CommentDao;
import com.example.springblogapp.dao.PostDao;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentDao commentDao;
    @Autowired
    private PostDao postDao;
    public Comment createComment(Long id, String postedBy, String comment){
        Optional<Post> optionalPost = postDao.findById(id);
        if(optionalPost.isPresent()){
            Comment comment1 = new Comment();
            comment1.setPost(optionalPost.get());
            comment1.setComment(comment);
            comment1.setPostedBy(postedBy);

            return commentDao.save(comment1);
        }
        throw new EntityNotFoundException("post not found");
    }

    public List<Comment> getCommentsByPostId(Long id){
        return commentDao.findByPostId(id);
    }
}
