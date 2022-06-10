import React from "react";
import { Container, Row, Col, Button, Table, Tab, Tabs, Sonnet } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.scss";

const Dashboard = () => (
    <Container className="dashboard py-5">
        <Row>
            <Col xs={12} lg={4}>
                <Row className="d-flex align-items-center mb-5">
                    <Col xs={3}>
                        <span className="dashboard__user-avatar">
                            <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                            <FontAwesomeIcon
                                className="dashboard__user-icon"
                                icon={faUser}
                                size="3x"
                                color="#7c7d7d"
                            />
                        </span>
                    </Col>

                    <Col xs={9}>
                        <h2>Helton Cunha</h2>
                        <p className="text-muted">ag: 1234 c/c: 4321-5</p>
                    </Col>
                </Row>
                <div className="d-grid gap-2">
                    <Button
                        className="dashboard__button dashboard__button--active text-start"
                        variant="link"
                        size="lg"
                    >
                        Minha Conta
                    </Button>
                    <Button
                        className="dashboard__button text-start"
                        variant="link"
                        size="lg"
                    >
                        Pagamento
                    </Button>
                    <Button
                        className="dashboard__button text-start"
                        variant="link"
                        size="lg"
                    >
                        Extrato
                    </Button>
                </div>
            </Col>

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

            <Col xs={12} lg={5} className="mt-5">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Últimos lançamentos"></Tab>
                    <Tab eventKey="profile" title="Lançamentos futuros"></Tab>
                </Tabs>

                <Table borderless hover striped>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th className="text-end">Valor (R$)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>22/7</td>
                            <td>SAQUE 24H 012345</td>
                            <td className="text-end">123,00</td>
                        </tr>
                        <tr>
                            <td>21/07</td>
                            <td>SUPERMERCADO 2312332</td>
                            <td className="text-end">123,00</td>
                        </tr>
                        <tr>
                            <td>21/07</td>
                            <td>ESTACIONAMENTO 123234</td>
                            <td className="text-end">123,00</td>
                        </tr>
                        <tr>
                            <td>21/07</td>
                            <td>PAGAMENTO ALUGUEL 123432</td>
                            <td className="text-end">123,00</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
);

export default Dashboard;
