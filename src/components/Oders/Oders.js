import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/UseAuth';

const Oders = () => {
    const [oders, setOders] = useState([])
    const { user } = useAuth();
    const userEmail = user.email;


    useEffect(() => {
        fetch(`https://eerie-corpse-05166.herokuapp.com/getoffer/${userEmail}`)
            .then(res => res.json())
            .then(data => setOders(data))
    }, [userEmail, oders])

    // delete package 
    const bookingDelete = (_id) => {


        fetch(`https://eerie-corpse-05166.herokuapp.com/deleteMyBooking/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application.json"
            }
        })
            .then(res => res.json())
            .then(data => {

                const deleted = window.confirm("Are You Sure To Deleted it")
                if (deleted) {
                    if (data.deletedCount) {
                        alert("Delete successfully")

                    }
                }
            })
    }

    return (
        <div>
            <Container >
                <Row xs={1} md={3} >
                    {oders.map(oder => <div key={oder._id} style={{ height: "450px", width: "300px" }}>
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
                                    <Button onClick={() => bookingDelete(oder._id)} variant="primary" style={{ marginRight: "10px" }} variant="danger">Cancel</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    )}

                </Row>

            </Container >

        </div >
    );
};

export default Oders;