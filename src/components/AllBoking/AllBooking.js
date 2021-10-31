import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const AllBooking = () => {
    const [allBooking, setAllBooking] = useState([]);

    useEffect(() => {
        fetch('https://eerie-corpse-05166.herokuapp.com/getoffer')
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [allBooking]);

    // delete booking 
    const handelDeleted = (_id) => {
        fetch(`https://eerie-corpse-05166.herokuapp.com/deletebooking/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application.json"
            }
        })
            .then(res => res.json())
            .then(data => {
                const processed = window.confirm("Are You Sure To Delete t")
                if (processed) {
                    if (data.deletedCount) {
                        alert("Delete successfully")
                        const remaning = allBooking.filter(sBook => sBook._id !== _id)
                        setAllBooking(remaning)
                    }
                }
            });
    }
    // approve the package 
    const handelApprove = (_id) => {
        fetch(`https://eerie-corpse-05166.herokuapp.com/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Package Approved")
                }
            })
    }


    return (
        <div>
            <Container >
                <Row xs={1} md={3}>
                    {allBooking.map(booking => <div key={booking._id}>
                        <Col  >
                            <Card style={{ height: "420px", width: "300px" }}
                                className="mt-5 card">
                                <Card.Img style={{ height: "200px", backgroundSize: "cover", objectFit: "cover" }} variant="top" src={booking.pack.img} />
                                <Card.Body>
                                    <Card.Title>{booking.pack.name}</Card.Title>
                                    <Card.Text>
                                        Name : {booking.name}
                                        <br />
                                        Email : {booking.email}
                                        <br />
                                        Join date : {booking.Date}
                                        <br />
                                        Address : {booking.Address}
                                        <br />
                                        Phone : {booking.phone}
                                        <br />
                                        Status : {booking.status}
                                    </Card.Text>
                                    <div className="d-flex " >
                                        <Button onClick={() => handelDeleted(booking._id)} variant="primary" style={{ marginRight: "10px" }} variant="danger">Delete</Button>

                                        <Button onClick={() => handelApprove(booking._id)} variant="primary">Approved</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </div>)}

                </Row>

            </Container >
        </div >
    );
};

export default AllBooking;