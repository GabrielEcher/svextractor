import { useContext, useState } from 'react'
import { api_db } from "../services/api";
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';

export const EscolherCidade = () => {
  const [data, setData] = useState([])
  const [isApiCalled, setIsApiCalled] = useState(false)
  const {selectedCid, setSelectedCid} = useContext(DataContext)
  const [loading, setLoading] = useState(false)

  async function fetchCidadeApi() {
    try {
      const response = await api_db.get('/cidades')
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCidChange = (value) => {
    const selectedValue = value !== 'null' ? value : null;
    setSelectedCid(selectedValue); // Atribui o valor escolhido à variavel
  };

  const handleCidMenuOpen = () => {
    // verifica se a chamada à API já foi feita
    if (!isApiCalled) {
      fetchCidadeApi();
      setLoading(true)
      setIsApiCalled(true);
    }
  };

  const handleDeselect = (value) => {
    const updatedSelectedCid = selectedCid.filter(item => item !== value);

    if (updatedSelectedCid.length === 0) {
      setSelectedCid(null);
      
    } else {
      setSelectedCid(updatedSelectedCid);
    }
  };

  const options = [
    ...data.map((cidade) => ({
      value: parseInt(cidade.nomecid.match(/\d{1,6}/), 10),
      label: cidade.nomecid,
      searchableLabel: `${cidade.nomecid} (${parseInt(cidade.nomecid.match(/\d{1,6}/), 10)})`
    }))
  ]

  return (
    <Select
      notFoundContent="0 resultados"
      virtual
      loading={loading}
      size='middle'
      style={{ width: '25%', }}
      placeholder='Selecione a cidade:'
      options={options}
      mode='multiple'
      onFocus={handleCidMenuOpen}
      onChange={handleCidChange}
      onDeselect={handleDeselect}
      filterOption={(input, option) =>
        option.label.toLowerCase().includes(input.toLowerCase()) ||
        option.value.toString().includes(input)
      }
    />
  )
}