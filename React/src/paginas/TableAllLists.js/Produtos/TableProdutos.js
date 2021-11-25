import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Table, Row, Col } from 'reactstrap';

function ListAllProdutos(props) {

    const [update, setUpdate] = useState(null);
    const [produtos, setListProdutos] = useState([]);
    useEffect(async () => {
        const url = "http://localhost:3001/produto";
        const data = await axios.get(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data) {
            setListProdutos(data);
        }
        console.log(data)
    }, [])

    const DeleteProduto = async (id) => {
        const url = "http://localhost:3001/produto/" + id;
        const data = await axios.delete(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        let index = null
        produtos.forEach((prod, posicao) => {
            if (prod._id === id) {
                index = posicao;
            }
        });
        const tempProdutos = produtos;
        tempProdutos.splice(index, 1)
        console.log(tempProdutos)
        setListProdutos(tempProdutos);
        setUpdate(new Date())

    }
    return (
        <Container>
            <h1>Produtos cadastrados</h1>
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Preço
                        </th>
                        <th>
                            Quantidade em estoque
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produtos => {
                        return (
                            <tr key={produtos.nome}>
                                <td ><p>{produtos.nome}</p></td>
                                <td >R$ {produtos.preco}</td>
                                <td >{produtos.quantEstq} Un</td>
                                <td ><Button onClick={() => DeleteProduto(produtos._id)}>Delete</Button></td>
                                <td ><Button onClick={ ()=> window.location = "/UpdateProdutos/" + produtos._id}>Editar</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container >
    )
}
export default ListAllProdutos;