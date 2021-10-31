import React from 'react';
import { Card, Col } from 'react-bootstrap';


const MyBooking = ({ oder }) => {
    return (
        <div style={{ height: "450px", width: "300px" }}>
            <Col >
                <Card>
                    <Card.Img variant="top" src={oder.pack.img} style={{ height: "200px", backgroundSize: "cover", objectFit: "cover" }} />
                    <Card.Body>
                        <Card.Title>{oder.pack.name}</Card.Title>
                        <Card.Text>
                            Name : {oder.name}
                            <br />
                            Email : {oder.email}
                            <br />
                            Join date : {oder.Date}
                            <br />
                            Address : {oder.Address}
                            <br />
                            Phone : {oder.phone}
                            <br />
                            Status : {oder.status}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MyBooking;