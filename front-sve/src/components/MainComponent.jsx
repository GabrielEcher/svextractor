import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { BuscarDados, GerarRelatorio, CleanButton, SkypeButton, WppButton, LogoutButton } from './Botoes'
import { EscolherVend } from './EscolherVend'
import { EscolherCliente } from './EscolherCliente'
import { EscolherTele } from './EscolherTele'
import { EscolherData } from './EscolherData'
import { EscolherTop } from './EscolherTop'
import { EscolherMarca } from './EscolherMarca'
import { EscolherProd } from './EscolherProd'
import { EscolherStatus } from './EscolherStatus';
import { EscolherCidade } from './EscolherCidade';
import { StatusButton } from '../services/CheckAPI';
import { Link } from 'react-router-dom';
import { TableData } from './Table';
import { useFetchApi } from './FetchApi';
import { useExportToXls } from './ExportData'
import { ToastContainer } from 'react-toastify';

const headerStyle = {
    paddingLeft: '7px',
    textAlign: 'left',
    marginBottom: '8px',
    backgroundColor: '#0958d9',
    width: '100%',
    height: '60px'
};

const footerStyle = {
    height: '5%',
    textAlign: 'left',
    color: '#fff',
    backgroundColor: '#0958d9',


};

const firstLineStyle = {
    minHeight: 50,
    color: '#fff',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
};

const secondLineStyle = {
    textAlign: 'center',
    minHeight: 45,
    color: '#fff',
    backgroundColor: '#fff',
    display: 'flex', justifyContent: 'space-between',
    marginBottom: '10px'
};

const tableStyle = {
    width: '100%', position: 'sticky', minHeight: '400px'
};


const MainComp = () => {
    const fetchData = useFetchApi();
    const exportData = useExportToXls();

    return (
        <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
            <Header style={headerStyle}>
                <h4 style={{ color: 'white', marginTop: '8px' }}>
                    <Link onClick to={"/home"}><img src="./logo_white.png" width="45px" alt="" style={{ marginRight: '5px', }} /></Link>
                    Sales Vision Extractor
                </h4>
                <StatusButton />
                <WppButton />
                <SkypeButton />
                <LogoutButton />
            </Header>

            <ToastContainer
                position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Bounce
            ></ToastContainer>

            <Content style={firstLineStyle}>
                <EscolherCliente />
                <EscolherProd />
                <EscolherMarca />
                <EscolherVend />
                <EscolherTele />
                <EscolherCidade />
            </Content>

            <Content style={secondLineStyle}>
                <EscolherTop />
                <EscolherStatus />
                <EscolherData />
                <BuscarDados onClick={fetchData} />
                <GerarRelatorio onClick={exportData} />
                <CleanButton />


            </Content>

            <Content style={tableStyle}>
                <TableData />
            </Content>



        </Layout>
    )
}

export default MainComp;

//