package com.example.springblogapp.controller;

import com.example.springblogapp.bean.Post;
import com.example.springblogapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    private PostService postService;
    @PostMapping("/createPost")
    public ResponseEntity<String> createPost(@RequestBody Post post){
        Post response = postService.createPost(post);
        return new ResponseEntity<>("Post created Successfully, ID ->" +response.getId(), HttpStatus.CREATED);
    }
    @GetMapping("/getPost/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
        Post response = postService.getPostById(id);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/getPost")
    public List<Post> getAllPost(){
        return postService.getAllPost();
    }

    @PutMapping("/updatePost/{id}")
    public ResponseEntity<String> updatePost(@RequestBody Post post,@PathVariable Long id){
        postService.updatePostById(post,id);
        return new ResponseEntity<>("Post updated Successfully.", HttpStatus.OK);
    }
    @DeleteMapping("/deletePost/{id}")
    public ResponseEntity<String> deletePost(@PathVariable Long id){
        postService.deletePostById(id);
        return new ResponseEntity<>("Post deleted Successfully.", HttpStatus.OK);
    }
}
