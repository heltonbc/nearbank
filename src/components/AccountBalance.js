import React from "react";
import { Col, Button, Tabs, Tab, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AccountBalance.scss";

const AccountBalance = ({ data }) => {
    const { latestBalance, futureBalance } = data;
    return (
        <>
            <Col xs={12} sm={6} md={6} lg={3} className="mt-lg-5 pt-lg-4">
                <h3 className="my-5">Conta Corrente</h3>
                <h6>
                    <small>
                        <strong>Saldo em conta corrente</strong>
                    </small>
                </h6>
                <h4 className="text-success mb-4">
                    <small>R$ </small>6.500<small>,00</small>
                </h4>
                <h6>
                    <small>
                        <strong>Cheque especial</strong>
                    </small>
                </h6>
                <p className="mb-0">Limite disponível</p>
                <p className="mb-4">R$ 5.000,00</p>

                <Link to="/history">
                    <Button variant="secondary">Ver extrato</Button>
                </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} className="mt-lg-5 pt-lg-5">
                <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latest">
                    <Tab className="scroll" eventKey="latest" title="Últimos Lançamentos">
                        <Table striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestBalance.map(
                                    ({ date, description, value }, key) => (
                                        <tr key={key}>
                                            <td>{date}</td>
                                            <td>{description}</td>
                                            <td>{value}</td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab className="scroll" eventKey="future" title="Lançamentos Futuros">
                        <Table striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {futureBalance.map(
                                    ({ date, description, value }, key) => (
                                        <tr key={key}>
                                            <td>{date}</td>
                                            <td>{description}</td>
                                            <td>{value}</td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>
        </>
    );
};

export default AccountBalance;
