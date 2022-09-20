import React from "react";
import { Col, Row } from "react-bootstrap";
import "./FooterLinks.scss";

const links = [
    {
        label: "Sobre nós",
        url: "/app",
    },
    {
        label: "Carreiras",
        url: "/",
    },
    {
        label: "Perguntas frequentes",
        url: "/Index",
    },
    {
        label: "Contato",
        url: "/Index",
    },
    {
        label: "Imprensa",
        url: "/Index",
    },
    {
        label: "Investidores",
        url: "/Index",
    },
];

const produtcs = [
    {
        label: "Conta digital",
        url: "/Index",
    },
    {
        label: "Cartão de crédito",
        url: "/Index",
    },
    {
        label: "Empréstimo",
        url: "/Index",
    },
    {
        label: "Conta PJ",
        url: "/Index",
    },
    {
        label: "Cartão de crédito PJ",
        url: "/Index",
    },
    {
        label: "Investimentos",
        url: "/Index",
    },
];

const explore = [
    {
        label: "Comunidade",
        url: "/Index",
    },
    {
        label: "Blog",
        url: "/Index",
    },
    {
        label: "near InvestNews",
        url: "/Index",
    },
    {
        label: "Newsletter",
        url: "/Index",
    },
    {
        label: "North America",
        url: "/Index",
    },
    {
        label: "Europe Countries",
        url: "/Index",
    },
];

const seeToo = [
    {
        label: "Auxílio emergencial e FGTS",
        url: "/Index",
    },
    {
        label: "Tudo sobre o Pix",
        url: "/Index",
    },
    {
        label: "Fornecedores",
        url: "/Index",
    },
];

const transparency = [
    {
        label: "Política de privacidade",
        url: "/Index",
    },
    {
        label: "Política de compliance",
        url: "/Index",
    },
    {
        label: "Política de segurança",
        url: "/Index",
    },
    {
        label: "Contratos",
        url: "/Index",
    },
    {
        label: "Relatórios financeiros",
        url: "/Index",
    },
    {
        label: "Ética e compliance",
        url: "/Index",
    },

    {
        label: "Dados abertos",
        url: "/Index",
    },

    {
        label: "SCR",
        url: "/Index",
    },

    {
        label: "Convenção de boletos",
        url: "/Index",
    },
];

const ombudsman = [
    {
        label: "0800 887 0463",
        url: "/Index",
    },
    {
        label: "ouvidoria@nearbank.com.br",
        url: "/Index",
    },
    {
        label: "Atendimento das 9h às 18h (dias úteis)",
        url: "/Index",
    },
];

const talkToUs = [
    {
        label: "0800 608 6236",
        url: "/Index",
    },
    {
        label: "meajuda@nearbank.com.br",
        url: "/Index",
    },
    {
        label: "Atendimento 24h",
        url: "/Index",
    },
];

const ourAgencies = [
    {
        label: "Brasília",
        url: "/Index",
    },
    {
        label: "São Paulo",
        url: "/Index",
    },
    {
        label: "Rio de Janeiro",
        url: "/Index",
    },

    {
        label: "Florianópolis",
        url: "/Index",
    },

    {
        label: "Belo Horizonte",
        url: "/Index",
    },

    {
        label: "Curitiba",
        url: "/Index",
    },

    {
        label: "Porto Alegre",
        url: "/Index",
    },

    {
        label: "Ver mais",
        url: "/Index",
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
                    <h5>
                        Somos um banco digital mas também contamos com algumas agências
                        confira abaixo a lista das cidades.
                    </h5>
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
