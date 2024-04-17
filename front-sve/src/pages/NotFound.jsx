import { Header,  } from "antd/es/layout/layout"
import { Link } from "react-router-dom"
import { FrownFilled, ArrowLeftOutlined} from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";


const headerStyle = {
    top: '0',
    paddingLeft: '7px',
    textAlign: 'left',
    marginBottom: '8px',
    backgroundColor: 'black',
    width: '100%',
    height: '60px',
    zIndex: '0',
    display: 'flex',

};

export const PageNotFound = () => {
    return (
        <>
            <Header style={headerStyle}>
            <h4 style={{ color: 'white', marginTop: '8px', marginRight: '45px' }}>
                <Link onClick to={"/app"}><img src="../logo_white.png" width="45px" alt="" style={{ marginRight: '5px', }} /></Link>
                Sales Vision Extractor
            </h4>
            <Link to={"/app"}>
            <Tooltip title="Voltar ao início" color='grey' >
            <Button
                
                size="md"
                style={{
                    position: 'absolute',
                    top: '7px',
                    right: '5px',
                    color: '#fff',
                    backgroundColor: 'inherit',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '45px',
                    padding: 0,
                }}
                type="primary"
                shape='circle'
                >
                    <i style={{fontSize: '20px'}}><ArrowLeftOutlined/></i>
                </Button>
        </Tooltip>
            </Link>
         
        </Header>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
                gap: '10px'
            }}>
                <Space>
                    <i style={{fontSize: '80px', color: 'black'}}><FrownFilled /></i>
                    <h1 style={{fontSize: '100px', color: 'black'}}>404</h1> 
                    <h3 style={{color: 'black'}}>Página não encontrada</h3>
                </Space>
            </div>
            
        </>

    )
}