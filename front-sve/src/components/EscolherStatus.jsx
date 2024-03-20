import { useContext } from 'react'
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';

// eslint-disable-next-line react/prop-types
export const EscolherStatus = () => {
    const {selectedStatus, setSelectedStatus} = useContext(DataContext)

    const handleStatusChange = (value) => {
        const selectedValue = value !== 'null' ? value : null;
        setSelectedStatus(selectedValue); 
         
    };

    const handleDeselect = (value) => {
        const updatedSelectedStatus = selectedStatus.filter(item => item !== value);

        if (updatedSelectedStatus.length === 0) {
            setSelectedStatus(null);
        } else {
            setSelectedStatus(updatedSelectedStatus);
        }
    };

    const options = [
        { value: 'null', label: 'TODOS' },
        { value: '15', label: 'CONFIRMADO' },
        { value: '16', label: 'EM LIBERAÇÃO FINANCEIRA/COMERCIAL' },
        { value: '3', label: 'AGUARDANDO LIBERAÇÃO LOGÍSTICA' },
        { value: '5', label: 'FATURADO' },
        { value: '4', label: 'AGUARDANDO FATURAMENTO' },
        { value: '17', label: 'REPROVADO' },
    ]

    return (
        <Select
            notFoundContent="0 resultados"
            size='middle'
            style={{ width: '25%' }}
            placeholder='Selecione o status do pedido:'
            options={options}
            mode='multiple'
            onChange={handleStatusChange}
            onDeselect={handleDeselect}
            filterOption={(input, option) =>
                option.label.toLowerCase().includes(input.toLowerCase()) ||
                option.value.toString().includes(input)
            }
        />
    )
}