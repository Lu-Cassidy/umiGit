import React, { useState } from 'react';

const PageSelf = ({ dataSource, listName }) => {
  // console.log(dataSource);
  const [optionValue, setOption] = useState(3);
  const pageLength = Math.ceil(dataSource.length) / optionValue;

  const [checked, setChecked] = useState('0');
  const cloneData = dataSource.slice(0);

  const sortDate = cloneData.sort((a, b) => {
    return a.age - b.age;
  });
  const [data, setData] = useState(dataSource);
  const [sliceData, setSlice] = useState(
    dataSource.slice(1 * optionValue - optionValue, optionValue * 1),
  );

  const nameArr = [];
  for (let key in dataSource[0]) {
    for (let value of listName) {
      if (key == value.realName) {
        nameArr.push(value.nickName);
      }
    }
  }
  //列表项
  const ListItem = props => {
    const { item } = props;
    return (
      <div
        style={{
          borderBottom: '1px solid',
          width: 200,
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {listName.map(value => {
          return <span>{item[value.realName]}</span>;
        })}
      </div>
    );
  };
  //列表
  const List = () => {
    // console.log(dataSource, sliceData);

    return (
      <div>
        <div
          style={{
            borderBottom: '1px solid',
            width: 200,
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {nameArr.map(item => {
            return <span>{item}</span>;
          })}
        </div>
        {sliceData.map(item => {
          return <ListItem item={item} key={item.key}></ListItem>;
        })}
      </div>
    );
  };
  //分页器
  const [index, setIndex] = useState(0);
  const Page = ({ data }) => {
    const PageItem = props => {
      const { item } = props;
      const jumpPage = e => {
        let pageDetail = e.currentTarget.innerHTML;

        const sliceArry = data.slice(
          pageDetail * optionValue - optionValue,
          optionValue * pageDetail,
        );
        setIndex(pageDetail - 1);
        // console.log(sliceArry);
        setSlice(sliceArry);
      };
      return (
        <span
          style={{
            marginRight: 5,
            display: 'block',
            width: 20,
            height: 20,
            outline: '1px solid',
            cursor: 'pointer',
            textAlign: 'center',
            color: item == index ? 'rgb(45, 212, 22)' : '#000',
          }}
          onClick={jumpPage}
        >
          {item + 1}
        </span>
      );
    };
    const count = [];

    for (let i = 0; i < pageLength; i++) {
      count.push(i);
    }
    return (
      <div style={{ display: 'flex' }}>
        {count.map(item => {
          return <PageItem key={item} item={item} />;
        })}
      </div>
    );
  };
  const checkBox = e => {
    if (e.currentTarget.checked == true) {
      setChecked('1');
      setData(sortDate);
      setSlice(sortDate.slice(1 * optionValue - optionValue, optionValue * 1));
      setIndex(0);
    } else {
      setChecked('0');
      setData(dataSource);
      setSlice(
        dataSource.slice(1 * optionValue - optionValue, optionValue * 1),
      );
      setIndex(0);
      '';
    }
  };
  const changeOption = e => {
    // console.log(e.currentTarget.options[e.target.selectedIndex].value);
    const value = e.currentTarget.options[e.target.selectedIndex].value;
    setOption(e.currentTarget.options[e.target.selectedIndex].value);
    if (checked === '1') {
      setSlice(sortDate.slice(1 * value - value, value * 1));
      setIndex(0);
    } else {
      setSlice(dataSource.slice(1 * value - value, value * 1));
      setIndex(0);
    }
  };
  return (
    <>
      <table></table>
      <div
        style={{
          width: 200,
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <span
          style={{
            width: 60,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <label htmlFor="order">升序</label>
          <input
            type="checkbox"
            name=""
            id="order"
            value={checked}
            onClick={checkBox}
          />
        </span>
        <div style={{ marginRight: 10 }}></div>
        <select
          name=""
          id=""
          value={optionValue}
          defaultValue={'3'}
          onChange={changeOption}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        条/页
      </div>

      <List></List>
      <div style={{ marginBottom: 10 }}></div>
      <Page data={data} />
    </>
  );
};
export default PageSelf;
