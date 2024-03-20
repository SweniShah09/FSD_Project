package com.example.springblogapp.service;

import com.example.springblogapp.bean.Post;
import com.example.springblogapp.dao.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostService {

    Post savePost(Post post);

    List<Post> getAllPosts();

    Post getPostById(Long id);
    void likePost(Long id);
//    @Autowired
//    private PostDao postDAO;
//
//    public Post createPost(Post post) {
//        return postDAO.save(post);
//    }
//
//    public Post getPostById(Long id) {
//        return postDAO.findById(id).orElseThrow(() -> new RuntimeException(id + " -> This id doesn't exists"));
//    }
//
//    public List<Post> getAllPost() {
//        return postDAO.findAll();
//    }
//
//    public void updatePostById(Post post, Long id) {
//        if (postDAO.findById(id).isPresent()) {
//            Post newPost = new Post();
//            newPost.setId(id);
//            newPost.setTitle(post.getTitle());
//            newPost.setDescription(post.getDescription());
//
//            postDAO.save(newPost);
//        } else {
//            throw new RuntimeException(id + " -> This id doesn't exists");
//        }
//    }
//
//    public void deletePostById(Long id) {
//        if (postDAO.findById(id).isPresent()) {
//            postDAO.deleteById(id);
//        } else {
//            throw new RuntimeException(id + " -> This id doesn't exists");
//        }
//    }
}

