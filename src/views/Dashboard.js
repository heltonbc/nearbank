import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.scss";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

const Dashboard = ({ className = false, name, account }) => {
    const [activeLink, setActiveLink] = useState(0);

    const links = [
        { text: "Minha conta", path: "/dashboard", exact: true },
        { text: "Pagamentos", path: "payments" },
        { text: "Extrato", path: "history" },
    ];
    const data = {
        latestBalance: [
            { date: "12/07", description: "POSTO COMBUSTÍVEL", value: "200,00" },
            { date: "12/07", description: "SAQUE 24H 012345", value: "300,00" },
            { date: "14/07", description: "MERCADO 02323626", value: "275,00" },
            { date: "14/07", description: "NETFLIX 235236", value: "59,00" },
            { date: "15/07", description: "LIVRARIA 123236", value: "59,00" },
            { date: "15/07", description: "SUPERMERCADO 48534", value: "200,00" },

            { date: "15/07", description: "PADARIA 54874", value: "150,00" },

            { date: "16/07", description: "FARMACIA 74874", value: "100,00" },

            { date: "17/07", description: "POSTO DE COMBUSTIVEL 74874", value: "250,00" },

            { date: "18/07", description: "MERCADO 74874", value: "400,00" },

            { date: "18/07", description: "PONTO DE ONIBUS 74874", value: "100,00" },

            { date: "18/07", description: "CONVENIENCIA 74874", value: "100,00" },

            { date: "19/07", description: "PARK SHOPPING 74874", value: "1000,00" },

            { date: "19/07", description: "CAFE DA MANHA 74874", value: "100,00" },

            { date: "19/07", description: "LANCHE DA TARDE 74874", value: "100,00" },

            { date: "20/07", description: "JANTAR 74874", value: "100,00" },

            { date: "20/07", description: "FEIRA LIVRE 74874", value: "200,00" },

            { date: "20/07", description: "SORVETERIA 74874", value: "100,00" },
        ],

        futureBalance: [
            { date: "12/07", description: "POSTO COMBUSTÍVEL", value: "200,00" },
            { date: "13/07", description: "SAQUE 24H 012345", value: "300,00" },
            { date: "14/07", description: "MERCADO 02323626", value: "275,00" },
            { date: "15/07", description: "LIVRARIA 354236", value: "59,00" },
            { date: "15/07", description: "SUPERMERCADO 48534", value: "200,00" },

            { date: "15/07", description: "PADARIA 54874", value: "150,00" },

            { date: "16/07", description: "FARMACIA 74874", value: "100,00" },

            { date: "17/07", description: "POSTO DE COMBUSTIVEL 74874", value: "250,00" },

            { date: "18/07", description: "MERCADO 74874", value: "400,00" },

            { date: "18/07", description: "PONTO DE ONIBUS 74874", value: "100,00" },

            { date: "18/07", description: "CONVENIENCIA 74874", value: "100,00" },

            { date: "19/07", description: "PARK SHOPPING 74874", value: "1000,00" },

            { date: "19/07", description: "CAFE DA MANHA 74874", value: "100,00" },

            { date: "19/07", description: "LANCHE DA TARDE 74874", value: "100,00" },

            { date: "20/07", description: "JANTAR 74874", value: "100,00" },

            { date: "20/07", description: "FEIRA LIVRE 74874", value: "200,00" },

            { date: "20/07", description: "SORVETERIA 74874", value: "100,00" },
        ],

        history: [
            {
                date: "17/07",
                description: "SAQUE 24H 012345",
                value: "200,00",
                saldo: "6.500,00",
            },

            {
                date: "19/07",
                description: "ESTACIONAMENTO 123234",
                value: "12,00",
                saldo: "6.288,00",
            },
            {
                date: "19/07",
                description: "LIVRARIA 123234",
                value: "450,00",
                saldo: "5.838,00",
            },
            {
                date: "21/07",
                description: "SUPERMERCADO 2312332",
                value: "275,90",
                saldo: "5.562,10",
            },
            {
                date: "21/07",
                description: "ESTACIONAMENTO 123234",
                value: "12,00",
                saldo: "5.550,10",
            },
            {
                date: "21/07",
                description: "SHOPPING 123432",
                value: "380,00",
                saldo: "5.170,10",
            },
            {
                date: "21/07",
                description: "CHURRASCARIA 123432",
                value: "180,00",
                saldo: "5.170,10",
            },
            {
                date: "22/07",
                description: "SUPERMERCADO 2312332",
                value: "275,90",
                saldo: "5.562,10",
            },
            {
                date: "22/07",
                description: "DEPÓSITO 123234",
                value: "1.000,00",
                saldo: "6.562,10",
            },
        ],
    };
    return (
        <Container className="py-5">
            <Row className="center">
                <Col xs={12} sm={6} md={6} lg={3} className="pt-4">
                    <Col>
                        <Col className="pb-2">
                            <span className="dashboard__user-avatar">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    color="#f8f9fa"
                                />
                                <FontAwesomeIcon
                                    className="dashboard__user-icon "
                                    icon={faUser}
                                    size="3x"
                                    color="#7c7d7d"
                                />
                            </span>
                        </Col>

                        <Row className="pb-5">
                            <h4>{name}</h4>
                            <p className="text-muted">{account}</p>
                        </Row>
                    </Col>

                    <Col className="d-grid">
                        {links.map(({ text, path }, key) => (
                            <Link className="dashboard__link" to={path} key={key}>
                                <Button
                                    className={`dashboard__button text-start w-100 ${
                                        key === activeLink
                                            ? "dashboard__button--active"
                                            : ""
                                    }`}
                                    variant="link"
                                    size="lg"
                                    block="true"
                                    onClick={() => setActiveLink(key)}
                                >
                                    {text}
                                </Button>
                            </Link>
                        ))}
                    </Col>
                </Col>

                <Routes>
                    <Route path="/" element={<AccountBalance data={data} />} />
                    <Route path="payments" element={<AccountPayments />} />
                    <Route path="history" element={<AccountHistory data={data} />} />
                </Routes>
            </Row>
        </Container>
    );
};

export default Dashboard;
