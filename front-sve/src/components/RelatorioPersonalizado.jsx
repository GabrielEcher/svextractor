import React from 'react'
import { Divider, Layout, } from 'antd';
const { Content } = Layout;
import { MainHeader } from './MainHeader';
import { MainNotification } from './MainNotification';
import { FirstLineInputs, SecondLineInputs } from './Inputs';
import { TablePersonalizated } from './Table';


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


export const RelatorioP = () => {

    return (
        <Layout style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', }}>

            <MainHeader />
            
            <Divider>Relatório de vendas personalizado</Divider>
            
            <MainNotification />

            <Content style={firstLineStyle}>
                <FirstLineInputs />
            </Content>

            <Content style={secondLineStyle}>
                <SecondLineInputs />
            </Content>

            <Content style={tableStyle}>

                <TablePersonalizated />
            </Content>



        </Layout>
    )
}