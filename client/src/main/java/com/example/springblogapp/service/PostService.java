package com.example.springblogapp.service;

import com.example.springblogapp.bean.Category;
import com.example.springblogapp.bean.Comment;
import com.example.springblogapp.bean.Post;
import com.example.springblogapp.bean.User;
import com.example.springblogapp.dao.CategoryDao;
import com.example.springblogapp.dao.PostDao;
import com.example.springblogapp.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostDao postDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private CategoryDao categoryDao;
    public Post createPost(Post post, Long userId, Long catId){
        User user = this.userDao.findById(userId).orElseThrow(null);
        Category category = this.categoryDao.findById(catId).orElseThrow(null);
        Post posts = new Post();
        posts.setImageName("default.png");
        posts.setAddDate(new Date());
        posts.setUsers(user);
        posts.setCategory(category);
        return postDao.save(post);
    }

    public Post getPostById(Long id){
        return postDao.findById(id).orElseThrow(()->new RuntimeException(id+ "->This Id does not Exists"));
    }

    public List<Post> getAllPostByUserId(Long userId) {
        return postDao.findByUserId(userId);
    }

    public List<Post> getAllPostByCategoryId(Long categoryId) {
        return postDao.findByCategoryId(categoryId);
    }

    public List<Post> searchPost(String keyword){
        return null;
    }
    public void updatePostById(Post post, Long id){
        if(postDao.findById(id).isPresent()){
            Post newPost = new Post();
            newPost.setId(id);
            newPost.setTitle(post.getTitle());
            newPost.setDescription(post.getDescription());
            newPost.setImageName(post.getImageName());
            newPost.setAddDate(post.getAddDate());

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
