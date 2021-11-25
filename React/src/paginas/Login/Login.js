import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, Form, Label, Input, InputGroup, Container
} from 'reactstrap';
/* import axios from 'axios'; */

function LoginFuncionarioBar(props) {
    const [newLogin,setLogin] = useState({email:'', senha:''});

    const onChange = (e) => {
        e.persist();
        setLogin({ ...newLogin, [e.target.name]: e.target.value });
    }

    const Login = async (e) =>{
        const url = "http://localhost:3001/login"
          const result = await axios.post(url,newLogin).then(res =>{
            return res.data;
        }).catch(err =>{
            return false;
        })
         if(result.token){
            localStorage.setItem("token",result.token);
            window.location.href = '/'
        }  
         
    }


    return (
        <div style={{ paddingTop: "5em" }}>
            <Container className="bg-light "
                fluid>
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                >
                    <Col className="bg-light "></Col>
                    <Col className="bg-light ">
                        <Card>
                            <CardBody>
                            <Row
                                md="3"
                                sm="2"
                                xs="1"
                                style={{paddingBottom:"1em"}}
                            >
                                <Col style={{backgroundColor:"#32325B"}}></Col>
                                <Col style={{backgroundColor:"#32325B"}}>
                                    <img
                                        src={process.env.PUBLIC_URL + "/logo192.png"}
                                        width="100%"
                                        alt="logo"
                                    />
                                </Col>
                                <Col style={{backgroundColor:"#32325B"}}></Col>
                            </Row>
                                <CardTitle tag="h5">Login</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Funcionarios</CardSubtitle>
                                <Form>
                                    <Row
                                        md="1"
                                        sm="2"
                                        xs="1"
                                    >
                                        <Col className="bg-light" style={{ paddingBottom: "1em" }}>
                                            <InputGroup >
                                                {/* <Label for="email" style={{ paddingRight: 15 }}>E-Mail :</Label> */}
                                                <Input type="email" name="email" id="email" placeholder="Digite seu email de contato"  value={newLogin.email} onChange={onChange}  />
                                            </InputGroup>
                                        </Col>
                                        <Col className="bg-light" style={{ paddingBottom: "1em" }}>
                                            <InputGroup >
                                                {/* <Label for="password" style={{ paddingRight: 15 }}>Password :</Label> */}
                                                <Input type="senha" name="senha" id="senha" placeholder="Digite uma senha de acesso"  value={newLogin.senha} onChange={onChange}  />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </Form>
                                <Button className="teste" style={{ background: "#3399ff" }} type="button" className="btn btn-secondary mb-1" block onClick={() => Login() } >Login</Button>
                                <hr></hr>
                                <Row
                                    md="2"
                                    sm="2"
                                    xs="1"
                                >
                                    <Col className="bg-light" /* style={{paddingBottom:"1em"}} */>
                                        <p>Ainda não possui cadastro?cadastre-se aqui</p>
                                    </Col>
                                    <Col className="bg-light" /* style={{paddingBottom:"1em"}} */>
                                        <Button href="/crudFuncionario" className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block /* onClick={JoinPage} */>Register</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="bg-light "></Col>
                </Row>
            </Container>
        </div>
    )
}
export default LoginFuncionarioBar;