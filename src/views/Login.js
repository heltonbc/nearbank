import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../assets/MAGbank.svg";
import "./Login.scss";

const Login = () => (
    <section className="login">
        <div className="login__container">
            <Row>
                <Col className="text-center text-light">
                    <Image src={logo} className="mb-5" />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="lead">Número da Conta</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="lead">Senha</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Link to="/dashboard">
                            <Button className="mt-3" variant="success" type="submit">
                                Criar Conta
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    </section>
);

export default Login;
