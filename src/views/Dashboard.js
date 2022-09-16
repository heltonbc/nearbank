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
        { text: "Minha conta", path: "/*", exact: true },
        { text: "Pagamentos", path: "payments" },
        { text: "Extrato", path: "history" },
    ];
    const data = {
        latestBalance: [
            { date: "22/07", description: "POSTO COMBÚSTIVEL", value: "200,00" },
            { date: "22/07", description: "SAQUE 24H 012345", value: "300,00" },
            { date: "21/07", description: "MERCADO 02323626", value: "275,00" },
            { date: "20/07", description: "NETFLIX 235236", value: "59,00" },
            { date: "15/07", description: "DROGARIA 12125", value: "150,00" },
        ],

        futureBalance: [
            { date: "22/07", description: "POSTO COMBÚSTIVEL", value: "200,00" },
            { date: "22/07", description: "SAQUE 24H 012345", value: "300,00" },
            { date: "21/07", description: "MERCADO 02323626", value: "275,00" },
            { date: "20/07", description: "NETFLIX 235236", value: "59,00" },
            { date: "15/07", description: "DROGARIA 12125", value: "150,00" },
        ],
        history: [
            {
                date: "17/07",
                description: "SAQUE 24H 012345",
                value: "200,00",
                saldo: "",
            },
            { date: "17/07", description: "SALDO DO DIA", value: "", saldo: "2.780,00" },
            {
                date: "19/07",
                description: "ESTACIONAMENTO 123234",
                value: "12,00",
                saldo: "",
            },
            {
                date: "19/07",
                description: "COMPRA INTERNET 123432",
                value: "450,00",
                saldo: "",
            },
            { date: "19/07", description: "SALDO DO DIA", value: "", saldo: "2.318,00" },
            {
                date: "21/07",
                description: "SUPERMERCADO 2312332",
                value: "275,90",
                saldo: "",
            },
            {
                date: "21/07",
                description: "ESTACIONAMENTO 123234",
                value: "12,00",
                saldo: "",
            },
            { date: "21/07", description: "SHOPPING 123432", value: "180,00", saldo: "" },
            { date: "21/07", description: "SAQUE DO DIA", value: "", saldo: "1.851,00" },
            {
                date: "22/07",
                description: "SUPERMERCADO 2312332",
                value: "275,90",
                saldo: "",
            },
            {
                date: "22/07",
                description: "DEPÓSITO 123234",
                value: "1.000,00",
                saldo: "",
            },
            { date: "22/07", description: "SALDO DO DIA", value: "", saldo: "2.576,00" },
        ],
    };
    return (
        <Container className="dashboard py-5">
            <Row>
                <Col xs={12} lg={4}>
                    <Row className="align-items-center mb-5">
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
                            <h4>{name}</h4>
                            <p className="text-muted">{account}</p>
                        </Col>
                    </Row>
                    {links.map(({ text, path }, key) => (
                        <Link className="dashboard__link" to={path} key={key}>
                            <Button
                                className={`dashboard__button text-left ${
                                    key === activeLink ? "dashboard__button--active" : ""
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
