import { useState } from 'react'
import { SelectPicker } from 'rsuite';

// eslint-disable-next-line react/prop-types
export const EscolherStatus = ({ onChange, onClean }) => {
    const [selectedStatus, setSelectedStatus] = useState(null)

    const handleStatusChange = (value, item, event) => {
        const selectedValue = value !== 'null' ? value : null;
        setSelectedStatus(selectedValue); // Atribui o valor escolhido à variavel
        onChange(selectedValue); // Ao mudar, o valor selecionado recebe o valor
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
        <>
            <SelectPicker
                listProps={{ style: { width: '480px', height: '250px' } }}
                style={{ width: '23%', }}
                virtualized
                onSelect={handleStatusChange}
                size='lg'
                data={options}
                placeholder={'Status do pedido:'}
                value={selectedStatus}
                searchable={false}
            />
        </>
    )
}