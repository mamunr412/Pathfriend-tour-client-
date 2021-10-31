import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const GetFromOurs = () => {
    return (
        <div className="mt-5 " style={{ backgroundColor: "#e9f2f0" }}>
            <h1 className="text-center pt-5 mb-5">What You Get From Us</h1>
            <Container>
                <Row xs={1} md={3}>
                    <Col>
                        <div>
                            <h4>TAILORED TRIP FOR YOU
                            </h4>
                            <p>We can customize trip to all destingtion
                                as per our guest's requirements. You
                                have freedom to add days, places, foods
                                and activities as you wish.

                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>UNPARALLELED SUPPORT
                            </h4>
                            <p>Weather its day or night or windy
                                rainy
                                day or a hot summer day, we will be
                                there to provide any required support
                                ' that you need

                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>AFFORDABLE PRICING
                            </h4>
                            <p>initially you may argue with the price but
                                when you startyour tour you will find it
                                justified. If you are not happy
                                with us we
                                will refund you back.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>TOUR LAYOUT
                            </h4>
                            <p>
                                Before each tour with us, we will Share a
                                details tour itinerary with you so that you
                                get well prepared for the tour. We will be
                                committed to deliver the service 'as
                                specified in the outine

                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4> SECURITY & INSURANCE
                            </h4>
                            <p>
                                We consider
                                our guest security and
                                privacy with high priority which is one of
                                the most inevitable part of our service.
                                We also arrange travel insurance for our
                                guest of they are wiling to take one.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>SATISFACTION GUARANTEED</h4>
                            <p>
                                We make sure our guest get most our of
                                the tour has to offer and make
                                arrangement to make you satisfied.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetFromOurs;