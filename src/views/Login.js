import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";
import "./Login.scss";

const Login = ({ text, auth }) => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const navigate = useNavigate();

    const handleSubmit = () => {
        auth.login(name, account, navigate("/dashboard"));
    };

    return (
        <section className="login">
            <div className="login__container">
                <Col xs={12} className="text-center text-light">
                    <Row xs={12} lg={12}>
                        <Image src={logo} className="mb-5" />
                    </Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className="lead">
                                <strong>Nome e Sobrenome</strong>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                value={name || ""}
                                onChange={e => setName(e.currentTarget.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicAccount">
                            <Form.Label className="lead">
                                <strong>Número da Conta</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                value={account || ""}
                                onChange={e => setAccount(e.currentTarget.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="lead">
                                <strong>Senha</strong>
                            </Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Button
                            className="mt-3"
                            variant="success"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Entrar
                        </Button>
                    </Form>
                </Col>
            </div>
        </section>
    );
};
export default Login;
