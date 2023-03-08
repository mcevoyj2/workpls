import {Alert, Button, Form, Row, Col, Stack, Container} from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import peerlogo from './peerlogo.png';

const Login = () => {

    const {
    loginUser,
    loginError,
    loginInfo,
    updateLoginInfo,
    isLoginLoading,
    } = useContext(AuthContext);

    return ( 
    <>
    <Container className='login-contain'>
    <div className="brandtwo">
        <img src={peerlogo} alt="PeerAcademy"/>

    </div>
    <Form onSubmit={loginUser}>
        <Row style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%"
        }}>
            <Col xs={3}>
            <Stack gap={2}>
                <h2>Login</h2>
                <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => 
                        updateLoginInfo({...loginInfo, email: e.target.value }) 
                    }
                />
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => 
                        updateLoginInfo({...loginInfo, password: e.target.value }) 
                    }
                />
                <Button variant='primary' type='submit'>
                    {isLoginLoading ? 'Loading...' : 'Login'}
                </Button>
                {loginError?.error && (
                <Alert variant='danger'>
                <p>{loginError?.message}</p>
                </Alert> 
                )}
                
            </Stack>
            </Col>
        </Row>
    </Form>
    </Container>
    </> 
    );
};

export default Login;
