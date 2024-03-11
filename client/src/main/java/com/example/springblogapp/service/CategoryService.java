package com.example.springblogapp.service;

import com.example.springblogapp.bean.Category;
import com.example.springblogapp.bean.Comment;
import com.example.springblogapp.bean.Post;
import com.example.springblogapp.dao.CategoryDao;
import com.example.springblogapp.dao.CommentDao;
import com.example.springblogapp.dao.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryDao categoryDao;

    public Category createCategory(Category category){
        return categoryDao.save(category);
    }

    public Category getCategoryById(Long id){
        return categoryDao.findById(id).orElseThrow(()->new RuntimeException(id+ "->This Id does not Exists"));
    }

    public List<String> getAllCategory(){

        List<Category>categories = categoryDao.findAll();
        return categories.stream()
                .map(Category::getCategoryTitle)
                .collect(Collectors.toList());
    }

    public void updateCategoryById(Category category, Long id){
        if(categoryDao.findById(id).isPresent()){
            Category newCategory = new Category();
            newCategory.setId(id);
            newCategory.setCategoryTitle(category.getCategoryTitle());
            newCategory.setCategoryDescription(category.getCategoryDescription());

            categoryDao.save(newCategory);
        }else{
            throw  new RuntimeException(id+ "->This Id does not Exists");
        }
    }

    public void deleteCategoryById(Long id){
        if(categoryDao.findById(id).isPresent()){
            categoryDao.deleteById(id);
        }else{
            throw  new RuntimeException(id+ "->This Id does not Exists");
        }
    }
}


