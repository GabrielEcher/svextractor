import { useContext, useState } from 'react'
import { api_db } from "../services/api";
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';
// eslint-disable-next-line react/prop-types
export const EscolherVend = () => {
  const [data, setData] = useState([])
  const [isApiCalled, setIsApiCalled] = useState(false)
  const {selectedVendedor, setSelectedVendedor} = useContext(DataContext);
  const [loading, setLoading] = useState(false)

  const fetchVendedores = async () => {
    try {
      const response = await api_db.get('/vendedores')
      setData(response.data);
      setLoading(false)

    } catch (error) {
      toast.error('Erro ao buscar dados, faça login novamente, ou recarregue a página')
      setLoading(false)
    }
  };

  const handleVendedorMenuOpen = () => {
    // verifica se a chamada à API já foi feita
    if (!isApiCalled) {
      fetchVendedores();
      setLoading(true)
      setIsApiCalled(true);
    }
  };

  const handleVendChange = (value) => {
    const selectedValue = value !== 'null' ? value : null;
    setSelectedVendedor(selectedValue); // Atribui o valor escolhido à variavel
  };
  
  const handleDeselect = (value) => {
    const updatedSelectedVend = selectedVendedor.filter(item => item !== value);

    if (updatedSelectedVend.length === 0) {
      setSelectedVendedor(null);
    } else {
      setSelectedVendedor(updatedSelectedVend);
    }
  };


  const options = [
    ...data.map((vend) => ({
      value: parseInt(vend.vendedor.match(/\d{1,3}/), 10),
      label: vend.vendedor
    }))
  ];

  return (
    <Select
      notFoundContent="0 resultados"
      loading={loading}
      size='middle'
      style={{ width: '15%',  }}
      placeholder='Vendedor'
      options={options}
      mode='multiple'
      onFocus={handleVendedorMenuOpen}
      onChange={handleVendChange}
      onDeselect={handleDeselect}
      filterOption={(input, option) =>
        option.label.toLowerCase().includes(input.toLowerCase()) || 
        option.value.toString().includes(input)
      }
    />
  )
}

