import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";

const AccountModal = ({ show, handleClose, auth }) => {
    const navigate = useNavigate();
    const [name, setName] = useState();

    const handleSubmit = () => {
        auth.login(name, "12345", navigate("/dashboard"));
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Abra sua conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Seu nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Seu nome"
                            value={name}
                            onChange={e => setName(e.currentTarget.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Seu email</Form.Label>
                        <Form.Control type="email" placeholder="Seu email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="my-1 mr-2" htmlFor="formCitySelect">
                            Preference
                        </Form.Label>
                        <Form.Control as="select" className="my-1 mr-sm-2" custom="true">
                            <option value="0">Florianópolis - SC</option>
                            <option value="1">Curitiba - PR</option>
                            <option value="2">São Paulo - SP</option>
                            <option value="3">Rio de Janeiro - RJ</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Eu li e concordo com os termos de uso."
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
