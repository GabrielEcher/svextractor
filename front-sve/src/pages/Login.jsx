import React, { useState } from 'react';
import { Button, Form, Input, Divider, Alert, Spin } from 'antd'
import { useContext, } from "react";
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { UserOutlined, LinkedinFilled } from '@ant-design/icons'
import { FaKey } from 'react-icons/fa'

function Login() {
  const { signIn, authenticated, apiStatus } = useContext(AuthContext);
  const [redirecting, setRedirecting] = useState(false);

  const onFinish = async (e) => {
    await signIn({ username: e.username, password: e.password })
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
            backgroundColor: '#E8E8E8',
          }}>

          <Form
            onFinish={onFinish}
            size='large'
            variant='outlined'
            onKeyPress={handleKeyPress}
            style={{ width: '400px', backgroundColor: '#fff', padding: '25px', borderRadius: '20px', }}
          >
            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: '40px' }}>
                <Link
                  to={'https://diamaju.com.br/'}
                  target='_blank'>
                  <img
                    style={{ width: '180px', }}
                    src="https://diamaju.com.br/uploads/config/123/logo.png" alt="" />
                </Link>
              </div>

            </Form.Item>
            <Form.Item>
              <h3><img style={{ width: '35px', marginBottom: '0.1vh' }} src="./logo_svextractor_notext.ico" alt="" /> SVExtractor</h3>
            </Form.Item>
            <Divider />
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
              />
            )}

            <Divider />

            <Form.Item>
              <Button
                htmlType='submit'
                style={{ backgroundColor: 'green', width: '100%' }}
                type="primary">Entrar</Button>
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
  } else if (authenticated && !redirecting) {
    setTimeout(() => {
      setRedirecting(true);
    }, 1000);
    return <Spin size='large' fullscreen />;
  }
  if (authenticated && redirecting) {
    return <Navigate to="/home" />;
  }
}


export default Login;