import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

function UpdateProdutos(props) {
    //Ligando as coisas com o backend
    const [produtos, setListProdutos] = useState([]);
    //Alterando  Produto
    const UpgradeProduto = async (id) => {
        const url = "http://localhost:3001/produto/" + props.match.params.id;
        console.log(id)
        await axios({
            method:"PUT",
            url:url,
            headers:{
                Accept: "application/json",
            },
            data: produtos
        }).then((response)=>{
            console.log(response)
            
        }).catch((e)=>{
            console.log(e)
        })
    }
    const onChange = (e) => {
        e.persist();
        setListProdutos({ ...produtos, [e.target.name]: e.target.value });
    }
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
                <h1>Alterar Produto</h1>
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
                            <Form onSubmit={UpgradeProduto(produtos._id)}>
                                <Col>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            name="nome"
                                            type="text"
                                            id="nome"
                                            placeholder=" Nome do Produto"
                                            value={produtos.nome} onChange={onChange}
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
                                            value={produtos.preco} onChange={onChange}
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
                                            value={produtos.quantEstq} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>
                                    <Button href="/ListAlltables" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => UpgradeProduto(props.match.params.id)} >
                                        Alterar
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
export default UpdateProdutos;