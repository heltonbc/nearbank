import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitter,
    faYoutube,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/nearbankLogo.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";

import "./Footer.scss";

const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className="text-center py-5 d-flex align-items-center">
                <Col xs={12} lg={3} className="text-lg-left mb-5 mb-lg-0">
                    <Image src={logo} />
                </Col>
                <Col xs={12} lg={6} className="mb-5 mb-lg-0">
                    <a
                        href="https://www.apple.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={applestore} className="ms-2" />
                    </a>
                    <a
                        href="https://play.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={googleplay} className="ms-2" />
                    </a>
                </Col>
                <Col xs={12} lg={3}>
                    <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                    >
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            color="#F4F4F4"
                            size="2x"
                        />
                    </a>

                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            color="#F4F4F4"
                            size="2x"
                            className="me-2"
                        />
                    </a>
                    <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faYoutube}
                            color="#F4F4F4"
                            size="2x"
                            className="me-2"
                        />
                    </a>
                    <a
                        href="https://discordapp.com/users/0569"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faDiscord} color="#F4F4F4" size="2x" />
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
