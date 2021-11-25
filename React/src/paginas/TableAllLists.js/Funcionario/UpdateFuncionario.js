import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

function UpdateFuncionarios(props) {
    //Ligando as coisas com o backend
    const [funcionario, setListFuncionario] = useState([]);
    //Alterando  Produto
    const UpgradeFuncionario = async (id) => {
        const url = "http://localhost:3001/funcionario/" + props.match.params.id;
        console.log(id)
        await axios({
            method:"PUT",
            url:url,
            headers:{
                Accept: "application/json",
            },
            data: funcionario
        }).then((response)=>{
        }).catch((e)=>{
        })
    }
    const onChange = (e) => {
        e.persist();
        setListFuncionario({ ...funcionario, [e.target.name]: e.target.value });
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
                            <Form onSubmit={UpgradeFuncionario(funcionario._id)}>
                            <Col>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            id="nome"
                                            name="nome"
                                            placeholder=" Nome do Funcionario"
                                            type="text"
                                            value={funcionario.nome} onChange={onChange}
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
                                            value={funcionario.email} onChange={onChange}
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
                                            value={funcionario.senha} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col>
                                    <Button href="/ListAlltables" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => UpgradeFuncionario(props.match.params.id)}>
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
export default UpdateFuncionarios;