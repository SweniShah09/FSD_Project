package com.example.springblogapp.dao;

import com.example.springblogapp.bean.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentDao extends JpaRepository<Comment, Long> {
    public List<Comment> findByPostId(Long postId);
}
