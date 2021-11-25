import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Autocomplete, TextField } from "@material-ui/core"

function CrudVenda(props) {
    //CLIENTE,FUNCIONARIO, PRODUTO
    //Ligando as coisas com o backend

    const [clientes, setClientes] = useState([]);
    const [clienteValue, setClienteValue] = useState("")
    const [inputClientes, setInputCliente] = useState("")

    const [funcionarios, setFuncionarios] = useState([])
    const [funcionarioValue, setfuncionarioValue] = useState("")
    const [inputFuncionarios, setinputFuncionarios] = useState("")

    const [produtos, setProdutos] = useState([])
    const [produtoValue, setprodutoValue] = useState("")
    const [inputProdutos, setinputProdutos] = useState("")

    useEffect(async () => {
        const url = "http://localhost:3001/cliente";
        const data = await axios.get(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data) {
            const newData = []
            data.forEach(d => {
                newData.push({label: d.nome, _id:d._id} )
            });
            setClientes(newData);
        }

        const url2 = "http://localhost:3001/funcionario";
        const data2 = await axios.get(url2).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data2) {
            const newData = []
            data2.forEach(d => {
                newData.push({label: d.nome, _id:d._id} )
            });
            setFuncionarios(newData);
        }

        const url3 = "http://localhost:3001/produto";
        const data3 = await axios.get(url3).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data3) {
            const newData = []
            data3.forEach(d => {
                newData.push({label: d.nome, _id:d._id} )
            });
            setProdutos(newData);
        }

    }, [])

    const handleSubmit = () => {
        const quantidade = document.getElementById("quantidade")
        const data = {idCliente:clienteValue._id,idFuncionario:funcionarioValue._id, idProduto: produtoValue._id, quantidade: quantidade.value }
        const url = "http://localhost:3001/venda"
        axios.post(url, data);
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
                <h1>Cadastro de Vendas</h1>
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                    style={{ paddingBottom: "1em" }}
                >
                    <Col>
                        <img
                            src={process.env.PUBLIC_URL + "/logo512.png"}
                            width="50%"
                            alt="logo"
                        />
                    </Col>
                    <Col>
                        <Row
                            md="1"
                            sm="2"
                            xs="1"
                            style={{ paddingBottom: "1em" }}
                        >
                            <Form >
                                <Col>
                                    <Autocomplete 
                                    value={clienteValue}
                                    onChange={(event, newValue) => {
                                        setClienteValue(newValue);
                                      }}
                                      inputValue={inputClientes}
                                      onInputChange={(event, newInputValue) => {
                                        setInputCliente(newInputValue);
                                      }}
                                      id="controllable-states-demo"
                                      options={clientes}
                                      sx={{ width: 300 }}
                                      renderInput={(params) => <TextField {...params} label="Cliente" />}
                                    />
                                </Col>
                                <Col>
                                    <FormGroup>
                                    <Autocomplete 
                                    value={produtoValue}
                                    onChange={(event, newValue) => {
                                        setprodutoValue(newValue);
                                      }}
                                      inputValue={inputProdutos}
                                      onInputChange={(event, newInputValue) => {
                                        setinputProdutos(newInputValue);
                                      }}
                                      id="controllable-states"
                                      options={produtos}
                                      sx={{ width: 300 }}
                                      renderInput={(params) => <TextField {...params} label="Produto" />}
                                    />
                                    </FormGroup></Col>
                                <Col>
                                    <FormGroup>
                                    <Autocomplete 
                                    value={funcionarioValue}
                                    onChange={(event, newValue) => {
                                        setfuncionarioValue(newValue);
                                      }}
                                      inputValue={inputFuncionarios}
                                      onInputChange={(event, newInputValue) => {
                                        setinputFuncionarios(newInputValue);
                                      }}
                                      id="controllable-states"
                                      options={funcionarios}
                                      sx={{ width: 300 }}
                                      renderInput={(params) => <TextField {...params} label="Funcionarios" />}
                                    />
                                    </FormGroup></Col>
                                <Col>
                                <Col>
                                    <FormGroup>
                                    <TextField
                                    sx={{ width: 300 }}
                                    label="Quantidade"
                                    id="quantidade"
                                    ></TextField>
                                    </FormGroup></Col>
                                    <Button onClick={() => handleSubmit()}>
                                        Cadastrar
                                    </Button>
                                </Col>
                            </Form>
                        </Row>
                    </Col>
                    <Col>
                        <img
                            src={process.env.PUBLIC_URL + "/logo512.png"}
                            width="50%"
                            alt="logo"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CrudVenda;