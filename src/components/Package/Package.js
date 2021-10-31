import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const { img, name, country, price, description, _id
    } = props.offerpack;

    return (
        <div className="mt-5 package-container ">
            <Col>
                <Card>
                    <Card.Img style={{ height: "200px", backgroundSize: "cover", objectFit: "cover" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Country:{country} <br />
                            Price: {price} <br />
                            <small>{description.slice(0, 100)}</small>
                        </Card.Text>
                        <Link to={`/package/${_id}`} >
                            <Button variant="primary">Book Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Package;