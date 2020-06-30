import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
const { SubMenu } = Menu;
export const menuMap = [
  {
    to: '/home',
    title: 'detail',
    children: [],
  },

  {
    key: '/cache',
    title: '缓存',
    children: [
      { to: '/cache/memo', title: 'memo' },
      {
        to: '/cache/redux',
        title: '状态管理',
      },
    ],
  },

  {
    to: '/hocex',
    title: '高阶组件',
    children: [],
  },
  {
    to: '/uploadex',
    title: '上传',
    children: [],
  },
  {
    to: '/map',
    title: '地图',
    children: [],
  },
  {
    to: '/options',
    title: '下拉分页',
    children: [],
  },
];
const MenuEx = props => {
  console.log(history.location.pathname);
  const jump = ({ item, key }: { item: any; key: string }) => {
    history.push(key);
  };
  return (
    <>
      <Menu
        theme="dark"
        defaultSelectedKeys={[history.location.pathname]}
        mode="inline"
        onClick={jump}
      >
        {menuMap.map(item => {
          if (item.children.length > 0) {
            return (
              <SubMenu key={item.key} title={item.title}>
                {item.children.map(item => {
                  return <Menu.Item key={item.to}>{item.title}</Menu.Item>;
                })}
              </SubMenu>
            );
          }
          return <Menu.Item key={item.to}>{item.title}</Menu.Item>;
        })}
      </Menu>
    </>
  );
};
export default MenuEx;
