import ExcelJS from 'exceljs'
import { useState } from 'react'
import { Container, Header, Content, Footer, Table } from 'rsuite';
import { toast, ToastContainer } from 'react-toastify';
import { BuscarDados, GerarRelatorio, LogoutButton, CleanButton, SkypeButton, WppButton } from '../components/Botoes'
import { EscolherVend } from '../components/EscolherVend'
import { EscolherCliente } from '../components/EscolherCliente'
import { EscolherTele } from '../components/EscolherTele'
import EscolherData from '../components/EscolherData'
import { EscolherTop } from '../components/EscolherTop'
import { EscolherMarca } from '../components/EscolherMarca'
import EscolherCodProd from '../components/EscolherProd'
import { EscolherStatus } from '../components/EscolherStatus';
import { EscolherCidade } from '../components/EscolherCidade';
import { api_db } from '../services/api'
import { StatusButton } from '../services/CheckAPI';
import { Link } from 'react-router-dom';
const { Column, HeaderCell, Cell } = Table;

const FetchData = () => {
  const [data, setData] = useState([]);
  let [loading, setLoading] = useState(false)
  const [selectedVendedor, setSelectedVendedor] = useState(null);
  const [selectedTelevendas, setSelectedTelevendas] = useState(null);
  const [codigoCliente, setCodigoCliente] = useState(null)
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedTop, setSelectedTop] = useState(null)
  const [selectedMarca, setSelectedMarca] = useState(null);
  const [codigoProd, setCodigoProd] = useState(null)
  const [selectedStatus, setSelectedStatus] = useState(null)
  const [selectedCid, setSelectedCid] = useState(null)
  const [exporting, setExporting] = useState(false);


  async function fetchDataApi() {

    try {
      setLoading(true);
      const response = await api_db.get(`/vendas/${selectedVendedor}/${selectedTelevendas}/${codigoCliente}/${selectedDates.startDate}/${selectedDates.endDate}/${selectedTop}/${codigoProd}/${selectedMarca}/${selectedStatus}/${selectedCid}`);
      console.log('API_URL:', response )

      setData(response.data);
      toast.success('Vendas obtidas com sucesso!')
      toast.info("Ao exportar o relatório o download iniciará automaticamente.")
      setLoading(false);
    } catch (error) {
      if (error.request.status === 404) {
        toast.error('ERRO:404 Erro ao consultar dados, verifique os campos preenchidos!')
      } else if (error.request.status === 0) {
        toast.error('ERRO:500/0. Problema ao comunicar-se com a API, acione o suporte!')
      }
      setLoading(false)
    }
  }

  const exportToXls = async (data) => {
    try {
      if (!data.length) {
        toast.error("Nenhum dado para exportar"); // Explicitly throw error for empty data
      }

      // eslint-disable-next-line no-inner-declarations
      function addRows(row) {
        const values = columns.map(column => row[column])
        worksheet.addRow(values);
      }

      setExporting(true);

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet 1');

      const columns = Object.keys(data[0]);
      worksheet.addRow(columns);

      data.forEach(addRows);

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `relatorio_vendas-${selectedDates.startDate}-${selectedDates.endDate}.xlsx`;

      setTimeout(() => {
        a.click();
      }, 3000);


    } catch (err) {
      console.error("Error exporting to XLS:", err);
    } finally {

      setExporting(false); // Ensure exporting state is reset
    }
  };

  const gerarRelatorioClick = () => {
    if (!exporting) {
      exportToXls(data);

    }
  };

  const buscarDadosClick = () => {
    fetchDataApi();
  };

  const handleVendedorChange = (value) => {
    setSelectedVendedor(value);
  };

  const handleTelevendasChange = (value) => {
    setSelectedTelevendas(value);
  };

  const handleClienteChange = (value) => {
    setCodigoCliente(value);
  };

  const handleProdChange = (value) => {
    setCodigoProd(value);
  };

  const handleDatesSelected = (dates) => {
    setSelectedDates(dates);
  };

  const handleTopChange = (value) => {
    setSelectedTop(value);
  };

  const handleMarcaChange = (value) => {
    setSelectedMarca(value);
  };

  const handleStatusChange = (value) => {
    setSelectedStatus(value)
  }

  const handleCidChange = (value) => {
    setSelectedCid(value)
  }

  const handleReload = () => {
    setData([])
  }

  return (
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <Container>
        <Header style={{
          textAlign: 'left',
          marginBottom: '15px',
          backgroundColor: '#3498ff',
          height: '10%',
          width: '100%',
        }}>
          <h1
            style={{ paddingLeft: '7px', color: 'white', }}>
            <Link onClick to={"/home"}>
              <img src="./images/logo_white.png"
                width="60px"
                alt="" />
            </Link> Sales Vision Extractor
          </h1>

          <LogoutButton />
          <WppButton />
          <SkypeButton />
          <StatusButton />

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

        </Header>
        <Container style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '0.5%', }}>

          <Content style={{ width: '100%', maxWidth: '1490px' }}>

            {/* Primeira linha */}
            <div className="inputs" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <EscolherCliente onChange={handleClienteChange} />
              <EscolherCodProd onChange={handleProdChange} />
              <EscolherVend onChange={handleVendedorChange} />
              <EscolherTele onChange={handleTelevendasChange} />
              <EscolherMarca onChange={handleMarcaChange} />
              <EscolherCidade onChange={handleCidChange} />
            </div>

            {/* Segunda linha */}
            <div className="inputs" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', gap: '20px', marginRight: '0%' }}>

              <EscolherTop onChange={handleTopChange} />
              <EscolherStatus onChange={handleStatusChange} />
              <EscolherData onDatesSelected={handleDatesSelected} />
              
              <div className="buttons" style={{ display: 'flex', gap: '10px', marginBottom: '10px'}}>
                <BuscarDados onClick={buscarDadosClick} />
                <GerarRelatorio onClick={gerarRelatorioClick} />
                <CleanButton onClick={handleReload} />
              </div>

            </div>
          </Content>

          <Content style={{ width: '100%', maxWidth: '1500px' }}>
            <Table
              virtualized height={470}
              data={data}
              cellBordered
              loading={loading}
              affixHorizontalScrollbar
            >
              <Column width={108}>
                <HeaderCell>CÓD NEWSALES</HeaderCell>
                <Cell dataKey="codigo_newsales" />
              </Column>

              <Column width={100}>
                <HeaderCell>CÓDIGO ERP</HeaderCell>
                <Cell dataKey="codigo_pedido_erp" />
              </Column>

              <Column width={100}>
                <HeaderCell>CÓD CLIENTE</HeaderCell>
                <Cell dataKey="codigo_cliente" />
              </Column>

              <Column width={250}>
                <HeaderCell>NOME CLIENTE</HeaderCell>
                <Cell dataKey="nome_cliente" />
              </Column>

              <Column width={250}>
                <HeaderCell>STATUS PEDIDO</HeaderCell>
                <Cell dataKey="status" />
              </Column>

              <Column width={320}>
                <HeaderCell>VENDEDOR</HeaderCell>
                <Cell dataKey="nome_vendedor_1" />
              </Column>

              <Column width={200}>
                <HeaderCell>TELEVENDAS</HeaderCell>
                <Cell dataKey="nome_vendedor_2" />
              </Column>

              <Column width={200}>
                <HeaderCell>OPERAÇÃO</HeaderCell>
                <Cell dataKey="nome_operacao" />
              </Column>

              <Column width={250}>
                <HeaderCell>CIDADE</HeaderCell>
                <Cell dataKey="nome_cidade" />
              </Column>
            </Table>

          </Content>
        </Container>

        <Footer style={{ marginTop: '5px', textAlign: 'left', marginLeft: '10px' }}>SVExtractor - v1.0.0</Footer>
        
      </Container>
    </div>
  );
};

export default FetchData;