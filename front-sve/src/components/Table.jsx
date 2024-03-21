import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Table } from 'antd';

export const TableData = () => {
  const { data, loading } = useContext(DataContext);
  
  const filtroVend = [...new Set(data.map(item => item.nome_vendedor_1))];
  const filtroTele = [...new Set(data.map(item => item.nome_vendedor_2))];
  const filtroCodNew = [...new Set(data.map(item => item.codigo_newsales))];
  const filtroCodERP = [...new Set(data.map(item => item.codigo_pedido_erp))];
  const filtroStatus = [...new Set(data.map(item => item.status))];
  const filtroTop = [...new Set(data.map(item => item.nome_operacao))];
  const filtroCliente = [...new Set(data.map(item => item.nome_cliente))];
  const filtroCodCliente = [...new Set(data.map(item => item.codigo_cliente))];
  const filtroCidade = [...new Set(data.map(item => item.nome_cidade))];

  const columns = [
    {
      key: 'vendedor',
      title: 'VENDEDOR',
      dataIndex: 'nome_vendedor_1',
      filters: filtroVend.map(vend => ({
        text: vend,
        value: vend
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.nome_vendedor_1.startsWith(value),
      
    },
    {
      key: 'televendas',
      title: 'TELEVENDAS',
      dataIndex: 'nome_vendedor_2',
      filters: filtroTele.map(tele => ({
        text: tele,
        value: tele
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.nome_vendedor_2.startsWith(value),
    },
    {
      key: 'codnewsales',
      title: 'CÓD NEWSALES',
      dataIndex: 'codigo_newsales',
      filters: filtroCodNew.map(codnew => ({
        text: codnew,
        value: codnew
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.codigo_newsales.startsWith(value),
    },
    {
      key: 'coderp',
      title: 'CÓDIGO ERP',
      dataIndex: 'codigo_pedido_erp',
      filters: filtroCodERP.map(coderp => ({
        text: coderp,
        value: coderp
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.codigo_pedido_erp.startsWith(value),
    },
    {
      key: 'status',
      title: 'STATUS PEDIDO',
      dataIndex: 'status',
      filters: filtroStatus.map(status => ({
        text: status,
        value: status
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.status.startsWith(value),
    },
    {
      key: 'top',
      title: 'OPERAÇÃO',
      dataIndex: 'nome_operacao',
      filters: filtroTop.map(top => ({
        text: top,
        value: top
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.nome_operacao.startsWith(value),
    },
    {
      key: 'codcliente',
      title: 'CÓD CLIENTE',
      dataIndex: 'codigo_cliente',
      filters: filtroCodCliente.map(codcliente => ({
        text: codcliente,
        value: codcliente
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.codigo_cliente.startsWith(value),
    },
    {
      key: 'nomecliente',
      title: 'NOME CLIENTE',
      dataIndex: 'nome_cliente',
      filters: filtroCliente.map(cliente => ({
        text: cliente,
        value: cliente
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.nome_cliente.startsWith(value),
    },
    {
      key: 'cidade',
      title: 'CIDADE',
      dataIndex: 'nome_cidade',
      filters: filtroCidade.map(cidade => ({
        text: cidade,
        value: cidade
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.nome_cidade.startsWith(value),
    },
  ]

  return (
    <>

      <Table
        virtual
        scroll={{
          x: 1366,
          y: 600
        }}
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ position: ['bottomLeft'] }}
      >
      </Table>
    </>

  )
}