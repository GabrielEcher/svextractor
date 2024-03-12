import { useState } from 'react'
import { api_db } from "../services/api";
import { SelectPicker } from 'rsuite';


// eslint-disable-next-line react/prop-types
export const EscolherMarca = ({ onChange }) => {
  const [data, setData] = useState([])
  const [isApiCalled, setIsApiCalled] = useState(false)
  const [loading, setLoading] = useState(false)

  async function fetchMarcaApi() {
    try {
      const response = await api_db.get('/marcas')
      setData(response.data);
      setLoading(false)
      
    } catch (error) {
      console.error(error);
    }

  }
  const [selectedMarca, setSelectedMarca] = useState(null);

  const handleMarcaChange = (value, item, event) => {
    const selectedValue = value !== 'null' ? value : null;
    setSelectedMarca(selectedValue); // Atribui o valor escolhido à variavel
    onChange(selectedValue); // Ao mudar, o valor selecionado recebe o valor
  };
  const handleMarcaMenuOpen = () => {
    // verifica se a chamada à API já foi feita
    if (!isApiCalled) {
      fetchMarcaApi();
      setLoading(true)
      setIsApiCalled(true);
    }
  };

  const options = [
    { value: 'null', label: 'TODAS' },
    ...data.map((marca) => ({
      value: marca.codigo_marca,
      label: marca.nome_marca
    }))
  ]
  return (
    <>
      <SelectPicker
        style={{ width: '16%', }}
        virtualized
        onSelect={handleMarcaChange}
        size='lg'
        data={options}
        placeholder="Marca do produto: "
        onOpen={handleMarcaMenuOpen}
        value={selectedMarca}
        loading={loading}
      />
    </>
  )
}