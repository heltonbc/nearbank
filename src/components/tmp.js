import React from "react";
import { Col, Table } from "react-bootstrap";

const AccountHistory = ({ data }) => {
    const { history } = data;

    return (
        <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
            <h3 className="mt-4">Extrato de conta corrente</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor</th>
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
            </Table>
        </Col>
    );


    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
            <h3 className="mt-4">Extrato de conta corrente</h3>
            <Table>
                <tbody>
                    {history.map((entry, key) => (
                        <tr key={key}>
                            <td>
                                <h2>{entry}</h2>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>