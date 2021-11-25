import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Table, Row, Col } from 'reactstrap';

function ListAllFuncinarios(props) {

    const [update, setUpdate] = useState(null);
    const [funcionarios, setListFuncionarios] = useState([]);
    useEffect(async () => {
        const url = "http://localhost:3001/funcionario";
        const data = await axios.get(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data) {
            setListFuncionarios(data);
        }
    }, [])

    const DeleteFuncionario = async (id) => {
        const url = "http://localhost:3001/produto/" + id;
        const data = await axios.delete(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        let index = null
        funcionarios.forEach((funcio, posicao) => {
            if (funcio._id === id) {
                index = posicao;
            }
        });
        const tempFuncionarios = funcionarios;
        tempFuncionarios.splice(index, 1)
        setListFuncionarios(tempFuncionarios);
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
                            Email
                        </th>
                        <th>
                            senha
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {funcionarios.map(funcionarios => {
                        return (
                            <tr key={funcionarios.nome}>
                                <td ><p>{funcionarios.nome}</p></td>
                                <td >{funcionarios.email}</td>
                                <td >{funcionarios.senha}</td>
                                <td ><Button onClick={() => DeleteFuncionario(funcionarios._id)}>Delete</Button></td>
                                <td ><Button onClick={ ()=> window.location = "/UpdateFuncionarios/" + funcionarios._id}>Editar</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container >
    )
}
export default ListAllFuncinarios;