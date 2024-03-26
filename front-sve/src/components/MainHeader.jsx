import { Layout, Menu, } from 'antd';
const { Header } = Layout;
import { Link, useNavigate } from 'react-router-dom';
import { AreaChartOutlined, BarChartOutlined } from '@ant-design/icons'
import { SkypeButton, WppButton, LogoutButton, GlobalLoading } from './Botoes'
import { StatusButton } from '../services/CheckAPI';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';


const headerStyle = {
    top: '0',
    paddingLeft: '7px',
    textAlign: 'left',
    marginBottom: '8px',
    backgroundColor: '#0958d9',
    width: '100%',
    height: '60px',
    zIndex: '0',
    display: 'flex',

};

const items = [
    {
        icon: <AreaChartOutlined />,
        key: 'analitico',
        label: 'Relatório Analítico',
        route: '/home/relatorio-analitico',
    },
    {
        icon: <BarChartOutlined />,
        key: 'personalizado',
        label: 'Relatório Personalizado',
        route: '/home/relatorio-personalizado'
    },

]

export const MainHeader = () => {
    const { setData } = useContext(DataContext)

    const navigate = useNavigate();

    const handleMenuRedirect = (route) => {
        setData([])
        navigate(route);
        
    };

    return (
        <Header style={headerStyle}>
            <h4 style={{ color: 'white', marginTop: '8px', marginRight: '45px' }}>
                <Link onClick to={"/home"}><img src="../logo_white.png" width="45px" alt="" style={{ marginRight: '5px', }} /></Link>
                Sales Vision Extractor

            </h4>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ flex: 1, minWidth: 0, backgroundColor: '#0958d9', fontSize: '15px', }}>
                {items.map(item => (
                    <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuRedirect(item.route)}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
            <GlobalLoading/>
            <StatusButton />
                <WppButton />
                <SkypeButton />
                <LogoutButton />
        </Header>

    )
}