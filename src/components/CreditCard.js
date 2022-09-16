import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
    faCreditCard,
    faMobile,
    faShoppingCart,
    faWallet,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import simplecardfront from "../assets/simplecardfront.svg";
import simplecardback from "../assets/simplecardback.svg";
import blackcardfront from "../assets/blackcardfront.svg";
import blackcardback from "../assets/blackcardback.svg";
import "./CreditCard.scss";

const CreditCard = () => (
    <Container className="my-5">
        <Row>
            <Col xs={12} lg={12} className="mb-5 mb-lg-0 px-5 px-lg-0">
                <Row>
                    <h2 className="my-5 credit-card-title">
                        <strong>Cartão de crédito e Débido</strong>
                    </h2>
                </Row>
                <Row>
                    <Col xs={12} lg={3} className="mb-4">
                        <IconText
                            icon={faCreditCard}
                            size={2}
                            color="#f05656"
                            textClassName="h5 text-muted"
                        >
                            Crédito Pessoal
                        </IconText>
                    </Col>
                    <Col xs={12} lg={3} className="mb-4">
                        <IconText
                            icon={faMobile}
                            size={2}
                            color="#f05656"
                            textClassName="h5 text-muted"
                        >
                            APP
                        </IconText>
                    </Col>
                    <Col xs={12} lg={3} className="mb-4">
                        <IconText
                            icon={faShoppingCart}
                            size={2}
                            color="#f05656"
                            textClassName="h5 text-muted"
                        >
                            Pagamentos Online
                        </IconText>
                    </Col>
                    <Col xs={12} lg={3} className="mb-4">
                        <IconText
                            icon={faWallet}
                            size={2}
                            color="#f05656"
                            textClassName="h5 text-muted"
                        >
                            Pagamento Digital
                        </IconText>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col xs={12} lg={3}>
                <Image src={simplecardfront} alt="nearbank Credit Card Example" fluid />
            </Col>
            <Col xs={12} lg={3}>
                <Image src={simplecardback} alt="nearbank Credit Card Example" fluid />
            </Col>
            <Col xs={12} lg={3}>
                <Image src={blackcardfront} alt="nearbank Credit Card Example" fluid />
            </Col>
            <Col xs={12} lg={3}>
                <Image src={blackcardback} alt="nearbank Credit Card Example" fluid />
            </Col>
        </Row>
    </Container>
);

export default CreditCard;
