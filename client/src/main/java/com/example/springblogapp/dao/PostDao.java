package com.example.springblogapp.dao;

import com.example.springblogapp.bean.Category;
import com.example.springblogapp.bean.Post;
import com.example.springblogapp.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostDao extends JpaRepository<Post, Long> {
    default List<Post> findByUserId(Long userId) {
        return null;
    }

    List<Post> findByCategoryId(Long categoryId);
}
