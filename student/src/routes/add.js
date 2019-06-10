import React, {Component} from 'react';
import axios from '../utils/axios'
import {Layout, Menu, Table, Button, message, Icon, Modal, Form, Input} from 'antd';

const {Header, Content, Footer} = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends Component {
  handelSubmit() {
    const {getFieldValue} = this.props.form;
    let id= getFieldValue('id');
    let name= getFieldValue('name');
    let age= getFieldValue('age');
    let sex= getFieldValue('sex');
    let tel= getFieldValue('tel');
    console.log(id+name+age+sex+tel);

    axios.get('/user/insertById', {
      params: {
        id:id,
        name:name,
        age:age,
        sex:sex,
        tel:tel,
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    const {getFieldDecorator,getFieldValue } = this.props.form;

    return (
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">
              <a rel="noopener noreferrer" href="/#/home">
                学生信息列表
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a rel="noopener noreferrer" href="/#/add">
                添加信息
              </a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <br/>
          <br/>
          <Form onSubmit={this.handelSubmit.bind(this)}>
            <Form.Item>
              {getFieldDecorator('id', {
                rules: [{ required: true, message: '请输入学生编号！' }],
              })(
                <Input name="id" id="id" placeholder={"学生编号"}/>,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入学生姓名' }],
              })(
                <Input name="name" id="name" placeholder={"学生姓名"}/>,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('age', {
                rules: [{ required: true, message: '请输入学生年龄' }],
              })(
                <Input name="age" id="age" placeholder={"学生年龄"}/>,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('sex', {
                rules: [{ required: true, message: '请输入学生性别' }],
              })(
                <Input name="sex" id="sex" placeholder={"学生性别"}/>,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('tel', {
                rules: [{ required: true, message: '请输入学生联系方式' }],
              })(
                <Input name="tel" id="tel" placeholder={"学生联系方式"}/>,
              )}
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )

  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
