import React from "react";
import { Row, Col, Card, Button, Image, Form } from "react-bootstrap";
import logo from "../assets/logoNearbankMobile.png";
import logoDesktop from "../assets/logoNearbankDesktop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ children, onClick }) => (
    <Card className="text-center text-light hero">
        <Row>
            <Col lg className="text-lg-end mt-5">
                <Image className="d-lg-none" src={logo} />
                <Image className="d-none d-lg-inline-block" src={logoDesktop} />
            </Col>
            <Col className="d-flex justify-content-center text-lg-center mt-5">
                <Card className="card-reg">
                    <Card.Body>
                        <Card.Text>
                            <h5>Peça sua conta e cartão de crédito do nearBank</h5>
                        </Card.Text>
                        <Form.Group>
                            <Form.Control
                                className="card-cpf my-3"
                                type="string"
                                placeholder="Informe seu CPF"
                            />
                        </Form.Group>
                        <Button
                            className="border"
                            variant="outline-light"
                            onClick={onClick}
                        >
                            {children}
                            <FontAwesomeIcon
                                className="ps-5"
                                icon={faArrowRight}
                                size="1x"
                            />
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Card>
);

export default Hero;
