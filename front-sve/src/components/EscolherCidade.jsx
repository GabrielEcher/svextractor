import { useState } from 'react'
import { api_db } from "../services/api";
import { SelectPicker } from 'rsuite';

export const EscolherCidade  = ( {onChange} ) => {
    const [data, setData] = useState([])
    const [isApiCalled, setIsApiCalled] = useState(false)
    const [selectedCid, setSelectedCid] = useState(null)
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

    const handleCidChange = (value, item, event) => {
        const selectedValue = value !== 'null' ? value : null;
        setSelectedCid(selectedValue); // Atribui o valor escolhido à variavel
        onChange(selectedValue)
    };

    const handleCidMenuOpen = () => {
        // verifica se a chamada à API já foi feita
        if (!isApiCalled) {
          fetchCidadeApi();
          setLoading(true)
          setIsApiCalled(true);
        }
      };

    const options = [
    { value: 'null', label: 'TODAS' },
        ...data.map((cidade) => ({
        value: cidade.codcid,
        label: cidade.nomecid
        }))
    ]
    
      return (
          <SelectPicker
          style={{ width: '200px' }}
          virtualized
          onSelect={handleCidChange}
          size='lg'
          data={options}
          placeholder="Cidade: "
          onOpen={handleCidMenuOpen}
          value={selectedCid}
          loading={loading}
          />
      )
}