/* eslint-disable no-unused-vars */
import { DisconnectOutlined, ApiOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { api_db } from '../services/api'
import { Button, Tooltip } from 'antd';

export const StatusButton = () => {
    const [apiStatus, setApiStatus] = useState('')
    
    useEffect(() => {
        async function checkApi() {
            try {
                const response = await api_db.get("/status")
                setApiStatus(response.status)
            } catch (err) {
                setApiStatus('500')
            }
        } checkApi();
    }, [])

    return (
        <Tooltip title={apiStatus === 200 ? "Serviço de busca está online!" : "Serviço de busca está offline!"}
            color={apiStatus === 200 ? 'green' : 'red'}
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
                    color: apiStatus === 200 ? 'yellowgreen' : 'red',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    padding: 0,
                }}
                type="primary"
                shape='circle' />
        </Tooltip>

    )
}