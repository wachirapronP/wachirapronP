import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Bisection from './root/Bisection';
import Cramer from './root/cramer';
import FalseP from './root/FalseP';
import OnePoint from './root/OnePoint';
import NewtonRaphson from './root/NewtonRaphson';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    openKeys: [''],
    collapsed: false,
  };
  rootSubmenuKeys = ['subroot', 'subalgebra', 'subinterpolate', 'subregression', 'subintegrate', 'subNDD', 'Ode'];
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  onChangePage = (props) => {
    if (props.key.localeCompare("Bisection") === 0) {
      ReactDOM.render(<Bisection />, document.getElementById("content"));
      
    }
    else if(props.key.localeCompare("FalseP") === 0){
      ReactDOM.render(<FalseP />, document.getElementById("content"));
    }
    else if(props.key.localeCompare("OnePoint") === 0){
      ReactDOM.render(<OnePoint />, document.getElementById("content"));
    }
    else if(props.key.localeCompare("NewtonRaphson") === 0){
      ReactDOM.render(<NewtonRaphson />, document.getElementById("content"));
    }
   
    else if(props.key.localeCompare("Cramer") === 0){
      ReactDOM.render(<Cramer />, document.getElementById("content"));
    }
    
   
  }
 
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  

  render(){
     return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onClick={this.onChangePage}
        >
          <Menu.Item key="1">
          <font size="6">Numerical  </font> 
          <h1  align = 'center' ><font color="#AE8BC3">Numerical</font></h1>
        
          
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
              <span>Root Equation</span>
              </span>
            }
          >
            <Menu.Item key="Bisection">Bisection</Menu.Item>
            <Menu.Item key="FalseP">False Position</Menu.Item>
            <Menu.Item key="OnePoint">One-Point Iteration </Menu.Item>
            <Menu.Item key="NewtonRaphson">Newton-Raphson </Menu.Item>
        
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
              <span>Linear Algebar</span>
              </span>
            }
          >
            <Menu.Item key="Cramer">Cramer's rule</Menu.Item>
           
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
              <span>Interpolation</span>
              </span>
            }
          >
            
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
              <span>Least Square Error</span>
              </span>
            }
          >
           
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
              <span>Intergration</span>
              </span>
            }
          >
          
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
              <span>Secant Method</span>
              </span>
            }
          >
          
          </SubMenu>
          
          <SubMenu
            key="sub7"
            title={
              <span>
              <span>Systems of equations</span>
              </span>
            }
          >
        
          </SubMenu>
          
            
        
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
           
        
    
          </Breadcrumb>
          <div id="content" className="site-layout-background" style={{ padding: 24, minHeight: 500,marginLeft: "30%" }}>
          <font size="6">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;!!! wellcome to Numerical !!! </font> 
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    );
  }
 
}

export default App;
