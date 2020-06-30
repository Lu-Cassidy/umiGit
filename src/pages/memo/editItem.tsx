import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'antd';
import { history, Link } from 'umi';
import propType from './dataType';

const EditItem = ({ item }: propType) => {
  return (
    <Link to={{ pathname: `/cache/memo/${item.key}/first` }}>
      <Card hoverable style={{ width: 300 }}>
        <p>{item.name}</p>
      </Card>
    </Link>
  );
};
export default EditItem;
