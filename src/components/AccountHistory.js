import React from "react";
import { Col, Table } from "react-bootstrap";
import "./AccountBalance.scss";
/*  */
const AccountHistory = ({ data }) => {
    const { history } = data;

    return (
        <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
            <h3 className="mt-4">Extrato de conta corrente</h3>
            <Table striped borderless>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                    <tr>
                        <th>17/07</th>
                        <th>Saldo inicial do Período</th>
                        <th>6.500,00</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((entry, key) => (
                        <tr key={key}>
                            <td>{entry.date}</td>
                            <td>{entry.description}</td>
                            <td>{entry.value}</td>
                        </tr>
                    ))}
                </tbody>
                <thead>
                    <tr>
                        <th>22/07</th>
                        <th>Saldo final do Período</th>
                        <th>6.396,00</th>
                    </tr>
                </thead>
            </Table>
        </Col>
    );
};

export default AccountHistory;
