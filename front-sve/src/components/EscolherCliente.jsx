import { useState, useEffect } from 'react'
import { api_db } from "../services/api";
import { SelectPicker } from 'rsuite';

export const EscolherCliente = ({ onChange }) => {
  const [data, setData] = useState([]);
  const [codigoCliente, setCodigoCliente] = useState(null);
  const [isApiCalled, setIsApiCalled] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClienteMenuOpen = () => {
    // verifica se a chamada à API já foi feita
    if (!isApiCalled) {
      fetchClienteApi();
      setLoading(true)
      setIsApiCalled(true);
      
    }
  };

  async function fetchClienteApi() {
    try {
      const response = await api_db.get('/clientes')
      setData(response.data);
      setLoading(false)
      
    } catch (error) {
      console.error(error);
    }

  }

  const handleClienteChange = (value, item, event) => {
    const selectedValue = value !== 'null' ? value : null;
    setCodigoCliente(selectedValue); // Atribui o valor escolhido à variavel
    onChange(selectedValue); // Ao mudar, o valor selecionado recebe o valor
  };

  const options = [
    { value: 'null', label: 'TODOS' },
    ...data.map((cliente) => ({
      value: cliente.codigo,
      label: cliente.razao_social
    }))
  ]

  return (
    <SelectPicker
    listProps={{ style: { width: '550px' } }}
    style={{ width: '16%', }}
    virtualized
    onSelect={handleClienteChange}
    size='lg'
    data={options}
    placeholder={'Cliente:'}
    value={codigoCliente}
    onOpen={handleClienteMenuOpen}
    loading={loading}
  />
  )
}

