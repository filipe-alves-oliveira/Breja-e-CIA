import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Table, Row, Col } from 'reactstrap';

function ListAllVendas(props) {
    const [update, setUpdate] = useState(null);
    const [vendas, setListVendas] = useState([]);
    useEffect(async () => {
        const url = "http://localhost:3001/vendas";
        const data = await axios.get(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data) {
            setListVendas(data);
        }
        console.log(data)
    }, [])

    const DeleteVenda = async (id) => {
        const url = "http://localhost:3001/vendas/" + id;
        const data = await axios.delete(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        let index = null
        vendas.forEach((vend, posicao) => {
            if (vend._id === id) {
                index = posicao;
            }
        });
        const tempVendas = vendas;
        tempVendas.splice(index, 1)
        console.log(tempVendas)
        setListVendas(tempVendas);
        setUpdate(new Date())

    }
    return (
        <Container>
            <h1>Vendas cadastradas</h1>
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>
                            Cliente
                        </th>
                        <th>
                            Funcionario
                        </th>
                        <th>
                            Produto
                        </th>
                        <th>
                            Data da venda
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map(vendas => {
                        return (
                            <tr key={vendas.nome}>
                                <td ><p>{vendas.cliente}</p></td>
                                <td >{vendas.fincionario}</td>
                                <td >{vendas.produto}</td>
                                <td >{vendas.createdAt}</td>
                                <td ><Button onClick={() => DeleteVenda(vendas._id)}>Delete</Button></td>
                                <td ><Button href="/UpdateProdutos">Editar</Button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default ListAllVendas;