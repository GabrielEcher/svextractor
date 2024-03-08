import  { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'rsuite/DatePicker';  

// eslint-disable-next-line react/prop-types
const EscolherData = ({ onDatesSelected }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = () => {
    onDatesSelected({
      startDate: startDate ? format(startDate, 'dd-MMM-yy',) : null,
      endDate: endDate ? format(endDate, 'dd-MMM-yy',) : null,
    });
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleStartDateBlur = () => {
    handleDateChange();
  };

  const handleEndDateBlur = () => {
    handleDateChange();
  };

  return (
    <>
      <div>
        <DatePicker
          value={startDate}
          onChange={handleStartDateChange}
          onBlur={handleStartDateBlur}
          startdate={startDate}
          enddate={endDate}
          format='dd/MM/yyyy'
          placeholder='Data inicial:'
          placement="bottomEnd"
          size='lg'
          oneTap
          style={{marginRight: '5px'}}
        />
      </div>
      <div>
        <DatePicker
          value={endDate}
          onChange={handleEndDateChange}
          onBlur={handleEndDateBlur}
          startdate={startDate}
          enddate={endDate}
          format='dd/MM/yyyy'
          placeholder='Data final:'
          shouldDisableDate={(date) => date < startDate}
          placement="bottomEnd"
          size='lg'
          oneTap
          style={{marginRight: '5px'}}
        />

      </div>
    </>
  );
};

export default EscolherData;