import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/UseAuth';
import MyBooking from '../MyBooking/MyBooking';


const Oders = () => {
    const [oders, setOders] = useState([])
    const { user } = useAuth();
    const userEmail = user.email;


    useEffect(() => {
        fetch(`https://eerie-corpse-05166.herokuapp.com/getoffer/${userEmail}`)
            .then(res => res.json())
            .then(data => setOders(data))
    }, [userEmail])


    return (
        <div>
            <Container >
                <Row xs={1} md={3} >
                    {oders.map(oder => <MyBooking
                        key={oder._id}
                        oder={oder}
                    ></MyBooking>
                    )}

                </Row>

            </Container >

        </div >
    );
};

export default Oders;