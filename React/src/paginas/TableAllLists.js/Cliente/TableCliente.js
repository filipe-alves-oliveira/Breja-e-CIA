import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Table, Row, Col } from 'reactstrap';

function ListAllCliente(props) {

    const [update, setUpdate] = useState(null);
    const [cliente, setListCliente] = useState([]);
    useEffect(async () => {
        const url = "http://localhost:3001/cliente";
        const data = await axios.get(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data) {
            setListCliente(data);
        }
    }, [])

    const DeleteCliente = async (id) => {
        const url = "http://localhost:3001/cliente/" + id;
        const data = await axios.delete(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        let index = null
        cliente.forEach((clie, posicao) => {
            if (clie._id === id) {
                index = posicao;
            }
        });
        const tempClie = cliente;
        tempClie.splice(index, 1)
        setListCliente(tempClie);
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
                            E-mail
                        </th>
                        <th>
                            Telefone
                        </th>
                        <th>
                            Endereço
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cliente.map(cliente => {
                        return (
                            <tr key={cliente.nome}>
                                <td ><p>{cliente.nome}</p></td>
                                <td ><p>{cliente.email}</p></td>
                                <td >{cliente.telefone}</td>
                                <td >{cliente.endereco}</td>
                                <td ><Button onClick={() => DeleteCliente(cliente._id)}>Delete</Button></td>
                                <td ><Button onClick={ ()=> window.location = "/UpdateCliente/" + cliente._id}>Editar</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container >
    )
}
export default ListAllCliente;