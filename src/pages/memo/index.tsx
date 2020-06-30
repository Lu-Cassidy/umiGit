import React, { useEffect, useMemo, useState } from 'react';
import { getNames } from '@/services/index';
import EditItem from './editItem';
const Memo = () => {
  const [names, setNames] = useState([]);
  const getData = async () => {
    const res = await getNames();

    setNames(res.title);
    // console.log(names, res.title);
  };
  useEffect(() => {
    getData();
  }, []);
  const child = useMemo(
    () => (
      <div>
        {names.map(item => {
          return <EditItem key={item.key} item={item} />;
        })}
      </div>
    ),
    [names.length],
  );
  return <>{child}</>;
};
export default Memo;
