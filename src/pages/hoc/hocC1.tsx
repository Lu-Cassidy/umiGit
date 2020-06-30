import React, { Fragment } from 'react';
import HocF from './hocF';
const Hoc1 = props => {
  const { name,age } = props;
return <Fragment> 这里是hoc1 {name}{age}</Fragment>;
};
export default HocF(Hoc1);
