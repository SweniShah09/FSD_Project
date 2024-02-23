package com.example.springblogapp.service;

import com.example.springblogapp.bean.Post;
import com.example.springblogapp.dao.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostDao postDao;

    public Post createPost(Post post){
       return postDao.save(post);
    }

    public Post getPostById(Long id){
        return postDao.findById(id).orElseThrow(()->new RuntimeException(id+ "->This Id does not Exists"));
    }

    public List<Post> getAllPost(){
        return postDao.findAll();
    }

    public void updatePostById(Post post, Long id){
        if(postDao.findById(id).isPresent()){
            Post newPost = new Post();
            newPost.setId(id);
            newPost.setTitle(post.getTitle());
            newPost.setDescription(post.getDescription());

            postDao.save(newPost);
        }else{
            throw  new RuntimeException(id+ "->This Id does not Exists");
        }
    }

    public void deletePostById(Long id){
        if(postDao.findById(id).isPresent()){
            postDao.deleteById(id);
        }else{
            throw  new RuntimeException(id+ "->This Id does not Exists");
        }
    }
}
