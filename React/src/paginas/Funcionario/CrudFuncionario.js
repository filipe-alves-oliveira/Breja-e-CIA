import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

function CrudFuncionario(props) {
    //Ligando as coisas com o backend

    const [newFuncionario, setNewFuncionario] = useState({ nome: '', email: '', senha: '' });
    //NOME,PREÇO UN, UNIDADE EM ESTOQUE
    const url = "http://localhost:3001/funcionario";

    //Inserindo Produto
    const IncertNewFuncionario = (e) => {
        e.preventDefault();
        const data = {
            nome: newFuncionario.nome, email: newFuncionario.email, senha: newFuncionario.senha
        }
        axios.post(url, data);
        alert("Funcionario cadastrado com sucesso!! Bem vindo a empresa")


    }
    const onChange = (e) => {
        e.persist();
        setNewFuncionario({ ...newFuncionario, [e.target.name]: e.target.value });
    }
    //Nome,Email, Endereço, Numero Contato
    return (
        //-- CRIAÇÂO DO FORMULARIO -- UTILIZANDO O LAYOUT DO REACTSTRAP -- 
        <div style={{ paddingTop: "3em" }}>
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
                <h1>Cadastro de Funcionario</h1>
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
                            <Form onSubmit={IncertNewFuncionario}>
                                <Col>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            id="nome"
                                            name="nome"
                                            placeholder=" Nome do Funcionario"
                                            type="text"
                                            value={newFuncionario.nome} onChange={onChange}
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
                                            value={newFuncionario.email} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            id="senha"
                                            name="senha"
                                            placeholder="Digite uma senha"
                                            type="password"
                                            value={newFuncionario.senha} onChange={onChange}
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
export default CrudFuncionario;