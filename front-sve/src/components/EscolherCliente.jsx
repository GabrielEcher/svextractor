import { useContext, useState } from 'react'
import { api_db } from "../services/api";
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';

export const EscolherCliente = () => {
  const [data, setData] = useState([]);
  const { codigoCliente, setCodigoCliente } = useContext(DataContext);
  const [isApiCalled, setIsApiCalled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleClienteMenuOpen = () => {
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

  const handleClienteChange = (value) => {
    const selectedValue = value !== 'null' ? value : null;
    setCodigoCliente(selectedValue);
  };

  const handleSearch = (value) => {
    setSearchValue(value);

    const filtered = data.filter(clientes => clientes.cliente.toLowerCase().includes(value.toLowerCase()));
    setFilteredOptions(filtered);
  };

  const handleDeselect = (value) => {
    const updatedSelectedProd = codigoCliente.filter(item => item !== value);

    if (updatedSelectedProd.length === 0) {
      setCodigoCliente(null);
    } else {
      setCodigoCliente(updatedSelectedProd);
    }
  };

  const handleDropdownVisibleChange = (open) => {
    if (!open) {
      setFilteredOptions([]);
    }
  };

  return (
    <Select
      notFoundContent="0 resultados"
      popupMatchSelectWidth={450}
      virtual
      loading={loading}
      size='middle'
      style={{ width: '25%', }}
      placeholder='Cliente/Código'
      options={filteredOptions.map((clientes) => ({
        value: parseInt(clientes.cliente.replace(/\D/g, ''), 10),
        label: clientes.cliente
      }))}
      mode='multiple'
      onFocus={handleClienteMenuOpen}
      onChange={handleClienteChange}
      onDeselect={handleDeselect}
      filterOption={(input, option) =>
        option.label.toLowerCase().includes(input.toLowerCase()) || 
        option.value.toString().includes(input)
      }
      onDropdownVisibleChange={handleDropdownVisibleChange}
      onSearch={handleSearch}
    />
  )
}

