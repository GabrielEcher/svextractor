import { useContext, useState, } from 'react';
import { DataContext } from '../context/DataContext';
import { Button, Checkbox, Table, Tooltip, } from 'antd';
import { CheckOutlined } from '@ant-design/icons'

export const TableAnalitic = () => {

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
export const TablePersonalizated = () => {

  const { data, setData, loading } = useContext(DataContext);

  const filtroVend = [...new Set(data.map(item => item.nome_vendedor_1))];
  const filtroTele = [...new Set(data.map(item => item.nome_vendedor_2))];
  const filtroCodNew = [...new Set(data.map(item => item.codigo_newsales))];
  const filtroCodERP = [...new Set(data.map(item => item.codigo_pedido_erp))];
  const filtroStatus = [...new Set(data.map(item => item.status))];
  const filtroTop = [...new Set(data.map(item => item.nome_operacao))];
  const filtroCliente = [...new Set(data.map(item => item.nome_cliente))];
  const filtroCodCliente = [...new Set(data.map(item => item.codigo_cliente))];
  const filtroCidade = [...new Set(data.map(item => item.nome_cidade))];
  const filtroCodProd = [...new Set(data.map(item => item.codigo_produto))]
  const filtroProduto = [...new Set(data.map(item => item.nome_produto))]
  const filtroLote = [...new Set(data.map(item => item.lote))]
  const filtroCodFabr = [...new Set(data.map(item => item.codigo_fabricante))]
  const filtroNomeFabr = [...new Set(data.map(item => item.nome_fabricante))]
  const filtroDataPed = [...new Set(data.map(item => item.data_emissao_pedido))]
  const filtroDataNota = [...new Set(data.map(item => item.data_emissao_nota))]
  const filtroQntPedido = [...new Set(data.map(item => item.quantidade_venda_pedido))]
  const filtroQntNota = [...new Set(data.map(item => item.quantidade_venda_nota))]
  const filtroTotalNota = [...new Set(data.map(item => item.valor_liquido_total_nota))]
  const filtroTotalPedido = [...new Set(data.map(item => item.valor_liquido_total_pedido))]


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
      onFilter: (value, record) => {
        const stringValue = String(record.codigo_newsales); // Converte o valor para string
        return stringValue.startsWith(value);
      },
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
      onFilter: (value, record) => {
        const stringValue = String(record.codigo_pedido_erp); // Converte o valor para string
        return stringValue.startsWith(value);
      },
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
      onFilter: (value, record) => {
        const stringValue = String(record.codigo_cliente); // Converte o valor para string
        return stringValue.startsWith(value);
      },
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

  ]

  const addColumns = [
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
    {
      key: 'codprod',
      title: 'COD PRODUTO',
      dataIndex: 'codigo_produto',
      filters: filtroCodProd.map(codprod => ({
        text: codprod,
        value: codprod
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.codigo_produto); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
    {
      key: 'nomeprod',
      title: 'PRODUTO',
      dataIndex: 'nome_produto',
      filters: filtroProduto.map(produto => ({
        text: produto,
        value: produto
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.nome_produto.startsWith(value),
    },
    {
      key: 'lote',
      title: 'LOTE',
      dataIndex: 'lote',
      filters: filtroLote.map(lote => ({
        text: lote,
        value: lote
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.lote); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
    {
      key: 'codfabr',
      title: 'COD FABRICANTE',
      dataIndex: 'codigo_fabricante',
      filters: filtroCodFabr.map(codfabr => ({
        text: codfabr,
        value: codfabr
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.codigo_fabricante); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
    {
      key: 'nomefabr',
      title: 'FABRICANTE',
      dataIndex: 'nome_fabricante',
      filters: filtroNomeFabr.map(fabricante => ({
        text: fabricante,
        value: fabricante
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => record.nome_fabricante.startsWith(value),
    },
    {
      key: 'emissao_pedido',
      title: 'EMISSÃO PEDIDO',
      dataIndex: 'data_emissao_pedido',
      filters: filtroDataPed.map(pedido => ({
        text: pedido,
        value: pedido
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.data_emissao_pedido); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
    {
      key: 'emissao_nota',
      title: 'EMISSÃO NOTA',
      dataIndex: 'data_emissao_nota',
      filters: filtroDataNota.map(nota => ({
        text: nota,
        value: nota
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.data_emissao_nota); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
    {
      key: 'qntvendped',
      title: 'QUANTIDADE V PEDIDO',
      dataIndex: 'quantidade_venda_pedido',
      filters: filtroQntPedido.map(qntped => ({
        text: qntped,
        value: qntped
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.quantidade_venda_pedido); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
    {
      key: 'qntvendnota',
      title: 'QUANTIDADE V NOTA',
      dataIndex: 'quantidade_venda_nota',
      filters: filtroQntNota.map(qntnota => ({
        text: qntnota,
        value: qntnota
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.quantidade_venda_nota); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
    {
      key: 'total_pedido',
      title: 'TOTAL PEDIDO (R$)',
      dataIndex: 'valor_liquido_total_pedido',
      filters: filtroTotalPedido.map(totalpedido => ({
        text: totalpedido,
        value: totalpedido
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.valor_liquido_total_pedido); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
    {
      key: 'total_nota',
      title: 'TOTAL NOTA (R$)',
      dataIndex: 'valor_liquido_total_nota',
      filters: filtroTotalNota.map(totalnota => ({
        text: totalnota,
        value: totalnota
      })),
      filterSearch: true,
      filterMode: 'tree',
      onFilter: (value, record) => {
        const stringValue = String(record.valor_liquido_total_nota); // Converte o valor para string
        return stringValue.startsWith(value);
      },
    },
  ]


  const defaultCheckedOptions = columns.map((item) => item.key);
  const [checkedOptions, setCheckedOptions] = useState(defaultCheckedOptions)
  const allColumns = [...columns, ...addColumns];

  const options = addColumns.map(({ key, title }) => ({
    label: title,
    value: key
  }));

  const newColumns = allColumns.map((item) => ({
    ...item,
    hidden: !checkedOptions.includes(item.key),
  }));

  const checkAll = checkedOptions.length === allColumns.length;
  const indeterminate = checkedOptions.length > 0 && checkedOptions.length < allColumns.length;

  const onCheckAllChange = (e) => {
    const addColumnKeys = addColumns.map(column => column.key);

    const isChecked = e.target.checked;

    const updatedOptions = isChecked ? addColumnKeys.concat(checkedOptions) : checkedOptions.filter(option => !addColumnKeys.includes(option));
    setCheckedOptions(updatedOptions);
  };


  const exportData = () => {
    const visibleData = data.map((record) => {
      const rowData = {};
      newColumns.forEach((column) => {
        if (!column.hidden) {
          rowData[column.dataIndex] = record[column.dataIndex];
        }
      });
      return rowData;
    });
    setData(visibleData);
  }

  return (
    <>

      <Checkbox
        name='check-all'
        style={{ marginLeft: '15px', marginBottom: '15px', marginRight: '10px', marginTop: '10px' }}
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Marcar/Desmarcar todos
      </Checkbox>
      <Tooltip title="Ao clicar, as colunas marcadas serão adicionadas na planilha exportada." color='blue'>
        <Button icon={<CheckOutlined />} onClick={exportData} type='primary'>Adicionar colunas</Button>
      </Tooltip>


      <Checkbox.Group
        name='check-group'
        style={{ marginLeft: '15px', marginBottom: '15px' }}
        value={checkedOptions}
        options={options}
        onChange={(value) => {
          const updatedOptions = value.concat(defaultCheckedOptions.filter(option => !value.includes(option)));
          setCheckedOptions(updatedOptions);
        }}
      />

      <Table
        virtual
        scroll={{
          x: '',
          y: 600
        }}
        columns={newColumns}
        dataSource={data}
        loading={loading}
        pagination={{ position: ['bottomLeft'] }}
      >
      </Table>
    </>

  )
}