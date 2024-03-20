package com.example.springblogapp.service;

import com.example.springblogapp.bean.Post;
import com.example.springblogapp.dao.PostDao;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    private PostDao postDao;

    public Post savePost(Post post){
        post.setLikeCount(0);
        post.setViewCount(0);
        post.setDate(new Date());

        return postDao.save(post);

    }

    public List<Post> getAllPosts(){
        return postDao.findAll();

    }
    public Post getPostById(Long id){
        Optional<Post> optionalPost = postDao.findById(id);
        if(optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setViewCount(post.getViewCount()+1);
            return postDao.save(post);
        }
        else {
            throw new EntityNotFoundException("Post not Found");
        }
    }
    public void likePost(Long id){
        Optional<Post> optionalPost = postDao.findById(id);
        if(optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setLikeCount(post.getLikeCount()+1);
            postDao.save(post);
        }
        else {
            throw new EntityNotFoundException("post not found");
        }
    }
}
