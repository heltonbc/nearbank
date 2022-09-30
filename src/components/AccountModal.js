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
                        <Form.Label className="my-1" htmlFor="formCitySelect">
                            Sua cidade
                        </Form.Label>
                        <Form.Control as="select" className="my-1 mr-sm-2" custom="true">
                            <option value="0">Curitiba - PR</option>
                            <option value="1">Florianópolis - SC</option>
                            <option value="2">São Paulo - SP</option>
                            <option value="3">Rio de Janeiro - RJ</option>
                            <option value="4">Brasília - DF</option>
                            <option value="5">Fortaleza - CE</option>
                            <option value="6">Manaus - AM</option>
                            <option value="7">Recife - PE</option>
                            <option value="8">Porto Alegre - RS</option>
                            <option value="9">Belém - PA</option>
                            <option value="10">João Pessoa - PB</option>
                            <option value="11">Macapá - AP</option>
                            <option value="12">Rio Branco - AC</option>
                            <option value="13">Palmas - TO</option>
                            <option value="14">Aracaju - SE</option>
                            <option value="15">São Luís - MA</option>
                            <option value="16">Teresina - PI</option>
                            <option value="17">Goiânia - GO</option>
                            <option value="18">Campo Grande - MS</option>
                            <option value="19">Cuiabá - MT</option>
                            <option value="20">Salvador - BA</option>
                            <option value="21">Belo Horizonte - MG</option>
                            <option value="22">Vitória - ES</option>
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
                <Button variant="success" onClick={handleClose} className="btn-color">
                    Cancelar
                </Button>
                <Button variant="success" onClick={handleSubmit} className="btn-color">
                    Criar Conta
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AccountModal;
