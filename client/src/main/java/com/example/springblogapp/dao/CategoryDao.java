package com.example.springblogapp.dao;

import com.example.springblogapp.bean.Category;
import com.example.springblogapp.bean.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CategoryDao extends JpaRepository<Category, Long> {
//    public List<Category> findByPostId(Long postId);
}
