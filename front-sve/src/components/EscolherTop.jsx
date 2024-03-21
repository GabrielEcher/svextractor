import { useContext, useState } from 'react'
import { api_db } from "../services/api";
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';

// eslint-disable-next-line react/prop-types
export const EscolherTop = () => {
  const [data, setData] = useState([])
  const [isApiCalled, setIsApiCalled] = useState(false)
  const [loading, setLoading] = useState(false)
  const { selectedTop, setSelectedTop } = useContext(DataContext);

  async function fetchTopApi() {
    try {
      const response = await api_db.get('/tops')
      setData(response.data);
      setLoading(false)

    } catch (error) {
      console.error(error);
    }

  }

  const handleTopChange = (value) => {
    const selectedValue = value !== 'null' ? value : null;
    setSelectedTop(selectedValue);
  };

  const handleTopMenuOpen = () => {
    if (!isApiCalled) {
      fetchTopApi();
      setLoading(true)
      setIsApiCalled(true);
    }
  };

  const handleDeselect = (value) => {
    const updatedSelectedTop = selectedTop.filter(item => item !== value);

    if (updatedSelectedTop.length === 0) {
      setSelectedTop(null);
    } else {
      setSelectedTop(updatedSelectedTop);
    }
  };

  const options = [
    ...data.map((top) => ({
      value: parseInt(top.operacao.match(/\d{4}/), 10),
      label: top.operacao
    }))
  ]

  return (
    <Select
      notFoundContent="0 resultados"
      popupMatchSelectWidth={400}
      loading={loading}
      size='middle'
      style={{ width: '20%', }}
      placeholder='Operação'
      options={options}
      mode='multiple'
      onFocus={handleTopMenuOpen}
      onChange={handleTopChange}
      onDeselect={handleDeselect}
      filterOption={(input, option) =>
        option.label.toLowerCase().includes(input.toLowerCase()) ||
        option.value.toString().includes(input)
      }
    />
  )
}

// <SelectPicker
//   listProps={{ style: { width: '480px' } }}
//   style={{ width: '25%', }}
//   virtualized
//   onSelect={handleTopChange}
//   size='lg'
//   data={options}
//   placeholder={'Tipo de operação:'}
//   onOpen={handleTopMenuOpen}
//   value={selectedTop}
//   searchable
//   loading={loading}
// />