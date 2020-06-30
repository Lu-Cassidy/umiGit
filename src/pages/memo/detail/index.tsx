import React, { useEffect, useMemo, useState } from 'react';
import { Tabs, Menu } from 'antd';
import TabItem from './tabItem';
import TabItem1 from './tabItem1';
import TabItem2 from './tabItem2';
import { history } from 'umi';
const { TabPane } = Tabs;
const Detail = ({
  history,
  children,
  match: {
    //@ts-ignore
    params: { id },
  },
  route: { routes },
  location: { pathname },
}) => {
  const callback = ({ key }: { key: string }) => {
    history.push(key);
    // console.log(key);
  };
  // console.log(routes, pathname);
  return (
    <>
      <div>{/* {item.name}---{item.key} */}</div>
      <div>
        <Menu
          onClick={callback}
          // defaultSelectedKeys={[pathname + '/first']}
          selectedKeys={[pathname]}
          mode="horizontal"
        >
          {routes.map(({ name, path }: any) => {
            if (name)
              return (
                <Menu.Item key={path.replace(':id', id)}>{name}</Menu.Item>
              );
          })}
        </Menu>
        {children}
      </div>
    </>
  );
};
export default Detail;
