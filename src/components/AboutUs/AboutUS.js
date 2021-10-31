import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUS = () => {
    return (
        <div className="mt-5" style={{ backgroundColor: "#daebe8" }}>
            <Container>
                <Row>
                    <Col>
                        <div className="mt-3 mb-5">
                            <h1 className="text-center" style={{ color: "#25b04b" }}>Pathfriend</h1>
                            <h4 className="text-center" >A leading Tour Operator </h4>
                            <p>Pathfriend Tour Operator is an award winning local tour operator & your travel solution in Bangladesh determined to provide a unique and satisfying travel experience. Our high qualified services, comfortable tour planning, guides with spacious knowledge of local information and the affordable price will make your trip enjoyable and special. If you want to explore Bangladesh completely rich, we are here with experiences to make it memorable.</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUS;