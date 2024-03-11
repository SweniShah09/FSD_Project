package com.example.springblogapp.controller;

import com.example.springblogapp.bean.Comment;
import com.example.springblogapp.bean.Post;
import com.example.springblogapp.dao.CategoryDao;
import com.example.springblogapp.dao.PostDao;
import com.example.springblogapp.dao.UserDao;
import com.example.springblogapp.service.FileService;
import com.example.springblogapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@CrossOrigin
@RestController
public class PostController {
    @Autowired
    private PostService postService;
    @Autowired
    private FileService fileService;
    @Value("${project.image}")
    private String path;

    @PostMapping("/createPost")
    public ResponseEntity<String> createPost(@RequestBody Post post, @PathVariable Long userId, @PathVariable Long catId) {
        Post response = postService.createPost(post, userId, catId);
        return new ResponseEntity<>("Post created Successfully, ID ->" + response.getId(), HttpStatus.CREATED);
    }

    @GetMapping("/getPost/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
        Post response = postService.getPostById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/category/{id}/getPosts")
    public List<Post> getAllPostByCategoryId(@PathVariable Long id) {
        return postService.getAllPostByCategoryId(id);
    }

    @GetMapping("/user/{id}/getPosts")
    public List<Post> getAllPostByUserId(@PathVariable Long id) {
        return postService.getAllPostByUserId(id);
    }

    @PutMapping("/updatePost/{id}")
    public ResponseEntity<String> updatePost(@RequestBody Post post, @PathVariable Long id) {
        postService.updatePostById(post, id);
        return new ResponseEntity<>("Post updated Successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/deletePost/{id}")
    public ResponseEntity<String> deletePost(@PathVariable Long id) {
        postService.deletePostById(id);
        return new ResponseEntity<>("Post deleted Successfully.", HttpStatus.OK);
    }

    //post image upload
    @PostMapping("/post/image/upload")
    public ResponseEntity<Post> uploadPostImage(@RequestParam("image") MultipartFile image, @RequestParam("id") Long id) {
        String fileName = null;
        try {
            fileName = this.fileService.uploadImage(path, image);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        Post post = this.postService.getPostById(id);
        post.setImageName(fileName);
        this.postService.updatePostById(post, id);
        return new ResponseEntity<>(post, HttpStatus.OK);
    }
}
