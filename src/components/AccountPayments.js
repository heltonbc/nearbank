import React from "react";
import { Col, Button, Tabs, Tab, Form, Row } from "react-bootstrap";
import "./AccountModal.scss";

const AccountPayments = () => (
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
        <h3 className="mt-4">Pagamentos</h3>
        <Tabs className="pt-lg-5" defaultActiveKey="boleto">
            <Tab eventKey="boleto" title="Boleto">
                <Form>
                    <Form.Group controlId="formBarCode" className="my-5">
                        <Form.Label>Código de barras</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insira o código de barras"
                        />
                    </Form.Group>
                    <Form.Group controlId="formPaymentType" className="mb-5">
                        <Form.Label>Forma de Pagamento</Form.Label>
                        <div className="d-flex">
                            <Form.Check
                                type="radio"
                                id="debit"
                                label="Débito em Conta Corrente"
                                name="paymentType"
                            />
                            <Form.Check
                                type="radio"
                                id="credit"
                                className="ms-4"
                                label="Cartão de Crédito"
                                name="paymentType"
                            />
                        </div>
                    </Form.Group>
                    <Button variant="success" className="btn-color">
                        Continuar
                    </Button>
                </Form>
            </Tab>
            <Tab eventKey="transfer" title="Transferência">
                <Form className="mt-5 py-3">
                    <Row>
                        <Col xs={11} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Banco</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>

                        <Col xs={11} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Agência</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>

                        <Col xs={11} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>C.Corrente</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={11} lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Valor da Transferência</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>

                        <Col xs={11} lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Identificação nos extratos</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="success" type="submit" className="mt-5 btn-color">
                        Continuar
                    </Button>
                </Form>
            </Tab>
        </Tabs>
    </Col>
);

export default AccountPayments;
