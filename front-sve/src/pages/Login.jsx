import 'rsuite/Message/styles/index.css';
import { Container, Content, Footer, Form, ButtonToolbar, Button, Panel, FlexboxGrid, IconButton, Message, Input, InputGroup, } from 'rsuite';
import { useContext, useState, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import EmailIcon from '@rsuite/icons/Email';
import { FaGithub, FaKey } from 'react-icons/fa'

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { signIn, authenticated, apiStatus } = useContext(AuthContext);
  const [shouldSignIn, setShouldSignIn] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const handleSignIn = async () => {
      if (shouldSignIn) {
        await signIn({ username, password });
        setShouldSignIn(false);
      }
    };

    handleSignIn();
  }, [shouldSignIn, signIn, username, password, apiStatus]);

  useEffect(() => {
    setRenderKey((prev) => prev + 1);
  }, [apiStatus]);


  const handleLogin = (e) => {
    e.preventDefault();
    setShouldSignIn(true);
  };


  if (!authenticated) {
    return (
      <div className="login"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#E8E8E8', }}>
        
        <Container style={{ width: '400px'}}>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Login</h3>} bordered
                
                  style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '10px', }}>
                  <Form layout='vertical' key={renderKey}>
                    <Form.ControlLabel>Digite seu e-mail</Form.ControlLabel>
                    <InputGroup size='lg' >
                      <InputGroup.Addon>
                        <EmailIcon />
                      </InputGroup.Addon>
                      <Input
                        autoComplete='email'
                        type='email'
                        onChange={(value) => setUsername(value)}
                        defaultValue={''} />
                    </InputGroup>
                    <Form.ControlLabel>Digite sua senha</Form.ControlLabel>
                    <InputGroup size='lg'>
                      <InputGroup.Addon>
                        <FaKey />
                      </InputGroup.Addon>
                      <Input
                        autoComplete='password'
                        type='password'
                        onChange={(value) => setPassword(value)}
                        defaultValue={''}
                      />
                    </InputGroup>
                    <Form.Group>

                      {apiStatus && (
                        <Message type='error' showIcon>{apiStatus}</Message>
                      )}
                      <hr />
                      <ButtonToolbar>
                        <Button size="lg" color="green" appearance="primary" type="button" onClick={handleLogin} >Entrar</Button>
                        <Link onClick to={"/registro"} appearance="link" >Não tem uma conta?</Link>
                      </ButtonToolbar>
                    </Form.Group>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
          <Footer style={{ textAlign: 'center', marginTop: '20px' }}>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item>
                <IconButton
                  href='https://github.com/GabrielEcher'
                  icon={<FaGithub size='' />}
                  size="lg"
                  appearance="subtle"
                  target='_blank' 
                  />
                <IconButton
                  href="https://www.linkedin.com/in/gabriel-m-echer-25a793249/"
                  icon={<LinkedinIcon />}
                  color="blue"
                  appearance="primary"
                  circle
                  target='_blank'
                />
                <a href="https://chamados.diamaju.com.br/" target="_blank" rel="noopener noreferrer">
                  <HelpOutlineIcon width={35} style={{ fontSize: '30' }} />
                </a>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Footer>
        </Container>
      </div>
    )
  } else if (authenticated) {
    return <Navigate to="/home" />
  }
}

export default Login;