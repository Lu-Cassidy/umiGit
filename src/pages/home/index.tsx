import React, { useEffect,FC } from 'react';
import styles from './index.less';
import { Link, connect,ConnectProps,HomeState } from 'umi';
interface ownProps extends ConnectProps{
  home:HomeState
}
const Home:FC<ownProps> = props => {
  const {
    dispatch,
    home: { lists },
  } = props;
  useEffect(() => {});
  return (
    <div>
      {lists.map(item => {
        return (
          <div key={item.name} style={{ fontSize: 30 }}>
            <span>{item.name}</span>
            <span>---</span>
            <span>{item.value}</span>
          </div>
        );
      })}
      <Link to="/" style={{ fontSize: 32 }}>
        跳转
      </Link>
    </div>
  );
};
export default connect(({ home }:{home:HomeState}) => ({ home }))(Home);
