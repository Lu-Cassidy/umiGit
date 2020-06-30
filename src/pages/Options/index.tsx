import React, { useState, useEffect, useMemo } from 'react';
import { getOptions } from '@/services';
import { Select, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
const { RangePicker } = DatePicker;
const { Option } = Select;
const moment = require('moment');
const Options = () => {
  const [options, setOptions] = useState([]);
  //开始时间
  let [startTime, setStart] = useState();
  //结束时间
  let [endTime, setEnd] = useState();

  const [datePickerMisc, setDatePickerMisc] = useState({
    startDate: null,
    endDate: null,
  });
  useEffect(() => {
    getOptions().then(res => {
      console.log(res);
      setOptions(res.names);
    });
  }, []);
  const children = useMemo(() => {
    console.log(options);
    return (
      <>
        {options.map(item => {
          return <Option value={item}>{item}</Option>;
        })}
      </>
    );
  }, [options.length]);

  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  //选择开始时间
  const onStartChange = (date, dateString) => {
    //data是moment对象
    console.log(date, dateString);
    setStart(date);
  };
  //选择结束时间
  const onEndChange = (date, dateString) => {
    console.log(date, dateString);
    setEnd(date);
  };
  //禁用开始时间
  const disabledStart = current => {
    if (endTime) {
      return (
        current <
          moment(endTime)
            .subtract(3, 'months')
            .subtract(1, 'days')
            .endOf('day') || current > moment(endTime).endOf('day')
      );
    }
  };
  //禁用结束时间
  const disabledEnd = current => {
    if (startTime) {
      return (
        current >
          moment(startTime)
            .add(3, 'months')
            .endOf('day') ||
        current <
          moment(startTime)
            .subtract(1, 'days')
            .endOf('day')
      );
    }
  };

  const [dates, setDates] = useState([]);
  const disabledDate = current => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'months') > 2;
    const tooEarly = dates[1] && dates[1].diff(current, 'months') > 2;
    return tooEarly || tooLate;
  };

  const onStart = startDate => {
    setDatePickerMisc(Object.assign({}, datePickerMisc, { startDate }));
  };
  const onEnd = endDate => {
    setDatePickerMisc(Object.assign({}, datePickerMisc, { endDate }));
  };
  return (
    <>
      {' '}
      <Select
        tokenSeparators={[',']}
        mode="tags"
        style={{ width: '50%' }}
        placeholder="Please select"
        onChange={handleChange}
      >
        {children}
      </Select>
      <DatePicker
        value={startTime}
        onChange={onStartChange}
        locale={locale}
        placeholder={'开始时间'}
        disabledDate={disabledStart}
        // allowClear={false}
      />
      {<span style={{ margin: '0 10px' }}>---</span>}
      <DatePicker
        value={endTime}
        onChange={onEndChange}
        locale={locale}
        placeholder={'结束时间'}
        disabledDate={disabledEnd}
        // disabled={startTime ? false : true}
      />
      <RangePicker
        disabledDate={disabledDate}
        onCalendarChange={value => {
          setDates(value);
        }}
      />
      <DatePicker
        locale={locale}
        style={{ marginRight: '1em', width: '10em' }}
        format="YYYY-MM-DD"
        value={datePickerMisc.startDate}
        onChange={onStart}
      />
      <DatePicker
        locale={locale}
        style={{ width: '10em' }}
        format="YYYY-MM-DD"
        value={datePickerMisc.endDate}
        onChange={onEnd}
      />
    </>
  );
};
export default Options;
