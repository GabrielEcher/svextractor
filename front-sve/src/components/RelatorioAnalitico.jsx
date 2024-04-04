import React from 'react'
import { Layout, Divider } from 'antd';
const { Content, } = Layout;
import { TableAnalitic } from './Table';
import { MainHeader } from './MainHeader';
import { MainNotification } from './MainNotification';
import { FirstLineInputs, SecondLineInputs } from './Inputs';
import { Statistics } from './Stats';

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
    

    return (
        <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', }}>

            <MainHeader />

            <Divider>Relatório de vendas analítico</Divider>

            <MainNotification />

            <Content style={firstLineStyle}>
                <FirstLineInputs />
            </Content>

            <Content style={secondLineStyle}>
                <SecondLineInputs />
            </Content>

            <Content style={tableStyle}>
                <Statistics />
                <TableAnalitic />
            </Content>



        </Layout>
    )
}

export default RelatorioA;
