import React, { useState, useEffect } from 'react';
import PageSelf from './selfPage';
import { getPage } from '@/services/index';
const Map = () => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    getPage().then(res => {
      setDataSource(res.lists);
    });
  }, []);
  //   const dataSource = [
  //     { name: 'xx', age: 12, key: 1, sex: '男', address: 'xxx' },
  //     { name: 'x1x', age: 13, key: 2, sex: '男', address: 'xxx' },
  //     { name: 'x2x', age: 11, key: 3, sex: '女', address: 'uuu' },
  //     { name: 'x3x', age: 14, key: 4, sex: '男', address: 'xxx' },
  //     { name: 'x4x', age: 18, key: 5, sex: '男', address: 'xxx' },
  //     { name: 'x5x', age: 15, key: 6, sex: '女', address: 'xxx' },
  //     { name: 'x6x', age: 17, key: 7, sex: '男', address: 'xxx' },
  //     { name: 'x7x', age: 10, key: 8, sex: '男', address: 'xxx' },
  //     { name: 'x8x', age: 16, key: 9, sex: '男', address: 'xxx' },
  //     { name: 'x9x', age: 19, key: 10, sex: '男', address: 'xxx' },
  //     { name: 'xx0', age: 8, key: 11, sex: '女', address: 'xxx' },
  //     { name: 'x10', age: 21, key: 12, sex: '男', address: 'xxx' },
  //     { name: 'x11', age: 9, key: 13, sex: '女', address: 'xxx' },
  //     { name: 'x13', age: 22, key: 14, sex: '男', address: 'xxx' },
  //   ];
  const listName = [
    { realName: 'name', nickName: '姓名' },
    { realName: 'age', nickName: '年龄' },
    { realName: 'sex', nickName: '性别' },
    { realName: 'address', nickName: '地址' },
  ];
  //   console.log(dataSource);
  return (
    <>
      {dataSource.length > 0 ? (
        <PageSelf dataSource={dataSource} listName={listName}></PageSelf>
      ) : null}
    </>
  );
};
export default Map;
