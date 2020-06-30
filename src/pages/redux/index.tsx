import React, { useEffect, useMemo, useState, useReducer } from 'react';
import Item1 from './item1';
import Item2 from './item2';
import { Context, reducer } from './store';
import { getNames } from '@/services/index';
const ReduxEx = () => {
  const [state, dispatch] = useReducer(reducer, { names: ['小红', '小军'] });
  const [names, setNames] = useState([]);
  const getData = async () => {
    const res = await getNames();
    // console.log(res.title);
    dispatch({ type: 'update', payload: res.title });
  };
  useEffect(() => {
    getData();
  }, []);
  const click = () => {};
  return (
    <Context.Provider value={{ state, dispatch }}>
      <button onClick={click}>点击修改状态</button>
      <Item1 />
      <br />
      <Item2 />
    </Context.Provider>
  );
};
export default ReduxEx;
