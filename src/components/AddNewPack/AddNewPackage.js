import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddNewPack.css'

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://eerie-corpse-05166.herokuapp.com/package', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Package Added');
                    reset()
                }


            })
    };

    return (
        <div style={{ backgroundColor: "#f8fafc" }}>
            <Container>
                <Row>
                    <h1 className="text-center mt-5">Add A New Tour Package</h1>
                    <Col className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="addpack-from">

                            <input  {...register("name")} placeholder="Enter package name" />

                            <input  {...register("country")} placeholder="Enter package country" />
                            <input  {...register("price")} placeholder="Enter package price" />
                            <input  {...register("description")} placeholder="Enter package description" />
                            <input {...register("img", { required: true })} placeholder="Enter image url" />

                            <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddNewPackage;