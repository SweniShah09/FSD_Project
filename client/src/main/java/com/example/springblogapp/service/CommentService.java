package com.example.springblogapp.service;

import com.example.springblogapp.bean.Comment;
import com.example.springblogapp.bean.Post;
import com.example.springblogapp.dao.CommentDao;
import com.example.springblogapp.dao.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface CommentService {
    Comment createComment(Long id, String postedBy, String comment);

    List<Comment> getCommentsByPostId(Long id);
}
//    @Autowired
//    private PostDao postDAO;
//
//    @Autowired
//    private CommentDao commentDAO;
//
//    public Comment addComment(Comment comment, Long postId) {
//        Post post = postDAO.findById(postId)
//                .orElseThrow(() -> new RuntimeException(postId + " -> This post id doesn't exists"));
//        comment.setPost(post);
//
//        return commentDAO.save(comment);
//    }
//
//    public Comment getCommentByCommentId(Long id) {
//        return commentDAO.findById(id)
//                .orElseThrow(() -> new RuntimeException(id + " -> This id doesn't exists"));
//    }
//
//    public List<Comment> getCommentByPostId(Long postId) {
//        return commentDAO.findByPostId(postId);
//    }
//
//    public void updateCommentByCommentId(Long commentId, Long postId, Comment comment) {
//        Post post = postDAO.findById(postId)
//                .orElseThrow(() -> new RuntimeException(postId + " -> This post id doesn't exists"));
//
//        comment.setId(commentId);
//        comment.setPost(post);
//
//        commentDAO.save(comment);
//    }
//
//    public void deleteCommentByCommentId(Long id) {
//        if(commentDAO.findById(id).isPresent()) {
//            commentDAO.deleteById(id);
//        } else {
//            throw new RuntimeException(id + " -> This id doesn't exists");
//        }
//    }
//
//}
