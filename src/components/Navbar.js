import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Navbar,
    Nav,
    Container,
    ButtonGroup,
    Button,
    NavDropdown,
    Form,
} from "react-bootstrap";
import "./Navbar.scss";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ handleCreatAcc, logged, auth }) => {
    const history = useNavigate();

    const handleClick = () => {
        auth.logout(() => history.push("/"));
    };

    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/">
                        <img
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="Magbank logo"
                        />
                    </Link>
                </Navbar.Brand>
                {logged && (
                    <>
                        <Form>
                            <div className="navbar__search-group d-none d-lg-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="O que você procura?"
                                />
                                <Button variant="link">
                                    <FontAwesomeIcon icon={faSearch} color="#FFF" />
                                </Button>
                            </div>
                        </Form>
                        <Link to="/">
                            <Button variant="outline-light" onClick={handleClick}>
                                Sair
                            </Button>
                        </Link>
                    </>
                )}

                {!logged && (
                    <>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#cartao">Cartão</Nav.Link>
                                <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                                <Nav.Link href="#faq">FAQ</Nav.Link>
                            </Nav>

                            <ButtonGroup aria-label="Basic example">
                                <Button variant="outline-light">
                                    <NavDropdown
                                        title="Acessar Minha Conta"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item>
                                            <Link to="./login">Pessoa Física</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link to="./login">Pessoa Jurídica</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Button>

                                <Button variant="outline-light" onClick={handleCreatAcc}>
                                    Abra sua Conta
                                </Button>
                            </ButtonGroup>
                        </Navbar.Collapse>
                    </>
                )}
            </Container>
        </Navbar>
    );
};

export default Navigation;
