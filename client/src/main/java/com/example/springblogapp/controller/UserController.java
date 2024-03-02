package com.example.springblogapp.controller;

import com.example.springblogapp.bean.User;
import com.example.springblogapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/createUser")
    public ResponseEntity<String> createUser(@RequestBody User user){
        User response = userService.createUser(user);
        return new ResponseEntity<>("User created Successfully, ID ->" +response.getId(), HttpStatus.CREATED);
    }
    @GetMapping("/getUser/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User response = userService.getUserById(id);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/getUser")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<String> updateUserById(@RequestBody User user,@PathVariable Long id){
        userService.updateUserById(user,id);
        return new ResponseEntity<>("Post updated Successfully.", HttpStatus.OK);
    }
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){
        userService.deleteUserById(id);
        return new ResponseEntity<>("Post deleted Successfully.", HttpStatus.OK);
    }
}
