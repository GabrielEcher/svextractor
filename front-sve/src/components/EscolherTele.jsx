import { useState } from 'react'
import { api_db } from "../services/api";
import { SelectPicker } from 'rsuite';


// eslint-disable-next-line react/prop-types
export const EscolherTele = ({onChange}) => {
    const [data, setData] = useState([])
    const [isApiCalled, setIsApiCalled] = useState(false)
    const codvend = localStorage.getItem('User.ID')
    const [selectedTelevendas, setSelectedTelevendas] = useState(codvend);
    const [loading, setLoading] = useState(false)
    
    const fetchVendedores = async () => {
      try {
        const response = await api_db.get(`/televendas/${codvend}`)
        setData(response.data);
        setLoading(false)
        
      } catch (error) {
        console.error(error);
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
      
    const handleTelevendasChange = (value, item, event) => {
      const selectedValue = value !== 'null' ? value : null;
      setSelectedTelevendas(selectedValue); // Atribui o valor escolhido à variavel
      onChange(selectedValue); // Ao mudar, o valor selecionado recebe o valor
    };
 
    const options_all = [
      {value: 'null', label: 'TODOS'},
      ...data.map((televendas) => ({
        value: televendas.codvend,
        label: televendas.apelido
      }))
    ];

    const options_one = [
      ...data.map((televendas) => ({
        value: televendas.codvend,
        label: televendas.apelido
      }))
    ]

    if (codvend === '0') {
      return (
        <SelectPicker
        listProps={{ style: { width: '430px' } }}
        style={{ width: '200px', }}
        virtualized
        onSelect={handleTelevendasChange}
        size='lg'
        data={options_all}
        placeholder={'Televendas:'}
        onOpen={handleTelevendasMenuOpen}
        value={selectedTelevendas}
        loading={loading}
        />
      )
    } else {
      return (
        <SelectPicker
        listProps={{ style: { width: '430px' } }}
        style={{ width: '200px', }}
        virtualized
        onSelect={handleTelevendasChange}
        size='lg'
        data={options_one}
        placeholder={'Televendas:'}
        onOpen={handleTelevendasMenuOpen}
        value={selectedTelevendas}
        loading={loading}
        />
      )
    }
    
}



