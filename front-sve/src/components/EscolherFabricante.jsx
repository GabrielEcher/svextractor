import { useContext, useState } from 'react'
import { api_db } from "../services/api";
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';


export const EscolherFab = () => {
    const [data, setData]  = useState([]);
    const {fabricante, setFabricante} = useContext(DataContext);
    const [isApiCalled, setIsApiCalled] = useState(false);
    const [loading, setLoading] = useState(false);

    async function fetchFabricanteApi() {
        try {
          const response = await api_db.get('/fabricante')
          setData(response.data);
          setLoading(false)
          
        } catch (error) {
          console.error(error);
        }
    
      }
    
    const handleClienteMenuOpen = () => {
    if (!isApiCalled) {
        fetchFabricanteApi();
        setLoading(true)
        setIsApiCalled(true);
        }
      };

      const handleFabricanteChange = (value) => {
        const selectedValue = value !== 'null' ? value : null;
        setFabricante(selectedValue);
      };
    
    
      const handleDeselect = (value) => {
        const updatedSelectedFab = fabricante.filter(item => item !== value);
    
        if (updatedSelectedFab.length === 0) {
          setFabricante(null);
        } else {
          setFabricante(updatedSelectedFab);
        }
      };
    
      const options = [
        ...data.map((fabricantes) => ({
          value: parseInt(fabricantes.fabricante.match(/\d{1,5}/), 10),
          label: fabricantes.fabricante
        }))
      ]

    return(
        <Select
      notFoundContent="0 resultados"
      popupMatchSelectWidth={450}
      virtual
      loading={loading}
      size='middle'
      style={{ width: '25%', }}
      placeholder='Fabricante/Código'
      options={options}
      mode='multiple'
      onFocus={handleClienteMenuOpen}
      onChange={handleFabricanteChange}
      onDeselect={handleDeselect}
      filterOption={(input, option) =>
        option.label.toLowerCase().includes(input.toLowerCase()) || 
        option.value.toString().includes(input)
      }
    />
    )
}