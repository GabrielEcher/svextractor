/* eslint-disable no-unused-vars */
import BranchIcon from '@rsuite/icons/Branch';
import { IconButton, Whisper, Tooltip } from 'rsuite';
import { useEffect, useState } from 'react';
import { api_db } from '../services/api'

export const StatusButton = () => {
    const [apiStatus, setApiStatus] = useState('')
    const [tooltipText, setTooltipText] = useState('')

    const tooltipApi = (
        <Tooltip>
            {tooltipText}
        </Tooltip>
    )

    useEffect(() => {
        async function checkApi() {
            try {
                const response = await api_db.get("/status")
                setTooltipText('Serviço de busca do SVExtractor está online')
                setApiStatus('greenyellow')
            } catch (err) {
                setTooltipText('Serviço de busca do SVExtractor está offline')
                setApiStatus('red')
            }
        } checkApi();
    },[])

    
    return (
        <Whisper trigger={'hover'} speaker={tooltipApi} placement='bottom' followCursor>
            <IconButton
            icon={<BranchIcon size='' />}
            size="lg"
            style={{ position: 'absolute', top: '14px', right: '14px', borderRadius: '15px', width: '40px', height: '35px', color: apiStatus }}
            appearance="subtle"
        />
        </Whisper>
        
    )
}