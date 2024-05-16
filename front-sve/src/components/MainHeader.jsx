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
    backgroundColor: 'inherit',
    width: '100%',
    height: '60px',
    zIndex: '0',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
};


export const MainHeader = () => {

    return (
        <Header style={headerStyle}>
            <h4 style={{ color: 'black', marginTop: '8px', marginRight: '45px',  }}>
                <Link onClick to={"/app"}><img src="../icon_black.png" width="50px" alt="" style={{ marginRight: '5px', }} /></Link>
                Sales Vision Extractor
            </h4>

                <GlobalLoading/>
                <HomeButton/>
                <SkypeButton/>
                <WppButton/>
                <StatusButton/>
                <LogoutButton/>
        </Header>

    )
}