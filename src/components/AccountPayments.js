import React from "react";
import { Col, Button, Tabs, Tab, Form, Row, Card } from "react-bootstrap";
import "./AccountModal.scss";
import "./AccountPayments.scss";
import barcodeicon from "../assets/icons/barcodeicon.svg";
import deposit from "../assets/icons/deposit.svg";
import receive from "../assets/icons/receive.svg";
import pixcopypaste from "../assets/icons/pixcopypaste.svg";
import pixmini from "../assets/icons/pixmini.svg";
import qrcode from "../assets/icons/qrcode.svg";
import transfer from "../assets/icons/transfer.svg";
import { Link } from "react-router-dom";
/*  */
const AccountPayments = () => (
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
        <h3 className="mt-4">Pagamentos</h3>
        <Tabs className="pt-lg-5" defaultActiveKey="pix">
            <Tab eventKey="pix" title="Pix">
                <Form>
                    <Form.Group controlId="formBarCode" className="my-5">
                        <Form.Label className="mb-4">
                            Digite a chave Pix <img src={pixmini} alt="pixmini" />{" "}
                        </Form.Label>
                        <Form.Control type="number" placeholder="Digite a chave Pix" />
                    </Form.Group>
                    <Form.Group controlId="pix" className="mb-5">
                        <Col>
                            <Row>
                                <Card.Title>Enviar</Card.Title>

                                <Link className="my-3" to="#">
                                    <img
                                        src={transfer}
                                        className="d-inline-block align-top logo-height"
                                        alt="transfer"
                                    />
                                    <img
                                        src={pixcopypaste}
                                        className="d-inline-block align-top logo-height"
                                        alt="pixcopypaste"
                                    />
                                    <img
                                        src={qrcode}
                                        className="d-inline-block align-top logo-height"
                                        alt="qrcode"
                                    />
                                </Link>
                            </Row>

                            <Row className="my-3">
                                <Card.Title>Receber</Card.Title>

                                <Link className="my-3" to="#">
                                    <img
                                        src={receive}
                                        className="d-inline-block align-top logo-height"
                                        alt="receive"
                                    />
                                    <img
                                        src={deposit}
                                        className="d-inline-block align-top logo-height"
                                        alt="deposit"
                                    />
                                </Link>
                            </Row>
                        </Col>

                        <Form.Label>Forma de Pagamento</Form.Label>
                        <div className="d-flex">
                            <Form.Check
                                type="radio"
                                id="now"
                                label="Pagar agora"
                                name="paymentType"
                            />
                            <Form.Check
                                type="radio"
                                id="agendar"
                                className="ms-4"
                                label="Agendar pagamento"
                                name="paymentType"
                            />
                        </div>
                    </Form.Group>

                    <Button variant="success" className="btn-color">
                        Continuar
                    </Button>
                </Form>
            </Tab>
            <Tab eventKey="boleto" title="Boleto">
                <Form>
                    <Form.Group controlId="formBarCode" className="my-5">
                        <Form.Label className="mb-4">
                            Código de barras <img src={barcodeicon} alt="barcodeicon" />{" "}
                        </Form.Label>
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
                <Form className="mt-4 py-4">
                    <Row>
                        <Form.Label className="mb-5">
                            Transferência Bancária entre contas{" "}
                            <img src={transfer} alt="barcodeicon" />{" "}
                        </Form.Label>
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
