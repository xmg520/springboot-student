package com.example.springboot.service;

import com.example.springboot.bean.User;

import java.util.List;

/**
 * @author Yan
 * @date 2019/6/9 15:49
 */
public interface UserService {
    //查询所有学生
    List<User> findAll();

    //根据学生id进行查询
    User selectById(Integer id);


    //添加学生信息
    void insert(User user) throws Exception;

    //删除学生信息
    void delete(Integer id) throws Exception;


    //修改学生信息
    void update(User user) throws Exception;
}
