import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

function CrudProdutos(props) {
    //Ligando as coisas com o backend

    const [newProduto, setNewProduto] = useState({ nome: '', preco: '', quantEstq: '' });
    //NOME,PREÇO UN, UNIDADE EM ESTOQUE
    const url = "http://localhost:3001/produto";

    //Inserindo Produto
    const IncertNewProduto = (e) => {
        e.preventDefault();
        const data = {
            nome: newProduto.nome, preco: newProduto.preco, quantEstq: newProduto.quantEstq
        }
        axios.post(url, data);
        alert("Produto cadastrado com sucesso!!")


    }
    const onChange = (e) => {
        e.persist();
        setNewProduto({ ...newProduto, [e.target.name]: e.target.value });
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
                <h1>Cadastro de Produtos</h1>
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                    style={{ paddingBottom: "5em" }}
                >
                    <Col></Col>
                    <Col>
                        <Row
                            md="1"
                            sm="2"
                            xs="1"
                            style={{ paddingBottom: "1em" }}
                        >
                            <Form onSubmit={IncertNewProduto}>
                                <Col>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            name="nome"
                                            type="text"
                                            id="nome"
                                            placeholder=" Nome do Produto"
                                            value={newProduto.nome} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="preco"
                                            name="preco"
                                            placeholder="Preço Un"
                                            type="number"
                                            value={newProduto.preco} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="quantEstq"
                                            name="quantEstq"
                                            placeholder="Qtd Estoque"
                                            type="number"
                                            value={newProduto.quantEstq} onChange={onChange}
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
export default CrudProdutos;