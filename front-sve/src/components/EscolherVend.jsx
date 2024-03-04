import { useState } from 'react'
import { api_db } from "../services/api";
import { SelectPicker } from 'rsuite';

// eslint-disable-next-line react/prop-types
export const EscolherVend = ({ onChange }) => {
  const [data, setData] = useState([])
  const [isApiCalled, setIsApiCalled] = useState(false)
  const [selectedVendedor, setSelectedVendedor] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchVendedores = async () => {
    try {
      const response = await api_db.get('/vendedores')
      setData(response.data);
      setLoading(false)

    } catch (error) {
      console.error(error);
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

  const handleVendChange = (value, item, event) => {
    const selectedValue = value !== 'null' ? value : null;
    setSelectedVendedor(selectedValue); // Atribui o valor escolhido à variavel
    onChange(selectedValue); // Ao mudar, o valor selecionado recebe o valor
  };
  
  const options = [
    { value: 'null', label: 'SEM VENDEDOR' },
    ...data.map((vendedor) => ({
      value: vendedor.codvend,
      label: vendedor.apelido
    }))
  ];

  return (
    <SelectPicker
      listProps={{ style: { width: '430px' } }}
      style={{ width: '200px', }}
      virtualized
      onSelect={handleVendChange}
      size='lg'
      data={options}
      placeholder={'Vendedor:'}
      onOpen={handleVendedorMenuOpen}
      value={selectedVendedor}
      loading={loading}
    />
  )
}

