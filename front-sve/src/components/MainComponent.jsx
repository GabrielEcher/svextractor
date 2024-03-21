import React from 'react'
import { Layout, Menu, Divider } from 'antd';
const { Header, Content, } = Layout;
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
import { EscolherFab } from './EscolherFabricante';
import { StatusButton } from '../services/CheckAPI';
import { Link, useNavigate } from 'react-router-dom';
import { TableData } from './Table';
import { useFetchApi } from './FetchApi';
import { useExportToXls } from './ExportData'
import { ToastContainer } from 'react-toastify';
import { AreaChartOutlined, BarChartOutlined } from '@ant-design/icons'

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

const firstLineStyle = {
    minHeight: 50,
    color: '#fff',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    position: 'sticky'
};

const secondLineStyle = {
    textAlign: 'center',
    minHeight: 45,
    color: '#fff',
    backgroundColor: '#fff',
    display: 'flex', justifyContent: 'space-between',
    marginBottom: '10px',
    position: 'sticky'
};

const tableStyle = {
    width: '100%', position: 'sticky', minHeight: '400px'
};


const RelatorioA = () => {
    const fetchData = useFetchApi();
    const exportData = useExportToXls();

    

    return (
        <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', }}>
            <Header style={headerStyle}>
                <h4 style={{ color: 'white', marginTop: '8px', marginRight: '45px' }}>
                    <Link onClick to={"/home"}><img src="../logo_white.png" width="45px" alt="" style={{ marginRight: '5px', }} /></Link>
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
                <EscolherFab/>
                <EscolherMarca />
                <EscolherVend />
                <EscolherTele />
                
            </Content>

            <Content style={secondLineStyle}>
                <EscolherCidade />
                <EscolherTop />
                <EscolherStatus />
                <EscolherData />
                <BuscarDados onClick={fetchData} />
                <GerarRelatorio onClick={exportData} />
                <CleanButton />


            </Content>

            <Content style={tableStyle}>
                <Divider>Relatório de vendas analítico</Divider>
                <TableData />
            </Content>



        </Layout>
    )
}

export default RelatorioA;

//