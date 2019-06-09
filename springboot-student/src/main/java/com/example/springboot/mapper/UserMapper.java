package com.example.springboot.mapper;

import com.example.springboot.bean.User;
import io.swagger.annotations.Api;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author Yan
 * @date 2019/6/9 15:45
 */
@Mapper
@Api(value = "UserContoller|学生信息管理")
public interface UserMapper {

    //查询所有学生
    List<User> findAll();

    //根据学生id进行查询
    User selectById(Integer id);

    //添加学生信息
    void insert(User user);


    //删除学生信息
    void deleteById(Integer id);


    //修改学生信息
    void update(User user);
}
