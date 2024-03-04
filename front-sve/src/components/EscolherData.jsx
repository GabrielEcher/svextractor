import  { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'rsuite/DatePicker';
import { ptBR } from 'date-fns/locale';  
import { FaCalendar } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const EscolherData = ({ onDatesSelected }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = () => {
    onDatesSelected({
      startDate: startDate ? format(startDate, 'dd-MM-yyyy', { locale: ptBR }) : null,
      endDate: endDate ? format(endDate, 'dd-MM-yyyy', { locale: ptBR }) : null,
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
          locale={ptBR}
          placement="bottomEnd"
          size='lg'
          oneTap
          caretAs={FaCalendar}
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
          locale={ptBR}
          shouldDisableDate={(date) => date < startDate}
          placement="bottomEnd"
          size='lg'
          oneTap
          caretAs={FaCalendar}
          style={{marginRight: '5px'}}
        />

      </div>
    </>
  );
};

export default EscolherData;