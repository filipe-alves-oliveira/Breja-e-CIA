import React from "react";
import ListAllProdutos from "./Produtos/TableProdutos";
/* import ListAllVendas from "./Vendas/TableVendas"; */
import ListAllCliente from "./Cliente/TableCliente";
import ListAllFuncinarios from "./Funcionario/TableFuncionario";
import { Container, Table, Row, Col } from 'reactstrap';
function ListAlltables(props) {
    return (

        <div style={{ paddingTop: "3em" }}>
            <Row
                md="1"
                sm="2"
                xs="1"
                style={{ paddingBottom: "1em" }}
            >
                {/* <Col >
                    <ListAllVendas></ListAllVendas>
                </Col> */}
                <Col>
                    <ListAllProdutos></ListAllProdutos>
                </Col>
                <Col>
                    <ListAllCliente></ListAllCliente>
                </Col>
                <Col>
                    <ListAllFuncinarios></ListAllFuncinarios>
                </Col>
            </Row>
        </div>
    )
}
export default ListAlltables;