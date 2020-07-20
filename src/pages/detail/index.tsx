import React, { useEffect, useState, FC } from 'react';
import { Button, Input, Table } from 'antd';
import { connect, Link, history, HomeState, ConnectProps } from 'umi';
import { exportExcel } from '@/services/index';
import ExportJsonExcel from 'js-export-excel';
interface own extends ConnectProps {
  home: HomeState;
}
const Detail: FC<own> = props => {
  const {
    dispatch,
    home: { lists, length, pathname, inputValue },
  } = props;
  useEffect(() => {
    dispatch({ type: 'home/query' });
    console.log(inputValue);
  }, []);
  const [value, setValue] = useState(inputValue);
  const search = () => {
    history.push('/detail');
    console.log(value);
    dispatch({ type: 'home/save', payload: { inputValue: value } });
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
  ];
  const pagechange = (page, pageSize) => {
    console.log(page, pageSize);
  };
  const exportData = () => {
    const datas = lists ? lists : ''; //表格数据
    var option = {};
    let dataTable = []; //新建数组放数据
    // console.log(datas);
    if (datas) {
      for (const data of datas) {
        // console.log(data);
        if (data) {
          let obj = {
            id: data.age,
            name: data.name,
          };
          dataTable.push(obj);
        }
      }
    }
    console.log(dataTable);
    option.fileName = 'sheet'; //文件名
    option.datas = [
      {
        sheetData: dataTable, //数据
        sheetName: 'sheet', //sheet名字
        // sheetFilter: [dataTable.id, dataTable.name],//列过滤
        // sheetFilter 列过滤(只有在 data 为 object 下起作用)(可有可无)
        sheetHeader: ['年龄', '姓名'], //// 第一行
      },
    ];

    var toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel(); //保存
  };
  return (
    <>
      <Button href="/api/exportExcel?id=2">导出数据</Button>
      <Button onClick={exportData}>导出数据纯前端</Button>
      <Table
        dataSource={lists}
        columns={columns}
        size="middle"
        pagination={{
          pageSize: 10,
          // defaultPageSize: 50,
          position: ['bottomCenter'],
          showSizeChanger: false,
          onChange: pagechange,
        }}
      />
      ;
      <Input
        style={{ width: 175 }}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      ></Input>
      <Button onClick={search}>搜索</Button>
      <Link to="/detail" style={{ fontSize: 32 }}>
        跳转
      </Link>
      {length}
      {pathname}
      {lists.map(item => {
        return (
          <div key={item.name} style={{ fontSize: 30 }}>
            <span>{item.name}</span>
            <span>---</span>
            <span>{item.value}</span>
          </div>
        );
      })}
    </>
  );
};
export default connect(({ home }: { home: HomeState }) => ({ home }))(Detail);
