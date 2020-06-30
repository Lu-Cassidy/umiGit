import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
import { history } from 'umi';
const CustomBread = ({ route }) => {
  const { pathname } = history.location;
  const { routes } = route;
  console.log(pathname, routes);
  const BreadItemex = name => {
    return <Breadcrumb.Item key={pathname}>{name}</Breadcrumb.Item>;
  };
  let arr = [];
  const getName = routes => {
    let name;

    for (let item of routes) {
      if (item.routes) {
        name = getName(item.routes);
      } else {
        if (item.path.startsWith(pathname.slice(0, item.path.indexOf(':')))) {
          if (item.path == pathname) {
            name = item.name;

            return item.name;
          }
          if (
            item.path.slice(item.path.lastIndexOf('/')) ==
            pathname.slice(pathname.lastIndexOf('/'))
          ) {
            // BreadItem.push(item.name);

            arr = [];
            arr.push(BreadItemex(item.name));
          }
        }
      }
    }
    return name;
  };

  const BreadItem = [
    <Breadcrumb.Item key={pathname}>{getName(routes)}</Breadcrumb.Item>,
  ].concat(arr);
  console.log(BreadItem);
  return (
    <Breadcrumb style={{ padding: 40, border: '1px solid' }}>
      {/* <Breadcrumb.Item>{getName(routes)}</Breadcrumb.Item> */}
      {BreadItem}
    </Breadcrumb>
  );
};
export default CustomBread;
