import React from "react";
import { Button, Col, Tab, Table, Tabs } from "react-bootstrap";

const AccountBalance = ({ data }) => {
    const { latestBalance, futureBalance } = data;
    return (
        <>
            <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
                <h2 className="my-5">Conta corrente</h2>
                <h6>
                    <strong>Saldo em conta corrente</strong>
                </h6>
                <h4 className="mb-4 text-success">
                    <small>R$</small> 3.450<small>,00</small>
                </h4>
                <h6 className="mb-3">
                    <strong>Cheque Especial</strong>
                </h6>
                <h6 className="mb-0">Limite disponível</h6>
                <h6>R$ 5.000,00</h6>
                <Button className="mt-4" variant="secondary" size="sm">
                    Ver Extrato
                </Button>
            </Col>

            <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
                <Tabs
                    className="mt-5 pt-lg-4"
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                >
                    <Tab eventKey="home" title="Últimos lançamentos">
                        <Table borderless hover striped>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th className="text-end">Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestBalance.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td className="text-end">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="profile" title="Lançamentos futuros">
                        <Table borderless hover striped>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th className="text-end">Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {futureBalance.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td className="text-end">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>
        </>
    );
};

export default AccountBalance;
