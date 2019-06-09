package com.example.springboot.controller;

import com.example.springboot.bean.User;
import com.example.springboot.service.impl.IUserServiceImpl;
import com.example.springboot.utils.Message;
import com.example.springboot.utils.MessageUtil;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Yan
 * @date 2019/6/9 15:51
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserServiceImpl userService;


    //查询所有学生
    @ApiOperation(value = "查询所有学生")
    @GetMapping("findAll")
    public Message findAll() {
        List<User> list = userService.findAll();
        return MessageUtil.success("success", list);
    }


    //根据学生id进行查询
    @ApiOperation(value = "根据学生id进行查询")
    @GetMapping("selectById")
    @ApiImplicitParam(paramType = "query", name = "id", value = "学生编号", required = true, dataType = "Integer")
    public Message selectById(@RequestParam(value = "id") Integer id) {
        User user = userService.selectById(id);
        return MessageUtil.success("success", user);
    }


    //添加学生信息
    @ApiOperation(value = "根据学生id进行添加信息")
    @GetMapping("insertById")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "query", name = "id", value = "学生编号", required = true, dataType = "Integer"),
            @ApiImplicitParam(paramType = "query", name = "name", value = "学生姓名", required = true, dataType = "String"),
            @ApiImplicitParam(paramType = "query", name = "age", value = "学生年龄", required = true, dataType = "String"),
            @ApiImplicitParam(paramType = "query", name = "sex", value = "学生性别", required = true, dataType = "String"),
            @ApiImplicitParam(paramType = "query", name = "tel", value = "学生电话", required = true, dataType = "String")
    })
    public Message insertById(User user) {
        try {
            userService.insert(user);
            return MessageUtil.success("保存成功");
        } catch (Exception e) {
            e.printStackTrace();
            return MessageUtil.error(e.getMessage());
        }
    }

    //删除学生信息
    @ApiOperation(value = "根据学生id进行删除信息")
    @GetMapping("deleteById")
    @ApiImplicitParam(paramType = "query", name = "id", value = "学生编号", required = true, dataType = "Integer")
    public Message deleteById(Integer id) {
        try {
            userService.delete(id);
            return MessageUtil.success("删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            return MessageUtil.error(e.getMessage());
        }
    }


    //添加学生信息
    @ApiOperation(value = "根据学生id进行修改信息")
    @GetMapping("updateById")
    @ApiImplicitParams({
            @ApiImplicitParam(paramType = "query", name = "id", value = "学生编号", required = true, dataType = "Integer"),
            @ApiImplicitParam(paramType = "query", name = "name", value = "学生姓名", required = true, dataType = "String"),
            @ApiImplicitParam(paramType = "query", name = "age", value = "学生年龄", required = true, dataType = "String"),
            @ApiImplicitParam(paramType = "query", name = "sex", value = "学生性别", required = true, dataType = "String"),
            @ApiImplicitParam(paramType = "query", name = "tel", value = "学生电话", required = true, dataType = "String")
    })
    public Message updateById(User user) {
        try {
            userService.update(user);
            return MessageUtil.success("修改成功");
        } catch (Exception e) {
            e.printStackTrace();
            return MessageUtil.error(e.getMessage());
        }
    }
}
