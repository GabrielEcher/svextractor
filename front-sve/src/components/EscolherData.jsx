import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/pt_BR';
import {enUS} from 'date-fns/locale'
import { DataContext } from '../context/DataContext';
const { RangePicker } = DatePicker;

export const EscolherData = () => {
  const [dateRange, setDateRange] = useState([]);
  const {setStartDate, setEndDate} = useContext(DataContext);

  const handleDateChange = (dates) => {
    setDateRange(dates)
    
    if (dates && dates.length === 2) {
      const formattedStartDate = format(new Date(dates[0]), 'dd-MMM-yy', { locale: enUS });
      const formattedEndDate = format(new Date(dates[1]), 'dd-MMM-yy', { locale: enUS });

      setStartDate(formattedStartDate);
      setEndDate(formattedEndDate);

  }
    
  }

  return (
    <RangePicker
      showWeek
      showNow
      format={'DD/MM/YYYY'}
      locale={locale}
      onChange={handleDateChange} 
    />
  );
};


