import React from 'react';
import HocC from './hocC';
import HocC1 from './hocC1';
const HocEx = () => {
  return (
    <>
      <HocC name="小红" />
      <HocC1 name='小明' age='12'></HocC1>
    </>
  );
};
export default HocEx;
