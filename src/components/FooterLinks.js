import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FooterLinks.scss";
/* import AppRouter from "../components/AppRouter"; */

const links = [
    {
        label: "Sobre nós",
        url: "#institutional",
    },
    {
        label: "Carreiras",
        url: "#routeOrID",
    },
    {
        label: "Perguntas frequentes",
        url: "#faq",
    },
    {
        label: "Contato",
        url: "#routeOrID",
    },
    {
        label: "Imprensa",
        url: "#routeOrID",
    },
    {
        label: "Investidores",
        url: "#routeOrID",
    },
];

const produtcs = [
    {
        label: "Conta digital",
        url: "#cardlist",
    },
    {
        label: "Cartão de crédito",
        url: "#creditcard",
    },
    {
        label: "Empréstimo",
        url: "#routeOrID",
    },
    {
        label: "Conta PJ",
        url: "#routeOrID",
    },
    {
        label: "Cartão de crédito PJ",
        url: "#routeOrID",
    },
    {
        label: "Investimentos",
        url: "#routeOrID",
    },
];

const explore = [
    {
        label: "Comunidade",
        url: "#institutional",
    },
    {
        label: "Blog",
        url: "#routeOrID",
    },
    {
        label: "near InvestNews",
        url: "#routeOrID",
    },
    {
        label: "Newsletter",
        url: "#routeOrID",
    },
    {
        label: "North America",
        url: "#routeOrID",
    },
    {
        label: "Europe Countries",
        url: "#routeOrID",
    },
];

const seeToo = [
    {
        label: "Auxílio emergencial e FGTS",
        url: "#routeOrID",
    },
    {
        label: "Tudo sobre o Pix",
        url: "#routeOrID",
    },
    {
        label: "Fornecedores",
        url: "#routeOrID",
    },
];

const transparency = [
    {
        label: "Política de privacidade",
        url: "#routeOrID",
    },
    {
        label: "Política de compliance",
        url: "#routeOrID",
    },
    {
        label: "Política de segurança",
        url: "#routeOrID",
    },
    {
        label: "Contratos",
        url: "#routeOrID",
    },
    {
        label: "Relatórios financeiros",
        url: "#routeOrID",
    },
    {
        label: "Ética e compliance",
        url: "#routeOrID",
    },

    {
        label: "Dados abertos",
        url: "#routeOrID",
    },

    {
        label: "SCR",
        url: "#routeOrID",
    },

    {
        label: "Convenção de boletos",
        url: "#routeOrID",
    },
];

const ombudsman = [
    {
        label: "0800 887 0463",
        url: "#routeOrID",
    },
    {
        label: "ouvidoria@nearbank.com.br",
        url: "#routeOrID",
    },
    {
        label: "Atendimento das 9h às 18h (dias úteis)",
        url: "#routeOrID",
    },
];

const talkToUs = [
    {
        label: "0800 608 6236",
        url: "#routeOrID",
    },
    {
        label: "meajuda@nearbank.com.br",
        url: "#routeOrID",
    },
    {
        label: "Atendimento 24h",
        url: "#routeOrID",
    },
];

const ourAgencies = [
    {
        label: "Brasília",
        url: "#routeOrID",
    },
    {
        label: "São Paulo",
        url: "#routeOrID",
    },
    {
        label: "Rio de Janeiro",
        url: "#routeOrID",
    },

    {
        label: "Florianópolis",
        url: "#routeOrID",
    },

    {
        label: "Belo Horizonte",
        url: "#routeOrID",
    },

    {
        label: "Curitiba",
        url: "#routeOrID",
    },

    {
        label: "Porto Alegre",
        url: "#routeOrID",
    },

    {
        label: "Ver mais",
        url: "#routeOrID",
    },
];

function FooterLinks() {
    return (
        <Row className="footerLinks">
            <Row>
                <Col>
                    {/* lista nearBank */}

                    <h3>nearBank</h3>
                    <ul>
                        {links.map(link => (
                            <li key={link.label}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    {/* lista Produtos */}

                    <h3>Produtos</h3>
                    <ul>
                        {produtcs.map(link => (
                            <li key={link.label}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    {/* lista explore */}

                    <h3>Explore</h3>
                    <ul>
                        {explore.map(link => (
                            <li key={link.label}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    {/* lista Veja também */}

                    <h3>Veja também</h3>
                    <ul>
                        {seeToo.map(link => (
                            <li key={link.label}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* lista Transparência */}

                    <h3>Transparência</h3>
                    <ul>
                        {transparency.map(link => (
                            <li key={link.label}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    {/* lista Ouvidoria */}

                    <h3>Ouvidoria</h3>
                    <ul>
                        {ombudsman.map(link => (
                            <li key={link.label}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    {/* lista Fale com a gente */}

                    <h3>Fale com a gente</h3>
                    <ul>
                        {talkToUs.map(link => (
                            <li key={link.label}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    {/* lista Agencias */}

                    <h3>Nossas Agências</h3>
                    <h6>
                        Somos um banco digital mas também contamos com algumas agências
                        confira abaixo a lista das cidades.
                    </h6>
                    <ul>
                        {ourAgencies.map(link => (
                            <li key={link.label}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Row>
    );
}

export default FooterLinks;
