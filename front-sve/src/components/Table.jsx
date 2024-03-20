import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Divider, Table } from 'antd';

export const TableData = () => {
  const { data, loading } = useContext(DataContext);
  const columns = [
    {
      key: 'vendedor',
      title: 'VENDEDOR',
      dataIndex: 'nome_vendedor_1'
    },
    {
      key: 'televendas',
      title: 'TELEVENDAS',
      dataIndex: 'nome_vendedor_2'
    },
    {
      key: 'codnewsales',
      title: 'CÓD NEWSALES',
      dataIndex: 'codigo_newsales'
    },
    {
      key: 'coderp',
      title: 'CÓDIGO ERP',
      dataIndex: 'codigo_pedido_erp'
    },
    {
      key: 'status',
      title: 'STATUS PEDIDO',
      dataIndex: 'status',
    },
    {
      key: 'top',
      title: 'OPERAÇÃO',
      dataIndex: 'nome_operacao'
    },
    {
      key: 'codcliente',
      title: 'CÓD CLIENTE',
      dataIndex: 'codigo_cliente'
    },
    {
      key: 'nomecliente',
      title: 'NOME CLIENTE',
      dataIndex: 'nome_cliente'
    },
    {
      key: 'cidade',
      title: 'CIDADE',
      dataIndex: 'nome_cidade'
    },
  ]
  
  return (
    <>
    <Divider>Relatório de vendas analítico</Divider>
    <Table
      virtual
      scroll={{
        x: 1366,
        y: 600
      }}
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{position: ['bottomLeft']}}
    >
    </Table>
    </>
    
  )
}