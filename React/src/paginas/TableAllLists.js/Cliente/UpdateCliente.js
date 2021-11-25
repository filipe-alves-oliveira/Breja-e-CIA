import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

function UpdateCliente(props) {
    //Ligando as coisas com o backend
    const [clientes, setListClientes] = useState([]);
    //Alterando  Produto
    const UpgradeCliente = async (id) => {
        const url = "http://localhost:3001/cliente/" + props.match.params.id;
        console.log(id)
        await axios({
            method:"PUT",
            url:url,
            headers:{
                Accept: "application/json",
            },
            data: clientes
        }).then((response)=>{
        }).catch((e)=>{
        })
    }
    const onChange = (e) => {
        e.persist();
        setListClientes({ ...clientes, [e.target.name]: e.target.value });
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
                <h1>Alterar Cliente</h1>
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
                            <Form onSubmit={UpgradeCliente(clientes._id)}>
                            <Col>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            id="nome"
                                            name="nome"
                                            placeholder=" Nome do Cliente"
                                            type="text"
                                            value={clientes.nome} onChange={onChange}
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
                                            value={clientes.email} onChange={onChange}
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
                                            value={clientes.endereco} onChange={onChange}
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
                                            value={clientes.telefone} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>

                                    <Button href="/ListAlltables"  style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => UpgradeCliente(props.match.params.id)}>
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
export default UpdateCliente;