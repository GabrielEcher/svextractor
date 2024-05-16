/* eslint-disable react/prop-types */
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { Button, Spin, Tooltip } from 'antd'
import { DeleteOutlined, SearchOutlined, DownloadOutlined, PoweroffOutlined, WhatsAppOutlined, SkypeOutlined, HomeOutlined } from '@ant-design/icons'
import { DataContext } from '../context/DataContext';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const BuscarDados = ({ onClick }) => {
    return (
        <Button color="blue" type="primary" size='large' icon={<SearchOutlined />} onClick={onClick}
            style={{ top: '2px' }}>
            Buscar vendas
        </Button>
    );
}

export const GerarRelatorio = ({ onClick }) => {
    const { disabled } = useContext(DataContext);

    return (
        <Tooltip title="Ao clicar, o download do relatório iniciará automaticamente!" color='gray'>
            <Button disabled={disabled} style={{ backgroundColor: 'green', top: '2px' }} icon={<DownloadOutlined />} type="primary" size='large' onClick={onClick} >
                Exportar
            </Button>
        </Tooltip>

    )
}

export const CleanButton = () => {
    const { setData, } = useContext(DataContext);

    const handleClick = () => {
        setData([]);
    };

    return (
        <Tooltip title="Limpar dados buscados." color='red' placement="leftBottom">
            <Button type='primary' size='large' icon={<DeleteOutlined />} onClick={handleClick} danger
                style={{ top: '2px' }} />
        </Tooltip>
    );
};

export const SkypeButton = () => {
    return (
        <Tooltip title="Obter suporte no skype" color='blue'>
            <Button
                href='https://join.skype.com/invite/aTjYIjW8AdY5'
                icon={<span style={{ lineHeight: '30px', textAlign: 'center' }}>
                    <SkypeOutlined />
                </span>}
                size="lg"
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '95px',
                    color: 'black',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    padding: 0,
                    backgroundColor: 'inherit',
                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)'
                }}
                type="primary"
                shape='circle'
                target='_blank' />
        </Tooltip>
    )
}

export const WppButton = () => {
    return (
        <Tooltip title="Obter suporte no WhatsApp" color='#25D366'>
            <Button
                href='https://wa.me/555198619089?text=Preciso%20de%20suporte%20para%20o%20SVExtractor!'
                icon={<span style={{ lineHeight: '30px', textAlign: 'center' }}>
                    <WhatsAppOutlined />
                </span>}
                type="primary"
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '55px',
                    color: 'black',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    padding: 0,
                    backgroundColor: 'inherit',
                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)'
                }}
                shape='circle'
                target='_blank' />
        </Tooltip>
    )
}

export const LogoutButton = () => {
    const { signOut } = useContext(AuthContext)
    return (
        <Tooltip title="Sair do SVExtractor" color='red' >
            <Button
                icon={<PoweroffOutlined />}
                size="md"
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    color: 'black',
                    backgroundColor: 'inherit',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    padding: 0,
                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)'

                }}
                type="primary"
                shape='circle'
                onClick={signOut} />
        </Tooltip>
    )
}

export const GlobalLoading = () => {
    const { loadingGlobal } = useContext(DataContext);

    if (loadingGlobal) {
        return (

            <Spin
                style={{ right: '220px', marginTop: '1px', position: 'fixed', alignItems: 'center' }}
                indicator={<LoadingOutlined style={{ fontSize: 30, color: 'black' }} />} />

        )
    }
}

export const HomeButton = () => {
    return (
        <Link to="/app">
            <Tooltip title="Voltar ao início" color='grey' placement="bottom">
                <Button
                    icon={<HomeOutlined />}
                    size="md"
                    style={{
                        position: 'absolute',
                        top: '15px',
                        right: '175px',
                        color: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        padding: 0,
                        backgroundColor: 'inherit',
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)'
                    }}
                    type="primary"
                    shape='circle'

                />
            </Tooltip>
        </Link>
    )
}





