import React from 'react'
import { Row, Col, Icon, Menu, Dropdown } from 'antd'
import './index.less'
import { Link } from 'react-router'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

var Img = require('react-image-holder');

export default class Header extends React.Component {
  constructor () {
    super()
  }

  handleClick () {

  }

  render () {



    const {user} = this.props
    return (
      <div className='ant-layout-header'>
        <Img src="http://animalia-life.com/data_images/cat/cat5.jpg"
             width="802"
             height="20"
             />

        <Menu className="header-menu" onClick={this.handleClick}
        mode="horizontal">
          <SubMenu title={<span><Icon type="user" />{user.user}</span>}>
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="setting:3">注销</Menu.Item>
          </SubMenu>
          <Menu.Item key="mail">
            <Icon type="question" />帮助
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
