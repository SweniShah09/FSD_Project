package com.example.springblogapp.controller;

import com.example.springblogapp.bean.Post;
import com.example.springblogapp.service.PostService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostService postService;

//
    @PostMapping("/createPost")
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        Post response = postService.savePost(post);

        return new ResponseEntity<>("Post created successfully. Id -> " + response.getId(), HttpStatus.CREATED);
    }
    @GetMapping("/getAllPosts")
    public ResponseEntity<List<Post>> getAllPosts(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(postService.getAllPosts());

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
      try{
          Post post = postService.getPostById(id);
          return ResponseEntity.ok(post);
      }catch (EntityNotFoundException e){
          return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
      }
    }
    @PutMapping("/{id}/like")
    public ResponseEntity<?> likePost(@PathVariable Long id){
        try{
            postService.likePost(id);
            return ResponseEntity.ok(new String[]{"post liked successfully"});
        }catch (EntityNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

//
//    @GetMapping("/getPosts")
//    public List<Post> getAllPost() {
//        return postService.getAllPost();
//    }
//
//    @PutMapping("/updatePost/{id}")
//    public ResponseEntity<String> updatePost(@RequestBody Post post, @PathVariable Long id) {
//        postService.updatePostById(post, id);
//
//        return new ResponseEntity<>("Post updated successfully.", HttpStatus.OK);
//    }
//
//    @DeleteMapping("/deletePost/{id}")
//    public ResponseEntity<String> deletePost(@PathVariable Long id) {
//        postService.deletePostById(id);
//
//        return new ResponseEntity<>("Post deleted successfully.", HttpStatus.OK);
//    }
}
