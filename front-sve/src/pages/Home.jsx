import { Button, Space, } from 'antd';
import { AreaChartOutlined, BarChartOutlined } from "@ant-design/icons";
import { MainHeader } from "../components/MainHeader";
import { Link } from "react-router-dom";


export const Home = () => {

  return (
    <>
      <MainHeader />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        gap: '10px'
      }}>
        <Space>
          <Link to="/app/relatorio-analitico">
            <Button style={{ width: '350px', height: '250px', boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)' }} shape='round' size='large' type="default" >
              <h3>Relatório Analítico</h3>
              <i style={{ fontSize: '80px' }}>{<AreaChartOutlined />}</i>
            </Button>
          </Link>

        </Space>

        <Space>
          <Link to="/app/relatorio-personalizado">
            <Button style={{ width: '350px', height: '250px', boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)' }} shape='round' size='large' type="default">
              <h3>Relatório Personalizado</h3>
              <i style={{ fontSize: '80px',  }}>{<BarChartOutlined />}</i>
            </Button>
          </Link>

        </Space>
      </div>
    </>
  )
}

