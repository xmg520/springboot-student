package com.example.springboot.service.impl;

import com.example.springboot.bean.User;
import com.example.springboot.mapper.UserMapper;
import com.example.springboot.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Yan
 * @date 2019/6/9 15:49
 */
@Service
public class IUserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    //查询所有学生
    @Override
    public List<User> findAll() {
        return userMapper.findAll();
    }


    //根据学生id进行查询
    @Override
    public User selectById(Integer id) {
        return userMapper.selectById(id);
    }


    //添加学生信息
    @Override
    public void insert(User user) throws Exception {
        if (user.getId() != null) {
            userMapper.insert(user);
        } else {
            System.out.println("id不能为空");
        }
    }


    //删除学生信息
    @Override
    public void delete(Integer id) throws Exception {
        if (id != null) {
            userMapper.deleteById(id);
        } else {
            System.out.println("id不能为空");
        }
    }

    //修改学生信息
    @Override
    public void update(User user) throws Exception {
        if (user.getId() != null) {
            userMapper.update(user);
        }else {
            System.out.println("id不能为空");
        }
    }


}
