import { useContext } from 'react'
import { Select } from 'antd'
import { DataContext } from '../context/DataContext';

// eslint-disable-next-line react/prop-types
export const EscolherDivisao = () => {
    const { divisao, setDivisao } = useContext(DataContext)

    const handleStatusChange = (value) => {
        const selectedValue = value !== 'null' ? value : null;
        setDivisao(selectedValue);

    };

    const handleDeselect = (value) => {
        const updatedSelectedStatus = divisao.filter(item => item !== value);

        if (updatedSelectedStatus.length === 0) {
            setDivisao(null);
        } else {
            setDivisao(updatedSelectedStatus);
        }
    };

    const options = [
        { value: '10000000', label: 'DIVISÃO MARKETING' },
        { value: '3000000', label: 'DIVISÃO AGROPECUARIA' },
        { value: '5000000', label: 'DIVISÃO PET' },
        { value: '1000000', label: 'DIVISÃO VETERINARIA' },
        { value: '2000000', label: 'Z DIVISAO AGRICOLA' },
    ]

    return (
        <Select
            notFoundContent="0 resultados"
            size='middle'
            style={{ width: '15%', }}
            placeholder='Divisão'
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