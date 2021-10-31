import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './SinglePack.css'
import useAuth from '../Hooks/UseAuth';

const SinglePack = () => {
    const { id } = useParams();
    const [SinglePackage, setSinglePAckage] = useState({})
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://eerie-corpse-05166.herokuapp.com/package/${id}`)
            .then(res => res.json())
            .then(data => setSinglePAckage(data))

    }, []);

    const onSubmit = data => {
        const book = data
        book.status = "Pending"
        book.pack = SinglePackage

        fetch('https://eerie-corpse-05166.herokuapp.com/jointour', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking Confirmed')
                    reset()
                }
            })

    };

    return (
        <div className="mt-5  ">
            <Container className="d-flex justify-content-center " >
                <Row >
                    <Col >
                        <Card style={{ width: '20rem', }} >
                            <Card.Img style={{ height: "200px", backgroundSize: "cover", objectFit: "cover" }} variant="top" src={SinglePackage.img} />
                            <Card.Body>
                                <Card.Title>{SinglePackage.name}</Card.Title>
                                <Card.Text>
                                    Country : {SinglePackage.country}
                                    <br />
                                    Price: {SinglePackage.price}
                                    <br />
                                    <small>{SinglePackage.description}</small>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <h1 className="mt-4 text-center">Book Your Package</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="from mt-5">
                            <input  {...register("name")} placeholder="your name" />
                            <br />
                            <input  {...register("phone")} placeholder="phone number" />
                            <br />
                            <input defaultValue={user.email} {...register("email")} placeholder="Email" />
                            <br />

                            <input {...register("Address", { required: true })} placeholder="Address" />
                            <br />
                            <input {...register("Date", { required: true })} placeholder="dd/mm/year" />
                            <br />

                            <input type="submit" />
                        </form></Col>
                </Row>
            </Container>


        </div>
    );
};

export default SinglePack;


// 