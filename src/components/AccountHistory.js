import React from "react";
import { Col, Table } from "react-bootstrap";

const AccountHistory = ({ data }) => {
    const { history } = data;

    return (
        <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
            <h3 className="mt-4">Extrato de Conta Corrente</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor (R$)</th>
                        <th className="text-end">Saldo (R$)</th>
                    </tr>
                </thead>

                <tbody>
                    {history.map(({ date, description, value, balance }) => (
                        <tr>
                            <td>{date}</td>
                            <td>{description}</td>
                            <td>{value}</td>
                            <td className="text-end">{balance}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>
    );
};

export default AccountHistory;
