import React, { useEffect, useMemo, useState, useContext } from 'react';
import { Context } from './store';
const Item1 = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    // dispatch({ type: 'update' });
  }, []);

  console.log(state.names);
  return (
    <>
      {state.names.map(item => {
        return <div key={item}>{item}</div>;
      })}
    </>
  );
};
export default Item1;
