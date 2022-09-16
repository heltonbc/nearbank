import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

const AccountModal = ({ show, handleClose, auth }) => {
    const history = useNavigate();
    const [name, setName] = useState();

    const handleSubmit = () => {
        auth.login(name, "12345", history.push("/dashboard"));
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Abra sua Conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Seu Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Seu Nome"
                            value={name}
                            onChange={e => setName(e.currentTarget.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Seu Email</Form.Label>
                        <Form.Control type="email" placeholder="Seu Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Sua cidade</Form.Label>
                        <Form.Control as="select">
                            <option>Escolha a Cidade</option>
                            <option value="1">Cuiabá - MT</option>
                            <option value="2">Florianópolis - SC</option>
                            <option value="3">São Paulo - SP</option>
                            <option value="3">Curitiba - PR</option>
                        </Form.Control>

                        <Form.Check
                            type="checkbox"
                            id="custom-checkbox"
                            label="Eu li e concordo com os termos de uso"
                            className="m-3"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Criar Conta
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AccountModal;
