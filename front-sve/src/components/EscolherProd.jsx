import { useContext, useState } from 'react';
import { api_db } from "../services/api";
import { Select } from 'antd';
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
export const EscolherProd = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { codigoProd, setCodigoProd } = useContext(DataContext);
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isApiCalled, setIsApiCalled] = useState(false)

  const handleProdMenuOpen = () => {
    // verifica se a chamada à API já foi feita
    if (!isApiCalled) {
      fetchTopApi();
      setLoading(true)
      setIsApiCalled(true);
      
    }
  };

  async function fetchTopApi() {
      try {
        setLoading(true);
        const response = await api_db.get('/produtos');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Erro ao buscar dados, faça login novamente, ou recarregue a página')
        setLoading(false)
      }
    }

  const handleSearch = (value) => {
    setSearchValue(value);

    const filtered = data.filter(produtos => produtos.prod.toLowerCase().includes(value.toLowerCase()));
    setFilteredOptions(filtered);
  };

  const handleProdChange = (value) => {
    setCodigoProd(value)
  };

  const handleDeselect = (value) => {
    const updatedSelectedProd = codigoProd.filter(item => item !== value);
    if (updatedSelectedProd.length === 0) {
      setCodigoProd(null);
  } else {
    setCodigoProd(updatedSelectedProd); 
  }};

  const handleDropdownVisibleChange = (open) => {
    if (!open) {
      setFilteredOptions([]);
    }
  };

  return (
    <Select
      virtual
      notFoundContent="0 resultados"
      popupMatchSelectWidth={400}
      loading={loading}
      size='middle'
      style={{ width: '15%' }}
      placeholder='Produto/Código'
      options={filteredOptions.map((produtos) => ({
        value: parseInt(produtos.prod.match(/\d{1,7}/), 10),
        label: produtos.prod
      }))}
      mode='multiple'
      onFocus={handleProdMenuOpen}
      onChange={handleProdChange}
      onDeselect={handleDeselect}
      filterOption={false}
      onSearch={handleSearch}
      onDropdownVisibleChange={handleDropdownVisibleChange}
    />
  )
}
