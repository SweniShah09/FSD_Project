package com.example.springblogapp.service;

import com.example.springblogapp.bean.Post;
import com.example.springblogapp.bean.User;
import com.example.springblogapp.dao.PostDao;
import com.example.springblogapp.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public User createUser(User user){
        return userDao.save(user);
    }

    public User getUserById(Long id){
        return userDao.findById(id).orElseThrow(()->new RuntimeException(id+ "->This Id does not Exists"));
    }

    public List<User> getAllUser(){
        return userDao.findAll();
    }

    public void updateUserById(User user, Long id){
        if(userDao.findById(id).isPresent()){
            User newUser = new User();
            newUser.setId(id);
            newUser.setName(user.getName());
            newUser.setPassword(user.getPassword());

            userDao.save(newUser);
        }else{
            throw  new RuntimeException(id+ "->This Id does not Exists");
        }
    }

    public void deleteUserById(Long id){
        if(userDao.findById(id).isPresent()){
            userDao.deleteById(id);
        }else{
            throw  new RuntimeException(id+ "->This Id does not Exists");
        }
    }
}


