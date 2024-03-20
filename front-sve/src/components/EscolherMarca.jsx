import { useContext, useState } from 'react'
import { api_db } from "../services/api";
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';

// eslint-disable-next-line react/prop-types
export const EscolherMarca = () => {
  const [data, setData] = useState([])
  const [isApiCalled, setIsApiCalled] = useState(false)
  const [loading, setLoading] = useState(false)
  const {selectedMarca, setSelectedMarca} = useContext(DataContext);

  async function fetchMarcaApi() {
    try {
      const response = await api_db.get('/marcas')
      setData(response.data);
      setLoading(false)
      
    } catch (error) {
      console.error(error);
    }
  }

  const handleMarcaChange = (value) => {
    const selectedValue = value !== 'null' ? value : null;
    setSelectedMarca(selectedValue); 
    
  };
  const handleMarcaMenuOpen = () => {
    // verifica se a chamada à API já foi feita
    if (!isApiCalled) {
      fetchMarcaApi();
      setLoading(true)
      setIsApiCalled(true);
    }
  };

  const handleDeselect = (value) => {
    const updatedSelectedMarca = selectedMarca.filter(item => item !== value);

    if (updatedSelectedMarca.length === 0) {
      setSelectedMarca(null);
    } else {
      setSelectedMarca(updatedSelectedMarca);
    }
  };

  const options = [
    ...data.map((marca) => ({
      value: parseInt(marca.marca.match(/\d{1,4}/), 10),
      label: marca.marca
    }))
  ]
  
  return (
    <Select
          virtual
          notFoundContent="0 resultados"
          loading={loading}
          size='middle'
          style={{ width: '25%',  }}
          placeholder='Marca/Código'
          options={options}
          mode='multiple'
          onFocus={handleMarcaMenuOpen}
          onChange={handleMarcaChange}
          onDeselect={handleDeselect}
          filterOption={(input, option) =>
            option.label.toLowerCase().includes(input.toLowerCase()) || 
            option.value.toString().includes(input)
          }
        />
  )
}