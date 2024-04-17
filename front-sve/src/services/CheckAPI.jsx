import { DisconnectOutlined, ApiOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from 'react';
import { api_db } from '../services/api';
import { Button, Tooltip } from 'antd';
import { DataContext } from '../context/DataContext';

export const StatusButton = () => {
    const { apiChecked, setApiChecked } = useContext(DataContext);
    const [apiStatus, setApiStatus] = useState(null);  

    const checkApi = async () => {
        try {
            const response = await api_db.get("/status");
            setApiStatus(response.status);
        } catch (err) {
            setApiStatus(500); // Defina para 500 em caso de erro
        } finally {
            setApiChecked(true);
        }
    };

    const handleButtonClick = () => {
        checkApi(false);
    };

    // Define a cor padrão do botão com base no estado apiStatus
    const buttonColor = apiStatus === 200 ? 'yellowgreen' : apiStatus === 500 ? 'red' : 'white';

    return (
        <Tooltip title={apiStatus === 200 ? "Serviço de busca está online!" : apiStatus === 500 ? "Erro ao verificar serviço de busca!" : "Clique para verificar o status do serviço de busca"}
            color={apiStatus === 200 ? 'green' : apiStatus === 500 ? 'red' : 'grey'}
            placement='left'>
            <Button
                size="lg"
                icon={<span
                    style={{ lineHeight: '30px', textAlign: 'center' }}>
                    {apiStatus === 200 ? <ApiOutlined /> : <DisconnectOutlined />}
                </span>}
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '135px',
                    color: buttonColor, // Texto branco para visibilidade
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    padding: 0,
                }}
                type="primary"
                shape='circle'
                onClick={handleButtonClick}
            />
        </Tooltip>
    );
};
