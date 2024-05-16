import { Button, Form, Input, Divider, Alert } from 'antd'
import { useContext, } from "react";
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { UserOutlined, LinkedinFilled } from '@ant-design/icons'
import { FaKey } from 'react-icons/fa'
import { useState } from 'react';

function Login() {
  const { signIn, authenticated, apiStatus } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)
  const onFinish = async (e) => {
    setLoading(true)
    await signIn({ username: e.username, password: e.password })
    setLoading(false)

  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      Login(event);
    }
  }

  if (!authenticated) {
    return (
      <>

        <div className="login"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#fff',
          }}>

          <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center' }}>
            <img style={{ width: '65px' }} src="./icon_black.png" alt="" />
            <h3 style={{ color: 'black' }}>SVExtractor</h3>
          </div>

          <Form
            onFinish={onFinish}
            size='large'
            variant='outlined'
            onKeyPress={handleKeyPress}
            style={{ width: '400px', backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)' }}
          >

            <Form.Item>
              <h2>Faça seu login</h2>
            </Form.Item>

            <Form.Item
              name="username"
              label={<UserOutlined />}
              colon={false}
            >
              <Input
                placeholder="E-mail"
                type='e-mail'
                autoComplete={'true'}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<FaKey />}
              colon={false}>
              <Input.Password
                placeholder="Senha"
                type='password'
                autoComplete='current-password'
              />
            </Form.Item>
            {apiStatus && (
              <Alert
                type='error'
                message={apiStatus}
                closable
                showIcon
                style={{ height: '50px' }}
              />
            )}

            <Divider />

            <Form.Item>
              <Button
                htmlType='submit'
                style={{ backgroundColor: 'green', width: '100%' }}
                type="primary"
                loading={loading}
              >Entrar</Button>

            </Form.Item>

            <Link
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'center', margin: 'auto', display: 'block', marginBottom: '10px' }}
              to={'https://diamaju.com.br/politica-de-privacidade'}
              target='_blank' >
              Diamaju - Política de privacidade
            </Link>
            <div style={{ textAlign: 'center' }}>
              <Link
                to={"https://www.linkedin.com/in/gabriel-m-echer-25a793249/"}
                target='_blank'>
                <LinkedinFilled style={{ fontSize: '25px' }} />

              </Link>
            </div>
          </Form>

        </div>

      </>

    )
  }
  if (authenticated) {
    return <Navigate to="/app/" />;
  }
}


export default Login;