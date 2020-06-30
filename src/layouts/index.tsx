import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import MenuEx from './menu';
import Logo from './logo';
import CustomBread from './breadcrumb';
const imgurl = require('../../public/static/logo.jpg');
const { Header, Content, Footer, Sider } = Layout;

const BaseLayout = props => {
  // console.log(props);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <Logo imgurl={imgurl} logo="logo" />
        <MenuEx />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header
          style={{
            background: '#fff',
            padding: 0,
            position: 'fixed',
            height: 70,
            width: '100%',
            zIndex: 1,
            borderBottom: ' 1px solid rgb(237, 238, 240)',
          }}
        />
        <Content style={{ marginTop: 164, padding: '0 50px' }}>
          <CustomBread route={props.route} />
          <div style={{ background: '#fff', minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
