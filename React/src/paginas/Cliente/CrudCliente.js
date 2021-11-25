import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";

function CrudCliente(props) {
    //Ligando as coisas com o backend

    const [newCliente, setNewCliente] = useState({ nome: '', telefone: '', email: '',endereco:'' });
    //Nome,Email, Endereço, Numero Contato
    const url = "http://localhost:3001/cliente";

    //Inserindo Produto
    const IncertNewCliente = (e) => {
        e.preventDefault();
        const data = {
            nome: newCliente.nome, telefone: newCliente.telefone, email: newCliente.email,endereco: newCliente.endereco
        }
        axios.post(url, data);
        alert("Cliente cadastrado com sucesso!!")


    }
    const onChange = (e) => {
        e.persist();
        setNewCliente({ ...newCliente, [e.target.name]: e.target.value });
    }
    
    return (
        //-- CRIAÇÂO DO FORMULARIO -- UTILIZANDO O LAYOUT DO REACTSTRAP -- 
        <div style={{paddingTop:"3em"}}>
            <Container className="bg-light border">
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                    style={{ paddingBottom: "1em" }}
                >
                    <Col style={{ backgroundColor: "#32325B" }}></Col>
                    <Col style={{ backgroundColor: "#32325B" }}>
                        <img
                            src={process.env.PUBLIC_URL + "/logo192.png"}
                            width="100%"
                            alt="logo"
                        />
                    </Col>
                    <Col style={{ backgroundColor: "#32325B" }}></Col>
                </Row>
                <h1>Cadastro de Cliente</h1>
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                    style={{ paddingBottom: "1em" }}
                >
                    <Col></Col>
                    <Col>
                        <Row
                            md="1"
                            sm="2"
                            xs="1"
                            style={{ paddingBottom: "1em" }}
                        >
                            <Form onSubmit={IncertNewCliente}>
                                <Col>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            id="nome"
                                            name="nome"
                                            placeholder=" Nome do Cliente"
                                            type="text"
                                            value={newCliente.nome} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="email"
                                            name="email"
                                            placeholder="E-mail para contato"
                                            type="email"
                                            value={newCliente.email} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="endereco"
                                            name="endereco"
                                            placeholder="Endereço ( Rua / N° )"
                                            type="text"
                                            value={newCliente.endereco} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="telefone"
                                            name="telefone"
                                            placeholder="Numero de Telefone"
                                            type="text"
                                            value={newCliente.telefone} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>

                                    <Button style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={""}>
                                        Cadastrar
                                    </Button>
                                </Col>
                            </Form>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
export default CrudCliente;