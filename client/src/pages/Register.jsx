import { useContext } from 'react';
import {Alert, Button, Form, Row, Col, Stack, Container} from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import peerlogo from './peerlogo.png';
const Register = () => {

    const { registerInfo,
        updateRegisterInfo, 
        registerUser, 
        registerError,
        isRegisterLoading, } 
        = useContext(AuthContext);

    return ( 
    <>
    <Container className='register-contain'>
    <div className="brandtwo">
        <img src={peerlogo} alt="PeerAcademy"/>
    </div>
    <Form className="formsize" onSubmit={registerUser}>
        <Row style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%"
        }}>
            <Col xs={3}>
            <Stack gap={2}>
                <h2>Register</h2>
                <Form.Control type="text" placeholder="Username" 
                onChange={(e) => 
                    updateRegisterInfo({
                        ...registerInfo, name: e.target.value })
                }
                />
                <Form.Control type="email" placeholder="Email"
                onChange={(e) => 
                    updateRegisterInfo({
                        ...registerInfo, email: e.target.value })
                }
                />
                <Form.Control 
                type="sdnumber" 
                placeholder="Student Number">
                </Form.Control>
                <Form.Control type="password" placeholder="Password" 
                onChange={(e) => 
                    updateRegisterInfo({
                        ...registerInfo, password: e.target.value })
                }
                />
                <Button variant='primary' type='submit'>
                    {isRegisterLoading ? 'Loading...' : 'Register'}
                </Button>
                {
                    registerError?.error &&
                    <Alert variant='danger'>
                    <p>{registerError?.message}</p>
                    </Alert>
                }
            </Stack>
            </Col>
        </Row>
    </Form>
    </Container>
    </> 
    );
};

export default Register;
