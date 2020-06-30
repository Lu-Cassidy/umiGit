import React from 'react';
const Logo = ({ imgurl,logo }: { imgurl: string,logo:string }) => {
  return (
    <div>
      <div style={{ height: 50 }}></div>
      <img
        style={{
          display: 'block',
          width: 120,
          height: 120,
          borderRadius: '50%',

          margin: ' auto',
          marginTop: '30',
        }}
        src={imgurl}
        alt=""
      />{' '}
      <div
        style={{ height: 30, margin: 10, color: '#fff', textAlign: 'center' }}
      >
        {logo}
      </div>
    </div>
  );
};
export default Logo;
