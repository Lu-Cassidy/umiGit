import React, { useEffect, useMemo, useState, useContext } from 'react';
import { Context } from './store';
const Item2 = () => {
  const { state, dispatch } = useContext(Context);
  // console.log(state.names);
  return <>2</>;
};
export default Item2;
