import { useContext, useState } from 'react'
import { api_db } from "../services/api";
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';
// eslint-disable-next-line react/prop-types
export const EscolherTele = () => {
    const [data, setData] = useState([])
    const [isApiCalled, setIsApiCalled] = useState(false)
    const {selectedTelevendas, setSelectedTelevendas} = useContext(DataContext);
    const [loading, setLoading] = useState(false)
    const fetchVendedores = async () => {
      try {
        const response = await api_db.get(`/televendas/${localStorage.getItem('access_id')}`,)
        setData(response.data);
        setLoading(false)
        
      } catch (error) {
        toast.error('Erro ao buscar dados, faça login novamente, ou recarregue a página')
        setLoading(false)
      }
    };
  
    const handleTelevendasMenuOpen = () => {
      // verifica se a chamada à API já foi feita
      if (!isApiCalled) {
        fetchVendedores();
        setLoading(true)
        setIsApiCalled(true);
      }
    };
      
    const handleTelevendasChange = (value) => {
      const selectedValue = value !== 'null' ? value : null;
      setSelectedTelevendas(selectedValue); // Atribui o valor escolhido à variavel 
    };

    const handleDeselect = (value) => {
      const updatedSelectedVend = selectedTelevendas.filter(item => item !== value);
  
      if (updatedSelectedVend.length === 0) {
        setSelectedTelevendas(localStorage.getItem('access_id'));
      } else {
        setSelectedTelevendas(updatedSelectedVend);
      }
    };

    const options = [
      ...data.map((televendas) => ({
        value: parseInt(televendas.televendas.match(/\d{1,3}/), 10),
        label: televendas.televendas
      }))
    ]

      return (
        <Select
        
          notFoundContent="0 resultados"
          loading={loading}
          size='middle'
          style={{ width: '15%',  }}
          placeholder='Televendas'
          options={options}
          mode='multiple'
          onFocus={handleTelevendasMenuOpen}
          onChange={handleTelevendasChange}
          onDeselect={handleDeselect}
          filterOption={(input, option) =>
            option.label.toLowerCase().includes(input.toLowerCase()) || 
            option.value.toString().includes(input)
          }
        />
      )
    } 




