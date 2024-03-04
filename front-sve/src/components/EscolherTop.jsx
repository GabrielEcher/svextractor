/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { api_db } from "../services/api";
import { SelectPicker } from 'rsuite';

// eslint-disable-next-line react/prop-types
export const EscolherTop = ({ onChange }) => {
  const [data, setData] = useState([])
  const [isApiCalled, setIsApiCalled] = useState(false)
  const [loading, setLoading] = useState(false)

  async function fetchTopApi() {
    try {
      const response = await api_db.get('/tops')
      setData(response.data);
      setLoading(false)

    } catch (error) {
      console.error(error);
    }

  }
  const [selectedTop, setSelectedTop] = useState(null);

  const handleTopChange = (value, item, event) => {
    const selectedValue = value !== 'null' ? value : null;
    setSelectedTop(selectedValue); // Atribui o valor escolhido à variavel
    onChange(selectedValue); // Ao mudar, o valor selecionado recebe o valor
  };

  const handleTopMenuOpen = () => {
    if (!isApiCalled) {
      fetchTopApi();
      setLoading(true)
      setIsApiCalled(true);
    }
  };


  const options = [
    { value: 'null', label: 'TODAS' },
    ...data.map((top) => ({
      value: top.codtipoper,
      label: [top.codtipoper, ' - ', top.descricao]
    }))
  ]
  return (
    <>
      <SelectPicker
        listProps={{ style: { width: '440px' } }}
        style={{ width: '200px', }}
        virtualized
        onSelect={handleTopChange}
        size='lg'
        data={options}
        placeholder={'Tipo de operação:'}
        onOpen={handleTopMenuOpen}
        value={selectedTop}
        searchable={false}
        loading={loading}
      />
    </>

  )
}