import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const CenteredButton = ({ children, onClick }) => (
    <Container>
        <Row>
            <div className="d-flex justify-content-center">
                <Button
                    color="#fff"
                    className="my-5 px-5 py-3 btn-color"
                    variant="success"
                    size="lg"
                    onClick={onClick}
                >
                    {children}
                </Button>
            </div>
        </Row>
    </Container>
);

export default CenteredButton;
