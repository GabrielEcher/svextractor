import { Layout } from 'antd';
const { Header } = Layout;
import { Link } from 'react-router-dom';

import { SkypeButton, WppButton, LogoutButton, GlobalLoading, HomeButton } from './Botoes'
import { StatusButton } from '../services/CheckAPI';

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


export const MainHeader = () => {

    return (
        <Header style={headerStyle}>
            <h4 style={{ color: 'white', marginTop: '8px', marginRight: '45px' }}>
                <Link onClick to={"/app"}><img src="../logo_white.png" width="45px" alt="" style={{ marginRight: '5px', }} /></Link>
                Sales Vision Extractor
            </h4>
            
                <GlobalLoading/>
                <HomeButton/>
                <StatusButton />
                <WppButton />
                <SkypeButton />
                <LogoutButton />
        </Header>

    )
}