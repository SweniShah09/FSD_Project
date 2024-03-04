package com.example.springblogapp.controller;

import com.example.springblogapp.bean.Category;
import com.example.springblogapp.bean.Post;
import com.example.springblogapp.service.CategoryService;
import com.example.springblogapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @PostMapping("/createCategory")
    public ResponseEntity<String> createCategory(@RequestBody Category category){
        Category response = categoryService.createCategory(category);
        return new ResponseEntity<>("Category created Successfully, ID ->" +response.getId(), HttpStatus.CREATED);
    }
    @GetMapping("/getCategory/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Long id){
        Category response = categoryService.getCategoryById(id);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/getCategory")
    public List<String> getAllCategory(){
        return categoryService.getAllCategory();
    }

    @PutMapping("/updateCategory/{id}")
    public ResponseEntity<String> updateCategory(@RequestBody Category category,@PathVariable Long id){
        categoryService.updateCategoryById(category,id);
        return new ResponseEntity<>("Category updated Successfully.", HttpStatus.OK);
    }
    @DeleteMapping("/deleteCategory/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id){
        categoryService.deleteCategoryById(id);
        return new ResponseEntity<>("Category deleted Successfully.", HttpStatus.OK);
    }
}
