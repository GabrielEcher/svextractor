/* eslint-disable react/prop-types */
import { Button, IconButton, Tooltip, Whisper } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import CloseIcon from '@rsuite/icons/Close';
import { FaWhatsapp, FaSkype } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import OffIcon from '@rsuite/icons/Off';

const vendasIcon = <SearchIcon />
const relatorioIcon = <FileDownloadIcon />

const tooltipWpp = (
    <Tooltip>
        Clique se precisar de suporte no WhatsApp.
    </Tooltip>
)

const tooltipLogout = (
    <Tooltip>
        Clique para fazer logoff.
    </Tooltip>
)
const tooltipSkype = (
    <Tooltip>
        Clique se precisar de suporte no Skype (Gabriel).
    </Tooltip>
)

const tooltipClean = (
    <Tooltip>
        Limpar dados buscados.
    </Tooltip>
)

export const BuscarDados = ({ onClick }) => {
    return (
        <Button color="blue" appearance="primary" size='lg' startIcon={vendasIcon} onClick={onClick}>
            Buscar vendas
        </Button>
    );
}

export const GerarRelatorio = ({ onClick }) => {
    return (
        <Button color="green" appearance="primary" size='lg' startIcon={relatorioIcon} onClick={onClick}>
            Exportar relatório (xlsx)
        </Button>
    )
}

export const CleanButton = ({ onClick }) => {

    return (
        <Whisper trigger={'hover'} speaker={tooltipClean} placement='bottom' followCursor>
            <IconButton
                icon={<CloseIcon />}
                onClick={onClick}
                appearance='primary'
                size='md'
            >
            </IconButton>
        </Whisper>

    )
}

export const SkypeButton = () => {
    return (
        <Whisper trigger={'hover'} speaker={tooltipSkype} placement='bottom' followCursor>
            <IconButton
                href='https://join.skype.com/invite/aTjYIjW8AdY5'
                icon={<FaSkype size='' />}
                size="lg"
                style={{ position: 'absolute', top: '14px', right: '108px', width: '40px', borderRadius: '15px', height: '35px', color: '#fff' }}
                appearance="subtle"
                target='_blank' />
        </Whisper>

    )
}
export const WppButton = () => {
    return (
        <Whisper trigger={'hover'} speaker={tooltipWpp} placement='bottom' followCursor>
            <IconButton
                href='https://wa.me/555198619089?text=Preciso%20de%20suporte%20para%20o%20SVExtractor!'
                icon={<FaWhatsapp />}
                size="lg"
                style={{ position: 'absolute', top: '14px', right: '156px', width: '40px', borderRadius: '15px', height: '35px', color: '#fff', }}
                appearance="subtle"
                target='_blank' />
        </Whisper>

    )
}
export const LogoutButton = () => {
    const { signOut } = useContext(AuthContext)
    return (
        <Whisper trigger={'hover'} speaker={tooltipLogout} placement='bottom' followCursor>
            <IconButton
                icon={<OffIcon />}
                size="md"
                style={{ position: 'absolute', top: '14px', right: '60px', width: '40px', borderRadius: '15px', height: '35px', color: '#fff' }}

                appearance="subtle"
                onClick={signOut} />
        </Whisper>

    )
}




