import React from 'react';
import HocF from './hocF';
const HocC = (props) => {
  const {name}=props;
  return (
    <>
      <div>hocC {name}</div>
    </>
  );
};
export default HocF(HocC);
