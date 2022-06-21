import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

import "./Dashboard.scss";

const Dashboard = () => {
    const [activeLink, setActiveLink] = useState(0);

    const links = [
        { text: "Minha conta", path: "/dashboard", exact: true },
        { text: "Pagamentos", path: "payments" },
        { text: "Extrato", path: "history" },
    ];

    const data = {
        latestBalance: [
            { date: "22/07", description: "SAQUE 24H 012345", value: "300,00" },
            { date: "21/07", description: "SUPERMERCADO 2312332", value: "523,00" },
            { date: "21/07", description: "ESTACIONAMENTO 123234", value: "20,00" },
            { date: "21/07", description: "PAGAMENTO ALUGUEL 123432", value: "1.300,00" },
        ],

        futureBalance: [
            { date: "22/08", description: "SALARIO 012345", value: "3000,00" },
            { date: "21/08", description: "PARC10/30 2312332", value: "523,00" },
            { date: "21/08", description: "FARMACIA 123234", value: "120,00" },
        ],

        history: [
            {
                date: "22/08",
                description: "SALARIO 012345",

                balance: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",
                value: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",

                balance: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",
                value: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",

                balance: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",
                value: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",

                balance: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",
                value: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",

                balance: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",
                value: "3000,00",
            },
            {
                date: "22/08",
                description: "SALARIO 012345",

                balance: "3000,00",
            },
            {
                date: "22/08",
                description: "SALDO DO DIA",
                balance: "3000,00",
            },
        ],
    };

    return (
        <Container className="dashboard py-5">
            <Row>
                <Col xs={12} lg={4}>
                    <Row className="d-flex align-items-center mb-5">
                        <Col xs={3}>
                            <span className="dashboard__user-avatar">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    color="#f8f9fa"
                                />
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
                    {links.map(({ text, path }, key) => (
                        <Link className="dashboard__link d-block" to={path} key={key}>
                            <Button
                                className={`dashboard__button text-left' ${
                                    key === activeLink ? "dashboard__button--active" : ""
                                }`}
                                variant="link"
                                size="lg"
                                block
                                onClick={() => setActiveLink(key)}
                            >
                                {text}
                            </Button>
                        </Link>
                    ))}
                </Col>
                <Routes>
                    <Route path="/" element={<AccountBalance data={data} />} />

                    <Route path="/payments" element={<AccountPayments />} />

                    <Route path="/history" element={<AccountHistory data={data} />} />
                </Routes>
            </Row>
        </Container>
    );
};

export default Dashboard;
