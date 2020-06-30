import React, { Component } from 'react';
const HocF = MyComponent => {
  return class HocF extends Component {
    render() {
      return (
        <>
          <MyComponent {...this.props}></MyComponent>
          <div>高阶组件</div>
          <div>------</div>
        </>
      );
    }
  };
};
export default HocF;
