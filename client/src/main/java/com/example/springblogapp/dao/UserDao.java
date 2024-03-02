package com.example.springblogapp.dao;
import com.example.springblogapp.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Long> {
}
