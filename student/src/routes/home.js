import React from 'react';
import axios from '../utils/axios'
import {Layout, Menu, Table, Button, message, Icon, Modal} from 'antd';

const {Header, Content, Footer} = Layout;
const confirm = Modal.confirm;


class home extends React.Component {

  //构造函数
  constructor() {
    super();
    this.state = {
      msg: "hello user",
      list: []
    }
  }

  //生命周期函数，组件绑定时执行
  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    // 查询数据，进行数据绑定
    axios.get("/user/findAll")
      .then((result) => {
        console.log(JSON.stringify(result));
        //console.log('查询到的数据为：',result.data);
        //将查询到的数据设置到state中
        this.setState({
          list: result.data
        })
      })
  }


  // 点击删除按钮的处理函数
  handleDelete(id) {
    confirm({
      title: '警告',
      content: '确定要删除？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
        axios.get("/user/deleteById?id=" + id)
          .then((result) => {
            // 提示
            message.success(result.statusText);
            //页面刷新
            window.location.reload();
          });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }


  render() {

    const columns = [
      {
        title: '编号',
        dataIndex: 'id',
      },
      {
        title: "姓名",
        dataIndex: "name"
      }, {
        title: "年龄",
        dataIndex: "age"
      }, {
        title: "性别",
        dataIndex: "sex"
      }, {
        title: "电话",
        dataIndex: "tel"
      },
      {
        title: "操作",
        render: (text, record) => {
          return (
            <div>
              <Icon type="delete" onClick={this.handleDelete.bind(this, record.id)}></Icon>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Icon type="edit"></Icon>
            </div>
          )
        }
      }
    ];


    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };


    return (
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1" >
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
          <div style={{background: '#fff', padding: 24, minHeight: 280}}>
            <div>
              <h2>用户管理</h2>
              <div>
                <Button type="primary" href={"/#/add"}>添加</Button> &nbsp;
                <Button type="danger">批量删除</Button>
              </div>
              <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.list}/>
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )

  }
}

export default home;

