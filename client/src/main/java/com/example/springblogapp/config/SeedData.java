package com.example.springblogapp.config;

import com.example.springblogapp.bean.Post;
import com.example.springblogapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SeedData implements CommandLineRunner {
    @Autowired
    private PostService postService;

    @Override
    public void run(String... args) throws Exception{
        List<Post> posts = postService.getAllPost();

        if(posts.size()==0) {
            Post post1 = new Post();
            post1.setTitle("First Post");
            post1.setDescription("This is my first post");
        }
    }
}
